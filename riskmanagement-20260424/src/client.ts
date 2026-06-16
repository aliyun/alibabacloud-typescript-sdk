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
    this._endpoint = this.getEndpoint("riskmanagement", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * sas-绑定授权到机器
   * 
   * @param tmpReq - BindAuthToMachineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAuthToMachineResponse
   */
  async bindAuthToMachineWithOptions(tmpReq: $_model.BindAuthToMachineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAuthToMachineResponse> {
    tmpReq.validate();
    let request = new $_model.BindAuthToMachineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAuthToMachine",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAuthToMachineResponse>(await this.callApi(params, req, runtime), new $_model.BindAuthToMachineResponse({}));
  }

  /**
   * sas-绑定授权到机器
   * 
   * @param request - BindAuthToMachineRequest
   * @returns BindAuthToMachineResponse
   */
  async bindAuthToMachine(request: $_model.BindAuthToMachineRequest): Promise<$_model.BindAuthToMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAuthToMachineWithOptions(request, runtime);
  }

  /**
   * sas-初始化云安全中心模块规则
   * 
   * @param tmpReq - CreateSasTrialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSasTrialResponse
   */
  async createSasTrialWithOptions(tmpReq: $_model.CreateSasTrialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSasTrialResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSasTrialShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSasTrial",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSasTrialResponse>(await this.callApi(params, req, runtime), new $_model.CreateSasTrialResponse({}));
  }

  /**
   * sas-初始化云安全中心模块规则
   * 
   * @param request - CreateSasTrialRequest
   * @returns CreateSasTrialResponse
   */
  async createSasTrial(request: $_model.CreateSasTrialRequest): Promise<$_model.CreateSasTrialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSasTrialWithOptions(request, runtime);
  }

  /**
   * sas-创建服务关联角色
   * 
   * @param tmpReq - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(tmpReq: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateServiceLinkedRoleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2026-04-24",
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
   * sas-创建服务关联角色
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 创建全盘扫描任务
   * 
   * @param request - CreateVirusScanOnceTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirusScanOnceTaskResponse
   */
  async createVirusScanOnceTaskWithOptions(request: $_model.CreateVirusScanOnceTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirusScanOnceTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirusScanOnceTask",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirusScanOnceTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirusScanOnceTaskResponse({}));
  }

  /**
   * 创建全盘扫描任务
   * 
   * @param request - CreateVirusScanOnceTaskRequest
   * @returns CreateVirusScanOnceTaskResponse
   */
  async createVirusScanOnceTask(request: $_model.CreateVirusScanOnceTaskRequest): Promise<$_model.CreateVirusScanOnceTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirusScanOnceTaskWithOptions(request, runtime);
  }

  /**
   * sas-查询云安全中心实例列表
   * 
   * @param tmpReq - DescribeCloudCenterInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudCenterInstancesResponse
   */
  async describeCloudCenterInstancesWithOptions(tmpReq: $_model.DescribeCloudCenterInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudCenterInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeCloudCenterInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudCenterInstances",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudCenterInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudCenterInstancesResponse({}));
  }

  /**
   * sas-查询云安全中心实例列表
   * 
   * @param request - DescribeCloudCenterInstancesRequest
   * @returns DescribeCloudCenterInstancesResponse
   */
  async describeCloudCenterInstances(request: $_model.DescribeCloudCenterInstancesRequest): Promise<$_model.DescribeCloudCenterInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudCenterInstancesWithOptions(request, runtime);
  }

  /**
   * sas-查询服务关联角色状态
   * 
   * @param tmpReq - DescribeServiceLinkedRoleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLinkedRoleStatusResponse
   */
  async describeServiceLinkedRoleStatusWithOptions(tmpReq: $_model.DescribeServiceLinkedRoleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceLinkedRoleStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeServiceLinkedRoleStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLinkedRoleStatus",
      version: "2026-04-24",
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
   * sas-查询服务关联角色状态
   * 
   * @param request - DescribeServiceLinkedRoleStatusRequest
   * @returns DescribeServiceLinkedRoleStatusResponse
   */
  async describeServiceLinkedRoleStatus(request: $_model.DescribeServiceLinkedRoleStatusRequest): Promise<$_model.DescribeServiceLinkedRoleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleStatusWithOptions(request, runtime);
  }

  /**
   * sas-查询安全告警事件
   * 
   * @param tmpReq - DescribeSuspEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEventsWithOptions(tmpReq: $_model.DescribeSuspEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSuspEventsResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSuspEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSuspEvents",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSuspEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSuspEventsResponse({}));
  }

  /**
   * sas-查询安全告警事件
   * 
   * @param request - DescribeSuspEventsRequest
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEvents(request: $_model.DescribeSuspEventsRequest): Promise<$_model.DescribeSuspEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  /**
   * 获取告警记录分析结果
   * 
   * @param tmpReq - GetAlertRecordAnalysisResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertRecordAnalysisResultResponse
   */
  async getAlertRecordAnalysisResultWithOptions(tmpReq: $_model.GetAlertRecordAnalysisResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertRecordAnalysisResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetAlertRecordAnalysisResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.uniqueTagList)) {
      request.uniqueTagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.uniqueTagList, "UniqueTagList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.uniqueInfo)) {
      query["UniqueInfo"] = request.uniqueInfo;
    }

    if (!$dara.isNull(request.uniqueTagListShrink)) {
      query["UniqueTagList"] = request.uniqueTagListShrink;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertRecordAnalysisResult",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertRecordAnalysisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertRecordAnalysisResultResponse({}));
  }

  /**
   * 获取告警记录分析结果
   * 
   * @param request - GetAlertRecordAnalysisResultRequest
   * @returns GetAlertRecordAnalysisResultResponse
   */
  async getAlertRecordAnalysisResult(request: $_model.GetAlertRecordAnalysisResultRequest): Promise<$_model.GetAlertRecordAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertRecordAnalysisResultWithOptions(request, runtime);
  }

  /**
   * 调用云安全中心部分接口
   * 
   * @param tmpReq - GetAliYunSafeCenterResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAliYunSafeCenterResultResponse
   */
  async getAliYunSafeCenterResultWithOptions(tmpReq: $_model.GetAliYunSafeCenterResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAliYunSafeCenterResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetAliYunSafeCenterResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.createSimilarSecurityEventsQueryTaskRequest)) {
      request.createSimilarSecurityEventsQueryTaskRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createSimilarSecurityEventsQueryTaskRequest, "CreateSimilarSecurityEventsQueryTaskRequest", "json");
    }

    if (!$dara.isNull(tmpReq.describeInstancesFullStatusRequest)) {
      request.describeInstancesFullStatusRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.describeInstancesFullStatusRequest, "DescribeInstancesFullStatusRequest", "json");
    }

    if (!$dara.isNull(tmpReq.describeSecurityEventOperationStatusRequest)) {
      request.describeSecurityEventOperationStatusRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.describeSecurityEventOperationStatusRequest, "DescribeSecurityEventOperationStatusRequest", "json");
    }

    if (!$dara.isNull(tmpReq.describeSimilarSecurityEventsRequest)) {
      request.describeSimilarSecurityEventsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.describeSimilarSecurityEventsRequest, "DescribeSimilarSecurityEventsRequest", "json");
    }

    if (!$dara.isNull(tmpReq.getAssetDetailByUuidRequest)) {
      request.getAssetDetailByUuidRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.getAssetDetailByUuidRequest, "GetAssetDetailByUuidRequest", "json");
    }

    if (!$dara.isNull(tmpReq.handleSecurityEventsRequest)) {
      request.handleSecurityEventsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.handleSecurityEventsRequest, "HandleSecurityEventsRequest", "json");
    }

    if (!$dara.isNull(tmpReq.handleSimilarSecurityEventsRequest)) {
      request.handleSimilarSecurityEventsRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.handleSimilarSecurityEventsRequest, "HandleSimilarSecurityEventsRequest", "json");
    }

    if (!$dara.isNull(tmpReq.listInstancesRequest)) {
      request.listInstancesRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listInstancesRequest, "ListInstancesRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createSimilarSecurityEventsQueryTaskRequestShrink)) {
      query["CreateSimilarSecurityEventsQueryTaskRequest"] = request.createSimilarSecurityEventsQueryTaskRequestShrink;
    }

    if (!$dara.isNull(request.describeInstancesFullStatusRequestShrink)) {
      query["DescribeInstancesFullStatusRequest"] = request.describeInstancesFullStatusRequestShrink;
    }

    if (!$dara.isNull(request.describeSecurityEventOperationStatusRequestShrink)) {
      query["DescribeSecurityEventOperationStatusRequest"] = request.describeSecurityEventOperationStatusRequestShrink;
    }

    if (!$dara.isNull(request.describeSimilarSecurityEventsRequestShrink)) {
      query["DescribeSimilarSecurityEventsRequest"] = request.describeSimilarSecurityEventsRequestShrink;
    }

    if (!$dara.isNull(request.getAssetDetailByUuidRequestShrink)) {
      query["GetAssetDetailByUuidRequest"] = request.getAssetDetailByUuidRequestShrink;
    }

    if (!$dara.isNull(request.handleSecurityEventsRequestShrink)) {
      query["HandleSecurityEventsRequest"] = request.handleSecurityEventsRequestShrink;
    }

    if (!$dara.isNull(request.handleSimilarSecurityEventsRequestShrink)) {
      query["HandleSimilarSecurityEventsRequest"] = request.handleSimilarSecurityEventsRequestShrink;
    }

    if (!$dara.isNull(request.interfaceCode)) {
      query["InterfaceCode"] = request.interfaceCode;
    }

    if (!$dara.isNull(request.listInstancesRequestShrink)) {
      query["ListInstancesRequest"] = request.listInstancesRequestShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAliYunSafeCenterResult",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAliYunSafeCenterResultResponse>(await this.callApi(params, req, runtime), new $_model.GetAliYunSafeCenterResultResponse({}));
  }

  /**
   * 调用云安全中心部分接口
   * 
   * @param request - GetAliYunSafeCenterResultRequest
   * @returns GetAliYunSafeCenterResultResponse
   */
  async getAliYunSafeCenterResult(request: $_model.GetAliYunSafeCenterResultRequest): Promise<$_model.GetAliYunSafeCenterResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAliYunSafeCenterResultWithOptions(request, runtime);
  }

  /**
   * sas-获取能否试用
   * 
   * @param tmpReq - GetCanTrySasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCanTrySasResponse
   */
  async getCanTrySasWithOptions(tmpReq: $_model.GetCanTrySasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCanTrySasResponse> {
    tmpReq.validate();
    let request = new $_model.GetCanTrySasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCanTrySas",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCanTrySasResponse>(await this.callApi(params, req, runtime), new $_model.GetCanTrySasResponse({}));
  }

  /**
   * sas-获取能否试用
   * 
   * @param request - GetCanTrySasRequest
   * @returns GetCanTrySasResponse
   */
  async getCanTrySas(request: $_model.GetCanTrySasRequest): Promise<$_model.GetCanTrySasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCanTrySasWithOptions(request, runtime);
  }

  /**
   * 获取一键处置赋权状态
   * 
   * @param request - GetDisposalToolStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDisposalToolStatusResponse
   */
  async getDisposalToolStatusWithOptions(request: $_model.GetDisposalToolStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDisposalToolStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDisposalToolStatus",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDisposalToolStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDisposalToolStatusResponse({}));
  }

  /**
   * 获取一键处置赋权状态
   * 
   * @param request - GetDisposalToolStatusRequest
   * @returns GetDisposalToolStatusResponse
   */
  async getDisposalToolStatus(request: $_model.GetDisposalToolStatusRequest): Promise<$_model.GetDisposalToolStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDisposalToolStatusWithOptions(request, runtime);
  }

  /**
   * sas-获取有效抵扣实例
   * 
   * @param tmpReq - GetValidDeductInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetValidDeductInstancesResponse
   */
  async getValidDeductInstancesWithOptions(tmpReq: $_model.GetValidDeductInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetValidDeductInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.GetValidDeductInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetValidDeductInstances",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetValidDeductInstancesResponse>(await this.callApi(params, req, runtime), new $_model.GetValidDeductInstancesResponse({}));
  }

  /**
   * sas-获取有效抵扣实例
   * 
   * @param request - GetValidDeductInstancesRequest
   * @returns GetValidDeductInstancesResponse
   */
  async getValidDeductInstances(request: $_model.GetValidDeductInstancesRequest): Promise<$_model.GetValidDeductInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getValidDeductInstancesWithOptions(request, runtime);
  }

  /**
   * sas-初始化云安全中心模块规则
   * 
   * @param tmpReq - InitSasModuleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitSasModuleRuleResponse
   */
  async initSasModuleRuleWithOptions(tmpReq: $_model.InitSasModuleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitSasModuleRuleResponse> {
    tmpReq.validate();
    let request = new $_model.InitSasModuleRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoBind)) {
      query["AutoBind"] = request.autoBind;
    }

    if (!$dara.isNull(request.instancesShrink)) {
      query["Instances"] = request.instancesShrink;
    }

    if (!$dara.isNull(request.isTrial)) {
      query["IsTrial"] = request.isTrial;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitSasModuleRule",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitSasModuleRuleResponse>(await this.callApi(params, req, runtime), new $_model.InitSasModuleRuleResponse({}));
  }

  /**
   * sas-初始化云安全中心模块规则
   * 
   * @param request - InitSasModuleRuleRequest
   * @returns InitSasModuleRuleResponse
   */
  async initSasModuleRule(request: $_model.InitSasModuleRuleRequest): Promise<$_model.InitSasModuleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initSasModuleRuleWithOptions(request, runtime);
  }

  /**
   * 查询全盘扫描结果
   * 
   * @param request - ListVirusScanMachineEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirusScanMachineEventResponse
   */
  async listVirusScanMachineEventWithOptions(request: $_model.ListVirusScanMachineEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVirusScanMachineEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.operateTaskId)) {
      query["OperateTaskId"] = request.operateTaskId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirusScanMachineEvent",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVirusScanMachineEventResponse>(await this.callApi(params, req, runtime), new $_model.ListVirusScanMachineEventResponse({}));
  }

  /**
   * 查询全盘扫描结果
   * 
   * @param request - ListVirusScanMachineEventRequest
   * @returns ListVirusScanMachineEventResponse
   */
  async listVirusScanMachineEvent(request: $_model.ListVirusScanMachineEventRequest): Promise<$_model.ListVirusScanMachineEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirusScanMachineEventWithOptions(request, runtime);
  }

  /**
   * sas-开启试用套餐
   * 
   * @param request - OpenTrialPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenTrialPackageResponse
   */
  async openTrialPackageWithOptions(request: $_model.OpenTrialPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenTrialPackageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCloseSwitch)) {
      query["AutoCloseSwitch"] = request.autoCloseSwitch;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenTrialPackage",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenTrialPackageResponse>(await this.callApi(params, req, runtime), new $_model.OpenTrialPackageResponse({}));
  }

  /**
   * sas-开启试用套餐
   * 
   * @param request - OpenTrialPackageRequest
   * @returns OpenTrialPackageResponse
   */
  async openTrialPackage(request: $_model.OpenTrialPackageRequest): Promise<$_model.OpenTrialPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openTrialPackageWithOptions(request, runtime);
  }

  /**
   * 查询安全体检简报
   * 
   * @param request - QuerySecurityCheckReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySecurityCheckReportResponse
   */
  async querySecurityCheckReportWithOptions(request: $_model.QuerySecurityCheckReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySecurityCheckReportResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QuerySecurityCheckReport",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySecurityCheckReportResponse>(await this.callApi(params, req, runtime), new $_model.QuerySecurityCheckReportResponse({}));
  }

  /**
   * 查询安全体检简报
   * 
   * @param request - QuerySecurityCheckReportRequest
   * @returns QuerySecurityCheckReportResponse
   */
  async querySecurityCheckReport(request: $_model.QuerySecurityCheckReportRequest): Promise<$_model.QuerySecurityCheckReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecurityCheckReportWithOptions(request, runtime);
  }

  /**
   * 开启处置工具授权
   * 
   * @param request - StartDisposalToolServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDisposalToolServiceResponse
   */
  async startDisposalToolServiceWithOptions(request: $_model.StartDisposalToolServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDisposalToolServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDisposalToolService",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDisposalToolServiceResponse>(await this.callApi(params, req, runtime), new $_model.StartDisposalToolServiceResponse({}));
  }

  /**
   * 开启处置工具授权
   * 
   * @param request - StartDisposalToolServiceRequest
   * @returns StartDisposalToolServiceResponse
   */
  async startDisposalToolService(request: $_model.StartDisposalToolServiceRequest): Promise<$_model.StartDisposalToolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDisposalToolServiceWithOptions(request, runtime);
  }

  /**
   * sas-更新后付费绑定关系
   * 
   * @param tmpReq - UpdatePostPaidBindRelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePostPaidBindRelResponse
   */
  async updatePostPaidBindRelWithOptions(tmpReq: $_model.UpdatePostPaidBindRelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePostPaidBindRelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePostPaidBindRelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sdkRequest)) {
      request.sdkRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sdkRequest, "SdkRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sdkRequestShrink)) {
      query["SdkRequest"] = request.sdkRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePostPaidBindRel",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePostPaidBindRelResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePostPaidBindRelResponse({}));
  }

  /**
   * sas-更新后付费绑定关系
   * 
   * @param request - UpdatePostPaidBindRelRequest
   * @returns UpdatePostPaidBindRelResponse
   */
  async updatePostPaidBindRel(request: $_model.UpdatePostPaidBindRelRequest): Promise<$_model.UpdatePostPaidBindRelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePostPaidBindRelWithOptions(request, runtime);
  }

}
