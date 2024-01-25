export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		//GetProjects.run();
		return [{"ProjectName": "%" }].concat(GetProjects.data);
	},
	myFun3: () => {
		//write code here
		//GetProjects.run();
		return AssignTo.data.concat({"AssignTo": "%" });
	},
	myFun2: async () => {
		//use async-await or promises
	}
}