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
      'us-west-1': "tablestore.us-west-1.aliyuncs.com",
      'us-east-1': "tablestore.us-east-1.aliyuncs.com",
      'me-east-1': "tablestore.me-east-1.aliyuncs.com",
      'me-central-1': "tablestore.me-central-1.aliyuncs.com",
      'eu-west-1': "tablestore.eu-west-1.aliyuncs.com",
      'eu-central-1': "tablestore.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "tablestore.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "tablestore.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "tablestore.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "tablestore.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "tablestore.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "tablestore.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "tablestore.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "tablestore.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "tablestore.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "tablestore.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "tablestore.cn-chengdu.aliyuncs.com",
      'cn-beijing': "tablestore.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "tablestore.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "tablestore.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "tablestore.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "tablestore.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "tablestore.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "tablestore.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "tablestore.ap-south-1.aliyuncs.com",
      'ap-northeast-1': "tablestore.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("tablestore", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Binds an instance to a VPC.
   * 
   * @param request - BindInstance2VpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindInstance2VpcResponse
   */
  async bindInstance2VpcWithOptions(request: $_model.BindInstance2VpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindInstance2VpcResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceVpcName)) {
      body["InstanceVpcName"] = request.instanceVpcName;
    }

    if (!$dara.isNull(request.virtualSwitchId)) {
      body["VirtualSwitchId"] = request.virtualSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindInstance2Vpc",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/bindinstance2vpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindInstance2VpcResponse>(await this.callApi(params, req, runtime), new $_model.BindInstance2VpcResponse({}));
  }

  /**
   * Binds an instance to a VPC.
   * 
   * @param request - BindInstance2VpcRequest
   * @returns BindInstance2VpcResponse
   */
  async bindInstance2Vpc(request: $_model.BindInstance2VpcRequest): Promise<$_model.BindInstance2VpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindInstance2VpcWithOptions(request, headers, runtime);
  }

  /**
   * Changes the resource group to which an instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/changeresourcegroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which an instance belongs.
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
   * Checks the validity of a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - CheckInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstancePolicyResponse
   */
  async checkInstancePolicyWithOptions(request: $_model.CheckInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/checkinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckInstancePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CheckInstancePolicyResponse({}));
  }

  /**
   * Checks the validity of a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - CheckInstancePolicyRequest
   * @returns CheckInstancePolicyResponse
   */
  async checkInstancePolicy(request: $_model.CheckInstancePolicyRequest): Promise<$_model.CheckInstancePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstancePolicyWithOptions(request, headers, runtime);
  }

  /**
   * Creates an agent storage instance.
   * 
   * @remarks
   * - **Before you call this operation, make sure that you fully understand the billing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - You can create up to 10 agent storage instances within a single Alibaba Cloud account. Agent storage instance names must be unique within the same region.
   * [_single.params.body.props.Network.title](Deprecated) The network type of the instance. Valid values: NORMAL, VPC_CONSOLE. Default value: NORMAL.
   * [_single.params.body.props.Network.desc](Deprecated) The network type of the agent storage instance. Valid values: NORMAL, VPC_CONSOLE. Default value: NORMAL.
   * 
   * @param request - CreateAgentStorageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentStorageResponse
   */
  async createAgentStorageWithOptions(request: $_model.CreateAgentStorageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentStorageDescription)) {
      body["AgentStorageDescription"] = request.agentStorageDescription;
    }

    if (!$dara.isNull(request.agentStorageName)) {
      body["AgentStorageName"] = request.agentStorageName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentStorage",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/createagentstorage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAgentStorageResponse>(await this.callApi(params, req, runtime), new $_model.CreateAgentStorageResponse({}));
  }

  /**
   * Creates an agent storage instance.
   * 
   * @remarks
   * - **Before you call this operation, make sure that you fully understand the billing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - You can create up to 10 agent storage instances within a single Alibaba Cloud account. Agent storage instance names must be unique within the same region.
   * [_single.params.body.props.Network.title](Deprecated) The network type of the instance. Valid values: NORMAL, VPC_CONSOLE. Default value: NORMAL.
   * [_single.params.body.props.Network.desc](Deprecated) The network type of the agent storage instance. Valid values: NORMAL, VPC_CONSOLE. Default value: NORMAL.
   * 
   * @param request - CreateAgentStorageRequest
   * @returns CreateAgentStorageResponse
   */
  async createAgentStorage(request: $_model.CreateAgentStorageRequest): Promise<$_model.CreateAgentStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentStorageWithOptions(request, headers, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   Each Alibaba Cloud account can create up to 10 instances. The name of an instance must be unique within the region in which the instance resides.
   * *   After you create an instance, you cannot change the type of the instance. Proceed with caution.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.disableReplication)) {
      body["DisableReplication"] = request.disableReplication;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/createinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   *   **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * *   Each Alibaba Cloud account can create up to 10 instances. The name of an instance must be unique within the region in which the instance resides.
   * *   After you create an instance, you cannot change the type of the instance. Proceed with caution.
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
   * Creates a VCU instance.
   * 
   * @remarks
   * - **Before you call this operation, ensure that you understand the billing methods and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - An Alibaba Cloud account can create a maximum of 10 instances. The instance names must be unique within the same region.
   * - The cluster type (instance type) cannot be changed after an instance is created. Select the cluster type with caution.
   * 
   * @param request - CreateVCUInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVCUInstanceResponse
   */
  async createVCUInstanceWithOptions(request: $_model.CreateVCUInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVCUInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.autoRenewPeriodInMonth)) {
      body["AutoRenewPeriodInMonth"] = request.autoRenewPeriodInMonth;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.enableAutoRenew)) {
      body["EnableAutoRenew"] = request.enableAutoRenew;
    }

    if (!$dara.isNull(request.enableElasticVCU)) {
      body["EnableElasticVCU"] = request.enableElasticVCU;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.periodInMonth)) {
      body["PeriodInMonth"] = request.periodInMonth;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.VCU)) {
      body["VCU"] = request.VCU;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVCUInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/createvcuinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVCUInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateVCUInstanceResponse({}));
  }

  /**
   * Creates a VCU instance.
   * 
   * @remarks
   * - **Before you call this operation, ensure that you understand the billing methods and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - An Alibaba Cloud account can create a maximum of 10 instances. The instance names must be unique within the same region.
   * - The cluster type (instance type) cannot be changed after an instance is created. Select the cluster type with caution.
   * 
   * @param request - CreateVCUInstanceRequest
   * @returns CreateVCUInstanceResponse
   */
  async createVCUInstance(request: $_model.CreateVCUInstanceRequest): Promise<$_model.CreateVCUInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVCUInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an agent store.
   * 
   * @remarks
   * - To avoid conflicts, do not create an agent store with the same name as the agent store being deleted during the deletion process.
   * - After an agent store is deleted, the agent store becomes unavailable, and the tables, table data, and related indexes in the agent store cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteAgentStorageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentStorageResponse
   */
  async deleteAgentStorageWithOptions(request: $_model.DeleteAgentStorageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentStorageName)) {
      body["AgentStorageName"] = request.agentStorageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentStorage",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deleteagentstorage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAgentStorageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAgentStorageResponse({}));
  }

  /**
   * Deletes an agent store.
   * 
   * @remarks
   * - To avoid conflicts, do not create an agent store with the same name as the agent store being deleted during the deletion process.
   * - After an agent store is deleted, the agent store becomes unavailable, and the tables, table data, and related indexes in the agent store cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteAgentStorageRequest
   * @returns DeleteAgentStorageResponse
   */
  async deleteAgentStorage(request: $_model.DeleteAgentStorageRequest): Promise<$_model.DeleteAgentStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentStorageWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an instance.
   * 
   * @remarks
   *   Before you delete an instance, make sure that all data tables and time series tables in the instance are deleted and virtual private clouds (VPCs) are unbound from the instance.
   * *   To prevent conflicts, do not create an instance that has the same name as the instance that is being deleted.
   * *   After an instance is deleted, the instance becomes unavailable and the tables, table data, and related indexes in the instance cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deleteinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes an instance.
   * 
   * @remarks
   *   Before you delete an instance, make sure that all data tables and time series tables in the instance are deleted and virtual private clouds (VPCs) are unbound from the instance.
   * *   To prevent conflicts, do not create an instance that has the same name as the instance that is being deleted.
   * *   After an instance is deleted, the instance becomes unavailable and the tables, table data, and related indexes in the instance cannot be recovered. Proceed with caution.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) policy of an instance.
   * 
   * @remarks
   *   You cannot recover a deleted instance policy. Proceed with caution.
   * *   After you delete an instance policy, the access control that is specified by the instance policy becomes invalid. Make sure that your instance is in a secure environment.
   * 
   * @param request - DeleteInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstancePolicyResponse
   */
  async deleteInstancePolicyWithOptions(request: $_model.DeleteInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deleteinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstancePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstancePolicyResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) policy of an instance.
   * 
   * @remarks
   *   You cannot recover a deleted instance policy. Proceed with caution.
   * *   After you delete an instance policy, the access control that is specified by the instance policy becomes invalid. Make sure that your instance is in a secure environment.
   * 
   * @param request - DeleteInstancePolicyRequest
   * @returns DeleteInstancePolicyResponse
   */
  async deleteInstancePolicy(request: $_model.DeleteInstancePolicyRequest): Promise<$_model.DeleteInstancePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstancePolicyWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a VCU instance.
   * 
   * @param request - DeleteVCUInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVCUInstanceResponse
   */
  async deleteVCUInstanceWithOptions(request: $_model.DeleteVCUInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVCUInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVCUInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/deletevcuinstance`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVCUInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVCUInstanceResponse({}));
  }

  /**
   * Deletes a VCU instance.
   * 
   * @param request - DeleteVCUInstanceRequest
   * @returns DeleteVCUInstanceResponse
   */
  async deleteVCUInstance(request: $_model.DeleteVCUInstanceRequest): Promise<$_model.DeleteVCUInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVCUInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/region/DescribeRegions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Retrieves a list of available regions.
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
   * Retrieves agent storage.
   * 
   * @param request - GetAgentStorageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentStorageResponse
   */
  async getAgentStorageWithOptions(request: $_model.GetAgentStorageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentStorageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentStorageName)) {
      query["AgentStorageName"] = request.agentStorageName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentStorage",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/getagentstorage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentStorageResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentStorageResponse({}));
  }

  /**
   * Retrieves agent storage.
   * 
   * @param request - GetAgentStorageRequest
   * @returns GetAgentStorageResponse
   */
  async getAgentStorage(request: $_model.GetAgentStorageRequest): Promise<$_model.GetAgentStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentStorageWithOptions(request, headers, runtime);
  }

  /**
   * Queries instance information.
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/getinstance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries instance information.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Lists agent storages.
   * 
   * @param tmpReq - ListAgentStoragesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentStoragesResponse
   */
  async listAgentStoragesWithOptions(tmpReq: $_model.ListAgentStoragesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentStoragesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAgentStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.agentStorageNameList)) {
      request.agentStorageNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.agentStorageNameList, "AgentStorageNameList", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentStorageName)) {
      query["AgentStorageName"] = request.agentStorageName;
    }

    if (!$dara.isNull(request.agentStorageNameListShrink)) {
      query["AgentStorageNameList"] = request.agentStorageNameListShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentStorages",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listagentstorages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentStoragesResponse>(await this.callApi(params, req, runtime), new $_model.ListAgentStoragesResponse({}));
  }

  /**
   * Lists agent storages.
   * 
   * @param request - ListAgentStoragesRequest
   * @returns ListAgentStoragesResponse
   */
  async listAgentStorages(request: $_model.ListAgentStoragesRequest): Promise<$_model.ListAgentStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentStoragesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the supported cluster types in the current region.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterTypeResponse
   */
  async listClusterTypeWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterType",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listclustertype`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterTypeResponse({}));
  }

  /**
   * Lists the supported cluster types in the current region.
   * @returns ListClusterTypeResponse
   */
  async listClusterType(): Promise<$_model.ListClusterTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterTypeWithOptions(headers, runtime);
  }

  /**
   * Queries instances.
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
    if (!$dara.isNull(tmpReq.instanceNameList)) {
      request.instanceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceNameList, "InstanceNameList", "simple");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceNameListShrink)) {
      query["InstanceNameList"] = request.instanceNameListShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listinstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries instances.
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
   * Queries tagged resources.
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
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listtagresources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries tagged resources.
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
   * Retrieves a list of VPC information for an instance.
   * 
   * @param request - ListVpcInfoByInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcInfoByInstanceResponse
   */
  async listVpcInfoByInstanceWithOptions(request: $_model.ListVpcInfoByInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcInfoByInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcInfoByInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listvpcinfobyinstance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcInfoByInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcInfoByInstanceResponse({}));
  }

  /**
   * Retrieves a list of VPC information for an instance.
   * 
   * @param request - ListVpcInfoByInstanceRequest
   * @returns ListVpcInfoByInstanceResponse
   */
  async listVpcInfoByInstance(request: $_model.ListVpcInfoByInstanceRequest): Promise<$_model.ListVpcInfoByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcInfoByInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of VpcInfo objects for a specified Virtual Private Cloud (VPC).
   * 
   * @param request - ListVpcInfoByVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcInfoByVpcResponse
   */
  async listVpcInfoByVpcWithOptions(request: $_model.ListVpcInfoByVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcInfoByVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcInfoByVpc",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/listvpcinfobyvpc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcInfoByVpcResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcInfoByVpcResponse({}));
  }

  /**
   * Retrieves a list of VpcInfo objects for a specified Virtual Private Cloud (VPC).
   * 
   * @param request - ListVpcInfoByVpcRequest
   * @returns ListVpcInfoByVpcResponse
   */
  async listVpcInfoByVpc(request: $_model.ListVpcInfoByVpcRequest): Promise<$_model.ListVpcInfoByVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcInfoByVpcWithOptions(request, headers, runtime);
  }

  /**
   * Adds tags to instances.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/tagresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to instances.
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
   * Detaches an instance from a VPC.
   * 
   * @param request - UnbindInstance2VpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindInstance2VpcResponse
   */
  async unbindInstance2VpcWithOptions(request: $_model.UnbindInstance2VpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindInstance2VpcResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceVpcName)) {
      body["InstanceVpcName"] = request.instanceVpcName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindInstance2Vpc",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/unbindinstance2vpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindInstance2VpcResponse>(await this.callApi(params, req, runtime), new $_model.UnbindInstance2VpcResponse({}));
  }

  /**
   * Detaches an instance from a VPC.
   * 
   * @param request - UnbindInstance2VpcRequest
   * @returns UnbindInstance2VpcResponse
   */
  async unbindInstance2Vpc(request: $_model.UnbindInstance2VpcRequest): Promise<$_model.UnbindInstance2VpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindInstance2VpcWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @remarks
   * Removing tags from resources helps simplify resource management, optimize system performance, and mitigate potential security vulnerabilities. After a tag is removed from a resource, the system automatically deletes the tag if the tag is not added to other resources.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      body["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/untagresources`,
      method: "POST",
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
   * @remarks
   * Removing tags from resources helps simplify resource management, optimize system performance, and mitigate potential security vulnerabilities. After a tag is removed from a resource, the system automatically deletes the tag if the tag is not added to other resources.
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
   * Updates agent storage.
   * 
   * @param request - UpdateAgentStorageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentStorageResponse
   */
  async updateAgentStorageWithOptions(request: $_model.UpdateAgentStorageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentStorageDescription)) {
      body["AgentStorageDescription"] = request.agentStorageDescription;
    }

    if (!$dara.isNull(request.agentStorageName)) {
      body["AgentStorageName"] = request.agentStorageName;
    }

    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentStorage",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateagentstorage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentStorageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentStorageResponse({}));
  }

  /**
   * Updates agent storage.
   * 
   * @param request - UpdateAgentStorageRequest
   * @returns UpdateAgentStorageResponse
   */
  async updateAgentStorage(request: $_model.UpdateAgentStorageRequest): Promise<$_model.UpdateAgentStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentStorageWithOptions(request, headers, runtime);
  }

  /**
   * Updates instance information.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      body["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.network)) {
      body["Network"] = request.network;
    }

    if (!$dara.isNull(request.networkSourceACL)) {
      body["NetworkSourceACL"] = request.networkSourceACL;
    }

    if (!$dara.isNull(request.networkTypeACL)) {
      body["NetworkTypeACL"] = request.networkTypeACL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates instance information.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the upper limit for the VCUs of an instance in VCU mode (formerly reserved mode).
   * 
   * @remarks
   * - **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - After you enable scalability for an instance, the default upper limit for the VCUs of the instance is the sum of the scalability and the reserved VCUs.
   * - To use more computing resources when your business grows, you can modify the upper limit for the VCUs of your instance. The new upper limit for the VCUs of your instance immediately takes effect.
   * 
   * @param request - UpdateInstanceElasticVCUUpperLimitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceElasticVCUUpperLimitResponse
   */
  async updateInstanceElasticVCUUpperLimitWithOptions(request: $_model.UpdateInstanceElasticVCUUpperLimitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceElasticVCUUpperLimitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticVCUUpperLimit)) {
      body["ElasticVCUUpperLimit"] = request.elasticVCUUpperLimit;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceElasticVCUUpperLimit",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstanceelasticvcuupperlimit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceElasticVCUUpperLimitResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceElasticVCUUpperLimitResponse({}));
  }

  /**
   * Modifies the upper limit for the VCUs of an instance in VCU mode (formerly reserved mode).
   * 
   * @remarks
   * - **Before you call this operation, you must understand the billing and pricing of Tablestore. For more information, see [Billing overview](https://help.aliyun.com/document_detail/27291.html).**
   * - After you enable scalability for an instance, the default upper limit for the VCUs of the instance is the sum of the scalability and the reserved VCUs.
   * - To use more computing resources when your business grows, you can modify the upper limit for the VCUs of your instance. The new upper limit for the VCUs of your instance immediately takes effect.
   * 
   * @param request - UpdateInstanceElasticVCUUpperLimitRequest
   * @returns UpdateInstanceElasticVCUUpperLimitResponse
   */
  async updateInstanceElasticVCUUpperLimit(request: $_model.UpdateInstanceElasticVCUUpperLimitRequest): Promise<$_model.UpdateInstanceElasticVCUUpperLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceElasticVCUUpperLimitWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - UpdateInstancePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstancePolicyResponse
   */
  async updateInstancePolicyWithOptions(request: $_model.UpdateInstancePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstancePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.policyVersion)) {
      body["PolicyVersion"] = request.policyVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstancePolicy",
      version: "2020-12-09",
      protocol: "HTTPS",
      pathname: `/v2/openapi/updateinstancepolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstancePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstancePolicyResponse({}));
  }

  /**
   * Modifies a Resource Access Management (RAM) policy for an instance.
   * 
   * @param request - UpdateInstancePolicyRequest
   * @returns UpdateInstancePolicyResponse
   */
  async updateInstancePolicy(request: $_model.UpdateInstancePolicyRequest): Promise<$_model.UpdateInstancePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstancePolicyWithOptions(request, headers, runtime);
  }

}
