webpackJsonp([0],[,,,,,,function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();exports.BaseService=function(){function BaseService($http){_classCallCheck(this,BaseService),this._$http=$http}return BaseService.$inject=["$http"],_createClass(BaseService,[{key:"doGet",value:function(url,params){return this._$http.get(url,params)}},{key:"doPost",value:function(url,params){return this._$http.post(url,params)}},{key:"doPut",value:function(url,params){return this._$http.put(url,params)}}]),BaseService}()},function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.footer={template:__webpack_require__(35)}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.header={template:__webpack_require__(36)}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hospitalCardListModule=void 0;var _angular=__webpack_require__(1),_angular2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_angular),_hospitalCard=__webpack_require__(43),_hospitalCardList=__webpack_require__(42),hospitalCardListModule=exports.hospitalCardListModule="hospitalCardList";_angular2.default.module(hospitalCardListModule,[]).component("hospitalCard",_hospitalCard.hospitalCard).component("hospitalCardList",_hospitalCardList.hospitalCardList)},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginModule=void 0;var _angular=__webpack_require__(1),_angular2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_angular),_login=__webpack_require__(44),loginModule=exports.loginModule="login";_angular2.default.module(loginModule,[]).component("login",_login.login)},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.main={template:__webpack_require__(40)}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.title={template:__webpack_require__(41)}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.serviceModule=void 0;var _angular=__webpack_require__(1),_angular2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_angular),_base=__webpack_require__(6),_user=__webpack_require__(46),_queue=__webpack_require__(45),serviceModule=exports.serviceModule="serviceModule";_angular2.default.module(serviceModule,[]).service("BaseService",_base.BaseService).service("UserService",_user.UserService).service("QueueService",_queue.QueueService)},function(module,exports,__webpack_require__){"use strict";function routesConfig($stateProvider,$urlRouterProvider,$locationProvider){$locationProvider.html5Mode(!0).hashPrefix("!"),$urlRouterProvider.otherwise("/"),$stateProvider.state("app",{abstract:!0,template:"<ui-view />"}).state("app.home",{url:"/",component:"app"}).state("login",{url:"/login",component:"login"})}function checkUserAuthentication($cookies,$transitions,UserService){$transitions.onStart({to:"app.**"},function(trans){var currentUser=$cookies.getObject("currentUser");if(!UserService.isAuthenticated()&&!currentUser)return trans.router.stateService.target("login");UserService.currentUser.token||(UserService.currentUser.username=currentUser.username,UserService.currentUser.email=currentUser.email,UserService.currentUser.token=currentUser.token)})}routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(exports,"__esModule",{value:!0}),exports.routesConfig=routesConfig,exports.checkUserAuthentication=checkUserAuthentication},,,,,,,,,,,,,,,function(module,exports){},function(module,exports){},function(module,exports){},function(module,exports){module.exports='<footer class="footer">\n<p>\n  Criado para o TCC II - Sistemas de Informação\n</p>\n</footer>\n'},function(module,exports){module.exports='<nav class="navbar navbar-default">\n  <div class="container-fluid">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n      <a class="navbar-brand" href="#">MedQueue</a>\n    </div>\n\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n\n      <ul class="nav navbar-nav">\n        <li class="active"><a href="#">Início <span class="sr-only">(current)</span></a></li>\n        <li><a href="#">Link</a></li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li><a href="#">Análise</a></li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n'},function(module,exports){module.exports='<div class="card-list-container">\n\n  <div class="well well-sm">\n    Hospitais disponíveis:\n  </div>\n\n  <div class="card-list">\n    <hospital-card ng-repeat="card in $ctrl.cards" card="card"></hospital-card>\n  </div>\n\n</div>\n'},function(module,exports){module.exports='<div class="hospital-card well well-lg">\n  <h3 class="hospital-card-h3">\n    {{ $ctrl.card.name }}\n  </h3>\n\n  <div class="queue-count">\n\n    <i class="fa fa-users" aria-hidden="true"></i>\n    <p>{{$ctrl.card.queue}}</p>\n  </div>\n\n\n  <div class="general-info">\n    <h4>Informações gerais: </h4>\n    <p>\n      <i class="fa fa-fw fa-map-marker" aria-hidden="true"></i>\n      <span>{{ $ctrl.card.location.street }}</span>\n    </p>\n\n    <p>\n      <i class="fa fa-fw fa-map-o" aria-hidden="true"></i>\n      <span>{{ $ctrl.card.location.latitude }} - {{ $ctrl.card.location.longitude }}</span>\n    </p>\n  </div>\n\n  <div class="action-buttons row">\n\n    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">\n      <button type="button" class="btn btn-default" data-ng-disabled="true">Estatísticas</button>\n    </div>\n\n    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">\n      <button type="button" class="btn btn-primary" data-ng-click="$ctrl.joinQueue()">Ingressar</button>\n    </div>\n\n  </div>\n</div>\n'},function(module,exports,__webpack_require__){module.exports='<div class="login-component container">\n\n\n  <img src="'+__webpack_require__(48)+'" class="img-responsive" alt="Image">\n\n  <div class="row">\n    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form login-form">\n\n      <form data-ng-submit="$ctrl.login()" role="form">\n        <legend>\n          <i class="fa fa-user-circle" aria-hidden="true"></i> Entrar\n        </legend>\n\n        <div class="form-group">\n          <input type="text" class="form-control" data-ng-model="$ctrl.user.username" placeholder="Usuário" required>\n          <input type="password" class="form-control" data-ng-model="$ctrl.user.password" placeholder="Senha" required>\n        </div>\n\n        <button type="submit" class="btn btn-primary">Entrar <i class="fa fa-sign-in" aria-hidden="true"></i></button>\n      </form>\n\n    </div>\n\n    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 form register-form">\n\n      <form data-ng-submit="$ctrl.register()" role="form">\n        <legend>\n          <i class="fa fa-user-plus" aria-hidden="true"></i> Registrar\n        </legend>\n\n        <div class="form-group">\n          <input type="text" class="form-control" data-ng-model="$ctrl.newUser.username" placeholder="Usuário" required>\n          <input type="password" class="form-control" data-ng-model="$ctrl.newUser.password" placeholder="Senha" required>\n          <input type="email" class="form-control" data-ng-model="$ctrl.newUser.email" placeholder="E-mail" required>\n        </div>\n\n        <button type="submit" class="btn btn-primary">Registrar <i class="fa fa-chevron-circle-up" aria-hidden="true"></i></button>\n      </form>\n\n    </div>\n\n  </div>\n\n</div>\n'},function(module,exports){module.exports='<div class="main-container">\n  <main class="main">\n    <fountain-title></fountain-title>\n    <hospital-card-list></hospital-card-list>\n  </main>\n\n</div>\n'},function(module,exports){module.exports='<div class="title">\n  <h1 class="title-h1">Bem Vindo!</h1>\n\n  <div class="row hospital-search-bar">\n    <div class="col-sm-12">\n      <div class="form-group">\n        <input type="search" id="findHospitalBar" name="findHospital" class="form-control" placeholder="Filtrar hospitais... &#xF002;" style="font-family:Arial, FontAwesome" />\n      </div>\n    </div>\n  </div>\n  \n</div>\n'},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hospitalCardList=void 0;var _sweetalert=__webpack_require__(2),_sweetalert2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_sweetalert);__webpack_require__(32);var HospitalCardListController=["$http",function HospitalCardListController($http){var _this=this;_classCallCheck(this,HospitalCardListController),$http.get("/api/queue/availableHospitals").then(function(response){_this.cards=response.data},function(err){(0,_sweetalert2.default)("Erro!",err.data,"error")})}];exports.hospitalCardList={template:__webpack_require__(37),controller:HospitalCardListController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.hospitalCard=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_sweetalert=__webpack_require__(2),_sweetalert2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_sweetalert);__webpack_require__(33);var HospitalCardController=function(){function HospitalCardController($log,QueueService,UserService){_classCallCheck(this,HospitalCardController),this._$log=$log,this.QueueService=QueueService,this.username=UserService.currentUser.username}return HospitalCardController.$inject=["$log","QueueService","UserService"],_createClass(HospitalCardController,[{key:"joinQueue",value:function(){this.username&&this.QueueService.joinQueue({hospitalCode:this.card.hospitalCode,username:this.username}).then(function(response){response.data.queue=response.data.queue.length},function(err){(0,_sweetalert2.default)("Falha!",err.data,"error")})}}]),HospitalCardController}();exports.hospitalCard={template:__webpack_require__(38),bindings:{card:"<"},controller:HospitalCardController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.login=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_sweetalert=__webpack_require__(2),_sweetalert2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_sweetalert);__webpack_require__(34);var LoginController=function(){function LoginController(UserService,$state){_classCallCheck(this,LoginController),this.user={username:"",password:""},this.newUser={},this._state=$state,this.UserService=UserService}return LoginController.$inject=["UserService","$state"],_createClass(LoginController,[{key:"register",value:function(){var _this=this;this.UserService.doPost("/api/login/register",this.newUser).then(function(response){(0,_sweetalert2.default)("Sucesso!",response.data,"success"),_this.newUser={}},function(error){(0,_sweetalert2.default)("Falha!",error.data,"error")})}},{key:"login",value:function(){var _this2=this;this.UserService.doLogin(this.user).then(function(){_this2._state.go("app.home")},function(error){_this2.user={},(0,_sweetalert2.default)("Falha!",error.data,"error")})}}]),LoginController}();exports.login={template:__webpack_require__(39),controller:LoginController}},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.QueueService=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_base=__webpack_require__(6);exports.QueueService=function(_BaseService){function QueueService($http,$q){_classCallCheck(this,QueueService);var _this=_possibleConstructorReturn(this,(QueueService.__proto__||Object.getPrototypeOf(QueueService)).call(this,$http));return _this._$q=$q,_this}return QueueService.$inject=["$http","$q"],_inherits(QueueService,_BaseService),_createClass(QueueService,[{key:"joinQueue",value:function(params){return this.doPost("/api/queue/push",params)}}]),QueueService}(_base.BaseService)},function(module,exports,__webpack_require__){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserService=void 0;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_base=__webpack_require__(6);exports.UserService=function(_BaseService){function UserService($cookies,$http,$q){_classCallCheck(this,UserService);var _this=_possibleConstructorReturn(this,(UserService.__proto__||Object.getPrototypeOf(UserService)).call(this,$http));return _this._$q=$q,_this._$cookies=$cookies,_this.currentUser={username:"",email:"",token:""},_this}return UserService.$inject=["$cookies","$http","$q"],_inherits(UserService,_BaseService),_createClass(UserService,[{key:"doLogin",value:function(user){var _this2=this,deferred=this._$q.defer();return this.doPost("/api/login/authenticate",user).then(function(response){_this2.currentUser.username=response.data.username,_this2.currentUser.token=response.data.token,_this2.currentUser.email=response.data.email;var expireDate=new Date;expireDate.setDate(expireDate.getDate()+1),_this2._$cookies.putObject("currentUser",_this2.currentUser,{expires:expireDate}),deferred.resolve(response)},function(error){deferred.reject(error)}),deferred.promise}},{key:"doLogout",value:function(){}},{key:"isAuthenticated",value:function(){return this.currentUser&&this.currentUser.username&&this.currentUser.token&&this.currentUser.email}}]),UserService}(_base.BaseService)},function(module,exports,__webpack_require__){"use strict";var _angular=__webpack_require__(1),_angular2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_angular);__webpack_require__(4),__webpack_require__(3),__webpack_require__(0),__webpack_require__(5),__webpack_require__(7);var _routes=__webpack_require__(17),_services=__webpack_require__(16),_main=__webpack_require__(14),_header=__webpack_require__(11),_title=__webpack_require__(15),_footer=__webpack_require__(10),_hospitalCardList=__webpack_require__(12),_login=__webpack_require__(13);__webpack_require__(9),__webpack_require__(8),_angular2.default.module("app",[_hospitalCardList.hospitalCardListModule,_login.loginModule,_services.serviceModule,"ui.router","ngCookies"]).config(_routes.routesConfig).run(_routes.checkUserAuthentication).component("app",_main.main).component("fountainHeader",_header.header).component("fountainTitle",_title.title).component("fountainFooter",_footer.footer)},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"f188829714c345e03fa4ce04f17286f7.png"}],[47]);