package com.interact.model;

import java.util.Date;

public class Comments {

	private Integer pkId = null;
	private String name = null;
	private String comments = null;
	private Date date = null;

	
	public Comments() {}


	public Integer getPkId() {
		return pkId;
	}


	public void setPkId(Integer pkId) {
		this.pkId = pkId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getComments() {
		return comments;
	}


	public void setComments(String comments) {
		this.comments = comments;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}
	
}
