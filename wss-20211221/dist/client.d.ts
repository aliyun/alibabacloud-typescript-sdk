import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { $OpenApiUtil } from '@alicloud/openapi-core';
import * as $_model from './models/model';
export * from './models/model';
export default class Client extends OpenApi {
    constructor(config: $OpenApiUtil.Config);
    getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {
        [key: string]: string;
    }, endpoint: string): string;
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
    createMultiOrderWithOptions(tmpReq: $_model.CreateMultiOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiOrderResponse>;
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
    createMultiOrder(request: $_model.CreateMultiOrderRequest): Promise<$_model.CreateMultiOrderResponse>;
    /**
     * Performs a paging query for AI model invocation records based on specified conditions.
     *
     * @remarks
     * ## Request description
     * - This operation performs a paging query for AI model invocation details of the current Alibaba Cloud account within a specified business edition, region, and time range.
     * - You can filter results by model invocation request ID, requested model, and user ID.
     * - Query results are returned in descending order of invocation time.
     * - By default, this operation queries data from 00:00:00 (UTC+8) of the current day to the current time. The query time range cannot exceed 30 days and cannot start earlier than three calendar months before the current time.
     * - You can only query data for the primary account to which the current caller identity belongs. You cannot specify other accounts.
     * - The product of PageNumber and PageSize cannot exceed 1,000,000.
     * - If BizType is not specified, the default value is Enterprise Edition.
     * - If GatewayRegion is not specified, the default value is Shanghai for the China site and Singapore for the international site.
     *
     * @param request - DescribeAICallDetailsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeAICallDetailsResponse
     */
    describeAICallDetailsWithOptions(request: $_model.DescribeAICallDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAICallDetailsResponse>;
    /**
     * Performs a paging query for AI model invocation records based on specified conditions.
     *
     * @remarks
     * ## Request description
     * - This operation performs a paging query for AI model invocation details of the current Alibaba Cloud account within a specified business edition, region, and time range.
     * - You can filter results by model invocation request ID, requested model, and user ID.
     * - Query results are returned in descending order of invocation time.
     * - By default, this operation queries data from 00:00:00 (UTC+8) of the current day to the current time. The query time range cannot exceed 30 days and cannot start earlier than three calendar months before the current time.
     * - You can only query data for the primary account to which the current caller identity belongs. You cannot specify other accounts.
     * - The product of PageNumber and PageSize cannot exceed 1,000,000.
     * - If BizType is not specified, the default value is Enterprise Edition.
     * - If GatewayRegion is not specified, the default value is Shanghai for the China site and Singapore for the international site.
     *
     * @param request - DescribeAICallDetailsRequest
     * @returns DescribeAICallDetailsResponse
     */
    describeAICallDetails(request: $_model.DescribeAICallDetailsRequest): Promise<$_model.DescribeAICallDetailsResponse>;
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
    describeCreditPackageAgentsWithOptions(request: $_model.DescribeCreditPackageAgentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreditPackageAgentsResponse>;
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
    describeCreditPackageAgents(request: $_model.DescribeCreditPackageAgentsRequest): Promise<$_model.DescribeCreditPackageAgentsResponse>;
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
    describeCreditUsageInfoWithOptions(request: $_model.DescribeCreditUsageInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCreditUsageInfoResponse>;
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
    describeCreditUsageInfo(request: $_model.DescribeCreditUsageInfoRequest): Promise<$_model.DescribeCreditUsageInfoResponse>;
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
    describeDeductionStatisticWithOptions(request: $_model.DescribeDeductionStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeductionStatisticResponse>;
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
    describeDeductionStatistic(request: $_model.DescribeDeductionStatisticRequest): Promise<$_model.DescribeDeductionStatisticResponse>;
    /**
     * Queries logistics address information.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDeliveryAddressResponse
     */
    describeDeliveryAddressWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeliveryAddressResponse>;
    /**
     * Queries logistics address information.
     * @returns DescribeDeliveryAddressResponse
     */
    describeDeliveryAddress(): Promise<$_model.DescribeDeliveryAddressResponse>;
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
    describeGroupsWithOptions(request: $_model.DescribeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupsResponse>;
    /**
     * Queries deduction group information.
     *
     * @remarks
     * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
     *
     * @param request - DescribeGroupsRequest
     * @returns DescribeGroupsResponse
     */
    describeGroups(request: $_model.DescribeGroupsRequest): Promise<$_model.DescribeGroupsResponse>;
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
    describeInstanceAutoRenewalAttributeWithOptions(request: $_model.DescribeInstanceAutoRenewalAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * Queries the renewal methods.
     *
     * @remarks
     * Filters instances by resource type, instance, and region, and uses paging to query the auto-renewal status.
     *
     * @param request - DescribeInstanceAutoRenewalAttributeRequest
     * @returns DescribeInstanceAutoRenewalAttributeResponse
     */
    describeInstanceAutoRenewalAttribute(request: $_model.DescribeInstanceAutoRenewalAttributeRequest): Promise<$_model.DescribeInstanceAutoRenewalAttributeResponse>;
    /**
     * Queries sold instances and their quotas and properties by paging based on resource type, instance ID, business resource ID, and status.
     *
     * @remarks
     * Queries sold instances and their quotas and properties by paging based on resource type, instance ID, business resource ID, and status.
     *
     * @param request - DescribeInstancesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeInstancesResponse
     */
    describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse>;
    /**
     * Queries sold instances and their quotas and properties by paging based on resource type, instance ID, business resource ID, and status.
     *
     * @remarks
     * Queries sold instances and their quotas and properties by paging based on resource type, instance ID, business resource ID, and status.
     *
     * @param request - DescribeInstancesRequest
     * @returns DescribeInstancesResponse
     */
    describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse>;
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
    describeMultiPriceWithOptions(request: $_model.DescribeMultiPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiPriceResponse>;
    /**
     * Queries the prices of Elastic Desktop Service products for order types such as new purchases, renewals, configuration changes, and unsubscriptions.
     *
     * @remarks
     * <props="china">Before you call this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product?#/gws/detail/gws) of Elastic Desktop Service.
     *
     * @param request - DescribeMultiPriceRequest
     * @returns DescribeMultiPriceResponse
     */
    describeMultiPrice(request: $_model.DescribeMultiPriceRequest): Promise<$_model.DescribeMultiPriceResponse>;
    /**
     * Queries the deduction details of core-hour packages.
     *
     * @param request - DescribePackageDeductionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePackageDeductionsResponse
     */
    describePackageDeductionsWithOptions(request: $_model.DescribePackageDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePackageDeductionsResponse>;
    /**
     * Queries the deduction details of core-hour packages.
     *
     * @param request - DescribePackageDeductionsRequest
     * @returns DescribePackageDeductionsResponse
     */
    describePackageDeductions(request: $_model.DescribePackageDeductionsRequest): Promise<$_model.DescribePackageDeductionsResponse>;
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
    describeRunIdDeductionsWithOptions(request: $_model.DescribeRunIdDeductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRunIdDeductionsResponse>;
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
    describeRunIdDeductions(request: $_model.DescribeRunIdDeductionsRequest): Promise<$_model.DescribeRunIdDeductionsResponse>;
    /**
     * Modifies the attributes of an instance.
     *
     * @param request - ModifyInstancePropertiesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstancePropertiesResponse
     */
    modifyInstancePropertiesWithOptions(request: $_model.ModifyInstancePropertiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstancePropertiesResponse>;
    /**
     * Modifies the attributes of an instance.
     *
     * @param request - ModifyInstancePropertiesRequest
     * @returns ModifyInstancePropertiesResponse
     */
    modifyInstanceProperties(request: $_model.ModifyInstancePropertiesRequest): Promise<$_model.ModifyInstancePropertiesResponse>;
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
    setAgentCreditQuotaWithOptions(request: $_model.SetAgentCreditQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetAgentCreditQuotaResponse>;
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
    setAgentCreditQuota(request: $_model.SetAgentCreditQuotaRequest): Promise<$_model.SetAgentCreditQuotaResponse>;
}
