"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const gateway_pop_1 = __importDefault(require("@alicloud/gateway-pop"));
const openapi_core_1 = __importDefault(require("@alicloud/openapi-core"));
const openapi_core_2 = require("@alicloud/openapi-core");
const $_model = __importStar(require("./models/model"));
__exportStar(require("./models/model"), exports);
class Client extends openapi_core_1.default {
    constructor(config) {
        super(config);
        this._productId = "WebsiteBuild";
        let gatewayClient = new gateway_pop_1.default();
        this._spi = gatewayClient;
        this._endpointRule = "regional";
        this._endpointMap = {
            'cn-zhangjiakou': "websitebuild.aliyuncs.com",
            'ap-southeast-1': "websitebuild-intl.aliyuncs.com",
        };
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("websitebuild", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
    }
    getEndpoint(productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!$dara.isNull(endpoint)) {
            return endpoint;
        }
        if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return openapi_core_2.OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
    }
    /**
     * Allocates a Supabase instance to a resource allocation.
     *
     * @remarks
     * Queries the Supabase instance information of a resource.
     *
     * @param request - AllocateSupabaseForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AllocateSupabaseForAdminResponse
     */
    async allocateSupabaseForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AllocateSupabaseForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AllocateSupabaseForAdminResponse({}));
    }
    /**
     * Allocates a Supabase instance to a resource allocation.
     *
     * @remarks
     * Queries the Supabase instance information of a resource.
     *
     * @param request - AllocateSupabaseForAdminRequest
     * @returns AllocateSupabaseForAdminResponse
     */
    async allocateSupabaseForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.allocateSupabaseForAdminWithOptions(request, runtime);
    }
    /**
     * Grants a role to a user.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - AssignRbacUserRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AssignRbacUserRoleResponse
     */
    async assignRbacUserRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.userRoleData)) {
            query["UserRoleData"] = request.userRoleData;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AssignRbacUserRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AssignRbacUserRoleResponse({}));
    }
    /**
     * Grants a role to a user.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - AssignRbacUserRoleRequest
     * @returns AssignRbacUserRoleResponse
     */
    async assignRbacUserRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.assignRbacUserRoleWithOptions(request, runtime);
    }
    /**
     * Grants proxy-based O&M permissions for an application instance.
     *
     * @param request - AuthorizeAppProxyOpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AuthorizeAppProxyOpsResponse
     */
    async authorizeAppProxyOpsWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AuthorizeAppProxyOps",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AuthorizeAppProxyOpsResponse({}));
    }
    /**
     * Grants proxy-based O&M permissions for an application instance.
     *
     * @param request - AuthorizeAppProxyOpsRequest
     * @returns AuthorizeAppProxyOpsResponse
     */
    async authorizeAppProxyOps(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.authorizeAppProxyOpsWithOptions(request, runtime);
    }
    /**
     * Checks resource usage in batches.
     *
     * @remarks
     * Manages the Supabase instance information associated with the resources.
     *
     * @param request - BatchCheckResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchCheckResourceMeasureResponse
     */
    async batchCheckResourceMeasureWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.belongIdType)) {
            query["BelongIdType"] = request.belongIdType;
        }
        if (!$dara.isNull(request.bizType)) {
            query["BizType"] = request.bizType;
        }
        if (!$dara.isNull(request.espBizId)) {
            query["EspBizId"] = request.espBizId;
        }
        if (!$dara.isNull(request.orderComponentParams)) {
            query["OrderComponentParams"] = request.orderComponentParams;
        }
        if (!$dara.isNull(request.resourceCheckItems)) {
            query["ResourceCheckItems"] = request.resourceCheckItems;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "BatchCheckResourceMeasure",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.BatchCheckResourceMeasureResponse({}));
    }
    /**
     * Checks resource usage in batches.
     *
     * @remarks
     * Manages the Supabase instance information associated with the resources.
     *
     * @param request - BatchCheckResourceMeasureRequest
     * @returns BatchCheckResourceMeasureResponse
     */
    async batchCheckResourceMeasure(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.batchCheckResourceMeasureWithOptions(request, runtime);
    }
    /**
     * Binds a custom domain name to an application and automatically completes DNS resolution verification.
     *
     * @param request - BindAppDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BindAppDomainResponse
     */
    async bindAppDomainWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.deployType)) {
            query["DeployType"] = request.deployType;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!$dara.isNull(request.domainType)) {
            query["DomainType"] = request.domainType;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.operateType)) {
            query["OperateType"] = request.operateType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "BindAppDomain",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.BindAppDomainResponse({}));
    }
    /**
     * Binds a custom domain name to an application and automatically completes DNS resolution verification.
     *
     * @param request - BindAppDomainRequest
     * @returns BindAppDomainResponse
     */
    async bindAppDomain(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.bindAppDomainWithOptions(request, runtime);
    }
    /**
     * Verifies a verification code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CheckAppVerifyCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckAppVerifyCodeResponse
     */
    async checkAppVerifyCodeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.code)) {
            query["Code"] = request.code;
        }
        if (!$dara.isNull(request.target)) {
            query["Target"] = request.target;
        }
        if (!$dara.isNull(request.type)) {
            query["Type"] = request.type;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CheckAppVerifyCode",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CheckAppVerifyCodeResponse({}));
    }
    /**
     * Verifies a verification code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CheckAppVerifyCodeRequest
     * @returns CheckAppVerifyCodeResponse
     */
    async checkAppVerifyCode(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.checkAppVerifyCodeWithOptions(request, runtime);
    }
    /**
     * Checks resource usage.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckResourceMeasureResponse
     */
    async checkResourceMeasureWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.belongIdType)) {
            query["BelongIdType"] = request.belongIdType;
        }
        if (!$dara.isNull(request.bizType)) {
            query["BizType"] = request.bizType;
        }
        if (!$dara.isNull(request.desiredTotal)) {
            query["DesiredTotal"] = request.desiredTotal;
        }
        if (!$dara.isNull(request.espBizId)) {
            query["EspBizId"] = request.espBizId;
        }
        if (!$dara.isNull(request.orderComponentParams)) {
            query["OrderComponentParams"] = request.orderComponentParams;
        }
        if (!$dara.isNull(request.resourceCode)) {
            query["ResourceCode"] = request.resourceCode;
        }
        if (!$dara.isNull(request.resourceValue)) {
            query["ResourceValue"] = request.resourceValue;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CheckResourceMeasure",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CheckResourceMeasureResponse({}));
    }
    /**
     * Checks resource usage.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckResourceMeasureRequest
     * @returns CheckResourceMeasureResponse
     */
    async checkResourceMeasure(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.checkResourceMeasureWithOptions(request, runtime);
    }
    /**
     * Validates user resource metering.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckUserResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CheckUserResourceMeasureResponse
     */
    async checkUserResourceMeasureWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.belongIdType)) {
            query["BelongIdType"] = request.belongIdType;
        }
        if (!$dara.isNull(request.bizType)) {
            query["BizType"] = request.bizType;
        }
        if (!$dara.isNull(request.desiredTotal)) {
            query["DesiredTotal"] = request.desiredTotal;
        }
        if (!$dara.isNull(request.espBizId)) {
            query["EspBizId"] = request.espBizId;
        }
        if (!$dara.isNull(request.orderComponentParams)) {
            query["OrderComponentParams"] = request.orderComponentParams;
        }
        if (!$dara.isNull(request.resourceCode)) {
            query["ResourceCode"] = request.resourceCode;
        }
        if (!$dara.isNull(request.resourceValue)) {
            query["ResourceValue"] = request.resourceValue;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CheckUserResourceMeasure",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CheckUserResourceMeasureResponse({}));
    }
    /**
     * Validates user resource metering.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - CheckUserResourceMeasureRequest
     * @returns CheckUserResourceMeasureResponse
     */
    async checkUserResourceMeasure(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.checkUserResourceMeasureWithOptions(request, runtime);
    }
    /**
     * Converts a trial instance to a paid instance.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ConfirmAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ConfirmAppInstanceResponse
     */
    async confirmAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.applicationType)) {
            query["ApplicationType"] = request.applicationType;
        }
        if (!$dara.isNull(request.autoRenew)) {
            query["AutoRenew"] = request.autoRenew;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.deployArea)) {
            query["DeployArea"] = request.deployArea;
        }
        if (!$dara.isNull(request.duration)) {
            query["Duration"] = request.duration;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.pricingCycle)) {
            query["PricingCycle"] = request.pricingCycle;
        }
        if (!$dara.isNull(request.quantity)) {
            query["Quantity"] = request.quantity;
        }
        if (!$dara.isNull(request.siteVersion)) {
            query["SiteVersion"] = request.siteVersion;
        }
        if (!$dara.isNull(request.trialBizId)) {
            query["TrialBizId"] = request.trialBizId;
        }
        if (!$dara.isNull(request.version)) {
            query["Version"] = request.version;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ConfirmAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ConfirmAppInstanceResponse({}));
    }
    /**
     * Converts a trial instance to a paid instance.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ConfirmAppInstanceRequest
     * @returns ConfirmAppInstanceResponse
     */
    async confirmAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.confirmAppInstanceWithOptions(request, runtime);
    }
    /**
     * Copies the plug-in configuration.
     *
     * @remarks
     * Retrieves the code generation plug-in configuration information.
     *
     * @param request - CopyAppPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CopyAppPluginConfigResponse
     */
    async copyAppPluginConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.sourceBizId)) {
            query["SourceBizId"] = request.sourceBizId;
        }
        if (!$dara.isNull(request.targetBizId)) {
            query["TargetBizId"] = request.targetBizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CopyAppPluginConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CopyAppPluginConfigResponse({}));
    }
    /**
     * Copies the plug-in configuration.
     *
     * @remarks
     * Retrieves the code generation plug-in configuration information.
     *
     * @param request - CopyAppPluginConfigRequest
     * @returns CopyAppPluginConfigResponse
     */
    async copyAppPluginConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.copyAppPluginConfigWithOptions(request, runtime);
    }
    /**
     * Asynchronously initiates a conversation with an AI employee.
     *
     * @remarks
     * Initiates a WanXiaoZhi 2.0 AI conversation.
     *
     * @param request - CreateAIStaffChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIStaffChatResponse
     */
    async createAIStaffChatWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.bizId)) {
            body["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.chatId)) {
            body["ChatId"] = request.chatId;
        }
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.messages)) {
            body["Messages"] = request.messages;
        }
        let bodyFlat = {};
        if (!$dara.isNull(request.metaData)) {
            bodyFlat["MetaData"] = request.metaData;
        }
        body = Object.assign(Object.assign({}, body), openapi_core_2.OpenApiUtil.query(bodyFlat));
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAIStaffChat",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAIStaffChatResponse({}));
    }
    /**
     * Asynchronously initiates a conversation with an AI employee.
     *
     * @remarks
     * Initiates a WanXiaoZhi 2.0 AI conversation.
     *
     * @param request - CreateAIStaffChatRequest
     * @returns CreateAIStaffChatResponse
     */
    async createAIStaffChat(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAIStaffChatWithOptions(request, runtime);
    }
    /**
     * Creates an AI employee session.
     *
     * @remarks
     * Creates an AI session for Wan Xiaozhi 2.0.
     *
     * @param request - CreateAIStaffConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAIStaffConversationResponse
     */
    async createAIStaffConversationWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.text)) {
            body["Text"] = request.text;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAIStaffConversation",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAIStaffConversationResponse({}));
    }
    /**
     * Creates an AI employee session.
     *
     * @remarks
     * Creates an AI session for Wan Xiaozhi 2.0.
     *
     * @param request - CreateAIStaffConversationRequest
     * @returns CreateAIStaffConversationResponse
     */
    async createAIStaffConversation(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAIStaffConversationWithOptions(request, runtime);
    }
    /**
     * Creates an application assistant agent.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppAssistantAgentResponse
     */
    async createAppAssistantAgentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentName)) {
            query["AgentName"] = request.agentName;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.platformType)) {
            query["PlatformType"] = request.platformType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppAssistantAgent",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppAssistantAgentResponse({}));
    }
    /**
     * Creates an application assistant agent.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentRequest
     * @returns CreateAppAssistantAgentResponse
     */
    async createAppAssistantAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppAssistantAgentWithOptions(request, runtime);
    }
    /**
     * Generates an SSO logon-free URL for the application assistant.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentSsoLoginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppAssistantAgentSsoLoginResponse
     */
    async createAppAssistantAgentSsoLoginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.platformType)) {
            query["PlatformType"] = request.platformType;
        }
        if (!$dara.isNull(request.targetUrl)) {
            query["TargetUrl"] = request.targetUrl;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppAssistantAgentSsoLogin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppAssistantAgentSsoLoginResponse({}));
    }
    /**
     * Generates an SSO logon-free URL for the application assistant.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppAssistantAgentSsoLoginRequest
     * @returns CreateAppAssistantAgentSsoLoginResponse
     */
    async createAppAssistantAgentSsoLogin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppAssistantAgentSsoLoginWithOptions(request, runtime);
    }
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppChatResponse
     */
    createAppChatWithSSE(request, runtime) {
        return __asyncGenerator(this, arguments, function* createAppChatWithSSE_1() {
            var _a, e_1, _b, _c;
            request.validate();
            let body = {};
            if (!$dara.isNull(request.botId)) {
                body["BotId"] = request.botId;
            }
            if (!$dara.isNull(request.chatId)) {
                body["ChatId"] = request.chatId;
            }
            if (!$dara.isNull(request.conversationId)) {
                body["ConversationId"] = request.conversationId;
            }
            if (!$dara.isNull(request.messages)) {
                body["Messages"] = request.messages;
            }
            if (!$dara.isNull(request.siteId)) {
                body["SiteId"] = request.siteId;
            }
            let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
                body: openapi_core_2.OpenApiUtil.parseToMap(body),
            });
            let params = new openapi_core_2.$OpenApiUtil.Params({
                action: "CreateAppChat",
                version: "2025-04-29",
                protocol: "HTTPS",
                pathname: "/",
                method: "POST",
                authType: "AK",
                style: "RPC",
                reqBodyType: "formData",
                bodyType: "string",
            });
            let sseResp = yield __await(this.callSSEApi(params, req, runtime));
            try {
                for (var _d = true, sseResp_1 = __asyncValues(sseResp), sseResp_1_1; sseResp_1_1 = yield __await(sseResp_1.next()), _a = sseResp_1_1.done, !_a; _d = true) {
                    _c = sseResp_1_1.value;
                    _d = false;
                    let resp = _c;
                    if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
                        let data = resp.event.data;
                        yield yield __await($dara.cast({
                            statusCode: resp.statusCode,
                            headers: resp.headers,
                            id: resp.event.id,
                            event: resp.event.event,
                            body: data,
                        }, new $_model.CreateAppChatResponse({})));
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = sseResp_1.return)) yield __await(_b.call(sseResp_1));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppChatResponse
     */
    async createAppChatWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.botId)) {
            body["BotId"] = request.botId;
        }
        if (!$dara.isNull(request.chatId)) {
            body["ChatId"] = request.chatId;
        }
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.messages)) {
            body["Messages"] = request.messages;
        }
        if (!$dara.isNull(request.siteId)) {
            body["SiteId"] = request.siteId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppChat",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "string",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppChatResponse({}));
    }
    /**
     * Initiates an AI conversation with WanXiaoZhi.
     *
     * @param request - CreateAppChatRequest
     * @returns CreateAppChatResponse
     */
    async createAppChat(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppChatWithOptions(request, runtime);
    }
    /**
     * Creates a website builder application instance.
     *
     * @param tmpReq - CreateAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppInstanceResponse
     */
    async createAppInstanceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAppInstanceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.tags)) {
            request.tagsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
        }
        let query = {};
        if (!$dara.isNull(request.applicationType)) {
            query["ApplicationType"] = request.applicationType;
        }
        if (!$dara.isNull(request.autoRenew)) {
            query["AutoRenew"] = request.autoRenew;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.createAction)) {
            query["CreateAction"] = request.createAction;
        }
        if (!$dara.isNull(request.deployArea)) {
            query["DeployArea"] = request.deployArea;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.duration)) {
            query["Duration"] = request.duration;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.pricingCycle)) {
            query["PricingCycle"] = request.pricingCycle;
        }
        if (!$dara.isNull(request.quantity)) {
            query["Quantity"] = request.quantity;
        }
        if (!$dara.isNull(request.siteVersion)) {
            query["SiteVersion"] = request.siteVersion;
        }
        if (!$dara.isNull(request.version)) {
            query["Version"] = request.version;
        }
        let body = {};
        if (!$dara.isNull(request.resourceGroupId)) {
            body["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!$dara.isNull(request.tagsShrink)) {
            body["Tags"] = request.tagsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceResponse({}));
    }
    /**
     * Creates a website builder application instance.
     *
     * @param request - CreateAppInstanceRequest
     * @returns CreateAppInstanceResponse
     */
    async createAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppInstanceWithOptions(request, runtime);
    }
    /**
     * Creates a logon-free ticket.
     *
     * @param request - CreateAppInstanceTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppInstanceTicketResponse
     */
    async createAppInstanceTicketWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientId)) {
            query["ClientId"] = request.clientId;
        }
        if (!$dara.isNull(request.role)) {
            query["Role"] = request.role;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppInstanceTicket",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceTicketResponse({}));
    }
    /**
     * Creates a logon-free ticket.
     *
     * @param request - CreateAppInstanceTicketRequest
     * @returns CreateAppInstanceTicketResponse
     */
    async createAppInstanceTicket(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppInstanceTicketWithOptions(request, runtime);
    }
    /**
     * Creates an LLM gateway API key for an application instance.
     *
     * @remarks
     * Retrieves the code generation plugin configuration information.
     *
     * @param request - CreateAppLlmApiKeyForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppLlmApiKeyForPartnerResponse
     */
    async createAppLlmApiKeyForPartnerWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.bizId)) {
            body["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientToken)) {
            body["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.description)) {
            body["Description"] = request.description;
        }
        if (!$dara.isNull(request.ipWhiteList)) {
            body["IpWhiteList"] = request.ipWhiteList;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppLlmApiKeyForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppLlmApiKeyForPartnerResponse({}));
    }
    /**
     * Creates an LLM gateway API key for an application instance.
     *
     * @remarks
     * Retrieves the code generation plugin configuration information.
     *
     * @param request - CreateAppLlmApiKeyForPartnerRequest
     * @returns CreateAppLlmApiKeyForPartnerResponse
     */
    async createAppLlmApiKeyForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppLlmApiKeyForPartnerWithOptions(request, runtime);
    }
    /**
     * Creates a message notification scenario.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppNotificationSceneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppNotificationSceneResponse
     */
    async createAppNotificationSceneWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.butlerChannelTypesJson)) {
            query["ButlerChannelTypesJson"] = request.butlerChannelTypesJson;
        }
        if (!$dara.isNull(request.butlerFieldsJson)) {
            query["ButlerFieldsJson"] = request.butlerFieldsJson;
        }
        if (!$dara.isNull(request.channelsJson)) {
            query["ChannelsJson"] = request.channelsJson;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.emailFieldsJson)) {
            query["EmailFieldsJson"] = request.emailFieldsJson;
        }
        if (!$dara.isNull(request.emailLimitJson)) {
            query["EmailLimitJson"] = request.emailLimitJson;
        }
        if (!$dara.isNull(request.emailRecipientIdsJson)) {
            query["EmailRecipientIdsJson"] = request.emailRecipientIdsJson;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.phoneRecipientIdsJson)) {
            query["PhoneRecipientIdsJson"] = request.phoneRecipientIdsJson;
        }
        if (!$dara.isNull(request.smsFieldsJson)) {
            query["SmsFieldsJson"] = request.smsFieldsJson;
        }
        if (!$dara.isNull(request.smsLimitJson)) {
            query["SmsLimitJson"] = request.smsLimitJson;
        }
        if (!$dara.isNull(request.tableName)) {
            query["TableName"] = request.tableName;
        }
        if (!$dara.isNull(request.triggerEventsJson)) {
            query["TriggerEventsJson"] = request.triggerEventsJson;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppNotificationScene",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppNotificationSceneResponse({}));
    }
    /**
     * Creates a message notification scenario.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppNotificationSceneRequest
     * @returns CreateAppNotificationSceneResponse
     */
    async createAppNotificationScene(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppNotificationSceneWithOptions(request, runtime);
    }
    /**
     * Creates an application plug-in.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppPluginResponse
     */
    async createAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.category)) {
            query["Category"] = request.category;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.downloadUrl)) {
            query["DownloadUrl"] = request.downloadUrl;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.icon)) {
            query["Icon"] = request.icon;
        }
        if (!$dara.isNull(request.ossKey)) {
            query["OssKey"] = request.ossKey;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginName)) {
            query["PluginName"] = request.pluginName;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        if (!$dara.isNull(request.tags)) {
            query["Tags"] = request.tags;
        }
        if (!$dara.isNull(request.visibility)) {
            query["Visibility"] = request.visibility;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppPluginResponse({}));
    }
    /**
     * Creates an application plug-in.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - CreateAppPluginRequest
     * @returns CreateAppPluginResponse
     */
    async createAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppPluginWithOptions(request, runtime);
    }
    /**
     * Activates the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppTokenServiceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppTokenServiceResponse
     */
    async createAppTokenServiceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.createAction)) {
            query["CreateAction"] = request.createAction;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppTokenService",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAppTokenServiceResponse({}));
    }
    /**
     * Activates the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - CreateAppTokenServiceRequest
     * @returns CreateAppTokenServiceResponse
     */
    async createAppTokenService(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppTokenServiceWithOptions(request, runtime);
    }
    /**
     * Distributes and generates channel drafts.
     *
     * @remarks
     * Distributes and generates channel drafts.
     *
     * @param tmpReq - CreateDistributionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateDistributionResponse
     */
    async createDistributionWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateDistributionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.channels)) {
            request.channelsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channels, "Channels", "json");
        }
        let query = {};
        if (!$dara.isNull(request.articleId)) {
            query["ArticleId"] = request.articleId;
        }
        if (!$dara.isNull(request.channelsShrink)) {
            query["Channels"] = request.channelsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateDistribution",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateDistributionResponse({}));
    }
    /**
     * Distributes and generates channel drafts.
     *
     * @remarks
     * Distributes and generates channel drafts.
     *
     * @param request - CreateDistributionRequest
     * @returns CreateDistributionResponse
     */
    async createDistribution(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createDistributionWithOptions(request, runtime);
    }
    /**
     * Creates a resource plan.
     *
     * @param request - CreateInspirationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateInspirationResponse
     */
    async createInspirationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.amountspec)) {
            query["Amountspec"] = request.amountspec;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.duration)) {
            query["Duration"] = request.duration;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.pricingCycle)) {
            query["PricingCycle"] = request.pricingCycle;
        }
        if (!$dara.isNull(request.quantity)) {
            query["Quantity"] = request.quantity;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateInspiration",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateInspirationResponse({}));
    }
    /**
     * Creates a resource plan.
     *
     * @param request - CreateInspirationRequest
     * @returns CreateInspirationResponse
     */
    async createInspiration(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createInspirationWithOptions(request, runtime);
    }
    /**
     * Submits a logo generation task.
     *
     * @param request - CreateLogoTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateLogoTaskResponse
     */
    async createLogoTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.logoVersion)) {
            query["LogoVersion"] = request.logoVersion;
        }
        if (!$dara.isNull(request.negativePrompt)) {
            query["NegativePrompt"] = request.negativePrompt;
        }
        if (!$dara.isNull(request.parameters)) {
            query["Parameters"] = request.parameters;
        }
        if (!$dara.isNull(request.prompt)) {
            query["Prompt"] = request.prompt;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateLogoTask",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateLogoTaskResponse({}));
    }
    /**
     * Submits a logo generation task.
     *
     * @param request - CreateLogoTaskRequest
     * @returns CreateLogoTaskResponse
     */
    async createLogoTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createLogoTaskWithOptions(request, runtime);
    }
    /**
     * Creates a subfolder in a parent folder.
     *
     * @param request - CreateMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMaterialDirectoryResponse
     */
    async createMaterialDirectoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.parentDirectoryId)) {
            query["ParentDirectoryId"] = request.parentDirectoryId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateMaterialDirectory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateMaterialDirectoryResponse({}));
    }
    /**
     * Creates a subfolder in a parent folder.
     *
     * @param request - CreateMaterialDirectoryRequest
     * @returns CreateMaterialDirectoryResponse
     */
    async createMaterialDirectory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createMaterialDirectoryWithOptions(request, runtime);
    }
    /**
     * Creates an organizational unit.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacOrgUnitResponse
     */
    async createRbacOrgUnitWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.orgUnitData)) {
            query["OrgUnitData"] = request.orgUnitData;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateRbacOrgUnit",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateRbacOrgUnitResponse({}));
    }
    /**
     * Creates an organizational unit.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacOrgUnitRequest
     * @returns CreateRbacOrgUnitResponse
     */
    async createRbacOrgUnit(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createRbacOrgUnitWithOptions(request, runtime);
    }
    /**
     * Creates RBAC permissions.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating an AI session.
     *
     * @param request - CreateRbacPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacPermissionResponse
     */
    async createRbacPermissionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.permissionData)) {
            query["PermissionData"] = request.permissionData;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateRbacPermission",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateRbacPermissionResponse({}));
    }
    /**
     * Creates RBAC permissions.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating an AI session.
     *
     * @param request - CreateRbacPermissionRequest
     * @returns CreateRbacPermissionResponse
     */
    async createRbacPermission(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createRbacPermissionWithOptions(request, runtime);
    }
    /**
     * Creates an RBAC role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateRbacRoleResponse
     */
    async createRbacRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.roleData)) {
            query["RoleData"] = request.roleData;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateRbacRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateRbacRoleResponse({}));
    }
    /**
     * Creates an RBAC role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - CreateRbacRoleRequest
     * @returns CreateRbacRoleResponse
     */
    async createRbacRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createRbacRoleWithOptions(request, runtime);
    }
    /**
     * Deletes and unbinds the SSL certificate associated with a website.
     *
     * @param request - DeleteAppDomainCertificateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppDomainCertificateResponse
     */
    async deleteAppDomainCertificateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppDomainCertificate",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainCertificateResponse({}));
    }
    /**
     * Deletes and unbinds the SSL certificate associated with a website.
     *
     * @param request - DeleteAppDomainCertificateRequest
     * @returns DeleteAppDomainCertificateResponse
     */
    async deleteAppDomainCertificate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppDomainCertificateWithOptions(request, runtime);
    }
    /**
     * Deletes an HTTP 301 status code redirect record bound to a website.
     *
     * @param request - DeleteAppDomainRedirectRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppDomainRedirectResponse
     */
    async deleteAppDomainRedirectWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!$dara.isNull(request.recordId)) {
            query["RecordId"] = request.recordId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppDomainRedirect",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppDomainRedirectResponse({}));
    }
    /**
     * Deletes an HTTP 301 status code redirect record bound to a website.
     *
     * @param request - DeleteAppDomainRedirectRequest
     * @returns DeleteAppDomainRedirectResponse
     */
    async deleteAppDomainRedirect(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppDomainRedirectWithOptions(request, runtime);
    }
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppFileResponse
     */
    async deleteAppFileWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.filePath)) {
            body["FilePath"] = request.filePath;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppFileResponse({}));
    }
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppFileRequest
     * @returns DeleteAppFileResponse
     */
    async deleteAppFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppFileWithOptions(request, runtime);
    }
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppInstanceFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppInstanceFileResponse
     */
    async deleteAppInstanceFileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.filePath)) {
            query["FilePath"] = request.filePath;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppInstanceFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceFileResponse({}));
    }
    /**
     * Deletes a file.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppInstanceFileRequest
     * @returns DeleteAppInstanceFileResponse
     */
    async deleteAppInstanceFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppInstanceFileWithOptions(request, runtime);
    }
    /**
     * Deletes a message notification scenario.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppNotificationSceneRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppNotificationSceneResponse
     */
    async deleteAppNotificationSceneWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.sceneId)) {
            query["SceneId"] = request.sceneId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppNotificationScene",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppNotificationSceneResponse({}));
    }
    /**
     * Deletes a message notification scenario.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppNotificationSceneRequest
     * @returns DeleteAppNotificationSceneResponse
     */
    async deleteAppNotificationScene(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppNotificationSceneWithOptions(request, runtime);
    }
    /**
     * Deletes an application plugin.
     *
     * @param request - DeleteAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppPluginResponse
     */
    async deleteAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppPluginResponse({}));
    }
    /**
     * Deletes an application plugin.
     *
     * @param request - DeleteAppPluginRequest
     * @returns DeleteAppPluginResponse
     */
    async deleteAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppPluginWithOptions(request, runtime);
    }
    /**
     * Deletes a scenario recipient.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppSceneRecipientRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSceneRecipientResponse
     */
    async deleteAppSceneRecipientWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.recipientId)) {
            query["RecipientId"] = request.recipientId;
        }
        if (!$dara.isNull(request.sceneId)) {
            query["SceneId"] = request.sceneId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppSceneRecipient",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppSceneRecipientResponse({}));
    }
    /**
     * Deletes a scenario recipient.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteAppSceneRecipientRequest
     * @returns DeleteAppSceneRecipientResponse
     */
    async deleteAppSceneRecipient(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppSceneRecipientWithOptions(request, runtime);
    }
    /**
     * Deletes a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - DeleteAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppSupabaseSecretsResponse
     */
    async deleteAppSupabaseSecretsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.keysJson)) {
            query["KeysJson"] = request.keysJson;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppSupabaseSecrets",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppSupabaseSecretsResponse({}));
    }
    /**
     * Deletes a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - DeleteAppSupabaseSecretsRequest
     * @returns DeleteAppSupabaseSecretsResponse
     */
    async deleteAppSupabaseSecrets(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppSupabaseSecretsWithOptions(request, runtime);
    }
    /**
     * Deletes a material folder.
     *
     * @param request - DeleteMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaterialDirectoryResponse
     */
    async deleteMaterialDirectoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteMaterialDirectory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteMaterialDirectoryResponse({}));
    }
    /**
     * Deletes a material folder.
     *
     * @param request - DeleteMaterialDirectoryRequest
     * @returns DeleteMaterialDirectoryResponse
     */
    async deleteMaterialDirectory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteMaterialDirectoryWithOptions(request, runtime);
    }
    /**
     * Deletes a material generation task.
     *
     * @param tmpReq - DeleteMaterialTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMaterialTaskResponse
     */
    async deleteMaterialTaskWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.DeleteMaterialTaskShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.taskIds)) {
            request.taskIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
        }
        let query = {};
        if (!$dara.isNull(request.taskIdsShrink)) {
            query["TaskIds"] = request.taskIdsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteMaterialTask",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteMaterialTaskResponse({}));
    }
    /**
     * Deletes a material generation task.
     *
     * @param request - DeleteMaterialTaskRequest
     * @returns DeleteMaterialTaskResponse
     */
    async deleteMaterialTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteMaterialTaskWithOptions(request, runtime);
    }
    /**
     * Deletes an organizational unit.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacOrgUnitResponse
     */
    async deleteRbacOrgUnitWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.orgUnitId)) {
            query["OrgUnitId"] = request.orgUnitId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteRbacOrgUnit",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteRbacOrgUnitResponse({}));
    }
    /**
     * Deletes an organizational unit.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - DeleteRbacOrgUnitRequest
     * @returns DeleteRbacOrgUnitResponse
     */
    async deleteRbacOrgUnit(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteRbacOrgUnitWithOptions(request, runtime);
    }
    /**
     * Deletes RBAC permissions.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - DeleteRbacPermissionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacPermissionResponse
     */
    async deleteRbacPermissionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.permissionId)) {
            query["PermissionId"] = request.permissionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteRbacPermission",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteRbacPermissionResponse({}));
    }
    /**
     * Deletes RBAC permissions.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - DeleteRbacPermissionRequest
     * @returns DeleteRbacPermissionResponse
     */
    async deleteRbacPermission(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteRbacPermissionWithOptions(request, runtime);
    }
    /**
     * Deletes an RBAC role.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - DeleteRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteRbacRoleResponse
     */
    async deleteRbacRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.roleId)) {
            query["RoleId"] = request.roleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteRbacRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteRbacRoleResponse({}));
    }
    /**
     * Deletes an RBAC role.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - DeleteRbacRoleRequest
     * @returns DeleteRbacRoleResponse
     */
    async deleteRbacRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteRbacRoleWithOptions(request, runtime);
    }
    /**
     * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
     *
     * @param request - DescribeAppDomainDnsRecordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAppDomainDnsRecordResponse
     */
    async describeAppDomainDnsRecordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!$dara.isNull(request.purpose)) {
            query["Purpose"] = request.purpose;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeAppDomainDnsRecord",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeAppDomainDnsRecordResponse({}));
    }
    /**
     * Query website DNS resolution records. Supports CNAME resolution and verification resolution queries.
     *
     * @param request - DescribeAppDomainDnsRecordRequest
     * @returns DescribeAppDomainDnsRecordResponse
     */
    async describeAppDomainDnsRecord(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeAppDomainDnsRecordWithOptions(request, runtime);
    }
    /**
     * Calls a general API operation.
     *
     * @param request - DispatchConsoleAPIForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DispatchConsoleAPIForPartnerResponse
     */
    async dispatchConsoleAPIForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.liveToken)) {
            query["LiveToken"] = request.liveToken;
        }
        if (!$dara.isNull(request.operation)) {
            query["Operation"] = request.operation;
        }
        if (!$dara.isNull(request.params)) {
            query["Params"] = request.params;
        }
        if (!$dara.isNull(request.product)) {
            query["Product"] = request.product;
        }
        if (!$dara.isNull(request.siteHost)) {
            query["SiteHost"] = request.siteHost;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DispatchConsoleAPIForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DispatchConsoleAPIForPartnerResponse({}));
    }
    /**
     * Calls a general API operation.
     *
     * @param request - DispatchConsoleAPIForPartnerRequest
     * @returns DispatchConsoleAPIForPartnerResponse
     */
    async dispatchConsoleAPIForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.dispatchConsoleAPIForPartnerWithOptions(request, runtime);
    }
    /**
     * Edits a plug-in configuration.
     *
     * @param request - EditPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EditPluginConfigResponse
     */
    async editPluginConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.pluginConfig)) {
            query["PluginConfig"] = request.pluginConfig;
        }
        if (!$dara.isNull(request.pluginDesc)) {
            query["PluginDesc"] = request.pluginDesc;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginName)) {
            query["PluginName"] = request.pluginName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "EditPluginConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.EditPluginConfigResponse({}));
    }
    /**
     * Edits a plug-in configuration.
     *
     * @param request - EditPluginConfigRequest
     * @returns EditPluginConfigResponse
     */
    async editPluginConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.editPluginConfigWithOptions(request, runtime);
    }
    /**
     * Exports material files.
     *
     * @param tmpReq - ExportMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ExportMaterialFileResponse
     */
    async exportMaterialFileWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ExportMaterialFileShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.fileIds)) {
            request.fileIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.fileIdsShrink)) {
            query["FileIds"] = request.fileIdsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ExportMaterialFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ExportMaterialFileResponse({}));
    }
    /**
     * Exports material files.
     *
     * @param request - ExportMaterialFileRequest
     * @returns ExportMaterialFileResponse
     */
    async exportMaterialFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.exportMaterialFileWithOptions(request, runtime);
    }
    /**
     * Exports the RBAC configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration for a resource.
     *
     * @param request - ExportRbacConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ExportRbacConfigResponse
     */
    async exportRbacConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ExportRbacConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ExportRbacConfigResponse({}));
    }
    /**
     * Exports the RBAC configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration for a resource.
     *
     * @param request - ExportRbacConfigRequest
     * @returns ExportRbacConfigResponse
     */
    async exportRbacConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.exportRbacConfigWithOptions(request, runtime);
    }
    /**
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @remarks
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @param request - GetAIStaffPreviewUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAIStaffPreviewUrlResponse
     */
    async getAIStaffPreviewUrlWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.restart)) {
            body["Restart"] = request.restart;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAIStaffPreviewUrl",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAIStaffPreviewUrlResponse({}));
    }
    /**
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @remarks
     * Retrieves the site preview URL for WanXiaoZhi 2.0.
     *
     * @param request - GetAIStaffPreviewUrlRequest
     * @returns GetAIStaffPreviewUrlResponse
     */
    async getAIStaffPreviewUrl(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAIStaffPreviewUrlWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a code workspace.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppCodeWorkspaceDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppCodeWorkspaceDetailResponse
     */
    async getAppCodeWorkspaceDetailWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.siteId)) {
            query["SiteId"] = request.siteId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppCodeWorkspaceDetail",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppCodeWorkspaceDetailResponse({}));
    }
    /**
     * Retrieves the details of a code workspace.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppCodeWorkspaceDetailRequest
     * @returns GetAppCodeWorkspaceDetailResponse
     */
    async getAppCodeWorkspaceDetail(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppCodeWorkspaceDetailWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a conversation.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating AI conversations.
     *
     * @param request - GetAppConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppConversationResponse
     */
    async getAppConversationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.botId)) {
            query["BotId"] = request.botId;
        }
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppConversation",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppConversationResponse({}));
    }
    /**
     * Retrieves the details of a conversation.
     *
     * @remarks
     * The Wanxiaozhi 2.0 API operation for creating AI conversations.
     *
     * @param request - GetAppConversationRequest
     * @returns GetAppConversationResponse
     */
    async getAppConversation(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppConversationWithOptions(request, runtime);
    }
    /**
     * Retrieves the lock status of a session.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - GetAppConversationLockStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppConversationLockStatusResponse
     */
    async getAppConversationLockStatusWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppConversationLockStatus",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppConversationLockStatusResponse({}));
    }
    /**
     * Retrieves the lock status of a session.
     *
     * @remarks
     * The API operation for creating an AI session in Wanxiaozhi 2.0.
     *
     * @param request - GetAppConversationLockStatusRequest
     * @returns GetAppConversationLockStatusResponse
     */
    async getAppConversationLockStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppConversationLockStatusWithOptions(request, runtime);
    }
    /**
     * Queries the table schema of a database.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppDatabaseTableSchemasRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppDatabaseTableSchemasResponse
     */
    async getAppDatabaseTableSchemasWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.tableName)) {
            query["TableName"] = request.tableName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppDatabaseTableSchemas",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppDatabaseTableSchemasResponse({}));
    }
    /**
     * Queries the table schema of a database.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppDatabaseTableSchemasRequest
     * @returns GetAppDatabaseTableSchemasResponse
     */
    async getAppDatabaseTableSchemas(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppDatabaseTableSchemasWithOptions(request, runtime);
    }
    /**
     * Retrieves a file and its modification time.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppFileContentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppFileContentResponse
     */
    async getAppFileContentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.filePath)) {
            query["FilePath"] = request.filePath;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppFileContent",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppFileContentResponse({}));
    }
    /**
     * Retrieves a file and its modification time.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppFileContentRequest
     * @returns GetAppFileContentResponse
     */
    async getAppFileContent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppFileContentWithOptions(request, runtime);
    }
    /**
     * Queries the details of a website builder application instance.
     *
     * @remarks
     * Queries the details of a website builder application instance.
     *
     * @param request - GetAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceResponse
     */
    async getAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppInstanceResponse({}));
    }
    /**
     * Queries the details of a website builder application instance.
     *
     * @remarks
     * Queries the details of a website builder application instance.
     *
     * @param request - GetAppInstanceRequest
     * @returns GetAppInstanceResponse
     */
    async getAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppInstanceWithOptions(request, runtime);
    }
    /**
     * Queries the entitlement information of an application instance.
     *
     * @remarks
     * Queries the entitlement information of an application instance.
     *
     * @param request - GetAppInstanceEntitlementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceEntitlementResponse
     */
    async getAppInstanceEntitlementWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppInstanceEntitlement",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppInstanceEntitlementResponse({}));
    }
    /**
     * Queries the entitlement information of an application instance.
     *
     * @remarks
     * Queries the entitlement information of an application instance.
     *
     * @param request - GetAppInstanceEntitlementRequest
     * @returns GetAppInstanceEntitlementResponse
     */
    async getAppInstanceEntitlement(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppInstanceEntitlementWithOptions(request, runtime);
    }
    /**
     * Queries application instance information.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppInstanceForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceForAdminResponse
     */
    async getAppInstanceForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppInstanceForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppInstanceForAdminResponse({}));
    }
    /**
     * Queries application instance information.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - GetAppInstanceForAdminRequest
     * @returns GetAppInstanceForAdminResponse
     */
    async getAppInstanceForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppInstanceForAdminWithOptions(request, runtime);
    }
    /**
     * Queries the details of an instance.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceForPartnerResponse
     */
    async getAppInstanceForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppInstanceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppInstanceForPartnerResponse({}));
    }
    /**
     * Queries the details of an instance.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppInstanceForPartnerRequest
     * @returns GetAppInstanceForPartnerResponse
     */
    async getAppInstanceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppInstanceForPartnerWithOptions(request, runtime);
    }
    /**
     * Retrieves the temporary short link for an application.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppInstanceTempShortUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppInstanceTempShortUrlResponse
     */
    async getAppInstanceTempShortUrlWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.bizId)) {
            body["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppInstanceTempShortUrl",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppInstanceTempShortUrlResponse({}));
    }
    /**
     * Retrieves the temporary short link for an application.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppInstanceTempShortUrlRequest
     * @returns GetAppInstanceTempShortUrlResponse
     */
    async getAppInstanceTempShortUrl(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppInstanceTempShortUrlWithOptions(request, runtime);
    }
    /**
     * Queries the details of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginResponse
     */
    async getAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppPluginResponse({}));
    }
    /**
     * Queries the details of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginRequest
     * @returns GetAppPluginResponse
     */
    async getAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppPluginWithOptions(request, runtime);
    }
    /**
     * Retrieves the configuration information of a plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginConfigResponse
     */
    async getAppPluginConfigWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.bizId)) {
            body["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.pluginId)) {
            body["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppPluginConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppPluginConfigResponse({}));
    }
    /**
     * Retrieves the configuration information of a plugin.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plugin.
     *
     * @param request - GetAppPluginConfigRequest
     * @returns GetAppPluginConfigResponse
     */
    async getAppPluginConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppPluginConfigWithOptions(request, runtime);
    }
    /**
     * Retrieves the plugin configuration of a Wanxiaozhi site for internal services and returns an encrypted configuration string.
     *
     * @remarks
     * ## Request description
     * - The service design of this operation is exclusively for internal platform services to read the plugin configuration of a specific site by using a service identity.
     * - Authentication relies entirely on gateway RAM control and is available only to trusted internal service accounts.
     * - If the specified plugin is not installed on the site or the request parameters are empty, the operation returns a success status with an empty Module. Clients that invoke the operation should treat this as unconfigured.
     * - The returned `PluginConfig` field contains an AES-encrypted JSON character string. Clients that invoke the operation must perform decryption before use.
     * - To invoke in user mode, continue to use the `GetAppPluginConfig` operation instead of this operation.
     * - The `BizId` and `PluginId` parameters are both required in the contract. Passing empty character strings is not blocked by the gateway but causes the backend to return an empty Module. This is a fault-tolerance behavior, and clients that invoke the operation should not rely on it.
     * - This operation supports HTTPS and RPC-style POST requests, with parameters passed through formData.
     *
     * @param request - GetAppPluginConfigForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPluginConfigForAdminResponse
     */
    async getAppPluginConfigForAdminWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.bizId)) {
            body["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.pluginId)) {
            body["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppPluginConfigForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppPluginConfigForAdminResponse({}));
    }
    /**
     * Retrieves the plugin configuration of a Wanxiaozhi site for internal services and returns an encrypted configuration string.
     *
     * @remarks
     * ## Request description
     * - The service design of this operation is exclusively for internal platform services to read the plugin configuration of a specific site by using a service identity.
     * - Authentication relies entirely on gateway RAM control and is available only to trusted internal service accounts.
     * - If the specified plugin is not installed on the site or the request parameters are empty, the operation returns a success status with an empty Module. Clients that invoke the operation should treat this as unconfigured.
     * - The returned `PluginConfig` field contains an AES-encrypted JSON character string. Clients that invoke the operation must perform decryption before use.
     * - To invoke in user mode, continue to use the `GetAppPluginConfig` operation instead of this operation.
     * - The `BizId` and `PluginId` parameters are both required in the contract. Passing empty character strings is not blocked by the gateway but causes the backend to return an empty Module. This is a fault-tolerance behavior, and clients that invoke the operation should not rely on it.
     * - This operation supports HTTPS and RPC-style POST requests, with parameters passed through formData.
     *
     * @param request - GetAppPluginConfigForAdminRequest
     * @returns GetAppPluginConfigForAdminResponse
     */
    async getAppPluginConfigForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppPluginConfigForAdminWithOptions(request, runtime);
    }
    /**
     * Queries the publish status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppPublishStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppPublishStatusResponse
     */
    async getAppPublishStatusWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.deployOrderId)) {
            query["DeployOrderId"] = request.deployOrderId;
        }
        if (!$dara.isNull(request.websiteDomain)) {
            query["WebsiteDomain"] = request.websiteDomain;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppPublishStatus",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppPublishStatusResponse({}));
    }
    /**
     * Queries the publish status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppPublishStatusRequest
     * @returns GetAppPublishStatusResponse
     */
    async getAppPublishStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppPublishStatusWithOptions(request, runtime);
    }
    /**
     * Queries recommended commodities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppRecommendedCommoditiesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppRecommendedCommoditiesResponse
     */
    async getAppRecommendedCommoditiesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.resourceConditions)) {
            query["ResourceConditions"] = request.resourceConditions;
        }
        if (!$dara.isNull(request.scene)) {
            query["Scene"] = request.scene;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppRecommendedCommodities",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppRecommendedCommoditiesResponse({}));
    }
    /**
     * Queries recommended commodities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetAppRecommendedCommoditiesRequest
     * @returns GetAppRecommendedCommoditiesResponse
     */
    async getAppRecommendedCommodities(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppRecommendedCommoditiesWithOptions(request, runtime);
    }
    /**
     * Queries requirements.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppRequirementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppRequirementResponse
     */
    async getAppRequirementWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppRequirement",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppRequirementResponse({}));
    }
    /**
     * Queries requirements.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppRequirementRequest
     * @returns GetAppRequirementResponse
     */
    async getAppRequirement(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppRequirementWithOptions(request, runtime);
    }
    /**
     * Retrieves the sandbox preview URL.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the site preview URL.
     *
     * @param request - GetAppSandboxPreviewUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSandboxPreviewUrlResponse
     */
    async getAppSandboxPreviewUrlWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.restart)) {
            body["Restart"] = request.restart;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSandboxPreviewUrl",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSandboxPreviewUrlResponse({}));
    }
    /**
     * Retrieves the sandbox preview URL.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the site preview URL.
     *
     * @param request - GetAppSandboxPreviewUrlRequest
     * @returns GetAppSandboxPreviewUrlResponse
     */
    async getAppSandboxPreviewUrl(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSandboxPreviewUrlWithOptions(request, runtime);
    }
    /**
     * Queries the SEO index status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSeoStatusResponse
     */
    async getAppSeoStatusWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.seType)) {
            query["SeType"] = request.seType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSeoStatus",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSeoStatusResponse({}));
    }
    /**
     * Queries the SEO index status.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoStatusRequest
     * @returns GetAppSeoStatusResponse
     */
    async getAppSeoStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSeoStatusWithOptions(request, runtime);
    }
    /**
     * SEO index chart.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoTrendsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSeoTrendsResponse
     */
    async getAppSeoTrendsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.seType)) {
            query["SeType"] = request.seType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSeoTrends",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSeoTrendsResponse({}));
    }
    /**
     * SEO index chart.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSeoTrendsRequest
     * @returns GetAppSeoTrendsResponse
     */
    async getAppSeoTrends(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSeoTrendsWithOptions(request, runtime);
    }
    /**
     * Retrieves the sitemap.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSitemapRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSitemapResponse
     */
    async getAppSitemapWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.seType)) {
            query["SeType"] = request.seType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSitemap",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSitemapResponse({}));
    }
    /**
     * Retrieves the sitemap.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetAppSitemapRequest
     * @returns GetAppSitemapResponse
     */
    async getAppSitemap(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSitemapWithOptions(request, runtime);
    }
    /**
     * Queries the Supabase authentication settings.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information for a specified resource.
     *
     * @param request - GetAppSupabaseAuthConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseAuthConfigResponse
     */
    async getAppSupabaseAuthConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authType)) {
            query["AuthType"] = request.authType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSupabaseAuthConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseAuthConfigResponse({}));
    }
    /**
     * Queries the Supabase authentication settings.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information for a specified resource.
     *
     * @param request - GetAppSupabaseAuthConfigRequest
     * @returns GetAppSupabaseAuthConfigResponse
     */
    async getAppSupabaseAuthConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSupabaseAuthConfigWithOptions(request, runtime);
    }
    /**
     * Retrieves the information about a Supabase instance.
     *
     * @remarks
     * Queries the information about an application instance.
     *
     * @param request - GetAppSupabaseInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseInstanceResponse
     */
    async getAppSupabaseInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSupabaseInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseInstanceResponse({}));
    }
    /**
     * Retrieves the information about a Supabase instance.
     *
     * @remarks
     * Queries the information about an application instance.
     *
     * @param request - GetAppSupabaseInstanceRequest
     * @returns GetAppSupabaseInstanceResponse
     */
    async getAppSupabaseInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSupabaseInstanceWithOptions(request, runtime);
    }
    /**
     * Queries Supabase keys.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the specified resource.
     *
     * @param request - GetAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppSupabaseSecretsResponse
     */
    async getAppSupabaseSecretsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppSupabaseSecrets",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppSupabaseSecretsResponse({}));
    }
    /**
     * Queries Supabase keys.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the specified resource.
     *
     * @param request - GetAppSupabaseSecretsRequest
     * @returns GetAppSupabaseSecretsResponse
     */
    async getAppSupabaseSecrets(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppSupabaseSecretsWithOptions(request, runtime);
    }
    /**
     * Queries the details of a template.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plug-in.
     *
     * @param request - GetAppTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppTemplateResponse
     */
    async getAppTemplateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppTemplate",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppTemplateResponse({}));
    }
    /**
     * Queries the details of a template.
     *
     * @remarks
     * Retrieves the configuration information of a code generation plug-in.
     *
     * @param request - GetAppTemplateRequest
     * @returns GetAppTemplateResponse
     */
    async getAppTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppTemplateWithOptions(request, runtime);
    }
    /**
     * Queries the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppTokenServiceResponse
     */
    async getAppTokenServiceWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppTokenService",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppTokenServiceResponse({}));
    }
    /**
     * Queries the Wanxiaozhi inspiration value service.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     * @returns GetAppTokenServiceResponse
     */
    async getAppTokenService() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppTokenServiceWithOptions(runtime);
    }
    /**
     * Retrieves the directory structure of a workspace.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - GetAppWorkspaceDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAppWorkspaceDirectoryResponse
     */
    async getAppWorkspaceDirectoryWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.deep)) {
            body["Deep"] = request.deep;
        }
        if (!$dara.isNull(request.filePath)) {
            body["FilePath"] = request.filePath;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAppWorkspaceDirectory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAppWorkspaceDirectoryResponse({}));
    }
    /**
     * Retrieves the directory structure of a workspace.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - GetAppWorkspaceDirectoryRequest
     * @returns GetAppWorkspaceDirectoryResponse
     */
    async getAppWorkspaceDirectory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAppWorkspaceDirectoryWithOptions(request, runtime);
    }
    /**
     * Queries a logo creation task.
     *
     * @param request - GetCreateLogoTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCreateLogoTaskResponse
     */
    async getCreateLogoTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCreateLogoTask",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCreateLogoTaskResponse({}));
    }
    /**
     * Queries a logo creation task.
     *
     * @param request - GetCreateLogoTaskRequest
     * @returns GetCreateLogoTaskResponse
     */
    async getCreateLogoTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getCreateLogoTaskWithOptions(request, runtime);
    }
    /**
     * Provides a domain name query API for service providers.
     *
     * @param request - GetDomainInfoForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetDomainInfoForPartnerResponse
     */
    async getDomainInfoForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetDomainInfoForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetDomainInfoForPartnerResponse({}));
    }
    /**
     * Provides a domain name query API for service providers.
     *
     * @param request - GetDomainInfoForPartnerRequest
     * @returns GetDomainInfoForPartnerResponse
     */
    async getDomainInfoForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getDomainInfoForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the China Internet Content Provider (ICP) filing information of a domain name.
     *
     * @param request - GetIcpFilingInfoForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIcpFilingInfoForPartnerResponse
     */
    async getIcpFilingInfoForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIcpFilingInfoForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIcpFilingInfoForPartnerResponse({}));
    }
    /**
     * Queries the China Internet Content Provider (ICP) filing information of a domain name.
     *
     * @param request - GetIcpFilingInfoForPartnerRequest
     * @returns GetIcpFilingInfoForPartnerResponse
     */
    async getIcpFilingInfoForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getIcpFilingInfoForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the LLM Proxy configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration information corresponding to a resource.
     *
     * @param request - GetLlmProxyConfigForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetLlmProxyConfigForAdminResponse
     */
    async getLlmProxyConfigForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.capability)) {
            query["Capability"] = request.capability;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetLlmProxyConfigForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetLlmProxyConfigForAdminResponse({}));
    }
    /**
     * Queries the LLM Proxy configuration.
     *
     * @remarks
     * Queries the Supabase instance configuration information corresponding to a resource.
     *
     * @param request - GetLlmProxyConfigForAdminRequest
     * @returns GetLlmProxyConfigForAdminResponse
     */
    async getLlmProxyConfigForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getLlmProxyConfigForAdminWithOptions(request, runtime);
    }
    /**
     * Retrieves the authorization URL for a mini program.
     *
     * @param request - GetMiniAppAuthUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppAuthUrlResponse
     */
    async getMiniAppAuthUrlWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.redirectUri)) {
            query["RedirectUri"] = request.redirectUri;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMiniAppAuthUrl",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMiniAppAuthUrlResponse({}));
    }
    /**
     * Retrieves the authorization URL for a mini program.
     *
     * @param request - GetMiniAppAuthUrlRequest
     * @returns GetMiniAppAuthUrlResponse
     */
    async getMiniAppAuthUrl(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getMiniAppAuthUrlWithOptions(request, runtime);
    }
    /**
     * Queries the mini programs bound to a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param tmpReq - GetMiniAppBindingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppBindingResponse
     */
    async getMiniAppBindingWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.GetMiniAppBindingShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.settingKeys)) {
            request.settingKeysShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settingKeys, "SettingKeys", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.settingKeysShrink)) {
            query["SettingKeys"] = request.settingKeysShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMiniAppBinding",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMiniAppBindingResponse({}));
    }
    /**
     * Queries the mini programs bound to a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetMiniAppBindingRequest
     * @returns GetMiniAppBindingResponse
     */
    async getMiniAppBinding(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getMiniAppBindingWithOptions(request, runtime);
    }
    /**
     * Queries the mini programs attached to an application instance by using a conditional query.
     *
     * @param request - GetMiniAppBindingForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMiniAppBindingForAdminResponse
     */
    async getMiniAppBindingForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.platformAppid)) {
            query["PlatformAppid"] = request.platformAppid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMiniAppBindingForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMiniAppBindingForAdminResponse({}));
    }
    /**
     * Queries the mini programs attached to an application instance by using a conditional query.
     *
     * @param request - GetMiniAppBindingForAdminRequest
     * @returns GetMiniAppBindingForAdminResponse
     */
    async getMiniAppBindingForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getMiniAppBindingForAdminWithOptions(request, runtime);
    }
    /**
     * Generates a file upload policy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetOssUploadPolicyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetOssUploadPolicyResponse
     */
    async getOssUploadPolicyWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.scenario)) {
            body["Scenario"] = request.scenario;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetOssUploadPolicy",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetOssUploadPolicyResponse({}));
    }
    /**
     * Generates a file upload policy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - GetOssUploadPolicyRequest
     * @returns GetOssUploadPolicyResponse
     */
    async getOssUploadPolicy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getOssUploadPolicyWithOptions(request, runtime);
    }
    /**
     * Retrieves a temporary download URL.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetTempDownloadUrlRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTempDownloadUrlResponse
     */
    async getTempDownloadUrlWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let body = {};
        if (!$dara.isNull(request.ossKey)) {
            body["OssKey"] = request.ossKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetTempDownloadUrl",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetTempDownloadUrlResponse({}));
    }
    /**
     * Retrieves a temporary download URL.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - GetTempDownloadUrlRequest
     * @returns GetTempDownloadUrlResponse
     */
    async getTempDownloadUrl(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getTempDownloadUrlWithOptions(request, runtime);
    }
    /**
     * Exchanges a temporary AccessKey for an access token.
     *
     * @param request - GetUserAccessTokenForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserAccessTokenForPartnerResponse
     */
    async getUserAccessTokenForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.siteHost)) {
            query["SiteHost"] = request.siteHost;
        }
        if (!$dara.isNull(request.ticket)) {
            query["Ticket"] = request.ticket;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUserAccessTokenForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserAccessTokenForPartnerResponse({}));
    }
    /**
     * Exchanges a temporary AccessKey for an access token.
     *
     * @param request - GetUserAccessTokenForPartnerRequest
     * @returns GetUserAccessTokenForPartnerResponse
     */
    async getUserAccessTokenForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserAccessTokenForPartnerWithOptions(request, runtime);
    }
    /**
     * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
     *
     * @param request - GetUserTmpIdentityForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserTmpIdentityForPartnerResponse
     */
    async getUserTmpIdentityForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authPurpose)) {
            query["AuthPurpose"] = request.authPurpose;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.serviceLinkedRole)) {
            query["ServiceLinkedRole"] = request.serviceLinkedRole;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUserTmpIdentityForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserTmpIdentityForPartnerResponse({}));
    }
    /**
     * Obtains temporary credentials for a partner to assume a user\\"s service-linked role.
     *
     * @param request - GetUserTmpIdentityForPartnerRequest
     * @returns GetUserTmpIdentityForPartnerResponse
     */
    async getUserTmpIdentityForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getUserTmpIdentityForPartnerWithOptions(request, runtime);
    }
    /**
     * Grants promotional benefits to partners.
     *
     * @remarks
     * Retrieves the configuration information for the code generation plugin.
     *
     * @param request - GrantPromotionOfferForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GrantPromotionOfferForPartnerResponse
     */
    async grantPromotionOfferForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.activityCode)) {
            query["ActivityCode"] = request.activityCode;
        }
        if (!$dara.isNull(request.activityId)) {
            query["ActivityId"] = request.activityId;
        }
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.employeeCode)) {
            query["EmployeeCode"] = request.employeeCode;
        }
        if (!$dara.isNull(request.remark)) {
            query["Remark"] = request.remark;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GrantPromotionOfferForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GrantPromotionOfferForPartnerResponse({}));
    }
    /**
     * Grants promotional benefits to partners.
     *
     * @remarks
     * Retrieves the configuration information for the code generation plugin.
     *
     * @param request - GrantPromotionOfferForPartnerRequest
     * @returns GrantPromotionOfferForPartnerResponse
     */
    async grantPromotionOfferForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.grantPromotionOfferForPartnerWithOptions(request, runtime);
    }
    /**
     * Installs an application plugin to the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - InstallAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallAppPluginResponse
     */
    async installAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "InstallAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.InstallAppPluginResponse({}));
    }
    /**
     * Installs an application plugin to the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - InstallAppPluginRequest
     * @returns InstallAppPluginResponse
     */
    async installAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.installAppPluginWithOptions(request, runtime);
    }
    /**
     * Introspection analysis of免登 accessToken
     *
     * @param request - IntrospectAppInstanceTicketForPreviewRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns IntrospectAppInstanceTicketForPreviewResponse
     */
    async introspectAppInstanceTicketForPreviewWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.token)) {
            query["Token"] = request.token;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "IntrospectAppInstanceTicketForPreview",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.IntrospectAppInstanceTicketForPreviewResponse({}));
    }
    /**
     * Introspection analysis of免登 accessToken
     *
     * @param request - IntrospectAppInstanceTicketForPreviewRequest
     * @returns IntrospectAppInstanceTicketForPreviewResponse
     */
    async introspectAppInstanceTicketForPreview(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.introspectAppInstanceTicketForPreviewWithOptions(request, runtime);
    }
    /**
     * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
     *
     * @param request - ListAIStaffChatEventsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAIStaffChatEventsResponse
     */
    async listAIStaffChatEventsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let body = {};
        if (!$dara.isNull(request.chatId)) {
            body["ChatId"] = request.chatId;
        }
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.lastEventId)) {
            body["LastEventId"] = request.lastEventId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAIStaffChatEvents",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAIStaffChatEventsResponse({}));
    }
    /**
     * Retrieves incremental Server-Sent Events (SSE) for AI agent conversations.
     *
     * @remarks
     * Wanxiaozhi 2.0 - Retrieves the streaming output results of AI conversations.
     *
     * @param request - ListAIStaffChatEventsRequest
     * @returns ListAIStaffChatEventsResponse
     */
    async listAIStaffChatEvents(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAIStaffChatEventsWithOptions(request, runtime);
    }
    /**
     * Performs a paging query on the list of conversation messages for an AI agent.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - ListAIStaffChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAIStaffChatMessagesResponse
     */
    async listAIStaffChatMessagesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let body = {};
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.pageSize)) {
            body["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.startCreateTime)) {
            body["StartCreateTime"] = request.startCreateTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAIStaffChatMessages",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAIStaffChatMessagesResponse({}));
    }
    /**
     * Performs a paging query on the list of conversation messages for an AI agent.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - ListAIStaffChatMessagesRequest
     * @returns ListAIStaffChatMessagesResponse
     */
    async listAIStaffChatMessages(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAIStaffChatMessagesWithOptions(request, runtime);
    }
    /**
     * Queries the list of application assistant agents.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppAssistantAgentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppAssistantAgentsResponse
     */
    async listAppAssistantAgentsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.platformType)) {
            query["PlatformType"] = request.platformType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppAssistantAgents",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppAssistantAgentsResponse({}));
    }
    /**
     * Queries the list of application assistant agents.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppAssistantAgentsRequest
     * @returns ListAppAssistantAgentsResponse
     */
    async listAppAssistantAgents(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppAssistantAgentsWithOptions(request, runtime);
    }
    /**
     * Queries the messages in a specified chat.
     *
     * @remarks
     * Wanxiaozhi 2.0 - AI conversation history query API.
     *
     * @param request - ListAppChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppChatMessagesResponse
     */
    async listAppChatMessagesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.chatId)) {
            query["ChatId"] = request.chatId;
        }
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.sectionId)) {
            query["SectionId"] = request.sectionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppChatMessages",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppChatMessagesResponse({}));
    }
    /**
     * Queries the messages in a specified chat.
     *
     * @remarks
     * Wanxiaozhi 2.0 - AI conversation history query API.
     *
     * @param request - ListAppChatMessagesRequest
     * @returns ListAppChatMessagesResponse
     */
    async listAppChatMessages(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppChatMessagesWithOptions(request, runtime);
    }
    /**
     * The product information data.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppCommoditySpecificationsForPartnerResponse
     */
    // Deprecated
    async listAppCommoditySpecificationsForPartnerWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppCommoditySpecificationsForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppCommoditySpecificationsForPartnerResponse({}));
    }
    /**
     * The product information data.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @deprecated OpenAPI ListAppCommoditySpecificationsForPartner is deprecated, please use WebsiteBuild::2025-04-29::ListAppCommoditySpecificationsV2ForPartner instead.
     * @returns ListAppCommoditySpecificationsForPartnerResponse
     */
    // Deprecated
    async listAppCommoditySpecificationsForPartner() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppCommoditySpecificationsForPartnerWithOptions(runtime);
    }
    /**
     * Query Website Build Product Details
     *
     * @remarks
     * Get QR code plugin configuration information
     *
     * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
     */
    async listAppCommoditySpecificationsV2ForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppCommoditySpecificationsV2ForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppCommoditySpecificationsV2ForPartnerResponse({}));
    }
    /**
     * Query Website Build Product Details
     *
     * @remarks
     * Get QR code plugin configuration information
     *
     * @param request - ListAppCommoditySpecificationsV2ForPartnerRequest
     * @returns ListAppCommoditySpecificationsV2ForPartnerResponse
     */
    async listAppCommoditySpecificationsV2ForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppCommoditySpecificationsV2ForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the list of conversation messages by paging.
     *
     * @remarks
     * Wanxiaozhi 2.0 - API for querying AI session history information.
     *
     * @param request - ListAppConversationMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppConversationMessagesResponse
     */
    async listAppConversationMessagesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.siteId)) {
            query["SiteId"] = request.siteId;
        }
        if (!$dara.isNull(request.startCreateTime)) {
            query["StartCreateTime"] = request.startCreateTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppConversationMessages",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppConversationMessagesResponse({}));
    }
    /**
     * Queries the list of conversation messages by paging.
     *
     * @remarks
     * Wanxiaozhi 2.0 - API for querying AI session history information.
     *
     * @param request - ListAppConversationMessagesRequest
     * @returns ListAppConversationMessagesResponse
     */
    async listAppConversationMessages(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppConversationMessagesWithOptions(request, runtime);
    }
    /**
     * Queries the conversation list.
     *
     * @remarks
     * Creates an AI conversation in Wanxiaozhi 2.0.
     *
     * @param request - ListAppConversationsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppConversationsResponse
     */
    async listAppConversationsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.botId)) {
            query["BotId"] = request.botId;
        }
        if (!$dara.isNull(request.endModifyTime)) {
            query["EndModifyTime"] = request.endModifyTime;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.siteId)) {
            query["SiteId"] = request.siteId;
        }
        if (!$dara.isNull(request.startModifyTime)) {
            query["StartModifyTime"] = request.startModifyTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppConversations",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppConversationsResponse({}));
    }
    /**
     * Queries the conversation list.
     *
     * @remarks
     * Creates an AI conversation in Wanxiaozhi 2.0.
     *
     * @param request - ListAppConversationsRequest
     * @returns ListAppConversationsResponse
     */
    async listAppConversations(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppConversationsWithOptions(request, runtime);
    }
    /**
     * Queries the list of HTTP 301 status codes for a website.
     *
     * @param request - ListAppDomainRedirectRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppDomainRedirectRecordsResponse
     */
    async listAppDomainRedirectRecordsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppDomainRedirectRecords",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppDomainRedirectRecordsResponse({}));
    }
    /**
     * Queries the list of HTTP 301 status codes for a website.
     *
     * @param request - ListAppDomainRedirectRecordsRequest
     * @returns ListAppDomainRedirectRecordsResponse
     */
    async listAppDomainRedirectRecords(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppDomainRedirectRecordsWithOptions(request, runtime);
    }
    /**
     * Queries the domain names bound to a website.
     *
     * @param request - ListAppInstanceDomainsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppInstanceDomainsResponse
     */
    async listAppInstanceDomainsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainKeyword)) {
            query["DomainKeyword"] = request.domainKeyword;
        }
        if (!$dara.isNull(request.domainType)) {
            query["DomainType"] = request.domainType;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.statusQueryMode)) {
            query["StatusQueryMode"] = request.statusQueryMode;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppInstanceDomains",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppInstanceDomainsResponse({}));
    }
    /**
     * Queries the domain names bound to a website.
     *
     * @param request - ListAppInstanceDomainsRequest
     * @returns ListAppInstanceDomainsResponse
     */
    async listAppInstanceDomains(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppInstanceDomainsWithOptions(request, runtime);
    }
    /**
     * Queries the list of application instances.
     *
     * @param tmpReq - ListAppInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppInstancesResponse
     */
    async listAppInstancesWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ListAppInstancesShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.bizIds)) {
            request.bizIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bizIds, "BizIds", "json");
        }
        if (!$dara.isNull(tmpReq.statusList)) {
            request.statusListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.applicationType)) {
            query["ApplicationType"] = request.applicationType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.bizIdsShrink)) {
            query["BizIds"] = request.bizIdsShrink;
        }
        if (!$dara.isNull(request.endTimeBegin)) {
            query["EndTimeBegin"] = request.endTimeBegin;
        }
        if (!$dara.isNull(request.endTimeEnd)) {
            query["EndTimeEnd"] = request.endTimeEnd;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.query)) {
            query["Query"] = request.query;
        }
        if (!$dara.isNull(request.queryMode)) {
            query["QueryMode"] = request.queryMode;
        }
        if (!$dara.isNull(request.statusListShrink)) {
            query["StatusList"] = request.statusListShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppInstances",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppInstancesResponse({}));
    }
    /**
     * Queries the list of application instances.
     *
     * @param request - ListAppInstancesRequest
     * @returns ListAppInstancesResponse
     */
    async listAppInstances(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppInstancesWithOptions(request, runtime);
    }
    /**
     * Retrieves the list of code generation plug-in configurations.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListAppPluginConfigsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginConfigsResponse
     */
    async listAppPluginConfigsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppPluginConfigs",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppPluginConfigsResponse({}));
    }
    /**
     * Retrieves the list of code generation plug-in configurations.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListAppPluginConfigsRequest
     * @returns ListAppPluginConfigsResponse
     */
    async listAppPluginConfigs(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppPluginConfigsWithOptions(request, runtime);
    }
    /**
     * Queries the list of application plugin files.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListAppPluginFilesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginFilesResponse
     */
    async listAppPluginFilesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppPluginFiles",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppPluginFilesResponse({}));
    }
    /**
     * Queries the list of application plugin files.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListAppPluginFilesRequest
     * @returns ListAppPluginFilesResponse
     */
    async listAppPluginFiles(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppPluginFilesWithOptions(request, runtime);
    }
    /**
     * Queries the application plug-in versions.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppPluginVersionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginVersionsResponse
     */
    async listAppPluginVersionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppPluginVersions",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppPluginVersionsResponse({}));
    }
    /**
     * Queries the application plug-in versions.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppPluginVersionsRequest
     * @returns ListAppPluginVersionsResponse
     */
    async listAppPluginVersions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppPluginVersionsWithOptions(request, runtime);
    }
    /**
     * Lists application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPluginsResponse
     */
    async listAppPluginsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.phase)) {
            query["Phase"] = request.phase;
        }
        if (!$dara.isNull(request.platform)) {
            query["Platform"] = request.platform;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppPlugins",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppPluginsResponse({}));
    }
    /**
     * Lists application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListAppPluginsRequest
     * @returns ListAppPluginsResponse
     */
    async listAppPlugins(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppPluginsWithOptions(request, runtime);
    }
    /**
     * Queries the release history.
     *
     * @remarks
     * Queries the information about application instances.
     *
     * @param request - ListAppPublishHistoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppPublishHistoryResponse
     */
    async listAppPublishHistoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.deployChannel)) {
            query["DeployChannel"] = request.deployChannel;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.publishEnv)) {
            query["PublishEnv"] = request.publishEnv;
        }
        if (!$dara.isNull(request.sort)) {
            query["Sort"] = request.sort;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.subchannel)) {
            query["Subchannel"] = request.subchannel;
        }
        if (!$dara.isNull(request.websiteDomain)) {
            query["WebsiteDomain"] = request.websiteDomain;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppPublishHistory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppPublishHistoryResponse({}));
    }
    /**
     * Queries the release history.
     *
     * @remarks
     * Queries the information about application instances.
     *
     * @param request - ListAppPublishHistoryRequest
     * @returns ListAppPublishHistoryResponse
     */
    async listAppPublishHistory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppPublishHistoryWithOptions(request, runtime);
    }
    /**
     * Queries a list of dictionaries.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppTemplateDictsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppTemplateDictsResponse
     */
    async listAppTemplateDictsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.dictType)) {
            query["DictType"] = request.dictType;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppTemplateDicts",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppTemplateDictsResponse({}));
    }
    /**
     * Queries a list of dictionaries.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - ListAppTemplateDictsRequest
     * @returns ListAppTemplateDictsResponse
     */
    async listAppTemplateDicts(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppTemplateDictsWithOptions(request, runtime);
    }
    /**
     * Queries a list of templates.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAppTemplatesResponse
     */
    async listAppTemplatesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appType)) {
            query["AppType"] = request.appType;
        }
        if (!$dara.isNull(request.colorScheme)) {
            query["ColorScheme"] = request.colorScheme;
        }
        if (!$dara.isNull(request.industry)) {
            query["Industry"] = request.industry;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.productVersion)) {
            query["ProductVersion"] = request.productVersion;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAppTemplates",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAppTemplatesResponse({}));
    }
    /**
     * Queries a list of templates.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListAppTemplatesRequest
     * @returns ListAppTemplatesResponse
     */
    async listAppTemplates(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listAppTemplatesWithOptions(request, runtime);
    }
    /**
     * Queries the Alipay ISV plugin configuration.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListIsvPaymentPluginConfigsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIsvPaymentPluginConfigsResponse
     */
    async listIsvPaymentPluginConfigsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListIsvPaymentPluginConfigs",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListIsvPaymentPluginConfigsResponse({}));
    }
    /**
     * Queries the Alipay ISV plugin configuration.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListIsvPaymentPluginConfigsRequest
     * @returns ListIsvPaymentPluginConfigsResponse
     */
    async listIsvPaymentPluginConfigs(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listIsvPaymentPluginConfigsWithOptions(request, runtime);
    }
    /**
     * Queries the list of application plug-ins in the marketplace.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMarketplaceAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMarketplaceAppPluginsResponse
     */
    async listMarketplaceAppPluginsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.category)) {
            query["Category"] = request.category;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.platform)) {
            query["Platform"] = request.platform;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMarketplaceAppPlugins",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMarketplaceAppPluginsResponse({}));
    }
    /**
     * Queries the list of application plug-ins in the marketplace.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMarketplaceAppPluginsRequest
     * @returns ListMarketplaceAppPluginsResponse
     */
    async listMarketplaceAppPlugins(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listMarketplaceAppPluginsWithOptions(request, runtime);
    }
    /**
     * Queries the list of application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListMyAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMyAppPluginsResponse
     */
    async listMyAppPluginsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.category)) {
            query["Category"] = request.category;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMyAppPlugins",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMyAppPluginsResponse({}));
    }
    /**
     * Queries the list of application plugins.
     *
     * @remarks
     * Retrieves the configuration information of code generation plugins.
     *
     * @param request - ListMyAppPluginsRequest
     * @returns ListMyAppPluginsResponse
     */
    async listMyAppPlugins(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listMyAppPluginsWithOptions(request, runtime);
    }
    /**
     * Queries the list of application plug-ins that you have installed.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMyInstalledAppPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMyInstalledAppPluginsResponse
     */
    async listMyInstalledAppPluginsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.category)) {
            query["Category"] = request.category;
        }
        if (!$dara.isNull(request.keyword)) {
            query["Keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMyInstalledAppPlugins",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMyInstalledAppPluginsResponse({}));
    }
    /**
     * Queries the list of application plug-ins that you have installed.
     *
     * @remarks
     * Retrieves the configuration information of code generation plug-ins.
     *
     * @param request - ListMyInstalledAppPluginsRequest
     * @returns ListMyInstalledAppPluginsResponse
     */
    async listMyInstalledAppPlugins(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listMyInstalledAppPluginsWithOptions(request, runtime);
    }
    /**
     * Queries the list of partner promotional activities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionActivitiesForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPromotionActivitiesForPartnerResponse
     */
    async listPromotionActivitiesForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.employeeCode)) {
            query["EmployeeCode"] = request.employeeCode;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPromotionActivitiesForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPromotionActivitiesForPartnerResponse({}));
    }
    /**
     * Queries the list of partner promotional activities.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionActivitiesForPartnerRequest
     * @returns ListPromotionActivitiesForPartnerResponse
     */
    async listPromotionActivitiesForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listPromotionActivitiesForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the benefit issuance records of a partner.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionOfferRecordsForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPromotionOfferRecordsForPartnerResponse
     */
    async listPromotionOfferRecordsForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.activityCode)) {
            query["ActivityCode"] = request.activityCode;
        }
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPromotionOfferRecordsForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPromotionOfferRecordsForPartnerResponse({}));
    }
    /**
     * Queries the benefit issuance records of a partner.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ListPromotionOfferRecordsForPartnerRequest
     * @returns ListPromotionOfferRecordsForPartnerResponse
     */
    async listPromotionOfferRecordsForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listPromotionOfferRecordsForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the RBAC organization tree.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListRbacOrgTreeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacOrgTreeResponse
     */
    async listRbacOrgTreeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListRbacOrgTree",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListRbacOrgTreeResponse({}));
    }
    /**
     * Queries the RBAC organization tree.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - ListRbacOrgTreeRequest
     * @returns ListRbacOrgTreeResponse
     */
    async listRbacOrgTree(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listRbacOrgTreeWithOptions(request, runtime);
    }
    /**
     * Queries the RBAC permissions.
     *
     * @remarks
     * Creates an AI session in Wanxiaozhi 2.0.
     *
     * @param request - ListRbacPermissionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacPermissionsResponse
     */
    async listRbacPermissionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListRbacPermissions",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListRbacPermissionsResponse({}));
    }
    /**
     * Queries the RBAC permissions.
     *
     * @remarks
     * Creates an AI session in Wanxiaozhi 2.0.
     *
     * @param request - ListRbacPermissionsRequest
     * @returns ListRbacPermissionsResponse
     */
    async listRbacPermissions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listRbacPermissionsWithOptions(request, runtime);
    }
    /**
     * Queries the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacRoleHierarchyResponse
     */
    async listRbacRoleHierarchyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListRbacRoleHierarchy",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListRbacRoleHierarchyResponse({}));
    }
    /**
     * Queries the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRoleHierarchyRequest
     * @returns ListRbacRoleHierarchyResponse
     */
    async listRbacRoleHierarchy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listRbacRoleHierarchyWithOptions(request, runtime);
    }
    /**
     * Queries a list of RBAC roles.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRolesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListRbacRolesResponse
     */
    async listRbacRolesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListRbacRoles",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListRbacRolesResponse({}));
    }
    /**
     * Queries a list of RBAC roles.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - ListRbacRolesRequest
     * @returns ListRbacRolesResponse
     */
    async listRbacRoles(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listRbacRolesWithOptions(request, runtime);
    }
    /**
     * Modifies the specifications of a website building application instance.
     *
     * @remarks
     * Modifies the specifications of a website building application instance.
     *
     * @param request - ModifyAppInstanceSpecRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAppInstanceSpecResponse
     */
    async modifyAppInstanceSpecWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.applicationType)) {
            query["ApplicationType"] = request.applicationType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.deployArea)) {
            query["DeployArea"] = request.deployArea;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.siteVersion)) {
            query["SiteVersion"] = request.siteVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyAppInstanceSpec",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceSpecResponse({}));
    }
    /**
     * Modifies the specifications of a website building application instance.
     *
     * @remarks
     * Modifies the specifications of a website building application instance.
     *
     * @param request - ModifyAppInstanceSpecRequest
     * @returns ModifyAppInstanceSpecResponse
     */
    async modifyAppInstanceSpec(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyAppInstanceSpecWithOptions(request, runtime);
    }
    /**
     * Updates a material folder.
     *
     * @param request - ModifyMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialDirectoryResponse
     */
    async modifyMaterialDirectoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyMaterialDirectory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyMaterialDirectoryResponse({}));
    }
    /**
     * Updates a material folder.
     *
     * @param request - ModifyMaterialDirectoryRequest
     * @returns ModifyMaterialDirectoryResponse
     */
    async modifyMaterialDirectory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyMaterialDirectoryWithOptions(request, runtime);
    }
    /**
     * Updates a material file.
     *
     * @param request - ModifyMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialFileResponse
     */
    async modifyMaterialFileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.fileId)) {
            query["FileId"] = request.fileId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyMaterialFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileResponse({}));
    }
    /**
     * Updates a material file.
     *
     * @param request - ModifyMaterialFileRequest
     * @returns ModifyMaterialFileResponse
     */
    async modifyMaterialFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyMaterialFileWithOptions(request, runtime);
    }
    /**
     * Updates the status of material files.
     *
     * @param tmpReq - ModifyMaterialFileStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMaterialFileStatusResponse
     */
    async modifyMaterialFileStatusWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyMaterialFileStatusShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.fileIds)) {
            request.fileIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.fileIdsShrink)) {
            query["FileIds"] = request.fileIdsShrink;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyMaterialFileStatus",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyMaterialFileStatusResponse({}));
    }
    /**
     * Updates the status of material files.
     *
     * @param request - ModifyMaterialFileStatusRequest
     * @returns ModifyMaterialFileStatusResponse
     */
    async modifyMaterialFileStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyMaterialFileStatusWithOptions(request, runtime);
    }
    /**
     * Moves an asset folder.
     *
     * @param request - MoveMaterialDirectoryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MoveMaterialDirectoryResponse
     */
    async moveMaterialDirectoryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.parentDirectoryId)) {
            query["ParentDirectoryId"] = request.parentDirectoryId;
        }
        if (!$dara.isNull(request.sortNum)) {
            query["SortNum"] = request.sortNum;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "MoveMaterialDirectory",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.MoveMaterialDirectoryResponse({}));
    }
    /**
     * Moves an asset folder.
     *
     * @param request - MoveMaterialDirectoryRequest
     * @returns MoveMaterialDirectoryResponse
     */
    async moveMaterialDirectory(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.moveMaterialDirectoryWithOptions(request, runtime);
    }
    /**
     * Moves asset files.
     *
     * @param tmpReq - MoveMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns MoveMaterialFileResponse
     */
    async moveMaterialFileWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.MoveMaterialFileShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.fileIds)) {
            request.fileIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.fileIdsShrink)) {
            query["FileIds"] = request.fileIdsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "MoveMaterialFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.MoveMaterialFileResponse({}));
    }
    /**
     * Moves asset files.
     *
     * @param request - MoveMaterialFileRequest
     * @returns MoveMaterialFileResponse
     */
    async moveMaterialFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.moveMaterialFileWithOptions(request, runtime);
    }
    /**
     * Triggers a data change notification for administrators.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - NotifyAppNotificationForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns NotifyAppNotificationForAdminResponse
     */
    async notifyAppNotificationForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.payload)) {
            query["Payload"] = request.payload;
        }
        if (!$dara.isNull(request.sceneId)) {
            query["SceneId"] = request.sceneId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "NotifyAppNotificationForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.NotifyAppNotificationForAdminResponse({}));
    }
    /**
     * Triggers a data change notification for administrators.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - NotifyAppNotificationForAdminRequest
     * @returns NotifyAppNotificationForAdminResponse
     */
    async notifyAppNotificationForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.notifyAppNotificationForAdminWithOptions(request, runtime);
    }
    /**
     * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
     *
     * @param request - OfflineAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OfflineAppInstanceResponse
     */
    async offlineAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OfflineAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OfflineAppInstanceResponse({}));
    }
    /**
     * Takes a website offline by switching the CDN back-to-origin requests for all domain names under the site to an offline page.
     *
     * @param request - OfflineAppInstanceRequest
     * @returns OfflineAppInstanceResponse
     */
    async offlineAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.offlineAppInstanceWithOptions(request, runtime);
    }
    /**
     * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
     *
     * @param request - OnlineAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OnlineAppInstanceResponse
     */
    async onlineAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OnlineAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OnlineAppInstanceResponse({}));
    }
    /**
     * Restores a website to online status by reverting the CDN back-to-origin configuration for all domain names under the site to the normal path rewrite rules.
     *
     * @param request - OnlineAppInstanceRequest
     * @returns OnlineAppInstanceResponse
     */
    async onlineAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.onlineAppInstanceWithOptions(request, runtime);
    }
    /**
     * Operates an application by a partner.
     *
     * @param request - OperateAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppInstanceForPartnerResponse
     */
    async operateAppInstanceForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.operateEvent)) {
            query["OperateEvent"] = request.operateEvent;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OperateAppInstanceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OperateAppInstanceForPartnerResponse({}));
    }
    /**
     * Operates an application by a partner.
     *
     * @param request - OperateAppInstanceForPartnerRequest
     * @returns OperateAppInstanceForPartnerResponse
     */
    async operateAppInstanceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.operateAppInstanceForPartnerWithOptions(request, runtime);
    }
    /**
     * Operates application services on behalf of a partner.
     *
     * @param request - OperateAppServiceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppServiceForPartnerResponse
     */
    async operateAppServiceForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.operateEvent)) {
            query["OperateEvent"] = request.operateEvent;
        }
        if (!$dara.isNull(request.serviceType)) {
            query["ServiceType"] = request.serviceType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OperateAppServiceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OperateAppServiceForPartnerResponse({}));
    }
    /**
     * Operates application services on behalf of a partner.
     *
     * @param request - OperateAppServiceForPartnerRequest
     * @returns OperateAppServiceForPartnerResponse
     */
    async operateAppServiceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.operateAppServiceForPartnerWithOptions(request, runtime);
    }
    /**
     * Switches the like statistics for a template.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - OperateAppTemplateLikeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateAppTemplateLikeResponse
     */
    async operateAppTemplateLikeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.liked)) {
            query["Liked"] = request.liked;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OperateAppTemplateLike",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OperateAppTemplateLikeResponse({}));
    }
    /**
     * Switches the like statistics for a template.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - OperateAppTemplateLikeRequest
     * @returns OperateAppTemplateLikeResponse
     */
    async operateAppTemplateLike(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.operateAppTemplateLikeWithOptions(request, runtime);
    }
    /**
     * Retrieves the Supabase instance information for the operated resource.
     *
     * @remarks
     * The Supabase instance information for the operated resource.
     *
     * @param request - OperateSupabaseForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OperateSupabaseForAdminResponse
     */
    async operateSupabaseForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.executeSql)) {
            query["ExecuteSql"] = request.executeSql;
        }
        if (!$dara.isNull(request.operateType)) {
            query["OperateType"] = request.operateType;
        }
        if (!$dara.isNull(request.orderByClause)) {
            query["OrderByClause"] = request.orderByClause;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.tableName)) {
            query["TableName"] = request.tableName;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        if (!$dara.isNull(request.whereClause)) {
            query["WhereClause"] = request.whereClause;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OperateSupabaseForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OperateSupabaseForAdminResponse({}));
    }
    /**
     * Retrieves the Supabase instance information for the operated resource.
     *
     * @remarks
     * The Supabase instance information for the operated resource.
     *
     * @param request - OperateSupabaseForAdminRequest
     * @returns OperateSupabaseForAdminResponse
     */
    async operateSupabaseForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.operateSupabaseForAdminWithOptions(request, runtime);
    }
    /**
     * Publishes an application instance.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - PublishAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PublishAppInstanceResponse
     */
    async publishAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.deployChannel)) {
            query["DeployChannel"] = request.deployChannel;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.logicalNumber)) {
            query["LogicalNumber"] = request.logicalNumber;
        }
        if (!$dara.isNull(request.publishNumber)) {
            query["PublishNumber"] = request.publishNumber;
        }
        if (!$dara.isNull(request.weappAction)) {
            query["WeappAction"] = request.weappAction;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "PublishAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.PublishAppInstanceResponse({}));
    }
    /**
     * Publishes an application instance.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - PublishAppInstanceRequest
     * @returns PublishAppInstanceResponse
     */
    async publishAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.publishAppInstanceWithOptions(request, runtime);
    }
    /**
     * Pushes resource metering data.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to a resource.
     *
     * @param request - PushResourceMeasureRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PushResourceMeasureResponse
     */
    async pushResourceMeasureWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.amount)) {
            query["Amount"] = request.amount;
        }
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.belongIdType)) {
            query["BelongIdType"] = request.belongIdType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.measureData)) {
            query["MeasureData"] = request.measureData;
        }
        if (!$dara.isNull(request.metaData)) {
            query["MetaData"] = request.metaData;
        }
        if (!$dara.isNull(request.resourceCode)) {
            query["ResourceCode"] = request.resourceCode;
        }
        if (!$dara.isNull(request.useTime)) {
            query["UseTime"] = request.useTime;
        }
        if (!$dara.isNull(request.useType)) {
            query["UseType"] = request.useType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "PushResourceMeasure",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.PushResourceMeasureResponse({}));
    }
    /**
     * Pushes resource metering data.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to a resource.
     *
     * @param request - PushResourceMeasureRequest
     * @returns PushResourceMeasureResponse
     */
    async pushResourceMeasure(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.pushResourceMeasureWithOptions(request, runtime);
    }
    /**
     * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - QueryInspirationAccountDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationAccountDetailsResponse
     */
    async queryInspirationAccountDetailsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.sourceType)) {
            query["SourceType"] = request.sourceType;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryInspirationAccountDetails",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryInspirationAccountDetailsResponse({}));
    }
    /**
     * Queries the acquisition details of inspiration points, including the list of quota accounts and their expiration status.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param request - QueryInspirationAccountDetailsRequest
     * @returns QueryInspirationAccountDetailsResponse
     */
    async queryInspirationAccountDetails(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryInspirationAccountDetailsWithOptions(request, runtime);
    }
    /**
     * Queries the overview of the inspiration value balance.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationBalanceResponse
     */
    async queryInspirationBalanceWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryInspirationBalance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryInspirationBalanceResponse({}));
    }
    /**
     * Queries the overview of the inspiration value balance.
     *
     * @remarks
     * Queries the Supabase instance information corresponding to the resource.
     * @returns QueryInspirationBalanceResponse
     */
    async queryInspirationBalance() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryInspirationBalanceWithOptions(runtime);
    }
    /**
     * Queries the inspiration value for service providers.
     *
     * @param request - QueryInspirationBalanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationBalanceForPartnerResponse
     */
    async queryInspirationBalanceForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.belongIdType)) {
            query["BelongIdType"] = request.belongIdType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryInspirationBalanceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryInspirationBalanceForPartnerResponse({}));
    }
    /**
     * Queries the inspiration value for service providers.
     *
     * @param request - QueryInspirationBalanceForPartnerRequest
     * @returns QueryInspirationBalanceForPartnerResponse
     */
    async queryInspirationBalanceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryInspirationBalanceForPartnerWithOptions(request, runtime);
    }
    /**
     * Queries the consumption details of inspiration points.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - QueryInspirationConsumeRecordsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryInspirationConsumeRecordsResponse
     */
    async queryInspirationConsumeRecordsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.sceneName)) {
            query["SceneName"] = request.sceneName;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryInspirationConsumeRecords",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryInspirationConsumeRecordsResponse({}));
    }
    /**
     * Queries the consumption details of inspiration points.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - QueryInspirationConsumeRecordsRequest
     * @returns QueryInspirationConsumeRecordsResponse
     */
    async queryInspirationConsumeRecords(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryInspirationConsumeRecordsWithOptions(request, runtime);
    }
    /**
     * Queries the asset folder tree.
     *
     * @param request - QueryMaterialDirectoryTreeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialDirectoryTreeResponse
     */
    async queryMaterialDirectoryTreeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.hiddenPublic)) {
            query["HiddenPublic"] = request.hiddenPublic;
        }
        if (!$dara.isNull(request.root)) {
            query["Root"] = request.root;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialDirectoryTree",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialDirectoryTreeResponse({}));
    }
    /**
     * Queries the asset folder tree.
     *
     * @param request - QueryMaterialDirectoryTreeRequest
     * @returns QueryMaterialDirectoryTreeResponse
     */
    async queryMaterialDirectoryTree(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialDirectoryTreeWithOptions(request, runtime);
    }
    /**
     * Queries the details of an asset file.
     *
     * @param request - QueryMaterialFileDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileDetailResponse
     */
    async queryMaterialFileDetailWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.fileId)) {
            query["FileId"] = request.fileId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialFileDetail",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileDetailResponse({}));
    }
    /**
     * Queries the details of an asset file.
     *
     * @param request - QueryMaterialFileDetailRequest
     * @returns QueryMaterialFileDetailResponse
     */
    async queryMaterialFileDetail(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialFileDetailWithOptions(request, runtime);
    }
    /**
     * Queries a list of asset files.
     *
     * @param tmpReq - QueryMaterialFileListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileListResponse
     */
    async queryMaterialFileListWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.QueryMaterialFileListShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.statusList)) {
            request.statusListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
        }
        if (!$dara.isNull(tmpReq.suffixList)) {
            request.suffixListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.suffixList, "SuffixList", "json");
        }
        if (!$dara.isNull(tmpReq.typeList)) {
            request.typeListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.maxFileSize)) {
            query["MaxFileSize"] = request.maxFileSize;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.minFileSize)) {
            query["MinFileSize"] = request.minFileSize;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.statusListShrink)) {
            query["StatusList"] = request.statusListShrink;
        }
        if (!$dara.isNull(request.suffixListShrink)) {
            query["SuffixList"] = request.suffixListShrink;
        }
        if (!$dara.isNull(request.typeListShrink)) {
            query["TypeList"] = request.typeListShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialFileList",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileListResponse({}));
    }
    /**
     * Queries a list of asset files.
     *
     * @param request - QueryMaterialFileListRequest
     * @returns QueryMaterialFileListResponse
     */
    async queryMaterialFileList(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialFileListWithOptions(request, runtime);
    }
    /**
     * Queries the file overview.
     *
     * @param tmpReq - QueryMaterialFileSummaryInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialFileSummaryInfoResponse
     */
    async queryMaterialFileSummaryInfoWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.QueryMaterialFileSummaryInfoShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.statusList)) {
            request.statusListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
        }
        if (!$dara.isNull(tmpReq.typeList)) {
            request.typeListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.typeList, "TypeList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.statusListShrink)) {
            query["StatusList"] = request.statusListShrink;
        }
        if (!$dara.isNull(request.typeListShrink)) {
            query["TypeList"] = request.typeListShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialFileSummaryInfo",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialFileSummaryInfoResponse({}));
    }
    /**
     * Queries the file overview.
     *
     * @param request - QueryMaterialFileSummaryInfoRequest
     * @returns QueryMaterialFileSummaryInfoResponse
     */
    async queryMaterialFileSummaryInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialFileSummaryInfoWithOptions(request, runtime);
    }
    /**
     * Queries the details of a material generation task.
     *
     * @param request - QueryMaterialTaskDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialTaskDetailResponse
     */
    async queryMaterialTaskDetailWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialTaskDetail",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskDetailResponse({}));
    }
    /**
     * Queries the details of a material generation task.
     *
     * @param request - QueryMaterialTaskDetailRequest
     * @returns QueryMaterialTaskDetailResponse
     */
    async queryMaterialTaskDetail(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialTaskDetailWithOptions(request, runtime);
    }
    /**
     * Queries the list of material generation tasks.
     *
     * @remarks
     * Queries the list of material generation tasks.
     *
     * @param tmpReq - QueryMaterialTaskListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryMaterialTaskListResponse
     */
    async queryMaterialTaskListWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.QueryMaterialTaskListShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.statusList)) {
            request.statusListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
        }
        if (!$dara.isNull(tmpReq.taskTypeList)) {
            request.taskTypeListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.bizGroupId)) {
            query["BizGroupId"] = request.bizGroupId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.statusListShrink)) {
            query["StatusList"] = request.statusListShrink;
        }
        if (!$dara.isNull(request.taskTypeListShrink)) {
            query["TaskTypeList"] = request.taskTypeListShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryMaterialTaskList",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryMaterialTaskListResponse({}));
    }
    /**
     * Queries the list of material generation tasks.
     *
     * @remarks
     * Queries the list of material generation tasks.
     *
     * @param request - QueryMaterialTaskListRequest
     * @returns QueryMaterialTaskListResponse
     */
    async queryMaterialTaskList(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryMaterialTaskListWithOptions(request, runtime);
    }
    /**
     * Queries a single RBAC role.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - QueryRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacRoleResponse
     */
    async queryRbacRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.roleId)) {
            query["RoleId"] = request.roleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryRbacRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryRbacRoleResponse({}));
    }
    /**
     * Queries a single RBAC role.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - QueryRbacRoleRequest
     * @returns QueryRbacRoleResponse
     */
    async queryRbacRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryRbacRoleWithOptions(request, runtime);
    }
    /**
     * Queries the role permission list.
     *
     * @remarks
     * The API operation to create an AI session for Wanxiaozhi 2.0.
     *
     * @param request - QueryRbacRolePermissionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacRolePermissionsResponse
     */
    async queryRbacRolePermissionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.roleId)) {
            query["RoleId"] = request.roleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryRbacRolePermissions",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryRbacRolePermissionsResponse({}));
    }
    /**
     * Queries the role permission list.
     *
     * @remarks
     * The API operation to create an AI session for Wanxiaozhi 2.0.
     *
     * @param request - QueryRbacRolePermissionsRequest
     * @returns QueryRbacRolePermissionsResponse
     */
    async queryRbacRolePermissions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryRbacRolePermissionsWithOptions(request, runtime);
    }
    /**
     * Queries user role bindings.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - QueryRbacUserRolesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QueryRbacUserRolesResponse
     */
    async queryRbacUserRolesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.applicationUserId)) {
            query["ApplicationUserId"] = request.applicationUserId;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QueryRbacUserRoles",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QueryRbacUserRolesResponse({}));
    }
    /**
     * Queries user role bindings.
     *
     * @remarks
     * Queries application instance information.
     *
     * @param request - QueryRbacUserRolesRequest
     * @returns QueryRbacUserRolesResponse
     */
    async queryRbacUserRoles(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.queryRbacUserRolesWithOptions(request, runtime);
    }
    /**
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @remarks
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @param request - QuerySupabaseAuthConfigsForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseAuthConfigsForAdminResponse
     */
    async querySupabaseAuthConfigsForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authType)) {
            query["AuthType"] = request.authType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QuerySupabaseAuthConfigsForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QuerySupabaseAuthConfigsForAdminResponse({}));
    }
    /**
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @remarks
     * Queries the authentication configuration of the Supabase instance associated with the resource.
     *
     * @param request - QuerySupabaseAuthConfigsForAdminRequest
     * @returns QuerySupabaseAuthConfigsForAdminResponse
     */
    async querySupabaseAuthConfigsForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.querySupabaseAuthConfigsForAdminWithOptions(request, runtime);
    }
    /**
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseConfigsForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseConfigsForAdminResponse
     */
    async querySupabaseConfigsForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QuerySupabaseConfigsForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QuerySupabaseConfigsForAdminResponse({}));
    }
    /**
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the configuration information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseConfigsForAdminRequest
     * @returns QuerySupabaseConfigsForAdminResponse
     */
    async querySupabaseConfigsForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.querySupabaseConfigsForAdminWithOptions(request, runtime);
    }
    /**
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseInstanceInfoForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns QuerySupabaseInstanceInfoForAdminResponse
     */
    async querySupabaseInstanceInfoForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.env)) {
            query["Env"] = request.env;
        }
        if (!$dara.isNull(request.orderColumn)) {
            query["OrderColumn"] = request.orderColumn;
        }
        if (!$dara.isNull(request.orderType)) {
            query["OrderType"] = request.orderType;
        }
        if (!$dara.isNull(request.pageNum)) {
            query["PageNum"] = request.pageNum;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "QuerySupabaseInstanceInfoForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.QuerySupabaseInstanceInfoForAdminResponse({}));
    }
    /**
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @remarks
     * Queries the information of the Supabase instance associated with a resource.
     *
     * @param request - QuerySupabaseInstanceInfoForAdminRequest
     * @returns QuerySupabaseInstanceInfoForAdminResponse
     */
    async querySupabaseInstanceInfoForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.querySupabaseInstanceInfoForAdminWithOptions(request, runtime);
    }
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReconnectAppChatResponse
     */
    reconnectAppChatWithSSE(request, runtime) {
        return __asyncGenerator(this, arguments, function* reconnectAppChatWithSSE_1() {
            var _a, e_2, _b, _c;
            request.validate();
            let body = {};
            if (!$dara.isNull(request.chatId)) {
                body["ChatId"] = request.chatId;
            }
            if (!$dara.isNull(request.conversationId)) {
                body["ConversationId"] = request.conversationId;
            }
            if (!$dara.isNull(request.lastEventId)) {
                body["LastEventId"] = request.lastEventId;
            }
            if (!$dara.isNull(request.latestMessageCreateTime)) {
                body["LatestMessageCreateTime"] = request.latestMessageCreateTime;
            }
            let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
                body: openapi_core_2.OpenApiUtil.parseToMap(body),
            });
            let params = new openapi_core_2.$OpenApiUtil.Params({
                action: "ReconnectAppChat",
                version: "2025-04-29",
                protocol: "HTTPS",
                pathname: "/",
                method: "POST",
                authType: "AK",
                style: "RPC",
                reqBodyType: "formData",
                bodyType: "string",
            });
            let sseResp = yield __await(this.callSSEApi(params, req, runtime));
            try {
                for (var _d = true, sseResp_2 = __asyncValues(sseResp), sseResp_2_1; sseResp_2_1 = yield __await(sseResp_2.next()), _a = sseResp_2_1.done, !_a; _d = true) {
                    _c = sseResp_2_1.value;
                    _d = false;
                    let resp = _c;
                    if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
                        let data = resp.event.data;
                        yield yield __await($dara.cast({
                            statusCode: resp.statusCode,
                            headers: resp.headers,
                            id: resp.event.id,
                            event: resp.event.event,
                            body: data,
                        }, new $_model.ReconnectAppChatResponse({})));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = sseResp_2.return)) yield __await(_b.call(sseResp_2));
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    }
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReconnectAppChatResponse
     */
    async reconnectAppChatWithOptions(request, runtime) {
        request.validate();
        let body = {};
        if (!$dara.isNull(request.chatId)) {
            body["ChatId"] = request.chatId;
        }
        if (!$dara.isNull(request.conversationId)) {
            body["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.lastEventId)) {
            body["LastEventId"] = request.lastEventId;
        }
        if (!$dara.isNull(request.latestMessageCreateTime)) {
            body["LatestMessageCreateTime"] = request.latestMessageCreateTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ReconnectAppChat",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "string",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ReconnectAppChatResponse({}));
    }
    /**
     * Reconnects to an AI conversation.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - ReconnectAppChatRequest
     * @returns ReconnectAppChatResponse
     */
    async reconnectAppChat(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.reconnectAppChatWithOptions(request, runtime);
    }
    /**
     * Refreshes the password-free login ticket for a website building instance.
     *
     * @param request - RefreshAppInstanceTicketRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefreshAppInstanceTicketResponse
     */
    async refreshAppInstanceTicketWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.token)) {
            query["Token"] = request.token;
        }
        if (!$dara.isNull(request.uuid)) {
            query["Uuid"] = request.uuid;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RefreshAppInstanceTicket",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RefreshAppInstanceTicketResponse({}));
    }
    /**
     * Refreshes the password-free login ticket for a website building instance.
     *
     * @param request - RefreshAppInstanceTicketRequest
     * @returns RefreshAppInstanceTicketResponse
     */
    async refreshAppInstanceTicket(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.refreshAppInstanceTicketWithOptions(request, runtime);
    }
    /**
     * Processes a refund for a channel partner website building service.
     *
     * @param request - RefundAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RefundAppInstanceForPartnerResponse
     */
    async refundAppInstanceForPartnerWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.refundReason)) {
            query["RefundReason"] = request.refundReason;
        }
        if (!$dara.isNull(request.userId)) {
            query["UserId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RefundAppInstanceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RefundAppInstanceForPartnerResponse({}));
    }
    /**
     * Processes a refund for a channel partner website building service.
     *
     * @param request - RefundAppInstanceForPartnerRequest
     * @returns RefundAppInstanceForPartnerResponse
     */
    async refundAppInstanceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.refundAppInstanceForPartnerWithOptions(request, runtime);
    }
    /**
     * Removes the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - RemoveRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveRbacRoleHierarchyResponse
     */
    async removeRbacRoleHierarchyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.childRoleId)) {
            query["ChildRoleId"] = request.childRoleId;
        }
        if (!$dara.isNull(request.parentRoleId)) {
            query["ParentRoleId"] = request.parentRoleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RemoveRbacRoleHierarchy",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RemoveRbacRoleHierarchyResponse({}));
    }
    /**
     * Removes the RBAC role hierarchy.
     *
     * @remarks
     * Queries the application instance information.
     *
     * @param request - RemoveRbacRoleHierarchyRequest
     * @returns RemoveRbacRoleHierarchyResponse
     */
    async removeRbacRoleHierarchy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.removeRbacRoleHierarchyWithOptions(request, runtime);
    }
    /**
     * Renews a website builder application instance.
     *
     * @param request - RenewAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewAppInstanceResponse
     */
    async renewAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.duration)) {
            query["Duration"] = request.duration;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.pricingCycle)) {
            query["PricingCycle"] = request.pricingCycle;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RenewAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RenewAppInstanceResponse({}));
    }
    /**
     * Renews a website builder application instance.
     *
     * @param request - RenewAppInstanceRequest
     * @returns RenewAppInstanceResponse
     */
    async renewAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.renewAppInstanceWithOptions(request, runtime);
    }
    /**
     * Renews or refreshes a sandbox environment.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RenewAppSandboxRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenewAppSandboxResponse
     */
    async renewAppSandboxWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RenewAppSandbox",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RenewAppSandboxResponse({}));
    }
    /**
     * Renews or refreshes a sandbox environment.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RenewAppSandboxRequest
     * @returns RenewAppSandboxResponse
     */
    async renewAppSandbox(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.renewAppSandboxWithOptions(request, runtime);
    }
    /**
     * Reports the publishing result.
     *
     * @remarks
     * Reports the publishing result.
     *
     * @param request - ReportChannelPublishResultRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ReportChannelPublishResultResponse
     */
    async reportChannelPublishResultWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.channelAccountName)) {
            query["ChannelAccountName"] = request.channelAccountName;
        }
        if (!$dara.isNull(request.draftId)) {
            query["DraftId"] = request.draftId;
        }
        if (!$dara.isNull(request.externalId)) {
            query["ExternalId"] = request.externalId;
        }
        if (!$dara.isNull(request.externalUrl)) {
            query["ExternalUrl"] = request.externalUrl;
        }
        if (!$dara.isNull(request.failReason)) {
            query["FailReason"] = request.failReason;
        }
        if (!$dara.isNull(request.success)) {
            query["Success"] = request.success;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ReportChannelPublishResult",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ReportChannelPublishResultResponse({}));
    }
    /**
     * Reports the publishing result.
     *
     * @remarks
     * Reports the publishing result.
     *
     * @param request - ReportChannelPublishResultRequest
     * @returns ReportChannelPublishResultResponse
     */
    async reportChannelPublishResult(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.reportChannelPublishResultWithOptions(request, runtime);
    }
    /**
     * Retries a publish operation.
     *
     * @remarks
     * Retries a publish operation.
     *
     * @param request - RetryChannelPublishRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryChannelPublishResponse
     */
    async retryChannelPublishWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.draftId)) {
            query["DraftId"] = request.draftId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RetryChannelPublish",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RetryChannelPublishResponse({}));
    }
    /**
     * Retries a publish operation.
     *
     * @remarks
     * Retries a publish operation.
     *
     * @param request - RetryChannelPublishRequest
     * @returns RetryChannelPublishResponse
     */
    async retryChannelPublish(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.retryChannelPublishWithOptions(request, runtime);
    }
    /**
     * Revokes a user role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - RevokeRbacUserRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeRbacUserRoleResponse
     */
    async revokeRbacUserRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.userRoleData)) {
            query["UserRoleData"] = request.userRoleData;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RevokeRbacUserRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RevokeRbacUserRoleResponse({}));
    }
    /**
     * Revokes a user role.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - RevokeRbacUserRoleRequest
     * @returns RevokeRbacUserRoleResponse
     */
    async revokeRbacUserRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.revokeRbacUserRoleWithOptions(request, runtime);
    }
    /**
     * Rewrites a channel title using AI.
     *
     * @remarks
     * Rewrites a channel title.
     *
     * @param request - RewriteChannelTitleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RewriteChannelTitleResponse
     */
    async rewriteChannelTitleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.draftId)) {
            query["DraftId"] = request.draftId;
        }
        if (!$dara.isNull(request.userRequirement)) {
            query["UserRequirement"] = request.userRequirement;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RewriteChannelTitle",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RewriteChannelTitleResponse({}));
    }
    /**
     * Rewrites a channel title using AI.
     *
     * @remarks
     * Rewrites a channel title.
     *
     * @param request - RewriteChannelTitleRequest
     * @returns RewriteChannelTitleResponse
     */
    async rewriteChannelTitle(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.rewriteChannelTitleWithOptions(request, runtime);
    }
    /**
     * Rolls back a code snapshot.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RollbackAppCodeSnapshotRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppCodeSnapshotResponse
     */
    async rollbackAppCodeSnapshotWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.siteId)) {
            query["SiteId"] = request.siteId;
        }
        if (!$dara.isNull(request.targetLogicalNumber)) {
            query["TargetLogicalNumber"] = request.targetLogicalNumber;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RollbackAppCodeSnapshot",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RollbackAppCodeSnapshotResponse({}));
    }
    /**
     * Rolls back a code snapshot.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - RollbackAppCodeSnapshotRequest
     * @returns RollbackAppCodeSnapshotResponse
     */
    async rollbackAppCodeSnapshot(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.rollbackAppCodeSnapshotWithOptions(request, runtime);
    }
    /**
     * Rolls back the release of an application instance.
     *
     * @remarks
     * Queries the details of an application instance.
     *
     * @param request - RollbackAppInstancePublishRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppInstancePublishResponse
     */
    async rollbackAppInstancePublishWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.deployChannel)) {
            query["DeployChannel"] = request.deployChannel;
        }
        if (!$dara.isNull(request.publishNumber)) {
            query["PublishNumber"] = request.publishNumber;
        }
        if (!$dara.isNull(request.quickRollback)) {
            query["QuickRollback"] = request.quickRollback;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RollbackAppInstancePublish",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RollbackAppInstancePublishResponse({}));
    }
    /**
     * Rolls back the release of an application instance.
     *
     * @remarks
     * Queries the details of an application instance.
     *
     * @param request - RollbackAppInstancePublishRequest
     * @returns RollbackAppInstancePublishResponse
     */
    async rollbackAppInstancePublish(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.rollbackAppInstancePublishWithOptions(request, runtime);
    }
    /**
     * Rolls back the version of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - RollbackAppPluginVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RollbackAppPluginVersionResponse
     */
    async rollbackAppPluginVersionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RollbackAppPluginVersion",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RollbackAppPluginVersionResponse({}));
    }
    /**
     * Rolls back the version of an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - RollbackAppPluginVersionRequest
     * @returns RollbackAppPluginVersionResponse
     */
    async rollbackAppPluginVersion(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.rollbackAppPluginVersionWithOptions(request, runtime);
    }
    /**
     * Save Requirement
     *
     * @remarks
     * Get code generation plugin configuration information
     *
     * @param request - SaveAppRequirementRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveAppRequirementResponse
     */
    async saveAppRequirementWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        let body = {};
        if (!$dara.isNull(request.prd)) {
            body["Prd"] = request.prd;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SaveAppRequirement",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SaveAppRequirementResponse({}));
    }
    /**
     * Save Requirement
     *
     * @remarks
     * Get code generation plugin configuration information
     *
     * @param request - SaveAppRequirementRequest
     * @returns SaveAppRequirementResponse
     */
    async saveAppRequirement(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.saveAppRequirementWithOptions(request, runtime);
    }
    /**
     * Saves Supabase secrets.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - SaveAppSupabaseSecretsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveAppSupabaseSecretsResponse
     */
    async saveAppSupabaseSecretsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.secretsJson)) {
            query["SecretsJson"] = request.secretsJson;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SaveAppSupabaseSecrets",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SaveAppSupabaseSecretsResponse({}));
    }
    /**
     * Saves Supabase secrets.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - SaveAppSupabaseSecretsRequest
     * @returns SaveAppSupabaseSecretsResponse
     */
    async saveAppSupabaseSecrets(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.saveAppSupabaseSecretsWithOptions(request, runtime);
    }
    /**
     * Saves a channel draft.
     *
     * @remarks
     * Saves a channel draft.
     *
     * @param tmpReq - SaveChannelDraftRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SaveChannelDraftResponse
     */
    async saveChannelDraftWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.SaveChannelDraftShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.coverImages)) {
            request.coverImagesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.coverImages, "CoverImages", "json");
        }
        let query = {};
        if (!$dara.isNull(request.adaptedContent)) {
            query["AdaptedContent"] = request.adaptedContent;
        }
        if (!$dara.isNull(request.adaptedTitle)) {
            query["AdaptedTitle"] = request.adaptedTitle;
        }
        if (!$dara.isNull(request.channelAccountName)) {
            query["ChannelAccountName"] = request.channelAccountName;
        }
        if (!$dara.isNull(request.coverImagesShrink)) {
            query["CoverImages"] = request.coverImagesShrink;
        }
        if (!$dara.isNull(request.draftId)) {
            query["DraftId"] = request.draftId;
        }
        if (!$dara.isNull(request.websiteNavName)) {
            query["WebsiteNavName"] = request.websiteNavName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SaveChannelDraft",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SaveChannelDraftResponse({}));
    }
    /**
     * Saves a channel draft.
     *
     * @remarks
     * Saves a channel draft.
     *
     * @param request - SaveChannelDraftRequest
     * @returns SaveChannelDraftResponse
     */
    async saveChannelDraft(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.saveChannelDraftWithOptions(request, runtime);
    }
    /**
     * Searches for images.
     *
     * @param tmpReq - SearchImageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchImageResponse
     */
    async searchImageWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.SearchImageShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.tags)) {
            request.tagsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "simple");
        }
        let query = {};
        if (!$dara.isNull(request.colorHex)) {
            query["ColorHex"] = request.colorHex;
        }
        if (!$dara.isNull(request.hasPerson)) {
            query["HasPerson"] = request.hasPerson;
        }
        if (!$dara.isNull(request.imageCategory)) {
            query["ImageCategory"] = request.imageCategory;
        }
        if (!$dara.isNull(request.imageRatio)) {
            query["ImageRatio"] = request.imageRatio;
        }
        if (!$dara.isNull(request.maxHeight)) {
            query["MaxHeight"] = request.maxHeight;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.maxWidth)) {
            query["MaxWidth"] = request.maxWidth;
        }
        if (!$dara.isNull(request.minHeight)) {
            query["MinHeight"] = request.minHeight;
        }
        if (!$dara.isNull(request.minWidth)) {
            query["MinWidth"] = request.minWidth;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.ossKey)) {
            query["OssKey"] = request.ossKey;
        }
        if (!$dara.isNull(request.size)) {
            query["Size"] = request.size;
        }
        if (!$dara.isNull(request.start)) {
            query["Start"] = request.start;
        }
        if (!$dara.isNull(request.tagsShrink)) {
            query["Tags"] = request.tagsShrink;
        }
        if (!$dara.isNull(request.text)) {
            query["Text"] = request.text;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SearchImage",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SearchImageResponse({}));
    }
    /**
     * Searches for images.
     *
     * @param request - SearchImageRequest
     * @returns SearchImageResponse
     */
    async searchImage(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.searchImageWithOptions(request, runtime);
    }
    /**
     * Sets the SSL certificate for a website.
     *
     * @param request - SetAppDomainCertificateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetAppDomainCertificateResponse
     */
    async setAppDomainCertificateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.certificateName)) {
            query["CertificateName"] = request.certificateName;
        }
        if (!$dara.isNull(request.certificateType)) {
            query["CertificateType"] = request.certificateType;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        if (!$dara.isNull(request.privateKey)) {
            query["PrivateKey"] = request.privateKey;
        }
        if (!$dara.isNull(request.publicKey)) {
            query["PublicKey"] = request.publicKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetAppDomainCertificate",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetAppDomainCertificateResponse({}));
    }
    /**
     * Sets the SSL certificate for a website.
     *
     * @param request - SetAppDomainCertificateRequest
     * @returns SetAppDomainCertificateResponse
     */
    async setAppDomainCertificate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setAppDomainCertificateWithOptions(request, runtime);
    }
    /**
     * Sets the RBAC role hierarchy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - SetRbacRoleHierarchyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SetRbacRoleHierarchyResponse
     */
    async setRbacRoleHierarchyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.childRoleId)) {
            query["ChildRoleId"] = request.childRoleId;
        }
        if (!$dara.isNull(request.parentRoleId)) {
            query["ParentRoleId"] = request.parentRoleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SetRbacRoleHierarchy",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetRbacRoleHierarchyResponse({}));
    }
    /**
     * Sets the RBAC role hierarchy.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - SetRbacRoleHierarchyRequest
     * @returns SetRbacRoleHierarchyResponse
     */
    async setRbacRoleHierarchy(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setRbacRoleHierarchyWithOptions(request, runtime);
    }
    /**
     * Submits an SEO index.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - SubmitAppSeoIndexRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitAppSeoIndexResponse
     */
    async submitAppSeoIndexWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.seType)) {
            query["SeType"] = request.seType;
        }
        if (!$dara.isNull(request.submitLater)) {
            query["SubmitLater"] = request.submitLater;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SubmitAppSeoIndex",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SubmitAppSeoIndexResponse({}));
    }
    /**
     * Submits an SEO index.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - SubmitAppSeoIndexRequest
     * @returns SubmitAppSeoIndexResponse
     */
    async submitAppSeoIndex(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.submitAppSeoIndexWithOptions(request, runtime);
    }
    /**
     * Submits a material generation task.
     *
     * @remarks
     * Submits a material generation task.
     *
     * @param request - SubmitMaterialTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitMaterialTaskResponse
     */
    async submitMaterialTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizGroupId)) {
            query["BizGroupId"] = request.bizGroupId;
        }
        if (!$dara.isNull(request.taskParam)) {
            query["TaskParam"] = request.taskParam;
        }
        if (!$dara.isNull(request.taskType)) {
            query["TaskType"] = request.taskType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SubmitMaterialTask",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SubmitMaterialTaskResponse({}));
    }
    /**
     * Submits a material generation task.
     *
     * @remarks
     * Submits a material generation task.
     *
     * @param request - SubmitMaterialTaskRequest
     * @returns SubmitMaterialTaskResponse
     */
    async submitMaterialTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.submitMaterialTaskWithOptions(request, runtime);
    }
    /**
     * Switches to a specified conversation.
     *
     * @remarks
     * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
     *
     * @param request - SwitchAppConversationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SwitchAppConversationResponse
     */
    async switchAppConversationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.botId)) {
            query["BotId"] = request.botId;
        }
        if (!$dara.isNull(request.taskType)) {
            query["TaskType"] = request.taskType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SwitchAppConversation",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SwitchAppConversationResponse({}));
    }
    /**
     * Switches to a specified conversation.
     *
     * @remarks
     * Creates an AI conversation through the Wanxiaozhi 2.0 interface.
     *
     * @param request - SwitchAppConversationRequest
     * @returns SwitchAppConversationResponse
     */
    async switchAppConversation(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.switchAppConversationWithOptions(request, runtime);
    }
    /**
     * Synchronizes an application instance from a partner.
     *
     * @param tmpReq - SyncAppInstanceForPartnerRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SyncAppInstanceForPartnerResponse
     */
    async syncAppInstanceForPartnerWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.SyncAppInstanceForPartnerShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.appInstance)) {
            request.appInstanceShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appInstance, "AppInstance", "json");
        }
        let query = {};
        if (!$dara.isNull(request.appInstanceShrink)) {
            query["AppInstance"] = request.appInstanceShrink;
        }
        if (!$dara.isNull(request.eventType)) {
            query["EventType"] = request.eventType;
        }
        if (!$dara.isNull(request.operator)) {
            query["Operator"] = request.operator;
        }
        if (!$dara.isNull(request.sourceBizId)) {
            query["SourceBizId"] = request.sourceBizId;
        }
        if (!$dara.isNull(request.sourceType)) {
            query["SourceType"] = request.sourceType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SyncAppInstanceForPartner",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SyncAppInstanceForPartnerResponse({}));
    }
    /**
     * Synchronizes an application instance from a partner.
     *
     * @param request - SyncAppInstanceForPartnerRequest
     * @returns SyncAppInstanceForPartnerResponse
     */
    async syncAppInstanceForPartner(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.syncAppInstanceForPartnerWithOptions(request, runtime);
    }
    /**
     * Translates a channel draft.
     *
     * @remarks
     * Translates a channel draft.
     *
     * @param request - TranslateChannelDraftRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns TranslateChannelDraftResponse
     */
    async translateChannelDraftWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.draftId)) {
            query["DraftId"] = request.draftId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "TranslateChannelDraft",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.TranslateChannelDraftResponse({}));
    }
    /**
     * Translates a channel draft.
     *
     * @remarks
     * Translates a channel draft.
     *
     * @param request - TranslateChannelDraftRequest
     * @returns TranslateChannelDraftResponse
     */
    async translateChannelDraft(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.translateChannelDraftWithOptions(request, runtime);
    }
    /**
     * Unbinds a domain name from a website and deletes the associated DNS records.
     *
     * @param request - UnbindAppDomainRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UnbindAppDomainResponse
     */
    async unbindAppDomainWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domainName)) {
            query["DomainName"] = request.domainName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UnbindAppDomain",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UnbindAppDomainResponse({}));
    }
    /**
     * Unbinds a domain name from a website and deletes the associated DNS records.
     *
     * @param request - UnbindAppDomainRequest
     * @returns UnbindAppDomainResponse
     */
    async unbindAppDomain(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.unbindAppDomainWithOptions(request, runtime);
    }
    /**
     * Uninstalls an application plug-in from the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UninstallAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UninstallAppPluginResponse
     */
    async uninstallAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UninstallAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UninstallAppPluginResponse({}));
    }
    /**
     * Uninstalls an application plug-in from the current user account.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UninstallAppPluginRequest
     * @returns UninstallAppPluginResponse
     */
    async uninstallAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.uninstallAppPluginWithOptions(request, runtime);
    }
    /**
     * Updates the message content.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - UpdateAppChatMessageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppChatMessageResponse
     */
    async updateAppChatMessageWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.addedMetaData)) {
            query["AddedMetaData"] = request.addedMetaData;
        }
        if (!$dara.isNull(request.content)) {
            query["Content"] = request.content;
        }
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.messageId)) {
            query["MessageId"] = request.messageId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppChatMessage",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppChatMessageResponse({}));
    }
    /**
     * Updates the message content.
     *
     * @remarks
     * Queries the AI conversation history for Wanxiaozhi 2.0.
     *
     * @param request - UpdateAppChatMessageRequest
     * @returns UpdateAppChatMessageResponse
     */
    async updateAppChatMessage(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppChatMessageWithOptions(request, runtime);
    }
    /**
     * Edits JSX code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateAppCodeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppCodeResponse
     */
    async updateAppCodeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.content)) {
            query["Content"] = request.content;
        }
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppCode",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppCodeResponse({}));
    }
    /**
     * Edits JSX code.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateAppCodeRequest
     * @returns UpdateAppCodeResponse
     */
    async updateAppCode(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppCodeWithOptions(request, runtime);
    }
    /**
     * Updates a file.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppFileResponse
     */
    async updateAppFileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.content)) {
            query["Content"] = request.content;
        }
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.filePath)) {
            query["FilePath"] = request.filePath;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppFileResponse({}));
    }
    /**
     * Updates a file.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppFileRequest
     * @returns UpdateAppFileResponse
     */
    async updateAppFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppFileWithOptions(request, runtime);
    }
    /**
     * Changes the specifications of a website building instance.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param tmpReq - UpdateAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppInstanceResponse
     */
    async updateAppInstanceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateAppInstanceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.tags)) {
            request.tagsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
        }
        let query = {};
        if (!$dara.isNull(request.applicationType)) {
            query["ApplicationType"] = request.applicationType;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.deployArea)) {
            query["DeployArea"] = request.deployArea;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.iconUrl)) {
            query["IconUrl"] = request.iconUrl;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.paymentType)) {
            query["PaymentType"] = request.paymentType;
        }
        if (!$dara.isNull(request.siteVersion)) {
            query["SiteVersion"] = request.siteVersion;
        }
        if (!$dara.isNull(request.thumbnailUrl)) {
            query["ThumbnailUrl"] = request.thumbnailUrl;
        }
        let body = {};
        if (!$dara.isNull(request.resourceGroupId)) {
            body["ResourceGroupId"] = request.resourceGroupId;
        }
        if (!$dara.isNull(request.tagsShrink)) {
            body["Tags"] = request.tagsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppInstance",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppInstanceResponse({}));
    }
    /**
     * Changes the specifications of a website building instance.
     *
     * @remarks
     * Queries the information of an application instance.
     *
     * @param request - UpdateAppInstanceRequest
     * @returns UpdateAppInstanceResponse
     */
    async updateAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppInstanceWithOptions(request, runtime);
    }
    /**
     * Updates an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppPluginRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppPluginResponse
     */
    async updateAppPluginWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.category)) {
            query["Category"] = request.category;
        }
        if (!$dara.isNull(request.configItems)) {
            query["ConfigItems"] = request.configItems;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.hooks)) {
            query["Hooks"] = request.hooks;
        }
        if (!$dara.isNull(request.icon)) {
            query["Icon"] = request.icon;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginName)) {
            query["PluginName"] = request.pluginName;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        if (!$dara.isNull(request.skillHeader)) {
            query["SkillHeader"] = request.skillHeader;
        }
        if (!$dara.isNull(request.tags)) {
            query["Tags"] = request.tags;
        }
        if (!$dara.isNull(request.visibility)) {
            query["Visibility"] = request.visibility;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppPlugin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppPluginResponse({}));
    }
    /**
     * Updates an application plugin.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateAppPluginRequest
     * @returns UpdateAppPluginResponse
     */
    async updateAppPlugin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppPluginWithOptions(request, runtime);
    }
    /**
     * Updates the SEO index status.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - UpdateAppSeoStatusRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSeoStatusResponse
     */
    async updateAppSeoStatusWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.seAuthInfo)) {
            query["SeAuthInfo"] = request.seAuthInfo;
        }
        if (!$dara.isNull(request.seIndexStatus)) {
            query["SeIndexStatus"] = request.seIndexStatus;
        }
        if (!$dara.isNull(request.seType)) {
            query["SeType"] = request.seType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppSeoStatus",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppSeoStatusResponse({}));
    }
    /**
     * Updates the SEO index status.
     *
     * @remarks
     * Wanxiaozhi 2.0 AI conversation.
     *
     * @param request - UpdateAppSeoStatusRequest
     * @returns UpdateAppSeoStatusResponse
     */
    async updateAppSeoStatus(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppSeoStatusWithOptions(request, runtime);
    }
    /**
     * Updates the Supabase authentication configuration.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information corresponding to a resource.
     *
     * @param request - UpdateAppSupabaseAuthConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSupabaseAuthConfigResponse
     */
    async updateAppSupabaseAuthConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.configsJson)) {
            query["ConfigsJson"] = request.configsJson;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppSupabaseAuthConfig",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppSupabaseAuthConfigResponse({}));
    }
    /**
     * Updates the Supabase authentication configuration.
     *
     * @remarks
     * Queries the Supabase instance authentication configuration information corresponding to a resource.
     *
     * @param request - UpdateAppSupabaseAuthConfigRequest
     * @returns UpdateAppSupabaseAuthConfigResponse
     */
    async updateAppSupabaseAuthConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppSupabaseAuthConfigWithOptions(request, runtime);
    }
    /**
     * Updates a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - UpdateAppSupabaseSecretRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAppSupabaseSecretResponse
     */
    async updateAppSupabaseSecretWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.secretKey)) {
            query["SecretKey"] = request.secretKey;
        }
        if (!$dara.isNull(request.secretName)) {
            query["SecretName"] = request.secretName;
        }
        if (!$dara.isNull(request.secretType)) {
            query["SecretType"] = request.secretType;
        }
        if (!$dara.isNull(request.secretValue)) {
            query["SecretValue"] = request.secretValue;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAppSupabaseSecret",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAppSupabaseSecretResponse({}));
    }
    /**
     * Updates a Supabase key.
     *
     * @remarks
     * The Supabase instance information corresponding to the operated resource.
     *
     * @param request - UpdateAppSupabaseSecretRequest
     * @returns UpdateAppSupabaseSecretResponse
     */
    async updateAppSupabaseSecret(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateAppSupabaseSecretWithOptions(request, runtime);
    }
    /**
     * Updates the binding information for a mini program.
     *
     * @param request - UpdateMiniAppBindingRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMiniAppBindingResponse
     */
    async updateMiniAppBindingWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.channel)) {
            query["Channel"] = request.channel;
        }
        if (!$dara.isNull(request.settingKey)) {
            query["SettingKey"] = request.settingKey;
        }
        if (!$dara.isNull(request.settingValue)) {
            query["SettingValue"] = request.settingValue;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMiniAppBinding",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMiniAppBindingResponse({}));
    }
    /**
     * Updates the binding information for a mini program.
     *
     * @param request - UpdateMiniAppBindingRequest
     * @returns UpdateMiniAppBindingResponse
     */
    async updateMiniAppBinding(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateMiniAppBindingWithOptions(request, runtime);
    }
    /**
     * Updates an organizational unit.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateRbacOrgUnitRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateRbacOrgUnitResponse
     */
    async updateRbacOrgUnitWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.orgUnitData)) {
            query["OrgUnitData"] = request.orgUnitData;
        }
        if (!$dara.isNull(request.orgUnitId)) {
            query["OrgUnitId"] = request.orgUnitId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateRbacOrgUnit",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateRbacOrgUnitResponse({}));
    }
    /**
     * Updates an organizational unit.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UpdateRbacOrgUnitRequest
     * @returns UpdateRbacOrgUnitResponse
     */
    async updateRbacOrgUnit(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateRbacOrgUnitWithOptions(request, runtime);
    }
    /**
     * Updates the RBAC role.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateRbacRoleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateRbacRoleResponse
     */
    async updateRbacRoleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.roleData)) {
            query["RoleData"] = request.roleData;
        }
        if (!$dara.isNull(request.roleId)) {
            query["RoleId"] = request.roleId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateRbacRole",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateRbacRoleResponse({}));
    }
    /**
     * Updates the RBAC role.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UpdateRbacRoleRequest
     * @returns UpdateRbacRoleResponse
     */
    async updateRbacRole(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateRbacRoleWithOptions(request, runtime);
    }
    /**
     * Uploads an application plugin version.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UploadAppPluginVersionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAppPluginVersionResponse
     */
    async uploadAppPluginVersionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.changelog)) {
            query["Changelog"] = request.changelog;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.downloadUrl)) {
            query["DownloadUrl"] = request.downloadUrl;
        }
        if (!$dara.isNull(request.extend)) {
            query["Extend"] = request.extend;
        }
        if (!$dara.isNull(request.ossKey)) {
            query["OssKey"] = request.ossKey;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.pluginVersion)) {
            query["PluginVersion"] = request.pluginVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadAppPluginVersion",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadAppPluginVersionResponse({}));
    }
    /**
     * Uploads an application plugin version.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plugin.
     *
     * @param request - UploadAppPluginVersionRequest
     * @returns UploadAppPluginVersionResponse
     */
    async uploadAppPluginVersion(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.uploadAppPluginVersionWithOptions(request, runtime);
    }
    /**
     * Uploads a file to the root directory of a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UploadAppSiteValidationFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAppSiteValidationFileResponse
     */
    async uploadAppSiteValidationFileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.domain)) {
            query["Domain"] = request.domain;
        }
        if (!$dara.isNull(request.file)) {
            query["File"] = request.file;
        }
        if (!$dara.isNull(request.fileContent)) {
            query["FileContent"] = request.fileContent;
        }
        if (!$dara.isNull(request.fileType)) {
            query["FileType"] = request.fileType;
        }
        if (!$dara.isNull(request.siteHost)) {
            query["SiteHost"] = request.siteHost;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadAppSiteValidationFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadAppSiteValidationFileResponse({}));
    }
    /**
     * Uploads a file to the root directory of a site.
     *
     * @remarks
     * Retrieves the configuration information of the code generation plug-in.
     *
     * @param request - UploadAppSiteValidationFileRequest
     * @returns UploadAppSiteValidationFileResponse
     */
    async uploadAppSiteValidationFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.uploadAppSiteValidationFileWithOptions(request, runtime);
    }
    /**
     * Uploads an asset file.
     *
     * @remarks
     * The Supabase instance information corresponding to the resource.
     *
     * @param request - UploadMaterialFileRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadMaterialFileResponse
     */
    async uploadMaterialFileWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.directoryId)) {
            query["DirectoryId"] = request.directoryId;
        }
        if (!$dara.isNull(request.fileUrl)) {
            query["FileUrl"] = request.fileUrl;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.ossKey)) {
            query["OssKey"] = request.ossKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadMaterialFile",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadMaterialFileResponse({}));
    }
    /**
     * Uploads an asset file.
     *
     * @remarks
     * The Supabase instance information corresponding to the resource.
     *
     * @param request - UploadMaterialFileRequest
     * @returns UploadMaterialFileResponse
     */
    async uploadMaterialFile(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.uploadMaterialFileWithOptions(request, runtime);
    }
    /**
     * Uploads a material file as an administrator (AI-generated).
     *
     * @remarks
     * The Supabase instance information corresponding to the operation resource.
     *
     * @param request - UploadMaterialFileForAdminRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadMaterialFileForAdminResponse
     */
    async uploadMaterialFileForAdminWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.belongId)) {
            query["BelongId"] = request.belongId;
        }
        if (!$dara.isNull(request.bizId)) {
            query["BizId"] = request.bizId;
        }
        if (!$dara.isNull(request.fileUrl)) {
            query["FileUrl"] = request.fileUrl;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadMaterialFileForAdmin",
            version: "2025-04-29",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadMaterialFileForAdminResponse({}));
    }
    /**
     * Uploads a material file as an administrator (AI-generated).
     *
     * @remarks
     * The Supabase instance information corresponding to the operation resource.
     *
     * @param request - UploadMaterialFileForAdminRequest
     * @returns UploadMaterialFileForAdminResponse
     */
    async uploadMaterialFileForAdmin(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.uploadMaterialFileForAdminWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map