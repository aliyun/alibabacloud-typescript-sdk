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
      'us-west-1': "apig.us-west-1.aliyuncs.com",
      'us-east-1': "apig.us-east-1.aliyuncs.com",
      'me-east-1': "apig.me-east-1.aliyuncs.com",
      'me-central-1': "apig.me-central-1.aliyuncs.com",
      'eu-west-1': "apig.eu-west-1.aliyuncs.com",
      'eu-central-1': "apig.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "apig.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "apig.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "apig.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "apig.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "apig.cn-qingdao.aliyuncs.com",
      'cn-hongkong': "apig.cn-hongkong.aliyuncs.com",
      'cn-heyuan': "apig.cn-heyuan.aliyuncs.com",
      'cn-hangzhou': "apig.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "apig.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "apig.cn-chengdu.aliyuncs.com",
      'cn-beijing': "apig.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "apig.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "apig.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "apig.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "apig.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "apig.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "apig.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "apig.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "apig.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("apig", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a gateway quota throttling rule.
   * 
   * @remarks
   * Creates a consumer-based quota rule for an AI gateway. This operation takes effect only on AI gateways of version 2.1.19 or later.
   * > 
   * >  Recommended call sequence:
   * > - Step 1: Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with a conflictHash value.
   * > - Step 2: Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - AddGatewayQuotaRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayQuotaRuleResponse
   */
  async addGatewayQuotaRuleWithOptions(gatewayId: string, request: $_model.AddGatewayQuotaRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayQuotaRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conflictHash)) {
      body["conflictHash"] = request.conflictHash;
    }

    if (!$dara.isNull(request.consumerGroupIds)) {
      body["consumerGroupIds"] = request.consumerGroupIds;
    }

    if (!$dara.isNull(request.consumerIds)) {
      body["consumerIds"] = request.consumerIds;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.periodMultiplier)) {
      body["periodMultiplier"] = request.periodMultiplier;
    }

    if (!$dara.isNull(request.periodType)) {
      body["periodType"] = request.periodType;
    }

    if (!$dara.isNull(request.quotaDimension)) {
      body["quotaDimension"] = request.quotaDimension;
    }

    if (!$dara.isNull(request.quotaLimit)) {
      body["quotaLimit"] = request.quotaLimit;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.windowAlignment)) {
      body["windowAlignment"] = request.windowAlignment;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewayQuotaRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayQuotaRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayQuotaRuleResponse({}));
  }

  /**
   * Creates a gateway quota throttling rule.
   * 
   * @remarks
   * Creates a consumer-based quota rule for an AI gateway. This operation takes effect only on AI gateways of version 2.1.19 or later.
   * > 
   * >  Recommended call sequence:
   * > - Step 1: Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with a conflictHash value.
   * > - Step 2: Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - AddGatewayQuotaRuleRequest
   * @returns AddGatewayQuotaRuleResponse
   */
  async addGatewayQuotaRule(gatewayId: string, request: $_model.AddGatewayQuotaRuleRequest): Promise<$_model.AddGatewayQuotaRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewayQuotaRuleWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Authorizes a security group that allows a gateway to access services.
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRuleWithOptions(gatewayId: string, request: $_model.AddGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewaySecurityGroupRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.portRanges)) {
      body["portRanges"] = request.portRanges;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["securityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewaySecurityGroupRuleResponse({}));
  }

  /**
   * Authorizes a security group that allows a gateway to access services.
   * 
   * @param request - AddGatewaySecurityGroupRuleRequest
   * @returns AddGatewaySecurityGroupRuleResponse
   */
  async addGatewaySecurityGroupRule(gatewayId: string, request: $_model.AddGatewaySecurityGroupRuleRequest): Promise<$_model.AddGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewaySecurityGroupRuleWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Adds members to a consumer group in batches.
   * 
   * @param request - BatchAddConsumerGroupConsumersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchAddConsumerGroupConsumersResponse
   */
  async batchAddConsumerGroupConsumersWithOptions(consumerGroupId: string, request: $_model.BatchAddConsumerGroupConsumersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchAddConsumerGroupConsumersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerIds)) {
      body["consumerIds"] = request.consumerIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchAddConsumerGroupConsumers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}/consumers/batch-add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchAddConsumerGroupConsumersResponse>(await this.callApi(params, req, runtime), new $_model.BatchAddConsumerGroupConsumersResponse({}));
  }

  /**
   * Adds members to a consumer group in batches.
   * 
   * @param request - BatchAddConsumerGroupConsumersRequest
   * @returns BatchAddConsumerGroupConsumersResponse
   */
  async batchAddConsumerGroupConsumers(consumerGroupId: string, request: $_model.BatchAddConsumerGroupConsumersRequest): Promise<$_model.BatchAddConsumerGroupConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchAddConsumerGroupConsumersWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Revokes consumer authorization rules in batches.
   * 
   * @param request - BatchDeleteConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteConsumerAuthorizationRuleResponse
   */
  async batchDeleteConsumerAuthorizationRuleWithOptions(request: $_model.BatchDeleteConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteConsumerAuthorizationRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleIds)) {
      query["consumerAuthorizationRuleIds"] = request.consumerAuthorizationRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Revokes consumer authorization rules in batches.
   * 
   * @param request - BatchDeleteConsumerAuthorizationRuleRequest
   * @returns BatchDeleteConsumerAuthorizationRuleResponse
   */
  async batchDeleteConsumerAuthorizationRule(request: $_model.BatchDeleteConsumerAuthorizationRuleRequest): Promise<$_model.BatchDeleteConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchDeleteConsumerAuthorizationRuleWithOptions(request, headers, runtime);
  }

  /**
   * Removes consumer group members in batches.
   * 
   * @param request - BatchRemoveConsumerGroupConsumersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRemoveConsumerGroupConsumersResponse
   */
  async batchRemoveConsumerGroupConsumersWithOptions(consumerGroupId: string, request: $_model.BatchRemoveConsumerGroupConsumersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRemoveConsumerGroupConsumersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerIds)) {
      body["consumerIds"] = request.consumerIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRemoveConsumerGroupConsumers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}/consumers/batch-remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRemoveConsumerGroupConsumersResponse>(await this.callApi(params, req, runtime), new $_model.BatchRemoveConsumerGroupConsumersResponse({}));
  }

  /**
   * Removes consumer group members in batches.
   * 
   * @param request - BatchRemoveConsumerGroupConsumersRequest
   * @returns BatchRemoveConsumerGroupConsumersResponse
   */
  async batchRemoveConsumerGroupConsumers(consumerGroupId: string, request: $_model.BatchRemoveConsumerGroupConsumersRequest): Promise<$_model.BatchRemoveConsumerGroupConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchRemoveConsumerGroupConsumersWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Moves a resource to a different resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/move-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Moves a resource to a different resource group.
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
   * Creates an AI model card.
   * 
   * @remarks
   * Performs model creation for a model card under an existing model provider in a specified AI gateway instance. The target gateway must exist, belong to the current account, and be of the AI gateway type. The modelProvider must reference an existing model provider in the gateway.
   * The modelName must be unique within the same AI gateway instance and the same model provider. A maximum of 1000 model cards can be created per gateway instance. The credit parameter currently supports only the fixed type, and the cost unit is Credits per million tokens. If not specified, type defaults to fixed and all cost values default to 0. Each item in availablePaths must include both path and type.
   * 
   * @param request - CreateAiModelCardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiModelCardResponse
   */
  async createAiModelCardWithOptions(request: $_model.CreateAiModelCardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAiModelCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.availablePaths)) {
      body["availablePaths"] = request.availablePaths;
    }

    if (!$dara.isNull(request.credit)) {
      body["credit"] = request.credit;
    }

    if (!$dara.isNull(request.features)) {
      body["features"] = request.features;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.modelName)) {
      body["modelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelProvider)) {
      body["modelProvider"] = request.modelProvider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiModelCard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-cards`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAiModelCardResponse>(await this.callApi(params, req, runtime), new $_model.CreateAiModelCardResponse({}));
  }

  /**
   * Creates an AI model card.
   * 
   * @remarks
   * Performs model creation for a model card under an existing model provider in a specified AI gateway instance. The target gateway must exist, belong to the current account, and be of the AI gateway type. The modelProvider must reference an existing model provider in the gateway.
   * The modelName must be unique within the same AI gateway instance and the same model provider. A maximum of 1000 model cards can be created per gateway instance. The credit parameter currently supports only the fixed type, and the cost unit is Credits per million tokens. If not specified, type defaults to fixed and all cost values default to 0. Each item in availablePaths must include both path and type.
   * 
   * @param request - CreateAiModelCardRequest
   * @returns CreateAiModelCardResponse
   */
  async createAiModelCard(request: $_model.CreateAiModelCardRequest): Promise<$_model.CreateAiModelCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAiModelCardWithOptions(request, headers, runtime);
  }

  /**
   * Creates an AI model provider.
   * 
   * @param request - CreateAiModelProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAiModelProviderResponse
   */
  async createAiModelProviderWithOptions(request: $_model.CreateAiModelProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAiModelProviderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.provider)) {
      body["provider"] = request.provider;
    }

    if (!$dara.isNull(request.serviceIds)) {
      body["serviceIds"] = request.serviceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAiModelProvider",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-providers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAiModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateAiModelProviderResponse({}));
  }

  /**
   * Creates an AI model provider.
   * 
   * @param request - CreateAiModelProviderRequest
   * @returns CreateAiModelProviderResponse
   */
  async createAiModelProvider(request: $_model.CreateAiModelProviderRequest): Promise<$_model.CreateAiModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAiModelProviderWithOptions(request, headers, runtime);
  }

  /**
   * Creates and attaches a policy.
   * 
   * @param request - CreateAndAttachPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndAttachPolicyResponse
   */
  async createAndAttachPolicyWithOptions(request: $_model.CreateAndAttachPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndAttachPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.className)) {
      body["className"] = request.className;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAndAttachPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndAttachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndAttachPolicyResponse({}));
  }

  /**
   * Creates and attaches a policy.
   * 
   * @param request - CreateAndAttachPolicyRequest
   * @returns CreateAndAttachPolicyResponse
   */
  async createAndAttachPolicy(request: $_model.CreateAndAttachPolicyRequest): Promise<$_model.CreateAndAttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndAttachPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer.
   * 
   * @param request - CreateConsumerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerResponse
   */
  async createConsumerWithOptions(request: $_model.CreateConsumerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akSkIdentityConfigs)) {
      body["akSkIdentityConfigs"] = request.akSkIdentityConfigs;
    }

    if (!$dara.isNull(request.apikeyIdentityConfig)) {
      body["apikeyIdentityConfig"] = request.apikeyIdentityConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.jwtIdentityConfig)) {
      body["jwtIdentityConfig"] = request.jwtIdentityConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerResponse({}));
  }

  /**
   * Creates a consumer.
   * 
   * @param request - CreateConsumerRequest
   * @returns CreateConsumerResponse
   */
  async createConsumer(request: $_model.CreateConsumerRequest): Promise<$_model.CreateConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer authorization rule.
   * 
   * @param request - CreateConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerAuthorizationRuleResponse
   */
  async createConsumerAuthorizationRuleWithOptions(consumerId: string, request: $_model.CreateConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerAuthorizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationResourceInfos)) {
      body["authorizationResourceInfos"] = request.authorizationResourceInfos;
    }

    if (!$dara.isNull(request.expireMode)) {
      body["expireMode"] = request.expireMode;
    }

    if (!$dara.isNull(request.expireTimestamp)) {
      body["expireTimestamp"] = request.expireTimestamp;
    }

    if (!$dara.isNull(request.parentResourceType)) {
      body["parentResourceType"] = request.parentResourceType;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Creates a consumer authorization rule.
   * 
   * @param request - CreateConsumerAuthorizationRuleRequest
   * @returns CreateConsumerAuthorizationRuleResponse
   */
  async createConsumerAuthorizationRule(consumerId: string, request: $_model.CreateConsumerAuthorizationRuleRequest): Promise<$_model.CreateConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerAuthorizationRuleWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * Creates consumer authorization rules.
   * 
   * @remarks
   * Prerequisites: Before creating consumer authorization rules, prepare resources according to the following dependency chain (the corresponding creation API and ID passing relationships are shown in parentheses):
   * Gateway instance (CreateGateway → gatewayId, gw- prefix)
   * Environment (A default environment is automatically created with the gateway. You can also use CreateEnvironment → environmentId, env- prefix, which requires the gatewayId from step 1)
   * HTTP API (CreateHttpApi → httpApiId, api- prefix)
   * Route and publish (CreateHttpApiRoute → routeId, hr- prefix, belongs to the API in step 3. Then publish to the environment in step 2 by using DeployHttpApi. Unpublished routes cannot be authorized)
   * Consumer (CreateConsumer → consumerId, cs- prefix. Or consumer group consumerGroupId, csg- prefix. Use either consumerId or consumerGroupId)
   * 
   * @param request - CreateConsumerAuthorizationRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerAuthorizationRulesResponse
   */
  async createConsumerAuthorizationRulesWithOptions(request: $_model.CreateConsumerAuthorizationRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerAuthorizationRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationRules)) {
      body["authorizationRules"] = request.authorizationRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerAuthorizationRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConsumerAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateConsumerAuthorizationRulesResponse({}));
  }

  /**
   * Creates consumer authorization rules.
   * 
   * @remarks
   * Prerequisites: Before creating consumer authorization rules, prepare resources according to the following dependency chain (the corresponding creation API and ID passing relationships are shown in parentheses):
   * Gateway instance (CreateGateway → gatewayId, gw- prefix)
   * Environment (A default environment is automatically created with the gateway. You can also use CreateEnvironment → environmentId, env- prefix, which requires the gatewayId from step 1)
   * HTTP API (CreateHttpApi → httpApiId, api- prefix)
   * Route and publish (CreateHttpApiRoute → routeId, hr- prefix, belongs to the API in step 3. Then publish to the environment in step 2 by using DeployHttpApi. Unpublished routes cannot be authorized)
   * Consumer (CreateConsumer → consumerId, cs- prefix. Or consumer group consumerGroupId, csg- prefix. Use either consumerId or consumerGroupId)
   * 
   * @param request - CreateConsumerAuthorizationRulesRequest
   * @returns CreateConsumerAuthorizationRulesResponse
   */
  async createConsumerAuthorizationRules(request: $_model.CreateConsumerAuthorizationRulesRequest): Promise<$_model.CreateConsumerAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerAuthorizationRulesWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(request: $_model.CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerGroupId)) {
      body["consumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups`,
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
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a domain name.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(request: $_model.CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.domainScope)) {
      body["domainScope"] = request.domainScope;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Creates a domain name.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(request, headers, runtime);
  }

  /**
   * Creates an environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(request: $_model.CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvironmentResponse({}));
  }

  /**
   * Creates an environment.
   * 
   * @deprecated OpenAPI CreateEnvironment is deprecated
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  // Deprecated
  async createEnvironment(request: $_model.CreateEnvironmentRequest): Promise<$_model.CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(request, headers, runtime);
  }

  /**
   * Creates a cloud-native gateway.
   * 
   * @param request - CreateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayResponse
   */
  async createGatewayWithOptions(request: $_model.CreateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.gatewayEdition)) {
      body["gatewayEdition"] = request.gatewayEdition;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.logConfig)) {
      body["logConfig"] = request.logConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.networkAccessConfig)) {
      body["networkAccessConfig"] = request.networkAccessConfig;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.spec)) {
      body["spec"] = request.spec;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneConfig)) {
      body["zoneConfig"] = request.zoneConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayResponse({}));
  }

  /**
   * Creates a cloud-native gateway.
   * 
   * @param request - CreateGatewayRequest
   * @returns CreateGatewayResponse
   */
  async createGateway(request: $_model.CreateGatewayRequest): Promise<$_model.CreateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Creates an HTTP API.
   * 
   * @param request - CreateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiResponse
   */
  async createHttpApiWithOptions(request: $_model.CreateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProtocols)) {
      body["agentProtocols"] = request.agentProtocols;
    }

    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.belongGatewayId)) {
      body["belongGatewayId"] = request.belongGatewayId;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.firstByteTimeout)) {
      body["firstByteTimeout"] = request.firstByteTimeout;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.modelCategory)) {
      body["modelCategory"] = request.modelCategory;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.removeBasePathOnForward)) {
      body["removeBasePathOnForward"] = request.removeBasePathOnForward;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiResponse({}));
  }

  /**
   * Creates an HTTP API.
   * 
   * @param request - CreateHttpApiRequest
   * @returns CreateHttpApiResponse
   */
  async createHttpApi(request: $_model.CreateHttpApiRequest): Promise<$_model.CreateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * Creates operations for an HTTP API.
   * 
   * @param request - CreateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperationWithOptions(httpApiId: string, request: $_model.CreateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiOperationResponse({}));
  }

  /**
   * Creates operations for an HTTP API.
   * 
   * @param request - CreateHttpApiOperationRequest
   * @returns CreateHttpApiOperationResponse
   */
  async createHttpApiOperation(httpApiId: string, request: $_model.CreateHttpApiOperationRequest): Promise<$_model.CreateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiOperationWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRouteWithOptions(httpApiId: string, request: $_model.CreateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpRouteConfig)) {
      body["mcpRouteConfig"] = request.mcpRouteConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.policyConfigs)) {
      body["policyConfigs"] = request.policyConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpApiRouteResponse({}));
  }

  /**
   * Creates a route for an HTTP API.
   * 
   * @param request - CreateHttpApiRouteRequest
   * @returns CreateHttpApiRouteResponse
   */
  async createHttpApiRoute(httpApiId: string, request: $_model.CreateHttpApiRouteRequest): Promise<$_model.CreateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHttpApiRouteWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Creates a Model Context Protocol (MCP) server.
   * 
   * @param request - CreateMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMcpServerResponse
   */
  async createMcpServerWithOptions(request: $_model.CreateMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMcpServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assembledSources)) {
      body["assembledSources"] = request.assembledSources;
    }

    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.createFromType)) {
      body["createFromType"] = request.createFromType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.exposedUriPath)) {
      body["exposedUriPath"] = request.exposedUriPath;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.grayMcpServerConfigs)) {
      body["grayMcpServerConfigs"] = request.grayMcpServerConfigs;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpServerConfig)) {
      body["mcpServerConfig"] = request.mcpServerConfig;
    }

    if (!$dara.isNull(request.mcpStatisticsEnable)) {
      body["mcpStatisticsEnable"] = request.mcpStatisticsEnable;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.CreateMcpServerResponse({}));
  }

  /**
   * Creates a Model Context Protocol (MCP) server.
   * 
   * @param request - CreateMcpServerRequest
   * @returns CreateMcpServerResponse
   */
  async createMcpServer(request: $_model.CreateMcpServerRequest): Promise<$_model.CreateMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMcpServerWithOptions(request, headers, runtime);
  }

  /**
   * Mounts a plug-in.
   * 
   * @param request - CreatePluginAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePluginAttachmentResponse
   */
  async createPluginAttachmentWithOptions(request: $_model.CreatePluginAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePluginAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pluginConfig)) {
      body["pluginConfig"] = request.pluginConfig;
    }

    if (!$dara.isNull(request.pluginId)) {
      body["pluginId"] = request.pluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePluginAttachmentResponse({}));
  }

  /**
   * Mounts a plug-in.
   * 
   * @param request - CreatePluginAttachmentRequest
   * @returns CreatePluginAttachmentResponse
   */
  async createPluginAttachment(request: $_model.CreatePluginAttachmentRequest): Promise<$_model.CreatePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPluginAttachmentWithOptions(request, headers, runtime);
  }

  /**
   * Creates a custom plugin class.
   * 
   * @param request - CreatePluginClassRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePluginClassResponse
   */
  async createPluginClassWithOptions(request: $_model.CreatePluginClassRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePluginClassResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.executePriority)) {
      body["executePriority"] = request.executePriority;
    }

    if (!$dara.isNull(request.executeStage)) {
      body["executeStage"] = request.executeStage;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.supportedMinGatewayVersion)) {
      body["supportedMinGatewayVersion"] = request.supportedMinGatewayVersion;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["versionDescription"] = request.versionDescription;
    }

    if (!$dara.isNull(request.wasmLanguage)) {
      body["wasmLanguage"] = request.wasmLanguage;
    }

    if (!$dara.isNull(request.wasmUrl)) {
      body["wasmUrl"] = request.wasmUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePluginClass",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-classes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePluginClassResponse>(await this.callApi(params, req, runtime), new $_model.CreatePluginClassResponse({}));
  }

  /**
   * Creates a custom plugin class.
   * 
   * @param request - CreatePluginClassRequest
   * @returns CreatePluginClassResponse
   */
  async createPluginClass(request: $_model.CreatePluginClassRequest): Promise<$_model.CreatePluginClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPluginClassWithOptions(request, headers, runtime);
  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["className"] = request.className;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
  }

  /**
   * Creates a policy.
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a policy attachment to a resource.
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachmentWithOptions(request: $_model.CreatePolicyAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      body["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["policyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyAttachmentResponse({}));
  }

  /**
   * Creates a policy attachment to a resource.
   * 
   * @param request - CreatePolicyAttachmentRequest
   * @returns CreatePolicyAttachmentResponse
   */
  async createPolicyAttachment(request: $_model.CreatePolicyAttachmentRequest): Promise<$_model.CreatePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPolicyAttachmentWithOptions(request, headers, runtime);
  }

  /**
   * Generates a key.
   * 
   * @param request - CreateSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretResponse
   */
  async createSecretWithOptions(request: $_model.CreateSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.kmsConfig)) {
      body["kmsConfig"] = request.kmsConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.secretData)) {
      body["secretData"] = request.secretData;
    }

    if (!$dara.isNull(request.secretSource)) {
      body["secretSource"] = request.secretSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecret",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretResponse({}));
  }

  /**
   * Generates a key.
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecretWithOptions(request, headers, runtime);
  }

  /**
   * Creates services.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(request: $_model.CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceConfigs)) {
      body["serviceConfigs"] = request.serviceConfigs;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * Creates services.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a service version.
   * 
   * @param request - CreateServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceVersionResponse
   */
  async createServiceVersionWithOptions(serviceId: string, request: $_model.CreateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceVersionResponse({}));
  }

  /**
   * Creates a service version.
   * 
   * @param request - CreateServiceVersionRequest
   * @returns CreateServiceVersionResponse
   */
  async createServiceVersion(serviceId: string, request: $_model.CreateServiceVersionRequest): Promise<$_model.CreateServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceVersionWithOptions(serviceId, request, headers, runtime);
  }

  /**
   * Creates a source.
   * 
   * @param request - CreateSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSourceResponse
   */
  async createSourceWithOptions(request: $_model.CreateSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.k8sSourceConfig)) {
      body["k8sSourceConfig"] = request.k8sSourceConfig;
    }

    if (!$dara.isNull(request.nacosSourceConfig)) {
      body["nacosSourceConfig"] = request.nacosSourceConfig;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSourceResponse({}));
  }

  /**
   * Creates a source.
   * 
   * @param request - CreateSourceRequest
   * @returns CreateSourceResponse
   */
  async createSource(request: $_model.CreateSourceRequest): Promise<$_model.CreateSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSourceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an AI model card.
   * 
   * @param request - DeleteAiModelCardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAiModelCardResponse
   */
  async deleteAiModelCardWithOptions(modelCardId: string, request: $_model.DeleteAiModelCardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAiModelCardResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAiModelCard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-cards/${$dara.URL.percentEncode(modelCardId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAiModelCardResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAiModelCardResponse({}));
  }

  /**
   * Deletes an AI model card.
   * 
   * @param request - DeleteAiModelCardRequest
   * @returns DeleteAiModelCardResponse
   */
  async deleteAiModelCard(modelCardId: string, request: $_model.DeleteAiModelCardRequest): Promise<$_model.DeleteAiModelCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAiModelCardWithOptions(modelCardId, request, headers, runtime);
  }

  /**
   * Deletes an AI model provider.
   * 
   * @param request - DeleteAiModelProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAiModelProviderResponse
   */
  async deleteAiModelProviderWithOptions(modelProviderId: string, request: $_model.DeleteAiModelProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAiModelProviderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAiModelProvider",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-providers/${$dara.URL.percentEncode(modelProviderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAiModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAiModelProviderResponse({}));
  }

  /**
   * Deletes an AI model provider.
   * 
   * @param request - DeleteAiModelProviderRequest
   * @returns DeleteAiModelProviderResponse
   */
  async deleteAiModelProvider(modelProviderId: string, request: $_model.DeleteAiModelProviderRequest): Promise<$_model.DeleteAiModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAiModelProviderWithOptions(modelProviderId, request, headers, runtime);
  }

  /**
   * Deletes an API consumer.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerResponse
   */
  async deleteConsumerWithOptions(consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerResponse({}));
  }

  /**
   * Deletes an API consumer.
   * @returns DeleteConsumerResponse
   */
  async deleteConsumer(consumerId: string): Promise<$_model.DeleteConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerWithOptions(consumerId, headers, runtime);
  }

  /**
   * Deletes an API consumer authorization rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerAuthorizationRuleResponse
   */
  async deleteConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Deletes an API consumer authorization rule.
   * @returns DeleteConsumerAuthorizationRuleResponse
   */
  async deleteConsumerAuthorizationRule(consumerAuthorizationRuleId: string, consumerId: string): Promise<$_model.DeleteConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, consumerId, headers, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(consumerGroupId: string, request: $_model.DeleteConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @param request - DeleteConsumerGroupRequest
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(consumerGroupId: string, request: $_model.DeleteConsumerGroupRequest): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Deletes a domain name.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(domainId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Deletes a domain name.
   * @returns DeleteDomainResponse
   */
  async deleteDomain(domainId: string): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(domainId, headers, runtime);
  }

  /**
   * Deletes an environment.
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(environmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvironmentResponse({}));
  }

  /**
   * Deletes an environment.
   * 
   * @deprecated OpenAPI DeleteEnvironment is deprecated
   * @returns DeleteEnvironmentResponse
   */
  // Deprecated
  async deleteEnvironment(environmentId: string): Promise<$_model.DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(environmentId, headers, runtime);
  }

  /**
   * Deletes a gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayResponse({}));
  }

  /**
   * Deletes a gateway.
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(gatewayId: string): Promise<$_model.DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Deletes a quota throttling rule from a gateway.
   * 
   * @remarks
   * Deletes a consumer-based quota rule from an AI gateway. This operation takes effect only for AI gateways of version 2.1.19 or later.
   * 
   * @param request - DeleteGatewayQuotaRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayQuotaRuleResponse
   */
  async deleteGatewayQuotaRuleWithOptions(gatewayId: string, ruleId: string, request: $_model.DeleteGatewayQuotaRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayQuotaRuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayQuotaRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayQuotaRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayQuotaRuleResponse({}));
  }

  /**
   * Deletes a quota throttling rule from a gateway.
   * 
   * @remarks
   * Deletes a consumer-based quota rule from an AI gateway. This operation takes effect only for AI gateways of version 2.1.19 or later.
   * 
   * @param request - DeleteGatewayQuotaRuleRequest
   * @returns DeleteGatewayQuotaRuleResponse
   */
  async deleteGatewayQuotaRule(gatewayId: string, ruleId: string, request: $_model.DeleteGatewayQuotaRuleRequest): Promise<$_model.DeleteGatewayQuotaRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayQuotaRuleWithOptions(gatewayId, ruleId, request, headers, runtime);
  }

  /**
   * Deletes a security group rule from a gateway.
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRuleWithOptions(gatewayId: string, securityGroupRuleId: string, request: $_model.DeleteGatewaySecurityGroupRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewaySecurityGroupRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cascadingDelete)) {
      query["cascadingDelete"] = request.cascadingDelete;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewaySecurityGroupRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/security-group-rules/${$dara.URL.percentEncode(securityGroupRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewaySecurityGroupRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewaySecurityGroupRuleResponse({}));
  }

  /**
   * Deletes a security group rule from a gateway.
   * 
   * @param request - DeleteGatewaySecurityGroupRuleRequest
   * @returns DeleteGatewaySecurityGroupRuleResponse
   */
  async deleteGatewaySecurityGroupRule(gatewayId: string, securityGroupRuleId: string, request: $_model.DeleteGatewaySecurityGroupRuleRequest): Promise<$_model.DeleteGatewaySecurityGroupRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewaySecurityGroupRuleWithOptions(gatewayId, securityGroupRuleId, request, headers, runtime);
  }

  /**
   * Deletes a specified HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiResponse({}));
  }

  /**
   * Deletes a specified HTTP API.
   * @returns DeleteHttpApiResponse
   */
  async deleteHttpApi(httpApiId: string): Promise<$_model.DeleteHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Deletes a specified operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiOperationResponse({}));
  }

  /**
   * Deletes a specified operation.
   * @returns DeleteHttpApiOperationResponse
   */
  async deleteHttpApiOperation(httpApiId: string, operationId: string): Promise<$_model.DeleteHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Deletes a route of an HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpApiRouteResponse({}));
  }

  /**
   * Deletes a route of an HTTP API.
   * @returns DeleteHttpApiRouteResponse
   */
  async deleteHttpApiRoute(httpApiId: string, routeId: string): Promise<$_model.DeleteHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * Deletes an MCP server.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMcpServerResponse
   */
  async deleteMcpServerWithOptions(mcpServerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMcpServerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMcpServerResponse({}));
  }

  /**
   * Deletes an MCP server.
   * @returns DeleteMcpServerResponse
   */
  async deleteMcpServer(mcpServerId: string): Promise<$_model.DeleteMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMcpServerWithOptions(mcpServerId, headers, runtime);
  }

  /**
   * Deletes a plugin mount.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePluginAttachmentResponse
   */
  async deletePluginAttachmentWithOptions(pluginAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePluginAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeletePluginAttachmentResponse({}));
  }

  /**
   * Deletes a plugin mount.
   * @returns DeletePluginAttachmentResponse
   */
  async deletePluginAttachment(pluginAttachmentId: string): Promise<$_model.DeletePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePluginAttachmentWithOptions(pluginAttachmentId, headers, runtime);
  }

  /**
   * DeletePluginClass
   * 
   * @param request - DeletePluginClassRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePluginClassResponse
   */
  async deletePluginClassWithOptions(pluginClassId: string, request: $_model.DeletePluginClassRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePluginClassResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePluginClass",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-classes/${$dara.URL.percentEncode(pluginClassId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePluginClassResponse>(await this.callApi(params, req, runtime), new $_model.DeletePluginClassResponse({}));
  }

  /**
   * DeletePluginClass
   * 
   * @param request - DeletePluginClassRequest
   * @returns DeletePluginClassResponse
   */
  async deletePluginClass(pluginClassId: string, request: $_model.DeletePluginClassRequest): Promise<$_model.DeletePluginClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePluginClassWithOptions(pluginClassId, request, headers, runtime);
  }

  /**
   * Deletes a policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
  }

  /**
   * Deletes a policy.
   * @returns DeletePolicyResponse
   */
  async deletePolicy(policyId: string): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Deletes a policy attachment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyAttachmentResponse({}));
  }

  /**
   * Deletes a policy attachment.
   * @returns DeletePolicyAttachmentResponse
   */
  async deletePolicyAttachment(policyAttachmentId: string): Promise<$_model.DeletePolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * Deletes a key value.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretResponse
   */
  async deleteSecretWithOptions(secretId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecret",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets/${$dara.URL.percentEncode(secretId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretResponse({}));
  }

  /**
   * Deletes a key value.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * @returns DeleteSecretResponse
   */
  async deleteSecret(secretId: string): Promise<$_model.DeleteSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSecretWithOptions(secretId, headers, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * Deletes a service.
   * @returns DeleteServiceResponse
   */
  async deleteService(serviceId: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * Deletes a service version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceVersionResponse
   */
  async deleteServiceVersionWithOptions(serviceId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}/versions/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceVersionResponse({}));
  }

  /**
   * Deletes a service version.
   * @returns DeleteServiceVersionResponse
   */
  async deleteServiceVersion(serviceId: string, name: string): Promise<$_model.DeleteServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceVersionWithOptions(serviceId, name, headers, runtime);
  }

  /**
   * Deletes a service source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceResponse
   */
  async deleteSourceWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/sources/${$dara.URL.percentEncode(sourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceResponse({}));
  }

  /**
   * Deletes a service source.
   * @returns DeleteSourceResponse
   */
  async deleteSource(sourceId: string): Promise<$_model.DeleteSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSourceWithOptions(sourceId, headers, runtime);
  }

  /**
   * Publishes an HTTP API. This includes REST APIs and routes within HTTP APIs.
   * 
   * @param request - DeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployHttpApiResponse
   */
  async deployHttpApiWithOptions(httpApiId: string, request: $_model.DeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.httpApiConfig)) {
      body["httpApiConfig"] = request.httpApiConfig;
    }

    if (!$dara.isNull(request.restApiConfig)) {
      body["restApiConfig"] = request.restApiConfig;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.DeployHttpApiResponse({}));
  }

  /**
   * Publishes an HTTP API. This includes REST APIs and routes within HTTP APIs.
   * 
   * @param request - DeployHttpApiRequest
   * @returns DeployHttpApiResponse
   */
  async deployHttpApi(httpApiId: string, request: $_model.DeployHttpApiRequest): Promise<$_model.DeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Publishes an MCP server.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployMcpServerResponse
   */
  async deployMcpServerWithOptions(mcpServerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployMcpServerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}/deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.DeployMcpServerResponse({}));
  }

  /**
   * Publishes an MCP server.
   * @returns DeployMcpServerResponse
   */
  async deployMcpServer(mcpServerId: string): Promise<$_model.DeployMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployMcpServerWithOptions(mcpServerId, headers, runtime);
  }

  /**
   * Queries the regions where the cloud-native API gateway is available for the current account.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/regions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the regions where the cloud-native API gateway is available for the current account.
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
   * Exports a specified HTTP API.
   * 
   * @param request - ExportHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportHttpApiResponse
   */
  async exportHttpApiWithOptions(httpApiId: string, request: $_model.ExportHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extensionConfig)) {
      body["extensionConfig"] = request.extensionConfig;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.operationIds)) {
      body["operationIds"] = request.operationIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/export`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.ExportHttpApiResponse({}));
  }

  /**
   * Exports a specified HTTP API.
   * 
   * @param request - ExportHttpApiRequest
   * @returns ExportHttpApiResponse
   */
  async exportHttpApi(httpApiId: string, request: $_model.ExportHttpApiRequest): Promise<$_model.ExportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Queries the details of an AI model card.
   * 
   * @param request - GetAiModelCardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiModelCardResponse
   */
  async getAiModelCardWithOptions(modelCardId: string, request: $_model.GetAiModelCardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiModelCardResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiModelCard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-cards/${$dara.URL.percentEncode(modelCardId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiModelCardResponse>(await this.callApi(params, req, runtime), new $_model.GetAiModelCardResponse({}));
  }

  /**
   * Queries the details of an AI model card.
   * 
   * @param request - GetAiModelCardRequest
   * @returns GetAiModelCardResponse
   */
  async getAiModelCard(modelCardId: string, request: $_model.GetAiModelCardRequest): Promise<$_model.GetAiModelCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAiModelCardWithOptions(modelCardId, request, headers, runtime);
  }

  /**
   * Queries the details of an AI model provider.
   * 
   * @param request - GetAiModelProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAiModelProviderResponse
   */
  async getAiModelProviderWithOptions(modelProviderId: string, request: $_model.GetAiModelProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAiModelProviderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAiModelProvider",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-providers/${$dara.URL.percentEncode(modelProviderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAiModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.GetAiModelProviderResponse({}));
  }

  /**
   * Queries the details of an AI model provider.
   * 
   * @param request - GetAiModelProviderRequest
   * @returns GetAiModelProviderResponse
   */
  async getAiModelProvider(modelProviderId: string, request: $_model.GetAiModelProviderRequest): Promise<$_model.GetAiModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAiModelProviderWithOptions(modelProviderId, request, headers, runtime);
  }

  /**
   * Retrieves an API consumer.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerResponse
   */
  async getConsumerWithOptions(consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerResponse({}));
  }

  /**
   * Retrieves an API consumer.
   * @returns GetConsumerResponse
   */
  async getConsumer(consumerId: string): Promise<$_model.GetConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerWithOptions(consumerId, headers, runtime);
  }

  /**
   * Retrieves a consumer authorization rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerAuthorizationRuleResponse
   */
  async getConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, consumerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Retrieves a consumer authorization rule.
   * @returns GetConsumerAuthorizationRuleResponse
   */
  async getConsumerAuthorizationRule(consumerAuthorizationRuleId: string, consumerId: string): Promise<$_model.GetConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, consumerId, headers, runtime);
  }

  /**
   * Queries a consumer group.
   * 
   * @param request - GetConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroupWithOptions(consumerGroupId: string, request: $_model.GetConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumerGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumerGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetConsumerGroupResponse({}));
  }

  /**
   * Queries a consumer group.
   * 
   * @param request - GetConsumerGroupRequest
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroup(consumerGroupId: string, request: $_model.GetConsumerGroupRequest): Promise<$_model.GetConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Retrieves the monitoring log dashboard.
   * 
   * @param tmpReq - GetDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
   */
  async getDashboardWithOptions(gatewayId: string, tmpReq: $_model.GetDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDashboardResponse> {
    tmpReq.validate();
    let request = new $_model.GetDashboardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "filter", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.apiId)) {
      query["apiId"] = request.apiId;
    }

    if (!$dara.isNull(request.filterShrink)) {
      query["filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      query["pluginClassId"] = request.pluginClassId;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["pluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.routeId)) {
      query["routeId"] = request.routeId;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.upstreamCluster)) {
      query["upstreamCluster"] = request.upstreamCluster;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDashboard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDashboardResponse>(await this.callApi(params, req, runtime), new $_model.GetDashboardResponse({}));
  }

  /**
   * Retrieves the monitoring log dashboard.
   * 
   * @param request - GetDashboardRequest
   * @returns GetDashboardResponse
   */
  async getDashboard(gatewayId: string, request: $_model.GetDashboardRequest): Promise<$_model.GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Queries a domain name.
   * 
   * @param request - GetDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
   */
  async getDomainWithOptions(domainId: string, request: $_model.GetDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDomainResponse>(await this.callApi(params, req, runtime), new $_model.GetDomainResponse({}));
  }

  /**
   * Queries a domain name.
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(domainId: string, request: $_model.GetDomainRequest): Promise<$_model.GetDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * Queries an environment.
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(environmentId: string, request: $_model.GetEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnvironmentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withStatistics)) {
      query["withStatistics"] = request.withStatistics;
    }

    if (!$dara.isNull(request.withVpcInfo)) {
      query["withVpcInfo"] = request.withVpcInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.GetEnvironmentResponse({}));
  }

  /**
   * Queries an environment.
   * 
   * @deprecated OpenAPI GetEnvironment is deprecated
   * 
   * @param request - GetEnvironmentRequest
   * @returns GetEnvironmentResponse
   */
  // Deprecated
  async getEnvironment(environmentId: string, request: $_model.GetEnvironmentRequest): Promise<$_model.GetEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Retrieves basic information about a gateway, including the associated VPC, vSwitch, and gateway ingress.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayResponse
   */
  async getGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayResponse({}));
  }

  /**
   * Retrieves basic information about a gateway, including the associated VPC, vSwitch, and gateway ingress.
   * @returns GetGatewayResponse
   */
  async getGateway(gatewayId: string): Promise<$_model.GetGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Queries the details of a gateway quota rate limiting rule.
   * 
   * @remarks
   * Queries the details of a consumer quota rule on an AI gateway.
   * 
   * @param request - GetGatewayQuotaRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayQuotaRuleResponse
   */
  async getGatewayQuotaRuleWithOptions(gatewayId: string, ruleId: string, request: $_model.GetGatewayQuotaRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayQuotaRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerPageNumber)) {
      query["consumerPageNumber"] = request.consumerPageNumber;
    }

    if (!$dara.isNull(request.consumerPageSize)) {
      query["consumerPageSize"] = request.consumerPageSize;
    }

    if (!$dara.isNull(request.withConsumers)) {
      query["withConsumers"] = request.withConsumers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGatewayQuotaRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayQuotaRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayQuotaRuleResponse({}));
  }

  /**
   * Queries the details of a gateway quota rate limiting rule.
   * 
   * @remarks
   * Queries the details of a consumer quota rule on an AI gateway.
   * 
   * @param request - GetGatewayQuotaRuleRequest
   * @returns GetGatewayQuotaRuleResponse
   */
  async getGatewayQuotaRule(gatewayId: string, ruleId: string, request: $_model.GetGatewayQuotaRuleRequest): Promise<$_model.GetGatewayQuotaRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayQuotaRuleWithOptions(gatewayId, ruleId, request, headers, runtime);
  }

  /**
   * Queries the usage details of a subject under a gateway quota throttling rule, including used quota, total quota, whether the limit is exceeded, usage details, and consumption records.
   * 
   * @remarks
   * Retrieves the usage details of a specific consumer under a quota rule. This operation takes effect only for AI gateways with a version later than 2.1.19.
   * 
   * @param request - GetGatewayQuotaRuleSubjectUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGatewayQuotaRuleSubjectUsageResponse
   */
  async getGatewayQuotaRuleSubjectUsageWithOptions(gatewayId: string, ruleId: string, subjectId: string, request: $_model.GetGatewayQuotaRuleSubjectUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGatewayQuotaRuleSubjectUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filterFailedRequests)) {
      query["filterFailedRequests"] = request.filterFailedRequests;
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
      action: "GetGatewayQuotaRuleSubjectUsage",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}/subjects/${$dara.URL.percentEncode(subjectId)}/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGatewayQuotaRuleSubjectUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetGatewayQuotaRuleSubjectUsageResponse({}));
  }

  /**
   * Queries the usage details of a subject under a gateway quota throttling rule, including used quota, total quota, whether the limit is exceeded, usage details, and consumption records.
   * 
   * @remarks
   * Retrieves the usage details of a specific consumer under a quota rule. This operation takes effect only for AI gateways with a version later than 2.1.19.
   * 
   * @param request - GetGatewayQuotaRuleSubjectUsageRequest
   * @returns GetGatewayQuotaRuleSubjectUsageResponse
   */
  async getGatewayQuotaRuleSubjectUsage(gatewayId: string, ruleId: string, subjectId: string, request: $_model.GetGatewayQuotaRuleSubjectUsageRequest): Promise<$_model.GetGatewayQuotaRuleSubjectUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGatewayQuotaRuleSubjectUsageWithOptions(gatewayId, ruleId, subjectId, request, headers, runtime);
  }

  /**
   * Retrieves HTTP API information.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiResponse
   */
  async getHttpApiWithOptions(httpApiId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiResponse({}));
  }

  /**
   * Retrieves HTTP API information.
   * @returns GetHttpApiResponse
   */
  async getHttpApi(httpApiId: string): Promise<$_model.GetHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiWithOptions(httpApiId, headers, runtime);
  }

  /**
   * Retrieves operation information.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperationWithOptions(httpApiId: string, operationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiOperationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiOperationResponse({}));
  }

  /**
   * Retrieves operation information.
   * @returns GetHttpApiOperationResponse
   */
  async getHttpApiOperation(httpApiId: string, operationId: string): Promise<$_model.GetHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiOperationWithOptions(httpApiId, operationId, headers, runtime);
  }

  /**
   * Retrieves the route details of an HTTP API.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRouteWithOptions(httpApiId: string, routeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpApiRouteResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpApiRouteResponse({}));
  }

  /**
   * Retrieves the route details of an HTTP API.
   * @returns GetHttpApiRouteResponse
   */
  async getHttpApiRoute(httpApiId: string, routeId: string): Promise<$_model.GetHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHttpApiRouteWithOptions(httpApiId, routeId, headers, runtime);
  }

  /**
   * Retrieves an MCP server.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMcpServerResponse
   */
  async getMcpServerWithOptions(mcpServerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMcpServerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.GetMcpServerResponse({}));
  }

  /**
   * Retrieves an MCP server.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * @returns GetMcpServerResponse
   */
  async getMcpServer(mcpServerId: string): Promise<$_model.GetMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMcpServerWithOptions(mcpServerId, headers, runtime);
  }

  /**
   * Queries a plugin mount.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPluginAttachmentResponse
   */
  async getPluginAttachmentWithOptions(pluginAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPluginAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetPluginAttachmentResponse({}));
  }

  /**
   * Queries a plugin mount.
   * @returns GetPluginAttachmentResponse
   */
  async getPluginAttachment(pluginAttachmentId: string): Promise<$_model.GetPluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPluginAttachmentWithOptions(pluginAttachmentId, headers, runtime);
  }

  /**
   * Retrieves a custom plug-in class.
   * 
   * @param request - GetPluginClassRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPluginClassResponse
   */
  async getPluginClassWithOptions(pluginClassId: string, request: $_model.GetPluginClassRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPluginClassResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPluginClass",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-classes/${$dara.URL.percentEncode(pluginClassId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPluginClassResponse>(await this.callApi(params, req, runtime), new $_model.GetPluginClassResponse({}));
  }

  /**
   * Retrieves a custom plug-in class.
   * 
   * @param request - GetPluginClassRequest
   * @returns GetPluginClassResponse
   */
  async getPluginClass(pluginClassId: string, request: $_model.GetPluginClassRequest): Promise<$_model.GetPluginClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPluginClassWithOptions(pluginClassId, request, headers, runtime);
  }

  /**
   * Retrieves a policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyResponse
   */
  async getPolicyWithOptions(policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyResponse({}));
  }

  /**
   * Retrieves a policy.
   * @returns GetPolicyResponse
   */
  async getPolicy(policyId: string): Promise<$_model.GetPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyWithOptions(policyId, headers, runtime);
  }

  /**
   * Queries the resource attachment of a policy.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachmentWithOptions(policyAttachmentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPolicyAttachmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPolicyAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-attachments/${$dara.URL.percentEncode(policyAttachmentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPolicyAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.GetPolicyAttachmentResponse({}));
  }

  /**
   * Queries the resource attachment of a policy.
   * @returns GetPolicyAttachmentResponse
   */
  async getPolicyAttachment(policyAttachmentId: string): Promise<$_model.GetPolicyAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPolicyAttachmentWithOptions(policyAttachmentId, headers, runtime);
  }

  /**
   * Retrieves resource overview information.
   * 
   * @param request - GetResourceOverviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverviewWithOptions(request: $_model.GetResourceOverviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceOverviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceOverview",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/overview/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceOverviewResponse({}));
  }

  /**
   * Retrieves resource overview information.
   * 
   * @param request - GetResourceOverviewRequest
   * @returns GetResourceOverviewResponse
   */
  async getResourceOverview(request: $_model.GetResourceOverviewRequest): Promise<$_model.GetResourceOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceOverviewWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a key.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretResponse
   */
  async getSecretWithOptions(secretId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecret",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets/${$dara.URL.percentEncode(secretId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretResponse({}));
  }

  /**
   * Retrieves a key.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * @returns GetSecretResponse
   */
  async getSecret(secretId: string): Promise<$_model.GetSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecretWithOptions(secretId, headers, runtime);
  }

  /**
   * Retrieves the value of a key.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretValueResponse
   */
  async getSecretValueWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretValueResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretValue",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets/name/${$dara.URL.percentEncode(name)}/value`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretValueResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretValueResponse({}));
  }

  /**
   * Retrieves the value of a key.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * @returns GetSecretValueResponse
   */
  async getSecretValue(name: string): Promise<$_model.GetSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecretValueWithOptions(name, headers, runtime);
  }

  /**
   * Gets service details.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceResponse
   */
  async getServiceWithOptions(serviceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceResponse({}));
  }

  /**
   * Gets service details.
   * @returns GetServiceResponse
   */
  async getService(serviceId: string): Promise<$_model.GetServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(serviceId, headers, runtime);
  }

  /**
   * Retrieves the details of a service source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceResponse
   */
  async getSourceWithOptions(sourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSource",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/sources/${$dara.URL.percentEncode(sourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceResponse({}));
  }

  /**
   * Retrieves the details of a service source.
   * @returns GetSourceResponse
   */
  async getSource(sourceId: string): Promise<$_model.GetSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSourceWithOptions(sourceId, headers, runtime);
  }

  /**
   * Retrieves the Tracing Analysis configuration.
   * 
   * @param request - GetTraceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceConfigResponse
   */
  async getTraceConfigWithOptions(gatewayId: string, request: $_model.GetTraceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceConfig",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/trace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceConfigResponse({}));
  }

  /**
   * Retrieves the Tracing Analysis configuration.
   * 
   * @param request - GetTraceConfigRequest
   * @returns GetTraceConfigResponse
   */
  async getTraceConfig(gatewayId: string, request: $_model.GetTraceConfigRequest): Promise<$_model.GetTraceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceConfigWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Imports an HTTP API. This operation supports importing OpenAPI 2.0 and OpenAPI 3.0.x definition files as REST-type APIs.
   * 
   * @param request - ImportHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportHttpApiResponse
   */
  async importHttpApiWithOptions(request: $_model.ImportHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ImportHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.mcpRouteId)) {
      body["mcpRouteId"] = request.mcpRouteId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specContentBase64)) {
      body["specContentBase64"] = request.specContentBase64;
    }

    if (!$dara.isNull(request.specFileUrl)) {
      body["specFileUrl"] = request.specFileUrl;
    }

    if (!$dara.isNull(request.specOssConfig)) {
      body["specOssConfig"] = request.specOssConfig;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.targetHttpApiId)) {
      body["targetHttpApiId"] = request.targetHttpApiId;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    if (!$dara.isNull(request.withGatewayExtension)) {
      body["withGatewayExtension"] = request.withGatewayExtension;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/import`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.ImportHttpApiResponse({}));
  }

  /**
   * Imports an HTTP API. This operation supports importing OpenAPI 2.0 and OpenAPI 3.0.x definition files as REST-type APIs.
   * 
   * @param request - ImportHttpApiRequest
   * @returns ImportHttpApiResponse
   */
  async importHttpApi(request: $_model.ImportHttpApiRequest): Promise<$_model.ImportHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importHttpApiWithOptions(request, headers, runtime);
  }

  /**
   * Installs a plug-in.
   * 
   * @param request - InstallPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallPluginResponse
   */
  async installPluginWithOptions(request: $_model.InstallPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallPluginResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayIds)) {
      body["gatewayIds"] = request.gatewayIds;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      body["pluginClassId"] = request.pluginClassId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallPlugin",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugins/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallPluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallPluginResponse({}));
  }

  /**
   * Installs a plug-in.
   * 
   * @param request - InstallPluginRequest
   * @returns InstallPluginResponse
   */
  async installPlugin(request: $_model.InstallPluginRequest): Promise<$_model.InstallPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installPluginWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of AI model cards.
   * 
   * @param request - ListAiModelCardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAiModelCardsResponse
   */
  async listAiModelCardsWithOptions(request: $_model.ListAiModelCardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAiModelCardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
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
      action: "ListAiModelCards",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-cards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAiModelCardsResponse>(await this.callApi(params, req, runtime), new $_model.ListAiModelCardsResponse({}));
  }

  /**
   * Queries the list of AI model cards.
   * 
   * @param request - ListAiModelCardsRequest
   * @returns ListAiModelCardsResponse
   */
  async listAiModelCards(request: $_model.ListAiModelCardsRequest): Promise<$_model.ListAiModelCardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAiModelCardsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of AI model providers.
   * 
   * @param request - ListAiModelProvidersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAiModelProvidersResponse
   */
  async listAiModelProvidersWithOptions(request: $_model.ListAiModelProvidersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAiModelProvidersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAiModelProviders",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-providers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAiModelProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListAiModelProvidersResponse({}));
  }

  /**
   * Queries the list of AI model providers.
   * 
   * @param request - ListAiModelProvidersRequest
   * @returns ListAiModelProvidersResponse
   */
  async listAiModelProviders(request: $_model.ListAiModelProvidersRequest): Promise<$_model.ListAiModelProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAiModelProvidersWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of consumer authorization rules.
   * 
   * @param request - ListConsumerAuthorizationRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerAuthorizationRulesResponse
   */
  async listConsumerAuthorizationRulesWithOptions(consumerId: string, request: $_model.ListConsumerAuthorizationRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerAuthorizationRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameLike)) {
      query["apiNameLike"] = request.apiNameLike;
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
      action: "ListConsumerAuthorizationRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerAuthorizationRulesResponse({}));
  }

  /**
   * Retrieves the list of consumer authorization rules.
   * 
   * @param request - ListConsumerAuthorizationRulesRequest
   * @returns ListConsumerAuthorizationRulesResponse
   */
  async listConsumerAuthorizationRules(consumerId: string, request: $_model.ListConsumerAuthorizationRulesRequest): Promise<$_model.ListConsumerAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerAuthorizationRulesWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * Queries the member list of a consumer group.
   * 
   * @param request - ListConsumerGroupConsumersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupConsumersResponse
   */
  async listConsumerGroupConsumersWithOptions(consumerGroupId: string, request: $_model.ListConsumerGroupConsumersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerGroupConsumersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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
      action: "ListConsumerGroupConsumers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}/consumers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerGroupConsumersResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerGroupConsumersResponse({}));
  }

  /**
   * Queries the member list of a consumer group.
   * 
   * @param request - ListConsumerGroupConsumersRequest
   * @returns ListConsumerGroupConsumersResponse
   */
  async listConsumerGroupConsumers(consumerGroupId: string, request: $_model.ListConsumerGroupConsumersRequest): Promise<$_model.ListConsumerGroupConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupConsumersWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Queries the list of consumer groups.
   * 
   * @param request - ListConsumerGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroupsWithOptions(request: $_model.ListConsumerGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerGroupsResponse({}));
  }

  /**
   * Queries the list of consumer groups.
   * 
   * @param request - ListConsumerGroupsRequest
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroups(request: $_model.ListConsumerGroupsRequest): Promise<$_model.ListConsumerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of quota rules configured for a specific consumer.
   * 
   * @param request - ListConsumerQuotaRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerQuotaRulesResponse
   */
  async listConsumerQuotaRulesWithOptions(consumerId: string, request: $_model.ListConsumerQuotaRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerQuotaRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
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
      action: "ListConsumerQuotaRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/quota-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumerQuotaRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumerQuotaRulesResponse({}));
  }

  /**
   * Queries the list of quota rules configured for a specific consumer.
   * 
   * @param request - ListConsumerQuotaRulesRequest
   * @returns ListConsumerQuotaRulesResponse
   */
  async listConsumerQuotaRules(consumerId: string, request: $_model.ListConsumerQuotaRulesRequest): Promise<$_model.ListConsumerQuotaRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerQuotaRulesWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * Retrieves a list of consumers.
   * 
   * @param request - ListConsumersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumersResponse
   */
  async listConsumersWithOptions(request: $_model.ListConsumersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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
      action: "ListConsumers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumersResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumersResponse({}));
  }

  /**
   * Retrieves a list of consumers.
   * 
   * @param request - ListConsumersRequest
   * @returns ListConsumersResponse
   */
  async listConsumers(request: $_model.ListConsumersRequest): Promise<$_model.ListConsumersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: $_model.ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainScope)) {
      query["domainScope"] = request.domainScope;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries a list of domain names.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of environments.
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(request: $_model.ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasLike)) {
      query["aliasLike"] = request.aliasLike;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayNameLike)) {
      query["gatewayNameLike"] = request.gatewayNameLike;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentsResponse({}));
  }

  /**
   * Queries the list of environments.
   * 
   * @deprecated OpenAPI ListEnvironments is deprecated
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  // Deprecated
  async listEnvironments(request: $_model.ListEnvironmentsRequest): Promise<$_model.ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the external service information of a gateway.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - ListExternalServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExternalServicesResponse
   */
  async listExternalServicesWithOptions(gatewayId: string, request: $_model.ListExternalServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExternalServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.importableOnly)) {
      query["importableOnly"] = request.importableOnly;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.paiWorkspaceId)) {
      query["paiWorkspaceId"] = request.paiWorkspaceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExternalServices",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/external-services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExternalServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListExternalServicesResponse({}));
  }

  /**
   * Retrieves the external service information of a gateway.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - ListExternalServicesRequest
   * @returns ListExternalServicesResponse
   */
  async listExternalServices(gatewayId: string, request: $_model.ListExternalServicesRequest): Promise<$_model.ListExternalServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExternalServicesWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Queries the list of gateway attribute parameter settings.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayFeaturesResponse
   */
  async listGatewayFeaturesWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayFeaturesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayFeatures",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/gateway-features`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayFeaturesResponse({}));
  }

  /**
   * Queries the list of gateway attribute parameter settings.
   * @returns ListGatewayFeaturesResponse
   */
  async listGatewayFeatures(gatewayId: string): Promise<$_model.ListGatewayFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayFeaturesWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Queries the list of consumer quota rules bound to a gateway.
   * 
   * @remarks
   * Queries the list of consumer quota rules bound to a gateway.
   * 
   * @param request - ListGatewayQuotaRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayQuotaRulesResponse
   */
  async listGatewayQuotaRulesWithOptions(gatewayId: string, request: $_model.ListGatewayQuotaRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayQuotaRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "ListGatewayQuotaRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayQuotaRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayQuotaRulesResponse({}));
  }

  /**
   * Queries the list of consumer quota rules bound to a gateway.
   * 
   * @remarks
   * Queries the list of consumer quota rules bound to a gateway.
   * 
   * @param request - ListGatewayQuotaRulesRequest
   * @returns ListGatewayQuotaRulesResponse
   */
  async listGatewayQuotaRules(gatewayId: string, request: $_model.ListGatewayQuotaRulesRequest): Promise<$_model.ListGatewayQuotaRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayQuotaRulesWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Queries a list of gateways.
   * 
   * @param tmpReq - ListGatewaysRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewaysResponse
   */
  async listGatewaysWithOptions(tmpReq: $_model.ListGatewaysRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewaysResponse> {
    tmpReq.validate();
    let request = new $_model.ListGatewaysShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateways",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewaysResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewaysResponse({}));
  }

  /**
   * Queries a list of gateways.
   * 
   * @param request - ListGatewaysRequest
   * @returns ListGatewaysResponse
   */
  async listGateways(request: $_model.ListGatewaysRequest): Promise<$_model.ListGatewaysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewaysWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of API operations.
   * 
   * @param request - ListHttpApiOperationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperationsWithOptions(httpApiId: string, request: $_model.ListHttpApiOperationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApiOperationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.enableAuth)) {
      query["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.forDeploy)) {
      query["forDeploy"] = request.forDeploy;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withConsumerInEnvironmentId)) {
      query["withConsumerInEnvironmentId"] = request.withConsumerInEnvironmentId;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiOperations",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApiOperationsResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApiOperationsResponse({}));
  }

  /**
   * Retrieves a list of API operations.
   * 
   * @param request - ListHttpApiOperationsRequest
   * @returns ListHttpApiOperationsResponse
   */
  async listHttpApiOperations(httpApiId: string, request: $_model.ListHttpApiOperationsRequest): Promise<$_model.ListHttpApiOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiOperationsWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Queries the route list of an HTTP API.
   * 
   * @param request - ListHttpApiRoutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutesWithOptions(httpApiId: string, request: $_model.ListHttpApiRoutesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApiRoutesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendServiceName)) {
      query["backendServiceName"] = request.backendServiceName;
    }

    if (!$dara.isNull(request.consumerAuthorizationRuleId)) {
      query["consumerAuthorizationRuleId"] = request.consumerAuthorizationRuleId;
    }

    if (!$dara.isNull(request.deployStatuses)) {
      query["deployStatuses"] = request.deployStatuses;
    }

    if (!$dara.isNull(request.domainId)) {
      query["domainId"] = request.domainId;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.forDeploy)) {
      query["forDeploy"] = request.forDeploy;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pathLike)) {
      query["pathLike"] = request.pathLike;
    }

    if (!$dara.isNull(request.withAuthPolicyInfo)) {
      query["withAuthPolicyInfo"] = request.withAuthPolicyInfo;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApiRoutes",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApiRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApiRoutesResponse({}));
  }

  /**
   * Queries the route list of an HTTP API.
   * 
   * @param request - ListHttpApiRoutesRequest
   * @returns ListHttpApiRoutesResponse
   */
  async listHttpApiRoutes(httpApiId: string, request: $_model.ListHttpApiRoutesRequest): Promise<$_model.ListHttpApiRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApiRoutesWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Retrieves a list of HTTP APIs.
   * 
   * @param request - ListHttpApisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpApisResponse
   */
  async listHttpApisWithOptions(request: $_model.ListHttpApisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpApisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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

    if (!$dara.isNull(request.types)) {
      query["types"] = request.types;
    }

    if (!$dara.isNull(request.withAPIsPublishedToEnvironment)) {
      query["withAPIsPublishedToEnvironment"] = request.withAPIsPublishedToEnvironment;
    }

    if (!$dara.isNull(request.withAuthPolicyInEnvironmentId)) {
      query["withAuthPolicyInEnvironmentId"] = request.withAuthPolicyInEnvironmentId;
    }

    if (!$dara.isNull(request.withAuthPolicyList)) {
      query["withAuthPolicyList"] = request.withAuthPolicyList;
    }

    if (!$dara.isNull(request.withConsumerInfoById)) {
      query["withConsumerInfoById"] = request.withConsumerInfoById;
    }

    if (!$dara.isNull(request.withEnvironmentInfo)) {
      query["withEnvironmentInfo"] = request.withEnvironmentInfo;
    }

    if (!$dara.isNull(request.withEnvironmentInfoById)) {
      query["withEnvironmentInfoById"] = request.withEnvironmentInfoById;
    }

    if (!$dara.isNull(request.withIngressInfo)) {
      query["withIngressInfo"] = request.withIngressInfo;
    }

    if (!$dara.isNull(request.withPluginAttachmentByPluginId)) {
      query["withPluginAttachmentByPluginId"] = request.withPluginAttachmentByPluginId;
    }

    if (!$dara.isNull(request.withPolicyConfigs)) {
      query["withPolicyConfigs"] = request.withPolicyConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpApis",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpApisResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpApisResponse({}));
  }

  /**
   * Retrieves a list of HTTP APIs.
   * 
   * @param request - ListHttpApisRequest
   * @returns ListHttpApisResponse
   */
  async listHttpApis(request: $_model.ListHttpApisRequest): Promise<$_model.ListHttpApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHttpApisWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of MCP servers.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListMcpServersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMcpServersResponse
   */
  async listMcpServersWithOptions(request: $_model.ListMcpServersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMcpServersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createFromTypes)) {
      query["createFromTypes"] = request.createFromTypes;
    }

    if (!$dara.isNull(request.deployStatuses)) {
      query["deployStatuses"] = request.deployStatuses;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMcpServers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMcpServersResponse>(await this.callApi(params, req, runtime), new $_model.ListMcpServersResponse({}));
  }

  /**
   * Retrieves a list of MCP servers.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListMcpServersRequest
   * @returns ListMcpServersResponse
   */
  async listMcpServers(request: $_model.ListMcpServersRequest): Promise<$_model.ListMcpServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMcpServersWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of plug-in mounts.
   * 
   * @param request - ListPluginAttachmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginAttachmentsResponse
   */
  async listPluginAttachmentsWithOptions(request: $_model.ListPluginAttachmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginAttachmentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.attachResourceTypes)) {
      query["attachResourceTypes"] = request.attachResourceTypes;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["pluginId"] = request.pluginId;
    }

    if (!$dara.isNull(request.withParentResource)) {
      query["withParentResource"] = request.withParentResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPluginAttachments",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginAttachmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginAttachmentsResponse({}));
  }

  /**
   * Retrieves the list of plug-in mounts.
   * 
   * @param request - ListPluginAttachmentsRequest
   * @returns ListPluginAttachmentsResponse
   */
  async listPluginAttachments(request: $_model.ListPluginAttachmentsRequest): Promise<$_model.ListPluginAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginAttachmentsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves plug-ins.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListPluginClassesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginClassesResponse
   */
  async listPluginClassesWithOptions(request: $_model.ListPluginClassesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginClassesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasLike)) {
      query["aliasLike"] = request.aliasLike;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.excludeBuiltinAiProxy)) {
      query["excludeBuiltinAiProxy"] = request.excludeBuiltinAiProxy;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.installed)) {
      query["installed"] = request.installed;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPluginClasses",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-classes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginClassesResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginClassesResponse({}));
  }

  /**
   * Retrieves plug-ins.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListPluginClassesRequest
   * @returns ListPluginClassesResponse
   */
  async listPluginClasses(request: $_model.ListPluginClassesRequest): Promise<$_model.ListPluginClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginClassesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of plugins.
   * 
   * @param request - ListPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginsResponse
   */
  async listPluginsWithOptions(request: $_model.ListPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.includeBuiltinAiGateway)) {
      query["includeBuiltinAiGateway"] = request.includeBuiltinAiGateway;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginClassId)) {
      query["pluginClassId"] = request.pluginClassId;
    }

    if (!$dara.isNull(request.pluginClassName)) {
      query["pluginClassName"] = request.pluginClassName;
    }

    if (!$dara.isNull(request.withAttachmentInfo)) {
      query["withAttachmentInfo"] = request.withAttachmentInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlugins",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginsResponse({}));
  }

  /**
   * Retrieves a list of plugins.
   * 
   * @param request - ListPluginsRequest
   * @returns ListPluginsResponse
   */
  async listPlugins(request: $_model.ListPluginsRequest): Promise<$_model.ListPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of policies.
   * 
   * @param request - ListPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.withAttachments)) {
      query["withAttachments"] = request.withAttachments;
    }

    if (!$dara.isNull(request.withSystemPolicy)) {
      query["withSystemPolicy"] = request.withSystemPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicies",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * Queries a list of policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves policy templates.
   * 
   * @param request - ListPolicyClassesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClassesWithOptions(request: $_model.ListPolicyClassesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPolicyClassesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceId)) {
      query["attachResourceId"] = request.attachResourceId;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      query["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPolicyClasses",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policy-classes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPolicyClassesResponse>(await this.callApi(params, req, runtime), new $_model.ListPolicyClassesResponse({}));
  }

  /**
   * Retrieves policy templates.
   * 
   * @param request - ListPolicyClassesRequest
   * @returns ListPolicyClassesResponse
   */
  async listPolicyClasses(request: $_model.ListPolicyClassesRequest): Promise<$_model.ListPolicyClassesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPolicyClassesWithOptions(request, headers, runtime);
  }

  /**
   * Lists secret references.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - ListSecretReferencesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretReferencesResponse
   */
  async listSecretReferencesWithOptions(secretId: string, request: $_model.ListSecretReferencesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretReferencesResponse> {
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
      action: "ListSecretReferences",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets/${$dara.URL.percentEncode(secretId)}/references`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretReferencesResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretReferencesResponse({}));
  }

  /**
   * Lists secret references.
   * 
   * @remarks
   * This operation supports creating multiple services.
   * 
   * @param request - ListSecretReferencesRequest
   * @returns ListSecretReferencesResponse
   */
  async listSecretReferences(secretId: string, request: $_model.ListSecretReferencesRequest): Promise<$_model.ListSecretReferencesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecretReferencesWithOptions(secretId, request, headers, runtime);
  }

  /**
   * Lists keys.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListSecretsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretsResponse
   */
  async listSecretsWithOptions(request: $_model.ListSecretsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayType)) {
      query["gatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.nameLike)) {
      query["nameLike"] = request.nameLike;
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
      action: "ListSecrets",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretsResponse({}));
  }

  /**
   * Lists keys.
   * 
   * @remarks
   * The operation supports creating multiple services.
   * 
   * @param request - ListSecretsRequest
   * @returns ListSecretsResponse
   */
  async listSecrets(request: $_model.ListSecretsRequest): Promise<$_model.ListSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecretsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of services.
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(request: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["sourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * Retrieves a list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of certificates.
   * 
   * @param request - ListSslCertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSslCertsResponse
   */
  async listSslCertsWithOptions(request: $_model.ListSslCertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSslCertsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certNameLike)) {
      query["certNameLike"] = request.certNameLike;
    }

    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
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
      action: "ListSslCerts",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ssl/certs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSslCertsResponse>(await this.callApi(params, req, runtime), new $_model.ListSslCertsResponse({}));
  }

  /**
   * Retrieves a list of certificates.
   * 
   * @param request - ListSslCertsRequest
   * @returns ListSslCertsResponse
   */
  async listSslCerts(request: $_model.ListSslCertsRequest): Promise<$_model.ListSslCertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSslCertsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of resource labels.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Retrieves the list of resource labels.
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
   * Retrieves the zones available for a cloud-native API gateway in a specific region.
   * 
   * @param request - ListZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListZonesResponse
   */
  async listZonesWithOptions(request: $_model.ListZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListZonesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayEdition)) {
      query["gatewayEdition"] = request.gatewayEdition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListZones",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListZonesResponse({}));
  }

  /**
   * Retrieves the zones available for a cloud-native API gateway in a specific region.
   * 
   * @param request - ListZonesRequest
   * @returns ListZonesResponse
   */
  async listZones(request: $_model.ListZonesRequest): Promise<$_model.ListZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listZonesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of consumer authorization rules.
   * 
   * @param request - QueryConsumerAuthorizationRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryConsumerAuthorizationRulesResponse
   */
  async queryConsumerAuthorizationRulesWithOptions(request: $_model.QueryConsumerAuthorizationRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryConsumerAuthorizationRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameLike)) {
      query["apiNameLike"] = request.apiNameLike;
    }

    if (!$dara.isNull(request.consumerGroupId)) {
      query["consumerGroupId"] = request.consumerGroupId;
    }

    if (!$dara.isNull(request.consumerId)) {
      query["consumerId"] = request.consumerId;
    }

    if (!$dara.isNull(request.consumerNameLike)) {
      query["consumerNameLike"] = request.consumerNameLike;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.groupByApi)) {
      query["groupByApi"] = request.groupByApi;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentResourceId)) {
      query["parentResourceId"] = request.parentResourceId;
    }

    if (!$dara.isNull(request.principalType)) {
      query["principalType"] = request.principalType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["resourceTypes"] = request.resourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryConsumerAuthorizationRules",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryConsumerAuthorizationRulesResponse>(await this.callApi(params, req, runtime), new $_model.QueryConsumerAuthorizationRulesResponse({}));
  }

  /**
   * Queries the list of consumer authorization rules.
   * 
   * @param request - QueryConsumerAuthorizationRulesRequest
   * @returns QueryConsumerAuthorizationRulesResponse
   */
  async queryConsumerAuthorizationRules(request: $_model.QueryConsumerAuthorizationRulesRequest): Promise<$_model.QueryConsumerAuthorizationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryConsumerAuthorizationRulesWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an API consumer authorization rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveConsumerAuthorizationRuleResponse
   */
  async removeConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveConsumerAuthorizationRuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Deletes an API consumer authorization rule.
   * @returns RemoveConsumerAuthorizationRuleResponse
   */
  async removeConsumerAuthorizationRule(consumerAuthorizationRuleId: string): Promise<$_model.RemoveConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeConsumerAuthorizationRuleWithOptions(consumerAuthorizationRuleId, headers, runtime);
  }

  /**
   * Resets a quota throttling rule on a gateway.
   * 
   * @remarks
   * Resets a quota throttling rule on a gateway. This operation takes effect only on AI gateways running version 2.1.19 or later. Resetting a rule clears the historical usage of consumers associated with the rule.
   * > 
   * >  Recommended call sequence:
   * > - 1. Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with conflictHash.
   * > - 2. Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - ResetGatewayQuotaRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetGatewayQuotaRuleResponse
   */
  async resetGatewayQuotaRuleWithOptions(gatewayId: string, ruleId: string, request: $_model.ResetGatewayQuotaRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetGatewayQuotaRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.conflictHash)) {
      body["conflictHash"] = request.conflictHash;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.periodMultiplier)) {
      body["periodMultiplier"] = request.periodMultiplier;
    }

    if (!$dara.isNull(request.periodType)) {
      body["periodType"] = request.periodType;
    }

    if (!$dara.isNull(request.quotaLimit)) {
      body["quotaLimit"] = request.quotaLimit;
    }

    if (!$dara.isNull(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.windowAlignment)) {
      body["windowAlignment"] = request.windowAlignment;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetGatewayQuotaRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}/reset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetGatewayQuotaRuleResponse>(await this.callApi(params, req, runtime), new $_model.ResetGatewayQuotaRuleResponse({}));
  }

  /**
   * Resets a quota throttling rule on a gateway.
   * 
   * @remarks
   * Resets a quota throttling rule on a gateway. This operation takes effect only on AI gateways running version 2.1.19 or later. Resetting a rule clears the historical usage of consumers associated with the rule.
   * > 
   * >  Recommended call sequence:
   * > - 1. Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with conflictHash.
   * > - 2. Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - ResetGatewayQuotaRuleRequest
   * @returns ResetGatewayQuotaRuleResponse
   */
  async resetGatewayQuotaRule(gatewayId: string, ruleId: string, request: $_model.ResetGatewayQuotaRuleRequest): Promise<$_model.ResetGatewayQuotaRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetGatewayQuotaRuleWithOptions(gatewayId, ruleId, request, headers, runtime);
  }

  /**
   * Restarts a gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartGatewayResponse
   */
  async restartGatewayWithOptions(gatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartGatewayResponse>(await this.callApi(params, req, runtime), new $_model.RestartGatewayResponse({}));
  }

  /**
   * Restarts a gateway.
   * @returns RestartGatewayResponse
   */
  async restartGateway(gatewayId: string): Promise<$_model.RestartGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartGatewayWithOptions(gatewayId, headers, runtime);
  }

  /**
   * Syncs an external MCP server.
   * 
   * @param request - SyncMCPServersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncMCPServersResponse
   */
  async syncMCPServersWithOptions(request: $_model.SyncMCPServersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncMCPServersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.nacosMcpServers)) {
      body["nacosMcpServers"] = request.nacosMcpServers;
    }

    if (!$dara.isNull(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["sourceId"] = request.sourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncMCPServers",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/sync-mcp-server`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncMCPServersResponse>(await this.callApi(params, req, runtime), new $_model.SyncMCPServersResponse({}));
  }

  /**
   * Syncs an external MCP server.
   * 
   * @param request - SyncMCPServersRequest
   * @returns SyncMCPServersResponse
   */
  async syncMCPServers(request: $_model.SyncMCPServersRequest): Promise<$_model.SyncMCPServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncMCPServersWithOptions(request, headers, runtime);
  }

  /**
   * Adds labels to resources.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds labels to resources.
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
   * Cancels the publication of an MCP server.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnDeployMcpServerResponse
   */
  async unDeployMcpServerWithOptions(mcpServerId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnDeployMcpServerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UnDeployMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}/undeploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnDeployMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.UnDeployMcpServerResponse({}));
  }

  /**
   * Cancels the publication of an MCP server.
   * @returns UnDeployMcpServerResponse
   */
  async unDeployMcpServer(mcpServerId: string): Promise<$_model.UnDeployMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unDeployMcpServerWithOptions(mcpServerId, headers, runtime);
  }

  /**
   * Cancels the deployment of an HTTP API.
   * 
   * @param request - UndeployHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApiWithOptions(httpApiId: string, request: $_model.UndeployHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UndeployHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.operationId)) {
      body["operationId"] = request.operationId;
    }

    if (!$dara.isNull(request.routeId)) {
      body["routeId"] = request.routeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UndeployHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/undeploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UndeployHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.UndeployHttpApiResponse({}));
  }

  /**
   * Cancels the deployment of an HTTP API.
   * 
   * @param request - UndeployHttpApiRequest
   * @returns UndeployHttpApiResponse
   */
  async undeployHttpApi(httpApiId: string, request: $_model.UndeployHttpApiRequest): Promise<$_model.UndeployHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.undeployHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Uninstalls a plugin.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallPluginResponse
   */
  async uninstallPluginWithOptions(pluginId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallPluginResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallPlugin",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugins/${$dara.URL.percentEncode(pluginId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallPluginResponse>(await this.callApi(params, req, runtime), new $_model.UninstallPluginResponse({}));
  }

  /**
   * Uninstalls a plugin.
   * @returns UninstallPluginResponse
   */
  async uninstallPlugin(pluginId: string): Promise<$_model.UninstallPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallPluginWithOptions(pluginId, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "TagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["TagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/tags`,
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
   * Updates an AI model card.
   * 
   * @param request - UpdateAiModelCardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAiModelCardResponse
   */
  async updateAiModelCardWithOptions(modelCardId: string, request: $_model.UpdateAiModelCardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAiModelCardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.availablePaths)) {
      body["availablePaths"] = request.availablePaths;
    }

    if (!$dara.isNull(request.credit)) {
      body["credit"] = request.credit;
    }

    if (!$dara.isNull(request.features)) {
      body["features"] = request.features;
    }

    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.modelName)) {
      body["modelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelProvider)) {
      body["modelProvider"] = request.modelProvider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAiModelCard",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-cards/${$dara.URL.percentEncode(modelCardId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAiModelCardResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAiModelCardResponse({}));
  }

  /**
   * Updates an AI model card.
   * 
   * @param request - UpdateAiModelCardRequest
   * @returns UpdateAiModelCardResponse
   */
  async updateAiModelCard(modelCardId: string, request: $_model.UpdateAiModelCardRequest): Promise<$_model.UpdateAiModelCardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAiModelCardWithOptions(modelCardId, request, headers, runtime);
  }

  /**
   * Updates an AI model provider.
   * 
   * @param request - UpdateAiModelProviderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAiModelProviderResponse
   */
  async updateAiModelProviderWithOptions(modelProviderId: string, request: $_model.UpdateAiModelProviderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAiModelProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.serviceIds)) {
      body["serviceIds"] = request.serviceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAiModelProvider",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/ai-model-providers/${$dara.URL.percentEncode(modelProviderId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAiModelProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAiModelProviderResponse({}));
  }

  /**
   * Updates an AI model provider.
   * 
   * @param request - UpdateAiModelProviderRequest
   * @returns UpdateAiModelProviderResponse
   */
  async updateAiModelProvider(modelProviderId: string, request: $_model.UpdateAiModelProviderRequest): Promise<$_model.UpdateAiModelProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAiModelProviderWithOptions(modelProviderId, request, headers, runtime);
  }

  /**
   * Updates and mounts a policy.
   * 
   * @param request - UpdateAndAttachPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAndAttachPolicyResponse
   */
  async updateAndAttachPolicyWithOptions(policyId: string, request: $_model.UpdateAndAttachPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAndAttachPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.attachResourceType)) {
      body["attachResourceType"] = request.attachResourceType;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.gatewayId)) {
      body["gatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAndAttachPolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAndAttachPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAndAttachPolicyResponse({}));
  }

  /**
   * Updates and mounts a policy.
   * 
   * @param request - UpdateAndAttachPolicyRequest
   * @returns UpdateAndAttachPolicyResponse
   */
  async updateAndAttachPolicy(policyId: string, request: $_model.UpdateAndAttachPolicyRequest): Promise<$_model.UpdateAndAttachPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAndAttachPolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Updates an API consumer.
   * 
   * @param request - UpdateConsumerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerResponse
   */
  async updateConsumerWithOptions(consumerId: string, request: $_model.UpdateConsumerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akSkIdentityConfigs)) {
      body["akSkIdentityConfigs"] = request.akSkIdentityConfigs;
    }

    if (!$dara.isNull(request.apikeyIdentityConfig)) {
      body["apikeyIdentityConfig"] = request.apikeyIdentityConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.jwtIdentityConfig)) {
      body["jwtIdentityConfig"] = request.jwtIdentityConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerResponse({}));
  }

  /**
   * Updates an API consumer.
   * 
   * @param request - UpdateConsumerRequest
   * @returns UpdateConsumerResponse
   */
  async updateConsumer(consumerId: string, request: $_model.UpdateConsumerRequest): Promise<$_model.UpdateConsumerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerWithOptions(consumerId, request, headers, runtime);
  }

  /**
   * Updates a consumer authorization rule.
   * 
   * @param request - UpdateConsumerAuthorizationRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerAuthorizationRuleResponse
   */
  async updateConsumerAuthorizationRuleWithOptions(consumerId: string, consumerAuthorizationRuleId: string, request: $_model.UpdateConsumerAuthorizationRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerAuthorizationRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizationResourceInfos)) {
      body["authorizationResourceInfos"] = request.authorizationResourceInfos;
    }

    if (!$dara.isNull(request.expireMode)) {
      body["expireMode"] = request.expireMode;
    }

    if (!$dara.isNull(request.expireTimestamp)) {
      body["expireTimestamp"] = request.expireTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerAuthorizationRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumers/${$dara.URL.percentEncode(consumerId)}/authorization-rules/${$dara.URL.percentEncode(consumerAuthorizationRuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerAuthorizationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerAuthorizationRuleResponse({}));
  }

  /**
   * Updates a consumer authorization rule.
   * 
   * @param request - UpdateConsumerAuthorizationRuleRequest
   * @returns UpdateConsumerAuthorizationRuleResponse
   */
  async updateConsumerAuthorizationRule(consumerId: string, consumerAuthorizationRuleId: string, request: $_model.UpdateConsumerAuthorizationRuleRequest): Promise<$_model.UpdateConsumerAuthorizationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerAuthorizationRuleWithOptions(consumerId, consumerAuthorizationRuleId, request, headers, runtime);
  }

  /**
   * Updates a consumer group.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(consumerGroupId: string, request: $_model.UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerGroup",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/consumer-groups/${$dara.URL.percentEncode(consumerGroupId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConsumerGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConsumerGroupResponse({}));
  }

  /**
   * Updates a consumer group.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(consumerGroupId: string, request: $_model.UpdateConsumerGroupRequest): Promise<$_model.UpdateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(consumerGroupId, request, headers, runtime);
  }

  /**
   * Updates a domain name.
   * 
   * @remarks
   * Only sources of the **Container Service** type allow you to update the listener Ingress configuration.
   * 
   * @param request - UpdateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDomainResponse
   */
  async updateDomainWithOptions(domainId: string, request: $_model.UpdateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.caCertIdentifier)) {
      body["caCertIdentifier"] = request.caCertIdentifier;
    }

    if (!$dara.isNull(request.certIdentifier)) {
      body["certIdentifier"] = request.certIdentifier;
    }

    if (!$dara.isNull(request.clientCACert)) {
      body["clientCACert"] = request.clientCACert;
    }

    if (!$dara.isNull(request.domainScope)) {
      body["domainScope"] = request.domainScope;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["forceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.http2Option)) {
      body["http2Option"] = request.http2Option;
    }

    if (!$dara.isNull(request.mTLSEnabled)) {
      body["mTLSEnabled"] = request.mTLSEnabled;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.tlsCipherSuitesConfig)) {
      body["tlsCipherSuitesConfig"] = request.tlsCipherSuitesConfig;
    }

    if (!$dara.isNull(request.tlsMax)) {
      body["tlsMax"] = request.tlsMax;
    }

    if (!$dara.isNull(request.tlsMin)) {
      body["tlsMin"] = request.tlsMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDomain",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/domains/${$dara.URL.percentEncode(domainId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDomainResponse({}));
  }

  /**
   * Updates a domain name.
   * 
   * @remarks
   * Only sources of the **Container Service** type allow you to update the listener Ingress configuration.
   * 
   * @param request - UpdateDomainRequest
   * @returns UpdateDomainResponse
   */
  async updateDomain(domainId: string, request: $_model.UpdateDomainRequest): Promise<$_model.UpdateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDomainWithOptions(domainId, request, headers, runtime);
  }

  /**
   * Updates an environment.
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(environmentId: string, request: $_model.UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvironmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/environments/${$dara.URL.percentEncode(environmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvironmentResponse({}));
  }

  /**
   * Updates an environment.
   * 
   * @deprecated OpenAPI UpdateEnvironment is deprecated
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  // Deprecated
  async updateEnvironment(environmentId: string, request: $_model.UpdateEnvironmentRequest): Promise<$_model.UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(environmentId, request, headers, runtime);
  }

  /**
   * Updates the attribute parameters of a gateway.
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeatureWithOptions(gatewayId: string, name: string, request: $_model.UpdateGatewayFeatureRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayFeature",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/gateway-features/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayFeatureResponse({}));
  }

  /**
   * Updates the attribute parameters of a gateway.
   * 
   * @param request - UpdateGatewayFeatureRequest
   * @returns UpdateGatewayFeatureResponse
   */
  async updateGatewayFeature(gatewayId: string, name: string, request: $_model.UpdateGatewayFeatureRequest): Promise<$_model.UpdateGatewayFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayFeatureWithOptions(gatewayId, name, request, headers, runtime);
  }

  /**
   * Modifies the name of a gateway.
   * 
   * @deprecated OpenAPI UpdateGatewayName is deprecated
   * 
   * @param request - UpdateGatewayNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayNameResponse
   */
  async updateGatewayNameWithOptions(gatewayId: string, request: $_model.UpdateGatewayNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayName",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayNameResponse({}));
  }

  /**
   * Modifies the name of a gateway.
   * 
   * @deprecated OpenAPI UpdateGatewayName is deprecated
   * 
   * @param request - UpdateGatewayNameRequest
   * @returns UpdateGatewayNameResponse
   */
  // Deprecated
  async updateGatewayName(gatewayId: string, request: $_model.UpdateGatewayNameRequest): Promise<$_model.UpdateGatewayNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayNameWithOptions(gatewayId, request, headers, runtime);
  }

  /**
   * Edits a quota throttling rule on a gateway.
   * 
   * @remarks
   * Edits a quota rule on a gateway. This operation takes effect only on AI gateways with a version later than 2.1.19. Editing a rule preserves the historical usage of consumers on the rule.
   * >  Recommended call logic:
   * > - Step 1: Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with conflictHash.
   * > - Step 2: Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - UpdateGatewayQuotaRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayQuotaRuleResponse
   */
  async updateGatewayQuotaRuleWithOptions(gatewayId: string, ruleId: string, request: $_model.UpdateGatewayQuotaRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayQuotaRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addIds)) {
      body["addIds"] = request.addIds;
    }

    if (!$dara.isNull(request.conflictHash)) {
      body["conflictHash"] = request.conflictHash;
    }

    if (!$dara.isNull(request.consumerGroupIds)) {
      body["consumerGroupIds"] = request.consumerGroupIds;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.quotaLimit)) {
      body["quotaLimit"] = request.quotaLimit;
    }

    if (!$dara.isNull(request.removeIds)) {
      body["removeIds"] = request.removeIds;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["ruleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayQuotaRule",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayQuotaRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayQuotaRuleResponse({}));
  }

  /**
   * Edits a quota throttling rule on a gateway.
   * 
   * @remarks
   * Edits a quota rule on a gateway. This operation takes effect only on AI gateways with a version later than 2.1.19. Editing a rule preserves the historical usage of consumers on the rule.
   * >  Recommended call logic:
   * > - Step 1: Perform a dry run to check for rule conflicts.
   * > - - Set dryRun to true.
   * > - - The response contains a conflict preview with conflictHash.
   * > - Step 2: Submit the request after confirmation.
   * > - - No conflicts: Set dryRun to false and overwrite to false.
   * > - - Conflicts exist and you confirm the overwrite: Set dryRun to false, overwrite to true, and conflictHash to the value returned in the previous step.
   * 
   * @param request - UpdateGatewayQuotaRuleRequest
   * @returns UpdateGatewayQuotaRuleResponse
   */
  async updateGatewayQuotaRule(gatewayId: string, ruleId: string, request: $_model.UpdateGatewayQuotaRuleRequest): Promise<$_model.UpdateGatewayQuotaRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayQuotaRuleWithOptions(gatewayId, ruleId, request, headers, runtime);
  }

  /**
   * Enables or disables a quota throttling rule for a gateway.
   * 
   * @remarks
   * Enables or disables a quota rule on a gateway. This operation takes effect only for AI gateways with a version later than 2.1.19.
   * 
   * @param request - UpdateGatewayQuotaRuleStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayQuotaRuleStatusResponse
   */
  async updateGatewayQuotaRuleStatusWithOptions(gatewayId: string, ruleId: string, request: $_model.UpdateGatewayQuotaRuleStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayQuotaRuleStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clearHistory)) {
      body["clearHistory"] = request.clearHistory;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGatewayQuotaRuleStatus",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/quota-rules/${$dara.URL.percentEncode(ruleId)}/status`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayQuotaRuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayQuotaRuleStatusResponse({}));
  }

  /**
   * Enables or disables a quota throttling rule for a gateway.
   * 
   * @remarks
   * Enables or disables a quota rule on a gateway. This operation takes effect only for AI gateways with a version later than 2.1.19.
   * 
   * @param request - UpdateGatewayQuotaRuleStatusRequest
   * @returns UpdateGatewayQuotaRuleStatusResponse
   */
  async updateGatewayQuotaRuleStatus(gatewayId: string, ruleId: string, request: $_model.UpdateGatewayQuotaRuleStatusRequest): Promise<$_model.UpdateGatewayQuotaRuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayQuotaRuleStatusWithOptions(gatewayId, ruleId, request, headers, runtime);
  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApiWithOptions(httpApiId: string, request: $_model.UpdateHttpApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentProtocols)) {
      body["agentProtocols"] = request.agentProtocols;
    }

    if (!$dara.isNull(request.aiProtocols)) {
      body["aiProtocols"] = request.aiProtocols;
    }

    if (!$dara.isNull(request.authConfig)) {
      body["authConfig"] = request.authConfig;
    }

    if (!$dara.isNull(request.basePath)) {
      body["basePath"] = request.basePath;
    }

    if (!$dara.isNull(request.deployConfigs)) {
      body["deployConfigs"] = request.deployConfigs;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.enableAuth)) {
      body["enableAuth"] = request.enableAuth;
    }

    if (!$dara.isNull(request.firstByteTimeout)) {
      body["firstByteTimeout"] = request.firstByteTimeout;
    }

    if (!$dara.isNull(request.ingressConfig)) {
      body["ingressConfig"] = request.ingressConfig;
    }

    if (!$dara.isNull(request.onlyChangeConfig)) {
      body["onlyChangeConfig"] = request.onlyChangeConfig;
    }

    if (!$dara.isNull(request.protocols)) {
      body["protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.removeBasePathOnForward)) {
      body["removeBasePathOnForward"] = request.removeBasePathOnForward;
    }

    if (!$dara.isNull(request.versionConfig)) {
      body["versionConfig"] = request.versionConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApi",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiResponse({}));
  }

  /**
   * Updates an HTTP API.
   * 
   * @param request - UpdateHttpApiRequest
   * @returns UpdateHttpApiResponse
   */
  async updateHttpApi(httpApiId: string, request: $_model.UpdateHttpApiRequest): Promise<$_model.UpdateHttpApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiWithOptions(httpApiId, request, headers, runtime);
  }

  /**
   * Updates an API operation.
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperationWithOptions(httpApiId: string, operationId: string, request: $_model.UpdateHttpApiOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operation)) {
      body["operation"] = request.operation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiOperation",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/operations/${$dara.URL.percentEncode(operationId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiOperationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiOperationResponse({}));
  }

  /**
   * Updates an API operation.
   * 
   * @param request - UpdateHttpApiOperationRequest
   * @returns UpdateHttpApiOperationResponse
   */
  async updateHttpApiOperation(httpApiId: string, operationId: string, request: $_model.UpdateHttpApiOperationRequest): Promise<$_model.UpdateHttpApiOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiOperationWithOptions(httpApiId, operationId, request, headers, runtime);
  }

  /**
   * Updates a route of an HttpApi.
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRouteWithOptions(httpApiId: string, routeId: string, request: $_model.UpdateHttpApiRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpApiRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.environmentId)) {
      body["environmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpRouteConfig)) {
      body["mcpRouteConfig"] = request.mcpRouteConfig;
    }

    if (!$dara.isNull(request.policyConfigs)) {
      body["policyConfigs"] = request.policyConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpApiRoute",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/http-apis/${$dara.URL.percentEncode(httpApiId)}/routes/${$dara.URL.percentEncode(routeId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpApiRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpApiRouteResponse({}));
  }

  /**
   * Updates a route of an HttpApi.
   * 
   * @param request - UpdateHttpApiRouteRequest
   * @returns UpdateHttpApiRouteResponse
   */
  async updateHttpApiRoute(httpApiId: string, routeId: string, request: $_model.UpdateHttpApiRouteRequest): Promise<$_model.UpdateHttpApiRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHttpApiRouteWithOptions(httpApiId, routeId, request, headers, runtime);
  }

  /**
   * Updates an MCP server.
   * 
   * @remarks
   * Only sources of the **Container Service** type can update the Ingress listener configuration.
   * 
   * @param request - UpdateMcpServerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMcpServerResponse
   */
  async updateMcpServerWithOptions(mcpServerId: string, request: $_model.UpdateMcpServerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMcpServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assembledSources)) {
      body["assembledSources"] = request.assembledSources;
    }

    if (!$dara.isNull(request.backendConfig)) {
      body["backendConfig"] = request.backendConfig;
    }

    if (!$dara.isNull(request.createFromType)) {
      body["createFromType"] = request.createFromType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domainIds)) {
      body["domainIds"] = request.domainIds;
    }

    if (!$dara.isNull(request.exposedUriPath)) {
      body["exposedUriPath"] = request.exposedUriPath;
    }

    if (!$dara.isNull(request.grayMcpServerConfigs)) {
      body["grayMcpServerConfigs"] = request.grayMcpServerConfigs;
    }

    if (!$dara.isNull(request.match)) {
      body["match"] = request.match;
    }

    if (!$dara.isNull(request.mcpServerConfig)) {
      body["mcpServerConfig"] = request.mcpServerConfig;
    }

    if (!$dara.isNull(request.mcpStatisticsEnable)) {
      body["mcpStatisticsEnable"] = request.mcpStatisticsEnable;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMcpServer",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/mcp-servers/${$dara.URL.percentEncode(mcpServerId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMcpServerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMcpServerResponse({}));
  }

  /**
   * Updates an MCP server.
   * 
   * @remarks
   * Only sources of the **Container Service** type can update the Ingress listener configuration.
   * 
   * @param request - UpdateMcpServerRequest
   * @returns UpdateMcpServerResponse
   */
  async updateMcpServer(mcpServerId: string, request: $_model.UpdateMcpServerRequest): Promise<$_model.UpdateMcpServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMcpServerWithOptions(mcpServerId, request, headers, runtime);
  }

  /**
   * Updates a plugin mount.
   * 
   * @param request - UpdatePluginAttachmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePluginAttachmentResponse
   */
  async updatePluginAttachmentWithOptions(pluginAttachmentId: string, request: $_model.UpdatePluginAttachmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePluginAttachmentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachResourceIds)) {
      body["attachResourceIds"] = request.attachResourceIds;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.pluginConfig)) {
      body["pluginConfig"] = request.pluginConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePluginAttachment",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/plugin-attachments/${$dara.URL.percentEncode(pluginAttachmentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePluginAttachmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePluginAttachmentResponse({}));
  }

  /**
   * Updates a plugin mount.
   * 
   * @param request - UpdatePluginAttachmentRequest
   * @returns UpdatePluginAttachmentResponse
   */
  async updatePluginAttachment(pluginAttachmentId: string, request: $_model.UpdatePluginAttachmentRequest): Promise<$_model.UpdatePluginAttachmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePluginAttachmentWithOptions(pluginAttachmentId, request, headers, runtime);
  }

  /**
   * Updates a policy.
   * 
   * @param request - UpdatePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(policyId: string, request: $_model.UpdatePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePolicy",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v2/policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyResponse({}));
  }

  /**
   * Updates a policy.
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(policyId: string, request: $_model.UpdatePolicyRequest): Promise<$_model.UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePolicyWithOptions(policyId, request, headers, runtime);
  }

  /**
   * Updates a key pair.
   * 
   * @remarks
   * Only sources of the **container service** type allow you to update the configuration for listening to Ingress.
   * 
   * @param request - UpdateSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretResponse
   */
  async updateSecretWithOptions(secretId: string, request: $_model.UpdateSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.secretData)) {
      body["secretData"] = request.secretData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecret",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/secrets/${$dara.URL.percentEncode(secretId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecretResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretResponse({}));
  }

  /**
   * Updates a key pair.
   * 
   * @remarks
   * Only sources of the **container service** type allow you to update the configuration for listening to Ingress.
   * 
   * @param request - UpdateSecretRequest
   * @returns UpdateSecretResponse
   */
  async updateSecret(secretId: string, request: $_model.UpdateSecretRequest): Promise<$_model.UpdateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSecretWithOptions(secretId, request, headers, runtime);
  }

  /**
   * Updates a service. You can update the health check configuration, DNS domain name, and address configuration of fixed addresses for the service.
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(serviceId: string, request: $_model.UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addresses)) {
      body["addresses"] = request.addresses;
    }

    if (!$dara.isNull(request.agentServiceConfig)) {
      body["agentServiceConfig"] = request.agentServiceConfig;
    }

    if (!$dara.isNull(request.aiServiceConfig)) {
      body["aiServiceConfig"] = request.aiServiceConfig;
    }

    if (!$dara.isNull(request.dnsServers)) {
      body["dnsServers"] = request.dnsServers;
    }

    if (!$dara.isNull(request.healthCheckConfig)) {
      body["healthCheckConfig"] = request.healthCheckConfig;
    }

    if (!$dara.isNull(request.healthyPanicThreshold)) {
      body["healthyPanicThreshold"] = request.healthyPanicThreshold;
    }

    if (!$dara.isNull(request.modelProviderId)) {
      body["modelProviderId"] = request.modelProviderId;
    }

    if (!$dara.isNull(request.outlierDetectionConfig)) {
      body["outlierDetectionConfig"] = request.outlierDetectionConfig;
    }

    if (!$dara.isNull(request.ports)) {
      body["ports"] = request.ports;
    }

    if (!$dara.isNull(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceResponse({}));
  }

  /**
   * Updates a service. You can update the health check configuration, DNS domain name, and address configuration of fixed addresses for the service.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(serviceId: string, request: $_model.UpdateServiceRequest): Promise<$_model.UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(serviceId, request, headers, runtime);
  }

  /**
   * Updates a service version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersionWithOptions(serviceId: string, name: string, request: $_model.UpdateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceVersion",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/services/${$dara.URL.percentEncode(serviceId)}/versions/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceVersionResponse({}));
  }

  /**
   * Updates a service version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersion(serviceId: string, name: string, request: $_model.UpdateServiceVersionRequest): Promise<$_model.UpdateServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(serviceId, name, request, headers, runtime);
  }

  /**
   * Upgrades the gateway version.
   * 
   * @param request - UpgradeGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeGatewayResponse
   */
  async upgradeGatewayWithOptions(gatewayId: string, request: $_model.UpgradeGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeGateway",
      version: "2024-03-27",
      protocol: "HTTPS",
      pathname: `/v1/gateways/${$dara.URL.percentEncode(gatewayId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeGatewayResponse({}));
  }

  /**
   * Upgrades the gateway version.
   * 
   * @param request - UpgradeGatewayRequest
   * @returns UpgradeGatewayResponse
   */
  async upgradeGateway(gatewayId: string, request: $_model.UpgradeGatewayRequest): Promise<$_model.UpgradeGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeGatewayWithOptions(gatewayId, request, headers, runtime);
  }

}
