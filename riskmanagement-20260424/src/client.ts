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
    this._endpointMap = {
      public: "riskmanagement.aliyuncs.com",
    };
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
   * Bindss authorization to machines in Security Center.
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
   * Bindss authorization to machines in Security Center.
   * 
   * @param request - BindAuthToMachineRequest
   * @returns BindAuthToMachineResponse
   */
  async bindAuthToMachine(request: $_model.BindAuthToMachineRequest): Promise<$_model.BindAuthToMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAuthToMachineWithOptions(request, runtime);
  }

  /**
   * Initializes Security Center module rules.
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
   * Initializes Security Center module rules.
   * 
   * @param request - CreateSasTrialRequest
   * @returns CreateSasTrialResponse
   */
  async createSasTrial(request: $_model.CreateSasTrialRequest): Promise<$_model.CreateSasTrialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSasTrialWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role for Security Center and authorizes Security Center to access cloud resources.
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
   * Creates a service-linked role for Security Center and authorizes Security Center to access cloud resources.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a full disk scan task.
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
   * Creates a full disk scan task.
   * 
   * @param request - CreateVirusScanOnceTaskRequest
   * @returns CreateVirusScanOnceTaskResponse
   */
  async createVirusScanOnceTask(request: $_model.CreateVirusScanOnceTaskRequest): Promise<$_model.CreateVirusScanOnceTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirusScanOnceTaskWithOptions(request, runtime);
  }

  /**
   * Queries the list of Security Center instances.
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
   * Queries the list of Security Center instances.
   * 
   * @param request - DescribeCloudCenterInstancesRequest
   * @returns DescribeCloudCenterInstancesResponse
   */
  async describeCloudCenterInstances(request: $_model.DescribeCloudCenterInstancesRequest): Promise<$_model.DescribeCloudCenterInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudCenterInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the status of a service-linked role for Security Center.
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
   * Queries the status of a service-linked role for Security Center.
   * 
   * @param request - DescribeServiceLinkedRoleStatusRequest
   * @returns DescribeServiceLinkedRoleStatusResponse
   */
  async describeServiceLinkedRoleStatus(request: $_model.DescribeServiceLinkedRoleStatusRequest): Promise<$_model.DescribeServiceLinkedRoleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceLinkedRoleStatusWithOptions(request, runtime);
  }

  /**
   * Queries security alert events in Security Center.
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
   * Queries security alert events in Security Center.
   * 
   * @param request - DescribeSuspEventsRequest
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEvents(request: $_model.DescribeSuspEventsRequest): Promise<$_model.DescribeSuspEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  /**
   * Queries the edition details of a purchased Security Center instance.
   * 
   * @param tmpReq - DescribeVersionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVersionConfigResponse
   */
  async describeVersionConfigWithOptions(tmpReq: $_model.DescribeVersionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVersionConfigResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeVersionConfigShrinkRequest({ });
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
      action: "DescribeVersionConfig",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVersionConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVersionConfigResponse({}));
  }

  /**
   * Queries the edition details of a purchased Security Center instance.
   * 
   * @param request - DescribeVersionConfigRequest
   * @returns DescribeVersionConfigResponse
   */
  async describeVersionConfig(request: $_model.DescribeVersionConfigRequest): Promise<$_model.DescribeVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVersionConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the analysis results of alert records.
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
   * Retrieves the analysis results of alert records.
   * 
   * @param request - GetAlertRecordAnalysisResultRequest
   * @returns GetAlertRecordAnalysisResultResponse
   */
  async getAlertRecordAnalysisResult(request: $_model.GetAlertRecordAnalysisResultRequest): Promise<$_model.GetAlertRecordAnalysisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertRecordAnalysisResultWithOptions(request, runtime);
  }

  /**
   * Calls specific Security Center API operations.
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
   * Calls specific Security Center API operations.
   * 
   * @param request - GetAliYunSafeCenterResultRequest
   * @returns GetAliYunSafeCenterResultResponse
   */
  async getAliYunSafeCenterResult(request: $_model.GetAliYunSafeCenterResultRequest): Promise<$_model.GetAliYunSafeCenterResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAliYunSafeCenterResultWithOptions(request, runtime);
  }

  /**
   * Queries whether a user is eligible for a Security Center free trial.
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
   * Queries whether a user is eligible for a Security Center free trial.
   * 
   * @param request - GetCanTrySasRequest
   * @returns GetCanTrySasResponse
   */
  async getCanTrySas(request: $_model.GetCanTrySasRequest): Promise<$_model.GetCanTrySasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCanTrySasWithOptions(request, runtime);
  }

  /**
   * Retrieves the security compliance package ID.
   * 
   * @param request - GetCompliancePackIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompliancePackIdResponse
   */
  async getCompliancePackIdWithOptions(request: $_model.GetCompliancePackIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompliancePackIdResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCompliancePackId",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompliancePackIdResponse>(await this.callApi(params, req, runtime), new $_model.GetCompliancePackIdResponse({}));
  }

  /**
   * Retrieves the security compliance package ID.
   * 
   * @param request - GetCompliancePackIdRequest
   * @returns GetCompliancePackIdResponse
   */
  async getCompliancePackId(request: $_model.GetCompliancePackIdRequest): Promise<$_model.GetCompliancePackIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompliancePackIdWithOptions(request, runtime);
  }

  /**
   * Retrieves the authorization status for one-click disposal.
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
   * Retrieves the authorization status for one-click disposal.
   * 
   * @param request - GetDisposalToolStatusRequest
   * @returns GetDisposalToolStatusResponse
   */
  async getDisposalToolStatus(request: $_model.GetDisposalToolStatusRequest): Promise<$_model.GetDisposalToolStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDisposalToolStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the record of a user confirming a security contact.
   * 
   * @param request - GetNotificationClickRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotificationClickRecordResponse
   */
  async getNotificationClickRecordWithOptions(request: $_model.GetNotificationClickRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotificationClickRecordResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetNotificationClickRecord",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotificationClickRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetNotificationClickRecordResponse({}));
  }

  /**
   * Retrieves the record of a user confirming a security contact.
   * 
   * @param request - GetNotificationClickRecordRequest
   * @returns GetNotificationClickRecordResponse
   */
  async getNotificationClickRecord(request: $_model.GetNotificationClickRecordRequest): Promise<$_model.GetNotificationClickRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotificationClickRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves all information about security contacts.
   * 
   * @param request - GetNotificationContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotificationContactsResponse
   */
  async getNotificationContactsWithOptions(request: $_model.GetNotificationContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotificationContactsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetNotificationContacts",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotificationContactsResponse>(await this.callApi(params, req, runtime), new $_model.GetNotificationContactsResponse({}));
  }

  /**
   * Retrieves all information about security contacts.
   * 
   * @param request - GetNotificationContactsRequest
   * @returns GetNotificationContactsResponse
   */
  async getNotificationContacts(request: $_model.GetNotificationContactsRequest): Promise<$_model.GetNotificationContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotificationContactsWithOptions(request, runtime);
  }

  /**
   * Retrieves the number of pending items for security contacts.
   * 
   * @param request - GetNotificationPendNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNotificationPendNumberResponse
   */
  async getNotificationPendNumberWithOptions(request: $_model.GetNotificationPendNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNotificationPendNumberResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetNotificationPendNumber",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNotificationPendNumberResponse>(await this.callApi(params, req, runtime), new $_model.GetNotificationPendNumberResponse({}));
  }

  /**
   * Retrieves the number of pending items for security contacts.
   * 
   * @param request - GetNotificationPendNumberRequest
   * @returns GetNotificationPendNumberResponse
   */
  async getNotificationPendNumber(request: $_model.GetNotificationPendNumberRequest): Promise<$_model.GetNotificationPendNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNotificationPendNumberWithOptions(request, runtime);
  }

  /**
   * Queries the details of cloud resource control events.
   * 
   * @param tmpReq - GetResourceControlEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceControlEventResponse
   */
  async getResourceControlEventWithOptions(tmpReq: $_model.GetResourceControlEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceControlEventResponse> {
    tmpReq.validate();
    let request = new $_model.GetResourceControlEventShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventIdList)) {
      request.eventIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventIdList, "EventIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventIdListShrink)) {
      query["EventIdList"] = request.eventIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceControlEvent",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceControlEventResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceControlEventResponse({}));
  }

  /**
   * Queries the details of cloud resource control events.
   * 
   * @param request - GetResourceControlEventRequest
   * @returns GetResourceControlEventResponse
   */
  async getResourceControlEvent(request: $_model.GetResourceControlEventRequest): Promise<$_model.GetResourceControlEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceControlEventWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information of a security check.
   * 
   * @param request - GetSecurityCheckBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityCheckBaseInfoResponse
   */
  async getSecurityCheckBaseInfoWithOptions(request: $_model.GetSecurityCheckBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityCheckBaseInfoResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityCheckBaseInfo",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityCheckBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityCheckBaseInfoResponse({}));
  }

  /**
   * Retrieves the basic information of a security check.
   * 
   * @param request - GetSecurityCheckBaseInfoRequest
   * @returns GetSecurityCheckBaseInfoResponse
   */
  async getSecurityCheckBaseInfo(request: $_model.GetSecurityCheckBaseInfoRequest): Promise<$_model.GetSecurityCheckBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityCheckBaseInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the basic information of security check results.
   * 
   * @param request - GetSecurityCheckResultBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecurityCheckResultBaseInfoResponse
   */
  async getSecurityCheckResultBaseInfoWithOptions(request: $_model.GetSecurityCheckResultBaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecurityCheckResultBaseInfoResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSecurityCheckResultBaseInfo",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecurityCheckResultBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSecurityCheckResultBaseInfoResponse({}));
  }

  /**
   * Retrieves the basic information of security check results.
   * 
   * @param request - GetSecurityCheckResultBaseInfoRequest
   * @returns GetSecurityCheckResultBaseInfoResponse
   */
  async getSecurityCheckResultBaseInfo(request: $_model.GetSecurityCheckResultBaseInfoRequest): Promise<$_model.GetSecurityCheckResultBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecurityCheckResultBaseInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of security optimization suggestions.
   * 
   * @param tmpReq - GetSecuritySuggestionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecuritySuggestionListResponse
   */
  async getSecuritySuggestionListWithOptions(tmpReq: $_model.GetSecuritySuggestionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecuritySuggestionListResponse> {
    tmpReq.validate();
    let request = new $_model.GetSecuritySuggestionListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.listConfigRulesRequest)) {
      request.listConfigRulesRequestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.listConfigRulesRequest, "ListConfigRulesRequest", "json");
    }

    let query = { };
    if (!$dara.isNull(request.listConfigRulesRequestShrink)) {
      query["ListConfigRulesRequest"] = request.listConfigRulesRequestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecuritySuggestionList",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecuritySuggestionListResponse>(await this.callApi(params, req, runtime), new $_model.GetSecuritySuggestionListResponse({}));
  }

  /**
   * Retrieves a list of security optimization suggestions.
   * 
   * @param request - GetSecuritySuggestionListRequest
   * @returns GetSecuritySuggestionListResponse
   */
  async getSecuritySuggestionList(request: $_model.GetSecuritySuggestionListRequest): Promise<$_model.GetSecuritySuggestionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecuritySuggestionListWithOptions(request, runtime);
  }

  /**
   * Retrieves the number of security optimization suggestions.
   * 
   * @param request - GetSecuritySuggestionNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecuritySuggestionNumberResponse
   */
  async getSecuritySuggestionNumberWithOptions(request: $_model.GetSecuritySuggestionNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecuritySuggestionNumberResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetSecuritySuggestionNumber",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecuritySuggestionNumberResponse>(await this.callApi(params, req, runtime), new $_model.GetSecuritySuggestionNumberResponse({}));
  }

  /**
   * Retrieves the number of security optimization suggestions.
   * 
   * @param request - GetSecuritySuggestionNumberRequest
   * @returns GetSecuritySuggestionNumberResponse
   */
  async getSecuritySuggestionNumber(request: $_model.GetSecuritySuggestionNumberRequest): Promise<$_model.GetSecuritySuggestionNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecuritySuggestionNumberWithOptions(request, runtime);
  }

  /**
   * Retrieves the status of a service-linked role.
   * 
   * @param request - GetServiceLinkedRoleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLinkedRoleStatusResponse
   */
  async getServiceLinkedRoleStatusWithOptions(request: $_model.GetServiceLinkedRoleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceLinkedRoleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceLinkedRoleStatus",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceLinkedRoleStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceLinkedRoleStatusResponse({}));
  }

  /**
   * Retrieves the status of a service-linked role.
   * 
   * @param request - GetServiceLinkedRoleStatusRequest
   * @returns GetServiceLinkedRoleStatusResponse
   */
  async getServiceLinkedRoleStatus(request: $_model.GetServiceLinkedRoleStatusRequest): Promise<$_model.GetServiceLinkedRoleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLinkedRoleStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves valid deductible instances for Security Center.
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
   * Retrieves valid deductible instances for Security Center.
   * 
   * @param request - GetValidDeductInstancesRequest
   * @returns GetValidDeductInstancesResponse
   */
  async getValidDeductInstances(request: $_model.GetValidDeductInstancesRequest): Promise<$_model.GetValidDeductInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getValidDeductInstancesWithOptions(request, runtime);
  }

  /**
   * Initializes module rules for Security Center.
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
   * Initializes module rules for Security Center.
   * 
   * @param request - InitSasModuleRuleRequest
   * @returns InitSasModuleRuleResponse
   */
  async initSasModuleRule(request: $_model.InitSasModuleRuleRequest): Promise<$_model.InitSasModuleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initSasModuleRuleWithOptions(request, runtime);
  }

  /**
   * Queries the results of a full disk scan.
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
   * Queries the results of a full disk scan.
   * 
   * @param request - ListVirusScanMachineEventRequest
   * @returns ListVirusScanMachineEventResponse
   */
  async listVirusScanMachineEvent(request: $_model.ListVirusScanMachineEventRequest): Promise<$_model.ListVirusScanMachineEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVirusScanMachineEventWithOptions(request, runtime);
  }

  /**
   * Starts a free trial of Security Center.
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
   * Starts a free trial of Security Center.
   * 
   * @param request - OpenTrialPackageRequest
   * @returns OpenTrialPackageResponse
   */
  async openTrialPackage(request: $_model.OpenTrialPackageRequest): Promise<$_model.OpenTrialPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openTrialPackageWithOptions(request, runtime);
  }

  /**
   * Queries account security events.
   * 
   * @param request - QueryAccountSafetyIncidentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAccountSafetyIncidentResponse
   */
  async queryAccountSafetyIncidentWithOptions(request: $_model.QueryAccountSafetyIncidentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAccountSafetyIncidentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.caseCode)) {
      query["CaseCode"] = request.caseCode;
    }

    if (!$dara.isNull(request.current)) {
      query["Current"] = request.current;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.punishEndTime)) {
      query["PunishEndTime"] = request.punishEndTime;
    }

    if (!$dara.isNull(request.punishStartTime)) {
      query["PunishStartTime"] = request.punishStartTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAccountSafetyIncident",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAccountSafetyIncidentResponse>(await this.callApi(params, req, runtime), new $_model.QueryAccountSafetyIncidentResponse({}));
  }

  /**
   * Queries account security events.
   * 
   * @param request - QueryAccountSafetyIncidentRequest
   * @returns QueryAccountSafetyIncidentResponse
   */
  async queryAccountSafetyIncident(request: $_model.QueryAccountSafetyIncidentRequest): Promise<$_model.QueryAccountSafetyIncidentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAccountSafetyIncidentWithOptions(request, runtime);
  }

  /**
   * Queries the subscription status of the cloud security guide.
   * 
   * @param request - QueryGuideSubStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryGuideSubStatusResponse
   */
  async queryGuideSubStatusWithOptions(request: $_model.QueryGuideSubStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryGuideSubStatusResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryGuideSubStatus",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryGuideSubStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryGuideSubStatusResponse({}));
  }

  /**
   * Queries the subscription status of the cloud security guide.
   * 
   * @param request - QueryGuideSubStatusRequest
   * @returns QueryGuideSubStatusResponse
   */
  async queryGuideSubStatus(request: $_model.QueryGuideSubStatusRequest): Promise<$_model.QueryGuideSubStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryGuideSubStatusWithOptions(request, runtime);
  }

  /**
   * Queries cloud resource control events.
   * 
   * @param tmpReq - QueryResourceControlEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResourceControlEventsResponse
   */
  async queryResourceControlEventsWithOptions(tmpReq: $_model.QueryResourceControlEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResourceControlEventsResponse> {
    tmpReq.validate();
    let request = new $_model.QueryResourceControlEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionCodes)) {
      request.actionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionCodes, "ActionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.businessCodes)) {
      request.businessCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.businessCodes, "BusinessCodes", "json");
    }

    if (!$dara.isNull(tmpReq.caseCodesPrefix)) {
      request.caseCodesPrefixShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseCodesPrefix, "CaseCodesPrefix", "json");
    }

    if (!$dara.isNull(tmpReq.eventCodes)) {
      request.eventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCodes, "EventCodes", "json");
    }

    if (!$dara.isNull(tmpReq.eventIdList)) {
      request.eventIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventIdList, "EventIdList", "json");
    }

    if (!$dara.isNull(tmpReq.excludeActionCodes)) {
      request.excludeActionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeActionCodes, "ExcludeActionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.excludeEventCodes)) {
      request.excludeEventCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeEventCodes, "ExcludeEventCodes", "json");
    }

    if (!$dara.isNull(tmpReq.excludeReasons)) {
      request.excludeReasonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeReasons, "ExcludeReasons", "json");
    }

    if (!$dara.isNull(tmpReq.includeReasons)) {
      request.includeReasonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeReasons, "IncludeReasons", "json");
    }

    if (!$dara.isNull(tmpReq.sourceCodes)) {
      request.sourceCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceCodes, "SourceCodes", "json");
    }

    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionCode)) {
      query["ActionCode"] = request.actionCode;
    }

    if (!$dara.isNull(request.actionCodesShrink)) {
      query["ActionCodes"] = request.actionCodesShrink;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.businessCode)) {
      query["BusinessCode"] = request.businessCode;
    }

    if (!$dara.isNull(request.businessCodesShrink)) {
      query["BusinessCodes"] = request.businessCodesShrink;
    }

    if (!$dara.isNull(request.caseCodesPrefixShrink)) {
      query["CaseCodesPrefix"] = request.caseCodesPrefixShrink;
    }

    if (!$dara.isNull(request.current)) {
      query["Current"] = request.current;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.eventCode)) {
      query["EventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.eventCodesShrink)) {
      query["EventCodes"] = request.eventCodesShrink;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.eventIdListShrink)) {
      query["EventIdList"] = request.eventIdListShrink;
    }

    if (!$dara.isNull(request.excludeActionCodesShrink)) {
      query["ExcludeActionCodes"] = request.excludeActionCodesShrink;
    }

    if (!$dara.isNull(request.excludeEventCodesShrink)) {
      query["ExcludeEventCodes"] = request.excludeEventCodesShrink;
    }

    if (!$dara.isNull(request.excludeReasonsShrink)) {
      query["ExcludeReasons"] = request.excludeReasonsShrink;
    }

    if (!$dara.isNull(request.includeReasonsShrink)) {
      query["IncludeReasons"] = request.includeReasonsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.punishEndTime)) {
      query["PunishEndTime"] = request.punishEndTime;
    }

    if (!$dara.isNull(request.punishStartTime)) {
      query["PunishStartTime"] = request.punishStartTime;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.sourceCodesShrink)) {
      query["SourceCodes"] = request.sourceCodesShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      query["StatusList"] = request.statusListShrink;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryResourceControlEvents",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResourceControlEventsResponse>(await this.callApi(params, req, runtime), new $_model.QueryResourceControlEventsResponse({}));
  }

  /**
   * Queries cloud resource control events.
   * 
   * @param request - QueryResourceControlEventsRequest
   * @returns QueryResourceControlEventsResponse
   */
  async queryResourceControlEvents(request: $_model.QueryResourceControlEventsRequest): Promise<$_model.QueryResourceControlEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryResourceControlEventsWithOptions(request, runtime);
  }

  /**
   * Queries the security check brief.
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
   * Queries the security check brief.
   * 
   * @param request - QuerySecurityCheckReportRequest
   * @returns QuerySecurityCheckReportResponse
   */
  async querySecurityCheckReport(request: $_model.QuerySecurityCheckReportRequest): Promise<$_model.QuerySecurityCheckReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySecurityCheckReportWithOptions(request, runtime);
  }

  /**
   * Enables disposal tool authorization.
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
   * Enables disposal tool authorization.
   * 
   * @param request - StartDisposalToolServiceRequest
   * @returns StartDisposalToolServiceResponse
   */
  async startDisposalToolService(request: $_model.StartDisposalToolServiceRequest): Promise<$_model.StartDisposalToolServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDisposalToolServiceWithOptions(request, runtime);
  }

  /**
   * Enables security check.
   * 
   * @param request - StartSecurityCheckServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSecurityCheckServiceResponse
   */
  async startSecurityCheckServiceWithOptions(request: $_model.StartSecurityCheckServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSecurityCheckServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "StartSecurityCheckService",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSecurityCheckServiceResponse>(await this.callApi(params, req, runtime), new $_model.StartSecurityCheckServiceResponse({}));
  }

  /**
   * Enables security check.
   * 
   * @param request - StartSecurityCheckServiceRequest
   * @returns StartSecurityCheckServiceResponse
   */
  async startSecurityCheckService(request: $_model.StartSecurityCheckServiceRequest): Promise<$_model.StartSecurityCheckServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSecurityCheckServiceWithOptions(request, runtime);
  }

  /**
   * Submits an unblocking request.
   * 
   * @param tmpReq - SubmitApplyRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitApplyRecordResponse
   */
  async submitApplyRecordWithOptions(tmpReq: $_model.SubmitApplyRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitApplyRecordResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitApplyRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventIdList)) {
      request.eventIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventIdList, "EventIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applyRequest)) {
      query["ApplyRequest"] = request.applyRequest;
    }

    if (!$dara.isNull(request.commitmentLetter)) {
      query["CommitmentLetter"] = request.commitmentLetter;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventIdListShrink)) {
      query["EventIdList"] = request.eventIdListShrink;
    }

    if (!$dara.isNull(request.qualificationProof)) {
      query["QualificationProof"] = request.qualificationProof;
    }

    if (!$dara.isNull(request.trial)) {
      query["Trial"] = request.trial;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitApplyRecord",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitApplyRecordResponse>(await this.callApi(params, req, runtime), new $_model.SubmitApplyRecordResponse({}));
  }

  /**
   * Submits an unblocking request.
   * 
   * @param request - SubmitApplyRecordRequest
   * @returns SubmitApplyRecordResponse
   */
  async submitApplyRecord(request: $_model.SubmitApplyRecordRequest): Promise<$_model.SubmitApplyRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitApplyRecordWithOptions(request, runtime);
  }

  /**
   * Updates the pay-as-you-go binding relationship for Security Center.
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
   * Updates the pay-as-you-go binding relationship for Security Center.
   * 
   * @param request - UpdatePostPaidBindRelRequest
   * @returns UpdatePostPaidBindRelResponse
   */
  async updatePostPaidBindRel(request: $_model.UpdatePostPaidBindRelRequest): Promise<$_model.UpdatePostPaidBindRelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePostPaidBindRelWithOptions(request, runtime);
  }

  /**
   * Updates the health check result.
   * 
   * @param request - UpdateSecurityCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityCheckResultResponse
   */
  async updateSecurityCheckResultWithOptions(request: $_model.UpdateSecurityCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecurityCheckResultResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecurityCheckResult",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecurityCheckResultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecurityCheckResultResponse({}));
  }

  /**
   * Updates the health check result.
   * 
   * @param request - UpdateSecurityCheckResultRequest
   * @returns UpdateSecurityCheckResultResponse
   */
  async updateSecurityCheckResult(request: $_model.UpdateSecurityCheckResultRequest): Promise<$_model.UpdateSecurityCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecurityCheckResultWithOptions(request, runtime);
  }

}
