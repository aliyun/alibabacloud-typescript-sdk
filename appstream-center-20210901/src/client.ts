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
      'cn-shanghai': "appstream-center.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "appstream-center.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sets the execution time for an over-the-air update.
   * 
   * @param request - ApproveOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOtaTaskResponse
   */
  async approveOtaTaskWithOptions(request: $_model.ApproveOtaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveOtaTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.otaType)) {
      body["OtaType"] = request.otaType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveOtaTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveOtaTaskResponse>(await this.callApi(params, req, runtime), new $_model.ApproveOtaTaskResponse({}));
  }

  /**
   * Sets the execution time for an over-the-air update.
   * 
   * @param request - ApproveOtaTaskRequest
   * @returns ApproveOtaTaskResponse
   */
  async approveOtaTask(request: $_model.ApproveOtaTaskRequest): Promise<$_model.ApproveOtaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveOtaTaskWithOptions(request, runtime);
  }

  /**
   * 为研发主机分配辅助私有IP
   * 
   * @param request - AssignWuyingServerPrivateAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssignWuyingServerPrivateAddressesResponse
   */
  async assignWuyingServerPrivateAddressesWithOptions(request: $_model.AssignWuyingServerPrivateAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssignWuyingServerPrivateAddressesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.secondaryPrivateIpAddressCount)) {
      body["SecondaryPrivateIpAddressCount"] = request.secondaryPrivateIpAddressCount;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssignWuyingServerPrivateAddresses",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssignWuyingServerPrivateAddressesResponse>(await this.callApi(params, req, runtime), new $_model.AssignWuyingServerPrivateAddressesResponse({}));
  }

  /**
   * 为研发主机分配辅助私有IP
   * 
   * @param request - AssignWuyingServerPrivateAddressesRequest
   * @returns AssignWuyingServerPrivateAddressesResponse
   */
  async assignWuyingServerPrivateAddresses(request: $_model.AssignWuyingServerPrivateAddressesRequest): Promise<$_model.AssignWuyingServerPrivateAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.assignWuyingServerPrivateAddressesWithOptions(request, runtime);
  }

  /**
   * Add or remove assigned users for a delivery group. Only users added as assigned users can access cloud applications.
   * 
   * @remarks
   * > After changing the assigned users, the selected users will receive corresponding notification emails. Generally, it takes about 2 minutes for the changes to take effect on the client.
   * 
   * @param tmpReq - AuthorizeInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeInstanceGroupResponse
   */
  async authorizeInstanceGroupWithOptions(tmpReq: $_model.AuthorizeInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeInstanceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.AuthorizeInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userMeta)) {
      request.userMetaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userMeta, "UserMeta", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizeUserGroupIds)) {
      bodyFlat["AuthorizeUserGroupIds"] = request.authorizeUserGroupIds;
    }

    if (!$dara.isNull(request.authorizeUserIds)) {
      bodyFlat["AuthorizeUserIds"] = request.authorizeUserIds;
    }

    if (!$dara.isNull(request.avatarId)) {
      body["AvatarId"] = request.avatarId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.unAuthorizeUserGroupIds)) {
      bodyFlat["UnAuthorizeUserGroupIds"] = request.unAuthorizeUserGroupIds;
    }

    if (!$dara.isNull(request.unAuthorizeUserIds)) {
      bodyFlat["UnAuthorizeUserIds"] = request.unAuthorizeUserIds;
    }

    if (!$dara.isNull(request.userMetaShrink)) {
      body["UserMeta"] = request.userMetaShrink;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeInstanceGroupResponse({}));
  }

  /**
   * Add or remove assigned users for a delivery group. Only users added as assigned users can access cloud applications.
   * 
   * @remarks
   * > After changing the assigned users, the selected users will receive corresponding notification emails. Generally, it takes about 2 minutes for the changes to take effect on the client.
   * 
   * @param request - AuthorizeInstanceGroupRequest
   * @returns AuthorizeInstanceGroupResponse
   */
  async authorizeInstanceGroup(request: $_model.AuthorizeInstanceGroupRequest): Promise<$_model.AuthorizeInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates LLM templates in batches.
   * 
   * @remarks
   * You can create model templates in batches under a model provider template in the Wuying Agent Management Center. You can add multiple models at a time and specify one of them as the default model. Existing models are automatically skipped and are not created again.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - BatchCreateLlmTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateLlmTemplatesResponse
   */
  async batchCreateLlmTemplatesWithOptions(request: $_model.BatchCreateLlmTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateLlmTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmTemplateItems)) {
      body["LlmTemplateItems"] = request.llmTemplateItems;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      body["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.providerTemplateId)) {
      body["ProviderTemplateId"] = request.providerTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateLlmTemplates",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateLlmTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateLlmTemplatesResponse({}));
  }

  /**
   * Creates LLM templates in batches.
   * 
   * @remarks
   * You can create model templates in batches under a model provider template in the Wuying Agent Management Center. You can add multiple models at a time and specify one of them as the default model. Existing models are automatically skipped and are not created again.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - BatchCreateLlmTemplatesRequest
   * @returns BatchCreateLlmTemplatesResponse
   */
  async batchCreateLlmTemplates(request: $_model.BatchCreateLlmTemplatesRequest): Promise<$_model.BatchCreateLlmTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateLlmTemplatesWithOptions(request, runtime);
  }

  /**
   * Configures the model group for a resource group.
   * 
   * @remarks
   * You can assign a model group to resources associated with agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the WUYING Agent Management Center. The model group serves as the inference engine for tasks executed by agents within the resource group.
   * When both an agent runtime and its resource group have model groups configured, the model group bound to the resource group takes effect. The resource group setting takes priority over the agent runtime setting.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - ConfigResourceGroupModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigResourceGroupModelTemplateResponse
   */
  async configResourceGroupModelTemplateWithOptions(request: $_model.ConfigResourceGroupModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigResourceGroupModelTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      body["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigResourceGroupModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigResourceGroupModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ConfigResourceGroupModelTemplateResponse({}));
  }

  /**
   * Configures the model group for a resource group.
   * 
   * @remarks
   * You can assign a model group to resources associated with agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the WUYING Agent Management Center. The model group serves as the inference engine for tasks executed by agents within the resource group.
   * When both an agent runtime and its resource group have model groups configured, the model group bound to the resource group takes effect. The resource group setting takes priority over the agent runtime setting.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - ConfigResourceGroupModelTemplateRequest
   * @returns ConfigResourceGroupModelTemplateResponse
   */
  async configResourceGroupModelTemplate(request: $_model.ConfigResourceGroupModelTemplateRequest): Promise<$_model.ConfigResourceGroupModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configResourceGroupModelTemplateWithOptions(request, runtime);
  }

  /**
   * Configures a third-party channel for Agent runtime.
   * 
   * @remarks
   * You can configure third-party channels for Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. These channels serve as extended Agent communication methods beyond the AgentIM channel.
   * Before using this operation, make sure you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ConfigRuntimeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigRuntimeChannelResponse
   */
  async configRuntimeChannelWithOptions(request: $_model.ConfigRuntimeChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigRuntimeChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentPlatform)) {
      body["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      body["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.configMode)) {
      body["ConfigMode"] = request.configMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.runtimeIds)) {
      body["RuntimeIds"] = request.runtimeIds;
    }

    if (!$dara.isNull(request.runtimeType)) {
      body["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigRuntimeChannel",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigRuntimeChannelResponse>(await this.callApi(params, req, runtime), new $_model.ConfigRuntimeChannelResponse({}));
  }

  /**
   * Configures a third-party channel for Agent runtime.
   * 
   * @remarks
   * You can configure third-party channels for Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. These channels serve as extended Agent communication methods beyond the AgentIM channel.
   * Before using this operation, make sure you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ConfigRuntimeChannelRequest
   * @returns ConfigRuntimeChannelResponse
   */
  async configRuntimeChannel(request: $_model.ConfigRuntimeChannelRequest): Promise<$_model.ConfigRuntimeChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configRuntimeChannelWithOptions(request, runtime);
  }

  /**
   * Configures model groups for Agent runtime resources.
   * 
   * @remarks
   * You can authorize model groups for Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. The model groups serve as inference engines for Agent task execution.
   * Make sure that you are familiar with the operations and usage of the Wuying Agent Management Center before calling this operation.
   * 
   * @param request - ConfigRuntimeModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigRuntimeModelTemplateResponse
   */
  async configRuntimeModelTemplateWithOptions(request: $_model.ConfigRuntimeModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigRuntimeModelTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      body["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.runtimeIds)) {
      body["RuntimeIds"] = request.runtimeIds;
    }

    if (!$dara.isNull(request.runtimeType)) {
      body["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigRuntimeModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigRuntimeModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ConfigRuntimeModelTemplateResponse({}));
  }

  /**
   * Configures model groups for Agent runtime resources.
   * 
   * @remarks
   * You can authorize model groups for Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. The model groups serve as inference engines for Agent task execution.
   * Make sure that you are familiar with the operations and usage of the Wuying Agent Management Center before calling this operation.
   * 
   * @param request - ConfigRuntimeModelTemplateRequest
   * @returns ConfigRuntimeModelTemplateResponse
   */
  async configRuntimeModelTemplate(request: $_model.ConfigRuntimeModelTemplateRequest): Promise<$_model.ConfigRuntimeModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configRuntimeModelTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a delivery group.
   * 
   * @remarks
   * Make sure that you are familiar with the [billing and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Cloud Application before you call this operation.
   * A delivery group is a logical grouping for delivering cloud applications to end users. It includes the underlying cloud application resources, images that contain cloud applications, resource management policies, and user assignment settings. For details, see [Publish a delivery group](https://help.aliyun.com/document_detail/426046.html).
   * 
   * @param tmpReq - CreateAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppInstanceGroupResponse
   */
  async createAppInstanceGroupWithOptions(tmpReq: $_model.CreateAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppInstanceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAppInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.network)) {
      request.networkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.network, "Network", "json");
    }

    if (!$dara.isNull(tmpReq.nodePool)) {
      request.nodePoolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePool, "NodePool", "json");
    }

    if (!$dara.isNull(tmpReq.runtimePolicy)) {
      request.runtimePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runtimePolicy, "RuntimePolicy", "json");
    }

    if (!$dara.isNull(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.storagePolicy)) {
      request.storagePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storagePolicy, "StoragePolicy", "json");
    }

    if (!$dara.isNull(tmpReq.userDefinePolicy)) {
      request.userDefinePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userDefinePolicy, "UserDefinePolicy", "json");
    }

    if (!$dara.isNull(tmpReq.userInfo)) {
      request.userInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userInfo, "UserInfo", "json");
    }

    if (!$dara.isNull(tmpReq.videoPolicy)) {
      request.videoPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoPolicy, "VideoPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.userDefinePolicyShrink)) {
      query["UserDefinePolicy"] = request.userDefinePolicyShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCenterImageId)) {
      body["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!$dara.isNull(request.appInstanceGroupName)) {
      body["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!$dara.isNull(request.appPackageType)) {
      body["AppPackageType"] = request.appPackageType;
    }

    if (!$dara.isNull(request.appPolicyId)) {
      body["AppPolicyId"] = request.appPolicyId;
    }

    if (!$dara.isNull(request.authMode)) {
      body["AuthMode"] = request.authMode;
    }

    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeResourceMode)) {
      body["ChargeResourceMode"] = request.chargeResourceMode;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.networkShrink)) {
      body["Network"] = request.networkShrink;
    }

    if (!$dara.isNull(request.nodePoolShrink)) {
      body["NodePool"] = request.nodePoolShrink;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.preOpenAppId)) {
      body["PreOpenAppId"] = request.preOpenAppId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.promotionId)) {
      body["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.runtimePolicyShrink)) {
      body["RuntimePolicy"] = request.runtimePolicyShrink;
    }

    if (!$dara.isNull(request.securityPolicyShrink)) {
      body["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      body["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.storagePolicyShrink)) {
      body["StoragePolicy"] = request.storagePolicyShrink;
    }

    if (!$dara.isNull(request.subPayType)) {
      body["SubPayType"] = request.subPayType;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      body["UserGroupIds"] = request.userGroupIds;
    }

    if (!$dara.isNull(request.userInfoShrink)) {
      body["UserInfo"] = request.userInfoShrink;
    }

    if (!$dara.isNull(request.users)) {
      body["Users"] = request.users;
    }

    if (!$dara.isNull(request.videoPolicyShrink)) {
      body["VideoPolicy"] = request.videoPolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppInstanceGroupResponse({}));
  }

  /**
   * Creates a delivery group.
   * 
   * @remarks
   * Make sure that you are familiar with the [billing and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Cloud Application before you call this operation.
   * A delivery group is a logical grouping for delivering cloud applications to end users. It includes the underlying cloud application resources, images that contain cloud applications, resource management policies, and user assignment settings. For details, see [Publish a delivery group](https://help.aliyun.com/document_detail/426046.html).
   * 
   * @param request - CreateAppInstanceGroupRequest
   * @returns CreateAppInstanceGroupResponse
   */
  async createAppInstanceGroup(request: $_model.CreateAppInstanceGroupRequest): Promise<$_model.CreateAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a custom image from a deployed WUYING instance. You can use the custom image to quickly create more WUYING instances with the same configurations, without having to repeatedly configure the instance environment each time.
   * 
   * @param request - CreateImageByInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageByInstanceResponse
   */
  async createImageByInstanceWithOptions(request: $_model.CreateImageByInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageByInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCleanUserdata)) {
      body["AutoCleanUserdata"] = request.autoCleanUserdata;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.diskType)) {
      body["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.subInstanceId)) {
      body["SubInstanceId"] = request.subInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageByInstance",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageByInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageByInstanceResponse({}));
  }

  /**
   * Creates a custom image from a deployed WUYING instance. You can use the custom image to quickly create more WUYING instances with the same configurations, without having to repeatedly configure the instance environment each time.
   * 
   * @param request - CreateImageByInstanceRequest
   * @returns CreateImageByInstanceResponse
   */
  async createImageByInstance(request: $_model.CreateImageByInstanceRequest): Promise<$_model.CreateImageByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageByInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a new image from a debug delivery group.
   * 
   * @param request - CreateImageFromAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageFromAppInstanceGroupResponse
   */
  async createImageFromAppInstanceGroupWithOptions(request: $_model.CreateImageFromAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageFromAppInstanceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appCenterImageName)) {
      body["AppCenterImageName"] = request.appCenterImageName;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageFromAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageFromAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageFromAppInstanceGroupResponse({}));
  }

  /**
   * Creates a new image from a debug delivery group.
   * 
   * @param request - CreateImageFromAppInstanceGroupRequest
   * @returns CreateImageFromAppInstanceGroupResponse
   */
  async createImageFromAppInstanceGroup(request: $_model.CreateImageFromAppInstanceGroupRequest): Promise<$_model.CreateImageFromAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageFromAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Create Model Provider Template
   * 
   * @remarks
   * You can create a model provider template under a model template in the Wuying Agent Management Center. This template is used to configure the connection information and keys for model services (such as Alibaba Cloud Bailian, Token Plan, and Moonshot) that Agents can call. After creation, the model provider template is automatically associated with the specified model template.
   * Make sure you are fully familiar with the operations and usage of the Wuying Agent Management Center before calling this API.
   * 
   * @param request - CreateModelProviderTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelProviderTemplateResponse
   */
  async createModelProviderTemplateWithOptions(request: $_model.CreateModelProviderTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelProviderTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableWuyingProxy)) {
      query["EnableWuyingProxy"] = request.enableWuyingProxy;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.providerName)) {
      query["ProviderName"] = request.providerName;
    }

    if (!$dara.isNull(request.providerType)) {
      query["ProviderType"] = request.providerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelProviderTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelProviderTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelProviderTemplateResponse({}));
  }

  /**
   * Create Model Provider Template
   * 
   * @remarks
   * You can create a model provider template under a model template in the Wuying Agent Management Center. This template is used to configure the connection information and keys for model services (such as Alibaba Cloud Bailian, Token Plan, and Moonshot) that Agents can call. After creation, the model provider template is automatically associated with the specified model template.
   * Make sure you are fully familiar with the operations and usage of the Wuying Agent Management Center before calling this API.
   * 
   * @param request - CreateModelProviderTemplateRequest
   * @returns CreateModelProviderTemplateResponse
   */
  async createModelProviderTemplate(request: $_model.CreateModelProviderTemplateRequest): Promise<$_model.CreateModelProviderTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelProviderTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a model creation template.
   * 
   * @remarks
   * You can create a model group in the WUYING Agent Management Center to manage the model providers and model scope that an Agent can invoke. After creation, you can attach the model group to a cloud computer as the inference engine configuration for Agent task execution.
   * Make sure that you are familiar with the operations and usage of the WUYING Agent Management Center before calling this operation.
   * 
   * @param request - CreateModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelTemplateResponse
   */
  async createModelTemplateWithOptions(request: $_model.CreateModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelTemplateResponse({}));
  }

  /**
   * Creates a model creation template.
   * 
   * @remarks
   * You can create a model group in the WUYING Agent Management Center to manage the model providers and model scope that an Agent can invoke. After creation, you can attach the model group to a cloud computer as the inference engine configuration for Agent task execution.
   * Make sure that you are familiar with the operations and usage of the WUYING Agent Management Center before calling this operation.
   * 
   * @param request - CreateModelTemplateRequest
   * @returns CreateModelTemplateResponse
   */
  async createModelTemplate(request: $_model.CreateModelTemplateRequest): Promise<$_model.CreateModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelTemplateWithOptions(request, runtime);
  }

  /**
   * Creates one or more workstations.
   * 
   * @remarks
   * 1. A project corresponds to the resource configuration module in the CloudFlow console.
   * 2. If the ContentId specified in the request parameters has multiple versions, this API operation <notice>uses the default version</notice> for binding.
   * 3. This operation succeeds only when the default version of the content is in an available state.
   * 
   * @param request - CreateWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWuyingServerResponse
   */
  async createWuyingServerWithOptions(request: $_model.CreateWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.amount)) {
      body["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.bandwidth)) {
      body["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataDisk)) {
      bodyFlat["DataDisk"] = request.dataDisk;
    }

    if (!$dara.isNull(request.hostName)) {
      body["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.idempotenceToken)) {
      body["IdempotenceToken"] = request.idempotenceToken;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.maxPrice)) {
      body["MaxPrice"] = request.maxPrice;
    }

    if (!$dara.isNull(request.networkStrategyType)) {
      body["NetworkStrategyType"] = request.networkStrategyType;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      body["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      body["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.savingPlanId)) {
      body["SavingPlanId"] = request.savingPlanId;
    }

    if (!$dara.isNull(request.serverInstanceType)) {
      body["ServerInstanceType"] = request.serverInstanceType;
    }

    if (!$dara.isNull(request.serverPortRange)) {
      body["ServerPortRange"] = request.serverPortRange;
    }

    if (!$dara.isNull(request.subPayType)) {
      body["SubPayType"] = request.subPayType;
    }

    if (!$dara.isNull(request.systemDiskCategory)) {
      body["SystemDiskCategory"] = request.systemDiskCategory;
    }

    if (!$dara.isNull(request.systemDiskPerformanceLevel)) {
      body["SystemDiskPerformanceLevel"] = request.systemDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      body["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.virtualNodePoolId)) {
      body["VirtualNodePoolId"] = request.virtualNodePoolId;
    }

    if (!$dara.isNull(request.wuyingServerName)) {
      body["WuyingServerName"] = request.wuyingServerName;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.CreateWuyingServerResponse({}));
  }

  /**
   * Creates one or more workstations.
   * 
   * @remarks
   * 1. A project corresponds to the resource configuration module in the CloudFlow console.
   * 2. If the ContentId specified in the request parameters has multiple versions, this API operation <notice>uses the default version</notice> for binding.
   * 3. This operation succeeds only when the default version of the content is in an available state.
   * 
   * @param request - CreateWuyingServerRequest
   * @returns CreateWuyingServerResponse
   */
  async createWuyingServer(request: $_model.CreateWuyingServerRequest): Promise<$_model.CreateWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWuyingServerWithOptions(request, runtime);
  }

  /**
   * Deletes a pay-as-you-go resource-based delivery group.
   * 
   * @remarks
   * > This operation does not support deleting delivery groups that use subscription resources.
   * 
   * @param request - DeleteAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstanceGroupResponse
   */
  async deleteAppInstanceGroupWithOptions(request: $_model.DeleteAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstanceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstanceGroupResponse({}));
  }

  /**
   * Deletes a pay-as-you-go resource-based delivery group.
   * 
   * @remarks
   * > This operation does not support deleting delivery groups that use subscription resources.
   * 
   * @param request - DeleteAppInstanceGroupRequest
   * @returns DeleteAppInstanceGroupResponse
   */
  async deleteAppInstanceGroup(request: $_model.DeleteAppInstanceGroupRequest): Promise<$_model.DeleteAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified application instance.
   * 
   * @remarks
   * Only instances in the init or idle state can be deleted. This operation is available only to specific customers.
   * 
   * @param request - DeleteAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppInstancesResponse
   */
  async deleteAppInstancesWithOptions(request: $_model.DeleteAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceIds)) {
      body["AppInstanceIds"] = request.appInstanceIds;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppInstances",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppInstancesResponse({}));
  }

  /**
   * Deletes a specified application instance.
   * 
   * @remarks
   * Only instances in the init or idle state can be deleted. This operation is available only to specific customers.
   * 
   * @param request - DeleteAppInstancesRequest
   * @returns DeleteAppInstancesResponse
   */
  async deleteAppInstances(request: $_model.DeleteAppInstancesRequest): Promise<$_model.DeleteAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom AppStream image.
   * 
   * @remarks
   * - You can delete only custom images that belong to you.
   * - For images associated with the AppStream Cloud Computer Pool, AppStream Cloud Application, or AppStream Workstation product lines, you must ensure that no AppStream instances are using the image before you can delete it.
   * - If an AppStream Cloud Desktop template references an image, the template is also deleted when the image is deleted.
   * - If an image is available in multiple regions, deleting the image removes it from all regions.
   * 
   * @param request - DeleteImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageResponse
   */
  async deleteImageWithOptions(request: $_model.DeleteImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageResponse({}));
  }

  /**
   * Deletes a custom AppStream image.
   * 
   * @remarks
   * - You can delete only custom images that belong to you.
   * - For images associated with the AppStream Cloud Computer Pool, AppStream Cloud Application, or AppStream Workstation product lines, you must ensure that no AppStream instances are using the image before you can delete it.
   * - If an AppStream Cloud Desktop template references an image, the template is also deleted when the image is deleted.
   * - If an image is available in multiple regions, deleting the image removes it from all regions.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * Deletes an LLM template.
   * 
   * @remarks
   * You can delete a model template that has been created under a model provider template in the Wuying Agent Management Center. Before deletion, ensure that the model is not the default model of an associated model group. Otherwise, the deletion fails. After deletion, the model configurations of associated cloud computers are automatically refreshed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - DeleteLlmTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLlmTemplateResponse
   */
  async deleteLlmTemplateWithOptions(request: $_model.DeleteLlmTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLlmTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.llmTemplateId)) {
      query["LlmTemplateId"] = request.llmTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLlmTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLlmTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLlmTemplateResponse({}));
  }

  /**
   * Deletes an LLM template.
   * 
   * @remarks
   * You can delete a model template that has been created under a model provider template in the Wuying Agent Management Center. Before deletion, ensure that the model is not the default model of an associated model group. Otherwise, the deletion fails. After deletion, the model configurations of associated cloud computers are automatically refreshed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - DeleteLlmTemplateRequest
   * @returns DeleteLlmTemplateResponse
   */
  async deleteLlmTemplate(request: $_model.DeleteLlmTemplateRequest): Promise<$_model.DeleteLlmTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLlmTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a model provider template.
   * 
   * @remarks
   * You can delete a model provider template that has been created under model templates in the WUYING Agent Management Center. Before deletion, make sure that the model provider is not the provider of the default model and is not a system preset type provider (such as WUYING credits package). After deletion, the associated models and key configurations are also removed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - DeleteModelProviderTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelProviderTemplateResponse
   */
  async deleteModelProviderTemplateWithOptions(request: $_model.DeleteModelProviderTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelProviderTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.providerTemplateId)) {
      query["ProviderTemplateId"] = request.providerTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelProviderTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelProviderTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelProviderTemplateResponse({}));
  }

  /**
   * Deletes a model provider template.
   * 
   * @remarks
   * You can delete a model provider template that has been created under model templates in the WUYING Agent Management Center. Before deletion, make sure that the model provider is not the provider of the default model and is not a system preset type provider (such as WUYING credits package). After deletion, the associated models and key configurations are also removed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - DeleteModelProviderTemplateRequest
   * @returns DeleteModelProviderTemplateResponse
   */
  async deleteModelProviderTemplate(request: $_model.DeleteModelProviderTemplateRequest): Promise<$_model.DeleteModelProviderTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelProviderTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a model template.
   * 
   * @remarks
   * You can delete a model group that has been created in the WUYING Agent Management Center. Before deletion, ensure that the template has not been authorized to any resource. Otherwise, the deletion fails. After deletion, the model providers and models under the model group are also removed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - DeleteModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelTemplateResponse
   */
  async deleteModelTemplateWithOptions(request: $_model.DeleteModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelTemplateResponse({}));
  }

  /**
   * Deletes a model template.
   * 
   * @remarks
   * You can delete a model group that has been created in the WUYING Agent Management Center. Before deletion, ensure that the template has not been authorized to any resource. Otherwise, the deletion fails. After deletion, the model providers and models under the model group are also removed.
   * Before using this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - DeleteModelTemplateRequest
   * @returns DeleteModelTemplateResponse
   */
  async deleteModelTemplate(request: $_model.DeleteModelTemplateRequest): Promise<$_model.DeleteModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a cloud graphics workstation.
   * 
   * @remarks
   * Deletes a cloud graphics workstation.
   * 
   * @param request - DeleteWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWuyingServerResponse
   */
  async deleteWuyingServerWithOptions(request: $_model.DeleteWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWuyingServerResponse({}));
  }

  /**
   * Deletes a cloud graphics workstation.
   * 
   * @remarks
   * Deletes a cloud graphics workstation.
   * 
   * @param request - DeleteWuyingServerRequest
   * @returns DeleteWuyingServerResponse
   */
  async deleteWuyingServer(request: $_model.DeleteWuyingServerRequest): Promise<$_model.DeleteWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWuyingServerWithOptions(request, runtime);
  }

  /**
   * Configure LogShipper for Simple Log Service
   * 
   * @param request - DeliverToUserSlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeliverToUserSlsResponse
   */
  async deliverToUserSlsWithOptions(request: $_model.DeliverToUserSlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeliverToUserSlsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deliveryScopes)) {
      bodyFlat["DeliveryScopes"] = request.deliveryScopes;
    }

    if (!$dara.isNull(request.existedProjectName)) {
      body["ExistedProjectName"] = request.existedProjectName;
    }

    if (!$dara.isNull(request.logStoreName)) {
      body["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.slsRegionId)) {
      body["SlsRegionId"] = request.slsRegionId;
    }

    if (!$dara.isNull(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeliverToUserSls",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeliverToUserSlsResponse>(await this.callApi(params, req, runtime), new $_model.DeliverToUserSlsResponse({}));
  }

  /**
   * Configure LogShipper for Simple Log Service
   * 
   * @param request - DeliverToUserSlsRequest
   * @returns DeliverToUserSlsResponse
   */
  async deliverToUserSls(request: $_model.DeliverToUserSlsRequest): Promise<$_model.DeliverToUserSlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deliverToUserSlsWithOptions(request, runtime);
  }

  /**
   * 查询研发主机详情
   * 
   * @param request - DescribeWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWuyingServerResponse
   */
  async describeWuyingServerWithOptions(request: $_model.DescribeWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWuyingServerResponse({}));
  }

  /**
   * 查询研发主机详情
   * 
   * @param request - DescribeWuyingServerRequest
   * @returns DescribeWuyingServerResponse
   */
  async describeWuyingServer(request: $_model.DescribeWuyingServerRequest): Promise<$_model.DescribeWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWuyingServerWithOptions(request, runtime);
  }

  /**
   * Queries the Elastic IP Address (EIP) information of a Wuying workspace.
   * 
   * @param request - DescribeWuyingServerEipInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWuyingServerEipInfoResponse
   */
  async describeWuyingServerEipInfoWithOptions(request: $_model.DescribeWuyingServerEipInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWuyingServerEipInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isp)) {
      body["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWuyingServerEipInfo",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWuyingServerEipInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWuyingServerEipInfoResponse({}));
  }

  /**
   * Queries the Elastic IP Address (EIP) information of a Wuying workspace.
   * 
   * @param request - DescribeWuyingServerEipInfoRequest
   * @returns DescribeWuyingServerEipInfoResponse
   */
  async describeWuyingServerEipInfo(request: $_model.DescribeWuyingServerEipInfoRequest): Promise<$_model.DescribeWuyingServerEipInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWuyingServerEipInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified delivery group.
   * 
   * @param request - GetAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppInstanceGroupResponse
   */
  async getAppInstanceGroupWithOptions(request: $_model.GetAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetAppInstanceGroupResponse({}));
  }

  /**
   * Queries the details of a specified delivery group.
   * 
   * @param request - GetAppInstanceGroupRequest
   * @returns GetAppInstanceGroupResponse
   */
  async getAppInstanceGroup(request: $_model.GetAppInstanceGroupRequest): Promise<$_model.GetAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Retrieves connection credentials for a cloud application.
   * 
   * @remarks
   * This operation requires multiple invokes (at least two) to obtain the connection credentials.
   * On the first invoke, an application instance is allocated to the specified convenience account and the application is started. A startup task ID (`TaskID`) is returned.
   * On subsequent invokes, pass the `TaskID` request parameter to query whether the task is complete. When the returned task status (`TaskStatus`) is completed (`Finished`), the connection credentials (`Ticket`) are also returned.
   * 
   * @param request - GetConnectionTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicketWithOptions(request: $_model.GetConnectionTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionTicketResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessType)) {
      body["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appInstanceGroupIdList)) {
      body["AppInstanceGroupIdList"] = request.appInstanceGroupIdList;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
    }

    if (!$dara.isNull(request.appPolicyId)) {
      body["AppPolicyId"] = request.appPolicyId;
    }

    if (!$dara.isNull(request.appStartParam)) {
      body["AppStartParam"] = request.appStartParam;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.environmentConfig)) {
      body["EnvironmentConfig"] = request.environmentConfig;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnectionTicket",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectionTicketResponse({}));
  }

  /**
   * Retrieves connection credentials for a cloud application.
   * 
   * @remarks
   * This operation requires multiple invokes (at least two) to obtain the connection credentials.
   * On the first invoke, an application instance is allocated to the specified convenience account and the application is started. A startup task ID (`TaskID`) is returned.
   * On subsequent invokes, pass the `TaskID` request parameter to query whether the task is complete. When the returned task status (`TaskStatus`) is completed (`Finished`), the connection credentials (`Ticket`) are also returned.
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Retrieves the information about a debug application instance.
   * 
   * @param request - GetDebugAppInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDebugAppInstanceResponse
   */
  async getDebugAppInstanceWithOptions(request: $_model.GetDebugAppInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDebugAppInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDebugAppInstance",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDebugAppInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetDebugAppInstanceResponse({}));
  }

  /**
   * Retrieves the information about a debug application instance.
   * 
   * @param request - GetDebugAppInstanceRequest
   * @returns GetDebugAppInstanceResponse
   */
  async getDebugAppInstance(request: $_model.GetDebugAppInstanceRequest): Promise<$_model.GetDebugAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDebugAppInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a model provider template.
   * 
   * @remarks
   * You can query the details of a specified model provider template in the WUYING Agent Management Center, including the provider name, description, and connection configuration list.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - GetModelProviderTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelProviderTemplateResponse
   */
  async getModelProviderTemplateWithOptions(request: $_model.GetModelProviderTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelProviderTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.providerTemplateId)) {
      query["ProviderTemplateId"] = request.providerTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelProviderTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelProviderTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetModelProviderTemplateResponse({}));
  }

  /**
   * Queries the details of a model provider template.
   * 
   * @remarks
   * You can query the details of a specified model provider template in the WUYING Agent Management Center, including the provider name, description, and connection configuration list.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - GetModelProviderTemplateRequest
   * @returns GetModelProviderTemplateResponse
   */
  async getModelProviderTemplate(request: $_model.GetModelProviderTemplateRequest): Promise<$_model.GetModelProviderTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getModelProviderTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the details of an over-the-air update task, including the available version and version description.
   * 
   * @param request - GetOtaTaskByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOtaTaskByTaskIdResponse
   */
  async getOtaTaskByTaskIdWithOptions(request: $_model.GetOtaTaskByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOtaTaskByTaskIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOtaTaskByTaskId",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOtaTaskByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.GetOtaTaskByTaskIdResponse({}));
  }

  /**
   * Queries the details of an over-the-air update task, including the available version and version description.
   * 
   * @param request - GetOtaTaskByTaskIdRequest
   * @returns GetOtaTaskByTaskIdResponse
   */
  async getOtaTaskByTaskId(request: $_model.GetOtaTaskByTaskIdRequest): Promise<$_model.GetOtaTaskByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOtaTaskByTaskIdWithOptions(request, runtime);
  }

  /**
   * Queries the price information of a resource.
   * 
   * @param request - GetResourcePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcePriceResponse
   */
  async getResourcePriceWithOptions(request: $_model.GetResourcePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourcePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.appInstanceType)) {
      query["AppInstanceType"] = request.appInstanceType;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourcePrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourcePriceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourcePriceResponse({}));
  }

  /**
   * Queries the price information of a resource.
   * 
   * @param request - GetResourcePriceRequest
   * @returns GetResourcePriceResponse
   */
  async getResourcePrice(request: $_model.GetResourcePriceRequest): Promise<$_model.GetResourcePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourcePriceWithOptions(request, runtime);
  }

  /**
   * Queries the renewal price of WUYING Cloud Application resources.
   * 
   * @param request - GetResourceRenewPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceRenewPriceResponse
   */
  async getResourceRenewPriceWithOptions(request: $_model.GetResourceRenewPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceRenewPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceRenewPrice",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceRenewPriceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceRenewPriceResponse({}));
  }

  /**
   * Queries the renewal price of WUYING Cloud Application resources.
   * 
   * @param request - GetResourceRenewPriceRequest
   * @returns GetResourceRenewPriceResponse
   */
  async getResourceRenewPrice(request: $_model.GetResourceRenewPriceRequest): Promise<$_model.GetResourceRenewPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceRenewPriceWithOptions(request, runtime);
  }

  /**
   * Queries the third-party channel configurations of an Agent runtime.
   * 
   * @remarks
   * You can query the third-party channel configuration status of Agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - GetRuntimeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuntimeChannelResponse
   */
  async getRuntimeChannelWithOptions(request: $_model.GetRuntimeChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuntimeChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.includeRiskInfo)) {
      query["IncludeRiskInfo"] = request.includeRiskInfo;
    }

    if (!$dara.isNull(request.runtimeId)) {
      query["RuntimeId"] = request.runtimeId;
    }

    if (!$dara.isNull(request.runtimeType)) {
      query["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuntimeChannel",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuntimeChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetRuntimeChannelResponse({}));
  }

  /**
   * Queries the third-party channel configurations of an Agent runtime.
   * 
   * @remarks
   * You can query the third-party channel configuration status of Agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - GetRuntimeChannelRequest
   * @returns GetRuntimeChannelResponse
   */
  async getRuntimeChannel(request: $_model.GetRuntimeChannelRequest): Promise<$_model.GetRuntimeChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuntimeChannelWithOptions(request, runtime);
  }

  /**
   * Queries the model configuration details of a cloud computer.
   * 
   * @remarks
   * You can query the model configuration details currently bound to a specified cloud computer in the Wuying Agent Management Center, including model groups, model provider lists, and associated model information. After you enable the risk information mode, you can also identify differences between the end user\\"s actual configuration and the configuration delivered by the administrator.
   * 
   * @param request - GetRuntimeModelConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRuntimeModelConfigResponse
   */
  async getRuntimeModelConfigWithOptions(request: $_model.GetRuntimeModelConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRuntimeModelConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.includeRiskInfo)) {
      query["IncludeRiskInfo"] = request.includeRiskInfo;
    }

    if (!$dara.isNull(request.runtimeId)) {
      query["RuntimeId"] = request.runtimeId;
    }

    if (!$dara.isNull(request.runtimeType)) {
      query["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRuntimeModelConfig",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRuntimeModelConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetRuntimeModelConfigResponse({}));
  }

  /**
   * Queries the model configuration details of a cloud computer.
   * 
   * @remarks
   * You can query the model configuration details currently bound to a specified cloud computer in the Wuying Agent Management Center, including model groups, model provider lists, and associated model information. After you enable the risk information mode, you can also identify differences between the end user\\"s actual configuration and the configuration delivered by the administrator.
   * 
   * @param request - GetRuntimeModelConfigRequest
   * @returns GetRuntimeModelConfigResponse
   */
  async getRuntimeModelConfig(request: $_model.GetRuntimeModelConfigRequest): Promise<$_model.GetRuntimeModelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRuntimeModelConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of multiple delivery groups. This operation does not specify a particular delivery group but queries the details of all delivery groups that meet the specified conditions.
   * 
   * @param request - ListAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstanceGroupResponse
   */
  async listAppInstanceGroupWithOptions(request: $_model.ListAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstanceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCenterImageId)) {
      query["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceGroupName)) {
      query["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludedUserGroupIds)) {
      body["ExcludedUserGroupIds"] = request.excludedUserGroupIds;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.userGroupIds)) {
      body["UserGroupIds"] = request.userGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstanceGroupResponse({}));
  }

  /**
   * Queries the details of multiple delivery groups. This operation does not specify a particular delivery group but queries the details of all delivery groups that meet the specified conditions.
   * 
   * @param request - ListAppInstanceGroupRequest
   * @returns ListAppInstanceGroupResponse
   */
  async listAppInstanceGroup(request: $_model.ListAppInstanceGroupRequest): Promise<$_model.ListAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of session instances in a delivery group, including instance IDs, instance statuses, creation time, update time, session statuses, and public IP addresses of primary network interfaces.
   * 
   * @param request - ListAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppInstancesResponse
   */
  async listAppInstancesWithOptions(request: $_model.ListAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      query["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.includeDeleted)) {
      query["IncludeDeleted"] = request.includeDeleted;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIdList)) {
      query["UserIdList"] = request.userIdList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceIdList)) {
      body["AppInstanceIdList"] = request.appInstanceIdList;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppInstances",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppInstancesResponse({}));
  }

  /**
   * Queries the details of session instances in a delivery group, including instance IDs, instance statuses, creation time, update time, session statuses, and public IP addresses of primary network interfaces.
   * 
   * @param request - ListAppInstancesRequest
   * @returns ListAppInstancesResponse
   */
  async listAppInstances(request: $_model.ListAppInstancesRequest): Promise<$_model.ListAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the list of user groups authorized by a specified delivery group.
   * 
   * @param request - ListAuthorizedUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorizedUserGroupsResponse
   */
  async listAuthorizedUserGroupsWithOptions(request: $_model.ListAuthorizedUserGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorizedUserGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthorizedUserGroups",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorizedUserGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorizedUserGroupsResponse({}));
  }

  /**
   * Queries the list of user groups authorized by a specified delivery group.
   * 
   * @param request - ListAuthorizedUserGroupsRequest
   * @returns ListAuthorizedUserGroupsResponse
   */
  async listAuthorizedUserGroups(request: $_model.ListAuthorizedUserGroupsRequest): Promise<$_model.ListAuthorizedUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedUserGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the binding information between users and resources.
   * 
   * @param request - ListBindInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindInfoResponse
   */
  async listBindInfoWithOptions(request: $_model.ListBindInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIdList)) {
      body["AppIdList"] = request.appIdList;
    }

    if (!$dara.isNull(request.appInstanceGroupIdList)) {
      body["AppInstanceGroupIdList"] = request.appInstanceGroupIdList;
    }

    if (!$dara.isNull(request.appInstanceIdList)) {
      body["AppInstanceIdList"] = request.appInstanceIdList;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userIdList)) {
      body["UserIdList"] = request.userIdList;
    }

    if (!$dara.isNull(request.wyIdList)) {
      body["WyIdList"] = request.wyIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindInfo",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListBindInfoResponse({}));
  }

  /**
   * Queries the binding information between users and resources.
   * 
   * @param request - ListBindInfoRequest
   * @returns ListBindInfoResponse
   */
  async listBindInfo(request: $_model.ListBindInfoRequest): Promise<$_model.ListBindInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindInfoWithOptions(request, runtime);
  }

  /**
   * Queries the list of desktop agent runtimes.
   * 
   * @param request - ListDesktopAgentRuntimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDesktopAgentRuntimeResponse
   */
  async listDesktopAgentRuntimeWithOptions(request: $_model.ListDesktopAgentRuntimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDesktopAgentRuntimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentInstanceStatuses)) {
      query["AgentInstanceStatuses"] = request.agentInstanceStatuses;
    }

    if (!$dara.isNull(request.agentInstanceVersions)) {
      query["AgentInstanceVersions"] = request.agentInstanceVersions;
    }

    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.authUsers)) {
      query["AuthUsers"] = request.authUsers;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.channelConfigure)) {
      query["ChannelConfigure"] = request.channelConfigure;
    }

    if (!$dara.isNull(request.deploymentSource)) {
      query["DeploymentSource"] = request.deploymentSource;
    }

    if (!$dara.isNull(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!$dara.isNull(request.desktopNames)) {
      query["DesktopNames"] = request.desktopNames;
    }

    if (!$dara.isNull(request.desktopStatuses)) {
      query["DesktopStatuses"] = request.desktopStatuses;
    }

    if (!$dara.isNull(request.hasAuthUser)) {
      query["HasAuthUser"] = request.hasAuthUser;
    }

    if (!$dara.isNull(request.hasRisk)) {
      query["HasRisk"] = request.hasRisk;
    }

    if (!$dara.isNull(request.includeRiskInfo)) {
      query["IncludeRiskInfo"] = request.includeRiskInfo;
    }

    if (!$dara.isNull(request.managementStatus)) {
      query["ManagementStatus"] = request.managementStatus;
    }

    if (!$dara.isNull(request.modelConfigure)) {
      query["ModelConfigure"] = request.modelConfigure;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDesktopAgentRuntime",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDesktopAgentRuntimeResponse>(await this.callApi(params, req, runtime), new $_model.ListDesktopAgentRuntimeResponse({}));
  }

  /**
   * Queries the list of desktop agent runtimes.
   * 
   * @param request - ListDesktopAgentRuntimeRequest
   * @returns ListDesktopAgentRuntimeResponse
   */
  async listDesktopAgentRuntime(request: $_model.ListDesktopAgentRuntimeRequest): Promise<$_model.ListDesktopAgentRuntimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDesktopAgentRuntimeWithOptions(request, runtime);
  }

  /**
   * Queries image information.
   * 
   * @param request - ListImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageResponse
   */
  async listImageWithOptions(request: $_model.ListImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.distro)) {
      query["Distro"] = request.distro;
    }

    if (!$dara.isNull(request.tagList)) {
      query["TagList"] = request.tagList;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizRegionIdList)) {
      body["BizRegionIdList"] = request.bizRegionIdList;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.bizTypeList)) {
      body["BizTypeList"] = request.bizTypeList;
    }

    if (!$dara.isNull(request.featureList)) {
      body["FeatureList"] = request.featureList;
    }

    if (!$dara.isNull(request.fotaVersion)) {
      body["FotaVersion"] = request.fotaVersion;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.imageType)) {
      body["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.languageType)) {
      body["LanguageType"] = request.languageType;
    }

    if (!$dara.isNull(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platformName)) {
      body["PlatformName"] = request.platformName;
    }

    if (!$dara.isNull(request.platformNameList)) {
      body["PlatformNameList"] = request.platformNameList;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.productTypeList)) {
      body["ProductTypeList"] = request.productTypeList;
    }

    if (!$dara.isNull(request.protocolType)) {
      body["ProtocolType"] = request.protocolType;
    }

    if (!$dara.isNull(request.resourceInstanceType)) {
      body["ResourceInstanceType"] = request.resourceInstanceType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImageResponse>(await this.callApi(params, req, runtime), new $_model.ListImageResponse({}));
  }

  /**
   * Queries image information.
   * 
   * @param request - ListImageRequest
   * @returns ListImageResponse
   */
  async listImage(request: $_model.ListImageRequest): Promise<$_model.ListImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageWithOptions(request, runtime);
  }

  /**
   * Queries a list of LLM templates.
   * 
   * @remarks
   * You can use paging to retrieve the list of model templates under a model provider template in the Wuying Agent Management Center. You can filter results by model group ID, model provider template ID, model template ID, and model encoding. When you query by model group dimension, the default model is automatically pinned to the top.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param tmpReq - ListLlmTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLlmTemplatesResponse
   */
  async listLlmTemplatesWithOptions(tmpReq: $_model.ListLlmTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLlmTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListLlmTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.llmTemplateIds)) {
      request.llmTemplateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.llmTemplateIds, "LlmTemplateIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.llmCode)) {
      query["LlmCode"] = request.llmCode;
    }

    if (!$dara.isNull(request.llmTemplateIdsShrink)) {
      query["LlmTemplateIds"] = request.llmTemplateIdsShrink;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.providerTemplateId)) {
      query["ProviderTemplateId"] = request.providerTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLlmTemplates",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLlmTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListLlmTemplatesResponse({}));
  }

  /**
   * Queries a list of LLM templates.
   * 
   * @remarks
   * You can use paging to retrieve the list of model templates under a model provider template in the Wuying Agent Management Center. You can filter results by model group ID, model provider template ID, model template ID, and model encoding. When you query by model group dimension, the default model is automatically pinned to the top.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ListLlmTemplatesRequest
   * @returns ListLlmTemplatesResponse
   */
  async listLlmTemplates(request: $_model.ListLlmTemplatesRequest): Promise<$_model.ListLlmTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLlmTemplatesWithOptions(request, runtime);
  }

  /**
   * 查询模型提供商 Endpoint 列表
   * 
   * @param request - ListModelProviderEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelProviderEndpointsResponse
   */
  async listModelProviderEndpointsWithOptions(request: $_model.ListModelProviderEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelProviderEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.providerName)) {
      query["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelProviderEndpoints",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelProviderEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelProviderEndpointsResponse({}));
  }

  /**
   * 查询模型提供商 Endpoint 列表
   * 
   * @param request - ListModelProviderEndpointsRequest
   * @returns ListModelProviderEndpointsResponse
   */
  async listModelProviderEndpoints(request: $_model.ListModelProviderEndpointsRequest): Promise<$_model.ListModelProviderEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelProviderEndpointsWithOptions(request, runtime);
  }

  /**
   * Queries the list of model provider templates.
   * 
   * @remarks
   * You can perform a paged query to retrieve the list of model provider templates under a specified model group in the WUYING Agent Management Center. You can filter results by provider name, model group ID, and provider template ID. Paging is supported.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param tmpReq - ListModelProviderTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelProviderTemplatesResponse
   */
  async listModelProviderTemplatesWithOptions(tmpReq: $_model.ListModelProviderTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelProviderTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelProviderTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.providerTemplateIds)) {
      request.providerTemplateIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.providerTemplateIds, "ProviderTemplateIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.providerName)) {
      query["ProviderName"] = request.providerName;
    }

    if (!$dara.isNull(request.providerTemplateIdsShrink)) {
      query["ProviderTemplateIds"] = request.providerTemplateIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelProviderTemplates",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelProviderTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelProviderTemplatesResponse({}));
  }

  /**
   * Queries the list of model provider templates.
   * 
   * @remarks
   * You can perform a paged query to retrieve the list of model provider templates under a specified model group in the WUYING Agent Management Center. You can filter results by provider name, model group ID, and provider template ID. Paging is supported.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - ListModelProviderTemplatesRequest
   * @returns ListModelProviderTemplatesResponse
   */
  async listModelProviderTemplates(request: $_model.ListModelProviderTemplatesRequest): Promise<$_model.ListModelProviderTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelProviderTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the list of resource groups associated with a model group.
   * 
   * @remarks
   * You can call this operation to query the list of resource groups authorized by a model group in the Wuying Agent Management Center.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ListModelTemplateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelTemplateResourceGroupResponse
   */
  async listModelTemplateResourceGroupWithOptions(request: $_model.ListModelTemplateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelTemplateResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelTemplateResourceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelTemplateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListModelTemplateResourceGroupResponse({}));
  }

  /**
   * Queries the list of resource groups associated with a model group.
   * 
   * @remarks
   * You can call this operation to query the list of resource groups authorized by a model group in the Wuying Agent Management Center.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ListModelTemplateResourceGroupRequest
   * @returns ListModelTemplateResourceGroupResponse
   */
  async listModelTemplateResourceGroup(request: $_model.ListModelTemplateResourceGroupRequest): Promise<$_model.ListModelTemplateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelTemplateResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries a list of model templates.
   * 
   * @remarks
   * You can use paged query to retrieve model groups that have been created in the Wuying Agent Management Center, with paging support. You can filter results by Agent provider, Agent platform, template group ID, and whether models have been configured.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param tmpReq - ListModelTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelTemplatesResponse
   */
  async listModelTemplatesWithOptions(tmpReq: $_model.ListModelTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.modelTemplateIdList)) {
      request.modelTemplateIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelTemplateIdList, "ModelTemplateIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentPlatform)) {
      query["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      query["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.hasModel)) {
      query["HasModel"] = request.hasModel;
    }

    if (!$dara.isNull(request.modelTemplateIdListShrink)) {
      query["ModelTemplateIdList"] = request.modelTemplateIdListShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelTemplates",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListModelTemplatesResponse({}));
  }

  /**
   * Queries a list of model templates.
   * 
   * @remarks
   * You can use paged query to retrieve model groups that have been created in the Wuying Agent Management Center, with paging support. You can filter results by Agent provider, Agent platform, template group ID, and whether models have been configured.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - ListModelTemplatesRequest
   * @returns ListModelTemplatesResponse
   */
  async listModelTemplates(request: $_model.ListModelTemplatesRequest): Promise<$_model.ListModelTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listModelTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the resource specifications available for selection when creating a delivery group.
   * 
   * @param request - ListNodeInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeInstanceTypeResponse
   */
  async listNodeInstanceTypeWithOptions(request: $_model.ListNodeInstanceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeInstanceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.gpu)) {
      query["Gpu"] = request.gpu;
    }

    if (!$dara.isNull(request.gpuMemory)) {
      query["GpuMemory"] = request.gpuMemory;
    }

    if (!$dara.isNull(request.instanceTypeForModify)) {
      query["InstanceTypeForModify"] = request.instanceTypeForModify;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.nodeInstanceType)) {
      query["NodeInstanceType"] = request.nodeInstanceType;
    }

    if (!$dara.isNull(request.nodeInstanceTypeFamily)) {
      query["NodeInstanceTypeFamily"] = request.nodeInstanceTypeFamily;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeInstanceType",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeInstanceTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeInstanceTypeResponse({}));
  }

  /**
   * Queries the resource specifications available for selection when creating a delivery group.
   * 
   * @param request - ListNodeInstanceTypeRequest
   * @returns ListNodeInstanceTypeResponse
   */
  async listNodeInstanceType(request: $_model.ListNodeInstanceTypeRequest): Promise<$_model.ListNodeInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeInstanceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the list of resource nodes.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * Queries the list of resource nodes.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries the history of over-the-air updates.
   * 
   * @param request - ListOtaTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOtaTaskResponse
   */
  async listOtaTaskWithOptions(request: $_model.ListOtaTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOtaTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.otaType)) {
      body["OtaType"] = request.otaType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOtaTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOtaTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListOtaTaskResponse({}));
  }

  /**
   * Queries the history of over-the-air updates.
   * 
   * @param request - ListOtaTaskRequest
   * @returns ListOtaTaskResponse
   */
  async listOtaTask(request: $_model.ListOtaTaskRequest): Promise<$_model.ListOtaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOtaTaskWithOptions(request, runtime);
  }

  /**
   * Queries the list of persistent session application instances in a delivery group.
   * 
   * @param request - ListPersistentAppInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPersistentAppInstancesResponse
   */
  async listPersistentAppInstancesWithOptions(request: $_model.ListPersistentAppInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPersistentAppInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstancePersistentIds)) {
      query["AppInstancePersistentIds"] = request.appInstancePersistentIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPersistentAppInstances",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPersistentAppInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPersistentAppInstancesResponse({}));
  }

  /**
   * Queries the list of persistent session application instances in a delivery group.
   * 
   * @param request - ListPersistentAppInstancesRequest
   * @returns ListPersistentAppInstancesResponse
   */
  async listPersistentAppInstances(request: $_model.ListPersistentAppInstancesRequest): Promise<$_model.ListPersistentAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPersistentAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the regions supported by WUYING Cloud Application.
   * 
   * @remarks
   * > The regions returned by this operation are not necessarily all available regions. For information about available regions, see [Supported regions](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: $_model.ListRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizSource)) {
      query["BizSource"] = request.bizSource;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries the regions supported by WUYING Cloud Application.
   * 
   * @remarks
   * > The regions returned by this operation are not necessarily all available regions. For information about available regions, see [Supported regions](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the tag list of one or more specified cloud resources.
   * 
   * @param request - ListTagCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagCloudResourcesResponse
   */
  async listTagCloudResourcesWithOptions(request: $_model.ListTagCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagCloudResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagCloudResources",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagCloudResourcesResponse({}));
  }

  /**
   * Queries the tag list of one or more specified cloud resources.
   * 
   * @param request - ListTagCloudResourcesRequest
   * @returns ListTagCloudResourcesResponse
   */
  async listTagCloudResources(request: $_model.ListTagCloudResourcesRequest): Promise<$_model.ListTagCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information of an administrator account, such as whether resource expiration reminders are enabled.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantConfigResponse
   */
  async listTenantConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantConfig",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantConfigResponse({}));
  }

  /**
   * Queries the configuration information of an administrator account, such as whether resource expiration reminders are enabled.
   * @returns ListTenantConfigResponse
   */
  async listTenantConfig(): Promise<$_model.ListTenantConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTenantConfigWithOptions(runtime);
  }

  /**
   * Queries the list of workstations.
   * 
   * @param request - ListWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWuyingServerResponse
   */
  async listWuyingServerWithOptions(request: $_model.ListWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addVirtualNodePoolStatusList)) {
      bodyFlat["AddVirtualNodePoolStatusList"] = request.addVirtualNodePoolStatusList;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.officeSiteId)) {
      body["OfficeSiteId"] = request.officeSiteId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.serverInstanceType)) {
      body["ServerInstanceType"] = request.serverInstanceType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.users)) {
      bodyFlat["Users"] = request.users;
    }

    if (!$dara.isNull(request.virtualNodePoolId)) {
      body["VirtualNodePoolId"] = request.virtualNodePoolId;
    }

    if (!$dara.isNull(request.wuyingServerIdList)) {
      bodyFlat["WuyingServerIdList"] = request.wuyingServerIdList;
    }

    if (!$dara.isNull(request.wuyingServerNameOrId)) {
      body["WuyingServerNameOrId"] = request.wuyingServerNameOrId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.ListWuyingServerResponse({}));
  }

  /**
   * Queries the list of workstations.
   * 
   * @param request - ListWuyingServerRequest
   * @returns ListWuyingServerResponse
   */
  async listWuyingServer(request: $_model.ListWuyingServerRequest): Promise<$_model.ListWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWuyingServerWithOptions(request, runtime);
  }

  /**
   * Logs off all sessions in a pay-as-you-go delivery group that has scheduled auto scaling policies enabled.
   * 
   * @remarks
   * > This operation is applicable only to pay-as-you-go resource delivery groups that have scheduled auto scaling policies enabled, and can be called successfully only outside the scaling time periods configured in the scheduled auto scaling policies.
   * 
   * @param request - LogOffAllSessionsInAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogOffAllSessionsInAppInstanceGroupResponse
   */
  async logOffAllSessionsInAppInstanceGroupWithOptions(request: $_model.LogOffAllSessionsInAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LogOffAllSessionsInAppInstanceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LogOffAllSessionsInAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LogOffAllSessionsInAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.LogOffAllSessionsInAppInstanceGroupResponse({}));
  }

  /**
   * Logs off all sessions in a pay-as-you-go delivery group that has scheduled auto scaling policies enabled.
   * 
   * @remarks
   * > This operation is applicable only to pay-as-you-go resource delivery groups that have scheduled auto scaling policies enabled, and can be called successfully only outside the scaling time periods configured in the scheduled auto scaling policies.
   * 
   * @param request - LogOffAllSessionsInAppInstanceGroupRequest
   * @returns LogOffAllSessionsInAppInstanceGroupResponse
   */
  async logOffAllSessionsInAppInstanceGroup(request: $_model.LogOffAllSessionsInAppInstanceGroupRequest): Promise<$_model.LogOffAllSessionsInAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.logOffAllSessionsInAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the General Policy of a delivery group, including the number of concurrent sessions and the session retention duration after disconnection.
   * 
   * @param tmpReq - ModifyAppInstanceGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInstanceGroupAttributeResponse
   */
  async modifyAppInstanceGroupAttributeWithOptions(tmpReq: $_model.ModifyAppInstanceGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInstanceGroupAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppInstanceGroupAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.network)) {
      request.networkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.network, "Network", "json");
    }

    if (!$dara.isNull(tmpReq.nodePool)) {
      request.nodePoolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePool, "NodePool", "json");
    }

    if (!$dara.isNull(tmpReq.securityPolicy)) {
      request.securityPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.securityPolicy, "SecurityPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.storagePolicy)) {
      request.storagePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storagePolicy, "StoragePolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceGroupName)) {
      query["AppInstanceGroupName"] = request.appInstanceGroupName;
    }

    if (!$dara.isNull(request.nodePoolShrink)) {
      query["NodePool"] = request.nodePoolShrink;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.networkShrink)) {
      body["Network"] = request.networkShrink;
    }

    if (!$dara.isNull(request.perSessionPerApp)) {
      body["PerSessionPerApp"] = request.perSessionPerApp;
    }

    if (!$dara.isNull(request.preOpenAppId)) {
      body["PreOpenAppId"] = request.preOpenAppId;
    }

    if (!$dara.isNull(request.preOpenMode)) {
      body["PreOpenMode"] = request.preOpenMode;
    }

    if (!$dara.isNull(request.securityPolicyShrink)) {
      body["SecurityPolicy"] = request.securityPolicyShrink;
    }

    if (!$dara.isNull(request.storagePolicyShrink)) {
      body["StoragePolicy"] = request.storagePolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppInstanceGroupAttribute",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppInstanceGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppInstanceGroupAttributeResponse({}));
  }

  /**
   * Modifies the General Policy of a delivery group, including the number of concurrent sessions and the session retention duration after disconnection.
   * 
   * @param request - ModifyAppInstanceGroupAttributeRequest
   * @returns ModifyAppInstanceGroupAttributeResponse
   */
  async modifyAppInstanceGroupAttribute(request: $_model.ModifyAppInstanceGroupAttributeRequest): Promise<$_model.ModifyAppInstanceGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInstanceGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the display policy of a delivery group, including settings such as frame rate, resolution, and protocol type.
   * 
   * @param tmpReq - ModifyAppPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppPolicyResponse
   */
  async modifyAppPolicyWithOptions(tmpReq: $_model.ModifyAppPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAppPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.videoPolicy)) {
      request.videoPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoPolicy, "VideoPolicy", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appPolicyId)) {
      query["AppPolicyId"] = request.appPolicyId;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.videoPolicyShrink)) {
      query["VideoPolicy"] = request.videoPolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppPolicy",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppPolicyResponse({}));
  }

  /**
   * Modifies the display policy of a delivery group, including settings such as frame rate, resolution, and protocol type.
   * 
   * @param request - ModifyAppPolicyRequest
   * @returns ModifyAppPolicyResponse
   */
  async modifyAppPolicy(request: $_model.ModifyAppPolicyRequest): Promise<$_model.ModifyAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a Wuying Cloud Browser.
   * 
   * @remarks
   * Modifies the attributes of a Wuying Cloud Browser.
   * 
   * @param tmpReq - ModifyBrowserInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBrowserInstanceGroupResponse
   */
  async modifyBrowserInstanceGroupWithOptions(tmpReq: $_model.ModifyBrowserInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBrowserInstanceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBrowserInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.browserConfig)) {
      request.browserConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.browserConfig, "BrowserConfig", "json");
    }

    if (!$dara.isNull(tmpReq.network)) {
      request.networkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.network, "Network", "json");
    }

    if (!$dara.isNull(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    if (!$dara.isNull(tmpReq.storagePolicy)) {
      request.storagePolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storagePolicy, "StoragePolicy", "json");
    }

    if (!$dara.isNull(tmpReq.timers)) {
      request.timersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timers, "Timers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.browserConfigShrink)) {
      query["BrowserConfig"] = request.browserConfigShrink;
    }

    if (!$dara.isNull(request.browserInstanceGroupId)) {
      query["BrowserInstanceGroupId"] = request.browserInstanceGroupId;
    }

    if (!$dara.isNull(request.policyShrink)) {
      query["Policy"] = request.policyShrink;
    }

    if (!$dara.isNull(request.timersShrink)) {
      query["Timers"] = request.timersShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudBrowserName)) {
      body["CloudBrowserName"] = request.cloudBrowserName;
    }

    if (!$dara.isNull(request.maxAmount)) {
      body["MaxAmount"] = request.maxAmount;
    }

    if (!$dara.isNull(request.networkShrink)) {
      body["Network"] = request.networkShrink;
    }

    if (!$dara.isNull(request.storagePolicyShrink)) {
      body["StoragePolicy"] = request.storagePolicyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBrowserInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBrowserInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBrowserInstanceGroupResponse({}));
  }

  /**
   * Modifies the attributes of a Wuying Cloud Browser.
   * 
   * @remarks
   * Modifies the attributes of a Wuying Cloud Browser.
   * 
   * @param request - ModifyBrowserInstanceGroupRequest
   * @returns ModifyBrowserInstanceGroupResponse
   */
  async modifyBrowserInstanceGroup(request: $_model.ModifyBrowserInstanceGroupRequest): Promise<$_model.ModifyBrowserInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBrowserInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Upgrades the number of nodes in a subscription delivery group.
   * 
   * @param tmpReq - ModifyNodePoolAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodePoolAmountResponse
   */
  async modifyNodePoolAmountWithOptions(tmpReq: $_model.ModifyNodePoolAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodePoolAmountResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyNodePoolAmountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodePool)) {
      request.nodePoolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePool, "NodePool", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.nodePoolShrink)) {
      body["NodePool"] = request.nodePoolShrink;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodePoolAmount",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodePoolAmountResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodePoolAmountResponse({}));
  }

  /**
   * Upgrades the number of nodes in a subscription delivery group.
   * 
   * @param request - ModifyNodePoolAmountRequest
   * @returns ModifyNodePoolAmountResponse
   */
  async modifyNodePoolAmount(request: $_model.ModifyNodePoolAmountRequest): Promise<$_model.ModifyNodePoolAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodePoolAmountWithOptions(request, runtime);
  }

  /**
   * Modifies the scaling mode of a delivery group, including fixed quantity (no elastic scaling), scheduled scaling, and automatic scaling.
   * 
   * @remarks
   * You can configure the scaling pattern for WUYING Cloud Application resources in Settings:
   * - Fixed quantity: Elastic scaling is not used.
   * - Automatic scaling: Automatically scales resources based on the number of connected sessions and the idle duration without session connections.
   * - Scheduled scaling: Executes resource scaling during specified time periods on specified dates.
   * Before using this operation, make sure that you fully understand the [billing method and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Cloud Application.
   * 
   * @param tmpReq - ModifyNodePoolAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodePoolAttributeResponse
   */
  async modifyNodePoolAttributeWithOptions(tmpReq: $_model.ModifyNodePoolAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodePoolAttributeResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyNodePoolAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodePoolStrategy)) {
      request.nodePoolStrategyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodePoolStrategy, "NodePoolStrategy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizRegionId)) {
      body["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.nodeCapacity)) {
      body["NodeCapacity"] = request.nodeCapacity;
    }

    if (!$dara.isNull(request.nodePoolStrategyShrink)) {
      body["NodePoolStrategy"] = request.nodePoolStrategyShrink;
    }

    if (!$dara.isNull(request.poolId)) {
      body["PoolId"] = request.poolId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodePoolAttribute",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodePoolAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodePoolAttributeResponse({}));
  }

  /**
   * Modifies the scaling mode of a delivery group, including fixed quantity (no elastic scaling), scheduled scaling, and automatic scaling.
   * 
   * @remarks
   * You can configure the scaling pattern for WUYING Cloud Application resources in Settings:
   * - Fixed quantity: Elastic scaling is not used.
   * - Automatic scaling: Automatically scales resources based on the number of connected sessions and the idle duration without session connections.
   * - Scheduled scaling: Executes resource scaling during specified time periods on specified dates.
   * Before using this operation, make sure that you fully understand the [billing method and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Cloud Application.
   * 
   * @param request - ModifyNodePoolAttributeRequest
   * @returns ModifyNodePoolAttributeResponse
   */
  async modifyNodePoolAttribute(request: $_model.ModifyNodePoolAttributeRequest): Promise<$_model.ModifyNodePoolAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodePoolAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of an administrator account, such as whether to enable resource expiration reminders.
   * 
   * @param request - ModifyTenantConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTenantConfigResponse
   */
  async modifyTenantConfigWithOptions(request: $_model.ModifyTenantConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTenantConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupExpireRemind)) {
      body["AppInstanceGroupExpireRemind"] = request.appInstanceGroupExpireRemind;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTenantConfig",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTenantConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTenantConfigResponse({}));
  }

  /**
   * Modifies the configuration of an administrator account, such as whether to enable resource expiration reminders.
   * 
   * @param request - ModifyTenantConfigRequest
   * @returns ModifyTenantConfigResponse
   */
  async modifyTenantConfig(request: $_model.ModifyTenantConfigRequest): Promise<$_model.ModifyTenantConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the properties of a cloud graphics workstation.
   * 
   * @param request - ModifyWuyingServerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWuyingServerAttributeResponse
   */
  async modifyWuyingServerAttributeWithOptions(request: $_model.ModifyWuyingServerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWuyingServerAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    if (!$dara.isNull(request.wuyingServerName)) {
      body["WuyingServerName"] = request.wuyingServerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWuyingServerAttribute",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWuyingServerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWuyingServerAttributeResponse({}));
  }

  /**
   * Modifies the properties of a cloud graphics workstation.
   * 
   * @param request - ModifyWuyingServerAttributeRequest
   * @returns ModifyWuyingServerAttributeResponse
   */
  async modifyWuyingServerAttribute(request: $_model.ModifyWuyingServerAttributeRequest): Promise<$_model.ModifyWuyingServerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWuyingServerAttributeWithOptions(request, runtime);
  }

  /**
   * Performs a paged query on allocated users added to a delivery group.
   * 
   * @param request - PageListAppInstanceGroupUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageListAppInstanceGroupUserResponse
   */
  async pageListAppInstanceGroupUserWithOptions(request: $_model.PageListAppInstanceGroupUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageListAppInstanceGroupUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageListAppInstanceGroupUser",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageListAppInstanceGroupUserResponse>(await this.callApi(params, req, runtime), new $_model.PageListAppInstanceGroupUserResponse({}));
  }

  /**
   * Performs a paged query on allocated users added to a delivery group.
   * 
   * @param request - PageListAppInstanceGroupUserRequest
   * @returns PageListAppInstanceGroupUserResponse
   */
  async pageListAppInstanceGroupUser(request: $_model.PageListAppInstanceGroupUserRequest): Promise<$_model.PageListAppInstanceGroupUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageListAppInstanceGroupUserWithOptions(request, runtime);
  }

  /**
   * Removes model groups from a resource group.
   * 
   * @remarks
   * You can authorize model groups for resources that belong to Agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the WUYING Agent Management Center. The model groups serve as inference engines for Agents to execute tasks within the resource group.
   * When an Agent runtime has its own model group configured and the resource group it belongs to also has a model group configured, the model group bound to the resource group takes effect. The resource group setting takes priority over the Agent runtime setting.
   * When you remove the model group from the resource group to which an Agent runtime belongs, the model group configured on the Agent runtime itself automatically takes effect.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - RemoveResourceGroupModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveResourceGroupModelTemplateResponse
   */
  async removeResourceGroupModelTemplateWithOptions(request: $_model.RemoveResourceGroupModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveResourceGroupModelTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      body["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveResourceGroupModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveResourceGroupModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.RemoveResourceGroupModelTemplateResponse({}));
  }

  /**
   * Removes model groups from a resource group.
   * 
   * @remarks
   * You can authorize model groups for resources that belong to Agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the WUYING Agent Management Center. The model groups serve as inference engines for Agents to execute tasks within the resource group.
   * When an Agent runtime has its own model group configured and the resource group it belongs to also has a model group configured, the model group bound to the resource group takes effect. The resource group setting takes priority over the Agent runtime setting.
   * When you remove the model group from the resource group to which an Agent runtime belongs, the model group configured on the Agent runtime itself automatically takes effect.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the WUYING Agent Management Center.
   * 
   * @param request - RemoveResourceGroupModelTemplateRequest
   * @returns RemoveResourceGroupModelTemplateResponse
   */
  async removeResourceGroupModelTemplate(request: $_model.RemoveResourceGroupModelTemplateRequest): Promise<$_model.RemoveResourceGroupModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeResourceGroupModelTemplateWithOptions(request, runtime);
  }

  /**
   * Removes a third-party channel configuration from an agent runtime.
   * 
   * @remarks
   * You can call this operation to remove a specific third-party channel configuration from agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. After the configuration is removed, the agent can no longer use the third-party channel for conversations.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - RemoveRuntimeChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRuntimeChannelResponse
   */
  async removeRuntimeChannelWithOptions(request: $_model.RemoveRuntimeChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRuntimeChannelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentPlatform)) {
      body["AgentPlatform"] = request.agentPlatform;
    }

    if (!$dara.isNull(request.agentProvider)) {
      body["AgentProvider"] = request.agentProvider;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.runtimeIds)) {
      body["RuntimeIds"] = request.runtimeIds;
    }

    if (!$dara.isNull(request.runtimeType)) {
      body["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRuntimeChannel",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRuntimeChannelResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRuntimeChannelResponse({}));
  }

  /**
   * Removes a third-party channel configuration from an agent runtime.
   * 
   * @remarks
   * You can call this operation to remove a specific third-party channel configuration from agent runtimes such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. After the configuration is removed, the agent can no longer use the third-party channel for conversations.
   * Before calling this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - RemoveRuntimeChannelRequest
   * @returns RemoveRuntimeChannelResponse
   */
  async removeRuntimeChannel(request: $_model.RemoveRuntimeChannelRequest): Promise<$_model.RemoveRuntimeChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRuntimeChannelWithOptions(request, runtime);
  }

  /**
   * Removes a model group from an Agent runtime resource.
   * 
   * @remarks
   * You can remove model groups from Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. When an Agent runtime resource needs to switch to a different model group, call this operation first to remove the authorization relationship between the Agent runtime resource and the existing model group.
   * Make sure that you are familiar with the operations and usage of the Wuying Agent Management Center before calling this operation.
   * 
   * @param request - RemoveRuntimeModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRuntimeModelTemplateResponse
   */
  async removeRuntimeModelTemplateWithOptions(request: $_model.RemoveRuntimeModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRuntimeModelTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelTemplateId)) {
      body["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.runtimeIds)) {
      body["RuntimeIds"] = request.runtimeIds;
    }

    if (!$dara.isNull(request.runtimeType)) {
      body["RuntimeType"] = request.runtimeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveRuntimeModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRuntimeModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRuntimeModelTemplateResponse({}));
  }

  /**
   * Removes a model group from an Agent runtime resource.
   * 
   * @remarks
   * You can remove model groups from Agent runtime resources such as JVS Computer, OpenClaw, and Hermes Agent in the Wuying Agent Management Center. When an Agent runtime resource needs to switch to a different model group, call this operation first to remove the authorization relationship between the Agent runtime resource and the existing model group.
   * Make sure that you are familiar with the operations and usage of the Wuying Agent Management Center before calling this operation.
   * 
   * @param request - RemoveRuntimeModelTemplateRequest
   * @returns RemoveRuntimeModelTemplateResponse
   */
  async removeRuntimeModelTemplate(request: $_model.RemoveRuntimeModelTemplateRequest): Promise<$_model.RemoveRuntimeModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRuntimeModelTemplateWithOptions(request, runtime);
  }

  /**
   * Renews a delivery group.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [Billable methods and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Workspace.
   * 
   * @param tmpReq - RenewAppInstanceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewAppInstanceGroupResponse
   */
  async renewAppInstanceGroupWithOptions(tmpReq: $_model.RenewAppInstanceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewAppInstanceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.RenewAppInstanceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.renewNodes)) {
      request.renewNodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.renewNodes, "RenewNodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.renewAmount)) {
      query["RenewAmount"] = request.renewAmount;
    }

    if (!$dara.isNull(request.renewMode)) {
      query["RenewMode"] = request.renewMode;
    }

    if (!$dara.isNull(request.renewNodesShrink)) {
      query["RenewNodes"] = request.renewNodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewAppInstanceGroup",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewAppInstanceGroupResponse>(await this.callApi(params, req, runtime), new $_model.RenewAppInstanceGroupResponse({}));
  }

  /**
   * Renews a delivery group.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [Billable methods and pricing](https://help.aliyun.com/document_detail/426039.html) of WUYING Workspace.
   * 
   * @param request - RenewAppInstanceGroupRequest
   * @returns RenewAppInstanceGroupResponse
   */
  async renewAppInstanceGroup(request: $_model.RenewAppInstanceGroupRequest): Promise<$_model.RenewAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Renews a workstation.
   * 
   * @param request - RenewWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewWuyingServerResponse
   */
  async renewWuyingServerWithOptions(request: $_model.RenewWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenewWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.promotionId)) {
      body["PromotionId"] = request.promotionId;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.RenewWuyingServerResponse({}));
  }

  /**
   * Renews a workstation.
   * 
   * @param request - RenewWuyingServerRequest
   * @returns RenewWuyingServerResponse
   */
  async renewWuyingServer(request: $_model.RenewWuyingServerRequest): Promise<$_model.RenewWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewWuyingServerWithOptions(request, runtime);
  }

  /**
   * Restarts a workstation.
   * 
   * @param request - RestartWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartWuyingServerResponse
   */
  async restartWuyingServerWithOptions(request: $_model.RestartWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wuyingServerIdList)) {
      bodyFlat["WuyingServerIdList"] = request.wuyingServerIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.RestartWuyingServerResponse({}));
  }

  /**
   * Restarts a workstation.
   * 
   * @param request - RestartWuyingServerRequest
   * @returns RestartWuyingServerResponse
   */
  async restartWuyingServer(request: $_model.RestartWuyingServerRequest): Promise<$_model.RestartWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartWuyingServerWithOptions(request, runtime);
  }

  /**
   * Initiates a task to copy an image to other regions.
   * 
   * @param request - StartTaskForDistributeImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTaskForDistributeImageResponse
   */
  async startTaskForDistributeImageWithOptions(request: $_model.StartTaskForDistributeImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTaskForDistributeImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationRegionList)) {
      body["DestinationRegionList"] = request.destinationRegionList;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.retryType)) {
      body["RetryType"] = request.retryType;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      body["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTaskForDistributeImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTaskForDistributeImageResponse>(await this.callApi(params, req, runtime), new $_model.StartTaskForDistributeImageResponse({}));
  }

  /**
   * Initiates a task to copy an image to other regions.
   * 
   * @param request - StartTaskForDistributeImageRequest
   * @returns StartTaskForDistributeImageResponse
   */
  async startTaskForDistributeImage(request: $_model.StartTaskForDistributeImageRequest): Promise<$_model.StartTaskForDistributeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTaskForDistributeImageWithOptions(request, runtime);
  }

  /**
   * Starts a workstation.
   * 
   * @param request - StartWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWuyingServerResponse
   */
  async startWuyingServerWithOptions(request: $_model.StartWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wuyingServerIdList)) {
      bodyFlat["WuyingServerIdList"] = request.wuyingServerIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.StartWuyingServerResponse({}));
  }

  /**
   * Starts a workstation.
   * 
   * @param request - StartWuyingServerRequest
   * @returns StartWuyingServerResponse
   */
  async startWuyingServer(request: $_model.StartWuyingServerRequest): Promise<$_model.StartWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startWuyingServerWithOptions(request, runtime);
  }

  /**
   * Stops a workstation.
   * 
   * @param request - StopWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopWuyingServerResponse
   */
  async stopWuyingServerWithOptions(request: $_model.StopWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.wuyingServerIdList)) {
      bodyFlat["WuyingServerIdList"] = request.wuyingServerIdList;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopWuyingServer",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopWuyingServerResponse>(await this.callApi(params, req, runtime), new $_model.StopWuyingServerResponse({}));
  }

  /**
   * Stops a workstation.
   * 
   * @param request - StopWuyingServerRequest
   * @returns StopWuyingServerResponse
   */
  async stopWuyingServer(request: $_model.StopWuyingServerRequest): Promise<$_model.StopWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopWuyingServerWithOptions(request, runtime);
  }

  /**
   * Creates and attaches tags to cloud resources. If a tag already exists on a resource, the tag value is updated.
   * 
   * @param request - TagCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagCloudResourcesResponse
   */
  async tagCloudResourcesWithOptions(request: $_model.TagCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagCloudResourcesResponse> {
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagCloudResources",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagCloudResourcesResponse({}));
  }

  /**
   * Creates and attaches tags to cloud resources. If a tag already exists on a resource, the tag value is updated.
   * 
   * @param request - TagCloudResourcesRequest
   * @returns TagCloudResourcesResponse
   */
  async tagCloudResources(request: $_model.TagCloudResourcesRequest): Promise<$_model.TagCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagCloudResourcesWithOptions(request, runtime);
  }

  /**
   * 解绑研发主机的辅助私有IP
   * 
   * @param request - UnassignWuyingServerPrivateAddressesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnassignWuyingServerPrivateAddressesResponse
   */
  async unassignWuyingServerPrivateAddressesWithOptions(request: $_model.UnassignWuyingServerPrivateAddressesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnassignWuyingServerPrivateAddressesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privateIpAddresses)) {
      body["PrivateIpAddresses"] = request.privateIpAddresses;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnassignWuyingServerPrivateAddresses",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnassignWuyingServerPrivateAddressesResponse>(await this.callApi(params, req, runtime), new $_model.UnassignWuyingServerPrivateAddressesResponse({}));
  }

  /**
   * 解绑研发主机的辅助私有IP
   * 
   * @param request - UnassignWuyingServerPrivateAddressesRequest
   * @returns UnassignWuyingServerPrivateAddressesResponse
   */
  async unassignWuyingServerPrivateAddresses(request: $_model.UnassignWuyingServerPrivateAddressesRequest): Promise<$_model.UnassignWuyingServerPrivateAddressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unassignWuyingServerPrivateAddressesWithOptions(request, runtime);
  }

  /**
   * Unbinds a user from a session.
   * 
   * @param request - UnbindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindResponse
   */
  async unbindWithOptions(request: $_model.UnbindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInstanceGroupId)) {
      body["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.appInstanceId)) {
      body["AppInstanceId"] = request.appInstanceId;
    }

    if (!$dara.isNull(request.appInstancePersistentId)) {
      body["AppInstancePersistentId"] = request.appInstancePersistentId;
    }

    if (!$dara.isNull(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Unbind",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindResponse>(await this.callApi(params, req, runtime), new $_model.UnbindResponse({}));
  }

  /**
   * Unbinds a user from a session.
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: $_model.UnbindRequest): Promise<$_model.UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from cloud resources in a unified manner.
   * 
   * @param request - UntagCloudResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagCloudResourcesResponse
   */
  async untagCloudResourcesWithOptions(request: $_model.UntagCloudResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagCloudResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagCloudResources",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagCloudResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagCloudResourcesResponse({}));
  }

  /**
   * Unbinds tags from cloud resources in a unified manner.
   * 
   * @param request - UntagCloudResourcesRequest
   * @returns UntagCloudResourcesResponse
   */
  async untagCloudResources(request: $_model.UntagCloudResourcesRequest): Promise<$_model.UntagCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the image of a delivery group.
   * 
   * @remarks
   * >Warning: After the image update starts, sessions of end users who are accessing cloud applications will be disconnected. Proceed with caution to avoid data loss for end users.
   * > After the update is published, changes typically take about 2 minutes to take effect on the end user side.
   * 
   * @param request - UpdateAppInstanceGroupImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppInstanceGroupImageResponse
   */
  async updateAppInstanceGroupImageWithOptions(request: $_model.UpdateAppInstanceGroupImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppInstanceGroupImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appCenterImageId)) {
      query["AppCenterImageId"] = request.appCenterImageId;
    }

    if (!$dara.isNull(request.appInstanceGroupId)) {
      query["AppInstanceGroupId"] = request.appInstanceGroupId;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppInstanceGroupImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppInstanceGroupImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppInstanceGroupImageResponse({}));
  }

  /**
   * Updates the image of a delivery group.
   * 
   * @remarks
   * >Warning: After the image update starts, sessions of end users who are accessing cloud applications will be disconnected. Proceed with caution to avoid data loss for end users.
   * > After the update is published, changes typically take about 2 minutes to take effect on the end user side.
   * 
   * @param request - UpdateAppInstanceGroupImageRequest
   * @returns UpdateAppInstanceGroupImageResponse
   */
  async updateAppInstanceGroupImage(request: $_model.UpdateAppInstanceGroupImageRequest): Promise<$_model.UpdateAppInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * Updates a model provider template.
   * 
   * @remarks
   * You can update a model provider template that has been created in the Wuying Agent Management Center, including the template name, description, model service connection configuration, and Wuying security proxy switch. Partial field updates are supported. You only need to pass in the fields that you want to modify.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param tmpReq - UpdateModelProviderTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelProviderTemplateResponse
   */
  async updateModelProviderTemplateWithOptions(tmpReq: $_model.UpdateModelProviderTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelProviderTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateModelProviderTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableWuyingProxy)) {
      body["EnableWuyingProxy"] = request.enableWuyingProxy;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.providerTemplateId)) {
      body["ProviderTemplateId"] = request.providerTemplateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelProviderTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelProviderTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelProviderTemplateResponse({}));
  }

  /**
   * Updates a model provider template.
   * 
   * @remarks
   * You can update a model provider template that has been created in the Wuying Agent Management Center, including the template name, description, model service connection configuration, and Wuying security proxy switch. Partial field updates are supported. You only need to pass in the fields that you want to modify.
   * Before you call this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - UpdateModelProviderTemplateRequest
   * @returns UpdateModelProviderTemplateResponse
   */
  async updateModelProviderTemplate(request: $_model.UpdateModelProviderTemplateRequest): Promise<$_model.UpdateModelProviderTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelProviderTemplateWithOptions(request, runtime);
  }

  /**
   * Updates a model template.
   * 
   * @remarks
   * You can update a model group that has been created in the Wuying Agent Management Center, including the group name, description, and model configuration information. The updated configuration automatically takes effect on associated cloud desktops.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - UpdateModelTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelTemplateResponse
   */
  async updateModelTemplateWithOptions(request: $_model.UpdateModelTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.modelTemplateId)) {
      query["ModelTemplateId"] = request.modelTemplateId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelTemplate",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelTemplateResponse({}));
  }

  /**
   * Updates a model template.
   * 
   * @remarks
   * You can update a model group that has been created in the Wuying Agent Management Center, including the group name, description, and model configuration information. The updated configuration automatically takes effect on associated cloud desktops.
   * Before using this operation, make sure that you are familiar with the operations and usage of the Wuying Agent Management Center.
   * 
   * @param request - UpdateModelTemplateRequest
   * @returns UpdateModelTemplateResponse
   */
  async updateModelTemplate(request: $_model.UpdateModelTemplateRequest): Promise<$_model.UpdateModelTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModelTemplateWithOptions(request, runtime);
  }

  /**
   * Updates a workstation image.
   * 
   * @param request - UpdateWuyingServerImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWuyingServerImageResponse
   */
  async updateWuyingServerImageWithOptions(request: $_model.UpdateWuyingServerImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWuyingServerImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.wuyingServerId)) {
      body["WuyingServerId"] = request.wuyingServerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWuyingServerImage",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWuyingServerImageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWuyingServerImageResponse({}));
  }

  /**
   * Updates a workstation image.
   * 
   * @param request - UpdateWuyingServerImageRequest
   * @returns UpdateWuyingServerImageResponse
   */
  async updateWuyingServerImage(request: $_model.UpdateWuyingServerImageRequest): Promise<$_model.UpdateWuyingServerImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWuyingServerImageWithOptions(request, runtime);
  }

}
