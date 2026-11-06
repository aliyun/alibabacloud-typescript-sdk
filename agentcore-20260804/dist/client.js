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
        this._productId = "AgentCore";
        let gatewayClient = new gateway_pop_1.default();
        this._spi = gatewayClient;
        this._endpointRule = "regional";
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("agentcore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
     * Writes messages or text to a memory store. If sync is omitted or set to true, the operation synchronously waits for extraction and returns only memories, which can be an empty array. If sync is set to false, the operation returns only a taskId, and you can query the result by calling GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store to fetch long-term memory to retrieve and use later.
     * - If `sync` is omitted or set to `true`: waits for the fetch to complete and returns `memories`. Returns an empty array if no memories are fetched.
     * - If `sync` is set to `false`: returns a `taskId`. You can query the fetch progress and results by calling [GetMemoryTask](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMemoryTask).
     *
     * @param tmpReq - AddMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns AddMemoriesResponse
     */
    async addMemoriesWithOptions(workspaceId, memoryStoreName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.AddMemoriesShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "AddMemories",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.AddMemoriesResponse({}));
    }
    /**
     * Writes messages or text to a memory store. If sync is omitted or set to true, the operation synchronously waits for extraction and returns only memories, which can be an empty array. If sync is set to false, the operation returns only a taskId, and you can query the result by calling GetMemoryTask.
     *
     * @remarks
     * Writes messages or text to a memory store to fetch long-term memory to retrieve and use later.
     * - If `sync` is omitted or set to `true`: waits for the fetch to complete and returns `memories`. Returns an empty array if no memories are fetched.
     * - If `sync` is set to `false`: returns a `taskId`. You can query the fetch progress and results by calling [GetMemoryTask](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMemoryTask).
     *
     * @param request - AddMemoriesRequest
     * @returns AddMemoriesResponse
     */
    async addMemories(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.addMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
     *
     * @remarks
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
     *
     * @param tmpReq - BatchDeleteModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchDeleteModelsResponse
     */
    async batchDeleteModelsWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.BatchDeleteModelsShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "BatchDeleteModels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models/actions/batch-delete`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.BatchDeleteModelsResponse({}));
    }
    /**
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
     *
     * @remarks
     * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
     *
     * @param request - BatchDeleteModelsRequest
     * @returns BatchDeleteModelsResponse
     */
    async batchDeleteModels(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.batchDeleteModelsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Uploads multiple skill ZIP packages through OSS and returns the processing result for each skill.
     *
     * @remarks
     * Imports multiple skill ZIP packages that have been uploaded to OSS into a workspace in batches, and returns the processing result for each skill.
     * OSS is used here to temporarily store the ZIP packages to be imported. First, call [GetSkillImportFileUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetSkillImportFileUrl) to obtain the upload URL and upload the files, and then call this operation. To check the package content and name conflicts in advance, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss).
     *
     * @param tmpReq - BatchUploadSkillsViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns BatchUploadSkillsViaOssResponse
     */
    async batchUploadSkillsViaOssWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.BatchUploadSkillsViaOssShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "BatchUploadSkillsViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skill-actions/batch-upload-via-oss`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.BatchUploadSkillsViaOssResponse({}));
    }
    /**
     * Uploads multiple skill ZIP packages through OSS and returns the processing result for each skill.
     *
     * @remarks
     * Imports multiple skill ZIP packages that have been uploaded to OSS into a workspace in batches, and returns the processing result for each skill.
     * OSS is used here to temporarily store the ZIP packages to be imported. First, call [GetSkillImportFileUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetSkillImportFileUrl) to obtain the upload URL and upload the files, and then call this operation. To check the package content and name conflicts in advance, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss).
     *
     * @param request - BatchUploadSkillsViaOssRequest
     * @returns BatchUploadSkillsViaOssResponse
     */
    async batchUploadSkillsViaOss(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.batchUploadSkillsViaOssWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Converts an MCP server to free-edit mode.
     *
     * @remarks
     * Converts an MCP server installed from a marketplace template to free-edit mode so that you can directly modify the server configuration. After the conversion, the original source and tag information is retained, and the template editing restrictions are removed. The server no longer appears on the use case page associated with the template.
     *
     * @param request - ConvertMcpToFreeEditRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ConvertMcpToFreeEditResponse
     */
    async convertMcpToFreeEditWithOptions(workspaceId, mcpServerId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ConvertMcpToFreeEdit",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}/convert-to-free-edit`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ConvertMcpToFreeEditResponse({}));
    }
    /**
     * Converts an MCP server to free-edit mode.
     *
     * @remarks
     * Converts an MCP server installed from a marketplace template to free-edit mode so that you can directly modify the server configuration. After the conversion, the original source and tag information is retained, and the template editing restrictions are removed. The server no longer appears on the use case page associated with the template.
     *
     * @param request - ConvertMcpToFreeEditRequest
     * @returns ConvertMcpToFreeEditResponse
     */
    async convertMcpToFreeEdit(workspaceId, mcpServerId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.convertMcpToFreeEditWithOptions(workspaceId, mcpServerId, request, headers, runtime);
    }
    /**
     * Creates an IM channel for a specified agent and binds it to a publicly accessible service endpoint.
     *
     * @remarks
     * Creates an IM channel for an agent to route messages from instant messaging platforms to the agent.
     * During creation, a publicly accessible service endpoint (`ServiceEndpoint`) is bound to the channel. After the channel is created, you can call [GetAgentIMChannel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentIMChannel) to query its configuration and status.
     *
     * @param tmpReq - CreateAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentIMChannelResponse
     */
    async createAgentIMChannelWithOptions(workspaceId, agentId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAgentIMChannelShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAgentIMChannel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAgentIMChannelResponse({}));
    }
    /**
     * Creates an IM channel for a specified agent and binds it to a publicly accessible service endpoint.
     *
     * @remarks
     * Creates an IM channel for an agent to route messages from instant messaging platforms to the agent.
     * During creation, a publicly accessible service endpoint (`ServiceEndpoint`) is bound to the channel. After the channel is created, you can call [GetAgentIMChannel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentIMChannel) to query its configuration and status.
     *
     * @param request - CreateAgentIMChannelRequest
     * @returns CreateAgentIMChannelResponse
     */
    async createAgentIMChannel(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createAgentIMChannelWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @remarks
     * Creates an agent template (AgentSpec) and generates the first draft version for editing reusable agent configurations. The creation fails if a template with the same name already exists in the same workspace. After creation, you can query the template and version information by calling [GetAgentSpec](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentSpec).
     *
     * @param tmpReq - CreateAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentSpecResponse
     */
    async createAgentSpecWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAgentSpecShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAgentSpec",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAgentSpecResponse({}));
    }
    /**
     * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
     *
     * @remarks
     * Creates an agent template (AgentSpec) and generates the first draft version for editing reusable agent configurations. The creation fails if a template with the same name already exists in the same workspace. After creation, you can query the template and version information by calling [GetAgentSpec](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentSpec).
     *
     * @param request - CreateAgentSpecRequest
     * @returns CreateAgentSpecResponse
     */
    async createAgentSpec(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createAgentSpecWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
     *
     * @remarks
     * Creates a new draft version for an existing agent template (AgentSpec) to modify and publish the next version of the configuration.
     * The template must already exist and must not have a draft currently being edited.
     *
     * @param tmpReq - CreateAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentSpecVersionResponse
     */
    async createAgentSpecVersionWithOptions(workspaceId, agentSpecName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAgentSpecVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAgentSpecVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/versions`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAgentSpecVersionResponse({}));
    }
    /**
     * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
     *
     * @remarks
     * Creates a new draft version for an existing agent template (AgentSpec) to modify and publish the next version of the configuration.
     * The template must already exist and must not have a draft currently being edited.
     *
     * @param request - CreateAgentSpecVersionRequest
     * @returns CreateAgentSpecVersionResponse
     */
    async createAgentSpecVersion(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createAgentSpecVersionWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * 保存智能体版本
     *
     * @remarks
     * 将指定托管智能体或自定义智能体当前已生效的配置保存为一个不可变的固定版本，并归档版本模板与制品。仅保存版本，不部署实例。其他类型的智能体（如外部智能体）不支持版本，返回 AgentVersionSubtypeUnsupported。Agent 最新发布必须已生效（latestSpecVersion 等于 effectiveSpecVersion）。系统按 Agent 递增生成版本号 agentVersion（v1、v2……），版本号在 Agent 内唯一且已删除版本的序号不复用，查询、删除版本及服务端点引用版本均使用该版本号。每个 Agent 最多保留 50 个未删除的版本，达到上限时返回 AgentVersionQuotaExceeded，删除不再使用的版本后可继续保存。versionName 相同且发布流水号相同的重复提交返回已有版本（不受上限限制）；versionName 相同但发布流水号不同时返回 AgentVersionAlreadyExists。
     *
     * @param tmpReq - CreateAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateAgentVersionResponse
     */
    async createAgentVersionWithOptions(workspaceId, agentId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateAgentVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateAgentVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/versions`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateAgentVersionResponse({}));
    }
    /**
     * 保存智能体版本
     *
     * @remarks
     * 将指定托管智能体或自定义智能体当前已生效的配置保存为一个不可变的固定版本，并归档版本模板与制品。仅保存版本，不部署实例。其他类型的智能体（如外部智能体）不支持版本，返回 AgentVersionSubtypeUnsupported。Agent 最新发布必须已生效（latestSpecVersion 等于 effectiveSpecVersion）。系统按 Agent 递增生成版本号 agentVersion（v1、v2……），版本号在 Agent 内唯一且已删除版本的序号不复用，查询、删除版本及服务端点引用版本均使用该版本号。每个 Agent 最多保留 50 个未删除的版本，达到上限时返回 AgentVersionQuotaExceeded，删除不再使用的版本后可继续保存。versionName 相同且发布流水号相同的重复提交返回已有版本（不受上限限制）；versionName 相同但发布流水号不同时返回 AgentVersionAlreadyExists。
     *
     * @param request - CreateAgentVersionRequest
     * @returns CreateAgentVersionResponse
     */
    async createAgentVersion(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createAgentVersionWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services. The credential content is submitted as a JSON string, and masked results are returned when queried.
     *
     * @remarks
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services.
     * ### Credential types
     * - `apiKey`: `credentialMetadata` is a JSON string that contains only a non-empty `apiKey`. Do not submit `resourceScope` and `resourceRefs`.
     * - `mcpHeader`: `credentialMetadata` is a JSON string that contains a non-empty `headers` array. Each item contains a non-empty `name` and `value` to configure MCP request headers.
     * ### MCP header scope
     * You must specify `resourceScope` when creating an `mcpHeader` credential:
     * - `ALL`: Applies to all MCP services. Omit `resourceRefs`.
     * - `SPECIFIED`: Applies to specified MCP services. `resourceRefs` must be a non-empty array. For each item, set `resourceType=mcpServer` and specify `resourceId`.
     * ### Subsequent queries
     * Use [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) or [ListCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListCredentials) to query credentials. For `apiKey`, a masked value is returned. For `mcpHeader`, only header names are returned, and header values are not returned.
     *
     * @param tmpReq - CreateCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCredentialResponse
     */
    async createCredentialWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateCredentialShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/credentials`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateCredentialResponse({}));
    }
    /**
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services. The credential content is submitted as a JSON string, and masked results are returned when queried.
     *
     * @remarks
     * Creates an apiKey or mcpHeader credential in a workspace for agents or MCP to access external services.
     * ### Credential types
     * - `apiKey`: `credentialMetadata` is a JSON string that contains only a non-empty `apiKey`. Do not submit `resourceScope` and `resourceRefs`.
     * - `mcpHeader`: `credentialMetadata` is a JSON string that contains a non-empty `headers` array. Each item contains a non-empty `name` and `value` to configure MCP request headers.
     * ### MCP header scope
     * You must specify `resourceScope` when creating an `mcpHeader` credential:
     * - `ALL`: Applies to all MCP services. Omit `resourceRefs`.
     * - `SPECIFIED`: Applies to specified MCP services. `resourceRefs` must be a non-empty array. For each item, set `resourceType=mcpServer` and specify `resourceId`.
     * ### Subsequent queries
     * Use [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) or [ListCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListCredentials) to query credentials. For `apiKey`, a masked value is returned. For `mcpHeader`, only header names are returned, and header values are not returned.
     *
     * @param request - CreateCredentialRequest
     * @returns CreateCredentialResponse
     */
    async createCredential(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createCredentialWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a custom code or image agent in a specified workspace, supports code package, ACR image, and custom image deployments, and executes the deployment asynchronously.
     *
     * @remarks
     * Deploys a user-provided code package or container image as an agent in a workspace. This corresponds to the "Custom Code / Image" creation method in the console.
     * ### Preparations
     * Prepare a writable workspace and submit name, roleArn, artifact, and runtime. In runtime, specify both compute and sessionPolicy. roleArn is the RAM role used by the agent to access your cloud resources.
     * ### Select a deployment method
     * | Deployment method | Required configurations |
     * | --- | --- |
     * | ACR image | artifact.port, and type=acr, instanceId, namespace, repo, and tag in artifact.container. |
     * | Custom image | artifact.port, artifact.container.type=custom, and the complete customImage. The clientToken query parameter is required. |
     * | Code package | artifact.port, and sourceUri, languageRuntime, and entrypoint in artifact.code. |
     * artifact.code and artifact.container are mutually exclusive. The service listening port ranges from 1 to 65535. You can specify a startup command for a container image by using artifact.container.entrypoint. If this parameter is omitted, the default startup method of the image is used.
     * ### Code package
     * - ZIP and TAR.GZ formats are supported. The compressed package size ranges from 1 to 500,000,000 bytes. Dependencies must be included in the package. The platform does not install dependencies or perform online builds.
     * - Invoke [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the currently active `languageRuntime`.
     * - For local files, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl) and upload the file directly by using the upload method, URL, and request headers returned in the response. Then, commit `sourceUri`.
     * - `sourceUri` supports `oss://` URLs or HTTPS object URLs of standard OSS public domain names, including signed URLs. Private OSS objects must allow the workspace role to read them. You can first invoke [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl) to complete the authorization.
     * - Read permissions, objects, and sizes are checked upon commit, and a fixed copy is saved. If the transfer failed, the agent configuration is not created. Archive integrity and decompression are checked when the instance starts.
     * - `entrypoint` is the startup command executed in the `/code` folder, such as `python main.py`. The command does not automatically execute shell pipelines or expand environment variables. For complex startup logic, write a script in the package.
     * Sample request body for a code package (the runtime environment is subject to the query result):
     * ```json
     * {
     *   "name": "code-agent",
     *   "roleArn": "acs:ram::1234567890123456:role/AgentRuntimeRole",
     *   "artifact": {
     *     "port": 8000,
     *     "code": {
     *       "sourceUri": "oss://example-code-bucket/releases/agent.zip",
     *       "languageRuntime": "python3.12",
     *       "entrypoint": "python main.py"
     *     }
     *   },
     *   "runtime": {
     *     "compute": {
     *       "computeClass": "STANDARD"
     *     },
     *     "sessionPolicy": {
     *       "type": "AFFINITY"
     *     }
     *   }
     * }
     * ```
     * ### Custom image
     * Specify the complete image address in customImage.image. Tags or digests are supported. Do not include protocols or user information. Configure the image pull network separately in customImage.pullNetwork:
     * | Pull method | Configuration |
     * | --- | --- |
     * | Internet | type=public. Do not specify VPC fields. |
     * | VPC | type=vpc. Specify vpcId, vSwitchId, and securityGroupId. |
     * If repository authentication is required, specify both customImage.username and customImage.password. For anonymous access, omit both. The password is not returned in the response. The image pull network and the agent runtime network are configured separately.
     * useImageCache=true applies only to ACR images. For custom images and code packages, set this parameter to false or omit it.
     * ### Runtime configurations
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide a valid HTTP request header name in headerName. Do not specify this field for other policies.
     * If network is omitted, the default access policy on the agent side is used. Actual access is still restricted by the workspace network. When submitting access items, specify the corresponding enabled field.
     * The total number of items in ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath must be an absolute path in the container, such as /data/train. It cannot conflict with platform reserved directories, be duplicated, or form parent-child directory overrides.
     * File mounts are used to allow the agent to access persistent data. When using AgenticFS, you can call [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl) to complete the access point authorization first.
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. The server for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The path must be an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If readOnly is omitted, the default value is false.
     * Environment variable names must be non-empty and unique in the list. Values must be strings, and empty strings are allowed. When configuring healthCheck, you must specify port. Omitting the health check means no health check is configured. When configuring logging.sls, specify both non-empty project and logstore.
     * ### Query results and retries
     * A successful response indicates that the request is accepted. Save the agentId and call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent). Check latestVersionStatus, latestExecutionError, status, and sandboxPhaseCounts to confirm the configuration processing and instance status.
     * The clientToken query parameter is required for custom image submissions, and optional for ACR image and code package submissions. The token must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the original token to retry the same submission. If the parameters are the same, the existing acceptance result is returned. Use a new token for different submission content.
     *
     * @param tmpReq - CreateCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateCustomAgentResponse
     */
    async createCustomAgentWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateCustomAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateCustomAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateCustomAgentResponse({}));
    }
    /**
     * Creates a custom code or image agent in a specified workspace, supports code package, ACR image, and custom image deployments, and executes the deployment asynchronously.
     *
     * @remarks
     * Deploys a user-provided code package or container image as an agent in a workspace. This corresponds to the "Custom Code / Image" creation method in the console.
     * ### Preparations
     * Prepare a writable workspace and submit name, roleArn, artifact, and runtime. In runtime, specify both compute and sessionPolicy. roleArn is the RAM role used by the agent to access your cloud resources.
     * ### Select a deployment method
     * | Deployment method | Required configurations |
     * | --- | --- |
     * | ACR image | artifact.port, and type=acr, instanceId, namespace, repo, and tag in artifact.container. |
     * | Custom image | artifact.port, artifact.container.type=custom, and the complete customImage. The clientToken query parameter is required. |
     * | Code package | artifact.port, and sourceUri, languageRuntime, and entrypoint in artifact.code. |
     * artifact.code and artifact.container are mutually exclusive. The service listening port ranges from 1 to 65535. You can specify a startup command for a container image by using artifact.container.entrypoint. If this parameter is omitted, the default startup method of the image is used.
     * ### Code package
     * - ZIP and TAR.GZ formats are supported. The compressed package size ranges from 1 to 500,000,000 bytes. Dependencies must be included in the package. The platform does not install dependencies or perform online builds.
     * - Invoke [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes) to query the currently active `languageRuntime`.
     * - For local files, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl) and upload the file directly by using the upload method, URL, and request headers returned in the response. Then, commit `sourceUri`.
     * - `sourceUri` supports `oss://` URLs or HTTPS object URLs of standard OSS public domain names, including signed URLs. Private OSS objects must allow the workspace role to read them. You can first invoke [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl) to complete the authorization.
     * - Read permissions, objects, and sizes are checked upon commit, and a fixed copy is saved. If the transfer failed, the agent configuration is not created. Archive integrity and decompression are checked when the instance starts.
     * - `entrypoint` is the startup command executed in the `/code` folder, such as `python main.py`. The command does not automatically execute shell pipelines or expand environment variables. For complex startup logic, write a script in the package.
     * Sample request body for a code package (the runtime environment is subject to the query result):
     * ```json
     * {
     *   "name": "code-agent",
     *   "roleArn": "acs:ram::1234567890123456:role/AgentRuntimeRole",
     *   "artifact": {
     *     "port": 8000,
     *     "code": {
     *       "sourceUri": "oss://example-code-bucket/releases/agent.zip",
     *       "languageRuntime": "python3.12",
     *       "entrypoint": "python main.py"
     *     }
     *   },
     *   "runtime": {
     *     "compute": {
     *       "computeClass": "STANDARD"
     *     },
     *     "sessionPolicy": {
     *       "type": "AFFINITY"
     *     }
     *   }
     * }
     * ```
     * ### Custom image
     * Specify the complete image address in customImage.image. Tags or digests are supported. Do not include protocols or user information. Configure the image pull network separately in customImage.pullNetwork:
     * | Pull method | Configuration |
     * | --- | --- |
     * | Internet | type=public. Do not specify VPC fields. |
     * | VPC | type=vpc. Specify vpcId, vSwitchId, and securityGroupId. |
     * If repository authentication is required, specify both customImage.username and customImage.password. For anonymous access, omit both. The password is not returned in the response. The image pull network and the agent runtime network are configured separately.
     * useImageCache=true applies only to ACR images. For custom images and code packages, set this parameter to false or omit it.
     * ### Runtime configurations
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide a valid HTTP request header name in headerName. Do not specify this field for other policies.
     * If network is omitted, the default access policy on the agent side is used. Actual access is still restricted by the workspace network. When submitting access items, specify the corresponding enabled field.
     * The total number of items in ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath must be an absolute path in the container, such as /data/train. It cannot conflict with platform reserved directories, be duplicated, or form parent-child directory overrides.
     * File mounts are used to allow the agent to access persistent data. When using AgenticFS, you can call [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl) to complete the access point authorization first.
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. The server for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The path must be an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If readOnly is omitted, the default value is false.
     * Environment variable names must be non-empty and unique in the list. Values must be strings, and empty strings are allowed. When configuring healthCheck, you must specify port. Omitting the health check means no health check is configured. When configuring logging.sls, specify both non-empty project and logstore.
     * ### Query results and retries
     * A successful response indicates that the request is accepted. Save the agentId and call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent). Check latestVersionStatus, latestExecutionError, status, and sandboxPhaseCounts to confirm the configuration processing and instance status.
     * The clientToken query parameter is required for custom image submissions, and optional for ACR image and code package submissions. The token must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the original token to retry the same submission. If the parameters are the same, the existing acceptance result is returned. Use a new token for different submission content.
     *
     * @param request - CreateCustomAgentRequest
     * @returns CreateCustomAgentResponse
     */
    async createCustomAgent(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createCustomAgentWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates an agent that runs in an external environment, saves the configurations for the platform model, instructions, tools, and skills, and asynchronously processes the bootstrap configuration.
     *
     * @remarks
     * Registers an agent hosted in the user\\"s runtime environment, which corresponds to the "Managed Agent" in the console. After registration, you can continue to obtain the bootstrap information and complete the connection.
     * ### Configure a managed agent
     * Provide name, and select the configuration based on the model source:
     * | modelSource | Model configuration |
     * | --- | --- |
     * | PLATFORM | Uses a platform model. Provide model.modelConnectionId and model.modelName. |
     * | RUNTIME | The model is managed by the external runtime environment. Do not submit model. |
     * If modelSource is omitted but model is provided, it is processed as PLATFORM. If both are omitted, the agent cannot be created.
     * Configure instructions, MCP tools, and skills through instruction, tools, and skills. You can also reference an agent template through template.aiRegistry. The external process is deployed by the caller. This operation does not create a platform runtime instance.
     * ### Bootstrap sequence
     * **Step 1:** After creation, save the agentId and call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration processing result.
     * **Step 2:** After the latest configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to obtain the available bootstrap networks.
     * **Step 3:** Select an available network and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the bootstrap token and CMS configuration. The external process then completes the bootstrap.
     * clientToken is a reserved query parameter and currently does not provide idempotency guarantees.
     *
     * @param tmpReq - CreateExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateExternalAgentResponse
     */
    async createExternalAgentWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateExternalAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateExternalAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateExternalAgentResponse({}));
    }
    /**
     * Creates an agent that runs in an external environment, saves the configurations for the platform model, instructions, tools, and skills, and asynchronously processes the bootstrap configuration.
     *
     * @remarks
     * Registers an agent hosted in the user\\"s runtime environment, which corresponds to the "Managed Agent" in the console. After registration, you can continue to obtain the bootstrap information and complete the connection.
     * ### Configure a managed agent
     * Provide name, and select the configuration based on the model source:
     * | modelSource | Model configuration |
     * | --- | --- |
     * | PLATFORM | Uses a platform model. Provide model.modelConnectionId and model.modelName. |
     * | RUNTIME | The model is managed by the external runtime environment. Do not submit model. |
     * If modelSource is omitted but model is provided, it is processed as PLATFORM. If both are omitted, the agent cannot be created.
     * Configure instructions, MCP tools, and skills through instruction, tools, and skills. You can also reference an agent template through template.aiRegistry. The external process is deployed by the caller. This operation does not create a platform runtime instance.
     * ### Bootstrap sequence
     * **Step 1:** After creation, save the agentId and call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration processing result.
     * **Step 2:** After the latest configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to obtain the available bootstrap networks.
     * **Step 3:** Select an available network and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the bootstrap token and CMS configuration. The external process then completes the bootstrap.
     * clientToken is a reserved query parameter and currently does not provide idempotency guarantees.
     *
     * @param request - CreateExternalAgentRequest
     * @returns CreateExternalAgentResponse
     */
    async createExternalAgent(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createExternalAgentWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Issues an access token for a specified network to a managed agent with effective configurations and returns the CMS configuration.
     *
     * @remarks
     * Issues an access token and connection configurations for a registered managed agent whose configurations have taken effect to complete the onboarding in the runtime environment where the agent resides.
     * ### Prerequisites and parameters
     * The managed agent must be in the running state, and its latest configurations must have taken effect. Call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) first to query available networks.
     * The `networkType` parameter is passed as a query parameter. Valid values: `INTRANET` (internal network) and `INTERNET` (Internet). The selected endpoint must be available.
     * ### Use the response
     * Pass the `bootstrapToken` to the external runtime process to complete the onboarding. The `tokenFingerprint` is used to identify the token and cannot be used as a substitute for the token. The `cms` field contains the observability reporting configurations for the corresponding network. Configure the endpoint, workspace, and license key as provided in the response.
     *
     * @param request - CreateExternalAgentBootstrapTokenRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateExternalAgentBootstrapTokenResponse
     */
    async createExternalAgentBootstrapTokenWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.networkType)) {
            query["networkType"] = request.networkType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateExternalAgentBootstrapToken",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents/${$dara.URL.percentEncode(agentId)}/bootstrap/create`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateExternalAgentBootstrapTokenResponse({}));
    }
    /**
     * Issues an access token for a specified network to a managed agent with effective configurations and returns the CMS configuration.
     *
     * @remarks
     * Issues an access token and connection configurations for a registered managed agent whose configurations have taken effect to complete the onboarding in the runtime environment where the agent resides.
     * ### Prerequisites and parameters
     * The managed agent must be in the running state, and its latest configurations must have taken effect. Call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) first to query available networks.
     * The `networkType` parameter is passed as a query parameter. Valid values: `INTRANET` (internal network) and `INTERNET` (Internet). The selected endpoint must be available.
     * ### Use the response
     * Pass the `bootstrapToken` to the external runtime process to complete the onboarding. The `tokenFingerprint` is used to identify the token and cannot be used as a substitute for the token. The `cms` field contains the observability reporting configurations for the corresponding network. Configure the endpoint, workspace, and license key as provided in the response.
     *
     * @param request - CreateExternalAgentBootstrapTokenRequest
     * @returns CreateExternalAgentBootstrapTokenResponse
     */
    async createExternalAgentBootstrapToken(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createExternalAgentBootstrapTokenWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Binds an external identity provider such as DingTalk, Lark, or a custom identity source to a workspace for enterprise account logon and user synchronization.
     *
     * @remarks
     * Integrates an enterprise identity source with a workspace to allow application users to log on with enterprise accounts, or to synchronize users from the enterprise address book to the workspace.
     * DingTalk, Lark, and custom identity sources (CustomSSO) are supported. A workspace can be bound to only one identity source. To change the integration method, you must unbind the current identity source first.
     * ### Select an integration method
     * | Integration method | Scenario | Task completed by this operation |
     * | --- | --- | --- |
     * | DingTalk or Lark | The enterprise already uses DingTalk or Lark and wants to integrate enterprise accounts and the address book. | Saves the enterprise application credentials and establishes a binding for subsequent logon and address book synchronization configuration. |
     * | Custom identity source (CustomSSO) | The enterprise wants to integrate its own identity authentication and user management system. | Creates a shared user pool to prepare for subsequent SAML single sign-on (SSO) and SCIM user synchronization configuration. |
     * A user pool stores application users and identity integration configurations. SAML handles enterprise account logon. SCIM provisions users from the enterprise identity system to the user pool. You can configure these two capabilities separately.
     * ### Bind DingTalk or Lark
     * Specify the enterprise application credentials in metadata. DingTalk requires appKey, appSecret, and corpId. Lark requires appId and appSecret.
     * Logon is enabled by default. A user synchronization task is executed by default upon the first binding. If you want to select departments before synchronization, set syncOnBind to false.
     * Subsequent address book change synchronization is controlled by syncEnabled, which is disabled by default. When enabled, you must also provide encryptKey and verificationToken.
     * ### Bind a custom identity source
     * When you create a CustomSSO binding, you only need to specify the identity source type:
     * ```http
     * POST /workspaces/{workspaceId}/identity-providers
     * {"identityProviderType":"CustomSSO"}
     * ```
     * This call only creates a user pool. Logon and user synchronization are disabled by default. Do not specify metadata, loginEnabled, or syncEnabled during creation.
     * After creation, call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. If WAITING_CONFIGURATION is returned, the user pool is created and you can proceed with the integration configuration:
     * - **Integrate enterprise account logon**: Call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the SAML integration information of AgentCore and configure it in the enterprise identity system. Then, call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the SAML configuration of the enterprise identity system and enable logon as needed.
     * - **Integrate user synchronization**: Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to obtain the SCIM receiving endpoint and credentials, and configure them in the enterprise identity system. After the external configuration is complete, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to enable AgentCore user synchronization.
     * The two processes are independent. You can select one or both based on your business requirements.
     *
     * @param tmpReq - CreateIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderResponse
     */
    async createIdentityProviderWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateIdentityProviderShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateIdentityProvider",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderResponse({}));
    }
    /**
     * Binds an external identity provider such as DingTalk, Lark, or a custom identity source to a workspace for enterprise account logon and user synchronization.
     *
     * @remarks
     * Integrates an enterprise identity source with a workspace to allow application users to log on with enterprise accounts, or to synchronize users from the enterprise address book to the workspace.
     * DingTalk, Lark, and custom identity sources (CustomSSO) are supported. A workspace can be bound to only one identity source. To change the integration method, you must unbind the current identity source first.
     * ### Select an integration method
     * | Integration method | Scenario | Task completed by this operation |
     * | --- | --- | --- |
     * | DingTalk or Lark | The enterprise already uses DingTalk or Lark and wants to integrate enterprise accounts and the address book. | Saves the enterprise application credentials and establishes a binding for subsequent logon and address book synchronization configuration. |
     * | Custom identity source (CustomSSO) | The enterprise wants to integrate its own identity authentication and user management system. | Creates a shared user pool to prepare for subsequent SAML single sign-on (SSO) and SCIM user synchronization configuration. |
     * A user pool stores application users and identity integration configurations. SAML handles enterprise account logon. SCIM provisions users from the enterprise identity system to the user pool. You can configure these two capabilities separately.
     * ### Bind DingTalk or Lark
     * Specify the enterprise application credentials in metadata. DingTalk requires appKey, appSecret, and corpId. Lark requires appId and appSecret.
     * Logon is enabled by default. A user synchronization task is executed by default upon the first binding. If you want to select departments before synchronization, set syncOnBind to false.
     * Subsequent address book change synchronization is controlled by syncEnabled, which is disabled by default. When enabled, you must also provide encryptKey and verificationToken.
     * ### Bind a custom identity source
     * When you create a CustomSSO binding, you only need to specify the identity source type:
     * ```http
     * POST /workspaces/{workspaceId}/identity-providers
     * {"identityProviderType":"CustomSSO"}
     * ```
     * This call only creates a user pool. Logon and user synchronization are disabled by default. Do not specify metadata, loginEnabled, or syncEnabled during creation.
     * After creation, call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. If WAITING_CONFIGURATION is returned, the user pool is created and you can proceed with the integration configuration:
     * - **Integrate enterprise account logon**: Call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the SAML integration information of AgentCore and configure it in the enterprise identity system. Then, call [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to save the SAML configuration of the enterprise identity system and enable logon as needed.
     * - **Integrate user synchronization**: Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to obtain the SCIM receiving endpoint and credentials, and configure them in the enterprise identity system. After the external configuration is complete, call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to enable AgentCore user synchronization.
     * The two processes are independent. You can select one or both based on your business requirements.
     *
     * @param request - CreateIdentityProviderRequest
     * @returns CreateIdentityProviderResponse
     */
    async createIdentityProvider(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createIdentityProviderWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Explicitly issues a SCIM credential and returns the plaintext token only in the current response. A maximum of two credentials can exist in the same pool. This operation does not automatically revoke old credentials or enable AC user synchronization.
     *
     * @remarks
     * Creates a SCIM access token to authorize an enterprise identity system to send user provisioning requests to AgentCore. For example, when you plan to replace the token used by the enterprise identity system, you can create a new token first and revoke the old token after the switchover is complete.
     * SCIM is a user provisioning protocol through which an enterprise identity system sends user information by using a receiving endpoint and an access token.
     * ### Before you begin
     * A `CustomSSO` binding is created, and the SCIM receiving endpoint is enabled by calling [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM).
     * A maximum of two SCIM credentials can be retained in the same user pool. When the limit is reached, query existing credentials by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) and revoke the credentials that are no longer in use.
     * ### What to do next
     * **Step 1:** Save the plaintext of the `token` in the response. The token is returned only upon creation. You can only query the credential summary later.
     * **Step 2:** Configure the receiving endpoint and the new token in the enterprise identity system.
     * **Step 3:** After you confirm that the enterprise identity system uses the new token, revoke the old token by calling [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential) as needed.
     * If the creation response is lost, query the credential list to verify the creation result to avoid duplicate creation and occupying the credential quota. The user synchronization switch is configured separately by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - CreateIdentityProviderSCIMCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderSCIMCredentialResponse
     */
    async createIdentityProviderSCIMCredentialWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateIdentityProviderSCIMCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning/credentials`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderSCIMCredentialResponse({}));
    }
    /**
     * Explicitly issues a SCIM credential and returns the plaintext token only in the current response. A maximum of two credentials can exist in the same pool. This operation does not automatically revoke old credentials or enable AC user synchronization.
     *
     * @remarks
     * Creates a SCIM access token to authorize an enterprise identity system to send user provisioning requests to AgentCore. For example, when you plan to replace the token used by the enterprise identity system, you can create a new token first and revoke the old token after the switchover is complete.
     * SCIM is a user provisioning protocol through which an enterprise identity system sends user information by using a receiving endpoint and an access token.
     * ### Before you begin
     * A `CustomSSO` binding is created, and the SCIM receiving endpoint is enabled by calling [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM).
     * A maximum of two SCIM credentials can be retained in the same user pool. When the limit is reached, query existing credentials by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) and revoke the credentials that are no longer in use.
     * ### What to do next
     * **Step 1:** Save the plaintext of the `token` in the response. The token is returned only upon creation. You can only query the credential summary later.
     * **Step 2:** Configure the receiving endpoint and the new token in the enterprise identity system.
     * **Step 3:** After you confirm that the enterprise identity system uses the new token, revoke the old token by calling [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential) as needed.
     * If the creation response is lost, query the credential list to verify the creation result to avoid duplicate creation and occupying the credential quota. The user synchronization switch is configured separately by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - CreateIdentityProviderSCIMCredentialRequest
     * @returns CreateIdentityProviderSCIMCredentialResponse
     */
    async createIdentityProviderSCIMCredential(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createIdentityProviderSCIMCredentialWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Initiates a manual synchronization for an identity provider.
     *
     * @remarks
     * Synchronizes users from an enterprise identity provider to a workspace based on the saved department scope. This is suitable for importing users for the first time or manually updating workspace users after adjusting the synchronization scope.
     * ### Prerequisites
     * - The identity provider is configured and its status is `READY`. If the previous synchronization failed and the status is `SYNC_FAILED`, you can also re-initiate it.
     * - The user pool is ready, and no identity provider operations are in progress.
     * - Manual synchronization uses the saved `syncScope`. You do not need to enable `syncEnabled`, which is used for subsequent address book change synchronization.
     * ### Steps for synchronizing by department
     * **Step 1:** Query departments by calling [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) and select the scope to synchronize.
     * **Step 2:** Save the `syncScope` by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete.
     * **Step 3:** Call this operation to initiate the synchronization and save the returned `taskId`.
     * **Step 4:** Query the progress by calling [GetIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSyncJob). After the synchronization is complete, view the workspace user list.
     * If you want to select departments before the initial synchronization, set `syncOnBind=false` when creating the identity provider, and then perform the preceding steps.
     * ### Synchronization results and re-execution
     * Synchronization is subject to the maximum number of users allowed in the workspace. Narrowing the synchronization scope does not actively delete users that have already been synchronized.
     * Each successful initiation creates a new synchronization task. If a request times out or the response is lost, check the identity provider status by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) before deciding whether to resubmit the request.
     *
     * @param request - CreateIdentityProviderSyncJobRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateIdentityProviderSyncJobResponse
     */
    async createIdentityProviderSyncJobWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateIdentityProviderSyncJob",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}/sync-jobs`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderSyncJobResponse({}));
    }
    /**
     * Initiates a manual synchronization for an identity provider.
     *
     * @remarks
     * Synchronizes users from an enterprise identity provider to a workspace based on the saved department scope. This is suitable for importing users for the first time or manually updating workspace users after adjusting the synchronization scope.
     * ### Prerequisites
     * - The identity provider is configured and its status is `READY`. If the previous synchronization failed and the status is `SYNC_FAILED`, you can also re-initiate it.
     * - The user pool is ready, and no identity provider operations are in progress.
     * - Manual synchronization uses the saved `syncScope`. You do not need to enable `syncEnabled`, which is used for subsequent address book change synchronization.
     * ### Steps for synchronizing by department
     * **Step 1:** Query departments by calling [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) and select the scope to synchronize.
     * **Step 2:** Save the `syncScope` by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete.
     * **Step 3:** Call this operation to initiate the synchronization and save the returned `taskId`.
     * **Step 4:** Query the progress by calling [GetIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSyncJob). After the synchronization is complete, view the workspace user list.
     * If you want to select departments before the initial synchronization, set `syncOnBind=false` when creating the identity provider, and then perform the preceding steps.
     * ### Synchronization results and re-execution
     * Synchronization is subject to the maximum number of users allowed in the workspace. Narrowing the synchronization scope does not actively delete users that have already been synchronized.
     * Each successful initiation creates a new synchronization task. If a request times out or the response is lost, check the identity provider status by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) before deciding whether to resubmit the request.
     *
     * @param request - CreateIdentityProviderSyncJobRequest
     * @returns CreateIdentityProviderSyncJobResponse
     */
    async createIdentityProviderSyncJob(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createIdentityProviderSyncJobWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Creates or reuses a cache for an ACR Enterprise Edition image in a workspace, and returns the cache status upon acceptance.
     *
     * @remarks
     * Pre-builds or reuses an ACR Enterprise Edition image cache for custom code or image agents for subsequent deployment and startup.
     * ### Request parameters
     * `regionId`, `workspaceId`, and `clientToken` are passed as query parameters. The region must match the entry endpoint and the workspace.
     * Specify `acrInstanceId`, `namespace`, `repository`, and `tag` in the JSON request body. For `repository`, specify only the repository name without repeating the namespace. The source repository must have pull authorization for the workspace resource role. You can obtain the authorization URL by calling [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl).
     * ### Transfer network
     * Both `accessInternet` and `accessVpc` must be provided, and at least one must be set to `true`. The server validates this based on the workspace network conditions. These parameters control the source reading and transfer for the current operation and do not modify the runtime network of the agent.
     * ### Acceptance and readiness
     * A successful response returns the current cache snapshot. `PENDING` indicates that the cache is being prepared, `READY` indicates that the cache is ready, and `FAILED` indicates a failure. For failures, check the `error` field. Save the `imageId` and call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) to query subsequent results. If the image digest has not been parsed, `digest` may be empty.
     * Currently, `clientToken` is only validated to ensure it is not empty. It does not guarantee deduplication by identifier or recovery of the original acceptance result. If the result is not confirmed, query the existing cache first.
     *
     * @param tmpReq - CreateImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateImageCacheResponse
     */
    async createImageCacheWithOptions(tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateImageCacheShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["regionId"] = request.regionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["workspaceId"] = request.workspaceId;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateImageCache",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/image-caches`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateImageCacheResponse({}));
    }
    /**
     * Creates or reuses a cache for an ACR Enterprise Edition image in a workspace, and returns the cache status upon acceptance.
     *
     * @remarks
     * Pre-builds or reuses an ACR Enterprise Edition image cache for custom code or image agents for subsequent deployment and startup.
     * ### Request parameters
     * `regionId`, `workspaceId`, and `clientToken` are passed as query parameters. The region must match the entry endpoint and the workspace.
     * Specify `acrInstanceId`, `namespace`, `repository`, and `tag` in the JSON request body. For `repository`, specify only the repository name without repeating the namespace. The source repository must have pull authorization for the workspace resource role. You can obtain the authorization URL by calling [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl).
     * ### Transfer network
     * Both `accessInternet` and `accessVpc` must be provided, and at least one must be set to `true`. The server validates this based on the workspace network conditions. These parameters control the source reading and transfer for the current operation and do not modify the runtime network of the agent.
     * ### Acceptance and readiness
     * A successful response returns the current cache snapshot. `PENDING` indicates that the cache is being prepared, `READY` indicates that the cache is ready, and `FAILED` indicates a failure. For failures, check the `error` field. Save the `imageId` and call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) to query subsequent results. If the image digest has not been parsed, `digest` may be empty.
     * Currently, `clientToken` is only validated to ensure it is not empty. It does not guarantee deduplication by identifier or recovery of the original acceptance result. If the result is not confirmed, query the existing cache first.
     *
     * @param request - CreateImageCacheRequest
     * @returns CreateImageCacheResponse
     */
    async createImageCache(request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createImageCacheWithOptions(request, headers, runtime);
    }
    /**
     * Creates a managed Harness agent in a specified workspace, configures the harness, model, skills, and runtime resources, and deploys the agent asynchronously.
     *
     * @remarks
     * Creates an agent by using a platform-managed runtime framework. This corresponds to the "Managed Harness" creation method in the console, where you can configure the model, instructions, and skills.
     * ### Required configurations
     * Submit name, model, and runtime. The runtime parameter must include both compute and sessionPolicy. The agent is deployed and run by the platform, so you do not need to provide a code package or container image.
     * ### Harness and model
     * | Harness | Model and connector configurations |
     * | --- | --- |
     * | qwenpaw | If you omit harness during creation, this type is used by default. Set model.modelConnectionId to the workspace model connection ID, and set model.modelName to the name of the model created under this connection. |
     * | qodercli | The qodercli connector must be enabled in the workspace. Set model.modelConnectionId to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). You can omit model.modelName. |
     * harness is an object, such as {"type":"qwenpaw"}. For qodercli, set harness.configuration.connectorServiceAccountKey to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. You can omit this parameter if only one key record exists. If multiple records exist, you must specify this parameter. connectorServiceAccountName is the account name. Do not specify these two binding fields for qwenpaw.
     * The harness type cannot be changed after creation.
     * ### Instructions, templates, and skills
     * skills uses the skill names in the workspace AI registry. If sourceType=REFERENCE, the version is referenced by versionSelector: use LABEL with a label name, or VERSION with a specific version number. If the selector is omitted, LABEL/latest is used. If sourceType=STATIC, static files bundled with the package are used, and no version selector is provided.
     * For template.aiRegistry, specify the agent template name and an optional version. If you omit the version during creation, the published version is resolved and fixed. When a template is used, instruction, promptVariables, and subAgents are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions by using configuredSkills and skills.
     * If you do not use a template, you can set instructions by using instruction, declare variables by using promptVariables, and configure up to 20 sub-agents by using subAgents. The name and instruction of a sub-agent cannot be empty. Each sub-agent name must be unique. Tools currently use tools[].type=MCP.
     * ### Runtime configurations and mounts
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide headerName. Do not specify this parameter for other policies.
     * If you provide network, you must specify both accessInternet.enabled and accessVpc.enabled. Actual access is restricted by the workspace network configurations.
     * The total number of ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path in the container, such as /data/train. The path cannot conflict with platform-reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * File mounts are used to allow the agent to access persistent data. When you use AgenticFS, you can first complete the access point authorization by using [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl).
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. The server for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The path is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If readOnly is omitted, the default value is false.
     * environment.variables configures environment variables, and environment.credentialReferences references workspace credentials. Environment variable names must be non-empty and unique, and values must be strings.
     * ### Query deployment results
     * A successful response indicates that the request is accepted. Save the agentId and use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query latestVersionStatus, status, and sandboxPhaseCounts to confirm the configuration processing and instance status. clientToken is a reserved query parameter and currently does not provide idempotence guarantees.
     *
     * @param tmpReq - CreateManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateManagedAgentResponse
     */
    async createManagedAgentWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateManagedAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateManagedAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateManagedAgentResponse({}));
    }
    /**
     * Creates a managed Harness agent in a specified workspace, configures the harness, model, skills, and runtime resources, and deploys the agent asynchronously.
     *
     * @remarks
     * Creates an agent by using a platform-managed runtime framework. This corresponds to the "Managed Harness" creation method in the console, where you can configure the model, instructions, and skills.
     * ### Required configurations
     * Submit name, model, and runtime. The runtime parameter must include both compute and sessionPolicy. The agent is deployed and run by the platform, so you do not need to provide a code package or container image.
     * ### Harness and model
     * | Harness | Model and connector configurations |
     * | --- | --- |
     * | qwenpaw | If you omit harness during creation, this type is used by default. Set model.modelConnectionId to the workspace model connection ID, and set model.modelName to the name of the model created under this connection. |
     * | qodercli | The qodercli connector must be enabled in the workspace. Set model.modelConnectionId to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). You can omit model.modelName. |
     * harness is an object, such as {"type":"qwenpaw"}. For qodercli, set harness.configuration.connectorServiceAccountKey to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original service account key. You can omit this parameter if only one key record exists. If multiple records exist, you must specify this parameter. connectorServiceAccountName is the account name. Do not specify these two binding fields for qwenpaw.
     * The harness type cannot be changed after creation.
     * ### Instructions, templates, and skills
     * skills uses the skill names in the workspace AI registry. If sourceType=REFERENCE, the version is referenced by versionSelector: use LABEL with a label name, or VERSION with a specific version number. If the selector is omitted, LABEL/latest is used. If sourceType=STATIC, static files bundled with the package are used, and no version selector is provided.
     * For template.aiRegistry, specify the agent template name and an optional version. If you omit the version during creation, the published version is resolved and fixed. When a template is used, instruction, promptVariables, and subAgents are derived from the template, and the corresponding fields in the current request do not take effect. Explicit skills and template skills are recorded separately. You can query the target and effective versions by using configuredSkills and skills.
     * If you do not use a template, you can set instructions by using instruction, declare variables by using promptVariables, and configure up to 20 sub-agents by using subAgents. The name and instruction of a sub-agent cannot be empty. Each sub-agent name must be unique. Tools currently use tools[].type=MCP.
     * ### Runtime configurations and mounts
     * Omitted fields in runtime.hpa use the following default values:
     * | Field | Default value | Valid values and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time of a session, in seconds. Valid values: 60 to 86400. |
     * If sessionPolicy.type=ISOLATED_HEADER_FIELD, you must provide headerName. Do not specify this parameter for other policies.
     * If you provide network, you must specify both accessInternet.enabled and accessVpc.enabled. Actual access is restricted by the workspace network configurations.
     * The total number of ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path in the container, such as /data/train. The path cannot conflict with platform-reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * File mounts are used to allow the agent to access persistent data. When you use AgenticFS, you can first complete the access point authorization by using [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl).
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. The server for an AgenticFS mount is the access point domain name, without a protocol, port, or path. The path is an existing non-empty relative directory in the access point. You cannot mount the root directory of the access point. If readOnly is omitted, the default value is false.
     * environment.variables configures environment variables, and environment.credentialReferences references workspace credentials. Environment variable names must be non-empty and unique, and values must be strings.
     * ### Query deployment results
     * A successful response indicates that the request is accepted. Save the agentId and use [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query latestVersionStatus, status, and sandboxPhaseCounts to confirm the configuration processing and instance status. clientToken is a reserved query parameter and currently does not provide idempotence guarantees.
     *
     * @param request - CreateManagedAgentRequest
     * @returns CreateManagedAgentResponse
     */
    async createManagedAgent(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createManagedAgentWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates an MCP service in a specified workspace. The creation process is asynchronous. You can check whether the service is ready by using the returned status or a query operation.
     *
     * @remarks
     * Creates an MCP service in a workspace for agents to use the tools provided by the service.
     * The creation process is executed asynchronously. After you submit the request, call the [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) operation to check whether the service is ready.
     * To deploy the service by using a local code package, first call the [GetMcpCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpCodePackageUploadUrl) operation to obtain the upload URL and upload the file. Then, fill in the returned code package token in the deployment configuration.
     * The `clientToken` parameter does not provide idempotency guarantees. If the request result is not confirmed, query existing services before you decide whether to recreate the service.
     *
     * @param tmpReq - CreateMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMcpResponse
     */
    async createMcpWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateMcpShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateMcp",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateMcpResponse({}));
    }
    /**
     * Creates an MCP service in a specified workspace. The creation process is asynchronous. You can check whether the service is ready by using the returned status or a query operation.
     *
     * @remarks
     * Creates an MCP service in a workspace for agents to use the tools provided by the service.
     * The creation process is executed asynchronously. After you submit the request, call the [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) operation to check whether the service is ready.
     * To deploy the service by using a local code package, first call the [GetMcpCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpCodePackageUploadUrl) operation to obtain the upload URL and upload the file. Then, fill in the returned code package token in the deployment configuration.
     * The `clientToken` parameter does not provide idempotency guarantees. If the request result is not confirmed, query existing services before you decide whether to recreate the service.
     *
     * @param request - CreateMcpRequest
     * @returns CreateMcpResponse
     */
    async createMcp(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createMcpWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a long-term memory store in a specified workspace.
     *
     * @remarks
     * Creates a long-term memory store (MemoryStore) in a workspace to organize the long-term memories of an agent and their source sessions.
     * After creation, you can write messages or text by using [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) and retrieve memories by semantics by using [SearchMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/SearchMemories).
     *
     * @param tmpReq - CreateMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateMemoryStoreResponse
     */
    async createMemoryStoreWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateMemoryStoreShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateMemoryStore",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateMemoryStoreResponse({}));
    }
    /**
     * Creates a long-term memory store in a specified workspace.
     *
     * @remarks
     * Creates a long-term memory store (MemoryStore) in a workspace to organize the long-term memories of an agent and their source sessions.
     * After creation, you can write messages or text by using [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) and retrieve memories by semantics by using [SearchMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/SearchMemories).
     *
     * @param request - CreateMemoryStoreRequest
     * @returns CreateMemoryStoreResponse
     */
    async createMemoryStore(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createMemoryStoreWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a model configuration under a model connection in a specified workspace for model creation.
     *
     * @remarks
     * Creates a model configuration under a model connection in a workspace for model creation, allowing an agent to select and invoke the model.
     *
     * @param tmpReq - CreateModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelResponse
     */
    async createModelWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateModelShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateModel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
    }
    /**
     * Creates a model configuration under a model connection in a specified workspace for model creation.
     *
     * @remarks
     * Creates a model configuration under a model connection in a workspace for model creation, allowing an agent to select and invoke the model.
     *
     * @param request - CreateModelRequest
     * @returns CreateModelResponse
     */
    async createModel(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createModelWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a model connection in a specified workspace and configures the upstream model service address, invoke protocol, and access credentials for model creation.
     *
     * @remarks
     * Creates a model connection in a specified workspace and configures the upstream model service address, invoke protocol, and access credentials for model creation.
     *
     * @param tmpReq - CreateModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateModelConnectionResponse
     */
    async createModelConnectionWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateModelConnectionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateModelConnection",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/model-connections`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateModelConnectionResponse({}));
    }
    /**
     * Creates a model connection in a specified workspace and configures the upstream model service address, invoke protocol, and access credentials for model creation.
     *
     * @remarks
     * Creates a model connection in a specified workspace and configures the upstream model service address, invoke protocol, and access credentials for model creation.
     *
     * @param request - CreateModelConnectionRequest
     * @returns CreateModelConnectionResponse
     */
    async createModelConnection(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createModelConnectionWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates permission rules.
     *
     * @remarks
     * Creates access rules in batches for specified resources in a workspace to define which users or agents can or cannot access the resources.
     *
     * @param tmpReq - CreatePermissionRulesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreatePermissionRulesResponse
     */
    async createPermissionRulesWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreatePermissionRulesShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreatePermissionRules",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/permission-rules`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreatePermissionRulesResponse({}));
    }
    /**
     * Creates permission rules.
     *
     * @remarks
     * Creates access rules in batches for specified resources in a workspace to define which users or agents can or cannot access the resources.
     *
     * @param request - CreatePermissionRulesRequest
     * @returns CreatePermissionRulesResponse
     */
    async createPermissionRules(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createPermissionRulesWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a skill in a specified workspace and generates an editable draft version. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @remarks
     * Creates a skill and its draft in a workspace for editing skill instructions and related resources. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @param tmpReq - CreateSkillDraftRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateSkillDraftResponse
     */
    async createSkillDraftWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateSkillDraftShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateSkillDraft",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateSkillDraftResponse({}));
    }
    /**
     * Creates a skill in a specified workspace and generates an editable draft version. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @remarks
     * Creates a skill and its draft in a workspace for editing skill instructions and related resources. You can derive the draft from an existing version, or specify a target version and a commit message.
     *
     * @param request - CreateSkillDraftRequest
     * @returns CreateSkillDraftResponse
     */
    async createSkillDraft(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createSkillDraftWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
     *
     * @remarks
     * Creates a team in a specified workspace and configures user members and agent members at the same time.
     *
     * @param tmpReq - CreateTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateTeamResponse
     */
    async createTeamWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateTeamShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateTeam",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/teams`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateTeamResponse({}));
    }
    /**
     * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
     *
     * @remarks
     * Creates a team in a specified workspace and configures user members and agent members at the same time.
     *
     * @param request - CreateTeamRequest
     * @returns CreateTeamResponse
     */
    async createTeam(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createTeamWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot be a reserved name such as manager, admin, or any name starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
     *
     * @remarks
     * Creates a user in a workspace for member collaboration and application access, which is used when configuring team members and user logons.
     *
     * @param tmpReq - CreateUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateUserResponse
     */
    async createUserWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateUserShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateUser",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
    }
    /**
     * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot be a reserved name such as manager, admin, or any name starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
     *
     * @remarks
     * Creates a user in a workspace for member collaboration and application access, which is used when configuring team members and user logons.
     *
     * @param request - CreateUserRequest
     * @returns CreateUserResponse
     */
    async createUser(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createUserWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, Model Context Protocol (MCP) services, and collaboration configurations.
     *
     * @remarks
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, Model Context Protocol (MCP) services, and collaboration configurations.
     * After the workspace is created, you can use the returned workspace ID to call [GetWorkspace](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspace) to query the details, and then manage agents and associated resources in the workspace. For network configuration fields and their dependencies, see the request parameters table.
     *
     * @param tmpReq - CreateWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns CreateWorkspaceResponse
     */
    async createWorkspaceWithOptions(tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateWorkspaceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "CreateWorkspace",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
    }
    /**
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, Model Context Protocol (MCP) services, and collaboration configurations.
     *
     * @remarks
     * Creates an AgentCore workspace as a resource scope for organizing agents, models, Model Context Protocol (MCP) services, and collaboration configurations.
     * After the workspace is created, you can use the returned workspace ID to call [GetWorkspace](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspace) to query the details, and then manage agents and associated resources in the workspace. For network configuration fields and their dependencies, see the request parameters table.
     *
     * @param request - CreateWorkspaceRequest
     * @returns CreateWorkspaceResponse
     */
    async createWorkspace(request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.createWorkspaceWithOptions(request, headers, runtime);
    }
    /**
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @remarks
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @param tmpReq - DebugModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DebugModelResponse
     */
    async debugModelWithOptions(workspaceId, modelId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.DebugModelShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DebugModel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models/${$dara.URL.percentEncode(modelId)}/actions/debug`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DebugModelResponse({}));
    }
    /**
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @remarks
     * Invokes a specified model through a published model connection to verify whether the model invocation pipeline is available.
     *
     * @param request - DebugModelRequest
     * @returns DebugModelResponse
     */
    async debugModel(workspaceId, modelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.debugModelWithOptions(workspaceId, modelId, request, headers, runtime);
    }
    /**
     * Deletes an access application.
     *
     * @remarks
     * Deletes a specified access application and removes the access configuration of the application from the workspace.
     *
     * @param request - DeleteAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAccessApplicationResponse
     */
    async deleteAccessApplicationWithOptions(workspaceId, applicationId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAccessApplication",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/access-applications/${$dara.URL.percentEncode(applicationId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAccessApplicationResponse({}));
    }
    /**
     * Deletes an access application.
     *
     * @remarks
     * Deletes a specified access application and removes the access configuration of the application from the workspace.
     *
     * @param request - DeleteAccessApplicationRequest
     * @returns DeleteAccessApplicationResponse
     */
    async deleteAccessApplication(workspaceId, applicationId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteAccessApplicationWithOptions(workspaceId, applicationId, request, headers, runtime);
    }
    /**
     * Deletes the IM channel of a specified agent.
     *
     * @remarks
     * Deletes the IM channel of a specified agent.
     *
     * @param request - DeleteAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentIMChannelResponse
     */
    async deleteAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAgentIMChannel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels/${$dara.URL.percentEncode(imChannelId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAgentIMChannelResponse({}));
    }
    /**
     * Deletes the IM channel of a specified agent.
     *
     * @remarks
     * Deletes the IM channel of a specified agent.
     *
     * @param request - DeleteAgentIMChannelRequest
     * @returns DeleteAgentIMChannelResponse
     */
    async deleteAgentIMChannel(workspaceId, agentId, imChannelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
    }
    /**
     * Deletes the specified AgentSpec and all its versions and metadata. This operation is irreversible.
     *
     * @remarks
     * Deletes the specified agent template and all its versions and metadata.
     * This operation is irreversible.
     *
     * @param request - DeleteAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentSpecResponse
     */
    async deleteAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAgentSpec",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAgentSpecResponse({}));
    }
    /**
     * Deletes the specified AgentSpec and all its versions and metadata. This operation is irreversible.
     *
     * @remarks
     * Deletes the specified agent template and all its versions and metadata.
     * This operation is irreversible.
     *
     * @param request - DeleteAgentSpecRequest
     * @returns DeleteAgentSpecResponse
     */
    async deleteAgentSpec(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * Deletes the draft version of the specified AgentSpec that is currently being edited and clears the draft version pointer.
     *
     * @remarks
     * Deletes the draft version of the agent template (AgentSpec) that is currently being edited.
     *
     * @param request - DeleteAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentSpecVersionResponse
     */
    async deleteAgentSpecVersionWithOptions(workspaceId, agentSpecName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAgentSpecVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/draft`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAgentSpecVersionResponse({}));
    }
    /**
     * Deletes the draft version of the specified AgentSpec that is currently being edited and clears the draft version pointer.
     *
     * @remarks
     * Deletes the draft version of the agent template (AgentSpec) that is currently being edited.
     *
     * @param request - DeleteAgentSpecVersionRequest
     * @returns DeleteAgentSpecVersionResponse
     */
    async deleteAgentSpecVersion(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteAgentSpecVersionWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * 删除智能体版本
     *
     * @remarks
     * 删除指定托管智能体或自定义智能体已保存的固定版本。仍被服务端点引用的版本不可删除，系统维护的 latest 版本不可删除。
     *
     * @param request - DeleteAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteAgentVersionResponse
     */
    async deleteAgentVersionWithOptions(workspaceId, agentId, agentVersion, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteAgentVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/versions/${$dara.URL.percentEncode(agentVersion)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteAgentVersionResponse({}));
    }
    /**
     * 删除智能体版本
     *
     * @remarks
     * 删除指定托管智能体或自定义智能体已保存的固定版本。仍被服务端点引用的版本不可删除，系统维护的 latest 版本不可删除。
     *
     * @param request - DeleteAgentVersionRequest
     * @returns DeleteAgentVersionResponse
     */
    async deleteAgentVersion(workspaceId, agentId, agentVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteAgentVersionWithOptions(workspaceId, agentId, agentVersion, request, headers, runtime);
    }
    /**
     * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes an access credential that is no longer used in a workspace.
     * If the credential is still bound to an MCP service, dissociate it before deletion.
     *
     * @param request - DeleteCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCredentialResponse
     */
    async deleteCredentialWithOptions(workspaceId, credentialId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/credentials/${$dara.URL.percentEncode(credentialId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteCredentialResponse({}));
    }
    /**
     * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
     *
     * @remarks
     * Deletes an access credential that is no longer used in a workspace.
     * If the credential is still bound to an MCP service, dissociate it before deletion.
     *
     * @param request - DeleteCredentialRequest
     * @returns DeleteCredentialResponse
     */
    async deleteCredential(workspaceId, credentialId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
    }
    /**
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Before you begin
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion result
     * A successful response indicates that the deletion request is accepted, and the response summary typically returns `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the deletion progress. After the deletion is complete, a detail query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteCustomAgentResponse
     */
    async deleteCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteCustomAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteCustomAgentResponse({}));
    }
    /**
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a custom code or image agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Before you begin
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion result
     * A successful response indicates that the deletion request is accepted, and the response summary typically returns `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the deletion progress. After the deletion is complete, a detail query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteCustomAgentRequest
     * @returns DeleteCustomAgentResponse
     */
    async deleteCustomAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Deletes a managed agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a managed agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can query the deletion progress by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent). After the deletion is complete, a details query returns a resource not found error. The processes and runtime environment of the managed agent are managed by the caller.
     *
     * @param request - DeleteExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteExternalAgentResponse
     */
    async deleteExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteExternalAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteExternalAgentResponse({}));
    }
    /**
     * Deletes a managed agent in a specified workspace and asynchronously cleans up its associated platform resources.
     *
     * @remarks
     * Deletes a managed agent in a specified workspace and asynchronously cleans up its associated platform resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can query the deletion progress by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent). After the deletion is complete, a details query returns a resource not found error. The processes and runtime environment of the managed agent are managed by the caller.
     *
     * @param request - DeleteExternalAgentRequest
     * @returns DeleteExternalAgentResponse
     */
    async deleteExternalAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Disconnects the identity source integration of a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding API operations.
     *
     * @remarks
     * Disconnects the association between a workspace and an enterprise identity source. This operation is used to terminate identity federation or clear the current attach configuration before you attach another identity source.
     * Disconnecting clears the AgentCore users and associated configurations imported from the identity source. For `CustomSSO`, it also clears the shared user pool and SAML and SCIM access resources. Applications created by users in the enterprise identity system must still be managed on the enterprise side.
     * ### Preparations before disconnecting
     * Remove the reference relationships between the related users and collaboration teams first. If teams still reference these users, the API operation rejects the disconnection request.
     * If you only want to temporarily disable a specific capability, you can retain the identity source binding. Use [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to disable logon, or use [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to disable SCIM synchronization.
     * ### Verify the disconnection result
     * The disconnection is executed in the background. After the request is accepted, `DISCONNECTING` is returned. You can query the progress by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider):
     * - If the query returns `IdentityProviderNotFound`, the binding has been removed and the disconnection is complete.
     * - If `DISCONNECT_FAILED` is returned, the cleanup failed. Some resources may have already been cleared. You can initiate the disconnection again.
     * You can bind a new identity source to the workspace only after the disconnection is complete.
     *
     * @param request - DeleteIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteIdentityProviderResponse
     */
    async deleteIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteIdentityProvider",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteIdentityProviderResponse({}));
    }
    /**
     * Disconnects the identity source integration of a workspace. For CustomSSO, this operation clears the shared user pool and related SAML and SCIM resources. To disable only logon or synchronization, use the corresponding API operations.
     *
     * @remarks
     * Disconnects the association between a workspace and an enterprise identity source. This operation is used to terminate identity federation or clear the current attach configuration before you attach another identity source.
     * Disconnecting clears the AgentCore users and associated configurations imported from the identity source. For `CustomSSO`, it also clears the shared user pool and SAML and SCIM access resources. Applications created by users in the enterprise identity system must still be managed on the enterprise side.
     * ### Preparations before disconnecting
     * Remove the reference relationships between the related users and collaboration teams first. If teams still reference these users, the API operation rejects the disconnection request.
     * If you only want to temporarily disable a specific capability, you can retain the identity source binding. Use [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) to disable logon, or use [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM) to disable SCIM synchronization.
     * ### Verify the disconnection result
     * The disconnection is executed in the background. After the request is accepted, `DISCONNECTING` is returned. You can query the progress by calling [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider):
     * - If the query returns `IdentityProviderNotFound`, the binding has been removed and the disconnection is complete.
     * - If `DISCONNECT_FAILED` is returned, the cleanup failed. Some resources may have already been cleared. You can initiate the disconnection again.
     * You can bind a new identity source to the workspace only after the disconnection is complete.
     *
     * @param request - DeleteIdentityProviderRequest
     * @returns DeleteIdentityProviderResponse
     */
    async deleteIdentityProvider(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the AC synchronization switch, or disable SAML logon.
     *
     * @remarks
     * Revokes a SCIM access token to deactivate an old token or clean up credentials that are no longer in use or have expired.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to user pools. After revocation, the enterprise identity system can no longer use the token to access the SCIM endpoint.
     * ### Usage
     * **Step 1:** Query the credential list by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) to obtain the target credentialId.
     * **Step 2:** If the enterprise identity system is still using the token, configure another valid token for it first.
     * **Step 3:** Call this operation to revoke the target credential, and then refresh the list to confirm the result.
     * This operation only revokes the specified token. Synchronized users, other tokens, logon configurations, and the user synchronization switch are retained. To disable user synchronization, use [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - DeleteIdentityProviderSCIMCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteIdentityProviderSCIMCredentialResponse
     */
    async deleteIdentityProviderSCIMCredentialWithOptions(workspaceId, credentialId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteIdentityProviderSCIMCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning/credentials/${$dara.URL.percentEncode(credentialId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteIdentityProviderSCIMCredentialResponse({}));
    }
    /**
     * Revokes a specified SCIM credential. This operation does not trigger automatic creation of a new token, modify the AC synchronization switch, or disable SAML logon.
     *
     * @remarks
     * Revokes a SCIM access token to deactivate an old token or clean up credentials that are no longer in use or have expired.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to user pools. After revocation, the enterprise identity system can no longer use the token to access the SCIM endpoint.
     * ### Usage
     * **Step 1:** Query the credential list by calling [ListIdentityProviderSCIMCredentials](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderSCIMCredentials) to obtain the target credentialId.
     * **Step 2:** If the enterprise identity system is still using the token, configure another valid token for it first.
     * **Step 3:** Call this operation to revoke the target credential, and then refresh the list to confirm the result.
     * This operation only revokes the specified token. Synchronized users, other tokens, logon configurations, and the user synchronization switch are retained. To disable user synchronization, use [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM).
     *
     * @param request - DeleteIdentityProviderSCIMCredentialRequest
     * @returns DeleteIdentityProviderSCIMCredentialResponse
     */
    async deleteIdentityProviderSCIMCredential(workspaceId, credentialId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteIdentityProviderSCIMCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
    }
    /**
     * Deletes the image cache association in a workspace and checks for agent references and instance usage before submission.
     *
     * @remarks
     * Deletes the image cache association in a workspace and checks for agent references and instance usage before submission.
     * ### Deletion conditions
     * The deletion request is rejected if the cache is still referenced by an agent with the cache switch enabled, or if instances are still using it or resources are being released. You can first query `agentCount`, `canDelete`, and `deleteBlockReason` by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     * ### Query results
     * The `imageId` in the response corresponds to this request. The current implementation of `deletionPending` returns `false`. To confirm whether the cache is still visible, call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) or [ListImageCaches](https://api.aliyun.com/document/AgentCore/2026-08-04/ListImageCaches).
     * This operation deletes the cache association in the specified workspace, but does not delete the source ACR repository or the source image.
     *
     * @param request - DeleteImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteImageCacheResponse
     */
    async deleteImageCacheWithOptions(imageId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.regionId)) {
            query["regionId"] = request.regionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["workspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteImageCache",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/image-caches/${$dara.URL.percentEncode(imageId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteImageCacheResponse({}));
    }
    /**
     * Deletes the image cache association in a workspace and checks for agent references and instance usage before submission.
     *
     * @remarks
     * Deletes the image cache association in a workspace and checks for agent references and instance usage before submission.
     * ### Deletion conditions
     * The deletion request is rejected if the cache is still referenced by an agent with the cache switch enabled, or if instances are still using it or resources are being released. You can first query `agentCount`, `canDelete`, and `deleteBlockReason` by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     * ### Query results
     * The `imageId` in the response corresponds to this request. The current implementation of `deletionPending` returns `false`. To confirm whether the cache is still visible, call [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache) or [ListImageCaches](https://api.aliyun.com/document/AgentCore/2026-08-04/ListImageCaches).
     * This operation deletes the cache association in the specified workspace, but does not delete the source ACR repository or the source image.
     *
     * @param request - DeleteImageCacheRequest
     * @returns DeleteImageCacheResponse
     */
    async deleteImageCache(imageId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteImageCacheWithOptions(imageId, request, headers, runtime);
    }
    /**
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     *
     * @remarks
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteManagedAgentResponse
     */
    async deleteManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteManagedAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteManagedAgentResponse({}));
    }
    /**
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     *
     * @remarks
     * Deletes a managed Harness agent in a specified workspace and asynchronously cleans up its platform-associated resources.
     * ### Prerequisites
     * The workspace must be writable. If the agent is still associated with a team, dissociate it from the team first.
     * ### Deletion results
     * A successful response indicates that the deletion request has been accepted, and the response summary is typically `status=Deleting`. If the agent is already being deleted, a subsequent request returns the current summary.
     * You can call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query the deletion progress. After the deletion is complete, a details query returns a resource not found error. Runtime resources are cleaned up in the background.
     *
     * @param request - DeleteManagedAgentRequest
     * @returns DeleteManagedAgentResponse
     */
    async deleteManagedAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
     *
     * @remarks
     * Deletes a specified MCP service.
     * The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
     *
     * @param request - DeleteMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMcpResponse
     */
    async deleteMcpWithOptions(mcpServerId, workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteMcp",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteMcpResponse({}));
    }
    /**
     * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
     *
     * @remarks
     * Deletes a specified MCP service.
     * The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
     *
     * @param request - DeleteMcpRequest
     * @returns DeleteMcpResponse
     */
    async deleteMcp(mcpServerId, workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteMcpWithOptions(mcpServerId, workspaceId, request, headers, runtime);
    }
    /**
     * Deletes a long-term memory by memory ID.
     *
     * @remarks
     * Deletes a long-term memory by memory ID.
     *
     * @param request - DeleteMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMemoryResponse
     */
    async deleteMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteMemory",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories/${$dara.URL.percentEncode(memoryId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
    }
    /**
     * Deletes a long-term memory by memory ID.
     *
     * @remarks
     * Deletes a long-term memory by memory ID.
     *
     * @param request - DeleteMemoryRequest
     * @returns DeleteMemoryResponse
     */
    async deleteMemory(workspaceId, memoryStoreName, memoryId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
    }
    /**
     * Asynchronously deletes a MemoryStore and all its long-term memories.
     *
     * @remarks
     * Asynchronously deletes a specified long-term memory store (MemoryStore) and all its long-term memories.
     *
     * @param request - DeleteMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteMemoryStoreResponse
     */
    async deleteMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteMemoryStore",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteMemoryStoreResponse({}));
    }
    /**
     * Asynchronously deletes a MemoryStore and all its long-term memories.
     *
     * @remarks
     * Asynchronously deletes a specified long-term memory store (MemoryStore) and all its long-term memories.
     *
     * @param request - DeleteMemoryStoreRequest
     * @returns DeleteMemoryStoreResponse
     */
    async deleteMemoryStore(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @remarks
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @param request - DeleteModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelResponse
     */
    async deleteModelWithOptions(workspaceId, modelId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteModel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models/${$dara.URL.percentEncode(modelId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
    }
    /**
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @remarks
     * Deletes a model in a specified workspace. Models that are in use cannot be deleted.
     *
     * @param request - DeleteModelRequest
     * @returns DeleteModelResponse
     */
    async deleteModel(workspaceId, modelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteModelWithOptions(workspaceId, modelId, request, headers, runtime);
    }
    /**
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @remarks
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @param request - DeleteModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteModelConnectionResponse
     */
    async deleteModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteModelConnection",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/model-connections/${$dara.URL.percentEncode(connectionId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteModelConnectionResponse({}));
    }
    /**
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @remarks
     * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
     *
     * @param request - DeleteModelConnectionRequest
     * @returns DeleteModelConnectionResponse
     */
    async deleteModelConnection(workspaceId, connectionId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
    }
    /**
     * Deletes a permission rule.
     *
     * @remarks
     * Deletes an access rule in a workspace and revokes the configuration of the rule. Repeated deletions still return a success response.
     *
     * @param request - DeletePermissionRuleRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeletePermissionRuleResponse
     */
    async deletePermissionRuleWithOptions(workspaceId, permissionRuleId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeletePermissionRule",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/permission-rules/${$dara.URL.percentEncode(permissionRuleId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeletePermissionRuleResponse({}));
    }
    /**
     * Deletes a permission rule.
     *
     * @remarks
     * Deletes an access rule in a workspace and revokes the configuration of the rule. Repeated deletions still return a success response.
     *
     * @param request - DeletePermissionRuleRequest
     * @returns DeletePermissionRuleResponse
     */
    async deletePermissionRule(workspaceId, permissionRuleId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deletePermissionRuleWithOptions(workspaceId, permissionRuleId, request, headers, runtime);
    }
    /**
     * Deletes a skill and its related version data from the specified workspace. The deletion operation is irreversible.
     *
     * @remarks
     * Deletes a skill and its related version data from the specified workspace.
     * The deletion operation is irreversible.
     *
     * @param request - DeleteSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillResponse
     */
    async deleteSkillWithOptions(workspaceId, skillName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteSkill",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
    }
    /**
     * Deletes a skill and its related version data from the specified workspace. The deletion operation is irreversible.
     *
     * @remarks
     * Deletes a skill and its related version data from the specified workspace.
     * The deletion operation is irreversible.
     *
     * @param request - DeleteSkillRequest
     * @returns DeleteSkillResponse
     */
    async deleteSkill(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteSkillWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Deletes the draft version of the specified skill that is currently being edited.
     *
     * @remarks
     * Deletes the draft of a skill that is being edited in normal version mode.
     * In `HEAD` mode, a persistent draft is used, and the delete draft operation is not supported. To modify the content, continue editing the draft. To remove the entire skill, use [DeleteSkill](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteSkill).
     *
     * @param request - DeleteSkillDraftRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteSkillDraftResponse
     */
    async deleteSkillDraftWithOptions(workspaceId, skillName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteSkillDraft",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/draft`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteSkillDraftResponse({}));
    }
    /**
     * Deletes the draft version of the specified skill that is currently being edited.
     *
     * @remarks
     * Deletes the draft of a skill that is being edited in normal version mode.
     * In `HEAD` mode, a persistent draft is used, and the delete draft operation is not supported. To modify the content, continue editing the draft. To remove the entire skill, use [DeleteSkill](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteSkill).
     *
     * @param request - DeleteSkillDraftRequest
     * @returns DeleteSkillDraftResponse
     */
    async deleteSkillDraft(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteSkillDraftWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Deletes a team in a specified workspace. Deleting a team does not delete the users and agents within it, but only removes the membership associations.
     *
     * @remarks
     * Deletes a team in a specified workspace.
     *
     * @param request - DeleteTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteTeamResponse
     */
    async deleteTeamWithOptions(workspaceId, teamId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteTeam",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/teams/${$dara.URL.percentEncode(teamId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteTeamResponse({}));
    }
    /**
     * Deletes a team in a specified workspace. Deleting a team does not delete the users and agents within it, but only removes the membership associations.
     *
     * @remarks
     * Deletes a team in a specified workspace.
     *
     * @param request - DeleteTeamRequest
     * @returns DeleteTeamResponse
     */
    async deleteTeam(workspaceId, teamId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteTeamWithOptions(workspaceId, teamId, request, headers, runtime);
    }
    /**
     * Deletes a user from a specified workspace. A user cannot be deleted if they are still a member of any team. Remove the user from the team first.
     *
     * @remarks
     * Deletes a user from a specified workspace.
     *
     * @param request - DeleteUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteUserResponse
     */
    async deleteUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteUser",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users/${$dara.URL.percentEncode(agentCoreUserId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
    }
    /**
     * Deletes a user from a specified workspace. A user cannot be deleted if they are still a member of any team. Remove the user from the team first.
     *
     * @remarks
     * Deletes a user from a specified workspace.
     *
     * @param request - DeleteUserRequest
     * @returns DeleteUserResponse
     */
    async deleteUser(workspaceId, agentCoreUserId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
    }
    /**
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     *
     * @remarks
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace. The API operation processes repeated deletion requests for the same workspace in the `Deleting` or `Deleted` state based on idempotence.
     *
     * @param request - DeleteWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DeleteWorkspaceResponse
     */
    async deleteWorkspaceWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DeleteWorkspace",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
            method: "DELETE",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
    }
    /**
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace.
     *
     * @remarks
     * Deletes a workspace that is no longer in use and ends the management lifecycle of the workspace. The API operation processes repeated deletion requests for the same workspace in the `Deleting` or `Deleted` state based on idempotence.
     *
     * @param request - DeleteWorkspaceRequest
     * @returns DeleteWorkspaceResponse
     */
    async deleteWorkspace(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.deleteWorkspaceWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Disables the QoderCLI connector in a specified workspace. The connector can be disabled only when no agent is using it. After being disabled, the connector and its service account key configuration are removed.
     *
     * @remarks
     * Disables the QoderCLI connector in a workspace.
     *
     * @param request - DisableConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DisableConnectorResponse
     */
    async disableConnectorWithOptions(workspaceId, connectorName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DisableConnector",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors/${$dara.URL.percentEncode(connectorName)}/actions/disable`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DisableConnectorResponse({}));
    }
    /**
     * Disables the QoderCLI connector in a specified workspace. The connector can be disabled only when no agent is using it. After being disabled, the connector and its service account key configuration are removed.
     *
     * @remarks
     * Disables the QoderCLI connector in a workspace.
     *
     * @param request - DisableConnectorRequest
     * @returns DisableConnectorResponse
     */
    async disableConnector(workspaceId, connectorName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.disableConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
    }
    /**
     * Retrieves the OSS presigned download URL for a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * Retrieves the OSS presigned download URL for a specified agent template to download the agent template ZIP package.
     *
     * @param request - DownloadAgentSpecViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DownloadAgentSpecViaOssResponse
     */
    async downloadAgentSpecViaOssWithOptions(workspaceId, agentSpecName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentSpecVersion)) {
            query["agentSpecVersion"] = request.agentSpecVersion;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DownloadAgentSpecViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/actions/download-via-oss`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DownloadAgentSpecViaOssResponse({}));
    }
    /**
     * Retrieves the OSS presigned download URL for a specified AgentSpec to download the AgentSpec ZIP package.
     *
     * @remarks
     * Retrieves the OSS presigned download URL for a specified agent template to download the agent template ZIP package.
     *
     * @param request - DownloadAgentSpecViaOssRequest
     * @returns DownloadAgentSpecViaOssResponse
     */
    async downloadAgentSpecViaOss(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.downloadAgentSpecViaOssWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @remarks
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @param request - DownloadSkillVersionViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DownloadSkillVersionViaOssResponse
     */
    async downloadSkillVersionViaOssWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "DownloadSkillVersionViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}/actions/download-via-oss`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DownloadSkillVersionViaOssResponse({}));
    }
    /**
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @remarks
     * Retrieves the OSS pre-signed download URL for a specified skill version to download the corresponding skill ZIP package.
     *
     * @param request - DownloadSkillVersionViaOssRequest
     * @returns DownloadSkillVersionViaOssResponse
     */
    async downloadSkillVersionViaOss(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.downloadSkillVersionViaOssWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Enables the QoderCLI connector in a specified workspace. The request must provide a site, an API key, and at least one service account key. The service verifies all account keys before saving the configuration.
     *
     * @remarks
     * Enables the QoderCLI connector in a workspace. Before enabling, verify the credentials by using [VerifyConnector](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyConnector).
     *
     * @param tmpReq - EnableConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns EnableConnectorResponse
     */
    async enableConnectorWithOptions(workspaceId, connectorName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.EnableConnectorShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "EnableConnector",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors/${$dara.URL.percentEncode(connectorName)}/actions/enable`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.EnableConnectorResponse({}));
    }
    /**
     * Enables the QoderCLI connector in a specified workspace. The request must provide a site, an API key, and at least one service account key. The service verifies all account keys before saving the configuration.
     *
     * @remarks
     * Enables the QoderCLI connector in a workspace. Before enabling, verify the credentials by using [VerifyConnector](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyConnector).
     *
     * @param request - EnableConnectorRequest
     * @returns EnableConnectorResponse
     */
    async enableConnector(workspaceId, connectorName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.enableConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
    }
    /**
     * Retrieves a custom image preparation task by using a submitted clientToken and queries the current progress.
     *
     * @remarks
     * Uses the `clientToken` of a create or update request to retrieve a custom image preparation task, which allows you to continue querying the processing progress after a request response is lost.
     * ### Search scope
     * Pass the `clientToken` used when submitting [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) as a query parameter, and use the original workspace.
     * The preparation task can be retrieved only if the submission result includes `imagePreparation`. If no corresponding preparation task exists, a resource not found error is returned.
     * ### Query phases
     * | `phase` | Description |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version deployment succeeded. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * After the task is found, you can use the `preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to continuously query the progress.
     *
     * @param request - FindCustomAgentImagePreparationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns FindCustomAgentImagePreparationResponse
     */
    async findCustomAgentImagePreparationWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "FindCustomAgentImagePreparation",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-image-preparations`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.FindCustomAgentImagePreparationResponse({}));
    }
    /**
     * Retrieves a custom image preparation task by using a submitted clientToken and queries the current progress.
     *
     * @remarks
     * Uses the `clientToken` of a create or update request to retrieve a custom image preparation task, which allows you to continue querying the processing progress after a request response is lost.
     * ### Search scope
     * Pass the `clientToken` used when submitting [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) as a query parameter, and use the original workspace.
     * The preparation task can be retrieved only if the submission result includes `imagePreparation`. If no corresponding preparation task exists, a resource not found error is returned.
     * ### Query phases
     * | `phase` | Description |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version deployment succeeded. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * After the task is found, you can use the `preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to continuously query the progress.
     *
     * @param request - FindCustomAgentImagePreparationRequest
     * @returns FindCustomAgentImagePreparationResponse
     */
    async findCustomAgentImagePreparation(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.findCustomAgentImagePreparationWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Forcibly publishes a specified skill version by bypassing the standard review process.
     *
     * @remarks
     * Forcibly publishes a specified skill version by bypassing the standard review process.
     *
     * @param tmpReq - ForcePublishSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ForcePublishSkillVersionResponse
     */
    async forcePublishSkillVersionWithOptions(workspaceId, skillName, skillVersion, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.ForcePublishSkillVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ForcePublishSkillVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}/actions/force-publish`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ForcePublishSkillVersionResponse({}));
    }
    /**
     * Forcibly publishes a specified skill version by bypassing the standard review process.
     *
     * @remarks
     * Forcibly publishes a specified skill version by bypassing the standard review process.
     *
     * @param request - ForcePublishSkillVersionRequest
     * @returns ForcePublishSkillVersionResponse
     */
    async forcePublishSkillVersion(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.forcePublishSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Queries the access application.
     *
     * @remarks
     * Queries the configuration of an access application in a workspace to view the application access information and user source settings.
     * The query result does not include the plaintext of the application secret. The secret is returned only when the application is created.
     *
     * @param request - GetAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAccessApplicationResponse
     */
    async getAccessApplicationWithOptions(workspaceId, applicationId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAccessApplication",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/access-applications/${$dara.URL.percentEncode(applicationId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAccessApplicationResponse({}));
    }
    /**
     * Queries the access application.
     *
     * @remarks
     * Queries the configuration of an access application in a workspace to view the application access information and user source settings.
     * The query result does not include the plaintext of the application secret. The secret is returned only when the application is created.
     *
     * @param request - GetAccessApplicationRequest
     * @returns GetAccessApplicationResponse
     */
    async getAccessApplication(workspaceId, applicationId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAccessApplicationWithOptions(workspaceId, applicationId, request, headers, runtime);
    }
    /**
     * Retrieves the time-limited read-only download URL for the currently saved fixed code package of a custom code or image agent.
     *
     * @remarks
     * Retrieves the download URL for the currently saved code package of a custom code or image agent, which can be used to download, inspect, or reuse the fixed code package.
     * ### Download scope
     * Locates the fixed code package referenced by the currently saved configuration by using `workspaceId` and `agentId`. This applies to code packages uploaded locally or imported from OSS. Arbitrary bucket names, object keys, or historical version parameters are not accepted.
     * The current configuration must be deployed as a code package and the fixed package must be available. You do not need to wait for the running instance to be ready. An error is returned if the object has been changed, is missing, or is unreadable.
     * ### Use the response
     * Use `downloadUrl` to download the file. The `fileName`, `fileSize`, `format`, `etag`, and `crc64` fields describe the corresponding fixed package. The unit of `fileSize` is bytes. The `resourceVersionId` field identifies the saved configuration version corresponding to this download.
     * The URL is valid for up to 10 minutes and does not exceed the validity period of the underlying credentials, subject to `expiresAt`. Retrieve the URL again after it expires.
     *
     * @param request - GetAgentCodePackageDownloadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageDownloadUrlResponse
     */
    async getAgentCodePackageDownloadUrlWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentCodePackageDownloadUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents/${$dara.URL.percentEncode(agentId)}/code-package/download-url`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentCodePackageDownloadUrlResponse({}));
    }
    /**
     * Retrieves the time-limited read-only download URL for the currently saved fixed code package of a custom code or image agent.
     *
     * @remarks
     * Retrieves the download URL for the currently saved code package of a custom code or image agent, which can be used to download, inspect, or reuse the fixed code package.
     * ### Download scope
     * Locates the fixed code package referenced by the currently saved configuration by using `workspaceId` and `agentId`. This applies to code packages uploaded locally or imported from OSS. Arbitrary bucket names, object keys, or historical version parameters are not accepted.
     * The current configuration must be deployed as a code package and the fixed package must be available. You do not need to wait for the running instance to be ready. An error is returned if the object has been changed, is missing, or is unreadable.
     * ### Use the response
     * Use `downloadUrl` to download the file. The `fileName`, `fileSize`, `format`, `etag`, and `crc64` fields describe the corresponding fixed package. The unit of `fileSize` is bytes. The `resourceVersionId` field identifies the saved configuration version corresponding to this download.
     * The URL is valid for up to 10 minutes and does not exceed the validity period of the underlying credentials, subject to `expiresAt`. Retrieve the URL again after it expires.
     *
     * @param request - GetAgentCodePackageDownloadUrlRequest
     * @returns GetAgentCodePackageDownloadUrlResponse
     */
    async getAgentCodePackageDownloadUrl(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentCodePackageDownloadUrlWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Generates a RAM authorization link for the specified code package source bucket for the workspace resource role.
     *
     * @remarks
     * Generates an authorization link for the workspace resource role to read the code package source bucket, which is used to complete authorization before deploying an existing OSS code package.
     * ### Authorization steps
     * **Step 1:** Provide the `ossBucketName` to obtain the `authorizeUrl` for the current workspace resource role.
     * **Step 2:** Open the returned link and confirm the authorization.
     * **Step 3:** Call [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization) to query the policy binding status. To verify a specific code package object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss).
     * ### Authorization scope
     * The role is selected by the server and cannot be overridden by the caller. This authorization reuses the `OSSObjectRestoreCustom` template, which includes permissions such as reading, writing, and deleting objects, and is not a read-only authorization. Existing authorizations for the same role and bucket can be reused.
     * Obtaining the link itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace.
     *
     * @param request - GetAgentCodePackageOssRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageOssRamAuthorizeUrlResponse
     */
    async getAgentCodePackageOssRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.ossBucketName)) {
            query["ossBucketName"] = request.ossBucketName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentCodePackageOssRamAuthorizeUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-code-packages/oss/authorize`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentCodePackageOssRamAuthorizeUrlResponse({}));
    }
    /**
     * Generates a RAM authorization link for the specified code package source bucket for the workspace resource role.
     *
     * @remarks
     * Generates an authorization link for the workspace resource role to read the code package source bucket, which is used to complete authorization before deploying an existing OSS code package.
     * ### Authorization steps
     * **Step 1:** Provide the `ossBucketName` to obtain the `authorizeUrl` for the current workspace resource role.
     * **Step 2:** Open the returned link and confirm the authorization.
     * **Step 3:** Call [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization) to query the policy binding status. To verify a specific code package object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss).
     * ### Authorization scope
     * The role is selected by the server and cannot be overridden by the caller. This authorization reuses the `OSSObjectRestoreCustom` template, which includes permissions such as reading, writing, and deleting objects, and is not a read-only authorization. Existing authorizations for the same role and bucket can be reused.
     * Obtaining the link itself does not complete the authorization, transfer the code package, or modify the default OSS binding of the workspace.
     *
     * @param request - GetAgentCodePackageOssRamAuthorizeUrlRequest
     * @returns GetAgentCodePackageOssRamAuthorizeUrlResponse
     */
    async getAgentCodePackageOssRamAuthorizeUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentCodePackageOssRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Generates a time-limited upload URL for a local code package, and returns the upload method, request headers, and the sourceUri for subsequent deployment.
     *
     * @remarks
     * Retrieves a time-limited direct upload URL and upload requirements for a local code package. After the upload is complete, use the returned `sourceUri` to submit the agent deployment.
     * ### Request requirements
     * | Field | Requirement |
     * | --- | --- |
     * | `fileName` | The name of the ZIP or TAR.GZ file without the folder. Maximum length: 255 characters. |
     * | `format` | `zip` or `tar.gz`. Must match the file name extension. |
     * | `fileSize` | The size of the compressed package in bytes. Valid values: 1 to 500000000. |
     * ### Upload and deployment
     * **Step 1:** Use the `uploadMethod`, `uploadUrl`, and `headers` from the response to upload the file directly. This operation only generates the URL and does not upload the file content.
     * **Step 2:** After the upload is complete, specify the `sourceUri` in the `artifact.code.sourceUri` parameter of the [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) operation. You must also provide the `languageRuntime`, `entrypoint`, and service port.
     * **Step 3:** During creation or update, the actual object and its size are verified again. The configuration is saved after the object is transferred to a fixed replica.
     * The upload URL is valid for up to 10 minutes and does not exceed the expiration time of the underlying temporary credentials. The exact expiration time is subject to the `expiresAt` value. If the URL expires, obtain a new one and use the original link and request headers from the response.
     *
     * @param tmpReq - GetAgentCodePackageUploadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentCodePackageUploadUrlResponse
     */
    async getAgentCodePackageUploadUrlWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.GetAgentCodePackageUploadUrlShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentCodePackageUploadUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-code-packages/upload-url`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentCodePackageUploadUrlResponse({}));
    }
    /**
     * Generates a time-limited upload URL for a local code package, and returns the upload method, request headers, and the sourceUri for subsequent deployment.
     *
     * @remarks
     * Retrieves a time-limited direct upload URL and upload requirements for a local code package. After the upload is complete, use the returned `sourceUri` to submit the agent deployment.
     * ### Request requirements
     * | Field | Requirement |
     * | --- | --- |
     * | `fileName` | The name of the ZIP or TAR.GZ file without the folder. Maximum length: 255 characters. |
     * | `format` | `zip` or `tar.gz`. Must match the file name extension. |
     * | `fileSize` | The size of the compressed package in bytes. Valid values: 1 to 500000000. |
     * ### Upload and deployment
     * **Step 1:** Use the `uploadMethod`, `uploadUrl`, and `headers` from the response to upload the file directly. This operation only generates the URL and does not upload the file content.
     * **Step 2:** After the upload is complete, specify the `sourceUri` in the `artifact.code.sourceUri` parameter of the [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent) operation. You must also provide the `languageRuntime`, `entrypoint`, and service port.
     * **Step 3:** During creation or update, the actual object and its size are verified again. The configuration is saved after the object is transferred to a fixed replica.
     * The upload URL is valid for up to 10 minutes and does not exceed the expiration time of the underlying temporary credentials. The exact expiration time is subject to the `expiresAt` value. If the URL expires, obtain a new one and use the original link and request headers from the response.
     *
     * @param request - GetAgentCodePackageUploadUrlRequest
     * @returns GetAgentCodePackageUploadUrlResponse
     */
    async getAgentCodePackageUploadUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentCodePackageUploadUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the details of a specified agent IM channel.
     *
     * @remarks
     * Queries the details of a specified agent IM channel.
     *
     * @param request - GetAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentIMChannelResponse
     */
    async getAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentIMChannel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels/${$dara.URL.percentEncode(imChannelId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentIMChannelResponse({}));
    }
    /**
     * Queries the details of a specified agent IM channel.
     *
     * @remarks
     * Queries the details of a specified agent IM channel.
     *
     * @param request - GetAgentIMChannelRequest
     * @returns GetAgentIMChannelResponse
     */
    async getAgentIMChannel(workspaceId, agentId, imChannelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
    }
    /**
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
     *
     * @remarks
     * Queries the basic information, version status, and summaries of all versions of an agent template (AgentSpec) for viewing the template and selecting a version.
     *
     * @param request - GetAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecResponse
     */
    async getAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentSpec",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentSpecResponse({}));
    }
    /**
     * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
     *
     * @remarks
     * Queries the basic information, version status, and summaries of all versions of an agent template (AgentSpec) for viewing the template and selecting a version.
     *
     * @param request - GetAgentSpecRequest
     * @returns GetAgentSpecResponse
     */
    async getAgentSpec(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for an agent template (AgentSpec) ZIP package to import templates from local files.
     * Files are transferred through Object Storage Service (OSS). First, upload the file by using the returned URL, and then call the [UploadAgentSpecViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadAgentSpecViaOss) API operation to complete the import.
     *
     * @param request - GetAgentSpecImportFileUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecImportFileUrlResponse
     */
    async getAgentSpecImportFileUrlWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.contentType)) {
            query["contentType"] = request.contentType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentSpecImportFileUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-spec-actions/get-import-file-url`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentSpecImportFileUrlResponse({}));
    }
    /**
     * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for an agent template (AgentSpec) ZIP package to import templates from local files.
     * Files are transferred through Object Storage Service (OSS). First, upload the file by using the returned URL, and then call the [UploadAgentSpecViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadAgentSpecViaOss) API operation to complete the import.
     *
     * @param request - GetAgentSpecImportFileUrlRequest
     * @returns GetAgentSpecImportFileUrlResponse
     */
    async getAgentSpecImportFileUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentSpecImportFileUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing the latest version.
     *
     * @remarks
     * Queries the full content of the latest version of an agent template (AgentSpec) for viewing or editing the latest version.
     *
     * @param request - GetAgentSpecLatestRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecLatestResponse
     */
    async getAgentSpecLatestWithOptions(workspaceId, agentSpecName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentSpecLatest",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/latest`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentSpecLatestResponse({}));
    }
    /**
     * Queries the full content of the latest version of a specified AgentSpec for editing or viewing the latest version.
     *
     * @remarks
     * Queries the full content of the latest version of an agent template (AgentSpec) for viewing or editing the latest version.
     *
     * @param request - GetAgentSpecLatestRequest
     * @returns GetAgentSpecLatestResponse
     */
    async getAgentSpecLatest(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentSpecLatestWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * Queries the full content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @remarks
     * Queries the full content of a specified agent template version, including the manifest content, resource files, and metadata.
     *
     * @param request - GetAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentSpecVersionResponse
     */
    async getAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentSpecVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/versions/${$dara.URL.percentEncode(agentSpecVersion)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentSpecVersionResponse({}));
    }
    /**
     * Queries the full content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
     *
     * @remarks
     * Queries the full content of a specified agent template version, including the manifest content, resource files, and metadata.
     *
     * @param request - GetAgentSpecVersionRequest
     * @returns GetAgentSpecVersionResponse
     */
    async getAgentSpecVersion(workspaceId, agentSpecName, agentSpecVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, request, headers, runtime);
    }
    /**
     * 查询智能体版本详情
     *
     * @remarks
     * 查询指定托管智能体或自定义智能体已保存的固定版本详情，configuration 返回版本保存时的 Agent 配置。
     *
     * @param request - GetAgentVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetAgentVersionResponse
     */
    async getAgentVersionWithOptions(workspaceId, agentId, agentVersion, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetAgentVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/versions/${$dara.URL.percentEncode(agentVersion)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetAgentVersionResponse({}));
    }
    /**
     * 查询智能体版本详情
     *
     * @remarks
     * 查询指定托管智能体或自定义智能体已保存的固定版本详情，configuration 返回版本保存时的 Agent 配置。
     *
     * @param request - GetAgentVersionRequest
     * @returns GetAgentVersionResponse
     */
    async getAgentVersion(workspaceId, agentId, agentVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getAgentVersionWithOptions(workspaceId, agentId, agentVersion, request, headers, runtime);
    }
    /**
     * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a specified credential and returns the list of agents bound to the credential.
     * ### Response content
     * Queries the credential type, description, application scope, and binding information. Supports two types: `apiKey` and `mcpHeader`.
     * - `apiKey`: The key value is returned in a masked format.
     * - `mcpHeader`: Returns the configured header name without the header value. The `resourceType` of the applicable resource is `mcpServer`.
     * To modify the configuration, call [UpdateCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCredential).
     *
     * @param request - GetCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCredentialResponse
     */
    async getCredentialWithOptions(workspaceId, credentialId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/credentials/${$dara.URL.percentEncode(credentialId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCredentialResponse({}));
    }
    /**
     * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
     *
     * @remarks
     * Queries the details of a specified credential and returns the list of agents bound to the credential.
     * ### Response content
     * Queries the credential type, description, application scope, and binding information. Supports two types: `apiKey` and `mcpHeader`.
     * - `apiKey`: The key value is returned in a masked format.
     * - `mcpHeader`: Returns the configured header name without the header value. The `resourceType` of the applicable resource is `mcpServer`.
     * To modify the configuration, call [UpdateCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCredential).
     *
     * @param request - GetCredentialRequest
     * @returns GetCredentialResponse
     */
    async getCredential(workspaceId, credentialId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
    }
    /**
     * Queries the latest deployment configuration, version processing results, code package or image information, and running instance status of a custom code or image agent.
     *
     * @remarks
     * Queries the configuration, artifacts, and running status of a custom code or image agent to confirm the processing and effective results of creation or updates.
     * ### Query configuration processing results
     * After creation or update, you can poll this operation. The returned configuration belongs to the latest submitted version and may not have taken effect yet.
     * | Field | Description |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The currently effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected version. |
     * | `latestExecutionError` | The reason why the latest version is waiting for a retry or failed to execute, and whether automatic retry is enabled. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The snapshot of the number of running instances in each phase. |
     * `pending`, `processing`, and `waiting_retry` indicate that processing is continuing. `succeeded` indicates that the configuration is processed successfully. If the value is `failed`, troubleshoot the issue based on `latestExecutionError`. Instance status and configuration processing status are queried separately.
     * ### Code packages and images
     * In code package mode, `artifact.code.sourceUri` is the saved fixed package address, and `codePackageInfo` provides the package information. To download the current fixed package, call [GetAgentCodePackageDownloadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageDownloadUrl).
     * In image mode, `customImage` is the most recently saved custom source, and `currentImage` is the image source of the effective version. The two may be different. You can use `imagePreparation.preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to query the preparation and deployment phases of the current custom image. `imageCachePreparation.statusAtAcceptance` only indicates the cache status at the time of acceptance.
     * The response does not return the image repository password. If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentResponse
     */
    async getCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCustomAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCustomAgentResponse({}));
    }
    /**
     * Queries the latest deployment configuration, version processing results, code package or image information, and running instance status of a custom code or image agent.
     *
     * @remarks
     * Queries the configuration, artifacts, and running status of a custom code or image agent to confirm the processing and effective results of creation or updates.
     * ### Query configuration processing results
     * After creation or update, you can poll this operation. The returned configuration belongs to the latest submitted version and may not have taken effect yet.
     * | Field | Description |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The currently effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected version. |
     * | `latestExecutionError` | The reason why the latest version is waiting for a retry or failed to execute, and whether automatic retry is enabled. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The snapshot of the number of running instances in each phase. |
     * `pending`, `processing`, and `waiting_retry` indicate that processing is continuing. `succeeded` indicates that the configuration is processed successfully. If the value is `failed`, troubleshoot the issue based on `latestExecutionError`. Instance status and configuration processing status are queried separately.
     * ### Code packages and images
     * In code package mode, `artifact.code.sourceUri` is the saved fixed package address, and `codePackageInfo` provides the package information. To download the current fixed package, call [GetAgentCodePackageDownloadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageDownloadUrl).
     * In image mode, `customImage` is the most recently saved custom source, and `currentImage` is the image source of the effective version. The two may be different. You can use `imagePreparation.preparationId` to call [GetCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgentImagePreparation) to query the preparation and deployment phases of the current custom image. `imageCachePreparation.statusAtAcceptance` only indicates the cache status at the time of acceptance.
     * The response does not return the image repository password. If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetCustomAgentRequest
     * @returns GetCustomAgentResponse
     */
    async getCustomAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries the preparation and deployment progress of the current submission for a custom image by preparation task ID.
     *
     * @remarks
     * Queries the processing progress, such as image checking, copying, and starting, by preparation task ID to track the result of the current custom image submission.
     * ### Obtain the task identifier
     * Pass the value of `imagePreparation.preparationId` from the response of creating or updating a custom code or image agent as the `preparationId` parameter without modification. It identifies the task for the current submission, not the running instance ID.
     * ### Determine completion
     * | `phase` | Meaning |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * The query only reads the status and does not recreate the copy task. `SUCCEEDED` applies to the current target version. Seeing only old instances running does not indicate that the current submission is complete. If the configuration version is replaced by a subsequent submission, the current task may return `CANCELLED`.
     * If the create or update response is lost, you can call [FindCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/FindCustomAgentImagePreparation) with the `clientToken` used at that time to retrieve the preparation task.
     *
     * @param request - GetCustomAgentImagePreparationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetCustomAgentImagePreparationResponse
     */
    async getCustomAgentImagePreparationWithOptions(workspaceId, preparationId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetCustomAgentImagePreparation",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-image-preparations/${$dara.URL.percentEncode(preparationId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetCustomAgentImagePreparationResponse({}));
    }
    /**
     * Queries the preparation and deployment progress of the current submission for a custom image by preparation task ID.
     *
     * @remarks
     * Queries the processing progress, such as image checking, copying, and starting, by preparation task ID to track the result of the current custom image submission.
     * ### Obtain the task identifier
     * Pass the value of `imagePreparation.preparationId` from the response of creating or updating a custom code or image agent as the `preparationId` parameter without modification. It identifies the task for the current submission, not the running instance ID.
     * ### Determine completion
     * | `phase` | Meaning |
     * | --- | --- |
     * | `QUEUED`, `CHECKING` | Queued or checking the source. |
     * | `COPYING` | Copying the image. |
     * | `STARTING` | Starting the target version. |
     * | `HEALTH_CHECKING` | Waiting for the target version instance to be ready. |
     * | `SUCCEEDED` | The target version is deployed successfully. |
     * | `FAILED` | The preparation or deployment failed. Check `failedPhase` and `error`. |
     * | `CANCELLED` | The target version has been replaced by a subsequent configuration or canceled. |
     * The query only reads the status and does not recreate the copy task. `SUCCEEDED` applies to the current target version. Seeing only old instances running does not indicate that the current submission is complete. If the configuration version is replaced by a subsequent submission, the current task may return `CANCELLED`.
     * If the create or update response is lost, you can call [FindCustomAgentImagePreparation](https://api.aliyun.com/document/AgentCore/2026-08-04/FindCustomAgentImagePreparation) with the `clientToken` used at that time to retrieve the preparation task.
     *
     * @param request - GetCustomAgentImagePreparationRequest
     * @returns GetCustomAgentImagePreparationResponse
     */
    async getCustomAgentImagePreparation(workspaceId, preparationId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getCustomAgentImagePreparationWithOptions(workspaceId, preparationId, request, headers, runtime);
    }
    /**
     * Queries the configuration, model source, version processing status, and external runtime status of a managed agent.
     *
     * @remarks
     * Queries the platform configuration, version processing status, and external runtime status of a managed agent to verify access and configuration effectiveness.
     * ### Configuration processing and runtime status
     * `latestSpecVersion` and `latestVersionStatus` indicate the latest submitted configuration and its processing status. `status` represents the platform resource status, and `externalAgentStatus` represents the external runtime status. A successful configuration acceptance does not mean that the external process is connected.
     * If `modelSource` is `PLATFORM`, the returned model configuration is used. `RUNTIME` indicates that the model is managed by the external environment. `configuredSkills` indicates explicit skill configurations, and `skills` represents the aggregated skill information.
     * ### External access
     * After the configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to query available networks, and then call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain access information. If the agent does not exist, has been deleted, or does not belong to the workspace, a resource not found error is returned.
     *
     * @param request - GetExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetExternalAgentResponse
     */
    async getExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetExternalAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetExternalAgentResponse({}));
    }
    /**
     * Queries the configuration, model source, version processing status, and external runtime status of a managed agent.
     *
     * @remarks
     * Queries the platform configuration, version processing status, and external runtime status of a managed agent to verify access and configuration effectiveness.
     * ### Configuration processing and runtime status
     * `latestSpecVersion` and `latestVersionStatus` indicate the latest submitted configuration and its processing status. `status` represents the platform resource status, and `externalAgentStatus` represents the external runtime status. A successful configuration acceptance does not mean that the external process is connected.
     * If `modelSource` is `PLATFORM`, the returned model configuration is used. `RUNTIME` indicates that the model is managed by the external environment. `configuredSkills` indicates explicit skill configurations, and `skills` represents the aggregated skill information.
     * ### External access
     * After the configuration takes effect, call [GetExternalAgentBootstrapOptions](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgentBootstrapOptions) to query available networks, and then call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain access information. If the agent does not exist, has been deleted, or does not belong to the workspace, a resource not found error is returned.
     *
     * @param request - GetExternalAgentRequest
     * @returns GetExternalAgentResponse
     */
    async getExternalAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries the available internal and public network access options for a managed agent.
     *
     * @remarks
     * Queries the available public and internal network access methods for a managed agent to select the network used for subsequent connections.
     * ### Prerequisites
     * The managed agent must be in the running state, and the latest desired configuration must be applied. If the configuration is still being created, updated, or not fully applied, query the status first by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     * ### Select an access network
     * In the response, the `networkType` in `networkOptions` is `INTRANET` or `INTERNET`, and `available` indicates whether the corresponding access endpoint is available. Select a network with `available=true` and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the corresponding access information.
     *
     * @param request - GetExternalAgentBootstrapOptionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetExternalAgentBootstrapOptionsResponse
     */
    async getExternalAgentBootstrapOptionsWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetExternalAgentBootstrapOptions",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents/${$dara.URL.percentEncode(agentId)}/bootstrap/options`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetExternalAgentBootstrapOptionsResponse({}));
    }
    /**
     * Queries the available internal and public network access options for a managed agent.
     *
     * @remarks
     * Queries the available public and internal network access methods for a managed agent to select the network used for subsequent connections.
     * ### Prerequisites
     * The managed agent must be in the running state, and the latest desired configuration must be applied. If the configuration is still being created, updated, or not fully applied, query the status first by calling [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     * ### Select an access network
     * In the response, the `networkType` in `networkOptions` is `INTRANET` or `INTERNET`, and `available` indicates whether the corresponding access endpoint is available. Select a network with `available=true` and call [CreateExternalAgentBootstrapToken](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateExternalAgentBootstrapToken) to obtain the corresponding access information.
     *
     * @param request - GetExternalAgentBootstrapOptionsRequest
     * @returns GetExternalAgentBootstrapOptionsResponse
     */
    async getExternalAgentBootstrapOptions(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getExternalAgentBootstrapOptionsWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries the binding and expected configuration of a specified identity provider. When SAML is configured for CustomSSO, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * Queries the enterprise identity providers bound to a workspace to view the access configuration, logon and user synchronization switches, and configuration processing progress.
     * For a custom identity provider (`CustomSSO`), this API operation also reads the saved SAML logon configuration for viewing or modifying enterprise single sign-on (SSO) settings.
     * ### How to interpret the query results
     * | Field | Purpose |
     * | --- | --- |
     * | `identityProviderType` | Indicates whether DingTalk, Lark, or a custom identity provider is currently connected. |
     * | `loginEnabled` | Indicates whether enterprise account logon is enabled. |
     * | `saml` | The saved SAML configuration of the enterprise identity system, used for backfilling when editing the configuration. |
     * | `configuration` | The actual SAML configuration read from the identity service, used to verify whether the logon configuration has taken effect. |
     * | `status` | The processing progress to attach the identity provider or apply the logon configuration. |
     * If `CustomSSO` returns `WAITING_CONFIGURATION`, it indicates that the user pool is ready and the SAML logon configuration is pending. In this case, you can call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and continue configuring enterprise single sign-on.
     * After saving the logon configuration, you can query `status` to track the processing progress. `READY` indicates that the configuration processing is complete. To check whether logon is enabled, you also need to verify `loginEnabled` and `configuration`.
     * ### Query user synchronization status
     * SAML logon and SCIM user synchronization are configured separately. SCIM is used to pre-provision users from the enterprise identity system to the user pool. You can call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the receiver configuration and synchronization task results.
     *
     * @param request - GetIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderResponse
     */
    async getIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIdentityProvider",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderResponse({}));
    }
    /**
     * Queries the binding and expected configuration of a specified identity provider. When SAML is configured for CustomSSO, this operation reads back the actual upstream SSO configuration. The SCIM status is queried through a separate API operation.
     *
     * @remarks
     * Queries the enterprise identity providers bound to a workspace to view the access configuration, logon and user synchronization switches, and configuration processing progress.
     * For a custom identity provider (`CustomSSO`), this API operation also reads the saved SAML logon configuration for viewing or modifying enterprise single sign-on (SSO) settings.
     * ### How to interpret the query results
     * | Field | Purpose |
     * | --- | --- |
     * | `identityProviderType` | Indicates whether DingTalk, Lark, or a custom identity provider is currently connected. |
     * | `loginEnabled` | Indicates whether enterprise account logon is enabled. |
     * | `saml` | The saved SAML configuration of the enterprise identity system, used for backfilling when editing the configuration. |
     * | `configuration` | The actual SAML configuration read from the identity service, used to verify whether the logon configuration has taken effect. |
     * | `status` | The processing progress to attach the identity provider or apply the logon configuration. |
     * If `CustomSSO` returns `WAITING_CONFIGURATION`, it indicates that the user pool is ready and the SAML logon configuration is pending. In this case, you can call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and continue configuring enterprise single sign-on.
     * After saving the logon configuration, you can query `status` to track the processing progress. `READY` indicates that the configuration processing is complete. To check whether logon is enabled, you also need to verify `loginEnabled` and `configuration`.
     * ### Query user synchronization status
     * SAML logon and SCIM user synchronization are configured separately. SCIM is used to pre-provision users from the enterprise identity system to the user pool. You can call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the receiver configuration and synchronization task results.
     *
     * @param request - GetIdentityProviderRequest
     * @returns GetIdentityProviderResponse
     */
    async getIdentityProvider(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Queries the actual SCIM receiving configuration, the expected AgentCore synchronization switch, and the status of the most recent independent SCIM task. SAML configuration is not required beforehand.
     *
     * @remarks
     * Queries the access configuration and processing progress of SCIM user synchronization to determine whether the receiving end is ready, whether AgentCore user synchronization is enabled, and whether the most recent synchronization operation is completed.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information to the user pool through the receiving URL and access token. After AgentCore user synchronization is enabled, users in the user pool are imported into the workspace.
     * ### How to interpret the query results
     * | Field | Business meaning |
     * | --- | --- |
     * | `configuration` | The actual status and receiving URL of the SCIM receiving endpoint. |
     * | `syncEnabled` | The expected switch for AgentCore user synchronization. |
     * | `operationStatus` | The execution result of the most recent operation to enable or disable synchronization. It is an empty string `""` if no historical tasks exist. |
     * | `status` | The SCIM access state derived from the receiving endpoint configuration, credentials, and operation results. |
     * ### Proceed based on the status
     * | `status` | Current stage | Next step |
     * | --- | --- | --- |
     * | `UNCONFIGURED` | The receiving end is not ready. | Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare for access. |
     * | `WAITING_CONFIGURATION` | The URL and valid credentials are available. Waiting for the enterprise-side configuration to be completed and synchronization to be enabled. | Configure the URL and token in the enterprise identity system, and then call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * | `UPDATING` | Synchronization is being enabled or disabled. | Continue to query this operation and wait for the operation to complete. |
     * | `READY` | Synchronization is enabled, the current enabling task is successful, and the receiving end and credentials are still available. | You can view the synchronized workspace users. |
     * | `DISABLED` | Synchronization is disabled. Existing configurations, credentials, and users are retained. | To re-establish access, check and prepare the receiving end first, and then enable synchronization. |
     * | `UPDATE_FAILED` | The operation failed, or the configuration and credentials after enabling are no longer available. | Check the operation results and access configuration in combination with `operationStatus`. |
     * This operation queries the SCIM status. The SAML enterprise account logon configuration is queried through [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider). `READY` reflects the result of the current enabling operation. The user assignment and provisioning status in the enterprise identity system must still be verified on the enterprise side.
     *
     * @param request - GetIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSCIMResponse
     */
    async getIdentityProviderSCIMWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIdentityProviderSCIM",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderSCIMResponse({}));
    }
    /**
     * Queries the actual SCIM receiving configuration, the expected AgentCore synchronization switch, and the status of the most recent independent SCIM task. SAML configuration is not required beforehand.
     *
     * @remarks
     * Queries the access configuration and processing progress of SCIM user synchronization to determine whether the receiving end is ready, whether AgentCore user synchronization is enabled, and whether the most recent synchronization operation is completed.
     * SCIM is a user provisioning protocol. The enterprise identity system sends user information to the user pool through the receiving URL and access token. After AgentCore user synchronization is enabled, users in the user pool are imported into the workspace.
     * ### How to interpret the query results
     * | Field | Business meaning |
     * | --- | --- |
     * | `configuration` | The actual status and receiving URL of the SCIM receiving endpoint. |
     * | `syncEnabled` | The expected switch for AgentCore user synchronization. |
     * | `operationStatus` | The execution result of the most recent operation to enable or disable synchronization. It is an empty string `""` if no historical tasks exist. |
     * | `status` | The SCIM access state derived from the receiving endpoint configuration, credentials, and operation results. |
     * ### Proceed based on the status
     * | `status` | Current stage | Next step |
     * | --- | --- | --- |
     * | `UNCONFIGURED` | The receiving end is not ready. | Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare for access. |
     * | `WAITING_CONFIGURATION` | The URL and valid credentials are available. Waiting for the enterprise-side configuration to be completed and synchronization to be enabled. | Configure the URL and token in the enterprise identity system, and then call [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * | `UPDATING` | Synchronization is being enabled or disabled. | Continue to query this operation and wait for the operation to complete. |
     * | `READY` | Synchronization is enabled, the current enabling task is successful, and the receiving end and credentials are still available. | You can view the synchronized workspace users. |
     * | `DISABLED` | Synchronization is disabled. Existing configurations, credentials, and users are retained. | To re-establish access, check and prepare the receiving end first, and then enable synchronization. |
     * | `UPDATE_FAILED` | The operation failed, or the configuration and credentials after enabling are no longer available. | Check the operation results and access configuration in combination with `operationStatus`. |
     * This operation queries the SCIM status. The SAML enterprise account logon configuration is queried through [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider). `READY` reflects the result of the current enabling operation. The user assignment and provisioning status in the enterprise identity system must still be verified on the enterprise side.
     *
     * @param request - GetIdentityProviderSCIMRequest
     * @returns GetIdentityProviderSCIMResponse
     */
    async getIdentityProviderSCIM(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getIdentityProviderSCIMWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the SAML service provider (SP) information of CustomSSO, including the Entity ID, ACS URL, and SP metadata XML, for users to configure an external IdP.
     *
     * @remarks
     * Retrieves the SAML service provider (SP) access information of AgentCore to configure single sign-on (SSO) in an enterprise identity provider (IdP).
     * An SP is a service provider that receives logon assertions. An IdP is an enterprise identity provider that verifies user identities and issues logon assertions. This operation returns the SP information on the AgentCore side.
     * ### Before you begin
     * The workspace is bound to CustomSSO, and the shared user pool is initialized. The protocol parameter is required and must be set to SAML.
     * You can call the [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) operation to query the binding information. After the user pool is available, you can obtain the SP information and then complete the SAML configuration.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ### Response information
     * | Field | Purpose |
     * | --- | --- |
     * | protocol | The access protocol. This operation returns SAML. |
     * | entityId | The SP identifier of AgentCore. Configure it as the service provider Entity ID in the enterprise IdP. |
     * | acsUrl | The URL where AgentCore receives SAML logon assertions. Configure it as the ACS URL in the enterprise IdP. |
     * | metadataXml | The SP metadata XML. Import it to configure the SP in an enterprise IdP that supports metadata import. |
     * ### Configuration flow
     * **Step 1:** Call this operation to obtain the SP information, and configure the SP identifier and the URL to accept assertions of AgentCore in the enterprise IdP.
     * **Step 2:** Export the metadata XML from the enterprise IdP and save it to AgentCore by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider).
     * **Step 3:** After the configuration is complete, enable single sign-on logon by setting loginEnabled as needed.
     *
     * @param request - GetIdentityProviderServiceProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderServiceProviderResponse
     */
    async getIdentityProviderServiceProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.protocol)) {
            query["protocol"] = request.protocol;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIdentityProviderServiceProvider",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}/service-provider`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderServiceProviderResponse({}));
    }
    /**
     * Queries the SAML service provider (SP) information of CustomSSO, including the Entity ID, ACS URL, and SP metadata XML, for users to configure an external IdP.
     *
     * @remarks
     * Retrieves the SAML service provider (SP) access information of AgentCore to configure single sign-on (SSO) in an enterprise identity provider (IdP).
     * An SP is a service provider that receives logon assertions. An IdP is an enterprise identity provider that verifies user identities and issues logon assertions. This operation returns the SP information on the AgentCore side.
     * ### Before you begin
     * The workspace is bound to CustomSSO, and the shared user pool is initialized. The protocol parameter is required and must be set to SAML.
     * You can call the [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) operation to query the binding information. After the user pool is available, you can obtain the SP information and then complete the SAML configuration.
     * ### Request example
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/CustomSSO/service-provider?protocol=SAML
     * ```
     * ### Response information
     * | Field | Purpose |
     * | --- | --- |
     * | protocol | The access protocol. This operation returns SAML. |
     * | entityId | The SP identifier of AgentCore. Configure it as the service provider Entity ID in the enterprise IdP. |
     * | acsUrl | The URL where AgentCore receives SAML logon assertions. Configure it as the ACS URL in the enterprise IdP. |
     * | metadataXml | The SP metadata XML. Import it to configure the SP in an enterprise IdP that supports metadata import. |
     * ### Configuration flow
     * **Step 1:** Call this operation to obtain the SP information, and configure the SP identifier and the URL to accept assertions of AgentCore in the enterprise IdP.
     * **Step 2:** Export the metadata XML from the enterprise IdP and save it to AgentCore by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider).
     * **Step 3:** After the configuration is complete, enable single sign-on logon by setting loginEnabled as needed.
     *
     * @param request - GetIdentityProviderServiceProviderRequest
     * @returns GetIdentityProviderServiceProviderResponse
     */
    async getIdentityProviderServiceProvider(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getIdentityProviderServiceProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Queries an identity provider synchronization task.
     *
     * @remarks
     * Queries the progress, number of processed users, and failure causes of a user synchronization task to track whether manual synchronization is complete.
     * Use the `taskId` returned by [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) and keep the same workspace and identity provider.
     * ### Determine synchronization results
     * | `status` | Meaning and what to do next |
     * | --- | --- |
     * | `PENDING`, `RUNNING` | The node is not yet complete. You can continue to query. |
     * | `PAUSED` | The node is paused and has not ended. |
     * | `SUCCESS` | The synchronization is complete. You can view the workspace users. |
     * | `FAILED` | The synchronization failed. Check `failureReason`. |
     * | `CANCELED` | The node is canceled. |
     * `syncedUserCount` is the number of processed users, including updated existing users. It is not the number of newly added users and cannot be directly used as a completion percentage. `null` is returned when the count is not yet available.
     *
     * @param request - GetIdentityProviderSyncJobRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSyncJobResponse
     */
    async getIdentityProviderSyncJobWithOptions(workspaceId, identityProviderType, taskId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIdentityProviderSyncJob",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}/sync-jobs/${$dara.URL.percentEncode(taskId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderSyncJobResponse({}));
    }
    /**
     * Queries an identity provider synchronization task.
     *
     * @remarks
     * Queries the progress, number of processed users, and failure causes of a user synchronization task to track whether manual synchronization is complete.
     * Use the `taskId` returned by [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) and keep the same workspace and identity provider.
     * ### Determine synchronization results
     * | `status` | Meaning and what to do next |
     * | --- | --- |
     * | `PENDING`, `RUNNING` | The node is not yet complete. You can continue to query. |
     * | `PAUSED` | The node is paused and has not ended. |
     * | `SUCCESS` | The synchronization is complete. You can view the workspace users. |
     * | `FAILED` | The synchronization failed. Check `failureReason`. |
     * | `CANCELED` | The node is canceled. |
     * `syncedUserCount` is the number of processed users, including updated existing users. It is not the number of newly added users and cannot be directly used as a completion percentage. `null` is returned when the count is not yet available.
     *
     * @param request - GetIdentityProviderSyncJobRequest
     * @returns GetIdentityProviderSyncJobResponse
     */
    async getIdentityProviderSyncJob(workspaceId, identityProviderType, taskId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getIdentityProviderSyncJobWithOptions(workspaceId, identityProviderType, taskId, request, headers, runtime);
    }
    /**
     * Queries the synchronization scope of an identity provider.
     *
     * @remarks
     * Queries the saved user synchronization scope, checks whether the selected departments are valid, and views the estimated number of departments and users involved. You can use this operation to verify the scope before initiating a manual synchronization.
     * ### View synchronization scope
     * | `syncScope.mode` | Synchronization scope |
     * | --- | --- |
     * | `AllAuthorized` | The address book scope authorized for the enterprise application. The specific scope is determined by the enterprise\\"s authorization. |
     * | `SelectedDepartments` | The saved scope of specified departments. Use `selectedDepartments` to view the selected departments and their validity. |
     * This operation reads the saved configuration. After adjusting the department selection, save the changes by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) before querying the estimated results. To browse the complete department tree, use [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments).
     * ### Use user count estimation
     * You can use `expandedDepartmentCount` and `estimatedUserCount` only when `estimateStatus=Ready` and the counts are not `null`. Counts that have not been obtained return `null` and must not be treated as 0.
     * After confirming the scope, initiate the synchronization by calling [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob).
     *
     * @param request - GetIdentityProviderSyncScopeRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetIdentityProviderSyncScopeResponse
     */
    async getIdentityProviderSyncScopeWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetIdentityProviderSyncScope",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}/sync-scope`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderSyncScopeResponse({}));
    }
    /**
     * Queries the synchronization scope of an identity provider.
     *
     * @remarks
     * Queries the saved user synchronization scope, checks whether the selected departments are valid, and views the estimated number of departments and users involved. You can use this operation to verify the scope before initiating a manual synchronization.
     * ### View synchronization scope
     * | `syncScope.mode` | Synchronization scope |
     * | --- | --- |
     * | `AllAuthorized` | The address book scope authorized for the enterprise application. The specific scope is determined by the enterprise\\"s authorization. |
     * | `SelectedDepartments` | The saved scope of specified departments. Use `selectedDepartments` to view the selected departments and their validity. |
     * This operation reads the saved configuration. After adjusting the department selection, save the changes by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider) before querying the estimated results. To browse the complete department tree, use [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments).
     * ### Use user count estimation
     * You can use `expandedDepartmentCount` and `estimatedUserCount` only when `estimateStatus=Ready` and the counts are not `null`. Counts that have not been obtained return `null` and must not be treated as 0.
     * After confirming the scope, initiate the synchronization by calling [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob).
     *
     * @param request - GetIdentityProviderSyncScopeRequest
     * @returns GetIdentityProviderSyncScopeResponse
     */
    async getIdentityProviderSyncScope(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getIdentityProviderSyncScopeWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Queries the status, digest, size, and deletion conditions of an image cache in a specified workspace.
     *
     * @remarks
     * Queries the creation status and usage of an image cache to determine whether the cache is available and meets the deletion conditions.
     * ### Cache status
     * | `status` | Meaning |
     * | --- | --- |
     * | `PENDING` | Preparing. Continue to query. |
     * | `READY` | Ready. |
     * | `FAILED` | Preparation failed. Troubleshoot based on the `error` field. |
     * | `DELETING` | Deleting. |
     * | `DISABLED` | Disabled. |
     * The `digest` is provided after the source resolution is completed. The unit of `cacheSizeBytes` is bytes, and it can be empty when the cache is not yet available.
     * ### Usage and deletion
     * `agentCount` indicates the number of agents that have enabled the cache switch and reference this cache. `canDelete` and `deleteBlockReason` indicate whether the cache can be deleted and the reason for blocking deletion. Deletion requests will recheck the usage.
     * The query scope of this operation is determined by `regionId`, `workspaceId`, and `imageId`.
     *
     * @param request - GetImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetImageCacheResponse
     */
    async getImageCacheWithOptions(imageId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.regionId)) {
            query["regionId"] = request.regionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["workspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetImageCache",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/image-caches/${$dara.URL.percentEncode(imageId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetImageCacheResponse({}));
    }
    /**
     * Queries the status, digest, size, and deletion conditions of an image cache in a specified workspace.
     *
     * @remarks
     * Queries the creation status and usage of an image cache to determine whether the cache is available and meets the deletion conditions.
     * ### Cache status
     * | `status` | Meaning |
     * | --- | --- |
     * | `PENDING` | Preparing. Continue to query. |
     * | `READY` | Ready. |
     * | `FAILED` | Preparation failed. Troubleshoot based on the `error` field. |
     * | `DELETING` | Deleting. |
     * | `DISABLED` | Disabled. |
     * The `digest` is provided after the source resolution is completed. The unit of `cacheSizeBytes` is bytes, and it can be empty when the cache is not yet available.
     * ### Usage and deletion
     * `agentCount` indicates the number of agents that have enabled the cache switch and reference this cache. `canDelete` and `deleteBlockReason` indicate whether the cache can be deleted and the reason for blocking deletion. Deletion requests will recheck the usage.
     * The query scope of this operation is determined by `regionId`, `workspaceId`, and `imageId`.
     *
     * @param request - GetImageCacheRequest
     * @returns GetImageCacheResponse
     */
    async getImageCache(imageId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getImageCacheWithOptions(imageId, request, headers, runtime);
    }
    /**
     * Queries the latest configuration, Harness and skill versions, configuration processing status, and running instance statistics of a managed Harness agent.
     *
     * @remarks
     * Queries the configuration, skill versions, and running status of a managed Harness agent to view the current configuration and its processing results.
     * ### Configuration and running status
     * This operation returns the latest submitted configuration, which may still be processing. Use the following fields to determine the update progress and running status:
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest submitted desired configuration version. |
     * | `latestVersionStatus` | The processing status of the desired version. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The current snapshot of the number of instances in each phase. |
     * Successful configuration processing does not mean that all old instances have been replaced. To view specific instances or active sessions, call [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes) and [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions) respectively.
     * ### Harness and skill versions
     * `harness.type` indicates the runtime framework determined at creation. For qodercli, `connectorServiceAccountKey` returns the ID of the bound account key record and does not return the original key.
     * `configuredSkills` refers to explicitly configured skills. `skills` includes the aggregated results of template and explicit configurations. `resolvedVersion` is the current target version, and `appliedVersion` is the version currently in effect at runtime. These two may differ during an update. `fromTemplate=true` indicates that the skill comes from a template.
     * If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetManagedAgentResponse
     */
    async getManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetManagedAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetManagedAgentResponse({}));
    }
    /**
     * Queries the latest configuration, Harness and skill versions, configuration processing status, and running instance statistics of a managed Harness agent.
     *
     * @remarks
     * Queries the configuration, skill versions, and running status of a managed Harness agent to view the current configuration and its processing results.
     * ### Configuration and running status
     * This operation returns the latest submitted configuration, which may still be processing. Use the following fields to determine the update progress and running status:
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest submitted desired configuration version. |
     * | `latestVersionStatus` | The processing status of the desired version. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | The current snapshot of the number of instances in each phase. |
     * Successful configuration processing does not mean that all old instances have been replaced. To view specific instances or active sessions, call [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes) and [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions) respectively.
     * ### Harness and skill versions
     * `harness.type` indicates the runtime framework determined at creation. For qodercli, `connectorServiceAccountKey` returns the ID of the bound account key record and does not return the original key.
     * `configuredSkills` refers to explicitly configured skills. `skills` includes the aggregated results of template and explicit configurations. `resolvedVersion` is the current target version, and `appliedVersion` is the version currently in effect at runtime. These two may differ during an update. `fromTemplate=true` indicates that the skill comes from a template.
     * If you query an agent that does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
     *
     * @param request - GetManagedAgentRequest
     * @returns GetManagedAgentResponse
     */
    async getManagedAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @remarks
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @param request - GetMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpResponse
     */
    async getMcpWithOptions(workspaceId, mcpServerId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMcp",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMcpResponse({}));
    }
    /**
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @remarks
     * Queries the details of a specified MCP service, such as the address, type, status, authentication configuration, and protocol.
     *
     * @param request - GetMcpRequest
     * @returns GetMcpResponse
     */
    async getMcp(workspaceId, mcpServerId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMcpWithOptions(workspaceId, mcpServerId, request, headers, runtime);
    }
    /**
     * Returns a time-limited presigned upload URL and a temporary code package token. After the upload is complete, the token can be used to create or update a code deployment.
     *
     * @remarks
     * Retrieves a temporary upload URL for a local MCP code package to create or update an MCP service of the code deployment type.
     * ### Upload and deployment steps
     * **Step 1:** Prepare a ZIP code package, enter the file name in `fileName`, and call this operation to obtain the upload information.
     * **Step 2:** Use the returned `uploadMethod`, `uploadUrl`, and `headers` to upload the file content. The package size cannot exceed `maxSize`. The current limit is 50 MiB (52,428,800 bytes).
     * **Step 3:** After the upload is complete, submit the `codePackageToken` to the code deployment configuration in [CreateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateMcp) or [UpdateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateMcp).
     * **Step 4:** After submitting the deployment, query the service status by calling [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp).
     * ### Validity period
     * For the expiration time of the upload URL, see `expiresAt`. For the expiration time of the temporary code package, see `artifactExpiresAt`. Complete the upload and deployment within the corresponding periods. If the upload URL expires, retrieve it again.
     *
     * @param tmpReq - GetMcpCodePackageUploadUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpCodePackageUploadUrlResponse
     */
    async getMcpCodePackageUploadUrlWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.GetMcpCodePackageUploadUrlShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMcpCodePackageUploadUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-server-actions/get-code-package-upload-url`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMcpCodePackageUploadUrlResponse({}));
    }
    /**
     * Returns a time-limited presigned upload URL and a temporary code package token. After the upload is complete, the token can be used to create or update a code deployment.
     *
     * @remarks
     * Retrieves a temporary upload URL for a local MCP code package to create or update an MCP service of the code deployment type.
     * ### Upload and deployment steps
     * **Step 1:** Prepare a ZIP code package, enter the file name in `fileName`, and call this operation to obtain the upload information.
     * **Step 2:** Use the returned `uploadMethod`, `uploadUrl`, and `headers` to upload the file content. The package size cannot exceed `maxSize`. The current limit is 50 MiB (52,428,800 bytes).
     * **Step 3:** After the upload is complete, submit the `codePackageToken` to the code deployment configuration in [CreateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateMcp) or [UpdateMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateMcp).
     * **Step 4:** After submitting the deployment, query the service status by calling [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp).
     * ### Validity period
     * For the expiration time of the upload URL, see `expiresAt`. For the expiration time of the temporary code package, see `artifactExpiresAt`. Complete the upload and deployment within the corresponding periods. If the upload URL expires, retrieve it again.
     *
     * @param request - GetMcpCodePackageUploadUrlRequest
     * @returns GetMcpCodePackageUploadUrlResponse
     */
    async getMcpCodePackageUploadUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMcpCodePackageUploadUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the details of an MCP marketplace template.
     *
     * @remarks
     * Queries the capabilities, parameters, and version information of an MCP marketplace template to help you select a template and prepare for installation and configuration.
     * Returns the current template version and the installation form schema.
     *
     * @param request - GetMcpMarketItemRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMcpMarketItemResponse
     */
    async getMcpMarketItemWithOptions(workspaceId, marketItemId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMcpMarketItem",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-market/items/${$dara.URL.percentEncode(marketItemId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMcpMarketItemResponse({}));
    }
    /**
     * Queries the details of an MCP marketplace template.
     *
     * @remarks
     * Queries the capabilities, parameters, and version information of an MCP marketplace template to help you select a template and prepare for installation and configuration.
     * Returns the current template version and the installation form schema.
     *
     * @param request - GetMcpMarketItemRequest
     * @returns GetMcpMarketItemResponse
     */
    async getMcpMarketItem(workspaceId, marketItemId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMcpMarketItemWithOptions(workspaceId, marketItemId, request, headers, runtime);
    }
    /**
     * Queries a long-term memory by memory ID.
     *
     * @remarks
     * Queries a long-term memory by memory ID.
     *
     * @param request - GetMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryResponse
     */
    async getMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMemory",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories/${$dara.URL.percentEncode(memoryId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
    }
    /**
     * Queries a long-term memory by memory ID.
     *
     * @remarks
     * Queries a long-term memory by memory ID.
     *
     * @param request - GetMemoryRequest
     * @returns GetMemoryResponse
     */
    async getMemory(workspaceId, memoryStoreName, memoryId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
    }
    /**
     * Queries the public information and current status of a MemoryStore in a specified workspace.
     *
     * @remarks
     * Queries the configuration and current status of a long-term memory store (MemoryStore) for viewing memory store information.
     *
     * @param request - GetMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryStoreResponse
     */
    async getMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMemoryStore",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMemoryStoreResponse({}));
    }
    /**
     * Queries the public information and current status of a MemoryStore in a specified workspace.
     *
     * @remarks
     * Queries the configuration and current status of a long-term memory store (MemoryStore) for viewing memory store information.
     *
     * @param request - GetMemoryStoreRequest
     * @returns GetMemoryStoreResponse
     */
    async getMemoryStore(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Queries the task ID returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the progress and results of a memory extraction task by using the `taskId` returned by the asynchronous [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) operation.
     *
     * @param request - GetMemoryTaskRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetMemoryTaskResponse
     */
    async getMemoryTaskWithOptions(workspaceId, memoryStoreName, taskId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetMemoryTask",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memory-tasks/${$dara.URL.percentEncode(taskId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetMemoryTaskResponse({}));
    }
    /**
     * Queries the task ID returned by the asynchronous AddMemories operation.
     *
     * @remarks
     * Queries the progress and results of a memory extraction task by using the `taskId` returned by the asynchronous [AddMemories](https://api.aliyun.com/document/AgentCore/2026-08-04/AddMemories) operation.
     *
     * @param request - GetMemoryTaskRequest
     * @returns GetMemoryTaskResponse
     */
    async getMemoryTask(workspaceId, memoryStoreName, taskId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getMemoryTaskWithOptions(workspaceId, memoryStoreName, taskId, request, headers, runtime);
    }
    /**
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @remarks
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @param request - GetModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetModelResponse
     */
    async getModelWithOptions(workspaceId, modelId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetModel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models/${$dara.URL.percentEncode(modelId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetModelResponse({}));
    }
    /**
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @remarks
     * Queries the detailed configuration and region of a model in a specified workspace.
     *
     * @param request - GetModelRequest
     * @returns GetModelResponse
     */
    async getModel(workspaceId, modelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getModelWithOptions(workspaceId, modelId, request, headers, runtime);
    }
    /**
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @remarks
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @param request - GetModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetModelConnectionResponse
     */
    async getModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetModelConnection",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/model-connections/${$dara.URL.percentEncode(connectionId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetModelConnectionResponse({}));
    }
    /**
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @remarks
     * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
     *
     * @param request - GetModelConnectionRequest
     * @returns GetModelConnectionResponse
     */
    async getModelConnection(workspaceId, connectionId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
    }
    /**
     * Queries the details of a specified service endpoint, including the target route, access addresses, authentication configuration, and current status.
     *
     * @remarks
     * Queries the service endpoint of an agent or collaboration component to obtain stable access addresses, authentication configuration, and current status.
     * A service endpoint associates access addresses with a specified agent version or workspace collaboration component. You can use the target route and address list in the response to verify the access target.
     *
     * @param request - GetServiceEndpointRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceEndpointResponse
     */
    async getServiceEndpointWithOptions(workspaceId, serviceEndpointId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetServiceEndpoint",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/service-endpoints/${$dara.URL.percentEncode(serviceEndpointId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetServiceEndpointResponse({}));
    }
    /**
     * Queries the details of a specified service endpoint, including the target route, access addresses, authentication configuration, and current status.
     *
     * @remarks
     * Queries the service endpoint of an agent or collaboration component to obtain stable access addresses, authentication configuration, and current status.
     * A service endpoint associates access addresses with a specified agent version or workspace collaboration component. You can use the target route and address list in the response to verify the access target.
     *
     * @param request - GetServiceEndpointRequest
     * @returns GetServiceEndpointResponse
     */
    async getServiceEndpoint(workspaceId, serviceEndpointId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getServiceEndpointWithOptions(workspaceId, serviceEndpointId, request, headers, runtime);
    }
    /**
     * Queries the active API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Retrieves the active API key and invocation method of a service endpoint for external applications to access the endpoint.
     * The endpoint must have `API_KEY` authentication enabled and access credentials ready. Securely store the returned API key.
     *
     * @param request - GetServiceEndpointApiKeyRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetServiceEndpointApiKeyResponse
     */
    async getServiceEndpointApiKeyWithOptions(workspaceId, serviceEndpointId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetServiceEndpointApiKey",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/service-endpoints/${$dara.URL.percentEncode(serviceEndpointId)}/api-key/get`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetServiceEndpointApiKeyResponse({}));
    }
    /**
     * Queries the active API key and its invocation method for a service endpoint in a specified workspace.
     *
     * @remarks
     * Retrieves the active API key and invocation method of a service endpoint for external applications to access the endpoint.
     * The endpoint must have `API_KEY` authentication enabled and access credentials ready. Securely store the returned API key.
     *
     * @param request - GetServiceEndpointApiKeyRequest
     * @returns GetServiceEndpointApiKeyResponse
     */
    async getServiceEndpointApiKey(workspaceId, serviceEndpointId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getServiceEndpointApiKeyWithOptions(workspaceId, serviceEndpointId, request, headers, runtime);
    }
    /**
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @remarks
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @param request - GetSkillDetailRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillDetailResponse
     */
    async getSkillDetailWithOptions(workspaceId, skillName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSkillDetail",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSkillDetailResponse({}));
    }
    /**
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @remarks
     * Queries the basic information, version status, tags, visibility scope, and version list of a specified skill.
     *
     * @param request - GetSkillDetailRequest
     * @returns GetSkillDetailResponse
     */
    async getSkillDetail(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getSkillDetailWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Retrieves the Object Storage Service (OSS) presigned upload URL and object name required to import a skill ZIP package. After the upload is complete, you can call the skill OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for a skill ZIP package to import a skill from a local file.
     * Files are transferred through OSS. Upload the file by using the returned URL, and then call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) to complete the import. To check the package content and conflicts, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss) first.
     *
     * @param request - GetSkillImportFileUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillImportFileUrlResponse
     */
    async getSkillImportFileUrlWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.contentType)) {
            query["contentType"] = request.contentType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSkillImportFileUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skill-actions/get-import-file-url`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSkillImportFileUrlResponse({}));
    }
    /**
     * Retrieves the Object Storage Service (OSS) presigned upload URL and object name required to import a skill ZIP package. After the upload is complete, you can call the skill OSS upload API operation to complete the import.
     *
     * @remarks
     * Retrieves the upload URL for a skill ZIP package to import a skill from a local file.
     * Files are transferred through OSS. Upload the file by using the returned URL, and then call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) to complete the import. To check the package content and conflicts, call [PrecheckSkillUploadViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/PrecheckSkillUploadViaOss) first.
     *
     * @param request - GetSkillImportFileUrlRequest
     * @returns GetSkillImportFileUrlResponse
     */
    async getSkillImportFileUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getSkillImportFileUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @remarks
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @param request - GetSkillVersionDetailRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetSkillVersionDetailResponse
     */
    async getSkillVersionDetailWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetSkillVersionDetail",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetSkillVersionDetailResponse({}));
    }
    /**
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @remarks
     * Queries the complete details of a specified skill version, including version metadata, skill content, and associated resources.
     *
     * @param request - GetSkillVersionDetailRequest
     * @returns GetSkillVersionDetailResponse
     */
    async getSkillVersionDetail(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getSkillVersionDetailWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Queries the details of a specified team, including the complete attributes and team roles of each user and agent member in the team.
     *
     * @remarks
     * Queries the details of a specified team, including the complete attributes and team roles of each user and agent member in the team.
     *
     * @param request - GetTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetTeamResponse
     */
    async getTeamWithOptions(workspaceId, teamId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetTeam",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/teams/${$dara.URL.percentEncode(teamId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetTeamResponse({}));
    }
    /**
     * Queries the details of a specified team, including the complete attributes and team roles of each user and agent member in the team.
     *
     * @remarks
     * Queries the details of a specified team, including the complete attributes and team roles of each user and agent member in the team.
     *
     * @param request - GetTeamRequest
     * @returns GetTeamResponse
     */
    async getTeam(workspaceId, teamId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getTeamWithOptions(workspaceId, teamId, request, headers, runtime);
    }
    /**
     * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
     *
     * @remarks
     * Queries the details of a specific user in a specified workspace.
     *
     * @param request - GetUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetUserResponse
     */
    async getUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetUser",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users/${$dara.URL.percentEncode(agentCoreUserId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
    }
    /**
     * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
     *
     * @remarks
     * Queries the details of a specific user in a specified workspace.
     *
     * @param request - GetUserRequest
     * @returns GetUserResponse
     */
    async getUser(workspaceId, agentCoreUserId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
    }
    /**
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS workspace, AI registry namespace, and current network policies.
     *
     * @remarks
     * Queries the basic information, associated resources, and network configurations of a workspace for status viewing or configuration verification.
     * The returned information includes the lifecycle status, associated observability workspace, AI registry namespace, and current network policies.
     *
     * @param request - GetWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceResponse
     */
    async getWorkspaceWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetWorkspace",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
    }
    /**
     * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS workspace, AI registry namespace, and current network policies.
     *
     * @remarks
     * Queries the basic information, associated resources, and network configurations of a workspace for status viewing or configuration verification.
     * The returned information includes the lifecycle status, associated observability workspace, AI registry namespace, and current network policies.
     *
     * @param request - GetWorkspaceRequest
     * @returns GetWorkspaceResponse
     */
    async getWorkspace(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getWorkspaceWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Generates a RAM authorization link for the workspace resource role to pull images from a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Generates an authorization link for the workspace resource role to pull images from a specified ACR Enterprise Edition repository, allowing you to complete access authorization before image deployment.
     * ### Request parameters
     * The `workspaceId` parameter specifies the workspace. The `acrInstanceId`, `namespace`, and `repository` parameters are passed as query parameters. The `repository` parameter specifies the repository name without the namespace.
     * ### Complete authorization
     * Open the `authorizeUrl` in the response and confirm the authorization. Then, call [VerifyWorkspaceAcrRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAcrRamAuthorization) to check the binding status. The role is selected by the server. The `roleName` and `roleSource` parameters indicate the selected role and its source, but do not indicate that the authorization is complete.
     * This authorization is used for ACR image deployment of custom agents and reading image cache sources. Obtaining the link itself does not pull images or create caches.
     *
     * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
     */
    async getWorkspaceAcrRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.acrInstanceId)) {
            query["acrInstanceId"] = request.acrInstanceId;
        }
        if (!$dara.isNull(request.namespace)) {
            query["namespace"] = request.namespace;
        }
        if (!$dara.isNull(request.repository)) {
            query["repository"] = request.repository;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetWorkspaceAcrRamAuthorizeUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/acr/authorize`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetWorkspaceAcrRamAuthorizeUrlResponse({}));
    }
    /**
     * Generates a RAM authorization link for the workspace resource role to pull images from a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Generates an authorization link for the workspace resource role to pull images from a specified ACR Enterprise Edition repository, allowing you to complete access authorization before image deployment.
     * ### Request parameters
     * The `workspaceId` parameter specifies the workspace. The `acrInstanceId`, `namespace`, and `repository` parameters are passed as query parameters. The `repository` parameter specifies the repository name without the namespace.
     * ### Complete authorization
     * Open the `authorizeUrl` in the response and confirm the authorization. Then, call [VerifyWorkspaceAcrRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAcrRamAuthorization) to check the binding status. The role is selected by the server. The `roleName` and `roleSource` parameters indicate the selected role and its source, but do not indicate that the authorization is complete.
     * This authorization is used for ACR image deployment of custom agents and reading image cache sources. Obtaining the link itself does not pull images or create caches.
     *
     * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
     * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
     */
    async getWorkspaceAcrRamAuthorizeUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getWorkspaceAcrRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Retrieves the RAM authorization page URL to grant the workspace resource role access to a specified AgenticFS access point before configuring NAS storage mounting for an agent.
     *
     * @remarks
     * Retrieves the AgenticFS mount authorization link to enable agents in the workspace to access a specified file space.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of Apsara File Storage NAS designed for AI agents. It can be used to persistently store files used by agents. AgenticSpace is the file space within it, and an access point provides the mount entry.
     * ### Authorization and mounting steps
     * **Step 1:** Prepare a file system, an AgenticSpace, and an access point in NAS, and obtain the file system ID, access point ID, and domain name.
     * **Step 2:** Submit `fileSystemId`, `accessPointId`, and `server` as query parameters. For `server`, enter the access point domain name returned by the NAS `ListAccessPoints` operation, without the protocol, port, or path.
     * **Step 3:** Open the returned `authorizeUrl` to complete the authorization for the workspace resource role.
     * **Step 4:** Check the authorization status by calling [VerifyWorkspaceAgenticFsMountRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAgenticFsMountRamAuthorization).
     * **Step 5:** When creating or updating a custom code or image agent, or a managed Harness agent, enter the access point domain name, the relative directory `path`, and the container mount path `mountPath` in `agenticFsMounts`.
     * The access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent. The mount directory must already exist. Use a non-empty relative directory within the access point for `path`, and use an absolute path within the container for `mountPath`.
     *
     * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
     */
    async getWorkspaceAgenticFsMountRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.accessPointId)) {
            query["accessPointId"] = request.accessPointId;
        }
        if (!$dara.isNull(request.fileSystemId)) {
            query["fileSystemId"] = request.fileSystemId;
        }
        if (!$dara.isNull(request.server)) {
            query["server"] = request.server;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetWorkspaceAgenticFsMountRamAuthorizeUrl",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agentic-fs/authorize`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse({}));
    }
    /**
     * Retrieves the RAM authorization page URL to grant the workspace resource role access to a specified AgenticFS access point before configuring NAS storage mounting for an agent.
     *
     * @remarks
     * Retrieves the AgenticFS mount authorization link to enable agents in the workspace to access a specified file space.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of Apsara File Storage NAS designed for AI agents. It can be used to persistently store files used by agents. AgenticSpace is the file space within it, and an access point provides the mount entry.
     * ### Authorization and mounting steps
     * **Step 1:** Prepare a file system, an AgenticSpace, and an access point in NAS, and obtain the file system ID, access point ID, and domain name.
     * **Step 2:** Submit `fileSystemId`, `accessPointId`, and `server` as query parameters. For `server`, enter the access point domain name returned by the NAS `ListAccessPoints` operation, without the protocol, port, or path.
     * **Step 3:** Open the returned `authorizeUrl` to complete the authorization for the workspace resource role.
     * **Step 4:** Check the authorization status by calling [VerifyWorkspaceAgenticFsMountRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyWorkspaceAgenticFsMountRamAuthorization).
     * **Step 5:** When creating or updating a custom code or image agent, or a managed Harness agent, enter the access point domain name, the relative directory `path`, and the container mount path `mountPath` in `agenticFsMounts`.
     * The access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent. The mount directory must already exist. Use a non-empty relative directory within the access point for `path`, and use an absolute path within the container for `mountPath`.
     *
     * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
     * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
     */
    async getWorkspaceAgenticFsMountRamAuthorizeUrl(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getWorkspaceAgenticFsMountRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the activation status and configuration of a specified component in a workspace. The collaboration value corresponds to the Collaboration component displayed in the console.
     *
     * @remarks
     * Queries the status and configuration of the workspace collaboration component to check whether the component is activated and whether the configuration takes effect.
     * Use `pluginName=collaboration` to specify the collaboration component. To activate the component, call [InstallWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/InstallWorkspacePlugin).
     *
     * @param request - GetWorkspacePluginRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns GetWorkspacePluginResponse
     */
    async getWorkspacePluginWithOptions(workspaceId, pluginName, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "GetWorkspacePlugin",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/plugins/${$dara.URL.percentEncode(pluginName)}`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.GetWorkspacePluginResponse({}));
    }
    /**
     * Queries the activation status and configuration of a specified component in a workspace. The collaboration value corresponds to the Collaboration component displayed in the console.
     *
     * @remarks
     * Queries the status and configuration of the workspace collaboration component to check whether the component is activated and whether the configuration takes effect.
     * Use `pluginName=collaboration` to specify the collaboration component. To activate the component, call [InstallWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/InstallWorkspacePlugin).
     *
     * @param request - GetWorkspacePluginRequest
     * @returns GetWorkspacePluginResponse
     */
    async getWorkspacePlugin(workspaceId, pluginName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.getWorkspacePluginWithOptions(workspaceId, pluginName, request, headers, runtime);
    }
    /**
     * Installs an MCP marketplace template.
     *
     * @remarks
     * Creates an MCP service by using a marketplace template to reuse the tool capabilities and configurations provided by the template.
     * First, call [GetMcpMarketItem](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpMarketItem) to view the template versions and required parameters, and then submit the configuration based on the selected version. After the service is created, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the service status.
     *
     * @param tmpReq - InstallMcpMarketItemRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallMcpMarketItemResponse
     */
    async installMcpMarketItemWithOptions(workspaceId, marketItemId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.InstallMcpMarketItemShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.templateVersion)) {
            query["templateVersion"] = request.templateVersion;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "InstallMcpMarketItem",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-market/items/${$dara.URL.percentEncode(marketItemId)}/install`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.InstallMcpMarketItemResponse({}));
    }
    /**
     * Installs an MCP marketplace template.
     *
     * @remarks
     * Creates an MCP service by using a marketplace template to reuse the tool capabilities and configurations provided by the template.
     * First, call [GetMcpMarketItem](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcpMarketItem) to view the template versions and required parameters, and then submit the configuration based on the selected version. After the service is created, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the service status.
     *
     * @param request - InstallMcpMarketItemRequest
     * @returns InstallMcpMarketItemResponse
     */
    async installMcpMarketItem(workspaceId, marketItemId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.installMcpMarketItemWithOptions(workspaceId, marketItemId, request, headers, runtime);
    }
    /**
     * Enables a component for a workspace. This operation corresponds to enabling the collaboration component in the console. After the component is enabled, you can query the component status and current configurations.
     *
     * @remarks
     * Enables the collaboration component for a workspace and configures initial settings such as the network.
     * Set pluginName=collaboration to specify the collaboration component. The enabling process is executed asynchronously. After submission, call [GetWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspacePlugin) to check the component status and processing result.
     *
     * @param tmpReq - InstallWorkspacePluginRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns InstallWorkspacePluginResponse
     */
    async installWorkspacePluginWithOptions(workspaceId, pluginName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.InstallWorkspacePluginShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "InstallWorkspacePlugin",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/plugins/${$dara.URL.percentEncode(pluginName)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.InstallWorkspacePluginResponse({}));
    }
    /**
     * Enables a component for a workspace. This operation corresponds to enabling the collaboration component in the console. After the component is enabled, you can query the component status and current configurations.
     *
     * @remarks
     * Enables the collaboration component for a workspace and configures initial settings such as the network.
     * Set pluginName=collaboration to specify the collaboration component. The enabling process is executed asynchronously. After submission, call [GetWorkspacePlugin](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspacePlugin) to check the component status and processing result.
     *
     * @param request - InstallWorkspacePluginRequest
     * @returns InstallWorkspacePluginResponse
     */
    async installWorkspacePlugin(workspaceId, pluginName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.installWorkspacePluginWithOptions(workspaceId, pluginName, request, headers, runtime);
    }
    /**
     * Queries the identity, name, and architecture of language runtime environments currently available for code package deployment by page.
     *
     * @remarks
     * Queries the available runtime environments for code package deployment of custom code or image agents, which is used to populate artifact.code.languageRuntime.
     * ### Select a runtime environment
     * Copy the languageRuntime value from the response exactly as is into the artifact.code.languageRuntime parameter of [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The catalog is dynamically provided by the current platform version, and internal base image addresses are not returned.
     * ### Pagination rules
     * If maxResults is omitted or set to 0, the default value is 10. If the value is greater than 100, it is processed as 100. The value cannot be negative. Omit nextToken for the first request. For subsequent requests, use the token returned in the previous response and keep the workspace unchanged. An empty token indicates that the query is complete. If the token becomes invalid due to changes in the runtime environment catalog, restart the query from the first page.
     * Regular updates, restarts, and scale-outs of existing agents continue to use their saved runtime images. When you create an agent or switch the language runtime environment, the catalog currently returned by this operation prevails.
     *
     * @param request - ListAgentCodeRuntimesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentCodeRuntimesResponse
     */
    async listAgentCodeRuntimesWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAgentCodeRuntimes",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-code-runtimes`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAgentCodeRuntimesResponse({}));
    }
    /**
     * Queries the identity, name, and architecture of language runtime environments currently available for code package deployment by page.
     *
     * @remarks
     * Queries the available runtime environments for code package deployment of custom code or image agents, which is used to populate artifact.code.languageRuntime.
     * ### Select a runtime environment
     * Copy the languageRuntime value from the response exactly as is into the artifact.code.languageRuntime parameter of [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The catalog is dynamically provided by the current platform version, and internal base image addresses are not returned.
     * ### Pagination rules
     * If maxResults is omitted or set to 0, the default value is 10. If the value is greater than 100, it is processed as 100. The value cannot be negative. Omit nextToken for the first request. For subsequent requests, use the token returned in the previous response and keep the workspace unchanged. An empty token indicates that the query is complete. If the token becomes invalid due to changes in the runtime environment catalog, restart the query from the first page.
     * Regular updates, restarts, and scale-outs of existing agents continue to use their saved runtime images. When you create an agent or switch the language runtime environment, the catalog currently returned by this operation prevails.
     *
     * @param request - ListAgentCodeRuntimesRequest
     * @returns ListAgentCodeRuntimesResponse
     */
    async listAgentCodeRuntimes(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listAgentCodeRuntimesWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the IM channels for a specified agent.
     *
     * @remarks
     * Queries the IM channels for a specified agent.
     *
     * @param request - ListAgentIMChannelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentIMChannelsResponse
     */
    async listAgentIMChannelsWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.channelType)) {
            query["channelType"] = request.channelType;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.status)) {
            query["status"] = request.status;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAgentIMChannels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAgentIMChannelsResponse({}));
    }
    /**
     * Queries the IM channels for a specified agent.
     *
     * @remarks
     * Queries the IM channels for a specified agent.
     *
     * @param request - ListAgentIMChannelsRequest
     * @returns ListAgentIMChannelsResponse
     */
    async listAgentIMChannels(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listAgentIMChannelsWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Performs a paging query of AgentSpecs in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * Performs a paging query of Agent templates in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @param request - ListAgentSpecsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentSpecsResponse
     */
    async listAgentSpecsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentSpecName)) {
            query["agentSpecName"] = request.agentSpecName;
        }
        if (!$dara.isNull(request.bizTag)) {
            query["bizTag"] = request.bizTag;
        }
        if (!$dara.isNull(request.orderBy)) {
            query["orderBy"] = request.orderBy;
        }
        if (!$dara.isNull(request.owner)) {
            query["owner"] = request.owner;
        }
        if (!$dara.isNull(request.pageNo)) {
            query["pageNo"] = request.pageNo;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["pageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.scope)) {
            query["scope"] = request.scope;
        }
        if (!$dara.isNull(request.search)) {
            query["search"] = request.search;
        }
        if (!$dara.isNull(request.withCapabilities)) {
            query["withCapabilities"] = request.withCapabilities;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAgentSpecs",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAgentSpecsResponse({}));
    }
    /**
     * Performs a paging query of AgentSpecs in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @remarks
     * Performs a paging query of Agent templates in a specified workspace, and supports name search, sorting, and filtering by owner, visibility scope, and business labels.
     *
     * @param request - ListAgentSpecsRequest
     * @returns ListAgentSpecsResponse
     */
    async listAgentSpecs(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listAgentSpecsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the teams to which specified agents belong. Specify the agent IDs to query by using agentIds. The response includes the membership information of each agent in its teams, such as the team ID, team name, and the role of the agent in the team.
     *
     * @remarks
     * Queries the teams to which specified agents belong.
     *
     * @param tmpReq - ListAgentTeamsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentTeamsResponse
     */
    async listAgentTeamsWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.ListAgentTeamsShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAgentTeams",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-team-memberships`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAgentTeamsResponse({}));
    }
    /**
     * Queries the teams to which specified agents belong. Specify the agent IDs to query by using agentIds. The response includes the membership information of each agent in its teams, such as the team ID, team name, and the role of the agent in the team.
     *
     * @remarks
     * Queries the teams to which specified agents belong.
     *
     * @param request - ListAgentTeamsRequest
     * @returns ListAgentTeamsResponse
     */
    async listAgentTeams(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listAgentTeamsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * 查询智能体版本列表
     *
     * @remarks
     * 分页查询指定托管智能体或自定义智能体已保存的固定版本，按创建时间倒序返回，不包含系统维护的 latest 版本。列表项不返回 configuration，需查看配置时调用 GetAgentVersion。
     *
     * @param request - ListAgentVersionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListAgentVersionsResponse
     */
    async listAgentVersionsWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListAgentVersions",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/versions`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListAgentVersionsResponse({}));
    }
    /**
     * 查询智能体版本列表
     *
     * @remarks
     * 分页查询指定托管智能体或自定义智能体已保存的固定版本，按创建时间倒序返回，不包含系统维护的 latest 版本。列表项不返回 configuration，需查看配置时调用 GetAgentVersion。
     *
     * @param request - ListAgentVersionsRequest
     * @returns ListAgentVersionsResponse
     */
    async listAgentVersions(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listAgentVersionsWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries the official and enterprise models available for the enabled QoderCLI connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates them by model ID.
     *
     * @remarks
     * Queries the official and enterprise models available for the enabled QoderCLI connector.
     * Queries the list of models available for a specified connector. Pagination is supported.
     *
     * @param request - ListConnectorModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListConnectorModelsResponse
     */
    async listConnectorModelsWithOptions(workspaceId, connectorName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.connectorKeyId)) {
            query["connectorKeyId"] = request.connectorKeyId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListConnectorModels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors/${$dara.URL.percentEncode(connectorName)}/models`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListConnectorModelsResponse({}));
    }
    /**
     * Queries the official and enterprise models available for the enabled QoderCLI connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates them by model ID.
     *
     * @remarks
     * Queries the official and enterprise models available for the enabled QoderCLI connector.
     * Queries the list of models available for a specified connector. Pagination is supported.
     *
     * @param request - ListConnectorModelsRequest
     * @returns ListConnectorModelsResponse
     */
    async listConnectorModels(workspaceId, connectorName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listConnectorModelsWithOptions(workspaceId, connectorName, request, headers, runtime);
    }
    /**
     * Queries the list of connectors supported by a specified workspace, along with their status, the number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the connectors supported by the workspace to view their activation status, configurations, and the number of bound agents.
     *
     * @param request - ListConnectorsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListConnectorsResponse
     */
    async listConnectorsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListConnectors",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListConnectorsResponse({}));
    }
    /**
     * Queries the list of connectors supported by a specified workspace, along with their status, the number of bound agents, and configurations. The current version returns the QoderCLI connector.
     *
     * @remarks
     * Queries the connectors supported by the workspace to view their activation status, configurations, and the number of bound agents.
     *
     * @param request - ListConnectorsRequest
     * @returns ListConnectorsResponse
     */
    async listConnectors(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listConnectorsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paged query for credentials in a specified workspace. Filters credentials by type by using credentialType, performs fuzzy filtering by credential name by using nameLike, specifies the maximum number of records per page for paging by using maxResults, and retrieves the next page by using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Performs a paged query for credentials in a specified workspace.
     * ### Query and paging
     * Filters credentials by `apiKey` or `mcpHeader` type by using `credentialType`, and performs fuzzy filtering by name by using `nameLike`.
     * Uses `maxResults` to specify the number of entries per page for paging, and uses `nextToken` in the response to retrieve the next page. The returned credential content is desensitized. To query the details of a single credential, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential).
     *
     * @param request - ListCredentialsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCredentialsResponse
     */
    async listCredentialsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.credentialType)) {
            query["credentialType"] = request.credentialType;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.name)) {
            query["name"] = request.name;
        }
        if (!$dara.isNull(request.nameLike)) {
            query["nameLike"] = request.nameLike;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListCredentials",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/credentials`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListCredentialsResponse({}));
    }
    /**
     * Performs a paged query for credentials in a specified workspace. Filters credentials by type by using credentialType, performs fuzzy filtering by credential name by using nameLike, specifies the maximum number of records per page for paging by using maxResults, and retrieves the next page by using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Performs a paged query for credentials in a specified workspace.
     * ### Query and paging
     * Filters credentials by `apiKey` or `mcpHeader` type by using `credentialType`, and performs fuzzy filtering by name by using `nameLike`.
     * Uses `maxResults` to specify the number of entries per page for paging, and uses `nextToken` in the response to retrieve the next page. The returned credential content is desensitized. To query the details of a single credential, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential).
     *
     * @param request - ListCredentialsRequest
     * @returns ListCredentialsResponse
     */
    async listCredentials(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listCredentialsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paged query to retrieve the identity, deployment method, and status summary of custom code or image agents in a workspace, with paging support.
     *
     * @remarks
     * Performs a paged query to retrieve the identity, deployment method, and status summary of custom code or image agents in a workspace, with paging support.
     * ### Paged query
     * If `maxResults` is omitted or set to `0`, the default value is 20 and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates the end of paging.
     * ### Response content
     * This operation returns the summary for the current page. It does not return the complete deployment configurations or errors that occur when you execute the latest configurations. Use `items[].agentId` to invoke [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query code packages, image sources, results after you execute the version, and running instance statuses.
     *
     * @param request - ListCustomAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListCustomAgentsResponse
     */
    async listCustomAgentsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListCustomAgents",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListCustomAgentsResponse({}));
    }
    /**
     * Performs a paged query to retrieve the identity, deployment method, and status summary of custom code or image agents in a workspace, with paging support.
     *
     * @remarks
     * Performs a paged query to retrieve the identity, deployment method, and status summary of custom code or image agents in a workspace, with paging support.
     * ### Paged query
     * If `maxResults` is omitted or set to `0`, the default value is 20 and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates the end of paging.
     * ### Response content
     * This operation returns the summary for the current page. It does not return the complete deployment configurations or errors that occur when you execute the latest configurations. Use `items[].agentId` to invoke [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query code packages, image sources, results after you execute the version, and running instance statuses.
     *
     * @param request - ListCustomAgentsRequest
     * @returns ListCustomAgentsResponse
     */
    async listCustomAgents(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listCustomAgentsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paging query to retrieve the identity, configuration versions, and status summary of managed agents in a workspace.
     *
     * @remarks
     * Performs a paging query to retrieve the identity, configuration versions, and status summary of managed agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that there are no more pages.
     * ### Response content
     * This operation returns the summary of managed agents. To query the complete models, instructions, tools, skills, and accessed state, call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     *
     * @param request - ListExternalAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListExternalAgentsResponse
     */
    async listExternalAgentsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListExternalAgents",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListExternalAgentsResponse({}));
    }
    /**
     * Performs a paging query to retrieve the identity, configuration versions, and status summary of managed agents in a workspace.
     *
     * @remarks
     * Performs a paging query to retrieve the identity, configuration versions, and status summary of managed agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that there are no more pages.
     * ### Response content
     * This operation returns the summary of managed agents. To query the complete models, instructions, tools, skills, and accessed state, call [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent).
     *
     * @param request - ListExternalAgentsRequest
     * @returns ListExternalAgentsResponse
     */
    async listExternalAgents(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listExternalAgentsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the departments of an identity provider by paging.
     *
     * @remarks
     * Queries the list of DingTalk or Lark departments by parent department and paging. This is used when selecting or adjusting the user synchronization scope.
     * ### Before you begin
     * A DingTalk or Lark identity provider is bound to the workspace, and the user pool, application credentials, and authorization to read contacts are prepared.
     * ### Query methods
     * - Omit `parentDepartmentId` to query the root level. Pass a department ID to query its direct child departments.
     * - `hasChildren` indicates whether a department can be expanded. After expansion, use the department ID to query the next level.
     * - `nextToken` is used to continue reading the next page under the same parent department. An empty string indicates that there are no more pages.
     * ### Total count and pagination
     * This operation does not calculate the total number of departments. Currently, `totalCount` returns JSON `null`, which does not mean the number of departments is 0. Whether to continue pagination depends on `nextToken`.
     * ### Request examples
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/departments?maxResults=50
     * ```
     * ### Response examples
     * The following shows the response structure for an empty directory page. `totalCount` retains the `null` value actually returned by the operation.
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "totalCount": null,
     *   "items": []
     * }
     * ```
     * ### What to do next
     * After selecting the departments to synchronize, save the synchronization scope by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to initiate synchronization as needed.
     *
     * @param request - ListIdentityProviderDepartmentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProviderDepartmentsResponse
     */
    async listIdentityProviderDepartmentsWithOptions(workspaceId, identityProviderType, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.parentDepartmentId)) {
            query["parentDepartmentId"] = request.parentDepartmentId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListIdentityProviderDepartments",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}/departments`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListIdentityProviderDepartmentsResponse({}));
    }
    /**
     * Queries the departments of an identity provider by paging.
     *
     * @remarks
     * Queries the list of DingTalk or Lark departments by parent department and paging. This is used when selecting or adjusting the user synchronization scope.
     * ### Before you begin
     * A DingTalk or Lark identity provider is bound to the workspace, and the user pool, application credentials, and authorization to read contacts are prepared.
     * ### Query methods
     * - Omit `parentDepartmentId` to query the root level. Pass a department ID to query its direct child departments.
     * - `hasChildren` indicates whether a department can be expanded. After expansion, use the department ID to query the next level.
     * - `nextToken` is used to continue reading the next page under the same parent department. An empty string indicates that there are no more pages.
     * ### Total count and pagination
     * This operation does not calculate the total number of departments. Currently, `totalCount` returns JSON `null`, which does not mean the number of departments is 0. Whether to continue pagination depends on `nextToken`.
     * ### Request examples
     * ```http
     * GET /workspaces/{workspaceId}/identity-providers/{identityProviderType}/departments?maxResults=50
     * ```
     * ### Response examples
     * The following shows the response structure for an empty directory page. `totalCount` retains the `null` value actually returned by the operation.
     * ```json
     * {
     *   "requestId": "01234567-89AB-CDEF-0123-456789ABCDEF",
     *   "message": "success",
     *   "httpStatusCode": 200,
     *   "code": "SUCCESS",
     *   "success": true,
     *   "maxResults": 50,
     *   "nextToken": "",
     *   "totalCount": null,
     *   "items": []
     * }
     * ```
     * ### What to do next
     * After selecting the departments to synchronize, save the synchronization scope by calling [UpdateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProvider), and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to initiate synchronization as needed.
     *
     * @param request - ListIdentityProviderDepartmentsRequest
     * @returns ListIdentityProviderDepartmentsResponse
     */
    async listIdentityProviderDepartments(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listIdentityProviderDepartmentsWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Queries the complete summary list of up to two SCIM credentials in a shared user pool, without returning plaintext tokens or supporting pagination.
     *
     * @remarks
     * Queries the list of SCIM access credentials to check which tokens are still valid, when they expire, and to select credentials for revocation.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to the user pool. This operation returns credential summaries, including the credential ID, status, creation time, and expiration time. The plaintext token is returned only upon creation.
     * ### How to use the query results
     * - Credentials with the Enabled status that have not expired can continue to be used.
     * - To obtain a new token, call [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential).
     * - To revoke a token, pass the target credentialId to [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential).
     * A single user pool can retain up to two SCIM credentials. The list may include expired or disabled credentials. Clean up unused credentials before creating a new token.
     * ### Return method
     * This operation returns the complete array of credentials at once without using pagination parameters. If no credentials exist, the following is returned:
     * ```json
     * {"data":[]}
     * ```
     *
     * @param request - ListIdentityProviderSCIMCredentialsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProviderSCIMCredentialsResponse
     */
    async listIdentityProviderSCIMCredentialsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListIdentityProviderSCIMCredentials",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning/credentials`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListIdentityProviderSCIMCredentialsResponse({}));
    }
    /**
     * Queries the complete summary list of up to two SCIM credentials in a shared user pool, without returning plaintext tokens or supporting pagination.
     *
     * @remarks
     * Queries the list of SCIM access credentials to check which tokens are still valid, when they expire, and to select credentials for revocation.
     * SCIM tokens are used to authorize enterprise identity systems to send user provisioning requests to the user pool. This operation returns credential summaries, including the credential ID, status, creation time, and expiration time. The plaintext token is returned only upon creation.
     * ### How to use the query results
     * - Credentials with the Enabled status that have not expired can continue to be used.
     * - To obtain a new token, call [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential).
     * - To revoke a token, pass the target credentialId to [DeleteIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/DeleteIdentityProviderSCIMCredential).
     * A single user pool can retain up to two SCIM credentials. The list may include expired or disabled credentials. Clean up unused credentials before creating a new token.
     * ### Return method
     * This operation returns the complete array of credentials at once without using pagination parameters. If no credentials exist, the following is returned:
     * ```json
     * {"data":[]}
     * ```
     *
     * @param request - ListIdentityProviderSCIMCredentialsRequest
     * @returns ListIdentityProviderSCIMCredentialsResponse
     */
    async listIdentityProviderSCIMCredentials(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listIdentityProviderSCIMCredentialsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the summary of existing identity provider bindings for a workspace, including CustomSSO. Returns local binding information without querying the actual upstream SAML or SCIM configurations.
     *
     * @remarks
     * Queries the enterprise identity providers currently connected to a workspace. This operation is used to display the identity provider list or to check whether a binding already exists before configuring a new connection.
     * A workspace can be bound to at most one external identity provider: DingTalk, Lark, or a custom identity provider (`CustomSSO`). If no identity provider is bound, the returned `items` is an empty array.
     * ### What you can view in the list
     * The list returns the identity provider type, binding status, and logon and user synchronization switches. When the status of `CustomSSO` is `WAITING_CONFIGURATION`, it indicates that the user pool is ready and you can proceed to complete the integration configuration.
     * This operation returns a binding summary. To view specific integration configurations, use the corresponding operations:
     * - [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider): Views the identity provider details and SAML logon configuration.
     * - [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider): Retrieves the SAML integration information required to configure AgentCore in the enterprise identity system.
     * - [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM): Views the SCIM endpoint configuration and user synchronization status.
     * ### Pagination
     * Currently, at most one binding is returned. `nextToken` should be omitted or passed as an empty string. The default value of `maxResults` is 10. Valid values: 1 to 100.
     *
     * @param request - ListIdentityProvidersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListIdentityProvidersResponse
     */
    async listIdentityProvidersWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListIdentityProviders",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListIdentityProvidersResponse({}));
    }
    /**
     * Queries the summary of existing identity provider bindings for a workspace, including CustomSSO. Returns local binding information without querying the actual upstream SAML or SCIM configurations.
     *
     * @remarks
     * Queries the enterprise identity providers currently connected to a workspace. This operation is used to display the identity provider list or to check whether a binding already exists before configuring a new connection.
     * A workspace can be bound to at most one external identity provider: DingTalk, Lark, or a custom identity provider (`CustomSSO`). If no identity provider is bound, the returned `items` is an empty array.
     * ### What you can view in the list
     * The list returns the identity provider type, binding status, and logon and user synchronization switches. When the status of `CustomSSO` is `WAITING_CONFIGURATION`, it indicates that the user pool is ready and you can proceed to complete the integration configuration.
     * This operation returns a binding summary. To view specific integration configurations, use the corresponding operations:
     * - [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider): Views the identity provider details and SAML logon configuration.
     * - [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider): Retrieves the SAML integration information required to configure AgentCore in the enterprise identity system.
     * - [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM): Views the SCIM endpoint configuration and user synchronization status.
     * ### Pagination
     * Currently, at most one binding is returned. `nextToken` should be omitted or passed as an empty string. The default value of `maxResults` is 10. Valid values: 1 to 100.
     *
     * @param request - ListIdentityProvidersRequest
     * @returns ListIdentityProvidersResponse
     */
    async listIdentityProviders(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listIdentityProvidersWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paged query for image caches in a workspace. Supports paging and filtering by image source and cache status.
     *
     * @remarks
     * Performs a paged query for image caches in a workspace. Supports paging and filtering by image source and cache status.
     * ### Filter conditions
     * Provide regionId and workspaceId in the query parameters. You can filter by ACR instance, registry, namespace, repository, tag, digest, and status. Use imageRefContains to search for image address fragments.
     * ### Pagination rules
     * The default value of maxResults is 20, and the valid values are 1 to 100. Omit nextToken for the first request. For subsequent requests, use the token returned in the response as is, and keep the workspace, region, page size, and all filter conditions unchanged. An empty token indicates that there are no more pages.
     * ### Response content
     * Each item includes imageId, source, digest, status, size, reference count, and deletion conditions. PENDING only indicates that the cache is being prepared. For the cause of failure, see error. You can query a single cache by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     *
     * @param request - ListImageCachesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListImageCachesResponse
     */
    async listImageCachesWithOptions(request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.acrInstanceId)) {
            query["acrInstanceId"] = request.acrInstanceId;
        }
        if (!$dara.isNull(request.digest)) {
            query["digest"] = request.digest;
        }
        if (!$dara.isNull(request.imageRefContains)) {
            query["imageRefContains"] = request.imageRefContains;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.namespace)) {
            query["namespace"] = request.namespace;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["regionId"] = request.regionId;
        }
        if (!$dara.isNull(request.registry)) {
            query["registry"] = request.registry;
        }
        if (!$dara.isNull(request.repository)) {
            query["repository"] = request.repository;
        }
        if (!$dara.isNull(request.status)) {
            query["status"] = request.status;
        }
        if (!$dara.isNull(request.tag)) {
            query["tag"] = request.tag;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["workspaceId"] = request.workspaceId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListImageCaches",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/image-caches`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListImageCachesResponse({}));
    }
    /**
     * Performs a paged query for image caches in a workspace. Supports paging and filtering by image source and cache status.
     *
     * @remarks
     * Performs a paged query for image caches in a workspace. Supports paging and filtering by image source and cache status.
     * ### Filter conditions
     * Provide regionId and workspaceId in the query parameters. You can filter by ACR instance, registry, namespace, repository, tag, digest, and status. Use imageRefContains to search for image address fragments.
     * ### Pagination rules
     * The default value of maxResults is 20, and the valid values are 1 to 100. Omit nextToken for the first request. For subsequent requests, use the token returned in the response as is, and keep the workspace, region, page size, and all filter conditions unchanged. An empty token indicates that there are no more pages.
     * ### Response content
     * Each item includes imageId, source, digest, status, size, reference count, and deletion conditions. PENDING only indicates that the cache is being prepared. For the cause of failure, see error. You can query a single cache by calling [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache).
     *
     * @param request - ListImageCachesRequest
     * @returns ListImageCachesResponse
     */
    async listImageCaches(request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listImageCachesWithOptions(request, headers, runtime);
    }
    /**
     * Performs a paging query for the identity, harnesses, configuration versions, and status summary of managed Harness agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identity, harnesses, configuration versions, and status summary of managed Harness agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that no more pages are available.
     * ### Response content
     * The list returns summary information, where `harness.type` indicates the runtime framework. You can query the complete configuration, skill targets and effective versions, and instance status statistics by calling [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent).
     *
     * @param request - ListManagedAgentsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListManagedAgentsResponse
     */
    async listManagedAgentsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListManagedAgents",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListManagedAgentsResponse({}));
    }
    /**
     * Performs a paging query for the identity, harnesses, configuration versions, and status summary of managed Harness agents in a workspace.
     *
     * @remarks
     * Performs a paging query for the identity, harnesses, configuration versions, and status summary of managed Harness agents in a workspace.
     * ### Paging query
     * If `maxResults` is omitted or set to `0`, the default value is 20, and the maximum value is 100. Omit `nextToken` in the first request. For subsequent requests, pass the token returned in the previous response as is, and keep the same workspace and filter conditions. An empty token indicates that no more pages are available.
     * ### Response content
     * The list returns summary information, where `harness.type` indicates the runtime framework. You can query the complete configuration, skill targets and effective versions, and instance status statistics by calling [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent).
     *
     * @param request - ListManagedAgentsRequest
     * @returns ListManagedAgentsResponse
     */
    async listManagedAgents(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listManagedAgentsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries MCP marketplace templates.
     *
     * @remarks
     * Queries official MCP marketplace templates available for installation to help select required tool services. Supports filtering by keyword, usage tag, and MCP type.
     *
     * @param request - ListMcpMarketItemsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpMarketItemsResponse
     */
    async listMcpMarketItemsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.keyword)) {
            query["keyword"] = request.keyword;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.mcpType)) {
            query["mcpType"] = request.mcpType;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.officialTag)) {
            query["officialTag"] = request.officialTag;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMcpMarketItems",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-market/items`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMcpMarketItemsResponse({}));
    }
    /**
     * Queries MCP marketplace templates.
     *
     * @remarks
     * Queries official MCP marketplace templates available for installation to help select required tool services. Supports filtering by keyword, usage tag, and MCP type.
     *
     * @param request - ListMcpMarketItemsRequest
     * @returns ListMcpMarketItemsResponse
     */
    async listMcpMarketItems(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMcpMarketItemsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @remarks
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @param request - ListMcpToolsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpToolsResponse
     */
    async listMcpToolsWithOptions(workspaceId, mcpServerId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMcpTools",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}/tools`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMcpToolsResponse({}));
    }
    /**
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @remarks
     * Queries the list of tools exposed by a specified MCP service and their input and output schemas.
     *
     * @param request - ListMcpToolsRequest
     * @returns ListMcpToolsResponse
     */
    async listMcpTools(workspaceId, mcpServerId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMcpToolsWithOptions(workspaceId, mcpServerId, request, headers, runtime);
    }
    /**
     * Performs a paging query for MCP services and their configurations and status in a specified workspace.
     *
     * @remarks
     * Performs a paging query for MCP services and their configurations and status in a specified workspace.
     *
     * @param request - ListMcpsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMcpsResponse
     */
    async listMcpsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.customTag)) {
            query["customTag"] = request.customTag;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.name)) {
            query["name"] = request.name;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.officialTag)) {
            query["officialTag"] = request.officialTag;
        }
        if (!$dara.isNull(request.searchType)) {
            query["searchType"] = request.searchType;
        }
        if (!$dara.isNull(request.usageActive)) {
            query["usageActive"] = request.usageActive;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMcps",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMcpsResponse({}));
    }
    /**
     * Performs a paging query for MCP services and their configurations and status in a specified workspace.
     *
     * @remarks
     * Performs a paging query for MCP services and their configurations and status in a specified workspace.
     *
     * @param request - ListMcpsRequest
     * @returns ListMcpsResponse
     */
    async listMcps(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMcpsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries long-term memory with paging and supports independent filtering by UserId, AgentId, and SessionId.
     *
     * @remarks
     * Queries long-term memory with paging and supports filtering by `UserId`, `AgentId`, and `SessionId`.
     *
     * @param request - ListMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemoriesResponse
     */
    async listMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentId)) {
            query["agentId"] = request.agentId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["sessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.userId)) {
            query["userId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMemories",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMemoriesResponse({}));
    }
    /**
     * Queries long-term memory with paging and supports independent filtering by UserId, AgentId, and SessionId.
     *
     * @remarks
     * Queries long-term memory with paging and supports filtering by `UserId`, `AgentId`, and `SessionId`.
     *
     * @param request - ListMemoriesRequest
     * @returns ListMemoriesResponse
     */
    async listMemories(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Queries raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
     *
     * @remarks
     * Queries raw messages of a specific session in the memory store with paging to view the session content used for generating long-term memory.
     * `SessionId` is required, and at least one of `UserId` and `AgentId` must be provided to identify the target session.
     *
     * @param request - ListMemorySessionMessagesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemorySessionMessagesResponse
     */
    async listMemorySessionMessagesWithOptions(workspaceId, memoryStoreName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentId)) {
            query["agentId"] = request.agentId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["sessionId"] = request.sessionId;
        }
        if (!$dara.isNull(request.userId)) {
            query["userId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMemorySessionMessages",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/messages`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMemorySessionMessagesResponse({}));
    }
    /**
     * Queries raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
     *
     * @remarks
     * Queries raw messages of a specific session in the memory store with paging to view the session content used for generating long-term memory.
     * `SessionId` is required, and at least one of `UserId` and `AgentId` must be provided to identify the target session.
     *
     * @param request - ListMemorySessionMessagesRequest
     * @returns ListMemorySessionMessagesResponse
     */
    async listMemorySessionMessages(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMemorySessionMessagesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Performs a paged query for sessions in a MemoryStore, supporting paging and filtering by user ID and agent ID independently.
     *
     * @remarks
     * Performs a paged query for source sessions in a long-term memory store (MemoryStore), supporting paging and filtering by user ID and agent ID respectively.
     *
     * @param request - ListMemorySessionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemorySessionsResponse
     */
    async listMemorySessionsWithOptions(workspaceId, memoryStoreName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentId)) {
            query["agentId"] = request.agentId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.userId)) {
            query["userId"] = request.userId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMemorySessions",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/sessions`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMemorySessionsResponse({}));
    }
    /**
     * Performs a paged query for sessions in a MemoryStore, supporting paging and filtering by user ID and agent ID independently.
     *
     * @remarks
     * Performs a paged query for source sessions in a long-term memory store (MemoryStore), supporting paging and filtering by user ID and agent ID respectively.
     *
     * @param request - ListMemorySessionsRequest
     * @returns ListMemorySessionsResponse
     */
    async listMemorySessions(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMemorySessionsWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Performs a paged query of MemoryStores in a specified workspace by using paging.
     *
     * @remarks
     * Performs a paged query of the long-term memory stores (MemoryStores) in a workspace by using paging for selection or management.
     *
     * @param request - ListMemoryStoresRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListMemoryStoresResponse
     */
    async listMemoryStoresWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListMemoryStores",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListMemoryStoresResponse({}));
    }
    /**
     * Performs a paged query of MemoryStores in a specified workspace by using paging.
     *
     * @remarks
     * Performs a paged query of the long-term memory stores (MemoryStores) in a workspace by using paging for selection or management.
     *
     * @param request - ListMemoryStoresRequest
     * @returns ListMemoryStoresResponse
     */
    async listMemoryStores(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listMemoryStoresWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries model connections in a specified workspace by using paging. Supports filtering by name, provider type, and invocation protocol.
     *
     * @remarks
     * Queries model connections in a workspace by using paging to view configured model services.
     * - Use `Name` to filter by name, and `SearchType` to specify exact match or fuzzy match.
     * - You can filter by model provider type and invocation protocol.
     *
     * @param request - ListModelConnectionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListModelConnectionsResponse
     */
    async listModelConnectionsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.includeModels)) {
            query["includeModels"] = request.includeModels;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.name)) {
            query["name"] = request.name;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.protocol)) {
            query["protocol"] = request.protocol;
        }
        if (!$dara.isNull(request.providerType)) {
            query["providerType"] = request.providerType;
        }
        if (!$dara.isNull(request.searchType)) {
            query["searchType"] = request.searchType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListModelConnections",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/model-connections`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListModelConnectionsResponse({}));
    }
    /**
     * Queries model connections in a specified workspace by using paging. Supports filtering by name, provider type, and invocation protocol.
     *
     * @remarks
     * Queries model connections in a workspace by using paging to view configured model services.
     * - Use `Name` to filter by name, and `SearchType` to specify exact match or fuzzy match.
     * - You can filter by model provider type and invocation protocol.
     *
     * @param request - ListModelConnectionsRequest
     * @returns ListModelConnectionsResponse
     */
    async listModelConnections(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listModelConnectionsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @remarks
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @param request - ListModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListModelsResponse
     */
    async listModelsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.connectionId)) {
            query["connectionId"] = request.connectionId;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.modelName)) {
            query["modelName"] = request.modelName;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListModels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
    }
    /**
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @remarks
     * Performs a paging query for models in a specified workspace and supports filtering by model connection and model name.
     *
     * @param request - ListModelsRequest
     * @returns ListModelsResponse
     */
    async listModels(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listModelsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries permission rules.
     *
     * @remarks
     * Performs a paged query of access rules by resource, supporting paging to check existing rules and their sources.
     *
     * @param request - ListPermissionRulesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPermissionRulesResponse
     */
    async listPermissionRulesWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.principalId)) {
            query["principalId"] = request.principalId;
        }
        if (!$dara.isNull(request.principalName)) {
            query["principalName"] = request.principalName;
        }
        if (!$dara.isNull(request.principalType)) {
            query["principalType"] = request.principalType;
        }
        if (!$dara.isNull(request.resourceId)) {
            query["resourceId"] = request.resourceId;
        }
        if (!$dara.isNull(request.resourceType)) {
            query["resourceType"] = request.resourceType;
        }
        if (!$dara.isNull(request.source)) {
            query["source"] = request.source;
        }
        if (!$dara.isNull(request.target)) {
            query["target"] = request.target;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPermissionRules",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/permission-rules`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPermissionRulesResponse({}));
    }
    /**
     * Queries permission rules.
     *
     * @remarks
     * Performs a paged query of access rules by resource, supporting paging to check existing rules and their sources.
     *
     * @param request - ListPermissionRulesRequest
     * @returns ListPermissionRulesResponse
     */
    async listPermissionRules(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listPermissionRulesWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
     *
     * @remarks
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
     *
     * @param request - ListPredefinedModelProvidersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedModelProvidersResponse
     */
    async listPredefinedModelProvidersWithOptions(request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPredefinedModelProviders",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/model-catalog/providers`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPredefinedModelProvidersResponse({}));
    }
    /**
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
     *
     * @remarks
     * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
     *
     * @param request - ListPredefinedModelProvidersRequest
     * @returns ListPredefinedModelProvidersResponse
     */
    async listPredefinedModelProviders(request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listPredefinedModelProvidersWithOptions(request, headers, runtime);
    }
    /**
     * Queries the models and their capabilities for a specified provider in the AgentCore built-in model catalog.
     *
     * @remarks
     * Queries the models and their capabilities for a specified provider in the AgentCore built-in model catalog.
     *
     * @param request - ListPredefinedModelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListPredefinedModelsResponse
     */
    async listPredefinedModelsWithOptions(providerType, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListPredefinedModels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/model-catalog/providers/${$dara.URL.percentEncode(providerType)}/models`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListPredefinedModelsResponse({}));
    }
    /**
     * Queries the models and their capabilities for a specified provider in the AgentCore built-in model catalog.
     *
     * @remarks
     * Queries the models and their capabilities for a specified provider in the AgentCore built-in model catalog.
     *
     * @param request - ListPredefinedModelsRequest
     * @returns ListPredefinedModelsResponse
     */
    async listPredefinedModels(providerType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listPredefinedModelsWithOptions(providerType, request, headers, runtime);
    }
    /**
     * Performs a paged query for the current active sessions and their sources in a specified agent instance, supporting paging.
     *
     * @remarks
     * Queries the active sessions in a specified running instance to view the current mapping between sessions and instances.
     * ### Query scope
     * Locate the instance by using `workspaceId`, `agentId`, and `sandboxId`. You can obtain the `sandboxId` from [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes). This operation queries the current active sessions.
     * ### Pagination
     * The default value of `maxResults` is 20. Valid values: 1 to 100. Omit `nextToken` in the first request. For subsequent requests, use the returned token as is, and keep the workspace, agent, instance, and page size unchanged. An empty token indicates that no more pages are available.
     * ### Session source
     * The source can be `API`, `CONSOLE_DEBUG`, `EXTERNAL_CHANNEL`, or `UNKNOWN`. For external channels, the channel type is additionally returned. If no source information is provided, `UNKNOWN` is returned.
     *
     * @param request - ListSandboxSessionsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSandboxSessionsResponse
     */
    async listSandboxSessionsWithOptions(workspaceId, agentId, sandboxId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.serviceEndpointId)) {
            query["serviceEndpointId"] = request.serviceEndpointId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSandboxSessions",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents/${$dara.URL.percentEncode(agentId)}/sandboxes/${$dara.URL.percentEncode(sandboxId)}/sessions`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSandboxSessionsResponse({}));
    }
    /**
     * Performs a paged query for the current active sessions and their sources in a specified agent instance, supporting paging.
     *
     * @remarks
     * Queries the active sessions in a specified running instance to view the current mapping between sessions and instances.
     * ### Query scope
     * Locate the instance by using `workspaceId`, `agentId`, and `sandboxId`. You can obtain the `sandboxId` from [ListSandboxes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxes). This operation queries the current active sessions.
     * ### Pagination
     * The default value of `maxResults` is 20. Valid values: 1 to 100. Omit `nextToken` in the first request. For subsequent requests, use the returned token as is, and keep the workspace, agent, instance, and page size unchanged. An empty token indicates that no more pages are available.
     * ### Session source
     * The source can be `API`, `CONSOLE_DEBUG`, `EXTERNAL_CHANNEL`, or `UNKNOWN`. For external channels, the channel type is additionally returned. If no source information is provided, `UNKNOWN` is returned.
     *
     * @param request - ListSandboxSessionsRequest
     * @returns ListSandboxSessionsResponse
     */
    async listSandboxSessions(workspaceId, agentId, sandboxId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listSandboxSessionsWithOptions(workspaceId, agentId, sandboxId, request, headers, runtime);
    }
    /**
     * Performs a paging query on the running instances of an agent, and supports filtering by Sandbox ID and current valid session ID fragments.
     *
     * @remarks
     * Queries the running instances (sandboxes) of an agent to view the instance distribution and current running status.
     * ### Filter instances
     * `searchText` matches Sandbox ID fragments, and `sessionId` matches current valid session ID fragments. Both are case-insensitive. If both are submitted at the same time, they are combined for filtering.
     * ### Pagination and status
     * The default value of `maxResults` is 20, and the valid values are 1 to 100. Omit `nextToken` for the first request. For subsequent requests, use the response token as is, and keep `workspaceId`, `agentId`, filter conditions, and `maxResults` unchanged. An empty token indicates that the query is complete.
     * `phase` indicates the instance phase, `activeSessionCount` indicates the number of current active sessions, and `maxConcurrentSessions` indicates the configured concurrency limit for a single instance. You can query the active sessions of an instance by calling [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions).
     *
     * @param request - ListSandboxesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSandboxesResponse
     */
    async listSandboxesWithOptions(workspaceId, agentId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.searchText)) {
            query["searchText"] = request.searchText;
        }
        if (!$dara.isNull(request.serviceEndpointId)) {
            query["serviceEndpointId"] = request.serviceEndpointId;
        }
        if (!$dara.isNull(request.sessionId)) {
            query["sessionId"] = request.sessionId;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSandboxes",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents/${$dara.URL.percentEncode(agentId)}/sandboxes`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSandboxesResponse({}));
    }
    /**
     * Performs a paging query on the running instances of an agent, and supports filtering by Sandbox ID and current valid session ID fragments.
     *
     * @remarks
     * Queries the running instances (sandboxes) of an agent to view the instance distribution and current running status.
     * ### Filter instances
     * `searchText` matches Sandbox ID fragments, and `sessionId` matches current valid session ID fragments. Both are case-insensitive. If both are submitted at the same time, they are combined for filtering.
     * ### Pagination and status
     * The default value of `maxResults` is 20, and the valid values are 1 to 100. Omit `nextToken` for the first request. For subsequent requests, use the response token as is, and keep `workspaceId`, `agentId`, filter conditions, and `maxResults` unchanged. An empty token indicates that the query is complete.
     * `phase` indicates the instance phase, `activeSessionCount` indicates the number of current active sessions, and `maxConcurrentSessions` indicates the configured concurrency limit for a single instance. You can query the active sessions of an instance by calling [ListSandboxSessions](https://api.aliyun.com/document/AgentCore/2026-08-04/ListSandboxSessions).
     *
     * @param request - ListSandboxesRequest
     * @returns ListSandboxesResponse
     */
    async listSandboxes(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listSandboxesWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Queries service endpoints in a specified workspace with paging, and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * Queries service endpoints in a workspace with paging to find the access entries for agents or collaboration components.
     * - Use `targetType`, `agentId`, `agentVersion`, `resourceBindingId`, `collaborationComponent`, and `status` to filter the results.
     * - Use `maxResults` to set the number of entries per page. If omitted, the default value is 20.
     * - Use the returned `nextToken` to query the next page.
     *
     * @param request - ListServiceEndpointsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListServiceEndpointsResponse
     */
    async listServiceEndpointsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.agentId)) {
            query["agentId"] = request.agentId;
        }
        if (!$dara.isNull(request.agentVersion)) {
            query["agentVersion"] = request.agentVersion;
        }
        if (!$dara.isNull(request.collaborationComponent)) {
            query["collaborationComponent"] = request.collaborationComponent;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.resourceBindingId)) {
            query["resourceBindingId"] = request.resourceBindingId;
        }
        if (!$dara.isNull(request.status)) {
            query["status"] = request.status;
        }
        if (!$dara.isNull(request.targetType)) {
            query["targetType"] = request.targetType;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListServiceEndpoints",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/service-endpoints`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListServiceEndpointsResponse({}));
    }
    /**
     * Queries service endpoints in a specified workspace with paging, and supports filtering by target type, agent, collaboration component, and status.
     *
     * @remarks
     * Queries service endpoints in a workspace with paging to find the access entries for agents or collaboration components.
     * - Use `targetType`, `agentId`, `agentVersion`, `resourceBindingId`, `collaborationComponent`, and `status` to filter the results.
     * - Use `maxResults` to set the number of entries per page. If omitted, the default value is 20.
     * - Use the returned `nextToken` to query the next page.
     *
     * @param request - ListServiceEndpointsRequest
     * @returns ListServiceEndpointsResponse
     */
    async listServiceEndpoints(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listServiceEndpointsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the reference relationships of a skill.
     *
     * @remarks
     * Queries the reference relationships of a specified skill to verify its usage before modifying or cleaning up skill assets.
     *
     * @param request - ListSkillReferencesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillReferencesResponse
     */
    async listSkillReferencesWithOptions(workspaceId, skillName, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.pageNo)) {
            query["pageNo"] = request.pageNo;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["pageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.selectorType)) {
            query["selectorType"] = request.selectorType;
        }
        if (!$dara.isNull(request.selectorValue)) {
            query["selectorValue"] = request.selectorValue;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSkillReferences",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/references`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSkillReferencesResponse({}));
    }
    /**
     * Queries the reference relationships of a skill.
     *
     * @remarks
     * Queries the reference relationships of a specified skill to verify its usage before modifying or cleaning up skill assets.
     *
     * @param request - ListSkillReferencesRequest
     * @returns ListSkillReferencesResponse
     */
    async listSkillReferences(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listSkillReferencesWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Performs a paged query of skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @remarks
     * Performs a paged query of skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @param request - ListSkillsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListSkillsResponse
     */
    async listSkillsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.orderBy)) {
            query["orderBy"] = request.orderBy;
        }
        if (!$dara.isNull(request.owner)) {
            query["owner"] = request.owner;
        }
        if (!$dara.isNull(request.pageNo)) {
            query["pageNo"] = request.pageNo;
        }
        if (!$dara.isNull(request.pageSize)) {
            query["pageSize"] = request.pageSize;
        }
        if (!$dara.isNull(request.scope)) {
            query["scope"] = request.scope;
        }
        if (!$dara.isNull(request.search)) {
            query["search"] = request.search;
        }
        if (!$dara.isNull(request.skillName)) {
            query["skillName"] = request.skillName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListSkills",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
    }
    /**
     * Performs a paged query of skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @remarks
     * Performs a paged query of skills in a specified workspace and returns the basic information, version status, and paging information of the skills.
     *
     * @param request - ListSkillsRequest
     * @returns ListSkillsResponse
     */
    async listSkills(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listSkillsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paging query of teams in a specified workspace. You can use nameLike to filter teams by fuzzy match on the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member ID, name, and team role.
     *
     * @remarks
     * Performs a paging query of teams in a specified workspace.
     *
     * @param request - ListTeamsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListTeamsResponse
     */
    async listTeamsWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nameLike)) {
            query["nameLike"] = request.nameLike;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListTeams",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/teams`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
    }
    /**
     * Performs a paging query of teams in a specified workspace. You can use nameLike to filter teams by fuzzy match on the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member ID, name, and team role.
     *
     * @remarks
     * Performs a paging query of teams in a specified workspace.
     *
     * @param request - ListTeamsRequest
     * @returns ListTeamsResponse
     */
    async listTeams(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listTeamsWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paged query for users in a specified workspace. You can filter users by fuzzy match on the username by using nameLike, specify the maximum number of records per paging by using maxResults, and retrieve the next paging by using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries the application user directory in a workspace for viewing users and selecting team members.
     *
     * @param request - ListUsersRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListUsersResponse
     */
    async listUsersWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.email)) {
            query["email"] = request.email;
        }
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.name)) {
            query["name"] = request.name;
        }
        if (!$dara.isNull(request.nameLike)) {
            query["nameLike"] = request.nameLike;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListUsers",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
    }
    /**
     * Performs a paged query for users in a specified workspace. You can filter users by fuzzy match on the username by using nameLike, specify the maximum number of records per paging by using maxResults, and retrieve the next paging by using nextToken. If maxResults is not specified, the server returns 10 records by default.
     *
     * @remarks
     * Queries the application user directory in a workspace for viewing users and selecting team members.
     *
     * @param request - ListUsersRequest
     * @returns ListUsersResponse
     */
    async listUsers(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listUsersWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Performs a paged query of workspaces under the current tenant. By default, the list does not return soft-deleted records whose status is Deleted. The server applies stable sorting to the results in chronological order of creation during paging.
     *
     * @remarks
     * Performs a paged query of workspaces accessible to the current account for selecting a workspace or viewing a workspace overview.
     * - Use `nameLike` to filter by name using fuzzy match.
     * - Use `maxResults` to configure the Settings for the number of entries per page. If this parameter is omitted or set to `0`, the default value is 20.
     * - Use `nextToken` to query the next page during paging, or use `skip` to skip a specified number of workspaces.
     * The list is sorted in the order of creation. By default, deleted workspaces (with the `Deleted` status) are not returned.
     *
     * @param request - ListWorkspacesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ListWorkspacesResponse
     */
    async listWorkspacesWithOptions(request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.maxResults)) {
            query["maxResults"] = request.maxResults;
        }
        if (!$dara.isNull(request.nextToken)) {
            query["nextToken"] = request.nextToken;
        }
        if (!$dara.isNull(request.skip)) {
            query["skip"] = request.skip;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ListWorkspaces",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
    }
    /**
     * Performs a paged query of workspaces under the current tenant. By default, the list does not return soft-deleted records whose status is Deleted. The server applies stable sorting to the results in chronological order of creation during paging.
     *
     * @remarks
     * Performs a paged query of workspaces accessible to the current account for selecting a workspace or viewing a workspace overview.
     * - Use `nameLike` to filter by name using fuzzy match.
     * - Use `maxResults` to configure the Settings for the number of entries per page. If this parameter is omitted or set to `0`, the default value is 20.
     * - Use `nextToken` to query the next page during paging, or use `skip` to skip a specified number of workspaces.
     * The list is sorted in the order of creation. By default, deleted workspaces (with the `Deleted` status) are not returned.
     *
     * @param request - ListWorkspacesRequest
     * @returns ListWorkspacesResponse
     */
    async listWorkspaces(request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.listWorkspacesWithOptions(request, headers, runtime);
    }
    /**
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @param tmpReq - OfflineSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OfflineSkillResponse
     */
    async offlineSkillWithOptions(workspaceId, skillName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.OfflineSkillShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OfflineSkill",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/actions/offline`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OfflineSkillResponse({}));
    }
    /**
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @remarks
     * Takes the online version of a specified skill offline so that it is no longer used as the online version.
     *
     * @param request - OfflineSkillRequest
     * @returns OfflineSkillResponse
     */
    async offlineSkill(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.offlineSkillWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Sets the specified skill version as the online version.
     *
     * @remarks
     * Sets the specified skill version as the online version.
     *
     * @param tmpReq - OnlineSkillRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns OnlineSkillResponse
     */
    async onlineSkillWithOptions(workspaceId, skillName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.OnlineSkillShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "OnlineSkill",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/actions/online`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.OnlineSkillResponse({}));
    }
    /**
     * Sets the specified skill version as the online version.
     *
     * @remarks
     * Sets the specified skill version as the online version.
     *
     * @param request - OnlineSkillRequest
     * @returns OnlineSkillResponse
     */
    async onlineSkill(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.onlineSkillWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Parses and checks one or more skill ZIP packages uploaded to OSS, and returns the names, versions, and conflict check results.
     *
     * @remarks
     * Checks one or more skill ZIP packages uploaded to OSS for skill names, versions, and import conflicts.
     * After the check passes, call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) or [BatchUploadSkillsViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/BatchUploadSkillsViaOss) to import the skills into the workspace.
     *
     * @param tmpReq - PrecheckSkillUploadViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PrecheckSkillUploadViaOssResponse
     */
    async precheckSkillUploadViaOssWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.PrecheckSkillUploadViaOssShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "PrecheckSkillUploadViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skill-actions/precheck-upload-via-oss`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.PrecheckSkillUploadViaOssResponse({}));
    }
    /**
     * Parses and checks one or more skill ZIP packages uploaded to OSS, and returns the names, versions, and conflict check results.
     *
     * @remarks
     * Checks one or more skill ZIP packages uploaded to OSS for skill names, versions, and import conflicts.
     * After the check passes, call [UploadSkillViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/UploadSkillViaOss) or [BatchUploadSkillsViaOss](https://api.aliyun.com/document/AgentCore/2026-08-04/BatchUploadSkillsViaOss) to import the skills into the workspace.
     *
     * @param request - PrecheckSkillUploadViaOssRequest
     * @returns PrecheckSkillUploadViaOssResponse
     */
    async precheckSkillUploadViaOss(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.precheckSkillUploadViaOssWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only in this response, without automatically enabling AgentCore user synchronization.
     *
     * @remarks
     * Prepares the receiving endpoint and access token for integrating an enterprise identity system with SCIM user synchronization. The enterprise identity system uses this information to provision users to the shared user pool of AgentCore.
     * SCIM is a user provisioning protocol. The enterprise identity system first sends users to the receiving endpoint, and then AgentCore synchronizes the users from the user pool to the workspace.
     * ### Before you begin
     * A `CustomSSO` binding has been created by using [CreateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProvider), and the shared user pool is ready. SCIM integration can be performed independently of SAML logon configuration.
     * ### What this operation prepares
     * This operation enables the SCIM receiving endpoint and returns the receiving URL and credential summary:
     * | Current credential status | Returned result |
     * | --- | --- |
     * | An unexpired credential with the status of `Enabled` already exists | Reuses the existing credential. The `token` field returns an empty string `""`. Use the previously saved token. |
     * | No available credentials exist | Creates a new credential. The `token` field returns the plaintext of the new token, which is returned only in this response. |
     * The plaintext of an existing token cannot be queried again. If the token is lost, you can create a new token by calling [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential). A maximum of two credentials can be retained for the same user pool. When the limit is reached, you must delete unused credentials first.
     * ### Subsequent configuration
     * 1. Configure the returned receiving URL and valid token in the SCIM user provisioning settings of the enterprise identity system.
     * 2. Complete the connection test and user assignment in the enterprise identity system.
     * 3. Enable AgentCore user synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM), and then query the synchronization result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - PrepareIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PrepareIdentityProviderSCIMResponse
     */
    async prepareIdentityProviderSCIMWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "PrepareIdentityProviderSCIM",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning/prepare`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.PrepareIdentityProviderSCIMResponse({}));
    }
    /**
     * Prepares the SCIM receiving configuration and returns the provisioning URL and credential summary. Issues a token if no available credentials exist and returns the plaintext only in this response, without automatically enabling AgentCore user synchronization.
     *
     * @remarks
     * Prepares the receiving endpoint and access token for integrating an enterprise identity system with SCIM user synchronization. The enterprise identity system uses this information to provision users to the shared user pool of AgentCore.
     * SCIM is a user provisioning protocol. The enterprise identity system first sends users to the receiving endpoint, and then AgentCore synchronizes the users from the user pool to the workspace.
     * ### Before you begin
     * A `CustomSSO` binding has been created by using [CreateIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProvider), and the shared user pool is ready. SCIM integration can be performed independently of SAML logon configuration.
     * ### What this operation prepares
     * This operation enables the SCIM receiving endpoint and returns the receiving URL and credential summary:
     * | Current credential status | Returned result |
     * | --- | --- |
     * | An unexpired credential with the status of `Enabled` already exists | Reuses the existing credential. The `token` field returns an empty string `""`. Use the previously saved token. |
     * | No available credentials exist | Creates a new credential. The `token` field returns the plaintext of the new token, which is returned only in this response. |
     * The plaintext of an existing token cannot be queried again. If the token is lost, you can create a new token by calling [CreateIdentityProviderSCIMCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSCIMCredential). A maximum of two credentials can be retained for the same user pool. When the limit is reached, you must delete unused credentials first.
     * ### Subsequent configuration
     * 1. Configure the returned receiving URL and valid token in the SCIM user provisioning settings of the enterprise identity system.
     * 2. Complete the connection test and user assignment in the enterprise identity system.
     * 3. Enable AgentCore user synchronization by calling [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM), and then query the synchronization result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - PrepareIdentityProviderSCIMRequest
     * @returns PrepareIdentityProviderSCIMResponse
     */
    async prepareIdentityProviderSCIM(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.prepareIdentityProviderSCIMWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Publishes a specified skill version and changes its status to published.
     *
     * @remarks
     * Publishes a specified skill version and changes its status to published.
     *
     * @param tmpReq - PublishSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns PublishSkillVersionResponse
     */
    async publishSkillVersionWithOptions(workspaceId, skillName, skillVersion, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.PublishSkillVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "PublishSkillVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}/actions/publish`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.PublishSkillVersionResponse({}));
    }
    /**
     * Publishes a specified skill version and changes its status to published.
     *
     * @remarks
     * Publishes a specified skill version and changes its status to published.
     *
     * @param request - PublishSkillVersionRequest
     * @returns PublishSkillVersionResponse
     */
    async publishSkillVersion(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.publishSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @remarks
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @param tmpReq - RedraftSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RedraftSkillVersionResponse
     */
    async redraftSkillVersionWithOptions(workspaceId, skillName, skillVersion, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.RedraftSkillVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RedraftSkillVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}/actions/redraft`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RedraftSkillVersionResponse({}));
    }
    /**
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @remarks
     * Reverts a specified skill version to an editable draft for further modification.
     *
     * @param request - RedraftSkillVersionRequest
     * @returns RedraftSkillVersionResponse
     */
    async redraftSkillVersion(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.redraftSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Resets the logon password of a specified user. Specify the user by using agentCoreUserId or username. You must specify at least one of them. This operation only supports resetting the passwords of users who use local password authentication for the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
     *
     * @remarks
     * Resets the logon password of a specified user.
     *
     * @param tmpReq - ResetUserPasswordRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ResetUserPasswordResponse
     */
    async resetUserPasswordWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.ResetUserPasswordShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ResetUserPassword",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users/actions/reset-password`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ResetUserPasswordResponse({}));
    }
    /**
     * Resets the logon password of a specified user. Specify the user by using agentCoreUserId or username. You must specify at least one of them. This operation only supports resetting the passwords of users who use local password authentication for the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
     *
     * @remarks
     * Resets the logon password of a specified user.
     *
     * @param request - ResetUserPasswordRequest
     * @returns ResetUserPasswordResponse
     */
    async resetUserPassword(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.resetUserPasswordWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Resubmits the creation request for an ACR image cache in a specified workspace.
     *
     * @remarks
     * Resubmits the creation request for an existing image cache to recreate a cache that has not been successfully created.
     * ### Call scope
     * Pass `regionId`, `workspaceId`, and `clientToken` as query parameters, and use `imageId` to locate the cache. This operation applies to ACR source caches and re-verifies the source repository authorization before submission.
     * ### Query retry results
     * A successful response indicates that a retry acceptance snapshot is returned, not that the creation is complete. Query the status through [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache). `READY` indicates that the cache is ready. If the status is `FAILED`, check the `error` field.
     * The `clientToken` parameter currently only verifies that the value is not empty and does not guarantee deduplication or recovery of the original acceptance result based on this identifier.
     *
     * @param tmpReq - RetryImageCacheRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns RetryImageCacheResponse
     */
    async retryImageCacheWithOptions(imageId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.RetryImageCacheShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.regionId)) {
            query["regionId"] = request.regionId;
        }
        if (!$dara.isNull(request.workspaceId)) {
            query["workspaceId"] = request.workspaceId;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "RetryImageCache",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/image-caches/${$dara.URL.percentEncode(imageId)}/retry`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.RetryImageCacheResponse({}));
    }
    /**
     * Resubmits the creation request for an ACR image cache in a specified workspace.
     *
     * @remarks
     * Resubmits the creation request for an existing image cache to recreate a cache that has not been successfully created.
     * ### Call scope
     * Pass `regionId`, `workspaceId`, and `clientToken` as query parameters, and use `imageId` to locate the cache. This operation applies to ACR source caches and re-verifies the source repository authorization before submission.
     * ### Query retry results
     * A successful response indicates that a retry acceptance snapshot is returned, not that the creation is complete. Query the status through [GetImageCache](https://api.aliyun.com/document/AgentCore/2026-08-04/GetImageCache). `READY` indicates that the cache is ready. If the status is `FAILED`, check the `error` field.
     * The `clientToken` parameter currently only verifies that the value is not empty and does not guarantee deduplication or recovery of the original acceptance result based on this identifier.
     *
     * @param request - RetryImageCacheRequest
     * @returns RetryImageCacheResponse
     */
    async retryImageCache(imageId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.retryImageCacheWithOptions(imageId, request, headers, runtime);
    }
    /**
     * Retrieves long-term memory from MemoryStore based on semantics.
     *
     * @remarks
     * Retrieves relevant memories semantically from the long-term memory store (MemoryStore) to help agents obtain the information required for subsequent tasks.
     *
     * @param tmpReq - SearchMemoriesRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SearchMemoriesResponse
     */
    async searchMemoriesWithOptions(workspaceId, memoryStoreName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.SearchMemoriesShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SearchMemories",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories/search`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SearchMemoriesResponse({}));
    }
    /**
     * Retrieves long-term memory from MemoryStore based on semantics.
     *
     * @remarks
     * Retrieves relevant memories semantically from the long-term memory store (MemoryStore) to help agents obtain the information required for subsequent tasks.
     *
     * @param request - SearchMemoriesRequest
     * @returns SearchMemoriesResponse
     */
    async searchMemories(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.searchMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @remarks
     * Submits a specified draft version of an agent template for review.
     * If no release pipeline is configured, the version is directly published online.
     *
     * @param tmpReq - SubmitAgentSpecVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitAgentSpecVersionResponse
     */
    async submitAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.SubmitAgentSpecVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SubmitAgentSpecVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}/versions/${$dara.URL.percentEncode(agentSpecVersion)}/actions/submit`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SubmitAgentSpecVersionResponse({}));
    }
    /**
     * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
     *
     * @remarks
     * Submits a specified draft version of an agent template for review.
     * If no release pipeline is configured, the version is directly published online.
     *
     * @param request - SubmitAgentSpecVersionRequest
     * @returns SubmitAgentSpecVersionResponse
     */
    async submitAgentSpecVersion(workspaceId, agentSpecName, agentSpecVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.submitAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, request, headers, runtime);
    }
    /**
     * Submits a specified draft version of a skill for review.
     *
     * @remarks
     * Submits a specified draft version of a skill for review.
     *
     * @param tmpReq - SubmitSkillVersionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns SubmitSkillVersionResponse
     */
    async submitSkillVersionWithOptions(workspaceId, skillName, skillVersion, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.SubmitSkillVersionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "SubmitSkillVersion",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/versions/${$dara.URL.percentEncode(skillVersion)}/actions/submit`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SubmitSkillVersionResponse({}));
    }
    /**
     * Submits a specified draft version of a skill for review.
     *
     * @remarks
     * Submits a specified draft version of a skill for review.
     *
     * @param request - SubmitSkillVersionRequest
     * @returns SubmitSkillVersionResponse
     */
    async submitSkillVersion(workspaceId, skillName, skillVersion, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.submitSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
    }
    /**
     * Updates an access application.
     *
     * @remarks
     * Modifies the configuration of an access application in a workspace to adjust application integration and identity source settings.
     *
     * @param tmpReq - UpdateAccessApplicationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAccessApplicationResponse
     */
    async updateAccessApplicationWithOptions(workspaceId, applicationId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateAccessApplicationShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAccessApplication",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/access-applications/${$dara.URL.percentEncode(applicationId)}`,
            method: "PATCH",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAccessApplicationResponse({}));
    }
    /**
     * Updates an access application.
     *
     * @remarks
     * Modifies the configuration of an access application in a workspace to adjust application integration and identity source settings.
     *
     * @param request - UpdateAccessApplicationRequest
     * @returns UpdateAccessApplicationResponse
     */
    async updateAccessApplication(workspaceId, applicationId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateAccessApplicationWithOptions(workspaceId, applicationId, request, headers, runtime);
    }
    /**
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel.
     * At least one updatable field must be provided.
     *
     * @param tmpReq - UpdateAgentIMChannelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentIMChannelResponse
     */
    async updateAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateAgentIMChannelShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAgentIMChannel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels/${$dara.URL.percentEncode(imChannelId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAgentIMChannelResponse({}));
    }
    /**
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
     *
     * @remarks
     * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel.
     * At least one updatable field must be provided.
     *
     * @param request - UpdateAgentIMChannelRequest
     * @returns UpdateAgentIMChannelResponse
     */
    async updateAgentIMChannel(workspaceId, agentId, imChannelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
    }
    /**
     * Fully updates the channel credentials for a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Replaces the access credentials for an IM channel to rotate keys or correct authentication configurations.
     * Submit the complete new credentials. The response does not return plaintext secrets.
     *
     * @param tmpReq - UpdateAgentIMChannelCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentIMChannelCredentialResponse
     */
    async updateAgentIMChannelCredentialWithOptions(workspaceId, agentId, imChannelId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateAgentIMChannelCredentialShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAgentIMChannelCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agents/${$dara.URL.percentEncode(agentId)}/im-channels/${$dara.URL.percentEncode(imChannelId)}/actions/update-credential`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAgentIMChannelCredentialResponse({}));
    }
    /**
     * Fully updates the channel credentials for a specified IM channel. Secrets are not returned in the response.
     *
     * @remarks
     * Replaces the access credentials for an IM channel to rotate keys or correct authentication configurations.
     * Submit the complete new credentials. The response does not return plaintext secrets.
     *
     * @param request - UpdateAgentIMChannelCredentialRequest
     * @returns UpdateAgentIMChannelCredentialResponse
     */
    async updateAgentIMChannelCredential(workspaceId, agentId, imChannelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateAgentIMChannelCredentialWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
    }
    /**
     * Updates the business tags, version tags, and visibility scope of a specified AgentSpec. Fields not provided remain unchanged.
     *
     * @remarks
     * Updates the business tags, version tags, and visibility scope of a specified agent template. Fields not provided remain unchanged.
     *
     * @param tmpReq - UpdateAgentSpecRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateAgentSpecResponse
     */
    async updateAgentSpecWithOptions(workspaceId, agentSpecName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateAgentSpecShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateAgentSpec",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-specs/${$dara.URL.percentEncode(agentSpecName)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateAgentSpecResponse({}));
    }
    /**
     * Updates the business tags, version tags, and visibility scope of a specified AgentSpec. Fields not provided remain unchanged.
     *
     * @remarks
     * Updates the business tags, version tags, and visibility scope of a specified agent template. Fields not provided remain unchanged.
     *
     * @param request - UpdateAgentSpecRequest
     * @returns UpdateAgentSpecResponse
     */
    async updateAgentSpec(workspaceId, agentSpecName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
    }
    /**
     * Updates the API key or service account key collection for an enabled QoderCLI connector. When serviceAccountKeys is submitted, the service uses it as the complete updated key collection to add, rename, rotate, and delete keys.
     *
     * @remarks
     * Updates the API key or service account key collection for an enabled QoderCLI connector.
     * When updating service account keys, existing keys are matched by their record `id`.
     *
     * @param tmpReq - UpdateConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateConnectorResponse
     */
    async updateConnectorWithOptions(workspaceId, connectorName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateConnectorShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateConnector",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors/${$dara.URL.percentEncode(connectorName)}/actions/update`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateConnectorResponse({}));
    }
    /**
     * Updates the API key or service account key collection for an enabled QoderCLI connector. When serviceAccountKeys is submitted, the service uses it as the complete updated key collection to add, rename, rotate, and delete keys.
     *
     * @remarks
     * Updates the API key or service account key collection for an enabled QoderCLI connector.
     * When updating service account keys, existing keys are matched by their record `id`.
     *
     * @param request - UpdateConnectorRequest
     * @returns UpdateConnectorResponse
     */
    async updateConnector(workspaceId, connectorName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
    }
    /**
     * Updates the content, description, or MCP header application scope of a specified credential. Unspecified configurations retain their original values. The credential name and type cannot be modified.
     *
     * @remarks
     * Updates the content, description, or MCP header application scope of a specified credential.
     * ### Update rules
     * You must modify at least one of the credential content, description, or application scope. When modifying only the application scope, you do not need to submit credentialMetadata or description.
     * - Omit credentialMetadata: The original credential content is retained. If provided, submit a JSON string according to the original credential type.
     * - Omit description: The original description is retained.
     * - The credential name and credentialType cannot be modified.
     * ### MCP header application scope
     * Only mcpHeader supports updating the application scope. For apiKey, do not submit resourceScope or resourceRefs.
     * - Omit both the scope and the resource list: The original configuration is retained.
     * - Submit resourceRefs: You must also submit resourceScope.
     * - resourceScope=ALL: Omit resourceRefs.
     * - resourceScope=SPECIFIED: Submit resourceRefs. An empty array [] is allowed during updates. For each item, specify resourceType=mcpServer and resourceId.
     * ### Query results
     * After the update, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) to query the current configuration and the masked credential content.
     *
     * @param tmpReq - UpdateCredentialRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCredentialResponse
     */
    async updateCredentialWithOptions(workspaceId, credentialId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateCredentialShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateCredential",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/credentials/${$dara.URL.percentEncode(credentialId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateCredentialResponse({}));
    }
    /**
     * Updates the content, description, or MCP header application scope of a specified credential. Unspecified configurations retain their original values. The credential name and type cannot be modified.
     *
     * @remarks
     * Updates the content, description, or MCP header application scope of a specified credential.
     * ### Update rules
     * You must modify at least one of the credential content, description, or application scope. When modifying only the application scope, you do not need to submit credentialMetadata or description.
     * - Omit credentialMetadata: The original credential content is retained. If provided, submit a JSON string according to the original credential type.
     * - Omit description: The original description is retained.
     * - The credential name and credentialType cannot be modified.
     * ### MCP header application scope
     * Only mcpHeader supports updating the application scope. For apiKey, do not submit resourceScope or resourceRefs.
     * - Omit both the scope and the resource list: The original configuration is retained.
     * - Submit resourceRefs: You must also submit resourceScope.
     * - resourceScope=ALL: Omit resourceRefs.
     * - resourceScope=SPECIFIED: Submit resourceRefs. An empty array [] is allowed during updates. For each item, specify resourceType=mcpServer and resourceId.
     * ### Query results
     * After the update, call [GetCredential](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCredential) to query the current configuration and the masked credential content.
     *
     * @param request - UpdateCredentialRequest
     * @returns UpdateCredentialResponse
     */
    async updateCredential(workspaceId, credentialId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
    }
    /**
     * Updates the configuration of a custom code or image agent in a specified workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call GetCustomAgent to query the update result.
     *
     * @remarks
     * Updates the deployment artifact or runtime configuration of a custom code or image agent to release new code, images, or configurations.
     * ### Update rules
     * Updates a custom code or image agent in a specified workspace. You must provide at least one top-level field to update. Omitted top-level fields retain their original configurations.
     * The update rules for each configuration are as follows.
     * | Configuration | Update method and precautions |
     * | --- | --- |
     * | `name` | Omit to retain the original name. The value cannot be `null` or an empty string. |
     * | `description` | Omit to retain the original description. Pass `null` to clear the description. |
     * | `artifact` | When submitting, specify `port` and the required fields for the selected source. To retain a custom startup command, also specify `entrypoint`. `code` and `container` are mutually exclusive. |
     * | `runtime` | When submitting, specify both `compute` and `sessionPolicy`. To retain the elastic policy, submit the complete `hpa`. |
     * | `environment` | The environment variable list is replaced as a whole. You must include all variables that need to be retained. |
     * | `network` | When submitting, omitted access items are treated as allowed. To retain access restrictions, specify both `accessInternet` and `accessVpc`. |
     * | `healthCheck` | When submitting, you must specify `port`. Other unspecified configurations use default values. Pass `null` to remove the health check. |
     * | `logging` | When submitting `logging.sls`, specify non-empty `project` and `logstore` at the same time. |
     * | `protocol`, `ossMounts`, `agenticFsMounts` | When submitting, the corresponding list is replaced as a whole. Pass `[]` to clear the corresponding list. `agenticFsMounts` does not accept `null`. |
     * ### Deployment artifacts
     * Three deployment methods are supported: code packages, ACR images, and custom images. When updating or switching the deployment method, provide the configuration according to the target method.
     * | Deployment method | Configuration requirements |
     * | --- | --- |
     * | ACR image | When updating the image tag, also provide `artifact.port`, as well as `type=acr`, `instanceId`, `namespace`, `repo`, and `tag` in `artifact.container`. To retain a custom startup command, also provide `entrypoint`. |
     * | Custom image | Set `artifact.container.type=custom`, provide the complete `customImage`, and provide `clientToken` in the query parameters. When switching to this method, also specify `artifact.port`. Do not include ACR instance, namespace, repository, and tag fields in `container`. |
     * | Code package | Provide `artifact.port`, as well as `sourceUri`, `languageRuntime`, and `entrypoint` in `artifact.code`. Do not commit `container` at the same time. |
     * **Custom image**
     * - `customImage` must include the complete image address `image` and the independent pull network `pullNetwork`. The image address does not include a protocol or user information, and supports addresses with tags or digests.
     * - For public network pulling, set `pullNetwork.type=public` and do not include VPC fields. For VPC pulling, set `type=vpc` and provide `vpcId`, `vSwitchId`, and `securityGroupId` at the same time. The image pull network and the agent runtime network are configured separately.
     * - When repository authentication is required, provide non-empty `username` and `password` at the same time. For anonymous access, omit both. The response does not return the password.
     * - Omitting the entire `customImage` retains the saved image source. Commit the complete object when updating the custom image source. You do not need to resubmit this object when only adjusting the runtime configuration.
     * - Custom images and code packages do not support enabling `useImageCache`. The value in the final configuration must be `false`. When this field is omitted for a custom image, it is treated as `false`. When switching to a code package, if the original configuration is `true`, you must explicitly change it to `false`. When updating other sources, omitting this field retains the original value.
     * **Code package**
     * - Supports ZIP or TAR.GZ. The compressed package size cannot exceed `500000000` bytes. Dependencies are packaged by the invoker. The platform does not execute online builds or install dependencies.
     * - Query the active `languageRuntime` values by invoking [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes).
     * - `sourceUri` supports `oss://` addresses or HTTPS object addresses of standard OSS public domain name, including signed URLs.
     * - For local code packages, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl), upload the file according to the response information, and then commit the returned `sourceUri`.
     * - The new source is verified for read permissions, objects, and size before acceptance, and is transferred to a fixed copy on the platform. If the transfer failed, the current agent configuration is not saved. Common updates can reuse the saved fixed code package address.
     * ### Runtime configuration and elasticity
     * Omitting the entire `runtime` retains the original runtime configuration. When submitting `runtime`, you must specify both `compute` and `sessionPolicy`.
     * If you submit `runtime` but omit `hpa`, or omit some fields in `hpa`, the unspecified items use the following default values. **To retain the existing elastic policy, submit the complete `hpa`.**
     * | Field | Default value | Description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether elastic scaling is enabled. |
     * | `minSandboxCount` | `1` | The minimum number of instances. |
     * | `maxSandboxCount` | `10` | The maximum number of instances, which cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. |
     * The upper and lower limits of the number of instances are configuration values. Query the current number of instances through `sandboxPhaseCounts`.
     * When `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must specify a valid HTTP request header name `headerName`. Do not specify `headerName` for other session policies.
     * ### Network and mounts
     * Omitting the entire `network` retains the original configuration. When submitting this object, omitted access items are treated as allowed on the agent side, and actual access is restricted by the workspace network configuration.
     * To retain the original restrictions, submit both `accessInternet.enabled` and `accessVpc.enabled` at the same time. Do not submit only one of them.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. When updating either list, you must include all mount items that need to be retained in the list. The two lists are updated separately. You can use `agenticFsMounts=[]` to clear AgenticFS mounts, but you cannot use `null` to clear them.
     * In this operation, ACR images, custom images, and code packages all use the same user mount target rules: `mountPath` is the absolute path in the container, such as `/data/train`, and must not conflict with platform reserved directories. Mount targets must not be duplicated or form parent-child directory overwrites.
     * ### Environment variables
     * Omitting the entire `environment` retains the original configuration. When submitting `environment.variables`, the original list is replaced as a whole with the current list. You must include all variables that need to be retained.
     * The following methods all clear the environment variables configured by the user:
     * - `environment.variables=[]`.
     * - `environment=null`.
     * - Submit `environment` but omit `variables`, such as `environment={}`.
     * Variable names must be non-empty and unique in the list. Variable values must be strings, and empty strings are allowed.
     * ### Health checks and logs
     * Omitting the entire `healthCheck` retains the original configuration. Pass `null` to remove the health check. When submitting this object, you must specify `port`. Other unspecified items use the following default values.
     * | Field | Default value |
     * | --- | --- |
     * | `path` | `/healthz` |
     * | `intervalSeconds` | `10` seconds |
     * | `timeoutSeconds` | `2` seconds |
     * | `unhealthyThreshold` | `3` times |
     * The health check port ranges from 1 to 65535. Health Check Interval, timeout period, and failure threshold must be positive integers, and the timeout period must be less than Health Check Interval. Do not submit `healthyThreshold`.
     * When configuring log delivery, `logging.sls.project` and `logging.sls.logstore` must be provided at the same time and cannot be empty.
     * ### Asynchronous results and retries
     * `success=true` indicates that the update request has been accepted. Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the configuration processing result.
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected configuration version. |
     * | `latestExecutionError` | The reason why the latest configuration is waiting for a retry or fails to be executed, and whether to automatically retry. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | A snapshot of the number of instances counted by phase. |
     * When `latestVersionStatus` is `pending`, `processing`, or `waiting_retry`, you can continue to query later. `succeeded` indicates that the configuration is processed successfully. When the value is `failed`, troubleshoot the configuration based on `latestExecutionError`.
     * When explicitly submitting `customImage` or explicitly setting `artifact.container.type=custom`, you must provide `clientToken` in the query parameters. You can also optionally pass this parameter when updating ACR images or code packages to reuse the acceptance result of the same submission. The identifier is 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens.
     * When retrying the same submission, reuse the original `clientToken`. The service returns the existing acceptance result based on the tenant, workspace, and this identifier. Use a new identifier when modifying the submission content.
     *
     * @param tmpReq - UpdateCustomAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateCustomAgentResponse
     */
    async updateCustomAgentWithOptions(workspaceId, agentId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateCustomAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateCustomAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/custom-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateCustomAgentResponse({}));
    }
    /**
     * Updates the configuration of a custom code or image agent in a specified workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call GetCustomAgent to query the update result.
     *
     * @remarks
     * Updates the deployment artifact or runtime configuration of a custom code or image agent to release new code, images, or configurations.
     * ### Update rules
     * Updates a custom code or image agent in a specified workspace. You must provide at least one top-level field to update. Omitted top-level fields retain their original configurations.
     * The update rules for each configuration are as follows.
     * | Configuration | Update method and precautions |
     * | --- | --- |
     * | `name` | Omit to retain the original name. The value cannot be `null` or an empty string. |
     * | `description` | Omit to retain the original description. Pass `null` to clear the description. |
     * | `artifact` | When submitting, specify `port` and the required fields for the selected source. To retain a custom startup command, also specify `entrypoint`. `code` and `container` are mutually exclusive. |
     * | `runtime` | When submitting, specify both `compute` and `sessionPolicy`. To retain the elastic policy, submit the complete `hpa`. |
     * | `environment` | The environment variable list is replaced as a whole. You must include all variables that need to be retained. |
     * | `network` | When submitting, omitted access items are treated as allowed. To retain access restrictions, specify both `accessInternet` and `accessVpc`. |
     * | `healthCheck` | When submitting, you must specify `port`. Other unspecified configurations use default values. Pass `null` to remove the health check. |
     * | `logging` | When submitting `logging.sls`, specify non-empty `project` and `logstore` at the same time. |
     * | `protocol`, `ossMounts`, `agenticFsMounts` | When submitting, the corresponding list is replaced as a whole. Pass `[]` to clear the corresponding list. `agenticFsMounts` does not accept `null`. |
     * ### Deployment artifacts
     * Three deployment methods are supported: code packages, ACR images, and custom images. When updating or switching the deployment method, provide the configuration according to the target method.
     * | Deployment method | Configuration requirements |
     * | --- | --- |
     * | ACR image | When updating the image tag, also provide `artifact.port`, as well as `type=acr`, `instanceId`, `namespace`, `repo`, and `tag` in `artifact.container`. To retain a custom startup command, also provide `entrypoint`. |
     * | Custom image | Set `artifact.container.type=custom`, provide the complete `customImage`, and provide `clientToken` in the query parameters. When switching to this method, also specify `artifact.port`. Do not include ACR instance, namespace, repository, and tag fields in `container`. |
     * | Code package | Provide `artifact.port`, as well as `sourceUri`, `languageRuntime`, and `entrypoint` in `artifact.code`. Do not commit `container` at the same time. |
     * **Custom image**
     * - `customImage` must include the complete image address `image` and the independent pull network `pullNetwork`. The image address does not include a protocol or user information, and supports addresses with tags or digests.
     * - For public network pulling, set `pullNetwork.type=public` and do not include VPC fields. For VPC pulling, set `type=vpc` and provide `vpcId`, `vSwitchId`, and `securityGroupId` at the same time. The image pull network and the agent runtime network are configured separately.
     * - When repository authentication is required, provide non-empty `username` and `password` at the same time. For anonymous access, omit both. The response does not return the password.
     * - Omitting the entire `customImage` retains the saved image source. Commit the complete object when updating the custom image source. You do not need to resubmit this object when only adjusting the runtime configuration.
     * - Custom images and code packages do not support enabling `useImageCache`. The value in the final configuration must be `false`. When this field is omitted for a custom image, it is treated as `false`. When switching to a code package, if the original configuration is `true`, you must explicitly change it to `false`. When updating other sources, omitting this field retains the original value.
     * **Code package**
     * - Supports ZIP or TAR.GZ. The compressed package size cannot exceed `500000000` bytes. Dependencies are packaged by the invoker. The platform does not execute online builds or install dependencies.
     * - Query the active `languageRuntime` values by invoking [ListAgentCodeRuntimes](https://api.aliyun.com/document/AgentCore/2026-08-04/ListAgentCodeRuntimes).
     * - `sourceUri` supports `oss://` addresses or HTTPS object addresses of standard OSS public domain name, including signed URLs.
     * - For local code packages, first invoke [GetAgentCodePackageUploadUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageUploadUrl), upload the file according to the response information, and then commit the returned `sourceUri`.
     * - The new source is verified for read permissions, objects, and size before acceptance, and is transferred to a fixed copy on the platform. If the transfer failed, the current agent configuration is not saved. Common updates can reuse the saved fixed code package address.
     * ### Runtime configuration and elasticity
     * Omitting the entire `runtime` retains the original runtime configuration. When submitting `runtime`, you must specify both `compute` and `sessionPolicy`.
     * If you submit `runtime` but omit `hpa`, or omit some fields in `hpa`, the unspecified items use the following default values. **To retain the existing elastic policy, submit the complete `hpa`.**
     * | Field | Default value | Description |
     * | --- | --- | --- |
     * | `enabled` | `false` | Specifies whether elastic scaling is enabled. |
     * | `minSandboxCount` | `1` | The minimum number of instances. |
     * | `maxSandboxCount` | `10` | The maximum number of instances, which cannot be less than the minimum number. |
     * | `maxConcurrentSessionsPerSandbox` | `20` | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | `sessionTtlSeconds` | `600` | The maximum idle time of a session, in seconds. |
     * The upper and lower limits of the number of instances are configuration values. Query the current number of instances through `sandboxPhaseCounts`.
     * When `sessionPolicy.type=ISOLATED_HEADER_FIELD`, you must specify a valid HTTP request header name `headerName`. Do not specify `headerName` for other session policies.
     * ### Network and mounts
     * Omitting the entire `network` retains the original configuration. When submitting this object, omitted access items are treated as allowed on the agent side, and actual access is restricted by the workspace network configuration.
     * To retain the original restrictions, submit both `accessInternet.enabled` and `accessVpc.enabled` at the same time. Do not submit only one of them.
     * The total number of `ossMounts` and `agenticFsMounts` cannot exceed 10. When updating either list, you must include all mount items that need to be retained in the list. The two lists are updated separately. You can use `agenticFsMounts=[]` to clear AgenticFS mounts, but you cannot use `null` to clear them.
     * In this operation, ACR images, custom images, and code packages all use the same user mount target rules: `mountPath` is the absolute path in the container, such as `/data/train`, and must not conflict with platform reserved directories. Mount targets must not be duplicated or form parent-child directory overwrites.
     * ### Environment variables
     * Omitting the entire `environment` retains the original configuration. When submitting `environment.variables`, the original list is replaced as a whole with the current list. You must include all variables that need to be retained.
     * The following methods all clear the environment variables configured by the user:
     * - `environment.variables=[]`.
     * - `environment=null`.
     * - Submit `environment` but omit `variables`, such as `environment={}`.
     * Variable names must be non-empty and unique in the list. Variable values must be strings, and empty strings are allowed.
     * ### Health checks and logs
     * Omitting the entire `healthCheck` retains the original configuration. Pass `null` to remove the health check. When submitting this object, you must specify `port`. Other unspecified items use the following default values.
     * | Field | Default value |
     * | --- | --- |
     * | `path` | `/healthz` |
     * | `intervalSeconds` | `10` seconds |
     * | `timeoutSeconds` | `2` seconds |
     * | `unhealthyThreshold` | `3` times |
     * The health check port ranges from 1 to 65535. Health Check Interval, timeout period, and failure threshold must be positive integers, and the timeout period must be less than Health Check Interval. Do not submit `healthyThreshold`.
     * When configuring log delivery, `logging.sls.project` and `logging.sls.logstore` must be provided at the same time and cannot be empty.
     * ### Asynchronous results and retries
     * `success=true` indicates that the update request has been accepted. Call [GetCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetCustomAgent) to query the configuration processing result.
     * | Field | Purpose |
     * | --- | --- |
     * | `latestSpecVersion` | The latest expected configuration version. |
     * | `effectiveSpecVersion` | The effective configuration version. |
     * | `latestVersionStatus` | The processing status of the latest expected configuration version. |
     * | `latestExecutionError` | The reason why the latest configuration is waiting for a retry or fails to be executed, and whether to automatically retry. |
     * | `status` | The overall status of the agent. |
     * | `sandboxPhaseCounts` | A snapshot of the number of instances counted by phase. |
     * When `latestVersionStatus` is `pending`, `processing`, or `waiting_retry`, you can continue to query later. `succeeded` indicates that the configuration is processed successfully. When the value is `failed`, troubleshoot the configuration based on `latestExecutionError`.
     * When explicitly submitting `customImage` or explicitly setting `artifact.container.type=custom`, you must provide `clientToken` in the query parameters. You can also optionally pass this parameter when updating ACR images or code packages to reuse the acceptance result of the same submission. The identifier is 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens.
     * When retrying the same submission, reuse the original `clientToken`. The service returns the existing acceptance result based on the tenant, workspace, and this identifier. Use a new identifier when modifying the submission content.
     *
     * @param request - UpdateCustomAgentRequest
     * @returns UpdateCustomAgentResponse
     */
    async updateCustomAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Updates the model source, instructions, tools, and skills of a managed agent, and processes the configuration asynchronously.
     *
     * @remarks
     * Updates the model, instruction, tool, or skill configurations saved on the platform side for a managed agent to adjust its capability configurations after integration.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set description=null to clear the description. The tools and skills fields are replaced as a whole upon submission. You must include the items to be retained, or pass [] to clear the corresponding explicit lists.
     * ### Switch model sources
     * - To switch to PLATFORM, provide modelSource=PLATFORM and a valid model configuration, including the model connection ID and model name.
     * - To switch to RUNTIME, change the Settings to modelSource=RUNTIME and do not commit the platform model. The original platform model configuration is removed when the source is switched.
     * When a template is used, configurations belonging to the template such as instructions are read from the template. A successful update indicates that the request is accepted. Invoke [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration version and external accessed state. The clientToken parameter does not provide idempotence guarantees at this time.
     *
     * @param tmpReq - UpdateExternalAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateExternalAgentResponse
     */
    async updateExternalAgentWithOptions(workspaceId, agentId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateExternalAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateExternalAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/external-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateExternalAgentResponse({}));
    }
    /**
     * Updates the model source, instructions, tools, and skills of a managed agent, and processes the configuration asynchronously.
     *
     * @remarks
     * Updates the model, instruction, tool, or skill configurations saved on the platform side for a managed agent to adjust its capability configurations after integration.
     * ### Update rules
     * Provide at least one updatable field. Omitted top-level fields retain their original configurations. You can set description=null to clear the description. The tools and skills fields are replaced as a whole upon submission. You must include the items to be retained, or pass [] to clear the corresponding explicit lists.
     * ### Switch model sources
     * - To switch to PLATFORM, provide modelSource=PLATFORM and a valid model configuration, including the model connection ID and model name.
     * - To switch to RUNTIME, change the Settings to modelSource=RUNTIME and do not commit the platform model. The original platform model configuration is removed when the source is switched.
     * When a template is used, configurations belonging to the template such as instructions are read from the template. A successful update indicates that the request is accepted. Invoke [GetExternalAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetExternalAgent) to query the configuration version and external accessed state. The clientToken parameter does not provide idempotence guarantees at this time.
     *
     * @param request - UpdateExternalAgentRequest
     * @returns UpdateExternalAgentResponse
     */
    async updateExternalAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Feishu support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * Modifies the logon or directory configuration of a bound enterprise identity provider to update enterprise application credentials, adjust synchronized departments, or configure custom single sign-on.
     * ### Select the configuration to modify
     * | Identity provider | Updatable content |
     * | --- | --- |
     * | DingTalk (DingTalk), Feishu (Feishu) | Enterprise application credentials metadata, logon switch loginEnabled, directory change synchronization switch syncEnabled, and synchronization scope syncScope. You must submit at least one item. |
     * | Custom identity provider (CustomSSO) | SAML protocol protocol, logon configuration saml, and logon switch loginEnabled. SCIM-based user synchronization is configured separately by using [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * ### Update DingTalk or Feishu
     * metadata is updated by field: submit only the fields that need to be modified. Omitted fields and existing keys remain unchanged. Provided values must be non-empty strings. When you enable directory change synchronization, the configuration must include encryptKey and verificationToken.
     * To adjust synchronized departments:
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query and select departments.
     * **Step 2:** Save syncScope by using this operation. If you omit this field or pass null, the current scope is retained.
     * **Step 3:** Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete, and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to synchronize users based on the new scope.
     * Saving the scope does not automatically trigger a full synchronization. syncEnabled controls subsequent directory change events. The initial synchronization and manual synchronization are executed separately.
     * ### Configure custom single sign-on
     * CustomSSO uses the SAML protocol to allow users to log on through the enterprise identity system. First, call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and configure it in the enterprise identity system. Then, fill in the enterprise-side information in saml.
     * Choose one of the following two methods:
     * | Method | Required configuration |
     * | --- | --- |
     * | Import metadata | metadataXml: a single IdP metadata XML text exported from the enterprise identity provider, with a maximum size of 1 MiB. Enter the XML content instead of a download URL or file path. |
     * | Manual entry | Provide entityId, loginUrl, bindingType, and x509Certificates at the same time. Use an HTTPS logon URL and a valid signing certificate. Set bindingType to HTTP-Redirect or HTTP-POST. You can provide up to two certificates. |
     * The entityId cannot be changed after it is saved. If the XML contains both binding methods, HTTP-POST and its corresponding URL take precedence.
     * After saving the configuration, set loginEnabled=true to enable logon. You can also enable it when submitting a valid SAML configuration. Setting it to false disables logon and retains the existing configuration.
     * ### Confirm that the configuration takes effect
     * After the request is accepted, UPDATING is usually returned. Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. READY indicates that the configuration processing is complete. If it fails, check the returned status and configuration.
     * If the request times out, query the current configuration and processing status first, and then decide whether to retry. Query the SCIM processing result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param tmpReq - UpdateIdentityProviderRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateIdentityProviderResponse
     */
    async updateIdentityProviderWithOptions(workspaceId, identityProviderType, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateIdentityProviderShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateIdentityProvider",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/identity-providers/${$dara.URL.percentEncode(identityProviderType)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateIdentityProviderResponse({}));
    }
    /**
     * Modifies the logon configuration of a bound identity provider in a specified workspace. DingTalk and Feishu support the logon switch, incremental synchronization switch, application configuration, and synchronization scope. CustomSSO supports SAML configuration and the logon switch. Updates take effect asynchronously. Call GetIdentityProvider to query the status.
     *
     * @remarks
     * Modifies the logon or directory configuration of a bound enterprise identity provider to update enterprise application credentials, adjust synchronized departments, or configure custom single sign-on.
     * ### Select the configuration to modify
     * | Identity provider | Updatable content |
     * | --- | --- |
     * | DingTalk (DingTalk), Feishu (Feishu) | Enterprise application credentials metadata, logon switch loginEnabled, directory change synchronization switch syncEnabled, and synchronization scope syncScope. You must submit at least one item. |
     * | Custom identity provider (CustomSSO) | SAML protocol protocol, logon configuration saml, and logon switch loginEnabled. SCIM-based user synchronization is configured separately by using [UpdateIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateIdentityProviderSCIM). |
     * ### Update DingTalk or Feishu
     * metadata is updated by field: submit only the fields that need to be modified. Omitted fields and existing keys remain unchanged. Provided values must be non-empty strings. When you enable directory change synchronization, the configuration must include encryptKey and verificationToken.
     * To adjust synchronized departments:
     * **Step 1:** Call [ListIdentityProviderDepartments](https://api.aliyun.com/document/AgentCore/2026-08-04/ListIdentityProviderDepartments) to query and select departments.
     * **Step 2:** Save syncScope by using this operation. If you omit this field or pass null, the current scope is retained.
     * **Step 3:** Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to wait for the configuration processing to complete, and then call [CreateIdentityProviderSyncJob](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateIdentityProviderSyncJob) to synchronize users based on the new scope.
     * Saving the scope does not automatically trigger a full synchronization. syncEnabled controls subsequent directory change events. The initial synchronization and manual synchronization are executed separately.
     * ### Configure custom single sign-on
     * CustomSSO uses the SAML protocol to allow users to log on through the enterprise identity system. First, call [GetIdentityProviderServiceProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderServiceProvider) to obtain the access information of AgentCore and configure it in the enterprise identity system. Then, fill in the enterprise-side information in saml.
     * Choose one of the following two methods:
     * | Method | Required configuration |
     * | --- | --- |
     * | Import metadata | metadataXml: a single IdP metadata XML text exported from the enterprise identity provider, with a maximum size of 1 MiB. Enter the XML content instead of a download URL or file path. |
     * | Manual entry | Provide entityId, loginUrl, bindingType, and x509Certificates at the same time. Use an HTTPS logon URL and a valid signing certificate. Set bindingType to HTTP-Redirect or HTTP-POST. You can provide up to two certificates. |
     * The entityId cannot be changed after it is saved. If the XML contains both binding methods, HTTP-POST and its corresponding URL take precedence.
     * After saving the configuration, set loginEnabled=true to enable logon. You can also enable it when submitting a valid SAML configuration. Setting it to false disables logon and retains the existing configuration.
     * ### Confirm that the configuration takes effect
     * After the request is accepted, UPDATING is usually returned. Call [GetIdentityProvider](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProvider) to query the progress. READY indicates that the configuration processing is complete. If it fails, check the returned status and configuration.
     * If the request times out, query the current configuration and processing status first, and then decide whether to retry. Query the SCIM processing result by calling [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM).
     *
     * @param request - UpdateIdentityProviderRequest
     * @returns UpdateIdentityProviderResponse
     */
    async updateIdentityProvider(workspaceId, identityProviderType, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
    }
    /**
     * Enables or disables SCIM user synchronization independently. When enabled, an initial full import is executed asynchronously, and the result can be queried by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * Enables or disables SCIM user synchronization for AgentCore. When enabled, all existing users in the shared user pool are fully imported into the workspace. Users in the user pool are provisioned by the enterprise identity system through SCIM.
     * ### Preparations
     * **Step 1:** Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to enable the receiving endpoint and obtain the receiving URL and a valid token.
     * **Step 2:** Complete the SCIM configuration, connection test, and user assignment in the enterprise identity system.
     * **Step 3:** Call this operation and set syncEnabled to true.
     * ```http
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * {"syncEnabled":true}
     * ```
     * When the enabling task is executed, the system checks whether the receiving endpoint is enabled and whether valid credentials exist. If no users are provisioned in the enterprise identity system, the initial import may succeed but contain no user records.
     * ### Impact of disabling
     * Setting syncEnabled to false disables user synchronization and the upstream SCIM receiving endpoint, but retains the imported users, existing credentials, and SAML logon configuration.
     * To re-enable the feature later, call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare the receiving endpoint first, and then enable synchronization.
     * ### Verify the operation result
     * After this operation accepts the request, it executes the enabling or disabling task in the background. Call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the progress:
     * - syncEnabled indicates whether synchronization is expected to be enabled or disabled.
     * - operationStatus indicates the execution result of the most recent operation.
     * - The status field in the query operation comprehensively indicates the current stage of SCIM, such as pending configuration, processing, available, or disabled.
     * If the operation fails, the saved syncEnabled value is not automatically rolled back. Verify the configuration based on the operation result before deciding on subsequent actions.
     *
     * @param tmpReq - UpdateIdentityProviderSCIMRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateIdentityProviderSCIMResponse
     */
    async updateIdentityProviderSCIMWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateIdentityProviderSCIMShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateIdentityProviderSCIM",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/scim-provisioning`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateIdentityProviderSCIMResponse({}));
    }
    /**
     * Enables or disables SCIM user synchronization independently. When enabled, an initial full import is executed asynchronously, and the result can be queried by calling GetIdentityProviderSCIM. The SAML logon configuration is retained.
     *
     * @remarks
     * Enables or disables SCIM user synchronization for AgentCore. When enabled, all existing users in the shared user pool are fully imported into the workspace. Users in the user pool are provisioned by the enterprise identity system through SCIM.
     * ### Preparations
     * **Step 1:** Call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to enable the receiving endpoint and obtain the receiving URL and a valid token.
     * **Step 2:** Complete the SCIM configuration, connection test, and user assignment in the enterprise identity system.
     * **Step 3:** Call this operation and set syncEnabled to true.
     * ```http
     * PUT /workspaces/{workspaceId}/scim-provisioning
     * {"syncEnabled":true}
     * ```
     * When the enabling task is executed, the system checks whether the receiving endpoint is enabled and whether valid credentials exist. If no users are provisioned in the enterprise identity system, the initial import may succeed but contain no user records.
     * ### Impact of disabling
     * Setting syncEnabled to false disables user synchronization and the upstream SCIM receiving endpoint, but retains the imported users, existing credentials, and SAML logon configuration.
     * To re-enable the feature later, call [PrepareIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/PrepareIdentityProviderSCIM) to prepare the receiving endpoint first, and then enable synchronization.
     * ### Verify the operation result
     * After this operation accepts the request, it executes the enabling or disabling task in the background. Call [GetIdentityProviderSCIM](https://api.aliyun.com/document/AgentCore/2026-08-04/GetIdentityProviderSCIM) to query the progress:
     * - syncEnabled indicates whether synchronization is expected to be enabled or disabled.
     * - operationStatus indicates the execution result of the most recent operation.
     * - The status field in the query operation comprehensively indicates the current stage of SCIM, such as pending configuration, processing, available, or disabled.
     * If the operation fails, the saved syncEnabled value is not automatically rolled back. Verify the configuration based on the operation result before deciding on subsequent actions.
     *
     * @param request - UpdateIdentityProviderSCIMRequest
     * @returns UpdateIdentityProviderSCIMResponse
     */
    async updateIdentityProviderSCIM(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateIdentityProviderSCIMWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Updates the model, instructions, skills, and runtime configuration of a managed Harness agent and executes the update asynchronously. Omitted top-level fields retain their original configuration.
     *
     * @remarks
     * Updates the model, instructions, skills, or runtime configuration of a managed Harness agent to adjust the capabilities and runtime behavior of an existing agent.
     * ### Update rules
     * At least one updatable field must be provided. Omitted top-level fields retain their original configuration. You can set description=null to clear the description.
     * | Configuration | Update method |
     * | --- | --- |
     * | harness | The type cannot be changed. When updating the qodercli account binding, keep the original type and submit the corresponding configuration. |
     * | model | Provide a model configuration that matches the current Harness. For qwenpaw, specify the model connection ID and model name. For qodercli, use the available model identifier of the connector. |
     * | runtime | Specify both compute and sessionPolicy when submitting. Omitting the entire object retains the original runtime configuration. |
     * | tools, skills, promptVariables, and subAgents | The corresponding lists are entirely replaced upon submission. You must include the items to be retained. Pass [] to clear the corresponding explicit list. |
     * | environment | The variable list and credential reference list are entirely replaced respectively. Submit the items to be retained together. |
     * | network | Specify both accessInternet.enabled and accessVpc.enabled when submitting. |
     * | ossMounts and agenticFsMounts | Entirely replaced respectively. Pass [] to clear the corresponding list. agenticFsMounts does not accept null. |
     * ### Harness, templates, and skills
     * | Harness | Model and connector configuration |
     * | --- | --- |
     * | qwenpaw | This type is used by default if harness is omitted during creation. Set model.modelConnectionId to the workspace model connection ID, and set model.modelName to the name of the model created under this connection. |
     * | qodercli | The qodercli Connector must be enabled in the workspace. Set model.modelConnectionId to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). model.modelName can be omitted. |
     * harness is an object, such as {"type":"qwenpaw"}. For qodercli, set harness.configuration.connectorServiceAccountKey to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original Service Account Key. This field can be omitted if there is only one key record, but must be specified if there are multiple records. connectorServiceAccountName is the account name. Do not specify these two binding fields for qwenpaw.
     * skills uses the Skill names in the workspace AI Registry. If sourceType=REFERENCE, the version is referenced by versionSelector: use LABEL with a label name, or VERSION with a specific version number. If the selector is omitted, LABEL/latest is used. If sourceType=STATIC, static files bundled with the package are used, and no version selector is provided.
     * For template.aiRegistry, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, instruction, promptVariables, and subAgents are derived from the template, and the corresponding fields in the current request do not take effect. Explicit Skills and template Skills are recorded separately. You can query the target and effective versions through configuredSkills and skills.
     * ### Elasticity and instances
     * If runtime is committed but hpa or some of its fields are omitted, the following default values are used for unspecified items. To retain the existing elastic policy, commit the complete hpa together.
     * | Field | Default value | Value and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time for a session, in seconds. Valid values: 60 to 86400. |
     * If you only modify instructions, models, or skills, you can omit the entire runtime object, and the original runtime configuration remains unchanged. The minimum and maximum numbers of instances are configuration borders. You can query the actual number through sandboxPhaseCounts.
     * ### Environment and mounts
     * Omitting the entire environment object retains the original configuration. Submitting environment={} or environment=null clears the environment configuration. Environment variable values must be strings, and variable names must be non-empty and unique.
     * The total number of ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path in the container, such as /data/train. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. For an AgenticFS mount, server is the AccessPoint domain name, without a protocol, port, or path. path is an existing non-empty relative directory in the AccessPoint. You cannot mount the root directory of the AccessPoint. If readOnly is omitted, the default value is false.
     * ### Query update results
     * A successful response indicates that the update request has been accepted. Call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query latestSpecVersion, latestVersionStatus, status, and sandboxPhaseCounts to confirm the configuration processing and instance status. clientToken does not provide idempotency guarantees at this time.
     *
     * @param tmpReq - UpdateManagedAgentRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateManagedAgentResponse
     */
    async updateManagedAgentWithOptions(workspaceId, agentId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateManagedAgentShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateManagedAgent",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/managed-agents/${$dara.URL.percentEncode(agentId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateManagedAgentResponse({}));
    }
    /**
     * Updates the model, instructions, skills, and runtime configuration of a managed Harness agent and executes the update asynchronously. Omitted top-level fields retain their original configuration.
     *
     * @remarks
     * Updates the model, instructions, skills, or runtime configuration of a managed Harness agent to adjust the capabilities and runtime behavior of an existing agent.
     * ### Update rules
     * At least one updatable field must be provided. Omitted top-level fields retain their original configuration. You can set description=null to clear the description.
     * | Configuration | Update method |
     * | --- | --- |
     * | harness | The type cannot be changed. When updating the qodercli account binding, keep the original type and submit the corresponding configuration. |
     * | model | Provide a model configuration that matches the current Harness. For qwenpaw, specify the model connection ID and model name. For qodercli, use the available model identifier of the connector. |
     * | runtime | Specify both compute and sessionPolicy when submitting. Omitting the entire object retains the original runtime configuration. |
     * | tools, skills, promptVariables, and subAgents | The corresponding lists are entirely replaced upon submission. You must include the items to be retained. Pass [] to clear the corresponding explicit list. |
     * | environment | The variable list and credential reference list are entirely replaced respectively. Submit the items to be retained together. |
     * | network | Specify both accessInternet.enabled and accessVpc.enabled when submitting. |
     * | ossMounts and agenticFsMounts | Entirely replaced respectively. Pass [] to clear the corresponding list. agenticFsMounts does not accept null. |
     * ### Harness, templates, and skills
     * | Harness | Model and connector configuration |
     * | --- | --- |
     * | qwenpaw | This type is used by default if harness is omitted during creation. Set model.modelConnectionId to the workspace model connection ID, and set model.modelName to the name of the model created under this connection. |
     * | qodercli | The qodercli Connector must be enabled in the workspace. Set model.modelConnectionId to the model identifier returned by [ListConnectorModels](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectorModels). model.modelName can be omitted. |
     * harness is an object, such as {"type":"qwenpaw"}. For qodercli, set harness.configuration.connectorServiceAccountKey to the account key record ID returned by [ListConnectors](https://api.aliyun.com/document/AgentCore/2026-08-04/ListConnectors), not the original Service Account Key. This field can be omitted if there is only one key record, but must be specified if there are multiple records. connectorServiceAccountName is the account name. Do not specify these two binding fields for qwenpaw.
     * skills uses the Skill names in the workspace AI Registry. If sourceType=REFERENCE, the version is referenced by versionSelector: use LABEL with a label name, or VERSION with a specific version number. If the selector is omitted, LABEL/latest is used. If sourceType=STATIC, static files bundled with the package are used, and no version selector is provided.
     * For template.aiRegistry, specify the agent template name and an optional version. If the version is omitted during creation, the published version is resolved and fixed. When a template is used, instruction, promptVariables, and subAgents are derived from the template, and the corresponding fields in the current request do not take effect. Explicit Skills and template Skills are recorded separately. You can query the target and effective versions through configuredSkills and skills.
     * ### Elasticity and instances
     * If runtime is committed but hpa or some of its fields are omitted, the following default values are used for unspecified items. To retain the existing elastic policy, commit the complete hpa together.
     * | Field | Default value | Value and description |
     * | --- | --- | --- |
     * | enabled | false | Specifies whether to enable elastic scaling. |
     * | minSandboxCount | 1 | The minimum number of instances. Valid values: 0 to 100. |
     * | maxSandboxCount | 10 | The maximum number of instances. Valid values: 0 to 100. The value cannot be less than the minimum number. |
     * | maxConcurrentSessionsPerSandbox | 20 | The maximum number of concurrent sessions per instance. Valid values: 1 to 20. |
     * | sessionTtlSeconds | 600 | The maximum idle time for a session, in seconds. Valid values: 60 to 86400. |
     * If you only modify instructions, models, or skills, you can omit the entire runtime object, and the original runtime configuration remains unchanged. The minimum and maximum numbers of instances are configuration borders. You can query the actual number through sandboxPhaseCounts.
     * ### Environment and mounts
     * Omitting the entire environment object retains the original configuration. Submitting environment={} or environment=null clears the environment configuration. Environment variable values must be strings, and variable names must be non-empty and unique.
     * The total number of ossMounts and agenticFsMounts cannot exceed 10. The mount target mountPath uses an absolute path in the container, such as /data/train. It cannot conflict with platform reserved directories, and cannot be duplicated or form parent-child directory overwrites.
     * The path for an OSS mount must be a non-empty directory prefix in the bucket. For an AgenticFS mount, server is the AccessPoint domain name, without a protocol, port, or path. path is an existing non-empty relative directory in the AccessPoint. You cannot mount the root directory of the AccessPoint. If readOnly is omitted, the default value is false.
     * ### Query update results
     * A successful response indicates that the update request has been accepted. Call [GetManagedAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/GetManagedAgent) to query latestSpecVersion, latestVersionStatus, status, and sandboxPhaseCounts to confirm the configuration processing and instance status. clientToken does not provide idempotency guarantees at this time.
     *
     * @param request - UpdateManagedAgentRequest
     * @returns UpdateManagedAgentResponse
     */
    async updateManagedAgent(workspaceId, agentId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
    }
    /**
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @remarks
     * Updates the address, description, authentication, or Swagger configuration of an MCP service. The service type and protocol cannot be modified after creation.
     * The update process is executed asynchronously. After submission, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the processing result. The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query the current configuration and status first.
     *
     * @param tmpReq - UpdateMcpRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMcpResponse
     */
    async updateMcpWithOptions(workspaceId, mcpServerId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateMcpShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMcp",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMcpResponse({}));
    }
    /**
     * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update process is asynchronous.
     *
     * @remarks
     * Updates the address, description, authentication, or Swagger configuration of an MCP service. The service type and protocol cannot be modified after creation.
     * The update process is executed asynchronously. After submission, call [GetMcp](https://api.aliyun.com/document/AgentCore/2026-08-04/GetMcp) to query the processing result. The `clientToken` parameter does not currently provide idempotency guarantees. If the request result is not confirmed, query the current configuration and status first.
     *
     * @param request - UpdateMcpRequest
     * @returns UpdateMcpResponse
     */
    async updateMcp(workspaceId, mcpServerId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateMcpWithOptions(workspaceId, mcpServerId, request, headers, runtime);
    }
    /**
     * Updates MCP parameters based on a template.
     *
     * @remarks
     * Updates parameters based on the marketplace template bound to the MCP service to adjust the configuration of the templated service.
     * Updates the parameters exposed by the schema using the same template version bound during MCP creation, without upgrading the template version.
     *
     * @param tmpReq - UpdateMcpTemplateConfigRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMcpTemplateConfigResponse
     */
    async updateMcpTemplateConfigWithOptions(workspaceId, mcpServerId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateMcpTemplateConfigShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        if (!$dara.isNull(request.templateVersion)) {
            query["templateVersion"] = request.templateVersion;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMcpTemplateConfig",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}/template-config`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMcpTemplateConfigResponse({}));
    }
    /**
     * Updates MCP parameters based on a template.
     *
     * @remarks
     * Updates parameters based on the marketplace template bound to the MCP service to adjust the configuration of the templated service.
     * Updates the parameters exposed by the schema using the same template version bound during MCP creation, without upgrading the template version.
     *
     * @param request - UpdateMcpTemplateConfigRequest
     * @returns UpdateMcpTemplateConfigResponse
     */
    async updateMcpTemplateConfig(workspaceId, mcpServerId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateMcpTemplateConfigWithOptions(workspaceId, mcpServerId, request, headers, runtime);
    }
    /**
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @remarks
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @param tmpReq - UpdateMemoryRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMemoryResponse
     */
    async updateMemoryWithOptions(workspaceId, memoryStoreName, memoryId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateMemoryShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMemory",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}/memories/${$dara.URL.percentEncode(memoryId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
    }
    /**
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @remarks
     * Updates the long-term memory text or metadata based on the memory ID.
     *
     * @param request - UpdateMemoryRequest
     * @returns UpdateMemoryResponse
     */
    async updateMemory(workspaceId, memoryStoreName, memoryId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
    }
    /**
     * Updates a memory store.
     *
     * @remarks
     * Updates the mutable configurations of a long-term memory store to adjust the settings of an existing memory store.
     *
     * @param tmpReq - UpdateMemoryStoreRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateMemoryStoreResponse
     */
    async updateMemoryStoreWithOptions(workspaceId, memoryStoreName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateMemoryStoreShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateMemoryStore",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/memorystores/${$dara.URL.percentEncode(memoryStoreName)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateMemoryStoreResponse({}));
    }
    /**
     * Updates a memory store.
     *
     * @remarks
     * Updates the mutable configurations of a long-term memory store to adjust the settings of an existing memory store.
     *
     * @param request - UpdateMemoryStoreRequest
     * @returns UpdateMemoryStoreResponse
     */
    async updateMemoryStore(workspaceId, memoryStoreName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
    }
    /**
     * Updates the description, context token limit, maximum output token count, or capability configuration of a specified model.
     *
     * @remarks
     * Updates the description, context length, maximum output length, or capability configuration of a model.
     * ### Update rules
     * - Provide at least one non-null field among description, contextSize, maxTokens, and capabilities.
     * - Omitted fields or fields passed as null retain their original values.
     * - The capabilities object is replaced as a whole. Unsubmitted capabilities within the object are treated as false.
     * ### Impact on agents
     * After contextSize, maxTokens, or capabilities actually change, the platform asynchronously refreshes the managed Harness agents that reference this model, as well as the managed agents that use platform models (modelSource=PLATFORM). Modifying only the description or repeatedly submitting the same configuration does not trigger a refresh.
     * A successful response indicates that the model configuration has been saved. Verify the configuration by calling [GetModel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetModel), and then check whether the configuration takes effect by calling the corresponding agent details API operation.
     *
     * @param tmpReq - UpdateModelRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateModelResponse
     */
    async updateModelWithOptions(workspaceId, modelId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateModelShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateModel",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/models/${$dara.URL.percentEncode(modelId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateModelResponse({}));
    }
    /**
     * Updates the description, context token limit, maximum output token count, or capability configuration of a specified model.
     *
     * @remarks
     * Updates the description, context length, maximum output length, or capability configuration of a model.
     * ### Update rules
     * - Provide at least one non-null field among description, contextSize, maxTokens, and capabilities.
     * - Omitted fields or fields passed as null retain their original values.
     * - The capabilities object is replaced as a whole. Unsubmitted capabilities within the object are treated as false.
     * ### Impact on agents
     * After contextSize, maxTokens, or capabilities actually change, the platform asynchronously refreshes the managed Harness agents that reference this model, as well as the managed agents that use platform models (modelSource=PLATFORM). Modifying only the description or repeatedly submitting the same configuration does not trigger a refresh.
     * A successful response indicates that the model configuration has been saved. Verify the configuration by calling [GetModel](https://api.aliyun.com/document/AgentCore/2026-08-04/GetModel), and then check whether the configuration takes effect by calling the corresponding agent details API operation.
     *
     * @param request - UpdateModelRequest
     * @returns UpdateModelResponse
     */
    async updateModel(workspaceId, modelId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateModelWithOptions(workspaceId, modelId, request, headers, runtime);
    }
    /**
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @remarks
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @param tmpReq - UpdateModelConnectionRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateModelConnectionResponse
     */
    async updateModelConnectionWithOptions(workspaceId, connectionId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateModelConnectionShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateModelConnection",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/model-connections/${$dara.URL.percentEncode(connectionId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateModelConnectionResponse({}));
    }
    /**
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @remarks
     * Updates the mutable configurations of a specified model connection and resubmits the publishing task. The invocation protocol cannot be modified after creation.
     *
     * @param request - UpdateModelConnectionRequest
     * @returns UpdateModelConnectionResponse
     */
    async updateModelConnection(workspaceId, connectionId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
    }
    /**
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @remarks
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @param tmpReq - UpdateSkillBizTagsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillBizTagsResponse
     */
    async updateSkillBizTagsWithOptions(workspaceId, skillName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateSkillBizTagsShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateSkillBizTags",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/biz-tags`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateSkillBizTagsResponse({}));
    }
    /**
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @remarks
     * Updates the business tags of a specified skill. Other attributes that are not specified remain unchanged.
     *
     * @param request - UpdateSkillBizTagsRequest
     * @returns UpdateSkillBizTagsResponse
     */
    async updateSkillBizTags(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateSkillBizTagsWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Updates the version labels and their mappings for a specified skill.
     *
     * @remarks
     * Updates the version labels and their mappings for a specified skill.
     *
     * @param tmpReq - UpdateSkillLabelsRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillLabelsResponse
     */
    async updateSkillLabelsWithOptions(workspaceId, skillName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateSkillLabelsShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateSkillLabels",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/labels`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateSkillLabelsResponse({}));
    }
    /**
     * Updates the version labels and their mappings for a specified skill.
     *
     * @remarks
     * Updates the version labels and their mappings for a specified skill.
     *
     * @param request - UpdateSkillLabelsRequest
     * @returns UpdateSkillLabelsResponse
     */
    async updateSkillLabels(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateSkillLabelsWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Updates the visibility scope of a specified skill.
     *
     * @remarks
     * Updates the visibility scope of a specified skill.
     *
     * @param tmpReq - UpdateSkillScopeRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateSkillScopeResponse
     */
    async updateSkillScopeWithOptions(workspaceId, skillName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateSkillScopeShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateSkillScope",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skills/${$dara.URL.percentEncode(skillName)}/scope`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateSkillScopeResponse({}));
    }
    /**
     * Updates the visibility scope of a specified skill.
     *
     * @remarks
     * Updates the visibility scope of a specified skill.
     *
     * @param request - UpdateSkillScopeRequest
     * @returns UpdateSkillScopeResponse
     */
    async updateSkillScope(workspaceId, skillName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateSkillScopeWithOptions(workspaceId, skillName, request, headers, runtime);
    }
    /**
     * Updates the description and members of a specified team. When users or agents are provided, the corresponding member lists are replaced based on full overwrite semantics. Member lists that are not provided remain unchanged. The team name cannot be modified after creation.
     *
     * @remarks
     * Updates the description and members of a specified team.
     *
     * @param tmpReq - UpdateTeamRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateTeamResponse
     */
    async updateTeamWithOptions(workspaceId, teamId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateTeamShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateTeam",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/teams/${$dara.URL.percentEncode(teamId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateTeamResponse({}));
    }
    /**
     * Updates the description and members of a specified team. When users or agents are provided, the corresponding member lists are replaced based on full overwrite semantics. Member lists that are not provided remain unchanged. The team name cannot be modified after creation.
     *
     * @remarks
     * Updates the description and members of a specified team.
     *
     * @param request - UpdateTeamRequest
     * @returns UpdateTeamResponse
     */
    async updateTeam(workspaceId, teamId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateTeamWithOptions(workspaceId, teamId, request, headers, runtime);
    }
    /**
     * Updates the display name, email address, or note of a specified user. At least one of displayName, email, and note must be specified. Unspecified properties remain unchanged. The username cannot be modified after creation.
     *
     * @remarks
     * Updates the display name, email address, or note of a specified user.
     *
     * @param tmpReq - UpdateUserRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateUserResponse
     */
    async updateUserWithOptions(workspaceId, agentCoreUserId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateUserShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateUser",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/users/${$dara.URL.percentEncode(agentCoreUserId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
    }
    /**
     * Updates the display name, email address, or note of a specified user. At least one of displayName, email, and note must be specified. Unspecified properties remain unchanged. The username cannot be modified after creation.
     *
     * @remarks
     * Updates the display name, email address, or note of a specified user.
     *
     * @param request - UpdateUserRequest
     * @returns UpdateUserResponse
     */
    async updateUser(workspaceId, agentCoreUserId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
    }
    /**
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this operation.
     *
     * @remarks
     * Modifies the name or network configuration of a workspace to adjust workspace information and the private network access environment for agents.
     * The workspace must be in the `Initialized` state. To enable VPC networking, set `Enabled` in the network configuration to `true`, and provide both `VpcId` and at least one `VSwitchIds`.
     *
     * @param tmpReq - UpdateWorkspaceRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UpdateWorkspaceResponse
     */
    async updateWorkspaceWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UpdateWorkspaceShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let query = {};
        if (!$dara.isNull(request.clientToken)) {
            query["clientToken"] = request.clientToken;
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UpdateWorkspace",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}`,
            method: "PUT",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
    }
    /**
     * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this operation.
     *
     * @remarks
     * Modifies the name or network configuration of a workspace to adjust workspace information and the private network access environment for agents.
     * The workspace must be in the `Initialized` state. To enable VPC networking, set `Enabled` in the network configuration to `true`, and provide both `VpcId` and at least one `VSwitchIds`.
     *
     * @param request - UpdateWorkspaceRequest
     * @returns UpdateWorkspaceResponse
     */
    async updateWorkspace(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.updateWorkspaceWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
     *
     * @remarks
     * Retrieves an uploaded agent template ZIP package from OSS, parses the package, and imports the agent template into the current workspace.
     *
     * @param tmpReq - UploadAgentSpecViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadAgentSpecViaOssResponse
     */
    async uploadAgentSpecViaOssWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UploadAgentSpecViaOssShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadAgentSpecViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-spec-actions/upload-via-oss`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadAgentSpecViaOssResponse({}));
    }
    /**
     * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
     *
     * @remarks
     * Retrieves an uploaded agent template ZIP package from OSS, parses the package, and imports the agent template into the current workspace.
     *
     * @param request - UploadAgentSpecViaOssRequest
     * @returns UploadAgentSpecViaOssResponse
     */
    async uploadAgentSpecViaOss(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.uploadAgentSpecViaOssWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @remarks
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @param tmpReq - UploadSkillViaOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns UploadSkillViaOssResponse
     */
    async uploadSkillViaOssWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.UploadSkillViaOssShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "UploadSkillViaOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/skill-actions/upload-via-oss`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.UploadSkillViaOssResponse({}));
    }
    /**
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @remarks
     * Imports a skill into the current workspace by retrieving and parsing an uploaded skill ZIP package from OSS.
     *
     * @param request - UploadSkillViaOssRequest
     * @returns UploadSkillViaOssResponse
     */
    async uploadSkillViaOss(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.uploadSkillViaOssWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Validates the read conditions of the workspace role for a specified OSS code package object and returns the source URI and package information.
     *
     * @remarks
     * Checks the read conditions and package information of a specified OSS object before submitting the code package for deployment, and obtains the source URI for subsequent deployment.
     * ### Request and validation scope
     * In the JSON request body, specify `ossBucketName` and the complete `ossObjectName`. Do not specify the HTTPS download URL. The object extension must be ZIP or TAR.GZ, and the compressed size must be between 1 and 500,000,000 bytes.
     * This operation uses the workspace role to check the object metadata and read permissions, and returns the `sourceUri`, file name, size, and format.
     * ### Subsequent deployment
     * Passing the validation indicates that the object check is successful, but does not mean that the archive content is complete or ready to start. Submit the returned `sourceUri` to [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The system will recheck and save a fixed copy upon submission.
     * This operation is an optional precheck and is not a required step for creation or update.
     *
     * @param tmpReq - ValidateAgentCodePackageFromOssRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ValidateAgentCodePackageFromOssResponse
     */
    async validateAgentCodePackageFromOssWithOptions(workspaceId, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.ValidateAgentCodePackageFromOssShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "ValidateAgentCodePackageFromOss",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-code-packages/validate-from-oss`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ValidateAgentCodePackageFromOssResponse({}));
    }
    /**
     * Validates the read conditions of the workspace role for a specified OSS code package object and returns the source URI and package information.
     *
     * @remarks
     * Checks the read conditions and package information of a specified OSS object before submitting the code package for deployment, and obtains the source URI for subsequent deployment.
     * ### Request and validation scope
     * In the JSON request body, specify `ossBucketName` and the complete `ossObjectName`. Do not specify the HTTPS download URL. The object extension must be ZIP or TAR.GZ, and the compressed size must be between 1 and 500,000,000 bytes.
     * This operation uses the workspace role to check the object metadata and read permissions, and returns the `sourceUri`, file name, size, and format.
     * ### Subsequent deployment
     * Passing the validation indicates that the object check is successful, but does not mean that the archive content is complete or ready to start. Submit the returned `sourceUri` to [CreateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/CreateCustomAgent) or [UpdateCustomAgent](https://api.aliyun.com/document/AgentCore/2026-08-04/UpdateCustomAgent). The system will recheck and save a fixed copy upon submission.
     * This operation is an optional precheck and is not a required step for creation or update.
     *
     * @param request - ValidateAgentCodePackageFromOssRequest
     * @returns ValidateAgentCodePackageFromOssResponse
     */
    async validateAgentCodePackageFromOss(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.validateAgentCodePackageFromOssWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries the binding status of the authorization policy for the code package source bucket to the current workspace resource role.
     *
     * @remarks
     * Queries whether the read authorization for the code package source bucket is bound to the workspace resource role to determine whether supplementary authorization is required.
     * ### Query results
     * `ossBucketName` is passed as a query parameter. `authorizationStatus=AUTHORIZED` indicates that the policy is bound, and `UNAUTHORIZED` indicates that it is not bound.
     * A bound policy does not mean that a specific code package object definitely exists or is readable. To check the object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss). To obtain the authorization link, call [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl).
     *
     * @param request - VerifyAgentCodePackageOssRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyAgentCodePackageOssRamAuthorizationResponse
     */
    async verifyAgentCodePackageOssRamAuthorizationWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.ossBucketName)) {
            query["ossBucketName"] = request.ossBucketName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyAgentCodePackageOssRamAuthorization",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agent-code-packages/oss/authorize/verify`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyAgentCodePackageOssRamAuthorizationResponse({}));
    }
    /**
     * Queries the binding status of the authorization policy for the code package source bucket to the current workspace resource role.
     *
     * @remarks
     * Queries whether the read authorization for the code package source bucket is bound to the workspace resource role to determine whether supplementary authorization is required.
     * ### Query results
     * `ossBucketName` is passed as a query parameter. `authorizationStatus=AUTHORIZED` indicates that the policy is bound, and `UNAUTHORIZED` indicates that it is not bound.
     * A bound policy does not mean that a specific code package object definitely exists or is readable. To check the object, call [ValidateAgentCodePackageFromOss](https://api.aliyun.com/document/AgentCore/2026-08-04/ValidateAgentCodePackageFromOss). To obtain the authorization link, call [GetAgentCodePackageOssRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetAgentCodePackageOssRamAuthorizeUrl).
     *
     * @param request - VerifyAgentCodePackageOssRamAuthorizationRequest
     * @returns VerifyAgentCodePackageOssRamAuthorizationResponse
     */
    async verifyAgentCodePackageOssRamAuthorization(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.verifyAgentCodePackageOssRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Verifies whether one or more Qoder service account keys are available at a specified site. This operation does not save the keys or modify the connector status.
     *
     * @remarks
     * Verifies Qoder service account keys for a specified site to check whether the credentials are available before enabling or updating a connector. You can submit multiple keys at the same time. The response returns a list of invalid service account keys.
     *
     * @param tmpReq - VerifyConnectorRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyConnectorResponse
     */
    async verifyConnectorWithOptions(workspaceId, connectorName, tmpReq, headers, runtime) {
        tmpReq.validate();
        let request = new $_model.VerifyConnectorShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.body)) {
            request.bodyShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
        }
        let body = {};
        if (!$dara.isNull(request.bodyShrink)) {
            body["body"] = request.bodyShrink;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            body: openapi_core_2.OpenApiUtil.parseToMap(body),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyConnector",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/connectors/${$dara.URL.percentEncode(connectorName)}/actions/verify`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "formData",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyConnectorResponse({}));
    }
    /**
     * Verifies whether one or more Qoder service account keys are available at a specified site. This operation does not save the keys or modify the connector status.
     *
     * @remarks
     * Verifies Qoder service account keys for a specified site to check whether the credentials are available before enabling or updating a connector. You can submit multiple keys at the same time. The response returns a list of invalid service account keys.
     *
     * @param request - VerifyConnectorRequest
     * @returns VerifyConnectorResponse
     */
    async verifyConnector(workspaceId, connectorName, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.verifyConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
    }
    /**
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition image repository to determine whether to proceed with image preparation or grant additional authorizations.
     * ### Request parameters
     * `acrInstanceId`, `namespace`, and `repository` use query parameters and must be consistent with the targets used when obtaining the authorization URL.
     * ### Authorization and deployment
     * `authorizationStatus=AUTHORIZED` indicates that the target authorization for the selected role is satisfied, and `UNAUTHORIZED` indicates that it is not yet satisfied. If authorization is required, call [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl) and confirm on the RAM page.
     * The authorization status is checked separately from whether the specific image tag exists and whether the pull network is reachable.
     *
     * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceAcrRamAuthorizationResponse
     */
    async verifyWorkspaceAcrRamAuthorizationWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.acrInstanceId)) {
            query["acrInstanceId"] = request.acrInstanceId;
        }
        if (!$dara.isNull(request.namespace)) {
            query["namespace"] = request.namespace;
        }
        if (!$dara.isNull(request.repository)) {
            query["repository"] = request.repository;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyWorkspaceAcrRamAuthorization",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/acr/authorize/verify`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceAcrRamAuthorizationResponse({}));
    }
    /**
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition repository.
     *
     * @remarks
     * Queries the authorization status of a workspace resource role for a specified ACR Enterprise Edition image repository to determine whether to proceed with image preparation or grant additional authorizations.
     * ### Request parameters
     * `acrInstanceId`, `namespace`, and `repository` use query parameters and must be consistent with the targets used when obtaining the authorization URL.
     * ### Authorization and deployment
     * `authorizationStatus=AUTHORIZED` indicates that the target authorization for the selected role is satisfied, and `UNAUTHORIZED` indicates that it is not yet satisfied. If authorization is required, call [GetWorkspaceAcrRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAcrRamAuthorizeUrl) and confirm on the RAM page.
     * The authorization status is checked separately from whether the specific image tag exists and whether the pull network is reachable.
     *
     * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
     * @returns VerifyWorkspaceAcrRamAuthorizationResponse
     */
    async verifyWorkspaceAcrRamAuthorization(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.verifyWorkspaceAcrRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Queries whether the workspace resource role has been granted access to the specified NAS (AgenticFS) access point for subsequent Agent mount configurations.
     *
     * @remarks
     * Checks whether the workspace has been granted access to the specified AgenticFS access point for subsequent Agent file mount configurations.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of File Storage NAS designed for AI agents. Access points provide mount entries for file spaces.
     * ### Query and what to do next
     * For the `server` query parameter, specify the access point domain name without the protocol, port, or path. Keep it consistent with the value used when obtaining the authorization link.
     * | `authorizationStatus` | What to do next |
     * | --- | --- |
     * | `AUTHORIZED` | Authorization is complete. You can continue to configure `agenticFsMounts` for the agent. |
     * | `UNAUTHORIZED` | Obtain the link through [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl), complete the authorization, and then query again. |
     * After authorization is complete, you must still commit the mount configuration in the agent and check the configuration processing result through the agent details. The mount folder must already exist, the access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent.
     *
     * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
     */
    async verifyWorkspaceAgenticFsMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.server)) {
            query["server"] = request.server;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyWorkspaceAgenticFsMountRamAuthorization",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/agentic-fs/authorize/verify`,
            method: "GET",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse({}));
    }
    /**
     * Queries whether the workspace resource role has been granted access to the specified NAS (AgenticFS) access point for subsequent Agent mount configurations.
     *
     * @remarks
     * Checks whether the workspace has been granted access to the specified AgenticFS access point for subsequent Agent file mount configurations.
     * [AgenticFS](https://www.alibabacloud.com/help/en/nas/product-overview/agenticfs-overview) is a storage type of File Storage NAS designed for AI agents. Access points provide mount entries for file spaces.
     * ### Query and what to do next
     * For the `server` query parameter, specify the access point domain name without the protocol, port, or path. Keep it consistent with the value used when obtaining the authorization link.
     * | `authorizationStatus` | What to do next |
     * | --- | --- |
     * | `AUTHORIZED` | Authorization is complete. You can continue to configure `agenticFsMounts` for the agent. |
     * | `UNAUTHORIZED` | Obtain the link through [GetWorkspaceAgenticFsMountRamAuthorizeUrl](https://api.aliyun.com/document/AgentCore/2026-08-04/GetWorkspaceAgenticFsMountRamAuthorizeUrl), complete the authorization, and then query again. |
     * After authorization is complete, you must still commit the mount configuration in the agent and check the configuration processing result through the agent details. The mount folder must already exist, the access point must be located in the VPC associated with the workspace, and VPC access must be enabled for the agent.
     *
     * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
     * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
     */
    async verifyWorkspaceAgenticFsMountRamAuthorization(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.verifyWorkspaceAgenticFsMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
    }
    /**
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     *
     * @remarks
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     * ### Two query scopes
     * | Query parameter `bucketName` | Behavior |
     * | --- | --- |
     * | Bucket name provided | Checks the mount authorization of the bucket for the workspace resource role without modifying the default OSS binding. |
     * | Omitted | Checks the authorization of the default private OSS storage for the workspace and updates its authorization status. |
     * ### Return statuses
     * `AUTHORIZED` indicates that authorization is granted, `UNAUTHORIZED` indicates that authorization is not granted, and `NOT_REQUIRED` indicates that authorization is not required. The authorization status does not indicate whether a specific mount directory exists or an instance has completed the mount.
     * If the goal is to read from a code package source, use [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization). Do not mix code package verification with runtime directory mounting.
     *
     * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
     * @param headers - map
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
     */
    async verifyWorkspaceOssMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime) {
        request.validate();
        let query = {};
        if (!$dara.isNull(request.bucketName)) {
            query["bucketName"] = request.bucketName;
        }
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            headers: headers,
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
            action: "VerifyWorkspaceOssMountRamAuthorization",
            version: "2026-08-04",
            protocol: "HTTPS",
            pathname: `/workspaces/${$dara.URL.percentEncode(workspaceId)}/oss-mount/authorize/verify`,
            method: "POST",
            authType: "AK",
            style: "ROA",
            reqBodyType: "json",
            bodyType: "json",
        });
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceOssMountRamAuthorizationResponse({}));
    }
    /**
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     *
     * @remarks
     * Verifies the OSS mount authorization for a workspace, or checks and updates the authorization status of the default OSS storage for the workspace.
     * ### Two query scopes
     * | Query parameter `bucketName` | Behavior |
     * | --- | --- |
     * | Bucket name provided | Checks the mount authorization of the bucket for the workspace resource role without modifying the default OSS binding. |
     * | Omitted | Checks the authorization of the default private OSS storage for the workspace and updates its authorization status. |
     * ### Return statuses
     * `AUTHORIZED` indicates that authorization is granted, `UNAUTHORIZED` indicates that authorization is not granted, and `NOT_REQUIRED` indicates that authorization is not required. The authorization status does not indicate whether a specific mount directory exists or an instance has completed the mount.
     * If the goal is to read from a code package source, use [VerifyAgentCodePackageOssRamAuthorization](https://api.aliyun.com/document/AgentCore/2026-08-04/VerifyAgentCodePackageOssRamAuthorization). Do not mix code package verification with runtime directory mounting.
     *
     * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
     * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
     */
    async verifyWorkspaceOssMountRamAuthorization(workspaceId, request) {
        let runtime = new $dara.RuntimeOptions({});
        let headers = {};
        return await this.verifyWorkspaceOssMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map