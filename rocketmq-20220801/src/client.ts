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
    this._endpoint = this.getEndpoint("rocketmq", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Add Disaster Recovery Plan Entry
   * 
   * @param request - AddDisasterRecoveryItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDisasterRecoveryItemResponse
   */
  async addDisasterRecoveryItemWithOptions(planId: string, request: $_model.AddDisasterRecoveryItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDisasterRecoveryItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topics)) {
      body["topics"] = request.topics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.AddDisasterRecoveryItemResponse({}));
  }

  /**
   * Add Disaster Recovery Plan Entry
   * 
   * @param request - AddDisasterRecoveryItemRequest
   * @returns AddDisasterRecoveryItemResponse
   */
  async addDisasterRecoveryItem(planId: string, request: $_model.AddDisasterRecoveryItemRequest): Promise<$_model.AddDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDisasterRecoveryItemWithOptions(planId, request, headers, runtime);
  }

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceGroup/change`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * The ID of the consumer group. The ID is globally unique and is used to identify a consumer group.
   * The following limits are imposed on the ID:
   * *   Character limit: The ID can contain letters, digits, underscores (_), hyphens (-), and percent signs (%).
   * *   Length limit: The ID must be 1 to 60 characters in length.
   * For more information about strings that are reserved for the system, see [Limits on parameters](https://help.aliyun.com/document_detail/440347.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: $_model.CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumeRetryPolicy)) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!$dara.isNull(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!$dara.isNull(request.maxReceiveTps)) {
      body["maxReceiveTps"] = request.maxReceiveTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerGroupResponse({}));
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * The ID of the consumer group. The ID is globally unique and is used to identify a consumer group.
   * The following limits are imposed on the ID:
   * *   Character limit: The ID can contain letters, digits, underscores (_), hyphens (-), and percent signs (%).
   * *   Length limit: The ID must be 1 to 60 characters in length.
   * For more information about strings that are reserved for the system, see [Limits on parameters](https://help.aliyun.com/document_detail/440347.html).
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(instanceId: string, consumerGroupId: string, request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Create Disaster Recovery Plan
   * 
   * @param request - CreateDisasterRecoveryPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDisasterRecoveryPlanResponse
   */
  async createDisasterRecoveryPlanWithOptions(request: $_model.CreateDisasterRecoveryPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDisasterRecoveryPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSyncCheckpoint)) {
      body["autoSyncCheckpoint"] = request.autoSyncCheckpoint;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.planDesc)) {
      body["planDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planName)) {
      body["planName"] = request.planName;
    }

    if (!$dara.isNull(request.planType)) {
      body["planType"] = request.planType;
    }

    if (!$dara.isNull(request.syncCheckpointEnabled)) {
      body["syncCheckpointEnabled"] = request.syncCheckpointEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateDisasterRecoveryPlanResponse({}));
  }

  /**
   * Create Disaster Recovery Plan
   * 
   * @param request - CreateDisasterRecoveryPlanRequest
   * @returns CreateDisasterRecoveryPlanResponse
   */
  async createDisasterRecoveryPlan(request: $_model.CreateDisasterRecoveryPlanRequest): Promise<$_model.CreateDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDisasterRecoveryPlanWithOptions(request, headers, runtime);
  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["autoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.commodityCode)) {
      body["commodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["periodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.productInfo)) {
      body["productInfo"] = request.productInfo;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.seriesCode)) {
      body["seriesCode"] = request.seriesCode;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["serviceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.subSeriesCode)) {
      body["subSeriesCode"] = request.subSeriesCode;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates an account that is used to access an instance.
   * 
   * @param request - CreateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccountWithOptions(instanceId: string, request: $_model.CreateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceAccountResponse({}));
  }

  /**
   * Creates an account that is used to access an instance.
   * 
   * @param request - CreateInstanceAccountRequest
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccount(instanceId: string, request: $_model.CreateInstanceAccountRequest): Promise<$_model.CreateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates an access control list (ACL) in a specific instance.
   * 
   * @param request - CreateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAclWithOptions(instanceId: string, username: string, request: $_model.CreateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceAclResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!$dara.isNull(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceAclResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceAclResponse({}));
  }

  /**
   * Creates an access control list (ACL) in a specific instance.
   * 
   * @param request - CreateInstanceAclRequest
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAcl(instanceId: string, username: string, request: $_model.CreateInstanceAclRequest): Promise<$_model.CreateInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Creates an IP address whitelist.
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelistWithOptions(instanceId: string, request: $_model.CreateInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceIpWhitelistResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceIpWhitelistResponse({}));
  }

  /**
   * Creates an IP address whitelist.
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelist(instanceId: string, request: $_model.CreateInstanceIpWhitelistRequest): Promise<$_model.CreateInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Create Topic
   * 
   * @param request - CreateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(instanceId: string, topicName: string, request: $_model.CreateTopicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTopicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxSendTps)) {
      body["maxSendTps"] = request.maxSendTps;
    }

    if (!$dara.isNull(request.messageType)) {
      body["messageType"] = request.messageType;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTopicResponse>(await this.callApi(params, req, runtime), new $_model.CreateTopicResponse({}));
  }

  /**
   * Create Topic
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(instanceId: string, topicName: string, request: $_model.CreateTopicRequest): Promise<$_model.CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(instanceId: string, consumerGroupId: string): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Deletes the subscriptions of a consumer group.
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, request: $_model.DeleteConsumerGroupSubscriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupSubscriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterExpression)) {
      query["filterExpression"] = request.filterExpression;
    }

    if (!$dara.isNull(request.filterType)) {
      query["filterType"] = request.filterType;
    }

    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupSubscriptionResponse({}));
  }

  /**
   * Deletes the subscriptions of a consumer group.
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscription(instanceId: string, consumerGroupId: string, request: $_model.DeleteConsumerGroupSubscriptionRequest): Promise<$_model.DeleteConsumerGroupSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * 删除容灾计划条目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDisasterRecoveryItemResponse
   */
  async deleteDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDisasterRecoveryItemResponse({}));
  }

  /**
   * 删除容灾计划条目
   * @returns DeleteDisasterRecoveryItemResponse
   */
  async deleteDisasterRecoveryItem(planId: string, itemId: string): Promise<$_model.DeleteDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Deletes a global message backup plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDisasterRecoveryPlanResponse
   */
  async deleteDisasterRecoveryPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDisasterRecoveryPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDisasterRecoveryPlanResponse({}));
  }

  /**
   * Deletes a global message backup plan.
   * @returns DeleteDisasterRecoveryPlanResponse
   */
  async deleteDisasterRecoveryPlan(planId: string): Promise<$_model.DeleteDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDisasterRecoveryPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Delete access control ACL user
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccountWithOptions(instanceId: string, username: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceAccountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts/${$dara.URL.percentEncode(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceAccountResponse({}));
  }

  /**
   * Delete access control ACL user
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccount(instanceId: string, username: string): Promise<$_model.DeleteInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAccountWithOptions(instanceId, username, headers, runtime);
  }

  /**
   * Deletes the permissions of a specific account of an instance.
   * 
   * @param request - DeleteInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAclWithOptions(instanceId: string, username: string, request: $_model.DeleteInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceAclResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceAclResponse({}));
  }

  /**
   * Deletes the permissions of a specific account of an instance.
   * 
   * @param request - DeleteInstanceAclRequest
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAcl(instanceId: string, username: string, request: $_model.DeleteInstanceAclRequest): Promise<$_model.DeleteInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Deletes a specific IP address whitelist from an instance.
   * 
   * @param tmpReq - DeleteInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelistWithOptions(instanceId: string, tmpReq: $_model.DeleteInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceIpWhitelistResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteInstanceIpWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipWhitelists)) {
      request.ipWhitelistsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipWhitelists, "ipWhitelists", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.ipWhitelistsShrink)) {
      query["ipWhitelists"] = request.ipWhitelistsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceIpWhitelistResponse({}));
  }

  /**
   * Deletes a specific IP address whitelist from an instance.
   * 
   * @param request - DeleteInstanceIpWhitelistRequest
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelist(instanceId: string, request: $_model.DeleteInstanceIpWhitelistRequest): Promise<$_model.DeleteInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTopicResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTopicResponse({}));
  }

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * @returns DeleteTopicResponse
   */
  async deleteTopic(instanceId: string, topicName: string): Promise<$_model.DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerGroupResponse({}));
  }

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroup(instanceId: string, consumerGroupId: string): Promise<$_model.GetConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Query Consumer Group Backlog Information
   * 
   * @param request - GetConsumerGroupLagRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLagWithOptions(instanceId: string, consumerGroupId: string, request: $_model.GetConsumerGroupLagRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerGroupLagResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroupLag",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/lag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerGroupLagResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerGroupLagResponse({}));
  }

  /**
   * Query Consumer Group Backlog Information
   * 
   * @param request - GetConsumerGroupLagRequest
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLag(instanceId: string, consumerGroupId: string, request: $_model.GetConsumerGroupLagRequest): Promise<$_model.GetConsumerGroupLagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupLagWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Queries the subscriptions of a consumer group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerGroupSubscriptionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions/${$dara.URL.percentEncode(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerGroupSubscriptionResponse({}));
  }

  /**
   * Queries the subscriptions of a consumer group.
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscription(instanceId: string, consumerGroupId: string, topicName: string): Promise<$_model.GetConsumerGroupSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, topicName, headers, runtime);
  }

  /**
   * Queries the stack information about a consumer.
   * 
   * @param request - GetConsumerStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerStackResponse
   */
  async getConsumerStackWithOptions(instanceId: string, consumerGroupId: string, request: $_model.GetConsumerStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerStackResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerStack",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/stack`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerStackResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerStackResponse({}));
  }

  /**
   * Queries the stack information about a consumer.
   * 
   * @param request - GetConsumerStackRequest
   * @returns GetConsumerStackResponse
   */
  async getConsumerStack(instanceId: string, consumerGroupId: string, request: $_model.GetConsumerStackRequest): Promise<$_model.GetConsumerStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerStackWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * 查询容灾计划条目详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDisasterRecoveryItemResponse
   */
  async getDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.GetDisasterRecoveryItemResponse({}));
  }

  /**
   * 查询容灾计划条目详情
   * @returns GetDisasterRecoveryItemResponse
   */
  async getDisasterRecoveryItem(planId: string, itemId: string): Promise<$_model.GetDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * 查询容灾计划详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDisasterRecoveryPlanResponse
   */
  async getDisasterRecoveryPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDisasterRecoveryPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetDisasterRecoveryPlanResponse({}));
  }

  /**
   * 查询容灾计划详情
   * @returns GetDisasterRecoveryPlanResponse
   */
  async getDisasterRecoveryPlan(planId: string): Promise<$_model.GetDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDisasterRecoveryPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains the account used to access a specific instance.
   * 
   * @param request - GetInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccountWithOptions(instanceId: string, request: $_model.GetInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/account`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceAccountResponse({}));
  }

  /**
   * Obtains the account used to access a specific instance.
   * 
   * @param request - GetInstanceAccountRequest
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccount(instanceId: string, request: $_model.GetInstanceAccountRequest): Promise<$_model.GetInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries information about the access control list (ACL) of an instance.
   * 
   * @param request - GetInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAclResponse
   */
  async getInstanceAclWithOptions(instanceId: string, username: string, request: $_model.GetInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceAclResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceAclResponse({}));
  }

  /**
   * Queries information about the access control list (ACL) of an instance.
   * 
   * @param request - GetInstanceAclRequest
   * @returns GetInstanceAclResponse
   */
  async getInstanceAcl(instanceId: string, username: string, request: $_model.GetInstanceAclRequest): Promise<$_model.GetInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Queries the information about the IP address whitelist of an instance.
   * 
   * @param tmpReq - GetInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceIpWhitelistResponse
   */
  async getInstanceIpWhitelistWithOptions(instanceId: string, tmpReq: $_model.GetInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceIpWhitelistResponse> {
    tmpReq.validate();
    let request = new $_model.GetInstanceIpWhitelistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipWhitelists)) {
      request.ipWhitelistsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipWhitelists, "ipWhitelists", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelistsShrink)) {
      query["ipWhitelists"] = request.ipWhitelistsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelists`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceIpWhitelistResponse({}));
  }

  /**
   * Queries the information about the IP address whitelist of an instance.
   * 
   * @param request - GetInstanceIpWhitelistRequest
   * @returns GetInstanceIpWhitelistResponse
   */
  async getInstanceIpWhitelist(instanceId: string, request: $_model.GetInstanceIpWhitelistRequest): Promise<$_model.GetInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Obtains the details of a specific message.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageDetailResponse
   */
  async getMessageDetailWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMessageDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMessageDetail",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMessageDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetMessageDetailResponse({}));
  }

  /**
   * Obtains the details of a specific message.
   * @returns GetMessageDetailResponse
   */
  async getMessageDetail(instanceId: string, topicName: string, messageId: string): Promise<$_model.GetMessageDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageDetailWithOptions(instanceId, topicName, messageId, headers, runtime);
  }

  /**
   * Query Topic Details
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
  async getTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicResponse({}));
  }

  /**
   * Query Topic Details
   * @returns GetTopicResponse
   */
  async getTopic(instanceId: string, topicName: string): Promise<$_model.GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the trace of a specific message in a specific topic.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrace",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/traces/${$dara.URL.percentEncode(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceResponse({}));
  }

  /**
   * Queries the trace of a specific message in a specific topic.
   * @returns GetTraceResponse
   */
  async getTrace(instanceId: string, topicName: string, messageId: string): Promise<$_model.GetTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceWithOptions(instanceId, topicName, messageId, headers, runtime);
  }

  /**
   * 查询支持的可用区
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZonesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableZonesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableZones",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableZonesResponse({}));
  }

  /**
   * 查询支持的可用区
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZones(): Promise<$_model.ListAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableZonesWithOptions(headers, runtime);
  }

  /**
   * 查询消费者客户端连接信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnectionsWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerConnectionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerConnections",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerConnectionsResponse({}));
  }

  /**
   * 查询消费者客户端连接信息
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnections(instanceId: string, consumerGroupId: string): Promise<$_model.ListConsumerConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerConnectionsWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Queries the subscriptions of a specific consumer group.
   * 
   * @param request - ListConsumerGroupSubscriptionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptionsWithOptions(instanceId: string, consumerGroupId: string, request: $_model.ListConsumerGroupSubscriptionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerGroupSubscriptionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerGroupSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerGroupSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerGroupSubscriptionsResponse({}));
  }

  /**
   * Queries the subscriptions of a specific consumer group.
   * 
   * @param request - ListConsumerGroupSubscriptionsRequest
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptions(instanceId: string, consumerGroupId: string, request: $_model.ListConsumerGroupSubscriptionsRequest): Promise<$_model.ListConsumerGroupSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupSubscriptionsWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * List Consumer Groups
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. Do not rely on OpenAPI implementation in the core data chain for message sending and receiving, as this may lead to risks in the chain.
   * 
   * @param request - ListConsumerGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroupsWithOptions(instanceId: string, request: $_model.ListConsumerGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerGroups",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerGroupsResponse({}));
  }

  /**
   * List Consumer Groups
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. Do not rely on OpenAPI implementation in the core data chain for message sending and receiving, as this may lead to risks in the chain.
   * 
   * @param request - ListConsumerGroupsRequest
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroups(instanceId: string, request: $_model.ListConsumerGroupsRequest): Promise<$_model.ListConsumerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Query disaster recovery plan consumption progress information
   * 
   * @param request - ListDisasterRecoveryCheckpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryCheckpointsResponse
   */
  async listDisasterRecoveryCheckpointsWithOptions(planId: string, itemId: string, request: $_model.ListDisasterRecoveryCheckpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisasterRecoveryCheckpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryCheckpoints",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/checkpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDisasterRecoveryCheckpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListDisasterRecoveryCheckpointsResponse({}));
  }

  /**
   * Query disaster recovery plan consumption progress information
   * 
   * @param request - ListDisasterRecoveryCheckpointsRequest
   * @returns ListDisasterRecoveryCheckpointsResponse
   */
  async listDisasterRecoveryCheckpoints(planId: string, itemId: string, request: $_model.ListDisasterRecoveryCheckpointsRequest): Promise<$_model.ListDisasterRecoveryCheckpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryCheckpointsWithOptions(planId, itemId, request, headers, runtime);
  }

  /**
   * Query Disaster Recovery Plan Entry List
   * 
   * @param request - ListDisasterRecoveryItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryItemsResponse
   */
  async listDisasterRecoveryItemsWithOptions(planId: string, request: $_model.ListDisasterRecoveryItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisasterRecoveryItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryItems",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDisasterRecoveryItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListDisasterRecoveryItemsResponse({}));
  }

  /**
   * Query Disaster Recovery Plan Entry List
   * 
   * @param request - ListDisasterRecoveryItemsRequest
   * @returns ListDisasterRecoveryItemsResponse
   */
  async listDisasterRecoveryItems(planId: string, request: $_model.ListDisasterRecoveryItemsRequest): Promise<$_model.ListDisasterRecoveryItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryItemsWithOptions(planId, request, headers, runtime);
  }

  /**
   * Query Disaster Recovery Plan List
   * 
   * @param request - ListDisasterRecoveryPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisasterRecoveryPlansResponse
   */
  async listDisasterRecoveryPlansWithOptions(request: $_model.ListDisasterRecoveryPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisasterRecoveryPlansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisasterRecoveryPlans",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDisasterRecoveryPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListDisasterRecoveryPlansResponse({}));
  }

  /**
   * Query Disaster Recovery Plan List
   * 
   * @param request - ListDisasterRecoveryPlansRequest
   * @returns ListDisasterRecoveryPlansResponse
   */
  async listDisasterRecoveryPlans(request: $_model.ListDisasterRecoveryPlansRequest): Promise<$_model.ListDisasterRecoveryPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDisasterRecoveryPlansWithOptions(request, headers, runtime);
  }

  /**
   * Queries the accounts that are used to access a specific instance.
   * 
   * @param request - ListInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccountWithOptions(instanceId: string, request: $_model.ListInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!$dara.isNull(request.accountType)) {
      query["accountType"] = request.accountType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceAccountResponse({}));
  }

  /**
   * Queries the accounts that are used to access a specific instance.
   * 
   * @param request - ListInstanceAccountRequest
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccount(instanceId: string, request: $_model.ListInstanceAccountRequest): Promise<$_model.ListInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the access control lists (ACLs) of an instance.
   * 
   * @param request - ListInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAclResponse
   */
  async listInstanceAclWithOptions(instanceId: string, request: $_model.ListInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceAclResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceAclResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceAclResponse({}));
  }

  /**
   * Queries the access control lists (ACLs) of an instance.
   * 
   * @param request - ListInstanceAclRequest
   * @returns ListInstanceAclResponse
   */
  async listInstanceAcl(instanceId: string, request: $_model.ListInstanceAclRequest): Promise<$_model.ListInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAclWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the IP address whitelists of an instance.
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelistWithOptions(instanceId: string, request: $_model.ListInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceIpWhitelistResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/ip/whitelist`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceIpWhitelistResponse({}));
  }

  /**
   * Queries the IP address whitelists of an instance.
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelist(instanceId: string, request: $_model.ListInstanceIpWhitelistRequest): Promise<$_model.ListInstanceIpWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.seriesCodes)) {
      request.seriesCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.seriesCodes, "seriesCodes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.seriesCodesShrink)) {
      query["seriesCodes"] = request.seriesCodesShrink;
    }

    if (!$dara.isNull(request.storageSecretKey)) {
      query["storageSecretKey"] = request.storageSecretKey;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of messages.
   * 
   * @param request - ListMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(instanceId: string, topicName: string, request: $_model.ListMessagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMessagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!$dara.isNull(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollId)) {
      query["scrollId"] = request.scrollId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMessages",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListMessagesResponse({}));
  }

  /**
   * Queries the list of messages.
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(instanceId: string, topicName: string, request: $_model.ListMessagesRequest): Promise<$_model.ListMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Query Monitoring Items List
   * 
   * @param request - ListMetricMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetricMetaResponse
   */
  async listMetricMetaWithOptions(request: $_model.ListMetricMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetricMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetricMeta",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/monitor/metrics/meta`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetricMetaResponse>(await this.callApi(params, req, runtime), new $_model.ListMetricMetaResponse({}));
  }

  /**
   * Query Monitoring Items List
   * 
   * @param request - ListMetricMetaRequest
   * @returns ListMetricMetaResponse
   */
  async listMetricMeta(request: $_model.ListMetricMetaRequest): Promise<$_model.ListMetricMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetricMetaWithOptions(request, headers, runtime);
  }

  /**
   * Queries regions in which ApsaraMQ for RocketMQ is available.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries regions in which ApsaraMQ for RocketMQ is available.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * Query visible resource tag relationships
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Query visible resource tag relationships
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the subscriptions of a specific topic.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptionsWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicSubscriptionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopicSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicSubscriptionsResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicSubscriptionsResponse({}));
  }

  /**
   * Queries the subscriptions of a specific topic.
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptions(instanceId: string, topicName: string): Promise<$_model.ListTopicSubscriptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicSubscriptionsWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Query Topic List
   * 
   * @param tmpReq - ListTopicsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicsResponse
   */
  async listTopicsWithOptions(instanceId: string, tmpReq: $_model.ListTopicsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTopicsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.messageTypes)) {
      request.messageTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messageTypes, "messageTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.messageTypesShrink)) {
      query["messageTypes"] = request.messageTypesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopics",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicsResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicsResponse({}));
  }

  /**
   * Query Topic List
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(instanceId: string, request: $_model.ListTopicsRequest): Promise<$_model.ListTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the message traces of a specific topic.
   * 
   * @param request - ListTracesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTracesResponse
   */
  async listTracesWithOptions(instanceId: string, topicName: string, request: $_model.ListTracesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTracesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!$dara.isNull(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTraces",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/traces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTracesResponse>(await this.callApi(params, req, runtime), new $_model.ListTracesResponse({}));
  }

  /**
   * Queries the message traces of a specific topic.
   * 
   * @param request - ListTracesRequest
   * @returns ListTracesResponse
   */
  async listTraces(instanceId: string, topicName: string, request: $_model.ListTracesRequest): Promise<$_model.ListTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTracesWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffsetWithOptions(instanceId: string, consumerGroupId: string, topicName: string, request: $_model.ResetConsumeOffsetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetConsumeOffsetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resetTime)) {
      body["resetTime"] = request.resetTime;
    }

    if (!$dara.isNull(request.resetType)) {
      body["resetType"] = request.resetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetConsumeOffset",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}/consumeOffsets/${$dara.URL.percentEncode(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetConsumeOffsetResponse>(await this.callApi(params, req, runtime), new $_model.ResetConsumeOffsetResponse({}));
  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffset(instanceId: string, consumerGroupId: string, topicName: string, request: $_model.ResetConsumeOffsetRequest): Promise<$_model.ResetConsumeOffsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetConsumeOffsetWithOptions(instanceId, consumerGroupId, topicName, request, headers, runtime);
  }

  /**
   * Enable Disaster Recovery Plan Entry
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDisasterRecoveryItemResponse
   */
  async startDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.StartDisasterRecoveryItemResponse({}));
  }

  /**
   * Enable Disaster Recovery Plan Entry
   * @returns StartDisasterRecoveryItemResponse
   */
  async startDisasterRecoveryItem(planId: string, itemId: string): Promise<$_model.StartDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Deactivate Disaster Recovery Plan Entry
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDisasterRecoveryItemResponse
   */
  async stopDisasterRecoveryItemWithOptions(planId: string, itemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopDisasterRecoveryItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.StopDisasterRecoveryItemResponse({}));
  }

  /**
   * Deactivate Disaster Recovery Plan Entry
   * @returns StopDisasterRecoveryItemResponse
   */
  async stopDisasterRecoveryItem(planId: string, itemId: string): Promise<$_model.StopDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDisasterRecoveryItemWithOptions(planId, itemId, headers, runtime);
  }

  /**
   * Synchronize Disaster Recovery Plan Consumption Progress
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDisasterRecoveryCheckpointResponse
   */
  async syncDisasterRecoveryCheckpointWithOptions(planId: string, itemId: string, checkpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDisasterRecoveryCheckpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDisasterRecoveryCheckpoint",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}/checkpoints/${$dara.URL.percentEncode(checkpointId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDisasterRecoveryCheckpointResponse>(await this.callApi(params, req, runtime), new $_model.SyncDisasterRecoveryCheckpointResponse({}));
  }

  /**
   * Synchronize Disaster Recovery Plan Consumption Progress
   * @returns SyncDisasterRecoveryCheckpointResponse
   */
  async syncDisasterRecoveryCheckpoint(planId: string, itemId: string, checkpointId: string): Promise<$_model.SyncDisasterRecoveryCheckpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncDisasterRecoveryCheckpointWithOptions(planId, itemId, checkpointId, headers, runtime);
  }

  /**
   * Creates resource tags.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates resource tags.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["tagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Update ConsumerGroup
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. It is strictly prohibited to rely on OpenAPI implementation in the core data chain of message sending and receiving, otherwise it may lead to risks in the chain.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: $_model.UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumeRetryPolicy)) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!$dara.isNull(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!$dara.isNull(request.maxReceiveTps)) {
      body["maxReceiveTps"] = request.maxReceiveTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/consumerGroups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerGroupResponse({}));
  }

  /**
   * Update ConsumerGroup
   * 
   * @remarks
   * >Notice: The OpenAPI provided by Alibaba Cloud is a management API used for managing and querying related resources of Alibaba Cloud services. It is recommended to integrate it only in the management chain. It is strictly prohibited to rely on OpenAPI implementation in the core data chain of message sending and receiving, otherwise it may lead to risks in the chain.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(instanceId: string, consumerGroupId: string, request: $_model.UpdateConsumerGroupRequest): Promise<$_model.UpdateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Updates a topic mapping in a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryItemRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDisasterRecoveryItemResponse
   */
  async updateDisasterRecoveryItemWithOptions(planId: string, itemId: string, request: $_model.UpdateDisasterRecoveryItemRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDisasterRecoveryItemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topics)) {
      body["topics"] = request.topics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDisasterRecoveryItem",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}/items/${$dara.URL.percentEncode(itemId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDisasterRecoveryItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDisasterRecoveryItemResponse({}));
  }

  /**
   * Updates a topic mapping in a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryItemRequest
   * @returns UpdateDisasterRecoveryItemResponse
   */
  async updateDisasterRecoveryItem(planId: string, itemId: string, request: $_model.UpdateDisasterRecoveryItemRequest): Promise<$_model.UpdateDisasterRecoveryItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDisasterRecoveryItemWithOptions(planId, itemId, request, headers, runtime);
  }

  /**
   * Modifies a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDisasterRecoveryPlanResponse
   */
  async updateDisasterRecoveryPlanWithOptions(planId: string, request: $_model.UpdateDisasterRecoveryPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDisasterRecoveryPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSyncCheckpoint)) {
      body["autoSyncCheckpoint"] = request.autoSyncCheckpoint;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.planDesc)) {
      body["planDesc"] = request.planDesc;
    }

    if (!$dara.isNull(request.planName)) {
      body["planName"] = request.planName;
    }

    if (!$dara.isNull(request.planType)) {
      body["planType"] = request.planType;
    }

    if (!$dara.isNull(request.syncCheckpointEnabled)) {
      body["syncCheckpointEnabled"] = request.syncCheckpointEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDisasterRecoveryPlan",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/disaster_recovery/${$dara.URL.percentEncode(planId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDisasterRecoveryPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDisasterRecoveryPlanResponse({}));
  }

  /**
   * Modifies a global message backup plan.
   * 
   * @param request - UpdateDisasterRecoveryPlanRequest
   * @returns UpdateDisasterRecoveryPlanResponse
   */
  async updateDisasterRecoveryPlan(planId: string, request: $_model.UpdateDisasterRecoveryPlanRequest): Promise<$_model.UpdateDisasterRecoveryPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDisasterRecoveryPlanWithOptions(planId, request, headers, runtime);
  }

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(instanceId: string, request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclInfo)) {
      body["aclInfo"] = request.aclInfo;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!$dara.isNull(request.productInfo)) {
      body["productInfo"] = request.productInfo;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates the information about a specific account in a specific instance.
   * 
   * @param request - UpdateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccountWithOptions(instanceId: string, username: string, request: $_model.UpdateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!$dara.isNull(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/accounts/${$dara.URL.percentEncode(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceAccountResponse({}));
  }

  /**
   * Updates the information about a specific account in a specific instance.
   * 
   * @param request - UpdateInstanceAccountRequest
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccount(instanceId: string, username: string, request: $_model.UpdateInstanceAccountRequest): Promise<$_model.UpdateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAccountWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Updates the permissions on the resources of a specific instance for a specific user.
   * 
   * @param request - UpdateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAclWithOptions(instanceId: string, username: string, request: $_model.UpdateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceAclResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!$dara.isNull(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!$dara.isNull(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/acl/account/${$dara.URL.percentEncode(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceAclResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceAclResponse({}));
  }

  /**
   * Updates the permissions on the resources of a specific instance for a specific user.
   * 
   * @param request - UpdateInstanceAclRequest
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAcl(instanceId: string, username: string, request: $_model.UpdateInstanceAclRequest): Promise<$_model.UpdateInstanceAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * Update Topic
   * 
   * @param request - UpdateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicResponse
   */
  async updateTopicWithOptions(instanceId: string, topicName: string, request: $_model.UpdateTopicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTopicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxSendTps)) {
      body["maxSendTps"] = request.maxSendTps;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTopicResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTopicResponse({}));
  }

  /**
   * Update Topic
   * 
   * @param request - UpdateTopicRequest
   * @returns UpdateTopicResponse
   */
  async updateTopic(instanceId: string, topicName: string, request: $_model.UpdateTopicRequest): Promise<$_model.UpdateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Verifies the consumption status of a message in a specific topic on a specific instance.
   * 
   * @param request - VerifyConsumeMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessageWithOptions(instanceId: string, topicName: string, messageId: string, request: $_model.VerifyConsumeMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyConsumeMessageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!$dara.isNull(request.consumerGroupId)) {
      query["consumerGroupId"] = request.consumerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyConsumeMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages/${$dara.URL.percentEncode(messageId)}/action/verifyConsume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyConsumeMessageResponse>(await this.callApi(params, req, runtime), new $_model.VerifyConsumeMessageResponse({}));
  }

  /**
   * Verifies the consumption status of a message in a specific topic on a specific instance.
   * 
   * @param request - VerifyConsumeMessageRequest
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessage(instanceId: string, topicName: string, messageId: string, request: $_model.VerifyConsumeMessageRequest): Promise<$_model.VerifyConsumeMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyConsumeMessageWithOptions(instanceId, topicName, messageId, request, headers, runtime);
  }

  /**
   * Verifies the message sending feature of a specific topic on a specific instance.
   * 
   * @param request - VerifySendMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySendMessageResponse
   */
  async verifySendMessageWithOptions(instanceId: string, topicName: string, request: $_model.VerifySendMessageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.VerifySendMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.messageKey)) {
      body["messageKey"] = request.messageKey;
    }

    if (!$dara.isNull(request.messageTag)) {
      body["messageTag"] = request.messageTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySendMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${$dara.URL.percentEncode(instanceId)}/topics/${$dara.URL.percentEncode(topicName)}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifySendMessageResponse>(await this.callApi(params, req, runtime), new $_model.VerifySendMessageResponse({}));
  }

  /**
   * Verifies the message sending feature of a specific topic on a specific instance.
   * 
   * @param request - VerifySendMessageRequest
   * @returns VerifySendMessageResponse
   */
  async verifySendMessage(instanceId: string, topicName: string, request: $_model.VerifySendMessageRequest): Promise<$_model.VerifySendMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifySendMessageWithOptions(instanceId, topicName, request, headers, runtime);
  }

}
