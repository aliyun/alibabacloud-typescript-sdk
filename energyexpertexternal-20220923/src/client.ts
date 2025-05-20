// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import * as $OSSUtil from '@alicloud/oss-util';
import * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("energyexpertexternal", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Get Document Results
   * 
   * @remarks
   * Users obtain real-time VL results by uploading a document URL.
   * 
   * @param request - AnalyzeVlRealtimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeVlRealtimeResponse
   */
  async analyzeVlRealtimeWithOptions(request: $_model.AnalyzeVlRealtimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeVlRealtimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeVlRealtime",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/analyzeVlRealtime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeVlRealtimeResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeVlRealtimeResponse({}));
  }

  /**
   * Get Document Results
   * 
   * @remarks
   * Users obtain real-time VL results by uploading a document URL.
   * 
   * @param request - AnalyzeVlRealtimeRequest
   * @returns AnalyzeVlRealtimeResponse
   */
  async analyzeVlRealtime(request: $_model.AnalyzeVlRealtimeRequest): Promise<$_model.AnalyzeVlRealtimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.analyzeVlRealtimeWithOptions(request, headers, runtime);
  }

  async analyzeVlRealtimeAdvance(request: $_model.AnalyzeVlRealtimeAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeVlRealtimeResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let analyzeVlRealtimeReq = new $_model.AnalyzeVlRealtimeRequest({ });
    OpenApiUtil.convert(request, analyzeVlRealtimeReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      analyzeVlRealtimeReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let analyzeVlRealtimeResp = await this.analyzeVlRealtimeWithOptions(analyzeVlRealtimeReq, headers, runtime);
    return analyzeVlRealtimeResp;
  }

  /**
   * 策略执行状态反馈
   * 
   * @param request - BatchSaveInstructionStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchSaveInstructionStatusResponse
   */
  async batchSaveInstructionStatusWithOptions(request: $_model.BatchSaveInstructionStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchSaveInstructionStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!$dara.isNull(request.pKey)) {
      body["pKey"] = request.pKey;
    }

    if (!$dara.isNull(request.statusList)) {
      body["statusList"] = request.statusList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchSaveInstructionStatus",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/batchSaveInstructionStatus`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchSaveInstructionStatusResponse>(await this.callApi(params, req, runtime), new $_model.BatchSaveInstructionStatusResponse({}));
  }

  /**
   * 策略执行状态反馈
   * 
   * @param request - BatchSaveInstructionStatusRequest
   * @returns BatchSaveInstructionStatusResponse
   */
  async batchSaveInstructionStatus(request: $_model.BatchSaveInstructionStatusRequest): Promise<$_model.BatchSaveInstructionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchSaveInstructionStatusWithOptions(request, headers, runtime);
  }

  /**
   * 批量设置空调站点运行计划
   * 
   * @param request - BatchUpdateSystemRunningPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateSystemRunningPlanResponse
   */
  async batchUpdateSystemRunningPlanWithOptions(request: $_model.BatchUpdateSystemRunningPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateSystemRunningPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.controlType)) {
      body["controlType"] = request.controlType;
    }

    if (!$dara.isNull(request.dateType)) {
      body["dateType"] = request.dateType;
    }

    if (!$dara.isNull(request.earliestStartupTime)) {
      body["earliestStartupTime"] = request.earliestStartupTime;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!$dara.isNull(request.latestShutdownTime)) {
      body["latestShutdownTime"] = request.latestShutdownTime;
    }

    if (!$dara.isNull(request.maxCarbonDioxide)) {
      body["maxCarbonDioxide"] = request.maxCarbonDioxide;
    }

    if (!$dara.isNull(request.maxTem)) {
      body["maxTem"] = request.maxTem;
    }

    if (!$dara.isNull(request.minTem)) {
      body["minTem"] = request.minTem;
    }

    if (!$dara.isNull(request.seasonMode)) {
      body["seasonMode"] = request.seasonMode;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    if (!$dara.isNull(request.workingEndTime)) {
      body["workingEndTime"] = request.workingEndTime;
    }

    if (!$dara.isNull(request.workingStartTime)) {
      body["workingStartTime"] = request.workingStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateSystemRunningPlan",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/batchUpdateSystemRunningPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateSystemRunningPlanResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateSystemRunningPlanResponse({}));
  }

  /**
   * 批量设置空调站点运行计划
   * 
   * @param request - BatchUpdateSystemRunningPlanRequest
   * @returns BatchUpdateSystemRunningPlanResponse
   */
  async batchUpdateSystemRunningPlan(request: $_model.BatchUpdateSystemRunningPlanRequest): Promise<$_model.BatchUpdateSystemRunningPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchUpdateSystemRunningPlanWithOptions(request, headers, runtime);
  }

  /**
   * Knowledge Base Q\\&A
   * 
   * @remarks
   * - The interface provides Q&A services within the scope of the selected directory in the session.
   * - The sessionId information is obtained through GetChatSessionList.
   * - You can also create a new session via the CreateChatSession interface.
   * 
   * @param request - ChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChatResponse
   */
  async chatWithOptions(request: $_model.ChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.question)) {
      body["question"] = request.question;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Chat",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChatResponse>(await this.callApi(params, req, runtime), new $_model.ChatResponse({}));
  }

  /**
   * Knowledge Base Q\\&A
   * 
   * @remarks
   * - The interface provides Q&A services within the scope of the selected directory in the session.
   * - The sessionId information is obtained through GetChatSessionList.
   * - You can also create a new session via the CreateChatSession interface.
   * 
   * @param request - ChatRequest
   * @returns ChatResponse
   */
  async chat(request: $_model.ChatRequest): Promise<$_model.ChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.chatWithOptions(request, headers, runtime);
  }

  /**
   * Create Q&A Window
   * 
   * @param request - CreateChatSessionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChatSessionResponse
   */
  async createChatSessionWithOptions(request: $_model.CreateChatSessionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChatSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChatSession",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/chat/session/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChatSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateChatSessionResponse({}));
  }

  /**
   * Create Q&A Window
   * 
   * @param request - CreateChatSessionRequest
   * @returns CreateChatSessionResponse
   */
  async createChatSession(request: $_model.CreateChatSessionRequest): Promise<$_model.CreateChatSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createChatSessionWithOptions(request, headers, runtime);
  }

  /**
   * 编辑禁用设备
   * 
   * @param request - EditProhibitedDevicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditProhibitedDevicesResponse
   */
  async editProhibitedDevicesWithOptions(request: $_model.EditProhibitedDevicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EditProhibitedDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!$dara.isNull(request.hvacDeviceConfigVOList)) {
      body["hvacDeviceConfigVOList"] = request.hvacDeviceConfigVOList;
    }

    if (!$dara.isNull(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditProhibitedDevices",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/editProhibitedDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditProhibitedDevicesResponse>(await this.callApi(params, req, runtime), new $_model.EditProhibitedDevicesResponse({}));
  }

  /**
   * 编辑禁用设备
   * 
   * @param request - EditProhibitedDevicesRequest
   * @returns EditProhibitedDevicesResponse
   */
  async editProhibitedDevices(request: $_model.EditProhibitedDevicesRequest): Promise<$_model.EditProhibitedDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editProhibitedDevicesWithOptions(request, headers, runtime);
  }

  /**
   * 编辑不利区设备
   * 
   * @param request - EditUnfavorableAreaDevicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditUnfavorableAreaDevicesResponse
   */
  async editUnfavorableAreaDevicesWithOptions(request: $_model.EditUnfavorableAreaDevicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EditUnfavorableAreaDevicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!$dara.isNull(request.hvacDeviceConfigVOList)) {
      body["hvacDeviceConfigVOList"] = request.hvacDeviceConfigVOList;
    }

    if (!$dara.isNull(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditUnfavorableAreaDevices",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/editUnfavorableAreaDevices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditUnfavorableAreaDevicesResponse>(await this.callApi(params, req, runtime), new $_model.EditUnfavorableAreaDevicesResponse({}));
  }

  /**
   * 编辑不利区设备
   * 
   * @param request - EditUnfavorableAreaDevicesRequest
   * @returns EditUnfavorableAreaDevicesResponse
   */
  async editUnfavorableAreaDevices(request: $_model.EditUnfavorableAreaDevicesRequest): Promise<$_model.EditUnfavorableAreaDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editUnfavorableAreaDevicesWithOptions(request, headers, runtime);
  }

  /**
   * Generate a report of the specified carbon footprint.
   * 
   * @remarks
   * Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   * 
   * @param request - GenerateResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateResultResponse
   */
  async generateResultWithOptions(request: $_model.GenerateResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/generate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateResultResponse>(await this.callApi(params, req, runtime), new $_model.GenerateResultResponse({}));
  }

  /**
   * Generate a report of the specified carbon footprint.
   * 
   * @remarks
   * Given a product ID, this API initiates a task to calculate the carbon footprint result for the corresponding product. The task\\"s status can be checked using the `IsCompleted` API. Following the generation of results, other result inquiry APIs can be accessed for display content.
   * 
   * @param request - GenerateResultRequest
   * @returns GenerateResultResponse
   */
  async generateResult(request: $_model.GenerateResultRequest): Promise<$_model.GenerateResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateResultWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain electrical constitute analysis data.
   * 
   * @param request - GetAreaElecConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAreaElecConstituteResponse
   */
  async getAreaElecConstituteWithOptions(request: $_model.GetAreaElecConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAreaElecConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAreaElecConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/area`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAreaElecConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetAreaElecConstituteResponse({}));
  }

  /**
   * This interface is used to obtain electrical constitute analysis data.
   * 
   * @param request - GetAreaElecConstituteRequest
   * @returns GetAreaElecConstituteResponse
   */
  async getAreaElecConstitute(request: $_model.GetAreaElecConstituteRequest): Promise<$_model.GetAreaElecConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAreaElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Get trends in carbon emissions.
   * 
   * @param request - GetCarbonEmissionTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCarbonEmissionTrendResponse
   */
  async getCarbonEmissionTrendWithOptions(request: $_model.GetCarbonEmissionTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCarbonEmissionTrendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.trendType)) {
      body["trendType"] = request.trendType;
    }

    if (!$dara.isNull(request.yearList)) {
      body["yearList"] = request.yearList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCarbonEmissionTrend",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/trend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCarbonEmissionTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetCarbonEmissionTrendResponse({}));
  }

  /**
   * Get trends in carbon emissions.
   * 
   * @param request - GetCarbonEmissionTrendRequest
   * @returns GetCarbonEmissionTrendResponse
   */
  async getCarbonEmissionTrend(request: $_model.GetCarbonEmissionTrendRequest): Promise<$_model.GetCarbonEmissionTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCarbonEmissionTrendWithOptions(request, headers, runtime);
  }

  /**
   * Get Q&A folder List
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatFolderListResponse
   */
  async getChatFolderListWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatFolderListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatFolderList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/chat/folder/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatFolderListResponse>(await this.callApi(params, req, runtime), new $_model.GetChatFolderListResponse({}));
  }

  /**
   * Get Q&A folder List
   * @returns GetChatFolderListResponse
   */
  async getChatFolderList(): Promise<$_model.GetChatFolderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatFolderListWithOptions(headers, runtime);
  }

  /**
   * Retrieve the historical documents of a session
   * 
   * @remarks
   * - This API retrieves the list of historical documents within a session by passing in the session ID.
   * - The sessionId information is obtained through GetChatSessionList.
   * - A new session can also be created using the CreateChatSession interface.
   * 
   * @param request - GetChatListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatListResponse
   */
  async getChatListWithOptions(request: $_model.GetChatListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/chat/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatListResponse>(await this.callApi(params, req, runtime), new $_model.GetChatListResponse({}));
  }

  /**
   * Retrieve the historical documents of a session
   * 
   * @remarks
   * - This API retrieves the list of historical documents within a session by passing in the session ID.
   * - The sessionId information is obtained through GetChatSessionList.
   * - A new session can also be created using the CreateChatSession interface.
   * 
   * @param request - GetChatListRequest
   * @returns GetChatListResponse
   */
  async getChatList(request: $_model.GetChatListRequest): Promise<$_model.GetChatListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatListWithOptions(request, headers, runtime);
  }

  /**
   * Get Q&A Session List
   * 
   * @param request - GetChatSessionListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChatSessionListResponse
   */
  async getChatSessionListWithOptions(request: $_model.GetChatSessionListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChatSessionListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChatSessionList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/chat/session/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChatSessionListResponse>(await this.callApi(params, req, runtime), new $_model.GetChatSessionListResponse({}));
  }

  /**
   * Get Q&A Session List
   * 
   * @param request - GetChatSessionListRequest
   * @returns GetChatSessionListResponse
   */
  async getChatSessionList(request: $_model.GetChatSessionListRequest): Promise<$_model.GetChatSessionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChatSessionListWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain the details category of a data item.
   * 
   * @remarks
   * - obtain data item detail list under the current enterprise.
   * 
   * @param request - GetDataItemListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataItemListResponse
   */
  async getDataItemListWithOptions(request: $_model.GetDataItemListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataItemListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataItemList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataItemListResponse>(await this.callApi(params, req, runtime), new $_model.GetDataItemListResponse({}));
  }

  /**
   * This interface is used to obtain the details category of a data item.
   * 
   * @remarks
   * - obtain data item detail list under the current enterprise.
   * 
   * @param request - GetDataItemListRequest
   * @returns GetDataItemListResponse
   */
  async getDataItemList(request: $_model.GetDataItemListRequest): Promise<$_model.GetDataItemListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataItemListWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the data quality evaluation results DQR and DQI.
   * 
   * @remarks
   * This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   * 
   * @param request - GetDataQualityAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityAnalysisResponse
   */
  async getDataQualityAnalysisWithOptions(request: $_model.GetDataQualityAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataQualityAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.dataQualityEvaluationType)) {
      body["dataQualityEvaluationType"] = request.dataQualityEvaluationType;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataQualityAnalysis",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/data/quality/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataQualityAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.GetDataQualityAnalysisResponse({}));
  }

  /**
   * Obtain the data quality evaluation results DQR and DQI.
   * 
   * @remarks
   * This API returns the data quality evaluation results based on the user-provided product ID. It\\"s useful for understanding the data quality of the carbon emission factors for each inventory of the product.
   * 
   * @param request - GetDataQualityAnalysisRequest
   * @returns GetDataQualityAnalysisResponse
   */
  async getDataQualityAnalysis(request: $_model.GetDataQualityAnalysisRequest): Promise<$_model.GetDataQualityAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataQualityAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceInfoResponse
   */
  async getDeviceInfoWithOptions(request: $_model.GetDeviceInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceId)) {
      query["deviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.ds)) {
      query["ds"] = request.ds;
    }

    if (!$dara.isNull(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceInfo",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceInfoResponse({}));
  }

  /**
   * Queries the information about a device at a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can call this operation to query the parameters of a data collection device based on the device ID. If the verification is passed, the device parameters are returned. If the verification fails, a null value is returned.
   * *   You can query the parameters of a single device by day. If data of the device does not exist, a null value is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceInfoRequest
   * @returns GetDeviceInfoResponse
   */
  async getDeviceInfo(request: $_model.GetDeviceInfoRequest): Promise<$_model.GetDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the devices of a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeviceListResponse
   */
  async getDeviceListWithOptions(request: $_model.GetDeviceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeviceListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.factoryId)) {
      query["factoryId"] = request.factoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeviceList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getDeviceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeviceListResponse>(await this.callApi(params, req, runtime), new $_model.GetDeviceListResponse({}));
  }

  /**
   * Queries the devices of a site that is activated by using an Alibaba Cloud account.
   * 
   * @remarks
   *   You can query the information about data collection devices of a site based on the ID of the site. If the verification is passed, the information about the devices of the site is returned. If the verification fails, a null value is returned.
   * *   Virtual meters at the site are not returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param request - GetDeviceListRequest
   * @returns GetDeviceListResponse
   */
  async getDeviceList(request: $_model.GetDeviceListRequest): Promise<$_model.GetDeviceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeviceListWithOptions(request, headers, runtime);
  }

  /**
   * For Querying Information Extraction Result.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitDocExtractionTaskAdvance or SubmitDocExtractionTask.
   * The query results can reflect one of three statuses: processing, successfully completed, or failed.
   * 
   * @param request - GetDocExtractionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocExtractionResultResponse
   */
  async getDocExtractionResultWithOptions(request: $_model.GetDocExtractionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocExtractionResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocExtractionResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/getDocExtractionResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocExtractionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocExtractionResultResponse({}));
  }

  /**
   * For Querying Information Extraction Result.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitDocExtractionTaskAdvance or SubmitDocExtractionTask.
   * The query results can reflect one of three statuses: processing, successfully completed, or failed.
   * 
   * @param request - GetDocExtractionResultRequest
   * @returns GetDocExtractionResultResponse
   */
  async getDocExtractionResult(request: $_model.GetDocExtractionResultRequest): Promise<$_model.GetDocExtractionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocExtractionResultWithOptions(request, headers, runtime);
  }

  /**
   * For Querying Document Parsing Results.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitDocParsingTaskAdvance or SubmitDocParsingTask.
   * The query results can be one of three statuses: processing, successful, or failed.
   * 
   * @param request - GetDocParsingResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocParsingResultResponse
   */
  async getDocParsingResultWithOptions(request: $_model.GetDocParsingResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocParsingResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.returnFormat)) {
      body["returnFormat"] = request.returnFormat;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocParsingResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/getDocParsingResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocParsingResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocParsingResultResponse({}));
  }

  /**
   * For Querying Document Parsing Results.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitDocParsingTaskAdvance or SubmitDocParsingTask.
   * The query results can be one of three statuses: processing, successful, or failed.
   * 
   * @param request - GetDocParsingResultRequest
   * @returns GetDocParsingResultResponse
   */
  async getDocParsingResult(request: $_model.GetDocParsingResultRequest): Promise<$_model.GetDocParsingResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocParsingResultWithOptions(request, headers, runtime);
  }

  /**
   * Get document parsing/extraction result
   * 
   * @param request - GetDocumentAnalyzeResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentAnalyzeResultResponse
   */
  async getDocumentAnalyzeResultWithOptions(request: $_model.GetDocumentAnalyzeResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentAnalyzeResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentAnalyzeResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/getDocumentAnalyzeResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentAnalyzeResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDocumentAnalyzeResultResponse({}));
  }

  /**
   * Get document parsing/extraction result
   * 
   * @param request - GetDocumentAnalyzeResultRequest
   * @returns GetDocumentAnalyzeResultResponse
   */
  async getDocumentAnalyzeResult(request: $_model.GetDocumentAnalyzeResultRequest): Promise<$_model.GetDocumentAnalyzeResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeResultWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain power composition analysis data.
   * 
   * @param request - GetElecConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElecConstituteResponse
   */
  async getElecConstituteWithOptions(request: $_model.GetElecConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetElecConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElecConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetElecConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetElecConstituteResponse({}));
  }

  /**
   * This interface is used to obtain power composition analysis data.
   * 
   * @param request - GetElecConstituteRequest
   * @returns GetElecConstituteResponse
   */
  async getElecConstitute(request: $_model.GetElecConstituteRequest): Promise<$_model.GetElecConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecConstituteWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain power trend analysis data.
   * 
   * @param request - GetElecTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElecTrendResponse
   */
  async getElecTrendWithOptions(request: $_model.GetElecTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetElecTrendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.yearList)) {
      body["yearList"] = request.yearList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElecTrend",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/elec/trend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetElecTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetElecTrendResponse({}));
  }

  /**
   * This interface is used to obtain power trend analysis data.
   * 
   * @param request - GetElecTrendRequest
   * @returns GetElecTrendResponse
   */
  async getElecTrend(request: $_model.GetElecTrendRequest): Promise<$_model.GetElecTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElecTrendWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the emission source composition.
   * 
   * @param request - GetEmissionSourceConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmissionSourceConstituteResponse
   */
  async getEmissionSourceConstituteWithOptions(request: $_model.GetEmissionSourceConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmissionSourceConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmissionSourceConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmissionSourceConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetEmissionSourceConstituteResponse({}));
  }

  /**
   * Obtain the emission source composition.
   * 
   * @param request - GetEmissionSourceConstituteRequest
   * @returns GetEmissionSourceConstituteResponse
   */
  async getEmissionSourceConstitute(request: $_model.GetEmissionSourceConstituteRequest): Promise<$_model.GetEmissionSourceConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSourceConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Get a summary of carbon emissions.
   * 
   * @param request - GetEmissionSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmissionSummaryResponse
   */
  async getEmissionSummaryWithOptions(request: $_model.GetEmissionSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmissionSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmissionSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmissionSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetEmissionSummaryResponse({}));
  }

  /**
   * Get a summary of carbon emissions.
   * 
   * @param request - GetEmissionSummaryRequest
   * @returns GetEmissionSummaryResponse
   */
  async getEmissionSummary(request: $_model.GetEmissionSummaryRequest): Promise<$_model.GetEmissionSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmissionSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Gets the result details of the environmental impact category.
   * 
   * @remarks
   * This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   * 
   * @param request - GetEpdInventoryConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEpdInventoryConstituteResponse
   */
  async getEpdInventoryConstituteWithOptions(request: $_model.GetEpdInventoryConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEpdInventoryConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEpdInventoryConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/epd/inventory/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEpdInventoryConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetEpdInventoryConstituteResponse({}));
  }

  /**
   * Gets the result details of the environmental impact category.
   * 
   * @remarks
   * This API returns the emission amounts for various environmental impact categories at different levels for the given product ID. It helps understand the emission quantities for different environmental impact categories and inventories of the product.
   * 
   * @param request - GetEpdInventoryConstituteRequest
   * @returns GetEpdInventoryConstituteResponse
   */
  async getEpdInventoryConstitute(request: $_model.GetEpdInventoryConstituteRequest): Promise<$_model.GetEpdInventoryConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Obtain the total amount of emissions for various environmental impacts.
   * 
   * @remarks
   * This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   * 
   * @param request - GetEpdSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEpdSummaryResponse
   */
  async getEpdSummaryWithOptions(request: $_model.GetEpdSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEpdSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEpdSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/epd/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEpdSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetEpdSummaryResponse({}));
  }

  /**
   * Obtain the total amount of emissions for various environmental impacts.
   * 
   * @remarks
   * This API takes a product ID from the user and returns the summary of environmental impact generated for the product. This info helps understand the overall emissions for different environmental impact categories of the product.
   * 
   * @param request - GetEpdSummaryRequest
   * @returns GetEpdSummaryResponse
   */
  async getEpdSummary(request: $_model.GetEpdSummaryRequest): Promise<$_model.GetEpdSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEpdSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Get the list of product carbon footprints.
   * 
   * @remarks
   * With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   * 
   * @param request - GetFootprintListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFootprintListResponse
   */
  async getFootprintListWithOptions(request: $_model.GetFootprintListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFootprintListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["currentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFootprintList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/product/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFootprintListResponse>(await this.callApi(params, req, runtime), new $_model.GetFootprintListResponse({}));
  }

  /**
   * Get the list of product carbon footprints.
   * 
   * @remarks
   * With user-specified parameters such as enterprise code, current page, and page size, this API returns a list of matching product carbon footprints (or supply chain carbon footprints), including product names and product IDs. The product ID can be used as input parameters in other APIs to get the corresponding product\\"s detailed information.
   * 
   * @param request - GetFootprintListRequest
   * @returns GetFootprintListResponse
   */
  async getFootprintList(request: $_model.GetFootprintListRequest): Promise<$_model.GetFootprintListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFootprintListWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to obtain gas composition analysis.
   * 
   * @param request - GetGasConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGasConstituteResponse
   */
  async getGasConstituteWithOptions(request: $_model.GetGasConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGasConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGasConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/gas/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGasConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetGasConstituteResponse({}));
  }

  /**
   * This interface is used to obtain gas composition analysis.
   * 
   * @param request - GetGasConstituteRequest
   * @returns GetGasConstituteResponse
   */
  async getGasConstitute(request: $_model.GetGasConstituteRequest): Promise<$_model.GetGasConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGasConstituteWithOptions(request, headers, runtime);
  }

  /**
   * obtain the active carbon reduction ranking list.
   * 
   * @remarks
   * This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   * 
   * @param request - GetGwpBenchmarkListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpBenchmarkListResponse
   */
  async getGwpBenchmarkListWithOptions(request: $_model.GetGwpBenchmarkListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGwpBenchmarkListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGwpBenchmarkList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/benchmark/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGwpBenchmarkListResponse>(await this.callApi(params, req, runtime), new $_model.GetGwpBenchmarkListResponse({}));
  }

  /**
   * obtain the active carbon reduction ranking list.
   * 
   * @remarks
   * This interface returns a list of proactive carbon reduction information given product ID. It\\"s used to understand the carbon reduction efforts at various levels of the product.
   * 
   * @param request - GetGwpBenchmarkListRequest
   * @returns GetGwpBenchmarkListResponse
   */
  async getGwpBenchmarkList(request: $_model.GetGwpBenchmarkListRequest): Promise<$_model.GetGwpBenchmarkListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkListWithOptions(request, headers, runtime);
  }

  /**
   * This API is to obtain the total amount of active carbon reduction.
   * 
   * @remarks
   * The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   * 
   * @param request - GetGwpBenchmarkSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpBenchmarkSummaryResponse
   */
  async getGwpBenchmarkSummaryWithOptions(request: $_model.GetGwpBenchmarkSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGwpBenchmarkSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGwpBenchmarkSummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/benchmark/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGwpBenchmarkSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetGwpBenchmarkSummaryResponse({}));
  }

  /**
   * This API is to obtain the total amount of active carbon reduction.
   * 
   * @remarks
   * The API takes a product ID and returns data on the carbon emissions reduction along with a list of the top four contributors to carbon reduction. This info helps understand the total carbon reduction of the product and its main sources.
   * 
   * @param request - GetGwpBenchmarkSummaryRequest
   * @returns GetGwpBenchmarkSummaryResponse
   */
  async getGwpBenchmarkSummary(request: $_model.GetGwpBenchmarkSummaryRequest): Promise<$_model.GetGwpBenchmarkSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpBenchmarkSummaryWithOptions(request, headers, runtime);
  }

  /**
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @remarks
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @param request - GetGwpInventoryConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpInventoryConstituteResponse
   */
  async getGwpInventoryConstituteWithOptions(request: $_model.GetGwpInventoryConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGwpInventoryConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGwpInventoryConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/inventory/constitute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGwpInventoryConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetGwpInventoryConstituteResponse({}));
  }

  /**
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @remarks
   * Used to obtain the carbon emission composition analysis of a specified product. Carbon emission composition analysis includes two analysis dimensions: inventory and type. In the rendering effect, including a hierarchical list and pie chart.
   * 
   * @param request - GetGwpInventoryConstituteRequest
   * @returns GetGwpInventoryConstituteResponse
   */
  async getGwpInventoryConstitute(request: $_model.GetGwpInventoryConstituteRequest): Promise<$_model.GetGwpInventoryConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventoryConstituteWithOptions(request, headers, runtime);
  }

  /**
   * This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   * 
   * @remarks
   * Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   * 
   * @param request - GetGwpInventorySummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGwpInventorySummaryResponse
   */
  async getGwpInventorySummaryWithOptions(request: $_model.GetGwpInventorySummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGwpInventorySummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGwpInventorySummary",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/gwp/inventory/summary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGwpInventorySummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetGwpInventorySummaryResponse({}));
  }

  /**
   * This API is used to obtain the total carbon footprint of a product and the top four types of carbon footprint contribution.
   * 
   * @remarks
   * Returns the total carbon footprint data for the user-specified product ID, along with details on the top four contributors to the carbon footprint, helping to understand the overall carbon footprint and its main components.
   * 
   * @param request - GetGwpInventorySummaryRequest
   * @returns GetGwpInventorySummaryResponse
   */
  async getGwpInventorySummary(request: $_model.GetGwpInventorySummaryRequest): Promise<$_model.GetGwpInventorySummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGwpInventorySummaryWithOptions(request, headers, runtime);
  }

  /**
   * Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   * 
   * @remarks
   * This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   * 
   * @param request - GetInventoryListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInventoryListResponse
   */
  async getInventoryListWithOptions(request: $_model.GetInventoryListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInventoryListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.emissionType)) {
      body["emissionType"] = request.emissionType;
    }

    if (!$dara.isNull(request.group)) {
      body["group"] = request.group;
    }

    if (!$dara.isNull(request.methodType)) {
      body["methodType"] = request.methodType;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInventoryList",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/inventory/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInventoryListResponse>(await this.callApi(params, req, runtime), new $_model.GetInventoryListResponse({}));
  }

  /**
   * Get the list of emissions in descending order under the specified environmental impact (methodType), specified aggregate level (group), and specified calculation mode (emissionType).
   * 
   * @remarks
   * This interface retrieves a descending order list of emissions for a specified product ID, environmental impact method, group level, and calculation method. It\\"s used to understand various environmental impact emission scenarios.
   * 
   * @param request - GetInventoryListRequest
   * @returns GetInventoryListResponse
   */
  async getInventoryList(request: $_model.GetInventoryListRequest): Promise<$_model.GetInventoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInventoryListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   * 
   * @remarks
   *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgAndFactoryResponse
   */
  async getOrgAndFactoryWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrgAndFactoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrgAndFactory",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/external/getOrgAndFactory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrgAndFactoryResponse>(await this.callApi(params, req, runtime), new $_model.GetOrgAndFactoryResponse({}));
  }

  /**
   * Queries the organizations and sites that are activated by using an Alibaba Cloud account. You cannot call this operation to query the organizations or sites that have not been activated in the console.
   * 
   * @remarks
   *   If an activated site exists, the information about the site and the organization to which the site belongs is returned. If no activated site exists, null is returned.
   * - By current, endpoint only supports Hangzhou: `energyexpertexternal.cn-hangzhou.aliyuncs.com`.
   * - To use this API, you need to be added to the whitelist. Please contact us through  <props="china">[official website](https://energy.aliyun.com/ifa/web/defaultLoginPage?adapter=aliyun#/consult?source=%E8%83%BD%E8%80%97%E5%AE%9D%E7%99%BB%E5%BD%95%E9%A1%B5%EF%BC%88WEB%EF%BC%89) 
   * <props="intl">[official website](https://energy.alibabacloud.com/common?adapter=aliyun&lang=en-US#/home/en) to apply for whitelist activation.
   * @returns GetOrgAndFactoryResponse
   */
  async getOrgAndFactory(): Promise<$_model.GetOrgAndFactoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgAndFactoryWithOptions(headers, runtime);
  }

  /**
   * This interface is used to obtain carbon inventory organization analysis data.
   * 
   * @param request - GetOrgConstituteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrgConstituteResponse
   */
  async getOrgConstituteWithOptions(request: $_model.GetOrgConstituteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrgConstituteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.moduleCode)) {
      body["moduleCode"] = request.moduleCode;
    }

    if (!$dara.isNull(request.moduleType)) {
      body["moduleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrgConstitute",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/analysis/org`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrgConstituteResponse>(await this.callApi(params, req, runtime), new $_model.GetOrgConstituteResponse({}));
  }

  /**
   * This interface is used to obtain carbon inventory organization analysis data.
   * 
   * @param request - GetOrgConstituteRequest
   * @returns GetOrgConstituteResponse
   */
  async getOrgConstitute(request: $_model.GetOrgConstituteRequest): Promise<$_model.GetOrgConstituteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrgConstituteWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the oss address of the Product Carbon footprint Report.
   * 
   * @remarks
   * With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   * 
   * @param request - GetPcrInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPcrInfoResponse
   */
  async getPcrInfoWithOptions(request: $_model.GetPcrInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPcrInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPcrInfo",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/pcr/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPcrInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetPcrInfoResponse({}));
  }

  /**
   * Obtains the oss address of the Product Carbon footprint Report.
   * 
   * @remarks
   * With the user-specified product ID, this interface retrieves detailed information and download links for previously generated PCR reports. To use it, two conditions must be met: 1) the result has already been generated; 2) the PCR report has been created.
   * 
   * @param request - GetPcrInfoRequest
   * @returns GetPcrInfoResponse
   */
  async getPcrInfo(request: $_model.GetPcrInfoRequest): Promise<$_model.GetPcrInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPcrInfoWithOptions(request, headers, runtime);
  }

  /**
   * Get carbon reduction recommendations.
   * 
   * @remarks
   * This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   * 
   * @param request - GetReductionProposalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReductionProposalResponse
   */
  async getReductionProposalWithOptions(request: $_model.GetReductionProposalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReductionProposalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.dataQualityEvaluationType)) {
      body["dataQualityEvaluationType"] = request.dataQualityEvaluationType;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReductionProposal",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/reduction/proposal`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReductionProposalResponse>(await this.callApi(params, req, runtime), new $_model.GetReductionProposalResponse({}));
  }

  /**
   * Get carbon reduction recommendations.
   * 
   * @remarks
   * This API returns carbon reduction proposals based on the product ID. It\\"s useful for understanding optimization tips to reduce the carbon emissions associated with a product.
   * 
   * @param request - GetReductionProposalRequest
   * @returns GetReductionProposalResponse
   */
  async getReductionProposal(request: $_model.GetReductionProposalRequest): Promise<$_model.GetReductionProposalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReductionProposalWithOptions(request, headers, runtime);
  }

  /**
   * For Querying Qwen-VL Model Information Extraction Results.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitVLExtractionTask or SubmitVLExtractionTaskAdvance.
   * The query results can be in one of three statuses: processing, successfully completed, or failed.
   * 
   * @param request - GetVLExtractionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVLExtractionResultResponse
   */
  async getVLExtractionResultWithOptions(request: $_model.GetVLExtractionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVLExtractionResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVLExtractionResult",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/getVLExtractionResult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVLExtractionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetVLExtractionResultResponse({}));
  }

  /**
   * For Querying Qwen-VL Model Information Extraction Results.
   * The input parameter taskId is obtained from the taskId returned by the interfaces SubmitVLExtractionTask or SubmitVLExtractionTaskAdvance.
   * The query results can be in one of three statuses: processing, successfully completed, or failed.
   * 
   * @param request - GetVLExtractionResultRequest
   * @returns GetVLExtractionResultResponse
   */
  async getVLExtractionResult(request: $_model.GetVLExtractionResultRequest): Promise<$_model.GetVLExtractionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVLExtractionResultWithOptions(request, headers, runtime);
  }

  /**
   * Check if the result generation is complete.
   * 
   * @remarks
   * This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   * 
   * @param request - IsCompletedRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IsCompletedResponse
   */
  async isCompletedWithOptions(request: $_model.IsCompletedRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.IsCompletedResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productType)) {
      body["productType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "IsCompleted",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/footprint/result/completed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.IsCompletedResponse>(await this.callApi(params, req, runtime), new $_model.IsCompletedResponse({}));
  }

  /**
   * Check if the result generation is complete.
   * 
   * @remarks
   * This API checks the completion status of generating a report. It should be used before calling other result APIs, as they will only display content once the report generation is complete.
   * 
   * @param request - IsCompletedRequest
   * @returns IsCompletedResponse
   */
  async isCompleted(request: $_model.IsCompletedRequest): Promise<$_model.IsCompletedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.isCompletedWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to push device measuring point data, such as power meter voltage and other data.
   * 
   * @param request - PushDeviceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDeviceDataResponse
   */
  async pushDeviceDataWithOptions(request: $_model.PushDeviceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushDeviceDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceType)) {
      body["deviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.devices)) {
      body["devices"] = request.devices;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushDeviceData",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/data/increment/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushDeviceDataResponse>(await this.callApi(params, req, runtime), new $_model.PushDeviceDataResponse({}));
  }

  /**
   * This interface is used to push device measuring point data, such as power meter voltage and other data.
   * 
   * @param request - PushDeviceDataRequest
   * @returns PushDeviceDataResponse
   */
  async pushDeviceData(request: $_model.PushDeviceDataRequest): Promise<$_model.PushDeviceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDeviceDataWithOptions(request, headers, runtime);
  }

  /**
   * This interface is used to push data items.
   * 
   * @remarks
   * - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   * 
   * @param request - PushItemDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushItemDataResponse
   */
  async pushItemDataWithOptions(request: $_model.PushItemDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushItemDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.items)) {
      body["items"] = request.items;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushItemData",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/push`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushItemDataResponse>(await this.callApi(params, req, runtime), new $_model.PushItemDataResponse({}));
  }

  /**
   * This interface is used to push data items.
   * 
   * @remarks
   * - This interface is used for individual data item data.
   * - Data items can link data to services such as carbon footprints and carbon inventories.
   * - Depending on the platform configuration, active data on a yearly and monthly basis is supported.
   * 
   * @param request - PushItemDataRequest
   * @returns PushItemDataResponse
   */
  async pushItemData(request: $_model.PushItemDataRequest): Promise<$_model.PushItemDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushItemDataWithOptions(request, headers, runtime);
  }

  /**
   * Recalculate carbon emissions.
   * 
   * @remarks
   * - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   * 
   * @param request - RecalculateCarbonEmissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecalculateCarbonEmissionResponse
   */
  async recalculateCarbonEmissionWithOptions(request: $_model.RecalculateCarbonEmissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecalculateCarbonEmissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.year)) {
      body["year"] = request.year;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecalculateCarbonEmission",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/emission/data/item/recalculate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecalculateCarbonEmissionResponse>(await this.callApi(params, req, runtime), new $_model.RecalculateCarbonEmissionResponse({}));
  }

  /**
   * Recalculate carbon emissions.
   * 
   * @remarks
   * - After uploading the data items, you need to call this interface to recalculate the carbon inventory data.
   * 
   * @param request - RecalculateCarbonEmissionRequest
   * @returns RecalculateCarbonEmissionResponse
   */
  async recalculateCarbonEmission(request: $_model.RecalculateCarbonEmissionRequest): Promise<$_model.RecalculateCarbonEmissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recalculateCarbonEmissionWithOptions(request, headers, runtime);
  }

  /**
   * Online Document Q\\&A
   * 
   * @param request - SendDocumentAskQuestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendDocumentAskQuestionResponse
   */
  async sendDocumentAskQuestionWithOptions(request: $_model.SendDocumentAskQuestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SendDocumentAskQuestionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendDocumentAskQuestion",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/sendDocumentAskQuestion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendDocumentAskQuestionResponse>(await this.callApi(params, req, runtime), new $_model.SendDocumentAskQuestionResponse({}));
  }

  /**
   * Online Document Q\\&A
   * 
   * @param request - SendDocumentAskQuestionRequest
   * @returns SendDocumentAskQuestionResponse
   */
  async sendDocumentAskQuestion(request: $_model.SendDocumentAskQuestionRequest): Promise<$_model.SendDocumentAskQuestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendDocumentAskQuestionWithOptions(request, headers, runtime);
  }

  /**
   * 设置运行计划
   * 
   * @param request - SetRunningPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRunningPlanResponse
   */
  async setRunningPlanWithOptions(request: $_model.SetRunningPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SetRunningPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.controlType)) {
      body["controlType"] = request.controlType;
    }

    if (!$dara.isNull(request.dateType)) {
      body["dateType"] = request.dateType;
    }

    if (!$dara.isNull(request.earliestStartupTime)) {
      body["earliestStartupTime"] = request.earliestStartupTime;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.factoryId)) {
      body["factoryId"] = request.factoryId;
    }

    if (!$dara.isNull(request.latestShutdownTime)) {
      body["latestShutdownTime"] = request.latestShutdownTime;
    }

    if (!$dara.isNull(request.maxCarbonDioxide)) {
      body["maxCarbonDioxide"] = request.maxCarbonDioxide;
    }

    if (!$dara.isNull(request.maxTem)) {
      body["maxTem"] = request.maxTem;
    }

    if (!$dara.isNull(request.minTem)) {
      body["minTem"] = request.minTem;
    }

    if (!$dara.isNull(request.pKey)) {
      body["pKey"] = request.pKey;
    }

    if (!$dara.isNull(request.seasonMode)) {
      body["seasonMode"] = request.seasonMode;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statisticsTime)) {
      body["statisticsTime"] = request.statisticsTime;
    }

    if (!$dara.isNull(request.systemId)) {
      body["systemId"] = request.systemId;
    }

    if (!$dara.isNull(request.workingEndTime)) {
      body["workingEndTime"] = request.workingEndTime;
    }

    if (!$dara.isNull(request.workingStartTime)) {
      body["workingStartTime"] = request.workingStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRunningPlan",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/carbon/hvac/setRunningPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRunningPlanResponse>(await this.callApi(params, req, runtime), new $_model.SetRunningPlanResponse({}));
  }

  /**
   * 设置运行计划
   * 
   * @param request - SetRunningPlanRequest
   * @returns SetRunningPlanResponse
   */
  async setRunningPlan(request: $_model.SetRunningPlanRequest): Promise<$_model.SetRunningPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setRunningPlanWithOptions(request, headers, runtime);
  }

  /**
   * Extracts key information from documents using user-defined Key-Value or prompt templates. A taskId is returned upon successful execution for retrieving extraction results via GetDocExtractionResult.
   * Supports:
   * URL Upload: SubmitDocExtractionTask
   * Local File Upload: SubmitDocExtractionTask
   * 
   * @param request - SubmitDocExtractionTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocExtractionTaskResponse
   */
  async submitDocExtractionTaskWithOptions(request: $_model.SubmitDocExtractionTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocExtractionTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extractType)) {
      query["extractType"] = request.extractType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocExtractionTask",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/submitDocExtractionTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocExtractionTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocExtractionTaskResponse({}));
  }

  /**
   * Extracts key information from documents using user-defined Key-Value or prompt templates. A taskId is returned upon successful execution for retrieving extraction results via GetDocExtractionResult.
   * Supports:
   * URL Upload: SubmitDocExtractionTask
   * Local File Upload: SubmitDocExtractionTask
   * 
   * @param request - SubmitDocExtractionTaskRequest
   * @returns SubmitDocExtractionTaskResponse
   */
  async submitDocExtractionTask(request: $_model.SubmitDocExtractionTaskRequest): Promise<$_model.SubmitDocExtractionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDocExtractionTaskWithOptions(request, headers, runtime);
  }

  async submitDocExtractionTaskAdvance(request: $_model.SubmitDocExtractionTaskAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocExtractionTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let submitDocExtractionTaskReq = new $_model.SubmitDocExtractionTaskRequest({ });
    OpenApiUtil.convert(request, submitDocExtractionTaskReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      submitDocExtractionTaskReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocExtractionTaskResp = await this.submitDocExtractionTaskWithOptions(submitDocExtractionTaskReq, headers, runtime);
    return submitDocExtractionTaskResp;
  }

  /**
   * Parses text, tables, images, and more from documents. After execution, a taskId is returned for retrieving document parsing results via GetDocParsingResult.
   * Supports:
   * URL Upload: SubmitDocParsingTask
   * Local File Upload: SubmitDocParsingTaskAdvance
   * 
   * @param request - SubmitDocParsingTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocParsingTaskResponse
   */
  async submitDocParsingTaskWithOptions(request: $_model.SubmitDocParsingTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocParsingTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.needAnalyzeImg)) {
      query["needAnalyzeImg"] = request.needAnalyzeImg;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocParsingTask",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/submitDocParsingTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocParsingTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocParsingTaskResponse({}));
  }

  /**
   * Parses text, tables, images, and more from documents. After execution, a taskId is returned for retrieving document parsing results via GetDocParsingResult.
   * Supports:
   * URL Upload: SubmitDocParsingTask
   * Local File Upload: SubmitDocParsingTaskAdvance
   * 
   * @param request - SubmitDocParsingTaskRequest
   * @returns SubmitDocParsingTaskResponse
   */
  async submitDocParsingTask(request: $_model.SubmitDocParsingTaskRequest): Promise<$_model.SubmitDocParsingTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDocParsingTaskWithOptions(request, headers, runtime);
  }

  async submitDocParsingTaskAdvance(request: $_model.SubmitDocParsingTaskAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocParsingTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let submitDocParsingTaskReq = new $_model.SubmitDocParsingTaskRequest({ });
    OpenApiUtil.convert(request, submitDocParsingTaskReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      submitDocParsingTaskReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocParsingTaskResp = await this.submitDocParsingTaskWithOptions(submitDocParsingTaskReq, headers, runtime);
    return submitDocParsingTaskResp;
  }

  /**
   * Get document extraction result
   * 
   * @param request - SubmitDocumentAnalyzeJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDocumentAnalyzeJobResponse
   */
  async submitDocumentAnalyzeJobWithOptions(request: $_model.SubmitDocumentAnalyzeJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocumentAnalyzeJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisType)) {
      query["analysisType"] = request.analysisType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDocumentAnalyzeJob",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v1/aidoc/document/submitDocumentAnalyzeJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDocumentAnalyzeJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDocumentAnalyzeJobResponse({}));
  }

  /**
   * Get document extraction result
   * 
   * @param request - SubmitDocumentAnalyzeJobRequest
   * @returns SubmitDocumentAnalyzeJobResponse
   */
  async submitDocumentAnalyzeJob(request: $_model.SubmitDocumentAnalyzeJobRequest): Promise<$_model.SubmitDocumentAnalyzeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitDocumentAnalyzeJobWithOptions(request, headers, runtime);
  }

  async submitDocumentAnalyzeJobAdvance(request: $_model.SubmitDocumentAnalyzeJobAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDocumentAnalyzeJobResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let submitDocumentAnalyzeJobReq = new $_model.SubmitDocumentAnalyzeJobRequest({ });
    OpenApiUtil.convert(request, submitDocumentAnalyzeJobReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      submitDocumentAnalyzeJobReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitDocumentAnalyzeJobResp = await this.submitDocumentAnalyzeJobWithOptions(submitDocumentAnalyzeJobReq, headers, runtime);
    return submitDocumentAnalyzeJobResp;
  }

  /**
   * Extracts key information from documents using KV templates or prompts with the Qwen-VL model, ideal for image extraction. 
   * Supports:
   * URL Upload: SubmitVLExtractionTask.
   * Local File Upload: SubmitVLExtractionTaskAdvance
   * 
   * @param request - SubmitVLExtractionTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVLExtractionTaskResponse
   */
  async submitVLExtractionTaskWithOptions(request: $_model.SubmitVLExtractionTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVLExtractionTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileUrl)) {
      query["fileUrl"] = request.fileUrl;
    }

    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVLExtractionTask",
      version: "2022-09-23",
      protocol: "HTTPS",
      pathname: `/api/v2/aidoc/document/submitVLExtractionTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVLExtractionTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVLExtractionTaskResponse({}));
  }

  /**
   * Extracts key information from documents using KV templates or prompts with the Qwen-VL model, ideal for image extraction. 
   * Supports:
   * URL Upload: SubmitVLExtractionTask.
   * Local File Upload: SubmitVLExtractionTaskAdvance
   * 
   * @param request - SubmitVLExtractionTaskRequest
   * @returns SubmitVLExtractionTaskResponse
   */
  async submitVLExtractionTask(request: $_model.SubmitVLExtractionTaskRequest): Promise<$_model.SubmitVLExtractionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitVLExtractionTaskWithOptions(request, headers, runtime);
  }

  async submitVLExtractionTaskAdvance(request: $_model.SubmitVLExtractionTaskAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVLExtractionTaskResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "energyExpertExternal",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let submitVLExtractionTaskReq = new $_model.SubmitVLExtractionTaskRequest({ });
    OpenApiUtil.convert(request, submitVLExtractionTaskReq);
    if (!$dara.isNull(request.fileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.fileUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      submitVLExtractionTaskReq.fileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let submitVLExtractionTaskResp = await this.submitVLExtractionTaskWithOptions(submitVLExtractionTaskReq, headers, runtime);
    return submitVLExtractionTaskResp;
  }

}
