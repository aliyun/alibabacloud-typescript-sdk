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
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加黑名单接口
   * 
   * @param tmpReq - AddBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBlacklistResponse
   */
  async addBlacklistWithOptions(tmpReq: $_model.AddBlacklistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBlacklistResponse> {
    tmpReq.validate();
    let request = new $_model.AddBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.expiredDay)) {
      query["ExpiredDay"] = request.expiredDay;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
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
      action: "AddBlacklist",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBlacklistResponse>(await this.callApi(params, req, runtime), new $_model.AddBlacklistResponse({}));
  }

  /**
   * 添加黑名单接口
   * 
   * @param request - AddBlacklistRequest
   * @returns AddBlacklistResponse
   */
  async addBlacklist(request: $_model.AddBlacklistRequest): Promise<$_model.AddBlacklistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBlacklistWithOptions(request, runtime);
  }

  /**
   * 创建任务接口
   * 
   * @param tmpReq - AddTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTaskResponse
   */
  async addTaskWithOptions(tmpReq: $_model.AddTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTaskResponse> {
    tmpReq.validate();
    let request = new $_model.AddTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callTimeList)) {
      request.callTimeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTimeList, "CallTimeList", "json");
    }

    if (!$dara.isNull(tmpReq.repeatReason)) {
      request.repeatReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatReason, "RepeatReason", "json");
    }

    if (!$dara.isNull(tmpReq.repeatTimes)) {
      request.repeatTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatTimes, "RepeatTimes", "json");
    }

    if (!$dara.isNull(tmpReq.sendSmsPlan)) {
      request.sendSmsPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendSmsPlan, "SendSmsPlan", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callTimeListShrink)) {
      query["CallTimeList"] = request.callTimeListShrink;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.flashSmsTemplateId)) {
      query["FlashSmsTemplateId"] = request.flashSmsTemplateId;
    }

    if (!$dara.isNull(request.flashSmsType)) {
      query["FlashSmsType"] = request.flashSmsType;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playSleepVal)) {
      query["PlaySleepVal"] = request.playSleepVal;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!$dara.isNull(request.recordPath)) {
      query["RecordPath"] = request.recordPath;
    }

    if (!$dara.isNull(request.repeatCount)) {
      query["RepeatCount"] = request.repeatCount;
    }

    if (!$dara.isNull(request.repeatInterval)) {
      query["RepeatInterval"] = request.repeatInterval;
    }

    if (!$dara.isNull(request.repeatReasonShrink)) {
      query["RepeatReason"] = request.repeatReasonShrink;
    }

    if (!$dara.isNull(request.repeatTimesShrink)) {
      query["RepeatTimes"] = request.repeatTimesShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendSmsPlanShrink)) {
      query["SendSmsPlan"] = request.sendSmsPlanShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTask",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTaskResponse>(await this.callApi(params, req, runtime), new $_model.AddTaskResponse({}));
  }

  /**
   * 创建任务接口
   * 
   * @param request - AddTaskRequest
   * @returns AddTaskResponse
   */
  async addTask(request: $_model.AddTaskRequest): Promise<$_model.AddTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTaskWithOptions(request, runtime);
  }

  /**
   * 坐席取消号码外呼
   * 
   * @param tmpReq - AgentCancelCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgentCancelCallResponse
   */
  async agentCancelCallWithOptions(tmpReq: $_model.AgentCancelCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AgentCancelCallResponse> {
    tmpReq.validate();
    let request = new $_model.AgentCancelCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AgentCancelCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AgentCancelCallResponse>(await this.callApi(params, req, runtime), new $_model.AgentCancelCallResponse({}));
  }

  /**
   * 坐席取消号码外呼
   * 
   * @param request - AgentCancelCallRequest
   * @returns AgentCancelCallResponse
   */
  async agentCancelCall(request: $_model.AgentCancelCallRequest): Promise<$_model.AgentCancelCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.agentCancelCallWithOptions(request, runtime);
  }

  /**
   * 坐席任务恢复号码
   * 
   * @param tmpReq - AgentRecoverCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgentRecoverCallResponse
   */
  async agentRecoverCallWithOptions(tmpReq: $_model.AgentRecoverCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AgentRecoverCallResponse> {
    tmpReq.validate();
    let request = new $_model.AgentRecoverCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!$dara.isNull(request.beginImportTime)) {
      query["BeginImportTime"] = request.beginImportTime;
    }

    if (!$dara.isNull(request.endImportTime)) {
      query["EndImportTime"] = request.endImportTime;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AgentRecoverCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AgentRecoverCallResponse>(await this.callApi(params, req, runtime), new $_model.AgentRecoverCallResponse({}));
  }

  /**
   * 坐席任务恢复号码
   * 
   * @param request - AgentRecoverCallRequest
   * @returns AgentRecoverCallResponse
   */
  async agentRecoverCall(request: $_model.AgentRecoverCallRequest): Promise<$_model.AgentRecoverCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.agentRecoverCallWithOptions(request, runtime);
  }

  /**
   * AI批量任务查询号码状态接口
   * 
   * @param tmpReq - DetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailsResponse
   */
  async detailsWithOptions(tmpReq: $_model.DetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetailsResponse> {
    tmpReq.validate();
    let request = new $_model.DetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.numberStatus)) {
      query["NumberStatus"] = request.numberStatus;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Details",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetailsResponse>(await this.callApi(params, req, runtime), new $_model.DetailsResponse({}));
  }

  /**
   * AI批量任务查询号码状态接口
   * 
   * @param request - DetailsRequest
   * @returns DetailsResponse
   */
  async details(request: $_model.DetailsRequest): Promise<$_model.DetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detailsWithOptions(request, runtime);
  }

  /**
   * 编辑任务接口
   * 
   * @param tmpReq - EditTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditTaskResponse
   */
  async editTaskWithOptions(tmpReq: $_model.EditTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditTaskResponse> {
    tmpReq.validate();
    let request = new $_model.EditTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.callTimeList)) {
      request.callTimeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTimeList, "CallTimeList", "json");
    }

    if (!$dara.isNull(tmpReq.repeatReason)) {
      request.repeatReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatReason, "RepeatReason", "json");
    }

    if (!$dara.isNull(tmpReq.repeatTimes)) {
      request.repeatTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatTimes, "RepeatTimes", "json");
    }

    if (!$dara.isNull(tmpReq.sendSmsPlan)) {
      request.sendSmsPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendSmsPlan, "SendSmsPlan", "json");
    }

    let query = { };
    if (!$dara.isNull(request.callTimeListShrink)) {
      query["CallTimeList"] = request.callTimeListShrink;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.flashSmsTemplateId)) {
      query["FlashSmsTemplateId"] = request.flashSmsTemplateId;
    }

    if (!$dara.isNull(request.flashSmsType)) {
      query["FlashSmsType"] = request.flashSmsType;
    }

    if (!$dara.isNull(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.playSleepVal)) {
      query["PlaySleepVal"] = request.playSleepVal;
    }

    if (!$dara.isNull(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!$dara.isNull(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!$dara.isNull(request.recordPath)) {
      query["RecordPath"] = request.recordPath;
    }

    if (!$dara.isNull(request.repeatCount)) {
      query["RepeatCount"] = request.repeatCount;
    }

    if (!$dara.isNull(request.repeatInterval)) {
      query["RepeatInterval"] = request.repeatInterval;
    }

    if (!$dara.isNull(request.repeatReasonShrink)) {
      query["RepeatReason"] = request.repeatReasonShrink;
    }

    if (!$dara.isNull(request.repeatTimesShrink)) {
      query["RepeatTimes"] = request.repeatTimesShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sendSmsPlanShrink)) {
      query["SendSmsPlan"] = request.sendSmsPlanShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditTask",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditTaskResponse>(await this.callApi(params, req, runtime), new $_model.EditTaskResponse({}));
  }

  /**
   * 编辑任务接口
   * 
   * @param request - EditTaskRequest
   * @returns EditTaskResponse
   */
  async editTask(request: $_model.EditTaskRequest): Promise<$_model.EditTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editTaskWithOptions(request, runtime);
  }

  /**
   * 导入号码
   * 
   * @param tmpReq - ImportNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportNumberResponse
   */
  async importNumberWithOptions(tmpReq: $_model.ImportNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportNumberResponse> {
    tmpReq.validate();
    let request = new $_model.ImportNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customers)) {
      request.customersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customers, "Customers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customersShrink)) {
      query["Customers"] = request.customersShrink;
    }

    if (!$dara.isNull(request.failReturn)) {
      query["FailReturn"] = request.failReturn;
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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportNumber",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportNumberResponse>(await this.callApi(params, req, runtime), new $_model.ImportNumberResponse({}));
  }

  /**
   * 导入号码
   * 
   * @param request - ImportNumberRequest
   * @returns ImportNumberResponse
   */
  async importNumber(request: $_model.ImportNumberRequest): Promise<$_model.ImportNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importNumberWithOptions(request, runtime);
  }

  /**
   * 导入号码
   * 
   * @param tmpReq - ImportNumberV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportNumberV2Response
   */
  async importNumberV2WithOptions(tmpReq: $_model.ImportNumberV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.ImportNumberV2Response> {
    tmpReq.validate();
    let request = new $_model.ImportNumberV2ShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customers)) {
      request.customersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customers, "Customers", "json");
    }

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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customersShrink)) {
      body["Customers"] = request.customersShrink;
    }

    if (!$dara.isNull(request.failReturn)) {
      body["FailReturn"] = request.failReturn;
    }

    if (!$dara.isNull(request.outId)) {
      body["OutId"] = request.outId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportNumberV2",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportNumberV2Response>(await this.callApi(params, req, runtime), new $_model.ImportNumberV2Response({}));
  }

  /**
   * 导入号码
   * 
   * @param request - ImportNumberV2Request
   * @returns ImportNumberV2Response
   */
  async importNumberV2(request: $_model.ImportNumberV2Request): Promise<$_model.ImportNumberV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importNumberV2WithOptions(request, runtime);
  }

  /**
   * 查询企业黑名单
   * 
   * @param tmpReq - PageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageResponse
   */
  async pageWithOptions(tmpReq: $_model.PageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageResponse> {
    tmpReq.validate();
    let request = new $_model.PageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Page",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageResponse>(await this.callApi(params, req, runtime), new $_model.PageResponse({}));
  }

  /**
   * 查询企业黑名单
   * 
   * @param request - PageRequest
   * @returns PageResponse
   */
  async page(request: $_model.PageRequest): Promise<$_model.PageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageWithOptions(request, runtime);
  }

  /**
   * 短信模板创建
   * 
   * @param request - SmsTemplateCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsTemplateCreateResponse
   */
  async smsTemplateCreateWithOptions(request: $_model.SmsTemplateCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmsTemplateCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
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

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!$dara.isNull(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmsTemplateCreate",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmsTemplateCreateResponse>(await this.callApi(params, req, runtime), new $_model.SmsTemplateCreateResponse({}));
  }

  /**
   * 短信模板创建
   * 
   * @param request - SmsTemplateCreateRequest
   * @returns SmsTemplateCreateResponse
   */
  async smsTemplateCreate(request: $_model.SmsTemplateCreateRequest): Promise<$_model.SmsTemplateCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsTemplateCreateWithOptions(request, runtime);
  }

  /**
   * 短信模板列表查询
   * 
   * @param request - SmsTemplatePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsTemplatePageListResponse
   */
  async smsTemplatePageListWithOptions(request: $_model.SmsTemplatePageListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SmsTemplatePageListResponse> {
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

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!$dara.isNull(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SmsTemplatePageList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SmsTemplatePageListResponse>(await this.callApi(params, req, runtime), new $_model.SmsTemplatePageListResponse({}));
  }

  /**
   * 短信模板列表查询
   * 
   * @param request - SmsTemplatePageListRequest
   * @returns SmsTemplatePageListResponse
   */
  async smsTemplatePageList(request: $_model.SmsTemplatePageListRequest): Promise<$_model.SmsTemplatePageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.smsTemplatePageListWithOptions(request, runtime);
  }

  /**
   * 查询聊天记录接口
   * 
   * @param request - TaskCallChatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallChatsResponse
   */
  async taskCallChatsWithOptions(request: $_model.TaskCallChatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskCallChatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

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

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskCallChats",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskCallChatsResponse>(await this.callApi(params, req, runtime), new $_model.TaskCallChatsResponse({}));
  }

  /**
   * 查询聊天记录接口
   * 
   * @param request - TaskCallChatsRequest
   * @returns TaskCallChatsResponse
   */
  async taskCallChats(request: $_model.TaskCallChatsRequest): Promise<$_model.TaskCallChatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskCallChatsWithOptions(request, runtime);
  }

  /**
   * 获取任务外呼情况接口
   * 
   * @param request - TaskCallInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallInfoResponse
   */
  async taskCallInfoWithOptions(request: $_model.TaskCallInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskCallInfoResponse> {
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
      action: "TaskCallInfo",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskCallInfoResponse>(await this.callApi(params, req, runtime), new $_model.TaskCallInfoResponse({}));
  }

  /**
   * 获取任务外呼情况接口
   * 
   * @param request - TaskCallInfoRequest
   * @returns TaskCallInfoResponse
   */
  async taskCallInfo(request: $_model.TaskCallInfoRequest): Promise<$_model.TaskCallInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskCallInfoWithOptions(request, runtime);
  }

  /**
   * AI批量任务查询外呼记录接口
   * 
   * @param tmpReq - TaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallListResponse
   */
  async taskCallListWithOptions(tmpReq: $_model.TaskCallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskCallListResponse> {
    tmpReq.validate();
    let request = new $_model.TaskCallListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.intentTags)) {
      request.intentTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentTags, "IntentTags", "json");
    }

    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!$dara.isNull(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!$dara.isNull(request.endCallDate)) {
      query["EndCallDate"] = request.endCallDate;
    }

    if (!$dara.isNull(request.intentTagsShrink)) {
      query["IntentTags"] = request.intentTagsShrink;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
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
      action: "TaskCallList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskCallListResponse>(await this.callApi(params, req, runtime), new $_model.TaskCallListResponse({}));
  }

  /**
   * AI批量任务查询外呼记录接口
   * 
   * @param request - TaskCallListRequest
   * @returns TaskCallListResponse
   */
  async taskCallList(request: $_model.TaskCallListRequest): Promise<$_model.TaskCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskCallListWithOptions(request, runtime);
  }

  /**
   * 批量任务取消号码外呼
   * 
   * @param tmpReq - TaskCancelCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCancelCallResponse
   */
  async taskCancelCallWithOptions(tmpReq: $_model.TaskCancelCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskCancelCallResponse> {
    tmpReq.validate();
    let request = new $_model.TaskCancelCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskCancelCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskCancelCallResponse>(await this.callApi(params, req, runtime), new $_model.TaskCancelCallResponse({}));
  }

  /**
   * 批量任务取消号码外呼
   * 
   * @param request - TaskCancelCallRequest
   * @returns TaskCancelCallResponse
   */
  async taskCancelCall(request: $_model.TaskCancelCallRequest): Promise<$_model.TaskCancelCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskCancelCallWithOptions(request, runtime);
  }

  /**
   * 查询任务列表接口
   * 
   * @param request - TaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskListResponse
   */
  async taskListWithOptions(request: $_model.TaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.lastCallTime)) {
      query["LastCallTime"] = request.lastCallTime;
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
      action: "TaskList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskListResponse>(await this.callApi(params, req, runtime), new $_model.TaskListResponse({}));
  }

  /**
   * 查询任务列表接口
   * 
   * @param request - TaskListRequest
   * @returns TaskListResponse
   */
  async taskList(request: $_model.TaskListRequest): Promise<$_model.TaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskListWithOptions(request, runtime);
  }

  /**
   * 批量任务恢复号码
   * 
   * @param tmpReq - TaskRecoverCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskRecoverCallResponse
   */
  async taskRecoverCallWithOptions(tmpReq: $_model.TaskRecoverCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskRecoverCallResponse> {
    tmpReq.validate();
    let request = new $_model.TaskRecoverCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.beginImportTime)) {
      query["BeginImportTime"] = request.beginImportTime;
    }

    if (!$dara.isNull(request.endImportTime)) {
      query["EndImportTime"] = request.endImportTime;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
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

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskRecoverCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskRecoverCallResponse>(await this.callApi(params, req, runtime), new $_model.TaskRecoverCallResponse({}));
  }

  /**
   * 批量任务恢复号码
   * 
   * @param request - TaskRecoverCallRequest
   * @returns TaskRecoverCallResponse
   */
  async taskRecoverCall(request: $_model.TaskRecoverCallRequest): Promise<$_model.TaskRecoverCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskRecoverCallWithOptions(request, runtime);
  }

  /**
   * 话术模板列表查询接口
   * 
   * @param request - TemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TemplateListResponse
   */
  async templateListWithOptions(request: $_model.TemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TemplateListResponse> {
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

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TemplateList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TemplateListResponse>(await this.callApi(params, req, runtime), new $_model.TemplateListResponse({}));
  }

  /**
   * 话术模板列表查询接口
   * 
   * @param request - TemplateListRequest
   * @returns TemplateListResponse
   */
  async templateList(request: $_model.TemplateListRequest): Promise<$_model.TemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.templateListWithOptions(request, runtime);
  }

  /**
   * 修改坐席状态
   * 
   * @param request - UpdateAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentStatusResponse
   */
  async updateAgentStatusWithOptions(request: $_model.UpdateAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentStatus)) {
      query["AgentStatus"] = request.agentStatus;
    }

    if (!$dara.isNull(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
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
      action: "UpdateAgentStatus",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAgentStatusResponse({}));
  }

  /**
   * 修改坐席状态
   * 
   * @param request - UpdateAgentStatusRequest
   * @returns UpdateAgentStatusResponse
   */
  async updateAgentStatus(request: $_model.UpdateAgentStatusRequest): Promise<$_model.UpdateAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAgentStatusWithOptions(request, runtime);
  }

  /**
   * 更新当天导入的号码
   * 
   * @param tmpReq - UpdateTaskCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskCustomerResponse
   */
  async updateTaskCustomerWithOptions(tmpReq: $_model.UpdateTaskCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskCustomerResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskCustomerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customers)) {
      request.customersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customers, "Customers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.customersShrink)) {
      query["Customers"] = request.customersShrink;
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
      action: "UpdateTaskCustomer",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskCustomerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskCustomerResponse({}));
  }

  /**
   * 更新当天导入的号码
   * 
   * @param request - UpdateTaskCustomerRequest
   * @returns UpdateTaskCustomerResponse
   */
  async updateTaskCustomer(request: $_model.UpdateTaskCustomerRequest): Promise<$_model.UpdateTaskCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskCustomerWithOptions(request, runtime);
  }

}
