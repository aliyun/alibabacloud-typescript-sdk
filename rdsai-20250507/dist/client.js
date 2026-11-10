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
        this._productId = "RdsAi";
        let gatewayClient = new gateway_pop_1.default();
        this._spi = gatewayClient;
        this._endpointRule = "regional";
        this._endpointMap = {
            'cn-wulanchabu': "rdsai.aliyuncs.com",
            'cn-beijing': "rdsai.aliyuncs.com",
            'cn-shanghai': "rdsai.aliyuncs.com",
            'cn-hangzhou': "rdsai.aliyuncs.com",
        };
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("rdsai", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
     * Adds an exclusion item to an import task.
     *
     * @remarks
     * Adds a job exclusion item.
     *
     * @param request - AddContextDatabaseSyncJobExclusionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddContextDatabaseSyncJobExclusionResponse
     */
    async addContextDatabaseSyncJobExclusionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.documentId)) {
            query["DocumentId"] = request.documentId;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AddContextDatabaseSyncJobExclusion",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AddContextDatabaseSyncJobExclusionResponse({}));
    }
    /**
     * Adds an exclusion item to an import task.
     *
     * @remarks
     * Adds a job exclusion item.
     *
     * @param request - AddContextDatabaseSyncJobExclusionRequest
     * @returns AddContextDatabaseSyncJobExclusionResponse
     */
    async addContextDatabaseSyncJobExclusion(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.addContextDatabaseSyncJobExclusionWithOptions(request, runtime);
    }
    /**
     * Cancels an in-progress discovery task by task ID.
     *
     * @remarks
     * You can specify a ClientToken to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param request - CancelContextDatabaseSyncDiscoveryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelContextDatabaseSyncDiscoveryResponse
     */
    async cancelContextDatabaseSyncDiscoveryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CancelContextDatabaseSyncDiscovery",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CancelContextDatabaseSyncDiscoveryResponse({}));
    }
    /**
     * Cancels an in-progress discovery task by task ID.
     *
     * @remarks
     * You can specify a ClientToken to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param request - CancelContextDatabaseSyncDiscoveryRequest
     * @returns CancelContextDatabaseSyncDiscoveryResponse
     */
    async cancelContextDatabaseSyncDiscovery(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.cancelContextDatabaseSyncDiscoveryWithOptions(request, runtime);
    }
    /**
     * Cancels a run.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically. Cancellation is best-effort. Completed RunItems are not affected.
     *
     * @param request - CancelContextDatabaseSyncRunRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CancelContextDatabaseSyncRunResponse
     */
    async cancelContextDatabaseSyncRunWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.runId)) {
            query["RunId"] = request.runId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CancelContextDatabaseSyncRun",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CancelContextDatabaseSyncRunResponse({}));
    }
    /**
     * Cancels a run.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically. Cancellation is best-effort. Completed RunItems are not affected.
     *
     * @param request - CancelContextDatabaseSyncRunRequest
     * @returns CancelContextDatabaseSyncRunResponse
     */
    async cancelContextDatabaseSyncRun(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.cancelContextDatabaseSyncRunWithOptions(request, runtime);
    }
    /**
     * Sends a conversation message.
     *
     * @param tmpReq - ChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesResponse
     */
    chatMessagesWithSSE(tmpReq, runtime) {
        return __asyncGenerator(this, arguments, function* chatMessagesWithSSE_1() {
            var _a, e_1, _b, _c;
            tmpReq.validate();
            let request = new $_model.ChatMessagesShrinkRequest({});
            openapi_core_2.OpenApiUtil.convert(tmpReq, request);
            if (!$dara.isNull(tmpReq.files)) {
                request.filesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
            }
            if (!$dara.isNull(tmpReq.inputs)) {
                request.inputsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
            }
            let query = {};
            if (!$dara.isNull(request.conversationId)) {
                query["ConversationId"] = request.conversationId;
            }
            if (!$dara.isNull(request.eventMode)) {
                query["EventMode"] = request.eventMode;
            }
            if (!$dara.isNull(request.filesShrink)) {
                query["Files"] = request.filesShrink;
            }
            if (!$dara.isNull(request.inputsShrink)) {
                query["Inputs"] = request.inputsShrink;
            }
            if (!$dara.isNull(request.parentMessageId)) {
                query["ParentMessageId"] = request.parentMessageId;
            }
            if (!$dara.isNull(request.query)) {
                query["Query"] = request.query;
            }
            let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
                query: openapi_core_2.OpenApiUtil.query(query),
            });
            let params = new openapi_core_2.$OpenApiUtil.Params({
                action: "ChatMessages",
                version: "2025-05-07",
                protocol: "HTTPS",
                pathname: "/",
                method: "POST",
                authType: "AK",
                style: "RPC",
                reqBodyType: "formData",
                bodyType: "json",
            });
            let sseResp = yield __await(this.callSSEApi(params, req, runtime));
            try {
                for (var _d = true, sseResp_1 = __asyncValues(sseResp), sseResp_1_1; sseResp_1_1 = yield __await(sseResp_1.next()), _a = sseResp_1_1.done, !_a; _d = true) {
                    _c = sseResp_1_1.value;
                    _d = false;
                    let resp = _c;
                    if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
                        let data = JSON.parse(resp.event.data);
                        yield yield __await($dara.cast({
                            statusCode: resp.statusCode,
                            headers: resp.headers,
                            id: resp.event.id,
                            event: resp.event.event,
                            body: data,
                        }, new $_model.ChatMessagesResponse({})));
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
     * Sends a conversation message.
     *
     * @param tmpReq - ChatMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesResponse
     */
    async chatMessagesWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ChatMessagesShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.files)) {
            request.filesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
        }
        if (!$dara.isNull(tmpReq.inputs)) {
            request.inputsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
        }
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.eventMode)) {
            query["EventMode"] = request.eventMode;
        }
        if (!$dara.isNull(request.filesShrink)) {
            query["Files"] = request.filesShrink;
        }
        if (!$dara.isNull(request.inputsShrink)) {
            query["Inputs"] = request.inputsShrink;
        }
        if (!$dara.isNull(request.parentMessageId)) {
            query["ParentMessageId"] = request.parentMessageId;
        }
        if (!$dara.isNull(request.query)) {
            query["Query"] = request.query;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ChatMessages",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ChatMessagesResponse({}));
    }
    /**
     * Sends a conversation message.
     *
     * @param request - ChatMessagesRequest
     * @returns ChatMessagesResponse
     */
    async chatMessages(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.chatMessagesWithOptions(request, runtime);
    }
    /**
     * Stops a conversation.
     *
     * @param request - ChatMessagesTaskStopRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ChatMessagesTaskStopResponse
     */
    async chatMessagesTaskStopWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ChatMessagesTaskStop",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ChatMessagesTaskStopResponse({}));
    }
    /**
     * Stops a conversation.
     *
     * @param request - ChatMessagesTaskStopRequest
     * @returns ChatMessagesTaskStopResponse
     */
    async chatMessagesTaskStop(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.chatMessagesTaskStopWithOptions(request, runtime);
    }
    /**
     * Creates a custom API key.
     *
     * @remarks
     * ### Applicable engines
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - CreateApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateApiKeyResponse
     */
    async createApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.dailyTokenQuota)) {
            query["DailyTokenQuota"] = request.dailyTokenQuota;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.keyName)) {
            query["KeyName"] = request.keyName;
        }
        if (!$dara.isNull(request.limitRate)) {
            query["LimitRate"] = request.limitRate;
        }
        if (!$dara.isNull(request.limitType)) {
            query["LimitType"] = request.limitType;
        }
        if (!$dara.isNull(request.quantity)) {
            query["Quantity"] = request.quantity;
        }
        if (!$dara.isNull(request.roleArn)) {
            query["RoleArn"] = request.roleArn;
        }
        if (!$dara.isNull(request.roleName)) {
            query["RoleName"] = request.roleName;
        }
        if (!$dara.isNull(request.tokenQuota)) {
            query["TokenQuota"] = request.tokenQuota;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
    }
    /**
     * Creates a custom API key.
     *
     * @remarks
     * ### Applicable engines
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - CreateApiKeyRequest
     * @returns CreateApiKeyResponse
     */
    async createApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createApiKeyWithOptions(request, runtime);
    }
    /**
     * Creates an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you proceed.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - CreateAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAppInstanceResponse
     */
    async createAppInstanceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAppInstanceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.components)) {
            request.componentsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
        }
        if (!$dara.isNull(tmpReq.DBInstanceConfig)) {
            request.DBInstanceConfigShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.DBInstanceConfig, "DBInstanceConfig", "json");
        }
        let query = {};
        if (!$dara.isNull(request.appName)) {
            query["AppName"] = request.appName;
        }
        if (!$dara.isNull(request.appType)) {
            query["AppType"] = request.appType;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.componentsShrink)) {
            query["Components"] = request.componentsShrink;
        }
        if (!$dara.isNull(request.DBInstanceConfigShrink)) {
            query["DBInstanceConfig"] = request.DBInstanceConfigShrink;
        }
        if (!$dara.isNull(request.DBInstanceName)) {
            query["DBInstanceName"] = request.DBInstanceName;
        }
        if (!$dara.isNull(request.dashboardPassword)) {
            query["DashboardPassword"] = request.dashboardPassword;
        }
        if (!$dara.isNull(request.dashboardUsername)) {
            query["DashboardUsername"] = request.dashboardUsername;
        }
        if (!$dara.isNull(request.database)) {
            query["Database"] = request.database;
        }
        if (!$dara.isNull(request.databasePassword)) {
            query["DatabasePassword"] = request.databasePassword;
        }
        if (!$dara.isNull(request.initializeWithExistingData)) {
            query["InitializeWithExistingData"] = request.initializeWithExistingData;
        }
        if (!$dara.isNull(request.instanceClass)) {
            query["InstanceClass"] = request.instanceClass;
        }
        if (!$dara.isNull(request.publicEndpointEnabled)) {
            query["PublicEndpointEnabled"] = request.publicEndpointEnabled;
        }
        if (!$dara.isNull(request.publicNetworkAccessEnabled)) {
            query["PublicNetworkAccessEnabled"] = request.publicNetworkAccessEnabled;
        }
        if (!$dara.isNull(request.RAGEnabled)) {
            query["RAGEnabled"] = request.RAGEnabled;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.vSwitchId)) {
            query["VSwitchId"] = request.vSwitchId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAppInstance",
            version: "2025-05-07",
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
     * Creates an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you proceed.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - CreateAppInstanceRequest
     * @returns CreateAppInstanceResponse
     */
    async createAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createAppInstanceWithOptions(request, runtime);
    }
    /**
     * Creates a context database API key.
     *
     * @remarks
     * Creates an API key and returns the plaintext apiKey.
     *
     * @param request - CreateContextDatabaseApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseApiKeyResponse
     */
    async createContextDatabaseApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseApiKeyResponse({}));
    }
    /**
     * Creates a context database API key.
     *
     * @remarks
     * Creates an API key and returns the plaintext apiKey.
     *
     * @param request - CreateContextDatabaseApiKeyRequest
     * @returns CreateContextDatabaseApiKeyResponse
     */
    async createContextDatabaseApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseApiKeyWithOptions(request, runtime);
    }
    /**
     * Creates a ContextDB member.
     *
     * @remarks
     * Creates a member. If GenerateInitialKey is set to true, the first API key is also issued, and the plaintext ApiKey is returned in the response. This is a sensitive field and is returned only once. Store it securely. After the member is created, you can call the List or Get operation to query the member and the metadata of the API keys under the member.
     *
     * @param request - CreateContextDatabaseMemberRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseMemberResponse
     */
    async createContextDatabaseMemberWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.generateInitialKey)) {
            query["GenerateInitialKey"] = request.generateInitialKey;
        }
        if (!$dara.isNull(request.initialKeyName)) {
            query["InitialKeyName"] = request.initialKeyName;
        }
        if (!$dara.isNull(request.memberName)) {
            query["MemberName"] = request.memberName;
        }
        if (!$dara.isNull(request.role)) {
            query["Role"] = request.role;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseMember",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseMemberResponse({}));
    }
    /**
     * Creates a ContextDB member.
     *
     * @remarks
     * Creates a member. If GenerateInitialKey is set to true, the first API key is also issued, and the plaintext ApiKey is returned in the response. This is a sensitive field and is returned only once. Store it securely. After the member is created, you can call the List or Get operation to query the member and the metadata of the API keys under the member.
     *
     * @param request - CreateContextDatabaseMemberRequest
     * @returns CreateContextDatabaseMemberResponse
     */
    async createContextDatabaseMember(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseMemberWithOptions(request, runtime);
    }
    /**
     * Creates a synchronization connection.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If no ClientToken is provided, the backend automatically generates one. Upon successful creation, the complete information of the created object is returned, including the ID that can be used for subsequent queries or updates.
     *
     * @param request - CreateContextDatabaseSyncConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseSyncConnectionResponse
     */
    async createContextDatabaseSyncConnectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.authKind)) {
            query["AuthKind"] = request.authKind;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.displayName)) {
            query["DisplayName"] = request.displayName;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseSyncConnection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncConnectionResponse({}));
    }
    /**
     * Creates a synchronization connection.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If no ClientToken is provided, the backend automatically generates one. Upon successful creation, the complete information of the created object is returned, including the ID that can be used for subsequent queries or updates.
     *
     * @param request - CreateContextDatabaseSyncConnectionRequest
     * @returns CreateContextDatabaseSyncConnectionResponse
     */
    async createContextDatabaseSyncConnection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseSyncConnectionWithOptions(request, runtime);
    }
    /**
     * Creates an import task.
     *
     * @remarks
     * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically. Target is an implicit concept — you only need to provide KnowledgeBaseId, and the backend automatically creates or matches the Target.
     * On success, the response returns the complete information of the created object. The Id field is active and can be used for subsequent queries or updates.
     *
     * @param tmpReq - CreateContextDatabaseSyncJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseSyncJobResponse
     */
    async createContextDatabaseSyncJobWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateContextDatabaseSyncJobShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.filters)) {
            request.filtersShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.filtersShrink)) {
            query["Filters"] = request.filtersShrink;
        }
        if (!$dara.isNull(request.knowledgeBaseId)) {
            query["KnowledgeBaseId"] = request.knowledgeBaseId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.targetId)) {
            query["TargetId"] = request.targetId;
        }
        if (!$dara.isNull(request.targetKnowledgeBaseId)) {
            query["TargetKnowledgeBaseId"] = request.targetKnowledgeBaseId;
        }
        if (!$dara.isNull(request.targetKnowledgeBaseName)) {
            query["TargetKnowledgeBaseName"] = request.targetKnowledgeBaseName;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseSyncJob",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncJobResponse({}));
    }
    /**
     * Creates an import task.
     *
     * @remarks
     * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically. Target is an implicit concept — you only need to provide KnowledgeBaseId, and the backend automatically creates or matches the Target.
     * On success, the response returns the complete information of the created object. The Id field is active and can be used for subsequent queries or updates.
     *
     * @param request - CreateContextDatabaseSyncJobRequest
     * @returns CreateContextDatabaseSyncJobResponse
     */
    async createContextDatabaseSyncJob(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseSyncJobWithOptions(request, runtime);
    }
    /**
     * Creates a data selection scope.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no token is provided, the backend generates one automatically. After creating a data selection scope, you typically need to call StartContextDatabaseSyncSourceDiscovery to discover available nodes.
     * On success, the response returns the complete information of the created object. The Id field can be used for subsequent queries or updates.
     *
     * @param tmpReq - CreateContextDatabaseSyncSourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseSyncSourceResponse
     */
    async createContextDatabaseSyncSourceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateContextDatabaseSyncSourceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.sourceConfig)) {
            request.sourceConfigShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceConfig, "SourceConfig", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.sourceConfigShrink)) {
            query["SourceConfig"] = request.sourceConfigShrink;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseSyncSource",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseSyncSourceResponse({}));
    }
    /**
     * Creates a data selection scope.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no token is provided, the backend generates one automatically. After creating a data selection scope, you typically need to call StartContextDatabaseSyncSourceDiscovery to discover available nodes.
     * On success, the response returns the complete information of the created object. The Id field can be used for subsequent queries or updates.
     *
     * @param request - CreateContextDatabaseSyncSourceRequest
     * @returns CreateContextDatabaseSyncSourceResponse
     */
    async createContextDatabaseSyncSource(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseSyncSourceWithOptions(request, runtime);
    }
    /**
     * Creates a ContextDB workspace and its first member, and optionally generates an initial API key.
     *
     * @remarks
     * Creates a ContextDB workspace and its first member.
     * - GenerateInitialKey defaults to `true`. An initial API key is generated during creation, and the plaintext key is returned only once. Save the returned key. If set to `false`, no initial API key is generated, and the ApiKeyName and ApiKey fields in the response are empty.
     * - You can use ClusterId to specify the cluster to which the workspace belongs.
     * - You can use PermissionMode to select the compatibility mode or the advanced permission mode. The advanced permission mode can only be selected by the Alibaba Cloud account. It takes effect immediately after the workspace is created and cannot be disabled.
     *
     * @param request - CreateContextDatabaseWorkspaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateContextDatabaseWorkspaceResponse
     */
    async createContextDatabaseWorkspaceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clusterId)) {
            query["ClusterId"] = request.clusterId;
        }
        if (!$dara.isNull(request.generateInitialKey)) {
            query["GenerateInitialKey"] = request.generateInitialKey;
        }
        if (!$dara.isNull(request.memberName)) {
            query["MemberName"] = request.memberName;
        }
        if (!$dara.isNull(request.permissionMode)) {
            query["PermissionMode"] = request.permissionMode;
        }
        if (!$dara.isNull(request.workspaceName)) {
            query["WorkspaceName"] = request.workspaceName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateContextDatabaseWorkspace",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateContextDatabaseWorkspaceResponse({}));
    }
    /**
     * Creates a ContextDB workspace and its first member, and optionally generates an initial API key.
     *
     * @remarks
     * Creates a ContextDB workspace and its first member.
     * - GenerateInitialKey defaults to `true`. An initial API key is generated during creation, and the plaintext key is returned only once. Save the returned key. If set to `false`, no initial API key is generated, and the ApiKeyName and ApiKey fields in the response are empty.
     * - You can use ClusterId to specify the cluster to which the workspace belongs.
     * - You can use PermissionMode to select the compatibility mode or the advanced permission mode. The advanced permission mode can only be selected by the Alibaba Cloud account. It takes effect immediately after the workspace is created and cannot be disabled.
     *
     * @param request - CreateContextDatabaseWorkspaceRequest
     * @returns CreateContextDatabaseWorkspaceResponse
     */
    async createContextDatabaseWorkspace(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createContextDatabaseWorkspaceWithOptions(request, runtime);
    }
    /**
     * Creates a custom agent.
     *
     * @param tmpReq - CreateCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCustomAgentResponse
     */
    async createCustomAgentWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateCustomAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.skillIds)) {
            request.skillIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
        }
        if (!$dara.isNull(tmpReq.tools)) {
            request.toolsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
        }
        let query = {};
        if (!$dara.isNull(request.enableTools)) {
            query["EnableTools"] = request.enableTools;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.skillIdsShrink)) {
            query["SkillIds"] = request.skillIdsShrink;
        }
        if (!$dara.isNull(request.systemPrompt)) {
            query["SystemPrompt"] = request.systemPrompt;
        }
        if (!$dara.isNull(request.toolsShrink)) {
            query["Tools"] = request.toolsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateCustomAgent",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateCustomAgentResponse({}));
    }
    /**
     * Creates a custom agent.
     *
     * @param request - CreateCustomAgentRequest
     * @returns CreateCustomAgentResponse
     */
    async createCustomAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createCustomAgentWithOptions(request, runtime);
    }
    /**
     * Creates a batch instance inspection task.
     *
     * @param request - CreateInspectionTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateInspectionTaskResponse
     */
    async createInspectionTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.inspectionItems)) {
            query["InspectionItems"] = request.inspectionItems;
        }
        if (!$dara.isNull(request.instanceIds)) {
            query["InstanceIds"] = request.instanceIds;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.reportLanguage)) {
            query["ReportLanguage"] = request.reportLanguage;
        }
        if (!$dara.isNull(request.reportRegionId)) {
            query["ReportRegionId"] = request.reportRegionId;
        }
        if (!$dara.isNull(request.reportType)) {
            query["ReportType"] = request.reportType;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateInspectionTask",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateInspectionTaskResponse({}));
    }
    /**
     * Creates a batch instance inspection task.
     *
     * @param request - CreateInspectionTaskRequest
     * @returns CreateInspectionTaskResponse
     */
    async createInspectionTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createInspectionTaskWithOptions(request, runtime);
    }
    /**
     * Triggers an asynchronous export task for MO usage details in CSV format.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - CreateMOUsageDetailExportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMOUsageDetailExportResponse
     */
    async createMOUsageDetailExportWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.model)) {
            query["Model"] = request.model;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.usageType)) {
            query["UsageType"] = request.usageType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateMOUsageDetailExport",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateMOUsageDetailExportResponse({}));
    }
    /**
     * Triggers an asynchronous export task for MO usage details in CSV format.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - CreateMOUsageDetailExportRequest
     * @returns CreateMOUsageDetailExportResponse
     */
    async createMOUsageDetailExport(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createMOUsageDetailExportWithOptions(request, runtime);
    }
    /**
     * Creates a sandbox template.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - CreateSandboxTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSandboxTemplateResponse
     */
    async createSandboxTemplateWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateSandboxTemplateShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.tags)) {
            request.tagsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
        }
        let query = {};
        if (!$dara.isNull(request.defaultCpu)) {
            query["DefaultCpu"] = request.defaultCpu;
        }
        if (!$dara.isNull(request.defaultMemory)) {
            query["DefaultMemory"] = request.defaultMemory;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.image)) {
            query["Image"] = request.image;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.replicas)) {
            query["Replicas"] = request.replicas;
        }
        if (!$dara.isNull(request.tagsShrink)) {
            query["Tags"] = request.tagsShrink;
        }
        if (!$dara.isNull(request.templateName)) {
            query["TemplateName"] = request.templateName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateSandboxTemplate",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateSandboxTemplateResponse({}));
    }
    /**
     * Creates a sandbox template.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - CreateSandboxTemplateRequest
     * @returns CreateSandboxTemplateResponse
     */
    async createSandboxTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createSandboxTemplateWithOptions(request, runtime);
    }
    /**
     * Creates a scheduled inspection configuration for batch instances.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - CreateScheduledTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateScheduledTaskResponse
     */
    async createScheduledTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.frequency)) {
            query["Frequency"] = request.frequency;
        }
        if (!$dara.isNull(request.inspectionItems)) {
            query["InspectionItems"] = request.inspectionItems;
        }
        if (!$dara.isNull(request.instanceIds)) {
            query["InstanceIds"] = request.instanceIds;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.reportLanguage)) {
            query["ReportLanguage"] = request.reportLanguage;
        }
        if (!$dara.isNull(request.reportRegionId)) {
            query["ReportRegionId"] = request.reportRegionId;
        }
        if (!$dara.isNull(request.reportType)) {
            query["ReportType"] = request.reportType;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        if (!$dara.isNull(request.timeRange)) {
            query["TimeRange"] = request.timeRange;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateScheduledTask",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateScheduledTaskResponse({}));
    }
    /**
     * Creates a scheduled inspection configuration for batch instances.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - CreateScheduledTaskRequest
     * @returns CreateScheduledTaskResponse
     */
    async createScheduledTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createScheduledTaskWithOptions(request, runtime);
    }
    /**
     * Creates a user-defined skill.
     *
     * @param tmpReq - CreateSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSkillResponse
     */
    async createSkillWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateSkillShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.content)) {
            request.contentShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
        }
        if (!$dara.isNull(tmpReq.dbtypes)) {
            request.dbtypesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbtypes, "Dbtypes", "json");
        }
        let query = {};
        if (!$dara.isNull(request.contentShrink)) {
            query["Content"] = request.contentShrink;
        }
        if (!$dara.isNull(request.dbtypesShrink)) {
            query["Dbtypes"] = request.dbtypesShrink;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.updateNote)) {
            query["UpdateNote"] = request.updateNote;
        }
        if (!$dara.isNull(request.uploadId)) {
            query["UploadId"] = request.uploadId;
        }
        if (!$dara.isNull(request.uploadToken)) {
            query["UploadToken"] = request.uploadToken;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateSkill",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateSkillResponse({}));
    }
    /**
     * Creates a user-defined skill.
     *
     * @param request - CreateSkillRequest
     * @returns CreateSkillResponse
     */
    async createSkill(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createSkillWithOptions(request, runtime);
    }
    /**
     * Deletes a custom API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DeleteApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteApiKeyResponse
     */
    async deleteApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
    }
    /**
     * Deletes a custom API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DeleteApiKeyRequest
     * @returns DeleteApiKeyResponse
     */
    async deleteApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteApiKeyWithOptions(request, runtime);
    }
    /**
     * Deletes an RDS AI application instance.
     *
     * @remarks
     * ### Applicable DPI engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * >Notice: Deleting an RDS Supabase project does not automatically delete the ApsaraDB RDS for PostgreSQL instance or the Internet NAT gateway that were created along with the project. You must [manual release the instance](https://help.aliyun.com/document_detail/96749.html) and delete the [Internet NAT gateway](https://help.aliyun.com/document_detail/121139.html) and [EIP](https://help.aliyun.com/document_detail/121527.html).
     *
     * @param request - DeleteAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAppInstanceResponse
     */
    async deleteAppInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.deleteDBInstance)) {
            query["DeleteDBInstance"] = request.deleteDBInstance;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAppInstance",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceResponse({}));
    }
    /**
     * Deletes an RDS AI application instance.
     *
     * @remarks
     * ### Applicable DPI engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * >Warning: This API operation incurs fees. Read the related feature documentation carefully before you perform this operation.
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * >Notice: Deleting an RDS Supabase project does not automatically delete the ApsaraDB RDS for PostgreSQL instance or the Internet NAT gateway that were created along with the project. You must [manual release the instance](https://help.aliyun.com/document_detail/96749.html) and delete the [Internet NAT gateway](https://help.aliyun.com/document_detail/121139.html) and [EIP](https://help.aliyun.com/document_detail/121527.html).
     *
     * @param request - DeleteAppInstanceRequest
     * @returns DeleteAppInstanceResponse
     */
    async deleteAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteAppInstanceWithOptions(request, runtime);
    }
    /**
     * Deletes a context database member.
     *
     * @remarks
     * Deletes a member. This is a hard delete and cannot be undone.
     *
     * @param request - DeleteContextDatabaseMemberRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteContextDatabaseMemberResponse
     */
    async deleteContextDatabaseMemberWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteContextDatabaseMember",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseMemberResponse({}));
    }
    /**
     * Deletes a context database member.
     *
     * @remarks
     * Deletes a member. This is a hard delete and cannot be undone.
     *
     * @param request - DeleteContextDatabaseMemberRequest
     * @returns DeleteContextDatabaseMemberResponse
     */
    async deleteContextDatabaseMember(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteContextDatabaseMemberWithOptions(request, runtime);
    }
    /**
     * Deletes a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If you do not specify a ClientToken, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteContextDatabaseSyncConnectionResponse
     */
    async deleteContextDatabaseSyncConnectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteContextDatabaseSyncConnection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncConnectionResponse({}));
    }
    /**
     * Deletes a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotency. If you do not specify a ClientToken, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncConnectionRequest
     * @returns DeleteContextDatabaseSyncConnectionResponse
     */
    async deleteContextDatabaseSyncConnection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteContextDatabaseSyncConnectionWithOptions(request, runtime);
    }
    /**
     * Deletes an import task.
     *
     * @remarks
     * You can provide a ClientToken to ensure idempotency for write operations. If not provided, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteContextDatabaseSyncJobResponse
     */
    async deleteContextDatabaseSyncJobWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteContextDatabaseSyncJob",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncJobResponse({}));
    }
    /**
     * Deletes an import task.
     *
     * @remarks
     * You can provide a ClientToken to ensure idempotency for write operations. If not provided, the backend automatically generates one.
     *
     * @param request - DeleteContextDatabaseSyncJobRequest
     * @returns DeleteContextDatabaseSyncJobResponse
     */
    async deleteContextDatabaseSyncJob(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteContextDatabaseSyncJobWithOptions(request, runtime);
    }
    /**
     * Deletes a data selection scope.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param request - DeleteContextDatabaseSyncSourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteContextDatabaseSyncSourceResponse
     */
    async deleteContextDatabaseSyncSourceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteContextDatabaseSyncSource",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseSyncSourceResponse({}));
    }
    /**
     * Deletes a data selection scope.
     *
     * @remarks
     * Write operations support idempotence through ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param request - DeleteContextDatabaseSyncSourceRequest
     * @returns DeleteContextDatabaseSyncSourceResponse
     */
    async deleteContextDatabaseSyncSource(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteContextDatabaseSyncSourceWithOptions(request, runtime);
    }
    /**
     * Deletes a ContextDB workspace.
     *
     * @remarks
     * Deletes a workspace. This is a hard deletion and cannot be undone. After the workspace is deleted, local metadata is synchronously soft deleted, and the deleted workspace is no longer counted towards the quota.
     *
     * @param request - DeleteContextDatabaseWorkspaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteContextDatabaseWorkspaceResponse
     */
    async deleteContextDatabaseWorkspaceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteContextDatabaseWorkspace",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteContextDatabaseWorkspaceResponse({}));
    }
    /**
     * Deletes a ContextDB workspace.
     *
     * @remarks
     * Deletes a workspace. This is a hard deletion and cannot be undone. After the workspace is deleted, local metadata is synchronously soft deleted, and the deleted workspace is no longer counted towards the quota.
     *
     * @param request - DeleteContextDatabaseWorkspaceRequest
     * @returns DeleteContextDatabaseWorkspaceResponse
     */
    async deleteContextDatabaseWorkspace(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteContextDatabaseWorkspaceWithOptions(request, runtime);
    }
    /**
     * Deletes a dedicated agent created by the user.
     *
     * @param request - DeleteCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCustomAgentResponse
     */
    async deleteCustomAgentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.customAgentId)) {
            query["CustomAgentId"] = request.customAgentId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteCustomAgent",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteCustomAgentResponse({}));
    }
    /**
     * Deletes a dedicated agent created by the user.
     *
     * @param request - DeleteCustomAgentRequest
     * @returns DeleteCustomAgentResponse
     */
    async deleteCustomAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteCustomAgentWithOptions(request, runtime);
    }
    /**
     * Deletes a sandbox template.
     *
     * @remarks
     * ### Supported engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DeleteSandboxTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSandboxTemplateResponse
     */
    async deleteSandboxTemplateWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteSandboxTemplate",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteSandboxTemplateResponse({}));
    }
    /**
     * Deletes a sandbox template.
     *
     * @remarks
     * ### Supported engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DeleteSandboxTemplateRequest
     * @returns DeleteSandboxTemplateResponse
     */
    async deleteSandboxTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteSandboxTemplateWithOptions(request, runtime);
    }
    /**
     * Deletes a specified inspection configuration.
     *
     * @param request - DeleteScheduledTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteScheduledTaskResponse
     */
    async deleteScheduledTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.scheduledId)) {
            query["ScheduledId"] = request.scheduledId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteScheduledTask",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteScheduledTaskResponse({}));
    }
    /**
     * Deletes a specified inspection configuration.
     *
     * @param request - DeleteScheduledTaskRequest
     * @returns DeleteScheduledTaskResponse
     */
    async deleteScheduledTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteScheduledTaskWithOptions(request, runtime);
    }
    /**
     * Deletes a specified Skill.
     *
     * @param request - DeleteSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillResponse
     */
    async deleteSkillWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.skillId)) {
            query["SkillId"] = request.skillId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteSkill",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
    }
    /**
     * Deletes a specified Skill.
     *
     * @param request - DeleteSkillRequest
     * @returns DeleteSkillResponse
     */
    async deleteSkill(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.deleteSkillWithOptions(request, runtime);
    }
    /**
     * Queries the details of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeAppInstanceAttributeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAppInstanceAttributeResponse
     */
    async describeAppInstanceAttributeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeAppInstanceAttribute",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeAppInstanceAttributeResponse({}));
    }
    /**
     * Queries the details of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeAppInstanceAttributeRequest
     * @returns DescribeAppInstanceAttributeResponse
     */
    async describeAppInstanceAttribute(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeAppInstanceAttributeWithOptions(request, runtime);
    }
    /**
     * Queries the list of RDS AI application instances.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeAppInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAppInstancesResponse
     */
    async describeAppInstancesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.appType)) {
            query["AppType"] = request.appType;
        }
        if (!$dara.isNull(request.DBInstanceName)) {
            query["DBInstanceName"] = request.DBInstanceName;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeAppInstances",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeAppInstancesResponse({}));
    }
    /**
     * Queries the list of RDS AI application instances.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeAppInstancesRequest
     * @returns DescribeAppInstancesResponse
     */
    async describeAppInstances(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeAppInstancesWithOptions(request, runtime);
    }
    /**
     * Queries the list of supported sandbox templates.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeCommonSandboxTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeCommonSandboxTemplatesResponse
     */
    async describeCommonSandboxTemplatesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeCommonSandboxTemplates",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeCommonSandboxTemplatesResponse({}));
    }
    /**
     * Queries the list of supported sandbox templates.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeCommonSandboxTemplatesRequest
     * @returns DescribeCommonSandboxTemplatesResponse
     */
    async describeCommonSandboxTemplates(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeCommonSandboxTemplatesWithOptions(request, runtime);
    }
    /**
     * Queries the event list.
     *
     * @param request - DescribeEventsListRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeEventsListResponse
     */
    async describeEventsListWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceIdList)) {
            query["InstanceIdList"] = request.instanceIdList;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeEventsList",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeEventsListResponse({}));
    }
    /**
     * Queries the event list.
     *
     * @param request - DescribeEventsListRequest
     * @returns DescribeEventsListResponse
     */
    async describeEventsList(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeEventsListWithOptions(request, runtime);
    }
    /**
     * Queries the authentication information of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceAuthInfoRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceAuthInfoResponse
     */
    async describeInstanceAuthInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceAuthInfo",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAuthInfoResponse({}));
    }
    /**
     * Queries the authentication information of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceAuthInfoRequest
     * @returns DescribeInstanceAuthInfoResponse
     */
    async describeInstanceAuthInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceAuthInfoWithOptions(request, runtime);
    }
    /**
     * Queries the endpoint information of an RDS AI application instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceEndpointsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceEndpointsResponse
     */
    async describeInstanceEndpointsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceEndpoints",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceEndpointsResponse({}));
    }
    /**
     * Queries the endpoint information of an RDS AI application instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceEndpointsRequest
     * @returns DescribeInstanceEndpointsResponse
     */
    async describeInstanceEndpoints(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceEndpointsWithOptions(request, runtime);
    }
    /**
     * Queries the IP whitelist of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceIpWhitelistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceIpWhitelistResponse
     */
    async describeInstanceIpWhitelistWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceIpWhitelist",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceIpWhitelistResponse({}));
    }
    /**
     * Queries the IP whitelist of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceIpWhitelistRequest
     * @returns DescribeInstanceIpWhitelistResponse
     */
    async describeInstanceIpWhitelist(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceIpWhitelistWithOptions(request, runtime);
    }
    /**
     * Queries the RAG Agent configuration of an RDS AI application instance.
     *
     * @param request - DescribeInstanceRAGConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceRAGConfigResponse
     */
    async describeInstanceRAGConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceRAGConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRAGConfigResponse({}));
    }
    /**
     * Queries the RAG Agent configuration of an RDS AI application instance.
     *
     * @param request - DescribeInstanceRAGConfigRequest
     * @returns DescribeInstanceRAGConfigResponse
     */
    async describeInstanceRAGConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceRAGConfigWithOptions(request, runtime);
    }
    /**
     * Retrieves the SSL configuration of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceSSLResponse
     */
    async describeInstanceSSLWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceSSL",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSSLResponse({}));
    }
    /**
     * Retrieves the SSL configuration of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeInstanceSSLRequest
     * @returns DescribeInstanceSSLResponse
     */
    async describeInstanceSSL(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceSSLWithOptions(request, runtime);
    }
    /**
     * Queries the storage configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only Object Storage Service (OSS) is supported.
     *
     * @param request - DescribeInstanceStorageConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstanceStorageConfigResponse
     */
    async describeInstanceStorageConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeInstanceStorageConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeInstanceStorageConfigResponse({}));
    }
    /**
     * Queries the storage configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only Object Storage Service (OSS) is supported.
     *
     * @param request - DescribeInstanceStorageConfigRequest
     * @returns DescribeInstanceStorageConfigResponse
     */
    async describeInstanceStorageConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeInstanceStorageConfigWithOptions(request, runtime);
    }
    /**
     * Queries the token usage records of RDS AI Assistant Ultimate Edition.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOTokenUsageDetailRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMOTokenUsageDetailResponse
     */
    async describeMOTokenUsageDetailWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.consumerName)) {
            query["ConsumerName"] = request.consumerName;
        }
        if (!$dara.isNull(request.cursor)) {
            query["Cursor"] = request.cursor;
        }
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.model)) {
            query["Model"] = request.model;
        }
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.region)) {
            query["Region"] = request.region;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.usageType)) {
            query["UsageType"] = request.usageType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeMOTokenUsageDetail",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeMOTokenUsageDetailResponse({}));
    }
    /**
     * Queries the token usage records of RDS AI Assistant Ultimate Edition.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOTokenUsageDetailRequest
     * @returns DescribeMOTokenUsageDetailResponse
     */
    async describeMOTokenUsageDetail(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeMOTokenUsageDetailWithOptions(request, runtime);
    }
    /**
     * Queries the token usage summary for a model operator instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOTokenUsageSummaryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMOTokenUsageSummaryResponse
     */
    async describeMOTokenUsageSummaryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.model)) {
            query["Model"] = request.model;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.usageType)) {
            query["UsageType"] = request.usageType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeMOTokenUsageSummary",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeMOTokenUsageSummaryResponse({}));
    }
    /**
     * Queries the token usage summary for a model operator instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOTokenUsageSummaryRequest
     * @returns DescribeMOTokenUsageSummaryResponse
     */
    async describeMOTokenUsageSummary(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeMOTokenUsageSummaryWithOptions(request, runtime);
    }
    /**
     * Queries the status or download link of an asynchronous CSV export task for MO usage details.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOUsageDetailExportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMOUsageDetailExportResponse
     */
    async describeMOUsageDetailExportWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeMOUsageDetailExport",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeMOUsageDetailExportResponse({}));
    }
    /**
     * Queries the status or download link of an asynchronous CSV export task for MO usage details.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMOUsageDetailExportRequest
     * @returns DescribeMOUsageDetailExportResponse
     */
    async describeMOUsageDetailExport(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeMOUsageDetailExportWithOptions(request, runtime);
    }
    /**
     * Queries the basic information and usage of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeModelOperatorRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeModelOperatorResponse
     */
    async describeModelOperatorWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.region)) {
            query["Region"] = request.region;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeModelOperator",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeModelOperatorResponse({}));
    }
    /**
     * Queries the basic information and usage of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeModelOperatorRequest
     * @returns DescribeModelOperatorResponse
     */
    async describeModelOperator(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeModelOperatorWithOptions(request, runtime);
    }
    /**
     * Queries instance monitoring data of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param tmpReq - DescribeMonitorDataRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeMonitorDataResponse
     */
    async describeMonitorDataWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.DescribeMonitorDataShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.apiKeyName)) {
            request.apiKeyNameShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apiKeyName, "ApiKeyName", "json");
        }
        let query = {};
        if (!$dara.isNull(request.apiKeyNameShrink)) {
            query["ApiKeyName"] = request.apiKeyNameShrink;
        }
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.interval)) {
            query["Interval"] = request.interval;
        }
        if (!$dara.isNull(request.metric)) {
            query["Metric"] = request.metric;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeMonitorData",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeMonitorDataResponse({}));
    }
    /**
     * Queries instance monitoring data of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeMonitorDataRequest
     * @returns DescribeMonitorDataResponse
     */
    async describeMonitorData(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeMonitorDataWithOptions(request, runtime);
    }
    /**
     * Queries a list of sandbox templates for creating Supabase sandboxes.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeSandboxTemplatesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeSandboxTemplatesResponse
     */
    async describeSandboxTemplatesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.templateName)) {
            query["TemplateName"] = request.templateName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeSandboxTemplates",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeSandboxTemplatesResponse({}));
    }
    /**
     * Queries a list of sandbox templates for creating Supabase sandboxes.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - DescribeSandboxTemplatesRequest
     * @returns DescribeSandboxTemplatesResponse
     */
    async describeSandboxTemplates(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeSandboxTemplatesWithOptions(request, runtime);
    }
    /**
     * Queries the whitelist of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeWhitelistIpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeWhitelistIpsResponse
     */
    async describeWhitelistIpsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DescribeWhitelistIps",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeWhitelistIpsResponse({}));
    }
    /**
     * Queries the whitelist of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - DescribeWhitelistIpsRequest
     * @returns DescribeWhitelistIpsResponse
     */
    async describeWhitelistIps(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeWhitelistIpsWithOptions(request, runtime);
    }
    /**
     * Disables the sandbox and Edge Routine capabilities of Supabase. Note: This operation deletes all sandboxes and Edge Routines of the instance. Evaluate business risks before you perform this operation.
     *
     * @remarks
     * Disables the sandbox and Edge Routine capabilities of Supabase.
     * >Notice: This operation deletes all sandboxes and Edge Routines of the Supabase instance. Evaluate business risks before you perform this operation.
     *
     * @param request - DisableAgentRuntimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableAgentRuntimeResponse
     */
    async disableAgentRuntimeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DisableAgentRuntime",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DisableAgentRuntimeResponse({}));
    }
    /**
     * Disables the sandbox and Edge Routine capabilities of Supabase. Note: This operation deletes all sandboxes and Edge Routines of the instance. Evaluate business risks before you perform this operation.
     *
     * @remarks
     * Disables the sandbox and Edge Routine capabilities of Supabase.
     * >Notice: This operation deletes all sandboxes and Edge Routines of the Supabase instance. Evaluate business risks before you perform this operation.
     *
     * @param request - DisableAgentRuntimeRequest
     * @returns DisableAgentRuntimeResponse
     */
    async disableAgentRuntime(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.disableAgentRuntimeWithOptions(request, runtime);
    }
    /**
     * Enables the sandbox and Edge Routine capabilities for Supabase. Read the operation description carefully before you call this API operation.
     *
     * @remarks
     * During the public preview, the sandbox and Edge Routine features are provided free of charge.
     * ### Before you begin
     * Before you use this feature, you must [authorize the service-linked role](https://api.aliyun.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole?spm=api-workbench.API%20Document.0.0.4ea75094rJgPzK&RegionId=cn-beijing&tab=DEBUG&params=%7B%2522ServiceName%2522:%2522supabase.rdsai.aliyuncs.com%2522%7D&sdkStyle=old). The service-linked role used is [AliyunServiceRoleForRDSAISupabase](https://www.alibabacloud.com/help/en/ram/product-overview/services-that-work-with-service-linked-roles).
     *
     * @param request - EnableAgentRuntimeRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableAgentRuntimeResponse
     */
    async enableAgentRuntimeWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.securityGroupId)) {
            query["SecurityGroupId"] = request.securityGroupId;
        }
        if (!$dara.isNull(request.vSwitchId)) {
            query["VSwitchId"] = request.vSwitchId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "EnableAgentRuntime",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.EnableAgentRuntimeResponse({}));
    }
    /**
     * Enables the sandbox and Edge Routine capabilities for Supabase. Read the operation description carefully before you call this API operation.
     *
     * @remarks
     * During the public preview, the sandbox and Edge Routine features are provided free of charge.
     * ### Before you begin
     * Before you use this feature, you must [authorize the service-linked role](https://api.aliyun.com/api/ResourceManager/2020-03-31/CreateServiceLinkedRole?spm=api-workbench.API%20Document.0.0.4ea75094rJgPzK&RegionId=cn-beijing&tab=DEBUG&params=%7B%2522ServiceName%2522:%2522supabase.rdsai.aliyuncs.com%2522%7D&sdkStyle=old). The service-linked role used is [AliyunServiceRoleForRDSAISupabase](https://www.alibabacloud.com/help/en/ram/product-overview/services-that-work-with-service-linked-roles).
     *
     * @param request - EnableAgentRuntimeRequest
     * @returns EnableAgentRuntimeResponse
     */
    async enableAgentRuntime(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.enableAgentRuntimeWithOptions(request, runtime);
    }
    /**
     * Retrieves the list of large language models supported by the current RDS Supabase AI gateway.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase.
     *
     * @param request - GetAvailableLLMModelsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAvailableLLMModelsResponse
     */
    async getAvailableLLMModelsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAvailableLLMModels",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAvailableLLMModelsResponse({}));
    }
    /**
     * Retrieves the list of large language models supported by the current RDS Supabase AI gateway.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase.
     *
     * @param request - GetAvailableLLMModelsRequest
     * @returns GetAvailableLLMModelsResponse
     */
    async getAvailableLLMModels(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getAvailableLLMModelsWithOptions(request, runtime);
    }
    /**
     * Retrieves the available models for a session.
     *
     * @param request - GetChatModelRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetChatModelResponse
     */
    async getChatModelWithOptions(request, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetChatModel",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetChatModelResponse({}));
    }
    /**
     * Retrieves the available models for a session.
     *
     * @param request - GetChatModelRequest
     * @returns GetChatModelResponse
     */
    async getChatModel(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getChatModelWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a datasource configuration.
     *
     * @remarks
     * Retrieves the details of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncConnectionResponse
     */
    async getContextDatabaseSyncConnectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncConnection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncConnectionResponse({}));
    }
    /**
     * Retrieves the details of a datasource configuration.
     *
     * @remarks
     * Retrieves the details of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionRequest
     * @returns GetContextDatabaseSyncConnectionResponse
     */
    async getContextDatabaseSyncConnection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncConnectionWithOptions(request, runtime);
    }
    /**
     * Queries the authorization scope of a data source.
     *
     * @remarks
     * Queries the authorization scope of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionAuthorizationRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncConnectionAuthorizationResponse
     */
    async getContextDatabaseSyncConnectionAuthorizationWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncConnectionAuthorization",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncConnectionAuthorizationResponse({}));
    }
    /**
     * Queries the authorization scope of a data source.
     *
     * @remarks
     * Queries the authorization scope of a connection.
     *
     * @param request - GetContextDatabaseSyncConnectionAuthorizationRequest
     * @returns GetContextDatabaseSyncConnectionAuthorizationResponse
     */
    async getContextDatabaseSyncConnectionAuthorization(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncConnectionAuthorizationWithOptions(request, runtime);
    }
    /**
     * Queries the status of a discovery task by task ID.
     *
     * @remarks
     * Queries the status of a discovery task by task ID.
     *
     * @param request - GetContextDatabaseSyncDiscoveryTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncDiscoveryTaskResponse
     */
    async getContextDatabaseSyncDiscoveryTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncDiscoveryTask",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncDiscoveryTaskResponse({}));
    }
    /**
     * Queries the status of a discovery task by task ID.
     *
     * @remarks
     * Queries the status of a discovery task by task ID.
     *
     * @param request - GetContextDatabaseSyncDiscoveryTaskRequest
     * @returns GetContextDatabaseSyncDiscoveryTaskResponse
     */
    async getContextDatabaseSyncDiscoveryTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncDiscoveryTaskWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of an import job.
     *
     * @remarks
     * Retrieves the details of a job.
     *
     * @param request - GetContextDatabaseSyncJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncJobResponse
     */
    async getContextDatabaseSyncJobWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncJob",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobResponse({}));
    }
    /**
     * Retrieves the details of an import job.
     *
     * @remarks
     * Retrieves the details of a job.
     *
     * @param request - GetContextDatabaseSyncJobRequest
     * @returns GetContextDatabaseSyncJobResponse
     */
    async getContextDatabaseSyncJob(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncJobWithOptions(request, runtime);
    }
    /**
     * Queries whether an import task can be started.
     *
     * @remarks
     * Queries whether a job can be started.
     *
     * @param request - GetContextDatabaseSyncJobReadinessRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncJobReadinessResponse
     */
    async getContextDatabaseSyncJobReadinessWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncJobReadiness",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobReadinessResponse({}));
    }
    /**
     * Queries whether an import task can be started.
     *
     * @remarks
     * Queries whether a job can be started.
     *
     * @param request - GetContextDatabaseSyncJobReadinessRequest
     * @returns GetContextDatabaseSyncJobReadinessResponse
     */
    async getContextDatabaseSyncJobReadiness(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncJobReadinessWithOptions(request, runtime);
    }
    /**
     * Queries the scheduling configuration of an import task.
     *
     * @remarks
     * Queries the scheduling configuration of a job.
     *
     * @param request - GetContextDatabaseSyncJobScheduleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncJobScheduleResponse
     */
    async getContextDatabaseSyncJobScheduleWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncJobSchedule",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncJobScheduleResponse({}));
    }
    /**
     * Queries the scheduling configuration of an import task.
     *
     * @remarks
     * Queries the scheduling configuration of a job.
     *
     * @param request - GetContextDatabaseSyncJobScheduleRequest
     * @returns GetContextDatabaseSyncJobScheduleResponse
     */
    async getContextDatabaseSyncJobSchedule(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncJobScheduleWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a run.
     *
     * @remarks
     * Retrieves the details of a run.
     *
     * @param request - GetContextDatabaseSyncRunRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncRunResponse
     */
    async getContextDatabaseSyncRunWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.runId)) {
            query["RunId"] = request.runId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncRun",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncRunResponse({}));
    }
    /**
     * Retrieves the details of a run.
     *
     * @remarks
     * Retrieves the details of a run.
     *
     * @param request - GetContextDatabaseSyncRunRequest
     * @returns GetContextDatabaseSyncRunResponse
     */
    async getContextDatabaseSyncRun(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncRunWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a data selection scope.
     *
     * @remarks
     * Retrieves the details of a source.
     *
     * @param request - GetContextDatabaseSyncSourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncSourceResponse
     */
    async getContextDatabaseSyncSourceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncSource",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncSourceResponse({}));
    }
    /**
     * Retrieves the details of a data selection scope.
     *
     * @remarks
     * Retrieves the details of a source.
     *
     * @param request - GetContextDatabaseSyncSourceRequest
     * @returns GetContextDatabaseSyncSourceResponse
     */
    async getContextDatabaseSyncSource(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncSourceWithOptions(request, runtime);
    }
    /**
     * Queries the current node selection in the data selection scope.
     *
     * @remarks
     * Queries the current node selection of the source.
     *
     * @param request - GetContextDatabaseSyncSourceSelectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetContextDatabaseSyncSourceSelectionResponse
     */
    async getContextDatabaseSyncSourceSelectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetContextDatabaseSyncSourceSelection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetContextDatabaseSyncSourceSelectionResponse({}));
    }
    /**
     * Queries the current node selection in the data selection scope.
     *
     * @remarks
     * Queries the current node selection of the source.
     *
     * @param request - GetContextDatabaseSyncSourceSelectionRequest
     * @returns GetContextDatabaseSyncSourceSelectionResponse
     */
    async getContextDatabaseSyncSourceSelection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getContextDatabaseSyncSourceSelectionWithOptions(request, runtime);
    }
    /**
     * Queries the historical conversations of a user.
     *
     * @param request - GetConversationsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetConversationsResponse
     */
    async getConversationsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.lastId)) {
            query["LastId"] = request.lastId;
        }
        if (!$dara.isNull(request.limit)) {
            query["Limit"] = request.limit;
        }
        if (!$dara.isNull(request.pinned)) {
            query["Pinned"] = request.pinned;
        }
        if (!$dara.isNull(request.sortBy)) {
            query["SortBy"] = request.sortBy;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetConversations",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetConversationsResponse({}));
    }
    /**
     * Queries the historical conversations of a user.
     *
     * @param request - GetConversationsRequest
     * @returns GetConversationsResponse
     */
    async getConversations(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getConversationsWithOptions(request, runtime);
    }
    /**
     * Queries a dedicated agent created by the user.
     *
     * @param request - GetCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentResponse
     */
    async getCustomAgentWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.customAgentId)) {
            query["CustomAgentId"] = request.customAgentId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCustomAgent",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCustomAgentResponse({}));
    }
    /**
     * Queries a dedicated agent created by the user.
     *
     * @param request - GetCustomAgentRequest
     * @returns GetCustomAgentResponse
     */
    async getCustomAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getCustomAgentWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of an inspection report by report ID.
     *
     * @param request - GetInspectionReportRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetInspectionReportResponse
     */
    async getInspectionReportWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.reportType)) {
            query["ReportType"] = request.reportType;
        }
        if (!$dara.isNull(request.taskId)) {
            query["TaskId"] = request.taskId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetInspectionReport",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetInspectionReportResponse({}));
    }
    /**
     * Retrieves the details of an inspection report by report ID.
     *
     * @param request - GetInspectionReportRequest
     * @returns GetInspectionReportResponse
     */
    async getInspectionReport(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getInspectionReportWithOptions(request, runtime);
    }
    /**
     * Queries the details of specific conversation messages.
     *
     * @param request - GetMessagesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMessagesResponse
     */
    async getMessagesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.conversationId)) {
            query["ConversationId"] = request.conversationId;
        }
        if (!$dara.isNull(request.eventMode)) {
            query["EventMode"] = request.eventMode;
        }
        if (!$dara.isNull(request.firstId)) {
            query["FirstId"] = request.firstId;
        }
        if (!$dara.isNull(request.limit)) {
            query["Limit"] = request.limit;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMessages",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMessagesResponse({}));
    }
    /**
     * Queries the details of specific conversation messages.
     *
     * @param request - GetMessagesRequest
     * @returns GetMessagesResponse
     */
    async getMessages(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getMessagesWithOptions(request, runtime);
    }
    /**
     * Retrieves the order information for the RDS AI Assistant Ultimate Edition.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - GetModelOperatorOrderRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetModelOperatorOrderResponse
     */
    async getModelOperatorOrderWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.region)) {
            query["Region"] = request.region;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetModelOperatorOrder",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetModelOperatorOrderResponse({}));
    }
    /**
     * Retrieves the order information for the RDS AI Assistant Ultimate Edition.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - GetModelOperatorOrderRequest
     * @returns GetModelOperatorOrderResponse
     */
    async getModelOperatorOrder(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getModelOperatorOrderWithOptions(request, runtime);
    }
    /**
     * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
     *
     * @param request - GetScheduledInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetScheduledInstancesResponse
     */
    async getScheduledInstancesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.scheduledId)) {
            query["ScheduledId"] = request.scheduledId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetScheduledInstances",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetScheduledInstancesResponse({}));
    }
    /**
     * Queries the list of all instance IDs included in a specified scheduled inspection configuration.
     *
     * @param request - GetScheduledInstancesRequest
     * @returns GetScheduledInstancesResponse
     */
    async getScheduledInstances(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getScheduledInstancesWithOptions(request, runtime);
    }
    /**
     * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
     *
     * @param request - GetScheduledReportsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetScheduledReportsResponse
     */
    async getScheduledReportsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.scheduledId)) {
            query["ScheduledId"] = request.scheduledId;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetScheduledReports",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetScheduledReportsResponse({}));
    }
    /**
     * Queries all inspection reports for a specified scheduled task. Supports filtering by time range and pagination.
     *
     * @param request - GetScheduledReportsRequest
     * @returns GetScheduledReportsResponse
     */
    async getScheduledReports(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getScheduledReportsWithOptions(request, runtime);
    }
    /**
     * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
     *
     * @param request - GetSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillResponse
     */
    async getSkillWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.download)) {
            query["Download"] = request.download;
        }
        if (!$dara.isNull(request.language)) {
            query["Language"] = request.language;
        }
        if (!$dara.isNull(request.path)) {
            query["Path"] = request.path;
        }
        if (!$dara.isNull(request.skillId)) {
            query["SkillId"] = request.skillId;
        }
        if (!$dara.isNull(request.versionId)) {
            query["VersionId"] = request.versionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSkill",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSkillResponse({}));
    }
    /**
     * Retrieves the details of a specified skill. You can retrieve your own skills or system preset skills.
     *
     * @param request - GetSkillRequest
     * @returns GetSkillResponse
     */
    async getSkill(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getSkillWithOptions(request, runtime);
    }
    /**
     * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
     *
     * @param request - GetStandAloneReportsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetStandAloneReportsResponse
     */
    async getStandAloneReportsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.reportType)) {
            query["ReportType"] = request.reportType;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetStandAloneReports",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetStandAloneReportsResponse({}));
    }
    /**
     * Queries the list of individual inspection reports for all non-scheduled tasks under a specified user, with pagination support.
     *
     * @param request - GetStandAloneReportsRequest
     * @returns GetStandAloneReportsResponse
     */
    async getStandAloneReports(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.getStandAloneReportsWithOptions(request, runtime);
    }
    /**
     * Queries custom API keys.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ListApiKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListApiKeysResponse
     */
    async listApiKeysWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListApiKeys",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
    }
    /**
     * Queries custom API keys.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ListApiKeysRequest
     * @returns ListApiKeysResponse
     */
    async listApiKeys(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listApiKeysWithOptions(request, runtime);
    }
    /**
     * Lists the API keys for a context database.
     *
     * @remarks
     * Lists the API keys under a specified member. The plaintext key values are not returned.
     *
     * @param request - ListContextDatabaseApiKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseApiKeysResponse
     */
    async listContextDatabaseApiKeysWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseApiKeys",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseApiKeysResponse({}));
    }
    /**
     * Lists the API keys for a context database.
     *
     * @remarks
     * Lists the API keys under a specified member. The plaintext key values are not returned.
     *
     * @param request - ListContextDatabaseApiKeysRequest
     * @returns ListContextDatabaseApiKeysResponse
     */
    async listContextDatabaseApiKeys(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseApiKeysWithOptions(request, runtime);
    }
    /**
     * Lists context database members.
     *
     * @remarks
     * Lists all members in a specified workspace. Each member includes a list of API keys (plaintext values are not returned).
     *
     * @param request - ListContextDatabaseMembersRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseMembersResponse
     */
    async listContextDatabaseMembersWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseMembers",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseMembersResponse({}));
    }
    /**
     * Lists context database members.
     *
     * @remarks
     * Lists all members in a specified workspace. Each member includes a list of API keys (plaintext values are not returned).
     *
     * @param request - ListContextDatabaseMembersRequest
     * @returns ListContextDatabaseMembersResponse
     */
    async listContextDatabaseMembers(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseMembersWithOptions(request, runtime);
    }
    /**
     * Lists the data sources in a workspace.
     *
     * @remarks
     * By default, the list operation returns paginated results. The Page and PageSize parameters are optional.
     * The Data field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncConnectionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncConnectionsResponse
     */
    async listContextDatabaseSyncConnectionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.pluginId)) {
            query["PluginId"] = request.pluginId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncConnections",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncConnectionsResponse({}));
    }
    /**
     * Lists the data sources in a workspace.
     *
     * @remarks
     * By default, the list operation returns paginated results. The Page and PageSize parameters are optional.
     * The Data field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncConnectionsRequest
     * @returns ListContextDatabaseSyncConnectionsResponse
     */
    async listContextDatabaseSyncConnections(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncConnectionsWithOptions(request, runtime);
    }
    /**
     * Lists the documents associated with an import task.
     *
     * @remarks
     * By default, this operation returns paginated results. The Page and PageSize parameters are optional. The Data field in the response is returned as an array, and the Total field indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncJobDocumentsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncJobDocumentsResponse
     */
    async listContextDatabaseSyncJobDocumentsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncJobDocuments",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobDocumentsResponse({}));
    }
    /**
     * Lists the documents associated with an import task.
     *
     * @remarks
     * By default, this operation returns paginated results. The Page and PageSize parameters are optional. The Data field in the response is returned as an array, and the Total field indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncJobDocumentsRequest
     * @returns ListContextDatabaseSyncJobDocumentsResponse
     */
    async listContextDatabaseSyncJobDocuments(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncJobDocumentsWithOptions(request, runtime);
    }
    /**
     * Lists the exclusions of an import task.
     *
     * @remarks
     * This operation uses pagination by default. Page and PageSize are optional parameters.
     * The Data field in the response returns an array. Total indicates the total number of records that match the specified conditions.
     *
     * @param request - ListContextDatabaseSyncJobExclusionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncJobExclusionsResponse
     */
    async listContextDatabaseSyncJobExclusionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncJobExclusions",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobExclusionsResponse({}));
    }
    /**
     * Lists the exclusions of an import task.
     *
     * @remarks
     * This operation uses pagination by default. Page and PageSize are optional parameters.
     * The Data field in the response returns an array. Total indicates the total number of records that match the specified conditions.
     *
     * @param request - ListContextDatabaseSyncJobExclusionsRequest
     * @returns ListContextDatabaseSyncJobExclusionsResponse
     */
    async listContextDatabaseSyncJobExclusions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncJobExclusionsWithOptions(request, runtime);
    }
    /**
     * Lists import jobs.
     *
     * @remarks
     * The list API returns paginated results by default. Page and PageSize are optional parameters.
     * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncJobsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncJobsResponse
     */
    async listContextDatabaseSyncJobsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.knowledgeBaseId)) {
            query["KnowledgeBaseId"] = request.knowledgeBaseId;
        }
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncJobs",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncJobsResponse({}));
    }
    /**
     * Lists import jobs.
     *
     * @remarks
     * The list API returns paginated results by default. Page and PageSize are optional parameters.
     * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncJobsRequest
     * @returns ListContextDatabaseSyncJobsResponse
     */
    async listContextDatabaseSyncJobs(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncJobsWithOptions(request, runtime);
    }
    /**
     * Lists available synchronization plugins.
     *
     * @remarks
     * This operation returns a fixed-length array of available plugins in the workspace and does not support pagination.
     * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncPluginsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncPluginsResponse
     */
    async listContextDatabaseSyncPluginsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncPlugins",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncPluginsResponse({}));
    }
    /**
     * Lists available synchronization plugins.
     *
     * @remarks
     * This operation returns a fixed-length array of available plugins in the workspace and does not support pagination.
     * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncPluginsRequest
     * @returns ListContextDatabaseSyncPluginsResponse
     */
    async listContextDatabaseSyncPlugins(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncPluginsWithOptions(request, runtime);
    }
    /**
     * Lists the run records.
     *
     * @remarks
     * The list API returns paginated results by default. The Page and PageSize parameters are optional. Run records are a list of RunItems that show the processing results of each document in each import run.
     * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncRunItemsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncRunItemsResponse
     */
    async listContextDatabaseSyncRunItemsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.runId)) {
            query["RunId"] = request.runId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncRunItems",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunItemsResponse({}));
    }
    /**
     * Lists the run records.
     *
     * @remarks
     * The list API returns paginated results by default. The Page and PageSize parameters are optional. Run records are a list of RunItems that show the processing results of each document in each import run.
     * The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncRunItemsRequest
     * @returns ListContextDatabaseSyncRunItemsResponse
     */
    async listContextDatabaseSyncRunItems(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncRunItemsWithOptions(request, runtime);
    }
    /**
     * Lists the run logs.
     *
     * @remarks
     * The list API returns paginated results by default. Page and PageSize are optional parameters.
     * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncRunLogsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncRunLogsResponse
     */
    async listContextDatabaseSyncRunLogsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.runId)) {
            query["RunId"] = request.runId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncRunLogs",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunLogsResponse({}));
    }
    /**
     * Lists the run logs.
     *
     * @remarks
     * The list API returns paginated results by default. Page and PageSize are optional parameters.
     * The Data list field in the response is returned as an array, and Total indicates the total number of matching entries.
     *
     * @param request - ListContextDatabaseSyncRunLogsRequest
     * @returns ListContextDatabaseSyncRunLogsResponse
     */
    async listContextDatabaseSyncRunLogs(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncRunLogsWithOptions(request, runtime);
    }
    /**
     * Lists the runs.
     *
     * @remarks
     * By default, this operation returns paginated results. The Page and PageSize parameters are optional.
     * The Data field in the response is returned as an array, and the Total field indicates the total number of items that meet the query conditions.
     *
     * @param request - ListContextDatabaseSyncRunsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncRunsResponse
     */
    async listContextDatabaseSyncRunsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncRuns",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncRunsResponse({}));
    }
    /**
     * Lists the runs.
     *
     * @remarks
     * By default, this operation returns paginated results. The Page and PageSize parameters are optional.
     * The Data field in the response is returned as an array, and the Total field indicates the total number of items that meet the query conditions.
     *
     * @param request - ListContextDatabaseSyncRunsRequest
     * @returns ListContextDatabaseSyncRunsResponse
     */
    async listContextDatabaseSyncRuns(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncRunsWithOptions(request, runtime);
    }
    /**
     * Lists the discovered tree nodes for the data selection scope.
     *
     * @remarks
     * List operations return paginated results by default. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourceTreeNodesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncSourceTreeNodesResponse
     */
    async listContextDatabaseSyncSourceTreeNodesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncSourceTreeNodes",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncSourceTreeNodesResponse({}));
    }
    /**
     * Lists the discovered tree nodes for the data selection scope.
     *
     * @remarks
     * List operations return paginated results by default. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourceTreeNodesRequest
     * @returns ListContextDatabaseSyncSourceTreeNodesResponse
     */
    async listContextDatabaseSyncSourceTreeNodes(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncSourceTreeNodesWithOptions(request, runtime);
    }
    /**
     * Lists the data selection scopes.
     *
     * @remarks
     * By default, the list operation returns paginated results. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourcesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseSyncSourcesResponse
     */
    async listContextDatabaseSyncSourcesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.page)) {
            query["Page"] = request.page;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseSyncSources",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseSyncSourcesResponse({}));
    }
    /**
     * Lists the data selection scopes.
     *
     * @remarks
     * By default, the list operation returns paginated results. Page and PageSize are optional parameters. The Data list field in the response is returned as an array, and Total indicates the total number of entries that meet the conditions.
     *
     * @param request - ListContextDatabaseSyncSourcesRequest
     * @returns ListContextDatabaseSyncSourcesResponse
     */
    async listContextDatabaseSyncSources(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseSyncSourcesWithOptions(request, runtime);
    }
    /**
     * Lists ContextDB workspaces.
     *
     * @remarks
     * Lists ContextDB workspaces.
     *
     * @param request - ListContextDatabaseWorkspacesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListContextDatabaseWorkspacesResponse
     */
    async listContextDatabaseWorkspacesWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["MaxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["NextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListContextDatabaseWorkspaces",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListContextDatabaseWorkspacesResponse({}));
    }
    /**
     * Lists ContextDB workspaces.
     *
     * @remarks
     * Lists ContextDB workspaces.
     *
     * @param request - ListContextDatabaseWorkspacesRequest
     * @returns ListContextDatabaseWorkspacesResponse
     */
    async listContextDatabaseWorkspaces(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listContextDatabaseWorkspacesWithOptions(request, runtime);
    }
    /**
     * Queries the list of dedicated agents created by the user.
     *
     * @param request - ListCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentResponse
     */
    async listCustomAgentWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
            action: "ListCustomAgent",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListCustomAgentResponse({}));
    }
    /**
     * Queries the list of dedicated agents created by the user.
     *
     * @param request - ListCustomAgentRequest
     * @returns ListCustomAgentResponse
     */
    async listCustomAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listCustomAgentWithOptions(request, runtime);
    }
    /**
     * Queries the list of Agent tools for a user.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentToolsResponse
     */
    async listCustomAgentToolsWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListCustomAgentTools",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListCustomAgentToolsResponse({}));
    }
    /**
     * Queries the list of Agent tools for a user.
     * @returns ListCustomAgentToolsResponse
     */
    async listCustomAgentTools() {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listCustomAgentToolsWithOptions(runtime);
    }
    /**
     * Retrieves the AI gateway token usage for an RDS Supabase instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase.
     *
     * @param request - ListLLMTokenUsageRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListLLMTokenUsageResponse
     */
    async listLLMTokenUsageWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.endTime)) {
            query["EndTime"] = request.endTime;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.model)) {
            query["Model"] = request.model;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListLLMTokenUsage",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListLLMTokenUsageResponse({}));
    }
    /**
     * Retrieves the AI gateway token usage for an RDS Supabase instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase.
     *
     * @param request - ListLLMTokenUsageRequest
     * @returns ListLLMTokenUsageResponse
     */
    async listLLMTokenUsage(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listLLMTokenUsageWithOptions(request, runtime);
    }
    /**
     * Queries the list of basic information about all inspection configurations under a specified user UID.
     *
     * @param request - ListScheduledTasksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListScheduledTasksResponse
     */
    async listScheduledTasksWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.scheduledId)) {
            query["ScheduledId"] = request.scheduledId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListScheduledTasks",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListScheduledTasksResponse({}));
    }
    /**
     * Queries the list of basic information about all inspection configurations under a specified user UID.
     *
     * @param request - ListScheduledTasksRequest
     * @returns ListScheduledTasksResponse
     */
    async listScheduledTasks(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listScheduledTasksWithOptions(request, runtime);
    }
    /**
     * Retrieves the custom skills of the current user and all system-preset skills.
     *
     * @param request - ListSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillResponse
     */
    async listSkillWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.language)) {
            query["Language"] = request.language;
        }
        if (!$dara.isNull(request.pageNumber)) {
            query["PageNumber"] = request.pageNumber;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["PageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.query)) {
            query["Query"] = request.query;
        }
        if (!$dara.isNull(request.scope)) {
            query["Scope"] = request.scope;
        }
        if (!$dara.isNull(request.sort)) {
            query["Sort"] = request.sort;
        }
        if (!$dara.isNull(request.source)) {
            query["Source"] = request.source;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSkill",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSkillResponse({}));
    }
    /**
     * Retrieves the custom skills of the current user and all system-preset skills.
     *
     * @param request - ListSkillRequest
     * @returns ListSkillResponse
     */
    async listSkill(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.listSkillWithOptions(request, runtime);
    }
    /**
     * Modifies the modules of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - ModifyAppInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyAppInstanceResponse
     */
    async modifyAppInstanceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyAppInstanceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.components)) {
            request.componentsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
        }
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.componentsShrink)) {
            query["Components"] = request.componentsShrink;
        }
        if (!$dara.isNull(request.DBInstanceName)) {
            query["DBInstanceName"] = request.DBInstanceName;
        }
        if (!$dara.isNull(request.instanceClass)) {
            query["InstanceClass"] = request.instanceClass;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyAppInstance",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceResponse({}));
    }
    /**
     * Modifies the modules of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyAppInstanceRequest
     * @returns ModifyAppInstanceResponse
     */
    async modifyAppInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyAppInstanceWithOptions(request, runtime);
    }
    /**
     * Modifies the authentication configuration of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - ModifyInstanceAuthConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceAuthConfigResponse
     */
    async modifyInstanceAuthConfigWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyInstanceAuthConfigShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.configList)) {
            request.configListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.configListShrink)) {
            query["ConfigList"] = request.configListShrink;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceAuthConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAuthConfigResponse({}));
    }
    /**
     * Modifies the authentication configuration of an ApsaraDB RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstanceAuthConfigRequest
     * @returns ModifyInstanceAuthConfigResponse
     */
    async modifyInstanceAuthConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceAuthConfigWithOptions(request, runtime);
    }
    /**
     * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
     *
     * @param request - ModifyInstanceConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceConfigResponse
     */
    async modifyInstanceConfigWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.configName)) {
            query["ConfigName"] = request.configName;
        }
        if (!$dara.isNull(request.configValue)) {
            query["ConfigValue"] = request.configValue;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
    }
    /**
     * Modifies the general configurations of an instance, such as Elastic IP (EIP) and NAT configurations.
     *
     * @param request - ModifyInstanceConfigRequest
     * @returns ModifyInstanceConfigResponse
     */
    async modifyInstanceConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceConfigWithOptions(request, runtime);
    }
    /**
     * Modifies the IP address whitelist of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstanceIpWhitelistRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceIpWhitelistResponse
     */
    async modifyInstanceIpWhitelistWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.groupName)) {
            query["GroupName"] = request.groupName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.ipWhitelist)) {
            query["IpWhitelist"] = request.ipWhitelist;
        }
        if (!$dara.isNull(request.modifyMode)) {
            query["ModifyMode"] = request.modifyMode;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceIpWhitelist",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceIpWhitelistResponse({}));
    }
    /**
     * Modifies the IP address whitelist of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstanceIpWhitelistRequest
     * @returns ModifyInstanceIpWhitelistResponse
     */
    async modifyInstanceIpWhitelist(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceIpWhitelistWithOptions(request, runtime);
    }
    /**
     * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
     *
     * @param tmpReq - ModifyInstanceRAGConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceRAGConfigResponse
     */
    async modifyInstanceRAGConfigWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyInstanceRAGConfigShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.configList)) {
            request.configListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.configListShrink)) {
            query["ConfigList"] = request.configListShrink;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceRAGConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceRAGConfigResponse({}));
    }
    /**
     * Modifies the RAG Agent configuration of an ApsaraDB RDS AI application instance.
     *
     * @param request - ModifyInstanceRAGConfigRequest
     * @returns ModifyInstanceRAGConfigResponse
     */
    async modifyInstanceRAGConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceRAGConfigWithOptions(request, runtime);
    }
    /**
     * Modifies the SSL configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstanceSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceSSLResponse
     */
    async modifyInstanceSSLWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.CAType)) {
            query["CAType"] = request.CAType;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.SSLEnabled)) {
            query["SSLEnabled"] = request.SSLEnabled;
        }
        if (!$dara.isNull(request.serverCert)) {
            query["ServerCert"] = request.serverCert;
        }
        if (!$dara.isNull(request.serverKey)) {
            query["ServerKey"] = request.serverKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceSSL",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceSSLResponse({}));
    }
    /**
     * Modifies the SSL configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstanceSSLRequest
     * @returns ModifyInstanceSSLResponse
     */
    async modifyInstanceSSL(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceSSLWithOptions(request, runtime);
    }
    /**
     * Modifies the storage configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only Object Storage Service (OSS) is supported.
     *
     * @param tmpReq - ModifyInstanceStorageConfigRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstanceStorageConfigResponse
     */
    async modifyInstanceStorageConfigWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyInstanceStorageConfigShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.configList)) {
            request.configListShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configList, "ConfigList", "json");
        }
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.configListShrink)) {
            query["ConfigList"] = request.configListShrink;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstanceStorageConfig",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstanceStorageConfigResponse({}));
    }
    /**
     * Modifies the storage configuration of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only Object Storage Service (OSS) is supported.
     *
     * @param request - ModifyInstanceStorageConfigRequest
     * @returns ModifyInstanceStorageConfigResponse
     */
    async modifyInstanceStorageConfig(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstanceStorageConfigWithOptions(request, runtime);
    }
    /**
     * Batch modifies the SSL configurations of RDS AI application instances.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - ModifyInstancesSSLRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstancesSSLResponse
     */
    async modifyInstancesSSLWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifyInstancesSSLShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.instanceNames)) {
            request.instanceNamesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNames, "InstanceNames", "json");
        }
        let query = {};
        if (!$dara.isNull(request.CAType)) {
            query["CAType"] = request.CAType;
        }
        if (!$dara.isNull(request.instanceNamesShrink)) {
            query["InstanceNames"] = request.instanceNamesShrink;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.SSLEnabled)) {
            query["SSLEnabled"] = request.SSLEnabled;
        }
        if (!$dara.isNull(request.serverCert)) {
            query["ServerCert"] = request.serverCert;
        }
        if (!$dara.isNull(request.serverKey)) {
            query["ServerKey"] = request.serverKey;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyInstancesSSL",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstancesSSLResponse({}));
    }
    /**
     * Batch modifies the SSL configurations of RDS AI application instances.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifyInstancesSSLRequest
     * @returns ModifyInstancesSSLResponse
     */
    async modifyInstancesSSL(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyInstancesSSLWithOptions(request, runtime);
    }
    /**
     * Modifies message feedback.
     *
     * @param request - ModifyMessagesFeedbacksRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyMessagesFeedbacksResponse
     */
    async modifyMessagesFeedbacksWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.content)) {
            query["Content"] = request.content;
        }
        if (!$dara.isNull(request.messageId)) {
            query["MessageId"] = request.messageId;
        }
        if (!$dara.isNull(request.rating)) {
            query["Rating"] = request.rating;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyMessagesFeedbacks",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyMessagesFeedbacksResponse({}));
    }
    /**
     * Modifies message feedback.
     *
     * @param request - ModifyMessagesFeedbacksRequest
     * @returns ModifyMessagesFeedbacksResponse
     */
    async modifyMessagesFeedbacks(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyMessagesFeedbacksWithOptions(request, runtime);
    }
    /**
     * Modifies a sandbox template.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param tmpReq - ModifySandboxTemplateRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifySandboxTemplateResponse
     */
    async modifySandboxTemplateWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.ModifySandboxTemplateShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.tags)) {
            request.tagsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
        }
        let query = {};
        if (!$dara.isNull(request.defaultCpu)) {
            query["DefaultCpu"] = request.defaultCpu;
        }
        if (!$dara.isNull(request.defaultMemory)) {
            query["DefaultMemory"] = request.defaultMemory;
        }
        if (!$dara.isNull(request.image)) {
            query["Image"] = request.image;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        if (!$dara.isNull(request.replicas)) {
            query["Replicas"] = request.replicas;
        }
        if (!$dara.isNull(request.tagsShrink)) {
            query["Tags"] = request.tagsShrink;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifySandboxTemplate",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifySandboxTemplateResponse({}));
    }
    /**
     * Modifies a sandbox template.
     *
     * @remarks
     * ### Applicable engine
     * RDS Supabase
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ModifySandboxTemplateRequest
     * @returns ModifySandboxTemplateResponse
     */
    async modifySandboxTemplate(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifySandboxTemplateWithOptions(request, runtime);
    }
    /**
     * Modifies an existing inspection configuration.
     *
     * @param request - ModifyScheduledTaskRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyScheduledTaskResponse
     */
    async modifyScheduledTaskWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.frequency)) {
            query["Frequency"] = request.frequency;
        }
        if (!$dara.isNull(request.inspectionItems)) {
            query["InspectionItems"] = request.inspectionItems;
        }
        if (!$dara.isNull(request.instanceIds)) {
            query["InstanceIds"] = request.instanceIds;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.reportLanguage)) {
            query["ReportLanguage"] = request.reportLanguage;
        }
        if (!$dara.isNull(request.scheduledId)) {
            query["ScheduledId"] = request.scheduledId;
        }
        if (!$dara.isNull(request.startTime)) {
            query["StartTime"] = request.startTime;
        }
        if (!$dara.isNull(request.templateId)) {
            query["TemplateId"] = request.templateId;
        }
        if (!$dara.isNull(request.timeRange)) {
            query["TimeRange"] = request.timeRange;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyScheduledTask",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyScheduledTaskResponse({}));
    }
    /**
     * Modifies an existing inspection configuration.
     *
     * @param request - ModifyScheduledTaskRequest
     * @returns ModifyScheduledTaskResponse
     */
    async modifyScheduledTask(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyScheduledTaskWithOptions(request, runtime);
    }
    /**
     * Modifies the IP whitelist of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ModifyWhitelistIpsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyWhitelistIpsResponse
     */
    async modifyWhitelistIpsWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.ipWhitelist)) {
            query["IpWhitelist"] = request.ipWhitelist;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ModifyWhitelistIps",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyWhitelistIpsResponse({}));
    }
    /**
     * Modifies the IP whitelist of an RDS AI Assistant Ultimate Edition instance.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ModifyWhitelistIpsRequest
     * @returns ModifyWhitelistIpsResponse
     */
    async modifyWhitelistIps(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.modifyWhitelistIpsWithOptions(request, runtime);
    }
    /**
     * Deletes an exclusion item for an import job.
     *
     * @remarks
     * Deletes an exclusion item for a job.
     *
     * @param request - RemoveContextDatabaseSyncJobExclusionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RemoveContextDatabaseSyncJobExclusionResponse
     */
    async removeContextDatabaseSyncJobExclusionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.documentId)) {
            query["DocumentId"] = request.documentId;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RemoveContextDatabaseSyncJobExclusion",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RemoveContextDatabaseSyncJobExclusionResponse({}));
    }
    /**
     * Deletes an exclusion item for an import job.
     *
     * @remarks
     * Deletes an exclusion item for a job.
     *
     * @param request - RemoveContextDatabaseSyncJobExclusionRequest
     * @returns RemoveContextDatabaseSyncJobExclusionResponse
     */
    async removeContextDatabaseSyncJobExclusion(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.removeContextDatabaseSyncJobExclusionWithOptions(request, runtime);
    }
    /**
     * Renames a custom API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - RenameApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RenameApiKeyResponse
     */
    async renameApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.keyName)) {
            query["KeyName"] = request.keyName;
        }
        if (!$dara.isNull(request.roleArn)) {
            query["RoleArn"] = request.roleArn;
        }
        if (!$dara.isNull(request.roleName)) {
            query["RoleName"] = request.roleName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RenameApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RenameApiKeyResponse({}));
    }
    /**
     * Renames a custom API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - RenameApiKeyRequest
     * @returns RenameApiKeyResponse
     */
    async renameApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.renameApiKeyWithOptions(request, runtime);
    }
    /**
     * Resets the API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ResetApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetApiKeyResponse
     */
    async resetApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.apiKey)) {
            query["ApiKey"] = request.apiKey;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ResetApiKeyResponse({}));
    }
    /**
     * Resets the API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - ResetApiKeyRequest
     * @returns ResetApiKeyResponse
     */
    async resetApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.resetApiKeyWithOptions(request, runtime);
    }
    /**
     * Resets the keys of an RDS AI instance, including AnonKey, ServiceKey, and JwtSecret. After the reset, the old keys and secret become invalid immediately. Ensure that your applications are updated accordingly.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ResetInstanceKeysRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetInstanceKeysResponse
     */
    async resetInstanceKeysWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetInstanceKeys",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ResetInstanceKeysResponse({}));
    }
    /**
     * Resets the keys of an RDS AI instance, including AnonKey, ServiceKey, and JwtSecret. After the reset, the old keys and secret become invalid immediately. Ensure that your applications are updated accordingly.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - ResetInstanceKeysRequest
     * @returns ResetInstanceKeysResponse
     */
    async resetInstanceKeys(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.resetInstanceKeysWithOptions(request, runtime);
    }
    /**
     * Resets the logon password and database access password of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only the password of the RDS Supabase Dashboard user can be changed.
     *
     * @param request - ResetInstancePasswordRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetInstancePasswordResponse
     */
    async resetInstancePasswordWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.dashboardPassword)) {
            query["DashboardPassword"] = request.dashboardPassword;
        }
        if (!$dara.isNull(request.databasePassword)) {
            query["DatabasePassword"] = request.databasePassword;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetInstancePassword",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ResetInstancePasswordResponse({}));
    }
    /**
     * Resets the logon password and database access password of an RDS AI application instance.
     *
     * @remarks
     * ### Supported engines
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     * > Currently, only the password of the RDS Supabase Dashboard user can be changed.
     *
     * @param request - ResetInstancePasswordRequest
     * @returns ResetInstancePasswordResponse
     */
    async resetInstancePassword(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.resetInstancePasswordWithOptions(request, runtime);
    }
    /**
     * Restarts an RDS AI application instance that is in the Running state.
     *
     * @remarks
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - RestartInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RestartInstanceResponse
     */
    async restartInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RestartInstance",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
    }
    /**
     * Restarts an RDS AI application instance that is in the Running state.
     *
     * @remarks
     * ### Supported engine
     * RDS PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - RestartInstanceRequest
     * @returns RestartInstanceResponse
     */
    async restartInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.restartInstanceWithOptions(request, runtime);
    }
    /**
     * Retries failed items based on a snapshot.
     *
     * @remarks
     * For write operations, you can pass a ClientToken to ensure idempotence. If not provided, the backend automatically generates one. The retry generates a new run based on the failed items, and the status of the original run remains unchanged.
     *
     * @param request - RetryFailedContextDatabaseSyncRunRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryFailedContextDatabaseSyncRunResponse
     */
    async retryFailedContextDatabaseSyncRunWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.runId)) {
            query["RunId"] = request.runId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RetryFailedContextDatabaseSyncRun",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RetryFailedContextDatabaseSyncRunResponse({}));
    }
    /**
     * Retries failed items based on a snapshot.
     *
     * @remarks
     * For write operations, you can pass a ClientToken to ensure idempotence. If not provided, the backend automatically generates one. The retry generates a new run based on the failed items, and the status of the original run remains unchanged.
     *
     * @param request - RetryFailedContextDatabaseSyncRunRequest
     * @returns RetryFailedContextDatabaseSyncRunResponse
     */
    async retryFailedContextDatabaseSyncRun(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.retryFailedContextDatabaseSyncRunWithOptions(request, runtime);
    }
    /**
     * Revokes an API key for a context database.
     *
     * @remarks
     * Revokes an API key.
     *
     * @param request - RevokeContextDatabaseApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RevokeContextDatabaseApiKeyResponse
     */
    async revokeContextDatabaseApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.keyId)) {
            query["KeyId"] = request.keyId;
        }
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RevokeContextDatabaseApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RevokeContextDatabaseApiKeyResponse({}));
    }
    /**
     * Revokes an API key for a context database.
     *
     * @remarks
     * Revokes an API key.
     *
     * @param request - RevokeContextDatabaseApiKeyRequest
     * @returns RevokeContextDatabaseApiKeyResponse
     */
    async revokeContextDatabaseApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.revokeContextDatabaseApiKeyWithOptions(request, runtime);
    }
    /**
     * Manually triggers a run.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically.
     *
     * @param request - StartContextDatabaseSyncRunRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartContextDatabaseSyncRunResponse
     */
    async startContextDatabaseSyncRunWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.dryRun)) {
            query["DryRun"] = request.dryRun;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StartContextDatabaseSyncRun",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.StartContextDatabaseSyncRunResponse({}));
    }
    /**
     * Manually triggers a run.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically.
     *
     * @param request - StartContextDatabaseSyncRunRequest
     * @returns StartContextDatabaseSyncRunResponse
     */
    async startContextDatabaseSyncRun(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.startContextDatabaseSyncRunWithOptions(request, runtime);
    }
    /**
     * Initiates a snapshot discovery task for data selection scope configuration.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically. Discovery is an asynchronous operation. The operation returns a discovery task identifier. Poll for results to retrieve SelectedNodeKeys.
     *
     * @param request - StartContextDatabaseSyncSourceDiscoveryRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartContextDatabaseSyncSourceDiscoveryResponse
     */
    async startContextDatabaseSyncSourceDiscoveryWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StartContextDatabaseSyncSourceDiscovery",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.StartContextDatabaseSyncSourceDiscoveryResponse({}));
    }
    /**
     * Initiates a snapshot discovery task for data selection scope configuration.
     *
     * @remarks
     * Write operations support idempotence by passing a ClientToken. If no ClientToken is provided, the backend generates one automatically. Discovery is an asynchronous operation. The operation returns a discovery task identifier. Poll for results to retrieve SelectedNodeKeys.
     *
     * @param request - StartContextDatabaseSyncSourceDiscoveryRequest
     * @returns StartContextDatabaseSyncSourceDiscoveryResponse
     */
    async startContextDatabaseSyncSourceDiscovery(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.startContextDatabaseSyncSourceDiscoveryWithOptions(request, runtime);
    }
    /**
     * Starts an ApsaraDB RDS AI application instance that is in the Stopped state.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - StartInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StartInstanceResponse
     */
    async startInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StartInstance",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
    }
    /**
     * Starts an ApsaraDB RDS AI application instance that is in the Stopped state.
     *
     * @remarks
     * ### Supported engines
     * ApsaraDB RDS for PostgreSQL
     * ### Related documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - StartInstanceRequest
     * @returns StartInstanceResponse
     */
    async startInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.startInstanceWithOptions(request, runtime);
    }
    /**
     * Pauses an RDS AI application instance that is in the Running state.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - StopInstanceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns StopInstanceResponse
     */
    async stopInstanceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.branchName)) {
            query["BranchName"] = request.branchName;
        }
        if (!$dara.isNull(request.force)) {
            query["Force"] = request.force;
        }
        if (!$dara.isNull(request.instanceName)) {
            query["InstanceName"] = request.instanceName;
        }
        if (!$dara.isNull(request.regionId)) {
            query["RegionId"] = request.regionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "StopInstance",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
    }
    /**
     * Pauses an RDS AI application instance that is in the Running state.
     *
     * @remarks
     * ### Applicable engine
     * RDS PostgreSQL
     * ### Related feature documentation
     * [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html)
     *
     * @param request - StopInstanceRequest
     * @returns StopInstanceResponse
     */
    async stopInstance(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.stopInstanceWithOptions(request, runtime);
    }
    /**
     * Updates the API key quota.
     *
     * @remarks
     * ### Applicable engine
     * [Ultimate Edition of RDS AI Assistant](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param tmpReq - UpdateApiKeyQuotaRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateApiKeyQuotaResponse
     */
    async updateApiKeyQuotaWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateApiKeyQuotaShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.keys)) {
            request.keysShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
        }
        let query = {};
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        if (!$dara.isNull(request.keysShrink)) {
            query["Keys"] = request.keysShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateApiKeyQuota",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyQuotaResponse({}));
    }
    /**
     * Updates the API key quota.
     *
     * @remarks
     * ### Applicable engine
     * [Ultimate Edition of RDS AI Assistant](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - UpdateApiKeyQuotaRequest
     * @returns UpdateApiKeyQuotaResponse
     */
    async updateApiKeyQuota(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateApiKeyQuotaWithOptions(request, runtime);
    }
    /**
     * Updates the API key of a context database.
     *
     * @remarks
     * Updates the display metadata of an API key. At least one of Name or Description must be specified. The plaintext key is not reissued.
     *
     * @param request - UpdateContextDatabaseApiKeyRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseApiKeyResponse
     */
    async updateContextDatabaseApiKeyWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.keyId)) {
            query["KeyId"] = request.keyId;
        }
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseApiKey",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseApiKeyResponse({}));
    }
    /**
     * Updates the API key of a context database.
     *
     * @remarks
     * Updates the display metadata of an API key. At least one of Name or Description must be specified. The plaintext key is not reissued.
     *
     * @param request - UpdateContextDatabaseApiKeyRequest
     * @returns UpdateContextDatabaseApiKeyResponse
     */
    async updateContextDatabaseApiKey(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseApiKeyWithOptions(request, runtime);
    }
    /**
     * Updates a context database member.
     *
     * @remarks
     * Updates the role or status of a member.
     *
     * @param request - UpdateContextDatabaseMemberRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseMemberResponse
     */
    async updateContextDatabaseMemberWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.memberId)) {
            query["MemberId"] = request.memberId;
        }
        if (!$dara.isNull(request.role)) {
            query["Role"] = request.role;
        }
        if (!$dara.isNull(request.status)) {
            query["Status"] = request.status;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseMember",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseMemberResponse({}));
    }
    /**
     * Updates a context database member.
     *
     * @remarks
     * Updates the role or status of a member.
     *
     * @param request - UpdateContextDatabaseMemberRequest
     * @returns UpdateContextDatabaseMemberResponse
     */
    async updateContextDatabaseMember(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseMemberWithOptions(request, runtime);
    }
    /**
     * Updates the metadata of a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotence. If you do not specify it, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncConnectionResponse
     */
    async updateContextDatabaseSyncConnectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.displayName)) {
            query["DisplayName"] = request.displayName;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncConnection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncConnectionResponse({}));
    }
    /**
     * Updates the metadata of a data source.
     *
     * @remarks
     * For write operations, you can specify a ClientToken to ensure idempotence. If you do not specify it, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncConnectionRequest
     * @returns UpdateContextDatabaseSyncConnectionResponse
     */
    async updateContextDatabaseSyncConnection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncConnectionWithOptions(request, runtime);
    }
    /**
     * Rotates the credentials of a data source individually.
     *
     * @remarks
     * You can specify the ClientToken parameter to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param tmpReq - UpdateContextDatabaseSyncConnectionCredentialRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncConnectionCredentialResponse
     */
    async updateContextDatabaseSyncConnectionCredentialWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateContextDatabaseSyncConnectionCredentialShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.credentials)) {
            request.credentialsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentials, "Credentials", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.credentialsShrink)) {
            query["Credentials"] = request.credentialsShrink;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncConnectionCredential",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncConnectionCredentialResponse({}));
    }
    /**
     * Rotates the credentials of a data source individually.
     *
     * @remarks
     * You can specify the ClientToken parameter to ensure idempotence for write operations. If you do not specify this parameter, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncConnectionCredentialRequest
     * @returns UpdateContextDatabaseSyncConnectionCredentialResponse
     */
    async updateContextDatabaseSyncConnectionCredential(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncConnectionCredentialWithOptions(request, runtime);
    }
    /**
     * Updates the metadata of an import task.
     *
     * @remarks
     * For write operations, you can pass in a ClientToken to ensure idempotency. If it is not provided, the backend automatically generates one. Target is an implicit concept. The invoker only needs to pass in the KnowledgeBaseId, and the backend performs automatic creation or matching of the target.
     *
     * @param tmpReq - UpdateContextDatabaseSyncJobRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncJobResponse
     */
    async updateContextDatabaseSyncJobWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateContextDatabaseSyncJobShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.filters)) {
            request.filtersShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.enabled)) {
            query["Enabled"] = request.enabled;
        }
        if (!$dara.isNull(request.filtersShrink)) {
            query["Filters"] = request.filtersShrink;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.targetKnowledgeBaseId)) {
            query["TargetKnowledgeBaseId"] = request.targetKnowledgeBaseId;
        }
        if (!$dara.isNull(request.targetKnowledgeBaseName)) {
            query["TargetKnowledgeBaseName"] = request.targetKnowledgeBaseName;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncJob",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncJobResponse({}));
    }
    /**
     * Updates the metadata of an import task.
     *
     * @remarks
     * For write operations, you can pass in a ClientToken to ensure idempotency. If it is not provided, the backend automatically generates one. Target is an implicit concept. The invoker only needs to pass in the KnowledgeBaseId, and the backend performs automatic creation or matching of the target.
     *
     * @param request - UpdateContextDatabaseSyncJobRequest
     * @returns UpdateContextDatabaseSyncJobResponse
     */
    async updateContextDatabaseSyncJob(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncJobWithOptions(request, runtime);
    }
    /**
     * Updates the scheduling configuration of an import task.
     *
     * @remarks
     * You can specify a ClientToken for write operations to ensure idempotence. If no ClientToken is provided, the backend automatically generates one.
     *
     * @param tmpReq - UpdateContextDatabaseSyncJobScheduleRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncJobScheduleResponse
     */
    async updateContextDatabaseSyncJobScheduleWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateContextDatabaseSyncJobScheduleShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.dailyTimes)) {
            request.dailyTimesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dailyTimes, "DailyTimes", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.dailyTimesShrink)) {
            query["DailyTimes"] = request.dailyTimesShrink;
        }
        if (!$dara.isNull(request.intervalMinutes)) {
            query["IntervalMinutes"] = request.intervalMinutes;
        }
        if (!$dara.isNull(request.jobId)) {
            query["JobId"] = request.jobId;
        }
        if (!$dara.isNull(request.missedPolicy)) {
            query["MissedPolicy"] = request.missedPolicy;
        }
        if (!$dara.isNull(request.type)) {
            query["Type"] = request.type;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncJobSchedule",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncJobScheduleResponse({}));
    }
    /**
     * Updates the scheduling configuration of an import task.
     *
     * @remarks
     * You can specify a ClientToken for write operations to ensure idempotence. If no ClientToken is provided, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncJobScheduleRequest
     * @returns UpdateContextDatabaseSyncJobScheduleResponse
     */
    async updateContextDatabaseSyncJobSchedule(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncJobScheduleWithOptions(request, runtime);
    }
    /**
     * Updates the metadata of a data selection scope.
     *
     * @remarks
     * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param tmpReq - UpdateContextDatabaseSyncSourceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncSourceResponse
     */
    async updateContextDatabaseSyncSourceWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateContextDatabaseSyncSourceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.sourceConfig)) {
            request.sourceConfigShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceConfig, "SourceConfig", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.sourceConfigShrink)) {
            query["SourceConfig"] = request.sourceConfigShrink;
        }
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncSource",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncSourceResponse({}));
    }
    /**
     * Updates the metadata of a data selection scope.
     *
     * @remarks
     * Write operations support idempotence via ClientToken. If ClientToken is not provided, the backend generates one automatically.
     *
     * @param request - UpdateContextDatabaseSyncSourceRequest
     * @returns UpdateContextDatabaseSyncSourceResponse
     */
    async updateContextDatabaseSyncSource(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncSourceWithOptions(request, runtime);
    }
    /**
     * Updates the explicit node selection for the data selection scope.
     *
     * @remarks
     * For write operations, you can pass the ClientToken parameter to ensure idempotency. If this parameter is not provided, the backend automatically generates one.
     *
     * @param tmpReq - UpdateContextDatabaseSyncSourceSelectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseSyncSourceSelectionResponse
     */
    async updateContextDatabaseSyncSourceSelectionWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateContextDatabaseSyncSourceSelectionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.selectedNodeKeys)) {
            request.selectedNodeKeysShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedNodeKeys, "SelectedNodeKeys", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.selectedNodeKeysShrink)) {
            query["SelectedNodeKeys"] = request.selectedNodeKeysShrink;
        }
        if (!$dara.isNull(request.selectionPolicy)) {
            query["SelectionPolicy"] = request.selectionPolicy;
        }
        if (!$dara.isNull(request.sourceId)) {
            query["SourceId"] = request.sourceId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseSyncSourceSelection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseSyncSourceSelectionResponse({}));
    }
    /**
     * Updates the explicit node selection for the data selection scope.
     *
     * @remarks
     * For write operations, you can pass the ClientToken parameter to ensure idempotency. If this parameter is not provided, the backend automatically generates one.
     *
     * @param request - UpdateContextDatabaseSyncSourceSelectionRequest
     * @returns UpdateContextDatabaseSyncSourceSelectionResponse
     */
    async updateContextDatabaseSyncSourceSelection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseSyncSourceSelectionWithOptions(request, runtime);
    }
    /**
     * Updates a ContextDB workspace.
     *
     * @remarks
     * Modifies the name of a workspace.
     *
     * @param request - UpdateContextDatabaseWorkspaceRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateContextDatabaseWorkspaceResponse
     */
    async updateContextDatabaseWorkspaceWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        if (!$dara.isNull(request.workspaceName)) {
            query["WorkspaceName"] = request.workspaceName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateContextDatabaseWorkspace",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateContextDatabaseWorkspaceResponse({}));
    }
    /**
     * Updates a ContextDB workspace.
     *
     * @remarks
     * Modifies the name of a workspace.
     *
     * @param request - UpdateContextDatabaseWorkspaceRequest
     * @returns UpdateContextDatabaseWorkspaceResponse
     */
    async updateContextDatabaseWorkspace(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateContextDatabaseWorkspaceWithOptions(request, runtime);
    }
    /**
     * Updates a custom agent.
     *
     * @param tmpReq - UpdateCustomAgentRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCustomAgentResponse
     */
    async updateCustomAgentWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateCustomAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.skillIds)) {
            request.skillIdsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.skillIds, "SkillIds", "json");
        }
        if (!$dara.isNull(tmpReq.tools)) {
            request.toolsShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tools, "Tools", "json");
        }
        let query = {};
        if (!$dara.isNull(request.customAgentId)) {
            query["CustomAgentId"] = request.customAgentId;
        }
        if (!$dara.isNull(request.enableTools)) {
            query["EnableTools"] = request.enableTools;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.skillIdsShrink)) {
            query["SkillIds"] = request.skillIdsShrink;
        }
        if (!$dara.isNull(request.systemPrompt)) {
            query["SystemPrompt"] = request.systemPrompt;
        }
        if (!$dara.isNull(request.toolsShrink)) {
            query["Tools"] = request.toolsShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateCustomAgent",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateCustomAgentResponse({}));
    }
    /**
     * Updates a custom agent.
     *
     * @param request - UpdateCustomAgentRequest
     * @returns UpdateCustomAgentResponse
     */
    async updateCustomAgent(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateCustomAgentWithOptions(request, runtime);
    }
    /**
     * Updates the alert threshold percentage for an API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param tmpReq - UpdateMOQuotaAlertThresholdRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMOQuotaAlertThresholdResponse
     */
    async updateMOQuotaAlertThresholdWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateMOQuotaAlertThresholdShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.apikey)) {
            request.apikeyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.apikey, "Apikey", "json");
        }
        let query = {};
        if (!$dara.isNull(request.apikeyShrink)) {
            query["Apikey"] = request.apikeyShrink;
        }
        if (!$dara.isNull(request.instanceId)) {
            query["InstanceId"] = request.instanceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMOQuotaAlertThreshold",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMOQuotaAlertThresholdResponse({}));
    }
    /**
     * Updates the alert threshold percentage for an API key.
     *
     * @remarks
     * ### Applicable engine
     * [RDS AI Assistant Ultimate Edition](https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/rds-copilot-ultra)
     *
     * @param request - UpdateMOQuotaAlertThresholdRequest
     * @returns UpdateMOQuotaAlertThresholdResponse
     */
    async updateMOQuotaAlertThreshold(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateMOQuotaAlertThresholdWithOptions(request, runtime);
    }
    /**
     * Updates the information of a specified Skill.
     *
     * @param tmpReq - UpdateSkillRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillResponse
     */
    async updateSkillWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateSkillShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.content)) {
            request.contentShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
        }
        if (!$dara.isNull(tmpReq.dbtypes)) {
            request.dbtypesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbtypes, "Dbtypes", "json");
        }
        let query = {};
        if (!$dara.isNull(request.contentShrink)) {
            query["Content"] = request.contentShrink;
        }
        if (!$dara.isNull(request.dbtypesShrink)) {
            query["Dbtypes"] = request.dbtypesShrink;
        }
        if (!$dara.isNull(request.description)) {
            query["Description"] = request.description;
        }
        if (!$dara.isNull(request.name)) {
            query["Name"] = request.name;
        }
        if (!$dara.isNull(request.skillId)) {
            query["SkillId"] = request.skillId;
        }
        if (!$dara.isNull(request.updateNote)) {
            query["UpdateNote"] = request.updateNote;
        }
        if (!$dara.isNull(request.uploadId)) {
            query["UploadId"] = request.uploadId;
        }
        if (!$dara.isNull(request.uploadToken)) {
            query["UploadToken"] = request.uploadToken;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateSkill",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateSkillResponse({}));
    }
    /**
     * Updates the information of a specified Skill.
     *
     * @param request - UpdateSkillRequest
     * @returns UpdateSkillResponse
     */
    async updateSkill(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.updateSkillWithOptions(request, runtime);
    }
    /**
     * Validates datasource credentials and authorization.
     *
     * @remarks
     * Validates the connection credentials and authorization.
     *
     * @param request - VerifyContextDatabaseSyncConnectionRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyContextDatabaseSyncConnectionResponse
     */
    async verifyContextDatabaseSyncConnectionWithOptions(request, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["ClientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.connectionId)) {
            query["ConnectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["WorkspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyContextDatabaseSyncConnection",
            version: "2025-05-07",
            protocol: "HTTPS",
            pathname: "/",
            method: "POST",
            authType: "AK",
            style: "RPC",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyContextDatabaseSyncConnectionResponse({}));
    }
    /**
     * Validates datasource credentials and authorization.
     *
     * @remarks
     * Validates the connection credentials and authorization.
     *
     * @param request - VerifyContextDatabaseSyncConnectionRequest
     * @returns VerifyContextDatabaseSyncConnectionResponse
     */
    async verifyContextDatabaseSyncConnection(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.verifyContextDatabaseSyncConnectionWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map