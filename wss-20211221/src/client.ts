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
      'cn-shanghai': "wss.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "wss.ap-southeast-1.aliyuncs.com",
    };
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
   * Use this API to order, renew, and modify specific products, such as monthly resource plans for Elastic Desktop Service (EDS) Enterprise Edition.
   * 
   * @remarks
   * <props="china">
   * Before calling this API, make sure you understand how Wuying Workspace is billed and its [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws).
   * <props="intl">
   * Before calling this API, make sure you understand how Wuying Workspace is billed and its [pricing](https://www.alibabacloud.com/zh/product/cloud-desktop?#J_8623712560).
   * If you do not specify automatic payment, this API does not handle the payment. You must use the returned order ID to construct a payment URL. The order becomes active and the resource is provisioned only after the payment is complete.
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
   * Use this API to order, renew, and modify specific products, such as monthly resource plans for Elastic Desktop Service (EDS) Enterprise Edition.
   * 
   * @remarks
   * <props="china">
   * Before calling this API, make sure you understand how Wuying Workspace is billed and its [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws).
   * <props="intl">
   * Before calling this API, make sure you understand how Wuying Workspace is billed and its [pricing](https://www.alibabacloud.com/zh/product/cloud-desktop?#J_8623712560).
   * If you do not specify automatic payment, this API does not handle the payment. You must use the returned order ID to construct a payment URL. The order becomes active and the resource is provisioned only after the payment is complete.
   * 
   * @param request - CreateMultiOrderRequest
   * @returns CreateMultiOrderResponse
   */
  async createMultiOrder(request: $_model.CreateMultiOrderRequest): Promise<$_model.CreateMultiOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiOrderWithOptions(request, runtime);
  }

  /**
   * Queries a list of agents and their usage information.
   * 
   * @remarks
   * ## Usage notes
   * - **Pagination**: This operation supports pagination by using the `NextToken` and `MaxResults` parameters. For the first request, set `NextToken` to an empty string.
   * - **Filtering**: Use the `AgentType` and `AgentIds` parameters to filter the results.
   * - **Status filtering**: Use the `Status` parameter to filter agents by status. Valid values are 0 (deleted) and 1 (active).
   * - **Sorting**: By default, the results are sorted by `id` in ascending order.
   * - **Additional parameter for anonymous edition**: The `FillInstance` parameter automatically populates the ID of the JVS_COPILOT agent that is associated with the current user.
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
   * Queries a list of agents and their usage information.
   * 
   * @remarks
   * ## Usage notes
   * - **Pagination**: This operation supports pagination by using the `NextToken` and `MaxResults` parameters. For the first request, set `NextToken` to an empty string.
   * - **Filtering**: Use the `AgentType` and `AgentIds` parameters to filter the results.
   * - **Status filtering**: Use the `Status` parameter to filter agents by status. Valid values are 0 (deleted) and 1 (active).
   * - **Sorting**: By default, the results are sorted by `id` in ascending order.
   * - **Additional parameter for anonymous edition**: The `FillInstance` parameter automatically populates the ID of the JVS_COPILOT agent that is associated with the current user.
   * 
   * @param request - DescribeCreditPackageAgentsRequest
   * @returns DescribeCreditPackageAgentsResponse
   */
  async describeCreditPackageAgents(request: $_model.DescribeCreditPackageAgentsRequest): Promise<$_model.DescribeCreditPackageAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCreditPackageAgentsWithOptions(request, runtime);
  }

  /**
   * Queries credit usage by a specified dimension such as user, credit package, or agent.
   * 
   * @remarks
   * ## Operation description
   * This API operation queries credit usage details based on the dimension specified by `UsageType` (User, CreditPackage, or Agent). The response includes the total, remaining, and used credits of the current credit package, hourly consumption samples, alert thresholds, period quotas, and other information.
   * - **User**: User dimension. Returns the aggregated usage and remaining credits across all active credit packages for the current user.
   * - **CreditPackage**: Credit package dimension. Returns the total, remaining, and consumption samples for a specified credit package instance.
   * - **Agent**: Agent dimension. Returns the cumulative usage, current period usage, quota, alert, and other information for a specified agent.
   * **Notes**:
   * - The `InstanceIds` parameter can be omitted when `UsageType=User`. Set this parameter to the credit package instance ID when `UsageType=CreditPackage`, or to the AgentId when `UsageType=Agent`.
   * - Anonymous requests support the `FillInstance` parameter. If `InstanceIds` is not explicitly specified and `FillInstance=true`, the server automatically populates the bound `JVS_COPILOT` AgentId based on the current logon `wyId`.
   * - Time window constants: The `dayUsedCredit` statistics window is `now - ONE_DAY_MILLIS`, and the `weekUsedCredit` statistics window is `now - ONE_WEEK_MILLIS`.
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
   * Queries credit usage by a specified dimension such as user, credit package, or agent.
   * 
   * @remarks
   * ## Operation description
   * This API operation queries credit usage details based on the dimension specified by `UsageType` (User, CreditPackage, or Agent). The response includes the total, remaining, and used credits of the current credit package, hourly consumption samples, alert thresholds, period quotas, and other information.
   * - **User**: User dimension. Returns the aggregated usage and remaining credits across all active credit packages for the current user.
   * - **CreditPackage**: Credit package dimension. Returns the total, remaining, and consumption samples for a specified credit package instance.
   * - **Agent**: Agent dimension. Returns the cumulative usage, current period usage, quota, alert, and other information for a specified agent.
   * **Notes**:
   * - The `InstanceIds` parameter can be omitted when `UsageType=User`. Set this parameter to the credit package instance ID when `UsageType=CreditPackage`, or to the AgentId when `UsageType=Agent`.
   * - Anonymous requests support the `FillInstance` parameter. If `InstanceIds` is not explicitly specified and `FillInstance=true`, the server automatically populates the bound `JVS_COPILOT` AgentId based on the current logon `wyId`.
   * - Time window constants: The `dayUsedCredit` statistics window is `now - ONE_DAY_MILLIS`, and the `weekUsedCredit` statistics window is `now - ONE_WEEK_MILLIS`.
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
   * Retrieves resource deduction and usage statistics based on specified criteria.
   * 
   * @remarks
   * ## Request
   * - This API supports GET and POST methods.
   * - The `periods` parameter is a JSON array of `PeriodParam` objects, each containing the `periodUnit` and `baseTime` fields.
   * - The `resourceTypes` parameter is a JSON array of resource type strings.
   * - The `startTime` and `endTime` parameters are timestamps that define the query\\"s time range.
   * - The `nextToken`, `maxResults`, `pageNo`, and `pageSize` parameters control pagination and the number of results to return.
   * - The API throws a `SalesClientException` if the `resourceTypes` parameter contains an invalid value or if the `periods` parameter fails JSON parsing.
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
   * Retrieves resource deduction and usage statistics based on specified criteria.
   * 
   * @remarks
   * ## Request
   * - This API supports GET and POST methods.
   * - The `periods` parameter is a JSON array of `PeriodParam` objects, each containing the `periodUnit` and `baseTime` fields.
   * - The `resourceTypes` parameter is a JSON array of resource type strings.
   * - The `startTime` and `endTime` parameters are timestamps that define the query\\"s time range.
   * - The `nextToken`, `maxResults`, `pageNo`, and `pageSize` parameters control pagination and the number of results to return.
   * - The API throws a `SalesClientException` if the `resourceTypes` parameter contains an invalid value or if the `periods` parameter fails JSON parsing.
   * 
   * @param request - DescribeDeductionStatisticRequest
   * @returns DescribeDeductionStatisticResponse
   */
  async describeDeductionStatistic(request: $_model.DescribeDeductionStatisticRequest): Promise<$_model.DescribeDeductionStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeductionStatisticWithOptions(request, runtime);
  }

  /**
   * Retrieves information about delivery addresses.
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
   * Retrieves information about delivery addresses.
   * @returns DescribeDeliveryAddressResponse
   */
  async describeDeliveryAddress(): Promise<$_model.DescribeDeliveryAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeliveryAddressWithOptions(runtime);
  }

  /**
   * Queries prices for Elastic Desktop Service products, covering order types such as purchase, renewal, configuration change, and cancellation.
   * 
   * @remarks
   * <props="china">
   * Before using this interface, ensure you understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) for Wuying Workspace.
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
   * Queries prices for Elastic Desktop Service products, covering order types such as purchase, renewal, configuration change, and cancellation.
   * 
   * @remarks
   * <props="china">
   * Before using this interface, ensure you understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) for Wuying Workspace.
   * 
   * @param request - DescribeMultiPriceRequest
   * @returns DescribeMultiPriceResponse
   */
  async describeMultiPrice(request: $_model.DescribeMultiPriceRequest): Promise<$_model.DescribeMultiPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiPriceWithOptions(request, runtime);
  }

  /**
   * Query deduction details for time-based packages.
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
   * Query deduction details for time-based packages.
   * 
   * @param request - DescribePackageDeductionsRequest
   * @returns DescribePackageDeductionsResponse
   */
  async describePackageDeductions(request: $_model.DescribePackageDeductionsRequest): Promise<$_model.DescribePackageDeductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePackageDeductionsWithOptions(request, runtime);
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
   * Sets the credit quota for specified Agents.
   * 
   * @remarks
   * ## Description
   * This operation sets the credit quota for one or more Agents of a specific type.
   * ### Usage notes
   * - The `AgentType` parameter specifies the type of Agent to which the quota applies, such as `JVSClaw` or `OpenClaw`.
   * - The `AgentIds` parameter is an array of up to 100 Agent IDs.
   * - The `CreditQuota` parameter specifies the credit quota for each Agent.
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
   * Sets the credit quota for specified Agents.
   * 
   * @remarks
   * ## Description
   * This operation sets the credit quota for one or more Agents of a specific type.
   * ### Usage notes
   * - The `AgentType` parameter specifies the type of Agent to which the quota applies, such as `JVSClaw` or `OpenClaw`.
   * - The `AgentIds` parameter is an array of up to 100 Agent IDs.
   * - The `CreditQuota` parameter specifies the credit quota for each Agent.
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
