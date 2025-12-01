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
    this._endpoint = this.getEndpoint("mssp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Confirm Receipt of Security Assessment Report
   * 
   * @param request - ConfirmDjbhReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmDjbhReportResponse
   */
  async confirmDjbhReportWithOptions(request: $_model.ConfirmDjbhReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmDjbhReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmDjbhReport",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmDjbhReportResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmDjbhReportResponse({}));
  }

  /**
   * Confirm Receipt of Security Assessment Report
   * 
   * @param request - ConfirmDjbhReportRequest
   * @returns ConfirmDjbhReportResponse
   */
  async confirmDjbhReport(request: $_model.ConfirmDjbhReportRequest): Promise<$_model.ConfirmDjbhReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmDjbhReportWithOptions(request, runtime);
  }

  /**
   * Create Service-Linked Role
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleResponse({}));
  }

  /**
   * Create Service-Linked Role
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrderWithOptions(request: $_model.CreateServiceWorkOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceWorkOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.durationDay)) {
      body["DurationDay"] = request.durationDay;
    }

    if (!$dara.isNull(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!$dara.isNull(request.isMilestone)) {
      body["IsMilestone"] = request.isMilestone;
    }

    if (!$dara.isNull(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!$dara.isNull(request.notifyDay)) {
      body["NotifyDay"] = request.notifyDay;
    }

    if (!$dara.isNull(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!$dara.isNull(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!$dara.isNull(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!$dara.isNull(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!$dara.isNull(request.workOrderSource)) {
      body["WorkOrderSource"] = request.workOrderSource;
    }

    if (!$dara.isNull(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    if (!$dara.isNull(request.workOrderType)) {
      body["WorkOrderType"] = request.workOrderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceWorkOrderResponse({}));
  }

  /**
   * Create Service Work Order
   * 
   * @param request - CreateServiceWorkOrderRequest
   * @returns CreateServiceWorkOrderResponse
   */
  async createServiceWorkOrder(request: $_model.CreateServiceWorkOrderRequest): Promise<$_model.CreateServiceWorkOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * Delete Security Assessment Report
   * 
   * @param request - DeleteDjbhReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDjbhReportResponse
   */
  async deleteDjbhReportWithOptions(request: $_model.DeleteDjbhReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDjbhReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDjbhReport",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDjbhReportResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDjbhReportResponse({}));
  }

  /**
   * Delete Security Assessment Report
   * 
   * @param request - DeleteDjbhReportRequest
   * @returns DeleteDjbhReportResponse
   */
  async deleteDjbhReport(request: $_model.DeleteDjbhReportRequest): Promise<$_model.DeleteDjbhReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDjbhReportWithOptions(request, runtime);
  }

  /**
   * Query Service-Linked Role
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRoleWithOptions(request: $_model.DescribeServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLinkedRole",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceLinkedRoleResponse({}));
  }

  /**
   * Query Service-Linked Role
   * 
   * @param request - DescribeServiceLinkedRoleRequest
   * @returns DescribeServiceLinkedRoleResponse
   */
  async describeServiceLinkedRole(request: $_model.DescribeServiceLinkedRoleRequest): Promise<$_model.DescribeServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrderWithOptions(request: $_model.DisposeServiceWorkOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisposeServiceWorkOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attachmentName)) {
      body["AttachmentName"] = request.attachmentName;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.forwardOwnerId)) {
      body["ForwardOwnerId"] = request.forwardOwnerId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.isAttachment)) {
      body["IsAttachment"] = request.isAttachment;
    }

    if (!$dara.isNull(request.isWorkOrderNotify)) {
      body["IsWorkOrderNotify"] = request.isWorkOrderNotify;
    }

    if (!$dara.isNull(request.notifyId)) {
      body["NotifyId"] = request.notifyId;
    }

    if (!$dara.isNull(request.operateRemark)) {
      body["OperateRemark"] = request.operateRemark;
    }

    if (!$dara.isNull(request.operateType)) {
      body["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.upgradeOwnerId)) {
      body["UpgradeOwnerId"] = request.upgradeOwnerId;
    }

    if (!$dara.isNull(request.workOrderDetail)) {
      body["WorkOrderDetail"] = request.workOrderDetail;
    }

    if (!$dara.isNull(request.workOrderName)) {
      body["WorkOrderName"] = request.workOrderName;
    }

    if (!$dara.isNull(request.workOrderStatus)) {
      body["WorkOrderStatus"] = request.workOrderStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisposeServiceWorkOrder",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisposeServiceWorkOrderResponse>(await this.callApi(params, req, runtime), new $_model.DisposeServiceWorkOrderResponse({}));
  }

  /**
   * Process Service Work Order
   * 
   * @param request - DisposeServiceWorkOrderRequest
   * @returns DisposeServiceWorkOrderResponse
   */
  async disposeServiceWorkOrder(request: $_model.DisposeServiceWorkOrderRequest): Promise<$_model.DisposeServiceWorkOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disposeServiceWorkOrderWithOptions(request, runtime);
  }

  /**
   * Handle Alert Work Order
   * 
   * @param tmpReq - DisposeWorkTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTaskWithOptions(tmpReq: $_model.DisposeWorkTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisposeWorkTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DisposeWorkTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workTaskAnalysisResults)) {
      request.workTaskAnalysisResultsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workTaskAnalysisResults, "WorkTaskAnalysisResults", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.optRemark)) {
      body["OptRemark"] = request.optRemark;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskIds)) {
      body["TaskIds"] = request.taskIds;
    }

    if (!$dara.isNull(request.workTaskAnalysisResultsShrink)) {
      body["WorkTaskAnalysisResults"] = request.workTaskAnalysisResultsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisposeWorkTask",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisposeWorkTaskResponse>(await this.callApi(params, req, runtime), new $_model.DisposeWorkTaskResponse({}));
  }

  /**
   * Handle Alert Work Order
   * 
   * @param request - DisposeWorkTaskRequest
   * @returns DisposeWorkTaskResponse
   */
  async disposeWorkTask(request: $_model.DisposeWorkTaskRequest): Promise<$_model.DisposeWorkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disposeWorkTaskWithOptions(request, runtime);
  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailByIdWithOptions(request: $_model.GetAlarmDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlarmDetailByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlarmDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlarmDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetAlarmDetailByIdResponse({}));
  }

  /**
   * Query Alarm Details
   * 
   * @param request - GetAlarmDetailByIdRequest
   * @returns GetAlarmDetailByIdResponse
   */
  async getAlarmDetailById(request: $_model.GetAlarmDetailByIdRequest): Promise<$_model.GetAlarmDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlarmDetailByIdWithOptions(request, runtime);
  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDealWithOptions(request: $_model.GetAttackedAssetDealRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAttackedAssetDealResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAttackedAssetDeal",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAttackedAssetDealResponse>(await this.callApi(params, req, runtime), new $_model.GetAttackedAssetDealResponse({}));
  }

  /**
   * Trend of Attacked Asset Convergence
   * 
   * @param request - GetAttackedAssetDealRequest
   * @returns GetAttackedAssetDealResponse
   */
  async getAttackedAssetDeal(request: $_model.GetAttackedAssetDealRequest): Promise<$_model.GetAttackedAssetDealResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAttackedAssetDealWithOptions(request, runtime);
  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummaryWithOptions(request: $_model.GetBaselineSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaselineSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaselineSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaselineSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetBaselineSummaryResponse({}));
  }

  /**
   * Compliance Risk Convergence Trend
   * 
   * @param request - GetBaselineSummaryRequest
   * @returns GetBaselineSummaryResponse
   */
  async getBaselineSummary(request: $_model.GetBaselineSummaryRequest): Promise<$_model.GetBaselineSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineSummaryWithOptions(request, runtime);
  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScoreWithOptions(request: $_model.GetConsoleScoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsoleScoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsoleScore",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsoleScoreResponse>(await this.callApi(params, req, runtime), new $_model.GetConsoleScoreResponse({}));
  }

  /**
   * Get Console Score
   * 
   * @param request - GetConsoleScoreRequest
   * @returns GetConsoleScoreResponse
   */
  async getConsoleScore(request: $_model.GetConsoleScoreRequest): Promise<$_model.GetConsoleScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConsoleScoreWithOptions(request, runtime);
  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetailByIdResponse
   */
  async getDetailByIdWithOptions(request: $_model.GetDetailByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetailByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetailById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetailByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetDetailByIdResponse({}));
  }

  /**
   * Query Risk Details
   * 
   * @param request - GetDetailByIdRequest
   * @returns GetDetailByIdResponse
   */
  async getDetailById(request: $_model.GetDetailByIdRequest): Promise<$_model.GetDetailByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDetailByIdWithOptions(request, runtime);
  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrlWithOptions(request: $_model.GetDocumentDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentDownloadUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentDownloadUrl",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentDownloadUrlResponse({}));
  }

  /**
   * Single Service Report Download
   * 
   * @param request - GetDocumentDownloadUrlRequest
   * @returns GetDocumentDownloadUrlResponse
   */
  async getDocumentDownloadUrl(request: $_model.GetDocumentDownloadUrlRequest): Promise<$_model.GetDocumentDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentPageResponse
   */
  async getDocumentPageWithOptions(request: $_model.GetDocumentPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deliveredBy)) {
      body["DeliveredBy"] = request.deliveredBy;
    }

    if (!$dara.isNull(request.documentName)) {
      body["DocumentName"] = request.documentName;
    }

    if (!$dara.isNull(request.documentType)) {
      body["DocumentType"] = request.documentType;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentPageResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentPageResponse({}));
  }

  /**
   * Service Report Query
   * 
   * @param request - GetDocumentPageRequest
   * @returns GetDocumentPageResponse
   */
  async getDocumentPage(request: $_model.GetDocumentPageRequest): Promise<$_model.GetDocumentPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentPageWithOptions(request, runtime);
  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummaryWithOptions(request: $_model.GetDocumentSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportType)) {
      body["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentSummaryResponse({}));
  }

  /**
   * Service Report Home Page Statistics Acquisition
   * 
   * @param request - GetDocumentSummaryRequest
   * @returns GetDocumentSummaryResponse
   */
  async getDocumentSummary(request: $_model.GetDocumentSummaryRequest): Promise<$_model.GetDocumentSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDocumentSummaryWithOptions(request, runtime);
  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocumentWithOptions(request: $_model.GetRecentDocumentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecentDocumentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecentDocument",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecentDocumentResponse>(await this.callApi(params, req, runtime), new $_model.GetRecentDocumentResponse({}));
  }

  /**
   * Get Recently Uploaded Service Reports
   * 
   * @param request - GetRecentDocumentRequest
   * @returns GetRecentDocumentResponse
   */
  async getRecentDocument(request: $_model.GetRecentDocumentRequest): Promise<$_model.GetRecentDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecentDocumentWithOptions(request, runtime);
  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCoverWithOptions(request: $_model.GetSafetyCoverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSafetyCoverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSafetyCover",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSafetyCoverResponse>(await this.callApi(params, req, runtime), new $_model.GetSafetyCoverResponse({}));
  }

  /**
   * Get Safety Coverage
   * 
   * @param request - GetSafetyCoverRequest
   * @returns GetSafetyCoverResponse
   */
  async getSafetyCover(request: $_model.GetSafetyCoverRequest): Promise<$_model.GetSafetyCoverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSafetyCoverWithOptions(request, runtime);
  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSowListResponse
   */
  async getSowListWithOptions(request: $_model.GetSowListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSowListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSowList",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSowListResponse>(await this.callApi(params, req, runtime), new $_model.GetSowListResponse({}));
  }

  /**
   * Get SOW List
   * 
   * @param request - GetSowListRequest
   * @returns GetSowListResponse
   */
  async getSowList(request: $_model.GetSowListRequest): Promise<$_model.GetSowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSowListWithOptions(request, runtime);
  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPageWithOptions(request: $_model.GetSuspEventPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSuspEventPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmEndTime)) {
      body["AlarmEndTime"] = request.alarmEndTime;
    }

    if (!$dara.isNull(request.alarmStartTime)) {
      body["AlarmStartTime"] = request.alarmStartTime;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspEventPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuspEventPageResponse>(await this.callApi(params, req, runtime), new $_model.GetSuspEventPageResponse({}));
  }

  /**
   * Alarm Disposal Query
   * 
   * @param request - GetSuspEventPageRequest
   * @returns GetSuspEventPageResponse
   */
  async getSuspEventPage(request: $_model.GetSuspEventPageRequest): Promise<$_model.GetSuspEventPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspEventPageWithOptions(request, runtime);
  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummaryWithOptions(request: $_model.GetSuspEventSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSuspEventSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspEventSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuspEventSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetSuspEventSummaryResponse({}));
  }

  /**
   * Get Alert Statistics
   * 
   * @param request - GetSuspEventSummaryRequest
   * @returns GetSuspEventSummaryResponse
   */
  async getSuspEventSummary(request: $_model.GetSuspEventSummaryRequest): Promise<$_model.GetSuspEventSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspEventSummaryWithOptions(request, runtime);
  }

  /**
   * Alarm Page Statistics
   * 
   * @param request - GetSuspPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetSuspPageSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSuspPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuspPageSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetSuspPageSummaryResponse({}));
  }

  /**
   * Alarm Page Statistics
   * @returns GetSuspPageSummaryResponse
   */
  async getSuspPageSummary(): Promise<$_model.GetSuspPageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuspPageSummaryWithOptions(runtime);
  }

  /**
   * Query User Activation Status
   * 
   * @param request - GetUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserStatusResponse
   */
  async getUserStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetUserStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetUserStatus",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetUserStatusResponse({}));
  }

  /**
   * Query User Activation Status
   * @returns GetUserStatusResponse
   */
  async getUserStatus(): Promise<$_model.GetUserStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserStatusWithOptions(runtime);
  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulItemPageResponse
   */
  async getVulItemPageWithOptions(request: $_model.GetVulItemPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVulItemPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliasName)) {
      body["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scanType)) {
      body["ScanType"] = request.scanType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulItemPage",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVulItemPageResponse>(await this.callApi(params, req, runtime), new $_model.GetVulItemPageResponse({}));
  }

  /**
   * Risk Query
   * 
   * @param request - GetVulItemPageRequest
   * @returns GetVulItemPageResponse
   */
  async getVulItemPage(request: $_model.GetVulItemPageRequest): Promise<$_model.GetVulItemPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulItemPageWithOptions(request, runtime);
  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulListByIdResponse
   */
  async getVulListByIdWithOptions(request: $_model.GetVulListByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVulListByIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      body["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.necessity)) {
      body["Necessity"] = request.necessity;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.uuids)) {
      body["Uuids"] = request.uuids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulListById",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVulListByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetVulListByIdResponse({}));
  }

  /**
   * Query processed details
   * 
   * @param request - GetVulListByIdRequest
   * @returns GetVulListByIdResponse
   */
  async getVulListById(request: $_model.GetVulListByIdRequest): Promise<$_model.GetVulListByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulListByIdWithOptions(request, runtime);
  }

  /**
   * Risk Page Statistics
   * 
   * @param request - GetVulPageSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummaryWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetVulPageSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetVulPageSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVulPageSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetVulPageSummaryResponse({}));
  }

  /**
   * Risk Page Statistics
   * @returns GetVulPageSummaryResponse
   */
  async getVulPageSummary(): Promise<$_model.GetVulPageSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulPageSummaryWithOptions(runtime);
  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVulSummaryResponse
   */
  async getVulSummaryWithOptions(request: $_model.GetVulSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVulSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVulSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVulSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetVulSummaryResponse({}));
  }

  /**
   * Get Risk Statistics
   * 
   * @param request - GetVulSummaryRequest
   * @returns GetVulSummaryResponse
   */
  async getVulSummary(request: $_model.GetVulSummaryRequest): Promise<$_model.GetVulSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVulSummaryWithOptions(request, runtime);
  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummaryWithOptions(request: $_model.GetWorkTaskSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkTaskSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dateType)) {
      body["DateType"] = request.dateType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.suspEventSource)) {
      body["SuspEventSource"] = request.suspEventSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkTaskSummary",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkTaskSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkTaskSummaryResponse({}));
  }

  /**
   * Get the First Line Work Order Statistics
   * 
   * @param request - GetWorkTaskSummaryRequest
   * @returns GetWorkTaskSummaryResponse
   */
  async getWorkTaskSummary(request: $_model.GetWorkTaskSummaryRequest): Promise<$_model.GetWorkTaskSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkTaskSummaryWithOptions(request, runtime);
  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomerWithOptions(request: $_model.PageServiceCustomerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PageServiceCustomerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authStatus)) {
      body["AuthStatus"] = request.authStatus;
    }

    if (!$dara.isNull(request.cmAuthStatus)) {
      body["CmAuthStatus"] = request.cmAuthStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.monitorAuthStatus)) {
      body["MonitorAuthStatus"] = request.monitorAuthStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageServiceCustomer",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PageServiceCustomerResponse>(await this.callApi(params, req, runtime), new $_model.PageServiceCustomerResponse({}));
  }

  /**
   * Service Customer Information Query
   * 
   * @param request - PageServiceCustomerRequest
   * @returns PageServiceCustomerResponse
   */
  async pageServiceCustomer(request: $_model.PageServiceCustomerRequest): Promise<$_model.PageServiceCustomerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageServiceCustomerWithOptions(request, runtime);
  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendCustomEventResponse
   */
  async sendCustomEventWithOptions(request: $_model.SendCustomEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendCustomEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customerId)) {
      body["CustomerId"] = request.customerId;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.eventDescription)) {
      body["EventDescription"] = request.eventDescription;
    }

    if (!$dara.isNull(request.eventDetails)) {
      body["EventDetails"] = request.eventDetails;
    }

    if (!$dara.isNull(request.eventMarkdown)) {
      body["EventMarkdown"] = request.eventMarkdown;
    }

    if (!$dara.isNull(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventType)) {
      body["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.findTime)) {
      body["FindTime"] = request.findTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.isSend)) {
      body["IsSend"] = request.isSend;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.occurrenceTime)) {
      body["OccurrenceTime"] = request.occurrenceTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendCustomEvent",
      version: "2016-12-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendCustomEventResponse>(await this.callApi(params, req, runtime), new $_model.SendCustomEventResponse({}));
  }

  /**
   * Send Custom Alert Event
   * 
   * @param request - SendCustomEventRequest
   * @returns SendCustomEventResponse
   */
  async sendCustomEvent(request: $_model.SendCustomEventRequest): Promise<$_model.SendCustomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendCustomEventWithOptions(request, runtime);
  }

}
