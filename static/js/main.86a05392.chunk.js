(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),o=(a(13),a(1)),l=a(2),c=a(4),u=a(3),d=a(5),m=(a(15),a(16),a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={message:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"checkLogin",value:function(){var e=this.refs.userid.value;e==this.refs.pwd.value?this.props.updateLoginStatus(!0,e):this.setState({message:"Invalid Userid or Password"})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",{className:"alert-danger"},this.state.message),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""}),s.a.createElement("input",{type:"text",className:"form-control",ref:"userid",placeholder:"Type Userid Here "})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""}),s.a.createElement("input",{type:"password",className:"form-control",ref:"pwd",placeholder:"Type Password Here "})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{onClick:this.checkLogin.bind(this),className:"btn btn-primary"},"Login"),"\xa0",s.a.createElement("button",{className:"btn btn-dark"},"Clear All")))}}]),t}(s.a.Component)),h=function(e){return s.a.createElement("div",null,s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Id"),s.a.createElement("input",{type:"text",onChange:e.takeInputId,className:"form-control",placeholder:"Type Question Id"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Name"),s.a.createElement("input",{type:"text",onChange:e.takeInputName,className:"form-control",placeholder:"Type Question Name"})),s.a.createElement("div",{className:"btn-group btn-group-justified"},s.a.createElement("button",{onClick:e.add,className:"btn btn-primary"},"Add"),s.a.createElement("button",{onClick:e.deleteRec,className:"btn btn-danger"},"Delete"),s.a.createElement("button",{className:"btn btn-info"},"Save"),s.a.createElement("button",{className:"btn btn-dark"},"Load"),s.a.createElement("button",{className:"btn btn-warning"},"Search"),s.a.createElement("button",{className:"btn btn-dark"},"Sort"),s.a.createElement("button",{className:"btn btn-info"},"Clear All")))},p=function(){function e(t,a){Object(o.a)(this,e),this.id=t,this.name=a,this.isMarked=!1}return Object(l.a)(e,[{key:"toggle",value:function(){return this.isMarked=!this.isMarked,this.isMarked}}]),e}(),b={questions:[],add:function(e,t){var a=new p(e,t);this.questions.push(a),console.log("Record added in array ",this.questions)},deleteRecords:function(){return this.questions=this.questions.filter(function(e){return 0==e.isMarked}),this.questions},markRecord:function(e){return this.searchById(e).toggle()},searchById:function(e){return this.questions.find(function(t){return t.id==e})}},f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={ques:{}},console.log("Cons Call ",a.state),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"markUnMark",value:function(e){this.props.question.toggle(),this.setState({ques:this.props.question}),console.log(this.props.question," ",this.state)}},{key:"render",value:function(){var e=this;return s.a.createElement("tr",{className:this.props.question.isMarked?"table-danger":"table-default",key:this.props.question.id},s.a.createElement("td",null,this.props.question.id),s.a.createElement("td",null,this.props.question.name),s.a.createElement("td",null,s.a.createElement("i",{className:"fas fa-trash",onClick:function(){return e.markUnMark(e.props.question.id)}})))}}]),t}(s.a.Component),g=function(e){return s.a.createElement("div",null,s.a.createElement("table",{className:"table table-striped"},s.a.createElement("thead",{className:"thead-dark"},s.a.createElement("tr",null,s.a.createElement("th",null,"Id"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Operations"))),s.a.createElement("tbody",null,e.list.map(function(t,a){return s.a.createElement(f,{giveMeSelectedQuestionId:e.giveMeSelectedQuestionId,key:a,question:t})}))))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).id=0,a.name="",a.state={questionObject:{},questions:[],rowColor:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"giveMeSelectedQuestionId",value:function(e){console.log("Current Id is ",e);b.markRecord(e);console.log("After Marked ",b.questions)}},{key:"takeInputName",value:function(e){this.name=e.target.value}},{key:"takeInputId",value:function(e){this.id=e.target.value}},{key:"add",value:function(){b.add(this.id,this.name),this.setState({questions:b.questions}),console.log("Add ",b.questions)}},{key:"deleteRec",value:function(){console.log("Array is ",b.questions);var e=b.deleteRecords();console.log("After delete record are  ",e),this.setState({questions:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h4",null,"Welcome , ",this.props.userName),s.a.createElement(h,{takeInputName:this.takeInputName.bind(this),takeInputId:this.takeInputId.bind(this),deleteRec:this.deleteRec.bind(this),add:this.add.bind(this)}),s.a.createElement(g,{giveMeSelectedQuestionId:this.giveMeSelectedQuestionId.bind(this),list:this.state.questions}))}}]),t}(s.a.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLogin:!1,userName:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"isAuth",value:function(e,t){this.setState({isLogin:e,userName:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"alert-success"},"CRUD App Demo"),this.state.isLogin?s.a.createElement(k,{userName:this.state.userName}):s.a.createElement(m,{updateLoginStatus:this.isAuth.bind(this)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.86a05392.chunk.js.map