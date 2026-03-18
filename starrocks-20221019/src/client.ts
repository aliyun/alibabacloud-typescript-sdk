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
   * 新增备份策略
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
   * 新增备份策略
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
   * 新建网关
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
   * 新建网关
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
   * This interface is used to modify the resource group of a Serverless StarRocks instance.
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
   * This interface is used to modify the resource group of a Serverless StarRocks instance.
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
   * 校验ABM的资源库存
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
   * 校验ABM的资源库存
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
   * 创建Agent资源组
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
   * 创建Agent资源组
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
   * 创建StarRocks集群
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
   * 创建StarRocks集群
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
   * 新建一条弹性规则
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
   * 新建一条弹性规则
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
   * This interface is used to create the AliyunServiceRoleForEMRStarRocks role for users.
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
   * This interface is used to create the AliyunServiceRoleForEMRStarRocks role for users.
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceLinkedRoleWithOptions(headers, runtime);
  }

  /**
   * 删除数据备份
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
   * 删除数据备份
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
   * 删除备份策略
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
   * 删除备份策略
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
   * 删除网关
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
   * 删除网关
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
   * 删除白名单分组
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
   * 删除白名单分组
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
   * 删除一条弹性规则
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
   * 删除一条弹性规则
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
   * @param request - DescribeAvailableZonesRequest
   * @returns DescribeAvailableZonesResponse
   */
  async describeAvailableZones(request: $_model.DescribeAvailableZonesRequest): Promise<$_model.DescribeAvailableZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAvailableZonesWithOptions(request, headers, runtime);
  }

  /**
   * 获取备份策略详情
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
   * 获取备份策略详情
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
   * 获取备份详情
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
   * 获取备份详情
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
   * 查询实例配置历史
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
   * 查询实例配置历史
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
   * 获取集群事件名称
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
   * 获取集群事件名称
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
   * 查询白名单分组
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
   * 查询白名单分组
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
   * 查询实例配置
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
   * 查询实例配置
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
   * 获取实例的健康诊断结果
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
   * 获取实例的健康诊断结果
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
   * 获取 StarRocks 实例的 Meta Token。
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
   * 获取 StarRocks 实例的 Meta Token。
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
   * This operation is used to query Serverless StarRocks instances, supporting filtering based on instance name or tags and other information.
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
   * This operation is used to query Serverless StarRocks instances, supporting filtering based on instance name or tags and other information.
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
   * 获取节点组信息
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
   * 获取节点组信息
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
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * 描述Starrocks的资源配置约束
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
   * 描述Starrocks的资源配置约束
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
   * 获取 starrocks 实例的系统时区
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
   * 获取 starrocks 实例的系统时区
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
   * 获取时间触发规则信息
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
   * 获取时间触发规则信息
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
   * StarRocks关闭SSL
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
   * StarRocks关闭SSL
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
   * 默认网关开启内网SLB
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
   * 默认网关开启内网SLB
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
   * 开启Multi AZ
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
   * 开启Multi AZ
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
   * StarRocks开启SSL
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
   * StarRocks开启SSL
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
   * 获取StarRocks集群实例的特性开关
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
   * 获取StarRocks集群实例的特性开关
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
   * 获取StarRocks 计算组实例的特性开关
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
   * 获取StarRocks 计算组实例的特性开关
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
   * 默认网关开启内网SLB
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
   * 默认网关开启内网SLB
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
   * 获取网关列表
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
   * 获取网关列表
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
   * 获取操作的详细信息
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
   * 获取操作的详细信息
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
   * 获取集群的操作历史
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
   * 获取集群的操作历史
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
   * 修改实例的付费类型
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
   * 修改实例的付费类型
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
   * Modifies the number of CUs for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the number of CUs for a warehouse of only StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you modify the number of CUs for a warehouse, the billing of CUs has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of CUs.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of CUs before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Modifies the number of CUs for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the number of CUs for a warehouse of only StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you modify the number of CUs for a warehouse, the billing of CUs has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of CUs.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of CUs before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Increases the number of disks for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can increase the number of disks only for StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you increase the number of disks for a warehouse, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of disks before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Increases the number of disks for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can increase the number of disks only for StarRocks instances of Standard Edition.
   * *   You can increase the number of disks only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you increase the number of disks for a warehouse, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of disks before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Modifies the disk performance level for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/en/product/ecs?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.47c9281fkIZGiB#pricing) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the disk performance level only for StarRocks instances of Standard Edition.
   * *   You can modify the disk performance level only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * *   You cannot downgrade the performance level to PL0.
   * *   The performance level of an Enterprise SSD (ESSD) is limited by the ESSD disk size. If you cannot upgrade the performance level of an ESSD, expand the ESSD and try again. For more information, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * After the disk performance level is changed, the billing of the disk has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk performance level before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Modifies the disk performance level for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.alibabacloud.com/en/product/ecs?_p_lc=1&spm=openapi-amp.newDocPublishment.0.0.47c9281fkIZGiB#pricing) of EMR Serverless StarRocks instances.
   * Before you call this operation, take note of the following items:
   * *   You can modify the disk performance level only for StarRocks instances of Standard Edition.
   * *   You can modify the disk performance level only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * *   You cannot downgrade the performance level to PL0.
   * *   The performance level of an Enterprise SSD (ESSD) is limited by the ESSD disk size. If you cannot upgrade the performance level of an ESSD, expand the ESSD and try again. For more information, see [Enterprise SSDs](https://help.aliyun.com/document_detail/122389.html).
   * After the disk performance level is changed, the billing of the disk has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk type.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk performance level before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Expands the disk size for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can expand the disk size only for StarRocks instances of Standard Edition.
   * *   You can expand the disk size only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you expand the disk size, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk size.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk size before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Expands the disk size for a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can expand the disk size only for StarRocks instances of Standard Edition.
   * *   You can expand the disk size only for warehouses of the standard specifications.
   * *   The instance must be in the Running state.
   * After you expand the disk size, the billing of disks has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged for the disk based on the new disk size.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the disk size before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * 修改计算组的节点磁盘类型
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
   * 修改计算组的节点磁盘类型
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
   * 修改/etc/hosts
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
   * 修改/etc/hosts
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
   * 修改实例配置
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
   * 修改实例配置
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
   * 配置变更预检查，返回此次变更需要重启的计算组ID
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
   * 配置变更预检查，返回此次变更需要重启的计算组ID
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
   * 修改Starrocks实例的可维护时间
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
   * 修改Starrocks实例的可维护时间
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
   * Modifies the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can modify the number of nodes in a warehouse of only StarRocks instances of Standard Edition.
   * *   The instance must be in the Running state.
   * *   The number of frontend nodes (FEs) cannot be an even number, and you cannot reduce the number of FE nodes.
   * After you modify the number of nodes in a warehouse, the billing of nodes has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of nodes.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of nodes before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * Modifies the number of nodes in a warehouse of an E-MapReduce (EMR) Serverless StarRocks instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and [billable items](https://www.alibabacloud.com/help/en/emr/emr-serverless-starrocks/product-overview/billable-items?spm=a2c63.p38356.help-menu-28066.d_0_1_0.3aaf4b0b69jN1P) of EMR Serverless StarRocks instances. Before you call this operation, take note of the following items:
   * *   You can modify the number of nodes in a warehouse of only StarRocks instances of Standard Edition.
   * *   The instance must be in the Running state.
   * *   The number of frontend nodes (FEs) cannot be an even number, and you cannot reduce the number of FE nodes.
   * After you modify the number of nodes in a warehouse, the billing of nodes has the following changes:
   * *   Pay-as-you-go StarRocks instances: You are charged based on the number of nodes.
   * *   Subscription StarRocks instances: You are charged additionally based on the price difference between the number of nodes before and after the change and the remaining days of the billing cycle. The billing cycle starts from 00:00 the next day until the end of the subscription period.
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
   * 修改弹性伸缩规则
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
   * 修改弹性伸缩规则
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
   * 修改计算组的节点规格类型
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
   * 修改计算组的节点规格类型
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
   * 修改计算组中节点规格类型预检查
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
   * 修改计算组中节点规格类型预检查
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
   * 修改 starrocks 用户的密码
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
   * 修改 starrocks 用户的密码
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
   * 查询开启Multi AZ的价格
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
   * 查询开启Multi AZ的价格
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
   * 查询小版本号
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
   * 查询小版本号
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
   * StarRocks新购询价接口
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
   * StarRocks新购询价接口
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
   * 修改节点组节点Cu询价
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
   * 修改节点组节点Cu询价
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
   * 修改计算组节点磁盘数量询价
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
   * 修改计算组节点磁盘数量询价
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
   * 修改计算组节点磁盘性能级别询价
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
   * 修改计算组节点磁盘性能级别询价
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
   * 修改计算组节点单盘存储大小询价
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
   * 修改计算组节点单盘存储大小询价
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
   * 修改计算组节点磁盘类型询价
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
   * 修改计算组节点磁盘类型询价
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
   * 修改节点组节点数量询价
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
   * 修改节点组节点数量询价
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
   * 修改节点组规格类型询价
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
   * 修改节点组规格类型询价
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
   * StarRocks新购询价接口
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
   * StarRocks新购询价接口
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
   * StarRocks退订包年包月计费实例询价
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
   * StarRocks退订包年包月计费实例询价
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
   * 查询 StarRocks 计费实例的续费价格
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
   * 查询 StarRocks 计费实例的续费价格
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
   * 查询计算组/集群的未支付订单
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
   * 查询计算组/集群的未支付订单
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
   * Queries the versions of an E-MapReduce (EMR) Serverless StarRocks instance that the versions that you can upgrade to. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. You can call this operation to query the minor versions or major versions that the versions that you can upgrade to.
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
   * Queries the versions of an E-MapReduce (EMR) Serverless StarRocks instance that the versions that you can upgrade to. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. You can call this operation to query the minor versions or major versions that the versions that you can upgrade to.
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
   * 处理集群事件
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
   * 处理集群事件
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
   * 续费实例
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
   * 续费实例
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
   * 重启指定的node group
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
   * 重启指定的node group
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
   * 重启集群中的节点
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
   * 重启集群中的节点
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
   * 从备份中恢复实例
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
   * 从备份中恢复实例
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
   * 该接口用于恢复来自openlake自动停机的实例。
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
   * 该接口用于恢复来自openlake自动停机的实例。
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
   * 回滚正在进行中的配置修改
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
   * 回滚正在进行中的配置修改
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
   * 切换主备可用区
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
   * 切换主备可用区
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
   * Adds a tag to a resource.
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
   * Adds a tag to a resource.
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
   * 开启/关闭StarRocks实例的小版本自动更新
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
   * 开启/关闭StarRocks实例的小版本自动更新
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
   * 公网SLB开关
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
   * 公网SLB开关
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
   * Removes tags from specified resources.
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
   * Removes tags from specified resources.
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
   * 更新备份任务描述
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
   * 更新备份任务描述
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
   * 更新备份策略
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
   * 更新备份策略
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
   * 更新网关
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
   * 更新网关
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
   * 更新白名单分组中的CIDR
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
   * 更新白名单分组中的CIDR
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
   * 更新节点组描述信息
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
   * 更新节点组描述信息
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
   * 该接口用于开通/关闭 FE/BE的公网SLB。
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
   * 该接口用于开通/关闭 FE/BE的公网SLB。
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
   * Upgrades the version of an E-MapReduce (EMR) Serverless StarRocks instance. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. This operation can be used to upgrade the minor version or major version of a StarRocks instance. You can call the QueryUpgradableVersions operation to query the versions that you can upgrade to.
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
   * Upgrades the version of an E-MapReduce (EMR) Serverless StarRocks instance. The versions of a StarRocks instance include the major version and minor version. You can view the major version and minor version of a StarRocks instance in the Version Information section of the Instance Details tab in the EMR console. This operation can be used to upgrade the minor version or major version of a StarRocks instance. You can call the QueryUpgradableVersions operation to query the versions that you can upgrade to.
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
