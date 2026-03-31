// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("modelstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建ApiKey
   * 
   * @param request - CreateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiKeyResponse
   */
  async createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
  }

  /**
   * 创建ApiKey
   * 
   * @param request - CreateApiKeyRequest
   * @returns CreateApiKeyResponse
   */
  async createApiKey(request: $_model.CreateApiKeyRequest): Promise<$_model.CreateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApiKeyWithOptions(request, headers, runtime);
  }

  /**
   * 创建业务空间
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * 创建业务空间
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
   * 删除apiKey
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKeyWithOptions(apiKeyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
  }

  /**
   * 删除apiKey
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKey(apiKeyId: string): Promise<$_model.DeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiKeyWithOptions(apiKeyId, headers, runtime);
  }

  /**
   * 查询ApiKey详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiKeyResponse
   */
  async getApiKeyWithOptions(apiKeyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetApiKeyResponse({}));
  }

  /**
   * 查询ApiKey详情
   * @returns GetApiKeyResponse
   */
  async getApiKey(apiKeyId: string): Promise<$_model.GetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiKeyWithOptions(apiKeyId, headers, runtime);
  }

  /**
   * 获取ApiKey列表
   * 
   * @param request - ListApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyId)) {
      query["apiKeyId"] = request.apiKeyId;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * 获取ApiKey列表
   * 
   * @param request - ListApiKeysRequest
   * @returns ListApiKeysResponse
   */
  async listApiKeys(request: $_model.ListApiKeysRequest): Promise<$_model.ListApiKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiKeysWithOptions(request, headers, runtime);
  }

  /**
   * 业务空间列表
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

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * 业务空间列表
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
   * 编辑apiKey的描述
   * 
   * @param request - UpdateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiKeyResponse
   */
  async updateApiKeyWithOptions(apiKeyId: string, request: $_model.UpdateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiKey",
      version: "2026-02-10",
      protocol: "HTTPS",
      pathname: `/modelstudio/apikeys/${$dara.URL.percentEncode(apiKeyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyResponse({}));
  }

  /**
   * 编辑apiKey的描述
   * 
   * @param request - UpdateApiKeyRequest
   * @returns UpdateApiKeyResponse
   */
  async updateApiKey(apiKeyId: string, request: $_model.UpdateApiKeyRequest): Promise<$_model.UpdateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApiKeyWithOptions(apiKeyId, request, headers, runtime);
  }

}
