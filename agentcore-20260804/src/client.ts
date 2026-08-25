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
   * 更新模型
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
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelResponse({}));
  }

  /**
   * 更新模型
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
   * 更新模型连接
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
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelConnectionResponse({}));
  }

  /**
   * 更新模型连接
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

}
