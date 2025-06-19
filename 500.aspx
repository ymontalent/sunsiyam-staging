<%@ page trace = "false" validateRequest="false" %>

<%-- set correct site name based on requested domain and culture --%>
<% string siteName = ""; %>
<% string hostName = Request.Url.Host; %>
<% System.Text.RegularExpressions.Match languagePathMatch = System.Text.RegularExpressions.Regex.Match(Request.RawUrl, "^/(.{2})/"); %>
<% if (languagePathMatch.Success) { hostName += languagePathMatch.Groups[0]; } %> 
<% string culture = ""; %>

<% if (hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com" || hostName == "staging.sunsiyam.com") { siteName = "HomePage"; } %>

<%-- return file content with a 500 status code --%>
<% Response.StatusCode = 500; %>
<% if (!string.IsNullOrEmpty(siteName)) { Response.WriteFile("500-" + siteName + ".html"); } %>
