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
   * Adds the association relationship between a virtual number and real numbers in batches.
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
   * Adds the association relationship between a virtual number and real numbers in batches.
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
   * Initiates an outbound robocall task.
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
   * Initiates an outbound robocall task.
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
   * Creates a task for sending voice notifications or voice verification codes.
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
   * Creates a task for sending voice notifications or voice verification codes.
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
   * DegradeVideoFile
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
   * DegradeVideoFile
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
   * GetCallMediaType
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
   * GetCallMediaType
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
   * GetTemporaryFileUrl
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
   * GetTemporaryFileUrl
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
   * Queries task information.
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
   * Queries task information.
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
   * Queries the information about a task based on the task ID.
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
   * Queries the information about a task based on the task ID.
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
   * PauseVideoFile
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
   * PauseVideoFile
   * 
   * @param request - PauseVideoFileRequest
   * @returns PauseVideoFileResponse
   */
  async pauseVideoFile(request: $_model.PauseVideoFileRequest): Promise<$_model.PauseVideoFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseVideoFileWithOptions(request, runtime);
  }

  /**
   * PlayVideoFile
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
   * PlayVideoFile
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
   * Queries a list of robots.
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
   * Queries a list of robots.
   * 
   * @param request - QueryRobotInfoListRequest
   * @returns QueryRobotInfoListResponse
   */
  async queryRobotInfoList(request: $_model.QueryRobotInfoListRequest): Promise<$_model.QueryRobotInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRobotInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the call details of a called number in a robocall task.
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
   * Queries the call details of a called number in a robocall task.
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
   * QueryVideoPlayProgress
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
   * QueryVideoPlayProgress
   * 
   * @param request - QueryVideoPlayProgressRequest
   * @returns QueryVideoPlayProgressResponse
   */
  async queryVideoPlayProgress(request: $_model.QueryVideoPlayProgressRequest): Promise<$_model.QueryVideoPlayProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVideoPlayProgressWithOptions(request, runtime);
  }

  /**
   * Queries a list of virtual numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryVirtualNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryVirtualNumberResponse
   */
  async queryVirtualNumberWithOptions(request: $_model.QueryVirtualNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryVirtualNumberResponse> {
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
      action: "QueryVirtualNumber",
      version: "2017-05-25",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryVirtualNumberResponse>(await this.callApi(params, req, runtime), new $_model.QueryVirtualNumberResponse({}));
  }

  /**
   * Queries a list of virtual numbers.
   * 
   * @remarks
   * ### QPS limits
   * You can call this operation up to 100 times per second per account.
   * 
   * @param request - QueryVirtualNumberRequest
   * @returns QueryVirtualNumberResponse
   */
  async queryVirtualNumber(request: $_model.QueryVirtualNumberRequest): Promise<$_model.QueryVirtualNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryVirtualNumberWithOptions(request, runtime);
  }

  /**
   * Queries a list of associations between virtual numbers and real numbers.
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
   * Queries a list of associations between virtual numbers and real numbers.
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
   * ResumeVideoFile
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
   * ResumeVideoFile
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
   * 语音视频单呼接口
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
   * 语音视频单呼接口
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
   * SkipVideoFile
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
   * SkipVideoFile
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
   * Submits a China 400 number for registration.
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
   * Submits a China 400 number for registration.
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
   * UpgradeVideoFile
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
   * UpgradeVideoFile
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
