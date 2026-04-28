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
    this._endpoint = this.getEndpoint("advisor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 根据多个维度获取用户最新的巡检结果，全量返回-openApi
   * 
   * @param request - DescribeAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesResponse
   */
  async describeAdvicesWithOptions(request: $_model.DescribeAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.excludeAdviceId)) {
      query["ExcludeAdviceId"] = request.excludeAdviceId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvicesResponse({}));
  }

  /**
   * 根据多个维度获取用户最新的巡检结果，全量返回-openApi
   * 
   * @param request - DescribeAdvicesRequest
   * @returns DescribeAdvicesResponse
   */
  async describeAdvices(request: $_model.DescribeAdvicesRequest): Promise<$_model.DescribeAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesWithOptions(request, runtime);
  }

  /**
   * DescribeAdvicesFlat分页
   * 
   * @param request - DescribeAdvicesFlatPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesFlatPageResponse
   */
  async describeAdvicesFlatPageWithOptions(request: $_model.DescribeAdvicesFlatPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvicesFlatPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvicesFlatPage",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvicesFlatPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvicesFlatPageResponse({}));
  }

  /**
   * DescribeAdvicesFlat分页
   * 
   * @param request - DescribeAdvicesFlatPageRequest
   * @returns DescribeAdvicesFlatPageResponse
   */
  async describeAdvicesFlatPage(request: $_model.DescribeAdvicesFlatPageRequest): Promise<$_model.DescribeAdvicesFlatPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesFlatPageWithOptions(request, runtime);
  }

  /**
   * DescribeAdvices分页
   * 
   * @param request - DescribeAdvicesPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvicesPageResponse
   */
  async describeAdvicesPageWithOptions(request: $_model.DescribeAdvicesPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvicesPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvicesPage",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvicesPageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvicesPageResponse({}));
  }

  /**
   * DescribeAdvices分页
   * 
   * @param request - DescribeAdvicesPageRequest
   * @returns DescribeAdvicesPageResponse
   */
  async describeAdvicesPage(request: $_model.DescribeAdvicesPageRequest): Promise<$_model.DescribeAdvicesPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvicesPageWithOptions(request, runtime);
  }

  /**
   * 巡检
   * 
   * @param request - DescribeAdvisorChecksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorChecksResponse
   */
  async describeAdvisorChecksWithOptions(request: $_model.DescribeAdvisorChecksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvisorChecksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorChecks",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvisorChecksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvisorChecksResponse({}));
  }

  /**
   * 巡检
   * 
   * @param request - DescribeAdvisorChecksRequest
   * @returns DescribeAdvisorChecksResponse
   */
  async describeAdvisorChecks(request: $_model.DescribeAdvisorChecksRequest): Promise<$_model.DescribeAdvisorChecksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorChecksWithOptions(request, runtime);
  }

  /**
   * 巡检项设置-分页
   * 
   * @param tmpReq - DescribeAdvisorChecksFoPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorChecksFoPagesResponse
   */
  async describeAdvisorChecksFoPagesWithOptions(tmpReq: $_model.DescribeAdvisorChecksFoPagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvisorChecksFoPagesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeAdvisorChecksFoPagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkTypes)) {
      request.checkTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkTypes, "CheckTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.bizCategory)) {
      query["BizCategory"] = request.bizCategory;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.checkTypesShrink)) {
      query["CheckTypes"] = request.checkTypesShrink;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorChecksFoPages",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvisorChecksFoPagesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvisorChecksFoPagesResponse({}));
  }

  /**
   * 巡检项设置-分页
   * 
   * @param request - DescribeAdvisorChecksFoPagesRequest
   * @returns DescribeAdvisorChecksFoPagesResponse
   */
  async describeAdvisorChecksFoPages(request: $_model.DescribeAdvisorChecksFoPagesRequest): Promise<$_model.DescribeAdvisorChecksFoPagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorChecksFoPagesWithOptions(request, runtime);
  }

  /**
   * 查询资源
   * 
   * @param request - DescribeAdvisorResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdvisorResourcesResponse
   */
  async describeAdvisorResourcesWithOptions(request: $_model.DescribeAdvisorResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdvisorResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdvisorResources",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdvisorResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdvisorResourcesResponse({}));
  }

  /**
   * 查询资源
   * 
   * @param request - DescribeAdvisorResourcesRequest
   * @returns DescribeAdvisorResourcesResponse
   */
  async describeAdvisorResources(request: $_model.DescribeAdvisorResourcesRequest): Promise<$_model.DescribeAdvisorResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdvisorResourcesWithOptions(request, runtime);
  }

  /**
   * 查询成本优化结果详情
   * 
   * @param tmpReq - DescribeCostCheckAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostCheckAdvicesResponse
   */
  async describeCostCheckAdvicesWithOptions(tmpReq: $_model.DescribeCostCheckAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostCheckAdvicesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCostCheckAdvicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceGroupIdList)) {
      request.resourceGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupIdList, "ResourceGroupIdList", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    if (!$dara.isNull(tmpReq.tagList)) {
      request.tagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagList, "TagList", "json");
    }

    if (!$dara.isNull(tmpReq.tagValues)) {
      request.tagValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagValues, "TagValues", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.resourceGroupIdListShrink)) {
      query["ResourceGroupIdList"] = request.resourceGroupIdListShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    if (!$dara.isNull(request.tagListShrink)) {
      query["TagList"] = request.tagListShrink;
    }

    if (!$dara.isNull(request.tagValuesShrink)) {
      query["TagValues"] = request.tagValuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostCheckAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCostCheckAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCostCheckAdvicesResponse({}));
  }

  /**
   * 查询成本优化结果详情
   * 
   * @param request - DescribeCostCheckAdvicesRequest
   * @returns DescribeCostCheckAdvicesResponse
   */
  async describeCostCheckAdvices(request: $_model.DescribeCostCheckAdvicesRequest): Promise<$_model.DescribeCostCheckAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostCheckAdvicesWithOptions(request, runtime);
  }

  /**
   * 查询巡检项聚合成本优化结果概览
   * 
   * @param tmpReq - DescribeCostCheckResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostCheckResultsResponse
   */
  async describeCostCheckResultsWithOptions(tmpReq: $_model.DescribeCostCheckResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostCheckResultsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCostCheckResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.checkIds)) {
      request.checkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkIds, "CheckIds", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceGroupIdList)) {
      request.resourceGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupIdList, "ResourceGroupIdList", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    if (!$dara.isNull(tmpReq.tagList)) {
      request.tagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagList, "TagList", "json");
    }

    if (!$dara.isNull(tmpReq.tagValues)) {
      request.tagValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagValues, "TagValues", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkIdsShrink)) {
      query["CheckIds"] = request.checkIdsShrink;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.resourceGroupIdListShrink)) {
      query["ResourceGroupIdList"] = request.resourceGroupIdListShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    if (!$dara.isNull(request.tagListShrink)) {
      query["TagList"] = request.tagListShrink;
    }

    if (!$dara.isNull(request.tagValuesShrink)) {
      query["TagValues"] = request.tagValuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostCheckResults",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCostCheckResultsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCostCheckResultsResponse({}));
  }

  /**
   * 查询巡检项聚合成本优化结果概览
   * 
   * @param request - DescribeCostCheckResultsRequest
   * @returns DescribeCostCheckResultsResponse
   */
  async describeCostCheckResults(request: $_model.DescribeCostCheckResultsRequest): Promise<$_model.DescribeCostCheckResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostCheckResultsWithOptions(request, runtime);
  }

  /**
   * 成本优化-概览
   * 
   * @param tmpReq - DescribeCostOptimizationOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCostOptimizationOverviewResponse
   */
  async describeCostOptimizationOverviewWithOptions(tmpReq: $_model.DescribeCostOptimizationOverviewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCostOptimizationOverviewResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCostOptimizationOverviewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCostOptimizationOverview",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCostOptimizationOverviewResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCostOptimizationOverviewResponse({}));
  }

  /**
   * 成本优化-概览
   * 
   * @param request - DescribeCostOptimizationOverviewRequest
   * @returns DescribeCostOptimizationOverviewResponse
   */
  async describeCostOptimizationOverview(request: $_model.DescribeCostOptimizationOverviewRequest): Promise<$_model.DescribeCostOptimizationOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCostOptimizationOverviewWithOptions(request, runtime);
  }

  /**
   * 历史
   * 
   * @param request - GetHistoryAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistoryAdvicesResponse
   */
  async getHistoryAdvicesWithOptions(request: $_model.GetHistoryAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistoryAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistoryAdvices",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHistoryAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.GetHistoryAdvicesResponse({}));
  }

  /**
   * 历史
   * 
   * @param request - GetHistoryAdvicesRequest
   * @returns GetHistoryAdvicesResponse
   */
  async getHistoryAdvices(request: $_model.GetHistoryAdvicesRequest): Promise<$_model.GetHistoryAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHistoryAdvicesWithOptions(request, runtime);
  }

  /**
   * 获取任务执行进度(普通用户、RD单账号)
   * 
   * @param request - GetInspectProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInspectProgressResponse
   */
  async getInspectProgressWithOptions(request: $_model.GetInspectProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInspectProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInspectProgress",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInspectProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetInspectProgressResponse({}));
  }

  /**
   * 获取任务执行进度(普通用户、RD单账号)
   * 
   * @param request - GetInspectProgressRequest
   * @returns GetInspectProgressResponse
   */
  async getInspectProgress(request: $_model.GetInspectProgressRequest): Promise<$_model.GetInspectProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInspectProgressWithOptions(request, runtime);
  }

  /**
   * 获取云产品的列表
   * 
   * @param request - GetProductListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductListResponse
   */
  async getProductListWithOptions(request: $_model.GetProductListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductList",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductListResponse>(await this.callApi(params, req, runtime), new $_model.GetProductListResponse({}));
  }

  /**
   * 获取云产品的列表
   * 
   * @param request - GetProductListRequest
   * @returns GetProductListResponse
   */
  async getProductList(request: $_model.GetProductListRequest): Promise<$_model.GetProductListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductListWithOptions(request, runtime);
  }

  /**
   * 根据id获取任务状态
   * 
   * @param request - GetTaskStatusByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusByIdResponse
   */
  async getTaskStatusByIdWithOptions(request: $_model.GetTaskStatusByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusByIdResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatusById",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatusByIdResponse({}));
  }

  /**
   * 根据id获取任务状态
   * 
   * @param request - GetTaskStatusByIdRequest
   * @returns GetTaskStatusByIdResponse
   */
  async getTaskStatusById(request: $_model.GetTaskStatusByIdRequest): Promise<$_model.GetTaskStatusByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskStatusByIdWithOptions(request, runtime);
  }

  /**
   * 触发立即巡检
   * 
   * @param tmpReq - RefreshAdvisorCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorCheckResponse
   */
  async refreshAdvisorCheckWithOptions(tmpReq: $_model.RefreshAdvisorCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAdvisorCheckResponse> {
    tmpReq.validate();
    let request = new $_model.RefreshAdvisorCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceDimensionList)) {
      request.resourceDimensionListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceDimensionList, "ResourceDimensionList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunId)) {
      query["AssumeAliyunId"] = request.assumeAliyunId;
    }

    if (!$dara.isNull(request.checkId)) {
      query["CheckId"] = request.checkId;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceDimensionListShrink)) {
      body["ResourceDimensionList"] = request.resourceDimensionListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorCheck",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshAdvisorCheckResponse>(await this.callApi(params, req, runtime), new $_model.RefreshAdvisorCheckResponse({}));
  }

  /**
   * 触发立即巡检
   * 
   * @param request - RefreshAdvisorCheckRequest
   * @returns RefreshAdvisorCheckResponse
   */
  async refreshAdvisorCheck(request: $_model.RefreshAdvisorCheckRequest): Promise<$_model.RefreshAdvisorCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorCheckWithOptions(request, runtime);
  }

  /**
   * 发起成本优化巡检
   * 
   * @param tmpReq - RefreshAdvisorCostCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorCostCheckResponse
   */
  async refreshAdvisorCostCheckWithOptions(tmpReq: $_model.RefreshAdvisorCostCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAdvisorCostCheckResponse> {
    tmpReq.validate();
    let request = new $_model.RefreshAdvisorCostCheckShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assumeAliyunIdList)) {
      request.assumeAliyunIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assumeAliyunIdList, "AssumeAliyunIdList", "json");
    }

    if (!$dara.isNull(tmpReq.checkIds)) {
      request.checkIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkIds, "CheckIds", "json");
    }

    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.assumeAliyunIdListShrink)) {
      query["AssumeAliyunIdList"] = request.assumeAliyunIdListShrink;
    }

    if (!$dara.isNull(request.checkIdsShrink)) {
      query["CheckIds"] = request.checkIdsShrink;
    }

    if (!$dara.isNull(request.checkPlanId)) {
      query["CheckPlanId"] = request.checkPlanId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.refreshResource)) {
      query["RefreshResource"] = request.refreshResource;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorCostCheck",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshAdvisorCostCheckResponse>(await this.callApi(params, req, runtime), new $_model.RefreshAdvisorCostCheckResponse({}));
  }

  /**
   * 发起成本优化巡检
   * 
   * @param request - RefreshAdvisorCostCheckRequest
   * @returns RefreshAdvisorCostCheckResponse
   */
  async refreshAdvisorCostCheck(request: $_model.RefreshAdvisorCostCheckRequest): Promise<$_model.RefreshAdvisorCostCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorCostCheckWithOptions(request, runtime);
  }

  /**
   * RefreshAdvisorResource
   * 
   * @param request - RefreshAdvisorResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshAdvisorResourceResponse
   */
  async refreshAdvisorResourceWithOptions(request: $_model.RefreshAdvisorResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshAdvisorResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshAdvisorResource",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshAdvisorResourceResponse>(await this.callApi(params, req, runtime), new $_model.RefreshAdvisorResourceResponse({}));
  }

  /**
   * RefreshAdvisorResource
   * 
   * @param request - RefreshAdvisorResourceRequest
   * @returns RefreshAdvisorResourceResponse
   */
  async refreshAdvisorResource(request: $_model.RefreshAdvisorResourceRequest): Promise<$_model.RefreshAdvisorResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshAdvisorResourceWithOptions(request, runtime);
  }

  /**
   * 上报用户业务报警信息
   * 
   * @param tmpReq - ReportBizAlertInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportBizAlertInfoResponse
   */
  async reportBizAlertInfoWithOptions(tmpReq: $_model.ReportBizAlertInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportBizAlertInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ReportBizAlertInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertUid)) {
      request.alertUidShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertUid, "AlertUid", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alertDescription)) {
      query["AlertDescription"] = request.alertDescription;
    }

    if (!$dara.isNull(request.alertDetail)) {
      query["AlertDetail"] = request.alertDetail;
    }

    if (!$dara.isNull(request.alertGrade)) {
      query["AlertGrade"] = request.alertGrade;
    }

    if (!$dara.isNull(request.alertLabels)) {
      query["AlertLabels"] = request.alertLabels;
    }

    if (!$dara.isNull(request.alertScene)) {
      query["AlertScene"] = request.alertScene;
    }

    if (!$dara.isNull(request.alertToken)) {
      query["AlertToken"] = request.alertToken;
    }

    if (!$dara.isNull(request.alertUidShrink)) {
      query["AlertUid"] = request.alertUidShrink;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportBizAlertInfo",
      version: "2018-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportBizAlertInfoResponse>(await this.callApi(params, req, runtime), new $_model.ReportBizAlertInfoResponse({}));
  }

  /**
   * 上报用户业务报警信息
   * 
   * @param request - ReportBizAlertInfoRequest
   * @returns ReportBizAlertInfoResponse
   */
  async reportBizAlertInfo(request: $_model.ReportBizAlertInfoRequest): Promise<$_model.ReportBizAlertInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportBizAlertInfoWithOptions(request, runtime);
  }

}
