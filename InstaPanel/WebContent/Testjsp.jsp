<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body bgcolor="yellow">
<%!int l=0; %>
<%

int another = 0;
try {
	l = Integer.parseInt(request.getParameter("num1"));
	another = Integer.parseInt(request.getParameter("h"));
} catch (Exception e) {
	e.printStackTrace();
}
out.println("The output is : " + l);
%>
<%= l %>
</body>
</html>