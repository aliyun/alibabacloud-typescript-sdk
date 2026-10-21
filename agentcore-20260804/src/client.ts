// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("agentcore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId that can be queried by using GetMemoryTask.
   * 
   * @remarks
   * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId that can be queried by using GetMemoryTask.
   * 
   * @param tmpReq - AddMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemoriesResponse
   */
  async addMemoriesWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.AddMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemoriesResponse> {
    tmpReq.validate();
    let request = new $_model.AddMemoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.AddMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.AddMemoriesResponse({}));
  }

  /**
   * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId that can be queried by using GetMemoryTask.
   * 
   * @remarks
   * Writes messages or text to a memory store. By default, sync is set to true, which synchronously waits for extraction and returns only memories (an empty array is allowed). If sync is set to false, the operation returns only a taskId that can be queried by using GetMemoryTask.
   * 
   * @param request - AddMemoriesRequest
   * @returns AddMemoriesResponse
   */
  async addMemories(workspaceId: string, memoryStoreName: string, request: $_model.AddMemoriesRequest): Promise<$_model.AddMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
   * 
   * @param tmpReq - BatchDeleteModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteModelsResponse
   */
  async batchDeleteModelsWithOptions(workspaceId: string, tmpReq: $_model.BatchDeleteModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteModelsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteModelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.BatchDeleteModelsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteModelsResponse({}));
  }

  /**
   * Deletes multiple models in a specified workspace. If any model is in use, the entire batch request fails.
   * 
   * @param request - BatchDeleteModelsRequest
   * @returns BatchDeleteModelsResponse
   */
  async batchDeleteModels(workspaceId: string, request: $_model.BatchDeleteModelsRequest): Promise<$_model.BatchDeleteModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteModelsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
   * 
   * @remarks
   * ## Request description
   * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
   * 
   * @param tmpReq - BatchUploadSkillsViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUploadSkillsViaOssResponse
   */
  async batchUploadSkillsViaOssWithOptions(workspaceId: string, tmpReq: $_model.BatchUploadSkillsViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUploadSkillsViaOssResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUploadSkillsViaOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.BatchUploadSkillsViaOssResponse>(await this.callApi(params, req, runtime), new $_model.BatchUploadSkillsViaOssResponse({}));
  }

  /**
   * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
   * 
   * @remarks
   * ## Request description
   * Uploads skill ZIP packages in batches through OSS and returns the processing result for each skill.
   * 
   * @param request - BatchUploadSkillsViaOssRequest
   * @returns BatchUploadSkillsViaOssResponse
   */
  async batchUploadSkillsViaOss(workspaceId: string, request: $_model.BatchUploadSkillsViaOssRequest): Promise<$_model.BatchUploadSkillsViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUploadSkillsViaOssWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Converts an MCP to free-edit mode.
   * 
   * @remarks
   * Disables template usage constraints. After the conversion, the MCP retains its source and tags, but no longer appears on the usage page.
   * 
   * @param request - ConvertMcpToFreeEditRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertMcpToFreeEditResponse
   */
  async convertMcpToFreeEditWithOptions(workspaceId: string, mcpServerId: string, request: $_model.ConvertMcpToFreeEditRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertMcpToFreeEditResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ConvertMcpToFreeEditResponse>(await this.callApi(params, req, runtime), new $_model.ConvertMcpToFreeEditResponse({}));
  }

  /**
   * Converts an MCP to free-edit mode.
   * 
   * @remarks
   * Disables template usage constraints. After the conversion, the MCP retains its source and tags, but no longer appears on the usage page.
   * 
   * @param request - ConvertMcpToFreeEditRequest
   * @returns ConvertMcpToFreeEditResponse
   */
  async convertMcpToFreeEdit(workspaceId: string, mcpServerId: string, request: $_model.ConvertMcpToFreeEditRequest): Promise<$_model.ConvertMcpToFreeEditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertMcpToFreeEditWithOptions(workspaceId, mcpServerId, request, headers, runtime);
  }

  /**
   * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
   * 
   * @remarks
   * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
   * 
   * @param tmpReq - CreateAgentIMChannelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentIMChannelResponse
   */
  async createAgentIMChannelWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.CreateAgentIMChannelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentIMChannelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentIMChannelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateAgentIMChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentIMChannelResponse({}));
  }

  /**
   * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
   * 
   * @remarks
   * Creates an IM channel for a specified agent and binds it to a publicly accessible ServiceEndpoint.
   * 
   * @param request - CreateAgentIMChannelRequest
   * @returns CreateAgentIMChannelResponse
   */
  async createAgentIMChannel(workspaceId: string, agentId: string, request: $_model.CreateAgentIMChannelRequest): Promise<$_model.CreateAgentIMChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentIMChannelWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @remarks
   * ## Request description
   * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @param tmpReq - CreateAgentSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentSpecResponse
   */
  async createAgentSpecWithOptions(workspaceId: string, tmpReq: $_model.CreateAgentSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSpecResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateAgentSpecResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentSpecResponse({}));
  }

  /**
   * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @remarks
   * ## Request description
   * Creates an AgentSpec in a specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @param request - CreateAgentSpecRequest
   * @returns CreateAgentSpecResponse
   */
  async createAgentSpec(workspaceId: string, request: $_model.CreateAgentSpecRequest): Promise<$_model.CreateAgentSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentSpecWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
   * 
   * @remarks
   * ## Request description
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
   * 
   * @param tmpReq - CreateAgentSpecVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentSpecVersionResponse
   */
  async createAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, tmpReq: $_model.CreateAgentSpecVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentSpecVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAgentSpecVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateAgentSpecVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentSpecVersionResponse({}));
  }

  /**
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
   * 
   * @remarks
   * ## Request description
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist and must not have a draft currently being edited.
   * 
   * @param request - CreateAgentSpecVersionRequest
   * @returns CreateAgentSpecVersionResponse
   */
  async createAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.CreateAgentSpecVersionRequest): Promise<$_model.CreateAgentSpecVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentSpecVersionWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Creates a credential in a specified workspace for authentication when an agent accesses external services. Currently, only the apiKey type is supported. The credential content is passed as a JSON string through credentialMetadata and can only be queried in a desensitized format after it is written.
   * 
   * @remarks
   * Creates a credential in a workspace for authentication of services such as Connector.
   * 
   * @param tmpReq - CreateCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCredentialResponse
   */
  async createCredentialWithOptions(workspaceId: string, tmpReq: $_model.CreateCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCredentialResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCredentialShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.CreateCredentialResponse({}));
  }

  /**
   * Creates a credential in a specified workspace for authentication when an agent accesses external services. Currently, only the apiKey type is supported. The credential content is passed as a JSON string through credentialMetadata and can only be queried in a desensitized format after it is written.
   * 
   * @remarks
   * Creates a credential in a workspace for authentication of services such as Connector.
   * 
   * @param request - CreateCredentialRequest
   * @returns CreateCredentialResponse
   */
  async createCredential(workspaceId: string, request: $_model.CreateCredentialRequest): Promise<$_model.CreateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCredentialWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a custom agent in a specified workspace and submits a container image deployment configuration. The creation is an asynchronous process. You can call GetCustomAgent to query the deployment result.
   * 
   * @remarks
   * Before you call this operation, prepare a writable workspace, a RAM role ARN, an ACR container image, and a runtime configuration. You must specify name, artifact, roleArn, and runtime. The runtime parameter must include both compute and sessionPolicy.
   * Currently, only ACR container image deployment is supported. Use artifact.container and specify the service listening port in artifact.port. Omit artifact.code. The image must have the required access permissions and be accessible over the network allowed by the workspace.
   * The creation is an asynchronous process. A successful response indicates that the request is accepted. Use the returned agentId to call GetCustomAgent and check latestVersionStatus, latestExecutionError, and status for the corresponding latestSpecVersion to confirm the deployment result. After the deployment is ready, you can call CreateServiceEndpoint to configure an access endpoint.
   * The clientToken parameter does not currently provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold parameter for health checks does not currently take effect. Omit this parameter.
   * 
   * @param tmpReq - CreateCustomAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateCustomAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomAgentResponse({}));
  }

  /**
   * Creates a custom agent in a specified workspace and submits a container image deployment configuration. The creation is an asynchronous process. You can call GetCustomAgent to query the deployment result.
   * 
   * @remarks
   * Before you call this operation, prepare a writable workspace, a RAM role ARN, an ACR container image, and a runtime configuration. You must specify name, artifact, roleArn, and runtime. The runtime parameter must include both compute and sessionPolicy.
   * Currently, only ACR container image deployment is supported. Use artifact.container and specify the service listening port in artifact.port. Omit artifact.code. The image must have the required access permissions and be accessible over the network allowed by the workspace.
   * The creation is an asynchronous process. A successful response indicates that the request is accepted. Use the returned agentId to call GetCustomAgent and check latestVersionStatus, latestExecutionError, and status for the corresponding latestSpecVersion to confirm the deployment result. After the deployment is ready, you can call CreateServiceEndpoint to configure an access endpoint.
   * The clientToken parameter does not currently provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold parameter for health checks does not currently take effect. Omit this parameter.
   * 
   * @param request - CreateCustomAgentRequest
   * @returns CreateCustomAgentResponse
   */
  async createCustomAgent(workspaceId: string, request: $_model.CreateCustomAgentRequest): Promise<$_model.CreateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an external agent in a specified workspace.
   * 
   * @remarks
   * Creates an external agent in a specified workspace.
   * 
   * @param tmpReq - CreateExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExternalAgentResponse
   */
  async createExternalAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateExternalAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateExternalAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateExternalAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateExternalAgentResponse({}));
  }

  /**
   * Creates an external agent in a specified workspace.
   * 
   * @remarks
   * Creates an external agent in a specified workspace.
   * 
   * @param request - CreateExternalAgentRequest
   * @returns CreateExternalAgentResponse
   */
  async createExternalAgent(workspaceId: string, request: $_model.CreateExternalAgentRequest): Promise<$_model.CreateExternalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExternalAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
   * 
   * @remarks
   * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
   * 
   * @param request - CreateExternalAgentBootstrapTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExternalAgentBootstrapTokenResponse
   */
  async createExternalAgentBootstrapTokenWithOptions(workspaceId: string, agentId: string, request: $_model.CreateExternalAgentBootstrapTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalAgentBootstrapTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.networkType)) {
      query["networkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateExternalAgentBootstrapTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateExternalAgentBootstrapTokenResponse({}));
  }

  /**
   * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
   * 
   * @remarks
   * Creates the Bootstrap token and CMS configuration required to onboard a specified external agent.
   * 
   * @param request - CreateExternalAgentBootstrapTokenRequest
   * @returns CreateExternalAgentBootstrapTokenResponse
   */
  async createExternalAgentBootstrapToken(workspaceId: string, agentId: string, request: $_model.CreateExternalAgentBootstrapTokenRequest): Promise<$_model.CreateExternalAgentBootstrapTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExternalAgentBootstrapTokenWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Binds an external identity provider to a specified workspace to enable single sign-on and organization member synchronization for workspace users. Each workspace can be bound to a maximum of one external identity provider. This is an asynchronous operation. After the API call returns, you can call GetIdentityProvider to query the status and track the progress.
   * 
   * @param tmpReq - CreateIdentityProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProviderWithOptions(workspaceId: string, tmpReq: $_model.CreateIdentityProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdentityProviderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIdentityProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdentityProviderResponse({}));
  }

  /**
   * Binds an external identity provider to a specified workspace to enable single sign-on and organization member synchronization for workspace users. Each workspace can be bound to a maximum of one external identity provider. This is an asynchronous operation. After the API call returns, you can call GetIdentityProvider to query the status and track the progress.
   * 
   * @param request - CreateIdentityProviderRequest
   * @returns CreateIdentityProviderResponse
   */
  async createIdentityProvider(workspaceId: string, request: $_model.CreateIdentityProviderRequest): Promise<$_model.CreateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdentityProviderWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an image cache.
   * 
   * @remarks
   * Creates or reuses an image cache in the current workspace based on the image source and tag. Both public and private images uniformly reuse the workspace\\"s source image pull authorization and resource roles. The resource manager parses the tag during the transfer node and performs image replication based on the parsed summary. The digest is empty before parsing is complete. For regular tags, the saved summary is reused after parsing. For the latest tag, it is parsed again when registered after reaching the desired state, and duplicate registrations in progress reuse the node. The logical imageId remains stable. accessInternet and accessVpc only determine the source reading and transfer for the current request and do not modify the agent network. An HTTP 200 response returns an acceptance snapshot of PENDING, READY, or FAILED, which does not indicate that the creation is complete. ClientToken does not guarantee to deduplicate requests or recover the original result. If the result is unconfirmed, query the query cache status first before deciding whether to recommit.
   * 
   * @param tmpReq - CreateImageCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageCacheResponse
   */
  async createImageCacheWithOptions(tmpReq: $_model.CreateImageCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageCacheResponse> {
    tmpReq.validate();
    let request = new $_model.CreateImageCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageCacheResponse({}));
  }

  /**
   * Creates an image cache.
   * 
   * @remarks
   * Creates or reuses an image cache in the current workspace based on the image source and tag. Both public and private images uniformly reuse the workspace\\"s source image pull authorization and resource roles. The resource manager parses the tag during the transfer node and performs image replication based on the parsed summary. The digest is empty before parsing is complete. For regular tags, the saved summary is reused after parsing. For the latest tag, it is parsed again when registered after reaching the desired state, and duplicate registrations in progress reuse the node. The logical imageId remains stable. accessInternet and accessVpc only determine the source reading and transfer for the current request and do not modify the agent network. An HTTP 200 response returns an acceptance snapshot of PENDING, READY, or FAILED, which does not indicate that the creation is complete. ClientToken does not guarantee to deduplicate requests or recover the original result. If the result is unconfirmed, query the query cache status first before deciding whether to recommit.
   * 
   * @param request - CreateImageCacheRequest
   * @returns CreateImageCacheResponse
   */
  async createImageCache(request: $_model.CreateImageCacheRequest): Promise<$_model.CreateImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageCacheWithOptions(request, headers, runtime);
  }

  /**
   * Creates a managed agent in a specified workspace.
   * 
   * @param tmpReq - CreateManagedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateManagedAgentResponse
   */
  async createManagedAgentWithOptions(workspaceId: string, tmpReq: $_model.CreateManagedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateManagedAgentResponse> {
    tmpReq.validate();
    let request = new $_model.CreateManagedAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateManagedAgentResponse>(await this.callApi(params, req, runtime), new $_model.CreateManagedAgentResponse({}));
  }

  /**
   * Creates a managed agent in a specified workspace.
   * 
   * @param request - CreateManagedAgentRequest
   * @returns CreateManagedAgentResponse
   */
  async createManagedAgent(workspaceId: string, request: $_model.CreateManagedAgentRequest): Promise<$_model.CreateManagedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createManagedAgentWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check whether the service is ready by using the returned status or by calling a query operation.
   * 
   * @remarks
   * ## Operation description
   * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check whether the service is ready by using the returned status or by calling a query operation.
   * 
   * @param tmpReq - CreateMcpRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcpResponse
   */
  async createMcpWithOptions(workspaceId: string, tmpReq: $_model.CreateMcpRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcpResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMcpShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateMcpResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcpResponse({}));
  }

  /**
   * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check whether the service is ready by using the returned status or by calling a query operation.
   * 
   * @remarks
   * ## Operation description
   * Creates an MCP service in a specified workspace. The creation is an asynchronous process. You can check whether the service is ready by using the returned status or by calling a query operation.
   * 
   * @param request - CreateMcpRequest
   * @returns CreateMcpResponse
   */
  async createMcp(workspaceId: string, request: $_model.CreateMcpRequest): Promise<$_model.CreateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMcpWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a long-term memory store in a specified workspace.
   * 
   * @remarks
   * Creates a long-term memory store in a specified workspace.
   * 
   * @param tmpReq - CreateMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemoryStoreResponse
   */
  async createMemoryStoreWithOptions(workspaceId: string, tmpReq: $_model.CreateMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemoryStoreResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMemoryStoreShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemoryStoreResponse({}));
  }

  /**
   * Creates a long-term memory store in a specified workspace.
   * 
   * @remarks
   * Creates a long-term memory store in a specified workspace.
   * 
   * @param request - CreateMemoryStoreRequest
   * @returns CreateMemoryStoreResponse
   */
  async createMemoryStore(workspaceId: string, request: $_model.CreateMemoryStoreRequest): Promise<$_model.CreateMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemoryStoreWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a model configuration for model creation under a model connection in a specified workspace.
   * 
   * @param tmpReq - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(workspaceId: string, tmpReq: $_model.CreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    tmpReq.validate();
    let request = new $_model.CreateModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
  }

  /**
   * Creates a model configuration for model creation under a model connection in a specified workspace.
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(workspaceId: string, request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials to support model creation.
   * 
   * @param tmpReq - CreateModelConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelConnectionResponse
   */
  async createModelConnectionWithOptions(workspaceId: string, tmpReq: $_model.CreateModelConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelConnectionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateModelConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateModelConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelConnectionResponse({}));
  }

  /**
   * Creates a model connection in a specified workspace and configures the upstream model service endpoint, invoke protocol, and access credentials to support model creation.
   * 
   * @param request - CreateModelConnectionRequest
   * @returns CreateModelConnectionResponse
   */
  async createModelConnection(workspaceId: string, request: $_model.CreateModelConnectionRequest): Promise<$_model.CreateModelConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelConnectionWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
   * 
   * @remarks
   * ## Operation description
   * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
   * 
   * @param tmpReq - CreateSkillDraftRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSkillDraftResponse
   */
  async createSkillDraftWithOptions(workspaceId: string, tmpReq: $_model.CreateSkillDraftRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSkillDraftResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSkillDraftShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateSkillDraftResponse>(await this.callApi(params, req, runtime), new $_model.CreateSkillDraftResponse({}));
  }

  /**
   * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
   * 
   * @remarks
   * ## Operation description
   * Creates a Skill in the specified workspace and generates a draft version that can be further edited. You can derive a draft from an existing version or specify a target version and commit message.
   * 
   * @param request - CreateSkillDraftRequest
   * @returns CreateSkillDraftResponse
   */
  async createSkillDraft(workspaceId: string, request: $_model.CreateSkillDraftRequest): Promise<$_model.CreateSkillDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSkillDraftWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
   * 
   * @param tmpReq - CreateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTeamResponse
   */
  async createTeamWithOptions(workspaceId: string, tmpReq: $_model.CreateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTeamResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTeamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateTeamResponse>(await this.callApi(params, req, runtime), new $_model.CreateTeamResponse({}));
  }

  /**
   * Creates a team in a specified workspace and configures user members and agent members at the same time. Exactly one user member must have the ADMIN role, and agent members can only have the LEADER or WORKER role.
   * 
   * @param request - CreateTeamRequest
   * @returns CreateTeamResponse
   */
  async createTeam(workspaceId: string, request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTeamWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot use reserved names such as manager, admin, or names starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
   * 
   * @param tmpReq - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(workspaceId: string, tmpReq: $_model.CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Creates a user in a specified workspace. The username must be unique within the workspace, can contain only lowercase letters, digits, and hyphens, and cannot use reserved names such as manager, admin, or names starting with worker-. If the password is not specified, the server generates an initial password and returns it in the initialPassword field of the response.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(workspaceId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an AgentCore workspace control plane record. The server completes the state transition from Initializing to Initialized within the same transaction.
   * 
   * @remarks
   * ## Request description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
   * 
   * @param tmpReq - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(tmpReq: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates an AgentCore workspace control plane record. The server completes the state transition from Initializing to Initialized within the same transaction.
   * 
   * @remarks
   * ## Request description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Calls a specified model through a published model connection to verify whether the model call chain is available.
   * 
   * @param tmpReq - DebugModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugModelResponse
   */
  async debugModelWithOptions(workspaceId: string, modelId: string, tmpReq: $_model.DebugModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DebugModelResponse> {
    tmpReq.validate();
    let request = new $_model.DebugModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DebugModelResponse>(await this.callApi(params, req, runtime), new $_model.DebugModelResponse({}));
  }

  /**
   * Calls a specified model through a published model connection to verify whether the model call chain is available.
   * 
   * @param request - DebugModelRequest
   * @returns DebugModelResponse
   */
  async debugModel(workspaceId: string, modelId: string, request: $_model.DebugModelRequest): Promise<$_model.DebugModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugModelWithOptions(workspaceId, modelId, request, headers, runtime);
  }

  /**
   * Deletes an IM channel of a specified agent.
   * 
   * @remarks
   * Deletes an IM channel of a specified agent.
   * 
   * @param request - DeleteAgentIMChannelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentIMChannelResponse
   */
  async deleteAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, request: $_model.DeleteAgentIMChannelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentIMChannelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteAgentIMChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentIMChannelResponse({}));
  }

  /**
   * Deletes an IM channel of a specified agent.
   * 
   * @remarks
   * Deletes an IM channel of a specified agent.
   * 
   * @param request - DeleteAgentIMChannelRequest
   * @returns DeleteAgentIMChannelResponse
   */
  async deleteAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.DeleteAgentIMChannelRequest): Promise<$_model.DeleteAgentIMChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
  }

  /**
   * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
   * 
   * @remarks
   * ## Operation description
   * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
   * 
   * @param request - DeleteAgentSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentSpecResponse
   */
  async deleteAgentSpecWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSpecResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteAgentSpecResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentSpecResponse({}));
  }

  /**
   * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
   * 
   * @remarks
   * ## Operation description
   * Deletes the specified AgentSpec and all its versions and metadata. The deletion is irreversible.
   * 
   * @param request - DeleteAgentSpecRequest
   * @returns DeleteAgentSpecResponse
   */
  async deleteAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecRequest): Promise<$_model.DeleteAgentSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
   * 
   * @remarks
   * ## Request description
   * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
   * 
   * @param request - DeleteAgentSpecVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentSpecVersionResponse
   */
  async deleteAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentSpecVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteAgentSpecVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentSpecVersionResponse({}));
  }

  /**
   * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
   * 
   * @remarks
   * ## Request description
   * Deletes the draft version currently being edited for a specified AgentSpec and clears the draft version pointer.
   * 
   * @param request - DeleteAgentSpecVersionRequest
   * @returns DeleteAgentSpecVersionResponse
   */
  async deleteAgentSpecVersion(workspaceId: string, agentSpecName: string, request: $_model.DeleteAgentSpecVersionRequest): Promise<$_model.DeleteAgentSpecVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentSpecVersionWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
   * 
   * @remarks
   * Deletes an access credential in a specified workspace. A credential cannot be deleted if it is still bound to an MCP service.
   * 
   * @param request - DeleteCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCredentialResponse
   */
  async deleteCredentialWithOptions(workspaceId: string, credentialId: string, request: $_model.DeleteCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCredentialResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteCredentialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCredentialResponse({}));
  }

  /**
   * Deletes a credential in a specified workspace and deletes the ciphertext hosted in the credential service. After deletion, agents bound to the credential can no longer obtain the credential content.
   * 
   * @remarks
   * Deletes an access credential in a specified workspace. A credential cannot be deleted if it is still bound to an MCP service.
   * 
   * @param request - DeleteCredentialRequest
   * @returns DeleteCredentialResponse
   */
  async deleteCredential(workspaceId: string, credentialId: string, request: $_model.DeleteCredentialRequest): Promise<$_model.DeleteCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
  }

  /**
   * Deletes a custom agent from a specified workspace. A successful request indicates that the deletion is accepted. The runtime resources are subsequently cleaned up in the background.
   * 
   * @remarks
   * Before calling this operation, ensure that the workspace is writable. If the agent is still associated with a team, you must dissociate it from the team first.
   * Deletion is an asynchronous process. After the request is accepted, the associated invocation endpoints become unavailable, and the runtime resources are subsequently cleaned up. The status in the response is typically Deleting. If the agent is already in the deletion process, a subsequent request returns the current summary.
   * You can call GetCustomAgent to check the deletion progress. After the deletion is complete, a detail query returns a resource not found error.
   * 
   * @param request - DeleteCustomAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteCustomAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomAgentResponse({}));
  }

  /**
   * Deletes a custom agent from a specified workspace. A successful request indicates that the deletion is accepted. The runtime resources are subsequently cleaned up in the background.
   * 
   * @remarks
   * Before calling this operation, ensure that the workspace is writable. If the agent is still associated with a team, you must dissociate it from the team first.
   * Deletion is an asynchronous process. After the request is accepted, the associated invocation endpoints become unavailable, and the runtime resources are subsequently cleaned up. The status in the response is typically Deleting. If the agent is already in the deletion process, a subsequent request returns the current summary.
   * You can call GetCustomAgent to check the deletion progress. After the deletion is complete, a detail query returns a resource not found error.
   * 
   * @param request - DeleteCustomAgentRequest
   * @returns DeleteCustomAgentResponse
   */
  async deleteCustomAgent(workspaceId: string, agentId: string, request: $_model.DeleteCustomAgentRequest): Promise<$_model.DeleteCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Deletes a specified external agent.
   * 
   * @remarks
   * Deletes a specified external agent.
   * 
   * @param request - DeleteExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExternalAgentResponse
   */
  async deleteExternalAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteExternalAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExternalAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteExternalAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExternalAgentResponse({}));
  }

  /**
   * Deletes a specified external agent.
   * 
   * @remarks
   * Deletes a specified external agent.
   * 
   * @param request - DeleteExternalAgentRequest
   * @returns DeleteExternalAgentResponse
   */
  async deleteExternalAgent(workspaceId: string, agentId: string, request: $_model.DeleteExternalAgentRequest): Promise<$_model.DeleteExternalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Unbinds the external identity provider from a specified workspace and cleans up users synchronized by that identity provider. The unbinding is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track the progress.
   * 
   * @param request - DeleteIdentityProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, request: $_model.DeleteIdentityProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdentityProviderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIdentityProviderResponse({}));
  }

  /**
   * Unbinds the external identity provider from a specified workspace and cleans up users synchronized by that identity provider. The unbinding is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track the progress.
   * 
   * @param request - DeleteIdentityProviderRequest
   * @returns DeleteIdentityProviderResponse
   */
  async deleteIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.DeleteIdentityProviderRequest): Promise<$_model.DeleteIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
  }

  /**
   * Deletes an image cache.
   * 
   * @remarks
   * Deletes the logical image cache of the current workspace. The deletion requires that no enabled agent configurations reference the cache and no active instances are using it. Concurrency is rechecked upon submission. Caches in the PENDING or FAILED state can still be deleted, and the backend handles the cleanup. An HTTP 200 response returns an imageId that matches the request. If deletionPending is true, the current workspace is still undergoing deletion, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. If false, the deletion is complete or the current workspace no longer exists. Usage by other workspaces does not block the deletion for the current workspace. The physical content is reclaimed only after all workspaces in the same region have removed their associations and no active instances are using it.
   * 
   * @param request - DeleteImageCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCacheWithOptions(imageId: string, request: $_model.DeleteImageCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageCacheResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageCacheResponse({}));
  }

  /**
   * Deletes an image cache.
   * 
   * @remarks
   * Deletes the logical image cache of the current workspace. The deletion requires that no enabled agent configurations reference the cache and no active instances are using it. Concurrency is rechecked upon submission. Caches in the PENDING or FAILED state can still be deleted, and the backend handles the cleanup. An HTTP 200 response returns an imageId that matches the request. If deletionPending is true, the current workspace is still undergoing deletion, and a Get request returns DELETING until ImageCacheNotFound is explicitly returned. If false, the deletion is complete or the current workspace no longer exists. Usage by other workspaces does not block the deletion for the current workspace. The physical content is reclaimed only after all workspaces in the same region have removed their associations and no active instances are using it.
   * 
   * @param request - DeleteImageCacheRequest
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCache(imageId: string, request: $_model.DeleteImageCacheRequest): Promise<$_model.DeleteImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteImageCacheWithOptions(imageId, request, headers, runtime);
  }

  /**
   * Deletes a specified managed agent.
   * 
   * @param request - DeleteManagedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteManagedAgentResponse
   */
  async deleteManagedAgentWithOptions(workspaceId: string, agentId: string, request: $_model.DeleteManagedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteManagedAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteManagedAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteManagedAgentResponse({}));
  }

  /**
   * Deletes a specified managed agent.
   * 
   * @param request - DeleteManagedAgentRequest
   * @returns DeleteManagedAgentResponse
   */
  async deleteManagedAgent(workspaceId: string, agentId: string, request: $_model.DeleteManagedAgentRequest): Promise<$_model.DeleteManagedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
   * 
   * @param request - DeleteMcpRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcpResponse
   */
  async deleteMcpWithOptions(mcpServerId: string, workspaceId: string, request: $_model.DeleteMcpRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcpResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteMcpResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcpResponse({}));
  }

  /**
   * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified MCP server. The deletion is an asynchronous process, and the MCP server is no longer returned after the process is complete.
   * 
   * @param request - DeleteMcpRequest
   * @returns DeleteMcpResponse
   */
  async deleteMcp(mcpServerId: string, workspaceId: string, request: $_model.DeleteMcpRequest): Promise<$_model.DeleteMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMcpWithOptions(mcpServerId, workspaceId, request, headers, runtime);
  }

  /**
   * Deletes a long-term memory based on the memory ID.
   * 
   * @remarks
   * Deletes a long-term memory based on the memory ID.
   * 
   * @param request - DeleteMemoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryResponse
   */
  async deleteMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.DeleteMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteMemoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryResponse({}));
  }

  /**
   * Deletes a long-term memory based on the memory ID.
   * 
   * @remarks
   * Deletes a long-term memory based on the memory ID.
   * 
   * @param request - DeleteMemoryRequest
   * @returns DeleteMemoryResponse
   */
  async deleteMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.DeleteMemoryRequest): Promise<$_model.DeleteMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
  }

  /**
   * Asynchronously deletes a MemoryStore and all its long-term memory.
   * 
   * @remarks
   * Asynchronously deletes a MemoryStore and all its long-term memory.
   * 
   * @param request - DeleteMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemoryStoreResponse
   */
  async deleteMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.DeleteMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemoryStoreResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemoryStoreResponse({}));
  }

  /**
   * Asynchronously deletes a MemoryStore and all its long-term memory.
   * 
   * @remarks
   * Asynchronously deletes a MemoryStore and all its long-term memory.
   * 
   * @param request - DeleteMemoryStoreRequest
   * @returns DeleteMemoryStoreResponse
   */
  async deleteMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.DeleteMemoryStoreRequest): Promise<$_model.DeleteMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Deletes a model from a specified workspace. Models that are currently in use cannot be deleted.
   * 
   * @param request - DeleteModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(workspaceId: string, modelId: string, request: $_model.DeleteModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
  }

  /**
   * Deletes a model from a specified workspace. Models that are currently in use cannot be deleted.
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(workspaceId: string, modelId: string, request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(workspaceId, modelId, request, headers, runtime);
  }

  /**
   * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
   * 
   * @param request - DeleteModelConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelConnectionResponse
   */
  async deleteModelConnectionWithOptions(workspaceId: string, connectionId: string, request: $_model.DeleteModelConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteModelConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelConnectionResponse({}));
  }

  /**
   * Submits an asynchronous deletion task for a specified model connection. The connection cannot be deleted if it has associated models or runtime references.
   * 
   * @param request - DeleteModelConnectionRequest
   * @returns DeleteModelConnectionResponse
   */
  async deleteModelConnection(workspaceId: string, connectionId: string, request: $_model.DeleteModelConnectionRequest): Promise<$_model.DeleteModelConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
  }

  /**
   * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
   * 
   * @remarks
   * ## Operation description
   * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
   * 
   * @param request - DeleteSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillResponse
   */
  async deleteSkillWithOptions(workspaceId: string, skillName: string, request: $_model.DeleteSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteSkillResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillResponse({}));
  }

  /**
   * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
   * 
   * @remarks
   * ## Operation description
   * Deletes a skill and its related version data from a specified workspace. This operation is irreversible.
   * 
   * @param request - DeleteSkillRequest
   * @returns DeleteSkillResponse
   */
  async deleteSkill(workspaceId: string, skillName: string, request: $_model.DeleteSkillRequest): Promise<$_model.DeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSkillWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Deletes the draft version currently being edited for a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Deletes the draft version currently being edited for a specified Skill.
   * 
   * @param request - DeleteSkillDraftRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSkillDraftResponse
   */
  async deleteSkillDraftWithOptions(workspaceId: string, skillName: string, request: $_model.DeleteSkillDraftRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSkillDraftResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteSkillDraftResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSkillDraftResponse({}));
  }

  /**
   * Deletes the draft version currently being edited for a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Deletes the draft version currently being edited for a specified Skill.
   * 
   * @param request - DeleteSkillDraftRequest
   * @returns DeleteSkillDraftResponse
   */
  async deleteSkillDraft(workspaceId: string, skillName: string, request: $_model.DeleteSkillDraftRequest): Promise<$_model.DeleteSkillDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSkillDraftWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Deletes a team from a specified workspace. Deleting a team does not delete the users or agents within it. Only the membership associations are removed.
   * 
   * @param request - DeleteTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTeamResponse
   */
  async deleteTeamWithOptions(workspaceId: string, teamId: string, request: $_model.DeleteTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTeamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteTeamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTeamResponse({}));
  }

  /**
   * Deletes a team from a specified workspace. Deleting a team does not delete the users or agents within it. Only the membership associations are removed.
   * 
   * @param request - DeleteTeamRequest
   * @returns DeleteTeamResponse
   */
  async deleteTeam(workspaceId: string, teamId: string, request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTeamWithOptions(workspaceId, teamId, request, headers, runtime);
  }

  /**
   * Deletes a user from a specified workspace. A user cannot be deleted while the user is still a member of any team. Remove the user from all teams before deleting the user.
   * 
   * @param request - DeleteUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(workspaceId: string, agentCoreUserId: string, request: $_model.DeleteUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Deletes a user from a specified workspace. A user cannot be deleted while the user is still a member of any team. Remove the user from all teams before deleting the user.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(workspaceId: string, agentCoreUserId: string, request: $_model.DeleteUserRequest): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
  }

  /**
   * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. The server processes repeated deletion requests for workspaces in the Deleting or Deleted state idempotently.
   * 
   * @remarks
   * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. The server processes repeated deletion requests for workspaces in the `Deleting` or `Deleted` state idempotently.\\n.
   * 
   * @param request - DeleteWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceId: string, request: $_model.DeleteWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. The server processes repeated deletion requests for workspaces in the Deleting or Deleted state idempotently.
   * 
   * @remarks
   * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. The server processes repeated deletion requests for workspaces in the `Deleting` or `Deleted` state idempotently.\\n.
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceId: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Disables a QoderCLI Connector in a specified workspace. The Connector can be disabled only when no Agent is using it. After the Connector is disabled, the Connector and its Service Account Key configuration are removed.
   * 
   * @remarks
   * Disables a Connector in a specified workspace.
   * 
   * @param request - DisableConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableConnectorResponse
   */
  async disableConnectorWithOptions(workspaceId: string, connectorName: string, request: $_model.DisableConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableConnectorResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DisableConnectorResponse>(await this.callApi(params, req, runtime), new $_model.DisableConnectorResponse({}));
  }

  /**
   * Disables a QoderCLI Connector in a specified workspace. The Connector can be disabled only when no Agent is using it. After the Connector is disabled, the Connector and its Service Account Key configuration are removed.
   * 
   * @remarks
   * Disables a Connector in a specified workspace.
   * 
   * @param request - DisableConnectorRequest
   * @returns DisableConnectorResponse
   */
  async disableConnector(workspaceId: string, connectorName: string, request: $_model.DisableConnectorRequest): Promise<$_model.DisableConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
  }

  /**
   * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
   * 
   * @remarks
   * ## Request description
   * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
   * 
   * @param request - DownloadAgentSpecViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadAgentSpecViaOssResponse
   */
  async downloadAgentSpecViaOssWithOptions(workspaceId: string, agentSpecName: string, request: $_model.DownloadAgentSpecViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadAgentSpecViaOssResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSpecVersion)) {
      query["agentSpecVersion"] = request.agentSpecVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DownloadAgentSpecViaOssResponse>(await this.callApi(params, req, runtime), new $_model.DownloadAgentSpecViaOssResponse({}));
  }

  /**
   * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
   * 
   * @remarks
   * ## Request description
   * Retrieves the presigned OSS download URL of a specified AgentSpec to download the AgentSpec ZIP package.
   * 
   * @param request - DownloadAgentSpecViaOssRequest
   * @returns DownloadAgentSpecViaOssResponse
   */
  async downloadAgentSpecViaOss(workspaceId: string, agentSpecName: string, request: $_model.DownloadAgentSpecViaOssRequest): Promise<$_model.DownloadAgentSpecViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadAgentSpecViaOssWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
   * 
   * @remarks
   * ## Operation description
   * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
   * 
   * @param request - DownloadSkillVersionViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadSkillVersionViaOssResponse
   */
  async downloadSkillVersionViaOssWithOptions(workspaceId: string, skillName: string, skillVersion: string, request: $_model.DownloadSkillVersionViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadSkillVersionViaOssResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DownloadSkillVersionViaOssResponse>(await this.callApi(params, req, runtime), new $_model.DownloadSkillVersionViaOssResponse({}));
  }

  /**
   * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
   * 
   * @remarks
   * ## Operation description
   * Retrieves a pre-signed OSS download URL for a specified Skill version, which is used to download the corresponding Skill ZIP package.
   * 
   * @param request - DownloadSkillVersionViaOssRequest
   * @returns DownloadSkillVersionViaOssResponse
   */
  async downloadSkillVersionViaOss(workspaceId: string, skillName: string, skillVersion: string, request: $_model.DownloadSkillVersionViaOssRequest): Promise<$_model.DownloadSkillVersionViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadSkillVersionViaOssWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
  }

  /**
   * Enables a QoderCLI Connector in a specified workspace. The request must include the site, API key, and at least one service account key. The service validates all account keys before saving the configuration.
   * 
   * @remarks
   * Enables a Connector in a specified workspace. Credential verification is required before the Connector can be enabled.
   * 
   * @param tmpReq - EnableConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableConnectorResponse
   */
  async enableConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.EnableConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.EnableConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.EnableConnectorResponse>(await this.callApi(params, req, runtime), new $_model.EnableConnectorResponse({}));
  }

  /**
   * Enables a QoderCLI Connector in a specified workspace. The request must include the site, API key, and at least one service account key. The service validates all account keys before saving the configuration.
   * 
   * @remarks
   * Enables a Connector in a specified workspace. Credential verification is required before the Connector can be enabled.
   * 
   * @param request - EnableConnectorRequest
   * @returns EnableConnectorResponse
   */
  async enableConnector(workspaceId: string, connectorName: string, request: $_model.EnableConnectorRequest): Promise<$_model.EnableConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
  }

  /**
   * Skips the regular review process and forcibly publishes a specified Skill version.
   * 
   * @remarks
   * ## Operation description
   * Skips the regular review process and forcibly publishes a specified Skill version.
   * 
   * @param tmpReq - ForcePublishSkillVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForcePublishSkillVersionResponse
   */
  async forcePublishSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.ForcePublishSkillVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ForcePublishSkillVersionResponse> {
    tmpReq.validate();
    let request = new $_model.ForcePublishSkillVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ForcePublishSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.ForcePublishSkillVersionResponse({}));
  }

  /**
   * Skips the regular review process and forcibly publishes a specified Skill version.
   * 
   * @remarks
   * ## Operation description
   * Skips the regular review process and forcibly publishes a specified Skill version.
   * 
   * @param request - ForcePublishSkillVersionRequest
   * @returns ForcePublishSkillVersionResponse
   */
  async forcePublishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.ForcePublishSkillVersionRequest): Promise<$_model.ForcePublishSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.forcePublishSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
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
  async getAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, request: $_model.GetAgentIMChannelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentIMChannelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetAgentIMChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentIMChannelResponse({}));
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
  async getAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.GetAgentIMChannelRequest): Promise<$_model.GetAgentIMChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
  }

  /**
   * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
   * 
   * @remarks
   * ## Request description
   * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
   * 
   * @param request - GetAgentSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSpecResponse
   */
  async getAgentSpecWithOptions(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetAgentSpecResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSpecResponse({}));
  }

  /**
   * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
   * 
   * @remarks
   * ## Request description
   * Queries the governance details of a specified AgentSpec, including basic information, governance pointers, and summaries of all versions.
   * 
   * @param request - GetAgentSpecRequest
   * @returns GetAgentSpecResponse
   */
  async getAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecRequest): Promise<$_model.GetAgentSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
   * 
   * @param request - GetAgentSpecImportFileUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSpecImportFileUrlResponse
   */
  async getAgentSpecImportFileUrlWithOptions(workspaceId: string, request: $_model.GetAgentSpecImportFileUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecImportFileUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      query["contentType"] = request.contentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetAgentSpecImportFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSpecImportFileUrlResponse({}));
  }

  /**
   * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS presigned upload URL and object name required to import an AgentSpec ZIP package. After the upload is complete, you can call the AgentSpec OSS upload API to complete the import.
   * 
   * @param request - GetAgentSpecImportFileUrlRequest
   * @returns GetAgentSpecImportFileUrlResponse
   */
  async getAgentSpecImportFileUrl(workspaceId: string, request: $_model.GetAgentSpecImportFileUrlRequest): Promise<$_model.GetAgentSpecImportFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentSpecImportFileUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
   * 
   * @remarks
   * ## Operation description
   * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
   * 
   * @param request - GetAgentSpecLatestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSpecLatestResponse
   */
  async getAgentSpecLatestWithOptions(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecLatestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecLatestResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetAgentSpecLatestResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSpecLatestResponse({}));
  }

  /**
   * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
   * 
   * @remarks
   * ## Operation description
   * Queries the full content of the latest version of a specified AgentSpec for editing or viewing.
   * 
   * @param request - GetAgentSpecLatestRequest
   * @returns GetAgentSpecLatestResponse
   */
  async getAgentSpecLatest(workspaceId: string, agentSpecName: string, request: $_model.GetAgentSpecLatestRequest): Promise<$_model.GetAgentSpecLatestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentSpecLatestWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
   * 
   * @remarks
   * ## Request description
   * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
   * 
   * @param request - GetAgentSpecVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentSpecVersionResponse
   */
  async getAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.GetAgentSpecVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentSpecVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetAgentSpecVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentSpecVersionResponse({}));
  }

  /**
   * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
   * 
   * @remarks
   * ## Request description
   * Queries the complete content of a specified AgentSpec version, including the manifest content, resource files, and metadata.
   * 
   * @param request - GetAgentSpecVersionRequest
   * @returns GetAgentSpecVersionResponse
   */
  async getAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.GetAgentSpecVersionRequest): Promise<$_model.GetAgentSpecVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, request, headers, runtime);
  }

  /**
   * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
   * 
   * @remarks
   * Queries the details of a single credential. Sensitive fields are not returned.
   * 
   * @param request - GetCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialResponse
   */
  async getCredentialWithOptions(workspaceId: string, credentialId: string, request: $_model.GetCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetCredentialResponse({}));
  }

  /**
   * Queries the details of a specified credential and returns the list of agents bound to the credential. The credential content is returned in a masked format.
   * 
   * @remarks
   * Queries the details of a single credential. Sensitive fields are not returned.
   * 
   * @param request - GetCredentialRequest
   * @returns GetCredentialResponse
   */
  async getCredential(workspaceId: string, credentialId: string, request: $_model.GetCredentialRequest): Promise<$_model.GetCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
  }

  /**
   * Queries the details of a custom agent in a specified workspace, including deployment configurations, the execute status of the latest configuration version, and the running instance status statistics.
   * 
   * @remarks
   * After you create or update a custom agent, you can poll this operation to query the execution result of the latest configuration version. `latestVersionStatus` corresponds to `latestSpecVersion`. `latestExecutionError` indicates the cause of the pending or failed status for this version. If `retryable` is true, you can query again later.
   * The returned configuration is the most recently submitted configuration and may not have taken effect. Verify the deployment and running status by checking `latestVersionStatus`, the overall agent status `status`, and the running instance statistics `sandboxPhaseCounts`.
   * If the queried custom agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
   * 
   * @param request - GetCustomAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomAgentResponse
   */
  async getCustomAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetCustomAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCustomAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetCustomAgentResponse({}));
  }

  /**
   * Queries the details of a custom agent in a specified workspace, including deployment configurations, the execute status of the latest configuration version, and the running instance status statistics.
   * 
   * @remarks
   * After you create or update a custom agent, you can poll this operation to query the execution result of the latest configuration version. `latestVersionStatus` corresponds to `latestSpecVersion`. `latestExecutionError` indicates the cause of the pending or failed status for this version. If `retryable` is true, you can query again later.
   * The returned configuration is the most recently submitted configuration and may not have taken effect. Verify the deployment and running status by checking `latestVersionStatus`, the overall agent status `status`, and the running instance statistics `sandboxPhaseCounts`.
   * If the queried custom agent does not exist, has been deleted, or does not belong to the specified workspace, a resource not found error is returned.
   * 
   * @param request - GetCustomAgentRequest
   * @returns GetCustomAgentResponse
   */
  async getCustomAgent(workspaceId: string, agentId: string, request: $_model.GetCustomAgentRequest): Promise<$_model.GetCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified external agent.
   * 
   * @remarks
   * Queries the details of a specified external agent.
   * 
   * @param request - GetExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalAgentResponse
   */
  async getExternalAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetExternalAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetExternalAgentResponse({}));
  }

  /**
   * Queries the details of a specified external agent.
   * 
   * @remarks
   * Queries the details of a specified external agent.
   * 
   * @param request - GetExternalAgentRequest
   * @returns GetExternalAgentResponse
   */
  async getExternalAgent(workspaceId: string, agentId: string, request: $_model.GetExternalAgentRequest): Promise<$_model.GetExternalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries the available access network types for a specified external agent.
   * 
   * @remarks
   * Queries the available access network types for a specified external agent.
   * 
   * @param request - GetExternalAgentBootstrapOptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExternalAgentBootstrapOptionsResponse
   */
  async getExternalAgentBootstrapOptionsWithOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentBootstrapOptionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExternalAgentBootstrapOptionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetExternalAgentBootstrapOptionsResponse>(await this.callApi(params, req, runtime), new $_model.GetExternalAgentBootstrapOptionsResponse({}));
  }

  /**
   * Queries the available access network types for a specified external agent.
   * 
   * @remarks
   * Queries the available access network types for a specified external agent.
   * 
   * @param request - GetExternalAgentBootstrapOptionsRequest
   * @returns GetExternalAgentBootstrapOptionsResponse
   */
  async getExternalAgentBootstrapOptions(workspaceId: string, agentId: string, request: $_model.GetExternalAgentBootstrapOptionsRequest): Promise<$_model.GetExternalAgentBootstrapOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExternalAgentBootstrapOptionsWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries the binding details of the external identity provider for a specified workspace, including the binding status, application configurations, and callback URLs to be configured on the identity provider side. Application secret configurations are not returned.
   * 
   * @param request - GetIdentityProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdentityProviderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetIdentityProviderResponse({}));
  }

  /**
   * Queries the binding details of the external identity provider for a specified workspace, including the binding status, application configurations, and callback URLs to be configured on the identity provider side. Application secret configurations are not returned.
   * 
   * @param request - GetIdentityProviderRequest
   * @returns GetIdentityProviderResponse
   */
  async getIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.GetIdentityProviderRequest): Promise<$_model.GetIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
  }

  /**
   * Queries the details of an image cache.
   * 
   * @remarks
   * Queries the details of the logical image cache in the current workspace. Returns the complete source, current digest, actual size, creation time, status, and secure error messages. AgentCount counts configuration references with the switch enabled. CanDelete verifies both configuration references and instance usage. If the switch is disabled, the count is 0, but deletion is still prohibited if old instances are not released. If the resource does not belong to the current workspace, resources with the same content from other workspaces are not returned.
   * 
   * @param request - GetImageCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageCacheResponse
   */
  async getImageCacheWithOptions(imageId: string, request: $_model.GetImageCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageCacheResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.GetImageCacheResponse({}));
  }

  /**
   * Queries the details of an image cache.
   * 
   * @remarks
   * Queries the details of the logical image cache in the current workspace. Returns the complete source, current digest, actual size, creation time, status, and secure error messages. AgentCount counts configuration references with the switch enabled. CanDelete verifies both configuration references and instance usage. If the switch is disabled, the count is 0, but deletion is still prohibited if old instances are not released. If the resource does not belong to the current workspace, resources with the same content from other workspaces are not returned.
   * 
   * @param request - GetImageCacheRequest
   * @returns GetImageCacheResponse
   */
  async getImageCache(imageId: string, request: $_model.GetImageCacheRequest): Promise<$_model.GetImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageCacheWithOptions(imageId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified managed agent.
   * 
   * @param request - GetManagedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagedAgentResponse
   */
  async getManagedAgentWithOptions(workspaceId: string, agentId: string, request: $_model.GetManagedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedAgentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetManagedAgentResponse>(await this.callApi(params, req, runtime), new $_model.GetManagedAgentResponse({}));
  }

  /**
   * Queries the details of a specified managed agent.
   * 
   * @param request - GetManagedAgentRequest
   * @returns GetManagedAgentResponse
   */
  async getManagedAgent(workspaceId: string, agentId: string, request: $_model.GetManagedAgentRequest): Promise<$_model.GetManagedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified MCP server, including the address, type, status, authentication configuration, and protocol.
   * 
   * @remarks
   * ## Operation description
   * Queries the details of a specified MCP server, including the address, type, status, authentication configuration, and protocol.
   * 
   * @param request - GetMcpRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcpResponse
   */
  async getMcpWithOptions(workspaceId: string, mcpServerId: string, request: $_model.GetMcpRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMcpResponse>(await this.callApi(params, req, runtime), new $_model.GetMcpResponse({}));
  }

  /**
   * Queries the details of a specified MCP server, including the address, type, status, authentication configuration, and protocol.
   * 
   * @remarks
   * ## Operation description
   * Queries the details of a specified MCP server, including the address, type, status, authentication configuration, and protocol.
   * 
   * @param request - GetMcpRequest
   * @returns GetMcpResponse
   */
  async getMcp(workspaceId: string, mcpServerId: string, request: $_model.GetMcpRequest): Promise<$_model.GetMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMcpWithOptions(workspaceId, mcpServerId, request, headers, runtime);
  }

  /**
   * Queries the details of an MCP marketplace template.
   * 
   * @remarks
   * Returns the current template version and installation form schema.
   * 
   * @param request - GetMcpMarketItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcpMarketItemResponse
   */
  async getMcpMarketItemWithOptions(workspaceId: string, marketItemId: string, request: $_model.GetMcpMarketItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpMarketItemResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMcpMarketItemResponse>(await this.callApi(params, req, runtime), new $_model.GetMcpMarketItemResponse({}));
  }

  /**
   * Queries the details of an MCP marketplace template.
   * 
   * @remarks
   * Returns the current template version and installation form schema.
   * 
   * @param request - GetMcpMarketItemRequest
   * @returns GetMcpMarketItemResponse
   */
  async getMcpMarketItem(workspaceId: string, marketItemId: string, request: $_model.GetMcpMarketItemRequest): Promise<$_model.GetMcpMarketItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
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
  async getMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.GetMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMemoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryResponse({}));
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
  async getMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.GetMemoryRequest): Promise<$_model.GetMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
  }

  /**
   * Queries the public information and current status of a MemoryStore in a specified workspace.
   * 
   * @remarks
   * Queries the public information and current status of a MemoryStore in a specified workspace.
   * 
   * @param request - GetMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryStoreResponse
   */
  async getMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.GetMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryStoreResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryStoreResponse({}));
  }

  /**
   * Queries the public information and current status of a MemoryStore in a specified workspace.
   * 
   * @remarks
   * Queries the public information and current status of a MemoryStore in a specified workspace.
   * 
   * @param request - GetMemoryStoreRequest
   * @returns GetMemoryStoreResponse
   */
  async getMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.GetMemoryStoreRequest): Promise<$_model.GetMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Queries the task ID returned by the asynchronous AddMemories operation.
   * 
   * @remarks
   * Queries the task ID returned by the asynchronous AddMemories operation.
   * 
   * @param request - GetMemoryTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemoryTaskResponse
   */
  async getMemoryTaskWithOptions(workspaceId: string, memoryStoreName: string, taskId: string, request: $_model.GetMemoryTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemoryTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMemoryTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetMemoryTaskResponse({}));
  }

  /**
   * Queries the task ID returned by the asynchronous AddMemories operation.
   * 
   * @remarks
   * Queries the task ID returned by the asynchronous AddMemories operation.
   * 
   * @param request - GetMemoryTaskRequest
   * @returns GetMemoryTaskResponse
   */
  async getMemoryTask(workspaceId: string, memoryStoreName: string, taskId: string, request: $_model.GetMemoryTaskRequest): Promise<$_model.GetMemoryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemoryTaskWithOptions(workspaceId, memoryStoreName, taskId, request, headers, runtime);
  }

  /**
   * Queries the detailed configuration and region of a model in a specified workspace.
   * 
   * @param request - GetModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(workspaceId: string, modelId: string, request: $_model.GetModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetModelResponse>(await this.callApi(params, req, runtime), new $_model.GetModelResponse({}));
  }

  /**
   * Queries the detailed configuration and region of a model in a specified workspace.
   * 
   * @param request - GetModelRequest
   * @returns GetModelResponse
   */
  async getModel(workspaceId: string, modelId: string, request: $_model.GetModelRequest): Promise<$_model.GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(workspaceId, modelId, request, headers, runtime);
  }

  /**
   * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
   * 
   * @param request - GetModelConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelConnectionResponse
   */
  async getModelConnectionWithOptions(workspaceId: string, connectionId: string, request: $_model.GetModelConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelConnectionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetModelConnectionResponse>(await this.callApi(params, req, runtime), new $_model.GetModelConnectionResponse({}));
  }

  /**
   * Queries the detailed configuration, credential configuration status, publish status, and region of a specified model connection.
   * 
   * @param request - GetModelConnectionRequest
   * @returns GetModelConnectionResponse
   */
  async getModelConnection(workspaceId: string, connectionId: string, request: $_model.GetModelConnectionRequest): Promise<$_model.GetModelConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified service endpoint, including target routing, access URLs, authentication configuration, and current status.
   * 
   * @remarks
   * ## Operation description\\nQueries the details of a specified service endpoint. A service endpoint (ServiceEndpoint) provides a stable access URL for a specific agent version (AgentVersion) or workspace collaboration component. The response includes target routing, access URL list, authentication configuration, and current lifecycle status.\\n.
   * 
   * @param request - GetServiceEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEndpointResponse
   */
  async getServiceEndpointWithOptions(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEndpointResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetServiceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceEndpointResponse({}));
  }

  /**
   * Queries the details of a specified service endpoint, including target routing, access URLs, authentication configuration, and current status.
   * 
   * @remarks
   * ## Operation description\\nQueries the details of a specified service endpoint. A service endpoint (ServiceEndpoint) provides a stable access URL for a specific agent version (AgentVersion) or workspace collaboration component. The response includes target routing, access URL list, authentication configuration, and current lifecycle status.\\n.
   * 
   * @param request - GetServiceEndpointRequest
   * @returns GetServiceEndpointResponse
   */
  async getServiceEndpoint(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointRequest): Promise<$_model.GetServiceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceEndpointWithOptions(workspaceId, serviceEndpointId, request, headers, runtime);
  }

  /**
   * Queries the currently active API key and its invocation method for a service endpoint in a specified workspace.
   * 
   * @remarks
   * Queries the currently active API key for a specified service endpoint. The call succeeds only when API key authentication is enabled for the service endpoint and the gateway consumer and credentials are ready. The service reads the API key from the gateway in real time, and AgentCore does not persist the plaintext. Keep the returned API key secure and avoid logging it or exposing it in public configurations.
   * 
   * @param request - GetServiceEndpointApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceEndpointApiKeyResponse
   */
  async getServiceEndpointApiKeyWithOptions(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceEndpointApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetServiceEndpointApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceEndpointApiKeyResponse({}));
  }

  /**
   * Queries the currently active API key and its invocation method for a service endpoint in a specified workspace.
   * 
   * @remarks
   * Queries the currently active API key for a specified service endpoint. The call succeeds only when API key authentication is enabled for the service endpoint and the gateway consumer and credentials are ready. The service reads the API key from the gateway in real time, and AgentCore does not persist the plaintext. Keep the returned API key secure and avoid logging it or exposing it in public configurations.
   * 
   * @param request - GetServiceEndpointApiKeyRequest
   * @returns GetServiceEndpointApiKeyResponse
   */
  async getServiceEndpointApiKey(workspaceId: string, serviceEndpointId: string, request: $_model.GetServiceEndpointApiKeyRequest): Promise<$_model.GetServiceEndpointApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceEndpointApiKeyWithOptions(workspaceId, serviceEndpointId, request, headers, runtime);
  }

  /**
   * Queries the basic information, version status, labels, visibility scope, and version list of a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Queries the basic information, version status, labels, visibility scope, and version list of a specified Skill.
   * 
   * @param request - GetSkillDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillDetailResponse
   */
  async getSkillDetailWithOptions(workspaceId: string, skillName: string, request: $_model.GetSkillDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillDetailResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetSkillDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillDetailResponse({}));
  }

  /**
   * Queries the basic information, version status, labels, visibility scope, and version list of a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Queries the basic information, version status, labels, visibility scope, and version list of a specified Skill.
   * 
   * @param request - GetSkillDetailRequest
   * @returns GetSkillDetailResponse
   */
  async getSkillDetail(workspaceId: string, skillName: string, request: $_model.GetSkillDetailRequest): Promise<$_model.GetSkillDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillDetailWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
   * 
   * @param request - GetSkillImportFileUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillImportFileUrlResponse
   */
  async getSkillImportFileUrlWithOptions(workspaceId: string, request: $_model.GetSkillImportFileUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillImportFileUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      query["contentType"] = request.contentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetSkillImportFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillImportFileUrlResponse({}));
  }

  /**
   * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS presigned upload URL and object name required to import a Skill ZIP package. After the upload is complete, you can call the Skill OSS upload API to complete the import.
   * 
   * @param request - GetSkillImportFileUrlRequest
   * @returns GetSkillImportFileUrlResponse
   */
  async getSkillImportFileUrl(workspaceId: string, request: $_model.GetSkillImportFileUrlRequest): Promise<$_model.GetSkillImportFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillImportFileUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
   * 
   * @remarks
   * ## Operation description
   * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
   * 
   * @param request - GetSkillVersionDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSkillVersionDetailResponse
   */
  async getSkillVersionDetailWithOptions(workspaceId: string, skillName: string, skillVersion: string, request: $_model.GetSkillVersionDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSkillVersionDetailResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetSkillVersionDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSkillVersionDetailResponse({}));
  }

  /**
   * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
   * 
   * @remarks
   * ## Operation description
   * Queries the complete details of a specified Skill version, including version metadata, Skill content, and associated resources.
   * 
   * @param request - GetSkillVersionDetailRequest
   * @returns GetSkillVersionDetailResponse
   */
  async getSkillVersionDetail(workspaceId: string, skillName: string, skillVersion: string, request: $_model.GetSkillVersionDetailRequest): Promise<$_model.GetSkillVersionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSkillVersionDetailWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
  }

  /**
   * Queries the details of a specified team. The response includes the complete attributes and team roles of each user member and agent member in the team.
   * 
   * @param request - GetTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTeamResponse
   */
  async getTeamWithOptions(workspaceId: string, teamId: string, request: $_model.GetTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetTeamResponse>(await this.callApi(params, req, runtime), new $_model.GetTeamResponse({}));
  }

  /**
   * Queries the details of a specified team. The response includes the complete attributes and team roles of each user member and agent member in the team.
   * 
   * @param request - GetTeamRequest
   * @returns GetTeamResponse
   */
  async getTeam(workspaceId: string, teamId: string, request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTeamWithOptions(workspaceId, teamId, request, headers, runtime);
  }

  /**
   * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(workspaceId: string, agentCoreUserId: string, request: $_model.GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Queries the details of a specific user in a specified workspace. Returns an error if the user does not exist.
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(workspaceId: string, agentCoreUserId: string, request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
  }

  /**
   * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.
   * 
   * @remarks
   * ## Request description\\nQueries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.\\n.
   * 
   * @param request - GetWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceId: string, request: $_model.GetWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * Queries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.
   * 
   * @remarks
   * ## Request description\\nQueries the details of a workspace by workspace ID, including the lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policies.\\n.
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceId: string, request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the ACR RAM authorization URL of a workspace.
   * 
   * @remarks
   * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. The acrInstanceId, namespace, and repository parameters are required. The region and account are derived from the workspace context. Returns the role resolved by the backend and the authorization URL for the target repository. This operation does not create ACR or agent execution versions, nor does it deliver runtime configurations. After authorization is complete, you can call Verify before creating or updating an agent, without the need to call an independent Ensure operation.
   * 
   * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
   */
  async getWorkspaceAcrRamAuthorizeUrlWithOptions(workspaceId: string, request: $_model.GetWorkspaceAcrRamAuthorizeUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      query["acrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.repository)) {
      query["repository"] = request.repository;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceAcrRamAuthorizeUrlResponse({}));
  }

  /**
   * Queries the ACR RAM authorization URL of a workspace.
   * 
   * @remarks
   * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. The acrInstanceId, namespace, and repository parameters are required. The region and account are derived from the workspace context. Returns the role resolved by the backend and the authorization URL for the target repository. This operation does not create ACR or agent execution versions, nor does it deliver runtime configurations. After authorization is complete, you can call Verify before creating or updating an agent, without the need to call an independent Ensure operation.
   * 
   * @param request - GetWorkspaceAcrRamAuthorizeUrlRequest
   * @returns GetWorkspaceAcrRamAuthorizeUrlResponse
   */
  async getWorkspaceAcrRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAcrRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAcrRamAuthorizeUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceAcrRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the RAM authorization URL for mounting AgenticFS in a workspace.
   * 
   * @remarks
   * Determines the account, region, and shared role based on the workspace, and concatenates the resource ARN based on the provided fileSystemId and accessPointId. The server parameter is used to generate the policy name. This operation does not query NAS or check the resource status, and returns an authorization URL that contains only the target NAS policy. After completing RAM authorization, you must call the verification API.
   * 
   * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
   */
  async getWorkspaceAgenticFsMountRamAuthorizeUrlWithOptions(workspaceId: string, request: $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessPointId)) {
      query["accessPointId"] = request.accessPointId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["fileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.server)) {
      query["server"] = request.server;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse({}));
  }

  /**
   * Queries the RAM authorization URL for mounting AgenticFS in a workspace.
   * 
   * @remarks
   * Determines the account, region, and shared role based on the workspace, and concatenates the resource ARN based on the provided fileSystemId and accessPointId. The server parameter is used to generate the policy name. This operation does not query NAS or check the resource status, and returns an authorization URL that contains only the target NAS policy. After completing RAM authorization, you must call the verification API.
   * 
   * @param request - GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest
   * @returns GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse
   */
  async getWorkspaceAgenticFsMountRamAuthorizeUrl(workspaceId: string, request: $_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlRequest): Promise<$_model.GetWorkspaceAgenticFsMountRamAuthorizeUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceAgenticFsMountRamAuthorizeUrlWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the plug-in status of a specified workspace.
   * 
   * @remarks
   * ## Operation description\\nQueries the plug-in status of a specified workspace. Returns whether the plug-in is enabled, its lifecycle status, and the currently effective configuration. Currently, two types of plug-ins are supported: collaboration and agentloop. If a plug-in is not installed, its status is DISABLED.\\n.
   * 
   * @param request - GetWorkspacePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspacePluginResponse
   */
  async getWorkspacePluginWithOptions(workspaceId: string, pluginName: string, request: $_model.GetWorkspacePluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspacePluginResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetWorkspacePluginResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspacePluginResponse({}));
  }

  /**
   * Queries the plug-in status of a specified workspace.
   * 
   * @remarks
   * ## Operation description\\nQueries the plug-in status of a specified workspace. Returns whether the plug-in is enabled, its lifecycle status, and the currently effective configuration. Currently, two types of plug-ins are supported: collaboration and agentloop. If a plug-in is not installed, its status is DISABLED.\\n.
   * 
   * @param request - GetWorkspacePluginRequest
   * @returns GetWorkspacePluginResponse
   */
  async getWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.GetWorkspacePluginRequest): Promise<$_model.GetWorkspacePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspacePluginWithOptions(workspaceId, pluginName, request, headers, runtime);
  }

  /**
   * Installs an MCP marketplace template.
   * 
   * @remarks
   * Validates the input based on the specified template version and creates an MCP in the workspace.
   * 
   * @param tmpReq - InstallMcpMarketItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallMcpMarketItemResponse
   */
  async installMcpMarketItemWithOptions(workspaceId: string, marketItemId: string, tmpReq: $_model.InstallMcpMarketItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallMcpMarketItemResponse> {
    tmpReq.validate();
    let request = new $_model.InstallMcpMarketItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["templateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.InstallMcpMarketItemResponse>(await this.callApi(params, req, runtime), new $_model.InstallMcpMarketItemResponse({}));
  }

  /**
   * Installs an MCP marketplace template.
   * 
   * @remarks
   * Validates the input based on the specified template version and creates an MCP in the workspace.
   * 
   * @param request - InstallMcpMarketItemRequest
   * @returns InstallMcpMarketItemResponse
   */
  async installMcpMarketItem(workspaceId: string, marketItemId: string, request: $_model.InstallMcpMarketItemRequest): Promise<$_model.InstallMcpMarketItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installMcpMarketItemWithOptions(workspaceId, marketItemId, request, headers, runtime);
  }

  /**
   * Installs a plugin for a specified AgentCore workspace. Currently, only the collaboration plugin is supported. The installation process runs asynchronously.
   * 
   * @remarks
   * ## Request description\\nInstalls a plugin for a specified AgentCore workspace. Currently, only the `collaboration` plugin is supported. Plugin configurations are passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify the VPC and public network access policy. The installation procedure executes asynchronously. If you repeatedly invoke this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status based on idempotent semantics if the configurations are identical. If the configurations are different, the operation returns an operation conflict.\\n
   * 
   * @param tmpReq - InstallWorkspacePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallWorkspacePluginResponse
   */
  async installWorkspacePluginWithOptions(workspaceId: string, pluginName: string, tmpReq: $_model.InstallWorkspacePluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallWorkspacePluginResponse> {
    tmpReq.validate();
    let request = new $_model.InstallWorkspacePluginShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.InstallWorkspacePluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallWorkspacePluginResponse({}));
  }

  /**
   * Installs a plugin for a specified AgentCore workspace. Currently, only the collaboration plugin is supported. The installation process runs asynchronously.
   * 
   * @remarks
   * ## Request description\\nInstalls a plugin for a specified AgentCore workspace. Currently, only the `collaboration` plugin is supported. Plugin configurations are passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify the VPC and public network access policy. The installation procedure executes asynchronously. If you repeatedly invoke this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status based on idempotent semantics if the configurations are identical. If the configurations are different, the operation returns an operation conflict.\\n
   * 
   * @param request - InstallWorkspacePluginRequest
   * @returns InstallWorkspacePluginResponse
   */
  async installWorkspacePlugin(workspaceId: string, pluginName: string, request: $_model.InstallWorkspacePluginRequest): Promise<$_model.InstallWorkspacePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installWorkspacePluginWithOptions(workspaceId, pluginName, request, headers, runtime);
  }

  /**
   * Queries the list of IM channels for a specified agent.
   * 
   * @remarks
   * Queries the list of IM channels for a specified agent.
   * 
   * @param request - ListAgentIMChannelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentIMChannelsResponse
   */
  async listAgentIMChannelsWithOptions(workspaceId: string, agentId: string, request: $_model.ListAgentIMChannelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentIMChannelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListAgentIMChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentIMChannelsResponse({}));
  }

  /**
   * Queries the list of IM channels for a specified agent.
   * 
   * @remarks
   * Queries the list of IM channels for a specified agent.
   * 
   * @param request - ListAgentIMChannelsRequest
   * @returns ListAgentIMChannelsResponse
   */
  async listAgentIMChannels(workspaceId: string, agentId: string, request: $_model.ListAgentIMChannelsRequest): Promise<$_model.ListAgentIMChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentIMChannelsWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @remarks
   * ## Operation description
   * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @param request - ListAgentSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentSpecsResponse
   */
  async listAgentSpecsWithOptions(workspaceId: string, request: $_model.ListAgentSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListAgentSpecsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentSpecsResponse({}));
  }

  /**
   * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @remarks
   * ## Operation description
   * Queries AgentSpec resources in a specified workspace by using paging, and supports name-based search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @param request - ListAgentSpecsRequest
   * @returns ListAgentSpecsResponse
   */
  async listAgentSpecs(workspaceId: string, request: $_model.ListAgentSpecsRequest): Promise<$_model.ListAgentSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentSpecsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the teams to which specified agents belong. Specify the agent IDs by using agentIds to retrieve the membership information of each agent in the teams, including the team ID, team name, and the role of the agent in the team.
   * 
   * @param tmpReq - ListAgentTeamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentTeamsResponse
   */
  async listAgentTeamsWithOptions(workspaceId: string, tmpReq: $_model.ListAgentTeamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentTeamsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAgentTeamsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListAgentTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentTeamsResponse({}));
  }

  /**
   * Queries the teams to which specified agents belong. Specify the agent IDs by using agentIds to retrieve the membership information of each agent in the teams, including the team ID, team name, and the role of the agent in the team.
   * 
   * @param request - ListAgentTeamsRequest
   * @returns ListAgentTeamsResponse
   */
  async listAgentTeams(workspaceId: string, request: $_model.ListAgentTeamsRequest): Promise<$_model.ListAgentTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentTeamsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the available official models and enterprise models for an enabled QoderCLI Connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates the results by model ID.
   * 
   * @remarks
   * Queries the list of available models for a specified Connector. Pagination is supported.
   * 
   * @param request - ListConnectorModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorModelsResponse
   */
  async listConnectorModelsWithOptions(workspaceId: string, connectorName: string, request: $_model.ListConnectorModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.connectorKeyId)) {
      query["connectorKeyId"] = request.connectorKeyId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListConnectorModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectorModelsResponse({}));
  }

  /**
   * Queries the available official models and enterprise models for an enabled QoderCLI Connector. The service retrieves models in real time by using the saved API key and organization ID, and deduplicates the results by model ID.
   * 
   * @remarks
   * Queries the list of available models for a specified Connector. Pagination is supported.
   * 
   * @param request - ListConnectorModelsRequest
   * @returns ListConnectorModelsResponse
   */
  async listConnectorModels(workspaceId: string, connectorName: string, request: $_model.ListConnectorModelsRequest): Promise<$_model.ListConnectorModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectorModelsWithOptions(workspaceId, connectorName, request, headers, runtime);
  }

  /**
   * Queries the list of connectors supported by a specified workspace, including their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
   * 
   * @remarks
   * Queries the list of connectors in a specified workspace.
   * 
   * @param request - ListConnectorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorsResponse
   */
  async listConnectorsWithOptions(workspaceId: string, request: $_model.ListConnectorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListConnectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectorsResponse({}));
  }

  /**
   * Queries the list of connectors supported by a specified workspace, including their status, number of bound agents, and configurations. The current version returns the QoderCLI connector.
   * 
   * @remarks
   * Queries the list of connectors in a specified workspace.
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(workspaceId: string, request: $_model.ListConnectorsRequest): Promise<$_model.ListConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectorsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Performs a paged query for credentials in a specified workspace. Filters by type using credentialType, performs fuzzy filtering by credential name using nameLike, configures paging by specifying the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
   * 
   * @remarks
   * Performs a paged query for the credential list in a workspace, and supports filtering by type and name during paging.
   * 
   * @param request - ListCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCredentialsResponse
   */
  async listCredentialsWithOptions(workspaceId: string, request: $_model.ListCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListCredentialsResponse({}));
  }

  /**
   * Performs a paged query for credentials in a specified workspace. Filters by type using credentialType, performs fuzzy filtering by credential name using nameLike, configures paging by specifying the maximum number of records per page using maxResults, and retrieves the next page using nextToken. If maxResults is not specified, the server returns 10 records by default.
   * 
   * @remarks
   * Performs a paged query for the credential list in a workspace, and supports filtering by type and name during paging.
   * 
   * @param request - ListCredentialsRequest
   * @returns ListCredentialsResponse
   */
  async listCredentials(workspaceId: string, request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCredentialsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the summaries of custom agents in a specified workspace by using paging. For the complete configuration and the execution results of the latest version, call GetCustomAgent.
   * 
   * @remarks
   * The default value of maxResults is 20, and the maximum value is 100. If this parameter is omitted or set to 0, the default value is used.
   * Omit nextToken in the first request. In subsequent requests, pass the nextToken value returned in the previous response as is, and keep the same workspace. The nextToken is an opaque token. Do not parse or construct it. If the token in the response is empty, it indicates that no more pages are available.
   * This operation returns the summaries of the current page and does not return the complete deployment configuration or the execution errors of the latest version. To obtain this information, call GetCustomAgent by using the agentId in items.
   * 
   * @param request - ListCustomAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomAgentsResponse
   */
  async listCustomAgentsWithOptions(workspaceId: string, request: $_model.ListCustomAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListCustomAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomAgentsResponse({}));
  }

  /**
   * Queries the summaries of custom agents in a specified workspace by using paging. For the complete configuration and the execution results of the latest version, call GetCustomAgent.
   * 
   * @remarks
   * The default value of maxResults is 20, and the maximum value is 100. If this parameter is omitted or set to 0, the default value is used.
   * Omit nextToken in the first request. In subsequent requests, pass the nextToken value returned in the previous response as is, and keep the same workspace. The nextToken is an opaque token. Do not parse or construct it. If the token in the response is empty, it indicates that no more pages are available.
   * This operation returns the summaries of the current page and does not return the complete deployment configuration or the execution errors of the latest version. To obtain this information, call GetCustomAgent by using the agentId in items.
   * 
   * @param request - ListCustomAgentsRequest
   * @returns ListCustomAgentsResponse
   */
  async listCustomAgents(workspaceId: string, request: $_model.ListCustomAgentsRequest): Promise<$_model.ListCustomAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCustomAgentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of external agents in a specified workspace.
   * 
   * @remarks
   * Queries the list of external agents in a specified workspace.
   * 
   * @param request - ListExternalAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalAgentsResponse
   */
  async listExternalAgentsWithOptions(workspaceId: string, request: $_model.ListExternalAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListExternalAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalAgentsResponse({}));
  }

  /**
   * Queries the list of external agents in a specified workspace.
   * 
   * @remarks
   * Queries the list of external agents in a specified workspace.
   * 
   * @param request - ListExternalAgentsRequest
   * @returns ListExternalAgentsResponse
   */
  async listExternalAgents(workspaceId: string, request: $_model.ListExternalAgentsRequest): Promise<$_model.ListExternalAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExternalAgentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the external identity providers bound to a specified workspace. Each workspace can be bound to at most one external identity provider, so the response returns at most one record. Application secret configurations are not returned.
   * 
   * @param request - ListIdentityProvidersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProvidersWithOptions(workspaceId: string, request: $_model.ListIdentityProvidersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentityProvidersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListIdentityProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListIdentityProvidersResponse({}));
  }

  /**
   * Queries the external identity providers bound to a specified workspace. Each workspace can be bound to at most one external identity provider, so the response returns at most one record. Application secret configurations are not returned.
   * 
   * @param request - ListIdentityProvidersRequest
   * @returns ListIdentityProvidersResponse
   */
  async listIdentityProviders(workspaceId: string, request: $_model.ListIdentityProvidersRequest): Promise<$_model.ListIdentityProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIdentityProvidersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries image caches.
   * 
   * @remarks
   * Queries the logical image caches within the current account, region, and workspace. WorkspaceId is required, and caches are not visible across workspaces. All conditions filter the full set using the AND operator before pagination is calculated. Results are sorted in descending order of logical resource creation time and ascending order of ImageId. The cursor is bound to the account, region, workspace, all filters, and the sort order. Returns the complete cache objects, the AgentCount based on the configuration switch, and the actual deletion eligibility. Query failures do not return a disguised empty list, and the nextToken on the last page is an empty string.
   * 
   * @param request - ListImageCachesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageCachesResponse
   */
  async listImageCachesWithOptions(request: $_model.ListImageCachesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageCachesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListImageCachesResponse>(await this.callApi(params, req, runtime), new $_model.ListImageCachesResponse({}));
  }

  /**
   * Queries image caches.
   * 
   * @remarks
   * Queries the logical image caches within the current account, region, and workspace. WorkspaceId is required, and caches are not visible across workspaces. All conditions filter the full set using the AND operator before pagination is calculated. Results are sorted in descending order of logical resource creation time and ascending order of ImageId. The cursor is bound to the account, region, workspace, all filters, and the sort order. Returns the complete cache objects, the AgentCount based on the configuration switch, and the actual deletion eligibility. Query failures do not return a disguised empty list, and the nextToken on the last page is an empty string.
   * 
   * @param request - ListImageCachesRequest
   * @returns ListImageCachesResponse
   */
  async listImageCaches(request: $_model.ListImageCachesRequest): Promise<$_model.ListImageCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImageCachesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of managed agents in a specified workspace.
   * 
   * @remarks
   * Queries the list of managed agents in a specified workspace by using paging. Returns summary information for each agent, including the identity, name, status, template, and specifications.
   * 
   * @param request - ListManagedAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManagedAgentsResponse
   */
  async listManagedAgentsWithOptions(workspaceId: string, request: $_model.ListManagedAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListManagedAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListManagedAgentsResponse>(await this.callApi(params, req, runtime), new $_model.ListManagedAgentsResponse({}));
  }

  /**
   * Queries the list of managed agents in a specified workspace.
   * 
   * @remarks
   * Queries the list of managed agents in a specified workspace by using paging. Returns summary information for each agent, including the identity, name, status, template, and specifications.
   * 
   * @param request - ListManagedAgentsRequest
   * @returns ListManagedAgentsResponse
   */
  async listManagedAgents(workspaceId: string, request: $_model.ListManagedAgentsRequest): Promise<$_model.ListManagedAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManagedAgentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries MCP marketplace templates.
   * 
   * @remarks
   * Queries all online official MCP templates. You can filter results by keyword, usage tag, and MCP type.
   * 
   * @param request - ListMcpMarketItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpMarketItemsResponse
   */
  async listMcpMarketItemsWithOptions(workspaceId: string, request: $_model.ListMcpMarketItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpMarketItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMcpMarketItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpMarketItemsResponse({}));
  }

  /**
   * Queries MCP marketplace templates.
   * 
   * @remarks
   * Queries all online official MCP templates. You can filter results by keyword, usage tag, and MCP type.
   * 
   * @param request - ListMcpMarketItemsRequest
   * @returns ListMcpMarketItemsResponse
   */
  async listMcpMarketItems(workspaceId: string, request: $_model.ListMcpMarketItemsRequest): Promise<$_model.ListMcpMarketItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMcpMarketItemsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
   * 
   * @remarks
   * ## Operation description
   * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
   * 
   * @param request - ListMcpToolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpToolsResponse
   */
  async listMcpToolsWithOptions(workspaceId: string, mcpServerId: string, request: $_model.ListMcpToolsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpToolsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMcpToolsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpToolsResponse({}));
  }

  /**
   * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
   * 
   * @remarks
   * ## Operation description
   * Queries the list of tools exposed by a specified MCP service and their input/output schemas.
   * 
   * @param request - ListMcpToolsRequest
   * @returns ListMcpToolsResponse
   */
  async listMcpTools(workspaceId: string, mcpServerId: string, request: $_model.ListMcpToolsRequest): Promise<$_model.ListMcpToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMcpToolsWithOptions(workspaceId, mcpServerId, request, headers, runtime);
  }

  /**
   * Queries MCP services and their configurations and statuses in a specified workspace by using paging.
   * 
   * @remarks
   * ## Operation description
   * Queries MCP services and their configurations and statuses in a specified workspace by using paging.
   * 
   * @param request - ListMcpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpsResponse
   */
  async listMcpsWithOptions(workspaceId: string, request: $_model.ListMcpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMcpsResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpsResponse({}));
  }

  /**
   * Queries MCP services and their configurations and statuses in a specified workspace by using paging.
   * 
   * @remarks
   * ## Operation description
   * Queries MCP services and their configurations and statuses in a specified workspace by using paging.
   * 
   * @param request - ListMcpsRequest
   * @returns ListMcpsResponse
   */
  async listMcps(workspaceId: string, request: $_model.ListMcpsRequest): Promise<$_model.ListMcpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMcpsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Performs a paged query on long-term memory. Paging is supported, and you can filter the results independently by user ID, agent ID, and session ID.
   * 
   * @remarks
   * Performs a paged query on long-term memory. Paging is supported, and you can filter the results independently by user ID, agent ID, and session ID.
   * 
   * @param request - ListMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoriesResponse
   */
  async listMemoriesWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoriesResponse({}));
  }

  /**
   * Performs a paged query on long-term memory. Paging is supported, and you can filter the results independently by user ID, agent ID, and session ID.
   * 
   * @remarks
   * Performs a paged query on long-term memory. Paging is supported, and you can filter the results independently by user ID, agent ID, and session ID.
   * 
   * @param request - ListMemoriesRequest
   * @returns ListMemoriesResponse
   */
  async listMemories(workspaceId: string, memoryStoreName: string, request: $_model.ListMemoriesRequest): Promise<$_model.ListMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Performs a paged query for raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
   * 
   * @remarks
   * Performs a paged query for raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
   * 
   * @param request - ListMemorySessionMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemorySessionMessagesResponse
   */
  async listMemorySessionMessagesWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionMessagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemorySessionMessagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMemorySessionMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMemorySessionMessagesResponse({}));
  }

  /**
   * Performs a paged query for raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
   * 
   * @remarks
   * Performs a paged query for raw messages by exact scope with paging. SessionId is required, and at least one of UserId and AgentId must be provided.
   * 
   * @param request - ListMemorySessionMessagesRequest
   * @returns ListMemorySessionMessagesResponse
   */
  async listMemorySessionMessages(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionMessagesRequest): Promise<$_model.ListMemorySessionMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemorySessionMessagesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Performs a paging query for sessions in a MemoryStore, and allows independent filtering by user ID and agent ID.
   * 
   * @remarks
   * Performs a paging query for sessions in a MemoryStore, and allows independent filtering by user ID and agent ID.
   * 
   * @param request - ListMemorySessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemorySessionsResponse
   */
  async listMemorySessionsWithOptions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemorySessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMemorySessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMemorySessionsResponse({}));
  }

  /**
   * Performs a paging query for sessions in a MemoryStore, and allows independent filtering by user ID and agent ID.
   * 
   * @remarks
   * Performs a paging query for sessions in a MemoryStore, and allows independent filtering by user ID and agent ID.
   * 
   * @param request - ListMemorySessionsRequest
   * @returns ListMemorySessionsResponse
   */
  async listMemorySessions(workspaceId: string, memoryStoreName: string, request: $_model.ListMemorySessionsRequest): Promise<$_model.ListMemorySessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemorySessionsWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Queries MemoryStores in a specified workspace by using paging.
   * 
   * @remarks
   * Queries MemoryStores in a specified workspace by using paging.
   * 
   * @param request - ListMemoryStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMemoryStoresResponse
   */
  async listMemoryStoresWithOptions(workspaceId: string, request: $_model.ListMemoryStoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMemoryStoresResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListMemoryStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListMemoryStoresResponse({}));
  }

  /**
   * Queries MemoryStores in a specified workspace by using paging.
   * 
   * @remarks
   * Queries MemoryStores in a specified workspace by using paging.
   * 
   * @param request - ListMemoryStoresRequest
   * @returns ListMemoryStoresResponse
   */
  async listMemoryStores(workspaceId: string, request: $_model.ListMemoryStoresRequest): Promise<$_model.ListMemoryStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMemoryStoresWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries model connections in a specified workspace with paging. Supports filtering by name, provider type, and invoke protocol.
   * 
   * @remarks
   * Queries model connections in a specified AgentCore workspace. Supports filtering by name through `Name` and selecting exact match or fuzzy match through `SearchType`. Also supports filtering by model provider type and invoke protocol, and supports paging.
   * 
   * @param request - ListModelConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelConnectionsResponse
   */
  async listModelConnectionsWithOptions(workspaceId: string, request: $_model.ListModelConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelConnectionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListModelConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelConnectionsResponse({}));
  }

  /**
   * Queries model connections in a specified workspace with paging. Supports filtering by name, provider type, and invoke protocol.
   * 
   * @remarks
   * Queries model connections in a specified AgentCore workspace. Supports filtering by name through `Name` and selecting exact match or fuzzy match through `SearchType`. Also supports filtering by model provider type and invoke protocol, and supports paging.
   * 
   * @param request - ListModelConnectionsRequest
   * @returns ListModelConnectionsResponse
   */
  async listModelConnections(workspaceId: string, request: $_model.ListModelConnectionsRequest): Promise<$_model.ListModelConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelConnectionsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries models in a specified workspace by using paging. Supports filtering by model connection and model name.
   * 
   * @param request - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(workspaceId: string, request: $_model.ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
  }

  /**
   * Queries models in a specified workspace by using paging. Supports filtering by model connection and model name.
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(workspaceId: string, request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
   * 
   * @param request - ListPredefinedModelProvidersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPredefinedModelProvidersResponse
   */
  async listPredefinedModelProvidersWithOptions(request: $_model.ListPredefinedModelProvidersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedModelProvidersResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListPredefinedModelProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListPredefinedModelProvidersResponse({}));
  }

  /**
   * Queries the providers supported by the built-in model catalog of AgentCore and their default service configurations.
   * 
   * @param request - ListPredefinedModelProvidersRequest
   * @returns ListPredefinedModelProvidersResponse
   */
  async listPredefinedModelProviders(request: $_model.ListPredefinedModelProvidersRequest): Promise<$_model.ListPredefinedModelProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPredefinedModelProvidersWithOptions(request, headers, runtime);
  }

  /**
   * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
   * 
   * @param request - ListPredefinedModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPredefinedModelsResponse
   */
  async listPredefinedModelsWithOptions(providerType: string, request: $_model.ListPredefinedModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPredefinedModelsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListPredefinedModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListPredefinedModelsResponse({}));
  }

  /**
   * Queries the models and their capabilities in the built-in model catalog of AgentCore for a specified provider.
   * 
   * @param request - ListPredefinedModelsRequest
   * @returns ListPredefinedModelsResponse
   */
  async listPredefinedModels(providerType: string, request: $_model.ListPredefinedModelsRequest): Promise<$_model.ListPredefinedModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPredefinedModelsWithOptions(providerType, request, headers, runtime);
  }

  /**
   * Queries the list of active sessions in the sandbox of a specified managed agent by paging, and returns the session source and external channel type.
   * 
   * @remarks
   * Queries the list of active sessions in the sandbox of a specified managed agent.
   * 
   * @param request - ListSandboxSessionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSandboxSessionsResponse
   */
  async listSandboxSessionsWithOptions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.ListSandboxSessionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSandboxSessionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSandboxSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSandboxSessionsResponse({}));
  }

  /**
   * Queries the list of active sessions in the sandbox of a specified managed agent by paging, and returns the session source and external channel type.
   * 
   * @remarks
   * Queries the list of active sessions in the sandbox of a specified managed agent.
   * 
   * @param request - ListSandboxSessionsRequest
   * @returns ListSandboxSessionsResponse
   */
  async listSandboxSessions(workspaceId: string, agentId: string, sandboxId: string, request: $_model.ListSandboxSessionsRequest): Promise<$_model.ListSandboxSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSandboxSessionsWithOptions(workspaceId, agentId, sandboxId, request, headers, runtime);
  }

  /**
   * Queries the list of sandboxes for a managed agent in a specified workspace. You can filter results by sandbox ID and active session ID fragments.
   * 
   * @remarks
   * Queries the list of sandboxes for a specified managed agent. The searchText parameter performs a fuzzy match on sandbox ID fragments, and the sessionId parameter performs a fuzzy match on active session ID fragments. Both parameters are case-insensitive and can be used together with AND logic.
   * 
   * @param request - ListSandboxesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSandboxesResponse
   */
  async listSandboxesWithOptions(workspaceId: string, agentId: string, request: $_model.ListSandboxesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSandboxesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchText)) {
      query["searchText"] = request.searchText;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSandboxesResponse>(await this.callApi(params, req, runtime), new $_model.ListSandboxesResponse({}));
  }

  /**
   * Queries the list of sandboxes for a managed agent in a specified workspace. You can filter results by sandbox ID and active session ID fragments.
   * 
   * @remarks
   * Queries the list of sandboxes for a specified managed agent. The searchText parameter performs a fuzzy match on sandbox ID fragments, and the sessionId parameter performs a fuzzy match on active session ID fragments. Both parameters are case-insensitive and can be used together with AND logic.
   * 
   * @param request - ListSandboxesRequest
   * @returns ListSandboxesResponse
   */
  async listSandboxes(workspaceId: string, agentId: string, request: $_model.ListSandboxesRequest): Promise<$_model.ListSandboxesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSandboxesWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Queries service endpoints in a specified workspace with paging and supports filtering by target type, agent, collaboration component, and status.
   * 
   * @remarks
   * ## Request description\\nQueries service endpoints in a specified workspace with paging. You can filter the results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
   * 
   * @param request - ListServiceEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceEndpointsResponse
   */
  async listServiceEndpointsWithOptions(workspaceId: string, request: $_model.ListServiceEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListServiceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceEndpointsResponse({}));
  }

  /**
   * Queries service endpoints in a specified workspace with paging and supports filtering by target type, agent, collaboration component, and status.
   * 
   * @remarks
   * ## Request description\\nQueries service endpoints in a specified workspace with paging. You can filter the results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
   * 
   * @param request - ListServiceEndpointsRequest
   * @returns ListServiceEndpointsResponse
   */
  async listServiceEndpoints(workspaceId: string, request: $_model.ListServiceEndpointsRequest): Promise<$_model.ListServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceEndpointsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries skill reference relationships.
   * 
   * @param request - ListSkillReferencesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillReferencesResponse
   */
  async listSkillReferencesWithOptions(workspaceId: string, skillName: string, request: $_model.ListSkillReferencesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillReferencesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSkillReferencesResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillReferencesResponse({}));
  }

  /**
   * Queries skill reference relationships.
   * 
   * @param request - ListSkillReferencesRequest
   * @returns ListSkillReferencesResponse
   */
  async listSkillReferences(workspaceId: string, skillName: string, request: $_model.ListSkillReferencesRequest): Promise<$_model.ListSkillReferencesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSkillReferencesWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Performs a paged query of Skills in a specified workspace and returns basic Skill information, version status, and paging information.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query of Skills in a specified workspace and returns basic Skill information, version status, and paging information.
   * 
   * @param request - ListSkillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSkillsResponse
   */
  async listSkillsWithOptions(workspaceId: string, request: $_model.ListSkillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSkillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSkillsResponse>(await this.callApi(params, req, runtime), new $_model.ListSkillsResponse({}));
  }

  /**
   * Performs a paged query of Skills in a specified workspace and returns basic Skill information, version status, and paging information.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query of Skills in a specified workspace and returns basic Skill information, version status, and paging information.
   * 
   * @param request - ListSkillsRequest
   * @returns ListSkillsResponse
   */
  async listSkills(workspaceId: string, request: $_model.ListSkillsRequest): Promise<$_model.ListSkillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSkillsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries teams in a specified workspace by using paging. You can use nameLike to filter teams by fuzzy matching the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
   * 
   * @param request - ListTeamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamsResponse
   */
  async listTeamsWithOptions(workspaceId: string, request: $_model.ListTeamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
  }

  /**
   * Queries teams in a specified workspace by using paging. You can use nameLike to filter teams by fuzzy matching the team name, maxResults to specify the maximum number of records per page, and nextToken to retrieve the next page. If maxResults is not specified, the server returns 10 records by default. The member information in the list includes only the member identifier, name, and team role.
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(workspaceId: string, request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTeamsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page for paging, and nextToken to retrieve the next page. If maxResults is not specified, 10 records are returned by default.
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(workspaceId: string, request: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Performs a paged query for users in a specified workspace. You can use nameLike to filter users by fuzzy match on the username, maxResults to specify the maximum number of records per page for paging, and nextToken to retrieve the next page. If maxResults is not specified, 10 records are returned by default.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(workspaceId: string, request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Performs a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging.
   * 
   * @remarks
   * ## Request description\\nPerforms a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging. You can use nextToken to obtain the next page, skip to skip a specified number of workspaces, maxResults to specify the maximum number of records per page, and nameLike to perform fuzzy filtering by workspace name. If maxResults is not specified or is set to 0, the server returns 20 records by default.\\n
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.skip)) {
      query["skip"] = request.skip;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Performs a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging.
   * 
   * @remarks
   * ## Request description\\nPerforms a paged query on the workspaces under the current tenant. By default, the list does not return soft-deleted records with the Deleted status. The server performs stable sorting on the results by creation order to facilitate paging. You can use nextToken to obtain the next page, skip to skip a specified number of workspaces, maxResults to specify the maximum number of records per page, and nameLike to perform fuzzy filtering by workspace name. If maxResults is not specified or is set to 0, the server returns 20 records by default.\\n
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
   * 
   * @remarks
   * ## Operation description
   * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
   * 
   * @param tmpReq - OfflineSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineSkillResponse
   */
  async offlineSkillWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.OfflineSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineSkillResponse> {
    tmpReq.validate();
    let request = new $_model.OfflineSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.OfflineSkillResponse>(await this.callApi(params, req, runtime), new $_model.OfflineSkillResponse({}));
  }

  /**
   * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
   * 
   * @remarks
   * ## Operation description
   * Takes the online version of a specified Skill offline so that it is no longer used as the online version.
   * 
   * @param request - OfflineSkillRequest
   * @returns OfflineSkillResponse
   */
  async offlineSkill(workspaceId: string, skillName: string, request: $_model.OfflineSkillRequest): Promise<$_model.OfflineSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.offlineSkillWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Sets a specified Skill version as the online version.
   * 
   * @remarks
   * ## Operation description
   * Sets a specified Skill version as the online version.
   * 
   * @param tmpReq - OnlineSkillRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineSkillResponse
   */
  async onlineSkillWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.OnlineSkillRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineSkillResponse> {
    tmpReq.validate();
    let request = new $_model.OnlineSkillShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.OnlineSkillResponse>(await this.callApi(params, req, runtime), new $_model.OnlineSkillResponse({}));
  }

  /**
   * Sets a specified Skill version as the online version.
   * 
   * @remarks
   * ## Operation description
   * Sets a specified Skill version as the online version.
   * 
   * @param request - OnlineSkillRequest
   * @returns OnlineSkillResponse
   */
  async onlineSkill(workspaceId: string, skillName: string, request: $_model.OnlineSkillRequest): Promise<$_model.OnlineSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.onlineSkillWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
   * 
   * @remarks
   * ## Operation description
   * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
   * 
   * @param tmpReq - PrecheckSkillUploadViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckSkillUploadViaOssResponse
   */
  async precheckSkillUploadViaOssWithOptions(workspaceId: string, tmpReq: $_model.PrecheckSkillUploadViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckSkillUploadViaOssResponse> {
    tmpReq.validate();
    let request = new $_model.PrecheckSkillUploadViaOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.PrecheckSkillUploadViaOssResponse>(await this.callApi(params, req, runtime), new $_model.PrecheckSkillUploadViaOssResponse({}));
  }

  /**
   * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
   * 
   * @remarks
   * ## Operation description
   * Parses and checks one or more Skill ZIP packages uploaded to OSS, and returns the name, version, and conflict check results.
   * 
   * @param request - PrecheckSkillUploadViaOssRequest
   * @returns PrecheckSkillUploadViaOssResponse
   */
  async precheckSkillUploadViaOss(workspaceId: string, request: $_model.PrecheckSkillUploadViaOssRequest): Promise<$_model.PrecheckSkillUploadViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.precheckSkillUploadViaOssWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Publishes a specified Skill version to transition it to the published state.
   * 
   * @remarks
   * ## Operation description
   * Publishes a specified Skill version to transition it to the published state.
   * 
   * @param tmpReq - PublishSkillVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishSkillVersionResponse
   */
  async publishSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.PublishSkillVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishSkillVersionResponse> {
    tmpReq.validate();
    let request = new $_model.PublishSkillVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.PublishSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishSkillVersionResponse({}));
  }

  /**
   * Publishes a specified Skill version to transition it to the published state.
   * 
   * @remarks
   * ## Operation description
   * Publishes a specified Skill version to transition it to the published state.
   * 
   * @param request - PublishSkillVersionRequest
   * @returns PublishSkillVersionResponse
   */
  async publishSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.PublishSkillVersionRequest): Promise<$_model.PublishSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
  }

  /**
   * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
   * 
   * @remarks
   * ## Request description
   * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
   * 
   * @param tmpReq - RedraftSkillVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RedraftSkillVersionResponse
   */
  async redraftSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.RedraftSkillVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RedraftSkillVersionResponse> {
    tmpReq.validate();
    let request = new $_model.RedraftSkillVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.RedraftSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.RedraftSkillVersionResponse({}));
  }

  /**
   * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
   * 
   * @remarks
   * ## Request description
   * Converts a specified Skill version back to an editable draft so that you can continue to modify it.
   * 
   * @param request - RedraftSkillVersionRequest
   * @returns RedraftSkillVersionResponse
   */
  async redraftSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.RedraftSkillVersionRequest): Promise<$_model.RedraftSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.redraftSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
  }

  /**
   * Resets the logon password of a specified user. You can specify the user by using agentCoreUserId or username, and you must specify at least one of them. This operation only supports resetting passwords for users who use local password authentication in the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
   * 
   * @param tmpReq - ResetUserPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetUserPasswordResponse
   */
  async resetUserPasswordWithOptions(workspaceId: string, tmpReq: $_model.ResetUserPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetUserPasswordResponse> {
    tmpReq.validate();
    let request = new $_model.ResetUserPasswordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetUserPasswordResponse({}));
  }

  /**
   * Resets the logon password of a specified user. You can specify the user by using agentCoreUserId or username, and you must specify at least one of them. This operation only supports resetting passwords for users who use local password authentication in the workspace. If you do not specify the password parameter, the server generates a random password and returns it in the response.
   * 
   * @param request - ResetUserPasswordRequest
   * @returns ResetUserPasswordResponse
   */
  async resetUserPassword(workspaceId: string, request: $_model.ResetUserPasswordRequest): Promise<$_model.ResetUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetUserPasswordWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retries the image cache.
   * 
   * @remarks
   * Retries the image cache for the original ImageId in the current workspace. WorkspaceId is required. The business request body is not required and can be omitted or provided as an empty object. The source authorization and transfer network reuse the trusted context of the original registration. If a digest exists, the retry uses the original digest. If no digest exists, the original tag is resolved again. A new request for a FAILED status can start a new production round. PENDING and READY statuses are reused. DELETING status is rejected, and deleted resources are not recreated. PUBLIC and PRIVATE statuses reuse the pull authorization of the original workspace. Returns a complete acceptance snapshot and retains the original ImageId and CreatedAt. ClientToken does not guarantee request deduplication. If the result is not confirmed, query the real-time status first before deciding whether to resubmit.
   * 
   * @param tmpReq - RetryImageCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryImageCacheResponse
   */
  async retryImageCacheWithOptions(imageId: string, tmpReq: $_model.RetryImageCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryImageCacheResponse> {
    tmpReq.validate();
    let request = new $_model.RetryImageCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.RetryImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.RetryImageCacheResponse({}));
  }

  /**
   * Retries the image cache.
   * 
   * @remarks
   * Retries the image cache for the original ImageId in the current workspace. WorkspaceId is required. The business request body is not required and can be omitted or provided as an empty object. The source authorization and transfer network reuse the trusted context of the original registration. If a digest exists, the retry uses the original digest. If no digest exists, the original tag is resolved again. A new request for a FAILED status can start a new production round. PENDING and READY statuses are reused. DELETING status is rejected, and deleted resources are not recreated. PUBLIC and PRIVATE statuses reuse the pull authorization of the original workspace. Returns a complete acceptance snapshot and retains the original ImageId and CreatedAt. ClientToken does not guarantee request deduplication. If the result is not confirmed, query the real-time status first before deciding whether to resubmit.
   * 
   * @param request - RetryImageCacheRequest
   * @returns RetryImageCacheResponse
   */
  async retryImageCache(imageId: string, request: $_model.RetryImageCacheRequest): Promise<$_model.RetryImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryImageCacheWithOptions(imageId, request, headers, runtime);
  }

  /**
   * Retrieves long-term memory from a MemoryStore based on semantics queries.
   * 
   * @remarks
   * Retrieves long-term memory from a MemoryStore based on semantics queries.
   * 
   * @param tmpReq - SearchMemoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMemoriesResponse
   */
  async searchMemoriesWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.SearchMemoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMemoriesResponse> {
    tmpReq.validate();
    let request = new $_model.SearchMemoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SearchMemoriesResponse>(await this.callApi(params, req, runtime), new $_model.SearchMemoriesResponse({}));
  }

  /**
   * Retrieves long-term memory from a MemoryStore based on semantics queries.
   * 
   * @remarks
   * Retrieves long-term memory from a MemoryStore based on semantics queries.
   * 
   * @param request - SearchMemoriesRequest
   * @returns SearchMemoriesResponse
   */
  async searchMemories(workspaceId: string, memoryStoreName: string, request: $_model.SearchMemoriesRequest): Promise<$_model.SearchMemoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchMemoriesWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
   * 
   * @remarks
   * ## Request description
   * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
   * 
   * @param tmpReq - SubmitAgentSpecVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAgentSpecVersionResponse
   */
  async submitAgentSpecVersionWithOptions(workspaceId: string, agentSpecName: string, agentSpecVersion: string, tmpReq: $_model.SubmitAgentSpecVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAgentSpecVersionResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitAgentSpecVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SubmitAgentSpecVersionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitAgentSpecVersionResponse({}));
  }

  /**
   * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
   * 
   * @remarks
   * ## Request description
   * Submits a specified draft version of an AgentSpec for review. If no release pipeline is configured, the version is directly published online.
   * 
   * @param request - SubmitAgentSpecVersionRequest
   * @returns SubmitAgentSpecVersionResponse
   */
  async submitAgentSpecVersion(workspaceId: string, agentSpecName: string, agentSpecVersion: string, request: $_model.SubmitAgentSpecVersionRequest): Promise<$_model.SubmitAgentSpecVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitAgentSpecVersionWithOptions(workspaceId, agentSpecName, agentSpecVersion, request, headers, runtime);
  }

  /**
   * Submits a specified draft version of a skill for review.
   * 
   * @remarks
   * ## Operation description
   * Submits a specified draft version of a skill for review.
   * 
   * @param tmpReq - SubmitSkillVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSkillVersionResponse
   */
  async submitSkillVersionWithOptions(workspaceId: string, skillName: string, skillVersion: string, tmpReq: $_model.SubmitSkillVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSkillVersionResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitSkillVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SubmitSkillVersionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSkillVersionResponse({}));
  }

  /**
   * Submits a specified draft version of a skill for review.
   * 
   * @remarks
   * ## Operation description
   * Submits a specified draft version of a skill for review.
   * 
   * @param request - SubmitSkillVersionRequest
   * @returns SubmitSkillVersionResponse
   */
  async submitSkillVersion(workspaceId: string, skillName: string, skillVersion: string, request: $_model.SubmitSkillVersionRequest): Promise<$_model.SubmitSkillVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitSkillVersionWithOptions(workspaceId, skillName, skillVersion, request, headers, runtime);
  }

  /**
   * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
   * 
   * @remarks
   * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
   * 
   * @param tmpReq - UpdateAgentIMChannelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentIMChannelResponse
   */
  async updateAgentIMChannelWithOptions(workspaceId: string, agentId: string, imChannelId: string, tmpReq: $_model.UpdateAgentIMChannelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentIMChannelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentIMChannelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateAgentIMChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentIMChannelResponse({}));
  }

  /**
   * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
   * 
   * @remarks
   * Updates the ServiceEndpoint, enablement status, or channel behavior configuration bound to an IM channel. At least one updatable field must be provided.
   * 
   * @param request - UpdateAgentIMChannelRequest
   * @returns UpdateAgentIMChannelResponse
   */
  async updateAgentIMChannel(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelRequest): Promise<$_model.UpdateAgentIMChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentIMChannelWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
  }

  /**
   * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
   * 
   * @remarks
   * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
   * 
   * @param tmpReq - UpdateAgentIMChannelCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentIMChannelCredentialResponse
   */
  async updateAgentIMChannelCredentialWithOptions(workspaceId: string, agentId: string, imChannelId: string, tmpReq: $_model.UpdateAgentIMChannelCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentIMChannelCredentialResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentIMChannelCredentialShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateAgentIMChannelCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentIMChannelCredentialResponse({}));
  }

  /**
   * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
   * 
   * @remarks
   * Fully updates the channel credentials of a specified IM channel. Secrets are not returned in the response.
   * 
   * @param request - UpdateAgentIMChannelCredentialRequest
   * @returns UpdateAgentIMChannelCredentialResponse
   */
  async updateAgentIMChannelCredential(workspaceId: string, agentId: string, imChannelId: string, request: $_model.UpdateAgentIMChannelCredentialRequest): Promise<$_model.UpdateAgentIMChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentIMChannelCredentialWithOptions(workspaceId, agentId, imChannelId, request, headers, runtime);
  }

  /**
   * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
   * 
   * @remarks
   * ## Operation description
   * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
   * 
   * @param tmpReq - UpdateAgentSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentSpecResponse
   */
  async updateAgentSpecWithOptions(workspaceId: string, agentSpecName: string, tmpReq: $_model.UpdateAgentSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentSpecResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateAgentSpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentSpecResponse({}));
  }

  /**
   * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
   * 
   * @remarks
   * ## Operation description
   * Updates the business tags, version labels, and visibility scope of a specified AgentSpec. Fields that are not provided remain unchanged.
   * 
   * @param request - UpdateAgentSpecRequest
   * @returns UpdateAgentSpecResponse
   */
  async updateAgentSpec(workspaceId: string, agentSpecName: string, request: $_model.UpdateAgentSpecRequest): Promise<$_model.UpdateAgentSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentSpecWithOptions(workspaceId, agentSpecName, request, headers, runtime);
  }

  /**
   * Updates the API Key or Service Account Key collection for an enabled QoderCLI Connector. When serviceAccountKeys is submitted, the service treats it as the complete updated key collection and performs additions, renames, rotations, and deletions accordingly.
   * 
   * @remarks
   * Updates the sensitive configuration of a specified Connector and aligns Service Account Keys by ID.
   * 
   * @param tmpReq - UpdateConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnectorResponse
   */
  async updateConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.UpdateConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateConnectorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnectorResponse({}));
  }

  /**
   * Updates the API Key or Service Account Key collection for an enabled QoderCLI Connector. When serviceAccountKeys is submitted, the service treats it as the complete updated key collection and performs additions, renames, rotations, and deletions accordingly.
   * 
   * @remarks
   * Updates the sensitive configuration of a specified Connector and aligns Service Account Keys by ID.
   * 
   * @param request - UpdateConnectorRequest
   * @returns UpdateConnectorResponse
   */
  async updateConnector(workspaceId: string, connectorName: string, request: $_model.UpdateConnectorRequest): Promise<$_model.UpdateConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
  }

  /**
   * Updates the content or description of a specified credential. You must specify at least one of credentialMetadata and description. Unspecified attributes remain unchanged. The credential name and credential type cannot be modified after creation.
   * 
   * @remarks
   * Updates the metadata or application scope of a specified credential.
   * 
   * @param tmpReq - UpdateCredentialRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialResponse
   */
  async updateCredentialWithOptions(workspaceId: string, credentialId: string, tmpReq: $_model.UpdateCredentialRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCredentialShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateCredentialResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCredentialResponse({}));
  }

  /**
   * Updates the content or description of a specified credential. You must specify at least one of credentialMetadata and description. Unspecified attributes remain unchanged. The credential name and credential type cannot be modified after creation.
   * 
   * @remarks
   * Updates the metadata or application scope of a specified credential.
   * 
   * @param request - UpdateCredentialRequest
   * @returns UpdateCredentialResponse
   */
  async updateCredential(workspaceId: string, credentialId: string, request: $_model.UpdateCredentialRequest): Promise<$_model.UpdateCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCredentialWithOptions(workspaceId, credentialId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified custom agent in a workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call the GetCustomAgent operation to query the update result.
   * 
   * @remarks
   * Specify at least one top-level field to update. Omitted top-level fields retain their original configurations. When providing a configuration object, specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole. Pass an empty array [] to clear a list. The agenticFsMounts field does not accept null. Pass null for the description field to clear the description, and pass null for the healthCheck field to remove the health check.
   * When updating an image, you must specify artifact.port and the type, instanceId, namespace, repo, and tag fields of artifact.container. To retain a custom startup command, also provide the entrypoint field. Currently, only ACR container image deployment is supported. Omit the artifact.code field.
   * When providing the runtime field, both compute and sessionPolicy must be present. If you omit hpa or any of its fields, unspecified elastic configurations use default values. To retain the original elastic configurations, provide them all. When providing the network field, omitted access items are treated as allowed, but actual access is still subject to the workspace network restrictions. To retain the original restrictions, provide both accessInternet and accessVpc. When providing healthCheck, you must specify the port field, and other unspecified items use default values. When providing logging.sls, you must specify both project and logstore.
   * The update is an asynchronous process. A successful response indicates that the request is accepted. You can call the GetCustomAgent operation to query latestSpecVersion, latestVersionStatus, and latestExecutionError, and check the status field to confirm the update result.
   * The clientToken field currently does not provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold field for health checks currently does not take effect. Omit this field.
   * 
   * @param tmpReq - UpdateCustomAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateCustomAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateCustomAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateCustomAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomAgentResponse({}));
  }

  /**
   * Updates the configuration of a specified custom agent in a workspace and executes the update asynchronously. Omitted top-level fields retain their original configurations. You can call the GetCustomAgent operation to query the update result.
   * 
   * @remarks
   * Specify at least one top-level field to update. Omitted top-level fields retain their original configurations. When providing a configuration object, specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole. Pass an empty array [] to clear a list. The agenticFsMounts field does not accept null. Pass null for the description field to clear the description, and pass null for the healthCheck field to remove the health check.
   * When updating an image, you must specify artifact.port and the type, instanceId, namespace, repo, and tag fields of artifact.container. To retain a custom startup command, also provide the entrypoint field. Currently, only ACR container image deployment is supported. Omit the artifact.code field.
   * When providing the runtime field, both compute and sessionPolicy must be present. If you omit hpa or any of its fields, unspecified elastic configurations use default values. To retain the original elastic configurations, provide them all. When providing the network field, omitted access items are treated as allowed, but actual access is still subject to the workspace network restrictions. To retain the original restrictions, provide both accessInternet and accessVpc. When providing healthCheck, you must specify the port field, and other unspecified items use default values. When providing logging.sls, you must specify both project and logstore.
   * The update is an asynchronous process. A successful response indicates that the request is accepted. You can call the GetCustomAgent operation to query latestSpecVersion, latestVersionStatus, and latestExecutionError, and check the status field to confirm the update result.
   * The clientToken field currently does not provide idempotency guarantees. Do not rely on this parameter to prevent duplicate requests. The healthyThreshold field for health checks currently does not take effect. Omit this field.
   * 
   * @param request - UpdateCustomAgentRequest
   * @returns UpdateCustomAgentResponse
   */
  async updateCustomAgent(workspaceId: string, agentId: string, request: $_model.UpdateCustomAgentRequest): Promise<$_model.UpdateCustomAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCustomAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified external agent.
   * 
   * @remarks
   * Updates the configuration of a specified external agent.
   * 
   * @param tmpReq - UpdateExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExternalAgentResponse
   */
  async updateExternalAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateExternalAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExternalAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateExternalAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateExternalAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExternalAgentResponse({}));
  }

  /**
   * Updates the configuration of a specified external agent.
   * 
   * @remarks
   * Updates the configuration of a specified external agent.
   * 
   * @param request - UpdateExternalAgentRequest
   * @returns UpdateExternalAgentResponse
   */
  async updateExternalAgent(workspaceId: string, agentId: string, request: $_model.UpdateExternalAgentRequest): Promise<$_model.UpdateExternalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExternalAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Updates the login toggle, member synchronization toggle, or application configuration of a specified external identity provider in a workspace. Unspecified properties remain unchanged. The update is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track progress.
   * 
   * @param tmpReq - UpdateIdentityProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProviderWithOptions(workspaceId: string, identityProviderType: string, tmpReq: $_model.UpdateIdentityProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIdentityProviderResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateIdentityProviderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateIdentityProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIdentityProviderResponse({}));
  }

  /**
   * Updates the login toggle, member synchronization toggle, or application configuration of a specified external identity provider in a workspace. Unspecified properties remain unchanged. The update is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track progress.
   * 
   * @param request - UpdateIdentityProviderRequest
   * @returns UpdateIdentityProviderResponse
   */
  async updateIdentityProvider(workspaceId: string, identityProviderType: string, request: $_model.UpdateIdentityProviderRequest): Promise<$_model.UpdateIdentityProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIdentityProviderWithOptions(workspaceId, identityProviderType, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified managed agent.
   * 
   * @param tmpReq - UpdateManagedAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateManagedAgentResponse
   */
  async updateManagedAgentWithOptions(workspaceId: string, agentId: string, tmpReq: $_model.UpdateManagedAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateManagedAgentResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateManagedAgentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateManagedAgentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateManagedAgentResponse({}));
  }

  /**
   * Updates the configuration of a specified managed agent.
   * 
   * @param request - UpdateManagedAgentRequest
   * @returns UpdateManagedAgentResponse
   */
  async updateManagedAgent(workspaceId: string, agentId: string, request: $_model.UpdateManagedAgentRequest): Promise<$_model.UpdateManagedAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateManagedAgentWithOptions(workspaceId, agentId, request, headers, runtime);
  }

  /**
   * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update is an asynchronous process.
   * 
   * @remarks
   * ## Operation description
   * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update is an asynchronous process.
   * 
   * @param tmpReq - UpdateMcpRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMcpResponse
   */
  async updateMcpWithOptions(workspaceId: string, mcpServerId: string, tmpReq: $_model.UpdateMcpRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMcpShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateMcpResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMcpResponse({}));
  }

  /**
   * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update is an asynchronous process.
   * 
   * @remarks
   * ## Operation description
   * Updates the address, description, authentication, or Swagger configuration of a specified MCP service. The MCP type and protocol cannot be modified after creation. The update is an asynchronous process.
   * 
   * @param request - UpdateMcpRequest
   * @returns UpdateMcpResponse
   */
  async updateMcp(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpRequest): Promise<$_model.UpdateMcpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMcpWithOptions(workspaceId, mcpServerId, request, headers, runtime);
  }

  /**
   * Updates MCP parameters by template.
   * 
   * @remarks
   * Updates the schema-exposed parameters by using the same template version that was bound when the MCP was created, without upgrading the template version.
   * 
   * @param tmpReq - UpdateMcpTemplateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMcpTemplateConfigResponse
   */
  async updateMcpTemplateConfigWithOptions(workspaceId: string, mcpServerId: string, tmpReq: $_model.UpdateMcpTemplateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpTemplateConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMcpTemplateConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["templateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateMcpTemplateConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMcpTemplateConfigResponse({}));
  }

  /**
   * Updates MCP parameters by template.
   * 
   * @remarks
   * Updates the schema-exposed parameters by using the same template version that was bound when the MCP was created, without upgrading the template version.
   * 
   * @param request - UpdateMcpTemplateConfigRequest
   * @returns UpdateMcpTemplateConfigResponse
   */
  async updateMcpTemplateConfig(workspaceId: string, mcpServerId: string, request: $_model.UpdateMcpTemplateConfigRequest): Promise<$_model.UpdateMcpTemplateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
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
  async updateMemoryWithOptions(workspaceId: string, memoryStoreName: string, memoryId: string, tmpReq: $_model.UpdateMemoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMemoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateMemoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryResponse({}));
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
  async updateMemory(workspaceId: string, memoryStoreName: string, memoryId: string, request: $_model.UpdateMemoryRequest): Promise<$_model.UpdateMemoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryWithOptions(workspaceId, memoryStoreName, memoryId, request, headers, runtime);
  }

  /**
   * Updates a memory store.
   * 
   * @remarks
   * Updates a memory store.
   * 
   * @param tmpReq - UpdateMemoryStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemoryStoreResponse
   */
  async updateMemoryStoreWithOptions(workspaceId: string, memoryStoreName: string, tmpReq: $_model.UpdateMemoryStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemoryStoreResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMemoryStoreShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateMemoryStoreResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemoryStoreResponse({}));
  }

  /**
   * Updates a memory store.
   * 
   * @remarks
   * Updates a memory store.
   * 
   * @param request - UpdateMemoryStoreRequest
   * @returns UpdateMemoryStoreResponse
   */
  async updateMemoryStore(workspaceId: string, memoryStoreName: string, request: $_model.UpdateMemoryStoreRequest): Promise<$_model.UpdateMemoryStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMemoryStoreWithOptions(workspaceId, memoryStoreName, request, headers, runtime);
  }

  /**
   * Updates the description, context token limit, maximum output token count, or capability configurations of a specified model.
   * 
   * @remarks
   * This operation supports updating description, contextSize, maxTokens, and capabilities. You must specify at least one non-null parameter. Parameters that are not specified or are set to null retain their original values. The capabilities parameter is replaced as a whole object. Capability fields that are not specified in the object are treated as false.
   * Modifying only the description does not refresh the model configurations of associated agents. When contextSize, maxTokens, or capabilities actually change, the system asynchronously refreshes managed agents that reference the model within the same workspace, as well as external agents whose model source is PLATFORM. External agents whose model source is RUNTIME are not affected. Repeatedly submitting the same configuration does not trigger a new model configuration refresh.
   * A successful response indicates that the model configuration has been saved, but does not indicate that associated agents have completed the configuration refresh or that the runtime has loaded the new configuration. You can call GetModel to query the saved model configuration.
   * 
   * @param tmpReq - UpdateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelResponse
   */
  async updateModelWithOptions(workspaceId: string, modelId: string, tmpReq: $_model.UpdateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateModelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateModelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelResponse({}));
  }

  /**
   * Updates the description, context token limit, maximum output token count, or capability configurations of a specified model.
   * 
   * @remarks
   * This operation supports updating description, contextSize, maxTokens, and capabilities. You must specify at least one non-null parameter. Parameters that are not specified or are set to null retain their original values. The capabilities parameter is replaced as a whole object. Capability fields that are not specified in the object are treated as false.
   * Modifying only the description does not refresh the model configurations of associated agents. When contextSize, maxTokens, or capabilities actually change, the system asynchronously refreshes managed agents that reference the model within the same workspace, as well as external agents whose model source is PLATFORM. External agents whose model source is RUNTIME are not affected. Repeatedly submitting the same configuration does not trigger a new model configuration refresh.
   * A successful response indicates that the model configuration has been saved, but does not indicate that associated agents have completed the configuration refresh or that the runtime has loaded the new configuration. You can call GetModel to query the saved model configuration.
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(workspaceId: string, modelId: string, request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelWithOptions(workspaceId, modelId, request, headers, runtime);
  }

  /**
   * Updates the mutable configurations of a specified model connection and resubmits the publish task. The invocation protocol cannot be modified after creation.
   * 
   * @param tmpReq - UpdateModelConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelConnectionResponse
   */
  async updateModelConnectionWithOptions(workspaceId: string, connectionId: string, tmpReq: $_model.UpdateModelConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelConnectionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateModelConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateModelConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelConnectionResponse({}));
  }

  /**
   * Updates the mutable configurations of a specified model connection and resubmits the publish task. The invocation protocol cannot be modified after creation.
   * 
   * @param request - UpdateModelConnectionRequest
   * @returns UpdateModelConnectionResponse
   */
  async updateModelConnection(workspaceId: string, connectionId: string, request: $_model.UpdateModelConnectionRequest): Promise<$_model.UpdateModelConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelConnectionWithOptions(workspaceId, connectionId, request, headers, runtime);
  }

  /**
   * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
   * 
   * @remarks
   * ## Request description
   * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
   * 
   * @param tmpReq - UpdateSkillBizTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillBizTagsResponse
   */
  async updateSkillBizTagsWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillBizTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillBizTagsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSkillBizTagsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSkillBizTagsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillBizTagsResponse({}));
  }

  /**
   * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
   * 
   * @remarks
   * ## Request description
   * Updates the business tags of a specified skill. Other attributes not provided in the request remain unchanged.
   * 
   * @param request - UpdateSkillBizTagsRequest
   * @returns UpdateSkillBizTagsResponse
   */
  async updateSkillBizTags(workspaceId: string, skillName: string, request: $_model.UpdateSkillBizTagsRequest): Promise<$_model.UpdateSkillBizTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSkillBizTagsWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Updates the version labels and their mappings for a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Updates the version labels and their mappings for a specified Skill.
   * 
   * @param tmpReq - UpdateSkillLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillLabelsResponse
   */
  async updateSkillLabelsWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillLabelsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSkillLabelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSkillLabelsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillLabelsResponse({}));
  }

  /**
   * Updates the version labels and their mappings for a specified Skill.
   * 
   * @remarks
   * ## Operation description
   * Updates the version labels and their mappings for a specified Skill.
   * 
   * @param request - UpdateSkillLabelsRequest
   * @returns UpdateSkillLabelsResponse
   */
  async updateSkillLabels(workspaceId: string, skillName: string, request: $_model.UpdateSkillLabelsRequest): Promise<$_model.UpdateSkillLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSkillLabelsWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Updates the visibility scope of a specified skill.
   * 
   * @remarks
   * ## Request description
   * Updates the visibility scope of a specified skill.
   * 
   * @param tmpReq - UpdateSkillScopeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSkillScopeResponse
   */
  async updateSkillScopeWithOptions(workspaceId: string, skillName: string, tmpReq: $_model.UpdateSkillScopeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSkillScopeResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSkillScopeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSkillScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSkillScopeResponse({}));
  }

  /**
   * Updates the visibility scope of a specified skill.
   * 
   * @remarks
   * ## Request description
   * Updates the visibility scope of a specified skill.
   * 
   * @param request - UpdateSkillScopeRequest
   * @returns UpdateSkillScopeResponse
   */
  async updateSkillScope(workspaceId: string, skillName: string, request: $_model.UpdateSkillScopeRequest): Promise<$_model.UpdateSkillScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSkillScopeWithOptions(workspaceId, skillName, request, headers, runtime);
  }

  /**
   * Updates the description and members of a specified team. When users or agents are passed, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not passed remain unchanged. The team name cannot be modified after creation.
   * 
   * @param tmpReq - UpdateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTeamResponse
   */
  async updateTeamWithOptions(workspaceId: string, teamId: string, tmpReq: $_model.UpdateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTeamResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTeamShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateTeamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTeamResponse({}));
  }

  /**
   * Updates the description and members of a specified team. When users or agents are passed, the corresponding member list is replaced based on full overwrite semantics. Member lists that are not passed remain unchanged. The team name cannot be modified after creation.
   * 
   * @param request - UpdateTeamRequest
   * @returns UpdateTeamResponse
   */
  async updateTeam(workspaceId: string, teamId: string, request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTeamWithOptions(workspaceId, teamId, request, headers, runtime);
  }

  /**
   * Updates the display name, email address, or note of a specified user. You must specify at least one of the displayName, email, and note parameters. Unspecified attributes remain unchanged. The username cannot be modified after creation.
   * 
   * @param tmpReq - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(workspaceId: string, agentCoreUserId: string, tmpReq: $_model.UpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateUserShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Updates the display name, email address, or note of a specified user. You must specify at least one of the displayName, email, and note parameters. Unspecified attributes remain unchanged. The username cannot be modified after creation.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(workspaceId: string, agentCoreUserId: string, request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(workspaceId, agentCoreUserId, request, headers, runtime);
  }

  /**
   * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this API operation.
   * 
   * @remarks
   * ## Request description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` state can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this API operation. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
   * 
   * @param tmpReq - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(workspaceId: string, tmpReq: $_model.UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Updates the name or network configuration of a workspace. Only workspaces in the Initialized state can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this API operation.
   * 
   * @remarks
   * ## Request description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` state can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this API operation. The network configuration uses `Enabled` to specify whether to enable the VPC network. If enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(workspaceId: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Imports an AgentSpec into the current workspace by retrieving and parsing an uploaded AgentSpec ZIP package from OSS.
   * 
   * @remarks
   * ## Request description
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
   * 
   * @param tmpReq - UploadAgentSpecViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadAgentSpecViaOssResponse
   */
  async uploadAgentSpecViaOssWithOptions(workspaceId: string, tmpReq: $_model.UploadAgentSpecViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadAgentSpecViaOssResponse> {
    tmpReq.validate();
    let request = new $_model.UploadAgentSpecViaOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UploadAgentSpecViaOssResponse>(await this.callApi(params, req, runtime), new $_model.UploadAgentSpecViaOssResponse({}));
  }

  /**
   * Imports an AgentSpec into the current workspace by retrieving and parsing an uploaded AgentSpec ZIP package from OSS.
   * 
   * @remarks
   * ## Request description
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses the package, and imports the AgentSpec into the current workspace.
   * 
   * @param request - UploadAgentSpecViaOssRequest
   * @returns UploadAgentSpecViaOssResponse
   */
  async uploadAgentSpecViaOss(workspaceId: string, request: $_model.UploadAgentSpecViaOssRequest): Promise<$_model.UploadAgentSpecViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadAgentSpecViaOssWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
   * 
   * @remarks
   * ## Operation description
   * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
   * 
   * @param tmpReq - UploadSkillViaOssRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadSkillViaOssResponse
   */
  async uploadSkillViaOssWithOptions(workspaceId: string, tmpReq: $_model.UploadSkillViaOssRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadSkillViaOssResponse> {
    tmpReq.validate();
    let request = new $_model.UploadSkillViaOssShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UploadSkillViaOssResponse>(await this.callApi(params, req, runtime), new $_model.UploadSkillViaOssResponse({}));
  }

  /**
   * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
   * 
   * @remarks
   * ## Operation description
   * Retrieves an uploaded Skill ZIP package from OSS, parses it, and imports the Skill into the current workspace.
   * 
   * @param request - UploadSkillViaOssRequest
   * @returns UploadSkillViaOssResponse
   */
  async uploadSkillViaOss(workspaceId: string, request: $_model.UploadSkillViaOssRequest): Promise<$_model.UploadSkillViaOssResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadSkillViaOssWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Validates whether one or more Qoder Service Account Keys are available at a specified site. This operation does not save keys or modify the Connector status.
   * 
   * @remarks
   * Validates whether the credentials of a specified Connector are valid and returns a list of invalid Service Account Keys.
   * 
   * @param tmpReq - VerifyConnectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyConnectorResponse
   */
  async verifyConnectorWithOptions(workspaceId: string, connectorName: string, tmpReq: $_model.VerifyConnectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyConnectorResponse> {
    tmpReq.validate();
    let request = new $_model.VerifyConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      body["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.VerifyConnectorResponse>(await this.callApi(params, req, runtime), new $_model.VerifyConnectorResponse({}));
  }

  /**
   * Validates whether one or more Qoder Service Account Keys are available at a specified site. This operation does not save keys or modify the Connector status.
   * 
   * @remarks
   * Validates whether the credentials of a specified Connector are valid and returns a list of invalid Service Account Keys.
   * 
   * @param request - VerifyConnectorRequest
   * @returns VerifyConnectorResponse
   */
  async verifyConnector(workspaceId: string, connectorName: string, request: $_model.VerifyConnectorRequest): Promise<$_model.VerifyConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyConnectorWithOptions(workspaceId, connectorName, request, headers, runtime);
  }

  /**
   * Verifies the ACR RAM authorization for a workspace.
   * 
   * @remarks
   * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. This operation performs a read-only check to verify whether the custom policies corresponding to the target instance, namespace, and repository are attached to the shared role, and checks the workspace prerequisites. It does not create execution versions or trigger configuration delivery. AUTHORIZED only indicates that the custom policy for the target name is attached, without parsing the policy content or simulating the final permissions. ELIGIBLE does not mean that RuntimeManager capacity or template admission is complete, nor does it require ACR configuration to be delivered. Creating or updating an agent re-verifies permissions and processes ACR dependencies on the backend. Configuration waiting, failures, and retries are reported through agent details.
   * 
   * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyWorkspaceAcrRamAuthorizationResponse
   */
  async verifyWorkspaceAcrRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceAcrRamAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceAcrRamAuthorizationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      query["acrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.repository)) {
      query["repository"] = request.repository;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.VerifyWorkspaceAcrRamAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceAcrRamAuthorizationResponse({}));
  }

  /**
   * Verifies the ACR RAM authorization for a workspace.
   * 
   * @remarks
   * ACR and user OSS mounts share the workspace role. If no existing role is found, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is retained and only new permissions are appended without overwriting existing OSS policies. Fixed historical shared roles continue to be reused and are not recreated or renamed due to new naming templates. This operation performs a read-only check to verify whether the custom policies corresponding to the target instance, namespace, and repository are attached to the shared role, and checks the workspace prerequisites. It does not create execution versions or trigger configuration delivery. AUTHORIZED only indicates that the custom policy for the target name is attached, without parsing the policy content or simulating the final permissions. ELIGIBLE does not mean that RuntimeManager capacity or template admission is complete, nor does it require ACR configuration to be delivered. Creating or updating an agent re-verifies permissions and processes ACR dependencies on the backend. Configuration waiting, failures, and retries are reported through agent details.
   * 
   * @param request - VerifyWorkspaceAcrRamAuthorizationRequest
   * @returns VerifyWorkspaceAcrRamAuthorizationResponse
   */
  async verifyWorkspaceAcrRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAcrRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAcrRamAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyWorkspaceAcrRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the RAM authorization status of AgenticFS mounting for a workspace.
   * 
   * @remarks
   * Determines the shared role and target access point based on the workspace and server, checks whether the role has a mounted policy with the expected name and a type of Custom, and returns AUTHORIZED or UNAUTHORIZED. Consistent with OSS/ACR, this operation does not verify the policy body, role trust, or actual mount read/write permissions. If the upstream query fails, an error is returned.
   * 
   * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
   */
  async verifyWorkspaceAgenticFsMountRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.server)) {
      query["server"] = request.server;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse({}));
  }

  /**
   * Queries the RAM authorization status of AgenticFS mounting for a workspace.
   * 
   * @remarks
   * Determines the shared role and target access point based on the workspace and server, checks whether the role has a mounted policy with the expected name and a type of Custom, and returns AUTHORIZED or UNAUTHORIZED. Consistent with OSS/ACR, this operation does not verify the policy body, role trust, or actual mount read/write permissions. If the upstream query fails, an error is returned.
   * 
   * @param request - VerifyWorkspaceAgenticFsMountRamAuthorizationRequest
   * @returns VerifyWorkspaceAgenticFsMountRamAuthorizationResponse
   */
  async verifyWorkspaceAgenticFsMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceAgenticFsMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceAgenticFsMountRamAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyWorkspaceAgenticFsMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Verifies the RAM authorization for a workspace to access an OSS bucket and returns the current authorization status. When bucketName is specified, verifies the authorization for an agent-mounted bucket. When bucketName is not specified, verifies and updates the authorization status of the workspace\\"s private OSS storage.
   * 
   * @remarks
   * Queries whether the workspace OSS mount role is bound to the custom RAM policy corresponding to the target bucket, and returns AUTHORIZED or UNAUTHORIZED. When bucketName is not specified, the existing user-managed OSS binding of the workspace is used and the authorization status is saved. When bucketName is specified, only the authorization status of the specified bucket is queried without modifying the workspace OSS binding. This operation does not verify OSS data plane access permissions or resume workspace initialization tasks. Alibaba Cloud Container Registry (ACR) and user OSS mounts share the workspace role. If no existing role is available, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are only appended without overwriting existing OSS policies. Previously pinned shared roles continue to be reused and are not recreated or renamed due to new naming templates.
   * 
   * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
   */
  async verifyWorkspaceOssMountRamAuthorizationWithOptions(workspaceId: string, request: $_model.VerifyWorkspaceOssMountRamAuthorizationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.VerifyWorkspaceOssMountRamAuthorizationResponse({}));
  }

  /**
   * Verifies the RAM authorization for a workspace to access an OSS bucket and returns the current authorization status. When bucketName is specified, verifies the authorization for an agent-mounted bucket. When bucketName is not specified, verifies and updates the authorization status of the workspace\\"s private OSS storage.
   * 
   * @remarks
   * Queries whether the workspace OSS mount role is bound to the custom RAM policy corresponding to the target bucket, and returns AUTHORIZED or UNAUTHORIZED. When bucketName is not specified, the existing user-managed OSS binding of the workspace is used and the authorization status is saved. When bucketName is specified, only the authorization status of the specified bucket is queried without modifying the workspace OSS binding. This operation does not verify OSS data plane access permissions or resume workspace initialization tasks. Alibaba Cloud Container Registry (ACR) and user OSS mounts share the workspace role. If no existing role is available, AliyunAgentCoreWorkspace-{workspaceId} is used. If a valid legacy OSS mount role exists, it is reused and permissions are only appended without overwriting existing OSS policies. Previously pinned shared roles continue to be reused and are not recreated or renamed due to new naming templates.
   * 
   * @param request - VerifyWorkspaceOssMountRamAuthorizationRequest
   * @returns VerifyWorkspaceOssMountRamAuthorizationResponse
   */
  async verifyWorkspaceOssMountRamAuthorization(workspaceId: string, request: $_model.VerifyWorkspaceOssMountRamAuthorizationRequest): Promise<$_model.VerifyWorkspaceOssMountRamAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyWorkspaceOssMountRamAuthorizationWithOptions(workspaceId, request, headers, runtime);
  }

}
