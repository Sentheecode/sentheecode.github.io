$(document).ready(function(){
	$("#login").click(function(event) {
		var name = $("#username").val();
		var pwd = $("#password").val();
		if(name=="")
		{
		   alert("用户名不能为空！");
		}
		else if(pwd=="")
		{
		   alert("密码不能为空！");
		}
		else if(pwd!="" && pwd.length < 6){
			alert("密码不能小于6位！");
		}
		else if(name!="" && pwd !="" && pwd.length >= 6)
		{
			if(name == "吴斌" && pwd == "123456"){
				alert("登录成功！");
				window.location.href = "index/index.html";
			}
			else{
				alert("用户名或密码错误！");
				window.location.href = "index.html";
			}
			/*var user = $("input[type='radio']:checked").val();
			var type = 0;
			if(user == "外援人员"){
				type = 0;
			}
			else if(user == "涂装人员"){
				type = 1;
			}
			else if(user == "管理员"){
				type = 2;
			}
	
			var data = {
					"user":name,
					"pwd":pwd,
					"type":type
			};*/

		/*$.post("/practice_system/logintest",data,function(data, textStatus, xhr)
		{

			if(textStatus=="success")
			{
				if(data[0]["returnflag"]=="1")
				{
					setCookie("user",name,1);
					setCookie("SESSIONID",data[0]["SESSIONID"],1);
					setCookie("type",type,1);
					switch (type) {
						case 0:   
							window.location = "index/index.html";
							break;
						case 1:
							
							window.location = "index/index.html";
							break;
						case 2:
							
							window.location = "index/index.html";
							break;
						default:
							alert("未知错误!");
							// statements_def
							break;
					}
				}
				else
				{
					alert("用户名或密码错误！");
				}
			}
			else
			{
				alert("服务器错误！");
			}
		});*/

		}
	});
});