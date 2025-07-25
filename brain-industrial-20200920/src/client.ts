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
    this._endpoint = this.getEndpoint("brain-industrial", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: $_model.ActivateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fingerprint)) {
      body["Fingerprint"] = request.fingerprint;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateLicenseResponse>(await this.callApi(params, req, runtime), new $_model.ActivateLicenseResponse({}));
  }

  /**
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: $_model.ActivateLicenseRequest): Promise<$_model.ActivateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * 调用aics openapi
   * 
   * @param tmpReq - AicsOpenApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AicsOpenApiInvokeResponse
   */
  async aicsOpenApiInvokeWithOptions(tmpReq: $_model.AicsOpenApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AicsOpenApiInvokeResponse> {
    tmpReq.validate();
    let request = new $_model.AicsOpenApiInvokeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramShrink)) {
      body["Param"] = request.paramShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AicsOpenApiInvoke",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AicsOpenApiInvokeResponse>(await this.callApi(params, req, runtime), new $_model.AicsOpenApiInvokeResponse({}));
  }

  /**
   * 调用aics openapi
   * 
   * @param request - AicsOpenApiInvokeRequest
   * @returns AicsOpenApiInvokeResponse
   */
  async aicsOpenApiInvoke(request: $_model.AicsOpenApiInvokeRequest): Promise<$_model.AicsOpenApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aicsOpenApiInvokeWithOptions(request, runtime);
  }

  /**
   * 创建储能运行优化任务
   * 
   * @param tmpReq - CreateEssOptJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEssOptJobResponse
   */
  async createEssOptJobWithOptions(tmpReq: $_model.CreateEssOptJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEssOptJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEssOptJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.elecPrice)) {
      request.elecPriceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.elecPrice, "ElecPrice", "json");
    }

    if (!$dara.isNull(tmpReq.genPrice)) {
      request.genPriceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.genPrice, "GenPrice", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    if (!$dara.isNull(tmpReq.systemData)) {
      request.systemDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemData, "SystemData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessKey)) {
      body["BusinessKey"] = request.businessKey;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.elecPriceShrink)) {
      body["ElecPrice"] = request.elecPriceShrink;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.genPriceShrink)) {
      body["GenPrice"] = request.genPriceShrink;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemDataShrink)) {
      body["SystemData"] = request.systemDataShrink;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.topoType)) {
      body["TopoType"] = request.topoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEssOptJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEssOptJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateEssOptJobResponse({}));
  }

  /**
   * 创建储能运行优化任务
   * 
   * @param request - CreateEssOptJobRequest
   * @returns CreateEssOptJobResponse
   */
  async createEssOptJob(request: $_model.CreateEssOptJobRequest): Promise<$_model.CreateEssOptJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEssOptJobWithOptions(request, runtime);
  }

  /**
   * 创建用电负荷预测任务，历史数据来自文件url
   * 
   * @param request - CreateLoadForecastByFileUrlJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadForecastByFileUrlJobResponse
   */
  async createLoadForecastByFileUrlJobWithOptions(request: $_model.CreateLoadForecastByFileUrlJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadForecastByFileUrlJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessKey)) {
      body["BusinessKey"] = request.businessKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyUrl)) {
      body["HistoryUrl"] = request.historyUrl;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeColumn)) {
      body["TimeColumn"] = request.timeColumn;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.valueColumn)) {
      body["ValueColumn"] = request.valueColumn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadForecastByFileUrlJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadForecastByFileUrlJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadForecastByFileUrlJobResponse({}));
  }

  /**
   * 创建用电负荷预测任务，历史数据来自文件url
   * 
   * @param request - CreateLoadForecastByFileUrlJobRequest
   * @returns CreateLoadForecastByFileUrlJobResponse
   */
  async createLoadForecastByFileUrlJob(request: $_model.CreateLoadForecastByFileUrlJobRequest): Promise<$_model.CreateLoadForecastByFileUrlJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadForecastByFileUrlJobWithOptions(request, runtime);
  }

  /**
   * 创建用电负荷预测任务
   * 
   * @param tmpReq - CreateLoadForecastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadForecastJobResponse
   */
  async createLoadForecastJobWithOptions(tmpReq: $_model.CreateLoadForecastJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadForecastJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLoadForecastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.historyData)) {
      request.historyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.historyData, "HistoryData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessKey)) {
      body["BusinessKey"] = request.businessKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyDataShrink)) {
      body["HistoryData"] = request.historyDataShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadForecastJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadForecastJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadForecastJobResponse({}));
  }

  /**
   * 创建用电负荷预测任务
   * 
   * @param request - CreateLoadForecastJobRequest
   * @returns CreateLoadForecastJobResponse
   */
  async createLoadForecastJob(request: $_model.CreateLoadForecastJobRequest): Promise<$_model.CreateLoadForecastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadForecastJobWithOptions(request, runtime);
  }

  /**
   * 创建发电功率预测任务，历史数据来自文件url
   * 
   * @param tmpReq - CreatePowerForecastByFileUrlJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePowerForecastByFileUrlJobResponse
   */
  async createPowerForecastByFileUrlJobWithOptions(tmpReq: $_model.CreatePowerForecastByFileUrlJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePowerForecastByFileUrlJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePowerForecastByFileUrlJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessKey)) {
      body["BusinessKey"] = request.businessKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyUrl)) {
      body["HistoryUrl"] = request.historyUrl;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeColumn)) {
      body["TimeColumn"] = request.timeColumn;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.valueColumn)) {
      body["ValueColumn"] = request.valueColumn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePowerForecastByFileUrlJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePowerForecastByFileUrlJobResponse>(await this.callApi(params, req, runtime), new $_model.CreatePowerForecastByFileUrlJobResponse({}));
  }

  /**
   * 创建发电功率预测任务，历史数据来自文件url
   * 
   * @param request - CreatePowerForecastByFileUrlJobRequest
   * @returns CreatePowerForecastByFileUrlJobResponse
   */
  async createPowerForecastByFileUrlJob(request: $_model.CreatePowerForecastByFileUrlJobRequest): Promise<$_model.CreatePowerForecastByFileUrlJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPowerForecastByFileUrlJobWithOptions(request, runtime);
  }

  /**
   * 创建发电功率预测任务
   * 
   * @param tmpReq - CreatePowerForecastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePowerForecastJobResponse
   */
  async createPowerForecastJobWithOptions(tmpReq: $_model.CreatePowerForecastJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePowerForecastJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePowerForecastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.historyData)) {
      request.historyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.historyData, "HistoryData", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessKey)) {
      body["BusinessKey"] = request.businessKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyDataShrink)) {
      body["HistoryData"] = request.historyDataShrink;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePowerForecastJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePowerForecastJobResponse>(await this.callApi(params, req, runtime), new $_model.CreatePowerForecastJobResponse({}));
  }

  /**
   * 创建发电功率预测任务
   * 
   * @param request - CreatePowerForecastJobRequest
   * @returns CreatePowerForecastJobResponse
   */
  async createPowerForecastJob(request: $_model.CreatePowerForecastJobRequest): Promise<$_model.CreatePowerForecastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPowerForecastJobWithOptions(request, runtime);
  }

  /**
   * 查询aivpp算法job
   * 
   * @param request - GetAivppAlgoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAivppAlgoJobResponse
   */
  async getAivppAlgoJobWithOptions(request: $_model.GetAivppAlgoJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAivppAlgoJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAivppAlgoJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAivppAlgoJobResponse>(await this.callApi(params, req, runtime), new $_model.GetAivppAlgoJobResponse({}));
  }

  /**
   * 查询aivpp算法job
   * 
   * @param request - GetAivppAlgoJobRequest
   * @returns GetAivppAlgoJobResponse
   */
  async getAivppAlgoJob(request: $_model.GetAivppAlgoJobRequest): Promise<$_model.GetAivppAlgoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAivppAlgoJobWithOptions(request, runtime);
  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicenseResponse
   */
  async getLicenseWithOptions(request: $_model.GetLicenseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLicenseResponse>(await this.callApi(params, req, runtime), new $_model.GetLicenseResponse({}));
  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @returns GetLicenseResponse
   */
  async getLicense(request: $_model.GetLicenseRequest): Promise<$_model.GetLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicenseWithOptions(request, runtime);
  }

  /**
   * 获取用户AIVPP资源列表
   * 
   * @param request - ListAivppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAivppResourcesResponse
   */
  async listAivppResourcesWithOptions(request: $_model.ListAivppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAivppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAivppResources",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAivppResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListAivppResourcesResponse({}));
  }

  /**
   * 获取用户AIVPP资源列表
   * 
   * @param request - ListAivppResourcesRequest
   * @returns ListAivppResourcesResponse
   */
  async listAivppResources(request: $_model.ListAivppResourcesRequest): Promise<$_model.ListAivppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAivppResourcesWithOptions(request, runtime);
  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLicensesResponse
   */
  async listLicensesWithOptions(request: $_model.ListLicensesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLicensesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryStr)) {
      body["QueryStr"] = request.queryStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLicenses",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLicensesResponse>(await this.callApi(params, req, runtime), new $_model.ListLicensesResponse({}));
  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @returns ListLicensesResponse
   */
  async listLicenses(request: $_model.ListLicensesRequest): Promise<$_model.ListLicensesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLicensesWithOptions(request, runtime);
  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResourcesResponse
   */
  async listUserResourcesWithOptions(request: $_model.ListUserResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserResources",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserResourcesResponse({}));
  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @returns ListUserResourcesResponse
   */
  async listUserResources(request: $_model.ListUserResourcesRequest): Promise<$_model.ListUserResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserResourcesWithOptions(request, runtime);
  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescriptionWithOptions(request: $_model.UpdateLicenseDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLicenseDescriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLicenseDescription",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLicenseDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLicenseDescriptionResponse({}));
  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescription(request: $_model.UpdateLicenseDescriptionRequest): Promise<$_model.UpdateLicenseDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLicenseDescriptionWithOptions(request, runtime);
  }

}
