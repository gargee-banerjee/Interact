package com.interact.DaoImpl;
import java.util.List;
import java.util.Date;
import java.util.Iterator; 
 
import org.hibernate.HibernateException; 
import org.hibernate.Session; 
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.google.gson.Gson;
import com.interact.model.Comments;

public class InteractCommentsFetch {
	private static SessionFactory factory; 

public static void listEmployees( ){
    Session session = factory.openSession();
    Transaction tx = null;
    
    try {
       tx = session.beginTransaction();
       List employees = session.createQuery("FROM Comments").list(); 
       
       Gson gson = new Gson();
       String json = gson.toJson(employees);
       System.out.println(json);
       tx.commit();
    } catch (HibernateException e) {
       if (tx!=null) tx.rollback();
       e.printStackTrace(); 
    } finally {
       session.close(); 
    }
 }
//main method
	public static void main(String args[]) {
		
		 try {
	         factory = new Configuration().configure().buildSessionFactory();
	      } catch (Throwable ex) { 
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex); 
	      }
		 
		 listEmployees();
	}
}
