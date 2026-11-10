// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "wss";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Creates an order, renews, or modifies the configuration of specific products such as the monthly duration package for Wuying Workspace Enterprise Edition.
   * 
   * @remarks
   * <props="china">Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Wuying Workspace before you call this operation.
   * <props="intl">Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/cloud-desktop?#J_8623712560) of Wuying Workspace before you call this operation.
   * If automatic payment is not specified, this operation does not process the payment. You must use the order ID returned by this operation to construct a payment redirect URL and complete the payment. The order takes effect and resources are provisioned only after the payment is completed.
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
   * Creates an order, renews, or modifies the configuration of specific products such as the monthly duration package for Wuying Workspace Enterprise Edition.
   * 
   * @remarks
   * <props="china">Make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Wuying Workspace before you call this operation.
   * <props="intl">Make sure that you fully understand the billing methods and [pricing](https://www.alibabacloud.com/zh/product/cloud-desktop?#J_8623712560) of Wuying Workspace before you call this operation.
   * If automatic payment is not specified, this operation does not process the payment. You must use the order ID returned by this operation to construct a payment redirect URL and complete the payment. The order takes effect and resources are provisioned only after the payment is completed.
   * 
   * @param request - CreateMultiOrderRequest
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrder(request: $_model.CreateMultiOrderRequest): Promise<$_model.CreateMultiOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderWithOptions(request, runtime);
  }

  /**
   * 查询 AI 调用明细
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于分页查询当前阿里云账号下指定业务版本、地域和时间范围内的AI模型调用明细。
   * - 支持按模型调用请求ID、请求模型和用户ID进行筛选。
   * - 查询结果按调用时间倒序返回。
   * - 默认查询北京时间当日零点至当前时间的数据，查询区间不超过30天且不得早于当前时间向前推算3个自然月。
   * - 调用方仅能查询当前调用身份所属主账号的数据，不能指定其他账号。
   * - `PageNumber`与`PageSize`的乘积不得超过1000000。
   * - `BizType`不传时默认为企业版。
   * - `GatewayRegion`不传时国内站默认上海，国际站默认新加坡。
   * 
   * @param request - DescribeAICallDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAICallDetailsResponse
   */
  async describeAICallDetailsWithOptions(request: $_model.DescribeAICallDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAICallDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.gatewayRegion)) {
      query["GatewayRegion"] = request.gatewayRegion;
    }

    if (!$dara.isNull(request.modelId)) {
      query["ModelId"] = request.modelId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchRequestId)) {
      query["SearchRequestId"] = request.searchRequestId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.wyIds)) {
      query["WyIds"] = request.wyIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAICallDetails",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAICallDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAICallDetailsResponse({}));
  }

  /**
   * 查询 AI 调用明细
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于分页查询当前阿里云账号下指定业务版本、地域和时间范围内的AI模型调用明细。
   * - 支持按模型调用请求ID、请求模型和用户ID进行筛选。
   * - 查询结果按调用时间倒序返回。
   * - 默认查询北京时间当日零点至当前时间的数据，查询区间不超过30天且不得早于当前时间向前推算3个自然月。
   * - 调用方仅能查询当前调用身份所属主账号的数据，不能指定其他账号。
   * - `PageNumber`与`PageSize`的乘积不得超过1000000。
   * - `BizType`不传时默认为企业版。
   * - `GatewayRegion`不传时国内站默认上海，国际站默认新加坡。
   * 
   * @param request - DescribeAICallDetailsRequest
   * @returns DescribeAICallDetailsResponse
   */
  async describeAICallDetails(request: $_model.DescribeAICallDetailsRequest): Promise<$_model.DescribeAICallDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAICallDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the list of agents and usage summary information under the current username.
   * 
   * @remarks
   * ## Operation description
   * - **Paging**: Use the `NextToken` and `MaxResults` parameters for paging. Set `NextToken` to an empty character string for the first request.
   * - **Filtering**: Use the `AgentType` and `AgentIds` parameters to filter the returned agent list.
   * - **Status filtering**: Use the `Status` parameter to filter agents by status. Valid values: 0 (deleted) and 1 (active).
   * - **Sorting**: Results are sorted by `id` in ascending order by default.
   * - **Additional parameter for anonymous edition**: The `FillInstance` parameter automatically populates the bound JVS_COPILOT AgentId of the currently logged-on user.
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
   * Queries the list of agents and usage summary information under the current username.
   * 
   * @remarks
   * ## Operation description
   * - **Paging**: Use the `NextToken` and `MaxResults` parameters for paging. Set `NextToken` to an empty character string for the first request.
   * - **Filtering**: Use the `AgentType` and `AgentIds` parameters to filter the returned agent list.
   * - **Status filtering**: Use the `Status` parameter to filter agents by status. Valid values: 0 (deleted) and 1 (active).
   * - **Sorting**: Results are sorted by `id` in ascending order by default.
   * - **Additional parameter for anonymous edition**: The `FillInstance` parameter automatically populates the bound JVS_COPILOT AgentId of the currently logged-on user.
   * 
   * @param request - DescribeCreditPackageAgentsRequest
   * @returns DescribeCreditPackageAgentsResponse
   */
  async describeCreditPackageAgents(request: $_model.DescribeCreditPackageAgentsRequest): Promise<$_model.DescribeCreditPackageAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditPackageAgentsWithOptions(request, runtime);
  }

  /**
   * Queries the credit usage of users, credit packages, or agents based on a specified dimension.
   * 
   * @remarks
   * ## Request description
   * This API queries credit usage details based on the dimension specified by `UsageType` (User, CreditPackage, Agent, or EndUser). The response includes the total amount, remaining amount, and used amount of the current credit package, hourly consumption samples, alert thresholds, and periodic quotas.
   * - **User**: The user dimension. Returns the total used amount and remaining amount of all active credit packages for the current user.
   * - **CreditPackage**: The credit package dimension. Returns the total amount, remaining amount, and consumption samples of a specified credit package instance.
   * - **Agent**: The agent dimension. Returns the cumulative used amount, current period used amount, quota, and alerts for a specified agent.
   * - **EndUser**: The Wuying user dimension. Returns the shared credit usage, pay-as-you-go credit usage, and total credit usage for the current period of a Wuying user.
   * **Note**:
   * - The `InstanceIds` parameter can be omitted when `UsageType` is set to `User`. Set it to the credit package instance ID when `UsageType` is `CreditPackage`, the agent ID when `UsageType` is `Agent`, and the Wuying ID when `UsageType` is `EndUser`.
   * - Anonymous requests support the `FillInstance` parameter. If `InstanceIds` is not explicitly provided and `FillInstance` is set to `true`, the server automatically populates the bound `JVS_COPILOT` agent ID based on the currently logged-in `wyId`.
   * - Time window constants: The statistical window for `dayUsedCredit` is `now - ONE_DAY_MILLIS`, and the statistical window for `weekUsedCredit` is `now - ONE_WEEK_MILLIS`.
   * - The consumption samples in `currentCreditConsumeList` are aggregated by hour and may have an asynchronous synchronization delay of up to 5 minutes.
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

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
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
   * Queries the credit usage of users, credit packages, or agents based on a specified dimension.
   * 
   * @remarks
   * ## Request description
   * This API queries credit usage details based on the dimension specified by `UsageType` (User, CreditPackage, Agent, or EndUser). The response includes the total amount, remaining amount, and used amount of the current credit package, hourly consumption samples, alert thresholds, and periodic quotas.
   * - **User**: The user dimension. Returns the total used amount and remaining amount of all active credit packages for the current user.
   * - **CreditPackage**: The credit package dimension. Returns the total amount, remaining amount, and consumption samples of a specified credit package instance.
   * - **Agent**: The agent dimension. Returns the cumulative used amount, current period used amount, quota, and alerts for a specified agent.
   * - **EndUser**: The Wuying user dimension. Returns the shared credit usage, pay-as-you-go credit usage, and total credit usage for the current period of a Wuying user.
   * **Note**:
   * - The `InstanceIds` parameter can be omitted when `UsageType` is set to `User`. Set it to the credit package instance ID when `UsageType` is `CreditPackage`, the agent ID when `UsageType` is `Agent`, and the Wuying ID when `UsageType` is `EndUser`.
   * - Anonymous requests support the `FillInstance` parameter. If `InstanceIds` is not explicitly provided and `FillInstance` is set to `true`, the server automatically populates the bound `JVS_COPILOT` agent ID based on the currently logged-in `wyId`.
   * - Time window constants: The statistical window for `dayUsedCredit` is `now - ONE_DAY_MILLIS`, and the statistical window for `weekUsedCredit` is `now - ONE_WEEK_MILLIS`.
   * - The consumption samples in `currentCreditConsumeList` are aggregated by hour and may have an asynchronous synchronization delay of up to 5 minutes.
   * 
   * @param request - DescribeCreditUsageInfoRequest
   * @returns DescribeCreditUsageInfoResponse
   */
  async describeCreditUsageInfo(request: $_model.DescribeCreditUsageInfoRequest): Promise<$_model.DescribeCreditUsageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditUsageInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves resource deduction and usage statistics based on specified conditions.
   * 
   * @remarks
   * ## Request description
   * - This operation supports GET and POST methods.
   * - The `periods` parameter is in JSON array format. Each element is a `PeriodParam` object that contains the `periodUnit` and `baseTime` fields.
   * - The `resourceTypes` parameter is in JSON array format and contains multiple resource type strings.
   * - The `startTime` and `endTime` parameters are in timestamp format and specify the time range for the query.
   * - Pagination parameters include `nextToken`, `maxResults`, `pageNo`, and `pageSize`, which control the number and pagination of returned results.
   * - If the `resourceTypes` parameter contains invalid values or the `periods` parameter fails JSON parsing, a `SalesClientException` exception is thrown.
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
   * Retrieves resource deduction and usage statistics based on specified conditions.
   * 
   * @remarks
   * ## Request description
   * - This operation supports GET and POST methods.
   * - The `periods` parameter is in JSON array format. Each element is a `PeriodParam` object that contains the `periodUnit` and `baseTime` fields.
   * - The `resourceTypes` parameter is in JSON array format and contains multiple resource type strings.
   * - The `startTime` and `endTime` parameters are in timestamp format and specify the time range for the query.
   * - Pagination parameters include `nextToken`, `maxResults`, `pageNo`, and `pageSize`, which control the number and pagination of returned results.
   * - If the `resourceTypes` parameter contains invalid values or the `periods` parameter fails JSON parsing, a `SalesClientException` exception is thrown.
   * 
   * @param request - DescribeDeductionStatisticRequest
   * @returns DescribeDeductionStatisticResponse
   */
  async describeDeductionStatistic(request: $_model.DescribeDeductionStatisticRequest): Promise<$_model.DescribeDeductionStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeductionStatisticWithOptions(request, runtime);
  }

  /**
   * Queries logistics address information.
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
   * Queries logistics address information.
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<$_model.DescribeDeliveryAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * Queries deduction group information.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
   * 
   * @param request - DescribeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupsResponse
   */
  async describeGroupsWithOptions(request: $_model.DescribeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupResourceTypes)) {
      query["GroupResourceTypes"] = request.groupResourceTypes;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.states)) {
      query["States"] = request.states;
    }

    if (!$dara.isNull(request.timeUsingPeriod)) {
      query["TimeUsingPeriod"] = request.timeUsingPeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroups",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupsResponse({}));
  }

  /**
   * Queries deduction group information.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
   * 
   * @param request - DescribeGroupsRequest
   * @returns DescribeGroupsResponse
   */
  async describeGroups(request: $_model.DescribeGroupsRequest): Promise<$_model.DescribeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the renewal methods.
   * 
   * @remarks
   * Filters instances by resource type, instance, and region, and uses paging to query the auto-renewal status.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoRenewal)) {
      query["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypeList)) {
      query["ResourceTypeList"] = request.resourceTypeList;
    }

    if (!$dara.isNull(request.searchRegionId)) {
      query["SearchRegionId"] = request.searchRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAutoRenewalAttribute",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAutoRenewalAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAutoRenewalAttributeResponse({}));
  }

  /**
   * Queries the renewal methods.
   * 
   * @remarks
   * Filters instances by resource type, instance, and region, and uses paging to query the auto-renewal status.
   * 
   * @param request - DescribeInstanceAutoRenewalAttributeRequest
   * @returns DescribeInstanceAutoRenewalAttributeResponse
   */
  async describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAutoRenewalAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the prices of Elastic Desktop Service products for order types such as new purchases, renewals, configuration changes, and unsubscriptions.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
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
   * Queries the prices of Elastic Desktop Service products for order types such as new purchases, renewals, configuration changes, and unsubscriptions.
   * 
   * @remarks
   * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
   * 
   * @param request - DescribeMultiPriceRequest
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPrice(request: $_model.DescribeMultiPriceRequest): Promise<$_model.DescribeMultiPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiPriceWithOptions(request, runtime);
  }

  /**
   * Queries the deduction details of core-hour packages.
   * 
   * @param request - DescribePackageDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductionsWithOptions(request: $_model.DescribePackageDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageDeductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.agentTypes)) {
      query["AgentTypes"] = request.agentTypes;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.consumeWyId)) {
      query["ConsumeWyId"] = request.consumeWyId;
    }

    if (!$dara.isNull(request.consumeWyIds)) {
      query["ConsumeWyIds"] = request.consumeWyIds;
    }

    if (!$dara.isNull(request.deductionRequestId)) {
      query["DeductionRequestId"] = request.deductionRequestId;
    }

    if (!$dara.isNull(request.deductionTypes)) {
      query["DeductionTypes"] = request.deductionTypes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupResourceTypes)) {
      query["GroupResourceTypes"] = request.groupResourceTypes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdType)) {
      query["InstanceIdType"] = request.instanceIdType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
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

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.runIdList)) {
      query["RunIdList"] = request.runIdList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.wyId)) {
      query["WyId"] = request.wyId;
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
   * Queries the deduction details of core-hour packages.
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: $_model.DescribePackageDeductionsRequest): Promise<$_model.DescribePackageDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
  }

  /**
   * Queries AI credit deductions.
   * 
   * @remarks
   * ## Request description
   * - This operation supports the GET and POST methods.
   * - The periods parameter is in JSON array format. Each element is a PeriodParam object that contains the periodUnit and baseTime fields.
   * - The resourceTypes parameter is in JSON array format and contains multiple resource type strings.
   * - The startTime and endTime parameters are in timestamp format and specify the time range for the query.
   * - The pagination parameters include nextToken, maxResults, pageNo, and pageSize, which are used to control the number of returned results and pagination.
   * - If the resourceTypes parameter contains invalid values or the JSON parsing of the periods parameter fails, a SalesClientException is thrown.
   * 
   * @param request - DescribeRunIdDeductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRunIdDeductionsResponse
   */
  async describeRunIdDeductionsWithOptions(request: $_model.DescribeRunIdDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRunIdDeductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.agentTypes)) {
      query["AgentTypes"] = request.agentTypes;
    }

    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.consumeWyId)) {
      query["ConsumeWyId"] = request.consumeWyId;
    }

    if (!$dara.isNull(request.consumeWyIds)) {
      query["ConsumeWyIds"] = request.consumeWyIds;
    }

    if (!$dara.isNull(request.deductionRequestId)) {
      query["DeductionRequestId"] = request.deductionRequestId;
    }

    if (!$dara.isNull(request.deductionTypes)) {
      query["DeductionTypes"] = request.deductionTypes;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupByFields)) {
      query["GroupByFields"] = request.groupByFields;
    }

    if (!$dara.isNull(request.groupResourceTypes)) {
      query["GroupResourceTypes"] = request.groupResourceTypes;
    }

    if (!$dara.isNull(request.groupSeparator)) {
      query["GroupSeparator"] = request.groupSeparator;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdType)) {
      query["InstanceIdType"] = request.instanceIdType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!$dara.isNull(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!$dara.isNull(request.runIdList)) {
      query["RunIdList"] = request.runIdList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.wyId)) {
      query["WyId"] = request.wyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRunIdDeductions",
      version: "2021-12-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRunIdDeductionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRunIdDeductionsResponse({}));
  }

  /**
   * Queries AI credit deductions.
   * 
   * @remarks
   * ## Request description
   * - This operation supports the GET and POST methods.
   * - The periods parameter is in JSON array format. Each element is a PeriodParam object that contains the periodUnit and baseTime fields.
   * - The resourceTypes parameter is in JSON array format and contains multiple resource type strings.
   * - The startTime and endTime parameters are in timestamp format and specify the time range for the query.
   * - The pagination parameters include nextToken, maxResults, pageNo, and pageSize, which are used to control the number of returned results and pagination.
   * - If the resourceTypes parameter contains invalid values or the JSON parsing of the periods parameter fails, a SalesClientException is thrown.
   * 
   * @param request - DescribeRunIdDeductionsRequest
   * @returns DescribeRunIdDeductionsResponse
   */
  async describeRunIdDeductions(request: $_model.DescribeRunIdDeductionsRequest): Promise<$_model.DescribeRunIdDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRunIdDeductionsWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an instance.
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

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
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
   * Modifies the attributes of an instance.
   * 
   * @param request - ModifyInstancePropertiesRequest
   * @returns ModifyInstancePropertiesResponse
   */
  async modifyInstanceProperties(request: $_model.ModifyInstancePropertiesRequest): Promise<$_model.ModifyInstancePropertiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstancePropertiesWithOptions(request, runtime);
  }

  /**
   * Sets the credit usage quota for a specified Agent.
   * 
   * @remarks
   * ## Operation description
   * You can use this API operation to set the credit usage quota for a specific type of Agent. Batch setting of quotas for multiple Agents is supported.
   * ### Before you begin
   * - The `AgentType` parameter specifies the type of Agent for which you want to set the quota, such as `JVSClaw` or `OpenClaw`.
   * - The `AgentIds` parameter is an array that can contain up to 100 Agent IDs.
   * - The `CreditQuota` parameter specifies the credit usage quota for each Agent.
   * ### Examples
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

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
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
   * Sets the credit usage quota for a specified Agent.
   * 
   * @remarks
   * ## Operation description
   * You can use this API operation to set the credit usage quota for a specific type of Agent. Batch setting of quotas for multiple Agents is supported.
   * ### Before you begin
   * - The `AgentType` parameter specifies the type of Agent for which you want to set the quota, such as `JVSClaw` or `OpenClaw`.
   * - The `AgentIds` parameter is an array that can contain up to 100 Agent IDs.
   * - The `CreditQuota` parameter specifies the credit usage quota for each Agent.
   * ### Examples
   * 
   * @param request - SetAgentCreditQuotaRequest
   * @returns SetAgentCreditQuotaResponse
   */
  async setAgentCreditQuota(request: $_model.SetAgentCreditQuotaRequest): Promise<$_model.SetAgentCreditQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setAgentCreditQuotaWithOptions(request, runtime);
  }

}
