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
   * Agent status monitoring.
   * 
   * @param request - ClinkAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkAgentStatusResponse
   */
  async clinkAgentStatusWithOptions(request: $_model.ClinkAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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
      action: "ClinkAgentStatus",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.ClinkAgentStatusResponse({}));
  }

  /**
   * Agent status monitoring.
   * 
   * @param request - ClinkAgentStatusRequest
   * @returns ClinkAgentStatusResponse
   */
  async clinkAgentStatus(request: $_model.ClinkAgentStatusRequest): Promise<$_model.ClinkAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkAgentStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status details of an agent.
   * 
   * @param request - ClinkAgentStatusDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkAgentStatusDetailResponse
   */
  async clinkAgentStatusDetailWithOptions(request: $_model.ClinkAgentStatusDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkAgentStatusDetailResponse> {
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
      action: "ClinkAgentStatusDetail",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkAgentStatusDetailResponse>(await this.callApi(params, req, runtime), new $_model.ClinkAgentStatusDetailResponse({}));
  }

  /**
   * Queries the status details of an agent.
   * 
   * @param request - ClinkAgentStatusDetailRequest
   * @returns ClinkAgentStatusDetailResponse
   */
  async clinkAgentStatusDetail(request: $_model.ClinkAgentStatusDetailRequest): Promise<$_model.ClinkAgentStatusDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkAgentStatusDetailWithOptions(request, runtime);
  }

  /**
   * Attach an agent phone.
   * 
   * @param request - ClinkBindClientTelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkBindClientTelResponse
   */
  async clinkBindClientTelWithOptions(request: $_model.ClinkBindClientTelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkBindClientTelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.isBind)) {
      query["IsBind"] = request.isBind;
    }

    if (!$dara.isNull(request.isReserveTel)) {
      query["IsReserveTel"] = request.isReserveTel;
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
      action: "ClinkBindClientTel",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkBindClientTelResponse>(await this.callApi(params, req, runtime), new $_model.ClinkBindClientTelResponse({}));
  }

  /**
   * Attach an agent phone.
   * 
   * @param request - ClinkBindClientTelRequest
   * @returns ClinkBindClientTelResponse
   */
  async clinkBindClientTel(request: $_model.ClinkBindClientTelRequest): Promise<$_model.ClinkBindClientTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkBindClientTelWithOptions(request, runtime);
  }

  /**
   * Queries the details of an outbound call record.
   * 
   * @param request - ClinkCdrObDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkCdrObDetailsResponse
   */
  async clinkCdrObDetailsWithOptions(request: $_model.ClinkCdrObDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkCdrObDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkCdrObDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkCdrObDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkCdrObDetailsResponse({}));
  }

  /**
   * Queries the details of an outbound call record.
   * 
   * @param request - ClinkCdrObDetailsRequest
   * @returns ClinkCdrObDetailsResponse
   */
  async clinkCdrObDetails(request: $_model.ClinkCdrObDetailsRequest): Promise<$_model.ClinkCdrObDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkCdrObDetailsWithOptions(request, runtime);
  }

  /**
   * Add an agent.
   * 
   * @param tmpReq - ClinkCreateClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkCreateClientResponse
   */
  async clinkCreateClientWithOptions(tmpReq: $_model.ClinkCreateClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkCreateClientResponse> {
    tmpReq.validate();
    let request = new $_model.ClinkCreateClientShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clid)) {
      request.clidShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clid, "Clid", "json");
    }

    if (!$dara.isNull(tmpReq.clidArea)) {
      request.clidAreaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clidArea, "ClidArea", "json");
    }

    if (!$dara.isNull(tmpReq.clidDefault)) {
      request.clidDefaultShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clidDefault, "ClidDefault", "json");
    }

    if (!$dara.isNull(tmpReq.cloudNumberModes)) {
      request.cloudNumberModesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cloudNumberModes, "CloudNumberModes", "json");
    }

    if (!$dara.isNull(tmpReq.permission)) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permission, "Permission", "json");
    }

    if (!$dara.isNull(tmpReq.qnos)) {
      request.qnosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.qnos, "Qnos", "json");
    }

    if (!$dara.isNull(tmpReq.serveArea)) {
      request.serveAreaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serveArea, "ServeArea", "json");
    }

    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.assignType)) {
      query["AssignType"] = request.assignType;
    }

    if (!$dara.isNull(request.clidShrink)) {
      query["Clid"] = request.clidShrink;
    }

    if (!$dara.isNull(request.clidAreaShrink)) {
      query["ClidArea"] = request.clidAreaShrink;
    }

    if (!$dara.isNull(request.clidDefaultShrink)) {
      query["ClidDefault"] = request.clidDefaultShrink;
    }

    if (!$dara.isNull(request.clidRule)) {
      query["ClidRule"] = request.clidRule;
    }

    if (!$dara.isNull(request.clidType)) {
      query["ClidType"] = request.clidType;
    }

    if (!$dara.isNull(request.cloudNumberEnabled)) {
      query["CloudNumberEnabled"] = request.cloudNumberEnabled;
    }

    if (!$dara.isNull(request.cloudNumberModesShrink)) {
      query["CloudNumberModes"] = request.cloudNumberModesShrink;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.crmId)) {
      query["CrmId"] = request.crmId;
    }

    if (!$dara.isNull(request.dynamicTelGroupIdDefault)) {
      query["DynamicTelGroupIdDefault"] = request.dynamicTelGroupIdDefault;
    }

    if (!$dara.isNull(request.dynamicTelGroupName)) {
      query["DynamicTelGroupName"] = request.dynamicTelGroupName;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenTel)) {
      query["HiddenTel"] = request.hiddenTel;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClidDefaultType)) {
      query["ObClidDefaultType"] = request.obClidDefaultType;
    }

    if (!$dara.isNull(request.obHangupSms)) {
      query["ObHangupSms"] = request.obHangupSms;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.pauseLogin)) {
      query["PauseLogin"] = request.pauseLogin;
    }

    if (!$dara.isNull(request.permissionShrink)) {
      query["Permission"] = request.permissionShrink;
    }

    if (!$dara.isNull(request.qnosShrink)) {
      query["Qnos"] = request.qnosShrink;
    }

    if (!$dara.isNull(request.recurrentselectionType)) {
      query["RecurrentselectionType"] = request.recurrentselectionType;
    }

    if (!$dara.isNull(request.recurrentselectionValue)) {
      query["RecurrentselectionValue"] = request.recurrentselectionValue;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serveAreaShrink)) {
      query["ServeArea"] = request.serveAreaShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.wechatMiniProgramRtc)) {
      query["WechatMiniProgramRtc"] = request.wechatMiniProgramRtc;
    }

    if (!$dara.isNull(request.wrapupTime)) {
      query["WrapupTime"] = request.wrapupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkCreateClient",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkCreateClientResponse>(await this.callApi(params, req, runtime), new $_model.ClinkCreateClientResponse({}));
  }

  /**
   * Add an agent.
   * 
   * @param request - ClinkCreateClientRequest
   * @returns ClinkCreateClientResponse
   */
  async clinkCreateClient(request: $_model.ClinkCreateClientRequest): Promise<$_model.ClinkCreateClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkCreateClientWithOptions(request, runtime);
  }

  /**
   * Add a busy status.
   * 
   * @param request - ClinkCreateEnterprisePauseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkCreateEnterprisePauseResponse
   */
  async clinkCreateEnterprisePauseWithOptions(request: $_model.ClinkCreateEnterprisePauseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkCreateEnterprisePauseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.isDefault)) {
      query["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.isRest)) {
      query["IsRest"] = request.isRest;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseStatus)) {
      query["PauseStatus"] = request.pauseStatus;
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
      action: "ClinkCreateEnterprisePause",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkCreateEnterprisePauseResponse>(await this.callApi(params, req, runtime), new $_model.ClinkCreateEnterprisePauseResponse({}));
  }

  /**
   * Add a busy status.
   * 
   * @param request - ClinkCreateEnterprisePauseRequest
   * @returns ClinkCreateEnterprisePauseResponse
   */
  async clinkCreateEnterprisePause(request: $_model.ClinkCreateEnterprisePauseRequest): Promise<$_model.ClinkCreateEnterprisePauseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkCreateEnterprisePauseWithOptions(request, runtime);
  }

  /**
   * Add a phone.
   * 
   * @param request - ClinkCreateExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkCreateExtenResponse
   */
  async clinkCreateExtenWithOptions(request: $_model.ClinkCreateExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkCreateExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allow)) {
      query["Allow"] = request.allow;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.extenNumber)) {
      query["ExtenNumber"] = request.extenNumber;
    }

    if (!$dara.isNull(request.isDirect)) {
      query["IsDirect"] = request.isDirect;
    }

    if (!$dara.isNull(request.jittBuffer)) {
      query["JittBuffer"] = request.jittBuffer;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkCreateExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkCreateExtenResponse>(await this.callApi(params, req, runtime), new $_model.ClinkCreateExtenResponse({}));
  }

  /**
   * Add a phone.
   * 
   * @param request - ClinkCreateExtenRequest
   * @returns ClinkCreateExtenResponse
   */
  async clinkCreateExten(request: $_model.ClinkCreateExtenRequest): Promise<$_model.ClinkCreateExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkCreateExtenWithOptions(request, runtime);
  }

  /**
   * Add a queue.
   * 
   * @param tmpReq - ClinkCreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkCreateQueueResponse
   */
  async clinkCreateQueueWithOptions(tmpReq: $_model.ClinkCreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkCreateQueueResponse> {
    tmpReq.validate();
    let request = new $_model.ClinkCreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueMembers)) {
      request.queueMembersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueMembers, "QueueMembers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.chatLocation)) {
      query["ChatLocation"] = request.chatLocation;
    }

    if (!$dara.isNull(request.chatMaxWait)) {
      query["ChatMaxWait"] = request.chatMaxWait;
    }

    if (!$dara.isNull(request.chatStrategy)) {
      query["ChatStrategy"] = request.chatStrategy;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ibAllowed)) {
      query["IbAllowed"] = request.ibAllowed;
    }

    if (!$dara.isNull(request.joinEmpty)) {
      query["JoinEmpty"] = request.joinEmpty;
    }

    if (!$dara.isNull(request.maxPauseClientFlag)) {
      query["MaxPauseClientFlag"] = request.maxPauseClientFlag;
    }

    if (!$dara.isNull(request.maxPauseClientType)) {
      query["MaxPauseClientType"] = request.maxPauseClientType;
    }

    if (!$dara.isNull(request.maxPauseClientValue)) {
      query["MaxPauseClientValue"] = request.maxPauseClientValue;
    }

    if (!$dara.isNull(request.maxWait)) {
      query["MaxWait"] = request.maxWait;
    }

    if (!$dara.isNull(request.memberTimeout)) {
      query["MemberTimeout"] = request.memberTimeout;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qno)) {
      query["Qno"] = request.qno;
    }

    if (!$dara.isNull(request.queueMembersShrink)) {
      query["QueueMembers"] = request.queueMembersShrink;
    }

    if (!$dara.isNull(request.queueTimeout)) {
      query["QueueTimeout"] = request.queueTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sayCno)) {
      query["SayCno"] = request.sayCno;
    }

    if (!$dara.isNull(request.serviceLevel)) {
      query["ServiceLevel"] = request.serviceLevel;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    if (!$dara.isNull(request.vipSupport)) {
      query["VipSupport"] = request.vipSupport;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    if (!$dara.isNull(request.wrapupTime)) {
      query["WrapupTime"] = request.wrapupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkCreateQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkCreateQueueResponse>(await this.callApi(params, req, runtime), new $_model.ClinkCreateQueueResponse({}));
  }

  /**
   * Add a queue.
   * 
   * @param request - ClinkCreateQueueRequest
   * @returns ClinkCreateQueueResponse
   */
  async clinkCreateQueue(request: $_model.ClinkCreateQueueRequest): Promise<$_model.ClinkCreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkCreateQueueWithOptions(request, runtime);
  }

  /**
   * Deletes an agent.
   * 
   * @param request - ClinkDeleteClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDeleteClientResponse
   */
  async clinkDeleteClientWithOptions(request: $_model.ClinkDeleteClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDeleteClientResponse> {
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
      action: "ClinkDeleteClient",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDeleteClientResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDeleteClientResponse({}));
  }

  /**
   * Deletes an agent.
   * 
   * @param request - ClinkDeleteClientRequest
   * @returns ClinkDeleteClientResponse
   */
  async clinkDeleteClient(request: $_model.ClinkDeleteClientRequest): Promise<$_model.ClinkDeleteClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDeleteClientWithOptions(request, runtime);
  }

  /**
   * Delete the phone.
   * 
   * @param request - ClinkDeleteExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDeleteExtenResponse
   */
  async clinkDeleteExtenWithOptions(request: $_model.ClinkDeleteExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDeleteExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.extenNumber)) {
      query["ExtenNumber"] = request.extenNumber;
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
      action: "ClinkDeleteExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDeleteExtenResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDeleteExtenResponse({}));
  }

  /**
   * Delete the phone.
   * 
   * @param request - ClinkDeleteExtenRequest
   * @returns ClinkDeleteExtenResponse
   */
  async clinkDeleteExten(request: $_model.ClinkDeleteExtenRequest): Promise<$_model.ClinkDeleteExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDeleteExtenWithOptions(request, runtime);
  }

  /**
   * View incoming call records.
   * 
   * @param request - ClinkDescribeCdrIbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeCdrIbResponse
   */
  async clinkDescribeCdrIbWithOptions(request: $_model.ClinkDescribeCdrIbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeCdrIbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkDescribeCdrIb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeCdrIbResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeCdrIbResponse({}));
  }

  /**
   * View incoming call records.
   * 
   * @param request - ClinkDescribeCdrIbRequest
   * @returns ClinkDescribeCdrIbResponse
   */
  async clinkDescribeCdrIb(request: $_model.ClinkDescribeCdrIbRequest): Promise<$_model.ClinkDescribeCdrIbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeCdrIbWithOptions(request, runtime);
  }

  /**
   * View incoming call record details.
   * 
   * @param request - ClinkDescribeCdrIbDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeCdrIbDetailsResponse
   */
  async clinkDescribeCdrIbDetailsWithOptions(request: $_model.ClinkDescribeCdrIbDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeCdrIbDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkDescribeCdrIbDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeCdrIbDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeCdrIbDetailsResponse({}));
  }

  /**
   * View incoming call record details.
   * 
   * @param request - ClinkDescribeCdrIbDetailsRequest
   * @returns ClinkDescribeCdrIbDetailsResponse
   */
  async clinkDescribeCdrIbDetails(request: $_model.ClinkDescribeCdrIbDetailsRequest): Promise<$_model.ClinkDescribeCdrIbDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeCdrIbDetailsWithOptions(request, runtime);
  }

  /**
   * View outbound call records.
   * 
   * @param request - ClinkDescribeCdrObRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeCdrObResponse
   */
  async clinkDescribeCdrObWithOptions(request: $_model.ClinkDescribeCdrObRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeCdrObResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkDescribeCdrOb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeCdrObResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeCdrObResponse({}));
  }

  /**
   * View outbound call records.
   * 
   * @param request - ClinkDescribeCdrObRequest
   * @returns ClinkDescribeCdrObResponse
   */
  async clinkDescribeCdrOb(request: $_model.ClinkDescribeCdrObRequest): Promise<$_model.ClinkDescribeCdrObResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeCdrObWithOptions(request, runtime);
  }

  /**
   * View outbound call record details.
   * 
   * @param request - ClinkDescribeCdrObDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeCdrObDetailsResponse
   */
  async clinkDescribeCdrObDetailsWithOptions(request: $_model.ClinkDescribeCdrObDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeCdrObDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkDescribeCdrObDetails",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeCdrObDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeCdrObDetailsResponse({}));
  }

  /**
   * View outbound call record details.
   * 
   * @param request - ClinkDescribeCdrObDetailsRequest
   * @returns ClinkDescribeCdrObDetailsResponse
   */
  async clinkDescribeCdrObDetails(request: $_model.ClinkDescribeCdrObDetailsRequest): Promise<$_model.ClinkDescribeCdrObDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeCdrObDetailsWithOptions(request, runtime);
  }

  /**
   * View the agent details.
   * 
   * @param request - ClinkDescribeClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeClientResponse
   */
  async clinkDescribeClientWithOptions(request: $_model.ClinkDescribeClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeClientResponse> {
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
      action: "ClinkDescribeClient",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeClientResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeClientResponse({}));
  }

  /**
   * View the agent details.
   * 
   * @param request - ClinkDescribeClientRequest
   * @returns ClinkDescribeClientResponse
   */
  async clinkDescribeClient(request: $_model.ClinkDescribeClientRequest): Promise<$_model.ClinkDescribeClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeClientWithOptions(request, runtime);
  }

  /**
   * View queue details.
   * 
   * @param request - ClinkDescribeQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeQueueResponse
   */
  async clinkDescribeQueueWithOptions(request: $_model.ClinkDescribeQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkDescribeQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeQueueResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeQueueResponse({}));
  }

  /**
   * View queue details.
   * 
   * @param request - ClinkDescribeQueueRequest
   * @returns ClinkDescribeQueueResponse
   */
  async clinkDescribeQueue(request: $_model.ClinkDescribeQueueRequest): Promise<$_model.ClinkDescribeQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeQueueWithOptions(request, runtime);
  }

  /**
   * View call recording address.
   * 
   * @param request - ClinkDescribeRecordFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDescribeRecordFileUrlResponse
   */
  async clinkDescribeRecordFileUrlWithOptions(request: $_model.ClinkDescribeRecordFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDescribeRecordFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.download)) {
      query["Download"] = request.download;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recordSide)) {
      query["RecordSide"] = request.recordSide;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkDescribeRecordFileUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDescribeRecordFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDescribeRecordFileUrlResponse({}));
  }

  /**
   * View call recording address.
   * 
   * @param request - ClinkDescribeRecordFileUrlRequest
   * @returns ClinkDescribeRecordFileUrlResponse
   */
  async clinkDescribeRecordFileUrl(request: $_model.ClinkDescribeRecordFileUrlRequest): Promise<$_model.ClinkDescribeRecordFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDescribeRecordFileUrlWithOptions(request, runtime);
  }

  /**
   * Query the details of customer call records.
   * 
   * @param request - ClinkDetailCdrIbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkDetailCdrIbResponse
   */
  async clinkDetailCdrIbWithOptions(request: $_model.ClinkDetailCdrIbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkDetailCdrIbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
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
      action: "ClinkDetailCdrIb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkDetailCdrIbResponse>(await this.callApi(params, req, runtime), new $_model.ClinkDetailCdrIbResponse({}));
  }

  /**
   * Query the details of customer call records.
   * 
   * @param request - ClinkDetailCdrIbRequest
   * @returns ClinkDetailCdrIbResponse
   */
  async clinkDetailCdrIb(request: $_model.ClinkDetailCdrIbRequest): Promise<$_model.ClinkDetailCdrIbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkDetailCdrIbWithOptions(request, runtime);
  }

  /**
   * Query the customer call record list.
   * 
   * @param request - ClinkListCdrIbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListCdrIbResponse
   */
  async clinkListCdrIbWithOptions(request: $_model.ClinkListCdrIbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListCdrIbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bridgeDuration)) {
      query["BridgeDuration"] = request.bridgeDuration;
    }

    if (!$dara.isNull(request.bridgeDurationEnd)) {
      query["BridgeDurationEnd"] = request.bridgeDurationEnd;
    }

    if (!$dara.isNull(request.bridgeTime)) {
      query["BridgeTime"] = request.bridgeTime;
    }

    if (!$dara.isNull(request.bridgeTimeEnd)) {
      query["BridgeTimeEnd"] = request.bridgeTimeEnd;
    }

    if (!$dara.isNull(request.clientNumber)) {
      query["ClientNumber"] = request.clientNumber;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.firstCallCno)) {
      query["FirstCallCno"] = request.firstCallCno;
    }

    if (!$dara.isNull(request.firstCallNumber)) {
      query["FirstCallNumber"] = request.firstCallNumber;
    }

    if (!$dara.isNull(request.firstCallQno)) {
      query["FirstCallQno"] = request.firstCallQno;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.scrollId)) {
      query["ScrollId"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollSearch)) {
      query["ScrollSearch"] = request.scrollSearch;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!$dara.isNull(request.totalDuration)) {
      query["TotalDuration"] = request.totalDuration;
    }

    if (!$dara.isNull(request.totalDurationEnd)) {
      query["TotalDurationEnd"] = request.totalDurationEnd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListCdrIb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListCdrIbResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListCdrIbResponse({}));
  }

  /**
   * Query the customer call record list.
   * 
   * @param request - ClinkListCdrIbRequest
   * @returns ClinkListCdrIbResponse
   */
  async clinkListCdrIb(request: $_model.ClinkListCdrIbRequest): Promise<$_model.ClinkListCdrIbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListCdrIbWithOptions(request, runtime);
  }

  /**
   * Queries the list of agent answering records.
   * 
   * @param request - ClinkListCdrIbAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListCdrIbAgentResponse
   */
  async clinkListCdrIbAgentWithOptions(request: $_model.ClinkListCdrIbAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListCdrIbAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentAnswerInTime)) {
      query["AgentAnswerInTime"] = request.agentAnswerInTime;
    }

    if (!$dara.isNull(request.bridgeDuration)) {
      query["BridgeDuration"] = request.bridgeDuration;
    }

    if (!$dara.isNull(request.bridgeDurationEnd)) {
      query["BridgeDurationEnd"] = request.bridgeDurationEnd;
    }

    if (!$dara.isNull(request.bridgeTime)) {
      query["BridgeTime"] = request.bridgeTime;
    }

    if (!$dara.isNull(request.bridgeTimeEnd)) {
      query["BridgeTimeEnd"] = request.bridgeTimeEnd;
    }

    if (!$dara.isNull(request.clientNumber)) {
      query["ClientNumber"] = request.clientNumber;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.hotlineName)) {
      query["HotlineName"] = request.hotlineName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.scrollId)) {
      query["ScrollId"] = request.scrollId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListCdrIbAgent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListCdrIbAgentResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListCdrIbAgentResponse({}));
  }

  /**
   * Queries the list of agent answering records.
   * 
   * @param request - ClinkListCdrIbAgentRequest
   * @returns ClinkListCdrIbAgentResponse
   */
  async clinkListCdrIbAgent(request: $_model.ClinkListCdrIbAgentRequest): Promise<$_model.ClinkListCdrIbAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListCdrIbAgentWithOptions(request, runtime);
  }

  /**
   * Query the list of inbound call records.
   * 
   * @param request - ClinkListCdrIbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListCdrIbsResponse
   */
  async clinkListCdrIbsWithOptions(request: $_model.ClinkListCdrIbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListCdrIbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientNumber)) {
      query["ClientNumber"] = request.clientNumber;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.qno)) {
      query["Qno"] = request.qno;
    }

    if (!$dara.isNull(request.queueAnswerInTime)) {
      query["QueueAnswerInTime"] = request.queueAnswerInTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListCdrIbs",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListCdrIbsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListCdrIbsResponse({}));
  }

  /**
   * Query the list of inbound call records.
   * 
   * @param request - ClinkListCdrIbsRequest
   * @returns ClinkListCdrIbsResponse
   */
  async clinkListCdrIbs(request: $_model.ClinkListCdrIbsRequest): Promise<$_model.ClinkListCdrIbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListCdrIbsWithOptions(request, runtime);
  }

  /**
   * Queries the list of outbound call records.
   * 
   * @param request - ClinkListCdrObRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListCdrObResponse
   */
  async clinkListCdrObWithOptions(request: $_model.ClinkListCdrObRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListCdrObResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bridgeDuration)) {
      query["BridgeDuration"] = request.bridgeDuration;
    }

    if (!$dara.isNull(request.bridgeDurationEnd)) {
      query["BridgeDurationEnd"] = request.bridgeDurationEnd;
    }

    if (!$dara.isNull(request.bridgeTime)) {
      query["BridgeTime"] = request.bridgeTime;
    }

    if (!$dara.isNull(request.bridgeTimeEnd)) {
      query["BridgeTimeEnd"] = request.bridgeTimeEnd;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.clientNumber)) {
      query["ClientNumber"] = request.clientNumber;
    }

    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.endTimeEnd)) {
      query["EndTimeEnd"] = request.endTimeEnd;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.leftClid)) {
      query["LeftClid"] = request.leftClid;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.scrollId)) {
      query["ScrollId"] = request.scrollId;
    }

    if (!$dara.isNull(request.scrollSearch)) {
      query["ScrollSearch"] = request.scrollSearch;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.startTimeEnd)) {
      query["StartTimeEnd"] = request.startTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.totalDuration)) {
      query["TotalDuration"] = request.totalDuration;
    }

    if (!$dara.isNull(request.totalDurationEnd)) {
      query["TotalDurationEnd"] = request.totalDurationEnd;
    }

    if (!$dara.isNull(request.xnumber)) {
      query["Xnumber"] = request.xnumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListCdrOb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListCdrObResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListCdrObResponse({}));
  }

  /**
   * Queries the list of outbound call records.
   * 
   * @param request - ClinkListCdrObRequest
   * @returns ClinkListCdrObResponse
   */
  async clinkListCdrOb(request: $_model.ClinkListCdrObRequest): Promise<$_model.ClinkListCdrObResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListCdrObWithOptions(request, runtime);
  }

  /**
   * Queries the outbound call record list.
   * 
   * @param request - ClinkListCdrObsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListCdrObsResponse
   */
  async clinkListCdrObsWithOptions(request: $_model.ClinkListCdrObsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListCdrObsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.associatedId)) {
      query["AssociatedId"] = request.associatedId;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clientNumber)) {
      query["ClientNumber"] = request.clientNumber;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.evaluation)) {
      query["Evaluation"] = request.evaluation;
    }

    if (!$dara.isNull(request.hiddenType)) {
      query["HiddenType"] = request.hiddenType;
    }

    if (!$dara.isNull(request.hotline)) {
      query["Hotline"] = request.hotline;
    }

    if (!$dara.isNull(request.idType)) {
      query["IdType"] = request.idType;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.mark)) {
      query["Mark"] = request.mark;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.queueAnswerInTime)) {
      query["QueueAnswerInTime"] = request.queueAnswerInTime;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListCdrObs",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListCdrObsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListCdrObsResponse({}));
  }

  /**
   * Queries the outbound call record list.
   * 
   * @param request - ClinkListCdrObsRequest
   * @returns ClinkListCdrObsResponse
   */
  async clinkListCdrObs(request: $_model.ClinkListCdrObsRequest): Promise<$_model.ClinkListCdrObsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListCdrObsWithOptions(request, runtime);
  }

  /**
   * Queries the list of agents.
   * 
   * @param request - ClinkListClientsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListClientsResponse
   */
  async clinkListClientsWithOptions(request: $_model.ClinkListClientsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListClientsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.bindTel)) {
      query["BindTel"] = request.bindTel;
    }

    if (!$dara.isNull(request.clid)) {
      query["Clid"] = request.clid;
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

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      query["UpdateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      query["UpdateStartTime"] = request.updateStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListClients",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListClientsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListClientsResponse({}));
  }

  /**
   * Queries the list of agents.
   * 
   * @param request - ClinkListClientsRequest
   * @returns ClinkListClientsResponse
   */
  async clinkListClients(request: $_model.ClinkListClientsRequest): Promise<$_model.ClinkListClientsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListClientsWithOptions(request, runtime);
  }

  /**
   * Queries the busy status list.
   * 
   * @param request - ClinkListEnterprisePausesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListEnterprisePausesResponse
   */
  async clinkListEnterprisePausesWithOptions(request: $_model.ClinkListEnterprisePausesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListEnterprisePausesResponse> {
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
      action: "ClinkListEnterprisePauses",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListEnterprisePausesResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListEnterprisePausesResponse({}));
  }

  /**
   * Queries the busy status list.
   * 
   * @param request - ClinkListEnterprisePausesRequest
   * @returns ClinkListEnterprisePausesResponse
   */
  async clinkListEnterprisePauses(request: $_model.ClinkListEnterprisePausesRequest): Promise<$_model.ClinkListEnterprisePausesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListEnterprisePausesWithOptions(request, runtime);
  }

  /**
   * Query the phone list.
   * 
   * @param request - ClinkListExtensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListExtensResponse
   */
  async clinkListExtensWithOptions(request: $_model.ClinkListExtensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListExtensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkListExtens",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListExtensResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListExtensResponse({}));
  }

  /**
   * Query the phone list.
   * 
   * @param request - ClinkListExtensRequest
   * @returns ClinkListExtensResponse
   */
  async clinkListExtens(request: $_model.ClinkListExtensRequest): Promise<$_model.ClinkListExtensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListExtensWithOptions(request, runtime);
  }

  /**
   * Queries the voice navigation edge zone list.
   * 
   * @param request - ClinkListIvrNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListIvrNodesResponse
   */
  async clinkListIvrNodesWithOptions(request: $_model.ClinkListIvrNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListIvrNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ivrName)) {
      query["IvrName"] = request.ivrName;
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
      action: "ClinkListIvrNodes",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListIvrNodesResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListIvrNodesResponse({}));
  }

  /**
   * Queries the voice navigation edge zone list.
   * 
   * @param request - ClinkListIvrNodesRequest
   * @returns ClinkListIvrNodesResponse
   */
  async clinkListIvrNodes(request: $_model.ClinkListIvrNodesRequest): Promise<$_model.ClinkListIvrNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListIvrNodesWithOptions(request, runtime);
  }

  /**
   * Queries the voice navigation list.
   * 
   * @param request - ClinkListIvrsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListIvrsResponse
   */
  async clinkListIvrsWithOptions(request: $_model.ClinkListIvrsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListIvrsResponse> {
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
      action: "ClinkListIvrs",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListIvrsResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListIvrsResponse({}));
  }

  /**
   * Queries the voice navigation list.
   * 
   * @param request - ClinkListIvrsRequest
   * @returns ClinkListIvrsResponse
   */
  async clinkListIvrs(request: $_model.ClinkListIvrsRequest): Promise<$_model.ClinkListIvrsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListIvrsWithOptions(request, runtime);
  }

  /**
   * Queries the queue list.
   * 
   * @param request - ClinkListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkListQueuesResponse
   */
  async clinkListQueuesWithOptions(request: $_model.ClinkListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkListQueuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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
      action: "ClinkListQueues",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkListQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ClinkListQueuesResponse({}));
  }

  /**
   * Queries the queue list.
   * 
   * @param request - ClinkListQueuesRequest
   * @returns ClinkListQueuesResponse
   */
  async clinkListQueues(request: $_model.ClinkListQueuesRequest): Promise<$_model.ClinkListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkListQueuesWithOptions(request, runtime);
  }

  /**
   * Inbound report - call statistics.
   * 
   * @param request - ClinkStatIbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkStatIbResponse
   */
  async clinkStatIbWithOptions(request: $_model.ClinkStatIbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkStatIbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.date)) {
      query["Date"] = request.date;
    }

    if (!$dara.isNull(request.dateEnd)) {
      query["DateEnd"] = request.dateEnd;
    }

    if (!$dara.isNull(request.endHour)) {
      query["EndHour"] = request.endHour;
    }

    if (!$dara.isNull(request.endMinute)) {
      query["EndMinute"] = request.endMinute;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.hotlines)) {
      query["Hotlines"] = request.hotlines;
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

    if (!$dara.isNull(request.startHour)) {
      query["StartHour"] = request.startHour;
    }

    if (!$dara.isNull(request.startMinute)) {
      query["StartMinute"] = request.startMinute;
    }

    if (!$dara.isNull(request.statisticMethod)) {
      query["StatisticMethod"] = request.statisticMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkStatIb",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkStatIbResponse>(await this.callApi(params, req, runtime), new $_model.ClinkStatIbResponse({}));
  }

  /**
   * Inbound report - call statistics.
   * 
   * @param request - ClinkStatIbRequest
   * @returns ClinkStatIbResponse
   */
  async clinkStatIb(request: $_model.ClinkStatIbRequest): Promise<$_model.ClinkStatIbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkStatIbWithOptions(request, runtime);
  }

  /**
   * Update an agent.
   * 
   * @param tmpReq - ClinkUpdateClientRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClinkUpdateClientResponse
   */
  async clinkUpdateClientWithOptions(tmpReq: $_model.ClinkUpdateClientRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClinkUpdateClientResponse> {
    tmpReq.validate();
    let request = new $_model.ClinkUpdateClientShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clid)) {
      request.clidShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clid, "Clid", "json");
    }

    if (!$dara.isNull(tmpReq.clidArea)) {
      request.clidAreaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clidArea, "ClidArea", "json");
    }

    if (!$dara.isNull(tmpReq.clidDefault)) {
      request.clidDefaultShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clidDefault, "ClidDefault", "json");
    }

    if (!$dara.isNull(tmpReq.cloudNumberModes)) {
      request.cloudNumberModesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cloudNumberModes, "CloudNumberModes", "json");
    }

    if (!$dara.isNull(tmpReq.permission)) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permission, "Permission", "json");
    }

    if (!$dara.isNull(tmpReq.qnos)) {
      request.qnosShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.qnos, "Qnos", "json");
    }

    if (!$dara.isNull(tmpReq.serveArea)) {
      request.serveAreaShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serveArea, "ServeArea", "json");
    }

    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.assignType)) {
      query["AssignType"] = request.assignType;
    }

    if (!$dara.isNull(request.clidShrink)) {
      query["Clid"] = request.clidShrink;
    }

    if (!$dara.isNull(request.clidAreaShrink)) {
      query["ClidArea"] = request.clidAreaShrink;
    }

    if (!$dara.isNull(request.clidDefaultShrink)) {
      query["ClidDefault"] = request.clidDefaultShrink;
    }

    if (!$dara.isNull(request.clidRule)) {
      query["ClidRule"] = request.clidRule;
    }

    if (!$dara.isNull(request.clidType)) {
      query["ClidType"] = request.clidType;
    }

    if (!$dara.isNull(request.cloudNumberEnabled)) {
      query["CloudNumberEnabled"] = request.cloudNumberEnabled;
    }

    if (!$dara.isNull(request.cloudNumberModesShrink)) {
      query["CloudNumberModes"] = request.cloudNumberModesShrink;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.crmId)) {
      query["CrmId"] = request.crmId;
    }

    if (!$dara.isNull(request.dynamicTelGroupIdDefault)) {
      query["DynamicTelGroupIdDefault"] = request.dynamicTelGroupIdDefault;
    }

    if (!$dara.isNull(request.dynamicTelGroupName)) {
      query["DynamicTelGroupName"] = request.dynamicTelGroupName;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hiddenTel)) {
      query["HiddenTel"] = request.hiddenTel;
    }

    if (!$dara.isNull(request.ibWrapupTime)) {
      query["IbWrapupTime"] = request.ibWrapupTime;
    }

    if (!$dara.isNull(request.ibWrapupType)) {
      query["IbWrapupType"] = request.ibWrapupType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.obClidDefaultType)) {
      query["ObClidDefaultType"] = request.obClidDefaultType;
    }

    if (!$dara.isNull(request.obHangupSms)) {
      query["ObHangupSms"] = request.obHangupSms;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.pauseLogin)) {
      query["PauseLogin"] = request.pauseLogin;
    }

    if (!$dara.isNull(request.permissionShrink)) {
      query["Permission"] = request.permissionShrink;
    }

    if (!$dara.isNull(request.qnosShrink)) {
      query["Qnos"] = request.qnosShrink;
    }

    if (!$dara.isNull(request.recurrentselectionType)) {
      query["RecurrentselectionType"] = request.recurrentselectionType;
    }

    if (!$dara.isNull(request.recurrentselectionValue)) {
      query["RecurrentselectionValue"] = request.recurrentselectionValue;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serveAreaShrink)) {
      query["ServeArea"] = request.serveAreaShrink;
    }

    if (!$dara.isNull(request.wechatMiniProgramRtc)) {
      query["WechatMiniProgramRtc"] = request.wechatMiniProgramRtc;
    }

    if (!$dara.isNull(request.wrapupTime)) {
      query["WrapupTime"] = request.wrapupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClinkUpdateClient",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClinkUpdateClientResponse>(await this.callApi(params, req, runtime), new $_model.ClinkUpdateClientResponse({}));
  }

  /**
   * Update an agent.
   * 
   * @param request - ClinkUpdateClientRequest
   * @returns ClinkUpdateClientResponse
   */
  async clinkUpdateClient(request: $_model.ClinkUpdateClientRequest): Promise<$_model.ClinkUpdateClientResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.clinkUpdateClientWithOptions(request, runtime);
  }

  /**
   * Publish the agent online through this interface.
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
   * Publish the agent online through this interface.
   * 
   * @param request - CloudAgentLoginRequest
   * @returns CloudAgentLoginResponse
   */
  async cloudAgentLogin(request: $_model.CloudAgentLoginRequest): Promise<$_model.CloudAgentLoginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentLoginWithOptions(request, runtime);
  }

  /**
   * Unpublish an agent.
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
   * Unpublish an agent.
   * 
   * @param request - CloudAgentLogoutRequest
   * @returns CloudAgentLogoutResponse
   */
  async cloudAgentLogout(request: $_model.CloudAgentLogoutRequest): Promise<$_model.CloudAgentLogoutResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentLogoutWithOptions(request, runtime);
  }

  /**
   * Real-time statistics on agent call data.
   * 
   * @param request - CloudAgentMonitorStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentMonitorStatisticsResponse
   */
  async cloudAgentMonitorStatisticsWithOptions(request: $_model.CloudAgentMonitorStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentMonitorStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.endHour)) {
      query["EndHour"] = request.endHour;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.isNeedQueueName)) {
      query["IsNeedQueueName"] = request.isNeedQueueName;
    }

    if (!$dara.isNull(request.isUseGno)) {
      query["IsUseGno"] = request.isUseGno;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.startHour)) {
      query["StartHour"] = request.startHour;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentMonitorStatistics",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentMonitorStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentMonitorStatisticsResponse({}));
  }

  /**
   * Real-time statistics on agent call data.
   * 
   * @param request - CloudAgentMonitorStatisticsRequest
   * @returns CloudAgentMonitorStatisticsResponse
   */
  async cloudAgentMonitorStatistics(request: $_model.CloudAgentMonitorStatisticsRequest): Promise<$_model.CloudAgentMonitorStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentMonitorStatisticsWithOptions(request, runtime);
  }

  /**
   * Use this interface to set agent associated data.
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
   * Use this interface to set agent associated data.
   * 
   * @param request - CloudAgentSetUserDataRequest
   * @returns CloudAgentSetUserDataResponse
   */
  async cloudAgentSetUserData(request: $_model.CloudAgentSetUserDataRequest): Promise<$_model.CloudAgentSetUserDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentSetUserDataWithOptions(request, runtime);
  }

  /**
   * The agent hangs up.
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
   * The agent hangs up.
   * 
   * @param request - CloudAgentUnlinkRequest
   * @returns CloudAgentUnlinkResponse
   */
  async cloudAgentUnlink(request: $_model.CloudAgentUnlinkRequest): Promise<$_model.CloudAgentUnlinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentUnlinkWithOptions(request, runtime);
  }

  /**
   * Gets agent workload report data.
   * 
   * @param request - CloudAgentWorkloadReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAgentWorkloadReportResponse
   */
  async cloudAgentWorkloadReportWithOptions(request: $_model.CloudAgentWorkloadReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAgentWorkloadReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gnos)) {
      query["Gnos"] = request.gnos;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisticMethod)) {
      query["StatisticMethod"] = request.statisticMethod;
    }

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudAgentWorkloadReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAgentWorkloadReportResponse>(await this.callApi(params, req, runtime), new $_model.CloudAgentWorkloadReportResponse({}));
  }

  /**
   * Gets agent workload report data.
   * 
   * @param request - CloudAgentWorkloadReportRequest
   * @returns CloudAgentWorkloadReportResponse
   */
  async cloudAgentWorkloadReport(request: $_model.CloudAgentWorkloadReportRequest): Promise<$_model.CloudAgentWorkloadReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAgentWorkloadReportWithOptions(request, runtime);
  }

  /**
   * Assigns an agent to an outbound group.
   * 
   * @param request - CloudAssignAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudAssignAgentGroupResponse
   */
  async cloudAssignAgentGroupWithOptions(request: $_model.CloudAssignAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudAssignAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
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
      action: "CloudAssignAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudAssignAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudAssignAgentGroupResponse({}));
  }

  /**
   * Assigns an agent to an outbound group.
   * 
   * @param request - CloudAssignAgentGroupRequest
   * @returns CloudAssignAgentGroupResponse
   */
  async cloudAssignAgentGroup(request: $_model.CloudAssignAgentGroupRequest): Promise<$_model.CloudAssignAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudAssignAgentGroupWithOptions(request, runtime);
  }

  /**
   * Batch add agents. You can create up to 100 agents in a single batch.
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
   * Batch add agents. You can create up to 100 agents in a single batch.
   * 
   * @param request - CloudBatchCreateAgentRequest
   * @returns CloudBatchCreateAgentResponse
   */
  async cloudBatchCreateAgent(request: $_model.CloudBatchCreateAgentRequest): Promise<$_model.CloudBatchCreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchCreateAgentWithOptions(request, runtime);
  }

  /**
   * Obtains the real-time status of agents in batches based on their job numbers.
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
   * Obtains the real-time status of agents in batches based on their job numbers.
   * 
   * @param request - CloudBatchGetAgentStatusRequest
   * @returns CloudBatchGetAgentStatusResponse
   */
  async cloudBatchGetAgentStatus(request: $_model.CloudBatchGetAgentStatusRequest): Promise<$_model.CloudBatchGetAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchGetAgentStatusWithOptions(request, runtime);
  }

  /**
   * Batch update the basic info of agents, excluding the update of skill info attached to agents.
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
   * Batch update the basic info of agents, excluding the update of skill info attached to agents.
   * 
   * @param request - CloudBatchUpdateAgentRequest
   * @returns CloudBatchUpdateAgentResponse
   */
  async cloudBatchUpdateAgent(request: $_model.CloudBatchUpdateAgentRequest): Promise<$_model.CloudBatchUpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudBatchUpdateAgentWithOptions(request, runtime);
  }

  /**
   * Creates an agent.
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
   * Creates an agent.
   * 
   * @param request - CloudCreateAgentRequest
   * @returns CloudCreateAgentResponse
   */
  async cloudCreateAgent(request: $_model.CloudCreateAgentRequest): Promise<$_model.CloudCreateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateAgentWithOptions(request, runtime);
  }

  /**
   * Call this operation to add an outbound group.
   * 
   * @param request - CloudCreateAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateAgentGroupResponse
   */
  async cloudCreateAgentGroupWithOptions(request: $_model.CloudCreateAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
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
      action: "CloudCreateAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateAgentGroupResponse({}));
  }

  /**
   * Call this operation to add an outbound group.
   * 
   * @param request - CloudCreateAgentGroupRequest
   * @returns CloudCreateAgentGroupResponse
   */
  async cloudCreateAgentGroup(request: $_model.CloudCreateAgentGroupRequest): Promise<$_model.CloudCreateAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateAgentGroupWithOptions(request, runtime);
  }

  /**
   * Upload a recording file and create an ASR transform job.
   * 
   * @param request - CloudCreateAsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateAsrResponse
   */
  async cloudCreateAsrWithOptions(request: $_model.CloudCreateAsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateAsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    if (!$dara.isNull(request.recordFile)) {
      query["RecordFile"] = request.recordFile;
    }

    if (!$dara.isNull(request.recordSide)) {
      query["RecordSide"] = request.recordSide;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    if (!$dara.isNull(request.supportMp3)) {
      query["SupportMp3"] = request.supportMp3;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateAsr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateAsrResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateAsrResponse({}));
  }

  /**
   * Upload a recording file and create an ASR transform job.
   * 
   * @param request - CloudCreateAsrRequest
   * @returns CloudCreateAsrResponse
   */
  async cloudCreateAsr(request: $_model.CloudCreateAsrRequest): Promise<$_model.CloudCreateAsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateAsrWithOptions(request, runtime);
  }

  /**
   * Adds a time condition configuration.
   * 
   * @param request - CloudCreateEnterpriseTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateEnterpriseTimeResponse
   */
  async cloudCreateEnterpriseTimeWithOptions(request: $_model.CloudCreateEnterpriseTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateEnterpriseTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dayOfWeek)) {
      query["DayOfWeek"] = request.dayOfWeek;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.fromDay)) {
      query["FromDay"] = request.fromDay;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.toDay)) {
      query["ToDay"] = request.toDay;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateEnterpriseTime",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateEnterpriseTimeResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateEnterpriseTimeResponse({}));
  }

  /**
   * Adds a time condition configuration.
   * 
   * @param request - CloudCreateEnterpriseTimeRequest
   * @returns CloudCreateEnterpriseTimeResponse
   */
  async cloudCreateEnterpriseTime(request: $_model.CloudCreateEnterpriseTimeRequest): Promise<$_model.CloudCreateEnterpriseTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateEnterpriseTimeWithOptions(request, runtime);
  }

  /**
   * Add an extension through this interface.
   * 
   * @param request - CloudCreateExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateExtenResponse
   */
  async cloudCreateExtenWithOptions(request: $_model.CloudCreateExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allow)) {
      query["Allow"] = request.allow;
    }

    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.denoise)) {
      query["Denoise"] = request.denoise;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.exten)) {
      query["Exten"] = request.exten;
    }

    if (!$dara.isNull(request.iadName)) {
      query["IadName"] = request.iadName;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isDirect)) {
      query["IsDirect"] = request.isDirect;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.jitterBuffer)) {
      query["JitterBuffer"] = request.jitterBuffer;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.property)) {
      query["Property"] = request.property;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateExtenResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateExtenResponse({}));
  }

  /**
   * Add an extension through this interface.
   * 
   * @param request - CloudCreateExtenRequest
   * @returns CloudCreateExtenResponse
   */
  async cloudCreateExten(request: $_model.CloudCreateExtenRequest): Promise<$_model.CloudCreateExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateExtenWithOptions(request, runtime);
  }

  /**
   * Add a queue through this interface.
   * 
   * @param tmpReq - CloudCreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateQueueResponse
   */
  async cloudCreateQueueWithOptions(tmpReq: $_model.CloudCreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateQueueResponse> {
    tmpReq.validate();
    let request = new $_model.CloudCreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    if (!$dara.isNull(tmpReq.queueSkills)) {
      request.queueSkillsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueSkills, "QueueSkills", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    if (!$dara.isNull(request.queueSkillsShrink)) {
      query["QueueSkills"] = request.queueSkillsShrink;
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
      action: "CloudCreateQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateQueueResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateQueueResponse({}));
  }

  /**
   * Add a queue through this interface.
   * 
   * @param request - CloudCreateQueueRequest
   * @returns CloudCreateQueueResponse
   */
  async cloudCreateQueue(request: $_model.CloudCreateQueueRequest): Promise<$_model.CloudCreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateQueueWithOptions(request, runtime);
  }

  /**
   * Add skills to a queue.
   * 
   * @param request - CloudCreateQueueSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateQueueSkillResponse
   */
  async cloudCreateQueueSkillWithOptions(request: $_model.CloudCreateQueueSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateQueueSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    if (!$dara.isNull(request.skillLevel)) {
      query["SkillLevel"] = request.skillLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudCreateQueueSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateQueueSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateQueueSkillResponse({}));
  }

  /**
   * Add skills to a queue.
   * 
   * @param request - CloudCreateQueueSkillRequest
   * @returns CloudCreateQueueSkillResponse
   */
  async cloudCreateQueueSkill(request: $_model.CloudCreateQueueSkillRequest): Promise<$_model.CloudCreateQueueSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateQueueSkillWithOptions(request, runtime);
  }

  /**
   * Adds a skill by calling this interface.
   * 
   * @param request - CloudCreateSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudCreateSkillResponse
   */
  async cloudCreateSkillWithOptions(request: $_model.CloudCreateSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudCreateSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "CloudCreateSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudCreateSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudCreateSkillResponse({}));
  }

  /**
   * Adds a skill by calling this interface.
   * 
   * @param request - CloudCreateSkillRequest
   * @returns CloudCreateSkillResponse
   */
  async cloudCreateSkill(request: $_model.CloudCreateSkillRequest): Promise<$_model.CloudCreateSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateSkillWithOptions(request, runtime);
  }

  /**
   * Creates an outbound call job.
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
   * Creates an outbound call job.
   * 
   * @param request - CloudCreateTaskRequest
   * @returns CloudCreateTaskResponse
   */
  async cloudCreateTask(request: $_model.CloudCreateTaskRequest): Promise<$_model.CloudCreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudCreateTaskWithOptions(request, runtime);
  }

  /**
   * Delete an agent based on the agent number.
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
   * Delete an agent based on the agent number.
   * 
   * @param request - CloudDeleteAgentRequest
   * @returns CloudDeleteAgentResponse
   */
  async cloudDeleteAgent(request: $_model.CloudDeleteAgentRequest): Promise<$_model.CloudDeleteAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteAgentWithOptions(request, runtime);
  }

  /**
   * Delete an outbound call group.
   * 
   * @param request - CloudDeleteAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteAgentGroupResponse
   */
  async cloudDeleteAgentGroupWithOptions(request: $_model.CloudDeleteAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
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
      action: "CloudDeleteAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteAgentGroupResponse({}));
  }

  /**
   * Delete an outbound call group.
   * 
   * @param request - CloudDeleteAgentGroupRequest
   * @returns CloudDeleteAgentGroupResponse
   */
  async cloudDeleteAgentGroup(request: $_model.CloudDeleteAgentGroupRequest): Promise<$_model.CloudDeleteAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteAgentGroupWithOptions(request, runtime);
  }

  /**
   * Delete the phone under the agent.
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
   * Delete the phone under the agent.
   * 
   * @param request - CloudDeleteAgentTelRequest
   * @returns CloudDeleteAgentTelResponse
   */
  async cloudDeleteAgentTel(request: $_model.CloudDeleteAgentTelRequest): Promise<$_model.CloudDeleteAgentTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteAgentTelWithOptions(request, runtime);
  }

  /**
   * Delete a time condition setting.
   * 
   * @param request - CloudDeleteEnterpriseTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteEnterpriseTimeResponse
   */
  async cloudDeleteEnterpriseTimeWithOptions(request: $_model.CloudDeleteEnterpriseTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteEnterpriseTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "CloudDeleteEnterpriseTime",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteEnterpriseTimeResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteEnterpriseTimeResponse({}));
  }

  /**
   * Delete a time condition setting.
   * 
   * @param request - CloudDeleteEnterpriseTimeRequest
   * @returns CloudDeleteEnterpriseTimeResponse
   */
  async cloudDeleteEnterpriseTime(request: $_model.CloudDeleteEnterpriseTimeRequest): Promise<$_model.CloudDeleteEnterpriseTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteEnterpriseTimeWithOptions(request, runtime);
  }

  /**
   * Deletes an extension based on the extension number.
   * 
   * @param request - CloudDeleteExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteExtenResponse
   */
  async cloudDeleteExtenWithOptions(request: $_model.CloudDeleteExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.exten)) {
      query["Exten"] = request.exten;
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
      action: "CloudDeleteExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteExtenResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteExtenResponse({}));
  }

  /**
   * Deletes an extension based on the extension number.
   * 
   * @param request - CloudDeleteExtenRequest
   * @returns CloudDeleteExtenResponse
   */
  async cloudDeleteExten(request: $_model.CloudDeleteExtenRequest): Promise<$_model.CloudDeleteExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteExtenWithOptions(request, runtime);
  }

  /**
   * Delete a queue.
   * 
   * @param request - CloudDeleteQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteQueueResponse
   */
  async cloudDeleteQueueWithOptions(request: $_model.CloudDeleteQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudDeleteQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteQueueResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteQueueResponse({}));
  }

  /**
   * Delete a queue.
   * 
   * @param request - CloudDeleteQueueRequest
   * @returns CloudDeleteQueueResponse
   */
  async cloudDeleteQueue(request: $_model.CloudDeleteQueueRequest): Promise<$_model.CloudDeleteQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteQueueWithOptions(request, runtime);
  }

  /**
   * Queue delete skills.
   * 
   * @param request - CloudDeleteQueueSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteQueueSkillResponse
   */
  async cloudDeleteQueueSkillWithOptions(request: $_model.CloudDeleteQueueSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteQueueSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    if (!$dara.isNull(request.skillId)) {
      query["SkillId"] = request.skillId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudDeleteQueueSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteQueueSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteQueueSkillResponse({}));
  }

  /**
   * Queue delete skills.
   * 
   * @param request - CloudDeleteQueueSkillRequest
   * @returns CloudDeleteQueueSkillResponse
   */
  async cloudDeleteQueueSkill(request: $_model.CloudDeleteQueueSkillRequest): Promise<$_model.CloudDeleteQueueSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteQueueSkillWithOptions(request, runtime);
  }

  /**
   * Deletes a skill.
   * 
   * @param request - CloudDeleteSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteSkillResponse
   */
  async cloudDeleteSkillWithOptions(request: $_model.CloudDeleteSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "CloudDeleteSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteSkillResponse({}));
  }

  /**
   * Deletes a skill.
   * 
   * @param request - CloudDeleteSkillRequest
   * @returns CloudDeleteSkillResponse
   */
  async cloudDeleteSkill(request: $_model.CloudDeleteSkillRequest): Promise<$_model.CloudDeleteSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteSkillWithOptions(request, runtime);
  }

  /**
   * Supports deleting predictive outbound call and automatic outbound call jobs. Only jobs in the initial or completed status can be deleted. When a job is deleted, the associated numbers are also deleted.
   * 
   * @param request - CloudDeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteTaskResponse
   */
  async cloudDeleteTaskWithOptions(request: $_model.CloudDeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteTaskResponse> {
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
      action: "CloudDeleteTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteTaskResponse({}));
  }

  /**
   * Supports deleting predictive outbound call and automatic outbound call jobs. Only jobs in the initial or completed status can be deleted. When a job is deleted, the associated numbers are also deleted.
   * 
   * @param request - CloudDeleteTaskRequest
   * @returns CloudDeleteTaskResponse
   */
  async cloudDeleteTask(request: $_model.CloudDeleteTaskRequest): Promise<$_model.CloudDeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteTaskWithOptions(request, runtime);
  }

  /**
   * Deletes the number of a call job through this interface.
   * 
   * @param request - CloudDeleteTaskTelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudDeleteTaskTelResponse
   */
  async cloudDeleteTaskTelWithOptions(request: $_model.CloudDeleteTaskTelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudDeleteTaskTelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
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

    if (!$dara.isNull(request.tels)) {
      query["Tels"] = request.tels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudDeleteTaskTel",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudDeleteTaskTelResponse>(await this.callApi(params, req, runtime), new $_model.CloudDeleteTaskTelResponse({}));
  }

  /**
   * Deletes the number of a call job through this interface.
   * 
   * @param request - CloudDeleteTaskTelRequest
   * @returns CloudDeleteTaskTelResponse
   */
  async cloudDeleteTaskTel(request: $_model.CloudDeleteTaskTelRequest): Promise<$_model.CloudDeleteTaskTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudDeleteTaskTelWithOptions(request, runtime);
  }

  /**
   * Queries the details of an agent.
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
   * Queries the details of an agent.
   * 
   * @param request - CloudGetAgentRequest
   * @returns CloudGetAgentResponse
   */
  async cloudGetAgent(request: $_model.CloudGetAgentRequest): Promise<$_model.CloudGetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAgentWithOptions(request, runtime);
  }

  /**
   * Obtains the real-time status info of agents.
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
   * Obtains the real-time status info of agents.
   * 
   * @param request - CloudGetAgentStatusRequest
   * @returns CloudGetAgentStatusResponse
   */
  async cloudGetAgentStatus(request: $_model.CloudGetAgentStatusRequest): Promise<$_model.CloudGetAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAgentStatusWithOptions(request, runtime);
  }

  /**
   * Query phone number attribution.
   * 
   * @param request - CloudGetAreaCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetAreaCodeResponse
   */
  async cloudGetAreaCodeWithOptions(request: $_model.CloudGetAreaCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetAreaCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.tel)) {
      query["Tel"] = request.tel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetAreaCode",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetAreaCodeResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetAreaCodeResponse({}));
  }

  /**
   * Query phone number attribution.
   * 
   * @param request - CloudGetAreaCodeRequest
   * @returns CloudGetAreaCodeResponse
   */
  async cloudGetAreaCode(request: $_model.CloudGetAreaCodeRequest): Promise<$_model.CloudGetAreaCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAreaCodeWithOptions(request, runtime);
  }

  /**
   * Query ASR job task results and obtain data.
   * 
   * @param request - CloudGetAsrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetAsrResponse
   */
  async cloudGetAsrWithOptions(request: $_model.CloudGetAsrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetAsrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.mainUniqueId)) {
      query["MainUniqueId"] = request.mainUniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetAsr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetAsrResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetAsrResponse({}));
  }

  /**
   * Query ASR job task results and obtain data.
   * 
   * @param request - CloudGetAsrRequest
   * @returns CloudGetAsrResponse
   */
  async cloudGetAsr(request: $_model.CloudGetAsrRequest): Promise<$_model.CloudGetAsrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetAsrWithOptions(request, runtime);
  }

  /**
   * Queries the info about a specified extension.
   * 
   * @param request - CloudGetExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetExtenResponse
   */
  async cloudGetExtenWithOptions(request: $_model.CloudGetExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.exten)) {
      query["Exten"] = request.exten;
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
      action: "CloudGetExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetExtenResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetExtenResponse({}));
  }

  /**
   * Queries the info about a specified extension.
   * 
   * @param request - CloudGetExtenRequest
   * @returns CloudGetExtenResponse
   */
  async cloudGetExten(request: $_model.CloudGetExtenRequest): Promise<$_model.CloudGetExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetExtenWithOptions(request, runtime);
  }

  /**
   * Queries the details of outbound call records of a specified agent based on the unique phone identity.
   * 
   * @param request - CloudGetObCdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetObCdrResponse
   */
  async cloudGetObCdrWithOptions(request: $_model.CloudGetObCdrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetObCdrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetObCdr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetObCdrResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetObCdrResponse({}));
  }

  /**
   * Queries the details of outbound call records of a specified agent based on the unique phone identity.
   * 
   * @param request - CloudGetObCdrRequest
   * @returns CloudGetObCdrResponse
   */
  async cloudGetObCdr(request: $_model.CloudGetObCdrRequest): Promise<$_model.CloudGetObCdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetObCdrWithOptions(request, runtime);
  }

  /**
   * Query queue info.
   * 
   * @param request - CloudGetQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetQueueResponse
   */
  async cloudGetQueueWithOptions(request: $_model.CloudGetQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetQueueResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetQueueResponse({}));
  }

  /**
   * Query queue info.
   * 
   * @param request - CloudGetQueueRequest
   * @returns CloudGetQueueResponse
   */
  async cloudGetQueue(request: $_model.CloudGetQueueRequest): Promise<$_model.CloudGetQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetQueueWithOptions(request, runtime);
  }

  /**
   * Obtains the audition or download URL of a recording based on the recording file name.
   * 
   * @param request - CloudGetRecordUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetRecordUrlResponse
   */
  async cloudGetRecordUrlWithOptions(request: $_model.CloudGetRecordUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetRecordUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.download)) {
      query["Download"] = request.download;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.recordFile)) {
      query["RecordFile"] = request.recordFile;
    }

    if (!$dara.isNull(request.recordFormat)) {
      query["RecordFormat"] = request.recordFormat;
    }

    if (!$dara.isNull(request.recordSide)) {
      query["RecordSide"] = request.recordSide;
    }

    if (!$dara.isNull(request.recordType)) {
      query["RecordType"] = request.recordType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudGetRecordUrl",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetRecordUrlResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetRecordUrlResponse({}));
  }

  /**
   * Obtains the audition or download URL of a recording based on the recording file name.
   * 
   * @param request - CloudGetRecordUrlRequest
   * @returns CloudGetRecordUrlResponse
   */
  async cloudGetRecordUrl(request: $_model.CloudGetRecordUrlRequest): Promise<$_model.CloudGetRecordUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetRecordUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the configuration info of a single job based on the job ID.
   * 
   * @param request - CloudGetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudGetTaskResponse
   */
  async cloudGetTaskWithOptions(request: $_model.CloudGetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudGetTaskResponse> {
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
      action: "CloudGetTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudGetTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudGetTaskResponse({}));
  }

  /**
   * Obtains the configuration info of a single job based on the job ID.
   * 
   * @param request - CloudGetTaskRequest
   * @returns CloudGetTaskResponse
   */
  async cloudGetTask(request: $_model.CloudGetTaskRequest): Promise<$_model.CloudGetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudGetTaskWithOptions(request, runtime);
  }

  /**
   * Imports phone numbers for the outbound call task.
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
   * Imports phone numbers for the outbound call task.
   * 
   * @param request - CloudImportTaskTelRequest
   * @returns CloudImportTaskTelResponse
   */
  async cloudImportTaskTel(request: $_model.CloudImportTaskTelRequest): Promise<$_model.CloudImportTaskTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudImportTaskTelWithOptions(request, runtime);
  }

  /**
   * If the current call is at an await edge zone in voice navigation, this interface can interrupt the wait and execute to the next hop.
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
   * If the current call is at an await edge zone in voice navigation, this interface can interrupt the wait and execute to the next hop.
   * 
   * @param request - CloudInterruptIvrRequest
   * @returns CloudInterruptIvrResponse
   */
  async cloudInterruptIvr(request: $_model.CloudInterruptIvrRequest): Promise<$_model.CloudInterruptIvrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudInterruptIvrWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query outbound groups.
   * 
   * @param request - CloudListAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListAgentGroupResponse
   */
  async cloudListAgentGroupWithOptions(request: $_model.CloudListAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudListAgentGroupResponse({}));
  }

  /**
   * You can call this operation to query outbound groups.
   * 
   * @param request - CloudListAgentGroupRequest
   * @returns CloudListAgentGroupResponse
   */
  async cloudListAgentGroup(request: $_model.CloudListAgentGroupRequest): Promise<$_model.CloudListAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListAgentGroupWithOptions(request, runtime);
  }

  /**
   * Obtain agent phone info by agent number.
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
   * Obtain agent phone info by agent number.
   * 
   * @param request - CloudListAgentTelRequest
   * @returns CloudListAgentTelResponse
   */
  async cloudListAgentTel(request: $_model.CloudListAgentTelRequest): Promise<$_model.CloudListAgentTelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListAgentTelWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the list of agents in an outbound group.
   * 
   * @param request - CloudListAssignedAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListAssignedAgentGroupResponse
   */
  async cloudListAssignedAgentGroupWithOptions(request: $_model.CloudListAssignedAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListAssignedAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cname)) {
      query["Cname"] = request.cname;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
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
      action: "CloudListAssignedAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListAssignedAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudListAssignedAgentGroupResponse({}));
  }

  /**
   * You can call this operation to query the list of agents in an outbound group.
   * 
   * @param request - CloudListAssignedAgentGroupRequest
   * @returns CloudListAssignedAgentGroupResponse
   */
  async cloudListAssignedAgentGroup(request: $_model.CloudListAssignedAgentGroupRequest): Promise<$_model.CloudListAssignedAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListAssignedAgentGroupWithOptions(request, runtime);
  }

  /**
   * Queries user push logs.
   * 
   * @param request - CloudListCurlLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListCurlLogResponse
   */
  async cloudListCurlLogWithOptions(request: $_model.CloudListCurlLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListCurlLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.result)) {
      query["Result"] = request.result;
    }

    if (!$dara.isNull(request.retry)) {
      query["Retry"] = request.retry;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListCurlLog",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListCurlLogResponse>(await this.callApi(params, req, runtime), new $_model.CloudListCurlLogResponse({}));
  }

  /**
   * Queries user push logs.
   * 
   * @param request - CloudListCurlLogRequest
   * @returns CloudListCurlLogResponse
   */
  async cloudListCurlLog(request: $_model.CloudListCurlLogRequest): Promise<$_model.CloudListCurlLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListCurlLogWithOptions(request, runtime);
  }

  /**
   * Queries the list of time condition settings.
   * 
   * @param request - CloudListEnterpriseTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListEnterpriseTimeResponse
   */
  async cloudListEnterpriseTimeWithOptions(request: $_model.CloudListEnterpriseTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListEnterpriseTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListEnterpriseTime",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListEnterpriseTimeResponse>(await this.callApi(params, req, runtime), new $_model.CloudListEnterpriseTimeResponse({}));
  }

  /**
   * Queries the list of time condition settings.
   * 
   * @param request - CloudListEnterpriseTimeRequest
   * @returns CloudListEnterpriseTimeResponse
   */
  async cloudListEnterpriseTime(request: $_model.CloudListEnterpriseTimeRequest): Promise<$_model.CloudListEnterpriseTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListEnterpriseTimeWithOptions(request, runtime);
  }

  /**
   * Queries the extension info list.
   * 
   * @param request - CloudListExtenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListExtenResponse
   */
  async cloudListExtenWithOptions(request: $_model.CloudListExtenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListExtenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.areaCode)) {
      query["AreaCode"] = request.areaCode;
    }

    if (!$dara.isNull(request.callPower)) {
      query["CallPower"] = request.callPower;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.exten)) {
      query["Exten"] = request.exten;
    }

    if (!$dara.isNull(request.ibRecord)) {
      query["IbRecord"] = request.ibRecord;
    }

    if (!$dara.isNull(request.isBind)) {
      query["IsBind"] = request.isBind;
    }

    if (!$dara.isNull(request.isOb)) {
      query["IsOb"] = request.isOb;
    }

    if (!$dara.isNull(request.jitterBuffer)) {
      query["JitterBuffer"] = request.jitterBuffer;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.obRecord)) {
      query["ObRecord"] = request.obRecord;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListExten",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListExtenResponse>(await this.callApi(params, req, runtime), new $_model.CloudListExtenResponse({}));
  }

  /**
   * Queries the extension info list.
   * 
   * @param request - CloudListExtenRequest
   * @returns CloudListExtenResponse
   */
  async cloudListExten(request: $_model.CloudListExtenRequest): Promise<$_model.CloudListExtenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListExtenWithOptions(request, runtime);
  }

  /**
   * Queries the list of online agents.
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
   * Queries the list of online agents.
   * 
   * @param request - CloudListFreeAgentRequest
   * @returns CloudListFreeAgentResponse
   */
  async cloudListFreeAgent(request: $_model.CloudListFreeAgentRequest): Promise<$_model.CloudListFreeAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListFreeAgentWithOptions(request, runtime);
  }

  /**
   * Queries the list of online agent info.
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
   * Queries the list of online agent info.
   * 
   * @param request - CloudListOnlineAgentRequest
   * @returns CloudListOnlineAgentResponse
   */
  async cloudListOnlineAgent(request: $_model.CloudListOnlineAgentRequest): Promise<$_model.CloudListOnlineAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListOnlineAgentWithOptions(request, runtime);
  }

  /**
   * Queries the queue info list.
   * 
   * @param request - CloudListQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListQueueResponse
   */
  async cloudListQueueWithOptions(request: $_model.CloudListQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
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

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListQueue",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListQueueResponse>(await this.callApi(params, req, runtime), new $_model.CloudListQueueResponse({}));
  }

  /**
   * Queries the queue info list.
   * 
   * @param request - CloudListQueueRequest
   * @returns CloudListQueueResponse
   */
  async cloudListQueue(request: $_model.CloudListQueueRequest): Promise<$_model.CloudListQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListQueueWithOptions(request, runtime);
  }

  /**
   * Obtains queue skill info.
   * 
   * @param request - CloudListQueueSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListQueueSkillResponse
   */
  async cloudListQueueSkillWithOptions(request: $_model.CloudListQueueSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListQueueSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudListQueueSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListQueueSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudListQueueSkillResponse({}));
  }

  /**
   * Obtains queue skill info.
   * 
   * @param request - CloudListQueueSkillRequest
   * @returns CloudListQueueSkillResponse
   */
  async cloudListQueueSkill(request: $_model.CloudListQueueSkillRequest): Promise<$_model.CloudListQueueSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListQueueSkillWithOptions(request, runtime);
  }

  /**
   * Queries the skill info list.
   * 
   * @param request - CloudListSkillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListSkillResponse
   */
  async cloudListSkillWithOptions(request: $_model.CloudListSkillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListSkillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
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

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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
      action: "CloudListSkill",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListSkillResponse>(await this.callApi(params, req, runtime), new $_model.CloudListSkillResponse({}));
  }

  /**
   * Queries the skill info list.
   * 
   * @param request - CloudListSkillRequest
   * @returns CloudListSkillResponse
   */
  async cloudListSkill(request: $_model.CloudListSkillRequest): Promise<$_model.CloudListSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListSkillWithOptions(request, runtime);
  }

  /**
   * Query the call job batch list info.
   * 
   * @param request - CloudListTaskFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudListTaskFileResponse
   */
  async cloudListTaskFileWithOptions(request: $_model.CloudListTaskFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudListTaskFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
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
      action: "CloudListTaskFile",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudListTaskFileResponse>(await this.callApi(params, req, runtime), new $_model.CloudListTaskFileResponse({}));
  }

  /**
   * Query the call job batch list info.
   * 
   * @param request - CloudListTaskFileRequest
   * @returns CloudListTaskFileResponse
   */
  async cloudListTaskFile(request: $_model.CloudListTaskFileRequest): Promise<$_model.CloudListTaskFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudListTaskFileWithOptions(request, runtime);
  }

  /**
   * Call job monitoring.
   * 
   * @param request - CloudMonitorTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudMonitorTaskResponse
   */
  async cloudMonitorTaskWithOptions(request: $_model.CloudMonitorTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudMonitorTaskResponse> {
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
      action: "CloudMonitorTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudMonitorTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudMonitorTaskResponse({}));
  }

  /**
   * Call job monitoring.
   * 
   * @param request - CloudMonitorTaskRequest
   * @returns CloudMonitorTaskResponse
   */
  async cloudMonitorTask(request: $_model.CloudMonitorTaskRequest): Promise<$_model.CloudMonitorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudMonitorTaskWithOptions(request, runtime);
  }

  /**
   * Obtains preview outbound caller report data.
   * 
   * @param request - CloudOutboundObClidReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudOutboundObClidReportResponse
   */
  async cloudOutboundObClidReportWithOptions(request: $_model.CloudOutboundObClidReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudOutboundObClidReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.areaCodes)) {
      query["AreaCodes"] = request.areaCodes;
    }

    if (!$dara.isNull(request.endHour)) {
      query["EndHour"] = request.endHour;
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

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startHour)) {
      query["StartHour"] = request.startHour;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisticMethod)) {
      query["StatisticMethod"] = request.statisticMethod;
    }

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudOutboundObClidReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudOutboundObClidReportResponse>(await this.callApi(params, req, runtime), new $_model.CloudOutboundObClidReportResponse({}));
  }

  /**
   * Obtains preview outbound caller report data.
   * 
   * @param request - CloudOutboundObClidReportRequest
   * @returns CloudOutboundObClidReportResponse
   */
  async cloudOutboundObClidReport(request: $_model.CloudOutboundObClidReportRequest): Promise<$_model.CloudOutboundObClidReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudOutboundObClidReportWithOptions(request, runtime);
  }

  /**
   * Obtains a preview outbound report.
   * 
   * @param request - CloudOutboundPreviewObReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudOutboundPreviewObReportResponse
   */
  async cloudOutboundPreviewObReportWithOptions(request: $_model.CloudOutboundPreviewObReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudOutboundPreviewObReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cnos)) {
      query["Cnos"] = request.cnos;
    }

    if (!$dara.isNull(request.endHour)) {
      query["EndHour"] = request.endHour;
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

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    if (!$dara.isNull(request.startHour)) {
      query["StartHour"] = request.startHour;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisticMethod)) {
      query["StatisticMethod"] = request.statisticMethod;
    }

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudOutboundPreviewObReport",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudOutboundPreviewObReportResponse>(await this.callApi(params, req, runtime), new $_model.CloudOutboundPreviewObReportResponse({}));
  }

  /**
   * Obtains a preview outbound report.
   * 
   * @param request - CloudOutboundPreviewObReportRequest
   * @returns CloudOutboundPreviewObReportResponse
   */
  async cloudOutboundPreviewObReport(request: $_model.CloudOutboundPreviewObReportRequest): Promise<$_model.CloudOutboundPreviewObReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudOutboundPreviewObReportWithOptions(request, runtime);
  }

  /**
   * Suspends a call job through this interface.
   * 
   * @param request - CloudPauseTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudPauseTaskResponse
   */
  async cloudPauseTaskWithOptions(request: $_model.CloudPauseTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudPauseTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pauseDuration)) {
      query["PauseDuration"] = request.pauseDuration;
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
      action: "CloudPauseTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudPauseTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudPauseTaskResponse({}));
  }

  /**
   * Suspends a call job through this interface.
   * 
   * @param request - CloudPauseTaskRequest
   * @returns CloudPauseTaskResponse
   */
  async cloudPauseTask(request: $_model.CloudPauseTaskRequest): Promise<$_model.CloudPauseTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudPauseTaskWithOptions(request, runtime);
  }

  /**
   * When the agent is online, make a call through this interface.
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
   * When the agent is online, make a call through this interface.
   * 
   * @param request - CloudPreviewoutcallRequest
   * @returns CloudPreviewoutcallResponse
   */
  async cloudPreviewoutcall(request: $_model.CloudPreviewoutcallRequest): Promise<$_model.CloudPreviewoutcallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudPreviewoutcallWithOptions(request, runtime);
  }

  /**
   * Queries the list of agent details.
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
   * Queries the list of agent details.
   * 
   * @param request - CloudQueryAgentRequest
   * @returns CloudQueryAgentResponse
   */
  async cloudQueryAgent(request: $_model.CloudQueryAgentRequest): Promise<$_model.CloudQueryAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentWithOptions(request, runtime);
  }

  /**
   * Get all agent numbers and parameter messages.
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
   * Get all agent numbers and parameter messages.
   * 
   * @param request - CloudQueryAgentCnoAndNameRequest
   * @returns CloudQueryAgentCnoAndNameResponse
   */
  async cloudQueryAgentCnoAndName(request: $_model.CloudQueryAgentCnoAndNameRequest): Promise<$_model.CloudQueryAgentCnoAndNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentCnoAndNameWithOptions(request, runtime);
  }

  /**
   * Queries the info about the outbound group to which the agent belongs.
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
   * Queries the info about the outbound group to which the agent belongs.
   * 
   * @param request - CloudQueryAgentGroupRequest
   * @returns CloudQueryAgentGroupResponse
   */
  async cloudQueryAgentGroup(request: $_model.CloudQueryAgentGroupRequest): Promise<$_model.CloudQueryAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentGroupWithOptions(request, runtime);
  }

  /**
   * Query agent skills by agent number.
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
   * Query agent skills by agent number.
   * 
   * @param request - CloudQueryAgentSkillRequest
   * @returns CloudQueryAgentSkillResponse
   */
  async cloudQueryAgentSkill(request: $_model.CloudQueryAgentSkillRequest): Promise<$_model.CloudQueryAgentSkillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryAgentSkillWithOptions(request, runtime);
  }

  /**
   * Query incoming call records based on specified conditions.
   * 
   * @param request - CloudQueryIbCdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryIbCdrResponse
   */
  async cloudQueryIbCdrWithOptions(request: $_model.CloudQueryIbCdrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryIbCdrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calleeNumber)) {
      query["CalleeNumber"] = request.calleeNumber;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.hotline)) {
      query["Hotline"] = request.hotline;
    }

    if (!$dara.isNull(request.joinQueueCode)) {
      query["JoinQueueCode"] = request.joinQueueCode;
    }

    if (!$dara.isNull(request.leaveQueueCode)) {
      query["LeaveQueueCode"] = request.leaveQueueCode;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.qno)) {
      query["Qno"] = request.qno;
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

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.userFieldValue)) {
      query["UserFieldValue"] = request.userFieldValue;
    }

    if (!$dara.isNull(request.userFieldkey)) {
      query["UserFieldkey"] = request.userFieldkey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryIbCdr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryIbCdrResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryIbCdrResponse({}));
  }

  /**
   * Query incoming call records based on specified conditions.
   * 
   * @param request - CloudQueryIbCdrRequest
   * @returns CloudQueryIbCdrResponse
   */
  async cloudQueryIbCdr(request: $_model.CloudQueryIbCdrRequest): Promise<$_model.CloudQueryIbCdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryIbCdrWithOptions(request, runtime);
  }

  /**
   * Query agent outbound call records based on conditions.
   * 
   * @param request - CloudQueryObCdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryObCdrResponse
   */
  async cloudQueryObCdrWithOptions(request: $_model.CloudQueryObCdrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryObCdrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.agentNumber)) {
      query["AgentNumber"] = request.agentNumber;
    }

    if (!$dara.isNull(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clid)) {
      query["Clid"] = request.clid;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.downGrade)) {
      query["DownGrade"] = request.downGrade;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.isRealAnswer)) {
      query["IsRealAnswer"] = request.isRealAnswer;
    }

    if (!$dara.isNull(request.leftDisplayNumber)) {
      query["LeftDisplayNumber"] = request.leftDisplayNumber;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.returnCount)) {
      query["ReturnCount"] = request.returnCount;
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

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.userFieldValue)) {
      query["UserFieldValue"] = request.userFieldValue;
    }

    if (!$dara.isNull(request.userFieldkey)) {
      query["UserFieldkey"] = request.userFieldkey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryObCdr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryObCdrResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryObCdrResponse({}));
  }

  /**
   * Query agent outbound call records based on conditions.
   * 
   * @param request - CloudQueryObCdrRequest
   * @returns CloudQueryObCdrResponse
   */
  async cloudQueryObCdr(request: $_model.CloudQueryObCdrRequest): Promise<$_model.CloudQueryObCdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryObCdrWithOptions(request, runtime);
  }

  /**
   * Query the call record info of predictive outbound calls.
   * 
   * @param request - CloudQueryPredictiveCallCdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryPredictiveCallCdrResponse
   */
  async cloudQueryPredictiveCallCdrWithOptions(request: $_model.CloudQueryPredictiveCallCdrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryPredictiveCallCdrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clid)) {
      query["Clid"] = request.clid;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.displayNumber)) {
      query["DisplayNumber"] = request.displayNumber;
    }

    if (!$dara.isNull(request.downGrade)) {
      query["DownGrade"] = request.downGrade;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.isRealAnswer)) {
      query["IsRealAnswer"] = request.isRealAnswer;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
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

    if (!$dara.isNull(request.taskFileId)) {
      query["TaskFileId"] = request.taskFileId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.userFieldValue)) {
      query["UserFieldValue"] = request.userFieldValue;
    }

    if (!$dara.isNull(request.userFieldkey)) {
      query["UserFieldkey"] = request.userFieldkey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryPredictiveCallCdr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryPredictiveCallCdrResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryPredictiveCallCdrResponse({}));
  }

  /**
   * Query the call record info of predictive outbound calls.
   * 
   * @param request - CloudQueryPredictiveCallCdrRequest
   * @returns CloudQueryPredictiveCallCdrResponse
   */
  async cloudQueryPredictiveCallCdr(request: $_model.CloudQueryPredictiveCallCdrRequest): Promise<$_model.CloudQueryPredictiveCallCdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryPredictiveCallCdrWithOptions(request, runtime);
  }

  /**
   * Obtain the rasr info based on the uniqueId.
   * 
   * @param request - CloudQueryRasrEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryRasrEventResponse
   */
  async cloudQueryRasrEventWithOptions(request: $_model.CloudQueryRasrEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryRasrEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryRasrEvent",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryRasrEventResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryRasrEventResponse({}));
  }

  /**
   * Obtain the rasr info based on the uniqueId.
   * 
   * @param request - CloudQueryRasrEventRequest
   * @returns CloudQueryRasrEventResponse
   */
  async cloudQueryRasrEvent(request: $_model.CloudQueryRasrEventRequest): Promise<$_model.CloudQueryRasrEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryRasrEventWithOptions(request, runtime);
  }

  /**
   * Queries call jobs. Supports conditional query.
   * 
   * @param request - CloudQueryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryTaskResponse
   */
  async cloudQueryTaskWithOptions(request: $_model.CloudQueryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoStart)) {
      query["AutoStart"] = request.autoStart;
    }

    if (!$dara.isNull(request.autoStop)) {
      query["AutoStop"] = request.autoStop;
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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

    if (!$dara.isNull(request.timeType)) {
      query["TimeType"] = request.timeType;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryTask",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryTaskResponse({}));
  }

  /**
   * Queries call jobs. Supports conditional query.
   * 
   * @param request - CloudQueryTaskRequest
   * @returns CloudQueryTaskResponse
   */
  async cloudQueryTask(request: $_model.CloudQueryTaskRequest): Promise<$_model.CloudQueryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryTaskWithOptions(request, runtime);
  }

  /**
   * Query webCall call record info through this interface.
   * 
   * @param request - CloudQueryWebcallCdrRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudQueryWebcallCdrResponse
   */
  async cloudQueryWebcallCdrWithOptions(request: $_model.CloudQueryWebcallCdrRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudQueryWebcallCdrResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calleeClid)) {
      query["CalleeClid"] = request.calleeClid;
    }

    if (!$dara.isNull(request.calleeDisplayNumber)) {
      query["CalleeDisplayNumber"] = request.calleeDisplayNumber;
    }

    if (!$dara.isNull(request.calleeNumber)) {
      query["CalleeNumber"] = request.calleeNumber;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.clid)) {
      query["Clid"] = request.clid;
    }

    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.customerNumber)) {
      query["CustomerNumber"] = request.customerNumber;
    }

    if (!$dara.isNull(request.displayNumber)) {
      query["DisplayNumber"] = request.displayNumber;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
    }

    if (!$dara.isNull(request.isRealAnswer)) {
      query["IsRealAnswer"] = request.isRealAnswer;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.province)) {
      query["Province"] = request.province;
    }

    if (!$dara.isNull(request.requestUniqueId)) {
      query["RequestUniqueId"] = request.requestUniqueId;
    }

    if (!$dara.isNull(request.returnCount)) {
      query["ReturnCount"] = request.returnCount;
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

    if (!$dara.isNull(request.timeRangeType)) {
      query["TimeRangeType"] = request.timeRangeType;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.userFieldValue)) {
      query["UserFieldValue"] = request.userFieldValue;
    }

    if (!$dara.isNull(request.userFieldkey)) {
      query["UserFieldkey"] = request.userFieldkey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloudQueryWebcallCdr",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudQueryWebcallCdrResponse>(await this.callApi(params, req, runtime), new $_model.CloudQueryWebcallCdrResponse({}));
  }

  /**
   * Query webCall call record info through this interface.
   * 
   * @param request - CloudQueryWebcallCdrRequest
   * @returns CloudQueryWebcallCdrResponse
   */
  async cloudQueryWebcallCdr(request: $_model.CloudQueryWebcallCdrRequest): Promise<$_model.CloudQueryWebcallCdrResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudQueryWebcallCdrWithOptions(request, runtime);
  }

  /**
   * Starts an outbound call task.
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
   * Starts an outbound call task.
   * 
   * @param request - CloudStartTaskRequest
   * @returns CloudStartTaskResponse
   */
  async cloudStartTask(request: $_model.CloudStartTaskRequest): Promise<$_model.CloudStartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudStartTaskWithOptions(request, runtime);
  }

  /**
   * Purges the attachment between an outbound call group and agents.
   * 
   * @param request - CloudUnassignAgentGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloudUnassignAgentGroupResponse
   */
  async cloudUnassignAgentGroupWithOptions(request: $_model.CloudUnassignAgentGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloudUnassignAgentGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cno)) {
      query["Cno"] = request.cno;
    }

    if (!$dara.isNull(request.enterpriseId)) {
      query["EnterpriseId"] = request.enterpriseId;
    }

    if (!$dara.isNull(request.gno)) {
      query["Gno"] = request.gno;
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
      action: "CloudUnassignAgentGroup",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloudUnassignAgentGroupResponse>(await this.callApi(params, req, runtime), new $_model.CloudUnassignAgentGroupResponse({}));
  }

  /**
   * Purges the attachment between an outbound call group and agents.
   * 
   * @param request - CloudUnassignAgentGroupRequest
   * @returns CloudUnassignAgentGroupResponse
   */
  async cloudUnassignAgentGroup(request: $_model.CloudUnassignAgentGroupRequest): Promise<$_model.CloudUnassignAgentGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudUnassignAgentGroupWithOptions(request, runtime);
  }

  /**
   * Update agent basic info.
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
   * Update agent basic info.
   * 
   * @param request - CloudUpdateAgentRequest
   * @returns CloudUpdateAgentResponse
   */
  async cloudUpdateAgent(request: $_model.CloudUpdateAgentRequest): Promise<$_model.CloudUpdateAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudUpdateAgentWithOptions(request, runtime);
  }

  /**
   * Modifies the basic information of an outbound call job.
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
   * Modifies the basic information of an outbound call job.
   * 
   * @param request - CloudUpdateTaskRequest
   * @returns CloudUpdateTaskResponse
   */
  async cloudUpdateTask(request: $_model.CloudUpdateTaskRequest): Promise<$_model.CloudUpdateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloudUpdateTaskWithOptions(request, runtime);
  }

  /**
   * Through this interface, a third-party platform can send a call request to a hosted call center. The system calls the customer first and then the agent, and connects both parties.
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
   * Through this interface, a third-party platform can send a call request to a hosted call center. The system calls the customer first and then the agent, and connects both parties.
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
