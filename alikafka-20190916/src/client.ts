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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("alikafka", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Changes the resource group of an ApsaraMQ for Kafka instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group of an ApsaraMQ for Kafka instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a Message Queue for Apache Kafka instance from pay-as-you-go to subscription.
   * 
   * @param request - ConvertPostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertPostPayOrderResponse
   */
  async convertPostPayOrderWithOptions(request: $_model.ConvertPostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertPostPayOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertPostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertPostPayOrderResponse>(await this.callApi(params, req, runtime), new $_model.ConvertPostPayOrderResponse({}));
  }

  /**
   * Changes the billing method of a Message Queue for Apache Kafka instance from pay-as-you-go to subscription.
   * 
   * @param request - ConvertPostPayOrderRequest
   * @returns ConvertPostPayOrderResponse
   */
  async convertPostPayOrder(request: $_model.ConvertPostPayOrderRequest): Promise<$_model.ConvertPostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.convertPostPayOrderWithOptions(request, runtime);
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclResponse
   */
  async createAclWithOptions(request: $_model.CreateAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclOperationTypes)) {
      query["AclOperationTypes"] = request.aclOperationTypes;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAclResponse>(await this.callApi(params, req, runtime), new $_model.CreateAclResponse({}));
  }

  /**
   * Creates an access control list (ACL).
   * 
   * @param request - CreateAclRequest
   * @returns CreateAclResponse
   */
  async createAcl(request: $_model.CreateAclRequest): Promise<$_model.CreateAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAclWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(request: $_model.CreateConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerGroupResponse({}));
  }

  /**
   * Creates a consumer group.
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConsumerGroupWithOptions(request, runtime);
  }

  /**
   * 创建后付费实例。
   * 
   * @param tmpReq - CreatePostPayInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostPayInstanceResponse
   */
  async createPostPayInstanceWithOptions(tmpReq: $_model.CreatePostPayInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePostPayInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePostPayInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostPayInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePostPayInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePostPayInstanceResponse({}));
  }

  /**
   * 创建后付费实例。
   * 
   * @param request - CreatePostPayInstanceRequest
   * @returns CreatePostPayInstanceResponse
   */
  async createPostPayInstance(request: $_model.CreatePostPayInstanceRequest): Promise<$_model.CreatePostPayInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostPayInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go ApsaraMQ for Kafka instance. Pay-as-you-go instances allow you to pay after you use the resources. You are charged for pay-as-you-go instances based on the actual resource usage. You can use pay-as-you-go instances in test scenarios or scenarios in which the peak traffic is uncertain.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - CreatePostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePostPayOrderResponse
   */
  async createPostPayOrderWithOptions(tmpReq: $_model.CreatePostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePostPayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePostPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePostPayOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreatePostPayOrderResponse({}));
  }

  /**
   * Creates a pay-as-you-go ApsaraMQ for Kafka instance. Pay-as-you-go instances allow you to pay after you use the resources. You are charged for pay-as-you-go instances based on the actual resource usage. You can use pay-as-you-go instances in test scenarios or scenarios in which the peak traffic is uncertain.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - CreatePostPayOrderRequest
   * @returns CreatePostPayOrderResponse
   */
  async createPostPayOrder(request: $_model.CreatePostPayOrderRequest): Promise<$_model.CreatePostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPostPayOrderWithOptions(request, runtime);
  }

  /**
   * 创建预付费实例
   * 
   * @param tmpReq - CreatePrePayInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrePayInstanceResponse
   */
  async createPrePayInstanceWithOptions(tmpReq: $_model.CreatePrePayInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrePayInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePrePayInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrePayInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrePayInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrePayInstanceResponse({}));
  }

  /**
   * 创建预付费实例
   * 
   * @param request - CreatePrePayInstanceRequest
   * @returns CreatePrePayInstanceResponse
   */
  async createPrePayInstance(request: $_model.CreatePrePayInstanceRequest): Promise<$_model.CreatePrePayInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrePayInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a subscription ApsaraMQ for Kafka instance. You can use subscription instances only after you pay for them. Subscription instances are suitable for long-term and stable business scenarios.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of subscription ApsaraMQ for Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * *   If you create an ApsaraMQ for Kafka instance by calling this operation, the subscription duration is one month and the auto-renewal feature is enabled by default. The auto-renewal cycle is also one month. If you want to change the auto-renewal cycle or disable the auto-renewal feature, you can go to the [Renewal](https://renew.console.aliyun.com/#/ecs) page in the Alibaba Cloud Management Console.
   * 
   * @param tmpReq - CreatePrePayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrePayOrderResponse
   */
  async createPrePayOrderWithOptions(tmpReq: $_model.CreatePrePayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrePayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePrePayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrePayOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrePayOrderResponse({}));
  }

  /**
   * Creates a subscription ApsaraMQ for Kafka instance. You can use subscription instances only after you pay for them. Subscription instances are suitable for long-term and stable business scenarios.
   * 
   * @remarks
   *   Before you call this operation, make sure that you understand the billing methods and pricing of subscription ApsaraMQ for Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * *   If you create an ApsaraMQ for Kafka instance by calling this operation, the subscription duration is one month and the auto-renewal feature is enabled by default. The auto-renewal cycle is also one month. If you want to change the auto-renewal cycle or disable the auto-renewal feature, you can go to the [Renewal](https://renew.console.aliyun.com/#/ecs) page in the Alibaba Cloud Management Console.
   * 
   * @param request - CreatePrePayOrderRequest
   * @returns CreatePrePayOrderResponse
   */
  async createPrePayOrder(request: $_model.CreatePrePayOrderRequest): Promise<$_model.CreatePrePayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrePayOrderWithOptions(request, runtime);
  }

  /**
   * Creates a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - CreateSaslUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSaslUserResponse
   */
  async createSaslUserWithOptions(request: $_model.CreateSaslUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSaslUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mechanism)) {
      query["Mechanism"] = request.mechanism;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSaslUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateSaslUserResponse({}));
  }

  /**
   * Creates a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - CreateSaslUserRequest
   * @returns CreateSaslUserResponse
   */
  async createSaslUser(request: $_model.CreateSaslUserRequest): Promise<$_model.CreateSaslUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSaslUserWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled scaling rule for a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @remarks
   * ###### [](#-v3-serverless-)This operation is supported only by serverless ApsaraMQ for Kafka V3 instances.
   * 
   * @param tmpReq - CreateScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledScalingRuleResponse
   */
  async createScheduledScalingRuleWithOptions(tmpReq: $_model.CreateScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledScalingRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScheduledScalingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.weeklyTypes)) {
      request.weeklyTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.weeklyTypes, "WeeklyTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.durationMinutes)) {
      query["DurationMinutes"] = request.durationMinutes;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.firstScheduledTime)) {
      query["FirstScheduledTime"] = request.firstScheduledTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repeatType)) {
      query["RepeatType"] = request.repeatType;
    }

    if (!$dara.isNull(request.reservedPubFlow)) {
      query["ReservedPubFlow"] = request.reservedPubFlow;
    }

    if (!$dara.isNull(request.reservedSubFlow)) {
      query["ReservedSubFlow"] = request.reservedSubFlow;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.weeklyTypesShrink)) {
      query["WeeklyTypes"] = request.weeklyTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledScalingRuleResponse({}));
  }

  /**
   * Creates a scheduled scaling rule for a serverless ApsaraMQ for Kafka V3 instance.
   * 
   * @remarks
   * ###### [](#-v3-serverless-)This operation is supported only by serverless ApsaraMQ for Kafka V3 instances.
   * 
   * @param request - CreateScheduledScalingRuleRequest
   * @returns CreateScheduledScalingRuleResponse
   */
  async createScheduledScalingRule(request: $_model.CreateScheduledScalingRuleRequest): Promise<$_model.CreateScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   *   Each Alibaba Cloud account can call this operation up to once per second.
   * *   The maximum number of topics that you can create in an instance is determined by the specification of the instance.
   * 
   * @param request - CreateTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
  async createTopicWithOptions(request: $_model.CreateTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compactTopic)) {
      query["CompactTopic"] = request.compactTopic;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.localTopic)) {
      query["LocalTopic"] = request.localTopic;
    }

    if (!$dara.isNull(request.minInsyncReplicas)) {
      query["MinInsyncReplicas"] = request.minInsyncReplicas;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.replicationFactor)) {
      query["ReplicationFactor"] = request.replicationFactor;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTopicResponse>(await this.callApi(params, req, runtime), new $_model.CreateTopicResponse({}));
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   *   Each Alibaba Cloud account can call this operation up to once per second.
   * *   The maximum number of topics that you can create in an instance is determined by the specification of the instance.
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(request: $_model.CreateTopicRequest): Promise<$_model.CreateTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteAclRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclResponse
   */
  async deleteAclWithOptions(request: $_model.DeleteAclRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAclResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclOperationTypes)) {
      query["AclOperationTypes"] = request.aclOperationTypes;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAcl",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAclResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAclResponse({}));
  }

  /**
   * Deletes an access control list (ACL).
   * 
   * @param request - DeleteAclRequest
   * @returns DeleteAclResponse
   */
  async deleteAcl(request: $_model.DeleteAclRequest): Promise<$_model.DeleteAclResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAclWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group from a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(request: $_model.DeleteConsumerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a consumer group from a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(request: $_model.DeleteConsumerGroupRequest): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConsumerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an instance. You can delete subscription and pay-as-you-go instances after you release them.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes an instance. You can delete subscription and pay-as-you-go instances after you release them.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - DeleteSaslUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSaslUserResponse
   */
  async deleteSaslUserWithOptions(request: $_model.DeleteSaslUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSaslUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mechanism)) {
      query["Mechanism"] = request.mechanism;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSaslUser",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSaslUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSaslUserResponse({}));
  }

  /**
   * Deletes a Simple Authentication and Security Layer (SASL) user.
   * 
   * @param request - DeleteSaslUserRequest
   * @returns DeleteSaslUserResponse
   */
  async deleteSaslUser(request: $_model.DeleteSaslUserRequest): Promise<$_model.DeleteSaslUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSaslUserWithOptions(request, runtime);
  }

  /**
   * Deletes the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - DeleteScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledScalingRuleResponse
   */
  async deleteScheduledScalingRuleWithOptions(request: $_model.DeleteScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledScalingRuleResponse({}));
  }

  /**
   * Deletes the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - DeleteScheduledScalingRuleRequest
   * @returns DeleteScheduledScalingRuleResponse
   */
  async deleteScheduledScalingRule(request: $_model.DeleteScheduledScalingRuleRequest): Promise<$_model.DeleteScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a topic.
   * 
   * @param request - DeleteTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
  async deleteTopicWithOptions(request: $_model.DeleteTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTopicResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTopic",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTopicResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTopicResponse({}));
  }

  /**
   * Deletes a topic.
   * 
   * @param request - DeleteTopicRequest
   * @returns DeleteTopicResponse
   */
  async deleteTopic(request: $_model.DeleteTopicRequest): Promise<$_model.DeleteTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * 查询acl资源名
   * 
   * @param request - DescribeAclResourceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAclResourceNameResponse
   */
  async describeAclResourceNameWithOptions(request: $_model.DescribeAclResourceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAclResourceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAclResourceName",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAclResourceNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAclResourceNameResponse({}));
  }

  /**
   * 查询acl资源名
   * 
   * @param request - DescribeAclResourceNameRequest
   * @returns DescribeAclResourceNameResponse
   */
  async describeAclResourceName(request: $_model.DescribeAclResourceNameRequest): Promise<$_model.DescribeAclResourceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAclResourceNameWithOptions(request, runtime);
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAclsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAclsResponse
   */
  async describeAclsWithOptions(request: $_model.DescribeAclsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAclsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aclOperationType)) {
      query["AclOperationType"] = request.aclOperationType;
    }

    if (!$dara.isNull(request.aclPermissionType)) {
      query["AclPermissionType"] = request.aclPermissionType;
    }

    if (!$dara.isNull(request.aclResourceName)) {
      query["AclResourceName"] = request.aclResourceName;
    }

    if (!$dara.isNull(request.aclResourcePatternType)) {
      query["AclResourcePatternType"] = request.aclResourcePatternType;
    }

    if (!$dara.isNull(request.aclResourceType)) {
      query["AclResourceType"] = request.aclResourceType;
    }

    if (!$dara.isNull(request.host)) {
      query["Host"] = request.host;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAcls",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAclsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAclsResponse({}));
  }

  /**
   * Queries access control lists (ACLs).
   * 
   * @param request - DescribeAclsRequest
   * @returns DescribeAclsResponse
   */
  async describeAcls(request: $_model.DescribeAclsRequest): Promise<$_model.DescribeAclsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAclsWithOptions(request, runtime);
  }

  /**
   * Queries Simple Authentication and Security Layer (SASL) users.
   * 
   * @param request - DescribeSaslUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSaslUsersResponse
   */
  async describeSaslUsersWithOptions(request: $_model.DescribeSaslUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSaslUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSaslUsers",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSaslUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSaslUsersResponse({}));
  }

  /**
   * Queries Simple Authentication and Security Layer (SASL) users.
   * 
   * @param request - DescribeSaslUsersRequest
   * @returns DescribeSaslUsersResponse
   */
  async describeSaslUsers(request: $_model.DescribeSaslUsersRequest): Promise<$_model.DescribeSaslUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSaslUsersWithOptions(request, runtime);
  }

  /**
   * 降配后付费实例
   * 
   * @param tmpReq - DowngradePostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradePostPayOrderResponse
   */
  async downgradePostPayOrderWithOptions(tmpReq: $_model.DowngradePostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradePostPayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.DowngradePostPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradePostPayOrderResponse>(await this.callApi(params, req, runtime), new $_model.DowngradePostPayOrderResponse({}));
  }

  /**
   * 降配后付费实例
   * 
   * @param request - DowngradePostPayOrderRequest
   * @returns DowngradePostPayOrderResponse
   */
  async downgradePostPayOrder(request: $_model.DowngradePostPayOrderRequest): Promise<$_model.DowngradePostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradePostPayOrderWithOptions(request, runtime);
  }

  /**
   * 降配预付费实例
   * 
   * @param tmpReq - DowngradePrePayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradePrePayOrderResponse
   */
  async downgradePrePayOrderWithOptions(tmpReq: $_model.DowngradePrePayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradePrePayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.DowngradePrePayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DowngradePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradePrePayOrderResponse>(await this.callApi(params, req, runtime), new $_model.DowngradePrePayOrderResponse({}));
  }

  /**
   * 降配预付费实例
   * 
   * @param request - DowngradePrePayOrderRequest
   * @returns DowngradePrePayOrderResponse
   */
  async downgradePrePayOrder(request: $_model.DowngradePrePayOrderRequest): Promise<$_model.DowngradePrePayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downgradePrePayOrderWithOptions(request, runtime);
  }

  /**
   * Enables and disables the flexible group creation feature.
   * 
   * @param request - EnableAutoGroupCreationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoGroupCreationResponse
   */
  async enableAutoGroupCreationWithOptions(request: $_model.EnableAutoGroupCreationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAutoGroupCreationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoGroupCreation",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAutoGroupCreationResponse>(await this.callApi(params, req, runtime), new $_model.EnableAutoGroupCreationResponse({}));
  }

  /**
   * Enables and disables the flexible group creation feature.
   * 
   * @param request - EnableAutoGroupCreationRequest
   * @returns EnableAutoGroupCreationResponse
   */
  async enableAutoGroupCreation(request: $_model.EnableAutoGroupCreationRequest): Promise<$_model.EnableAutoGroupCreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoGroupCreationWithOptions(request, runtime);
  }

  /**
   * Enables or disables the automatic topic creation feature, or changes the number of partitions in topics that are automatically created.
   * 
   * @param request - EnableAutoTopicCreationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAutoTopicCreationResponse
   */
  async enableAutoTopicCreationWithOptions(request: $_model.EnableAutoTopicCreationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAutoTopicCreationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.updatePartition)) {
      query["UpdatePartition"] = request.updatePartition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAutoTopicCreation",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAutoTopicCreationResponse>(await this.callApi(params, req, runtime), new $_model.EnableAutoTopicCreationResponse({}));
  }

  /**
   * Enables or disables the automatic topic creation feature, or changes the number of partitions in topics that are automatically created.
   * 
   * @param request - EnableAutoTopicCreationRequest
   * @returns EnableAutoTopicCreationResponse
   */
  async enableAutoTopicCreation(request: $_model.EnableAutoTopicCreationRequest): Promise<$_model.EnableAutoTopicCreationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAutoTopicCreationWithOptions(request, runtime);
  }

  /**
   * 故障演练
   * 
   * @param request - FailoverTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverTestResponse
   */
  async failoverTestWithOptions(request: $_model.FailoverTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configs)) {
      query["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.executeTime)) {
      query["ExecuteTime"] = request.executeTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverTest",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FailoverTestResponse>(await this.callApi(params, req, runtime), new $_model.FailoverTestResponse({}));
  }

  /**
   * 故障演练
   * 
   * @param request - FailoverTestRequest
   * @returns FailoverTestResponse
   */
  async failoverTest(request: $_model.FailoverTestRequest): Promise<$_model.FailoverTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverTestWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of all instances in the current account.
   * 
   * @param request - GetAllInstanceIdListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllInstanceIdListResponse
   */
  async getAllInstanceIdListWithOptions(request: $_model.GetAllInstanceIdListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAllInstanceIdListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllInstanceIdList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAllInstanceIdListResponse>(await this.callApi(params, req, runtime), new $_model.GetAllInstanceIdListResponse({}));
  }

  /**
   * Queries the IDs of all instances in the current account.
   * 
   * @param request - GetAllInstanceIdListRequest
   * @returns GetAllInstanceIdListResponse
   */
  async getAllInstanceIdList(request: $_model.GetAllInstanceIdListRequest): Promise<$_model.GetAllInstanceIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllInstanceIdListWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelist.
   * 
   * @param request - GetAllowedIpListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAllowedIpListResponse
   */
  async getAllowedIpListWithOptions(request: $_model.GetAllowedIpListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAllowedIpListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAllowedIpList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAllowedIpListResponse>(await this.callApi(params, req, runtime), new $_model.GetAllowedIpListResponse({}));
  }

  /**
   * Queries the IP address whitelist.
   * 
   * @param request - GetAllowedIpListRequest
   * @returns GetAllowedIpListResponse
   */
  async getAllowedIpList(request: $_model.GetAllowedIpListRequest): Promise<$_model.GetAllowedIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAllowedIpListWithOptions(request, runtime);
  }

  /**
   * Queries the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)**This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - GetAutoScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingConfigurationResponse
   */
  async getAutoScalingConfigurationWithOptions(request: $_model.GetAutoScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScalingConfiguration",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoScalingConfigurationResponse({}));
  }

  /**
   * Queries the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)**This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - GetAutoScalingConfigurationRequest
   * @returns GetAutoScalingConfigurationResponse
   */
  async getAutoScalingConfiguration(request: $_model.GetAutoScalingConfigurationRequest): Promise<$_model.GetAutoScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries one or more consumer groups in a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - GetConsumerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerListResponse
   */
  async getConsumerListWithOptions(request: $_model.GetConsumerListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerListResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerListResponse({}));
  }

  /**
   * Queries one or more consumer groups in a specified Message Queue for Apache Kafka instance.
   * 
   * @param request - GetConsumerListRequest
   * @returns GetConsumerListResponse
   */
  async getConsumerList(request: $_model.GetConsumerListRequest): Promise<$_model.GetConsumerListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsumerListWithOptions(request, runtime);
  }

  /**
   * Queries the consumer progress of a consumer group.
   * 
   * @param request - GetConsumerProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerProgressResponse
   */
  async getConsumerProgressWithOptions(request: $_model.GetConsumerProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.hideLastTimestamp)) {
      query["HideLastTimestamp"] = request.hideLastTimestamp;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerProgress",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerProgressResponse({}));
  }

  /**
   * Queries the consumer progress of a consumer group.
   * 
   * @param request - GetConsumerProgressRequest
   * @returns GetConsumerProgressResponse
   */
  async getConsumerProgress(request: $_model.GetConsumerProgressRequest): Promise<$_model.GetConsumerProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsumerProgressWithOptions(request, runtime);
  }

  /**
   * Queries the information about instances in a specified region.
   * 
   * @param request - GetInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceListResponse
   */
  async getInstanceListWithOptions(request: $_model.GetInstanceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.series)) {
      query["Series"] = request.series;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceListResponse({}));
  }

  /**
   * Queries the information about instances in a specified region.
   * 
   * @param request - GetInstanceListRequest
   * @returns GetInstanceListResponse
   */
  async getInstanceList(request: $_model.GetInstanceListRequest): Promise<$_model.GetInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses of the clients that are connected to an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   *   The IP information is obtained from the sampled logs generated for the requests that the client sends to the broker by calling the API operations of ApsaraMQ for Kafka.
   * *   Statistics refers to the number of connections on different ports of an IP address within a specific period of time.
   * *   If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @param request - GetKafkaClientIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKafkaClientIpResponse
   */
  async getKafkaClientIpWithOptions(request: $_model.GetKafkaClientIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKafkaClientIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKafkaClientIp",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKafkaClientIpResponse>(await this.callApi(params, req, runtime), new $_model.GetKafkaClientIpResponse({}));
  }

  /**
   * Queries the IP addresses of the clients that are connected to an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   *   The IP information is obtained from the sampled logs generated for the requests that the client sends to the broker by calling the API operations of ApsaraMQ for Kafka.
   * *   Statistics refers to the number of connections on different ports of an IP address within a specific period of time.
   * *   If the broker is not of the latest minor version, the sampled logs may not be accurate. This may cause inaccurate IP information. Therefore, we recommend that you update your broker to the latest version at the earliest opportunity.
   * 
   * @param request - GetKafkaClientIpRequest
   * @returns GetKafkaClientIpResponse
   */
  async getKafkaClientIp(request: $_model.GetKafkaClientIpRequest): Promise<$_model.GetKafkaClientIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKafkaClientIpWithOptions(request, runtime);
  }

  /**
   * Queries the used quota of topics and partitions.
   * 
   * @param request - GetQuotaTipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaTipResponse
   */
  async getQuotaTipWithOptions(request: $_model.GetQuotaTipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQuotaTipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuotaTip",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQuotaTipResponse>(await this.callApi(params, req, runtime), new $_model.GetQuotaTipResponse({}));
  }

  /**
   * Queries the used quota of topics and partitions.
   * 
   * @param request - GetQuotaTipRequest
   * @returns GetQuotaTipResponse
   */
  async getQuotaTip(request: $_model.GetQuotaTipRequest): Promise<$_model.GetQuotaTipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQuotaTipWithOptions(request, runtime);
  }

  /**
   * 查询实例风险列表
   * 
   * @param request - GetRiskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRiskListResponse
   */
  async getRiskListWithOptions(request: $_model.GetRiskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRiskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startIndex)) {
      query["StartIndex"] = request.startIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRiskList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRiskListResponse>(await this.callApi(params, req, runtime), new $_model.GetRiskListResponse({}));
  }

  /**
   * 查询实例风险列表
   * 
   * @param request - GetRiskListRequest
   * @returns GetRiskListResponse
   */
  async getRiskList(request: $_model.GetRiskListRequest): Promise<$_model.GetRiskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRiskListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a topic.
   * 
   * @param request - GetTopicListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicListResponse
   */
  async getTopicListWithOptions(request: $_model.GetTopicListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicList",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicListResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicListResponse({}));
  }

  /**
   * Queries the information about a topic.
   * 
   * @param request - GetTopicListRequest
   * @returns GetTopicListResponse
   */
  async getTopicList(request: $_model.GetTopicListRequest): Promise<$_model.GetTopicListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicListWithOptions(request, runtime);
  }

  /**
   * Queries the messaging status of a topic.
   * 
   * @param request - GetTopicStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicStatusResponse
   */
  async getTopicStatusWithOptions(request: $_model.GetTopicStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicStatusResponse({}));
  }

  /**
   * Queries the messaging status of a topic.
   * 
   * @param request - GetTopicStatusRequest
   * @returns GetTopicStatusResponse
   */
  async getTopicStatus(request: $_model.GetTopicStatusRequest): Promise<$_model.GetTopicStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about the groups that subscribe to a topic.
   * 
   * @param request - GetTopicSubscribeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicSubscribeStatusResponse
   */
  async getTopicSubscribeStatusWithOptions(request: $_model.GetTopicSubscribeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicSubscribeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicSubscribeStatus",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicSubscribeStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicSubscribeStatusResponse({}));
  }

  /**
   * Queries the information about the groups that subscribe to a topic.
   * 
   * @param request - GetTopicSubscribeStatusRequest
   * @returns GetTopicSubscribeStatusResponse
   */
  async getTopicSubscribeStatus(request: $_model.GetTopicSubscribeStatusRequest): Promise<$_model.GetTopicSubscribeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicSubscribeStatusWithOptions(request, runtime);
  }

  /**
   * 获取Rebalance详情
   * 
   * @param request - ListRebalanceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRebalanceInfoResponse
   */
  async listRebalanceInfoWithOptions(request: $_model.ListRebalanceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRebalanceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRebalanceInfo",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRebalanceInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListRebalanceInfoResponse({}));
  }

  /**
   * 获取Rebalance详情
   * 
   * @param request - ListRebalanceInfoRequest
   * @returns ListRebalanceInfoResponse
   */
  async listRebalanceInfo(request: $_model.ListRebalanceInfoRequest): Promise<$_model.ListRebalanceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRebalanceInfoWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the name of an ApsaraMQ for Kafka instance. After you deploy an instance, you can call this operation to change the name of the instance.
   * 
   * @param request - ModifyInstanceNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceNameWithOptions(request: $_model.ModifyInstanceNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceName",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceNameResponse({}));
  }

  /**
   * Changes the name of an ApsaraMQ for Kafka instance. After you deploy an instance, you can call this operation to change the name of the instance.
   * 
   * @param request - ModifyInstanceNameRequest
   * @returns ModifyInstanceNameResponse
   */
  async modifyInstanceName(request: $_model.ModifyInstanceNameRequest): Promise<$_model.ModifyInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceNameWithOptions(request, runtime);
  }

  /**
   * Changes the number of partitions in a topic.
   * 
   * @param request - ModifyPartitionNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPartitionNumResponse
   */
  async modifyPartitionNumWithOptions(request: $_model.ModifyPartitionNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPartitionNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addPartitionNum)) {
      query["AddPartitionNum"] = request.addPartitionNum;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPartitionNum",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPartitionNumResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPartitionNumResponse({}));
  }

  /**
   * Changes the number of partitions in a topic.
   * 
   * @param request - ModifyPartitionNumRequest
   * @returns ModifyPartitionNumResponse
   */
  async modifyPartitionNum(request: $_model.ModifyPartitionNumRequest): Promise<$_model.ModifyPartitionNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPartitionNumWithOptions(request, runtime);
  }

  /**
   * Modifies the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - ModifyScheduledScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledScalingRuleResponse
   */
  async modifyScheduledScalingRuleWithOptions(request: $_model.ModifyScheduledScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduledScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduledScalingRule",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScheduledScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScheduledScalingRuleResponse({}));
  }

  /**
   * Modifies the scheduled scaling policy of a serverless ApsaraMQ for Kafka instance after you deploy the instance.
   * 
   * @remarks
   * ###### [](#-serverless-)This operation is available only for serverless ApsaraMQ for Kafka instances.
   * 
   * @param request - ModifyScheduledScalingRuleRequest
   * @returns ModifyScheduledScalingRuleResponse
   */
  async modifyScheduledScalingRule(request: $_model.ModifyScheduledScalingRuleRequest): Promise<$_model.ModifyScheduledScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScheduledScalingRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a topic.
   * 
   * @param request - ModifyTopicRemarkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTopicRemarkResponse
   */
  async modifyTopicRemarkWithOptions(request: $_model.ModifyTopicRemarkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTopicRemarkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTopicRemark",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTopicRemarkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTopicRemarkResponse({}));
  }

  /**
   * Modifies the description of a topic.
   * 
   * @param request - ModifyTopicRemarkRequest
   * @returns ModifyTopicRemarkResponse
   */
  async modifyTopicRemark(request: $_model.ModifyTopicRemarkRequest): Promise<$_model.ModifyTopicRemarkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTopicRemarkWithOptions(request, runtime);
  }

  /**
   * Queries messages stored in a topic. You can query messages by creation time or offset.
   * 
   * @param request - QueryMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMessageResponse
   */
  async queryMessageWithOptions(request: $_model.QueryMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMessageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMessage",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMessageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMessageResponse({}));
  }

  /**
   * Queries messages stored in a topic. You can query messages by creation time or offset.
   * 
   * @param request - QueryMessageRequest
   * @returns QueryMessageResponse
   */
  async queryMessage(request: $_model.QueryMessageRequest): Promise<$_model.QueryMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMessageWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go instance.
   * 
   * @remarks
   * You cannot call this operation to release a subscription Message Queue for Apache Kafka instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDeleteInstance)) {
      query["ForceDeleteInstance"] = request.forceDeleteInstance;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go instance.
   * 
   * @remarks
   * You cannot call this operation to release a subscription Message Queue for Apache Kafka instance.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  /**
   * Enables an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You can call this operation only if your instance is in the Stopped state.
   * 
   * @param request - ReopenInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReopenInstanceResponse
   */
  async reopenInstanceWithOptions(request: $_model.ReopenInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReopenInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReopenInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReopenInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReopenInstanceResponse({}));
  }

  /**
   * Enables an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You can call this operation only if your instance is in the Stopped state.
   * 
   * @param request - ReopenInstanceRequest
   * @returns ReopenInstanceResponse
   */
  async reopenInstance(request: $_model.ReopenInstanceRequest): Promise<$_model.ReopenInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reopenInstanceWithOptions(request, runtime);
  }

  /**
   * Deploys an ApsaraMQ for Kafka instance. You must purchase and deploy an ApsaraMQ for Kafka instance before you can use the instance to send and receive messages.
   * 
   * @remarks
   * >  You can call this operation up to twice per second.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.crossZone)) {
      query["CrossZone"] = request.crossZone;
    }

    if (!$dara.isNull(request.deployModule)) {
      query["DeployModule"] = request.deployModule;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isEipInner)) {
      query["IsEipInner"] = request.isEipInner;
    }

    if (!$dara.isNull(request.isForceSelectedZones)) {
      query["IsForceSelectedZones"] = request.isForceSelectedZones;
    }

    if (!$dara.isNull(request.isSetUserAndPassword)) {
      query["IsSetUserAndPassword"] = request.isSetUserAndPassword;
    }

    if (!$dara.isNull(request.KMSKeyId)) {
      query["KMSKeyId"] = request.KMSKeyId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifier)) {
      query["Notifier"] = request.notifier;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroup)) {
      query["SecurityGroup"] = request.securityGroup;
    }

    if (!$dara.isNull(request.selectedZones)) {
      query["SelectedZones"] = request.selectedZones;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.userPhoneNum)) {
      query["UserPhoneNum"] = request.userPhoneNum;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * Deploys an ApsaraMQ for Kafka instance. You must purchase and deploy an ApsaraMQ for Kafka instance before you can use the instance to send and receive messages.
   * 
   * @remarks
   * >  You can call this operation up to twice per second.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Stops an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You cannot stop a subscription ApsaraMQ for Kafka instance. If you want to stop a subscription ApsaraMQ for Kafka instance, submit a ticket.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Stops an ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * You cannot stop a subscription ApsaraMQ for Kafka instance. If you want to stop a subscription ApsaraMQ for Kafka instance, submit a ticket.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Attaches a tag to a resource.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Attaches a tag to a resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Detaches tags from a specified resource.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Detaches tags from a specified resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the IP address whitelist of an ApsaraMQ for Kafka instance. Only IP addresses and ports that are configured in the IP address whitelist of an instance can access the instance.
   * 
   * @param request - UpdateAllowedIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAllowedIpResponse
   */
  async updateAllowedIpWithOptions(request: $_model.UpdateAllowedIpRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAllowedIpResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowedListIp)) {
      query["AllowedListIp"] = request.allowedListIp;
    }

    if (!$dara.isNull(request.allowedListType)) {
      query["AllowedListType"] = request.allowedListType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.portRange)) {
      query["PortRange"] = request.portRange;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAllowedIp",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAllowedIpResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAllowedIpResponse({}));
  }

  /**
   * Updates the IP address whitelist of an ApsaraMQ for Kafka instance. Only IP addresses and ports that are configured in the IP address whitelist of an instance can access the instance.
   * 
   * @param request - UpdateAllowedIpRequest
   * @returns UpdateAllowedIpResponse
   */
  async updateAllowedIp(request: $_model.UpdateAllowedIpRequest): Promise<$_model.UpdateAllowedIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAllowedIpWithOptions(request, runtime);
  }

  /**
   * Resets the consumer offsets of the subscribed topics of a consumer group.
   * 
   * @remarks
   * You can call this operation to reset the consumer offset of a specific consumer group. You can use the timestamp or offset parameter to reset the consumer offset of a consumer group. You can implement the following features by configuring a combination of different parameters:
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to the latest offset. This way, you can consume messages in the topics from the latest offset.
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to a specific point in time. This way, you can consume messages in the topics from the specified point in time.
   * *   Reset the consumer offset of one subscribed topic of a consumer group to a specific offset in a specific partition. This way, you can consume messages from the specified offset in the specified partition.
   * 
   * @param tmpReq - UpdateConsumerOffsetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerOffsetResponse
   */
  async updateConsumerOffsetWithOptions(tmpReq: $_model.UpdateConsumerOffsetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerOffsetResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateConsumerOffsetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.offsets)) {
      request.offsetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.offsets, "Offsets", "json");
    }

    let query = { };
    if (!$dara.isNull(request.consumerId)) {
      query["ConsumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offsetsShrink)) {
      query["Offsets"] = request.offsetsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerOffset",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerOffsetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerOffsetResponse({}));
  }

  /**
   * Resets the consumer offsets of the subscribed topics of a consumer group.
   * 
   * @remarks
   * You can call this operation to reset the consumer offset of a specific consumer group. You can use the timestamp or offset parameter to reset the consumer offset of a consumer group. You can implement the following features by configuring a combination of different parameters:
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to the latest offset. This way, you can consume messages in the topics from the latest offset.
   * *   Reset the consumer offsets of one or all subscribed topics of a consumer group to a specific point in time. This way, you can consume messages in the topics from the specified point in time.
   * *   Reset the consumer offset of one subscribed topic of a consumer group to a specific offset in a specific partition. This way, you can consume messages from the specified offset in the specified partition.
   * 
   * @param request - UpdateConsumerOffsetRequest
   * @returns UpdateConsumerOffsetResponse
   */
  async updateConsumerOffset(request: $_model.UpdateConsumerOffsetRequest): Promise<$_model.UpdateConsumerOffsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConsumerOffsetWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an ApsaraMQ for Kafka instance. ApsaraMQ for Kafka allows you to modify the configurations of an instance, including the access control list (ACL) feature, the Secure Sockets Layer (SSL) feature, the message retention period, and the maximum message size.
   * 
   * @remarks
   * ## **Permissions**
   * If a RAM user wants to call the **UpdateInstanceConfig** operation, the RAM user must be granted the required permissions. For more information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpdateInstanceConfig|alikafka: UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * 
   * @param request - UpdateInstanceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceConfigResponse
   */
  async updateInstanceConfigWithOptions(request: $_model.UpdateInstanceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceConfig",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceConfigResponse({}));
  }

  /**
   * Modifies the configurations of an ApsaraMQ for Kafka instance. ApsaraMQ for Kafka allows you to modify the configurations of an instance, including the access control list (ACL) feature, the Secure Sockets Layer (SSL) feature, the message retention period, and the maximum message size.
   * 
   * @remarks
   * ## **Permissions**
   * If a RAM user wants to call the **UpdateInstanceConfig** operation, the RAM user must be granted the required permissions. For more information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpdateInstanceConfig|alikafka: UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * 
   * @param request - UpdateInstanceConfigRequest
   * @returns UpdateInstanceConfigResponse
   */
  async updateInstanceConfig(request: $_model.UpdateInstanceConfigRequest): Promise<$_model.UpdateInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a topic. After you create a topic, you can modify the message retention period and maximum message size of the topic.
   * 
   * @param request - UpdateTopicConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicConfigResponse
   */
  async updateTopicConfigWithOptions(request: $_model.UpdateTopicConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTopicConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTopicConfig",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTopicConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTopicConfigResponse({}));
  }

  /**
   * Modifies the configurations of a topic. After you create a topic, you can modify the message retention period and maximum message size of the topic.
   * 
   * @param request - UpdateTopicConfigRequest
   * @returns UpdateTopicConfigResponse
   */
  async updateTopicConfig(request: $_model.UpdateTopicConfigRequest): Promise<$_model.UpdateTopicConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTopicConfigWithOptions(request, runtime);
  }

  /**
   * Updates the version of an instance.
   * 
   * @remarks
   * ## **Permissions**
   * A RAM user must be granted the required permissions before the RAM user calls the **UpgradeInstanceVersion** operation. For information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpgradeInstanceVersion|UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * ## **QPS limits**
   * You can send a maximum of two queries per second (QPS).
   * 
   * @param request - UpgradeInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersionWithOptions(request: $_model.UpgradeInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeInstanceVersionResponse({}));
  }

  /**
   * Updates the version of an instance.
   * 
   * @remarks
   * ## **Permissions**
   * A RAM user must be granted the required permissions before the RAM user calls the **UpgradeInstanceVersion** operation. For information about how to grant permissions, see [RAM policies](https://help.aliyun.com/document_detail/185815.html).
   * |API|Action|Resource|
   * |---|---|---|
   * |UpgradeInstanceVersion|UpdateInstance|acs:alikafka:*:*:{instanceId}|
   * ## **QPS limits**
   * You can send a maximum of two queries per second (QPS).
   * 
   * @param request - UpgradeInstanceVersionRequest
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersion(request: $_model.UpgradeInstanceVersionRequest): Promise<$_model.UpgradeInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Upgrades a pay-as-you-go ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - UpgradePostPayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradePostPayOrderResponse
   */
  async upgradePostPayOrderWithOptions(tmpReq: $_model.UpgradePostPayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradePostPayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradePostPayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serverlessConfig)) {
      request.serverlessConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serverlessConfig, "ServerlessConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serverlessConfigShrink)) {
      query["ServerlessConfig"] = request.serverlessConfigShrink;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradePostPayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradePostPayOrderResponse>(await this.callApi(params, req, runtime), new $_model.UpgradePostPayOrderResponse({}));
  }

  /**
   * Upgrades a pay-as-you-go ApsaraMQ for Kafka instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of pay-as-you-go Message Queue for Apache Kafka instances. For more information, see [Billing](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - UpgradePostPayOrderRequest
   * @returns UpgradePostPayOrderResponse
   */
  async upgradePostPayOrder(request: $_model.UpgradePostPayOrderRequest): Promise<$_model.UpgradePostPayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradePostPayOrderWithOptions(request, runtime);
  }

  /**
   * Upgrades a Message Queue for Apache Kafka instance that uses the subscription billing method.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of subscription Message Queue for Apache Kafka instances. For more information, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param tmpReq - UpgradePrePayOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradePrePayOrderResponse
   */
  async upgradePrePayOrderWithOptions(tmpReq: $_model.UpgradePrePayOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradePrePayOrderResponse> {
    tmpReq.validate();
    let request = new $_model.UpgradePrePayOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.confluentConfig)) {
      request.confluentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.confluentConfig, "ConfluentConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.confluentConfigShrink)) {
      query["ConfluentConfig"] = request.confluentConfigShrink;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.eipMax)) {
      query["EipMax"] = request.eipMax;
    }

    if (!$dara.isNull(request.eipModel)) {
      query["EipModel"] = request.eipModel;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ioMax)) {
      query["IoMax"] = request.ioMax;
    }

    if (!$dara.isNull(request.ioMaxSpec)) {
      query["IoMaxSpec"] = request.ioMaxSpec;
    }

    if (!$dara.isNull(request.paidType)) {
      query["PaidType"] = request.paidType;
    }

    if (!$dara.isNull(request.partitionNum)) {
      query["PartitionNum"] = request.partitionNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    if (!$dara.isNull(request.topicQuota)) {
      query["TopicQuota"] = request.topicQuota;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradePrePayOrder",
      version: "2019-09-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradePrePayOrderResponse>(await this.callApi(params, req, runtime), new $_model.UpgradePrePayOrderResponse({}));
  }

  /**
   * Upgrades a Message Queue for Apache Kafka instance that uses the subscription billing method.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing method and pricing of subscription Message Queue for Apache Kafka instances. For more information, see [Billing overview](https://help.aliyun.com/document_detail/84737.html).
   * 
   * @param request - UpgradePrePayOrderRequest
   * @returns UpgradePrePayOrderResponse
   */
  async upgradePrePayOrder(request: $_model.UpgradePrePayOrderRequest): Promise<$_model.UpgradePrePayOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradePrePayOrderWithOptions(request, runtime);
  }

}
