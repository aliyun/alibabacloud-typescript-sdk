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
    this._endpoint = this.getEndpoint("wss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 多商品组合下单
   * 
   * @param tmpReq - CreateMultiOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrderWithOptions(tmpReq: $_model.CreateMultiOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateMultiOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    let query = { };
    if (!$dara.isNull(request.channelCookie)) {
      query["ChannelCookie"] = request.channelCookie;
    }

    if (!$dara.isNull(request.orderItems)) {
      query["OrderItems"] = request.orderItems;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.propertiesShrink)) {
      query["Properties"] = request.propertiesShrink;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiOrder",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiOrderResponse({}));
  }

  /**
   * 多商品组合下单
   * 
   * @param request - CreateMultiOrderRequest
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrder(request: $_model.CreateMultiOrderRequest): Promise<$_model.CreateMultiOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderWithOptions(request, runtime);
  }

  /**
   * 查询积分包Agent列表
   * 
   * @param request - DescribeCreditPackageAgentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCreditPackageAgentsResponse
   */
  async describeCreditPackageAgentsWithOptions(request: $_model.DescribeCreditPackageAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreditPackageAgentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentIds)) {
      query["AgentIds"] = request.agentIds;
    }

    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCreditPackageAgents",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCreditPackageAgentsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCreditPackageAgentsResponse({}));
  }

  /**
   * 查询积分包Agent列表
   * 
   * @param request - DescribeCreditPackageAgentsRequest
   * @returns DescribeCreditPackageAgentsResponse
   */
  async describeCreditPackageAgents(request: $_model.DescribeCreditPackageAgentsRequest): Promise<$_model.DescribeCreditPackageAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditPackageAgentsWithOptions(request, runtime);
  }

  /**
   * 查询积分包用量信息
   * 
   * @param request - DescribeCreditUsageInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCreditUsageInfoResponse
   */
  async describeCreditUsageInfoWithOptions(request: $_model.DescribeCreditUsageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreditUsageInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.usageType)) {
      query["UsageType"] = request.usageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCreditUsageInfo",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCreditUsageInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCreditUsageInfoResponse({}));
  }

  /**
   * 查询积分包用量信息
   * 
   * @param request - DescribeCreditUsageInfoRequest
   * @returns DescribeCreditUsageInfoResponse
   */
  async describeCreditUsageInfo(request: $_model.DescribeCreditUsageInfoRequest): Promise<$_model.DescribeCreditUsageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditUsageInfoWithOptions(request, runtime);
  }

  /**
   * 查询计量消耗信息
   * 
   * @param request - DescribeDeductionStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeductionStatisticResponse
   */
  async describeDeductionStatisticWithOptions(request: $_model.DescribeDeductionStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeductionStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.periods)) {
      query["Periods"] = request.periods;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeductionStatistic",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeductionStatisticResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeductionStatisticResponse({}));
  }

  /**
   * 查询计量消耗信息
   * 
   * @param request - DescribeDeductionStatisticRequest
   * @returns DescribeDeductionStatisticResponse
   */
  async describeDeductionStatistic(request: $_model.DescribeDeductionStatisticRequest): Promise<$_model.DescribeDeductionStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeductionStatisticWithOptions(request, runtime);
  }

  /**
   * 查询物流地址
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddressWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeliveryAddressResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeliveryAddress",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeliveryAddressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeliveryAddressResponse({}));
  }

  /**
   * 查询物流地址
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<$_model.DescribeDeliveryAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * 批量询价
   * 
   * @param request - DescribeMultiPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPriceWithOptions(request: $_model.DescribeMultiPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderItems)) {
      query["OrderItems"] = request.orderItems;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.packageCode)) {
      query["PackageCode"] = request.packageCode;
    }

    if (!$dara.isNull(request.resellerOwnerUid)) {
      query["ResellerOwnerUid"] = request.resellerOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultiPrice",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiPriceResponse({}));
  }

  /**
   * 批量询价
   * 
   * @param request - DescribeMultiPriceRequest
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPrice(request: $_model.DescribeMultiPriceRequest): Promise<$_model.DescribeMultiPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiPriceWithOptions(request, runtime);
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductionsWithOptions(request: $_model.DescribePackageDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageDeductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.packageIds)) {
      query["PackageIds"] = request.packageIds;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePackageDeductions",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePackageDeductionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePackageDeductionsResponse({}));
  }

  /**
   * 查询核时包抵扣明细
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: $_model.DescribePackageDeductionsRequest): Promise<$_model.DescribePackageDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
  }

  /**
   * 更新实例属性
   * 
   * @param request - ModifyInstancePropertiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstancePropertiesWithOptions(request: $_model.ModifyInstancePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancePropertiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceProperties",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstancePropertiesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstancePropertiesResponse({}));
  }

  /**
   * 更新实例属性
   * 
   * @param request - ModifyInstancePropertiesRequest
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstanceProperties(request: $_model.ModifyInstancePropertiesRequest): Promise<$_model.ModifyInstancePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancePropertiesWithOptions(request, runtime);
  }

  /**
   * 批量设置Agent积分配额
   * 
   * @param request - SetAgentCreditQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetAgentCreditQuotaResponse
   */
  async setAgentCreditQuotaWithOptions(request: $_model.SetAgentCreditQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAgentCreditQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentIds)) {
      query["AgentIds"] = request.agentIds;
    }

    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.creditQuota)) {
      query["CreditQuota"] = request.creditQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetAgentCreditQuota",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetAgentCreditQuotaResponse>(await this.callApi(params, req, runtime), new $_model.SetAgentCreditQuotaResponse({}));
  }

  /**
   * 批量设置Agent积分配额
   * 
   * @param request - SetAgentCreditQuotaRequest
   * @returns SetAgentCreditQuotaResponse
   */
  async setAgentCreditQuota(request: $_model.SetAgentCreditQuotaRequest): Promise<$_model.SetAgentCreditQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAgentCreditQuotaWithOptions(request, runtime);
  }

}
