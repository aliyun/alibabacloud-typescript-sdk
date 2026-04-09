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
    this._endpoint = this.getEndpoint("httpdns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加域名
   * 
   * @param request - AddDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainResponse
   */
  async addDomainWithOptions(request: $_model.AddDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDomainResponse>(await this.callApi(params, req, runtime), new $_model.AddDomainResponse({}));
  }

  /**
   * 添加域名
   * 
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: $_model.AddDomainRequest): Promise<$_model.AddDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: $_model.DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: $_model.DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDomainsResponse({}));
  }

  /**
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * 获取用户信息包含配置项
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountInfoResponse
   */
  async getAccountInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountInfo",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountInfoResponse({}));
  }

  /**
   * 获取用户信息包含配置项
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(): Promise<$_model.GetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  /**
   * 解析次数概览
   * 
   * @param request - GetResolveCountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummaryWithOptions(request: $_model.GetResolveCountSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResolveCountSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResolveCountSummary",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResolveCountSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetResolveCountSummaryResponse({}));
  }

  /**
   * 解析次数概览
   * 
   * @param request - GetResolveCountSummaryRequest
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummary(request: $_model.GetResolveCountSummaryRequest): Promise<$_model.GetResolveCountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatisticsWithOptions(request: $_model.GetResolveStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResolveStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResolveStatistics",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResolveStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetResolveStatisticsResponse({}));
  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatistics(request: $_model.GetResolveStatisticsRequest): Promise<$_model.GetResolveStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  /**
   * 列举域名以及解析统计信息
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    if (!$dara.isNull(request.withoutMeteringData)) {
      query["WithoutMeteringData"] = request.withoutMeteringData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * 列举域名以及解析统计信息
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * 刷新域名缓存
   * 
   * @param tmpReq - RefreshResolveCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshResolveCacheResponse
   */
  async refreshResolveCacheWithOptions(tmpReq: $_model.RefreshResolveCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshResolveCacheResponse> {
    tmpReq.validate();
    let request = new $_model.RefreshResolveCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.domains)) {
      request.domainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.domains, "Domains", "json");
    }

    let query = { };
    if (!$dara.isNull(request.domainsShrink)) {
      query["Domains"] = request.domainsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshResolveCache",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshResolveCacheResponse>(await this.callApi(params, req, runtime), new $_model.RefreshResolveCacheResponse({}));
  }

  /**
   * 刷新域名缓存
   * 
   * @param request - RefreshResolveCacheRequest
   * @returns RefreshResolveCacheResponse
   */
  async refreshResolveCache(request: $_model.RefreshResolveCacheRequest): Promise<$_model.RefreshResolveCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshResolveCacheWithOptions(request, runtime);
  }

}
