export default {
	myVar1: [],
	myVar2: {},
	startjsfn: () => {
		//write code here
		storeValue("ProjectName",'%');
		if (appsmith.store.PrimaryColor === null) {
			storeValue("PrimaryColor",'#03B365');
		}
		
	},
	myFun2: async () => {
		//use async-await or promises
	}
}