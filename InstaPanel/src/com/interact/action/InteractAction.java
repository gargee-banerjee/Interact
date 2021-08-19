package com.interact.action;

public class InteractAction {

	private String data= null;
	public String execute() {
		return "success";
	}
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	
	
}
