angular.module("umbraco").controller("UmbracoForms.EditTypes.CheckboxListController", function ($scope, formService) {
  var vm = this;

  vm.value = formService.getSelectedPrevalues($scope.detail.fieldPreValues, $scope.detail.value);

  vm.isChecked = function (preValue) {
    return vm.value.indexOf(preValue.value) > -1;
  };

  vm.change = function (selectedPreValue) {
    if (vm.value.includes(selectedPreValue.value)) {
      // Remove the selected prevalue.
      vm.value = vm.value.filter(function (e) {
        return e !== selectedPreValue.value;
      });
    } else {
      // Add the selected prevalue, making sure it's in the right order.
      var newValue = [];
      for (var i = 0; i < $scope.detail.fieldPreValues.length; i++) {
        var fieldPreValue = $scope.detail.fieldPreValues[i];
        if (selectedPreValue.value === fieldPreValue.value) {
          newValue.push(selectedPreValue.value);
        } else if (vm.value.includes(fieldPreValue.value)) {
          newValue.push(fieldPreValue.value);
        }
      }

      vm.value = newValue;
    }

    $scope.detail.value = vm.value.join(", ");
    $scope.detail.multipleValuesSaved = true;
  };
});

angular.module("umbraco").controller("UmbracoForms.EditTypes.CheckboxController", function ($scope) {
  var vm = this;
  vm.checked = $scope.detail.value.toLowerCase() === "true";

  vm.change = function () {
    vm.checked = !vm.checked;
    $scope.detail.value = vm.checked ? "True" : "False";
  };
});

angular.module("umbraco").controller("UmbracoForms.EditTypes.DateController", function ($scope) {
  var vm = this;

  if ($scope.detail.value) {
    vm.value = new Date($scope.detail.value);
  }

  vm.change = function () {
    $scope.detail.value = vm.value.toISOString().substring(0, 10);
  };
});

angular.module("umbraco").controller("UmbracoForms.EditTypes.DropDownMultipleController", function ($scope) {
  var vm = this;
  vm.value = $scope.detail.value.split(", ");

  vm.change = function () {
    $scope.detail.value = vm.value.join(", ");
    $scope.detail.multipleValuesSaved = true;
  };
});

angular.module("umbraco").controller("UmbracoForms.EditTypes.RadioButtonListController", function ($scope) {
  var vm = this;
  vm.value = $scope.detail.value;

  vm.change = function () {
    $scope.detail.value = vm.value;
  };
});

angular.module("umbraco").controller("UmbracoForms.RenderTypes.DateController", function ($scope) {
  $scope.formatDate = function (date) {
    if (date) {
      return new Date(date);
    }

    return null;
  };
});

angular.module("umbraco").controller("UmbracoForms.RenderTypes.FileController", function ($scope) {
  var imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];

  $scope.files = [];
  if ($scope.field) {
    $scope.files = $scope.field.replace('~', '').split(',');
  }

  $scope.isImage = function (filepath) {
    return imageExts.indexOf($scope.getExtension(filepath)) >= 0;
  };

  $scope.getExtension = function (filepath) {
    return filepath.substring(filepath.lastIndexOf(".") + 1).toLowerCase();
  };

  $scope.getFileName = function (filepath) {
    return filepath.substring(filepath.lastIndexOf("/") + 1);
  };

  $scope.getPreview = function (filepath) {
    return filepath.replace('~', '') + "?width=400";
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.DocumentMapperController", function ($scope, $routeParams, pickerResource) {
  if ($scope.setting.value) {
    var value = JSON.parse($scope.setting.value);
    $scope.doctype = value.doctype;
    $scope.nameField = value.nameField;
    $scope.nameStaticValue = value.nameStaticValue;

    // Need to merge the fields (fetch everytime we load in case of renames or new properties added or removed)
    pickerResource.updateMappedProperties($scope.doctype, value.properties).then(function (response) {
      $scope.properties = response.data;
    });
  }

  pickerResource.getAllDocumentTypesWithAlias().then(function (response) {
    $scope.doctypes = response.data;
  });

  pickerResource.getAllFields($routeParams.id).then(function (response) {
    $scope.fields = response.data;
  });

  $scope.setDocType = function () {
    pickerResource.getAllProperties($scope.doctype).then(function (response) {
      $scope.properties = response.data;
    });
  };

  $scope.setValue = function () {
    var val = {};
    val.doctype = $scope.doctype;
    val.nameField = $scope.nameField;
    val.nameStaticValue = $scope.nameStaticValue;
    val.properties = $scope.properties;

    $scope.setting.value = JSON.stringify(val);
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.EmailTemplatePicker", function ($scope, pickerResource, editorService) {
  $scope.openTreePicker = function () {
    editorService.treePicker({
      treeAlias: "emailTemplates",
      section: "forms",
      entityType: "email-template",
      multiPicker: false,
      onlyInitialized: false,
      select: function (node) {
        pickerResource.getVirtualPathForEmailTemplate(node.id).then(function (response) {
          // Set the picked template file path as the setting value
          $scope.setting.value = response.data.path;
        });

        editorService.close();
      },
      close: function (model) {
        editorService.close();
      }
    });
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.FieldMapperController", function ($scope, $routeParams, pickerResource) {
  if (!$scope.setting.value) {
    $scope.mappings = [];
  } else {
    $scope.mappings = JSON.parse($scope.setting.value);
  }

  var formId = $routeParams.id;
  if (formId !== -1 || !$scope.model || !$scope.model.fields) {
    pickerResource.getAllFields($routeParams.id).then(function (response) {
      $scope.fields = response.data;
    });
  }

  $scope.addMapping = function () {
    $scope.mappings.push({
      alias: "",
      value: "",
      staticValue: ""
    });
  };

  $scope.deleteMapping = function (index) {
    $scope.mappings.splice(index, 1);
    $scope.setting.value = JSON.stringify($scope.mappings);
  };

  $scope.stringifyValue = function () {
    $scope.setting.value = JSON.stringify($scope.mappings);
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.FileUpload", function ($scope, Upload, notificationsService) {
  var vm = this;
  vm.isUploading = false;
  vm.filePercentage = 0;
  vm.savedPath = $scope.setting.value;

  vm.uploadFile = function (file) {
    Upload.upload({
      url: "backoffice/UmbracoForms/PreValueFile/PostAddFile",
      fields: {
        'previousPath': vm.savedPath
      },
      file: file
    }).progress(function (evt) {
      // Set uploading status on file
      vm.isUploading = true;

      // Calculate progress in percentage
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total, 10);

      // Set percentage property on file
      vm.filePercentage = progressPercentage;
    }).success(function (data, status, headers, config) {
      // Set the path for the PreValue setting & will get saved into the JSON
      $scope.setting.value = data.FilePath;
      vm.savedPath = data.FilePath;

      // Reset
      vm.isUploading = false;
      vm.filePercentage = 0;
    }).error(function (evt, status, headers, config) {
      // Loop over notifications from response from API to show them
      if (angular.isArray(evt.notifications)) {
        for (var i = 0; i < evt.notifications.length; i++) {
          notificationsService.showNotification(evt.notifications[i]);
        }
      }

      // Reset
      vm.isUploading = false;
      vm.filePercentage = 0;
    });
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.File", function ($scope, editorService) {
  $scope.openMediaPicker = function () {
    editorService.mediaPicker({
      submit: function (model) {
        $scope.setting.value = model.selection[0].image;

        editorService.close();
      },
      close: function () {
        editorService.close();
      }
    });
  };

  $scope.clear = function () {
    $scope.setting.value = undefined;
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.NumericFieldController", function ($scope) {
  var vm = this;

  // The prevalues setting is a string array in order: Min, Max, Default Value
  vm.min = parseFloat($scope.setting.prevalues[0]);
  vm.max = parseFloat($scope.setting.prevalues[1]);
  var defaultValue = parseFloat($scope.setting.prevalues[2]);

  // Set the provided default value
  if (!$scope.setting.value) {
    $scope.setting.value = defaultValue;
  }

  // Ensure we have a number
  vm.value = parseFloat($scope.setting.value);

  vm.change = function () {
    // Convert it back to a string, handling the case where the value has been cleared.
    $scope.setting.value = vm.value ? vm.value.toString() : "";
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.CheckboxController", function ($scope) {
  var vm = this;
  vm.checked = false;

  // Prevalues are a single element, containing a boolean value as a string, indicating whether the default value
  // when no setting is applied should be "checked".
  var defaultToTrue = $scope.setting.prevalues.length > 0 && $scope.setting.prevalues[0] === 'true' ? true : false;
  if (defaultToTrue) {
    vm.checked = $scope.setting.value !== 'False';
  } else {
    vm.checked = $scope.setting.value === 'True';
  }

  vm.toggle = function () {
    vm.checked = !vm.checked;

    if (vm.checked) {
      $scope.setting.value = 'True';
    } else {
      $scope.setting.value = 'False';
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.ConnectionStringController", function ($scope, pickerResource) {
  pickerResource.getAllConnectionStrings().then(function (response) {
    $scope.strings = response.data;
  });
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.ContentController", function ($scope, editorService, entityResource, iconHelper) {
  if (!$scope.setting) {
    $scope.setting = {};
  }

  var val = parseInt($scope.setting.value);
  if (!isNaN(val) && angular.isNumber(val)) {
    $scope.showQuery = false;

    entityResource.getById($scope.setting.value, "Document").then(function (item) {
      item.icon = iconHelper.convertFromLegacyIcon(item.icon);
      $scope.node = item;
    });
  }

  $scope.openContentPicker = function () {
    editorService.contentPicker({
      submit: function (model) {
        var item = model.selection[0];

        // Populate
        $scope.clear();
        item.icon = iconHelper.convertFromLegacyIcon(item.icon);
        $scope.node = item;
        $scope.id = item.id;
        $scope.setting.value = item.id;

        editorService.close();
      },
      close: function () {
        editorService.close();
      }
    });
  };

  $scope.clear = function () {
    $scope.id = undefined;
    $scope.node = undefined;
    $scope.setting.value = undefined;
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.ContentWithXpathController", function ($scope, editorService, entityResource, iconHelper) {
  function valueIsEntityId(value) {
    // Check we have a positive integer.
    return /^([1-9]\d*)$/.test(value);
  }

  $scope.queryIsVisible = false;
  $scope.helpIsVisible = false;
  $scope.query = "";

  if (!$scope.setting) {
    $scope.setting = {};
  }

  if (valueIsEntityId($scope.setting.value)) {
    entityResource.getById($scope.setting.value, "Document").then(function (item) {
      item.icon = iconHelper.convertFromLegacyIcon(item.icon);
      $scope.node = item;
    });
  } else if ($scope.setting.value) {
    $scope.queryIsVisible = true;
    $scope.query = $scope.setting.value;
  }

  $scope.openContentPicker = function () {
    editorService.contentPicker({
      submit: function (model) {
        var item = model.selection[0];

        // Populate
        $scope.clear();
        item.icon = iconHelper.convertFromLegacyIcon(item.icon);
        $scope.node = item;
        $scope.id = item.id;
        $scope.setting.value = item.id;

        editorService.close();
      },
      close: function () {
        editorService.close();
      }
    });
  };

  $scope.showQuery = function () {
    $scope.queryIsVisible = true;
  };

  $scope.toggleHelp = function () {
    $scope.helpIsVisible = !$scope.helpIsVisible;
  };

  $scope.setXpath = function () {
    $scope.setting.value = $scope.query;
  };

  $scope.clear = function () {
    $scope.id = undefined;
    $scope.node = undefined;
    $scope.setting.value = undefined;
    $scope.query = undefined;
    $scope.queryIsVisible = false;
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.DataTypeController", function ($scope, pickerResource) {
  pickerResource.getAllDataTypes().then(function (response) {
    $scope.datatypes = response.data;
  });
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.Pickers.DocumentTypeController", function ($scope, pickerResource) {
  pickerResource.getAllDocumentTypesWithAlias().then(function (response) {
    $scope.doctypes = response.data;
  });
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.RangeController", function ($scope) {
  var vm = this;

  function getDecimalPlaces(value) {
    // Hat-tip: https://stackoverflow.com/a/17369245/489433
    if (Math.floor(value) === value) {
      return 0;
    }

    return value.toString().split(".")[1].length || 0;
  }

  // The prevalues setting is a string array in order: Min, Max, Step, Default Value
  var min = parseFloat($scope.setting.prevalues[0]);
  var max = parseFloat($scope.setting.prevalues[1]);
  var step = parseFloat($scope.setting.prevalues[2]);
  var defaultValue = parseFloat($scope.setting.prevalues[3]);
  var stepDecimalPlaces = getDecimalPlaces(step);

  // Set the provided default value
  if (!$scope.setting.value) {
    $scope.setting.value = defaultValue;
  }

  // Ensure we have a number
  vm.value = parseFloat($scope.setting.value);

  vm.sliderOptions = {
    start: [vm.value],
    step: step,
    tooltips: [true],
    format: {
      to: function (value) {
        return value.toFixed(stepDecimalPlaces);
      },
      from: function (value) {
        return Number(value);
      }
    },
    range: {
      min: min,
      max: max,
    },
    pips: {
      mode: "steps",
      density: 100,
      format: {
        to: function (value) {
          return value.toFixed(stepDecimalPlaces);
        },
        from: function (value) {
          return Number(value);
        }
      },
    }
  };

  vm.change = function (values) {
    // Convert it back to a string anytime the range slider value changed.
    // We're only supporting a single value, so as value provided is an array, we just take the first value.
    $scope.setting.value = values[0].toString();
  };
});

angular.module("umbraco").controller("UmbracoForms.SettingTypes.StandardFieldMapperController", function ($scope) {
  // Add standard mappings. We could add more to these after the intial release, so will make sure to
  // check each one to see if exists from the saved setting value.
  // Should include all defined in Umbraco.Forms.Core.Providers.Models.StandardFieldMapping
  function hasMapping(mappings, fieldName) {
    return mappings.filter(function (e) {
      return e.field === fieldName;
    }).length > 0;
  }

  function ensureDefaultMapping(mappings, fieldName) {
    if (!hasMapping($scope.mappings, fieldName)) {
      mappings.push({
        field: fieldName
      });
    }
  }

  if (!$scope.setting.value) {
    $scope.mappings = [];
  } else {
    $scope.mappings = JSON.parse($scope.setting.value);
  }

  ensureDefaultMapping($scope.mappings, "FormId");
  ensureDefaultMapping($scope.mappings, "FormName");
  ensureDefaultMapping($scope.mappings, "PageUrl");
  ensureDefaultMapping($scope.mappings, "SubmissionDate");

  $scope.friendlyName = function (field) {
    switch (field) {
      case "FormId":
        return "Form ID";
      case "FormName":
        return "Form name";
      case "PageUrl":
        return "Page URL";
      case "SubmissionDate":
        return "Submission date/time";
      default:
        return field;
    }
  };

  $scope.toggleInclude = function (mapping) {
    mapping.include = !mapping.include;

    if (mapping.include) {
      mapping.keyName = mapping.field;
    } else {
      mapping.keyName = "";
    }

    $scope.setting.value = JSON.stringify($scope.mappings);
  };

  $scope.stringifyValue = function () {
    $scope.setting.value = JSON.stringify($scope.mappings);
  };
});

angular.module("umbraco").controller("UmbracoForms.Dashboards.FormsController", function ($scope, $location, $cookies, formResource, licensingResource, updatesResource, notificationsService, userService, securityResource, recordResource, localizationService) {
  var vm = this;

  function loadStatus() {
    licensingResource.getLicenseStatus().then(function (response) {
      vm.status = response.data;
      vm.isLoading = false;
    });

    updatesResource.getUpdateStatus().then(function (response) {
      vm.version = response.data;
    });

    updatesResource.getVersion().then(function (response) {
      vm.currentVersion = response.data;
    });

    updatesResource.getSavePlainTextPasswordsConfiguration().then(function (response) {
      vm.savePlainTextPasswords = response.data.toString() === "true";
    });
  }

  function getRecordCounts() {
    _.each(vm.forms, function (form, index) {

      // Only get record counts for forms that are a) visible and b) already populated.
      if (index >= vm.formsLimit || form.gotEntries) {
        return;
      }

      var filter = {
        form: form.id
      };

      recordResource.getRecordsCount(filter).then(function (response) {
        form.entries = response.data.count;
        form.gotEntries = true;
      });
    });
  }

  vm.isLoading = true;
  vm.overlay = {
    show: false
  };
  vm.configuration = {
    domain: window.location.hostname
  };
  vm.initialFormsLimit = 4;
  vm.formsLimit = 4; // Show top 4 by default

  localizationService.localizeMany([
    "formsDashboard_installOverlayTitle",
    "formsDashboard_installOverlayDescription"
  ]).then(function (labels) {
    vm.overlay.title = labels[0];
    vm.overlay.description = labels[1];
  });

  var packageInstall = $cookies.get("umbPackageInstallId");
  if (packageInstall) {
    vm.overlay.show = true;
    $cookies.put("umbPackageInstallId", "");
  }

  // Default for canManageForms is false
  // Need a record in security to ensure user has access to edit/create forms
  vm.userCanManageForms = false;

  // Get Current User - To Check if the user Type is Admin
  userService.getCurrentUser().then(function (response) {
    vm.currentUser = response;
    vm.isAdminUser = response.userGroups.includes("admin");

    securityResource.getForCurrentUser(false).then(function (response) {
      var userSecurity = response.data.userSecurity;
      vm.userCanManageForms = userSecurity.manageForms;
      vm.userCanViewEntries = userSecurity.viewEntries;
    });
  });

  // If not initial install, but still do not have forms - display a message
  if (!vm.overlay.show) {
    // Check if we have any forms created yet - by checking number of items back from JSON response
    formResource.getOverView().then(function (response) {
      if (response.data.length === 0) {
        vm.overlay.show = true;

        localizationService.localizeMany([
          "formsDashboard_emptyOverlayTitle",
          "formsDashboard_emptyOverlayDescription"
        ]).then(function (labels) {
          vm.overlay.title = labels[0];
          vm.overlay.description = labels[1];
        });
      }
    });
  }

  loadStatus();

  // Get all forms and populate visible ones with recorcd counts.
  formResource.getOverView().then(function (response) {
    vm.forms = response.data;
    getRecordCounts();
  });

  vm.getLicenses = function (config) {
    vm.loginError = false;
    vm.hasLicenses = undefined;
    vm.isLoading = true;

    licensingResource.getAvailableLicenses(config).then(function (response) {
      var licenses = response.data;
      var currentDomain = window.location.hostname;

      vm.hasLicenses = licenses.length > 0;

      _.each(licenses, function (lic) {
        if (lic.bindings && lic.bindings.indexOf(currentDomain) >= 0) {
          lic.currentDomainMatch = true;
        }
      });

      vm.configuredLicenses = _.sortBy(_.filter(licenses, function (license) { return license.configured; }), 'currentDomainMatch');
      vm.openLicenses = _.filter(licenses, function (license) { return license.configured === false; });
      vm.isLoading = false;
    }, function (err) {
      vm.loginError = true;
      vm.hasLicenses = undefined;
      vm.isLoading = false;
    });
  };

  vm.configure = function (config) {
    vm.isLoading = true;

    licensingResource.configureLicense(config).then(function (response) {
      vm.configuredLicenses.length = 0;
      vm.openLicenses.length = 0;
      loadStatus();

      localizationService.localizeMany(["formsDashboard_licenseConfiguredNotificationTitle", "formsDashboard_licenseConfiguredNotificationMessage"]).then(function (labels) {
        notificationsService.success(labels[0], labels[1]);
      });
    });
  };

  // TODO: Can this die/go away?!
  vm.upgrade = function () {
    // Let's triple check the user is of the userType Admin
    if (!$scope.isAdminUser) {
      // The user is not an admin & should have not hit this method but if they hack the UI they could potentially see the UI perhaps?
      localizationService.localizeMany(["formsDashboard_insufficientPermissionsError", "formsDashboard_insufficientPermissionsUpgradeMessage"]).then(function (labels) {
        notificationsService.success(labels[0], labels[1]);
      });

      return;
    }

    vm.installing = true;
    updatesResource.installLatest($scope.version.remoteVersion).then(function (response) {
      window.location.reload();
    }, function (reason) {
      // Most likely the 403 Unauthorised back from server side
      // The error is caught already & shows a notification so need to do it here
      // But stop the loading bar from spining forever
      vm.installing = false;
    });
  };

  vm.create = function () {
    // Let's triple check the user is of the userType Admin
    if (!vm.userCanManageForms) {
      // The user is not an admin & should have not hit this method but if they hack the UI they could potentially see the UI perhaps?
      localizationService.localizeMany(["formsDashboard_insufficientPermissionsError", "formsDashboard_insufficientPermissionsMessage"]).then(function (labels) {
        notificationsService.success(labels[0], labels[1]);
      });

      return;
    }

    $location.url("forms/form/edit/-1?template=&create=true");
  };

  vm.hasUnrestrictedLicense = function (status) {
    return status &&
      status.licenseLimitations &&
      status.licenseLimitations.includes("*not* associated with any ips or domains");
  };

  vm.displayLicensedDomains = function (status) {
    if (status && status.validDomains && status.validDomains.length > 0) {
      return ("<ul><li>" +
        status.validDomains
          .split("|")
          .join("</li><li>") +
        "</li></ul>").replace("<li></li>", "");
    }

    return "";
  };

  vm.showMore = function () {
    var incrementLimitBy = 8;
    vm.formsLimit = vm.formsLimit + incrementLimitBy;
    getRecordCounts();
  };

  vm.getFormView = function () {
    // Link to the entries view if the user has permission to view entries.
    // If not, link to the edit view.
    // If they don't have permissions for either, there will be no forms presented to click on.
    return vm.userCanViewEntries ? "entries" : "edit";
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.DataSource.DeleteController", function ($scope, dataSourceResource, navigationService, treeService) {
  $scope.delete = function (id) {
    dataSourceResource.deleteByGuid(id).then(function () {
      treeService.removeNode($scope.currentNode);
      navigationService.hideNavigation();
    });
  };

  $scope.cancelDelete = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.DataSource.EditController", function ($scope, $routeParams, dataSourceResource, editorState, notificationsService, editorService, navigationService, formHelper, securityResource, localizationService, providerLocalizationHelper) {
  function setTypeAndSettings() {
    $scope.dataSource.$type = _.where($scope.types, { id: $scope.dataSource.formDataSourceTypeId })[0];

    // Set settings
    angular.forEach($scope.dataSource.settings, function (setting) {
      for (var key in $scope.dataSource.settings) {
        if ($scope.dataSource.settings.hasOwnProperty(key)) {
          if (_.where($scope.dataSource.$type.settings, { alias: key }).length > 0) {
            _.where($scope.dataSource.$type.settings, { alias: key })[0].value = $scope.dataSource.settings[key];
          }
        }
      }
    });
  }

  // On load/init of 'editing' a prevalue source then
  // Let's check & get the current user's form security
  securityResource.getForCurrentUser(false).then(function (response) {
    $scope.security = response.data;

    // Check if manage datasources has been disabled
    if (!$scope.security.userSecurity.manageDataSources) {
      // Show error notification
      localizationService.localizeMany(["formPermissions_accessDeniedTitle", "formDataSources_accessDeniedMessage"]).then(function (labels) {
        notificationsService.error(labels[0], labels[1]);
      });

      // Resync tree so that it's removed & hides
      navigationService.syncTree({ tree: "datasource", path: ['-1'], forceReload: true, activate: false }).then(function (response) {
        // Response object contains node object & activate bool
        // Can then reload the root node -1 for this tree 'Forms Folder'
        navigationService.reloadNode(response.node);
      });

      // Don't need to wire anything else up
      return;
    }
  });

  if ($routeParams.create) {
    // We are creating so get an empty data type item
    dataSourceResource.getScaffold().then(function (response) {
      $scope.loaded = true;
      $scope.dataSource = response.data;

      dataSourceResource.getAllDataSourceTypesWithSettings().then(function (resp) {
        $scope.types = resp.data;
        localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderDataSources", $scope.types)).then(function (labels) {
          providerLocalizationHelper.applyLocalizationLabels($scope.types, labels);
        });
      });

      // Set a shared state
      editorState.set($scope.form);
    });
  } else {
    // we are editing so get the content item from the server
    dataSourceResource.getByGuid($routeParams.id).then(function (response) {
      $scope.dataSource = response.data;

      dataSourceResource.getAllDataSourceTypesWithSettings().then(function (resp) {
        $scope.types = resp.data;
        localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderDataSources", $scope.types)).then(function (labels) {
          providerLocalizationHelper.applyLocalizationLabels($scope.types, labels);
          setTypeAndSettings();
          $scope.loaded = true;
        });
      });

      // Set a shared state
      editorState.set($scope.dataSource);
    });
  }

  $scope.setType = function () {
    setTypeAndSettings();
  };

  $scope.save = function () {
    if (formHelper.submitForm({ scope: $scope })) {
      // Set settings
      $scope.dataSource.settings = {};

      if ($scope.dataSource.$type) {
        angular.forEach($scope.dataSource.$type.settings, function (setting) {
          var key = setting.alias;
          var value = setting.value;

          $scope.dataSource.settings[key] = value;
        });
      }

      // Validate settings
      localizationService.localizeMany([
        "formDataSources_saveSuccessTitle",
        "formDataSources_saveErrorTitle",
        "formMessages_saveErrorMessage"
      ]).then(function (labels) {
        dataSourceResource.validateSettings($scope.dataSource).then(function (response) {
          $scope.errors = response.data;

          if ($scope.errors.length > 0) {
            $scope.dataSource.valid = false;

            angular.forEach($scope.errors, function (error) {
              notificationsService.error(labels[1], error.Message);
            });
          } else {
            // Save
            dataSourceResource.save($scope.dataSource).then(function (response) {
              $scope.dataSource = response.data;

              // Set a shared state
              editorState.set($scope.dataSource);
              setTypeAndSettings();
              navigationService.syncTree({ tree: "datasource", path: [String($scope.dataSource.id)], forceReload: true });
              notificationsService.success(labels[0], "");

              $scope.dataSource.valid = true;
              $scope.dataSourceForm.$dirty = false;
            }, function (err) {
              notificationsService.error(labels[1], "");
            });
          }
        }, function (err) {
          notificationsService.error(labels[1], labels[2]);
        });
      });
    }
  };

  $scope.showWizard = function () {
    editorService.open({
      view: "/App_Plugins/UmbracoForms/Backoffice/DataSource/dialogs/wizard.html",
      dataSourceId: $scope.dataSource.id,
      size: 'medium'
    });
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.DataSource.WizardController", function ($scope, dataSourceWizardResource, notificationsService, editorService) {
  $scope.currentStep = 1;

  dataSourceWizardResource.getScaffold($scope.model.dataSourceId).then(function (response) {
    $scope.wizard = response.data;
    $scope.hasPrimaryKeys = $scope.wizard.mappings.length !== _.where($scope.wizard.mappings, { prevalueKeyField: null }).length;

    dataSourceWizardResource.getAllFieldTypes().then(function (resp) {
      $scope.fieldtypes = resp.data;
      $scope.ready = true;
    });
  });

  $scope.createForm = function () {
    dataSourceWizardResource.createForm($scope.wizard).then(function (resp) {
      editorService.closeAll();
      notificationsService.success("Form created", "");
    });
  };

  $scope.cancel = function () {
    editorService.closeAll();
  };

  $scope.gotoStep = function (step) {
    $scope.currentStep = step;
  };

  $scope.gotoThirdStep = function () {
    if ($scope.hasPrimaryKeys) {
      $scope.currentStep = 3;
    } else {
      $scope.currentStep = 4;
    }
  };

  $scope.goBackToThirdStep = function () {
    if ($scope.hasPrimaryKeys) {
      $scope.currentStep = 3;
    } else {
      $scope.currentStep = 2;
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.CopyController", function ($scope, formResource, navigationService, localizationService, utilityService) {
  var vm = this;
  vm.buttonState = "init";
  function parseFolderId(id) {
    return id.substring("folder-".length);
  }

  function nodeSelectHandler(args) {
    args.event.preventDefault();
    args.event.stopPropagation();

    if (vm.copiedForm.copyToFolder) {
      // Un-select if there's a current one selected
      vm.copiedForm.copyToFolder.selected = false;
    }

    vm.copiedForm.copyToFolder = args.node;
    vm.copiedForm.copyToFolder.selected = true;
  }

  vm.dialogTreeApi = {};
  vm.foldersSupported = Umbraco.Sys.ServerVariables.umbracoPlugins.forms.storeUmbracoFormsInDb;
  vm.title = "";
  vm.copiedForm = {
    name: "",
    copyWorkflows: false,
    copyToNewFolder: false,
    copyToFolder: null,
  };

  localizationService.localize("formCopy_title", [$scope.currentNode.name]).then(function (val) {
    vm.title = utilityService.hexHtmlToString(val);
  });

  // Copy Function run from button on click
  vm.copyForm = function (formId) {

    vm.buttonState = "busy";

    var copyToFolderId = null;
    if (vm.copiedForm.copyToNewFolder && vm.copiedForm.copyToFolder) {
      copyToFolderId = vm.copiedForm.copyToFolder.id === "-1" ? "-1" : parseFolderId(vm.copiedForm.copyToFolder.id);
    }

    // Perform copy in formResource
    formResource.copy(formId, vm.copiedForm.name, vm.copiedForm.copyWorkflows, copyToFolderId).then(function (response) {
      // Reload the tree
      navigationService.syncTree({
        tree: "form",
        path: response.data.path.split(","),
        forceReload: true,
        activate: false
      });

      // Once 200 OK then reload tree & hide copy dialog navigation
      navigationService.hideNavigation();
      vm.buttonState = "success";
    }, function () {
      vm.buttonState = "error";
    });
  };

  vm.onTreeInit = function () {
    vm.dialogTreeApi.callbacks.treeNodeSelect(nodeSelectHandler);
  };

  // Cancel button - closes dialog
  vm.cancelCopy = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.CreateController", function ($scope, $location, formResource, navigationService, formHelper, formsValidationService) {
  function navigateToCreateForm(templateAlias) {
    $location.path("/forms/form/edit/" + $scope.currentNode.id).search("create", "true").search("template", templateAlias);

    navigationService.hideNavigation();
  }

  $scope.model = {
    folderName: "",
    creatingFolder: false,
    foldersSupported: Umbraco.Sys.ServerVariables.umbracoPlugins.forms.storeUmbracoFormsInDb
  };

  var node = $scope.currentNode;

  formResource.getAllTemplates().then(function (response) {
    $scope.model.formTemplates = response.data;
  });

  $scope.createEmptyForm = function () {
    navigateToCreateForm("");
  };

  $scope.createTemplateForm = function (templateAlias) {
    navigateToCreateForm(templateAlias);
  };

  $scope.showCreateFolderForm = function () {
    $scope.model.creatingFolder = true;
  };

  $scope.createFolder = function () {
    $scope.model.errorMessage = null;

    if (formHelper.submitForm({
      scope: $scope,
      formCtrl: $scope.createFolderForm
    })) {
      formResource.createFolder(node.id, $scope.model.folderName).then(function (response) {
        navigationService.hideMenu();

        var folder = response.data;
        var currPath = node.path ? node.path : "-1";

        navigationService.syncTree({
          tree: "form",
          path: (currPath + ",folder-" + folder.id).split(','),
          forceReload: true,
          activate: true
        });

        formHelper.resetForm({ scope: $scope, formCtrl: $scope.createFolderForm });
      }, function (err) {
        formHelper.resetForm({ scope: $scope, formCtrl: $scope.createFolderForm, hasErrors: true });
        $scope.model.errorMessage = formsValidationService.getErrorMessageFromExceptionResponse(err);
      });
    }
  };

  $scope.hideDialog = function () {
    navigationService.hideDialog(true);
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.DeleteController", function ($scope, formResource, recordResource, navigationService, notificationsService, treeService, localizationService, utilityService) {
  var vm = this;
  var folderIdPrefix = "folder-";

  function parseFolderId(id) {
    return id.substring(folderIdPrefix.length);
  }

  vm.buttonState = "init";
  vm.deletingFolder = $scope.currentNode.id.startsWith(folderIdPrefix);

  // ...but folders can only be deleted if empty (don't want to risk a mistaken click wiping out a tonne of records).
  if (vm.deletingFolder) {
    formResource.isFolderEmpty(parseFolderId($scope.currentNode.id)).then(function (result) {
      vm.canDelete = result.data;
    });
  }

  vm.title = "";
  localizationService.localize("formDelete_title", [vm.deletingFolder ? "folder" : "form", $scope.currentNode.name]).then(function (val) {
    vm.title = utilityService.hexHtmlToString(val);
  });

  if (!vm.deletingFolder) {
    vm.recordDetail = "";
    var filter = {
      form: $scope.currentNode.id
    };

    recordResource.getRecordsCount(filter).then(function (response) {
      if (response.data.count === 0) {
        localizationService.localize("formDelete_noRecordDetail").then(function (val) {
          vm.recordDetail = val;
        });
      } else {
        localizationService.localize("formDelete_recordDetail", [response.data.count, response.data.lastSubmittedDate]).then(function (val) {
          vm.recordDetail = val;
        });
      }
    });
  }

  // Forms can always be deleted...
  vm.canDelete = !vm.deletingFolder;

  vm.performDelete = function (id) {
    vm.buttonState = "busy";

    localizationService.localizeMany([
      "formDelete_successMessageForForm",
      "formDelete_failedMessageForForm",
      "formDelete_successMessageForFolder",
      "formDelete_failedMessageForFolder"
    ]).then(function (labels) {
      if (vm.deletingFolder) {
        formResource.deleteFolderByGuid(parseFolderId(id)).then(function () {
          vm.buttonState = "success";

          treeService.removeNode($scope.currentNode);
          navigationService.hideNavigation();
          notificationsService.success(labels[2]);
        }, function (err) {
          vm.buttonState = "error";

          notificationsService.error(labels[3], err.data.Message);
        });
      } else {
        formResource.deleteByGuid(id).then(function () {
          vm.buttonState = "success";

          treeService.removeNode($scope.currentNode);
          navigationService.hideNavigation();
          notificationsService.success(labels[0]);
        }, function (err) {
          vm.buttonState = "error";

          notificationsService.error(labels[1], err.data.Message);
        });
      }
    });
  };

  vm.cancelDelete = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.EditController", function ($scope, $routeParams, formResource, editorState, editorService, formService, notificationsService, contentEditingHelper, formHelper, navigationService, securityResource, localizationService, providerLocalizationHelper) {
  function createAndLocalizeApps() {
    localizationService.localizeMany([
      "general_design",
      "general_settings"
    ]).then(function (labels) {
      // Using unshift and reversing order to default apps appear first before any custom ones that may have been loaded for the form.
      $scope.page.contentApps.unshift({
        "name": labels[1],
        "alias": "settings",
        "icon": "icon-settings",
        "view": "/App_Plugins/UmbracoForms/Backoffice/Form/views/settings/settings.html",
        "active": false
      });

      $scope.page.contentApps.unshift({
        "name": labels[0],
        "alias": "design",
        "icon": "icon-document-dashed-line",
        "view": "/App_Plugins/UmbracoForms/Backoffice/Form/views/design/design.html",
        "active": true
      });
    });
  }

  function parseFolderId(id) {
    return id.substring("folder-".length);
  }

  // On load/init of 'editing' a form then
  // Let's check & get the current user's form security
  var currentFormSecurity = null;

  $scope.page = {
    loading: true
  };

  $scope.page.contentApps = [];

  // By default set to have access (in case we do not find the current user's per individual form security item)
  $scope.hasAccessToCurrentForm = true;
  $scope.displayEditor = true;

  // Now we can make a call to form securityResource
  securityResource.getForCurrentUser(false).then(function (response) {
    $scope.security = response.data;

    // Use _underscore.js to find a single item in the JSON array formsSecurity
    // where the FORM guid matches the one we are currently editing (if underscore does not find an item it returns an empty array)
    // As _.findWhere not in Umb .1.6 using _.where() that lists multiple matches - checking that we have only item in the array (ie one match)
    currentFormSecurity = _.where(response.data.formsSecurity, { Form: $routeParams.id });

    if (currentFormSecurity.length === 1) {
      // Check & set if we have access to the form
      // if we have no entry in the JSON array by default its set to true (so won't prevent)
      $scope.hasAccessToCurrentForm = currentFormSecurity[0].HasAccess;
    }

    // Check if we have access to current form OR manage forms has been disabled
    if (!$scope.hasAccessToCurrentForm || !$scope.security.userSecurity.manageForms) {
      // Show error notification
      localizationService.localizeMany(["formPermissions_accessDeniedTitle", "formEdit_accessDeniedMessage"]).then(function (labels) {
        notificationsService.error(labels[0], labels[1]);
      });

      // Resync tree so that it's removed & hides
      navigationService.syncTree({ tree: "form", path: ['-1'], forceReload: true, activate: false }).then(function (response) {
        // Response object contains node object & activate bool
        // Can then reload the root node -1 for this tree 'Forms Folder'
        navigationService.reloadNode(response.node);
      });

      // Don't need to wire anything else up
      return;
    }
  });

  if ($routeParams.create) {
    // We are creating so get an empty data type item
    // formResource.getScaffold($routeParams.template)
    formResource.getScaffoldWithWorkflows($routeParams.template).then(function (response) {
      $scope.form = response.data;

      // Set a shared state
      editorState.set($scope.form);

      // Prepare default and custom content apps.
      $scope.page.contentApps = $scope.form.apps;
      createAndLocalizeApps();

      $scope.page.loading = false;
    });
  } else {
    $scope.workflowsUrl = "#/forms/form/workflows/" + $routeParams.id;
    $scope.entriesUrl = "#/forms/form/entries/" + $routeParams.id;

    // We are editing so get the content item from the server
    formResource.getWithWorkflowsByGuid($routeParams.id).then(function (response) {
      $scope.form = response.data;

      localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeysForFormWorkflows($scope.form.formWorkflows)).then(function (labels) {
        providerLocalizationHelper.applyLocalizationLabelsToFormWorkflows($scope.form.formWorkflows, labels);

        $scope.saved = true;

        // As we are editing an item we can highlight it in the tree
        navigationService.syncTree({ tree: "form", path: response.data.path.split(','), forceReload: false });

        // This should be removed in next major version
        angular.forEach($scope.form.pages, function (page) {
          angular.forEach(page.fieldSets, function (fieldSet) {
            angular.forEach(fieldSet.containers, function (container) {
              angular.forEach(container.fields, function (field) {
                field.removePrevalueEditor = true;
              });
            });
          });
        });

        // Set a shared state
        editorState.set($scope.form);

        // Prepare default and custom content apps.
        $scope.page.contentApps = $scope.form.apps;
        createAndLocalizeApps();

        $scope.page.loading = false;
      });
    }, function (reason) {
      // Includes ExceptionMessage, StackTrace etc from the WebAPI
      var jsonErrorResponse = reason.data;

      // Show notification message, a sticky Error message
      localizationService.localize("formEdit_unableToLoadForm").then(function (val) {
        notificationsService.add({ headline: val, message: jsonErrorResponse.ExceptionMessage, type: 'error', sticky: true });
      });

      // Hide the entire form UI
      $scope.displayEditor = false;
    });
  }

    $scope.editForm = function (form, section) {
      editorService.open(
        {
          template: "/App_Plugins/UmbracoForms/Backoffice/Form/dialogs/formsettings.html",
          form: form,
          section: section,
          page: $scope.currentPage
        });
    };

  $scope.save = function () {
    if (formHelper.submitForm({
      scope: $scope
    })) {
      $scope.page.saveButtonState = "busy";

      // Make sure we set correct widths on all containers
      formService.syncContainerWidths($scope.form);

      // If creating a new form, assign the parent folder
      if ($routeParams.create && $routeParams.id !== "-1") {
        $scope.form.folderId = parseFolderId($routeParams.id);
      }

      // TODO (V11): Remove this tranformation once parsedPrevalues is removed.
      // Map prevalue changes back to the strings values persisted.
      var formFields = formService.getAllFields($scope.form);
      var prevalueCaptionSeparator = "~|~";

      for (var i = 0; i < formFields.length; i++) {
        formFields[i].preValues = [];

        if (formFields[i].parsedPreValues && formFields[i].parsedPreValues.length > 0) {
          for (var j = 0; j < formFields[i].parsedPreValues.length; j++) {
            if (formFields[i].parsedPreValues[j].caption) {
              formFields[i].preValues.push(formFields[i].parsedPreValues[j].value + prevalueCaptionSeparator + formFields[i].parsedPreValues[j].caption);
            } else {
              formFields[i].preValues.push(formFields[i].parsedPreValues[j].value);
            }
          }
        }
      }

      formResource.saveWithWorkflows($scope.form).then(function (response) {
        formHelper.resetForm({ scope: $scope });

        contentEditingHelper.handleSuccessfulSave({
          scope: $scope,
          savedContent: response.data
        });

        $scope.ready = true;

        // Set a shared state
        editorState.set($scope.form);

        $scope.page.saveButtonState = "success";
        navigationService.syncTree({ tree: "form", path: response.data.path.split(','), forceReload: true });

        localizationService.localize("formEdit_formSaved").then(function (val) {
          notificationsService.success(val, "");
        });
      }, function (err) {
        formHelper.handleError(err);

        $scope.page.saveButtonState = "error";
      });
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.EntriesController", function ($scope, $routeParams, recordResource, formResource, editorService, userService, securityResource, notificationsService, navigationService, overlayService, localizationService, utilityService, preValueSourceResource, formService) {
  var vm = this;

  function getFormField(fieldId) {
    var fields = formService.getAllFields($scope.form);
    for (var i = 0; i < fields.length; i++) {
      if (fields[i].id === fieldId) {
        return fields[i];
      }
    }

    return null;
  }

  function getPrevaluesForEditing(fieldId) {
    // TODO (V11): This will no longer be necessary as parsedPreValues will be removed.
    // For values from prevalue sources will already have values and captions defined in the preValues property.
    // Those defined on the form will be strings, so we should use the parsed version.
    if (!vm.allowEditingEntryDetails) {
      return [];
    }

    var formField = getFormField(fieldId);

    return formField.parsedPreValues && formField.parsedPreValues.length > 0 ? formField.parsedPreValues : formField.preValues;
  }

  function parseEditedValues(selectedEntryDetail) {
    // If multiple values have potentially been saved, the editor supporting multi-value save operations (e.g. dropdown-multiple.html)
    // will have saved a flag on the model object.
    // If set, we need to parse out the comma separated values, handling the situation where we may
    // have values within the prevalues that match the delimiter.
    // If not set, we have a single value.
    if (selectedEntryDetail.multipleValuesSaved) {
      return formService.getSelectedPrevalues(selectedEntryDetail.fieldPreValues, selectedEntryDetail.value);
    }

    return [selectedEntryDetail.value];
  }

  function getSelectedEntryDetailForFieldId(selectedEntryDetails, fieldId) {
    for (var i = 0; i < selectedEntryDetails.length; i++) {
      var selectedEntryDetail = selectedEntryDetails[i];
      if (selectedEntryDetail.fieldId === fieldId) {
        return selectedEntryDetail;
      }
    }
  }

  function resetEditedEntryDetails() {
    var originalEntry = $scope.records.results[vm.selectedEntry.index];
    for (var i = 0; i < vm.selectedEntry.details.length; i++) {
      var selectedEntryDetail = vm.selectedEntry.details[i];
      selectedEntryDetail.validationMessages = [];
      if (originalEntry.fields[i].value !== selectedEntryDetail.value) {
        selectedEntryDetail.value = originalEntry.fields[i].value;
      }
    }
  }

  function promptForUnsavedChanges(onSubmit) {
    if (vm.editingEntryDetails) {
      if ($scope.contentForm.$dirty) {
        localizationService.localizeMany([
          "prompt_unsavedChanges",
          "prompt_unsavedChangesWarning",
          "general_yes",
          "general_no"
        ]).then(function (labels) {
          var overlay = {
            view: "confirm",
            title: labels[0],
            content: labels[1],
            closeButtonLabel: labels[3],
            submitButtonLabel: labels[2],
            submitButtonStyle: "danger",
            close: function () {
              overlayService.close();
            },
            submit: function () {
              overlayService.close();
              vm.cancelEditEntryDetails();
              onSubmit();
            }
          };
          overlayService.open(overlay);
        });
      } else {
        vm.cancelEditEntryDetails();
        onSubmit();
      }
    } else {
      onSubmit();
    }
  }

  function limitRecordFields(records) {
    // Function to limit how many fields are
    // Shown in the entries table

    var numberOfGenericFields = 8; // Ensure to align with number of generic fields added to schema in FormRecordSearcher.QueryDataBaseForSubmissions.
    var falseFromIndex = 2;
    var falseToIndex = records.schema.length - numberOfGenericFields;
    var trueFalseArray = [];

    // Make array of true/false (show the generic fields that are flagged to show, plus the first 3 fields from the form)
    angular.forEach(records.schema, function (schema, index) {
      if ((index <= falseFromIndex || index >= falseToIndex) && schema.showOnListingScreen) {
        trueFalseArray.push(true);
      } else {
        trueFalseArray.push(false);
      }
    });

    // set array for schema
    records.showSchemaArray = trueFalseArray;

    // set array for row fields
    angular.forEach(records.results, function (result) {
      result.showRecordsArray = trueFalseArray;
    });
  }

  function navigateEntryDetails(direction) {
    var performNavigation = function () {
      var navigateToEntryIndex = vm.selectedEntry.index + direction;
      var entriesCount = $scope.records.results.length;
      var currentPage = $scope.filter.startIndex;
      var totalNumberOfPages = $scope.records.totalNumberOfPages;

      if ((direction === 1 && navigateToEntryIndex < entriesCount) || (direction === -1 && vm.selectedEntry.index > 0)) {
        var entry = $scope.records.results[navigateToEntryIndex];
        vm.viewEntryDetails($scope.records.schema, entry);
      } else if (totalNumberOfPages > 1 && ((direction === 1 && currentPage < totalNumberOfPages) || (direction === -1 && currentPage !== 1))) {
        $scope.filter.startIndex += direction;
        vm.pagination.pageNumber += direction;

        recordResource.getRecords($scope.filter).then(function (response) {
          $scope.records = response.data;
          $scope.allIsChecked = ($scope.selectedRows.length >= $scope.records.results.length);
          vm.pagination.totalPages = response.data.totalNumberOfPages;

          limitRecordFields($scope.records);

          // Get the first item from the new collection when navigating next and
          // the last item from the new collection when navigating previous.
          var entry = direction === 1 ? $scope.records.results[0] : $scope.records.results[$scope.records.results.length - 1];
          vm.viewEntryDetails($scope.records.schema, entry);
        });
      }
    };

    promptForUnsavedChanges(performNavigation);
  }

  // TODO (V11): This will no longer be necessary as parsedPreValues will be removed.
  // For values from prevalue sources will already have values and captions defined in the preValues property.
  // Those defined on the form will be strings, so we should use the parsed version.
  function getPrevalueForField(formField, index) {
    return formField.parsedPreValues && formField.parsedPreValues.length > 0 ? formField.parsedPreValues[index] : formField.preValues[index];
  }

  function loadRecords(filter, append) {
    // Set loading to true
    $scope.loading = true;

    recordResource.getRecords(filter).then(function (response) {
      // Got response from server
      $scope.loading = false;

      if (append) {
        $scope.records = $scope.records.results.concat(response.data.results);
      } else {
        $scope.records = response.data;
      }

      // Populate any previously selected values found in the displayed set of records.
      for (var i = 0; i < $scope.records.results.length; i++) {
        var record = $scope.records.results[i];
        if ($scope.selectedRows.includes(record.id)) {
          record.selected = true;
        }
      }

      $scope.allIsChecked = ($scope.selectedRows.length >= $scope.records.results.length);
      limitRecordFields($scope.records);
      vm.pagination.totalPages = response.data.totalNumberOfPages;
    });
  }

  // On load/init of 'editing' a form then
  // Let's check & get the current user's form security
  var currentFormSecurity = null;

  vm.pagination = {
    pageNumber: 1,
    totalPages: 1
  };
  vm.selectedEntry = {};
  vm.showEntryDetails = false;
  vm.allowEditingEntryDetails = false;
  vm.editingEntryDetails = false;
  vm.userLocale = "";
  vm.canEditSensitiveData = false;
  vm.keyboardShortcutsOverview = [];
  $scope.selectedRows = [];
  $scope.allIsChecked = false;

  localizationService.localizeMany([
    "formEntries_entryDetails",
    "formEntries_nextEntry",
    "formEntries_previousEntry",
    "formEntries_closeDetails",
    "formEntries_workflowAuditTitleFormatSingular",
    "formEntries_workflowAuditTitleFormatPlural"
  ]).then(function (labels) {
    vm.keyboardShortcutsOverview.push({
      "name": labels[0],
      "shortcuts": [{
        "description": labels[1],
        "keys": [{
          "key": "→"
        }]
      }, {
        "description": labels[2],
        "keys": [{
          "key": "←"
        }]
      }, {
        "description": labels[3],
        "keys": [{
          "key": "esc"
        }]
      }]
    });

    vm.workflowAuditTitleFormatSingularLabel = labels[4];
    vm.workflowAuditTitleFormatPluralLabel = labels[5];
  });

  vm.title = "";

  // By default set to have access (in case we do not find the current user's per individual form security item)
  $scope.hasAccessToCurrentForm = true;

  userService.getCurrentUser().then(function (response) {
    vm.userLocale = response.locale;

    // Set the API controller response on the Angular ViewModel
    vm.canEditSensitiveData = response.userGroups.indexOf("sensitiveData") !== -1;

    // Now we can make a call to form securityResource
    securityResource.getForCurrentUser(false).then(function (response) {
      $scope.security = response.data;

      // Use _underscore.js to find a single item in the JSON array formsSecurity
      // where the FORM guid matches the one we are currently editing (if underscore does not find an item it returns undefinied)
      currentFormSecurity = _.where(response.data.formsSecurity, { Form: $routeParams.id });

      if (currentFormSecurity.length === 1) {
        // Check & set if we have access to the form
        // if we have no entry in the JSON array by default its set to true (so won't prevent)
        $scope.hasAccessToCurrentForm = currentFormSecurity[0].HasAccess;
      }

      // Check if we have access to current form OR view entries has been disabled
      if (!$scope.hasAccessToCurrentForm || !$scope.security.userSecurity.viewEntries) {
        // Show error notification
        localizationService.localizeMany(["formPermissions_accessDeniedTitle", "formEntries_accessDeniedMessage"]).then(function (labels) {
          notificationsService.error(labels[0], labels[1]);
        });

        // Resync tree so that it's removed & hides
        navigationService.syncTree({ tree: "form", path: ['-1'], forceReload: true, activate: false }).then(function (response) {
          // Response object contains node object & activate bool
          // Can then reload the root node -1 for this tree 'Forms Folder'
          navigationService.reloadNode(response.node);
        });

        // Don't need to wire anything else up
        return;
      }
      else {
        // Set whether editing entries is allowed.
        vm.allowEditingEntryDetails = $scope.security.userSecurity.editEntries;

        formResource.getWithWorkflowsByGuid($routeParams.id).then(function (response) {
          // We could call getByGuid here, as we don't need the workflows.
          // But this request gets us a FormDesign object, which has the path populated.

          $scope.form = response.data;
          $scope.loaded = true;

          localizationService.localize("formEntries_title", [$scope.form.name]).then(function (val) {
            vm.title = utilityService.hexHtmlToString(val);
          });

          // As we are editing an item we can highlight it in the tree.
          // If the user has access to both managing form design and viewing entries, we'll get back the path to the form,
          // so we need to add one more element to the end which is the id of the "entries" node, made up of the
          // form's Id suffixed with "_entries".
          // If they only have access to view entries, there's no separate tree item for "entries" so we need to modify
          // the last item in the path to have the "_entries" suffix.
          var path = $scope.form.path.split(',');
          if ($scope.security.userSecurity.manageForms && $scope.security.userSecurity.viewEntries) {
            path.push(path[path.length - 1] + "_entries");
          } else {
            path[path.length - 1] += "_entries";
          }

          navigationService.syncTree({ tree: "form", path: path, forceReload: false });

          // Populate the available recordset actions (we need to do this after retrieving the form, so
          // we can filter out those not appropriate for forms that are automatically approved).
          recordResource.getRecordSetActions().then(function (response) {
            $scope.recordSetActions = response.data.filter(function (action) {
              return $scope.form.manualApproval || action.isAvailableForApprovedRecords;
            });

            // If editing is supported, ensure we have prevalues available for the fields that support them.
            var formFields = formService.getAllFields($scope.form);

            function pushFormFieldPreValues(fieldPrevalueSourceId, fieldId) {
              preValueSourceResource.getPreValuesByGuid(fieldPrevalueSourceId).then(function (response) {
                var formField = getFormField(fieldId);
                formField.preValues = [];

                for (var i = 0; i < response.data.length; i++) {
                  formField.preValues.push(response.data[i]);
                }
              });
            }

            for (var fi = 0; fi < formFields.length; fi++) {
              var field = formFields[fi];
              if ((!field.preValues || field.preValues.length === 0) && field.prevalueSourceId && field.prevalueSourceId !== "00000000-0000-0000-0000-000000000000") {
                pushFormFieldPreValues(field.prevalueSourceId, field.id);
              }
            }
          });
        });
      }
    });
  });

  $scope.states = [{
    "name": "Approved",
    "isChecked": true
  }, {
    "name": "Submitted",
    "isChecked": true
  }];

  $scope.filter = {
    startIndex: 1, // Page Number
    length: 20, // No per page
    form: $routeParams.id,
    sortBy: "created",
    sortOrder: "descending",
    states: ["Approved", "Submitted"],
    localTimeOffset: new Date().getTimezoneOffset()
  };

  $scope.records = [];

  // Default value
  $scope.loading = false;
  $scope.hiddenFields = [2];

  loadRecords($scope.filter);

  vm.nextPage = function () {
    $scope.filter.startIndex++;
    loadRecords($scope.filter);
  };

  vm.prevPage = function () {
    $scope.filter.startIndex--;
    loadRecords($scope.filter);
  };

  vm.goToPageNumber = function (pageNumber) {
    // Do magic here
    $scope.filter.startIndex = pageNumber;
    loadRecords($scope.filter);
  };

  vm.viewEntryDetails = function (schema, entry, event) {
    vm.selectedEntry = {};

    var entryIndex = $scope.records.results.indexOf(entry);

    // Get the count of the entry across the pagination: entries pr page * page index + entry index
    var entryCount = $scope.filter.length * ($scope.filter.startIndex - 1) + (entryIndex + 1);

    vm.selectedEntry = entry;
    vm.selectedEntry.index = entryIndex;
    vm.selectedEntry.entryCount = entryCount;
    vm.selectedEntry.details = [];

    if (schema && entry) {
      var excludeItems = ["member", "state", "created", "updated", "recordId", "umbracoPageId", "umbracoPageName", "workflowAuditSummary"];
      for (var index = 0; index < schema.length; index++) {
        var schemaItem = schema[index];

        if (excludeItems.indexOf(schemaItem.id) !== -1) {
          continue;
        }

        // Select the value from the entry.fields array
        var valueItem = entry.fields[index].value;

        // Create new object to push into details above (so our angular view is much neater)
        var itemToPush = {
          name: schemaItem.name,
          fieldId: schemaItem.id,
          fieldPreValues: getPrevaluesForEditing(schemaItem.id),
          value: valueItem,
          displayValue: vm.fieldValueOrPrevalueCaption(valueItem, schemaItem.id),
          viewName: schemaItem.view,
          view: '/App_Plugins/UmbracoForms/Backoffice/Common/RenderTypes/' + schemaItem.view + '.html',
          editViewName: schemaItem.editView,
          editView: schemaItem.editView ? '/App_Plugins/UmbracoForms/Backoffice/Common/EditTypes/' + schemaItem.editView + '.html' : '',
          containsSensitiveData: schemaItem.containsSensitiveData
        };

        vm.selectedEntry.details.push(itemToPush);
      }
    }

    localizationService.localize("formEntries_selectedEntryPaging", [vm.selectedEntry.entryCount, $scope.records.totalNumberOfResults]).then(function (val) {
      vm.selectedEntryPaging = val;
    });

    vm.showEntryDetails = true;

    if (event) {
      event.stopPropagation();
    }
  };

  vm.editEntryDetails = function () {
    vm.editingEntryDetails = true;
  };

  vm.saveEntryDetails = function () {
    var originalEntry = $scope.records.results[vm.selectedEntry.index];

    // Create object representing the record and changed values.
    var updateRecordModel = {
      recordId: vm.selectedEntry.id,
      formId: vm.selectedEntry.form,
      fieldValues: []
    };

    for (var i = 0; i < vm.selectedEntry.details.length; i++) {
      var selectedEntryDetail = vm.selectedEntry.details[i];
      selectedEntryDetail.validationMessages = [];
      if (originalEntry.fields[i].value !== selectedEntryDetail.value) {
        updateRecordModel.fieldValues.push({
          fieldId: selectedEntryDetail.fieldId,
          values: parseEditedValues(selectedEntryDetail)
        });
      }
    }

    // If no changes, no need to continue.
    if (updateRecordModel.fieldValues.length === 0) {
      vm.editingEntryDetails = false;
      $scope.contentForm.$setPristine();
      return;
    }

    localizationService.localizeMany([
      "formEntries_updateRecordSuccess",
      "formEntries_updateRecordError"
    ]).then(function (labels) {
      recordResource.updateRecord(updateRecordModel).then(function (response) {
        var selectedEntryDetail;
        if (response.data.success) {
          // Refresh the value stored in $scope.records.results[vm.selectedEntry.index], as well
          // as the display value if different due to rendering a prevalue caption.
          for (var i = 0; i < vm.selectedEntry.details.length; i++) {
            selectedEntryDetail = vm.selectedEntry.details[i];
            if (originalEntry.fields[i].value !== selectedEntryDetail.value) {
              originalEntry.fields[i].value = selectedEntryDetail.value;
              selectedEntryDetail.displayValue = vm.fieldValueOrPrevalueCaption(selectedEntryDetail.value, selectedEntryDetail.fieldId);
            }
          }

          notificationsService.success(labels[0]);
          vm.editingEntryDetails = false;
          $scope.contentForm.$setPristine();
        } else {
          // Apply validation messages to selected entry for display.
          for (var j = 0; j < response.data.fieldMessages.length; j++) {
            var fieldMessage = response.data.fieldMessages[j];
            selectedEntryDetail = getSelectedEntryDetailForFieldId(vm.selectedEntry.details, fieldMessage.fieldId);
            selectedEntryDetail.validationMessages = fieldMessage.messages;
          }

          notificationsService.error(labels[1]);
        }
      }, function (err) {
        notificationsService.error(labels[1], err.data.Message);
      });
    });
  };

  vm.cancelEditEntryDetails = function () {
    resetEditedEntryDetails();
    vm.editingEntryDetails = false;
    $scope.contentForm.$setPristine();
  };

  vm.closeEntryDetails = function () {
    promptForUnsavedChanges(function () {
      vm.selectedEntry = {};
      vm.showEntryDetails = false;
    });
  };

  vm.nextEntryDetails = function () {
    navigateEntryDetails(1);
  };

  vm.prevEntryDetails = function () {
    navigateEntryDetails(-1);
  };

  vm.datePickerChange = function (dateRange) {
    $scope.filter.startDate = dateRange.startDate;
    $scope.filter.endDate = dateRange.endDate;
    $scope.filterChanged();
  };

  vm.toggleRecordState = function (recordState) {
    if (recordState.isChecked) {
      $scope.filter.states.push(recordState.name);
    } else {
      var index = $scope.filter.states.indexOf(recordState.name);
      if (index !== -1) {
        $scope.filter.states.splice(index, 1);
      }
    }

    $scope.filterChanged();
  };

  vm.getWorkflowSummaryTitle = function (field) {
    var succeeded = parseInt(field.split('/')[0]);
    var total = parseInt(field.split('/')[1]);
    var format = total === 1 ? vm.workflowAuditTitleFormatSingularLabel : vm.workflowAuditTitleFormatPluralLabel;

    return format.replace("%0%", succeeded).replace("%1%", total);
  };

  vm.fieldValueOrPrevalueCaption = function (value, fieldId) {
    if (!value) {
      return null;
    }

    var formField = getFormField(fieldId);
    if (!formField) {
      return value;
    }

    var result = value;

    if (formField.preValues && formField.preValues.length > 0) {
      // Try to match the recorded value with a prevalue, and use the caption if it's defined.
      var prevalue;
      var matchedWithPrevalue = false;
      for (var i = 0; i < formField.preValues.length; i++) {
        prevalue = getPrevalueForField(formField, i);
        if (prevalue.value === value) {
          matchedWithPrevalue = true;
          result = (prevalue.caption && prevalue.caption.length > 0) ? prevalue.caption : value;
        }
      }

      // If we've not found a match, try also matching each part of the recorded value with prevalues, in case of fields with
      // multiple values (e.g. check box list).
      var prevalueValueSeparator = ", ";
      if (!matchedWithPrevalue && value.includes(prevalueValueSeparator)) {
        var valueParts = value.split(prevalueValueSeparator);
        var resultParts = [];
        for (var j = 0; j < valueParts.length; j++) {
          matchedWithPrevalue = false;
          for (var k = 0; k < formField.preValues.length; k++) {
            prevalue = getPrevalueForField(formField, k);
            if (prevalue.value === valueParts[j]) {
              resultParts.push((prevalue.caption && prevalue.caption.length > 0) ? prevalue.caption : valueParts[j]);
              matchedWithPrevalue = true;
              break;
            }
          }

          if (!matchedWithPrevalue) {
            resultParts.push(valueParts[j]); // Didn't find a prevalue match for this part of the record value, so use the value part instead.
          }
        }

        result = resultParts.join(prevalueValueSeparator);
      }
    }

    return result;
  };

  $scope.toggleRecordStateSelection = function (recordState) {
    var idx = $scope.filter.states.indexOf(recordState);

    // Is currently selected
    if (idx > -1) {
      $scope.filter.states.splice(idx, 1);
    }

    // Is newly selected
    else {
      $scope.filter.states.push(recordState);
    }
  };

  $scope.toggleSelection = function toggleSelection(field) {
    var idx = $scope.hiddenFields.indexOf(field);

    // Is currently selected
    if (idx > -1) {
      $scope.hiddenFields.splice(idx, 1);
    } else {
      $scope.hiddenFields.push(field);
    }
  };

  $scope.edit = function (schema) {
    editorService.open({
      view: "/app_plugins/UmbracoForms/Backoffice/Form/dialogs/entriessettings.html",
      schema: schema,
      toggle: $scope.toggleSelection,
      hiddenFields: $scope.hiddenFields,
      filter: $scope.filter,
      size: 'medium'
    });
  };

  $scope.next = function () {
    $scope.filter.startIndex++;
  };

  $scope.prev = function () {
    $scope.filter.startIndex--;
  };

  $scope.goToPage = function (index) {
    $scope.filter.startIndex = index;
  };

  $scope.search = _.debounce(function (resetIndex) {
    // Set loading to true
    $scope.loading = true;

    $scope.reset(resetIndex);

    $scope.$apply(function () {
      recordResource.getRecords($scope.filter).then(function (response) {
        // Got results back - set loading to false]
        $scope.loading = false;

        $scope.records = response.data;
        vm.pagination.totalPages = response.data.totalNumberOfPages;

        limitRecordFields($scope.records);

      });
    });
  }, 300);

  $scope.filterChanged = function () {
    var resetIndex = true;
    $scope.search(resetIndex);
  };

  $scope.reset = function (resetIndex) {
    $scope.selectedRows.length = 0;
    $scope.allIsChecked = false;

    if (resetIndex) {
      $scope.filter.startIndex = 1;
    }
  };

  $scope.clearSelection = function () {
    $scope.selectedRows.length = 0;
    $scope.allIsChecked = false;

    for (var i = 0; i < $scope.records.results.length; i++) {
      var row = $scope.records.results[i];
      row.selected = false;
    }
  };

  $scope.more = function () {
    $scope.filter.startIndex++;
    loadRecords($scope.filter, true);
  };

  $scope.toggleRow = function (row) {
    row.selected = !row.selected;
    if (row.selected) {
      $scope.selectedRows.push(row.id);
      $scope.allIsChecked = ($scope.selectedRows.length >= $scope.records.results.length);
    } else {
      var i = $scope.selectedRows.indexOf(row.id);
      $scope.selectedRows.splice(i, 1);
      $scope.allIsChecked = false;
    }

    localizationService.localize("formEntries_selectedRowsDescription", [$scope.selectedRows.length, $scope.records.totalNumberOfResults]).then(function (val) {
      $scope.selectedRowsDescription = val;
    });
  };

  $scope.toggleRowLegacy = function (row) {
    if (row.selected) {
      $scope.selectedRows.push(row.id);
      $scope.allIsChecked = ($scope.selectedRows.length >= $scope.records.results.length);
    } else {
      var i = $scope.selectedRows.indexOf(row.id);
      $scope.selectedRows.splice(i, 1);
      $scope.allIsChecked = false;
    }
  };

  $scope.toggleAllLegacy = function ($event) {
    var checkbox = $event.target;
    $scope.selectedRows.length = 0;

    for (var i = 0; i < $scope.records.results.length; i++) {
      var entity = $scope.records.results[i];
      entity.selected = checkbox.checked;

      if (checkbox.checked) {
        $scope.selectedRows.push(entity.id);
      }
    }
  };

  $scope.toggleAll = function () {
    var newValue = !$scope.allIsChecked;

    for (var i = 0; i < $scope.records.results.length; i++) {
      var entity = $scope.records.results[i];

      if (entity.selected !== newValue) {
        $scope.toggleRow(entity);
      }
    }
  };

  $scope.executeRecordSetAction = function (action) {
    // Get the data we need in order to send to the API Endpoint
    var model = {
      formId: $scope.form.id,
      recordKeys: $scope.selectedRows,
      actionId: action.id
    };

    var performAction = function () {
      $scope.recordSetActionExecuting = true;
      localizationService.localizeMany(["formEntries_executeCompleteTitle", "formEntries_executeSuccessMessage", "formEntries_executeErrorMessage"]).then(function (labels) {
        recordResource.executeRecordSetAction(model).then(function (response) {
          $scope.reset(true);
          loadRecords($scope.filter, false);
          $scope.recordSetActionExecuting = false;
          notificationsService.success(labels[0], labels[1].replace("%0%", action.name));
        }, function (err) {
          // Error Function - so get an error response from API
          notificationsService.error(labels[0], labels[2].replace("%0%", action.name).replace("%1%", err));
        });
      });
    };

    var presentConfirmation = function (confirmMessage) {
      var overlay = {
        view: "confirm",
        title: "Confirmation",
        content: confirmMessage,
        closeButtonLabel: "No",
        submitButtonLabel: "Yes",
        submitButtonStyle: "danger",
        close: function () {
          overlayService.close();
        },
        submit: function () {
          performAction();
          overlayService.close();
        }
      };
      overlayService.open(overlay);
    };

    // Check if the action we are running requires a confirmation and that we have a message to be displayed.
    if (action.needsConfirm && action.confirmMessage.length > 0) {

      // See if we have a localizable message.
      if (action.confirmMessage[0] === "@") {
        localizationService.localize(action.confirmMessage).then(function (val) {
          presentConfirmation(val);
        });
      } else {
        presentConfirmation(action.confirmMessage);
      }
    }
    else {
      // No confirmation required, so execute immediately.
      performAction();
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.EntriesSettingsController", function ($scope, $timeout, exportResource, utilityService, editorService, localizationService, providerLocalizationHelper) {
  // The Form ID is found in the filter object we pass into the dialog
  var formId = $scope.model.filter.form;

  exportResource.getExportTypes(formId).then(function (response) {
    $scope.exportTypes = response.data;

    localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderExportTypes", $scope.exportTypes)).then(function (labels) {
      providerLocalizationHelper.applyLocalizationLabels($scope.exportTypes, labels);
    });
  });

  $scope.close = function () {
    editorService.closeAll();
  };

  $scope.export = function (type, filter) {
    if ($scope.exporting) {
      return;
    }

    $scope.exporting = true;
    filter.exportType = type.id;

    // Check if we need to do server time offset to the date we are displaying
    var serverTimeNeedsOffsetting = utilityService.serverTimeNeedsOffsetting();
    if (serverTimeNeedsOffsetting) {
      // Use the localOffset to correct the server times with the client browser's offset
      filter.localTimeOffset = new Date().getTimezoneOffset();
    }

    exportResource.generateExport(filter).then(function (response) {
      var url = exportResource.getExportUrl(response.data.formId, response.data.fileName);
      var iframe = document.createElement('iframe');

      iframe.id = "hiddenDownloadframe";
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      iframe.src = url;

      // Remove all traces
      $timeout(function () {
        document.body.removeChild(iframe);
        $scope.exporting = false;
      }, 1000);
    });
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.MoveController", function ($scope, formResource, treeService, navigationService, eventsService, notificationsService, formsValidationService, localizationService) {
  var folderIdPrefix = "folder-";
  var movingFolder = $scope.currentNode.id.startsWith(folderIdPrefix);

  function nodeSelectHandler(args) {
    args.event.preventDefault();
    args.event.stopPropagation();

    if ($scope.target) {
      //un-select if there's a current one selected
      $scope.target.selected = false;
    }

    $scope.target = args.node;
    $scope.target.selected = true;
  }

  function parseFolderId(id) {
    return id.substring(folderIdPrefix.length);
  }

  $scope.dialogTreeApi = {};
  $scope.source = _.clone($scope.currentNode);
  $scope.title = "";
  $scope.successMessage = "";

  localizationService.localize("formMove_title", [$scope.source.name]).then(function (val) {
    $scope.title = val;
  });

  $scope.move = function () {
    $scope.errorMessage = null;

    function handleSuccess(type, path) {
      $scope.errorMessage = null;
      treeService.removeNode($scope.currentNode);

      navigationService.syncTree({
        tree: "form",
        path: path.split(','),
        forceReload: true,
        activate: true
      });

      localizationService.localize("formMove_successMessage", [$scope.source.name, $scope.target.name]).then(function (val) {
        $scope.successMessage = val;
      });

      localizationService.localizeMany([
        "formMove_successNotificationHeader",
        "formMove_successNotificationDescriptionForForm",
        "formMove_successNotificationDescriptionForFolder"
      ]).then(function (labels) {
        notificationsService.showNotification({
          type: 0,
          header: labels[0],
          message: type === "form" ? labels[1] : labels[2],
        });
      });

      navigationService.hideMenu();

      eventsService.emit('app.refreshEditor');
    }

    function handleError(err) {
      $scope.errorMessage = formsValidationService.getErrorMessageFromExceptionResponse(err);
    }

    if (movingFolder) {
      formResource.moveFolder($scope.target.id, parseFolderId($scope.source.id))
        .then(function (response) {
          handleSuccess("folder", response.data);
        }, function (err) {
          handleError(err);
        });
    } else {
      formResource.moveForm($scope.target.id, $scope.source.id)
        .then(function (response) {
          handleSuccess("form", response.data);
        }, function (err) {
          handleError(err);
        });
    }
  };

  $scope.onTreeInit = function () {
    $scope.dialogTreeApi.callbacks.treeNodeSelect(nodeSelectHandler);
  };

  $scope.close = function () {
    navigationService.hideDialog();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Form.RenameController", function ($scope, formResource, navigationService, formHelper, notificationsService, formsValidationService, localizationService) {
  var vm = this;
  var folderIdPrefix = "folder-";
  var node = $scope.currentNode;

  function parseFolderId(id) {
    return id.substring(folderIdPrefix.length);
  }

  vm.buttonState = "init";
  vm.errorMessage = null;
  vm.newName = node.name;
  vm.deletingFolder = $scope.currentNode.id.startsWith(folderIdPrefix);

  vm.performRename = function () {
    if (vm.deletingFolder) {
      vm.errorMessage = null;

      if (formHelper.submitForm({
        scope: $scope,
        formCtrl: $scope.renameForm
      })) {
        formResource.renameFolder(parseFolderId(node.id), vm.newName).then(function (response) {
          var path = $scope.currentNode.path;

          navigationService.syncTree({
            tree: "form",
            path: path.split(','),
            forceReload: true,
            activate: true
          });

          localizationService.localizeMany([
            "formRename_successNotificationHeader",
            "formRename_successNotificationDescriptionForFolder"
          ]).then(function (labels) {
            notificationsService.showNotification({
              type: 0,
              header: labels[0],
              message: labels[1],
            });
          });

          navigationService.hideMenu();
        }, function (err) {
          formHelper.resetForm({ scope: $scope, formCtrl: $scope.createFolderForm, hasErrors: true });
          vm.errorMessage = formsValidationService.getErrorMessageFromExceptionResponse(err);
        });
      }
    } else {
      // Only folder renames are supported, but keeping this placeholder in in case
      // we wanted to implement for forms too.
    }
  };

  vm.cancelRename = function () {
    navigationService.hideNavigation();
  };
});

/**
 * @ngdoc controller
 * @name UmbracoForms.Overlays.FieldsetSettingsOverlay
 * @function
 *
 * @description
 * The controller for the Fieldset Settings dialog
 */
angular.module("umbraco").controller("UmbracoForms.Overlays.FieldsetSettingsOverlay", function ($scope, formService, editorService, localizationService) {
  var vm = this;

  function localizeConditionSelectors(types, key) {
    if (types) {
      var keys = [];
      for (var i = 0; i < types.length; i++) {
        keys.push("formConditions_" + key + types[i].value);
      }

      localizationService.localizeMany(keys).then(function (labels) {
        for (var i = 0; i < labels.length; i++) {
          types[i].name = labels[i];
        }
      });
    }
  }

  function setColumnCountDescription() {
    if ($scope.model.fieldset.containers) {
      var tokens = [$scope.model.fieldset.containers.length];
      localizationService.localize("fieldSetColumns_columnNumberDescription", tokens).then(function (val) {
        vm.fieldSetContainersDescription = val;
      });
    }
  }

  vm.labels = {};
  vm.enableConditionsToggleText = "";
  vm.fieldSetContainersDescription = "";
  vm.actionTypes = [];
  vm.logicTypes = [];
  vm.operators = [];
  vm.actionTypes = formService.getActionTypes();
  vm.logicTypes = formService.getLogicTypes();
  vm.operators = formService.getOperators();

  localizeConditionSelectors(vm.actionTypes, "actionType");
  localizeConditionSelectors(vm.logicTypes, "logicType");
  localizeConditionSelectors(vm.operators, "operator");

  localizationService.localize("formConditions_enableConditions").then(function (val) {
    vm.enableConditionsToggleText = val;
  });

  if (!$scope.model.fieldset.condition) {
    $scope.model.fieldset.condition = {};
    $scope.model.fieldset.condition.actionType = vm.actionTypes[0].value;
    $scope.model.fieldset.condition.logicType = vm.logicTypes[0].value;
  }

  var oldFieldset = angular.copy($scope.model.fieldset);
  var oldContainers = angular.copy($scope.model.fieldset.containers);

  setColumnCountDescription();

  vm.deleteConditionRule = function (rules, rule) {
    formService.deleteConditionRule(rules, rule);
  };

  vm.addConditionRule = function (condition) {
    formService.addEmptyConditionRule(condition);

    // Set default operator
    var lastIndex = condition.rules.length - 1;
    condition.rules[lastIndex].operator = vm.operators[0].value;
  };

  vm.conditionFieldSelected = function (selectedField, rule) {
    formService.populateConditionRulePrevalues(selectedField, rule, $scope.model.fields);
  };

  vm.canAddColumn = function () {
    var index = $scope.model.fieldset.containers.length;
    return index < parseInt(Umbraco.Sys.ServerVariables.umbracoPlugins.forms.maxNumberOfColumnsInFormGroup);
  };

  vm.addColumn = function () {
    if (!vm.canAddColumn()) {
      return;
    }

    var index = $scope.model.fieldset.containers.length;
    formService.addContainer($scope.model.fieldset, index);
    setColumnCountDescription();
  };

  vm.removeColumn = function (container) {
    formService.deleteContainer($scope.model.fieldset, container);
    setColumnCountDescription();
  };

  vm.toggleConditions = function () {
    $scope.model.fieldset.condition.enabled = !$scope.model.fieldset.condition.enabled;
  };

  vm.close = function () {
    $scope.model.fieldset.containers = oldContainers;
    $scope.model.fieldset = oldFieldset;

    editorService.close();
  };

  vm.submit = function () {
    editorService.close();
  };
});

/**
 * @ngdoc controller
 * @name UmbracoForms.Overlays.FieldSettingsOverlay
 * @function
 *
 * @description
 * The controller for the Field Settings dialog
 */
angular.module("umbraco").controller("UmbracoForms.Overlays.FieldSettingsOverlay", function ($scope, localizationService, formService, userService, editorService, formHelper) {
  var vm = this;
  var localizeValidation;

  function matchValidationType() {
    if ($scope.model.field.regex !== null && $scope.model.field.regex !== "" && $scope.model.field.regex !== undefined) {
      return localizeValidation.then(function () {
        var match = false;

        // Find and show if a match from the list has been chosen
        angular.forEach(vm.validationTypes, function (validationType, index) {
          if ($scope.model.field.regex === validationType.pattern) {
            vm.selectedValidationType = validationType;
            vm.showValidationPattern = true;
            match = true;
          }
        });

        if (!match) {
          // If there is no match - choose the custom validation option.
          angular.forEach(vm.validationTypes, function (validationType) {
            if (validationType.key === "custom") {
              vm.selectedValidationType = validationType;
              vm.showValidationPattern = true;
            }
          });
        }
      });
    }
  }

  function localizeConditionSelectors(types, key) {
    if (types) {
      var keys = [];
      for (var i = 0; i < types.length; i++) {
        keys.push("formConditions_" + key + types[i].value);
      }

      localizationService.localizeMany(keys).then(function (labels) {
        for (var i = 0; i < labels.length; i++) {
          types[i].name = labels[i];
        }
      });
    }
  }

  vm.showValidationPattern = false;
  vm.focusOnPatternField = false;
  vm.focusOnMandatoryField = false;
  vm.canEditSensitiveData = false; // Default to false - until we check with the server for this user to see if they have rights to edit/set this property
  vm.loading = true;  // We need to do a serverside call lookup at init/active to check is user has access to sensitive data
  vm.selectedValidationType = {};
  vm.actionTypes = [];
  vm.logicTypes = [];
  vm.operators = [];
  vm.mandatoryToggleText = "";
  vm.sensitiveDataToggleText = "";
  vm.enableConditionsToggleText = "";
  vm.multipleFilesToggleTextOn = "";
  vm.multipleFilesToggleTextOff = "";

  localizeValidation = localizationService.localizeMany([
    "validation_validateAsEmail",
    "validation_validateAsNumber",
    "validation_validateAsUrl",
    "validation_enterCustomValidation",
    "validation_fieldIsMandatory"
  ]).then(function (labels) {
    vm.validationTypes = [{
      name: labels[0],
      key: "email",
      pattern: "^[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$",
      enableEditing: true
    }, {
      name: labels[1],
      key: "number",
      pattern: "^[0-9]*$",
      enableEditing: true
    }, {
      name: labels[2],
      key: "url",
      pattern: "https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}",
      enableEditing: true
    }, {
      name: labels[3],
      key: "custom",
      pattern: "",
      enableEditing: true
    }];

    vm.mandatoryToggleText = labels[4];
  });

  localizationService.localizeMany([
    "fieldSettings_sensitiveDataLabel",
    "formConditions_enableConditions",
    "fieldSettings_multipleFilesToggleTextOn",
    "fieldSettings_multipleFilesToggleTextOff"
  ]).then(function (labels) {
    vm.sensitiveDataToggleText = labels[0];
    vm.enableConditionsToggleText = labels[1];
    vm.multipleFilesToggleTextOn = labels[2];
    vm.multipleFilesToggleTextOff = labels[3];
  });

  // Creating duplicate of the fields array on the model
  // As the select for the conditions needs to ensure it does not include itself
  // Need to use angular.copy() otherwise when we remove item in fieldConditions its data-binding back down to the original model.fields
  vm.fieldConditions = angular.copy($scope.model.fields);

  // Trying not to use _underscore.js
  // Loop over array until we find the item where the ID matches & remove object from the array
  for (var i = 0; i < vm.fieldConditions.length; i++) {
    if (vm.fieldConditions[i].id === $scope.model.field.id) {
      vm.fieldConditions.splice(i, 1);
      break;
    }
  }

  vm.actionTypes = formService.getActionTypes();
  vm.logicTypes = formService.getLogicTypes();
  vm.operators = formService.getOperators();

  localizeConditionSelectors(vm.actionTypes, "actionType");
  localizeConditionSelectors(vm.logicTypes, "logicType");
  localizeConditionSelectors(vm.operators, "operator");

  // Verify that the current user is allowed to view & change the property 'containsSensitiveData'
  userService.getCurrentUser().then(function (user) {
    // Set the API controller response on the Angular ViewModel
    vm.canEditSensitiveData = user.userGroups.indexOf("sensitiveData") !== -1;

    // Got a response back from promise - so lets load up the UI
    vm.loading = false;
  });

  if (!$scope.model.field.condition) {
    $scope.model.field.condition = {};
    $scope.model.field.condition.actionType = vm.actionTypes[0].value;
    $scope.model.field.condition.logicType = vm.logicTypes[0].value;
  }

  matchValidationType();

  // If the prevalue source Id hasn't been defined, ensure angularjs doesn't add an initial empty
  // select list option by initialising to the first empty value (the 'Choose...' prompt.)
  // See: https://stackoverflow.com/a/12654812/489433
  if (!$scope.model.field.prevalueSourceId) {
    $scope.model.field.prevalueSourceId = '00000000-0000-0000-0000-000000000000';
  }

  vm.matchValidationType = matchValidationType; // Expose for test

  vm.changeValidationType = function (selectedValidationType) {
    if (selectedValidationType) {
      $scope.model.field.regex = selectedValidationType.pattern;
      vm.showValidationPattern = true;

      // Set focus on textarea
      if (selectedValidationType.key === "custom") {
        vm.focusOnPatternField = true;
      }
    } else {
      $scope.model.field.regex = "";
      vm.showValidationPattern = false;
    }
  };

  vm.changeValidationPattern = function () {
    matchValidationType();
  };

  vm.openFieldTypePicker = function (field) {
    vm.focusOnMandatoryField = false;

    var fieldTypePicker = {
      view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/fieldtypepicker/field-type-picker.html",
      title: "Choose answer type",
      hideSubmitButton: true,
      size: "medium",
      submit: function (model) {
        formService.loadFieldTypeSettings(field, model.fieldType);

        // This should be removed in next major version
        field.removePrevalueEditor = true;

        // If the new field doesn't support regex validation, ensure to clear any previously stored pattern and message.
        if (!model.fieldType.supportsRegex) {
          field.regex = "";
          field.invalidErrorMessage = "";
        }

        editorService.close();
      },
      close: function (model) {
        editorService.close();
      }
    };

    editorService.open(fieldTypePicker);
  };

  vm.deleteConditionRule = function (rules, rule) {
    formService.deleteConditionRule(rules, rule);
  };

  vm.addConditionRule = function (condition) {
    formService.addEmptyConditionRule(condition);

    // Set default operator
    var lastIndex = condition.rules.length - 1;
    condition.rules[lastIndex].operator = vm.operators[0].value;
  };

  vm.getPrevalues = function (field) {
    formService.loadFieldTypePrevalues(field);
  };

  vm.conditionFieldSelected = function (selectedField, rule) {
    formService.populateConditionRulePrevalues(selectedField, rule, $scope.model.fields);
  };

  vm.submitOnEnter = function (event) {
    if (event && event.keyCode === 13) {
      vm.submit();
    }
  };

  vm.submit = function () {
    if ($scope.model.submit) {
      if (formHelper.submitForm({
        scope: $scope
      })) {
        $scope.model.submit($scope.model);
      }
    }
  };

  vm.close = function () {
    if ($scope.model.close) {
      $scope.model.close();
    }
  };

  vm.toggleConditions = function () {
    $scope.model.field.condition.enabled = !$scope.model.field.condition.enabled;
  };

  vm.toggleMandatory = function () {
    $scope.model.field.mandatory = !$scope.model.field.mandatory;
  };

  vm.toggleSensitiveData = function () {
    $scope.model.field.containsSensitiveData = !$scope.model.field.containsSensitiveData;
  };

  vm.toggleAllowMultipleFileUploads = function () {
    $scope.model.field.allowMultipleFileUploads = !$scope.model.field.allowMultipleFileUploads;
  };
});

angular.module("umbraco").controller("UmbracoForms.Overlays.FieldTypePickerOverlayController", function ($scope, formResource, localizationService, providerLocalizationHelper) {
  var vm = this;
  vm.fieldTypes = [];
  vm.searchTerm = "";

  // Get workflows with settings
  formResource.getAllFieldTypesWithSettings().then(function (response) {
    vm.fieldTypes = response.data;
    localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderFieldTypes", vm.fieldTypes)).then(function (labels) {
      providerLocalizationHelper.applyLocalizationLabels(vm.fieldTypes, labels);
    });
  });

  vm.pickFieldType = function (selectedFieldType) {
    $scope.model.fieldType = selectedFieldType;
    $scope.model.submit($scope.model);
  };

  vm.filterItems = function () {
    // Clear item details
    $scope.model.itemDetails = null;
  };

  vm.showDetailsOverlay = function (workflowType) {
    $scope.model.itemDetails = {
      icon: workflowType.icon,
      title: workflowType.name,
      description: workflowType.description
    };
  };

  vm.hideDetailsOverlay = function () {
    $scope.model.itemDetails = null;
  };

  vm.close = function () {
    if ($scope.model.close) {
      $scope.model.close();
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.FormPickerOverlayController", function ($scope, formPickerResource) {
  var vm = this;

  function pickForm(form) {
    if (form.selected) {
      // If form is already selected we deselect and remove it from the picked forms array
      form.selected = false;

      angular.forEach($scope.model.selectedForms, function (selectedForm, index) {
        if (selectedForm.id === form.id) {
          $scope.model.selectedForms.splice(index, 1);
        }
      });
    } else {
      // Set selected flag so we can show checkmark icon
      form.selected = true;

      // Store selected form in an array
      $scope.model.selectedForms.push(form);

      // If it's not a multipicker - submit the overlay
      if (!$scope.model.multiPicker) {
        $scope.model.submit($scope.model);
      }
    }
  }

  function loadFormsList() {
    vm.loading = true;
    formPickerResource.getFormsForPicker($scope.model.allowedForms).then(function (response) {
      vm.forms = response;
      vm.loading = false;
      vm.formsLoaded = true;
    }, function (err) {
      vm.error = "An error has occured while loading the avaialble forms.";
      vm.loading = false;
    });
  }

  function nodeSelectHandler(args) {
    args.event.preventDefault();
    args.event.stopPropagation();

    // Make sure to now allow selecting of a folder.
    if (!args.node.id.startsWith("folder-")) {
      pickForm(args.node);
    }
  }

  function treeNodeExpandedHandler(args) {
    // There's an unfortunate bug with Umbraco's tree directive that causes the underlying content item to save when a tree in the
    // overlay dialog is expanded: https://github.com/umbraco/Umbraco-CMS/issues/6157
    // It's caused by the /src/Umbraco.Web.UI.Client/src/views/components/tree/umb-tree-item.html not having type="button" set.
    // So to fix this, every time the tree is expanded, we'll set the type attribute dynamically.
    // In order to find the elements in the DOM, we need a short delay.
    setTimeout(function () {
      var pickerElements = document.getElementsByClassName("umb-form-picker-tree");
      if (pickerElements.length > 0) {
        var pickerElement = pickerElements[0];
        var buttonsToFix = pickerElement.querySelectorAll('[data-element="tree-item-expand"]:not([type="button"])');
        for (var i = 0; i < buttonsToFix.length; i++) {
          buttonsToFix[i].setAttribute("type", "button");
        }
      }
    }, 100);
  }

  vm.loading = false;
  vm.forms = [];
  vm.error = null;
  vm.dialogTreeApi = {};

  // Only allow folder selection if forms in folders is support (which it only is if form definitions are stored in the database)
  // and we don't have any allowed forms configured (as if we do, we need to implement that restriction, plus in any case it'll likely be easier to pick from the list).
  vm.allowFolderSelection = Umbraco.Sys.ServerVariables.umbracoPlugins.forms.storeUmbracoFormsInDb && (!$scope.model.allowedForms || $scope.model.allowedForms.length === 0);

  vm.selectView = vm.allowFolderSelection ? "folder" : "list";
  vm.formsLoaded = false;

  $scope.$watch('vm.selectView', function (value) {
    if (value === "list" && !vm.formsLoaded) {
      loadFormsList();
    }
  });

  // Set default title
  if (!$scope.model.title) {
    $scope.model.title = "Select a form";
  }

  // We don't need the submit button for a multi picker because we submit on select for the single picker
  if (!$scope.model.multiPicker) {
    $scope.model.hideSubmitButton = true;
  }

  // Make sure we have an array to push to
  if (!$scope.model.selectedForms) {
    $scope.model.selectedForms = [];
  }

  // Get the available forms if viewing in list view
  if (vm.selectView === "list") {
    loadFormsList();
  }

  vm.pickForm = pickForm;

  vm.onTreeInit = function () {
    vm.dialogTreeApi.callbacks.treeNodeSelect(nodeSelectHandler);
    vm.dialogTreeApi.callbacks.treeNodeExpanded(treeNodeExpandedHandler);
  };
});

/**
 * @ngdoc controller
 * @name UmbracoForms.Overlays.PageSettingsOverlay
 * @function
 *
 * @description
 * The controller for the Page Settings dialog
 */
angular.module("umbraco").controller("UmbracoForms.Overlays.PageSettingsOverlay", function ($scope, formService, editorService, localizationService) {
  var vm = this;

  function localizeConditionSelectors(types, key) {
    if (types) {
      var keys = [];
      for (var i = 0; i < types.length; i++) {
        keys.push("formConditions_" + key + types[i].value);
      }

      localizationService.localizeMany(keys).then(function (labels) {
        for (var i = 0; i < labels.length; i++) {
          types[i].name = labels[i];
        }
      });
    }
  }

  vm.actionTypes = [];
  vm.logicTypes = [];
  vm.operators = [];
  vm.enableConditionsToggleText = "";

  var oldButtonCondition = angular.copy($scope.model.page.buttonCondition);

  localizationService.localize("formConditions_enableConditions").then(function (val) {
    vm.enableConditionsToggleText = val;
  });

  vm.actionTypes = formService.getActionTypes();
  vm.logicTypes = formService.getLogicTypes();
  vm.operators = formService.getOperators();

  localizeConditionSelectors(vm.actionTypes, "actionType");
  localizeConditionSelectors(vm.logicTypes, "logicType");
  localizeConditionSelectors(vm.operators, "operator");

  if (!$scope.model.page.buttonCondition) {
    $scope.model.page.buttonCondition = {};
    $scope.model.page.buttonCondition.actionType = vm.actionTypes[0].value;
    $scope.model.page.buttonCondition.logicType = vm.logicTypes[0].value;
  }

  vm.deleteConditionRule = function (rules, rule) {
    formService.deleteConditionRule(rules, rule);
  };

  vm.addConditionRule = function (condition) {
    formService.addEmptyConditionRule(condition);

    // Set default operator
    var lastIndex = condition.rules.length - 1;
    condition.rules[lastIndex].operator = vm.operators[0].value;
  };

  vm.conditionFieldSelected = function (selectedField, rule) {
    formService.populateConditionRulePrevalues(selectedField, rule, $scope.model.fields);
  };

  vm.toggleConditions = function () {
    $scope.model.page.buttonCondition.enabled = !$scope.model.page.buttonCondition.enabled;
  };

  vm.close = function () {
    $scope.model.page.buttonCondition = oldButtonCondition;
    editorService.close();
  };

  vm.submit = function () {
    editorService.close();
  };
});

angular.module("umbraco").controller("UmbracoForms.ThemePickerOverlayController", function ($scope, themePickerResource) {
  var vm = this;
  vm.loading = true;
  vm.themes = [];
  vm.error = null;

  // Set default title
  if (!$scope.model.title) {
    $scope.model.title = "Select a theme";
  }

  // We don't need the submit button for a multi picker because we submit on select for the single picker
  if (!$scope.model.multiPicker) {
    $scope.model.hideSubmitButton = true;
  }

  // Make sure we have an array to push to
  if (!$scope.model.selectedThemes) {
    $scope.model.selectedThemes = [];
  }

  // Get the available forms
  themePickerResource.getThemes().then(function (response) {
    vm.themes = response;
    vm.loading = false;
  }, function (err) {
    // Error callback from - getting all Forms
    // Unsure what exception/error we would encounter
    // Would be just an empty collection if we cant find/get any
    vm.error = "An Error has occured while loading!";
    vm.loading = false;
  });

  vm.pickTheme = function (theme) {
    if (theme.selected) {
      // If form is already selected we deselect and remove it from the picked forms array
      theme.selected = false;

      angular.forEach($scope.model.selectedThemes, function (selectedTheme, index) {
        if (selectedTheme.name === theme.name) {
          $scope.model.selectedThemes.splice(index, 1);
        }
      });
    } else {
      // Set selected flag so we can show checkmark icon
      theme.selected = true;

      // Store selected form in an array
      $scope.model.selectedThemes.push(theme);

      // If it's not a multipicker - submit the overlay
      if (!$scope.model.multiPicker) {
        $scope.model.submit($scope.model);
      }
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.Overlays.WorkflowSettingsOverlayController", function ($scope, workflowResource, localizationService, providerLocalizationHelper, formService) {
  var vm = this;

  function localizeConditionSelectors(types, key, prefix) {
    if (types) {
      var keys = [];
      prefix = prefix || "";
      for (var i = 0; i < types.length; i++) {
        keys.push("formConditions_" + prefix + key + types[i].value);
      }

      localizationService.localizeMany(keys).then(function (labels) {
        for (var i = 0; i < labels.length; i++) {
          types[i].name = labels[i];
        }
      });
    }
  }

  function prepareDataForEdit() {
    // Transform includeSensitiveData field from an integer derived from an enum to a boolean,
    // for user selection via a check-box.
    // If the overlay is opened a second time, this will have already been done, so we need to
    // check for the already converted boolean too(https://github.com/umbraco/Umbraco.Forms.Issues/issues/958).
    $scope.model.workflow.includeSensitiveData = $scope.model.workflow.includeSensitiveData === 1 || $scope.model.workflow.includeSensitiveData === true ? true : false;

    // Localize the workflow name, description and settings.
    localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderWorkflows", [$scope.model.workflow], $scope.model.workflow.workflowTypeName)).then(function (labels) {
      providerLocalizationHelper.applyLocalizationLabels([$scope.model.workflow], labels, true);
    });
  }

  vm.workflowTypes = [];
  vm.focusWorkflowName = true;

  vm.enableConditionsToggleText = "";
  localizationService.localizeMany([
    "formConditions_enableConditions"
  ]).then(function (labels) {
    vm.enableConditionsToggleText = labels[0];
  });

  vm.actionTypes = formService.getActionTypes();
  vm.logicTypes = formService.getLogicTypes();
  vm.operators = formService.getOperators();

  localizeConditionSelectors(vm.actionTypes, "actionType", "workflow");
  localizeConditionSelectors(vm.logicTypes, "logicType");
  localizeConditionSelectors(vm.operators, "operator");

  if ($scope.model.workflow) {
    prepareDataForEdit();
  }

  if ($scope.model.workflowType && $scope.model.workflowType.id) {
    workflowResource.getScaffoldWorkflowType($scope.model.workflowType.id).then(function (response) {
      $scope.model.workflow = response.data;
      prepareDataForEdit();
    });
  }

  vm.toggleActive = function () {
    $scope.model.workflow.active = !$scope.model.workflow.active;
    $scope.workflowSettingsForm.$setDirty();
  };

  vm.toggleIncludeSensitiveData = function () {
    $scope.model.workflow.includeSensitiveData = !$scope.model.workflow.includeSensitiveData;
    $scope.workflowSettingsForm.$setDirty();
  };

  vm.toggleConditions = function () {
    $scope.model.workflow.condition.enabled = !$scope.model.workflow.condition.enabled;
  };

  vm.conditionFieldSelected = function (selectedField, rule) {
    formService.populateConditionRulePrevalues(selectedField, rule, $scope.model.fields);
  };

  vm.deleteConditionRule = function (rules, rule) {
    formService.deleteConditionRule(rules, rule);
  };

  vm.addConditionRule = function (condition) {
    formService.addEmptyConditionRule(condition);

    // Set default operator
    var lastIndex = condition.rules.length - 1;
    condition.rules[lastIndex].operator = vm.operators[0].value;
  };

  vm.close = function () {
    $scope.model.close($scope.workflowSettingsForm.$dirty);
  };

  vm.submit = function () {
    $scope.model.submit($scope.model);
  };
});

angular.module("umbraco").controller("UmbracoForms.Overlays.WorkflowsOverviewOverlayController", function ($scope, workflowResource, notificationsService, editorService, overlayService, localizationService) {
  var vm = this;

  function updateSortOrder(array) {
    var sortOrder = 0;
    for (var i = 0; i < array.length; i++) {
      var arrayItem = array[i];
      if (arrayItem.isDeleted === false) {
        arrayItem.sortOrder = sortOrder;
        sortOrder++;
      }
    }
  }

  // Massive hack to fix submit when pressing enter
  vm.focusOverlay = true;

  if (!$scope.model.formWorkflows.onSubmit) {
    $scope.model.formWorkflows.onSubmit = [];
  }

  if (!$scope.model.formWorkflows.onApprove) {
    $scope.model.formWorkflows.onApprove = [];
  }

  vm.workflowsSortableOptions = {
    distance: 10,
    tolerance: "pointer",
    connectWith: ".umb-forms-workflows__sortable-wrapper",
    opacity: 0.7,
    scroll: true,
    cursor: "move",
    zIndex: 6000,
    handle: ".sortable-handle",
    items: ".sortable",
    placeholder: "umb-forms-workflow__workflow-placeholder",
    start: function (e, ui) {
      ui.placeholder.height(ui.item.height());
    },
    stop: function (event, ui) {
      updateSortOrder($scope.model.formWorkflows.onSubmit);
      updateSortOrder($scope.model.formWorkflows.onApprove);
    }
  };

  vm.openWorkflowsTypesOverlay = function (workflowTypeArray) {
    // set overlay settings and open overlay
    localizationService.localize("formWorkflows_chooseWorkflow").then(function (val) {
      var workflowsTypesOverlay = {
        view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/workflow-types.html",
        title: val,
        fields: $scope.model.fields,
        size: "medium",
        submit: function (model) {

          // set sortOrder
          workflowTypeArray.push(model.workflow);
          updateSortOrder(workflowTypeArray);

          editorService.close();
        },
        close: function () {
          editorService.close();
        }
      };

      editorService.open(workflowsTypesOverlay);
    });
  };

  vm.editWorkflow = function (workflow, collection, index) {
    // Take a clone of the original workflow so can reset if the changes aren't submitted.
    var preEditedWorkflow = JSON.parse(JSON.stringify(workflow));

    var workflowSettingsOverlay = {
      view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/workflow-settings.html",
      title: workflow.name,
      workflow: workflow,
      fields: $scope.model.fields,
      size: "medium",
      submit: function (model) {
        // Validate settings
        workflowResource.validateWorkflowSettings(model.workflow).then(function (response) {
          if (response.data.length > 0) {
            angular.forEach(response.data, function (error) {
              notificationsService.error("Workflow failed to save", error.Message);
            });
          } else {
            editorService.close();
          }
        });
      },
      close: function (hasChanges) {
        // Reset to original values after confirmation if changes were made and 'Submit' button was not used.
        if (hasChanges) {
          localizationService.localizeMany([
            "formWorkflows_closeConfirmationTitle",
            "formWorkflows_closeConfirmationMessage",
            "general_no",
            "general_yes"
          ]).then(function (labels) {
            var overlay = {
              view: "confirm",
              title: labels[0],
              content: labels[1],
              closeButtonLabel: labels[2],
              submitButtonLabel: labels[3],
              submitButtonStyle: "danger",
              close: function () {
                // Keep workflow settings editor open.
                overlayService.close();
              },
              submit: function () {
                // Reset changes and close workflow settings editor.
                $scope.model.formWorkflows[collection][index] = preEditedWorkflow;
                overlayService.close();
                editorService.close();
              }
            };

            overlayService.open(overlay);
          });
        } else {
          // No changes detected, so just close.
          editorService.close();
        }
      }
    };

    editorService.open(workflowSettingsOverlay);
  };

  vm.removeWorkflow = function (workflow, event, workflowTypeArray) {
    workflow.isDeleted = true;
    updateSortOrder(workflowTypeArray);
    event.stopPropagation();
  };

  vm.editSubmitMessageWorkflow = function () {
    localizationService.localize("formWorkflows_messageOnSubmit").then(function (val) {
      var submitMessageWorkflowOverlay = {
        view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/submit-message-workflow-settings.html",
        title: val,
        messageOnSubmit: $scope.model.messageOnSubmit,
        goToPageOnSubmit: $scope.model.goToPageOnSubmit,
        size: "medium",
        submit: function (model) {
          $scope.model.messageOnSubmit = model.messageOnSubmit;
          $scope.model.goToPageOnSubmit = model.goToPageOnSubmit;
          editorService.close();
        },
        close: function () {
          editorService.close();
        }
      };

      editorService.open(submitMessageWorkflowOverlay);
    });
  };

  vm.close = function () {
    $scope.model.close();
  };

  vm.submit = function () {
    $scope.model.submit($scope.model);
  };
});

angular.module("umbraco").controller("UmbracoForms.Overlays.WorkflowTypesOverlayController", function ($scope, workflowResource, notificationsService, editorService, overlayService, localizationService, providerLocalizationHelper) {
  var vm = this;

  function setDefaultWorkflowIcon(workflowTypes) {
    for (var i = 0; i < workflowTypes.length; i++) {
      var workflowType = workflowTypes[i];
      if (!workflowType.icon) {
        workflowType.icon = "icon-mindmap";
      }
    }
  }

  vm.workflowTypes = [];
  vm.searchTerm = "";

  // Get workflows with settings
  workflowResource.getAllWorkflowTypesWithSettings().then(function (response) {
    vm.workflowTypes = response.data;
    setDefaultWorkflowIcon(vm.workflowTypes);

    localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderWorkflows", vm.workflowTypes)).then(function (labels) {
      providerLocalizationHelper.applyLocalizationLabels(vm.workflowTypes, labels);
    });
  });

  vm.pickWorkflowType = function (selectedWorkflowType) {
    // Set overlay settings + open overlay
    var workflowSettingsOverlay = {
      view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/workflow-settings.html",
      title: selectedWorkflowType.name,
      workflow: $scope.model.workflow,
      workflowType: selectedWorkflowType,
      fields: $scope.model.fields,
      size: "medium",
      submit: function (model) {
        workflowResource.validateWorkflowSettings(model.workflow).then(function (response) {
          if (response.data.length > 0) {
            angular.forEach(response.data, function (error) {
              notificationsService.error("Workflow failed to save", error.Message);
            });
          } else {
            // Need to add the properties to the $scope from this submitted model
            $scope.model.workflow = model.workflow;

            // Submit overlay and return the model
            $scope.model.submit($scope.model);

            // Close the infinite editor
            editorService.close();
          }
        });
      },
      close: function (hasChanges) {
        if (hasChanges) {
          localizationService.localizeMany([
            "formWorkflows_closeConfirmationTitle",
            "formWorkflows_closeConfirmationMessage",
            "general_no",
            "general_yes"
          ]).then(function (labels) {
            var overlay = {
              view: "confirm",
              title: labels[0],
              content: labels[1],
              closeButtonLabel: labels[2],
              submitButtonLabel: labels[3],
              submitButtonStyle: "danger",
              close: function () {
                // Keep workflow settings editor open.
                overlayService.close();
              },
              submit: function () {
                // Close workflow settings editor.
                overlayService.close();
                editorService.close();
              }
            };

            overlayService.open(overlay);
          });
        } else {
          // No changes detected, so just close.
          editorService.close();
        }
      }
    };

    editorService.open(workflowSettingsOverlay);
  };

  vm.filterItems = function () {
    // Clear item details
    $scope.model.itemDetails = null;
  };

  vm.showDetailsOverlay = function (workflowType) {
    $scope.model.itemDetails = {
      icon: workflowType.icon,
      title: workflowType.name,
      description: workflowType.description
    };
  };

  vm.hideDetailsOverlay = function () {
    $scope.model.itemDetails = null;
  };

  vm.close = function () {
    $scope.model.close();
  };
});

/**
 * @ngdoc controller
 * @name UmbracoForms.Editors.Form.FormDesignController
 * @function
 *
 * @description
 * The controller for the Umbraco Forns type editor
 */
angular.module("umbraco").controller("UmbracoForms.Editors.Form.FormDesignController", function (formResource, securityResource, localizationService, providerLocalizationHelper) {
  var vm = this;
  vm.currentPage = {};
  vm.security = {};

  // Get PreValues for the current form we are editing/designing
  formResource.getPrevalueSources().then(function (resp) {
    vm.prevaluesources = resp.data;

    formResource.getAllFieldTypesWithSettings().then(function (resp) {
      vm.fieldtypes = resp.data;
      localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderFieldTypes", vm.fieldtypes)).then(function (labels) {
        providerLocalizationHelper.applyLocalizationLabels(vm.fieldtypes, labels);
        vm.ready = true;
      });
    });
  });

  securityResource.getForCurrentUser(false).then(function (response) {
    vm.security = response.data;
  });
});

angular.module("umbraco").controller("UmbracoForms.Editors.FormSecurity.CreateController", function ($location, navigationService, securityResource) {
  var vm = this;
  vm.selectedUser = null;
  vm.users = [];
  vm.noUsersToChoose = false;

  securityResource.getUsersWithoutSecurityRecords().then(function (response) {
    vm.users = response.data;
    vm.noUsersToChoose = vm.users.length === 0;
  });

  vm.navigateToCreate = function () {
    $location.path("/users/formsecurity/edit/user-" + vm.selectedUser.id);

    navigationService.hideNavigation();
  };

  vm.cancelCreate = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.FormSecurity.DeleteController", function ($scope, securityResource, navigationService, notificationsService, treeService, localizationService, utilityService) {
  var vm = this;
  vm.buttonState = "init";
  vm.title = "";

  localizationService.localize("formSecurity_deleteTitle", [$scope.currentNode.name]).then(function (val) {
    vm.title = utilityService.hexHtmlToString(val);
  });

  vm.performDelete = function (id) {
    vm.buttonState = "busy";

    localizationService.localizeMany([
      "formSecurity_deleteSuccessMessage",
      "formSecurity_deleteFailedMessage"
    ]).then(function (labels) {
      // User id will be prefixed with "user-";
      var userId = id.replace("user-", "");

      securityResource.deleteByUserId(userId).then(function () {
        vm.buttonState = "success";
        treeService.removeNode($scope.currentNode);
        navigationService.hideNavigation();
        notificationsService.success(labels[0]);
      }, function (err) {
        vm.buttonState = "error";
        notificationsService.error(labels[1], err.data.Message);
      });
    });
  };

  vm.cancelDelete = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.Security.EditController", function ($scope, $routeParams, securityResource, notificationsService, navigationService, localizationService, editorService, usersResource, userGroupsResource) {
  var vm = this;

  function stripFolderIdPrefix(id) {
    return id.replace("folder-", "");
  }

  vm.page = {};
  vm.startFoldersSupported = Umbraco.Sys.ServerVariables.umbracoPlugins.forms.storeUmbracoFormsInDb;
  vm.userGroupEditingSupported = Umbraco.Sys.ServerVariables.umbracoPlugins.forms.manageSecurityWithUserGroups;
  vm.security = {};
  vm.loading = true;

  // This view/controller is used for editing groups or users, which we can distinguish by the prefix
  // to the id provided in the route parameters.
  // We also parse the actual id without the prefix.
  var prefixes = ["group", "user"];
  for (var i = 0; i < prefixes.length; i++) {
    if ($routeParams.id.startsWith(prefixes[i] + "-")) {
      vm.editing = prefixes[i];
      vm.id = $routeParams.id.replace(prefixes[i] + "-", "");
    }
  }

  // Ensure the current item we are editing is highlighted in the tree.
  // Note: doesn't work for the admin user (as this leads to a path of -1 which is also used for the tree's root node).
  var path = [];
  path.push("-1");
  if (vm.userGroupEditingSupported) {
    path.push(vm.editing + "s");
  }

  path.push(vm.editing + "-" + vm.id);
  navigationService.syncTree({ tree: "formsecurity", path: path, forceReload: true });

  var initializeSecurity = function (data) {
    vm.security = data;
    vm.loading = false;
  };

  if (vm.editing === "group") {
    securityResource.getByUserGroupId(vm.id).then(function (response) {
      initializeSecurity(response.data);
    });
  } else {
    securityResource.getByUserId(vm.id, true).then(function (response) {
      initializeSecurity(response.data);
    });
  }

  if (vm.userGroupEditingSupported) {
    localizationService.localizeMany([
      "formSecurity_manageIndividualFormsLabel",
      "formSecurity_groupPermissions",
      "formSecurity_userPermissions",
      "formSecurity_startFolders"]).then(function (labels) {
        vm.page.name = labels[0];
        if (vm.editing === "group") {
          userGroupsResource.getUserGroup(vm.id).then(function (group) {
            vm.page.name += (": " + labels[1] + ": " + group.name);
          });
        } else {
          usersResource.getUser(vm.id).then(function (user) {
            vm.page.name += (": " + (vm.editing === "user" ? labels[2] : labels[3]) + ": " + user.name);
          });
        }
      });
  } else {
    localizationService.localize("formSecurity_manageIndividualFormsLabel").then(function (val) {
      vm.page.name = val;
      usersResource.getUser(vm.id).then(function (user) {
        vm.page.name += ": " + user.name;
      });
    });
  }

  vm.getUserOrGroupSecurity = function () {
    return vm.editing === "group" ? vm.security.userGroupSecurity : vm.security.userSecurity;
  };

  vm.toggleManageForms = function () {
    vm.getUserOrGroupSecurity().manageForms = !vm.getUserOrGroupSecurity().manageForms;
  };

  vm.toggleViewEntries = function () {
    vm.getUserOrGroupSecurity().viewEntries = !vm.getUserOrGroupSecurity().viewEntries;

    // If the user can't view entries, they also can't edit them.
    if (!vm.getUserOrGroupSecurity().viewEntries) {
      vm.getUserOrGroupSecurity().editEntries = false;
    }
  };

  vm.toggleEditEntries = function () {
    vm.getUserOrGroupSecurity().editEntries = !vm.getUserOrGroupSecurity().editEntries;
  };

  vm.toggleViewEntries = function () {
    vm.getUserOrGroupSecurity().viewEntries = !vm.getUserOrGroupSecurity().viewEntries;

    // If the user can't view entries, they also can't edit them.
    if (!vm.getUserOrGroupSecurity().viewEntries) {
      vm.getUserOrGroupSecurity().editEntries = false;
    }
  };

  vm.toggleEditEntries = function () {
    vm.getUserOrGroupSecurity().editEntries = !vm.getUserOrGroupSecurity().editEntries;
  };

  vm.toggleManageWorkflows = function () {
    vm.getUserOrGroupSecurity().manageWorkflows = !vm.getUserOrGroupSecurity().manageWorkflows;
  };

  vm.toggleManageDataSources = function () {
    vm.getUserOrGroupSecurity().manageDataSources = !vm.getUserOrGroupSecurity().manageDataSources;
  };

  vm.toggleManagePreValueSources = function () {
    vm.getUserOrGroupSecurity().managePreValueSources = !vm.getUserOrGroupSecurity().managePreValueSources;
  };

  vm.toggleFormAccess = function (form) {
    form.hasAccess = !form.hasAccess;
  };
  
  var selectedFolders = [];
  vm.openFolderPicker = function () {
    localizationService.localize("formSecurity_startFolders").then(function (val) {
      var folderPicker = {
        title: val,
        section: "forms",
        treeAlias: "form",
        customTreeParams: "foldersOnly=1&ignoreStartFolders=1",
        multiPicker: true,
        hideHeader: true,
        select: function (node) {
          node.selected = node.selected === true ? false : true;

          var folderId = stripFolderIdPrefix(node.id);
          var folderName = node.name;
          if (node.selected) {
            selectedFolders.push({
              id: folderId,
              name: folderName
            });
          } else {
            selectedFolders = selectedFolders.filter(function (item) {
              return item.id !== folderId;
            });
          }
        },
        submit: function (model) {
          // As we are using custom data and not Umbraco enties, model.selection will be unpopulated.
          // Instead we have the selections tracked in vm.security.startFolders.
          vm.security.startFolders = selectedFolders;
          editorService.close();
        },
        close: function () {
          editorService.close();
        }
      };

      selectedFolders = [];
      editorService.treePicker(folderPicker);
    });
  };

  vm.removeStartFolder = function (id) {
    vm.security.startFolders = vm.security.startFolders.filter(function (item) {
      return item.id !== id;
    });
  };

  vm.save = function () {
    localizationService.localizeMany(["formSecurity_saveSuccessTitle", "formSecurity_saveErrorTitle"]).then(function (labels) {
      var handleSuccess = function (response) {
        vm.security = response.data;
        notificationsService.success(labels[0], "");

        // SecurityForm is the name of the <form name='securityForm'>
        // Set it back to Pristine after we save, so when we browse away we don't get the 'discard changes' notification
        $scope.securityForm.$setPristine();
      };

      var handleError = function () {
        notificationsService.error(labels[1], "");
      };

      if (vm.editing === "group") {
        vm.security.userGroupSecurity.userGroupId = vm.id;
        securityResource.saveUserGroup(vm.security).then(function (response) {
          handleSuccess(response);
        }, function () {
          handleError();
        });
      } else {
        vm.security.userSecurity.user = vm.id;

        securityResource.saveUser(vm.security).then(function (response) {
          handleSuccess(response);

          // Sync the tree if editing a user record and user group editing is supported, as it could be we've added
          // a new user security record.
          if (vm.userGroupEditingSupported && vm.editing === "user") {
            navigationService.syncTree({ tree: "formsecurity", path: ["-1", "users", "user-" + vm.id], forceReload: true });
          }
        }, function () {
          handleError();
        });
      }
    });
  };
});

angular.module("umbraco").controller("Umbraco.Forms.GridEditors.FormPickerController", function ($scope, $timeout, editorService, macroResource, macroService, $routeParams, $sce) {
  $scope.title = "Click to insert form";
  $scope.macroAlias = "renderUmbracoForm";

  $scope.setFormMacro = function () {
    var dialogData = {
      richTextEditor: true,
      macroData: $scope.control.value || {
        macroAlias: $scope.macroAlias
      }
    };

    var macroPicker = {
      dialogData: dialogData,
      submit: function (model) {
        var macroObject = macroService.collectValueData(model.selectedMacro, model.macroParams, dialogData.renderingEngine);

        $scope.control.value = {
          macroAlias: macroObject.macroAlias,
          macroParamsDictionary: macroObject.macroParamsDictionary
        };

        $scope.setPreview($scope.control.value);
        editorService.close();
      },
      close: function () {
        editorService.close();
      }
    };
    editorService.macroPicker(macroPicker);
  };

  $scope.setPreview = function (macro) {
    var contentId = $routeParams.id;

    macroResource.getMacroResultAsHtmlForEditor(macro.macroAlias, contentId, macro.macroParamsDictionary)
      .then(function (htmlResult) {
        $scope.title = macro.macroAlias;
        if (htmlResult.trim().length > 0 && htmlResult.indexOf("Macro:") < 0) {
          // Replace the form tag with a div and indicate trusted HTML for accurate preview in the grid editor.
          // See: https://github.com/umbraco/Umbraco.Forms.Issues/issues/612
          htmlResult = htmlResult.replace('<form', '<div').replace('</form>', '</div>');
          $scope.preview = $sce.trustAsHtml(htmlResult);
        }
      });

  };

  $timeout(function () {
    if ($scope.control.$initializing) {
      $scope.setFormMacro();
    } else if ($scope.control.value) {
      $scope.setPreview($scope.control.value);
    }
  }, 200);
});

angular.module("umbraco").controller("UmbracoForms.Editors.PreValueSource.DeleteController", function ($scope, preValueSourceResource, navigationService, treeService) {
  $scope.delete = function (id) {
    preValueSourceResource.deleteByGuid(id).then(function () {
      treeService.removeNode($scope.currentNode);
      navigationService.hideNavigation();
    });
  };

  $scope.cancelDelete = function () {
    navigationService.hideNavigation();
  };
});

angular.module("umbraco").controller("UmbracoForms.Editors.PreValueSource.EditController", function ($scope, $routeParams, preValueSourceResource, editorState, notificationsService, navigationService, formHelper, securityResource, localizationService, providerLocalizationHelper) {
  function getPrevalues() {
    preValueSourceResource.getPreValues($scope.preValueSource).then(function (response) {
      $scope.prevalues = response.data;
    });
  }

  function setTypeAndSettings() {
    $scope.preValueSource.$type = _.where($scope.types, { id: $scope.preValueSource.fieldPreValueSourceTypeId })[0];

    // Set settings
    angular.forEach($scope.preValueSource.settings, function () {
      for (var key in $scope.preValueSource.settings) {
        if ($scope.preValueSource.settings.hasOwnProperty(key)) {
          if (_.where($scope.preValueSource.$type.settings, { alias: key }).length > 0) {
            _.where($scope.preValueSource.$type.settings, { alias: key })[0].value = $scope.preValueSource.settings[key];
          }
        }
      }
    });
  }

  // On load/init of 'editing' a prevalue source then
  // Let's check & get the current user's form security
  securityResource.getForCurrentUser(false).then(function (response) {
    $scope.security = response.data;

    // Check if we have access to current form OR manage forms has been disabled
    if (!$scope.security.userSecurity.managePreValueSources) {
      // Show error notification
      localizationService.localizeMany(["formPermissions_accessDeniedTitle", "formPrevalueSources_accessDeniedMessage"]).then(function (labels) {
        notificationsService.error(labels[0], labels[1]);
      });

      // Resync tree so that it's removed & hides
      navigationService.syncTree({ tree: "prevaluesource", path: ['-1'], forceReload: true, activate: false }).then(function (response) {
        // Response object contains node object & activate bool
        // Can then reload the root node -1 for this tree 'Forms Folder'
        navigationService.reloadNode(response.node);
      });

      // Don't need to wire anything else up
      return;
    }
  });

  if ($routeParams.create) {
    // We are creating so get an empty data type item
    preValueSourceResource.getScaffold()
      .then(function (response) {
        $scope.loaded = true;
        $scope.preValueSource = response.data;

        preValueSourceResource.getAllPreValueSourceTypesWithSettings()
          .then(function (resp) {
            $scope.types = resp.data;
            localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderPrevalueSources", $scope.types)).then(function (labels) {
              providerLocalizationHelper.applyLocalizationLabels($scope.types, labels);
            });
          });

        // Set a shared state
        editorState.set($scope.form);
      });
  } else {
    // We are editing so get the content item from the server
    preValueSourceResource.getByGuid($routeParams.id).then(function (response) {
      $scope.preValueSource = response.data;

      preValueSourceResource.getAllPreValueSourceTypesWithSettings().then(function (resp) {
        $scope.types = resp.data;
        localizationService.localizeMany(providerLocalizationHelper.getLocalizationKeys("formProviderPrevalueSources", $scope.types)).then(function (labels) {
          providerLocalizationHelper.applyLocalizationLabels($scope.types, labels);
          setTypeAndSettings();
          getPrevalues();
          $scope.loaded = true;
        });
      });

      // As we are editing an item we can highlight it in the tree
      navigationService.syncTree({ tree: "prevaluesource", path: [String($routeParams.id)], forceReload: false });

      // Set a shared state
      editorState.set($scope.preValueSource);
    });
  }

  $scope.setType = function () {
    $scope.prevalues = null;
    setTypeAndSettings();
  };

  $scope.save = function () {
    if (formHelper.submitForm({ scope: $scope })) {
      // Set settings
      $scope.preValueSource.settings = {};
      if ($scope.preValueSource.$type) {
        angular.forEach($scope.preValueSource.$type.settings, function (setting) {
          var key = setting.alias;
          var value = setting.value;
          $scope.preValueSource.settings[key] = value;
        });
      }

      // Validate settings
      localizationService.localizeMany([
        "formPrevalueSources_saveSuccessTitle",
        "formPrevalueSources_saveErrorTitle",
        "formMessages_saveErrorMessage"
      ]).then(function (labels) {
        preValueSourceResource.validateSettings($scope.preValueSource).then(function (response) {
          $scope.errors = response.data;

          if ($scope.errors.length > 0) {
            angular.forEach($scope.errors, function (error) {
              notificationsService.error(labels[1], error.Message);
            });
          } else {
            // Save
            preValueSourceResource.save($scope.preValueSource).then(function (response) {
              $scope.preValueSource = response.data;

              // Set a shared state
              editorState.set($scope.preValueSource);
              setTypeAndSettings();
              getPrevalues();
              $scope.preValueSourceForm.$dirty = false;
              navigationService.syncTree({
                tree: "prevaluesource",
                path: [String($scope.preValueSource.id)],
                forceReload: true
              });

              notificationsService.success(labels[0], "");
            }, function (err) {
              notificationsService.error(labels[1], "");
            });
          }
        }, function (err) {
          notificationsService.error(labels[1], labels[2]);
        });
      });
    }
  };
});

angular.module("umbraco").controller("UmbracoForms.FormPickerController", function ($scope, $location, formPickerResource, securityResource) {
  var vm = this;
  var allowedForms = null;
  var userSecurity = null;
  var formSecurity = null;

  function setSelectedForm(form) {
    vm.selectedForm = form;
    vm.selectedForm.icon = "icon-umb-contour";

    // Set properties indicating if the current user has access to the selected form.
    if (userSecurity && formSecurity) {
      var formSecurityForForm = formSecurity.filter(function (fs) {
        return fs.form === vm.selectedForm.id;
      });
      if (formSecurityForForm.length > 0) {
        vm.selectedForm.canEditForm = userSecurity.manageForms && formSecurityForForm[0].hasAccess;
        vm.selectedForm.canViewEntries = userSecurity.viewEntries && formSecurityForForm[0].hasAccess;
      }
    }
  }

  vm.loading = true;
  vm.selectedForm = null;
  vm.error = null;

  if ($scope.model.config && $scope.model.config.allowedForms) {
    allowedForms = $scope.model.config.allowedForms;
  }

  securityResource.getForCurrentUser(false).then(function (response) {
    formSecurity = response.data.formsSecurity;
    userSecurity = response.data.userSecurity;

    // Only do this is we have a value saved
    if ($scope.model.value) {
      formPickerResource.getPickedForm($scope.model.value).then(function (response) {
        setSelectedForm(response);
      }, function (err) {
        // The 500 err will get caught by UmbRequestHelper & show the stacktrace in YSOD dialog if in debug or generic red error to see logs

        // Got an error from the HTTP API call
        // Most likely cause is the picked/saved form no longer exists & has been deleted
        // Need to bubble this up in the UI next to prop editor to make it super obvious

        // Using Angular Copy - otherwise the data binding will be updated
        // So the error message wont make sense, if the user then updates/picks a new form as the model.value will update too
        var currentValue = angular.copy($scope.model.value);

        // Put something in the prop editor UI - some kind of red div or text
        vm.error = "The saved/picked form with id '" + currentValue + "' no longer exists. Pick another form below or clear out the old saved form";
      });

    }
  });

  vm.openFormPicker = function () {
    if (!vm.formPickerOverlay) {
      vm.formPickerOverlay = {
        view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/formpicker/formpicker.html",
        allowedForms: allowedForms,
        show: true,
        submit: function (model) {

          // save form for UI and save on property model
          if (model.selectedForms && model.selectedForms.length > 0) {
            setSelectedForm(model.selectedForms[0]);
            $scope.model.value = model.selectedForms[0].id;
          }

          vm.formPickerOverlay.show = false;
          vm.formPickerOverlay = null;

        },
        close: function (oldModel) {
          vm.formPickerOverlay.show = false;
          vm.formPickerOverlay = null;
        }
      };
    }
  };

  vm.remove = function () {
    vm.selectedForm = null;
    $scope.model.value = null;
  };

  vm.openFormDesigner = function () {
    $location.url("forms/form/edit/" + vm.selectedForm.id);
  };

  vm.openFormEntries = function () {
    $location.url("forms/form/entries/" + vm.selectedForm.id);
  };
});

angular.module("umbraco").controller("UmbracoForms.FormPickerPrevaluesController", function ($scope, formPickerResource) {
  var vm = this;

  function selectForms(selectedForms) {
    angular.forEach(selectedForms, function (selectedForm) {
      // make sure the form isn't already picked
      if ($scope.model.value.indexOf(selectedForm.id) === -1) {
        // store form object on view model
        vm.forms.push(selectedForm);
        // store id for value
        $scope.model.value.push(selectedForm.id);
      }
    });
  }

  if (!$scope.model.value) {
    $scope.model.value = [];
  }

  if (!vm.forms) {
    vm.forms = [];
  }

  if ($scope.model.value && $scope.model.value.length > 0) {
    formPickerResource.getPickedForms($scope.model.value).then(function (response) {
      vm.forms = response;
    });
  }

  vm.openFormPicker = function () {
    if (!vm.formPickerOverlay) {
      vm.formPickerOverlay = {
        view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/formpicker/formpicker.html",
        multiPicker: true,
        show: true,
        submit: function (model) {

          if (model.selectedForms && model.selectedForms.length > 0) {
            selectForms(model.selectedForms);
          }

          vm.formPickerOverlay.show = false;
          vm.formPickerOverlay = null;

        },
        close: function (oldModel) {
          vm.formPickerOverlay.show = false;
          vm.formPickerOverlay = null;
        }
      };
    }
  };

  vm.remove = function (selectedForm) {
    // Remove from view model
    angular.forEach($scope.model.value, function (formId, index) {
      if (formId === selectedForm.id) {
        $scope.model.value.splice(index, 1);
      }
    });

    // Remove from model.value
    angular.forEach(vm.forms, function (form, index) {
      if (form.id === selectedForm.id) {
        vm.forms.splice(index, 1);
      }
    });
  };
});

angular.module("umbraco").controller("UmbracoForms.ThemePickerController", function ($scope) {
  var vm = this;
  vm.loading = true;
  vm.selectedTheme = null;
  vm.error = null;
  
  // Only do this is we have a value saved
  if ($scope.model.value) {
    vm.selectedTheme = {
      name: $scope.model.value,
      icon: "icon-brush"
    };
  }

  vm.openThemePicker = function () {
    if (!vm.themePickerOverlay) {
      vm.themePickerOverlay = {
        view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/themepicker/themepicker.html",
        show: true,
        submit: function (model) {
          vm.selectedTheme = model.selectedThemes[0];
          vm.selectedTheme.icon = "icon-brush";
          $scope.model.value = model.selectedThemes[0].name;

          vm.themePickerOverlay.show = false;
          vm.themePickerOverlay = null;
        },
        close: function (oldModel) {
          vm.themePickerOverlay.show = false;
          vm.formthemePickerOverlayPickerOverlay = null;
        }
      };
    }
  };

  vm.remove = function () {
    vm.selectedTheme = null;
    $scope.model.value = null;
  };
});

angular.module('umbraco.resources').factory('dataSourceResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/DataSource/";

  return {
    getScaffold: function (template) {
      return $http.get(apiRoot + "GetScaffold");
    },
    getByGuid: function (id) {
      return $http.get(apiRoot + "GetByGuid?guid=" + id);
    },
    deleteByGuid: function (id) {
      return $http.delete(apiRoot + "DeleteByGuid?guid=" + id);
    },
    save: function (preValueSource) {
      return $http.post(apiRoot + "PostSave", preValueSource);
    },
    validateSettings: function (preValueSource) {
      return $http.post(apiRoot + "ValidateSettings", preValueSource);
    },
    getAllDataSourceTypesWithSettings: function () {
      return $http.get(apiRoot + "GetAllDataSourceTypesWithSettings");
    }
  };
});

angular.module('umbraco.resources').factory('dataSourceWizardResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/DataSourceWizard/";

  return {
    getScaffold: function (id) {
      return $http.get(apiRoot + "GetScaffold?guid=" + id);
    },
    getAllFieldTypes: function () {
      return $http.get(apiRoot + "GetAllFieldTypes");
    },
    createForm: function (wizard) {
      return $http.post(apiRoot + "CreateForm", wizard);
    }
  };
});

angular.module('umbraco.resources').factory('exportResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Export/";

  return {
    getExportTypes: function (formId) {
      return $http.get(apiRoot + "GetExportTypes?formId=" + formId);
    },
    generateExport: function (config) {
      return $http.post(apiRoot + "PostGenerateExport", config);
    },
    getExportUrl: function (formId, fileName) {
      return apiRoot + "GetExport?formId=" + formId + "&fileName=" + fileName;
    },
    getExport: function (token) {
      return $http.get(apiRoot + "GetExport?token=" + token);
    }
  };
});

angular.module('umbraco.resources').factory('fieldResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Field/";

  return {
    validateSettings: function (field) {
      return $http.post(apiRoot + "ValidateSettings", field);
    }
  };
});

angular.module('umbraco.resources').factory('formResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Form/";

  return {
    getScaffold: function (template) {
      return $http.get(apiRoot + "GetScaffold?template=" + template);
    },
    getScaffoldWithWorkflows: function (template) {
      return $http.get(apiRoot + "GetScaffoldWithWorkflows?template=" + template);
    },
    getAllTemplates: function () {
      return $http.get(apiRoot + "GetFormTemplates");
    },
    getOverView: function () {
      return $http.get(apiRoot + 'GetOverView');
    },
    getByGuid: function (id) {
      return $http.get(apiRoot + "GetByGuid?guid=" + id);
    },
    getWithWorkflowsByGuid: function (id) {
      return $http.get(apiRoot + "GetWithWorkflowsByGuid?guid=" + id);
    },
    deleteByGuid: function (id) {
      return $http.delete(apiRoot + "DeleteByGuid?guid=" + id);
    },
    save: function (form) {
      return $http.post(apiRoot + "PostSave", form);
    },
    saveWithWorkflows: function (formWithWorkflows) {
      return $http.post(apiRoot + "SaveForm", formWithWorkflows);
    },
    getAllFieldTypes: function () {
      return $http.get(apiRoot + "GetAllFieldTypes");
    },
    getAllFieldTypesWithSettings: function () {
      return $http.get(apiRoot + "GetAllFieldTypesWithSettings");
    },
    getPrevalueSources: function () {
      return $http.get(apiRoot + "GetPrevalueSources");
    },
    copy: function (id, newFormName, copyWorkflows, copyToFolderId) {
      return $http.post(apiRoot + "CopyForm", { guid: id, newName: newFormName, copyWorkflows: copyWorkflows, copyToFolderId: copyToFolderId });
    },
    createFolder: function (parentId, name) {
      return $http.post(apiRoot + "CreateFolder", { parentId: parentId, name: name });
    },
    renameFolder: function (id, name) {
      return $http.post(apiRoot + "RenameFolder", { id: id, name: name });
    },
    moveFolder: function (parentId, id) {
      return $http.post(apiRoot + "MoveFolder", { parentId: parentId, id: id });
    },
    moveForm: function (parentId, id) {
      return $http.post(apiRoot + "MoveForm", { parentId: parentId, id: id });
    },
    isFolderEmpty: function (id) {
      return $http.get(apiRoot + "IsFolderEmpty?guid=" + id);
    },
    deleteFolderByGuid: function (id) {
      return $http.delete(apiRoot + "DeleteFolderByGuid?guid=" + id);
    },
  };
});

/**
  * @ngdoc service
  * @name umbraco.resources.formPickerResource
  * @description Used for picking Umbraco Forms with the Form Picker Property Editor
  **/
angular.module('umbraco.resources').factory('formPickerResource', function ($http, umbRequestHelper) {
  // TODO: Use the same way way in core to register URLs in Global Umbraco.Sys.ServerVariables
  var apiRoot = "backoffice/UmbracoForms/FormPicker/";

  return {
    getFormsForPicker: function (formGuids) {
      return umbRequestHelper.resourcePromise(
        $http.post(apiRoot + 'GetFormsForPicker', formGuids),
        "Failed to retrieve Forms to pick"
      );
    },
    getPickedForm: function (id) {
      return umbRequestHelper.resourcePromise(
        $http.get(apiRoot + "GetPickedForm?formGuid=" + id),
        "The picked/saved form with id '" + id + "' does not exist"
      );
    },
    getPickedForms: function (formGuids) {
      return umbRequestHelper.resourcePromise(
        $http.post(apiRoot + "GetPickedForms", formGuids),
        "The picked/saved form with id '" + formGuids + "' does not exist"
      );
    }
  };
});

angular.module('umbraco.resources').factory('licensingResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Licensing/";

  return {
    getLicenseStatus: function () {
      return $http.get(apiRoot + "GetLicenseStatus");
    },
    getAvailableLicenses: function (config) {
      return $http.post(apiRoot + "PostRetriveAvailableLicenses", config);
    },
    configureLicense: function (config) {
      return $http.post(apiRoot + "PostConfigureLicense", config);
    }
  };
});

angular.module('umbraco.resources').factory('pickerResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Picker/";

  return {
    getAllConnectionStrings: function () {
      return $http.get(apiRoot + "GetAllConnectionStrings");
    },
    getAllDataTypes: function () {
      return $http.get(apiRoot + "GetAllDataTypes");
    },
    getAllDocumentTypes: function () {
      return $http.get(apiRoot + "GetAllDocumentTypes");
    },
    getAllDocumentTypesWithAlias: function () {
      return $http.get(apiRoot + "GetAllDocumentTypesWithAlias");
    },
    getAllMediaTypes: function () {
      return $http.get(apiRoot + "GetAllMediaTypes");
    },
    getAllFields: function (formGuid) {
      return $http.get(apiRoot + "GetAllFields?formGuid=" + formGuid);
    },
    getAllProperties: function (doctypeAlias) {
      return $http.get(apiRoot + "GetAllProperties?doctypeAlias=" + doctypeAlias);
    },
    updateMappedProperties: function (doctypeAlias, currentSavedProperties) {
      var dataToPost = {
        "doctypeAlias": doctypeAlias,
        "currentProperties": currentSavedProperties
      };

      return $http.post(apiRoot + "PostUpdateMappedProperties", dataToPost);
    },
    getVirtualPathForEmailTemplate: function (encodedPath) {
      return $http.get(apiRoot + "GetVirtualPathForEmailTemplate?encodedPath=" + encodedPath);
    }
  };
});


angular.module('umbraco.resources').factory('preValueSourceResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/PreValueSource/";

  return {
    getScaffold: function (template) {
      return $http.get(apiRoot + "GetScaffold");
    },
    getByGuid: function (id) {
      return $http.get(apiRoot + "GetByGuid?guid=" + id);
    },
    deleteByGuid: function (id) {
      return $http.delete(apiRoot + "DeleteByGuid?guid=" + id);
    },
    save: function (preValueSource) {
      return $http.post(apiRoot + "PostSave", preValueSource);
    },
    validateSettings: function (preValueSource) {
      return $http.post(apiRoot + "ValidateSettings", preValueSource);
    },
    getPreValues: function (preValueSource) {
      return $http.post(apiRoot + "GetPreValues", preValueSource);
    },
    getPreValuesByGuid: function (preValueSourceId) {
      return $http.get(apiRoot + "GetPreValuesByGuid?preValueSourceId=" + preValueSourceId);
    },
    getAllPreValueSourceTypesWithSettings: function () {
      return $http.get(apiRoot + "GetAllPreValueSourceTypesWithSettings");
    }
  };
});

angular.module('umbraco.resources').factory('recordResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Record/";

  return {
    getRecords: function (filter) {
      return $http.post(apiRoot + "PostRetriveRecords", filter);
    },
    getRecordsCount: function (filter) {
      return $http.post(apiRoot + "PostRetriveRecordsCount", filter);
    },
    getRecordSetActions: function () {
      return $http.get(apiRoot + "GetRecordSetActions");
    },
    executeRecordSetAction: function (model) {
      return $http.post(apiRoot + "PostExecuteRecordSetAction", model);
    },
    updateRecord: function (model) {
      return $http.post(apiRoot + "PostUpdateRecord", model);
    },
    getAuditTrail: function (recordId) {
      return $http.get(apiRoot + "GetAuditTrail?recordId=" + recordId);
    },
    getWorkflowAuditTrail: function (recordId) {
      return $http.get(apiRoot + "GetWorkflowAuditTrail?recordId=" + recordId);
    },
    retryWorkflow: function (recordId, formId, workflowKey) {
      return $http.post(apiRoot + "PostRetryWorkflow", { recordId: recordId, formId: formId, workflowKey: workflowKey });
    }
  };
});

angular.module('umbraco.resources').factory('securityResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/FormSecurity/";
  var apiRootForCurrentUser = "backoffice/UmbracoForms/CurrentUserFormSecurity/";

  return {
    getForCurrentUser: function (includeFormFieldDetails) {
      return $http.get(apiRootForCurrentUser + "GetForCurrentUser?includeFormFieldDetails=" + (includeFormFieldDetails !== false));
    },
    getByUserId: function (userId, explicitOnly) {
      return $http.get(apiRoot + "GetByUserId?userId=" + userId + "&explicitOnly=" + explicitOnly);
    },
    getByUserGroupId: function (groupId) {
      return $http.get(apiRoot + "GetByUserGroupId?groupId=" + groupId);
    },
    saveUser: function (userSecurity) {
      return $http.post(apiRoot + "PostSave", userSecurity);
    },
    saveUserGroup: function (userGroupSecurity) {
      return $http.post(apiRoot + "PostSaveForGroup", userGroupSecurity);
    },
    getUsersWithoutSecurityRecords: function () {
      return $http.get(apiRoot + "GetUsersWithoutSecurityRecords");
    },
    deleteByUserId: function (userId) {
      return $http.delete(apiRoot + "DeleteByUserId?userId=" + userId);
    },
  };
});

/**
  * @ngdoc service
  * @name umbraco.resources.themePickerResource
  * @description Used for picking Umbraco Forms with the Form Picker Property Editor
  **/
angular.module('umbraco.resources').factory('themePickerResource', function ($http, umbRequestHelper) {
  // TODO: Use the same way way in core to register URLs in Global Umbraco.Sys.ServerVariables
  var apiRoot = "backoffice/UmbracoForms/ThemePicker/";

  return {
    getThemes: function () {
      return umbRequestHelper.resourcePromise($http.get(apiRoot + 'GetThemes'), "Failed to retrieve Form Themes to pick");
    }
  };
});

angular.module('umbraco.resources').factory('updatesResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Updates/";

  return {
    getUpdateStatus: function () {
      return $http.get(apiRoot + "GetUpdateStatus");
    },
    installLatest: function (version) {
      return $http.get(apiRoot + "InstallLatest?version=" + version);
    },
    getVersion: function () {
      return $http.get(apiRoot + "GetVersion");
    },
    getSavePlainTextPasswordsConfiguration: function () {
      return $http.get(apiRoot + "GetSavePlainTextPasswordsConfiguration");
    }
  };
});

angular.module('umbraco.resources').factory('workflowResource', function ($http) {
  var apiRoot = "backoffice/UmbracoForms/Workflow/";

  return {
    getScaffold: function (template) {
      return $http.get(apiRoot + "GetScaffold");
    },
    getByGuid: function (id) {
      return $http.get(apiRoot + "GetByGuid?guid=" + id);
    },
    deleteByGuid: function (id) {
      return $http.delete(apiRoot + "DeleteByGuid?guid=" + id);
    },
    save: function (preValueSource) {
      return $http.post(apiRoot + "PostSave", preValueSource);
    },
    validateSettings: function (preValueSource) {
      return $http.post(apiRoot + "ValidateSettings", preValueSource);
    },
    getAllWorkflowTypesWithSettings: function () {
      return $http.get(apiRoot + "GetAllWorkflowTypesWithSettings");
    },
    getAllWorkflows: function (formGuid) {
      return $http.get(apiRoot + "GetAllWorkflows?formGuid=" + formGuid);
    },
    updateSortOrder: function (state, workflowIds) {
      var data = {};
      data.state = state;
      data.guids = workflowIds;

      return $http.post(apiRoot + "UpdateSortOrder", data);
    },
    getScaffoldWorkflowType: function (workflowTypeId) {
      return $http.get(apiRoot + "GetScaffoldWorkflowType?workflowTypeId=" + workflowTypeId);
    },
    validateWorkflowSettings: function (workflowViewModel) {
      return $http.post(apiRoot + "ValidateWorkflowSettings", workflowViewModel);
    }
  };
});

angular.module("umbraco.directives").directive('umbFormsAutoFocus', function ($timeout) {
  return function (scope, element, attr) {
    function update() {
      // If it uses its default naming
      if (element.val().indexOf(" field") >= 0) {
        element.focus();
      }
    }

    $timeout(function () {
      update();
    });

    scope.$watch(attr.umbFormsFocusOn, function (_focusVal) {
      $timeout(function () {
        if (_focusVal) {
          element.focus();
          element.select();
          update();
        }
      });
    });
  };
});

angular.module("umbraco.directives").directive('umbFormsAutoSize', function ($timeout) {
  return function (scope, element, attr) {
    var domEl = element[0];
    function update(force) {
      if (force === true) {
        element.height(0);
      }

      if (domEl.scrollHeight !== domEl.clientHeight) {
        element.height(domEl.scrollHeight);
      }
    }

    element.bind('keyup keydown keypress change', update);
    element.bind('blur', function () { update(true); });

    $timeout(function () {
      update();
    });
  };
});

angular.module("umbraco.directives").directive('umbFormsContentPicker', function (entityResource, iconHelper, editorService, $routeParams) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-content-picker.html',
    require: "ngModel",
    link: function (scope, element, attr, ctrl) {
      function updateModel(id) {
        ctrl.$setViewValue(id);
      }

      function populatePathDescription(item) {
        entityResource.getUrl(item.id, "Document", $routeParams.mculture).then(function (url) {
          item.pathDescription = url;
        });
      }

      function populate(item) {
        scope.clear();
        item.icon = iconHelper.convertFromLegacyIcon(item.icon);
        scope.node = item;
        scope.id = item.id;
        updateModel(item.id);
        populatePathDescription(item);
      }

      ctrl.$render = function () {
        var val = parseInt(ctrl.$viewValue);

        if (!isNaN(val) && angular.isNumber(val) && val > 0) {
          entityResource.getById(val, "Document").then(function (item) {
            item.icon = iconHelper.convertFromLegacyIcon(item.icon);
            scope.node = item;
            populatePathDescription(item);
          });
        }
      };

      scope.openContentPicker = function () {
        editorService.contentPicker({
          submit: function (model) {
            populate(model.selection[0]);
            editorService.close();
          },
          close: function () {
            editorService.close();
          }
        });
      };

      scope.clear = function () {
        scope.id = undefined;
        scope.node = undefined;
        updateModel(0);
      };
    }
  };
});

angular.module("umbraco.directives").directive('umbFormsDateRangePicker', function (assetsService) {
  return {
    restrict: 'A',
    scope: {
      userLocale: "@",
      onChange: "="
    },
    template: '<div class="umb-forms-date-range-picker daterange daterange--double"></div>',
    link: function (scope, element) {
      assetsService.load([
        "~/App_Plugins/UmbracoForms/Assets/moment/min/moment-with-locales.min.js",
        "~/App_Plugins/UmbracoForms/Assets/BaremetricsCalendar/public/js/Calendar.min.js"
      ]).then(function () {
        new Calendar({
          element: element.firstChild,
          earliest_date: '2000-01-01',
          latest_date: moment(),
          start_date: moment().subtract(29, 'days'),
          end_date: moment(),
          same_day_range: true,
          callback: function () {
            // Date update/changed
            var dateFilter = {
              startDate: moment(this.start_date).format('YYYY-MM-DD'),
              endDate: moment(this.end_date).format('YYYY-MM-DD')
            };

            if (scope.onChange) {
              scope.onChange(dateFilter);
            }
          }
        });
      });

      // Load CSS as dependancy (load the seperate CSS for the editor to avoid it blocking our JS loading)
      assetsService.loadCss("/App_Plugins/UmbracoForms/Assets/BaremetricsCalendar/public/css/application.css");
    }
  };
});

angular.module("umbraco.directives").directive('ufDelayedMouseleave', function ($timeout, $parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs, ctrl) {
      var active = false;
      var fn = $parse(attrs.ufDelayedMouseleave);
      element.on("mouseleave", function (event) {
        var callback = function () {
          fn(scope, { $event: event });
        };

        active = false;
        $timeout(function () {
          if (active === false) {
            scope.$apply(callback);
          }
        }, 650);
      });

      element.on("mouseenter", function (event, args) {
        active = true;
      });
    }
  };
});

angular.module("umbraco.directives").directive('umbFormsDesignerNew', function (formService, fieldResource, workflowResource, notificationsService, editorService, overlayService, localizationService) {
  return {
    scope: {
      form: "=",
      fieldtypes: "=",
      prevaluesources: "=",
      security: "="
    },
    transclude: true,
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-designer-new.html',
    link: function (scope, element, attrs, ctrl) {
      scope.sortingMode = false;
      scope.sortingButtonKey = "general_reorder";
      scope.state = "";
      scope.ruleOperators = formService.getOperators();

      var operatorKeys = [];
      for (var i = 0; i < scope.ruleOperators.length; i++) {
        operatorKeys.push("formConditions_operator" + scope.ruleOperators[i].value);
      }

      localizationService.localizeMany(operatorKeys).then(function (labels) {
        for (var i = 0; i < scope.ruleOperators.length; i++) {
          scope.ruleOperators[i].name = labels[i];
        }
      });

      // *********************************************
      // Internal functions
      // *********************************************
      function populateFields() {
        scope.fields = [];
        angular.forEach(scope.form.pages, function (page) {
          angular.forEach(page.fieldSets, function (fieldset) {
            angular.forEach(fieldset.containers, function (container) {
              angular.forEach(container.fields, function (field) {
                scope.fields.push(field);
              });
            });
          });
        });
      }

      function getExistingFieldAliases() {
        var aliases = [];
        angular.forEach(scope.form.pages, function (page) {
          angular.forEach(page.fieldSets, function (fieldset) {
            angular.forEach(fieldset.containers, function (container) {
              angular.forEach(container.fields, function (field) {
                aliases.push(field.alias);
              });
            });
          });
        });
        return aliases;
      }

      // *********************************************
      // Sorting management functions
      // *********************************************
      scope.setActive = function (fieldSet) {
        angular.forEach(scope.form.pages, function (page) {
          angular.forEach(page.fieldSets, function (fieldset) {

            if (fieldset.state === "active") {
              fieldset.state = "InActive";
            }

          });
        });

        fieldSet.state = "active";
      };

      scope.sortablePages = {
        distance: 10,
        tolerance: "pointer",
        opacity: 0.7,
        scroll: true,
        cursor: "move",
        placeholder: "umb-forms__page-placeholder",
        zIndex: 6000,
        handle: ".sortable-handle",
        items: ".sortable",
        start: function (e, ui) {
          ui.placeholder.height(ui.item.height());
        }
      };

      scope.sortableFieldsets = {
        distance: 10,
        tolerance: "pointer",
        connectWith: ".umb-forms__fieldsets",
        opacity: 0.7,
        scroll: true,
        cursor: "move",
        placeholder: "umb-forms__fieldset-placeholder",
        zIndex: 6000,
        handle: ".sortable-handle",
        items: ".sortable",
        start: function (e, ui) {
          ui.placeholder.height(ui.item.height());
        },
        over: function (e, ui) {
          scope.$apply(function () {
            $(e.target).scope().page.dropOnEmpty = true;
          });
        },
        out: function (e, ui) {
          scope.$apply(function () {
            $(e.target).scope().page.dropOnEmpty = false;
          });
        }
      };

      scope.sortableFields = {
        distance: 10,
        tolerance: "pointer",
        connectWith: ".umb-forms__fields",
        opacity: 0.7,
        scroll: true,
        cursor: "move",
        placeholder: "umb-forms__field-placeholder",
        zIndex: 6000,
        handle: ".sortable-handle",
        items: ".sortable",
        start: function (e, ui) {
          ui.placeholder.height(ui.item.height());
        },
        over: function (e, ui) {
          scope.$apply(function () {
            $(e.target).scope().container.dropOnEmpty = true;
          });
        },
        out: function (e, ui) {
          scope.$apply(function () {
            $(e.target).scope().container.dropOnEmpty = false;
          });
        }
      };

      scope.toggleSortingMode = function () {
        scope.sortingMode = !scope.sortingMode;

        if (scope.sortingMode) {
          scope.sortingButtonKey = "general_reorderDone";
        } else {
          scope.sortingButtonKey = "general_reorder";
        }
      };

      // *********************************************
      // Form management functions
      // *********************************************
      scope.initForm = function (form, fieldtypes) {
        formService.initForm(form, fieldtypes);
      };

      // *********************************************
      // Copy prompt
      // *********************************************
      scope.toggleCopyPrompt = function (object) {
        object.copyPrompt = !object.copyPrompt;
      };

      scope.hideCopyPrompt = function (object) {
        object.copyPrompt = false;
      };

      // *********************************************
      // Delete prompt
      // *********************************************
      scope.toggleDeletePrompt = function (object) {
        object.deletePrompt = !object.deletePrompt;
      };

      scope.hideDeletePrompt = function (object) {
        object.deletePrompt = false;
      };

      // *********************************************
      // Page management functions
      // *********************************************
      scope.addPage = function (form) {
        formService.addPage(form);
      };

      scope.removePage = function (pages, index) {
        pages.splice(index, 1);
      };

      scope.formHasFields = function (form) {
        var hasFields = false;

        angular.forEach(scope.form.pages, function (page) {
          angular.forEach(page.fieldSets, function (fieldset) {
            angular.forEach(fieldset.containers, function (container) {
              if (container.fields.length > 0) {
                hasFields = true;
              }
            });
          });
        });

        return hasFields;
      };

      scope.pageHasFields = function (page) {
        var hasFields = false;

        angular.forEach(page.fieldSets, function (fieldset) {
          angular.forEach(fieldset.containers, function (container) {
            if (container.fields.length > 0) {
              hasFields = true;
            }
          });
        });

        return hasFields;
      };

      scope.editPage = function (page) {
        populateFields();

        localizationService.localize("formEdit_editPage").then(function (val) {
          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/pagesettings/page-settings.html",
            title: val,
            page: page,
            fields: scope.fields,
            size: "medium"
          });
        });
      };

      // *********************************************
      // Fieldset management functions
      // *********************************************
      scope.addFieldset = function (page) {
        // Always add it last
        var _index = page.fieldSets.length;
        formService.addFieldset(page, _index);
      };

      scope.copyFieldset = function (page, fieldset) {
        fieldset.copyPrompt = false;
        formService.copyFieldset(page, fieldset, getExistingFieldAliases());
      };

      scope.removeFieldset = function (page, fieldset) {
        formService.deleteFieldset(page, fieldset);
      };

      scope.editFieldset = function (fieldset) {
        populateFields();

        localizationService.localize("formEdit_editGroup").then(function (val) {
          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/fieldsetsettings/fieldset-settings.html",
            title: val,
            fieldset: fieldset,
            fields: scope.fields,
            size: "medium"
          });
        });
      };

      // *********************************************
      // Field management functions
      // *********************************************
      function addOrUpdateField(model, field) {
        field.settings = {};

        for (var i = 0; i < model.field.$fieldType.settings.length; i++) {
          var setting = model.field.$fieldType.settings[i];
          var key = setting.alias;
          var value = setting.value || "";
          field.settings[key] = value;
        }

        fieldResource.validateSettings(field).then(function (response) {
          if (response.data.length > 0) {
            localizationService.localize("formEdit_saveFieldFailedTitle").then(function (errorTitle) {
              angular.forEach(response.data, function (error) {
                notificationsService.error(errorTitle, error.Message);
              });
            });
          } else {
            editorService.close();
          }
        });
      }

      scope.addField = function (fieldset, container) {
        populateFields();

        var emptyField = formService.addEmptyField(container);

        localizationService.localize("formEdit_addQuestion").then(function (val) {
          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/fieldsettings/field-settings.html",
            title: val,
            field: emptyField,
            fields: scope.fields,
            size: "medium",
            prevalueSources: scope.prevaluesources,
            submit: function (model) {
              addOrUpdateField(model, emptyField);
            },
            close: function () {
              formService.deleteField(fieldset, container, emptyField);
              editorService.close();
            }
          });
        });
      };

      scope.openFieldSettings = function (field) {
        populateFields();

        scope.setFieldType(field);

        localizationService.localize("formEdit_editQuestion").then(function (val) {
          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/fieldsettings/field-settings.html",
            title: val,
            field: field,
            fields: scope.fields,
            size: "medium",
            prevalueSources: scope.prevaluesources,
            submit: function (model) {
              addOrUpdateField(model, field);
            },
            close: function () {
              editorService.close();
            }
          });
        });
      };

      scope.removeField = function (fieldset, container, field) {
        formService.deleteField(fieldset, container, field);
      };

      scope.copyField = function (container, field) {
        field.copyPrompt = false;
        formService.copyField(container, field, getExistingFieldAliases());
      };

      scope.setFieldType = function (field) {
        // Set settings
        angular.forEach(field.settings, function (setting) {
          for (var key in field.settings) {
            if (field.settings.hasOwnProperty(key)) {
              if (_.where(field.$fieldType.settings, { alias: key }).length > 0) {
                _.where(field.$fieldType.settings, { alias: key })[0].value = field.settings[key];
              }
            }
          }
        });
      };

      // *********************************************
      // Field conditions
      // *********************************************
      scope.getFieldNameFromGuid = function (selectedFieldId) {
        populateFields();

        for (var i = 0; i < scope.fields.length; i++) {
          var field = scope.fields[i];
          if (field.id === selectedFieldId) {
            return field.caption;
          }
        }
      };

      scope.getRuleOperatorName = function (operator) {
        for (var i = 0; i < scope.ruleOperators.length; i++) {
          if (scope.ruleOperators[i].value === operator) {
            return scope.ruleOperators[i].name;
          }
        }

        return operator;
      };

      // *********************************************
      // Button functions
      // *********************************************
      scope.editWorkflows = function () {
        if (scope.security && scope.security.userSecurity.manageWorkflows) {
          populateFields();

          var oldFormWorkflows = angular.copy(scope.form.formWorkflows);
          var oldMessageOnSubmit = angular.copy(scope.form.messageOnSubmit);
          var oldGoToPageOnSubmit = angular.copy(scope.form.goToPageOnSubmit);

          localizationService.localize("formEdit_workflows").then(function (val) {
            editorService.open({
              view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/workflows-overview.html",
              title: val,
              formWorkflows: scope.form.formWorkflows,
              messageOnSubmit: scope.form.messageOnSubmit,
              goToPageOnSubmit: scope.form.goToPageOnSubmit,
              submitLabel: scope.form.submitLabel,
              manualApproval: scope.form.manualApproval,
              fields: scope.fields,
              size: "medium",
              submit: function (model) {
                scope.form.formWorkflows = model.formWorkflows;
                scope.form.messageOnSubmit = model.messageOnSubmit;
                scope.form.goToPageOnSubmit = model.goToPageOnSubmit;

                editorService.close();
              },
              close: function () {
                // reset the model
                scope.form.formWorkflows = oldFormWorkflows;
                scope.form.messageOnSubmit = oldMessageOnSubmit;
                scope.form.goToPageOnSubmit = oldGoToPageOnSubmit;

                editorService.close();
              }
            });
          });
        }
      };

      scope.editWorkflowSettings = function (workflow, collection, index) {
        if (scope.security && scope.security.userSecurity.manageWorkflows) {
          populateFields();

          // Take a clone of the original workflow so can reset if the changes aren't submitted.
          var preEditedWorkflow = JSON.parse(JSON.stringify(workflow));

          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/workflow-settings.html",
            workflow: workflow,
            fields: scope.fields,
            title: workflow.name,
            size: "medium",
            submit: function (model) {
              // Validate settings
              workflowResource.validateWorkflowSettings(model.workflow).then(function (response) {
                if (response.data.length > 0) {
                  localizationService.localize("formWorkflows_saveFailedTitle").then(function (errorTitle) {
                    angular.forEach(response.data, function (error) {
                      notificationsService.error(errorTitle, error.Message);
                    });
                  });
                } else {
                  editorService.close();
                }
              });
            },
            close: function (hasChanges) {
              // Reset to original values after confirmation if changes were made and 'Submit' button was not used.
              if (hasChanges) {
                localizationService.localizeMany([
                  "formWorkflows_closeConfirmationTitle",
                  "formWorkflows_closeConfirmationMessage",
                  "general_no",
                  "general_yes"
                ]).then(function (labels) {
                  overlayService.open({
                    view: "confirm",
                    title: labels[0],
                    content: labels[1],
                    closeButtonLabel: labels[2],
                    submitButtonLabel: labels[3],
                    submitButtonStyle: "danger",
                    close: function () {
                      // Keep workflow settings editor open.
                      overlayService.close();
                    },
                    submit: function () {
                      // Reset changes and close workflow settings editor.
                      scope.form.formWorkflows[collection][index] = preEditedWorkflow;
                      overlayService.close();
                      editorService.close();
                    }
                  });
                });
              } else {
                // No changes detected, so just close.
                editorService.close();
              }
            }
          });
        }
      };

      scope.editSubmitMessageWorkflow = function () {
        localizationService.localize("formWorkflows_messageOnSubmit").then(function (val) {
          editorService.open({
            view: "/App_Plugins/UmbracoForms/Backoffice/Form/overlays/workflows/submit-message-workflow-settings.html",
            title: val,
            messageOnSubmit: scope.form.messageOnSubmit,
            goToPageOnSubmit: scope.form.goToPageOnSubmit,
            size: "medium",
            submit: function (model) {
              scope.form.messageOnSubmit = model.messageOnSubmit;
              scope.form.goToPageOnSubmit = model.goToPageOnSubmit;

              editorService.close();
            },
            close: function () {
              editorService.close();
            }
          });
        });
      };

      scope.initForm(scope.form, scope.fieldtypes);
    }
  };
});

angular.module('umbraco.directives').directive('umbFormsEntryDetail', function (userService, currentUserResource, editorService, recordResource, overlayService, localizationService, notificationsService) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-entry-detail.html',
    scope: {
      entry: '=',
      sensitiveDataAccess: '=',
      allowEdit: '=',
      allowShowAuditTrail: '='
    },
    link: function (scope, el, attr, ctrl) {
      function getMember(entry) {
        for (var i = 0; i < entry.fields.length; i++) {
          if (entry.fields[i] && entry.fields[i].fieldId === "member") {
            return entry.fields[i].value;
          }
        }

        return null;
      }

      function loadAuditTrail() {
        recordResource.getAuditTrail(scope.entry.id).then(function (response) {
          scope.auditTrailEntries = response.data;
          scope.showingAuditTrail = true;
        });
      }

      function loadWorkflowAuditTrail() {
        recordResource.getWorkflowAuditTrail(scope.entry.uniqueId).then(function (response) {
          scope.workflowAuditTrailEntries = response.data;
        });
      }

      scope.showingAuditTrail = false;
      scope.auditTrailEntries = [];
      scope.canLinkToContent = false;
      scope.canLinkToMembers = false;

      userService.getCurrentUser().then(function (user) {
        // First check the user can access the content section.
        var canAccessContentSection = user.allowedSections.indexOf("content") !== -1;
        if (canAccessContentSection) {
          // If so, also check they have permissions to browse the node with the id from where the form was posted.
          currentUserResource.checkPermission('F', scope.entry.umbracoPage.id).then(function (data) {
            scope.canLinkToContent = data;
          });
        }

        // For members, just need to check access to section.
        scope.canLinkToMembers = user.allowedSections.indexOf("member") !== -1;
      });

      scope.$watch('entry', function (newValue, oldValue) {
        // If showing the record editing audit trail and an update has been made for the current Id, reload the audit trail.
        if (scope.showingAuditTrail && newValue.id === oldValue.id) {
          loadAuditTrail();
        } else {
          scope.showingAuditTrail = false;
        }

        // If a new entry is show, load the workflow audit trail for the entry.
        if (newValue.id !== oldValue.id) {
          loadWorkflowAuditTrail();
        }
      }, true);

      loadWorkflowAuditTrail();

      scope.openContent = function (id) {
        editorService.contentEditor({
          id: id,
          close: function () {
            editorService.close();
          }
        });
      };

      scope.hasMember = function (entry) {
        return getMember(entry) !== null;
      };

      scope.getMemberDetails = function (entry) {
        var member = getMember(entry);
        if (member) {
          return member.Name + " (" + member.Email + ")";
        }

        return "";
      };

      scope.openMember = function (entry) {
        var member = getMember(entry);
        if (member) {
          editorService.memberEditor(
            {
              id: member.Key,
              close: function () {
                editorService.close();
              }
            });
        }
      };

      scope.toggleAuditTrail = function () {
        if (scope.showingAuditTrail) {
          scope.showingAuditTrail = false;
        } else {
          loadAuditTrail();
        }
      };

      scope.runWorkflow = function (workflowKey) {
        function performRetry() {
          scope.retryingWorkflow = true;
          recordResource.retryWorkflow(scope.entry.id, scope.entry.form, workflowKey).then(function (response) {
            localizationService.localizeMany([
              "formEntries_workflowAuditRetrySuccessMessage",
              "formEntries_workflowAuditRetryFailedMessage"
            ]).then(function (labels) {
              if (response.data.success) {
                notificationsService.success(labels[0] + ".");
              } else {
                notificationsService.error(labels[1] + ": " + response.data.message);
              }

              loadWorkflowAuditTrail();
              scope.retryingWorkflow = false;
            });
          });
        }

        localizationService.localizeMany([
          "formEntries_workflowAuditRetryConfirmTitle",
          "formEntries_workflowAuditRetryConfirmMessage",
          "general_yes",
          "general_no"
        ]).then(function (labels) {
          overlayService.open({
            view: "confirm",
            title: labels[0],
            content: labels[1],
            closeButtonLabel: labels[3],
            submitButtonLabel: labels[2],
            submitButtonStyle: "warning",
            close: function () {
              overlayService.close();
            },
            submit: function () {
              performRetry();
              overlayService.close();
            }
          });
        });
      };
    }
  };
});

angular.module("umbraco.directives").directive('umbFormsFileUploadEditor', function (notificationsService, overlayService, localizationService) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-file-upload-editor.html',
    require: "ngModel",
    link: function (scope, element, attr, ctrl) {
      function updateModel() {
        ctrl.$setViewValue(scope.allowedFileTypes);
      }

      localizationService.localizeMany([
        "formFileUpload_allowAllFiles",
        "formFileUpload_allowOnlySpecifiedFiles"
      ]).then(function (labels) {
        scope.allowedFileTypes = [
          { Type: '', Name: labels[0], Checked: false },
          { Type: 'pdf', Name: 'PDF', Checked: false },
          { Type: 'docx', Name: "DOCX", Checked: false },
          { Type: 'xlsx', Name: "XLSX", Checked: false },
          { Type: 'txt', Name: "TXT", Checked: false },
          { Type: 'png', Name: "PNG", Checked: false },
          { Type: 'jpg', Name: "JPG", Checked: false },
          { Type: 'gif', Name: "GIF", Checked: false }
        ];

        scope.allowedFileTypesToggleTextOn = labels[0];
        scope.allowedFileTypesToggleTextOff = labels[1];
      });

      ctrl.$render = function () {
        if (Object.prototype.toString.call(ctrl.$viewValue) === '[object Array]') {
          ctrl.$viewValue.forEach(function (allowedFileType) {
            if (allowedFileType.Checked === undefined || allowedFileType.Checked === null) {
              allowedFileType.Checked = undefined;
            } else if (typeof (allowedFileType.Checked) === "string" && allowedFileType.Checked.toLowerCase() === 'false') {
              allowedFileType.Checked = false;
            } else if (typeof (allowedFileType.Checked) === "string" && allowedFileType.Checked.toLowerCase() === 'true') {
              allowedFileType.Checked = true;
            }
          });

          scope.allowedFileTypes = ctrl.$viewValue;
        }

        updateModel();
      };

      scope.deleteAllowedFileType = function (idx) {
        var performDelete = function () {
          scope.allowedFileTypes.splice(idx, 1);
          updateModel();
        };

        localizationService.localizeMany([
          "formFileUpload_deleteAllowedFileTypeConfirmationTitle",
          "formFileUpload_deleteAllowedFileTypeConfirmationDescription",
          "general_no",
          "general_yes"
        ]).then(function (labels) {
          overlayService.open({
            view: "confirm",
            title: labels[0],
            content: labels[1],
            closeButtonLabel: labels[2],
            submitButtonLabel: labels[3],
            submitButtonStyle: "danger",
            close: function () {
              overlayService.close();
            },
            submit: function () {
              performDelete();
              overlayService.close();
            }
          });
        });
      };

      scope.addAllowedFileType = function () {
        if (!scope.newAllowedFileType) {
          return;
        }

        scope.newAllowedFileType = scope.newAllowedFileType.replace(/[^a-zA-Z0-9]/g, "");
        if (scope.newAllowedFileType.length === 0) {
          return;
        }

        var indexOfExisting = scope.allowedFileTypes.findIndex(function (p) { return p.Name.toUpperCase() === scope.newAllowedFileType.toUpperCase(); });

        // Check that our array does not already contain the same item
        if (indexOfExisting < 0) {
          scope.allowedFileTypes.push({
            Type: scope.newAllowedFileType,
            Name: scope.newAllowedFileType.toUpperCase(),
            Checked: undefined
          });
          scope.newAllowedFileType = '';

          // Disable the "allow all" checkbox
          scope.allowedFileTypes.forEach(function (allowedFileType) {
            if (allowedFileType.Type === '') {
              allowedFileType.Checked = false;
            }
          });

          updateModel();
        } else {
          // Notify user they are trying to add a prevalue that already exists
          localizationService.localizeMany([
            "formFileUpload_duplicateFileTypeErrorTitle",
            "formFileUpload_duplicateFileTypeErrorMessage"
          ]).then(function (labels) {
            notificationsService.error(labels[0], labels[1]);
          });
        }
      };

      scope.switchAllowedPredefined = function (allowedFileType, updateProvidedFileType) {
        // When updating from the "allow all files" toggle, we need to set the new "checked" value.
        // From the check-boxes, it's done for us.
        if (updateProvidedFileType) {
          allowedFileType.Checked = !allowedFileType.Checked;
        }

        if (allowedFileType !== undefined) {
          // When allowing all, disable all other checkboxes
          if (allowedFileType.Type === '' && allowedFileType.Checked === true) {
            scope.allowedFileTypes.forEach(function (allowedFileType) {
              if (allowedFileType.Type !== '' && allowedFileType.Checked !== undefined) {
                allowedFileType.Checked = false;
              }
            });
          }

          // When allowing a specific type and if All is enabled, disable all
          if (allowedFileType.Type !== '' && allowedFileType.Checked === true && allowedFileType.Checked !== undefined) {
            scope.allowedFileTypes.forEach(function (allowedFileType) {
              if (allowedFileType.Type === '') {
                allowedFileType.Checked = false;
              }
            });
          }

          updateModel();
        }
      };
    }
  };
});

angular.module("umbraco.directives").directive('umbFormsInlinePrevalueEditor', function (notificationsService, localizationService) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-inline-prevalue-editor.html',
    require: "ngModel",
    link: function (scope, element, attr, ctrl) {
      function updateModel() {
        ctrl.$setViewValue(scope.prevalues);
      }

      scope.prevalues = [];

      ctrl.$render = function () {
        if (Object.prototype.toString.call(ctrl.$viewValue) === '[object Array]') {
          scope.prevalues = ctrl.$viewValue;
        }
      };

      scope.addPrevalue = function () {
        // Check that our array does not already contain the same item
        if (scope.prevalues.indexOf(scope.newPrevalue) < 0) {
          scope.prevalues.push(scope.newPrevalue);
          scope.newPrevalue = '';
          updateModel();
        } else {
          // Notify user they are trying to add a prevalue that already exists
          localizationService.localizeMany([
            "formPrevalues_duplicateErrorTitle",
            "formPrevalues_duplicateAddErrorMessage"
          ]).then(function (labels) {
            notificationsService.error(labels[0], labels[1]);
          });
        }
      };
    }
  };
});

angular.module("umbraco.directives")
  .directive('umbFormsPrevalueEditor', function (notificationsService, localizationService) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-prevalue-editor.html',
      require: "ngModel",
      link: function (scope, element, attr, ctrl) {
        function updateModel() {
          ctrl.$setViewValue(scope.prevalues);
        }

        scope.prevalues = [];
        scope.editIndex = -1;
        scope.deleteIndex = -1;
        scope.addLabel = "";
        scope.saveLabel = "";

        localizationService.localizeMany([
          "general_add",
          "buttons_save"
        ]).then(function (labels) {
          scope.addLabel = labels[0];
          scope.saveLabel = labels[1];
        });

        ctrl.$render = function () {
          if (Object.prototype.toString.call(ctrl.$viewValue) === '[object Array]') {
            scope.prevalues = ctrl.$viewValue;
          }
        };

        scope.editPrevalue = function (idx) {
          scope.editIndex = idx;
          scope.newPrevalue = scope.prevalues[idx];
        };

        scope.deletePrevalue = function (idx) {
          scope.prevalues.splice(idx, 1);
          updateModel();
        };

        scope.addPrevalue = function () {
          // Check that our array does not already contain the same item (and if editing, make sure not to check against self).
          var otherPrevalues = scope.prevalues.slice();
          if (scope.isEditing()) {
            otherPrevalues.splice(scope.editIndex, 1);
          }

          if (otherPrevalues.indexOf(scope.newPrevalue) < 0) {
            if (scope.isEditing()) {
              scope.prevalues[scope.editIndex] = scope.newPrevalue;
            } else {
              scope.prevalues.push(scope.newPrevalue);
            }

            scope.newPrevalue = {};
            scope.editIndex = -1;
            updateModel();
          } else {
            // Notify user they are trying to add a prevalue that already exists.
            localizationService.localizeMany([
              "formPrevalues_duplicateErrorTitle",
              "formPrevalues_duplicateEditErrorMessage",
              "formPrevalues_duplicateAddErrorMessage"
            ]).then(function (labels) {
              notificationsService.error(labels[0], scope.isEditing() ? labels[1] : labels[2]);
            });
          }
        };

        scope.cancelEditing = function () {
          scope.newPrevalue = {};
          scope.editIndex = -1;
        };

        scope.isEditing = function () {
          return scope.editIndex >= 0;
        };

        scope.showDeletePrompt = function (idx) {
          scope.deleteIndex = idx;
        };

        scope.isDeleting = function (idx) {
          return scope.deleteIndex === idx;
        };

        scope.hideDeletePrompt = function () {
          scope.deleteIndex = -1;
        };
      }
    };
  });

angular.module('umbraco.directives').directive('umbFormsRenderType', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/App_Plugins/UmbracoForms/Directives/umb-forms-render-type.html',
    scope: {
      detail: '=',
      field: '=',
      name: '=',
      view: '=',
      editView: '=',
      sensitive: '=',
      hasAccess: '=',
      allowEdit: '='
    },
    link: function (scope, el, attr, ctrl) { }
  };
});

angular.module('umbraco.services').factory('formService', function (preValueSourceResource) {
  function generateGuid() {
    var d = new Date().getTime();

    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });

    return uuid;
  }

  function generateCopiedAlias(alias, existingFieldAliases) {
    var result;

    // Check if the string already ends with a number, if so increment.
    var matches = alias.match(/\d+$/);
    if (matches) {
      var prefix = alias.substring(0, alias.length - matches[0].length);
      var existingNumberSuffix = parseInt(matches[0], 10);
      var newNumberSuffix = existingNumberSuffix + 1;
      result = prefix + newNumberSuffix;
    } else {
      // Otherwise just suffix with '2'
      result = alias + '2';
    }

    // Check it's not an existing alias.
    var clashesWithExistingAlias = false;
    for (var i = 0; i < existingFieldAliases.length; i++) {
      if (existingFieldAliases[i] === result) {
        clashesWithExistingAlias = true;
        break;
      }
    }

    // If it matches an existing alias, recursively call to generate another.  Otherwise return the new, unique alias.
    return clashesWithExistingAlias ? generateCopiedAlias(result, existingFieldAliases) : result;
  }

  var service = {
    fieldTypes: [],
    actionTypes: [{
      name: "Show",
      value: "Show"
    }, {
      name: "Hide",
      value: "Hide"
    }],
    workflowActionTypes: [{
      name: "Run",
      value: "Show"
    }, {
      name: "Ignore",
      value: "Hide"
    }],
    logicTypes: [{
      name: "all",
      value: "All"
    }, {
      name: "any",
      value: "Any"
    }],
    operators: [{
      name: "is",
      value: "Is"
    }, {
      name: "is not",
      value: "IsNot"
    }, {
      name: "is greater than",
      value: "GreaterThen"
    }, {
      name: "is less than",
      value: "LessThen"
    }, {
      name: "contains",
      value: "Contains"
    }, {
      name: "starts with",
      value: "StartsWith"
    }, {
      name: "ends with",
      value: "EndsWith"
    }],
    getActionTypes: function () {
      return service.actionTypes;
    },
    getWorkflowActionTypes: function () {
      return service.workflowActionTypes;
    },
    getLogicTypes: function () {
      return service.logicTypes;
    },
    getOperators: function () {
      return service.operators;
    },
    initForm: function (form, fieldtypes) {
      service.fieldTypes = fieldtypes;

      if (!form.pages || form.pages.length === 0) {
        service.addPage(form);
      } else {
        _.each(service.getAllFields(form), function (field) {
          if (!field.$fieldType) {
            service.setFieldType(field, field.fieldTypeId);
          }
        });
      }
    },
    addPage: function (form, index) {
      var p = {
        caption: "",
        fieldSets: [],
        id: generateGuid()
      };
      service.addFieldset(p);

      if (form.pages.length > index) {
        form.pages.splice(index, 0, p);
      } else {
        form.pages.push(p);
      }
    },
    addFieldset: function (page, index) {
      var fs = {
        caption: "",
        containers: [],
        id: generateGuid()
      };
      service.addContainer(fs);

      if (page.fieldSets.length > index) {
        page.fieldSets.splice(index, 0, fs);
      } else {
        page.fieldSets.push(fs);
      }
    },
    copyFieldset: function (page, fieldset, existingFieldAliases) {
      var index = page.fieldSets.indexOf(fieldset);
      if (index >= 0) {
        service.copyFieldsetAtIndex(page, fieldset, index, existingFieldAliases);
      }
    },
    copyFieldsetAtIndex: function (page, fieldset, index, existingFieldAliases) {
      var copiedFieldset = JSON.parse(JSON.stringify(fieldset)); // Need to do a full clone here to ensure that the container and field collections are new objects.
      copiedFieldset.id = generateGuid();

      for (var i = 0; i < copiedFieldset.containers.length; i++) {
        for (var j = 0; j < copiedFieldset.containers[i].fields.length; j++) {
          var copiedField = copiedFieldset.containers[i].fields[j];
          copiedField.id = generateGuid();
          copiedField.alias = generateCopiedAlias(copiedField.alias, existingFieldAliases);
          existingFieldAliases.push(copiedField.alias); // Make sure to add the generated alias to the list of existing ones, so it's used in further duplicate checks.
        }
      }

      page.fieldSets.splice(index + 1, 0, copiedFieldset);
    },
    deleteFieldset: function (page, fieldset) {
      if (page.fieldSets.length > 1) {
        var index = page.fieldSets.indexOf(fieldset);
        page.fieldSets.splice(index, 1);
      } else {
        fieldset.containers.length = 0;
        service.addContainer(fieldset);
      }
    },
    deleteFieldsetAtIndex: function (page, index) {
      if (page.fieldSets.length > 1) {
        page.fieldSets.splice(index, 1);
      } else {
        fieldset.containers.length = 0;
        service.addContainer(fieldset);
      }
    },
    splitFieldset: function (page, fieldset, container, splitAtIndex) {
      var newfieldset = {
        caption: "",
        containers: [{
          caption: "",
          fields: []
        }]
      };
      var insertAt = page.fieldSets.indexOf(fieldset);

      page.fieldSets.splice(insertAt + 1, 0, newfieldset);

      var oldFields = container.fields.slice(0, splitAtIndex + 1);
      var newFields = container.fields.slice(splitAtIndex + 1);

      newfieldset.containers[0].fields = newFields;
      container.fields = oldFields;
    },
    addContainer: function (fieldset, index) {
      var c = { caption: "", fields: [] };

      if (fieldset.containers.length > index) {
        fieldset.containers.splice(index, 0, c);
      } else {
        fieldset.containers.push(c);
      }
    },
    splitContainer: function (fieldset, container, splitAtIndex) {
      var newContainer = {
        caption: "",
        fields: []
      };
      var insertAt = fieldset.containers.indexOf(container);

      fieldset.containers.splice(insertAt - 1, 0, newContainer);
      var newFields = container.fields.slice(0, splitAtIndex + 1);
      var oldFields = container.fields.slice(splitAtIndex + 1);

      newContainer.fields = newFields;
      container.fields = oldFields;
    },
    deleteContainer: function (fieldset, container) {
      // Only delete the container if there are multiple ones on this fieldset,
      // otherwise keep it and just clear its contents
      if (fieldset.containers.length > 1) {
        var index = fieldset.containers.indexOf(container);
        if (index >= 0) {
          service.deleteContainerAtIndex(fieldset, index);
        }
      } else {
        container.fields.length = 0;
      }
    },
    deleteContainerAtIndex: function (fieldset, index) {
      if (fieldset.containers.length > 1) {
        fieldset.containers.splice(index, 1);
      } else {
        fieldset.containers.length = 0;
      }
    },
    syncContainerWidths: function (form) {
      _.each(form.pages, function (page) {
        _.each(page.fieldSets, function (fieldset) {
          var containers = fieldset.containers.length;
          var avrg = Math.floor(12 / containers);

          _.each(fieldset.containers, function (container) {
            container.width = avrg;
          });
        });
      });
    },
    addField: function (container, fieldtype, index) {
      var newField = {
        caption: "",
        id: generateGuid(),
        settings: {},
        preValues: [],
        $focus: true
      };

      service.loadFieldTypeSettings(newField, fieldtype);

      if (container.fields.length > index) {
        container.fields.splice(index, 0, newField);
      } else {
        container.fields.push(newField);
      }
    },
    addEmptyField: function (container) {
      var newField = {
        caption: "",
        alias: "",
        id: generateGuid(),
        settings: {},
        preValues: [],
        $focus: true
      };

      container.fields.push(newField);

      return newField;
    },
    getAllFields: function (form) {
      var fields = [];
      if (form.pages) {
        _.each(form.pages, function (page) {
          if (page.fieldSets) {
            _.each(page.fieldSets, function (fieldset) {
              if (fieldset.containers) {
                _.each(fieldset.containers, function (container) {
                  if (container.fields) {
                    _.each(container.fields, function (field) {
                      fields.push(field);
                    });
                  }
                });
              }
            });
          }
        });
      }

      return fields;
    },
    copyField: function (container, field, existingFieldAliases) {
      var index = container.fields.indexOf(field);
      if (index >= 0) {
        service.copyFieldAtIndex(container, field, index, existingFieldAliases);
      }
    },
    copyFieldAtIndex: function (container, field, index, existingFieldAliases) {
      var copiedField = JSON.parse(JSON.stringify(field)); // Ensure a deep clone of the field.
      copiedField.id = generateGuid();
      copiedField.alias = generateCopiedAlias(field.alias, existingFieldAliases);
      container.fields.splice(index + 1, 0, copiedField);
    },
    deleteField: function (fieldset, container, field) {
      var index = container.fields.indexOf(field);
      if (index >= 0) {
        service.deleteFieldAtIndex(fieldset, container, index);
      }
    },
    deleteFieldAtIndex: function (fieldset, container, index) {
      container.fields.splice(index, 1);
      if (container.fields.length === 0) {
        service.deleteContainer(fieldset, container);
      }
    },
    setFieldType: function (field, fieldTypeId) {
      // Get field type
      field.fieldTypeId = fieldTypeId;

      var fldt = _.find(service.fieldTypes, function (ft) { return ft.id === field.fieldTypeId; });
      field.$fieldType = fldt;

      service.loadFieldTypeSettings(field, field.$fieldType);
      service.loadFieldTypePrevalues(field);
    },
    loadFieldTypePrevalues: function (field) {
      if (field.prevalueSourceId !== null && field.prevalueSourceId !== "00000000-0000-0000-0000-000000000000") {
        preValueSourceResource.getPreValuesByGuid(field.prevalueSourceId).then(function (response) {
          field.$preValues = response.data;
        });
      } else {
        field.$preValues = null;
      }
    },
    loadFieldTypeSettings: function (field, fieldtype) {
      if (!fieldtype) {
        field.settings = {};
        return;
      }

      if (field.fieldTypeId !== fieldtype.id) {
        field.settings = {};
      }

      field.fieldTypeId = fieldtype.id;
      field.$fieldType = fieldtype;

      if (fieldtype.settings) {
        _.each(fieldtype.settings, function (setting) {
          if (!field.settings[setting.alias]) {
            field.settings[setting.alias] = "";
          }
        });
      }
    },
    deleteConditionRule: function (rules, rule) {
      var index = rules.indexOf(rule);
      rules.splice(index, 1);
    },
    addConditionRule: function (condition) {
      if (!condition.rules) {
        condition.rules = [];
      }

      condition.rules.push({
        field: condition.$newrule.field,
        operator: condition.$newrule.operator,
        value: condition.$newrule.value
      });
    },
    addEmptyConditionRule: function (condition) {
      if (!condition.rules) {
        condition.rules = [];
      }

      condition.rules.push({
        field: "",
        operator: "",
        value: ""
      });
    },
    populateConditionRulePrevalues: function (selectedField, rule, fields) {
      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        if (field.id === selectedField) {
          // Prevalues and be stored in both $preValues and preValues
          if (field.$preValues && field.$preValues.length > 0) {
            rule.$preValues = field.$preValues;
          } else if (field.preValues && field.preValues.length > 0) {
            // Use parsedPreValues so we can display label and caption
            rule.$preValues = field.parsedPreValues;
          } else {
            rule.$preValues = null;
          }
        }
      }
    },
    getSelectedPrevalues: function (fieldPreValues, fieldValue) {

      if (!fieldValue || fieldValue.length === 0) {
        return [];
      }

      // "," is used as a delimeter for multi-select fields, but it's not safe to just
      // split on this in case the prevalues themselves have commas in.
      // Instead we'll adjust the delimiter for each prevalue in reverse order of length,
      // to avoid the chance of one prevalue containing another.

      // - get the prevalues for the field in reverse length order.
      var fieldPreValuesSortedInReverseLength = _.sortBy(fieldPreValues, function (pv) {
        return -pv.value.length;
      });

      // - replace the comma delimiters in the provided string value for the field with something that
      //   won't be in the prevalue itself.
      // - also do a temporary replacement of commas within the prevalue, to ensure we
      //   treat that as a whole value.
      var value = fieldValue + ", ";
      var delimiter = "|||";
      for (var i = 0; i < fieldPreValuesSortedInReverseLength.length; i++) {
        var fieldPreValueValue = fieldPreValuesSortedInReverseLength[i].value;
        value = value.replace(fieldPreValueValue + ", ", fieldPreValueValue.replace(",", "|,") + delimiter);
      }

      var result = value.split(delimiter).filter(Boolean); // the filter removes the trailing delimiter.

      // - now restore the commas.
      for (i = 0; i < result.length; i++) {
        result[i] = result[i].replace("|,", ",");
      }

      return result;
    }
  };

  return service;
});

angular.module('umbraco.services').factory('formsValidationService', function () {
  function getErrorMessageFromExceptionResponse(err) {
    var errorMessage = err.data.Message;
    if (err.data.ModelState) {
      var modelStateValues = Object.keys(err.data.ModelState).map(function (key) {
        return err.data.ModelState[key][0];
      });

      errorMessage = modelStateValues.join("<br/>");
    }

    return errorMessage;
  }

  return {
    getErrorMessageFromExceptionResponse: getErrorMessageFromExceptionResponse
  };
});

angular.module('umbraco.services').factory('providerLocalizationHelper', function () {
  function convertNameForKey(name) {
    // Hat-tip: https://stackoverflow.com/a/2970667
    return name.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\W+/g, '');
  }

  function labelIsTranslated(label) {
    // If localized label is in []s, it means we didn't localize the key
    return !(label[0] === "[" && label[label.length - 1] === "]");
  }

  return {
    getLocalizationKeys: function (stem, types, name) {
      var keys = [];
      for (var i = 0; i < types.length; i++) {
        // 'name' will be provided if we're working with an instance of a type, e.g. a workflow, when we'll also have a single-element array
        var systemName = name || types[i].name;
        var keyStem = stem + "_" + convertNameForKey(systemName);

        // Add keys for the type's name and description
        keys.push(keyStem + "Name");
        keys.push(keyStem + "Description");

        // Add keys for each setting
        if (types[i].settings) {
          for (var j = 0; j < types[i].settings.length; j++) {
            var keySettingStem = keyStem + types[i].settings[j].alias;
            keys.push(keySettingStem + "Label");
            keys.push(keySettingStem + "Description");
          }
        }
      }

      return keys;
    },
    getLocalizationKeysForFormWorkflows: function (formWorkflows) {
      var keys = [];
      var stem = "formProviderWorkflows";

      var getKeysForWorkflows = function (workflows, keys) {
        for (var i = 0; i < workflows.length; i++) {
          var keyStem = stem + "_" + convertNameForKey(workflows[i].workflowTypeName);

          // Add keys for the workflow's name and description
          keys.push(keyStem + "Name");
          keys.push(keyStem + "Description");
        }
      };

      getKeysForWorkflows(formWorkflows.onSubmit, keys);
      getKeysForWorkflows(formWorkflows.onApprove, keys);

      return keys;
    },
    applyLocalizationLabels: function (types, labels, omitSettingName) {
      var labelIndex = 0;
      for (var i = 0; i < types.length; i++) {
        // Update the name and description (we omit setting the name when working with an instance of a type, e.g. a workflow)
        if (!omitSettingName && labelIsTranslated(labels[labelIndex])) {
          types[i].name = labels[labelIndex];
        }

        labelIndex++;

        if (labelIsTranslated(labels[labelIndex])) {
          types[i].description = labels[labelIndex];
        }

        labelIndex++;

        // Update the settings
        if (types[i].settings) {
          for (var j = 0; j < types[i].settings.length; j++) {
            if (labelIsTranslated(labels[labelIndex])) {
              // Got a localized key, so set it on the type. Otherwise we leave the English label and
              // description defined on the Setting attribute.
              types[i].settings[j].name = labels[labelIndex];
              types[i].settings[j].description = labels[labelIndex + 1];
            }

            labelIndex = labelIndex + 2; // Incerement by 2 as we have two localized labels for each setting (label and description).
          }
        }
      }
    },
    applyLocalizationLabelsToFormWorkflows: function (formWorkflows, labels) {
      var applyToWorkflows = function (workflows, labels, labelIndex) {
        for (var i = 0; i < workflows.length; i++) {
          // Update the name and description.
          if (labelIsTranslated(labels[labelIndex])) {
            workflows[i].workflowTypeName = labels[labelIndex];
          }

          labelIndex++;

          if (labelIsTranslated(labels[labelIndex])) {
            workflows[i].workflowTypeDescription = labels[labelIndex];
          }

          labelIndex++;
        }

        return labelIndex;
      };

      var nextLabelIndex = applyToWorkflows(formWorkflows.onSubmit, labels, 0);
      applyToWorkflows(formWorkflows.onApprove, labels, nextLabelIndex);
    }
  };
});

/**
 * Compares two software version numbers (e.g. "1.7.1" or "1.2b").
 *
 *
 * @param {string} v1 The first version to be compared.
 * @param {string} v2 The second version to be compared.
 * @param {object} [options] Optional flags that affect comparison behavior:
 * <ul>
 *     <li>
 *         <tt>lexicographical: true</tt> compares each part of the version strings lexicographically instead of
 *         naturally; this allows suffixes such as "b" or "dev" but will cause "1.10" to be considered smaller than
 *         "1.2".
 *     </li>
 *     <li>
 *         <tt>zeroExtend: true</tt> changes the result if one version string has less parts than the other. In
 *         this case the shorter string will be padded with "zero" parts instead of being considered smaller.
 *     </li>
 * </ul>
 * @returns {number|NaN}
 * <ul>
 *    <li>0 if the versions are equal</li>
 *    <li>a negative integer iff v1 < v2</li>
 *    <li>a positive integer iff v1 > v2</li>
 *    <li>NaN if either version string is in the wrong format</li>
 * </ul>
 */
angular.module('umbraco.services').factory('utilityService', function () {
  return {
    compareVersions: function (v1, v2, options) {
      var lexicographical = options && options.lexicographical,
        zeroExtend = options && options.zeroExtend,
        v1parts = v1.split('.'),
        v2parts = v2.split('.');

      function isValidPart(x) {
        return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(x);
      }

      if (!v1parts.every(isValidPart) || !v2parts.every(isValidPart)) {
        return NaN;
      }

      if (zeroExtend) {
        while (v1parts.length < v2parts.length) {
          v1parts.push("0");
        }
        while (v2parts.length < v1parts.length) {
          v2parts.push("0");
        }
      }

      if (!lexicographical) {
        v1parts = v1parts.map(Number);
        v2parts = v2parts.map(Number);
      }

      for (var i = 0; i < v1parts.length; ++i) {
        if (v2parts.length === i) {
          return 1;
        }

        if (v1parts[i] === v2parts[i]) {
          continue;
        } else if (v1parts[i] > v2parts[i]) {
          return 1;
        } else {
          return -1;
        }
      }

      if (v1parts.length !== v2parts.length) {
        return -1;
      }

      return 0;
    },
    serverTimeNeedsOffsetting: function () {
      // Check if we need to do server time offset to the date we are displaying
      var needsOffsetting = false;
      var serverOffset = 0;

      // Check we have a serverTimeOffset in the Umbraco global JS object
      if (Umbraco.Sys.ServerVariables.application.serverTimeOffset !== undefined) {
        // C# server offset - will return something like 120
        serverOffset = Umbraco.Sys.ServerVariables.application.serverTimeOffset;

        // Current local user's date/time offset in JS - will return something like -120
        var localOffset = new Date().getTimezoneOffset();

        // If these aren't equal then offsetting is needed
        // note the minus in front of serverOffset needed
        // because C# and javascript return the inverse offset
        needsOffsetting = (-serverOffset !== localOffset);
      }

      return needsOffsetting;
    },
    hexHtmlToString: function (s) {
      // Hat-tip: https://stackoverflow.com/a/70081499/489433
      var REG_HEX = /&#x([a-fA-F0-9]+);/g;

      return s.replace(REG_HEX, function (match, grp) {
        var num = parseInt(grp, 16);
        return String.fromCharCode(num);
      }).replace("&amp;", "&");
    }
  };
});

// Testing if filter already exists, otherwise we will create it. 
angular.module("umbraco.filters").config(function ($injector, $provide) {
  if ($injector.has('truncateFilter')) {
    // Yep, we already got the filter!
  } else {
    // injecting the filter on the provider, notice we need to add 'Filter' to the name for it to be a filter.
    $provide.provider('truncateFilter', function () {
      return {
        $get: function () {
          // Filter code
          return function (value, wordwise, max, tail) {
            if (!value) {
              return '';
            }

            // Overload-fix to support Forms Legacy Version:
            // We are making this hack to support the old version of the truncate filter.
            // The old version took different attributes, this code block checks if the first argument isnt a boolean, meaning its not the new version, meaning that the filter is begin used in the old way.
            // Therefor we use the second argument(max) to indicate wether we want a tail (…) and using the first argument(wordwise) as the second argument(max amount of characters)
            if (typeof (wordwise) !== 'boolean') {
              // Switch arguments around to fit Forms version.
              if (max !== true) {
                tail = '';
              }

              max = wordwise;
              wordwise = false;
            }

            // !end of overload fix.

            max = parseInt(max, 10);
            if (!max) {
              return value;
            }

            if (value.length <= max) {
              return value;
            }

            tail = (!tail && tail !== '') ? '…' : tail;

            if (wordwise && value.substr(max, 1) === ' ') {
              max++;
            }

            value = value.substr(0, max);

            if (wordwise) {
              var lastspace = value.lastIndexOf(' ');
              if (lastspace !== -1) {
                value = value.substr(0, lastspace + 1);
              }
            }

            return value + tail;
          };
        }
      };
    });
  }
});

angular.module('umbraco.filters').filter('fileName', function () {
  return function (input) {
    // The input will be a path like so, we just want my-panda-photo.jpg
    // /media/forms/upload/f2ab8761-6a75-4c9d-a281-92e5e508856a/my-panda-photo.jpg
    input = input.split('\\').pop().split('/').pop();

    return input;
  };
});

angular.module('umbraco.filters').filter('momentDateTimeZone', function ($filter) {
  return function (input, momentFormat) {
    var parseDate = moment.utc(input);

    return parseDate.format(momentFormat);
  };
});

angular.module('umbraco.filters').filter('relativeDate', function ($filter) {
  return function (input) {
    var now = moment();

    // Hack: Removing the Z so that moment doesn't apply an offset to the time when parsing it
    var parseDate = moment(input.replace("Z", ""));

    // Check the date is valid
    if (parseDate.isValid() === false) {
      // Parse the value through the default date filter with the value & setting the param/format to medium {{ value | date:'medium' }}
      return $filter('date')(input, 'medium');
    }

    return parseDate.from(now);
  };
});
