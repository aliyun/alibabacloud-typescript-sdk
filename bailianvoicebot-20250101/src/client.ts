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
    this._endpoint = this.getEndpoint("bailianvoicebot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建软电话测试通话
   * 
   * @param request - BridgeWebCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCallWithOptions(request: $_model.BridgeWebCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BridgeWebCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.audioCodec)) {
      query["AudioCodec"] = request.audioCodec;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.sampleRate)) {
      query["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.sandbox)) {
      query["Sandbox"] = request.sandbox;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.timeoutSeconds)) {
      query["TimeoutSeconds"] = request.timeoutSeconds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BridgeWebCall",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BridgeWebCallResponse>(await this.callApi(params, req, runtime), new $_model.BridgeWebCallResponse({}));
  }

  /**
   * 创建软电话测试通话
   * 
   * @param request - BridgeWebCallRequest
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCall(request: $_model.BridgeWebCallRequest): Promise<$_model.BridgeWebCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeWebCallWithOptions(request, runtime);
  }

  /**
   * 创建应用
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(request: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nluAccessType)) {
      query["NluAccessType"] = request.nluAccessType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * 创建应用
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * 创景场景版本
   * 
   * @param tmpReq - CreateApplicationVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationVersionResponse
   */
  async createApplicationVersionWithOptions(tmpReq: $_model.CreateApplicationVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApplicationVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interactionConfig)) {
      request.interactionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interactionConfig, "InteractionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.scriptProfile)) {
      request.scriptProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptProfile, "ScriptProfile", "json");
    }

    if (!$dara.isNull(tmpReq.synthesizerConfig)) {
      request.synthesizerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synthesizerConfig, "SynthesizerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.transcriberConfig)) {
      request.transcriberConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transcriberConfig, "TranscriberConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.interactionConfigShrink)) {
      query["InteractionConfig"] = request.interactionConfigShrink;
    }

    if (!$dara.isNull(request.scriptProfileShrink)) {
      query["ScriptProfile"] = request.scriptProfileShrink;
    }

    if (!$dara.isNull(request.sourceVersionId)) {
      query["SourceVersionId"] = request.sourceVersionId;
    }

    if (!$dara.isNull(request.synthesizerConfigShrink)) {
      query["SynthesizerConfig"] = request.synthesizerConfigShrink;
    }

    if (!$dara.isNull(request.transcriberConfigShrink)) {
      query["TranscriberConfig"] = request.transcriberConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationVersion",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationVersionResponse({}));
  }

  /**
   * 创景场景版本
   * 
   * @param request - CreateApplicationVersionRequest
   * @returns CreateApplicationVersionResponse
   */
  async createApplicationVersion(request: $_model.CreateApplicationVersionRequest): Promise<$_model.CreateApplicationVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationVersionWithOptions(request, runtime);
  }

  /**
   * 创建克隆音
   * 
   * @param request - CreateCloneVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoiceWithOptions(request: $_model.CreateCloneVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloneVoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloneVoice",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCloneVoiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCloneVoiceResponse({}));
  }

  /**
   * 创建克隆音
   * 
   * @param request - CreateCloneVoiceRequest
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoice(request: $_model.CreateCloneVoiceRequest): Promise<$_model.CreateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloneVoiceWithOptions(request, runtime);
  }

  /**
   * 创建变量
   * 
   * @param request - CreateVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVariableResponse
   */
  async createVariableWithOptions(request: $_model.CreateVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVariableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVariable",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateVariableResponse({}));
  }

  /**
   * 创建变量
   * 
   * @param request - CreateVariableRequest
   * @returns CreateVariableResponse
   */
  async createVariable(request: $_model.CreateVariableRequest): Promise<$_model.CreateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVariableWithOptions(request, runtime);
  }

  /**
   * 删除应用
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * 删除应用
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteCloneVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCloneVoiceResponse
   */
  async deleteCloneVoiceWithOptions(request: $_model.DeleteCloneVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCloneVoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.cloneVoiceId)) {
      body["CloneVoiceId"] = request.cloneVoiceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloneVoice",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCloneVoiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCloneVoiceResponse({}));
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteCloneVoiceRequest
   * @returns DeleteCloneVoiceResponse
   */
  async deleteCloneVoice(request: $_model.DeleteCloneVoiceRequest): Promise<$_model.DeleteCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloneVoiceWithOptions(request, runtime);
  }

  /**
   * 删除变量
   * 
   * @param request - DeleteVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVariableResponse
   */
  async deleteVariableWithOptions(request: $_model.DeleteVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVariableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.variableId)) {
      body["VariableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVariable",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVariableResponse({}));
  }

  /**
   * 删除变量
   * 
   * @param request - DeleteVariableRequest
   * @returns DeleteVariableResponse
   */
  async deleteVariable(request: $_model.DeleteVariableRequest): Promise<$_model.DeleteVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVariableWithOptions(request, runtime);
  }

  /**
   * 获取文件上传信息
   * 
   * @param request - GenerateFileUploadParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateFileUploadParamsResponse
   */
  async generateFileUploadParamsWithOptions(request: $_model.GenerateFileUploadParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateFileUploadParamsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateFileUploadParams",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateFileUploadParamsResponse>(await this.callApi(params, req, runtime), new $_model.GenerateFileUploadParamsResponse({}));
  }

  /**
   * 获取文件上传信息
   * 
   * @param request - GenerateFileUploadParamsRequest
   * @returns GenerateFileUploadParamsResponse
   */
  async generateFileUploadParams(request: $_model.GenerateFileUploadParamsRequest): Promise<$_model.GenerateFileUploadParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateFileUploadParamsWithOptions(request, runtime);
  }

  /**
   * Get应用
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Get应用
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * 获取数据通道凭证
   * 
   * @param request - GetDataChannelCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredentialWithOptions(request: $_model.GetDataChannelCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataChannelCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataChannelCredential",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataChannelCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetDataChannelCredentialResponse({}));
  }

  /**
   * 获取数据通道凭证
   * 
   * @param request - GetDataChannelCredentialRequest
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredential(request: $_model.GetDataChannelCredentialRequest): Promise<$_model.GetDataChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataChannelCredentialWithOptions(request, runtime);
  }

  /**
   * 查询应用
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      query["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * 查询应用
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListCloneVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloneVoiceResponse
   */
  async listCloneVoiceWithOptions(request: $_model.ListCloneVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloneVoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloneVoice",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloneVoiceResponse>(await this.callApi(params, req, runtime), new $_model.ListCloneVoiceResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListCloneVoiceRequest
   * @returns ListCloneVoiceResponse
   */
  async listCloneVoice(request: $_model.ListCloneVoiceRequest): Promise<$_model.ListCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceWithOptions(request, runtime);
  }

  /**
   * 获取变量列表
   * 
   * @param request - ListVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariableResponse
   */
  async listVariableWithOptions(request: $_model.ListVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVariableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchPattern)) {
      body["SearchPattern"] = request.searchPattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVariable",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVariableResponse>(await this.callApi(params, req, runtime), new $_model.ListVariableResponse({}));
  }

  /**
   * 获取变量列表
   * 
   * @param request - ListVariableRequest
   * @returns ListVariableResponse
   */
  async listVariable(request: $_model.ListVariableRequest): Promise<$_model.ListVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVariableWithOptions(request, runtime);
  }

  /**
   * 发布版本
   * 
   * @param request - PublishApplicationVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishApplicationVersionResponse
   */
  async publishApplicationVersionWithOptions(request: $_model.PublishApplicationVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishApplicationVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishApplicationVersion",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishApplicationVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishApplicationVersionResponse({}));
  }

  /**
   * 发布版本
   * 
   * @param request - PublishApplicationVersionRequest
   * @returns PublishApplicationVersionResponse
   */
  async publishApplicationVersion(request: $_model.PublishApplicationVersionRequest): Promise<$_model.PublishApplicationVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishApplicationVersionWithOptions(request, runtime);
  }

  /**
   * 修改应用
   * 
   * @param request - UpdateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
  async updateApplicationWithOptions(request: $_model.UpdateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.concurrency)) {
      query["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplication",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationResponse({}));
  }

  /**
   * 修改应用
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(request: $_model.UpdateApplicationRequest): Promise<$_model.UpdateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  /**
   * 修改场景版本
   * 
   * @param tmpReq - UpdateApplicationVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationVersionResponse
   */
  async updateApplicationVersionWithOptions(tmpReq: $_model.UpdateApplicationVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationVersionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApplicationVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interactionConfig)) {
      request.interactionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interactionConfig, "InteractionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.scriptProfile)) {
      request.scriptProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptProfile, "ScriptProfile", "json");
    }

    if (!$dara.isNull(tmpReq.synthesizerConfig)) {
      request.synthesizerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synthesizerConfig, "SynthesizerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.transcriberConfig)) {
      request.transcriberConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transcriberConfig, "TranscriberConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.businessUnitId)) {
      query["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.interactionConfigShrink)) {
      query["InteractionConfig"] = request.interactionConfigShrink;
    }

    if (!$dara.isNull(request.scriptProfileShrink)) {
      query["ScriptProfile"] = request.scriptProfileShrink;
    }

    if (!$dara.isNull(request.synthesizerConfigShrink)) {
      query["SynthesizerConfig"] = request.synthesizerConfigShrink;
    }

    if (!$dara.isNull(request.transcriberConfigShrink)) {
      query["TranscriberConfig"] = request.transcriberConfigShrink;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationVersion",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationVersionResponse({}));
  }

  /**
   * 修改场景版本
   * 
   * @param request - UpdateApplicationVersionRequest
   * @returns UpdateApplicationVersionResponse
   */
  async updateApplicationVersion(request: $_model.UpdateApplicationVersionRequest): Promise<$_model.UpdateApplicationVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationVersionWithOptions(request, runtime);
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateCloneVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCloneVoiceResponse
   */
  async updateCloneVoiceWithOptions(request: $_model.UpdateCloneVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCloneVoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.cloneVoiceId)) {
      body["CloneVoiceId"] = request.cloneVoiceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloneVoice",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCloneVoiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCloneVoiceResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateCloneVoiceRequest
   * @returns UpdateCloneVoiceResponse
   */
  async updateCloneVoice(request: $_model.UpdateCloneVoiceRequest): Promise<$_model.UpdateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloneVoiceWithOptions(request, runtime);
  }

  /**
   * 更新变量
   * 
   * @param request - UpdateVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVariableResponse
   */
  async updateVariableWithOptions(request: $_model.UpdateVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVariableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.variableId)) {
      body["VariableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVariable",
      version: "2025-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVariableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVariableResponse({}));
  }

  /**
   * 更新变量
   * 
   * @param request - UpdateVariableRequest
   * @returns UpdateVariableResponse
   */
  async updateVariable(request: $_model.UpdateVariableRequest): Promise<$_model.UpdateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVariableWithOptions(request, runtime);
  }

}
