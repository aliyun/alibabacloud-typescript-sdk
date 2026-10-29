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
      'cn-hangzhou': "httpdns-api.aliyuncs.com",
    };
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
   * Adds a domain name based on the specified parameters.
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
   * Adds a domain name based on the specified parameters.
   * 
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: $_model.AddDomainRequest): Promise<$_model.AddDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * Creates a custom resolution policy for a domain name connected to the current account. This operation supports the LINE mode and the IP_RANGE mode. IP address ranges can include IPv4 and IPv6 addresses. When a match occurs, A or AAAA records are returned based on the rules. By default, the policy is created in the disabled state. If Enable is set to true, the policy is enabled upon creation, but actual resolution still requires waiting for configuration propagation. The returned Id is used for subsequent queries, updates, enabling, disabling, and deletion. Create a disabled policy first, and then enable it after querying and verifying it. The policy type and the bound domain name cannot be modified after creation. If the response times out or is lost, query the list first to verify and avoid duplicate creation.
   * 
   * @param tmpReq - CreateSdnsRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSdnsRuleCategoryResponse
   */
  async createSdnsRuleCategoryWithOptions(tmpReq: $_model.CreateSdnsRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSdnsRuleCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSdnsRuleCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clientIpRanges)) {
      request.clientIpRangesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIpRanges, "ClientIpRanges", "json");
    }

    if (!$dara.isNull(tmpReq.paths)) {
      request.pathsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paths, "Paths", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIpRangesShrink)) {
      body["ClientIpRanges"] = request.clientIpRangesShrink;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.lineId)) {
      body["LineId"] = request.lineId;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.pathsShrink)) {
      body["Paths"] = request.pathsShrink;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSdnsRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSdnsRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateSdnsRuleCategoryResponse({}));
  }

  /**
   * Creates a custom resolution policy for a domain name connected to the current account. This operation supports the LINE mode and the IP_RANGE mode. IP address ranges can include IPv4 and IPv6 addresses. When a match occurs, A or AAAA records are returned based on the rules. By default, the policy is created in the disabled state. If Enable is set to true, the policy is enabled upon creation, but actual resolution still requires waiting for configuration propagation. The returned Id is used for subsequent queries, updates, enabling, disabling, and deletion. Create a disabled policy first, and then enable it after querying and verifying it. The policy type and the bound domain name cannot be modified after creation. If the response times out or is lost, query the list first to verify and avoid duplicate creation.
   * 
   * @param request - CreateSdnsRuleCategoryRequest
   * @returns CreateSdnsRuleCategoryResponse
   */
  async createSdnsRuleCategory(request: $_model.CreateSdnsRuleCategoryRequest): Promise<$_model.CreateSdnsRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSdnsRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes a domain name based on the specified parameters.
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
   * Deletes a domain name based on the specified parameters.
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: $_model.DeleteDomainRequest): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * Lists the domain names of a user based on the specified parameters.
   * 
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
   * Lists the domain names of a user based on the specified parameters.
   * 
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: $_model.DescribeDomainsRequest): Promise<$_model.DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * Retrieves the current HTTPDNS account information.
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
   * Retrieves the current HTTPDNS account information.
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(): Promise<$_model.GetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  /**
   * Retrieves parse and billing statistics, corresponding to the "Billing" page feature in the console.
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
   * Retrieves parse and billing statistics, corresponding to the "Billing" page feature in the console.
   * 
   * @param request - GetResolveCountSummaryRequest
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummary(request: $_model.GetResolveCountSummaryRequest): Promise<$_model.GetResolveCountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  /**
   * Retrieves the statistics information of parse requests for a specific domain name.
   * 
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
   * Retrieves the statistics information of parse requests for a specific domain name.
   * 
   * @param request - GetResolveStatisticsRequest
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatistics(request: $_model.GetResolveStatisticsRequest): Promise<$_model.GetResolveStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  /**
   * Lists the domain names and resolution counts of a user based on the specified parameters.
   * 
   * @remarks
   * # Operation description
   * - You can specify the page number (PageNumber) and the number of entries per page (PageSize) for the query.
   * - By default, the domain name list is sorted in descending order of the time when the domain names were added.
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
   * Lists the domain names and resolution counts of a user based on the specified parameters.
   * 
   * @remarks
   * # Operation description
   * - You can specify the page number (PageNumber) and the number of entries per page (PageSize) for the query.
   * - By default, the domain name list is sorted in descending order of the time when the domain names were added.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * Refreshes the domain name cache.
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
   * Refreshes the domain name cache.
   * 
   * @param request - RefreshResolveCacheRequest
   * @returns RefreshResolveCacheResponse
   */
  async refreshResolveCache(request: $_model.RefreshResolveCacheRequest): Promise<$_model.RefreshResolveCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshResolveCacheWithOptions(request, runtime);
  }

  /**
   * Deletes a custom resolution policy of the current account by policy ID. A deleted policy cannot be recovered by using its original ID, and a new ID is generated when the policy is recreated. Disable the policy and verify the resolution results before deletion. After an address block policy is deleted, its scope is excluded from overlap checks with other policies. Actual resolution takes effect after configuration propagation. You can call SdnsListRuleCategories to verify the deletion.
   * 
   * @param request - SdnsDeleteRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdnsDeleteRuleCategoryResponse
   */
  async sdnsDeleteRuleCategoryWithOptions(request: $_model.SdnsDeleteRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdnsDeleteRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdnsDeleteRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdnsDeleteRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.SdnsDeleteRuleCategoryResponse({}));
  }

  /**
   * Deletes a custom resolution policy of the current account by policy ID. A deleted policy cannot be recovered by using its original ID, and a new ID is generated when the policy is recreated. Disable the policy and verify the resolution results before deletion. After an address block policy is deleted, its scope is excluded from overlap checks with other policies. Actual resolution takes effect after configuration propagation. You can call SdnsListRuleCategories to verify the deletion.
   * 
   * @param request - SdnsDeleteRuleCategoryRequest
   * @returns SdnsDeleteRuleCategoryResponse
   */
  async sdnsDeleteRuleCategory(request: $_model.SdnsDeleteRuleCategoryRequest): Promise<$_model.SdnsDeleteRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdnsDeleteRuleCategoryWithOptions(request, runtime);
  }

  /**
   * 根据ID获取规则策略
   * 
   * @param request - SdnsGetRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdnsGetRuleCategoryResponse
   */
  async sdnsGetRuleCategoryWithOptions(request: $_model.SdnsGetRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdnsGetRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdnsGetRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdnsGetRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.SdnsGetRuleCategoryResponse({}));
  }

  /**
   * 根据ID获取规则策略
   * 
   * @param request - SdnsGetRuleCategoryRequest
   * @returns SdnsGetRuleCategoryResponse
   */
  async sdnsGetRuleCategory(request: $_model.SdnsGetRuleCategoryRequest): Promise<$_model.SdnsGetRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdnsGetRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Queries the custom resolution policies for a specified domain name under the current account, including line policies, client CIDR block policies, and policies in enabled or disabled states. The returned IDs can be used to query details, update, enable, disable, or delete policies. This operation does not provide pagination parameters and does not guarantee the order of returned results. CIDR blocks are returned in the original input format.
   * 
   * @param request - SdnsListRuleCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdnsListRuleCategoriesResponse
   */
  async sdnsListRuleCategoriesWithOptions(request: $_model.SdnsListRuleCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdnsListRuleCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdnsListRuleCategories",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdnsListRuleCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.SdnsListRuleCategoriesResponse({}));
  }

  /**
   * Queries the custom resolution policies for a specified domain name under the current account, including line policies, client CIDR block policies, and policies in enabled or disabled states. The returned IDs can be used to query details, update, enable, disable, or delete policies. This operation does not provide pagination parameters and does not guarantee the order of returned results. CIDR blocks are returned in the original input format.
   * 
   * @param request - SdnsListRuleCategoriesRequest
   * @returns SdnsListRuleCategoriesResponse
   */
  async sdnsListRuleCategories(request: $_model.SdnsListRuleCategoriesRequest): Promise<$_model.SdnsListRuleCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdnsListRuleCategoriesWithOptions(request, runtime);
  }

  /**
   * 启用、禁用规则策略
   * 
   * @param request - SdnsSwitchRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdnsSwitchRuleCategoryResponse
   */
  async sdnsSwitchRuleCategoryWithOptions(request: $_model.SdnsSwitchRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdnsSwitchRuleCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdnsSwitchRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdnsSwitchRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.SdnsSwitchRuleCategoryResponse({}));
  }

  /**
   * 启用、禁用规则策略
   * 
   * @param request - SdnsSwitchRuleCategoryRequest
   * @returns SdnsSwitchRuleCategoryResponse
   */
  async sdnsSwitchRuleCategory(request: $_model.SdnsSwitchRuleCategoryRequest): Promise<$_model.SdnsSwitchRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdnsSwitchRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Validates the submitted rules without saving or enabling any policies. In IP_RANGE mode, the Cip parameter is used to simulate a client IPv4 or IPv6 address. The system checks for CIDR block matches first and then returns the matched rules. If no custom parameters are used, pass an empty JSON object {} for the top-level Args parameter. If no rules are matched, the Data field is empty or omitted. A successful API call does not indicate a policy match. This operation does not check for CIDR block conflicts with existing policies, perform A/AAAA query type filtering or weight sampling, or simulate the complete resolution chain such as legacy CIDR block configurations, line fallback, or Function Compute. After saving and enabling the policies, verify them by using the actual resolution API.
   * 
   * @param tmpReq - SdnsVerifyRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SdnsVerifyRuleCategoryResponse
   */
  async sdnsVerifyRuleCategoryWithOptions(tmpReq: $_model.SdnsVerifyRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SdnsVerifyRuleCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.SdnsVerifyRuleCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.args)) {
      request.argsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.args, "Args", "json");
    }

    if (!$dara.isNull(tmpReq.clientIpRanges)) {
      request.clientIpRangesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clientIpRanges, "ClientIpRanges", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.argsShrink)) {
      body["Args"] = request.argsShrink;
    }

    if (!$dara.isNull(request.cip)) {
      body["Cip"] = request.cip;
    }

    if (!$dara.isNull(request.clientIpRangesShrink)) {
      body["ClientIpRanges"] = request.clientIpRangesShrink;
    }

    if (!$dara.isNull(request.matchType)) {
      body["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SdnsVerifyRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SdnsVerifyRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.SdnsVerifyRuleCategoryResponse({}));
  }

  /**
   * Validates the submitted rules without saving or enabling any policies. In IP_RANGE mode, the Cip parameter is used to simulate a client IPv4 or IPv6 address. The system checks for CIDR block matches first and then returns the matched rules. If no custom parameters are used, pass an empty JSON object {} for the top-level Args parameter. If no rules are matched, the Data field is empty or omitted. A successful API call does not indicate a policy match. This operation does not check for CIDR block conflicts with existing policies, perform A/AAAA query type filtering or weight sampling, or simulate the complete resolution chain such as legacy CIDR block configurations, line fallback, or Function Compute. After saving and enabling the policies, verify them by using the actual resolution API.
   * 
   * @param request - SdnsVerifyRuleCategoryRequest
   * @returns SdnsVerifyRuleCategoryResponse
   */
  async sdnsVerifyRuleCategory(request: $_model.SdnsVerifyRuleCategoryRequest): Promise<$_model.SdnsVerifyRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sdnsVerifyRuleCategoryWithOptions(request, runtime);
  }

  /**
   * Updates the complete rule list of an existing policy for the current account. For IP_RANGE policies, the client IP address ranges can be replaced as a whole at the same time. If ClientIpRanges is omitted, the original IP address ranges are retained. Explicitly passing an empty array is not allowed. The update does not change the bound domain names, match types, or enabled status of the policy. The new ranges are checked for conflicts only with other IP address range policies under the same domain name. If the validation fails, the update is not saved. After a successful update, you can call SdnsGetRuleCategory to verify the configuration. Actual DNS resolution requires waiting for configuration propagation.
   * 
   * @param tmpReq - UpdateSdnsRuleCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSdnsRuleCategoryResponse
   */
  async updateSdnsRuleCategoryWithOptions(tmpReq: $_model.UpdateSdnsRuleCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSdnsRuleCategoryResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSdnsRuleCategoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIpRanges)) {
      body["ClientIpRanges"] = request.clientIpRanges;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      body["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSdnsRuleCategory",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSdnsRuleCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSdnsRuleCategoryResponse({}));
  }

  /**
   * Updates the complete rule list of an existing policy for the current account. For IP_RANGE policies, the client IP address ranges can be replaced as a whole at the same time. If ClientIpRanges is omitted, the original IP address ranges are retained. Explicitly passing an empty array is not allowed. The update does not change the bound domain names, match types, or enabled status of the policy. The new ranges are checked for conflicts only with other IP address range policies under the same domain name. If the validation fails, the update is not saved. After a successful update, you can call SdnsGetRuleCategory to verify the configuration. Actual DNS resolution requires waiting for configuration propagation.
   * 
   * @param request - UpdateSdnsRuleCategoryRequest
   * @returns UpdateSdnsRuleCategoryResponse
   */
  async updateSdnsRuleCategory(request: $_model.UpdateSdnsRuleCategoryRequest): Promise<$_model.UpdateSdnsRuleCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSdnsRuleCategoryWithOptions(request, runtime);
  }

}
