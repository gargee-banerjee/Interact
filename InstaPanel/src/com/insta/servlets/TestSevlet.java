package com.insta.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TestSevlet extends HttpServlet {

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		int l = 0;
		int another = 0;
		try {
			l = Integer.parseInt(req.getParameter("num1"));
			another = Integer.parseInt(req.getParameter("h"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		/*
		 * req.setAttribute("num", l); PrintWriter out = res.getWriter();
		 * out.println("The number is: " + l + "Another one is : " + another); //request
		 * dispatcher
		 * 
		 * RequestDispatcher rd = req.getRequestDispatcher("sc"); rd.forward(req, res);
		 * 
		 * //System.out.println("The number is: " + l);
		 */
		//sendredirect -----------------------------------------------
		res.sendRedirect("sc?num1="+l);//rewriting url
	}
}
