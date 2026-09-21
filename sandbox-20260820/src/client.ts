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
    this._endpointMap = {
      'cn-hangzhou': "sandbox-vpc.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sandbox", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建 ApiKey
   * 
   * @param request - CreateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiKeyResponse
   */
  async createApiKeyWithOptions(request: $_model.CreateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiKey",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiKeyResponse({}));
  }

  /**
   * 创建 ApiKey
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
   * 创建 Team
   * 
   * @param request - CreateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTeamResponse
   */
  async createTeamWithOptions(request: $_model.CreateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTeam",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/teams`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTeamResponse>(await this.callApi(params, req, runtime), new $_model.CreateTeamResponse({}));
  }

  /**
   * 创建 Team
   * 
   * @param request - CreateTeamRequest
   * @returns CreateTeamResponse
   */
  async createTeam(request: $_model.CreateTeamRequest): Promise<$_model.CreateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTeamWithOptions(request, headers, runtime);
  }

  /**
   * 创建 Template
   * 
   * @param request - CreateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * 创建 Template
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 创建模板缓存
   * 
   * @param request - CreateTemplateCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateCacheResponse
   */
  async createTemplateCacheWithOptions(request: $_model.CreateTemplateCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateCacheResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplateCache",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/template-caches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateCacheResponse({}));
  }

  /**
   * 创建模板缓存
   * 
   * @param request - CreateTemplateCacheRequest
   * @returns CreateTemplateCacheResponse
   */
  async createTemplateCache(request: $_model.CreateTemplateCacheRequest): Promise<$_model.CreateTemplateCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateCacheWithOptions(request, headers, runtime);
  }

  /**
   * 创建 Volume
   * 
   * @param request - CreateVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVolumeResponse
   */
  async createVolumeWithOptions(request: $_model.CreateVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVolumeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVolume",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/volumes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVolumeResponse>(await this.callApi(params, req, runtime), new $_model.CreateVolumeResponse({}));
  }

  /**
   * 创建 Volume
   * 
   * @param request - CreateVolumeRequest
   * @returns CreateVolumeResponse
   */
  async createVolume(request: $_model.CreateVolumeRequest): Promise<$_model.CreateVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVolumeWithOptions(request, headers, runtime);
  }

  /**
   * 删除 ApiKey
   * 
   * @param request - DeleteApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKeyWithOptions(apiKeyID: string, request: $_model.DeleteApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiKey",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiKeyResponse({}));
  }

  /**
   * 删除 ApiKey
   * 
   * @param request - DeleteApiKeyRequest
   * @returns DeleteApiKeyResponse
   */
  async deleteApiKey(apiKeyID: string, request: $_model.DeleteApiKeyRequest): Promise<$_model.DeleteApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * 删除 quota 配置
   * 
   * @param request - DeleteQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaResponse
   */
  async deleteQuotaWithOptions(request: $_model.DeleteQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagValue)) {
      query["tagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuota",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/quotas/tag`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQuotaResponse({}));
  }

  /**
   * 删除 quota 配置
   * 
   * @param request - DeleteQuotaRequest
   * @returns DeleteQuotaResponse
   */
  async deleteQuota(request: $_model.DeleteQuotaRequest): Promise<$_model.DeleteQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 删除 Team
   * 
   * @param request - DeleteTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTeamResponse
   */
  async deleteTeamWithOptions(teamID: string, request: $_model.DeleteTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTeam",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTeamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTeamResponse({}));
  }

  /**
   * 删除 Team
   * 
   * @param request - DeleteTeamRequest
   * @returns DeleteTeamResponse
   */
  async deleteTeam(teamID: string, request: $_model.DeleteTeamRequest): Promise<$_model.DeleteTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * 删除 Template
   * 
   * @param request - DeleteTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(templateID: string, request: $_model.DeleteTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/templates/${$dara.URL.percentEncode(templateID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * 删除 Template
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(templateID: string, request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(templateID, request, headers, runtime);
  }

  /**
   * 删除模板缓存
   * 
   * @param request - DeleteTemplateCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateCacheResponse
   */
  async deleteTemplateCacheWithOptions(templateID: string, request: $_model.DeleteTemplateCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateCacheResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplateCache",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/template-caches/${$dara.URL.percentEncode(templateID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateCacheResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateCacheResponse({}));
  }

  /**
   * 删除模板缓存
   * 
   * @param request - DeleteTemplateCacheRequest
   * @returns DeleteTemplateCacheResponse
   */
  async deleteTemplateCache(templateID: string, request: $_model.DeleteTemplateCacheRequest): Promise<$_model.DeleteTemplateCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateCacheWithOptions(templateID, request, headers, runtime);
  }

  /**
   * 删除 Volume
   * 
   * @param request - DeleteVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVolumeResponse
   */
  async deleteVolumeWithOptions(volumeID: string, request: $_model.DeleteVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVolumeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVolume",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVolumeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVolumeResponse({}));
  }

  /**
   * 删除 Volume
   * 
   * @param request - DeleteVolumeRequest
   * @returns DeleteVolumeResponse
   */
  async deleteVolume(volumeID: string, request: $_model.DeleteVolumeRequest): Promise<$_model.DeleteVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVolumeWithOptions(volumeID, request, headers, runtime);
  }

  /**
   * 查看 ApiKey
   * 
   * @param request - DescribeApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiKeyResponse
   */
  async describeApiKeyWithOptions(apiKeyID: string, request: $_model.DescribeApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiKey",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApiKeyResponse({}));
  }

  /**
   * 查看 ApiKey
   * 
   * @param request - DescribeApiKeyRequest
   * @returns DescribeApiKeyResponse
   */
  async describeApiKey(apiKeyID: string, request: $_model.DescribeApiKeyRequest): Promise<$_model.DescribeApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * 获取 quota 配置
   * 
   * @param request - DescribeQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeQuotaResponse
   */
  async describeQuotaWithOptions(request: $_model.DescribeQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagValue)) {
      query["tagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeQuota",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/quotas/tag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeQuotaResponse({}));
  }

  /**
   * 获取 quota 配置
   * 
   * @param request - DescribeQuotaRequest
   * @returns DescribeQuotaResponse
   */
  async describeQuota(request: $_model.DescribeQuotaRequest): Promise<$_model.DescribeQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 查询模板缓存
   * 
   * @param request - DescribeTemplateCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateCacheResponse
   */
  async describeTemplateCacheWithOptions(templateID: string, request: $_model.DescribeTemplateCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateCacheResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateCache",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/template-caches/${$dara.URL.percentEncode(templateID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplateCacheResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateCacheResponse({}));
  }

  /**
   * 查询模板缓存
   * 
   * @param request - DescribeTemplateCacheRequest
   * @returns DescribeTemplateCacheResponse
   */
  async describeTemplateCache(templateID: string, request: $_model.DescribeTemplateCacheRequest): Promise<$_model.DescribeTemplateCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplateCacheWithOptions(templateID, request, headers, runtime);
  }

  /**
   * 获取Team详情
   * 
   * @param request - GetTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTeamResponse
   */
  async getTeamWithOptions(teamID: string, request: $_model.GetTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTeam",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTeamResponse>(await this.callApi(params, req, runtime), new $_model.GetTeamResponse({}));
  }

  /**
   * 获取Team详情
   * 
   * @param request - GetTeamRequest
   * @returns GetTeamResponse
   */
  async getTeam(teamID: string, request: $_model.GetTeamRequest): Promise<$_model.GetTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * 查询 Template
   * 
   * @param request - GetTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(templateID: string, request: $_model.GetTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/templates/${$dara.URL.percentEncode(templateID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * 查询 Template
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(templateID: string, request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(templateID, request, headers, runtime);
  }

  /**
   * 查看 Volume
   * 
   * @param request - GetVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVolumeResponse
   */
  async getVolumeWithOptions(volumeID: string, request: $_model.GetVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVolumeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVolume",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVolumeResponse>(await this.callApi(params, req, runtime), new $_model.GetVolumeResponse({}));
  }

  /**
   * 查看 Volume
   * 
   * @param request - GetVolumeRequest
   * @returns GetVolumeResponse
   */
  async getVolume(volumeID: string, request: $_model.GetVolumeRequest): Promise<$_model.GetVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVolumeWithOptions(volumeID, request, headers, runtime);
  }

  /**
   * 分页查询 ApiKey
   * 
   * @param request - ListApiKeysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiKeysResponse
   */
  async listApiKeysWithOptions(request: $_model.ListApiKeysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiKeysResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKeyName)) {
      query["apiKeyName"] = request.apiKeyName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    if (!$dara.isNull(request.userID)) {
      query["userID"] = request.userID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiKeys",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListApiKeysResponse({}));
  }

  /**
   * 分页查询 ApiKey
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
   * 查询 quota 配置
   * 
   * @param request - ListQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaResponse
   */
  async listQuotaWithOptions(request: $_model.ListQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotaResponse> {
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
      action: "ListQuota",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotaResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotaResponse({}));
  }

  /**
   * 查询 quota 配置
   * 
   * @param request - ListQuotaRequest
   * @returns ListQuotaResponse
   */
  async listQuota(request: $_model.ListQuotaRequest): Promise<$_model.ListQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 查询 Team 列表
   * 
   * @param request - ListTeamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTeamsResponse
   */
  async listTeamsWithOptions(request: $_model.ListTeamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTeamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.plan)) {
      query["plan"] = request.plan;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.teamName)) {
      query["teamName"] = request.teamName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTeams",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/teams`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTeamsResponse>(await this.callApi(params, req, runtime), new $_model.ListTeamsResponse({}));
  }

  /**
   * 查询 Team 列表
   * 
   * @param request - ListTeamsRequest
   * @returns ListTeamsResponse
   */
  async listTeams(request: $_model.ListTeamsRequest): Promise<$_model.ListTeamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTeamsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询模板缓存
   * 
   * @param request - ListTemplateCacheRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateCacheResponse
   */
  async listTemplateCacheWithOptions(request: $_model.ListTemplateCacheRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateCacheResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    if (!$dara.isNull(request.templateID)) {
      query["templateID"] = request.templateID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateCache",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/template-caches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateCacheResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateCacheResponse({}));
  }

  /**
   * 分页查询模板缓存
   * 
   * @param request - ListTemplateCacheRequest
   * @returns ListTemplateCacheResponse
   */
  async listTemplateCache(request: $_model.ListTemplateCacheRequest): Promise<$_model.ListTemplateCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplateCacheWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询 Template
   * 
   * @param request - ListTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: $_model.ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * 分页查询 Template
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询 Volumes
   * 
   * @param request - ListVolumesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVolumesResponse
   */
  async listVolumesWithOptions(request: $_model.ListVolumesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVolumesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["resourceGroupID"] = request.resourceGroupID;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["storageClass"] = request.storageClass;
    }

    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    if (!$dara.isNull(request.userID)) {
      query["userID"] = request.userID;
    }

    if (!$dara.isNull(request.volumeName)) {
      query["volumeName"] = request.volumeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVolumes",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/volumes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVolumesResponse>(await this.callApi(params, req, runtime), new $_model.ListVolumesResponse({}));
  }

  /**
   * 分页查询 Volumes
   * 
   * @param request - ListVolumesRequest
   * @returns ListVolumesResponse
   */
  async listVolumes(request: $_model.ListVolumesRequest): Promise<$_model.ListVolumesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVolumesWithOptions(request, headers, runtime);
  }

  /**
   * 重置 ApiKey
   * 
   * @param request - ResetApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetApiKeyResponse
   */
  async resetApiKeyWithOptions(apiKeyID: string, request: $_model.ResetApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetApiKey",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys/${$dara.URL.percentEncode(apiKeyID)}/reset`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.ResetApiKeyResponse({}));
  }

  /**
   * 重置 ApiKey
   * 
   * @param request - ResetApiKeyRequest
   * @returns ResetApiKeyResponse
   */
  async resetApiKey(apiKeyID: string, request: $_model.ResetApiKeyRequest): Promise<$_model.ResetApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * 更新 ApiKey
   * 
   * @param request - UpdateApiKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiKeyResponse
   */
  async updateApiKeyWithOptions(apiKeyID: string, request: $_model.UpdateApiKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiKey",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/api-keys/${$dara.URL.percentEncode(apiKeyID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiKeyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiKeyResponse({}));
  }

  /**
   * 更新 ApiKey
   * 
   * @param request - UpdateApiKeyRequest
   * @returns UpdateApiKeyResponse
   */
  async updateApiKey(apiKeyID: string, request: $_model.UpdateApiKeyRequest): Promise<$_model.UpdateApiKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApiKeyWithOptions(apiKeyID, request, headers, runtime);
  }

  /**
   * 更新 quota 配置
   * 
   * @param request - UpdateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaResponse
   */
  async updateQuotaWithOptions(request: $_model.UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQuotaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuota",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/quotas/tag`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQuotaResponse({}));
  }

  /**
   * 更新 quota 配置
   * 
   * @param request - UpdateQuotaRequest
   * @returns UpdateQuotaResponse
   */
  async updateQuota(request: $_model.UpdateQuotaRequest): Promise<$_model.UpdateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 更新 Team
   * 
   * @param request - UpdateTeamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTeamResponse
   */
  async updateTeamWithOptions(teamID: string, request: $_model.UpdateTeamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTeamResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTeam",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/teams/${$dara.URL.percentEncode(teamID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTeamResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTeamResponse({}));
  }

  /**
   * 更新 Team
   * 
   * @param request - UpdateTeamRequest
   * @returns UpdateTeamResponse
   */
  async updateTeam(teamID: string, request: $_model.UpdateTeamRequest): Promise<$_model.UpdateTeamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTeamWithOptions(teamID, request, headers, runtime);
  }

  /**
   * 更新 Template
   * 
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(templateID: string, request: $_model.UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/templates/${$dara.URL.percentEncode(templateID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * 更新 Template
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(templateID: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(templateID, request, headers, runtime);
  }

  /**
   * 更新 Volume
   * 
   * @param request - UpdateVolumeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVolumeResponse
   */
  async updateVolumeWithOptions(volumeID: string, request: $_model.UpdateVolumeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVolumeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.teamID)) {
      query["teamID"] = request.teamID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVolume",
      version: "2026-08-20",
      protocol: "HTTPS",
      pathname: `/pop/2026-08-20/volumes/${$dara.URL.percentEncode(volumeID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVolumeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVolumeResponse({}));
  }

  /**
   * 更新 Volume
   * 
   * @param request - UpdateVolumeRequest
   * @returns UpdateVolumeResponse
   */
  async updateVolume(volumeID: string, request: $_model.UpdateVolumeRequest): Promise<$_model.UpdateVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVolumeWithOptions(volumeID, request, headers, runtime);
  }

}
