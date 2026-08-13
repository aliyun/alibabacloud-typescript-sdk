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
      'ap-southeast-1': "starrocks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "starrocks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "starrocks.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "starrocks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "starrocks.cn-hongkong.aliyuncs.com",
      'cn-qingdao': "starrocks.cn-qingdao.aliyuncs.com",
      'cn-shanghai': "starrocks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "starrocks.cn-shenzhen.aliyuncs.com",
      'cn-wulanchabu': "starrocks.cn-wulanchabu.aliyuncs.com",
      'cn-zhangjiakou': "starrocks.cn-zhangjiakou.aliyuncs.com",
      'us-west-1': "starrocks.us-west-1.aliyuncs.com",
      'us-east-1': "starrocks.us-east-1.aliyuncs.com",
      'eu-central-1': "starrocks.eu-central-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("starrocks", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a backup policy.
   * 
   * @param request - AddBackupPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBackupPolicyResponse
   */
  async addBackupPolicyWithOptions(request: $_model.AddBackupPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddBackupPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireDays)) {
      body["ExpireDays"] = request.expireDays;
    }

    if (!$dara.isNull(request.hour)) {
      body["Hour"] = request.hour;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minute)) {
      body["Minute"] = request.minute;
    }

    if (!$dara.isNull(request.recurrenceType)) {
      body["RecurrenceType"] = request.recurrenceType;
    }

    if (!$dara.isNull(request.recurrenceValues)) {
      body["RecurrenceValues"] = request.recurrenceValues;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      body["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBackupPolicy",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backupRestore/policy/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.AddBackupPolicyResponse({}));
  }

  /**
   * Adds a backup policy.
   * 
   * @param request - AddBackupPolicyRequest
   * @returns AddBackupPolicyResponse
   */
  async addBackupPolicy(request: $_model.AddBackupPolicyRequest): Promise<$_model.AddBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addBackupPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates a gateway.
   * 
   * @remarks
   * The AddGateway operation requires software stack version 1.7.6 or later and at least three front-end (FE) nodes.
   * 
   * @param request - AddGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGatewayResponse
   */
  async addGatewayWithOptions(request: $_model.AddGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feNodeNumber)) {
      query["FeNodeNumber"] = request.feNodeNumber;
    }

    if (!$dara.isNull(request.gatewayName)) {
      query["GatewayName"] = request.gatewayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGateway",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGatewayResponse>(await this.callApi(params, req, runtime), new $_model.AddGatewayResponse({}));
  }

  /**
   * Creates a gateway.
   * 
   * @remarks
   * The AddGateway operation requires software stack version 1.7.6 or later and at least three front-end (FE) nodes.
   * 
   * @param request - AddGatewayRequest
   * @returns AddGatewayResponse
   */
  async addGateway(request: $_model.AddGatewayRequest): Promise<$_model.AddGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addGatewayWithOptions(request, headers, runtime);
  }

  /**
   * This operation changes the resource group of a Serverless StarRocks instance.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceGroup/change`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * This operation changes the resource group of a Serverless StarRocks instance.
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
   * Check the inventory of resources.
   * 
   * @param request - CheckInventoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInventoryResponse
   */
  async checkInventoryWithOptions(request: $_model.CheckInventoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInventoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterInfo)) {
      query["ClusterInfo"] = request.clusterInfo;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInventory",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/check/inventory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInventoryResponse>(await this.callApi(params, req, runtime), new $_model.CheckInventoryResponse({}));
  }

  /**
   * Check the inventory of resources.
   * 
   * @param request - CheckInventoryRequest
   * @returns CheckInventoryResponse
   */
  async checkInventory(request: $_model.CheckInventoryRequest): Promise<$_model.CheckInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInventoryWithOptions(request, headers, runtime);
  }

  /**
   * Creates an Agent compute group.
   * 
   * @param request - CreateAgentResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentResourceResponse
   */
  async createAgentResourceWithOptions(request: $_model.CreateAgentResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.cu)) {
      query["Cu"] = request.cu;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.specType)) {
      query["SpecType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentResource",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/lifecycle/createAgentNodeGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentResourceResponse({}));
  }

  /**
   * Creates an Agent compute group.
   * 
   * @param request - CreateAgentResourceRequest
   * @returns CreateAgentResourceResponse
   */
  async createAgentResource(request: $_model.CreateAgentResourceRequest): Promise<$_model.CreateAgentResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing method and <props="china">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * 
   * @param request - CreateInstanceV1Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceV1Response
   */
  async createInstanceV1WithOptions(request: $_model.CreateInstanceV1Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceV1Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adminPassword)) {
      body["AdminPassword"] = request.adminPassword;
    }

    if (!$dara.isNull(request.agentNodeGroup)) {
      body["AgentNodeGroup"] = request.agentNodeGroup;
    }

    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backendNodeGroups)) {
      body["BackendNodeGroups"] = request.backendNodeGroups;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dlfCatalogName)) {
      body["DlfCatalogName"] = request.dlfCatalogName;
    }

    if (!$dara.isNull(request.dlfCatalogType)) {
      body["DlfCatalogType"] = request.dlfCatalogType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.enableAiFunction)) {
      body["EnableAiFunction"] = request.enableAiFunction;
    }

    if (!$dara.isNull(request.enableMultiAz)) {
      body["EnableMultiAz"] = request.enableMultiAz;
    }

    if (!$dara.isNull(request.encrypted)) {
      body["Encrypted"] = request.encrypted;
    }

    if (!$dara.isNull(request.frontendNodeGroups)) {
      body["FrontendNodeGroups"] = request.frontendNodeGroups;
    }

    if (!$dara.isNull(request.gatewayType)) {
      body["GatewayType"] = request.gatewayType;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      body["KmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.linkedRamUserName)) {
      body["LinkedRamUserName"] = request.linkedRamUserName;
    }

    if (!$dara.isNull(request.observerNodeGroups)) {
      body["ObserverNodeGroups"] = request.observerNodeGroups;
    }

    if (!$dara.isNull(request.ossAccessingRoleName)) {
      body["OssAccessingRoleName"] = request.ossAccessingRoleName;
    }

    if (!$dara.isNull(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.payType)) {
      body["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      body["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.ramUserId)) {
      body["RamUserId"] = request.ramUserId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.runMode)) {
      body["RunMode"] = request.runMode;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.vSwitches)) {
      body["VSwitches"] = request.vSwitches;
    }

    if (!$dara.isNull(request.version)) {
      body["Version"] = request.version;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceV1",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/createV1`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceV1Response>(await this.callApi(params, req, runtime), new $_model.CreateInstanceV1Response({}));
  }

  /**
   * Creates a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing method and <props="china">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * 
   * @param request - CreateInstanceV1Request
   * @returns CreateInstanceV1Response
   */
  async createInstanceV1(request: $_model.CreateInstanceV1Request): Promise<$_model.CreateInstanceV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceV1WithOptions(request, headers, runtime);
  }

  /**
   * Create a scaling rule.
   * 
   * @param request - CreateScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScalingRuleResponse
   */
  async createScalingRuleWithOptions(request: $_model.CreateScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScalingRule",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/scalingRule/createScalingRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateScalingRuleResponse({}));
  }

  /**
   * Create a scaling rule.
   * 
   * @param request - CreateScalingRuleRequest
   * @returns CreateScalingRuleResponse
   */
  async createScalingRule(request: $_model.CreateScalingRuleRequest): Promise<$_model.CreateScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * This operation creates the AliyunServiceRoleForEMRStarRocks role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/user/create_default_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleResponse({}));
  }

  /**
   * This operation creates the AliyunServiceRoleForEMRStarRocks role.
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceLinkedRoleWithOptions(headers, runtime);
  }

  /**
   * Deletes a data backup.
   * 
   * @remarks
   * Deletes a data backup.
   * 
   * @param request - DeleteBackupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupResponse
   */
  async deleteBackupWithOptions(request: $_model.DeleteBackupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupTaskId)) {
      query["BackupTaskId"] = request.backupTaskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backup/manage/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupResponse({}));
  }

  /**
   * Deletes a data backup.
   * 
   * @remarks
   * Deletes a data backup.
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBackupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * Deletes a backup policy.
   * 
   * @param request - DeleteBackupPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicyWithOptions(request: $_model.DeleteBackupPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupPolicy",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backupRestore/policy/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupPolicyResponse({}));
  }

  /**
   * Deletes a backup policy.
   * 
   * @remarks
   * Deletes a backup policy.
   * 
   * @param request - DeleteBackupPolicyRequest
   * @returns DeleteBackupPolicyResponse
   */
  async deleteBackupPolicy(request: $_model.DeleteBackupPolicyRequest): Promise<$_model.DeleteBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBackupPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Deleting a gateway
   * 
   * @remarks
   * Deletes a gateway group. After the gateway group is deleted, its FE nodes are automatically assigned to the default gateway group.
   * 
   * @param request - DeleteGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(request: $_model.DeleteGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayResponse({}));
  }

  /**
   * Deleting a gateway
   * 
   * @remarks
   * Deletes a gateway group. After the gateway group is deleted, its FE nodes are automatically assigned to the default gateway group.
   * 
   * @param request - DeleteGatewayRequest
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(request: $_model.DeleteGatewayRequest): Promise<$_model.DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an internal network whitelist group.
   * 
   * @param request - DeleteInnerIpWhitelistGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInnerIpWhitelistGroupResponse
   */
  async deleteInnerIpWhitelistGroupWithOptions(request: $_model.DeleteInnerIpWhitelistGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInnerIpWhitelistGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.innerIpWhitelistGroupId)) {
      body["InnerIpWhitelistGroupId"] = request.innerIpWhitelistGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInnerIpWhitelistGroup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/securityGroup/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInnerIpWhitelistGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInnerIpWhitelistGroupResponse({}));
  }

  /**
   * Deletes an internal network whitelist group.
   * 
   * @param request - DeleteInnerIpWhitelistGroupRequest
   * @returns DeleteInnerIpWhitelistGroupResponse
   */
  async deleteInnerIpWhitelistGroup(request: $_model.DeleteInnerIpWhitelistGroupRequest): Promise<$_model.DeleteInnerIpWhitelistGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInnerIpWhitelistGroupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a scaling rule.
   * 
   * @param request - DeleteScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScalingRuleResponse
   */
  async deleteScalingRuleWithOptions(request: $_model.DeleteScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScalingRule",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/scalingRule/deleteScalingRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScalingRuleResponse({}));
  }

  /**
   * Deletes a scaling rule.
   * 
   * @param request - DeleteScalingRuleRequest
   * @returns DeleteScalingRuleResponse
   */
  async deleteScalingRule(request: $_model.DeleteScalingRuleRequest): Promise<$_model.DeleteScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Queries the available zones in a region.
   * 
   * @param request - DescribeAvailableZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableZonesResponse
   */
  async describeAvailableZonesWithOptions(request: $_model.DescribeAvailableZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableZonesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableZones",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/zone/describeZones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableZonesResponse({}));
  }

  /**
   * Queries the available zones in a region.
   * 
   * @param request - DescribeAvailableZonesRequest
   * @returns DescribeAvailableZonesResponse
   */
  async describeAvailableZones(request: $_model.DescribeAvailableZonesRequest): Promise<$_model.DescribeAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAvailableZonesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve details of backup policies.
   * 
   * @remarks
   * Retrieve details of backup policies.
   * 
   * @param request - DescribeBackupPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPoliciesResponse
   */
  async describeBackupPoliciesWithOptions(request: $_model.DescribeBackupPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicies",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backupRestore/policy/describe`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPoliciesResponse({}));
  }

  /**
   * Retrieve details of backup policies.
   * 
   * @remarks
   * Retrieve details of backup policies.
   * 
   * @param request - DescribeBackupPoliciesRequest
   * @returns DescribeBackupPoliciesResponse
   */
  async describeBackupPolicies(request: $_model.DescribeBackupPoliciesRequest): Promise<$_model.DescribeBackupPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBackupPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * Obtain backup details
   * 
   * @remarks
   * This is an asynchronous interface. Instance restarts are not immediate. After a successful call, the instance first enters the restarting state. The instance is successfully restarted when its status returns to running.
   * 
   * @param request - DescribeBackupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupTaskId)) {
      query["BackupTaskId"] = request.backupTaskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!$dara.isNull(request.timePeriodEndTime)) {
      query["TimePeriodEndTime"] = request.timePeriodEndTime;
    }

    if (!$dara.isNull(request.timePeriodStartTime)) {
      query["TimePeriodStartTime"] = request.timePeriodStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backup/manage/describe`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupsResponse({}));
  }

  /**
   * Obtain backup details
   * 
   * @remarks
   * This is an asynchronous interface. Instance restarts are not immediate. After a successful call, the instance first enters the restarting state. The instance is successfully restarted when its status returns to running.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBackupsWithOptions(request, headers, runtime);
  }

  /**
   * Querying instance configuration history
   * 
   * @remarks
   * This is an asynchronous API, meaning the instance restart is not immediate. After a successful call, the instance enters the `restarting` state, and the process completes when its state changes to `running`.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistoryWithOptions(request: $_model.DescribeConfigHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.effectStatuses)) {
      query["EffectStatuses"] = request.effectStatuses;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needTotal)) {
      query["NeedTotal"] = request.needTotal;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigHistory",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/config/describeConfigHistory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigHistoryResponse({}));
  }

  /**
   * Querying instance configuration history
   * 
   * @remarks
   * This is an asynchronous API, meaning the instance restart is not immediate. After a successful call, the instance enters the `restarting` state, and the process completes when its state changes to `running`.
   * 
   * @param request - DescribeConfigHistoryRequest
   * @returns DescribeConfigHistoryResponse
   */
  async describeConfigHistory(request: $_model.DescribeConfigHistoryRequest): Promise<$_model.DescribeConfigHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the cluster event name.
   * 
   * @param request - DescribeEventNamesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventNamesResponse
   */
  async describeEventNamesWithOptions(request: $_model.DescribeEventNamesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventNamesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventNames",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/event/describeEventNames`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventNamesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventNamesResponse({}));
  }

  /**
   * Retrieve the cluster event name.
   * 
   * @param request - DescribeEventNamesRequest
   * @returns DescribeEventNamesResponse
   */
  async describeEventNames(request: $_model.DescribeEventNamesRequest): Promise<$_model.DescribeEventNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventNamesWithOptions(request, headers, runtime);
  }

  /**
   * Describes the whitelist groups for a private network.
   * 
   * @param request - DescribeInnerIpWhitelistGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInnerIpWhitelistGroupsResponse
   */
  async describeInnerIpWhitelistGroupsWithOptions(request: $_model.DescribeInnerIpWhitelistGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInnerIpWhitelistGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInnerIpWhitelistGroups",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/securityGroup/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInnerIpWhitelistGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInnerIpWhitelistGroupsResponse({}));
  }

  /**
   * Describes the whitelist groups for a private network.
   * 
   * @param request - DescribeInnerIpWhitelistGroupsRequest
   * @returns DescribeInnerIpWhitelistGroupsResponse
   */
  async describeInnerIpWhitelistGroups(request: $_model.DescribeInnerIpWhitelistGroupsRequest): Promise<$_model.DescribeInnerIpWhitelistGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInnerIpWhitelistGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries instance configurations.
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigsWithOptions(request: $_model.DescribeInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowModify)) {
      query["AllowModify"] = request.allowModify;
    }

    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.needTotal)) {
      query["NeedTotal"] = request.needTotal;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceConfigs",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/config/describeInstanceConfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceConfigsResponse({}));
  }

  /**
   * Queries instance configurations.
   * 
   * @param request - DescribeInstanceConfigsRequest
   * @returns DescribeInstanceConfigsResponse
   */
  async describeInstanceConfigs(request: $_model.DescribeInstanceConfigsRequest): Promise<$_model.DescribeInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve instance health diagnosis results.
   * 
   * @param request - DescribeInstanceDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceDiagnosisResultResponse
   */
  async describeInstanceDiagnosisResultWithOptions(request: $_model.DescribeInstanceDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceDiagnosisResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reportDate)) {
      query["ReportDate"] = request.reportDate;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceDiagnosisResult",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/diagnosis/describe`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceDiagnosisResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceDiagnosisResultResponse({}));
  }

  /**
   * Retrieve instance health diagnosis results.
   * 
   * @param request - DescribeInstanceDiagnosisResultRequest
   * @returns DescribeInstanceDiagnosisResultResponse
   */
  async describeInstanceDiagnosisResult(request: $_model.DescribeInstanceDiagnosisResultRequest): Promise<$_model.DescribeInstanceDiagnosisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceDiagnosisResultWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the meta token for a StarRocks instance.
   * 
   * @param request - DescribeInstanceMetaTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceMetaTokenResponse
   */
  async describeInstanceMetaTokenWithOptions(request: $_model.DescribeInstanceMetaTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceMetaTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceMetaToken",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/migration/getMetaToken`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceMetaTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceMetaTokenResponse({}));
  }

  /**
   * Obtains the meta token for a StarRocks instance.
   * 
   * @param request - DescribeInstanceMetaTokenRequest
   * @returns DescribeInstanceMetaTokenResponse
   */
  async describeInstanceMetaToken(request: $_model.DescribeInstanceMetaTokenRequest): Promise<$_model.DescribeInstanceMetaTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceMetaTokenWithOptions(request, headers, runtime);
  }

  /**
   * This operation queries Serverless StarRocks instances. You can filter the instances by criteria such as instance name and tags.
   * 
   * @param tmpReq - DescribeInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(tmpReq: $_model.DescribeInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/describeInstances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * This operation queries Serverless StarRocks instances. You can filter the instances by criteria such as instance name and tags.
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves node group information.
   * 
   * @param request - DescribeNodeGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeGroupsResponse
   */
  async describeNodeGroupsWithOptions(request: $_model.DescribeNodeGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentType)) {
      body["componentType"] = request.componentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupIds)) {
      body["nodeGroupIds"] = request.nodeGroupIds;
    }

    if (!$dara.isNull(request.nodeGroupName)) {
      body["nodeGroupName"] = request.nodeGroupName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
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
      action: "DescribeNodeGroups",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/nodegroup/describeNodeGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeGroupsResponse({}));
  }

  /**
   * Retrieves node group information.
   * 
   * @param request - DescribeNodeGroupsRequest
   * @returns DescribeNodeGroupsResponse
   */
  async describeNodeGroups(request: $_model.DescribeNodeGroupsRequest): Promise<$_model.DescribeNodeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNodeGroupsWithOptions(request, headers, runtime);
  }

  /**
   * You can view the list of available regions.
   * 
   * @remarks
   * This operation is asynchronous. After you call this operation, the instance enters a restarting state but does not restart immediately. The restart is complete when the instance status changes to running.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/region/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * You can view the list of available regions.
   * 
   * @remarks
   * This operation is asynchronous. After you call this operation, the instance enters a restarting state but does not restart immediately. The restart is complete when the instance status changes to running.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * Get resource constraint configurations.
   * 
   * @param request - DescribeResourceConstraintsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceConstraintsResponse
   */
  async describeResourceConstraintsWithOptions(request: $_model.DescribeResourceConstraintsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceConstraintsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.architecture)) {
      query["Architecture"] = request.architecture;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.runMode)) {
      query["RunMode"] = request.runMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceConstraints",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/describeResourceConstraints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceConstraintsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceConstraintsResponse({}));
  }

  /**
   * Get resource constraint configurations.
   * 
   * @param request - DescribeResourceConstraintsRequest
   * @returns DescribeResourceConstraintsResponse
   */
  async describeResourceConstraints(request: $_model.DescribeResourceConstraintsRequest): Promise<$_model.DescribeResourceConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceConstraintsWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the system time zone of a StarRocks instance
   * 
   * @param request - DescribeSystemTimezoneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemTimezoneResponse
   */
  async describeSystemTimezoneWithOptions(request: $_model.DescribeSystemTimezoneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemTimezoneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemTimezone",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/timezone/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemTimezoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemTimezoneResponse({}));
  }

  /**
   * Obtain the system time zone of a StarRocks instance
   * 
   * @param request - DescribeSystemTimezoneRequest
   * @returns DescribeSystemTimezoneResponse
   */
  async describeSystemTimezone(request: $_model.DescribeSystemTimezoneRequest): Promise<$_model.DescribeSystemTimezoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSystemTimezoneWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of time-triggered scaling rules.
   * 
   * @param request - DescribeTimeTriggerScalingRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTimeTriggerScalingRulesResponse
   */
  async describeTimeTriggerScalingRulesWithOptions(request: $_model.DescribeTimeTriggerScalingRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTimeTriggerScalingRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTimeTriggerScalingRules",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/scalingRule/describeTimeTriggerScalingRules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTimeTriggerScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTimeTriggerScalingRulesResponse({}));
  }

  /**
   * Retrieves the details of time-triggered scaling rules.
   * 
   * @param request - DescribeTimeTriggerScalingRulesRequest
   * @returns DescribeTimeTriggerScalingRulesResponse
   */
  async describeTimeTriggerScalingRules(request: $_model.DescribeTimeTriggerScalingRulesRequest): Promise<$_model.DescribeTimeTriggerScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTimeTriggerScalingRulesWithOptions(request, headers, runtime);
  }

  /**
   * Disables SSL for a StarRocks connection.
   * 
   * @param request - DisableSSLConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSSLConnectionResponse
   */
  async disableSSLConnectionWithOptions(request: $_model.DisableSSLConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSSLConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSSLConnection",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/disableSSLConnection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSSLConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DisableSSLConnectionResponse({}));
  }

  /**
   * Disables SSL for a StarRocks connection.
   * 
   * @param request - DisableSSLConnectionRequest
   * @returns DisableSSLConnectionResponse
   */
  async disableSSLConnection(request: $_model.DisableSSLConnectionRequest): Promise<$_model.DisableSSLConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSSLConnectionWithOptions(request, headers, runtime);
  }

  /**
   * Enables the internal Server Load Balancer (SLB) for the default gateway of an EMR Serverless StarRocks instance.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - EnableInternalSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInternalSlbResponse
   */
  async enableInternalSlbWithOptions(request: $_model.EnableInternalSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInternalSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInternalSlb",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/enableInternalSlb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInternalSlbResponse>(await this.callApi(params, req, runtime), new $_model.EnableInternalSlbResponse({}));
  }

  /**
   * Enables the internal Server Load Balancer (SLB) for the default gateway of an EMR Serverless StarRocks instance.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - EnableInternalSlbRequest
   * @returns EnableInternalSlbResponse
   */
  async enableInternalSlb(request: $_model.EnableInternalSlbRequest): Promise<$_model.EnableInternalSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableInternalSlbWithOptions(request, headers, runtime);
  }

  /**
   * Enables Multi-AZ deployment.
   * 
   * @param request - EnableMultiAzRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMultiAzResponse
   */
  async enableMultiAzWithOptions(request: $_model.EnableMultiAzRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableMultiAzResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.observers)) {
      body["observers"] = request.observers;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      body["promotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableMultiAz",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/lifecycle/enableMultiAz`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableMultiAzResponse>(await this.callApi(params, req, runtime), new $_model.EnableMultiAzResponse({}));
  }

  /**
   * Enables Multi-AZ deployment.
   * 
   * @param request - EnableMultiAzRequest
   * @returns EnableMultiAzResponse
   */
  async enableMultiAz(request: $_model.EnableMultiAzRequest): Promise<$_model.EnableMultiAzResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableMultiAzWithOptions(request, headers, runtime);
  }

  /**
   * Enables SSL for a StarRocks connection.
   * 
   * @remarks
   * You can call this operation only when the instance is in the Running state.
   * 
   * @param request - EnableSSLConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSSLConnectionResponse
   */
  async enableSSLConnectionWithOptions(request: $_model.EnableSSLConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSSLConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customSSLCertificate)) {
      body["CustomSSLCertificate"] = request.customSSLCertificate;
    }

    if (!$dara.isNull(request.enableCustom)) {
      body["EnableCustom"] = request.enableCustom;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.renewal)) {
      body["Renewal"] = request.renewal;
    }

    if (!$dara.isNull(request.sslKeyPassword)) {
      body["SslKeyPassword"] = request.sslKeyPassword;
    }

    if (!$dara.isNull(request.sslKeystorePassword)) {
      body["SslKeystorePassword"] = request.sslKeystorePassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSSLConnection",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/enableSSLConnection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSSLConnectionResponse>(await this.callApi(params, req, runtime), new $_model.EnableSSLConnectionResponse({}));
  }

  /**
   * Enables SSL for a StarRocks connection.
   * 
   * @remarks
   * You can call this operation only when the instance is in the Running state.
   * 
   * @param request - EnableSSLConnectionRequest
   * @returns EnableSSLConnectionResponse
   */
  async enableSSLConnection(request: $_model.EnableSSLConnectionRequest): Promise<$_model.EnableSSLConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSSLConnectionWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the feature gates for a StarRocks cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * 
   * @param request - GetInstanceFeatureGateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceFeatureGateResponse
   */
  async getInstanceFeatureGateWithOptions(request: $_model.GetInstanceFeatureGateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceFeatureGateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceFeatureGate",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/features/featureGate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceFeatureGateResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceFeatureGateResponse({}));
  }

  /**
   * Retrieves the feature gates for a StarRocks cluster instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * 
   * @param request - GetInstanceFeatureGateRequest
   * @returns GetInstanceFeatureGateResponse
   */
  async getInstanceFeatureGate(request: $_model.GetInstanceFeatureGateRequest): Promise<$_model.GetInstanceFeatureGateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceFeatureGateWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the feature gate for a StarRocks compute group instance.
   * 
   * @param request - GetNodeGroupFeatureGateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeGroupFeatureGateResponse
   */
  async getNodeGroupFeatureGateWithOptions(request: $_model.GetNodeGroupFeatureGateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeGroupFeatureGateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeGroupFeatureGate",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/features/nodeGroupFeatureGate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeGroupFeatureGateResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeGroupFeatureGateResponse({}));
  }

  /**
   * Retrieve the feature gate for a StarRocks compute group instance.
   * 
   * @param request - GetNodeGroupFeatureGateRequest
   * @returns GetNodeGroupFeatureGateResponse
   */
  async getNodeGroupFeatureGate(request: $_model.GetNodeGroupFeatureGateRequest): Promise<$_model.GetNodeGroupFeatureGateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeGroupFeatureGateWithOptions(request, headers, runtime);
  }

  /**
   * Enable read/write splitting. The Leader FE node handles write requests, and other nodes handle read requests.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * 
   * @param request - IsolateLeaderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsolateLeaderResponse
   */
  async isolateLeaderWithOptions(request: $_model.IsolateLeaderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.IsolateLeaderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isolateLeader)) {
      query["IsolateLeader"] = request.isolateLeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsolateLeader",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/isolateLeader`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsolateLeaderResponse>(await this.callApi(params, req, runtime), new $_model.IsolateLeaderResponse({}));
  }

  /**
   * Enable read/write splitting. The Leader FE node handles write requests, and other nodes handle read requests.
   * 
   * @remarks
   * The instance must be in the running state when you call this operation.
   * 
   * @param request - IsolateLeaderRequest
   * @returns IsolateLeaderResponse
   */
  async isolateLeader(request: $_model.IsolateLeaderRequest): Promise<$_model.IsolateLeaderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.isolateLeaderWithOptions(request, headers, runtime);
  }

  /**
   * Lists gateways.
   * 
   * @remarks
   * Lists the gateways of a cluster.
   * 
   * @param request - ListGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayResponse
   */
  async listGatewayWithOptions(request: $_model.ListGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateway",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayResponse({}));
  }

  /**
   * Lists gateways.
   * 
   * @remarks
   * Lists the gateways of a cluster.
   * 
   * @param request - ListGatewayRequest
   * @returns ListGatewayResponse
   */
  async listGateway(request: $_model.ListGatewayRequest): Promise<$_model.ListGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the details of an operation.
   * 
   * @param request - ListOperationActivityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationActivityResponse
   */
  async listOperationActivityWithOptions(request: $_model.ListOperationActivityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationActivityResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationActivity",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/operation/listOperationActivity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationActivityResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationActivityResponse({}));
  }

  /**
   * Retrieves the details of an operation.
   * 
   * @param request - ListOperationActivityRequest
   * @returns ListOperationActivityResponse
   */
  async listOperationActivity(request: $_model.ListOperationActivityRequest): Promise<$_model.ListOperationActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationActivityWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the operation history of a cluster.
   * 
   * @param request - ListOperationHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationHistoryResponse
   */
  async listOperationHistoryWithOptions(request: $_model.ListOperationHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.operationStatus)) {
      query["OperationStatus"] = request.operationStatus;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationHistory",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/operation/listOperationHistory`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationHistoryResponse({}));
  }

  /**
   * Retrieves the operation history of a cluster.
   * 
   * @param request - ListOperationHistoryRequest
   * @returns ListOperationHistoryResponse
   */
  async listOperationHistory(request: $_model.ListOperationHistoryRequest): Promise<$_model.ListOperationHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the ssl certificate details for a cluster.
   * 
   * @remarks
   * Retrieves the ssl certificate details for a cluster.
   * 
   * @param request - ListSSLDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSSLDetailsResponse
   */
  async listSSLDetailsWithOptions(request: $_model.ListSSLDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSSLDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSSLDetails",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/listSSLDetails`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSSLDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListSSLDetailsResponse({}));
  }

  /**
   * Retrieves the ssl certificate details for a cluster.
   * 
   * @remarks
   * Retrieves the ssl certificate details for a cluster.
   * 
   * @param request - ListSSLDetailsRequest
   * @returns ListSSLDetailsResponse
   */
  async listSSLDetails(request: $_model.ListSSLDetailsRequest): Promise<$_model.ListSSLDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSSLDetailsWithOptions(request, headers, runtime);
  }

  /**
   * Change the billing method for an instance
   * 
   * @remarks
   * Before you call this operation, review the billing methods for Serverless StarRocks and the <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P).
   * When you call this operation, note the following:
   * - Only standard instances support changing the number of compute group Compute Units (CUs). Entry-level instances do not support this change.
   * - Only instances of the standard compute group specification type support increasing the number of disks.
   * - The instance must be in the Running state.
   * After you change the CU count, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new CU count.
   * - Subscription: During the current billing cycle, you pay the difference between the old and new configurations. This amount is calculated based on the number of days remaining in the subscription period, starting from 00:00 of the following day.
   * 
   * @param request - ModifyChargeTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyChargeTypeResponse
   */
  async modifyChargeTypeWithOptions(request: $_model.ModifyChargeTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyChargeTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.billingInstanceIds)) {
      query["BillingInstanceIds"] = request.billingInstanceIds;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyChargeType",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/modifyChargeType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyChargeTypeResponse({}));
  }

  /**
   * Change the billing method for an instance
   * 
   * @remarks
   * Before you call this operation, review the billing methods for Serverless StarRocks and the <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P).
   * When you call this operation, note the following:
   * - Only standard instances support changing the number of compute group Compute Units (CUs). Entry-level instances do not support this change.
   * - Only instances of the standard compute group specification type support increasing the number of disks.
   * - The instance must be in the Running state.
   * After you change the CU count, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new CU count.
   * - Subscription: During the current billing cycle, you pay the difference between the old and new configurations. This amount is calculated based on the number of days remaining in the subscription period, starting from 00:00 of the following day.
   * 
   * @param request - ModifyChargeTypeRequest
   * @returns ModifyChargeTypeResponse
   */
  async modifyChargeType(request: $_model.ModifyChargeTypeRequest): Promise<$_model.ModifyChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyChargeTypeWithOptions(request, headers, runtime);
  }

  /**
   * You can use this API to change the number of Compute Units (CUs) in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note the following:
   * - This operation is supported only for Standard Edition instances. It is not supported for Starter Edition instances.
   * - You can increase the number of disks only for instances with a standard compute group specification.
   * - The instance must be in the Running state.
   * After you change the number of CUs, the billing for the instance is updated as follows:
   * - Pay-as-you-go: You are billed based on the new number of CUs.
   * - Subscription: A supplementary fee is charged. This fee is calculated based on the price difference between the old and new configurations and the remaining subscription period. The remaining period starts at 00:00 on the following day and ends when the subscription expires.
   * 
   * @param request - ModifyCuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCuResponse
   */
  async modifyCuWithOptions(request: $_model.ModifyCuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCu",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyCu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCuResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCuResponse({}));
  }

  /**
   * You can use this API to change the number of Compute Units (CUs) in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note the following:
   * - This operation is supported only for Standard Edition instances. It is not supported for Starter Edition instances.
   * - You can increase the number of disks only for instances with a standard compute group specification.
   * - The instance must be in the Running state.
   * After you change the number of CUs, the billing for the instance is updated as follows:
   * - Pay-as-you-go: You are billed based on the new number of CUs.
   * - Subscription: A supplementary fee is charged. This fee is calculated based on the price difference between the old and new configurations and the remaining subscription period. The remaining period starts at 00:00 on the following day and ends when the subscription expires.
   * 
   * @param request - ModifyCuRequest
   * @returns ModifyCuResponse
   */
  async modifyCu(request: $_model.ModifyCuRequest): Promise<$_model.ModifyCuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyCuWithOptions(request, headers, runtime);
  }

  /**
   * Performs a precheck before you modify the number of CUs for a warehouse.
   * 
   * @param request - ModifyCuPreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCuPreCheckResponse
   */
  async modifyCuPreCheckWithOptions(request: $_model.ModifyCuPreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCuPreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCuPreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyCuPreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCuPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCuPreCheckResponse({}));
  }

  /**
   * Performs a precheck before you modify the number of CUs for a warehouse.
   * 
   * @param request - ModifyCuPreCheckRequest
   * @returns ModifyCuPreCheckResponse
   */
  async modifyCuPreCheck(request: $_model.ModifyCuPreCheckRequest): Promise<$_model.ModifyCuPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyCuPreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Increases the number of disks for the nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure you fully understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following:
   * - The number of disks can be increased only for standard instances. This operation is not supported for entry-level instances.
   * - The number of disks can be increased only for instances whose compute group is the Standard Edition (standard).
   * - The instance must be in the Running state.
   * After you increase the number of disks, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk type.
   * - Subscription: A supplemental fee is calculated. This fee is based on the price difference between the old and new configurations and the remaining days in the billing cycle. The remaining period starts from 00:00 on the following day and ends when the subscription expires.
   * 
   * @param request - ModifyDiskNumberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskNumberResponse
   */
  async modifyDiskNumberWithOptions(request: $_model.ModifyDiskNumberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskNumberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskNumber",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskNumberResponse({}));
  }

  /**
   * Increases the number of disks for the nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure you fully understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following:
   * - The number of disks can be increased only for standard instances. This operation is not supported for entry-level instances.
   * - The number of disks can be increased only for instances whose compute group is the Standard Edition (standard).
   * - The instance must be in the Running state.
   * After you increase the number of disks, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk type.
   * - Subscription: A supplemental fee is calculated. This fee is based on the price difference between the old and new configurations and the remaining days in the billing cycle. The remaining period starts from 00:00 on the following day and ends when the subscription expires.
   * 
   * @param request - ModifyDiskNumberRequest
   * @returns ModifyDiskNumberResponse
   */
  async modifyDiskNumber(request: $_model.ModifyDiskNumberRequest): Promise<$_model.ModifyDiskNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskNumberWithOptions(request, headers, runtime);
  }

  /**
   * This operation modifies the disk performance level of the nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, understand the billing methods and <props="china">[pricing](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.1837281f3hbi2d#/ecs/detail/vm)<props="intl">[pricing](https://www.alibabacloud.com/zh/product/ecs?_p_lc=1#pricing) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - You can upgrade or downgrade disks only for standard instances. This operation is not supported for Starter Edition instances.
   * - Disk upgrades and downgrades are supported only for instances that have a Standard Edition (standard) compute group.
   * - The instance must be in the Running state.
   * - You cannot downgrade the disk performance level (PL) to PL0.
   * - The performance level of an Enhanced SSD (ESSD) is limited by its capacity. If you cannot upgrade the performance level, increase the disk capacity and try again. For more information, see <props="china">[ESSDs](https://help.aliyun.com/zh/ecs/user-guide/essds)<props="intl">[ESSDs](https://www.alibabacloud.com/help/en/ecs/user-guide/essds).
   * After you change the disk configuration, the billing is adjusted as follows:
   * - Pay-as-you-go: You are charged based on the new disk type.
   * - Subscription: A supplemental fee is calculated based on the price difference between the new and old configurations for the remainder of the billing cycle. The remaining period starts at 00:00 on the next day and ends when the subscription expires.
   * 
   * @param request - ModifyDiskPerformanceLevelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskPerformanceLevelResponse
   */
  async modifyDiskPerformanceLevelWithOptions(request: $_model.ModifyDiskPerformanceLevelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskPerformanceLevelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskPerformanceLevel",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskPerformanceLevel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskPerformanceLevelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskPerformanceLevelResponse({}));
  }

  /**
   * This operation modifies the disk performance level of the nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, understand the billing methods and <props="china">[pricing](https://www.aliyun.com/price/product?spm=openapi-amp.newDocPublishment.0.0.1837281f3hbi2d#/ecs/detail/vm)<props="intl">[pricing](https://www.alibabacloud.com/zh/product/ecs?_p_lc=1#pricing) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - You can upgrade or downgrade disks only for standard instances. This operation is not supported for Starter Edition instances.
   * - Disk upgrades and downgrades are supported only for instances that have a Standard Edition (standard) compute group.
   * - The instance must be in the Running state.
   * - You cannot downgrade the disk performance level (PL) to PL0.
   * - The performance level of an Enhanced SSD (ESSD) is limited by its capacity. If you cannot upgrade the performance level, increase the disk capacity and try again. For more information, see <props="china">[ESSDs](https://help.aliyun.com/zh/ecs/user-guide/essds)<props="intl">[ESSDs](https://www.alibabacloud.com/help/en/ecs/user-guide/essds).
   * After you change the disk configuration, the billing is adjusted as follows:
   * - Pay-as-you-go: You are charged based on the new disk type.
   * - Subscription: A supplemental fee is calculated based on the price difference between the new and old configurations for the remainder of the billing cycle. The remaining period starts at 00:00 on the next day and ends when the subscription expires.
   * 
   * @param request - ModifyDiskPerformanceLevelRequest
   * @returns ModifyDiskPerformanceLevelResponse
   */
  async modifyDiskPerformanceLevel(request: $_model.ModifyDiskPerformanceLevelRequest): Promise<$_model.ModifyDiskPerformanceLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskPerformanceLevelWithOptions(request, headers, runtime);
  }

  /**
   * Scales out the disk of a compute group node for a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following:
   * - Only standard instances support disk scale-out. Entry-level instances do not.
   * - Only instances that have a compute group of the standard specification type support disk scale-out.
   * - The instance must be in the Running state.
   * After you scale out the disk, your billing changes as follows:
   * - Pay-as-you-go: You are charged based on the new disk size.
   * - Subscription: You must pay an upgrade fee. The fee is calculated based on the price difference between the old and new configurations and the remaining subscription period. The remaining subscription period is calculated starting from 00:00 on the next day.
   * 
   * @param request - ModifyDiskSizeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskSizeResponse
   */
  async modifyDiskSizeWithOptions(request: $_model.ModifyDiskSizeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskSizeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskSize",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskSize`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskSizeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskSizeResponse({}));
  }

  /**
   * Scales out the disk of a compute group node for a Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following:
   * - Only standard instances support disk scale-out. Entry-level instances do not.
   * - Only instances that have a compute group of the standard specification type support disk scale-out.
   * - The instance must be in the Running state.
   * After you scale out the disk, your billing changes as follows:
   * - Pay-as-you-go: You are charged based on the new disk size.
   * - Subscription: You must pay an upgrade fee. The fee is calculated based on the price difference between the old and new configurations and the remaining subscription period. The remaining subscription period is calculated starting from 00:00 on the next day.
   * 
   * @param request - ModifyDiskSizeRequest
   * @returns ModifyDiskSizeResponse
   */
  async modifyDiskSize(request: $_model.ModifyDiskSizeRequest): Promise<$_model.ModifyDiskSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskSizeWithOptions(request, headers, runtime);
  }

  /**
   * Change the disk type for nodes in a compute group
   * 
   * @remarks
   * Before you call this operation, review the Serverless StarRocks billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P).
   * - Only standard instances support disk scaling. Starter instances do not support disk scaling.
   * - Only instances with a compute group specification type of Standard Edition support disk scaling.
   * - The instance must be in the Running state.
   * After disk scaling, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: During the billing cycle, the additional fee is calculated based on the price difference between the old and new configurations and the remaining days, from 00:00 the next day to the end of the validity period.
   * 
   * @param request - ModifyDiskTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskTypeResponse
   */
  async modifyDiskTypeWithOptions(request: $_model.ModifyDiskTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDiskTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.targetDiskType)) {
      query["TargetDiskType"] = request.targetDiskType;
    }

    if (!$dara.isNull(request.targetPerformanceLevel)) {
      query["TargetPerformanceLevel"] = request.targetPerformanceLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDiskType",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyDiskType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDiskTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDiskTypeResponse({}));
  }

  /**
   * Change the disk type for nodes in a compute group
   * 
   * @remarks
   * Before you call this operation, review the Serverless StarRocks billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P).
   * - Only standard instances support disk scaling. Starter instances do not support disk scaling.
   * - Only instances with a compute group specification type of Standard Edition support disk scaling.
   * - The instance must be in the Running state.
   * After disk scaling, billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: During the billing cycle, the additional fee is calculated based on the price difference between the old and new configurations and the remaining days, from 00:00 the next day to the end of the validity period.
   * 
   * @param request - ModifyDiskTypeRequest
   * @returns ModifyDiskTypeResponse
   */
  async modifyDiskType(request: $_model.ModifyDiskTypeRequest): Promise<$_model.ModifyDiskTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDiskTypeWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the /etc/hosts file.
   * 
   * @param request - ModifyHostAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostAliasResponse
   */
  async modifyHostAliasWithOptions(request: $_model.ModifyHostAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostAliasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hostAliases)) {
      body["hostAliases"] = request.hostAliases;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostAlias",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/network/modifyHostAlias`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostAliasResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostAliasResponse({}));
  }

  /**
   * Modifies the /etc/hosts file.
   * 
   * @param request - ModifyHostAliasRequest
   * @returns ModifyHostAliasResponse
   */
  async modifyHostAlias(request: $_model.ModifyHostAliasRequest): Promise<$_model.ModifyHostAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyHostAliasWithOptions(request, headers, runtime);
  }

  /**
   * This API modifies the configuration of a Serverless StarRocks instance.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfigWithOptions(request: $_model.ModifyInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addConfigList)) {
      query["AddConfigList"] = request.addConfigList;
    }

    if (!$dara.isNull(request.configList)) {
      query["ConfigList"] = request.configList;
    }

    if (!$dara.isNull(request.deleteConfigList)) {
      query["DeleteConfigList"] = request.deleteConfigList;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configsToAdd)) {
      body["configsToAdd"] = request.configsToAdd;
    }

    if (!$dara.isNull(request.configsToDelete)) {
      body["configsToDelete"] = request.configsToDelete;
    }

    if (!$dara.isNull(request.configsToUpdate)) {
      body["configsToUpdate"] = request.configsToUpdate;
    }

    if (!$dara.isNull(request.fastMode)) {
      body["fastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.restart)) {
      body["restart"] = request.restart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfig",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/config/modifyInstanceConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigResponse({}));
  }

  /**
   * This API modifies the configuration of a Serverless StarRocks instance.
   * 
   * @param request - ModifyInstanceConfigRequest
   * @returns ModifyInstanceConfigResponse
   */
  async modifyInstanceConfig(request: $_model.ModifyInstanceConfigRequest): Promise<$_model.ModifyInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceConfigWithOptions(request, headers, runtime);
  }

  /**
   * This operation pre-checks modifications to the instance configuration of a Serverless StarRocks instance.
   * 
   * @param request - ModifyInstanceConfigPreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceConfigPreCheckResponse
   */
  async modifyInstanceConfigPreCheckWithOptions(request: $_model.ModifyInstanceConfigPreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceConfigPreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configsToAdd)) {
      body["configsToAdd"] = request.configsToAdd;
    }

    if (!$dara.isNull(request.configsToDelete)) {
      body["configsToDelete"] = request.configsToDelete;
    }

    if (!$dara.isNull(request.configsToUpdate)) {
      body["configsToUpdate"] = request.configsToUpdate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceConfigPreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/config/modifyInstanceConfigPreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceConfigPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceConfigPreCheckResponse({}));
  }

  /**
   * This operation pre-checks modifications to the instance configuration of a Serverless StarRocks instance.
   * 
   * @param request - ModifyInstanceConfigPreCheckRequest
   * @returns ModifyInstanceConfigPreCheckResponse
   */
  async modifyInstanceConfigPreCheck(request: $_model.ModifyInstanceConfigPreCheckRequest): Promise<$_model.ModifyInstanceConfigPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceConfigPreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the maintenance window for a StarRocks instance.
   * 
   * @param request - ModifyMaintainableTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaintainableTimeResponse
   */
  async modifyMaintainableTimeWithOptions(request: $_model.ModifyMaintainableTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaintainableTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maintainableTimePeriod)) {
      query["MaintainableTimePeriod"] = request.maintainableTimePeriod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaintainableTime",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/modifyMaintainableTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaintainableTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaintainableTimeResponse({}));
  }

  /**
   * Modifies the maintenance window for a StarRocks instance.
   * 
   * @param request - ModifyMaintainableTimeRequest
   * @returns ModifyMaintainableTimeResponse
   */
  async modifyMaintainableTime(request: $_model.ModifyMaintainableTimeRequest): Promise<$_model.ModifyMaintainableTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyMaintainableTimeWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the number of nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before using this operation, make sure that you fully understand the billing method and <props="china">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When calling this operation, note the following:
   * - Only Standard Standard instances support modifying the number of compute group nodes. Basic Standard instances do not support this operation.
   * - The instance must be in the Running state.
   * - The number of FE nodes cannot be an even number, and FE nodes do not support scale-in.
   * After modifying the node count, billing changes are as follows:
   * - Pay-as-you-go: Billed based on the new node count.
   * - Subscription: Within the billing cycle, the additional fee is calculated based on the price difference between the old and new configurations and the remaining days (from 00:00 of the next day to the end of the validity period).
   * 
   * @param request - ModifyNodeNumberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeNumberResponse
   */
  async modifyNodeNumberWithOptions(request: $_model.ModifyNodeNumberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeNumberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeNumber",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyNodeNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeNumberResponse({}));
  }

  /**
   * Modifies the number of nodes in a compute group of a Serverless StarRocks instance.
   * 
   * @remarks
   * Before using this operation, make sure that you fully understand the billing method and <props="china">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When calling this operation, note the following:
   * - Only Standard Standard instances support modifying the number of compute group nodes. Basic Standard instances do not support this operation.
   * - The instance must be in the Running state.
   * - The number of FE nodes cannot be an even number, and FE nodes do not support scale-in.
   * After modifying the node count, billing changes are as follows:
   * - Pay-as-you-go: Billed based on the new node count.
   * - Subscription: Within the billing cycle, the additional fee is calculated based on the price difference between the old and new configurations and the remaining days (from 00:00 of the next day to the end of the validity period).
   * 
   * @param request - ModifyNodeNumberRequest
   * @returns ModifyNodeNumberResponse
   */
  async modifyNodeNumber(request: $_model.ModifyNodeNumberRequest): Promise<$_model.ModifyNodeNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeNumberWithOptions(request, headers, runtime);
  }

  /**
   * Performs a precheck before you modify the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - ModifyNodeNumberPreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeNumberPreCheckResponse
   */
  async modifyNodeNumberPreCheckWithOptions(request: $_model.ModifyNodeNumberPreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeNumberPreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeNumberPreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifyNodeNumberPreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeNumberPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeNumberPreCheckResponse({}));
  }

  /**
   * Performs a precheck before you modify the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - ModifyNodeNumberPreCheckRequest
   * @returns ModifyNodeNumberPreCheckResponse
   */
  async modifyNodeNumberPreCheck(request: $_model.ModifyNodeNumberPreCheckRequest): Promise<$_model.ModifyNodeNumberPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeNumberPreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Modifies an Auto Scaling rule.
   * 
   * @param request - ModifyScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRuleWithOptions(request: $_model.ModifyScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newTriggerType)) {
      query["NewTriggerType"] = request.newTriggerType;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.oldTriggerType)) {
      query["OldTriggerType"] = request.oldTriggerType;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScalingRule",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/scalingRule/modifyScalingRule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScalingRuleResponse({}));
  }

  /**
   * Modifies an Auto Scaling rule.
   * 
   * @param request - ModifyScalingRuleRequest
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRule(request: $_model.ModifyScalingRuleRequest): Promise<$_model.ModifyScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Modify the node specifications type of the compute group.
   * 
   * @param request - ModifySpecTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySpecTypeResponse
   */
  async modifySpecTypeWithOptions(request: $_model.ModifySpecTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySpecTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.targetSpecType)) {
      query["TargetSpecType"] = request.targetSpecType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySpecType",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifySpecType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySpecTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifySpecTypeResponse({}));
  }

  /**
   * Modify the node specifications type of the compute group.
   * 
   * @param request - ModifySpecTypeRequest
   * @returns ModifySpecTypeResponse
   */
  async modifySpecType(request: $_model.ModifySpecTypeRequest): Promise<$_model.ModifySpecTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySpecTypeWithOptions(request, headers, runtime);
  }

  /**
   * Runs a precheck to modify the node specification type for a compute group.
   * 
   * @param request - ModifySpecTypePreCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySpecTypePreCheckResponse
   */
  async modifySpecTypePreCheckWithOptions(request: $_model.ModifySpecTypePreCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySpecTypePreCheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.targetSpecType)) {
      query["TargetSpecType"] = request.targetSpecType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySpecTypePreCheck",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/resourceChange/modifySpecTypePreCheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySpecTypePreCheckResponse>(await this.callApi(params, req, runtime), new $_model.ModifySpecTypePreCheckResponse({}));
  }

  /**
   * Runs a precheck to modify the node specification type for a compute group.
   * 
   * @param request - ModifySpecTypePreCheckRequest
   * @returns ModifySpecTypePreCheckResponse
   */
  async modifySpecTypePreCheck(request: $_model.ModifySpecTypePreCheckRequest): Promise<$_model.ModifySpecTypePreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySpecTypePreCheckWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the password for a StarRocks user.
   * 
   * @param request - ModifyUserPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserPasswordResponse
   */
  async modifyUserPasswordWithOptions(request: $_model.ModifyUserPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserPasswordResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserPassword",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/password/modify`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserPasswordResponse({}));
  }

  /**
   * Modifies the password for a StarRocks user.
   * 
   * @param request - ModifyUserPasswordRequest
   * @returns ModifyUserPasswordResponse
   */
  async modifyUserPassword(request: $_model.ModifyUserPasswordRequest): Promise<$_model.ModifyUserPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyUserPasswordWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for enabling multi-zone deployment.
   * 
   * @param request - QueryEnableMultiAzPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEnableMultiAzPriceResponse
   */
  async queryEnableMultiAzPriceWithOptions(request: $_model.QueryEnableMultiAzPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEnableMultiAzPriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.observers)) {
      body["observers"] = request.observers;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      body["promotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEnableMultiAzPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/enableMultiAz`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEnableMultiAzPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryEnableMultiAzPriceResponse({}));
  }

  /**
   * Queries the price for enabling multi-zone deployment.
   * 
   * @param request - QueryEnableMultiAzPriceRequest
   * @returns QueryEnableMultiAzPriceResponse
   */
  async queryEnableMultiAzPrice(request: $_model.QueryEnableMultiAzPriceRequest): Promise<$_model.QueryEnableMultiAzPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryEnableMultiAzPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the latest minor version for the current major version.
   * 
   * @param request - QueryMinorVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMinorVersionResponse
   */
  async queryMinorVersionWithOptions(request: $_model.QueryMinorVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMinorVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMinorVersion",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/queryAppDefineVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMinorVersionResponse>(await this.callApi(params, req, runtime), new $_model.QueryMinorVersionResponse({}));
  }

  /**
   * Queries the latest minor version for the current major version.
   * 
   * @param request - QueryMinorVersionRequest
   * @returns QueryMinorVersionResponse
   */
  async queryMinorVersion(request: $_model.QueryMinorVersionRequest): Promise<$_model.QueryMinorVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMinorVersionWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for changing the billing method of a StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - You can change the number of compute units (CUs) in a compute group only for Standard Edition instances. This feature is not supported for Starter Edition instances.
   * - You can increase the disk size only for instances that have a standard compute group specification.
   * - The instance must be in the Running state.
   * After you change the number of CUs, the billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new number of CUs.
   * - Subscription: The system calculates the supplementary fee based on the price difference between the old and new configurations and the remaining days in the billing cycle. The calculation starts from 00:00 on the following day.
   * 
   * @param request - QueryModifyChargeTypePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyChargeTypePriceResponse
   */
  async queryModifyChargeTypePriceWithOptions(request: $_model.QueryModifyChargeTypePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyChargeTypePriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.billingInstanceIds)) {
      query["BillingInstanceIds"] = request.billingInstanceIds;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyChargeTypePrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/buy/query_modify_charge_type_price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyChargeTypePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyChargeTypePriceResponse({}));
  }

  /**
   * Queries the price for changing the billing method of a StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - You can change the number of compute units (CUs) in a compute group only for Standard Edition instances. This feature is not supported for Starter Edition instances.
   * - You can increase the disk size only for instances that have a standard compute group specification.
   * - The instance must be in the Running state.
   * After you change the number of CUs, the billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new number of CUs.
   * - Subscription: The system calculates the supplementary fee based on the price difference between the old and new configurations and the remaining days in the billing cycle. The calculation starts from 00:00 on the following day.
   * 
   * @param request - QueryModifyChargeTypePriceRequest
   * @returns QueryModifyChargeTypePriceResponse
   */
  async queryModifyChargeTypePrice(request: $_model.QueryModifyChargeTypePriceRequest): Promise<$_model.QueryModifyChargeTypePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyChargeTypePriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for modifying the CU of compute group nodes.
   * 
   * @remarks
   * Before you use this API, understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * When you call this API, note the following:
   * - Only standard instances allow you to modify the number of CUs for compute groups. Entry-level instances do not.
   * - You can increase the disk size only for instances with a Standard Edition (standard) compute group.
   * - The instance must be in the Running state.
   * After you modify the number of CUs, billing changes as follows:
   * - Pay-as-you-go: Billing is based on the new number of CUs.
   * - Subscription: The amount to pay is calculated based on the price difference between the old and new configurations for the remainder of the subscription period. This period starts at 00:00 on the following day.
   * 
   * @param request - QueryModifyCuPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyCuPriceResponse
   */
  async queryModifyCuPriceWithOptions(request: $_model.QueryModifyCuPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyCuPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyCuPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyCu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyCuPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyCuPriceResponse({}));
  }

  /**
   * Queries the price for modifying the CU of compute group nodes.
   * 
   * @remarks
   * Before you use this API, understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * When you call this API, note the following:
   * - Only standard instances allow you to modify the number of CUs for compute groups. Entry-level instances do not.
   * - You can increase the disk size only for instances with a Standard Edition (standard) compute group.
   * - The instance must be in the Running state.
   * After you modify the number of CUs, billing changes as follows:
   * - Pay-as-you-go: Billing is based on the new number of CUs.
   * - Subscription: The amount to pay is calculated based on the price difference between the old and new configurations for the remainder of the subscription period. This period starts at 00:00 on the following day.
   * 
   * @param request - QueryModifyCuPriceRequest
   * @returns QueryModifyCuPriceResponse
   */
  async queryModifyCuPrice(request: $_model.QueryModifyCuPriceRequest): Promise<$_model.QueryModifyCuPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyCuPriceWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve the price for changing the number of disks in a compute group node
   * 
   * @remarks
   * Before you call this operation, review the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * - You can increase the disk count only for Standard Edition instances. You cannot increase the disk count for Starter Edition instances.
   * - You can increase the disk count only for instances with a compute group specification type of Standard Edition (standard).
   * - The instance must be in the Running state.
   * After you increase the disk count, billing changes as follows:
   * - Pay-as-you-go: Billing is based on the new disk type.
   * - Subscription: During the billing cycle, the additional fee is calculated based on the price difference between the new and original configurations and the remaining days—from 00:00 the next day to the end of the validity period.
   * 
   * @param request - QueryModifyDiskNumberPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyDiskNumberPriceResponse
   */
  async queryModifyDiskNumberPriceWithOptions(request: $_model.QueryModifyDiskNumberPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyDiskNumberPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyDiskNumberPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyDiskNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyDiskNumberPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyDiskNumberPriceResponse({}));
  }

  /**
   * Retrieve the price for changing the number of disks in a compute group node
   * 
   * @remarks
   * Before you call this operation, review the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * - You can increase the disk count only for Standard Edition instances. You cannot increase the disk count for Starter Edition instances.
   * - You can increase the disk count only for instances with a compute group specification type of Standard Edition (standard).
   * - The instance must be in the Running state.
   * After you increase the disk count, billing changes as follows:
   * - Pay-as-you-go: Billing is based on the new disk type.
   * - Subscription: During the billing cycle, the additional fee is calculated based on the price difference between the new and original configurations and the remaining days—from 00:00 the next day to the end of the validity period.
   * 
   * @param request - QueryModifyDiskNumberPriceRequest
   * @returns QueryModifyDiskNumberPriceResponse
   */
  async queryModifyDiskNumberPrice(request: $_model.QueryModifyDiskNumberPriceRequest): Promise<$_model.QueryModifyDiskNumberPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyDiskNumberPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price of changing the disk performance level for a compute group node.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and <props="intl">[pricing](https://www.alibabacloud.com/product/ecs?_p_lc=1#pricing) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - Only standard instances support disk upgrade or downgrade. Entry-level instances do not.
   * - Only instances with a standard compute group specification support disk upgrade or downgrade.
   * - The instance must be in the running state.
   * - You cannot downgrade the disk to performance level (PL) 0.
   * - The performance level of an Enhanced SSD (ESSD) is limited by its capacity. If you cannot upgrade the performance level, scale out the disk and try again. For more information, see <props="intl">[ESSDs](https://www.alibabacloud.com/help/en/ecs/user-guide/essds).
   * After you upgrade or downgrade a disk, the billing changes as follows:
   * - Pay-as-you-go: You are charged based on the new disk type.
   * - Subscription: A supplementary fee is calculated based on the price difference between the new and old configurations and the remaining days in the subscription period, starting from 00:00 on the following day.
   * 
   * @param request - QueryModifyDiskPerformanceLevelPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyDiskPerformanceLevelPriceResponse
   */
  async queryModifyDiskPerformanceLevelPriceWithOptions(request: $_model.QueryModifyDiskPerformanceLevelPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyDiskPerformanceLevelPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyDiskPerformanceLevelPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyDiskPerformanceLevel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyDiskPerformanceLevelPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyDiskPerformanceLevelPriceResponse({}));
  }

  /**
   * Queries the price of changing the disk performance level for a compute group node.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and <props="intl">[pricing](https://www.alibabacloud.com/product/ecs?_p_lc=1#pricing) of Serverless StarRocks.
   * Note the following when you call this operation:
   * - Only standard instances support disk upgrade or downgrade. Entry-level instances do not.
   * - Only instances with a standard compute group specification support disk upgrade or downgrade.
   * - The instance must be in the running state.
   * - You cannot downgrade the disk to performance level (PL) 0.
   * - The performance level of an Enhanced SSD (ESSD) is limited by its capacity. If you cannot upgrade the performance level, scale out the disk and try again. For more information, see <props="intl">[ESSDs](https://www.alibabacloud.com/help/en/ecs/user-guide/essds).
   * After you upgrade or downgrade a disk, the billing changes as follows:
   * - Pay-as-you-go: You are charged based on the new disk type.
   * - Subscription: A supplementary fee is calculated based on the price difference between the new and old configurations and the remaining days in the subscription period, starting from 00:00 on the following day.
   * 
   * @param request - QueryModifyDiskPerformanceLevelPriceRequest
   * @returns QueryModifyDiskPerformanceLevelPriceResponse
   */
  async queryModifyDiskPerformanceLevelPrice(request: $_model.QueryModifyDiskPerformanceLevelPriceRequest): Promise<$_model.QueryModifyDiskPerformanceLevelPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyDiskPerformanceLevelPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for modifying the disk size of a single node in a compute group.
   * 
   * @remarks
   * Before you call this operation, make sure you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks. When you call this operation, note the following:
   * - Disk scale-out is supported only for standard instances. It is not supported for entry-level instances.
   * - Disk scale-out is supported only for instances that use the standard compute group specification.
   * - The instance must be in the Running state.
   * After you scale out the disk, the billing changes are as follows:
   * - Pay-as-you-go: You are billed for the new disk size.
   * - Subscription: A supplementary fee is calculated based on the price difference between the old and new configurations and the remaining days in your subscription. The remaining days are calculated from 00:00 on the next day until the subscription expires.
   * 
   * @param request - QueryModifyDiskSizePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyDiskSizePriceResponse
   */
  async queryModifyDiskSizePriceWithOptions(request: $_model.QueryModifyDiskSizePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyDiskSizePriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyDiskSizePrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyDiskSize`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyDiskSizePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyDiskSizePriceResponse({}));
  }

  /**
   * Queries the price for modifying the disk size of a single node in a compute group.
   * 
   * @remarks
   * Before you call this operation, make sure you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks. When you call this operation, note the following:
   * - Disk scale-out is supported only for standard instances. It is not supported for entry-level instances.
   * - Disk scale-out is supported only for instances that use the standard compute group specification.
   * - The instance must be in the Running state.
   * After you scale out the disk, the billing changes are as follows:
   * - Pay-as-you-go: You are billed for the new disk size.
   * - Subscription: A supplementary fee is calculated based on the price difference between the old and new configurations and the remaining days in your subscription. The remaining days are calculated from 00:00 on the next day until the subscription expires.
   * 
   * @param request - QueryModifyDiskSizePriceRequest
   * @returns QueryModifyDiskSizePriceResponse
   */
  async queryModifyDiskSizePrice(request: $_model.QueryModifyDiskSizePriceRequest): Promise<$_model.QueryModifyDiskSizePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyDiskSizePriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for modifying the disk type of nodes in a compute group.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of the Serverless StarRocks product. Take note of the following:
   * - Only standard instances support disk scale-out. Entry-level instances do not.
   * - Only instances that have a compute group of the Standard Edition (standard) specification type support disk scale-out.
   * - Instances must be in the running (Running) state.
   * After a disk scale-out, the billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: A supplemental fee is calculated based on the price difference between the new and old configurations for the remaining duration of the subscription. The remaining duration is calculated from 00:00 on the next day until the subscription expires.
   * 
   * @param request - QueryModifyDiskTypePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyDiskTypePriceResponse
   */
  async queryModifyDiskTypePriceWithOptions(request: $_model.QueryModifyDiskTypePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyDiskTypePriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.targetDiskType)) {
      query["TargetDiskType"] = request.targetDiskType;
    }

    if (!$dara.isNull(request.targetPerformanceLevel)) {
      query["TargetPerformanceLevel"] = request.targetPerformanceLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyDiskTypePrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyDiskType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyDiskTypePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyDiskTypePriceResponse({}));
  }

  /**
   * Queries the price for modifying the disk type of nodes in a compute group.
   * 
   * @remarks
   * Before you call this API, make sure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of the Serverless StarRocks product. Take note of the following:
   * - Only standard instances support disk scale-out. Entry-level instances do not.
   * - Only instances that have a compute group of the Standard Edition (standard) specification type support disk scale-out.
   * - Instances must be in the running (Running) state.
   * After a disk scale-out, the billing changes as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: A supplemental fee is calculated based on the price difference between the new and old configurations for the remaining duration of the subscription. The remaining duration is calculated from 00:00 on the next day until the subscription expires.
   * 
   * @param request - QueryModifyDiskTypePriceRequest
   * @returns QueryModifyDiskTypePriceResponse
   */
  async queryModifyDiskTypePrice(request: $_model.QueryModifyDiskTypePriceRequest): Promise<$_model.QueryModifyDiskTypePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyDiskTypePriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price for changing the number of nodes in a compute group.
   * 
   * @remarks
   * Before you call this API, make sure you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note the following:
   * - You can change the number of nodes in a compute group only for standard instances. This operation is not supported for entry-level instances.
   * - The instance must be in the Running state.
   * - The number of frontend (FE) nodes cannot be an even number. You cannot scale in FE nodes.
   * After you change the number of nodes, billing is affected as follows:
   * - Pay-as-you-go: You are charged based on the new number of nodes.
   * - Subscription: A supplemental fee is calculated based on the price difference between the old and new configurations and the number of remaining days in the subscription period. The remaining period is calculated from 00:00 of the next day until the subscription expires.
   * 
   * @param request - QueryModifyNodeNumberPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifyNodeNumberPriceResponse
   */
  async queryModifyNodeNumberPriceWithOptions(request: $_model.QueryModifyNodeNumberPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifyNodeNumberPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifyNodeNumberPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifyNodeNumber`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifyNodeNumberPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifyNodeNumberPriceResponse({}));
  }

  /**
   * Queries the price for changing the number of nodes in a compute group.
   * 
   * @remarks
   * Before you call this API, make sure you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note the following:
   * - You can change the number of nodes in a compute group only for standard instances. This operation is not supported for entry-level instances.
   * - The instance must be in the Running state.
   * - The number of frontend (FE) nodes cannot be an even number. You cannot scale in FE nodes.
   * After you change the number of nodes, billing is affected as follows:
   * - Pay-as-you-go: You are charged based on the new number of nodes.
   * - Subscription: A supplemental fee is calculated based on the price difference between the old and new configurations and the number of remaining days in the subscription period. The remaining period is calculated from 00:00 of the next day until the subscription expires.
   * 
   * @param request - QueryModifyNodeNumberPriceRequest
   * @returns QueryModifyNodeNumberPriceResponse
   */
  async queryModifyNodeNumberPrice(request: $_model.QueryModifyNodeNumberPriceRequest): Promise<$_model.QueryModifyNodeNumberPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifyNodeNumberPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the price to change the specification type of a compute group.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks. Note the following:
   * - Only standard instances support disk scale-out. Basic instances do not.
   * - Only instances with the Standard (standard) compute group specification type support disk scale-out.
   * - The instance must be in the Running state.
   * After a disk scale-out, the billing changes are as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: A supplementary fee is calculated based on the price difference between the old and new configurations and the number of remaining days in the subscription period (from 00:00 on the next day to the end of the validity period).
   * 
   * @param request - QueryModifySpecTypePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryModifySpecTypePriceResponse
   */
  async queryModifySpecTypePriceWithOptions(request: $_model.QueryModifySpecTypePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryModifySpecTypePriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.targetSpecType)) {
      query["TargetSpecType"] = request.targetSpecType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryModifySpecTypePrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/priceInquiry/modifySpecType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryModifySpecTypePriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryModifySpecTypePriceResponse({}));
  }

  /**
   * Queries the price to change the specification type of a compute group.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks. Note the following:
   * - Only standard instances support disk scale-out. Basic instances do not.
   * - Only instances with the Standard (standard) compute group specification type support disk scale-out.
   * - The instance must be in the Running state.
   * After a disk scale-out, the billing changes are as follows:
   * - Pay-as-you-go: You are billed based on the new disk size.
   * - Subscription: A supplementary fee is calculated based on the price difference between the old and new configurations and the number of remaining days in the subscription period (from 00:00 on the next day to the end of the validity period).
   * 
   * @param request - QueryModifySpecTypePriceRequest
   * @returns QueryModifySpecTypePriceResponse
   */
  async queryModifySpecTypePrice(request: $_model.QueryModifySpecTypePriceRequest): Promise<$_model.QueryModifySpecTypePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryModifySpecTypePriceWithOptions(request, headers, runtime);
  }

  /**
   * An API for querying the price of new StarRocks purchases.
   * 
   * @remarks
   * Before you use this API, review the billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * 
   * @param request - QueryPriceV1Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPriceV1Response
   */
  async queryPriceV1WithOptions(request: $_model.QueryPriceV1Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPriceV1Response> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentNodeGroup)) {
      body["AgentNodeGroup"] = request.agentNodeGroup;
    }

    if (!$dara.isNull(request.backendNodeGroups)) {
      body["BackendNodeGroups"] = request.backendNodeGroups;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.frontendNodeGroups)) {
      body["FrontendNodeGroups"] = request.frontendNodeGroups;
    }

    if (!$dara.isNull(request.observerNodeGroups)) {
      body["ObserverNodeGroups"] = request.observerNodeGroups;
    }

    if (!$dara.isNull(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.payType)) {
      body["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      body["PromotionOptionNo"] = request.promotionOptionNo;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.runMode)) {
      body["RunMode"] = request.runMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPriceV1",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/price/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPriceV1Response>(await this.callApi(params, req, runtime), new $_model.QueryPriceV1Response({}));
  }

  /**
   * An API for querying the price of new StarRocks purchases.
   * 
   * @remarks
   * Before you use this API, review the billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G)<props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) for Serverless StarRocks.
   * 
   * @param request - QueryPriceV1Request
   * @returns QueryPriceV1Response
   */
  async queryPriceV1(request: $_model.QueryPriceV1Request): Promise<$_model.QueryPriceV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryPriceV1WithOptions(request, headers, runtime);
  }

  /**
   * Pricing information for unsubscribing from StarRocks subscription instances
   * 
   * @remarks
   * >Danger: 
   * After you release an instance, Alibaba Cloud reclaims all physical resources used by the instance. All associated data is permanently lost and cannot be recovered.
   * 
   * @param request - QueryRefundPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRefundPriceResponse
   */
  async queryRefundPriceWithOptions(request: $_model.QueryRefundPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRefundPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingInstanceIds)) {
      query["billingInstanceIds"] = request.billingInstanceIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRefundPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/buy/queryRefundPrice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRefundPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryRefundPriceResponse({}));
  }

  /**
   * Pricing information for unsubscribing from StarRocks subscription instances
   * 
   * @remarks
   * >Danger: 
   * After you release an instance, Alibaba Cloud reclaims all physical resources used by the instance. All associated data is permanently lost and cannot be recovered.
   * 
   * @param request - QueryRefundPriceRequest
   * @returns QueryRefundPriceResponse
   */
  async queryRefundPrice(request: $_model.QueryRefundPriceRequest): Promise<$_model.QueryRefundPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRefundPriceWithOptions(request, headers, runtime);
  }

  /**
   * Query the renewal price for a StarRocks billing instance.
   * 
   * @param request - QueryRenewPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRenewPriceResponse
   */
  async queryRenewPriceWithOptions(request: $_model.QueryRenewPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRenewPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingInstanceIds)) {
      query["BillingInstanceIds"] = request.billingInstanceIds;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRenewPrice",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/price/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRenewPriceResponse>(await this.callApi(params, req, runtime), new $_model.QueryRenewPriceResponse({}));
  }

  /**
   * Query the renewal price for a StarRocks billing instance.
   * 
   * @param request - QueryRenewPriceRequest
   * @returns QueryRenewPriceResponse
   */
  async queryRenewPrice(request: $_model.QueryRenewPriceRequest): Promise<$_model.QueryRenewPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRenewPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the unpaid orders of a compute group or cluster.
   * 
   * @remarks
   * Queries the unpaid orders of a compute group or cluster.
   * 
   * @param request - QueryUnpaidOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUnpaidOrderResponse
   */
  async queryUnpaidOrderWithOptions(request: $_model.QueryUnpaidOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUnpaidOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingInstanceId)) {
      query["BillingInstanceId"] = request.billingInstanceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUnpaidOrder",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/order/queryUnpaidOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUnpaidOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryUnpaidOrderResponse({}));
  }

  /**
   * Queries the unpaid orders of a compute group or cluster.
   * 
   * @remarks
   * Queries the unpaid orders of a compute group or cluster.
   * 
   * @param request - QueryUnpaidOrderRequest
   * @returns QueryUnpaidOrderResponse
   */
  async queryUnpaidOrder(request: $_model.QueryUnpaidOrderRequest): Promise<$_model.QueryUnpaidOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryUnpaidOrderWithOptions(request, headers, runtime);
  }

  /**
   * Queries the available upgrade versions for an EMR Serverless StarRocks instance. StarRocks instances have two version layers: a major version and a minor version. You can view both versions in the Version Information section on the Instance Details page in the EMR console. Use the Minor parameter to specify whether to query upgradable minor versions or major versions.
   * 
   * @param request - QueryUpgradableVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUpgradableVersionsResponse
   */
  async queryUpgradableVersionsWithOptions(request: $_model.QueryUpgradableVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUpgradableVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minor)) {
      query["Minor"] = request.minor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUpgradableVersions",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/queryUpgradableVersions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUpgradableVersionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryUpgradableVersionsResponse({}));
  }

  /**
   * Queries the available upgrade versions for an EMR Serverless StarRocks instance. StarRocks instances have two version layers: a major version and a minor version. You can view both versions in the Version Information section on the Instance Details page in the EMR console. Use the Minor parameter to specify whether to query upgradable minor versions or major versions.
   * 
   * @param request - QueryUpgradableVersionsRequest
   * @returns QueryUpgradableVersionsResponse
   */
  async queryUpgradableVersions(request: $_model.QueryUpgradableVersionsRequest): Promise<$_model.QueryUpgradableVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryUpgradableVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Reboot ECS instances in a cluster.
   * 
   * @remarks
   * This operation is asynchronous. The instance does not reboot immediately. After a successful call, the instance enters the Rebooting state. The reboot is complete when the instance status changes to Running.
   * 
   * @param request - RebootECSRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootECSResponse
   */
  async rebootECSWithOptions(request: $_model.RebootECSRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RebootECSResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.rebootTime)) {
      query["RebootTime"] = request.rebootTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootECS",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/event/rebootEcs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootECSResponse>(await this.callApi(params, req, runtime), new $_model.RebootECSResponse({}));
  }

  /**
   * Reboot ECS instances in a cluster.
   * 
   * @remarks
   * This operation is asynchronous. The instance does not reboot immediately. After a successful call, the instance enters the Rebooting state. The reboot is complete when the instance status changes to Running.
   * 
   * @param request - RebootECSRequest
   * @returns RebootECSResponse
   */
  async rebootECS(request: $_model.RebootECSRequest): Promise<$_model.RebootECSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebootECSWithOptions(request, headers, runtime);
  }

  /**
   * Releases a pay-as-you-go E-MapReduce (EMR) Serverless StarRocks instance. To unsubscribe from a subscription instance, go to the Unsubscribe page of the Expenses and Costs console.
   * 
   * @remarks
   * *
   * **Warning:** After an instance is released, all physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.
   * 
   * @param request - ReleaseInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceResponse
   */
  async releaseInstanceWithOptions(request: $_model.ReleaseInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/release`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceResponse({}));
  }

  /**
   * Releases a pay-as-you-go E-MapReduce (EMR) Serverless StarRocks instance. To unsubscribe from a subscription instance, go to the Unsubscribe page of the Expenses and Costs console.
   * 
   * @remarks
   * *
   * **Warning:** After an instance is released, all physical resources used by the instance are recycled. Relevant data is erased and cannot be restored.
   * 
   * @param request - ReleaseInstanceRequest
   * @returns ReleaseInstanceResponse
   */
  async releaseInstance(request: $_model.ReleaseInstanceRequest): Promise<$_model.ReleaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Renews an instance.
   * 
   * @remarks
   * Before you call this API, make sure that you fully understand the billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note that only subscription instances can be renewed.
   * 
   * @param request - RenewInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: $_model.RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billingInstanceIds)) {
      query["BillingInstanceIds"] = request.billingInstanceIds;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.promotionOptionNo)) {
      query["PromotionOptionNo"] = request.promotionOptionNo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/order/renew_instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews an instance.
   * 
   * @remarks
   * Before you call this API, make sure that you fully understand the billing model and <props="china">[billable items](https://help.aliyun.com/zh/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c4g.11186623.help-menu-28066.d_0_1_1.4db82b05p3Gg0G) <props="intl">[billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of Serverless StarRocks.
   * When you call this API, note that only subscription instances can be renewed.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Restarts an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * This operation is an asynchronous operation. After you call this operation to restart a StarRocks instance, the operation sets the status of the instance to Restarting and begins the restart process. When the status of the instance changes to Running, the instance is restarted.
   * 
   * @param request - RestartInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/restartCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * This operation is an asynchronous operation. After you call this operation to restart a StarRocks instance, the operation sets the status of the instance to Restarting and begins the restart process. When the status of the instance changes to Running, the instance is restarted.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Restarts a specified node group.
   * 
   * @remarks
   * This operation is asynchronous. The instance does not restart immediately. After you call the operation successfully, the instance enters the restarting state. When the instance status changes to running, the restart is complete.
   * 
   * @param request - RestartNodeGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartNodeGroupResponse
   */
  async restartNodeGroupWithOptions(request: $_model.RestartNodeGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartNodeGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartNodeGroup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/nodegroup/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.RestartNodeGroupResponse({}));
  }

  /**
   * Restarts a specified node group.
   * 
   * @remarks
   * This operation is asynchronous. The instance does not restart immediately. After you call the operation successfully, the instance enters the restarting state. When the instance status changes to running, the restart is complete.
   * 
   * @param request - RestartNodeGroupRequest
   * @returns RestartNodeGroupResponse
   */
  async restartNodeGroup(request: $_model.RestartNodeGroupRequest): Promise<$_model.RestartNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartNodeGroupWithOptions(request, headers, runtime);
  }

  /**
   * Restart nodes in a cluster.
   * 
   * @remarks
   * This API is asynchronous. The instance restart is not immediate. After a successful call, the instance enters the restarting state. The restart is complete when the returned status is running.
   * 
   * @param request - RestartNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartNodesResponse
   */
  async restartNodesWithOptions(request: $_model.RestartNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.restartNodeGroups)) {
      body["RestartNodeGroups"] = request.restartNodeGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartNodes",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/restart/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartNodesResponse>(await this.callApi(params, req, runtime), new $_model.RestartNodesResponse({}));
  }

  /**
   * Restart nodes in a cluster.
   * 
   * @remarks
   * This API is asynchronous. The instance restart is not immediate. After a successful call, the instance enters the restarting state. The restart is complete when the returned status is running.
   * 
   * @param request - RestartNodesRequest
   * @returns RestartNodesResponse
   */
  async restartNodes(request: $_model.RestartNodesRequest): Promise<$_model.RestartNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartNodesWithOptions(request, headers, runtime);
  }

  /**
   * Restore an instance from a backup
   * 
   * @remarks
   * This is an asynchronous API. The instance does not restart immediately. After you call this API successfully, the instance enters the restarting state. When the instance status changes to running, the restore is complete.
   * 
   * @param request - RestoreInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreInstanceResponse
   */
  async restoreInstanceWithOptions(request: $_model.RestoreInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adminPassword)) {
      body["AdminPassword"] = request.adminPassword;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backupTaskId)) {
      body["BackupTaskId"] = request.backupTaskId;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.payType)) {
      body["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.vSwitches)) {
      body["VSwitches"] = request.vSwitches;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/restore/restoreInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestoreInstanceResponse({}));
  }

  /**
   * Restore an instance from a backup
   * 
   * @remarks
   * This is an asynchronous API. The instance does not restart immediately. After you call this API successfully, the instance enters the restarting state. When the instance status changes to running, the restore is complete.
   * 
   * @param request - RestoreInstanceRequest
   * @returns RestoreInstanceResponse
   */
  async restoreInstance(request: $_model.RestoreInstanceRequest): Promise<$_model.RestoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restoreInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Resumes an instance automatically stopped by openlake.
   * 
   * @remarks
   * >Danger: 
   * When you release an instance, its physical resources are reclaimed. All data on the instance is lost and cannot be recovered.
   * 
   * @param request - ResumeInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: $_model.ResumeInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstance",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/lifecycle/resumeInstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceResponse({}));
  }

  /**
   * Resumes an instance automatically stopped by openlake.
   * 
   * @remarks
   * >Danger: 
   * When you release an instance, its physical resources are reclaimed. All data on the instance is lost and cannot be recovered.
   * 
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: $_model.ResumeInstanceRequest): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Rolls back a configuration modification that is currently in progress.
   * 
   * @param request - RollbackConfigModificationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackConfigModificationResponse
   */
  async rollbackConfigModificationWithOptions(request: $_model.RollbackConfigModificationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackConfigModificationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configHistoryId)) {
      query["ConfigHistoryId"] = request.configHistoryId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.restart)) {
      query["Restart"] = request.restart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackConfigModification",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/config/rollbackConfigModification`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackConfigModificationResponse>(await this.callApi(params, req, runtime), new $_model.RollbackConfigModificationResponse({}));
  }

  /**
   * Rolls back a configuration modification that is currently in progress.
   * 
   * @param request - RollbackConfigModificationRequest
   * @returns RollbackConfigModificationResponse
   */
  async rollbackConfigModification(request: $_model.RollbackConfigModificationRequest): Promise<$_model.RollbackConfigModificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackConfigModificationWithOptions(request, headers, runtime);
  }

  /**
   * Switches the active and standby zones.
   * 
   * @remarks
   * Switches the active and standby zones.
   * 
   * @param request - SwitchActiveStandbyZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchActiveStandbyZonesResponse
   */
  async switchActiveStandbyZonesWithOptions(request: $_model.SwitchActiveStandbyZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchActiveStandbyZonesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.targetZoneId)) {
      query["TargetZoneId"] = request.targetZoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchActiveStandbyZones",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/recovery/switchZones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchActiveStandbyZonesResponse>(await this.callApi(params, req, runtime), new $_model.SwitchActiveStandbyZonesResponse({}));
  }

  /**
   * Switches the active and standby zones.
   * 
   * @remarks
   * Switches the active and standby zones.
   * 
   * @param request - SwitchActiveStandbyZonesRequest
   * @returns SwitchActiveStandbyZonesResponse
   */
  async switchActiveStandbyZones(request: $_model.SwitchActiveStandbyZonesRequest): Promise<$_model.SwitchActiveStandbyZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.switchActiveStandbyZonesWithOptions(request, headers, runtime);
  }

  /**
   * Attaches tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Attaches tags to specified resources.
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
   * Enables or disables automatic minor version upgrades for a StarRocks instance.
   * 
   * @param request - ToggleAutoMinorVersionUpgradeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ToggleAutoMinorVersionUpgradeResponse
   */
  async toggleAutoMinorVersionUpgradeWithOptions(request: $_model.ToggleAutoMinorVersionUpgradeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ToggleAutoMinorVersionUpgradeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoUpgrade)) {
      query["AutoUpgrade"] = request.autoUpgrade;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ToggleAutoMinorVersionUpgrade",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/toggleAutoMinorVersionUpgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ToggleAutoMinorVersionUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.ToggleAutoMinorVersionUpgradeResponse({}));
  }

  /**
   * Enables or disables automatic minor version upgrades for a StarRocks instance.
   * 
   * @param request - ToggleAutoMinorVersionUpgradeRequest
   * @returns ToggleAutoMinorVersionUpgradeResponse
   */
  async toggleAutoMinorVersionUpgrade(request: $_model.ToggleAutoMinorVersionUpgradeRequest): Promise<$_model.ToggleAutoMinorVersionUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.toggleAutoMinorVersionUpgradeWithOptions(request, headers, runtime);
  }

  /**
   * Switches an Internet-facing SLB instance on or off.
   * 
   * @remarks
   * >Danger: 
   * After you release an instance, Alibaba Cloud reclaims all physical resources used by the instance. All associated data is permanently lost and cannot be recovered.
   * 
   * @param request - TogglePublicSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TogglePublicSlbResponse
   */
  async togglePublicSlbWithOptions(request: $_model.TogglePublicSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TogglePublicSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enablePublicSlb)) {
      query["EnablePublicSlb"] = request.enablePublicSlb;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TogglePublicSlb",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/togglePublicSlb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TogglePublicSlbResponse>(await this.callApi(params, req, runtime), new $_model.TogglePublicSlbResponse({}));
  }

  /**
   * Switches an Internet-facing SLB instance on or off.
   * 
   * @remarks
   * >Danger: 
   * After you release an instance, Alibaba Cloud reclaims all physical resources used by the instance. All associated data is permanently lost and cannot be recovered.
   * 
   * @param request - TogglePublicSlbRequest
   * @returns TogglePublicSlbResponse
   */
  async togglePublicSlb(request: $_model.TogglePublicSlbRequest): Promise<$_model.TogglePublicSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.togglePublicSlbWithOptions(request, headers, runtime);
  }

  /**
   * Detaches tags from multiple resources.
   * 
   * @param tmpReq - UnTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagResourcesResponse
   */
  async unTagResourcesWithOptions(tmpReq: $_model.UnTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UnTagResourcesShrinkRequest({ });
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "UnTagResources",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UnTagResourcesResponse({}));
  }

  /**
   * Detaches tags from multiple resources.
   * 
   * @param request - UnTagResourcesRequest
   * @returns UnTagResourcesResponse
   */
  async unTagResources(request: $_model.UnTagResourcesRequest): Promise<$_model.UnTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Updates the description of a backup job.
   * 
   * @param request - UpdateBackupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupResponse
   */
  async updateBackupWithOptions(request: $_model.UpdateBackupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupTaskId)) {
      body["backupTaskId"] = request.backupTaskId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backup/manage/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupResponse({}));
  }

  /**
   * Updates the description of a backup job.
   * 
   * @param request - UpdateBackupRequest
   * @returns UpdateBackupResponse
   */
  async updateBackup(request: $_model.UpdateBackupRequest): Promise<$_model.UpdateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBackupWithOptions(request, headers, runtime);
  }

  /**
   * Updates a backup policy.
   * 
   * @param request - UpdateBackupPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupPolicyResponse
   */
  async updateBackupPolicyWithOptions(request: $_model.UpdateBackupPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireDays)) {
      body["ExpireDays"] = request.expireDays;
    }

    if (!$dara.isNull(request.hour)) {
      body["Hour"] = request.hour;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minute)) {
      body["Minute"] = request.minute;
    }

    if (!$dara.isNull(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.recurrenceValues)) {
      body["RecurrenceValues"] = request.recurrenceValues;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      body["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupPolicy",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/backupRestore/policy/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupPolicyResponse({}));
  }

  /**
   * Updates a backup policy.
   * 
   * @param request - UpdateBackupPolicyRequest
   * @returns UpdateBackupPolicyResponse
   */
  async updateBackupPolicy(request: $_model.UpdateBackupPolicyRequest): Promise<$_model.UpdateBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBackupPolicyWithOptions(request, headers, runtime);
  }

  /**
   * Updates the number of gateway nodes.
   * 
   * @remarks
   * Updates the number of gateway nodes.
   * 
   * @param request - UpdateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayResponse
   */
  async updateGatewayWithOptions(request: $_model.UpdateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feNodeNumber)) {
      query["FeNodeNumber"] = request.feNodeNumber;
    }

    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayName)) {
      query["GatewayName"] = request.gatewayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGateway",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/gateway/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayResponse({}));
  }

  /**
   * Updates the number of gateway nodes.
   * 
   * @remarks
   * Updates the number of gateway nodes.
   * 
   * @param request - UpdateGatewayRequest
   * @returns UpdateGatewayResponse
   */
  async updateGateway(request: $_model.UpdateGatewayRequest): Promise<$_model.UpdateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Updates the CIDR blocks in a whitelist group.
   * 
   * @param request - UpdateInnerIpWhitelistGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInnerIpWhitelistGroupResponse
   */
  async updateInnerIpWhitelistGroupWithOptions(request: $_model.UpdateInnerIpWhitelistGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInnerIpWhitelistGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cidrIpList)) {
      body["CidrIpList"] = request.cidrIpList;
    }

    if (!$dara.isNull(request.innerIpWhitelistGroupId)) {
      body["InnerIpWhitelistGroupId"] = request.innerIpWhitelistGroupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInnerIpWhitelistGroup",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/securityGroup/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInnerIpWhitelistGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInnerIpWhitelistGroupResponse({}));
  }

  /**
   * Updates the CIDR blocks in a whitelist group.
   * 
   * @param request - UpdateInnerIpWhitelistGroupRequest
   * @returns UpdateInnerIpWhitelistGroupResponse
   */
  async updateInnerIpWhitelistGroup(request: $_model.UpdateInnerIpWhitelistGroupRequest): Promise<$_model.UpdateInnerIpWhitelistGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInnerIpWhitelistGroupWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the name of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(request: $_model.UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/cluster/update_name`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNameResponse({}));
  }

  /**
   * Modifies the name of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(request, headers, runtime);
  }

  /**
   * Updates the description of a compute group.
   * 
   * @param request - UpdateNodeGroupDescriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeGroupDescriptionResponse
   */
  async updateNodeGroupDescriptionWithOptions(request: $_model.UpdateNodeGroupDescriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodeGroupDescriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.xAcsRamAuthContext)) {
      query["X-Acs-Ram-Auth-Context"] = request.xAcsRamAuthContext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodeGroupDescription",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/nodegroup/updateDescription`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodeGroupDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodeGroupDescriptionResponse({}));
  }

  /**
   * Updates the description of a compute group.
   * 
   * @param request - UpdateNodeGroupDescriptionRequest
   * @returns UpdateNodeGroupDescriptionResponse
   */
  async updateNodeGroupDescription(request: $_model.UpdateNodeGroupDescriptionRequest): Promise<$_model.UpdateNodeGroupDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNodeGroupDescriptionWithOptions(request, headers, runtime);
  }

  /**
   * Enable or disable the Internet-facing SLB for the FE or BE component.
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatusWithOptions(request: $_model.UpdatePublicNetworkStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePublicNetworkStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.publicNetworkEnabled)) {
      query["PublicNetworkEnabled"] = request.publicNetworkEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicNetworkStatus",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/network/updatePublicNetworkStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePublicNetworkStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePublicNetworkStatusResponse({}));
  }

  /**
   * Enable or disable the Internet-facing SLB for the FE or BE component.
   * 
   * @param request - UpdatePublicNetworkStatusRequest
   * @returns UpdatePublicNetworkStatusResponse
   */
  async updatePublicNetworkStatus(request: $_model.UpdatePublicNetworkStatusRequest): Promise<$_model.UpdatePublicNetworkStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkStatusWithOptions(request, headers, runtime);
  }

  /**
   * Upgrades the version of a Serverless StarRocks instance. Serverless StarRocks has two levels of version definition: the major version displayed in the "Version" field on the cluster details page, and the minor version displayed in the "Minor Version" field on the cluster details page. This operation can be used to upgrade either the minor version or the major version. You can call the QueryUpgradableVersions operation to query the versions to which a cluster can be upgraded.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - UpgradeVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeVersionResponse
   */
  async upgradeVersionWithOptions(request: $_model.UpgradeVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fastMode)) {
      query["FastMode"] = request.fastMode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.minor)) {
      query["Minor"] = request.minor;
    }

    if (!$dara.isNull(request.targetVersion)) {
      query["TargetVersion"] = request.targetVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeVersion",
      version: "2022-10-19",
      protocol: "HTTPS",
      pathname: `/webapi/starrocks/upgradeVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeVersionResponse({}));
  }

  /**
   * Upgrades the version of a Serverless StarRocks instance. Serverless StarRocks has two levels of version definition: the major version displayed in the "Version" field on the cluster details page, and the minor version displayed in the "Minor Version" field on the cluster details page. This operation can be used to upgrade either the minor version or the major version. You can call the QueryUpgradableVersions operation to query the versions to which a cluster can be upgraded.
   * 
   * @remarks
   * The instance must be in the Running state when you call this operation.
   * 
   * @param request - UpgradeVersionRequest
   * @returns UpgradeVersionResponse
   */
  async upgradeVersion(request: $_model.UpgradeVersionRequest): Promise<$_model.UpgradeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeVersionWithOptions(request, headers, runtime);
  }

}
