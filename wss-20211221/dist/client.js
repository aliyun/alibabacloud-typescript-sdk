"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const openapi_core_1 = __importDefault(require("@alicloud/openapi-core"));
const openapi_core_2 = require("@alicloud/openapi-core");
const $_model = __importStar(require("./models/model"));
__exportStar(require("./models/model"), exports);
class Client extends openapi_core_1.default {
    constructor(config) {
        super(config);
        this._endpointRule = "regional";
        this.checkConfig(config);
        this._endpoint = this.getEndpoint("wss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
    }
    getEndpoint(productId, regionId, endpointRule, network, suffix, endpointMap, endpoint) {
        if (!$dara.isNull(endpoint)) {
            return endpoint;
        }
        if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
            return endpointMap[regionId];
        }
        return openapi_core_2.OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
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
    async createMultiOrderWithOptions(tmpReq, runtime) {
        tmpReq.validate();
        let request = new $_model.CreateMultiOrderShrinkRequest({});
        openapi_core_2.OpenApiUtil.convert(tmpReq, request);
        if (!$dara.isNull(tmpReq.properties)) {
            request.propertiesShrink = openapi_core_2.OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
        }
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.CreateMultiOrderResponse({}));
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
    async createMultiOrder(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.createMultiOrderWithOptions(request, runtime);
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
    async describeCreditPackageAgentsWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeCreditPackageAgentsResponse({}));
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
    async describeCreditPackageAgents(request) {
        let runtime = new $dara.RuntimeOptions({});
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
    async describeCreditUsageInfoWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeCreditUsageInfoResponse({}));
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
    async describeCreditUsageInfo(request) {
        let runtime = new $dara.RuntimeOptions({});
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
    async describeDeductionStatisticWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeDeductionStatisticResponse({}));
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
    async describeDeductionStatistic(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeDeductionStatisticWithOptions(request, runtime);
    }
    /**
     * Queries logistics address information.
     *
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribeDeliveryAddressResponse
     */
    async describeDeliveryAddressWithOptions(runtime) {
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({});
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeDeliveryAddressResponse({}));
    }
    /**
     * Queries logistics address information.
     * @returns DescribeDeliveryAddressResponse
     */
    async describeDeliveryAddress() {
        let runtime = new $dara.RuntimeOptions({});
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
    async describeGroupsWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeGroupsResponse({}));
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
    async describeGroups(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeGroupsWithOptions(request, runtime);
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
    async describeMultiPriceWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeMultiPriceResponse({}));
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
    async describeMultiPrice(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeMultiPriceWithOptions(request, runtime);
    }
    /**
     * Queries the deduction details of core-hour packages.
     *
     * @param request - DescribePackageDeductionsRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns DescribePackageDeductionsResponse
     */
    async describePackageDeductionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribePackageDeductionsResponse({}));
    }
    /**
     * Queries the deduction details of core-hour packages.
     *
     * @param request - DescribePackageDeductionsRequest
     * @returns DescribePackageDeductionsResponse
     */
    async describePackageDeductions(request) {
        let runtime = new $dara.RuntimeOptions({});
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
    async describeRunIdDeductionsWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.DescribeRunIdDeductionsResponse({}));
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
    async describeRunIdDeductions(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.describeRunIdDeductionsWithOptions(request, runtime);
    }
    /**
     * Modifies the attributes of an instance.
     *
     * @param request - ModifyInstancePropertiesRequest
     * @param runtime - runtime options for this request RuntimeOptions
     * @returns ModifyInstancePropertiesResponse
     */
    async modifyInstancePropertiesWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.ModifyInstancePropertiesResponse({}));
    }
    /**
     * Modifies the attributes of an instance.
     *
     * @param request - ModifyInstancePropertiesRequest
     * @returns ModifyInstancePropertiesResponse
     */
    async modifyInstanceProperties(request) {
        let runtime = new $dara.RuntimeOptions({});
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
    async setAgentCreditQuotaWithOptions(request, runtime) {
        request.validate();
        let query = {};
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
        let req = new openapi_core_2.$OpenApiUtil.OpenApiRequest({
            query: openapi_core_2.OpenApiUtil.query(query),
        });
        let params = new openapi_core_2.$OpenApiUtil.Params({
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
        return $dara.cast(await this.callApi(params, req, runtime), new $_model.SetAgentCreditQuotaResponse({}));
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
    async setAgentCreditQuota(request) {
        let runtime = new $dara.RuntimeOptions({});
        return await this.setAgentCreditQuotaWithOptions(request, runtime);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map