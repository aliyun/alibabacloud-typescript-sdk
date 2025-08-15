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
    this._endpoint = this.getEndpoint("ossmfd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 检查服务是否开通
   * 
   * @param request - CheckMfdServiceOpenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMfdServiceOpenResponse
   */
  async checkMfdServiceOpenWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckMfdServiceOpenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckMfdServiceOpen",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMfdServiceOpenResponse>(await this.callApi(params, req, runtime), new $_model.CheckMfdServiceOpenResponse({}));
  }

  /**
   * 检查服务是否开通
   * @returns CheckMfdServiceOpenResponse
   */
  async checkMfdServiceOpen(): Promise<$_model.CheckMfdServiceOpenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMfdServiceOpenWithOptions(runtime);
  }

  /**
   * 创建bucket扫描任务
   * 
   * @param request - CreateOssBucketScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssBucketScanTaskResponse
   */
  async createOssBucketScanTaskWithOptions(request: $_model.CreateOssBucketScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOssBucketScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allKeyPrefix)) {
      query["AllKeyPrefix"] = request.allKeyPrefix;
    }

    if (!$dara.isNull(request.bucketNameList)) {
      query["BucketNameList"] = request.bucketNameList;
    }

    if (!$dara.isNull(request.decompressMaxFileCount)) {
      query["DecompressMaxFileCount"] = request.decompressMaxFileCount;
    }

    if (!$dara.isNull(request.decompressMaxLayer)) {
      query["DecompressMaxLayer"] = request.decompressMaxLayer;
    }

    if (!$dara.isNull(request.decryptionList)) {
      query["DecryptionList"] = request.decryptionList;
    }

    if (!$dara.isNull(request.excludeKeySuffixList)) {
      query["ExcludeKeySuffixList"] = request.excludeKeySuffixList;
    }

    if (!$dara.isNull(request.keyPrefixList)) {
      query["KeyPrefixList"] = request.keyPrefixList;
    }

    if (!$dara.isNull(request.keySuffixList)) {
      query["KeySuffixList"] = request.keySuffixList;
    }

    if (!$dara.isNull(request.lastModifiedStartTime)) {
      query["LastModifiedStartTime"] = request.lastModifiedStartTime;
    }

    if (!$dara.isNull(request.scanMode)) {
      query["ScanMode"] = request.scanMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOssBucketScanTask",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOssBucketScanTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOssBucketScanTaskResponse({}));
  }

  /**
   * 创建bucket扫描任务
   * 
   * @param request - CreateOssBucketScanTaskRequest
   * @returns CreateOssBucketScanTaskResponse
   */
  async createOssBucketScanTask(request: $_model.CreateOssBucketScanTaskRequest): Promise<$_model.CreateOssBucketScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOssBucketScanTaskWithOptions(request, runtime);
  }

  /**
   * 创建Bucket检测策略配置
   * 
   * @param request - CreateOssScanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssScanConfigResponse
   */
  async createOssScanConfigWithOptions(request: $_model.CreateOssScanConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOssScanConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allKeyPrefix)) {
      query["AllKeyPrefix"] = request.allKeyPrefix;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.decompressMaxFileCount)) {
      query["DecompressMaxFileCount"] = request.decompressMaxFileCount;
    }

    if (!$dara.isNull(request.decompressMaxLayer)) {
      query["DecompressMaxLayer"] = request.decompressMaxLayer;
    }

    if (!$dara.isNull(request.decryptionList)) {
      query["DecryptionList"] = request.decryptionList;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyPrefixList)) {
      query["KeyPrefixList"] = request.keyPrefixList;
    }

    if (!$dara.isNull(request.keySuffixList)) {
      query["KeySuffixList"] = request.keySuffixList;
    }

    if (!$dara.isNull(request.lastModifiedStartTime)) {
      query["LastModifiedStartTime"] = request.lastModifiedStartTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.realTimeIncr)) {
      query["RealTimeIncr"] = request.realTimeIncr;
    }

    if (!$dara.isNull(request.scanDayList)) {
      query["ScanDayList"] = request.scanDayList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOssScanConfig",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOssScanConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateOssScanConfigResponse({}));
  }

  /**
   * 创建Bucket检测策略配置
   * 
   * @param request - CreateOssScanConfigRequest
   * @returns CreateOssScanConfigResponse
   */
  async createOssScanConfig(request: $_model.CreateOssScanConfigRequest): Promise<$_model.CreateOssScanConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOssScanConfigWithOptions(request, runtime);
  }

  /**
   * 查询导出信息
   * 
   * @param request - DescribeExportInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExportInfoResponse
   */
  async describeExportInfoWithOptions(request: $_model.DescribeExportInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExportInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exportId)) {
      query["ExportId"] = request.exportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExportInfo",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExportInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExportInfoResponse({}));
  }

  /**
   * 查询导出信息
   * 
   * @param request - DescribeExportInfoRequest
   * @returns DescribeExportInfoResponse
   */
  async describeExportInfo(request: $_model.DescribeExportInfoRequest): Promise<$_model.DescribeExportInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExportInfoWithOptions(request, runtime);
  }

  /**
   * 查询您是否已创建云安全中心服务关联角色
   * 
   * @param request - DescribeServiceLinkedRoleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleStatusResponse
   */
  async describeServiceLinkedRoleStatusWithOptions(request: $_model.DescribeServiceLinkedRoleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceLinkedRoleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceLinkedRole)) {
      query["ServiceLinkedRole"] = request.serviceLinkedRole;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLinkedRoleStatus",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceLinkedRoleStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceLinkedRoleStatusResponse({}));
  }

  /**
   * 查询您是否已创建云安全中心服务关联角色
   * 
   * @param request - DescribeServiceLinkedRoleStatusRequest
   * @returns DescribeServiceLinkedRoleStatusResponse
   */
  async describeServiceLinkedRoleStatus(request: $_model.DescribeServiceLinkedRoleStatusRequest): Promise<$_model.DescribeServiceLinkedRoleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleStatusWithOptions(request, runtime);
  }

  /**
   * 导出恶意文件列表
   * 
   * @param request - ExportRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportRecordResponse
   */
  async exportRecordWithOptions(request: $_model.ExportRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportRecord",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportRecordResponse>(await this.callApi(params, req, runtime), new $_model.ExportRecordResponse({}));
  }

  /**
   * 导出恶意文件列表
   * 
   * @param request - ExportRecordRequest
   * @returns ExportRecordResponse
   */
  async exportRecord(request: $_model.ExportRecordRequest): Promise<$_model.ExportRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportRecordWithOptions(request, runtime);
  }

  /**
   * 获取沙箱检测报告。
   * 
   * @param request - GetFileDetectReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileDetectReportResponse
   */
  async getFileDetectReportWithOptions(request: $_model.GetFileDetectReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileDetectReportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.field)) {
      query["Field"] = request.field;
    }

    if (!$dara.isNull(request.fileHash)) {
      query["FileHash"] = request.fileHash;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileDetectReport",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileDetectReportResponse>(await this.callApi(params, req, runtime), new $_model.GetFileDetectReportResponse({}));
  }

  /**
   * 获取沙箱检测报告。
   * 
   * @param request - GetFileDetectReportRequest
   * @returns GetFileDetectReportResponse
   */
  async getFileDetectReport(request: $_model.GetFileDetectReportRequest): Promise<$_model.GetFileDetectReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileDetectReportWithOptions(request, runtime);
  }

  /**
   * 获取bucket检测统计信息
   * 
   * @param request - GetOssBucketScanStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssBucketScanStatisticResponse
   */
  async getOssBucketScanStatisticWithOptions(request: $_model.GetOssBucketScanStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssBucketScanStatisticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketNameList)) {
      query["BucketNameList"] = request.bucketNameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssBucketScanStatistic",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssBucketScanStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetOssBucketScanStatisticResponse({}));
  }

  /**
   * 获取bucket检测统计信息
   * 
   * @param request - GetOssBucketScanStatisticRequest
   * @returns GetOssBucketScanStatisticResponse
   */
  async getOssBucketScanStatistic(request: $_model.GetOssBucketScanStatisticRequest): Promise<$_model.GetOssBucketScanStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssBucketScanStatisticWithOptions(request, runtime);
  }

  /**
   * 获取Bucket检测配置
   * 
   * @param request - GetOssScanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssScanConfigResponse
   */
  async getOssScanConfigWithOptions(request: $_model.GetOssScanConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssScanConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssScanConfig",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssScanConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetOssScanConfigResponse({}));
  }

  /**
   * 获取Bucket检测配置
   * 
   * @param request - GetOssScanConfigRequest
   * @returns GetOssScanConfigResponse
   */
  async getOssScanConfig(request: $_model.GetOssScanConfigRequest): Promise<$_model.GetOssScanConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssScanConfigWithOptions(request, runtime);
  }

  /**
   * 获取文件检测告警列表
   * 
   * @param request - ListObjectScanEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListObjectScanEventResponse
   */
  async listObjectScanEventWithOptions(request: $_model.ListObjectScanEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListObjectScanEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.ossKey)) {
      query["OssKey"] = request.ossKey;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentEventId)) {
      query["ParentEventId"] = request.parentEventId;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.timeEnd)) {
      query["TimeEnd"] = request.timeEnd;
    }

    if (!$dara.isNull(request.timeStart)) {
      query["TimeStart"] = request.timeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListObjectScanEvent",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListObjectScanEventResponse>(await this.callApi(params, req, runtime), new $_model.ListObjectScanEventResponse({}));
  }

  /**
   * 获取文件检测告警列表
   * 
   * @param request - ListObjectScanEventRequest
   * @returns ListObjectScanEventResponse
   */
  async listObjectScanEvent(request: $_model.ListObjectScanEventRequest): Promise<$_model.ListObjectScanEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listObjectScanEventWithOptions(request, runtime);
  }

  /**
   * 列举用户所有的bucket
   * 
   * @param request - ListOssBucketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOssBucketResponse
   */
  async listOssBucketWithOptions(request: $_model.ListOssBucketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOssBucketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOssBucket",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOssBucketResponse>(await this.callApi(params, req, runtime), new $_model.ListOssBucketResponse({}));
  }

  /**
   * 列举用户所有的bucket
   * 
   * @param request - ListOssBucketRequest
   * @returns ListOssBucketResponse
   */
  async listOssBucket(request: $_model.ListOssBucketRequest): Promise<$_model.ListOssBucketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOssBucketWithOptions(request, runtime);
  }

  /**
   * 获取bucket详情
   * 
   * @param request - ListOssBucketScanInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOssBucketScanInfoResponse
   */
  async listOssBucketScanInfoWithOptions(request: $_model.ListOssBucketScanInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOssBucketScanInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.fuzzBucketName)) {
      query["FuzzBucketName"] = request.fuzzBucketName;
    }

    if (!$dara.isNull(request.hasRisk)) {
      query["HasRisk"] = request.hasRisk;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOssBucketScanInfo",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOssBucketScanInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListOssBucketScanInfoResponse({}));
  }

  /**
   * 获取bucket详情
   * 
   * @param request - ListOssBucketScanInfoRequest
   * @returns ListOssBucketScanInfoResponse
   */
  async listOssBucketScanInfo(request: $_model.ListOssBucketScanInfoRequest): Promise<$_model.ListOssBucketScanInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOssBucketScanInfoWithOptions(request, runtime);
  }

  /**
   * 获取支持的文件后缀
   * 
   * @param request - ListSupportObjectSuffixRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSupportObjectSuffixResponse
   */
  async listSupportObjectSuffixWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListSupportObjectSuffixResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListSupportObjectSuffix",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSupportObjectSuffixResponse>(await this.callApi(params, req, runtime), new $_model.ListSupportObjectSuffixResponse({}));
  }

  /**
   * 获取支持的文件后缀
   * @returns ListSupportObjectSuffixResponse
   */
  async listSupportObjectSuffix(): Promise<$_model.ListSupportObjectSuffixResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSupportObjectSuffixWithOptions(runtime);
  }

  /**
   * 操作oss检测任务
   * 
   * @param request - OperateBucketScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateBucketScanTaskResponse
   */
  async operateBucketScanTaskWithOptions(request: $_model.OperateBucketScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateBucketScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.operateCode)) {
      query["OperateCode"] = request.operateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateBucketScanTask",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateBucketScanTaskResponse>(await this.callApi(params, req, runtime), new $_model.OperateBucketScanTaskResponse({}));
  }

  /**
   * 操作oss检测任务
   * 
   * @param request - OperateBucketScanTaskRequest
   * @returns OperateBucketScanTaskResponse
   */
  async operateBucketScanTask(request: $_model.OperateBucketScanTaskRequest): Promise<$_model.OperateBucketScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateBucketScanTaskWithOptions(request, runtime);
  }

  /**
   * 修改Bucket检测配置
   * 
   * @param request - UpdateOssScanConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssScanConfigResponse
   */
  async updateOssScanConfigWithOptions(request: $_model.UpdateOssScanConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOssScanConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allKeyPrefix)) {
      query["AllKeyPrefix"] = request.allKeyPrefix;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["BucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.decompressMaxFileCount)) {
      query["DecompressMaxFileCount"] = request.decompressMaxFileCount;
    }

    if (!$dara.isNull(request.decompressMaxLayer)) {
      query["DecompressMaxLayer"] = request.decompressMaxLayer;
    }

    if (!$dara.isNull(request.decryptionList)) {
      query["DecryptionList"] = request.decryptionList;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.keyPrefixList)) {
      query["KeyPrefixList"] = request.keyPrefixList;
    }

    if (!$dara.isNull(request.keySuffixList)) {
      query["KeySuffixList"] = request.keySuffixList;
    }

    if (!$dara.isNull(request.lastModifiedStartTime)) {
      query["LastModifiedStartTime"] = request.lastModifiedStartTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.realTimeIncr)) {
      query["RealTimeIncr"] = request.realTimeIncr;
    }

    if (!$dara.isNull(request.scanDayList)) {
      query["ScanDayList"] = request.scanDayList;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOssScanConfig",
      version: "2023-10-17",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOssScanConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOssScanConfigResponse({}));
  }

  /**
   * 修改Bucket检测配置
   * 
   * @param request - UpdateOssScanConfigRequest
   * @returns UpdateOssScanConfigResponse
   */
  async updateOssScanConfig(request: $_model.UpdateOssScanConfigRequest): Promise<$_model.UpdateOssScanConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOssScanConfigWithOptions(request, runtime);
  }

}
