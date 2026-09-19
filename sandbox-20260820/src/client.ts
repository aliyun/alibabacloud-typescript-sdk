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

}
