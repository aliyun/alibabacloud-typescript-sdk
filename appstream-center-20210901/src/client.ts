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
   * Sets the execution time of an over-the-air (OTA) update task.
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
   * Sets the execution time of an over-the-air (OTA) update task.
   * 
   * @param request - ApproveOtaTaskRequest
   * @returns ApproveOtaTaskResponse
   */
  async approveOtaTask(request: $_model.ApproveOtaTaskRequest): Promise<$_model.ApproveOtaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveOtaTaskWithOptions(request, runtime);
  }

  /**
   * 授权用户
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
   * 授权用户
   * 
   * @param request - AuthorizeInstanceGroupRequest
   * @returns AuthorizeInstanceGroupResponse
   */
  async authorizeInstanceGroup(request: $_model.AuthorizeInstanceGroupRequest): Promise<$_model.AuthorizeInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.authorizeInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a delivery group.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
   * A delivery group is a logical group that is used to deliver cloud applications to end users, including the images, resource management policies, and user groups on which the cloud applications rely. For more information, see [Publish delivery groups](https://help.aliyun.com/document_detail/426046.html).
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
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
   * A delivery group is a logical group that is used to deliver cloud applications to end users, including the images, resource management policies, and user groups on which the cloud applications rely. For more information, see [Publish delivery groups](https://help.aliyun.com/document_detail/426046.html).
   * 
   * @param request - CreateAppInstanceGroupRequest
   * @returns CreateAppInstanceGroupResponse
   */
  async createAppInstanceGroup(request: $_model.CreateAppInstanceGroupRequest): Promise<$_model.CreateAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Create a custom image from a deployed instance. This allows you to quickly create more instances with the same configurations and avoid repeatedly configuring the instance environment each time you create the instance.
   * 
   * @param request - CreateImageByInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageByInstanceResponse
   */
  async createImageByInstanceWithOptions(request: $_model.CreateImageByInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageByInstanceResponse> {
    request.validate();
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
   * Create a custom image from a deployed instance. This allows you to quickly create more instances with the same configurations and avoid repeatedly configuring the instance environment each time you create the instance.
   * 
   * @param request - CreateImageByInstanceRequest
   * @returns CreateImageByInstanceResponse
   */
  async createImageByInstance(request: $_model.CreateImageByInstanceRequest): Promise<$_model.CreateImageByInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageByInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a new image by debugging the delivery group.
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
   * Creates a new image by debugging the delivery group.
   * 
   * @param request - CreateImageFromAppInstanceGroupRequest
   * @returns CreateImageFromAppInstanceGroupResponse
   */
  async createImageFromAppInstanceGroup(request: $_model.CreateImageFromAppInstanceGroupRequest): Promise<$_model.CreateImageFromAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageFromAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Create one or more workstations.
   * 
   * @remarks
   * 1.  Project is equivalent to the Resource Configuration module of the Cloud Flow console
   * 2.  If there are multiple versions behind the input parameter ContentId:
   *     **
   *     **Note** The default version is used.
   *     Bind simultaneously
   * 3.  You can call the current interface only if the default version of Content is available.
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
   * Create one or more workstations.
   * 
   * @remarks
   * 1.  Project is equivalent to the Resource Configuration module of the Cloud Flow console
   * 2.  If there are multiple versions behind the input parameter ContentId:
   *     **
   *     **Note** The default version is used.
   *     Bind simultaneously
   * 3.  You can call the current interface only if the default version of Content is available.
   * 
   * @param request - CreateWuyingServerRequest
   * @returns CreateWuyingServerResponse
   */
  async createWuyingServer(request: $_model.CreateWuyingServerRequest): Promise<$_model.CreateWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWuyingServerWithOptions(request, runtime);
  }

  /**
   * Deletes a delivery group that uses the By Resource - Pay-as-you-go billing method.
   * 
   * @remarks
   * >  You cannot call this operation to delete a subscription delivery group.
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
   * Deletes a delivery group that uses the By Resource - Pay-as-you-go billing method.
   * 
   * @remarks
   * >  You cannot call this operation to delete a subscription delivery group.
   * 
   * @param request - DeleteAppInstanceGroupRequest
   * @returns DeleteAppInstanceGroupResponse
   */
  async deleteAppInstanceGroup(request: $_model.DeleteAppInstanceGroupRequest): Promise<$_model.DeleteAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an application instance.
   * 
   * @remarks
   * Only application instances that are in the Initializing or Idle state can be deleted. The operation can be called only by specific customers.
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
   * Deletes an application instance.
   * 
   * @remarks
   * Only application instances that are in the Initializing or Idle state can be deleted. The operation can be called only by specific customers.
   * 
   * @param request - DeleteAppInstancesRequest
   * @returns DeleteAppInstancesResponse
   */
  async deleteAppInstances(request: $_model.DeleteAppInstancesRequest): Promise<$_model.DeleteAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppInstancesWithOptions(request, runtime);
  }

  /**
   * Delete a custom RDS image
   * 
   * @remarks
   *   You can only delete custom images to which a user belongs.
   * *   If the product line is an image of the RDS cloud computer pool, RDS cloud application, and RDS workstation, make sure that no RDS instances use the image before you delete it.
   * *   The RDS CloudDesktop template references an image. When you delete an image, the template is also deleted.
   * *   If the image contains multiple regions, the images in all regions are deleted when the image is deleted.
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
   * Delete a custom RDS image
   * 
   * @remarks
   *   You can only delete custom images to which a user belongs.
   * *   If the product line is an image of the RDS cloud computer pool, RDS cloud application, and RDS workstation, make sure that no RDS instances use the image before you delete it.
   * *   The RDS CloudDesktop template references an image. When you delete an image, the template is also deleted.
   * *   If the image contains multiple regions, the images in all regions are deleted when the image is deleted.
   * 
   * @param request - DeleteImageRequest
   * @returns DeleteImageResponse
   */
  async deleteImage(request: $_model.DeleteImageRequest): Promise<$_model.DeleteImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  /**
   * 删除工作站
   * 
   * @remarks
   * Deletes a workstation.
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
   * 删除工作站
   * 
   * @remarks
   * Deletes a workstation.
   * 
   * @param request - DeleteWuyingServerRequest
   * @returns DeleteWuyingServerResponse
   */
  async deleteWuyingServer(request: $_model.DeleteWuyingServerRequest): Promise<$_model.DeleteWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWuyingServerWithOptions(request, runtime);
  }

  /**
   * Queries the Elastic IP Addresses (EIPs) of workstations.
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
   * Queries the Elastic IP Addresses (EIPs) of workstations.
   * 
   * @param request - DescribeWuyingServerEipInfoRequest
   * @returns DescribeWuyingServerEipInfoResponse
   */
  async describeWuyingServerEipInfo(request: $_model.DescribeWuyingServerEipInfoRequest): Promise<$_model.DescribeWuyingServerEipInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWuyingServerEipInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a delivery group.
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
   * Queries the details of a delivery group.
   * 
   * @param request - GetAppInstanceGroupRequest
   * @returns GetAppInstanceGroupResponse
   */
  async getAppInstanceGroup(request: $_model.GetAppInstanceGroupRequest): Promise<$_model.GetAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the credential that is used to connect to App Streaming.
   * 
   * @remarks
   * You must call this operation at least twice to obtain a connection credential.
   * The first time you call this operation, the system assigns an application instance to the specified convenience account and then starts the application. In this case, the ID of the started task, which is indicated by `TaskID`, is returned.
   * In subsequent calls, you must configure `TaskID` to query whether the task is completed. If the value of `TaskStatus` in the response is `Finished`, the connection credential, which is indicated by `Ticket`, is returned.
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
   * Queries the credential that is used to connect to App Streaming.
   * 
   * @remarks
   * You must call this operation at least twice to obtain a connection credential.
   * The first time you call this operation, the system assigns an application instance to the specified convenience account and then starts the application. In this case, the ID of the started task, which is indicated by `TaskID`, is returned.
   * In subsequent calls, you must configure `TaskID` to query whether the task is completed. If the value of `TaskStatus` in the response is `Finished`, the connection credential, which is indicated by `Ticket`, is returned.
   * 
   * @param request - GetConnectionTicketRequest
   * @returns GetConnectionTicketResponse
   */
  async getConnectionTicket(request: $_model.GetConnectionTicketRequest): Promise<$_model.GetConnectionTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  /**
   * Queries information that is used to debug an application instance.
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
   * Queries information that is used to debug an application instance.
   * 
   * @param request - GetDebugAppInstanceRequest
   * @returns GetDebugAppInstanceResponse
   */
  async getDebugAppInstance(request: $_model.GetDebugAppInstanceRequest): Promise<$_model.GetDebugAppInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDebugAppInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an over-the-air (OTA) update task, including the available versions and version description.
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
   * Queries the details of an over-the-air (OTA) update task, including the available versions and version description.
   * 
   * @param request - GetOtaTaskByTaskIdRequest
   * @returns GetOtaTaskByTaskIdResponse
   */
  async getOtaTaskByTaskId(request: $_model.GetOtaTaskByTaskIdRequest): Promise<$_model.GetOtaTaskByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOtaTaskByTaskIdWithOptions(request, runtime);
  }

  /**
   * Queries resource prices.
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
   * Queries resource prices.
   * 
   * @param request - GetResourcePriceRequest
   * @returns GetResourcePriceResponse
   */
  async getResourcePrice(request: $_model.GetResourcePriceRequest): Promise<$_model.GetResourcePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourcePriceWithOptions(request, runtime);
  }

  /**
   * Queries the renewal prices of App Streaming resources.
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
   * Queries the renewal prices of App Streaming resources.
   * 
   * @param request - GetResourceRenewPriceRequest
   * @returns GetResourceRenewPriceResponse
   */
  async getResourceRenewPrice(request: $_model.GetResourceRenewPriceRequest): Promise<$_model.GetResourceRenewPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceRenewPriceWithOptions(request, runtime);
  }

  /**
   * Queries the details of multiple delivery groups that meet the query conditions.
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
   * Queries the details of multiple delivery groups that meet the query conditions.
   * 
   * @param request - ListAppInstanceGroupRequest
   * @returns ListAppInstanceGroupResponse
   */
  async listAppInstanceGroup(request: $_model.ListAppInstanceGroupRequest): Promise<$_model.ListAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of application instances in a delivery group, including the IDs, status, creation time, update time, session status, and public IP addresses associated with the primary NICs of the instances.
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
   * Queries the details of application instances in a delivery group, including the IDs, status, creation time, update time, session status, and public IP addresses associated with the primary NICs of the instances.
   * 
   * @param request - ListAppInstancesRequest
   * @returns ListAppInstancesResponse
   */
  async listAppInstances(request: $_model.ListAppInstancesRequest): Promise<$_model.ListAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the user groups authorized by a delivery group.
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
   * Queries the user groups authorized by a delivery group.
   * 
   * @param request - ListAuthorizedUserGroupsRequest
   * @returns ListAuthorizedUserGroupsResponse
   */
  async listAuthorizedUserGroups(request: $_model.ListAuthorizedUserGroupsRequest): Promise<$_model.ListAuthorizedUserGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAuthorizedUserGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the bindings between users and resources.
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
   * Queries the bindings between users and resources.
   * 
   * @param request - ListBindInfoRequest
   * @returns ListBindInfoResponse
   */
  async listBindInfo(request: $_model.ListBindInfoRequest): Promise<$_model.ListBindInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindInfoWithOptions(request, runtime);
  }

  /**
   * Queries the image information about an ECS instance.
   * 
   * @param request - ListImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageResponse
   */
  async listImageWithOptions(request: $_model.ListImageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageResponse> {
    request.validate();
    let query = { };
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
   * Queries the image information about an ECS instance.
   * 
   * @param request - ListImageRequest
   * @returns ListImageResponse
   */
  async listImage(request: $_model.ListImageRequest): Promise<$_model.ListImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageWithOptions(request, runtime);
  }

  /**
   * Queries the resource types that are available for purchase when you create a delivery group.
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
   * Queries the resource types that are available for purchase when you create a delivery group.
   * 
   * @param request - ListNodeInstanceTypeRequest
   * @returns ListNodeInstanceTypeResponse
   */
  async listNodeInstanceType(request: $_model.ListNodeInstanceTypeRequest): Promise<$_model.ListNodeInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeInstanceTypeWithOptions(request, runtime);
  }

  /**
   * Queries resource nodes.
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
   * Queries resource nodes.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries the information about over-the-air (OTA) update tasks.
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
   * Queries the information about over-the-air (OTA) update tasks.
   * 
   * @param request - ListOtaTaskRequest
   * @returns ListOtaTaskResponse
   */
  async listOtaTask(request: $_model.ListOtaTaskRequest): Promise<$_model.ListOtaTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOtaTaskWithOptions(request, runtime);
  }

  /**
   * Queries app instances of the persistent session type in a delivery group.
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
   * Queries app instances of the persistent session type in a delivery group.
   * 
   * @param request - ListPersistentAppInstancesRequest
   * @returns ListPersistentAppInstancesResponse
   */
  async listPersistentAppInstances(request: $_model.ListPersistentAppInstancesRequest): Promise<$_model.ListPersistentAppInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPersistentAppInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the regions that are supported by App Streaming.
   * 
   * @remarks
   * >  All supported regions instead of available regions are returned by this operation. For more information, see [Supported regions](https://help.aliyun.com/document_detail/426036.html).
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
   * Queries the regions that are supported by App Streaming.
   * 
   * @remarks
   * >  All supported regions instead of available regions are returned by this operation. For more information, see [Supported regions](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the tags added to one or more cloud resources.
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
   * Queries the tags added to one or more cloud resources.
   * 
   * @param request - ListTagCloudResourcesRequest
   * @returns ListTagCloudResourcesResponse
   */
  async listTagCloudResources(request: $_model.ListTagCloudResourcesRequest): Promise<$_model.ListTagCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the administrator account, such as whether the resource expiration reminder feature is enabled.
   * 
   * @param request - ListTenantConfigRequest
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
   * Queries the configurations of the administrator account, such as whether the resource expiration reminder feature is enabled.
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

    if (!$dara.isNull(request.serverInstanceType)) {
      body["ServerInstanceType"] = request.serverInstanceType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
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
   * Closes all sessions in a pay-as-you-go delivery group for which a scheduled scaling policy is used.
   * 
   * @remarks
   * >  This operation can be called only if you use a pay-as-you-go delivery group for which a scheduled scaling policy is used and if you call the operation at a time other than the scheduled time.
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
   * Closes all sessions in a pay-as-you-go delivery group for which a scheduled scaling policy is used.
   * 
   * @remarks
   * >  This operation can be called only if you use a pay-as-you-go delivery group for which a scheduled scaling policy is used and if you call the operation at a time other than the scheduled time.
   * 
   * @param request - LogOffAllSessionsInAppInstanceGroupRequest
   * @returns LogOffAllSessionsInAppInstanceGroupResponse
   */
  async logOffAllSessionsInAppInstanceGroup(request: $_model.LogOffAllSessionsInAppInstanceGroupRequest): Promise<$_model.LogOffAllSessionsInAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.logOffAllSessionsInAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the general policies of a delivery group, including the number of concurrent sessions and the retention period of disconnected sessions.
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
   * Modifies the general policies of a delivery group, including the number of concurrent sessions and the retention period of disconnected sessions.
   * 
   * @param request - ModifyAppInstanceGroupAttributeRequest
   * @returns ModifyAppInstanceGroupAttributeResponse
   */
  async modifyAppInstanceGroupAttribute(request: $_model.ModifyAppInstanceGroupAttributeRequest): Promise<$_model.ModifyAppInstanceGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInstanceGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modify the delivery group display policy, including settings such as frame rate, resolution, and protocol type.
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
   * Modify the delivery group display policy, including settings such as frame rate, resolution, and protocol type.
   * 
   * @param request - ModifyAppPolicyRequest
   * @returns ModifyAppPolicyResponse
   */
  async modifyAppPolicy(request: $_model.ModifyAppPolicyRequest): Promise<$_model.ModifyAppPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the properties of the cloud browser.
   * 
   * @remarks
   * Modifies the properties of the cloud browser.
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

    if (!$dara.isNull(request.networkShrink)) {
      body["Network"] = request.networkShrink;
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
   * Modifies the properties of the cloud browser.
   * 
   * @remarks
   * Modifies the properties of the cloud browser.
   * 
   * @param request - ModifyBrowserInstanceGroupRequest
   * @returns ModifyBrowserInstanceGroupResponse
   */
  async modifyBrowserInstanceGroup(request: $_model.ModifyBrowserInstanceGroupRequest): Promise<$_model.ModifyBrowserInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBrowserInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Changes the number of nodes in a subscription delivery group.
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
   * Changes the number of nodes in a subscription delivery group.
   * 
   * @param request - ModifyNodePoolAmountRequest
   * @returns ModifyNodePoolAmountResponse
   */
  async modifyNodePoolAmount(request: $_model.ModifyNodePoolAmountRequest): Promise<$_model.ModifyNodePoolAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodePoolAmountWithOptions(request, runtime);
  }

  /**
   * Changes the scaling policy of a delivery group. The following scaling policies are supported: fixed resource number, scheduled scaling, and auto scaling.
   * 
   * @remarks
   * You can select one of the following scaling policies for cloud app resources:
   * *   No scaling: Resources are not scaled.
   * *   Auto scaling: Resources are automatically scaled based on the number of connected sessions and the duration during which no session is connected.
   * *   Scheduled scaling: Resources are scaled during specific periods of time on specific dates.
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
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
   * Changes the scaling policy of a delivery group. The following scaling policies are supported: fixed resource number, scheduled scaling, and auto scaling.
   * 
   * @remarks
   * You can select one of the following scaling policies for cloud app resources:
   * *   No scaling: Resources are not scaled.
   * *   Auto scaling: Resources are automatically scaled based on the number of connected sessions and the duration during which no session is connected.
   * *   Scheduled scaling: Resources are scaled during specific periods of time on specific dates.
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
   * 
   * @param request - ModifyNodePoolAttributeRequest
   * @returns ModifyNodePoolAttributeResponse
   */
  async modifyNodePoolAttribute(request: $_model.ModifyNodePoolAttributeRequest): Promise<$_model.ModifyNodePoolAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNodePoolAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of the administrator account, such as whether to enable the resource expiration reminder feature.
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
   * Modifies the configurations of the administrator account, such as whether to enable the resource expiration reminder feature.
   * 
   * @param request - ModifyTenantConfigRequest
   * @returns ModifyTenantConfigResponse
   */
  async modifyTenantConfig(request: $_model.ModifyTenantConfigRequest): Promise<$_model.ModifyTenantConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTenantConfigWithOptions(request, runtime);
  }

  /**
   * Modify workstation properties.
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
   * Modify workstation properties.
   * 
   * @param request - ModifyWuyingServerAttributeRequest
   * @returns ModifyWuyingServerAttributeResponse
   */
  async modifyWuyingServerAttribute(request: $_model.ModifyWuyingServerAttributeRequest): Promise<$_model.ModifyWuyingServerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyWuyingServerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the assigned users that are added to a delivery group by page.
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
   * Queries the assigned users that are added to a delivery group by page.
   * 
   * @param request - PageListAppInstanceGroupUserRequest
   * @returns PageListAppInstanceGroupUserResponse
   */
  async pageListAppInstanceGroupUser(request: $_model.PageListAppInstanceGroupUserRequest): Promise<$_model.PageListAppInstanceGroupUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageListAppInstanceGroupUserWithOptions(request, runtime);
  }

  /**
   * Renews a delivery group.
   * 
   * @remarks
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
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
   * Before you call this operation, make sure that you fully understand the [billing methods and prices](https://help.aliyun.com/document_detail/426039.html) of App Streaming.
   * 
   * @param request - RenewAppInstanceGroupRequest
   * @returns RenewAppInstanceGroupResponse
   */
  async renewAppInstanceGroup(request: $_model.RenewAppInstanceGroupRequest): Promise<$_model.RenewAppInstanceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewAppInstanceGroupWithOptions(request, runtime);
  }

  /**
   * Renew one workstation.
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
   * Renew one workstation.
   * 
   * @param request - RenewWuyingServerRequest
   * @returns RenewWuyingServerResponse
   */
  async renewWuyingServer(request: $_model.RenewWuyingServerRequest): Promise<$_model.RenewWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewWuyingServerWithOptions(request, runtime);
  }

  /**
   * Restarts the workstation.
   * 
   * @param request - RestartWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartWuyingServerResponse
   */
  async restartWuyingServerWithOptions(request: $_model.RestartWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Restarts the workstation.
   * 
   * @param request - RestartWuyingServerRequest
   * @returns RestartWuyingServerResponse
   */
  async restartWuyingServer(request: $_model.RestartWuyingServerRequest): Promise<$_model.RestartWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartWuyingServerWithOptions(request, runtime);
  }

  /**
   * Initiates a task to replicate an image to another region.
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
   * Initiates a task to replicate an image to another region.
   * 
   * @param request - StartTaskForDistributeImageRequest
   * @returns StartTaskForDistributeImageResponse
   */
  async startTaskForDistributeImage(request: $_model.StartTaskForDistributeImageRequest): Promise<$_model.StartTaskForDistributeImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTaskForDistributeImageWithOptions(request, runtime);
  }

  /**
   * Start the workstation.
   * 
   * @param request - StartWuyingServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWuyingServerResponse
   */
  async startWuyingServerWithOptions(request: $_model.StartWuyingServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartWuyingServerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Start the workstation.
   * 
   * @param request - StartWuyingServerRequest
   * @returns StartWuyingServerResponse
   */
  async startWuyingServer(request: $_model.StartWuyingServerRequest): Promise<$_model.StartWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startWuyingServerWithOptions(request, runtime);
  }

  /**
   * Stops the workstation.
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
   * Stops the workstation.
   * 
   * @param request - StopWuyingServerRequest
   * @returns StopWuyingServerResponse
   */
  async stopWuyingServer(request: $_model.StopWuyingServerRequest): Promise<$_model.StopWuyingServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopWuyingServerWithOptions(request, runtime);
  }

  /**
   * 为云资源创建并绑定标签
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
   * 为云资源创建并绑定标签
   * 
   * @param request - TagCloudResourcesRequest
   * @returns TagCloudResourcesResponse
   */
  async tagCloudResources(request: $_model.TagCloudResourcesRequest): Promise<$_model.TagCloudResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagCloudResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds a user and a session.
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
   * Unbinds a user and a session.
   * 
   * @param request - UnbindRequest
   * @returns UnbindResponse
   */
  async unbind(request: $_model.UnbindRequest): Promise<$_model.UnbindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindWithOptions(request, runtime);
  }

  /**
   * Removes tags from cloud resources.
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
   * Removes tags from cloud resources.
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
   * *
   * **Warning** After the image is updated, the end user session accessing the cloud application will be disconnected. Exercise caution to avoid end user data loss.
   * >  After the image of the delivery group is updated, the change takes effect on the terminal in approximately 2 minutes.
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
   * *
   * **Warning** After the image is updated, the end user session accessing the cloud application will be disconnected. Exercise caution to avoid end user data loss.
   * >  After the image of the delivery group is updated, the change takes effect on the terminal in approximately 2 minutes.
   * 
   * @param request - UpdateAppInstanceGroupImageRequest
   * @returns UpdateAppInstanceGroupImageResponse
   */
  async updateAppInstanceGroupImage(request: $_model.UpdateAppInstanceGroupImageRequest): Promise<$_model.UpdateAppInstanceGroupImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAppInstanceGroupImageWithOptions(request, runtime);
  }

  /**
   * Updates the workstation image.
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
   * Updates the workstation image.
   * 
   * @param request - UpdateWuyingServerImageRequest
   * @returns UpdateWuyingServerImageResponse
   */
  async updateWuyingServerImage(request: $_model.UpdateWuyingServerImageRequest): Promise<$_model.UpdateWuyingServerImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWuyingServerImageWithOptions(request, runtime);
  }

}
