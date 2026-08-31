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
    this._endpoint = this.getEndpoint("thirdswaicall", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 发起实时外呼
   * 
   * @param request - CreateCallOutboundInstantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallOutboundInstantResponse
   */
  async createCallOutboundInstantWithOptions(request: $_model.CreateCallOutboundInstantRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallOutboundInstantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calledNumber)) {
      body["CalledNumber"] = request.calledNumber;
    }

    if (!$dara.isNull(request.callerNumber)) {
      body["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.callerUacAccountId)) {
      body["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.currentWorkspaceId)) {
      body["CurrentWorkspaceId"] = request.currentWorkspaceId;
    }

    if (!$dara.isNull(request.customerLineCode)) {
      body["CustomerLineCode"] = request.customerLineCode;
    }

    if (!$dara.isNull(request.customerName)) {
      body["CustomerName"] = request.customerName;
    }

    if (!$dara.isNull(request.encryptCall)) {
      body["EncryptCall"] = request.encryptCall;
    }

    if (!$dara.isNull(request.promptVariables)) {
      body["PromptVariables"] = request.promptVariables;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallOutboundInstant",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallOutboundInstantResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallOutboundInstantResponse({}));
  }

  /**
   * 发起实时外呼
   * 
   * @param request - CreateCallOutboundInstantRequest
   * @returns CreateCallOutboundInstantResponse
   */
  async createCallOutboundInstant(request: $_model.CreateCallOutboundInstantRequest): Promise<$_model.CreateCallOutboundInstantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallOutboundInstantWithOptions(request, runtime);
  }

  /**
   * 查询当前任务的并发数
   * 
   * @param request - QueryTaskConcurrencyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskConcurrencyResponse
   */
  async queryTaskConcurrencyWithOptions(request: $_model.QueryTaskConcurrencyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskConcurrencyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationCode)) {
      body["ApplicationCode"] = request.applicationCode;
    }

    if (!$dara.isNull(request.callerUacAccountId)) {
      body["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.currentWorkspaceId)) {
      body["CurrentWorkspaceId"] = request.currentWorkspaceId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskConcurrency",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskConcurrencyResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskConcurrencyResponse({}));
  }

  /**
   * 查询当前任务的并发数
   * 
   * @param request - QueryTaskConcurrencyRequest
   * @returns QueryTaskConcurrencyResponse
   */
  async queryTaskConcurrency(request: $_model.QueryTaskConcurrencyRequest): Promise<$_model.QueryTaskConcurrencyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskConcurrencyWithOptions(request, runtime);
  }

  /**
   * 外呼任务通话列表查询
   * 
   * @param tmpReq - ReadOutboundTaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadOutboundTaskCallListResponse
   */
  async readOutboundTaskCallListWithOptions(tmpReq: $_model.ReadOutboundTaskCallListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReadOutboundTaskCallListResponse> {
    tmpReq.validate();
    let request = new $_model.ReadOutboundTaskCallListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.displayStatusList)) {
      request.displayStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.displayStatusList, "DisplayStatusList", "json");
    }

    if (!$dara.isNull(tmpReq.durationRangeList)) {
      request.durationRangeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.durationRangeList, "DurationRangeList", "json");
    }

    if (!$dara.isNull(tmpReq.labelTags)) {
      request.labelTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelTags, "LabelTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callEndTimeBegin)) {
      body["CallEndTimeBegin"] = request.callEndTimeBegin;
    }

    if (!$dara.isNull(request.callEndTimeEnd)) {
      body["CallEndTimeEnd"] = request.callEndTimeEnd;
    }

    if (!$dara.isNull(request.callStartTimeBegin)) {
      body["CallStartTimeBegin"] = request.callStartTimeBegin;
    }

    if (!$dara.isNull(request.callStartTimeEnd)) {
      body["CallStartTimeEnd"] = request.callStartTimeEnd;
    }

    if (!$dara.isNull(request.callerUacAccountId)) {
      body["CallerUacAccountId"] = request.callerUacAccountId;
    }

    if (!$dara.isNull(request.current)) {
      body["Current"] = request.current;
    }

    if (!$dara.isNull(request.currentWorkspaceId)) {
      body["CurrentWorkspaceId"] = request.currentWorkspaceId;
    }

    if (!$dara.isNull(request.customerNameOrPhone)) {
      body["CustomerNameOrPhone"] = request.customerNameOrPhone;
    }

    if (!$dara.isNull(request.displayStatusListShrink)) {
      body["DisplayStatusList"] = request.displayStatusListShrink;
    }

    if (!$dara.isNull(request.durationRangeListShrink)) {
      body["DurationRangeList"] = request.durationRangeListShrink;
    }

    if (!$dara.isNull(request.labelTagsShrink)) {
      body["LabelTags"] = request.labelTagsShrink;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadOutboundTaskCallList",
      version: "2025-11-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadOutboundTaskCallListResponse>(await this.callApi(params, req, runtime), new $_model.ReadOutboundTaskCallListResponse({}));
  }

  /**
   * 外呼任务通话列表查询
   * 
   * @param request - ReadOutboundTaskCallListRequest
   * @returns ReadOutboundTaskCallListResponse
   */
  async readOutboundTaskCallList(request: $_model.ReadOutboundTaskCallListRequest): Promise<$_model.ReadOutboundTaskCallListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.readOutboundTaskCallListWithOptions(request, runtime);
  }

}
