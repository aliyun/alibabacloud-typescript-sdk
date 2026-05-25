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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emas-appmonitor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * CreateTlogTask
   * 
   * @param request - CreateTlogTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTlogTaskResponse
   */
  async createTlogTaskWithOptions(request: $_model.CreateTlogTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTlogTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliYunCurrentPk)) {
      body["AliYunCurrentPk"] = request.aliYunCurrentPk;
    }

    if (!$dara.isNull(request.aliYunMainPk)) {
      body["AliYunMainPk"] = request.aliYunMainPk;
    }

    if (!$dara.isNull(request.aliYunName)) {
      body["AliYunName"] = request.aliYunName;
    }

    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.collectionNums)) {
      body["CollectionNums"] = request.collectionNums;
    }

    if (!$dara.isNull(request.days)) {
      body["Days"] = request.days;
    }

    if (!$dara.isNull(request.deviceJson)) {
      body["DeviceJson"] = request.deviceJson;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.errorType)) {
      body["ErrorType"] = request.errorType;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.notifySettingJson)) {
      body["NotifySettingJson"] = request.notifySettingJson;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTlogTask",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTlogTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTlogTaskResponse({}));
  }

  /**
   * CreateTlogTask
   * 
   * @param request - CreateTlogTaskRequest
   * @returns CreateTlogTaskResponse
   */
  async createTlogTask(request: $_model.CreateTlogTaskRequest): Promise<$_model.CreateTlogTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTlogTaskWithOptions(request, runtime);
  }

  /**
   * 获取错误事件详情
   * 
   * @param request - GetErrorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorResponse
   */
  async getErrorWithOptions(request: $_model.GetErrorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.clientTime)) {
      body["ClientTime"] = request.clientTime;
    }

    if (!$dara.isNull(request.did)) {
      body["Did"] = request.did;
    }

    if (!$dara.isNull(request.digestHash)) {
      body["DigestHash"] = request.digestHash;
    }

    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetError",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErrorResponse>(await this.callApi(params, req, runtime), new $_model.GetErrorResponse({}));
  }

  /**
   * 获取错误事件详情
   * 
   * @param request - GetErrorRequest
   * @returns GetErrorResponse
   */
  async getError(request: $_model.GetErrorRequest): Promise<$_model.GetErrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErrorWithOptions(request, runtime);
  }

  /**
   * 获取某一聚合错误下所有的错误事件列表
   * 
   * @param tmpReq - GetErrorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorsResponse
   */
  async getErrorsWithOptions(tmpReq: $_model.GetErrorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErrorsResponse> {
    tmpReq.validate();
    let request = new $_model.GetErrorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.digestHash)) {
      body["DigestHash"] = request.digestHash;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    if (!$dara.isNull(request.utdid)) {
      body["Utdid"] = request.utdid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErrors",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErrorsResponse>(await this.callApi(params, req, runtime), new $_model.GetErrorsResponse({}));
  }

  /**
   * 获取某一聚合错误下所有的错误事件列表
   * 
   * @param request - GetErrorsRequest
   * @returns GetErrorsResponse
   */
  async getErrors(request: $_model.GetErrorsRequest): Promise<$_model.GetErrorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErrorsWithOptions(request, runtime);
  }

  /**
   * 获取聚合错误详情
   * 
   * @param tmpReq - GetIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIssueResponse
   */
  async getIssueWithOptions(tmpReq: $_model.GetIssueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIssueResponse> {
    tmpReq.validate();
    let request = new $_model.GetIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.digestHash)) {
      body["DigestHash"] = request.digestHash;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIssue",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIssueResponse>(await this.callApi(params, req, runtime), new $_model.GetIssueResponse({}));
  }

  /**
   * 获取聚合错误详情
   * 
   * @param request - GetIssueRequest
   * @returns GetIssueResponse
   */
  async getIssue(request: $_model.GetIssueRequest): Promise<$_model.GetIssueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIssueWithOptions(request, runtime);
  }

  /**
   * 获取聚合错误列表
   * 
   * @param tmpReq - GetIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIssuesResponse
   */
  async getIssuesWithOptions(tmpReq: $_model.GetIssuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIssuesResponse> {
    tmpReq.validate();
    let request = new $_model.GetIssuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIssues",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIssuesResponse>(await this.callApi(params, req, runtime), new $_model.GetIssuesResponse({}));
  }

  /**
   * 获取聚合错误列表
   * 
   * @param request - GetIssuesRequest
   * @returns GetIssuesResponse
   */
  async getIssues(request: $_model.GetIssuesRequest): Promise<$_model.GetIssuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIssuesWithOptions(request, runtime);
  }

  /**
   * 获取符号表文件列表
   * 
   * @param request - GetSymbolicFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSymbolicFilesResponse
   */
  async getSymbolicFilesWithOptions(request: $_model.GetSymbolicFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSymbolicFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exportStatus)) {
      body["ExportStatus"] = request.exportStatus;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSymbolicFiles",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSymbolicFilesResponse>(await this.callApi(params, req, runtime), new $_model.GetSymbolicFilesResponse({}));
  }

  /**
   * 获取符号表文件列表
   * 
   * @param request - GetSymbolicFilesRequest
   * @returns GetSymbolicFilesResponse
   */
  async getSymbolicFiles(request: $_model.GetSymbolicFilesRequest): Promise<$_model.GetSymbolicFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSymbolicFilesWithOptions(request, runtime);
  }

  /**
   * GetTlogCollectList
   * 
   * @param request - GetTlogCollectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTlogCollectListResponse
   */
  async getTlogCollectListWithOptions(request: $_model.GetTlogCollectListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTlogCollectListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.author)) {
      body["Author"] = request.author;
    }

    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.createBeginDate)) {
      body["CreateBeginDate"] = request.createBeginDate;
    }

    if (!$dara.isNull(request.createEndDate)) {
      body["CreateEndDate"] = request.createEndDate;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.positiveComment)) {
      body["PositiveComment"] = request.positiveComment;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.updateBeginDate)) {
      body["UpdateBeginDate"] = request.updateBeginDate;
    }

    if (!$dara.isNull(request.updateEndDate)) {
      body["UpdateEndDate"] = request.updateEndDate;
    }

    if (!$dara.isNull(request.userNick)) {
      body["UserNick"] = request.userNick;
    }

    if (!$dara.isNull(request.utdid)) {
      body["Utdid"] = request.utdid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTlogCollectList",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTlogCollectListResponse>(await this.callApi(params, req, runtime), new $_model.GetTlogCollectListResponse({}));
  }

  /**
   * GetTlogCollectList
   * 
   * @param request - GetTlogCollectListRequest
   * @returns GetTlogCollectListResponse
   */
  async getTlogCollectList(request: $_model.GetTlogCollectListRequest): Promise<$_model.GetTlogCollectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTlogCollectListWithOptions(request, runtime);
  }

  /**
   * TlogDeviceInfo
   * 
   * @param request - GetTlogDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTlogDeviceInfoResponse
   */
  async getTlogDeviceInfoWithOptions(request: $_model.GetTlogDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTlogDeviceInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTlogDeviceInfo",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTlogDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTlogDeviceInfoResponse({}));
  }

  /**
   * TlogDeviceInfo
   * 
   * @param request - GetTlogDeviceInfoRequest
   * @returns GetTlogDeviceInfoResponse
   */
  async getTlogDeviceInfo(request: $_model.GetTlogDeviceInfoRequest): Promise<$_model.GetTlogDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTlogDeviceInfoWithOptions(request, runtime);
  }

  /**
   * GetTlogDeviceList
   * 
   * @param request - GetTlogDeviceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTlogDeviceListResponse
   */
  async getTlogDeviceListWithOptions(request: $_model.GetTlogDeviceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTlogDeviceListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.brand)) {
      body["Brand"] = request.brand;
    }

    if (!$dara.isNull(request.city)) {
      body["City"] = request.city;
    }

    if (!$dara.isNull(request.createBeginDate)) {
      body["CreateBeginDate"] = request.createBeginDate;
    }

    if (!$dara.isNull(request.createEndDate)) {
      body["CreateEndDate"] = request.createEndDate;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.osVersion)) {
      body["OsVersion"] = request.osVersion;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.updateBeginDate)) {
      body["UpdateBeginDate"] = request.updateBeginDate;
    }

    if (!$dara.isNull(request.updateEndDate)) {
      body["UpdateEndDate"] = request.updateEndDate;
    }

    if (!$dara.isNull(request.userNick)) {
      body["UserNick"] = request.userNick;
    }

    if (!$dara.isNull(request.utdid)) {
      body["Utdid"] = request.utdid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTlogDeviceList",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTlogDeviceListResponse>(await this.callApi(params, req, runtime), new $_model.GetTlogDeviceListResponse({}));
  }

  /**
   * GetTlogDeviceList
   * 
   * @param request - GetTlogDeviceListRequest
   * @returns GetTlogDeviceListResponse
   */
  async getTlogDeviceList(request: $_model.GetTlogDeviceListRequest): Promise<$_model.GetTlogDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTlogDeviceListWithOptions(request, runtime);
  }

  /**
   * GetTlogTaskCollections
   * 
   * @param request - GetTlogTaskCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTlogTaskCollectionsResponse
   */
  async getTlogTaskCollectionsWithOptions(request: $_model.GetTlogTaskCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTlogTaskCollectionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTlogTaskCollections",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTlogTaskCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.GetTlogTaskCollectionsResponse({}));
  }

  /**
   * GetTlogTaskCollections
   * 
   * @param request - GetTlogTaskCollectionsRequest
   * @returns GetTlogTaskCollectionsResponse
   */
  async getTlogTaskCollections(request: $_model.GetTlogTaskCollectionsRequest): Promise<$_model.GetTlogTaskCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTlogTaskCollectionsWithOptions(request, runtime);
  }

  /**
   * GetTlogTaskInfo
   * 
   * @param request - GetTlogTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTlogTaskInfoResponse
   */
  async getTlogTaskInfoWithOptions(request: $_model.GetTlogTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTlogTaskInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTlogTaskInfo",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTlogTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTlogTaskInfoResponse({}));
  }

  /**
   * GetTlogTaskInfo
   * 
   * @param request - GetTlogTaskInfoRequest
   * @returns GetTlogTaskInfoResponse
   */
  async getTlogTaskInfo(request: $_model.GetTlogTaskInfoRequest): Promise<$_model.GetTlogTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTlogTaskInfoWithOptions(request, runtime);
  }

  /**
   * RequestUploadToken
   * 
   * @param request - RequestUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestUploadTokenResponse
   */
  async requestUploadTokenWithOptions(request: $_model.RequestUploadTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequestUploadTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequestUploadToken",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequestUploadTokenResponse>(await this.callApi(params, req, runtime), new $_model.RequestUploadTokenResponse({}));
  }

  /**
   * RequestUploadToken
   * 
   * @param request - RequestUploadTokenRequest
   * @returns RequestUploadTokenResponse
   */
  async requestUploadToken(request: $_model.RequestUploadTokenRequest): Promise<$_model.RequestUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestUploadTokenWithOptions(request, runtime);
  }

  /**
   * SearchTlog
   * 
   * @param request - SearchTlogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTlogResponse
   */
  async searchTlogWithOptions(request: $_model.SearchTlogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTlogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.deviceId)) {
      body["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.levelJson)) {
      body["LevelJson"] = request.levelJson;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTlog",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTlogResponse>(await this.callApi(params, req, runtime), new $_model.SearchTlogResponse({}));
  }

  /**
   * SearchTlog
   * 
   * @param request - SearchTlogRequest
   * @returns SearchTlogResponse
   */
  async searchTlog(request: $_model.SearchTlogRequest): Promise<$_model.SearchTlogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTlogWithOptions(request, runtime);
  }

  /**
   * SubmitSymbolic
   * 
   * @param request - SubmitSymbolicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSymbolicResponse
   */
  async submitSymbolicWithOptions(request: $_model.SubmitSymbolicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSymbolicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSymbolic",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSymbolicResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSymbolicResponse({}));
  }

  /**
   * SubmitSymbolic
   * 
   * @param request - SubmitSymbolicRequest
   * @returns SubmitSymbolicResponse
   */
  async submitSymbolic(request: $_model.SubmitSymbolicRequest): Promise<$_model.SubmitSymbolicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSymbolicWithOptions(request, runtime);
  }

}
