// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyvmsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Binds multiple real numbers to a service instance at a time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - AddVirtualNumberRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVirtualNumberRelationResponse
   */
  async addVirtualNumberRelationWithOptions(request: $_model.AddVirtualNumberRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVirtualNumberRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.corpNameList)) {
      query["CorpNameList"] = request.corpNameList;
    }

    if (!$dara.isNull(request.numberList)) {
      query["NumberList"] = request.numberList;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new $_model.AddVirtualNumberRelationResponse({}));
  }

  /**
   * Binds multiple real numbers to a service instance at a time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - AddVirtualNumberRelationRequest
   * @returns AddVirtualNumberRelationResponse
   */
  async addVirtualNumberRelation(request: $_model.AddVirtualNumberRelationRequest): Promise<$_model.AddVirtualNumberRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVirtualNumberRelationWithOptions(request, runtime);
  }

  /**
   * Initiates outbound robocall tasks in a batch. You can set up to 100 numbers in a task.
   * 
   * @remarks
   *   In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * *   The BatchRobotSmartCall operation is used to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console.
   * ## Prerequisites
   * *   You have passed the real-name verification for an enterprise user and passed the enterprise qualification review.
   * *   You have purchased numbers in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * *   You have added communication scripts on the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page, and the communication scripts have been approved.
   * > Before you call this operation, make sure that you are familiar with the [billing](https://www.aliyun.com/price/product#/vms/detail) of Voice Messaging Service (VMS).
   * 
   * @param request - BatchRobotSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRobotSmartCallResponse
   */
  async batchRobotSmartCallWithOptions(request: $_model.BatchRobotSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRobotSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!$dara.isNull(request.dialogId)) {
      query["DialogId"] = request.dialogId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.isSelfLine)) {
      query["IsSelfLine"] = request.isSelfLine;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduleCall)) {
      query["ScheduleCall"] = request.scheduleCall;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!$dara.isNull(request.ttsParamHead)) {
      query["TtsParamHead"] = request.ttsParamHead;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRobotSmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRobotSmartCallResponse>(await this.callApi(params, req, runtime), new $_model.BatchRobotSmartCallResponse({}));
  }

  /**
   * Initiates outbound robocall tasks in a batch. You can set up to 100 numbers in a task.
   * 
   * @remarks
   *   In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * *   The BatchRobotSmartCall operation is used to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console.
   * ## Prerequisites
   * *   You have passed the real-name verification for an enterprise user and passed the enterprise qualification review.
   * *   You have purchased numbers in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * *   You have added communication scripts on the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page, and the communication scripts have been approved.
   * > Before you call this operation, make sure that you are familiar with the [billing](https://www.aliyun.com/price/product#/vms/detail) of Voice Messaging Service (VMS).
   * 
   * @param request - BatchRobotSmartCallRequest
   * @returns BatchRobotSmartCallResponse
   */
  async batchRobotSmartCall(request: $_model.BatchRobotSmartCallRequest): Promise<$_model.BatchRobotSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchRobotSmartCallWithOptions(request, runtime);
  }

  /**
   * Cancels the two-way call that is initiated by calling the ClickToDial operation.
   * 
   * @param request - CancelCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelCallResponse
   */
  async cancelCallWithOptions(request: $_model.CancelCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelCallResponse>(await this.callApi(params, req, runtime), new $_model.CancelCallResponse({}));
  }

  /**
   * Cancels the two-way call that is initiated by calling the ClickToDial operation.
   * 
   * @param request - CancelCallRequest
   * @returns CancelCallResponse
   */
  async cancelCall(request: $_model.CancelCallRequest): Promise<$_model.CancelCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelCallWithOptions(request, runtime);
  }

  /**
   * Cancels a robocall task that has not been started.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelOrderRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderRobotTaskResponse
   */
  async cancelOrderRobotTaskWithOptions(request: $_model.CancelOrderRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOrderRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelOrderRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOrderRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelOrderRobotTaskResponse({}));
  }

  /**
   * Cancels a robocall task that has not been started.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelOrderRobotTaskRequest
   * @returns CancelOrderRobotTaskResponse
   */
  async cancelOrderRobotTask(request: $_model.CancelOrderRobotTaskRequest): Promise<$_model.CancelOrderRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelOrderRobotTaskWithOptions(request, runtime);
  }

  /**
   * Terminates a robocall task.
   * 
   * @remarks
   * Only a task in progress can be terminated by calling the CancelRobotTask operation, and the task cannot be resumed after it is terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRobotTaskResponse
   */
  async cancelRobotTaskWithOptions(request: $_model.CancelRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelRobotTaskResponse({}));
  }

  /**
   * Terminates a robocall task.
   * 
   * @remarks
   * Only a task in progress can be terminated by calling the CancelRobotTask operation, and the task cannot be resumed after it is terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CancelRobotTaskRequest
   * @returns CancelRobotTaskResponse
   */
  async cancelRobotTask(request: $_model.CancelRobotTaskRequest): Promise<$_model.CancelRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRobotTaskWithOptions(request, runtime);
  }

  /**
   * ChangeMediaType
   * 
   * @param request - ChangeMediaTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeMediaTypeResponse
   */
  async changeMediaTypeWithOptions(request: $_model.ChangeMediaTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeMediaTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeMediaType",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeMediaTypeResponse>(await this.callApi(params, req, runtime), new $_model.ChangeMediaTypeResponse({}));
  }

  /**
   * ChangeMediaType
   * 
   * @param request - ChangeMediaTypeRequest
   * @returns ChangeMediaTypeResponse
   */
  async changeMediaType(request: $_model.ChangeMediaTypeRequest): Promise<$_model.ChangeMediaTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeMediaTypeWithOptions(request, runtime);
  }

  /**
   * 座席上线
   * 
   * @param request - CloudAgentLoginRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentLoginResponse
   */
  async cloudAgentLoginWithOptions(request: $_model.CloudAgentLoginRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentLoginResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindTel)) {
      query["BindTel"] = request.bindTel;
    }

    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.loginStatus)) {
      query["LoginStatus"] = request.loginStatus;
    }

    if (!$dara.isNull(request.pauseDescription)) {
      query["PauseDescription"] = request.pauseDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentLogin",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentLoginResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentLoginResponse({}));
  }

  /**
   * 座席上线
   * 
   * @param request - CloudAgentLoginRequest
   * @returns CloudAgentLoginResponse
   */
  async cloudAgentLogin(request: $_model.CloudAgentLoginRequest): Promise<$_model.CloudAgentLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentLoginWithOptions(request, runtime);
  }

  /**
   * 座席下线
   * 
   * @param request - CloudAgentLogoutRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentLogoutResponse
   */
  async cloudAgentLogoutWithOptions(request: $_model.CloudAgentLogoutRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentLogoutResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ignoreOffline)) {
      query["IgnoreOffline"] = request.ignoreOffline;
    }

    if (!$dara.isNull(request.isKickout)) {
      query["IsKickout"] = request.isKickout;
    }

    if (!$dara.isNull(request.removeBinding)) {
      query["RemoveBinding"] = request.removeBinding;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentLogout",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentLogoutResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentLogoutResponse({}));
  }

  /**
   * 座席下线
   * 
   * @param request - CloudAgentLogoutRequest
   * @returns CloudAgentLogoutResponse
   */
  async cloudAgentLogout(request: $_model.CloudAgentLogoutRequest): Promise<$_model.CloudAgentLogoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentLogoutWithOptions(request, runtime);
  }

  /**
   * 座席设置随路数据
   * 
   * @param request - CloudAgentSetUserDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentSetUserDataResponse
   */
  async cloudAgentSetUserDataWithOptions(request: $_model.CloudAgentSetUserDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentSetUserDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentSetUserData",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentSetUserDataResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentSetUserDataResponse({}));
  }

  /**
   * 座席设置随路数据
   * 
   * @param request - CloudAgentSetUserDataRequest
   * @returns CloudAgentSetUserDataResponse
   */
  async cloudAgentSetUserData(request: $_model.CloudAgentSetUserDataRequest): Promise<$_model.CloudAgentSetUserDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentSetUserDataWithOptions(request, runtime);
  }

  /**
   * 座席挂机
   * 
   * @param request - CloudAgentUnlinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentUnlinkResponse
   */
  async cloudAgentUnlinkWithOptions(request: $_model.CloudAgentUnlinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentUnlinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.side)) {
      query["Side"] = request.side;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentUnlink",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentUnlinkResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentUnlinkResponse({}));
  }

  /**
   * 座席挂机
   * 
   * @param request - CloudAgentUnlinkRequest
   * @returns CloudAgentUnlinkResponse
   */
  async cloudAgentUnlink(request: $_model.CloudAgentUnlinkRequest): Promise<$_model.CloudAgentUnlinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentUnlinkWithOptions(request, runtime);
  }

  /**
   * 批量新增座席,单次批量创建不能超过100个
   * 
   * @param request - CloudBatchCreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudBatchCreateAgentResponse
   */
  async cloudBatchCreateAgentWithOptions(request: $_model.CloudBatchCreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudBatchCreateAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.endCno)) {
      query["EndCno"] = request.endCno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isAsr)) {
      query["IsAsr"] = request.isAsr;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.isQualityCheck)) {
      query["IsQualityCheck"] = request.isQualityCheck;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClid)) {
      query["ObClid"] = request.obClid;
    }

    if (!$dara.isNull(request.obClidProperty)) {
      query["ObClidProperty"] = request.obClidProperty;
    }

    if (!$dara.isNull(request.obClidType)) {
      query["ObClidType"] = request.obClidType;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.power)) {
      query["Power"] = request.power;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    if (!$dara.isNull(request.skillLevels)) {
      query["SkillLevels"] = request.skillLevels;
    }

    if (!$dara.isNull(request.webrtcUrlType)) {
      query["WebrtcUrlType"] = request.webrtcUrlType;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudBatchCreateAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudBatchCreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudBatchCreateAgentResponse({}));
  }

  /**
   * 批量新增座席,单次批量创建不能超过100个
   * 
   * @param request - CloudBatchCreateAgentRequest
   * @returns CloudBatchCreateAgentResponse
   */
  async cloudBatchCreateAgent(request: $_model.CloudBatchCreateAgentRequest): Promise<$_model.CloudBatchCreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchCreateAgentWithOptions(request, runtime);
  }

  /**
   * 座席实时状态批量获取
   * 
   * @param request - CloudBatchGetAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudBatchGetAgentStatusResponse
   */
  async cloudBatchGetAgentStatusWithOptions(request: $_model.CloudBatchGetAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudBatchGetAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudBatchGetAgentStatus",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudBatchGetAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.CloudBatchGetAgentStatusResponse({}));
  }

  /**
   * 座席实时状态批量获取
   * 
   * @param request - CloudBatchGetAgentStatusRequest
   * @returns CloudBatchGetAgentStatusResponse
   */
  async cloudBatchGetAgentStatus(request: $_model.CloudBatchGetAgentStatusRequest): Promise<$_model.CloudBatchGetAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchGetAgentStatusWithOptions(request, runtime);
  }

  /**
   * 批量更新座席基本信息，不包含座席绑定的技能信息的更新
   * 
   * @param request - CloudBatchUpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudBatchUpdateAgentResponse
   */
  async cloudBatchUpdateAgentWithOptions(request: $_model.CloudBatchUpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudBatchUpdateAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isAsr)) {
      query["IsAsr"] = request.isAsr;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.isObRemember)) {
      query["IsObRemember"] = request.isObRemember;
    }

    if (!$dara.isNull(request.isQualityCheck)) {
      query["IsQualityCheck"] = request.isQualityCheck;
    }

    if (!$dara.isNull(request.isRandom)) {
      query["IsRandom"] = request.isRandom;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClid)) {
      query["ObClid"] = request.obClid;
    }

    if (!$dara.isNull(request.obClidProperty)) {
      query["ObClidProperty"] = request.obClidProperty;
    }

    if (!$dara.isNull(request.obClidType)) {
      query["ObClidType"] = request.obClidType;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permitObPreviewTime)) {
      query["PermitObPreviewTime"] = request.permitObPreviewTime;
    }

    if (!$dara.isNull(request.power)) {
      query["Power"] = request.power;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.webrtcUrlType)) {
      query["WebrtcUrlType"] = request.webrtcUrlType;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudBatchUpdateAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudBatchUpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudBatchUpdateAgentResponse({}));
  }

  /**
   * 批量更新座席基本信息，不包含座席绑定的技能信息的更新
   * 
   * @param request - CloudBatchUpdateAgentRequest
   * @returns CloudBatchUpdateAgentResponse
   */
  async cloudBatchUpdateAgent(request: $_model.CloudBatchUpdateAgentRequest): Promise<$_model.CloudBatchUpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchUpdateAgentWithOptions(request, runtime);
  }

  /**
   * 座席新增
   * 
   * @param request - CloudCreateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateAgentResponse
   */
  async cloudCreateAgentWithOptions(request: $_model.CloudCreateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isAsr)) {
      query["IsAsr"] = request.isAsr;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.isObRemember)) {
      query["IsObRemember"] = request.isObRemember;
    }

    if (!$dara.isNull(request.isQualityCheck)) {
      query["IsQualityCheck"] = request.isQualityCheck;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClid)) {
      query["ObClid"] = request.obClid;
    }

    if (!$dara.isNull(request.obClidProperty)) {
      query["ObClidProperty"] = request.obClidProperty;
    }

    if (!$dara.isNull(request.obClidType)) {
      query["ObClidType"] = request.obClidType;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permitObPreviewTime)) {
      query["PermitObPreviewTime"] = request.permitObPreviewTime;
    }

    if (!$dara.isNull(request.power)) {
      query["Power"] = request.power;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    if (!$dara.isNull(request.skillLevels)) {
      query["SkillLevels"] = request.skillLevels;
    }

    if (!$dara.isNull(request.webrtcUrlType)) {
      query["WebrtcUrlType"] = request.webrtcUrlType;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateAgentResponse({}));
  }

  /**
   * 座席新增
   * 
   * @param request - CloudCreateAgentRequest
   * @returns CloudCreateAgentResponse
   */
  async cloudCreateAgent(request: $_model.CloudCreateAgentRequest): Promise<$_model.CloudCreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateAgentWithOptions(request, runtime);
  }

  /**
   * 新增任务
   * 
   * @param request - CloudCreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateTaskResponse
   */
  async cloudCreateTaskWithOptions(request: $_model.CloudCreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentGroup)) {
      query["AgentGroup"] = request.agentGroup;
    }

    if (!$dara.isNull(request.agentTimeout)) {
      query["AgentTimeout"] = request.agentTimeout;
    }

    if (!$dara.isNull(request.answerRate)) {
      query["AnswerRate"] = request.answerRate;
    }

    if (!$dara.isNull(request.autoComplete)) {
      query["AutoComplete"] = request.autoComplete;
    }

    if (!$dara.isNull(request.autoDelete)) {
      query["AutoDelete"] = request.autoDelete;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.autoStartDay)) {
      query["AutoStartDay"] = request.autoStartDay;
    }

    if (!$dara.isNull(request.autoStartTime)) {
      query["AutoStartTime"] = request.autoStartTime;
    }

    if (!$dara.isNull(request.autoStop)) {
      query["AutoStop"] = request.autoStop;
    }

    if (!$dara.isNull(request.autoStopDay)) {
      query["AutoStopDay"] = request.autoStopDay;
    }

    if (!$dara.isNull(request.autoStopTime)) {
      query["AutoStopTime"] = request.autoStopTime;
    }

    if (!$dara.isNull(request.autoTaskType)) {
      query["AutoTaskType"] = request.autoTaskType;
    }

    if (!$dara.isNull(request.autoTriggerTimeStrategy)) {
      query["AutoTriggerTimeStrategy"] = request.autoTriggerTimeStrategy;
    }

    if (!$dara.isNull(request.callGroupType)) {
      query["CallGroupType"] = request.callGroupType;
    }

    if (!$dara.isNull(request.callLimitStrategy)) {
      query["CallLimitStrategy"] = request.callLimitStrategy;
    }

    if (!$dara.isNull(request.callPriorityStrategy)) {
      query["CallPriorityStrategy"] = request.callPriorityStrategy;
    }

    if (!$dara.isNull(request.callRouteStrategy)) {
      query["CallRouteStrategy"] = request.callRouteStrategy;
    }

    if (!$dara.isNull(request.callStrategy)) {
      query["CallStrategy"] = request.callStrategy;
    }

    if (!$dara.isNull(request.callVariables)) {
      query["CallVariables"] = request.callVariables;
    }

    if (!$dara.isNull(request.clidProperty)) {
      query["ClidProperty"] = request.clidProperty;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.customerClidType)) {
      query["CustomerClidType"] = request.customerClidType;
    }

    if (!$dara.isNull(request.customerClidWeight)) {
      query["CustomerClidWeight"] = request.customerClidWeight;
    }

    if (!$dara.isNull(request.customerClidWeightFlag)) {
      query["CustomerClidWeightFlag"] = request.customerClidWeightFlag;
    }

    if (!$dara.isNull(request.customerClids)) {
      query["CustomerClids"] = request.customerClids;
    }

    if (!$dara.isNull(request.customerClidsCategory)) {
      query["CustomerClidsCategory"] = request.customerClidsCategory;
    }

    if (!$dara.isNull(request.customerClidsGroup)) {
      query["CustomerClidsGroup"] = request.customerClidsGroup;
    }

    if (!$dara.isNull(request.customerMoh)) {
      query["CustomerMoh"] = request.customerMoh;
    }

    if (!$dara.isNull(request.customerTimeout)) {
      query["CustomerTimeout"] = request.customerTimeout;
    }

    if (!$dara.isNull(request.customerVoice)) {
      query["CustomerVoice"] = request.customerVoice;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.forceEndFlag)) {
      query["ForceEndFlag"] = request.forceEndFlag;
    }

    if (!$dara.isNull(request.isRewarm)) {
      query["IsRewarm"] = request.isRewarm;
    }

    if (!$dara.isNull(request.ivrId)) {
      query["IvrId"] = request.ivrId;
    }

    if (!$dara.isNull(request.ivrName)) {
      query["IvrName"] = request.ivrName;
    }

    if (!$dara.isNull(request.maxWaitTime)) {
      query["MaxWaitTime"] = request.maxWaitTime;
    }

    if (!$dara.isNull(request.minAvailableAgentCount)) {
      query["MinAvailableAgentCount"] = request.minAvailableAgentCount;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.predictAdjust)) {
      query["PredictAdjust"] = request.predictAdjust;
    }

    if (!$dara.isNull(request.quotiety)) {
      query["Quotiety"] = request.quotiety;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retryStrategy)) {
      query["RetryStrategy"] = request.retryStrategy;
    }

    if (!$dara.isNull(request.retryStrategyOnlyToday)) {
      query["RetryStrategyOnlyToday"] = request.retryStrategyOnlyToday;
    }

    if (!$dara.isNull(request.retryStrategyTimeType)) {
      query["RetryStrategyTimeType"] = request.retryStrategyTimeType;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.timeStrategy)) {
      query["TimeStrategy"] = request.timeStrategy;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.userFields)) {
      query["UserFields"] = request.userFields;
    }

    if (!$dara.isNull(request.warmUpDuration)) {
      query["WarmUpDuration"] = request.warmUpDuration;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateTaskResponse({}));
  }

  /**
   * 新增任务
   * 
   * @param request - CloudCreateTaskRequest
   * @returns CloudCreateTaskResponse
   */
  async cloudCreateTask(request: $_model.CloudCreateTaskRequest): Promise<$_model.CloudCreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateTaskWithOptions(request, runtime);
  }

  /**
   * 座席删除
   * 
   * @param request - CloudDeleteAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteAgentResponse
   */
  async cloudDeleteAgentWithOptions(request: $_model.CloudDeleteAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudDeleteAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteAgentResponse({}));
  }

  /**
   * 座席删除
   * 
   * @param request - CloudDeleteAgentRequest
   * @returns CloudDeleteAgentResponse
   */
  async cloudDeleteAgent(request: $_model.CloudDeleteAgentRequest): Promise<$_model.CloudDeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteAgentWithOptions(request, runtime);
  }

  /**
   * 删除座席电话
   * 
   * @param request - CloudDeleteAgentTelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteAgentTelResponse
   */
  async cloudDeleteAgentTelWithOptions(request: $_model.CloudDeleteAgentTelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteAgentTelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudDeleteAgentTel",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteAgentTelResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteAgentTelResponse({}));
  }

  /**
   * 删除座席电话
   * 
   * @param request - CloudDeleteAgentTelRequest
   * @returns CloudDeleteAgentTelResponse
   */
  async cloudDeleteAgentTel(request: $_model.CloudDeleteAgentTelRequest): Promise<$_model.CloudDeleteAgentTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteAgentTelWithOptions(request, runtime);
  }

  /**
   * 座席详细信息获取
   * 
   * @param request - CloudGetAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetAgentResponse
   */
  async cloudGetAgentWithOptions(request: $_model.CloudGetAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetAgentResponse({}));
  }

  /**
   * 座席详细信息获取
   * 
   * @param request - CloudGetAgentRequest
   * @returns CloudGetAgentResponse
   */
  async cloudGetAgent(request: $_model.CloudGetAgentRequest): Promise<$_model.CloudGetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAgentWithOptions(request, runtime);
  }

  /**
   * 座席实时状态获取
   * 
   * @param request - CloudGetAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetAgentStatusResponse
   */
  async cloudGetAgentStatusWithOptions(request: $_model.CloudGetAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetAgentStatus",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetAgentStatusResponse({}));
  }

  /**
   * 座席实时状态获取
   * 
   * @param request - CloudGetAgentStatusRequest
   * @returns CloudGetAgentStatusResponse
   */
  async cloudGetAgentStatus(request: $_model.CloudGetAgentStatusRequest): Promise<$_model.CloudGetAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAgentStatusWithOptions(request, runtime);
  }

  /**
   * 任务号码导入
   * 
   * @param tmpReq - CloudImportTaskTelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudImportTaskTelResponse
   */
  async cloudImportTaskTelWithOptions(tmpReq: $_model.CloudImportTaskTelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudImportTaskTelResponse> {
    tmpReq.validate();
    let request = new $_model.CloudImportTaskTelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskTelList)) {
      request.taskTelListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTelList, "TaskTelList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bridgeVoicePath)) {
      query["BridgeVoicePath"] = request.bridgeVoicePath;
    }

    if (!$dara.isNull(request.bridgeVoiceType)) {
      query["BridgeVoiceType"] = request.bridgeVoiceType;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.importTelAutoStart)) {
      query["ImportTelAutoStart"] = request.importTelAutoStart;
    }

    if (!$dara.isNull(request.isRepeat)) {
      query["IsRepeat"] = request.isRepeat;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskTelListShrink)) {
      query["TaskTelList"] = request.taskTelListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudImportTaskTel",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudImportTaskTelResponse>(await this.callApi(params, req, runtime), new $_model.CloudImportTaskTelResponse({}));
  }

  /**
   * 任务号码导入
   * 
   * @param request - CloudImportTaskTelRequest
   * @returns CloudImportTaskTelResponse
   */
  async cloudImportTaskTel(request: $_model.CloudImportTaskTelRequest): Promise<$_model.CloudImportTaskTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudImportTaskTelWithOptions(request, runtime);
  }

  /**
   * IVR等待打断
   * 
   * @param request - CloudInterruptIvrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudInterruptIvrResponse
   */
  async cloudInterruptIvrWithOptions(request: $_model.CloudInterruptIvrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudInterruptIvrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkName)) {
      query["CheckName"] = request.checkName;
    }

    if (!$dara.isNull(request.checkValue)) {
      query["CheckValue"] = request.checkValue;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.userField)) {
      query["UserField"] = request.userField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudInterruptIvr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudInterruptIvrResponse>(await this.callApi(params, req, runtime), new $_model.CloudInterruptIvrResponse({}));
  }

  /**
   * IVR等待打断
   * 
   * @param request - CloudInterruptIvrRequest
   * @returns CloudInterruptIvrResponse
   */
  async cloudInterruptIvr(request: $_model.CloudInterruptIvrRequest): Promise<$_model.CloudInterruptIvrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudInterruptIvrWithOptions(request, runtime);
  }

  /**
   * 获取座席电话
   * 
   * @param request - CloudListAgentTelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListAgentTelResponse
   */
  async cloudListAgentTelWithOptions(request: $_model.CloudListAgentTelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListAgentTelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListAgentTel",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListAgentTelResponse>(await this.callApi(params, req, runtime), new $_model.CloudListAgentTelResponse({}));
  }

  /**
   * 获取座席电话
   * 
   * @param request - CloudListAgentTelRequest
   * @returns CloudListAgentTelResponse
   */
  async cloudListAgentTel(request: $_model.CloudListAgentTelRequest): Promise<$_model.CloudListAgentTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListAgentTelWithOptions(request, runtime);
  }

  /**
   * 获取在线空闲座席
   * 
   * @param request - CloudListFreeAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListFreeAgentResponse
   */
  async cloudListFreeAgentWithOptions(request: $_model.CloudListFreeAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListFreeAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListFreeAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListFreeAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudListFreeAgentResponse({}));
  }

  /**
   * 获取在线空闲座席
   * 
   * @param request - CloudListFreeAgentRequest
   * @returns CloudListFreeAgentResponse
   */
  async cloudListFreeAgent(request: $_model.CloudListFreeAgentRequest): Promise<$_model.CloudListFreeAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListFreeAgentWithOptions(request, runtime);
  }

  /**
   * 在线座席信息
   * 
   * @param request - CloudListOnlineAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListOnlineAgentResponse
   */
  async cloudListOnlineAgentWithOptions(request: $_model.CloudListOnlineAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListOnlineAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseDescription)) {
      query["PauseDescription"] = request.pauseDescription;
    }

    if (!$dara.isNull(request.pauseType)) {
      query["PauseType"] = request.pauseType;
    }

    if (!$dara.isNull(request.qnos)) {
      query["Qnos"] = request.qnos;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.stateCode)) {
      query["StateCode"] = request.stateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListOnlineAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListOnlineAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudListOnlineAgentResponse({}));
  }

  /**
   * 在线座席信息
   * 
   * @param request - CloudListOnlineAgentRequest
   * @returns CloudListOnlineAgentResponse
   */
  async cloudListOnlineAgent(request: $_model.CloudListOnlineAgentRequest): Promise<$_model.CloudListOnlineAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListOnlineAgentWithOptions(request, runtime);
  }

  /**
   * 座席外呼
   * 
   * @param request - CloudPreviewoutcallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudPreviewoutcallResponse
   */
  async cloudPreviewoutcallWithOptions(request: $_model.CloudPreviewoutcallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudPreviewoutcallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupTels)) {
      query["BackupTels"] = request.backupTels;
    }

    if (!$dara.isNull(request.callVariables)) {
      query["CallVariables"] = request.callVariables;
    }

    if (!$dara.isNull(request.cdrIsAsr)) {
      query["CdrIsAsr"] = request.cdrIsAsr;
    }

    if (!$dara.isNull(request.clidList)) {
      query["ClidList"] = request.clidList;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.crnId)) {
      query["CrnId"] = request.crnId;
    }

    if (!$dara.isNull(request.dialTelTimeout)) {
      query["DialTelTimeout"] = request.dialTelTimeout;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.isInvestigation)) {
      query["IsInvestigation"] = request.isInvestigation;
    }

    if (!$dara.isNull(request.obClid)) {
      query["ObClid"] = request.obClid;
    }

    if (!$dara.isNull(request.obClidAreaCode)) {
      query["ObClidAreaCode"] = request.obClidAreaCode;
    }

    if (!$dara.isNull(request.obClidGroup)) {
      query["ObClidGroup"] = request.obClidGroup;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudPreviewoutcall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudPreviewoutcallResponse>(await this.callApi(params, req, runtime), new $_model.CloudPreviewoutcallResponse({}));
  }

  /**
   * 座席外呼
   * 
   * @param request - CloudPreviewoutcallRequest
   * @returns CloudPreviewoutcallResponse
   */
  async cloudPreviewoutcall(request: $_model.CloudPreviewoutcallRequest): Promise<$_model.CloudPreviewoutcallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudPreviewoutcallWithOptions(request, runtime);
  }

  /**
   * 座席详细信息列表获取
   * 
   * @param request - CloudQueryAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryAgentResponse
   */
  async cloudQueryAgentWithOptions(request: $_model.CloudQueryAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qno)) {
      query["Qno"] = request.qno;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.returnQueue)) {
      query["ReturnQueue"] = request.returnQueue;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.webrtcUrlType)) {
      query["WebrtcUrlType"] = request.webrtcUrlType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryAgentResponse({}));
  }

  /**
   * 座席详细信息列表获取
   * 
   * @param request - CloudQueryAgentRequest
   * @returns CloudQueryAgentResponse
   */
  async cloudQueryAgent(request: $_model.CloudQueryAgentRequest): Promise<$_model.CloudQueryAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentWithOptions(request, runtime);
  }

  /**
   * 座席列表获取
   * 
   * @param request - CloudQueryAgentCnoAndNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryAgentCnoAndNameResponse
   */
  async cloudQueryAgentCnoAndNameWithOptions(request: $_model.CloudQueryAgentCnoAndNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryAgentCnoAndNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryAgentCnoAndName",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryAgentCnoAndNameResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryAgentCnoAndNameResponse({}));
  }

  /**
   * 座席列表获取
   * 
   * @param request - CloudQueryAgentCnoAndNameRequest
   * @returns CloudQueryAgentCnoAndNameResponse
   */
  async cloudQueryAgentCnoAndName(request: $_model.CloudQueryAgentCnoAndNameRequest): Promise<$_model.CloudQueryAgentCnoAndNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentCnoAndNameWithOptions(request, runtime);
  }

  /**
   * 获取座席外呼组
   * 
   * @param request - CloudQueryAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryAgentGroupResponse
   */
  async cloudQueryAgentGroupWithOptions(request: $_model.CloudQueryAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryAgentGroupResponse({}));
  }

  /**
   * 获取座席外呼组
   * 
   * @param request - CloudQueryAgentGroupRequest
   * @returns CloudQueryAgentGroupResponse
   */
  async cloudQueryAgentGroup(request: $_model.CloudQueryAgentGroupRequest): Promise<$_model.CloudQueryAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentGroupWithOptions(request, runtime);
  }

  /**
   * 获取座席技能
   * 
   * @param request - CloudQueryAgentSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryAgentSkillResponse
   */
  async cloudQueryAgentSkillWithOptions(request: $_model.CloudQueryAgentSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryAgentSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryAgentSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryAgentSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryAgentSkillResponse({}));
  }

  /**
   * 获取座席技能
   * 
   * @param request - CloudQueryAgentSkillRequest
   * @returns CloudQueryAgentSkillResponse
   */
  async cloudQueryAgentSkill(request: $_model.CloudQueryAgentSkillRequest): Promise<$_model.CloudQueryAgentSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentSkillWithOptions(request, runtime);
  }

  /**
   * 任务启动
   * 
   * @param request - CloudStartTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudStartTaskResponse
   */
  async cloudStartTaskWithOptions(request: $_model.CloudStartTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudStartTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudStartTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudStartTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudStartTaskResponse({}));
  }

  /**
   * 任务启动
   * 
   * @param request - CloudStartTaskRequest
   * @returns CloudStartTaskResponse
   */
  async cloudStartTask(request: $_model.CloudStartTaskRequest): Promise<$_model.CloudStartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudStartTaskWithOptions(request, runtime);
  }

  /**
   * 座席更新
   * 
   * @param request - CloudUpdateAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudUpdateAgentResponse
   */
  async cloudUpdateAgentWithOptions(request: $_model.CloudUpdateAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudUpdateAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isAsr)) {
      query["IsAsr"] = request.isAsr;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.isObRemember)) {
      query["IsObRemember"] = request.isObRemember;
    }

    if (!$dara.isNull(request.isQualityCheck)) {
      query["IsQualityCheck"] = request.isQualityCheck;
    }

    if (!$dara.isNull(request.isRandom)) {
      query["IsRandom"] = request.isRandom;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClid)) {
      query["ObClid"] = request.obClid;
    }

    if (!$dara.isNull(request.obClidProperty)) {
      query["ObClidProperty"] = request.obClidProperty;
    }

    if (!$dara.isNull(request.obClidType)) {
      query["ObClidType"] = request.obClidType;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.permitObPreviewTime)) {
      query["PermitObPreviewTime"] = request.permitObPreviewTime;
    }

    if (!$dara.isNull(request.power)) {
      query["Power"] = request.power;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skillIds)) {
      query["SkillIds"] = request.skillIds;
    }

    if (!$dara.isNull(request.skillLevels)) {
      query["SkillLevels"] = request.skillLevels;
    }

    if (!$dara.isNull(request.webrtcUrlType)) {
      query["WebrtcUrlType"] = request.webrtcUrlType;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudUpdateAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudUpdateAgentResponse>(await this.callApi(params, req, runtime), new $_model.CloudUpdateAgentResponse({}));
  }

  /**
   * 座席更新
   * 
   * @param request - CloudUpdateAgentRequest
   * @returns CloudUpdateAgentResponse
   */
  async cloudUpdateAgent(request: $_model.CloudUpdateAgentRequest): Promise<$_model.CloudUpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudUpdateAgentWithOptions(request, runtime);
  }

  /**
   * 更新任务
   * 
   * @param request - CloudUpdateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudUpdateTaskResponse
   */
  async cloudUpdateTaskWithOptions(request: $_model.CloudUpdateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudUpdateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentGroup)) {
      query["AgentGroup"] = request.agentGroup;
    }

    if (!$dara.isNull(request.agentTimeout)) {
      query["AgentTimeout"] = request.agentTimeout;
    }

    if (!$dara.isNull(request.answerRate)) {
      query["AnswerRate"] = request.answerRate;
    }

    if (!$dara.isNull(request.autoComplete)) {
      query["AutoComplete"] = request.autoComplete;
    }

    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.autoStartDay)) {
      query["AutoStartDay"] = request.autoStartDay;
    }

    if (!$dara.isNull(request.autoStartTime)) {
      query["AutoStartTime"] = request.autoStartTime;
    }

    if (!$dara.isNull(request.autoStop)) {
      query["AutoStop"] = request.autoStop;
    }

    if (!$dara.isNull(request.autoStopDay)) {
      query["AutoStopDay"] = request.autoStopDay;
    }

    if (!$dara.isNull(request.autoStopTime)) {
      query["AutoStopTime"] = request.autoStopTime;
    }

    if (!$dara.isNull(request.autoTaskType)) {
      query["AutoTaskType"] = request.autoTaskType;
    }

    if (!$dara.isNull(request.autoTriggerTimeStrategy)) {
      query["AutoTriggerTimeStrategy"] = request.autoTriggerTimeStrategy;
    }

    if (!$dara.isNull(request.callLimitStrategy)) {
      query["CallLimitStrategy"] = request.callLimitStrategy;
    }

    if (!$dara.isNull(request.callPriorityStrategy)) {
      query["CallPriorityStrategy"] = request.callPriorityStrategy;
    }

    if (!$dara.isNull(request.callRouteStrategy)) {
      query["CallRouteStrategy"] = request.callRouteStrategy;
    }

    if (!$dara.isNull(request.callStrategy)) {
      query["CallStrategy"] = request.callStrategy;
    }

    if (!$dara.isNull(request.callVariables)) {
      query["CallVariables"] = request.callVariables;
    }

    if (!$dara.isNull(request.clidProperty)) {
      query["ClidProperty"] = request.clidProperty;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.customerClidType)) {
      query["CustomerClidType"] = request.customerClidType;
    }

    if (!$dara.isNull(request.customerClidWeight)) {
      query["CustomerClidWeight"] = request.customerClidWeight;
    }

    if (!$dara.isNull(request.customerClidWeightFlag)) {
      query["CustomerClidWeightFlag"] = request.customerClidWeightFlag;
    }

    if (!$dara.isNull(request.customerClids)) {
      query["CustomerClids"] = request.customerClids;
    }

    if (!$dara.isNull(request.customerClidsCategory)) {
      query["CustomerClidsCategory"] = request.customerClidsCategory;
    }

    if (!$dara.isNull(request.customerClidsGroup)) {
      query["CustomerClidsGroup"] = request.customerClidsGroup;
    }

    if (!$dara.isNull(request.customerMoh)) {
      query["CustomerMoh"] = request.customerMoh;
    }

    if (!$dara.isNull(request.customerTimeout)) {
      query["CustomerTimeout"] = request.customerTimeout;
    }

    if (!$dara.isNull(request.customerVoice)) {
      query["CustomerVoice"] = request.customerVoice;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.forceEndFlag)) {
      query["ForceEndFlag"] = request.forceEndFlag;
    }

    if (!$dara.isNull(request.isRewarm)) {
      query["IsRewarm"] = request.isRewarm;
    }

    if (!$dara.isNull(request.ivrId)) {
      query["IvrId"] = request.ivrId;
    }

    if (!$dara.isNull(request.ivrName)) {
      query["IvrName"] = request.ivrName;
    }

    if (!$dara.isNull(request.maxWaitTime)) {
      query["MaxWaitTime"] = request.maxWaitTime;
    }

    if (!$dara.isNull(request.minAvailableAgentCount)) {
      query["MinAvailableAgentCount"] = request.minAvailableAgentCount;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.predictAdjust)) {
      query["PredictAdjust"] = request.predictAdjust;
    }

    if (!$dara.isNull(request.quotiety)) {
      query["Quotiety"] = request.quotiety;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retryStrategy)) {
      query["RetryStrategy"] = request.retryStrategy;
    }

    if (!$dara.isNull(request.retryStrategyOnlyToday)) {
      query["RetryStrategyOnlyToday"] = request.retryStrategyOnlyToday;
    }

    if (!$dara.isNull(request.retryStrategyTimeType)) {
      query["RetryStrategyTimeType"] = request.retryStrategyTimeType;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.timeStrategy)) {
      query["TimeStrategy"] = request.timeStrategy;
    }

    if (!$dara.isNull(request.userFields)) {
      query["UserFields"] = request.userFields;
    }

    if (!$dara.isNull(request.warmUpDuration)) {
      query["WarmUpDuration"] = request.warmUpDuration;
    }

    if (!$dara.isNull(request.wrapup)) {
      query["Wrapup"] = request.wrapup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudUpdateTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudUpdateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudUpdateTaskResponse({}));
  }

  /**
   * 更新任务
   * 
   * @param request - CloudUpdateTaskRequest
   * @returns CloudUpdateTaskResponse
   */
  async cloudUpdateTask(request: $_model.CloudUpdateTaskRequest): Promise<$_model.CloudUpdateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudUpdateTaskWithOptions(request, runtime);
  }

  /**
   * webcall
   * 
   * @param request - CloudWebcallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudWebcallResponse
   */
  async cloudWebcallWithOptions(request: $_model.CloudWebcallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudWebcallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amd)) {
      query["Amd"] = request.amd;
    }

    if (!$dara.isNull(request.clid)) {
      query["Clid"] = request.clid;
    }

    if (!$dara.isNull(request.clidAreaCode)) {
      query["ClidAreaCode"] = request.clidAreaCode;
    }

    if (!$dara.isNull(request.clidGroup)) {
      query["ClidGroup"] = request.clidGroup;
    }

    if (!$dara.isNull(request.clidList)) {
      query["ClidList"] = request.clidList;
    }

    if (!$dara.isNull(request.crnId)) {
      query["CrnId"] = request.crnId;
    }

    if (!$dara.isNull(request.delay)) {
      query["Delay"] = request.delay;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.expirTime)) {
      query["ExpirTime"] = request.expirTime;
    }

    if (!$dara.isNull(request.ivrId)) {
      query["IvrId"] = request.ivrId;
    }

    if (!$dara.isNull(request.multiTelDelay)) {
      query["MultiTelDelay"] = request.multiTelDelay;
    }

    if (!$dara.isNull(request.multiTelPush)) {
      query["MultiTelPush"] = request.multiTelPush;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.retry)) {
      query["Retry"] = request.retry;
    }

    if (!$dara.isNull(request.retryInterval)) {
      query["RetryInterval"] = request.retryInterval;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.userField)) {
      query["UserField"] = request.userField;
    }

    if (!$dara.isNull(request.vid)) {
      query["Vid"] = request.vid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudWebcall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudWebcallResponse>(await this.callApi(params, req, runtime), new $_model.CloudWebcallResponse({}));
  }

  /**
   * webcall
   * 
   * @param request - CloudWebcallRequest
   * @returns CloudWebcallResponse
   */
  async cloudWebcall(request: $_model.CloudWebcallRequest): Promise<$_model.CloudWebcallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudWebcallWithOptions(request, runtime);
  }

  /**
   * Uses a service instance to create a text-to-speech (TTS) task, a voice notification task, or a voice verification code task for multiple called numbers.
   * 
   * @remarks
   * You can create up to 1,000 voice notifications for each task.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallTaskResponse
   */
  async createCallTaskWithOptions(request: $_model.CreateCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.fireTime)) {
      query["FireTime"] = request.fireTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.stopTime)) {
      query["StopTime"] = request.stopTime;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallTaskResponse({}));
  }

  /**
   * Uses a service instance to create a text-to-speech (TTS) task, a voice notification task, or a voice verification code task for multiple called numbers.
   * 
   * @remarks
   * You can create up to 1,000 voice notifications for each task.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateCallTaskRequest
   * @returns CreateCallTaskResponse
   */
  async createCallTask(request: $_model.CreateCallTaskRequest): Promise<$_model.CreateCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallTaskWithOptions(request, runtime);
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   * You can call this operation to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console. In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRobotTaskResponse
   */
  async createRobotTaskWithOptions(request: $_model.CreateRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.corpName)) {
      query["CorpName"] = request.corpName;
    }

    if (!$dara.isNull(request.dialogId)) {
      query["DialogId"] = request.dialogId;
    }

    if (!$dara.isNull(request.isSelfLine)) {
      query["IsSelfLine"] = request.isSelfLine;
    }

    if (!$dara.isNull(request.numberStatusIdent)) {
      query["NumberStatusIdent"] = request.numberStatusIdent;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recallInterval)) {
      query["RecallInterval"] = request.recallInterval;
    }

    if (!$dara.isNull(request.recallStateCodes)) {
      query["RecallStateCodes"] = request.recallStateCodes;
    }

    if (!$dara.isNull(request.recallTimes)) {
      query["RecallTimes"] = request.recallTimes;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.retryType)) {
      query["RetryType"] = request.retryType;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRobotTaskResponse({}));
  }

  /**
   * Initiates an outbound robocall task.
   * 
   * @remarks
   * You can call this operation to initiate an outbound robocall task by using the robot communication scripts preset in the Voice Messaging Service console. In an intelligent speech interaction task, you can use the robot communication scripts preset in the Voice Messaging Service console, or invoke the callback function to return the response mode configured by the business party in each call.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - CreateRobotTaskRequest
   * @returns CreateRobotTaskResponse
   */
  async createRobotTask(request: $_model.CreateRobotTaskRequest): Promise<$_model.CreateRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRobotTaskWithOptions(request, runtime);
  }

  /**
   * Downgrades from a video call to a voice call.
   * 
   * @param request - DegradeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DegradeVideoFileResponse
   */
  async degradeVideoFileWithOptions(request: $_model.DegradeVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DegradeVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DegradeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DegradeVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.DegradeVideoFileResponse({}));
  }

  /**
   * Downgrades from a video call to a voice call.
   * 
   * @param request - DegradeVideoFileRequest
   * @returns DegradeVideoFileResponse
   */
  async degradeVideoFile(request: $_model.DegradeVideoFileRequest): Promise<$_model.DegradeVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.degradeVideoFileWithOptions(request, runtime);
  }

  /**
   * Deletes a robocall task.
   * 
   * @remarks
   * You can call this operation to delete only tasks that are not started, that are completed, and that are terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRobotTaskResponse
   */
  async deleteRobotTaskWithOptions(request: $_model.DeleteRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRobotTaskResponse({}));
  }

  /**
   * Deletes a robocall task.
   * 
   * @remarks
   * You can call this operation to delete only tasks that are not started, that are completed, and that are terminated.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - DeleteRobotTaskRequest
   * @returns DeleteRobotTaskResponse
   */
  async deleteRobotTask(request: $_model.DeleteRobotTaskRequest): Promise<$_model.DeleteRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRobotTaskWithOptions(request, runtime);
  }

  /**
   * Executes a call task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ExecuteCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteCallTaskResponse
   */
  async executeCallTaskWithOptions(request: $_model.ExecuteCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteCallTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fireTime)) {
      query["FireTime"] = request.fireTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteCallTaskResponse({}));
  }

  /**
   * Executes a call task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ExecuteCallTaskRequest
   * @returns ExecuteCallTaskResponse
   */
  async executeCallTask(request: $_model.ExecuteCallTaskRequest): Promise<$_model.ExecuteCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeCallTaskWithOptions(request, runtime);
  }

  /**
   * Obtains the call type during a call.
   * 
   * @param request - GetCallMediaTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallMediaTypeResponse
   */
  async getCallMediaTypeWithOptions(request: $_model.GetCallMediaTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallMediaTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallMediaType",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallMediaTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetCallMediaTypeResponse({}));
  }

  /**
   * Obtains the call type during a call.
   * 
   * @param request - GetCallMediaTypeRequest
   * @returns GetCallMediaTypeResponse
   */
  async getCallMediaType(request: $_model.GetCallMediaTypeRequest): Promise<$_model.GetCallMediaTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallMediaTypeWithOptions(request, runtime);
  }

  /**
   * GetCallProgress
   * 
   * @param request - GetCallProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallProgressResponse
   */
  async getCallProgressWithOptions(request: $_model.GetCallProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallProgress",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetCallProgressResponse({}));
  }

  /**
   * GetCallProgress
   * 
   * @param request - GetCallProgressRequest
   * @returns GetCallProgressResponse
   */
  async getCallProgress(request: $_model.GetCallProgressRequest): Promise<$_model.GetCallProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallProgressWithOptions(request, runtime);
  }

  /**
   * Obtains the qualification ID based on the ID of a qualification application ticket.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - GetHotlineQualificationByOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotlineQualificationByOrderResponse
   */
  async getHotlineQualificationByOrderWithOptions(request: $_model.GetHotlineQualificationByOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotlineQualificationByOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotlineQualificationByOrder",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotlineQualificationByOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetHotlineQualificationByOrderResponse({}));
  }

  /**
   * Obtains the qualification ID based on the ID of a qualification application ticket.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - GetHotlineQualificationByOrderRequest
   * @returns GetHotlineQualificationByOrderResponse
   */
  async getHotlineQualificationByOrder(request: $_model.GetHotlineQualificationByOrderRequest): Promise<$_model.GetHotlineQualificationByOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHotlineQualificationByOrderWithOptions(request, runtime);
  }

  /**
   * Obtains a temporary URL of a video or audio file. You can view the video or audio file immediately by using this temporary URL.
   * 
   * @param request - GetTemporaryFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemporaryFileUrlResponse
   */
  async getTemporaryFileUrlWithOptions(request: $_model.GetTemporaryFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemporaryFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemporaryFileUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemporaryFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetTemporaryFileUrlResponse({}));
  }

  /**
   * Obtains a temporary URL of a video or audio file. You can view the video or audio file immediately by using this temporary URL.
   * 
   * @param request - GetTemporaryFileUrlRequest
   * @returns GetTemporaryFileUrlResponse
   */
  async getTemporaryFileUrl(request: $_model.GetTemporaryFileUrlRequest): Promise<$_model.GetTemporaryFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemporaryFileUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the token for authentication.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to five times per second per account.
   * 
   * @param request - GetTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tokenType)) {
      query["TokenType"] = request.tokenType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * Obtains the token for authentication.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to five times per second per account.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  /**
   * GetVideoFieldUrl
   * 
   * @param request - GetVideoFieldUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoFieldUrlResponse
   */
  async getVideoFieldUrlWithOptions(request: $_model.GetVideoFieldUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoFieldUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoFile)) {
      query["VideoFile"] = request.videoFile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoFieldUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoFieldUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoFieldUrlResponse({}));
  }

  /**
   * GetVideoFieldUrl
   * 
   * @param request - GetVideoFieldUrlRequest
   * @returns GetVideoFieldUrlResponse
   */
  async getVideoFieldUrl(request: $_model.GetVideoFieldUrlRequest): Promise<$_model.GetVideoFieldUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoFieldUrlWithOptions(request, runtime);
  }

  /**
   * Initiates an interactive voice response (IVR) call to a specified number.
   * 
   * @remarks
   *   Your enterprise qualification is approved. For more information, see [Submit enterprise qualifications](https://help.aliyun.com/document_detail/149795.html).
   * *   Voice numbers are purchased. For more information, see [Purchase numbers](https://help.aliyun.com/document_detail/149794.html).
   * *   When the subscriber answers the call, the subscriber hears a voice that instructs the subscriber to press a key as needed. If the [message receipt](https://help.aliyun.com/document_detail/112503.html) feature is enabled, the Voice Messaging Service (VMS) platform returns the information about the key pressed by the subscriber to the business system. The key information includes the order confirmation, questionnaire survey, and satisfaction survey completed by the subscriber.
   * ## QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - IvrCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IvrCallResponse
   */
  async ivrCallWithOptions(request: $_model.IvrCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IvrCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.byeCode)) {
      query["ByeCode"] = request.byeCode;
    }

    if (!$dara.isNull(request.byeTtsParams)) {
      query["ByeTtsParams"] = request.byeTtsParams;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.menuKeyMap)) {
      query["MenuKeyMap"] = request.menuKeyMap;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startCode)) {
      query["StartCode"] = request.startCode;
    }

    if (!$dara.isNull(request.startTtsParams)) {
      query["StartTtsParams"] = request.startTtsParams;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IvrCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IvrCallResponse>(await this.callApi(params, req, runtime), new $_model.IvrCallResponse({}));
  }

  /**
   * Initiates an interactive voice response (IVR) call to a specified number.
   * 
   * @remarks
   *   Your enterprise qualification is approved. For more information, see [Submit enterprise qualifications](https://help.aliyun.com/document_detail/149795.html).
   * *   Voice numbers are purchased. For more information, see [Purchase numbers](https://help.aliyun.com/document_detail/149794.html).
   * *   When the subscriber answers the call, the subscriber hears a voice that instructs the subscriber to press a key as needed. If the [message receipt](https://help.aliyun.com/document_detail/112503.html) feature is enabled, the Voice Messaging Service (VMS) platform returns the information about the key pressed by the subscriber to the business system. The key information includes the order confirmation, questionnaire survey, and satisfaction survey completed by the subscriber.
   * ## QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - IvrCallRequest
   * @returns IvrCallResponse
   */
  async ivrCall(request: $_model.IvrCallRequest): Promise<$_model.IvrCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ivrCallWithOptions(request, runtime);
  }

  /**
   * Queries the information about a voice call task after the task is created, including the task ID, task status, and templates used by the task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallTaskResponse
   */
  async listCallTaskWithOptions(request: $_model.ListCallTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListCallTaskResponse({}));
  }

  /**
   * Queries the information about a voice call task after the task is created, including the task ID, task status, and templates used by the task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskRequest
   * @returns ListCallTaskResponse
   */
  async listCallTask(request: $_model.ListCallTaskRequest): Promise<$_model.ListCallTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of call tasks based on task IDs after call tasks are complete.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallTaskDetailResponse
   */
  async listCallTaskDetailWithOptions(request: $_model.ListCallTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNum)) {
      query["CalledNum"] = request.calledNum;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListCallTaskDetailResponse({}));
  }

  /**
   * Queries the details of call tasks based on task IDs after call tasks are complete.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListCallTaskDetailRequest
   * @returns ListCallTaskDetailResponse
   */
  async listCallTaskDetail(request: $_model.ListCallTaskDetailRequest): Promise<$_model.ListCallTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the registration information about a China 400 number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferRegisterFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotlineTransferRegisterFileResponse
   */
  async listHotlineTransferRegisterFileWithOptions(request: $_model.ListHotlineTransferRegisterFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotlineTransferRegisterFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hotlineNumber)) {
      query["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotlineTransferRegisterFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotlineTransferRegisterFileResponse>(await this.callApi(params, req, runtime), new $_model.ListHotlineTransferRegisterFileResponse({}));
  }

  /**
   * Queries the registration information about a China 400 number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - ListHotlineTransferRegisterFileRequest
   * @returns ListHotlineTransferRegisterFileResponse
   */
  async listHotlineTransferRegisterFile(request: $_model.ListHotlineTransferRegisterFileRequest): Promise<$_model.ListHotlineTransferRegisterFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHotlineTransferRegisterFileWithOptions(request, runtime);
  }

  /**
   * 分页查询服务实例列表
   * 
   * @param tmpReq - ListServiceInstanceForPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstanceForPageResponse
   */
  async listServiceInstanceForPageWithOptions(tmpReq: $_model.ListServiceInstanceForPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstanceForPageResponse> {
    tmpReq.validate();
    let request = new $_model.ListServiceInstanceForPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.pager)) {
      request.pagerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pager, "Pager", "json");
    }

    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pagerShrink)) {
      query["Pager"] = request.pagerShrink;
    }

    if (!$dara.isNull(request.relationNumber)) {
      query["RelationNumber"] = request.relationNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.usageId)) {
      query["UsageId"] = request.usageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstanceForPage",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstanceForPageResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstanceForPageResponse({}));
  }

  /**
   * 分页查询服务实例列表
   * 
   * @param request - ListServiceInstanceForPageRequest
   * @returns ListServiceInstanceForPageResponse
   */
  async listServiceInstanceForPage(request: $_model.ListServiceInstanceForPageRequest): Promise<$_model.ListServiceInstanceForPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceInstanceForPageWithOptions(request, runtime);
  }

  /**
   * Pauses video playback when a video file is played back during a voice call.
   * 
   * @param request - PauseVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseVideoFileResponse
   */
  async pauseVideoFileWithOptions(request: $_model.PauseVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.PauseVideoFileResponse({}));
  }

  /**
   * Pauses video playback when a video file is played back during a voice call.
   * 
   * @param request - PauseVideoFileRequest
   * @returns PauseVideoFileResponse
   */
  async pauseVideoFile(request: $_model.PauseVideoFileRequest): Promise<$_model.PauseVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseVideoFileWithOptions(request, runtime);
  }

  /**
   * Plays back a video file during a voice call.
   * 
   * @param request - PlayVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PlayVideoFileResponse
   */
  async playVideoFileWithOptions(request: $_model.PlayVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PlayVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.onlyPhone)) {
      query["OnlyPhone"] = request.onlyPhone;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.videoId)) {
      query["VideoId"] = request.videoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PlayVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PlayVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.PlayVideoFileResponse({}));
  }

  /**
   * Plays back a video file during a voice call.
   * 
   * @param request - PlayVideoFileRequest
   * @returns PlayVideoFileResponse
   */
  async playVideoFile(request: $_model.PlayVideoFileRequest): Promise<$_model.PlayVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.playVideoFileWithOptions(request, runtime);
  }

  /**
   * Queries the details of a call.
   * 
   * @remarks
   * QueryCallDetailByCallId is a common query operation. You can call this operation to query the details of a voice notification, voice verification code, interactive voice response (IVR), intelligent inbound voice call, intelligent outbound voice call, or intelligent robocall.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallDetailByCallIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallDetailByCallIdResponse
   */
  async queryCallDetailByCallIdWithOptions(request: $_model.QueryCallDetailByCallIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallDetailByCallIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.prodId)) {
      query["ProdId"] = request.prodId;
    }

    if (!$dara.isNull(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallDetailByCallId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallDetailByCallIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallDetailByCallIdResponse({}));
  }

  /**
   * Queries the details of a call.
   * 
   * @remarks
   * QueryCallDetailByCallId is a common query operation. You can call this operation to query the details of a voice notification, voice verification code, interactive voice response (IVR), intelligent inbound voice call, intelligent outbound voice call, or intelligent robocall.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallDetailByCallIdRequest
   * @returns QueryCallDetailByCallIdResponse
   */
  async queryCallDetailByCallId(request: $_model.QueryCallDetailByCallIdRequest): Promise<$_model.QueryCallDetailByCallIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallDetailByCallIdWithOptions(request, runtime);
  }

  /**
   * Queries the call details of an outbound robocall task.
   * 
   * @param request - QueryCallDetailByTaskIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallDetailByTaskIdResponse
   */
  async queryCallDetailByTaskIdWithOptions(request: $_model.QueryCallDetailByTaskIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallDetailByTaskIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallDetailByTaskId",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallDetailByTaskIdResponse({}));
  }

  /**
   * Queries the call details of an outbound robocall task.
   * 
   * @param request - QueryCallDetailByTaskIdRequest
   * @returns QueryCallDetailByTaskIdResponse
   */
  async queryCallDetailByTaskId(request: $_model.QueryCallDetailByTaskIdRequest): Promise<$_model.QueryCallDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallDetailByTaskIdWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the phone number used to transfer a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInPoolTransferConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallInPoolTransferConfigResponse
   */
  async queryCallInPoolTransferConfigWithOptions(request: $_model.QueryCallInPoolTransferConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallInPoolTransferConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallInPoolTransferConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallInPoolTransferConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallInPoolTransferConfigResponse({}));
  }

  /**
   * Queries the configuration of the phone number used to transfer a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInPoolTransferConfigRequest
   * @returns QueryCallInPoolTransferConfigResponse
   */
  async queryCallInPoolTransferConfig(request: $_model.QueryCallInPoolTransferConfigRequest): Promise<$_model.QueryCallInPoolTransferConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallInPoolTransferConfigWithOptions(request, runtime);
  }

  /**
   * Queries call transfer records.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInTransferRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallInTransferRecordResponse
   */
  async queryCallInTransferRecordWithOptions(request: $_model.QueryCallInTransferRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallInTransferRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callInCaller)) {
      query["CallInCaller"] = request.callInCaller;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallInTransferRecord",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallInTransferRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallInTransferRecordResponse({}));
  }

  /**
   * Queries call transfer records.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryCallInTransferRecordRequest
   * @returns QueryCallInTransferRecordResponse
   */
  async queryCallInTransferRecord(request: $_model.QueryCallInTransferRecordRequest): Promise<$_model.QueryCallInTransferRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallInTransferRecordWithOptions(request, runtime);
  }

  /**
   * Queries a list of robots to obtain their details.
   * 
   * @param request - QueryRobotInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotInfoListResponse
   */
  async queryRobotInfoListWithOptions(request: $_model.QueryRobotInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditStatus)) {
      query["AuditStatus"] = request.auditStatus;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotInfoList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotInfoListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotInfoListResponse({}));
  }

  /**
   * Queries a list of robots to obtain their details.
   * 
   * @param request - QueryRobotInfoListRequest
   * @returns QueryRobotInfoListResponse
   */
  async queryRobotInfoList(request: $_model.QueryRobotInfoListRequest): Promise<$_model.QueryRobotInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the call details of a called number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskCallDetailResponse
   */
  async queryRobotTaskCallDetailWithOptions(request: $_model.QueryRobotTaskCallDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotTaskCallDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryDate)) {
      query["QueryDate"] = request.queryDate;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotTaskCallDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotTaskCallDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotTaskCallDetailResponse({}));
  }

  /**
   * Queries the call details of a called number.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallDetailRequest
   * @returns QueryRobotTaskCallDetailResponse
   */
  async queryRobotTaskCallDetail(request: $_model.QueryRobotTaskCallDetailRequest): Promise<$_model.QueryRobotTaskCallDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotTaskCallDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskCallListResponse
   */
  async queryRobotTaskCallListWithOptions(request: $_model.QueryRobotTaskCallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotTaskCallListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callResult)) {
      query["CallResult"] = request.callResult;
    }

    if (!$dara.isNull(request.called)) {
      query["Called"] = request.called;
    }

    if (!$dara.isNull(request.dialogCountFrom)) {
      query["DialogCountFrom"] = request.dialogCountFrom;
    }

    if (!$dara.isNull(request.dialogCountTo)) {
      query["DialogCountTo"] = request.dialogCountTo;
    }

    if (!$dara.isNull(request.durationFrom)) {
      query["DurationFrom"] = request.durationFrom;
    }

    if (!$dara.isNull(request.durationTo)) {
      query["DurationTo"] = request.durationTo;
    }

    if (!$dara.isNull(request.hangupDirection)) {
      query["HangupDirection"] = request.hangupDirection;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotTaskCallList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotTaskCallListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotTaskCallListResponse({}));
  }

  /**
   * Queries the information about a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskCallListRequest
   * @returns QueryRobotTaskCallListResponse
   */
  async queryRobotTaskCallList(request: $_model.QueryRobotTaskCallListRequest): Promise<$_model.QueryRobotTaskCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotTaskCallListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskDetailResponse
   */
  async queryRobotTaskDetailWithOptions(request: $_model.QueryRobotTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotTaskDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotTaskDetailResponse({}));
  }

  /**
   * Queries the details of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskDetailRequest
   * @returns QueryRobotTaskDetailResponse
   */
  async queryRobotTaskDetail(request: $_model.QueryRobotTaskDetailRequest): Promise<$_model.QueryRobotTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about all robocall tasks.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotTaskListResponse
   */
  async queryRobotTaskListWithOptions(request: $_model.QueryRobotTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotTaskList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotTaskListResponse({}));
  }

  /**
   * Queries the information about all robocall tasks.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotTaskListRequest
   * @returns QueryRobotTaskListResponse
   */
  async queryRobotTaskList(request: $_model.QueryRobotTaskListRequest): Promise<$_model.QueryRobotTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotTaskListWithOptions(request, runtime);
  }

  /**
   * Queries a list of robot communication scripts.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotv2AllListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRobotv2AllListResponse
   */
  async queryRobotv2AllListWithOptions(request: $_model.QueryRobotv2AllListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRobotv2AllListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRobotv2AllList",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRobotv2AllListResponse>(await this.callApi(params, req, runtime), new $_model.QueryRobotv2AllListResponse({}));
  }

  /**
   * Queries a list of robot communication scripts.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryRobotv2AllListRequest
   * @returns QueryRobotv2AllListResponse
   */
  async queryRobotv2AllList(request: $_model.QueryRobotv2AllListRequest): Promise<$_model.QueryRobotv2AllListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotv2AllListWithOptions(request, runtime);
  }

  /**
   * Queries the video playback progress after you play a video file during a voice call.
   * 
   * @param request - QueryVideoPlayProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVideoPlayProgressResponse
   */
  async queryVideoPlayProgressWithOptions(request: $_model.QueryVideoPlayProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVideoPlayProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVideoPlayProgress",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVideoPlayProgressResponse>(await this.callApi(params, req, runtime), new $_model.QueryVideoPlayProgressResponse({}));
  }

  /**
   * Queries the video playback progress after you play a video file during a voice call.
   * 
   * @param request - QueryVideoPlayProgressRequest
   * @returns QueryVideoPlayProgressResponse
   */
  async queryVideoPlayProgress(request: $_model.QueryVideoPlayProgressRequest): Promise<$_model.QueryVideoPlayProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVideoPlayProgressWithOptions(request, runtime);
  }

  /**
   * Lists real numbers bound to service instances. The returned data includes the binding time, the number activation time, and the number of real numbers bound to a service instance.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - QueryVirtualNumberRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVirtualNumberRelationResponse
   */
  async queryVirtualNumberRelationWithOptions(request: $_model.QueryVirtualNumberRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVirtualNumberRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.prodCode)) {
      query["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.regionNameCity)) {
      query["RegionNameCity"] = request.regionNameCity;
    }

    if (!$dara.isNull(request.relatedNum)) {
      query["RelatedNum"] = request.relatedNum;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.routeType)) {
      query["RouteType"] = request.routeType;
    }

    if (!$dara.isNull(request.specId)) {
      query["SpecId"] = request.specId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVirtualNumberRelation",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVirtualNumberRelationResponse>(await this.callApi(params, req, runtime), new $_model.QueryVirtualNumberRelationResponse({}));
  }

  /**
   * Lists real numbers bound to service instances. The returned data includes the binding time, the number activation time, and the number of real numbers bound to a service instance.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 200 times per second per account.
   * 
   * @param request - QueryVirtualNumberRelationRequest
   * @returns QueryVirtualNumberRelationResponse
   */
  async queryVirtualNumberRelation(request: $_model.QueryVirtualNumberRelationRequest): Promise<$_model.QueryVirtualNumberRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVirtualNumberRelationWithOptions(request, runtime);
  }

  /**
   * 查询真实号接通率
   * 
   * @param request - QueryVmsRealNumberCallConnectionRateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVmsRealNumberCallConnectionRateInfoResponse
   */
  async queryVmsRealNumberCallConnectionRateInfoWithOptions(request: $_model.QueryVmsRealNumberCallConnectionRateInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVmsRealNumberCallConnectionRateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.realNumber)) {
      query["RealNumber"] = request.realNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.timePeriod)) {
      query["TimePeriod"] = request.timePeriod;
    }

    if (!$dara.isNull(request.virtualNumber)) {
      query["VirtualNumber"] = request.virtualNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVmsRealNumberCallConnectionRateInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVmsRealNumberCallConnectionRateInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryVmsRealNumberCallConnectionRateInfoResponse({}));
  }

  /**
   * 查询真实号接通率
   * 
   * @param request - QueryVmsRealNumberCallConnectionRateInfoRequest
   * @returns QueryVmsRealNumberCallConnectionRateInfoResponse
   */
  async queryVmsRealNumberCallConnectionRateInfo(request: $_model.QueryVmsRealNumberCallConnectionRateInfoRequest): Promise<$_model.QueryVmsRealNumberCallConnectionRateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVmsRealNumberCallConnectionRateInfoWithOptions(request, runtime);
  }

  /**
   * 查询虚拟号码与真实号码绑定关系列表
   * 
   * @param request - QueryVmsVirtualNumberRelationByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVmsVirtualNumberRelationByPageResponse
   */
  async queryVmsVirtualNumberRelationByPageWithOptions(request: $_model.QueryVmsVirtualNumberRelationByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVmsVirtualNumberRelationByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.numberCity)) {
      query["NumberCity"] = request.numberCity;
    }

    if (!$dara.isNull(request.numberProvince)) {
      query["NumberProvince"] = request.numberProvince;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.realNumber)) {
      query["RealNumber"] = request.realNumber;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.virtualNumber)) {
      query["VirtualNumber"] = request.virtualNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVmsVirtualNumberRelationByPage",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVmsVirtualNumberRelationByPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryVmsVirtualNumberRelationByPageResponse({}));
  }

  /**
   * 查询虚拟号码与真实号码绑定关系列表
   * 
   * @param request - QueryVmsVirtualNumberRelationByPageRequest
   * @returns QueryVmsVirtualNumberRelationByPageResponse
   */
  async queryVmsVirtualNumberRelationByPage(request: $_model.QueryVmsVirtualNumberRelationByPageRequest): Promise<$_model.QueryVmsVirtualNumberRelationByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVmsVirtualNumberRelationByPageWithOptions(request, runtime);
  }

  /**
   * Queries the review state of a voice file.
   * 
   * @param request - QueryVoiceFileAuditInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVoiceFileAuditInfoResponse
   */
  async queryVoiceFileAuditInfoWithOptions(request: $_model.QueryVoiceFileAuditInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVoiceFileAuditInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessType)) {
      query["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.voiceCodes)) {
      query["VoiceCodes"] = request.voiceCodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryVoiceFileAuditInfo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVoiceFileAuditInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryVoiceFileAuditInfoResponse({}));
  }

  /**
   * Queries the review state of a voice file.
   * 
   * @param request - QueryVoiceFileAuditInfoRequest
   * @returns QueryVoiceFileAuditInfoResponse
   */
  async queryVoiceFileAuditInfo(request: $_model.QueryVoiceFileAuditInfoRequest): Promise<$_model.QueryVoiceFileAuditInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVoiceFileAuditInfoWithOptions(request, runtime);
  }

  /**
   * Resumes the inbound call that is transferred by using a China 400 number.
   * 
   * @param request - RecoverCallInConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverCallInConfigResponse
   */
  async recoverCallInConfigWithOptions(request: $_model.RecoverCallInConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverCallInConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverCallInConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverCallInConfigResponse>(await this.callApi(params, req, runtime), new $_model.RecoverCallInConfigResponse({}));
  }

  /**
   * Resumes the inbound call that is transferred by using a China 400 number.
   * 
   * @param request - RecoverCallInConfigRequest
   * @returns RecoverCallInConfigResponse
   */
  async recoverCallInConfig(request: $_model.RecoverCallInConfigRequest): Promise<$_model.RecoverCallInConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverCallInConfigWithOptions(request, runtime);
  }

  /**
   * Resumes video playback after you pause video playback during a voice call.
   * 
   * @param request - ResumeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeVideoFileResponse
   */
  async resumeVideoFileWithOptions(request: $_model.ResumeVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.ResumeVideoFileResponse({}));
  }

  /**
   * Resumes video playback after you pause video playback during a voice call.
   * 
   * @param request - ResumeVideoFileRequest
   * @returns ResumeVideoFileResponse
   */
  async resumeVideoFile(request: $_model.ResumeVideoFileRequest): Promise<$_model.ResumeVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeVideoFileWithOptions(request, runtime);
  }

  /**
   * SeekVideoFile
   * 
   * @param request - SeekVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SeekVideoFileResponse
   */
  async seekVideoFileWithOptions(request: $_model.SeekVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SeekVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.seekTimes)) {
      query["SeekTimes"] = request.seekTimes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SeekVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SeekVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.SeekVideoFileResponse({}));
  }

  /**
   * SeekVideoFile
   * 
   * @param request - SeekVideoFileRequest
   * @returns SeekVideoFileResponse
   */
  async seekVideoFile(request: $_model.SeekVideoFileRequest): Promise<$_model.SeekVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.seekVideoFileWithOptions(request, runtime);
  }

  /**
   * Sends an SMS verification code.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SendVerificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendVerificationResponse
   */
  async sendVerificationWithOptions(request: $_model.SendVerificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendVerificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.verifyType)) {
      query["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendVerification",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendVerificationResponse>(await this.callApi(params, req, runtime), new $_model.SendVerificationResponse({}));
  }

  /**
   * Sends an SMS verification code.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SendVerificationRequest
   * @returns SendVerificationResponse
   */
  async sendVerification(request: $_model.SendVerificationRequest): Promise<$_model.SendVerificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendVerificationWithOptions(request, runtime);
  }

  /**
   * Sets the phone numbers for transferring a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetTransferCalleePoolConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTransferCalleePoolConfigResponse
   */
  async setTransferCalleePoolConfigWithOptions(request: $_model.SetTransferCalleePoolConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTransferCalleePoolConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledRouteMode)) {
      query["CalledRouteMode"] = request.calledRouteMode;
    }

    if (!$dara.isNull(request.details)) {
      query["Details"] = request.details;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTransferCalleePoolConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTransferCalleePoolConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetTransferCalleePoolConfigResponse({}));
  }

  /**
   * Sets the phone numbers for transferring a call.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SetTransferCalleePoolConfigRequest
   * @returns SetTransferCalleePoolConfigResponse
   */
  async setTransferCalleePoolConfig(request: $_model.SetTransferCalleePoolConfigRequest): Promise<$_model.SetTransferCalleePoolConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTransferCalleePoolConfigWithOptions(request, runtime);
  }

  /**
   * Sends a voice verification code or a voice notification with variables to a specified phone number.
   * 
   * @remarks
   *   Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * *   For more information about voice plans or voice service billing, see [Pricing of VMS on China site (aliyun.com)](https://help.aliyun.com/document_detail/150083.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SingleCallByTtsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByTtsResponse
   */
  async singleCallByTtsWithOptions(request: $_model.SingleCallByTtsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SingleCallByTtsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!$dara.isNull(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleCallByTts",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleCallByTtsResponse>(await this.callApi(params, req, runtime), new $_model.SingleCallByTtsResponse({}));
  }

  /**
   * Sends a voice verification code or a voice notification with variables to a specified phone number.
   * 
   * @remarks
   *   Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * *   For more information about voice plans or voice service billing, see [Pricing of VMS on China site (aliyun.com)](https://help.aliyun.com/document_detail/150083.html).
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SingleCallByTtsRequest
   * @returns SingleCallByTtsResponse
   */
  async singleCallByTts(request: $_model.SingleCallByTtsRequest): Promise<$_model.SingleCallByTtsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.singleCallByTtsWithOptions(request, runtime);
  }

  /**
   * Sends voice file notifications or video file notifications to a single called number.
   * 
   * @param request - SingleCallByVideoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByVideoResponse
   */
  async singleCallByVideoWithOptions(request: $_model.SingleCallByVideoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SingleCallByVideoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.videoCode)) {
      query["VideoCode"] = request.videoCode;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleCallByVideo",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleCallByVideoResponse>(await this.callApi(params, req, runtime), new $_model.SingleCallByVideoResponse({}));
  }

  /**
   * Sends voice file notifications or video file notifications to a single called number.
   * 
   * @param request - SingleCallByVideoRequest
   * @returns SingleCallByVideoResponse
   */
  async singleCallByVideo(request: $_model.SingleCallByVideoRequest): Promise<$_model.SingleCallByVideoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.singleCallByVideoWithOptions(request, runtime);
  }

  /**
   * Sends a voice notification to a phone number by using a voice notification file.
   * 
   * @remarks
   * > Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send voice notifications with variables.
   * ### QPS limits
   * You can call this operation up to 1,200 times per second per account.
   * 
   * @param request - SingleCallByVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleCallByVoiceResponse
   */
  async singleCallByVoiceWithOptions(request: $_model.SingleCallByVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SingleCallByVoiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleCallByVoice",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleCallByVoiceResponse>(await this.callApi(params, req, runtime), new $_model.SingleCallByVoiceResponse({}));
  }

  /**
   * Sends a voice notification to a phone number by using a voice notification file.
   * 
   * @remarks
   * > Due to business adjustments, the updates of the voice notification and voice verification code services have been stopped in regions outside the Chinese mainland and the services have been discontinued since March 2022. Only qualified customers can continue using the voice notification and voice verification code services.
   * You can call the [SingleCallByTts](https://help.aliyun.com/document_detail/393519.html) operation to send voice notifications with variables.
   * ### QPS limits
   * You can call this operation up to 1,200 times per second per account.
   * 
   * @param request - SingleCallByVoiceRequest
   * @returns SingleCallByVoiceResponse
   */
  async singleCallByVoice(request: $_model.SingleCallByVoiceRequest): Promise<$_model.SingleCallByVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.singleCallByVoiceWithOptions(request, runtime);
  }

  /**
   * Fast forwards or rewinds a video when you play the video.
   * 
   * @param request - SkipVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SkipVideoFileResponse
   */
  async skipVideoFileWithOptions(request: $_model.SkipVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SkipVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.skipTimes)) {
      query["SkipTimes"] = request.skipTimes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SkipVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SkipVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.SkipVideoFileResponse({}));
  }

  /**
   * Fast forwards or rewinds a video when you play the video.
   * 
   * @param request - SkipVideoFileRequest
   * @returns SkipVideoFileResponse
   */
  async skipVideoFile(request: $_model.SkipVideoFileRequest): Promise<$_model.SkipVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.skipVideoFileWithOptions(request, runtime);
  }

  /**
   * Initiates an intelligent voice call.
   * 
   * @remarks
   *   The SmartCall operation must be used together with the [intelligent outbound HTTP operation](https://help.aliyun.com/document_detail/112703.html). After the call initiated by the Voice Messaging Service (VMS) platform is connected, the VMS platform sends the text converted from speech back to the business side, and the business side then returns the follow-up action to the VMS platform.
   * *   The SmartCall operation does not support the following characters: `@ = : "" $ { } ^ * ￥`.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartCallResponse
   */
  async smartCallWithOptions(request: $_model.SmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionCodeBreak)) {
      query["ActionCodeBreak"] = request.actionCodeBreak;
    }

    if (!$dara.isNull(request.actionCodeTimeBreak)) {
      query["ActionCodeTimeBreak"] = request.actionCodeTimeBreak;
    }

    if (!$dara.isNull(request.asrBaseId)) {
      query["AsrBaseId"] = request.asrBaseId;
    }

    if (!$dara.isNull(request.asrModelId)) {
      query["AsrModelId"] = request.asrModelId;
    }

    if (!$dara.isNull(request.backgroundFileCode)) {
      query["BackgroundFileCode"] = request.backgroundFileCode;
    }

    if (!$dara.isNull(request.backgroundSpeed)) {
      query["BackgroundSpeed"] = request.backgroundSpeed;
    }

    if (!$dara.isNull(request.backgroundVolume)) {
      query["BackgroundVolume"] = request.backgroundVolume;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.calledShowNumber)) {
      query["CalledShowNumber"] = request.calledShowNumber;
    }

    if (!$dara.isNull(request.dynamicId)) {
      query["DynamicId"] = request.dynamicId;
    }

    if (!$dara.isNull(request.earlyMediaAsr)) {
      query["EarlyMediaAsr"] = request.earlyMediaAsr;
    }

    if (!$dara.isNull(request.enableITN)) {
      query["EnableITN"] = request.enableITN;
    }

    if (!$dara.isNull(request.muteTime)) {
      query["MuteTime"] = request.muteTime;
    }

    if (!$dara.isNull(request.noiseThreshold)) {
      query["NoiseThreshold"] = request.noiseThreshold;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseTime)) {
      query["PauseTime"] = request.pauseTime;
    }

    if (!$dara.isNull(request.recordFlag)) {
      query["RecordFlag"] = request.recordFlag;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sessionTimeout)) {
      query["SessionTimeout"] = request.sessionTimeout;
    }

    if (!$dara.isNull(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!$dara.isNull(request.streamAsr)) {
      query["StreamAsr"] = request.streamAsr;
    }

    if (!$dara.isNull(request.ttsConf)) {
      query["TtsConf"] = request.ttsConf;
    }

    if (!$dara.isNull(request.ttsSpeed)) {
      query["TtsSpeed"] = request.ttsSpeed;
    }

    if (!$dara.isNull(request.ttsStyle)) {
      query["TtsStyle"] = request.ttsStyle;
    }

    if (!$dara.isNull(request.ttsVolume)) {
      query["TtsVolume"] = request.ttsVolume;
    }

    if (!$dara.isNull(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!$dara.isNull(request.voiceCodeParam)) {
      query["VoiceCodeParam"] = request.voiceCodeParam;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartCall",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmartCallResponse>(await this.callApi(params, req, runtime), new $_model.SmartCallResponse({}));
  }

  /**
   * Initiates an intelligent voice call.
   * 
   * @remarks
   *   The SmartCall operation must be used together with the [intelligent outbound HTTP operation](https://help.aliyun.com/document_detail/112703.html). After the call initiated by the Voice Messaging Service (VMS) platform is connected, the VMS platform sends the text converted from speech back to the business side, and the business side then returns the follow-up action to the VMS platform.
   * *   The SmartCall operation does not support the following characters: `@ = : "" $ { } ^ * ￥`.
   * ### QPS limits
   * You can call this operation up to 1,000 times per second per account.
   * 
   * @param request - SmartCallRequest
   * @returns SmartCallResponse
   */
  async smartCall(request: $_model.SmartCallRequest): Promise<$_model.SmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartCallWithOptions(request, runtime);
  }

  /**
   * Initiates an action in an outbound robocall. This operation is applicable only when the robocall is transferred to an agent or an agent is listening in on the conversation between the robot and the user.
   * 
   * @remarks
   * You can call this operation to initiate a specified action on the called number of an outbound robocall when the call is transferred to an agent of the call center.
   * > You can only initiate the action of bridging a called number and an agent of the call center.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SmartCallOperateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmartCallOperateResponse
   */
  async smartCallOperateWithOptions(request: $_model.SmartCallOperateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmartCallOperateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmartCallOperate",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmartCallOperateResponse>(await this.callApi(params, req, runtime), new $_model.SmartCallOperateResponse({}));
  }

  /**
   * Initiates an action in an outbound robocall. This operation is applicable only when the robocall is transferred to an agent or an agent is listening in on the conversation between the robot and the user.
   * 
   * @remarks
   * You can call this operation to initiate a specified action on the called number of an outbound robocall when the call is transferred to an agent of the call center.
   * > You can only initiate the action of bridging a called number and an agent of the call center.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SmartCallOperateRequest
   * @returns SmartCallOperateResponse
   */
  async smartCallOperate(request: $_model.SmartCallOperateRequest): Promise<$_model.SmartCallOperateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smartCallOperateWithOptions(request, runtime);
  }

  /**
   * Starts a robocall task immediately or at a scheduled time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRobotTaskResponse
   */
  async startRobotTaskWithOptions(request: $_model.StartRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartRobotTaskResponse({}));
  }

  /**
   * Starts a robocall task immediately or at a scheduled time.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StartRobotTaskRequest
   * @returns StartRobotTaskResponse
   */
  async startRobotTask(request: $_model.StartRobotTaskRequest): Promise<$_model.StartRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRobotTaskWithOptions(request, runtime);
  }

  /**
   * Stops the inbound call that is transferred from a China 400 number.
   * 
   * @param request - StopCallInConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCallInConfigResponse
   */
  async stopCallInConfigWithOptions(request: $_model.StopCallInConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopCallInConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCallInConfig",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCallInConfigResponse>(await this.callApi(params, req, runtime), new $_model.StopCallInConfigResponse({}));
  }

  /**
   * Stops the inbound call that is transferred from a China 400 number.
   * 
   * @param request - StopCallInConfigRequest
   * @returns StopCallInConfigResponse
   */
  async stopCallInConfig(request: $_model.StopCallInConfigRequest): Promise<$_model.StopCallInConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopCallInConfigWithOptions(request, runtime);
  }

  /**
   * Stops a robocall task that is in progress.
   * 
   * @remarks
   * After you stop a robocall task, you can call the [StartRobotTask](~~StartRobotTask~~) operation to start it again.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StopRobotTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopRobotTaskResponse
   */
  async stopRobotTaskWithOptions(request: $_model.StopRobotTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopRobotTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopRobotTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopRobotTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopRobotTaskResponse({}));
  }

  /**
   * Stops a robocall task that is in progress.
   * 
   * @remarks
   * After you stop a robocall task, you can call the [StartRobotTask](~~StartRobotTask~~) operation to start it again.
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - StopRobotTaskRequest
   * @returns StopRobotTaskResponse
   */
  async stopRobotTask(request: $_model.StopRobotTaskRequest): Promise<$_model.StopRobotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopRobotTaskWithOptions(request, runtime);
  }

  /**
   * Submits a 400 number for registration.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SubmitHotlineTransferRegisterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotlineTransferRegisterResponse
   */
  async submitHotlineTransferRegisterWithOptions(request: $_model.SubmitHotlineTransferRegisterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHotlineTransferRegisterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agreement)) {
      query["Agreement"] = request.agreement;
    }

    if (!$dara.isNull(request.hotlineNumber)) {
      query["HotlineNumber"] = request.hotlineNumber;
    }

    if (!$dara.isNull(request.operatorIdentityCard)) {
      query["OperatorIdentityCard"] = request.operatorIdentityCard;
    }

    if (!$dara.isNull(request.operatorMail)) {
      query["OperatorMail"] = request.operatorMail;
    }

    if (!$dara.isNull(request.operatorMailVerifyCode)) {
      query["OperatorMailVerifyCode"] = request.operatorMailVerifyCode;
    }

    if (!$dara.isNull(request.operatorMobile)) {
      query["OperatorMobile"] = request.operatorMobile;
    }

    if (!$dara.isNull(request.operatorMobileVerifyCode)) {
      query["OperatorMobileVerifyCode"] = request.operatorMobileVerifyCode;
    }

    if (!$dara.isNull(request.operatorName)) {
      query["OperatorName"] = request.operatorName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qualificationId)) {
      query["QualificationId"] = request.qualificationId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.transferPhoneNumberInfos)) {
      query["TransferPhoneNumberInfos"] = request.transferPhoneNumberInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotlineTransferRegister",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHotlineTransferRegisterResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHotlineTransferRegisterResponse({}));
  }

  /**
   * Submits a 400 number for registration.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - SubmitHotlineTransferRegisterRequest
   * @returns SubmitHotlineTransferRegisterResponse
   */
  async submitHotlineTransferRegister(request: $_model.SubmitHotlineTransferRegisterRequest): Promise<$_model.SubmitHotlineTransferRegisterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHotlineTransferRegisterWithOptions(request, runtime);
  }

  /**
   * Upgrades from a voice call to a video call.
   * 
   * @param request - UpgradeVideoFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeVideoFileResponse
   */
  async upgradeVideoFileWithOptions(request: $_model.UpgradeVideoFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeVideoFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeVideoFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeVideoFileResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeVideoFileResponse({}));
  }

  /**
   * Upgrades from a voice call to a video call.
   * 
   * @param request - UpgradeVideoFileRequest
   * @returns UpgradeVideoFileResponse
   */
  async upgradeVideoFile(request: $_model.UpgradeVideoFileRequest): Promise<$_model.UpgradeVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeVideoFileWithOptions(request, runtime);
  }

  /**
   * Uploads the called numbers of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRobotTaskCalledFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadRobotTaskCalledFileResponse
   */
  async uploadRobotTaskCalledFileWithOptions(request: $_model.UploadRobotTaskCalledFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadRobotTaskCalledFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!$dara.isNull(request.ttsParamHead)) {
      query["TtsParamHead"] = request.ttsParamHead;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadRobotTaskCalledFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadRobotTaskCalledFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadRobotTaskCalledFileResponse({}));
  }

  /**
   * Uploads the called numbers of a robocall task.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - UploadRobotTaskCalledFileRequest
   * @returns UploadRobotTaskCalledFileResponse
   */
  async uploadRobotTaskCalledFile(request: $_model.UploadRobotTaskCalledFileRequest): Promise<$_model.UploadRobotTaskCalledFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadRobotTaskCalledFileWithOptions(request, runtime);
  }

}
