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
      'cn-shanghai-finance-1': "bdrc.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "bdrc.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "bdrc.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("bdrc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Checks data protection scoring rules. Calling this operation triggers an asynchronous task to check whether your resources meet the data protection scoring requirements.
   * 
   * @param request - CheckRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckRulesResponse
   */
  async checkRulesWithOptions(request: $_model.CheckRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckRules",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/rules/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckRulesResponse>(await this.callApi(params, req, runtime), new $_model.CheckRulesResponse({}));
  }

  /**
   * Checks data protection scoring rules. Calling this operation triggers an asynchronous task to check whether your resources meet the data protection scoring requirements.
   * 
   * @param request - CheckRulesRequest
   * @returns CheckRulesResponse
   */
  async checkRules(request: $_model.CheckRulesRequest): Promise<$_model.CheckRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkRulesWithOptions(request, headers, runtime);
  }

  /**
   * Shuts down the Backup and Disaster Recovery Center.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseBdrcServiceResponse
   */
  async closeBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseBdrcServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service/close`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseBdrcServiceResponse>(await this.callApi(params, req, runtime), new $_model.CloseBdrcServiceResponse({}));
  }

  /**
   * Shuts down the Backup and Disaster Recovery Center.
   * @returns CloseBdrcServiceResponse
   */
  async closeBdrcService(): Promise<$_model.CloseBdrcServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * Creates a protection policy.
   * 
   * @param tmpReq - CreateProtectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProtectionPolicyResponse
   */
  async createProtectionPolicyWithOptions(tmpReq: $_model.CreateProtectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProtectionPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProtectionPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.boundResourceCategoryIds)) {
      request.boundResourceCategoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.boundResourceCategoryIds, "BoundResourceCategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.subProtectionPolicies)) {
      request.subProtectionPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subProtectionPolicies, "SubProtectionPolicies", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.boundResourceCategoryIdsShrink)) {
      body["BoundResourceCategoryIds"] = request.boundResourceCategoryIdsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.protectionPolicyName)) {
      body["ProtectionPolicyName"] = request.protectionPolicyName;
    }

    if (!$dara.isNull(request.protectionPolicyRegionId)) {
      body["ProtectionPolicyRegionId"] = request.protectionPolicyRegionId;
    }

    if (!$dara.isNull(request.subProtectionPoliciesShrink)) {
      body["SubProtectionPolicies"] = request.subProtectionPoliciesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProtectionPolicy",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProtectionPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateProtectionPolicyResponse({}));
  }

  /**
   * Creates a protection policy.
   * 
   * @param request - CreateProtectionPolicyRequest
   * @returns CreateProtectionPolicyResponse
   */
  async createProtectionPolicy(request: $_model.CreateProtectionPolicyRequest): Promise<$_model.CreateProtectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProtectionPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a resource category.
   * 
   * @param request - CreateResourceCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceCategoryResponse
   */
  async createResourceCategoryWithOptions(request: $_model.CreateResourceCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCategoryName)) {
      body["ResourceCategoryName"] = request.resourceCategoryName;
    }

    if (!$dara.isNull(request.resourceMatcher)) {
      body["ResourceMatcher"] = request.resourceMatcher;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceCategory",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resource-categories/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceCategoryResponse({}));
  }

  /**
   * Creates a resource category.
   * 
   * @param request - CreateResourceCategoryRequest
   * @returns CreateResourceCategoryResponse
   */
  async createResourceCategory(request: $_model.CreateResourceCategoryRequest): Promise<$_model.CreateResourceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a protection policy.
   * 
   * @param request - DeleteProtectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProtectionPolicyResponse
   */
  async deleteProtectionPolicyWithOptions(ProtectionPolicyId: string, request: $_model.DeleteProtectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProtectionPolicyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProtectionPolicy",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies/${$dara.URL.percentEncode(ProtectionPolicyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProtectionPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProtectionPolicyResponse({}));
  }

  /**
   * Deletes a protection policy.
   * 
   * @param request - DeleteProtectionPolicyRequest
   * @returns DeleteProtectionPolicyResponse
   */
  async deleteProtectionPolicy(ProtectionPolicyId: string, request: $_model.DeleteProtectionPolicyRequest): Promise<$_model.DeleteProtectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProtectionPolicyWithOptions(ProtectionPolicyId, request, headers, runtime);
  }

  /**
   * Deletes a resource category.
   * 
   * @param request - DeleteResourceCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceCategoryResponse
   */
  async deleteResourceCategoryWithOptions(request: $_model.DeleteResourceCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCategoryId)) {
      body["ResourceCategoryId"] = request.resourceCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceCategory",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resource-categories/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceCategoryResponse({}));
  }

  /**
   * Deletes a resource category.
   * 
   * @param request - DeleteResourceCategoryRequest
   * @returns DeleteResourceCategoryResponse
   */
  async deleteResourceCategory(request: $_model.DeleteResourceCategoryRequest): Promise<$_model.DeleteResourceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the check results for data protection rules.
   * 
   * @param request - DescribeCheckDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCheckDetailsResponse
   */
  async describeCheckDetailsWithOptions(request: $_model.DescribeCheckDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCheckDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCheckDetails",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/check-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCheckDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCheckDetailsResponse({}));
  }

  /**
   * Retrieves the check results for data protection rules.
   * 
   * @param request - DescribeCheckDetailsRequest
   * @returns DescribeCheckDetailsResponse
   */
  async describeCheckDetails(request: $_model.DescribeCheckDetailsRequest): Promise<$_model.DescribeCheckDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCheckDetailsWithOptions(request, headers, runtime);
  }

  /**
   * Queries statistics on data redundancy types for a cloud service.
   * 
   * @param tmpReq - DescribeProductDataRedundancyTypeStatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductDataRedundancyTypeStatResponse
   */
  async describeProductDataRedundancyTypeStatWithOptions(tmpReq: $_model.DescribeProductDataRedundancyTypeStatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductDataRedundancyTypeStatResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeProductDataRedundancyTypeStatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceOwnerIds)) {
      request.resourceOwnerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceOwnerIds, "ResourceOwnerIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceOwnerIdsShrink)) {
      query["ResourceOwnerIds"] = request.resourceOwnerIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductDataRedundancyTypeStat",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products/data-redundancy-type-stat`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductDataRedundancyTypeStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductDataRedundancyTypeStatResponse({}));
  }

  /**
   * Queries statistics on data redundancy types for a cloud service.
   * 
   * @param request - DescribeProductDataRedundancyTypeStatRequest
   * @returns DescribeProductDataRedundancyTypeStatResponse
   */
  async describeProductDataRedundancyTypeStat(request: $_model.DescribeProductDataRedundancyTypeStatRequest): Promise<$_model.DescribeProductDataRedundancyTypeStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProductDataRedundancyTypeStatWithOptions(request, headers, runtime);
  }

  /**
   * Queries the data protection score status of cloud services.
   * 
   * @param tmpReq - DescribeProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductsResponse
   */
  async describeProductsWithOptions(tmpReq: $_model.DescribeProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeProductsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceOwnerIds)) {
      request.resourceOwnerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceOwnerIds, "ResourceOwnerIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceOwnerIdsShrink)) {
      query["ResourceOwnerIds"] = request.resourceOwnerIdsShrink;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProducts",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductsResponse({}));
  }

  /**
   * Queries the data protection score status of cloud services.
   * 
   * @param request - DescribeProductsRequest
   * @returns DescribeProductsResponse
   */
  async describeProducts(request: $_model.DescribeProductsRequest): Promise<$_model.DescribeProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProductsWithOptions(request, headers, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @remarks
   * BDRC本身是中心化的产品，接口用于部分与Region相关的功能使用。
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
   * 
   * @remarks
   * BDRC本身是中心化的产品，接口用于部分与Region相关的功能使用。
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * Query resources
   * 
   * @param tmpReq - DescribeResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcesResponse
   */
  async describeResourcesWithOptions(tmpReq: $_model.DescribeResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceOwnerIds)) {
      request.resourceOwnerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceOwnerIds, "ResourceOwnerIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataRedundancyType)) {
      query["DataRedundancyType"] = request.dataRedundancyType;
    }

    if (!$dara.isNull(request.failedRuleTemplate)) {
      query["FailedRuleTemplate"] = request.failedRuleTemplate;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceArn)) {
      query["ResourceArn"] = request.resourceArn;
    }

    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerIdsShrink)) {
      query["ResourceOwnerIds"] = request.resourceOwnerIdsShrink;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourcesResponse({}));
  }

  /**
   * Query resources
   * 
   * @param request - DescribeResourcesRequest
   * @returns DescribeResourcesResponse
   */
  async describeResources(request: $_model.DescribeResourcesRequest): Promise<$_model.DescribeResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of data protection rules.
   * 
   * @param tmpReq - DescribeRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRulesResponse
   */
  async describeRulesWithOptions(tmpReq: $_model.DescribeRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRulesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceOwnerIds)) {
      request.resourceOwnerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceOwnerIds, "ResourceOwnerIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceOwnerIdsShrink)) {
      query["ResourceOwnerIds"] = request.resourceOwnerIdsShrink;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRules",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRulesResponse({}));
  }

  /**
   * Queries a list of data protection rules.
   * 
   * @param request - DescribeRulesRequest
   * @returns DescribeRulesResponse
   */
  async describeRules(request: $_model.DescribeRulesRequest): Promise<$_model.DescribeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRulesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of an asynchronous task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskResponse({}));
  }

  /**
   * Retrieves the details of an asynchronous task.
   * @returns DescribeTaskResponse
   */
  async describeTask(TaskId: string): Promise<$_model.DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * Retrieves asynchronous tasks.
   * 
   * @param request - DescribeTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: $_model.DescribeTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTasksResponse({}));
  }

  /**
   * Retrieves asynchronous tasks.
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTasksWithOptions(request, headers, runtime);
  }

  /**
   * Lists the most threatened resources.
   * 
   * @param tmpReq - DescribeTopRiskyResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTopRiskyResourcesResponse
   */
  async describeTopRiskyResourcesWithOptions(tmpReq: $_model.DescribeTopRiskyResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTopRiskyResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeTopRiskyResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceOwnerIds)) {
      request.resourceOwnerIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceOwnerIds, "ResourceOwnerIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceOwnerIdsShrink)) {
      query["ResourceOwnerIds"] = request.resourceOwnerIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTopRiskyResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/top-risky`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTopRiskyResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTopRiskyResourcesResponse({}));
  }

  /**
   * Lists the most threatened resources.
   * 
   * @param request - DescribeTopRiskyResourcesRequest
   * @returns DescribeTopRiskyResourcesResponse
   */
  async describeTopRiskyResources(request: $_model.DescribeTopRiskyResourcesRequest): Promise<$_model.DescribeTopRiskyResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTopRiskyResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Disables the data protection score for a cloud service.
   * 
   * @param request - DisableCheckProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCheckProductResponse
   */
  async disableCheckProductWithOptions(request: $_model.DisableCheckProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCheckProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCheckProduct",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products/disable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCheckProductResponse>(await this.callApi(params, req, runtime), new $_model.DisableCheckProductResponse({}));
  }

  /**
   * Disables the data protection score for a cloud service.
   * 
   * @param request - DisableCheckProductRequest
   * @returns DisableCheckProductResponse
   */
  async disableCheckProduct(request: $_model.DisableCheckProductRequest): Promise<$_model.DisableCheckProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableCheckProductWithOptions(request, headers, runtime);
  }

  /**
   * Disables the data protection score for a resource.
   * 
   * @param request - DisableCheckResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCheckResourceResponse
   */
  async disableCheckResourceWithOptions(request: $_model.DisableCheckResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCheckResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCheckResource",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/disable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCheckResourceResponse>(await this.callApi(params, req, runtime), new $_model.DisableCheckResourceResponse({}));
  }

  /**
   * Disables the data protection score for a resource.
   * 
   * @param request - DisableCheckResourceRequest
   * @returns DisableCheckResourceResponse
   */
  async disableCheckResource(request: $_model.DisableCheckResourceRequest): Promise<$_model.DisableCheckResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableCheckResourceWithOptions(request, headers, runtime);
  }

  /**
   * Enables data protection scoring for an Alibaba Cloud service.
   * 
   * @param request - EnableCheckProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCheckProductResponse
   */
  async enableCheckProductWithOptions(request: $_model.EnableCheckProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCheckProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCheckProduct",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/products/enable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCheckProductResponse>(await this.callApi(params, req, runtime), new $_model.EnableCheckProductResponse({}));
  }

  /**
   * Enables data protection scoring for an Alibaba Cloud service.
   * 
   * @param request - EnableCheckProductRequest
   * @returns EnableCheckProductResponse
   */
  async enableCheckProduct(request: $_model.EnableCheckProductRequest): Promise<$_model.EnableCheckProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableCheckProductWithOptions(request, headers, runtime);
  }

  /**
   * Enables data protection scoring for a single resource.
   * 
   * @param request - EnableCheckResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCheckResourceResponse
   */
  async enableCheckResourceWithOptions(request: $_model.EnableCheckResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCheckResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceArn)) {
      body["ResourceArn"] = request.resourceArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCheckResource",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/enable-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCheckResourceResponse>(await this.callApi(params, req, runtime), new $_model.EnableCheckResourceResponse({}));
  }

  /**
   * Enables data protection scoring for a single resource.
   * 
   * @param request - EnableCheckResourceRequest
   * @returns EnableCheckResourceResponse
   */
  async enableCheckResource(request: $_model.EnableCheckResourceRequest): Promise<$_model.EnableCheckResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableCheckResourceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of the Backup and Disaster Recovery Center.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBdrcServiceResponse
   */
  async getBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBdrcServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBdrcServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetBdrcServiceResponse({}));
  }

  /**
   * Queries the status of the Backup and Disaster Recovery Center.
   * @returns GetBdrcServiceResponse
   */
  async getBdrcService(): Promise<$_model.GetBdrcServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * Retrieves a single message.
   * 
   * @param request - GetMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageResponse
   */
  async getMessageWithOptions(MessageId: string, request: $_model.GetMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessage",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/messages/${$dara.URL.percentEncode(MessageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageResponse({}));
  }

  /**
   * Retrieves a single message.
   * 
   * @param request - GetMessageRequest
   * @returns GetMessageResponse
   */
  async getMessage(MessageId: string, request: $_model.GetMessageRequest): Promise<$_model.GetMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageWithOptions(MessageId, request, headers, runtime);
  }

  /**
   * Retrieves a protection policy.
   * 
   * @param request - GetProtectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProtectionPolicyResponse
   */
  async getProtectionPolicyWithOptions(ProtectionPolicyId: string, request: $_model.GetProtectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProtectionPolicyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProtectionPolicy",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies/${$dara.URL.percentEncode(ProtectionPolicyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProtectionPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetProtectionPolicyResponse({}));
  }

  /**
   * Retrieves a protection policy.
   * 
   * @param request - GetProtectionPolicyRequest
   * @returns GetProtectionPolicyResponse
   */
  async getProtectionPolicy(ProtectionPolicyId: string, request: $_model.GetProtectionPolicyRequest): Promise<$_model.GetProtectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProtectionPolicyWithOptions(ProtectionPolicyId, request, headers, runtime);
  }

  /**
   * Retrieves a single resource category.
   * 
   * @param request - GetResourceCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceCategoryResponse
   */
  async getResourceCategoryWithOptions(request: $_model.GetResourceCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceCategoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceCategory",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resource-categories/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceCategoryResponse({}));
  }

  /**
   * Retrieves a single resource category.
   * 
   * @param request - GetResourceCategoryRequest
   * @returns GetResourceCategoryResponse
   */
  async getResourceCategory(request: $_model.GetResourceCategoryRequest): Promise<$_model.GetResourceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries messages in batches.
   * 
   * @param request - ListMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(request: $_model.ListMessagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.messageLevel)) {
      query["MessageLevel"] = request.messageLevel;
    }

    if (!$dara.isNull(request.messageTimeEarlierThan)) {
      query["MessageTimeEarlierThan"] = request.messageTimeEarlierThan;
    }

    if (!$dara.isNull(request.messageTimeLaterThan)) {
      query["MessageTimeLaterThan"] = request.messageTimeLaterThan;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessages",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMessagesResponse({}));
  }

  /**
   * Queries messages in batches.
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(request: $_model.ListMessagesRequest): Promise<$_model.ListMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of protection policies.
   * 
   * @param request - ListProtectionPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProtectionPoliciesResponse
   */
  async listProtectionPoliciesWithOptions(request: $_model.ListProtectionPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProtectionPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.protectionPolicyId)) {
      query["ProtectionPolicyId"] = request.protectionPolicyId;
    }

    if (!$dara.isNull(request.protectionPolicyRegionId)) {
      query["ProtectionPolicyRegionId"] = request.protectionPolicyRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProtectionPolicies",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProtectionPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListProtectionPoliciesResponse({}));
  }

  /**
   * Retrieves a list of protection policies.
   * 
   * @param request - ListProtectionPoliciesRequest
   * @returns ListProtectionPoliciesResponse
   */
  async listProtectionPolicies(request: $_model.ListProtectionPoliciesRequest): Promise<$_model.ListProtectionPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProtectionPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the application history of the protection policy.
   * 
   * @param request - ListProtectionPolicyApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProtectionPolicyApplicationsResponse
   */
  async listProtectionPolicyApplicationsWithOptions(ProtectionPolicyId: string, request: $_model.ListProtectionPolicyApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProtectionPolicyApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyStatus)) {
      query["ApplyStatus"] = request.applyStatus;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.subProtectionPolicyType)) {
      query["SubProtectionPolicyType"] = request.subProtectionPolicyType;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProtectionPolicyApplications",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies/${$dara.URL.percentEncode(ProtectionPolicyId)}/list-applications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProtectionPolicyApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListProtectionPolicyApplicationsResponse({}));
  }

  /**
   * Retrieves the application history of the protection policy.
   * 
   * @param request - ListProtectionPolicyApplicationsRequest
   * @returns ListProtectionPolicyApplicationsResponse
   */
  async listProtectionPolicyApplications(ProtectionPolicyId: string, request: $_model.ListProtectionPolicyApplicationsRequest): Promise<$_model.ListProtectionPolicyApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProtectionPolicyApplicationsWithOptions(ProtectionPolicyId, request, headers, runtime);
  }

  /**
   * Retrieves a list of resource categories.
   * 
   * @param request - ListResourceCategoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceCategoriesResponse
   */
  async listResourceCategoriesWithOptions(request: $_model.ListResourceCategoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceCategoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceCategoryId)) {
      query["ResourceCategoryId"] = request.resourceCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceCategories",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resource-categories/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceCategoriesResponse({}));
  }

  /**
   * Retrieves a list of resource categories.
   * 
   * @param request - ListResourceCategoriesRequest
   * @returns ListResourceCategoriesResponse
   */
  async listResourceCategories(request: $_model.ListResourceCategoriesRequest): Promise<$_model.ListResourceCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceCategoriesWithOptions(request, headers, runtime);
  }

  /**
   * Enables the Backup and Disaster Recovery Center.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenBdrcServiceResponse
   */
  async openBdrcServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenBdrcServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenBdrcService",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenBdrcServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenBdrcServiceResponse({}));
  }

  /**
   * Enables the Backup and Disaster Recovery Center.
   * @returns OpenBdrcServiceResponse
   */
  async openBdrcService(): Promise<$_model.OpenBdrcServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openBdrcServiceWithOptions(headers, runtime);
  }

  /**
   * Updates a protection policy.
   * 
   * @param tmpReq - UpdateProtectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProtectionPolicyResponse
   */
  async updateProtectionPolicyWithOptions(ProtectionPolicyId: string, tmpReq: $_model.UpdateProtectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProtectionPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProtectionPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.boundResourceCategoryIds)) {
      request.boundResourceCategoryIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.boundResourceCategoryIds, "BoundResourceCategoryIds", "json");
    }

    if (!$dara.isNull(tmpReq.subProtectionPolicies)) {
      request.subProtectionPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subProtectionPolicies, "SubProtectionPolicies", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.boundResourceCategoryIdsShrink)) {
      body["BoundResourceCategoryIds"] = request.boundResourceCategoryIdsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.protectionPolicyName)) {
      body["ProtectionPolicyName"] = request.protectionPolicyName;
    }

    if (!$dara.isNull(request.subProtectionPoliciesShrink)) {
      body["SubProtectionPolicies"] = request.subProtectionPoliciesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProtectionPolicy",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/protection-policies/${$dara.URL.percentEncode(ProtectionPolicyId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProtectionPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProtectionPolicyResponse({}));
  }

  /**
   * Updates a protection policy.
   * 
   * @param request - UpdateProtectionPolicyRequest
   * @returns UpdateProtectionPolicyResponse
   */
  async updateProtectionPolicy(ProtectionPolicyId: string, request: $_model.UpdateProtectionPolicyRequest): Promise<$_model.UpdateProtectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProtectionPolicyWithOptions(ProtectionPolicyId, request, headers, runtime);
  }

  /**
   * Updates a resource category.
   * 
   * @param request - UpdateResourceCategoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceCategoryResponse
   */
  async updateResourceCategoryWithOptions(request: $_model.UpdateResourceCategoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceCategoryId)) {
      body["ResourceCategoryId"] = request.resourceCategoryId;
    }

    if (!$dara.isNull(request.resourceCategoryName)) {
      body["ResourceCategoryName"] = request.resourceCategoryName;
    }

    if (!$dara.isNull(request.resourceMatcher)) {
      body["ResourceMatcher"] = request.resourceMatcher;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceCategory",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resource-categories/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceCategoryResponse({}));
  }

  /**
   * Updates a resource category.
   * 
   * @param request - UpdateResourceCategoryRequest
   * @returns UpdateResourceCategoryResponse
   */
  async updateResourceCategory(request: $_model.UpdateResourceCategoryRequest): Promise<$_model.UpdateResourceCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceCategoryWithOptions(request, headers, runtime);
  }

  /**
   * Updates the resource list. When you call this operation, an asynchronous task is triggered to update your resource list and data protection score.
   * 
   * @param request - UpdateResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourcesResponse
   */
  async updateResourcesWithOptions(request: $_model.UpdateResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResources",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourcesResponse({}));
  }

  /**
   * Updates the resource list. When you call this operation, an asynchronous task is triggered to update your resource list and data protection score.
   * 
   * @param request - UpdateResourcesRequest
   * @returns UpdateResourcesResponse
   */
  async updateResources(request: $_model.UpdateResourcesRequest): Promise<$_model.UpdateResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourcesWithOptions(request, headers, runtime);
  }

}
