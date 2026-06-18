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
    this._endpoint = this.getEndpoint("fcsandbox", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
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
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
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
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas`,
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
      version: "2026-05-09",
      protocol: "HTTPS",
      pathname: `/pop/2026-05-09/quotas/tag`,
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

}
