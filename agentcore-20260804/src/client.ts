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
   * 批量删除模型
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
   * 批量删除模型
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
   * Uploads Skill ZIP packages in bulk through OSS and returns the processing result of each Skill.
   * 
   * @remarks
   * ## Operation description
   * Uploads Skill ZIP packages in bulk through OSS and returns the processing result of each Skill.
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
   * Uploads Skill ZIP packages in bulk through OSS and returns the processing result of each Skill.
   * 
   * @remarks
   * ## Operation description
   * Uploads Skill ZIP packages in bulk through OSS and returns the processing result of each Skill.
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
   * Creates an IM channel for a specified agent and binds a publicly accessible ServiceEndpoint.
   * 
   * @remarks
   * Creates an IM channel for a specified agent and binds a publicly accessible ServiceEndpoint.
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
   * Creates an IM channel for a specified agent and binds a publicly accessible ServiceEndpoint.
   * 
   * @remarks
   * Creates an IM channel for a specified agent and binds a publicly accessible ServiceEndpoint.
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
   * Creates an AgentSpec in the specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @remarks
   * ## Operation description
   * Creates an AgentSpec in the specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
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
   * Creates an AgentSpec in the specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
   * 
   * @remarks
   * ## Operation description
   * Creates an AgentSpec in the specified workspace and generates the first draft version. Returns a resource conflict error if an AgentSpec with the same name already exists.
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
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist, and there must not be a draft currently being edited.
   * 
   * @remarks
   * ## Request description
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist, and there must not be a draft currently being edited.
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
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist, and there must not be a draft currently being edited.
   * 
   * @remarks
   * ## Request description
   * Creates a new draft version for an existing AgentSpec. The AgentSpec must exist, and there must not be a draft currently being edited.
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
   * 创建凭证
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
   * 创建凭证
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
   * Creates a Bootstrap Token and CMS configuration required for connecting a specified external agent.
   * 
   * @remarks
   * Creates a Bootstrap Token and CMS configuration required for connecting a specified external agent.
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
   * Creates a Bootstrap Token and CMS configuration required for connecting a specified external agent.
   * 
   * @remarks
   * Creates a Bootstrap Token and CMS configuration required for connecting a specified external agent.
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
   * Binds an external identity provider to a specified workspace for single sign-on and organization member synchronization. Each workspace can be bound to at most one external identity provider. The binding is an asynchronous operation. After the API returns, you can track the progress by querying the status through GetIdentityProvider.
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
   * Binds an external identity provider to a specified workspace for single sign-on and organization member synchronization. Each workspace can be bound to at most one external identity provider. The binding is an asynchronous operation. After the API returns, you can track the progress by querying the status through GetIdentityProvider.
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
   * Creates a model configuration under a specified model connection in a workspace.
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
   * Creates a model configuration under a specified model connection in a workspace.
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
   * 创建模型连接
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
   * 创建模型连接
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
   * 创建团队
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
   * 创建团队
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
   * 创建用户
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
   * 创建用户
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
   * ## Operation description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable VPC networking. When enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
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
   * ## Operation description\\nCreates an AgentCore workspace control plane record. The server completes the state transition from `Initializing` to `Initialized` within the same transaction. The network configuration uses `Enabled` to specify whether to enable VPC networking. When enabled, you must provide `VpcId` and at least one `VSwitchIds`.\\n.
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
   * 调试模型
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
   * 调试模型
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
   * Deletes a specified AgentSpec along with all its versions and metadata. This operation is irreversible.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified AgentSpec along with all its versions and metadata. This operation is irreversible.
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
   * Deletes a specified AgentSpec along with all its versions and metadata. This operation is irreversible.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified AgentSpec along with all its versions and metadata. This operation is irreversible.
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
   * 删除凭证
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
   * 删除凭证
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
   * Unbinds the external identity provider from a specified workspace and cleans up users synchronized by that identity provider. The unbinding is an asynchronous operation. After the API returns, you can track the progress by querying the status through GetIdentityProvider.
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
   * Unbinds the external identity provider from a specified workspace and cleans up users synchronized by that identity provider. The unbinding is an asynchronous operation. After the API returns, you can track the progress by querying the status through GetIdentityProvider.
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
   * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
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
   * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
   * 
   * @remarks
   * ## Request description
   * Deletes a specified MCP service. The deletion is an asynchronous process. After the deletion is complete, the MCP service is no longer returned.
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
   * 删除模型
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
   * 删除模型
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
   * 删除模型连接
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
   * 删除模型连接
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
   * ## Request description
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
   * ## Request description
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
   * ## Request description
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
   * ## Request description
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
   * 删除团队
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
   * 删除团队
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
   * 删除用户
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
   * 删除用户
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
   * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. When you repeatedly delete a workspace that is in the Deleting or Deleted state, the server handles the request with idempotence semantics.
   * 
   * @remarks
   * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. When you repeatedly delete a workspace that is in the `Deleting` or `Deleted` state, the server handles the request with idempotence semantics.\\n.
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
   * Deletes the control plane record of a specified workspace. The server completes the state transition from Deleting to Deleted within the same transaction. When you repeatedly delete a workspace that is in the Deleting or Deleted state, the server handles the request with idempotence semantics.
   * 
   * @remarks
   * ## Request description\\nDeletes the control plane record of a specified workspace. The server completes the state transition from `Deleting` to `Deleted` within the same transaction. When you repeatedly delete a workspace that is in the `Deleting` or `Deleted` state, the server handles the request with idempotence semantics.\\n.
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
   * Retrieves a pre-signed OSS download URL for a specified AgentSpec ZIP package.
   * 
   * @remarks
   * ## Operation description
   * Retrieves a pre-signed OSS download URL for a specified AgentSpec, which is used to download the AgentSpec ZIP package.
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
   * Retrieves a pre-signed OSS download URL for a specified AgentSpec ZIP package.
   * 
   * @remarks
   * ## Operation description
   * Retrieves a pre-signed OSS download URL for a specified AgentSpec, which is used to download the AgentSpec ZIP package.
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
   * ## Request description
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
   * ## Request description
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
   * Skips the regular review process and forcibly publishes the specified Skill version.
   * 
   * @remarks
   * ## Request description
   * Skips the regular review process and forcibly publishes the specified Skill version.
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
   * Skips the regular review process and forcibly publishes the specified Skill version.
   * 
   * @remarks
   * ## Request description
   * Skips the regular review process and forcibly publishes the specified Skill version.
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
   * ## Operation description
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
   * ## Operation description
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
   * Retrieves the OSS pre-signed upload URL and object name required for importing an AgentSpec ZIP package. After the upload is complete, call the AgentSpec OSS upload operation to complete the import.
   * 
   * @remarks
   * ## Operation description
   * Retrieves the OSS pre-signed upload URL and object name required for importing an AgentSpec ZIP package. After the upload is complete, call the AgentSpec OSS upload operation to complete the import.
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
   * Retrieves the OSS pre-signed upload URL and object name required for importing an AgentSpec ZIP package. After the upload is complete, call the AgentSpec OSS upload operation to complete the import.
   * 
   * @remarks
   * ## Operation description
   * Retrieves the OSS pre-signed upload URL and object name required for importing an AgentSpec ZIP package. After the upload is complete, call the AgentSpec OSS upload operation to complete the import.
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
   * Queries the complete content of a specified AgentSpec version, including manifest content, resource files, and metadata.
   * 
   * @remarks
   * ## Operation description
   * Queries the complete content of a specified AgentSpec version, including manifest content, resource files, and metadata.
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
   * Queries the complete content of a specified AgentSpec version, including manifest content, resource files, and metadata.
   * 
   * @remarks
   * ## Operation description
   * Queries the complete content of a specified AgentSpec version, including manifest content, resource files, and metadata.
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
   * 查询凭证
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
   * 查询凭证
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
   * Queries the available network types for a specified external agent.
   * 
   * @remarks
   * Queries the available network types for a specified external agent.
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
   * Queries the available network types for a specified external agent.
   * 
   * @remarks
   * Queries the available network types for a specified external agent.
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
   * Queries the binding details of an external identity provider for a specified workspace, including the binding status, application configuration, and callback URLs that need to be configured on the identity provider side. Application secret configurations are not returned.
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
   * Queries the binding details of an external identity provider for a specified workspace, including the binding status, application configuration, and callback URLs that need to be configured on the identity provider side. Application secret configurations are not returned.
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
   * Queries the details of a specified MCP service, including its address, type, status, authentication configuration, and protocol.
   * 
   * @remarks
   * ## Operation description
   * Queries the details of a specified MCP service, including its address, type, status, authentication configuration, and protocol.
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
   * Queries the details of a specified MCP service, including its address, type, status, authentication configuration, and protocol.
   * 
   * @remarks
   * ## Operation description
   * Queries the details of a specified MCP service, including its address, type, status, authentication configuration, and protocol.
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
   * 查询模型连接
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
   * 查询模型连接
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
   * Queries the currently active API Key and its invocation method for a specified service endpoint within a workspace.
   * 
   * @remarks
   * Queries the currently active API Key for a specified service endpoint. The call succeeds only when the service endpoint has API_KEY authentication enabled and the gateway consumer and credentials are ready. The service reads the API Key from the gateway in real time. AgentCore does not persist the plaintext. Keep the returned API Key secure and avoid logging it or exposing it in public configurations.
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
   * Queries the currently active API Key and its invocation method for a specified service endpoint within a workspace.
   * 
   * @remarks
   * Queries the currently active API Key for a specified service endpoint. The call succeeds only when the service endpoint has API_KEY authentication enabled and the gateway consumer and credentials are ready. The service reads the API Key from the gateway in real time. AgentCore does not persist the plaintext. Keep the returned API Key secure and avoid logging it or exposing it in public configurations.
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
   * Retrieves the OSS pre-signed upload URL and object name required for importing a Skill ZIP package. After the upload is complete, call the Skill OSS upload operation to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS pre-signed upload URL and object name required for importing a Skill ZIP package. After the upload is complete, call the Skill OSS upload operation to complete the import.
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
   * Retrieves the OSS pre-signed upload URL and object name required for importing a Skill ZIP package. After the upload is complete, call the Skill OSS upload operation to complete the import.
   * 
   * @remarks
   * ## Request description
   * Retrieves the OSS pre-signed upload URL and object name required for importing a Skill ZIP package. After the upload is complete, call the Skill OSS upload operation to complete the import.
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
   * 查询团队
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
   * 查询团队
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
   * 查询用户
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
   * 查询用户
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
   * Queries workspace details by workspace ID, including lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policy.
   * 
   * @remarks
   * ## Operation description\\nQueries workspace details by workspace ID, including lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policy.\\n.
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
   * Queries workspace details by workspace ID, including lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policy.
   * 
   * @remarks
   * ## Operation description\\nQueries workspace details by workspace ID, including lifecycle status, CMS Workspace, AIRegistry Namespace, and current network policy.\\n.
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
   * Installs a plugin for a specified AgentCore workspace. Currently supports the collaboration plugin. The installation process is executed asynchronously.
   * 
   * @remarks
   * ## Operation description\\nInstalls a plugin for a specified AgentCore workspace. Currently supports the `collaboration` plugin. Plugin configuration is passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify VPC and public network access policies. The installation process is executed asynchronously. When you repeatedly call this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status with idempotent semantics if the configuration is the same. If the configuration is different, the operation returns an operation conflict error.\\n.
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
   * Installs a plugin for a specified AgentCore workspace. Currently supports the collaboration plugin. The installation process is executed asynchronously.
   * 
   * @remarks
   * ## Operation description\\nInstalls a plugin for a specified AgentCore workspace. Currently supports the `collaboration` plugin. Plugin configuration is passed through the `Config` parameter, and different plugins can define their own configuration structures. The `collaboration` plugin uses `Config.NetworkConfiguration` to specify VPC and public network access policies. The installation process is executed asynchronously. When you repeatedly call this operation for a plugin with the same name that is being installed or already installed, the operation returns the current status with idempotent semantics if the configuration is the same. If the configuration is different, the operation returns an operation conflict error.\\n.
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
   * Queries the IM channel list of a specified agent.
   * 
   * @remarks
   * Queries the IM channel list of a specified agent.
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
   * Queries the IM channel list of a specified agent.
   * 
   * @remarks
   * Queries the IM channel list of a specified agent.
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
   * Queries AgentSpec resources in a specified workspace by using paging, supporting name search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @remarks
   * ## Operation description
   * Queries AgentSpec resources in a specified workspace by using paging, supporting name search, sorting, and filtering by owner, visibility scope, and business labels.
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
   * Queries AgentSpec resources in a specified workspace by using paging, supporting name search, sorting, and filtering by owner, visibility scope, and business labels.
   * 
   * @remarks
   * ## Operation description
   * Queries AgentSpec resources in a specified workspace by using paging, supporting name search, sorting, and filtering by owner, visibility scope, and business labels.
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
   * Queries the list of teams to which specified agents belong. Specify the agent IDs through agentIds to retrieve the membership information between each agent and its teams, including the team ID, team name, and the role that the agent assumes in the team.
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
   * Queries the list of teams to which specified agents belong. Specify the agent IDs through agentIds to retrieve the membership information between each agent and its teams, including the team ID, team name, and the role that the agent assumes in the team.
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
   * 查询凭证列表
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
   * 查询凭证列表
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
   * Queries the external identity provider bound to a specified workspace. Each workspace can be bound to at most one external identity provider, so the response returns at most one record. Application secret configurations are not returned.
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
   * Queries the external identity provider bound to a specified workspace. Each workspace can be bound to at most one external identity provider, so the response returns at most one record. Application secret configurations are not returned.
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
   * 查询模型连接列表
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
   * 查询模型连接列表
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
   * 查询预定义模型供应商目录
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
   * 查询预定义模型供应商目录
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
   * Queries the models and their capability information for a specified provider in the AgentCore built-in model catalog.
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
   * Queries the models and their capability information for a specified provider in the AgentCore built-in model catalog.
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
   * Queries service endpoints in a specified workspace by using paging. Supports filtering by target type, agent, collaboration component, and status.
   * 
   * @remarks
   * ## Request description\\nQueries service endpoints in a specified workspace by using paging. Filter results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
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
   * Queries service endpoints in a specified workspace by using paging. Supports filtering by target type, agent, collaboration component, and status.
   * 
   * @remarks
   * ## Request description\\nQueries service endpoints in a specified workspace by using paging. Filter results by targetType, agentId, agentVersion, resourceBindingId, collaborationComponent, and status. Use maxResults to specify the maximum number of records per page, and use nextToken to retrieve the next page. If maxResults is not specified, the server returns 20 records by default.\\n
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
   * Performs a paged query of Skills in a specified workspace, and returns basic Skill information, version status, and paging details.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query of Skills in a specified workspace, and returns basic Skill information, version status, and paging details.
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
   * Performs a paged query of Skills in a specified workspace, and returns basic Skill information, version status, and paging details.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query of Skills in a specified workspace, and returns basic Skill information, version status, and paging details.
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
   * 查询团队列表
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
   * 查询团队列表
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
   * 查询用户列表
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(workspaceId: string, request: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
   * 查询用户列表
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
   * Queries workspaces under the current tenant with paging. The list does not return soft-deleted records with a status of Deleted by default. Results are stably sorted by creation order on the server side.
   * 
   * @remarks
   * ## Request description\\nQueries workspaces under the current tenant with paging. The list does not return soft-deleted records with a status of `Deleted` by default. Results are stably sorted by creation order on the server side. Use `nextToken` to retrieve the next page, `skip` to skip a specified number of workspaces, `maxResults` to specify the maximum number of records per page, and `nameLike` to filter workspaces by name using fuzzy match. If `maxResults` is not specified or is set to 0, the server returns 20 records by default.\\n
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
   * Queries workspaces under the current tenant with paging. The list does not return soft-deleted records with a status of Deleted by default. Results are stably sorted by creation order on the server side.
   * 
   * @remarks
   * ## Request description\\nQueries workspaces under the current tenant with paging. The list does not return soft-deleted records with a status of `Deleted` by default. Results are stably sorted by creation order on the server side. Use `nextToken` to retrieve the next page, `skip` to skip a specified number of workspaces, `maxResults` to specify the maximum number of records per page, and `nameLike` to filter workspaces by name using fuzzy match. If `maxResults` is not specified or is set to 0, the server returns 20 records by default.\\n
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
   * ## Request description
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
   * ## Request description
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
   * ## Request description
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
   * ## Request description
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
   * Publishes a specified Skill version to change its state to published.
   * 
   * @remarks
   * ## Operation description
   * Publishes a specified Skill version to change its state to published.
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
   * Publishes a specified Skill version to change its state to published.
   * 
   * @remarks
   * ## Operation description
   * Publishes a specified Skill version to change its state to published.
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
   * Converts a specified Skill version back into an editable draft for further modifications.
   * 
   * @remarks
   * ## Operation description
   * Converts a specified Skill version back into an editable draft for further modifications.
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
   * Converts a specified Skill version back into an editable draft for further modifications.
   * 
   * @remarks
   * ## Operation description
   * Converts a specified Skill version back into an editable draft for further modifications.
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
   * 重置用户密码
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
   * 重置用户密码
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
   * Submits a specified AgentSpec draft version for review. If no release pipeline is configured, the version is published directly to online status.
   * 
   * @remarks
   * ## Operation description
   * Submits a specified AgentSpec draft version for review. If no release pipeline is configured, the version is published directly to online status.
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
   * Submits a specified AgentSpec draft version for review. If no release pipeline is configured, the version is published directly to online status.
   * 
   * @remarks
   * ## Operation description
   * Submits a specified AgentSpec draft version for review. If no release pipeline is configured, the version is published directly to online status.
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
   * Updates the ServiceEndpoint binding, enabled/disabled status, or channel behavior configuration of an IM channel. At least one updatable field must be provided.
   * 
   * @remarks
   * Updates the ServiceEndpoint binding, enabled/disabled status, or channel behavior configuration of an IM channel. At least one updatable field must be provided.
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
   * Updates the ServiceEndpoint binding, enabled/disabled status, or channel behavior configuration of an IM channel. At least one updatable field must be provided.
   * 
   * @remarks
   * Updates the ServiceEndpoint binding, enabled/disabled status, or channel behavior configuration of an IM channel. At least one updatable field must be provided.
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
   * Performs a full update of the channel credential for a specified IM channel of an agent. Secrets are not returned in the response.
   * 
   * @remarks
   * Performs a full update of the channel credential for a specified IM channel of an agent. Secrets are not returned in the response.
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
   * Performs a full update of the channel credential for a specified IM channel of an agent. Secrets are not returned in the response.
   * 
   * @remarks
   * Performs a full update of the channel credential for a specified IM channel of an agent. Secrets are not returned in the response.
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
   * 更新凭证
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
   * 更新凭证
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
   * Updates the login switch, member synchronization switch, or application configuration of a specified external identity provider in a workspace. Unspecified properties remain unchanged. The update is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track progress.
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
   * Updates the login switch, member synchronization switch, or application configuration of a specified external identity provider in a workspace. Unspecified properties remain unchanged. The update is an asynchronous operation. After the API returns, you can call GetIdentityProvider to query the status and track progress.
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
   * Updates the description of a specified model. Other model configurations cannot be modified through this operation.
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
   * Updates the description of a specified model. Other model configurations cannot be modified through this operation.
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
   * Updates the mutable configuration of a specified model connection and resubmits the publish task. The protocol cannot be modified after the model connection is created.
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
   * Updates the mutable configuration of a specified model connection and resubmits the publish task. The protocol cannot be modified after the model connection is created.
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
   * Updates the business tags of a specified Skill. Other attributes that are not included in the request remain unchanged.
   * 
   * @remarks
   * ## Operation description
   * Updates the business tags of a specified Skill. Other attributes that are not included in the request remain unchanged.
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
   * Updates the business tags of a specified Skill. Other attributes that are not included in the request remain unchanged.
   * 
   * @remarks
   * ## Operation description
   * Updates the business tags of a specified Skill. Other attributes that are not included in the request remain unchanged.
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
   * ## Request description
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
   * ## Request description
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
   * 更新团队
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
   * 更新团队
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
   * 更新用户
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
   * 更新用户
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
   * Updates the name or network configuration of a workspace. Only workspaces in the Initialized status can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this operation.
   * 
   * @remarks
   * ## Operation description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` status can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this operation. The network configuration uses `Enabled` to specify whether to enable VPC networking. When enabled, you must also provide `VpcId` and at least one `VSwitchIds`.\\n.
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
   * Updates the name or network configuration of a workspace. Only workspaces in the Initialized status can be updated. Status, TenantId, and RegionId are maintained by the server and cannot be modified through this operation.
   * 
   * @remarks
   * ## Operation description\\nUpdates the name or network configuration of a workspace. Only workspaces in the `Initialized` status can be updated. `Status`, `TenantId`, and `RegionId` are maintained by the server and cannot be modified through this operation. The network configuration uses `Enabled` to specify whether to enable VPC networking. When enabled, you must also provide `VpcId` and at least one `VSwitchIds`.\\n.
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
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
   * 
   * @remarks
   * ## Operation description
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
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
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
   * 
   * @remarks
   * ## Operation description
   * Retrieves an uploaded AgentSpec ZIP package from OSS, parses it, and imports the AgentSpec into the current workspace.
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

}
