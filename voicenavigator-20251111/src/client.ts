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
    this._endpoint = this.getEndpoint("voicenavigator", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建实例
   * 
   * @param request - CreateCloneVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoiceWithOptions(request: $_model.CreateCloneVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCloneVoiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCloneVoice",
      version: "2025-11-11",
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
   * 创建实例
   * 
   * @param request - CreateCloneVoiceRequest
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoice(request: $_model.CreateCloneVoiceRequest): Promise<$_model.CreateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloneVoiceWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param request - CreateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScriptResponse
   */
  async createScriptWithOptions(request: $_model.CreateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nluEngine)) {
      body["NluEngine"] = request.nluEngine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScriptResponse>(await this.callApi(params, req, runtime), new $_model.CreateScriptResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateScriptRequest
   * @returns CreateScriptResponse
   */
  async createScript(request: $_model.CreateScriptRequest): Promise<$_model.CreateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptWithOptions(request, runtime);
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
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVariable",
      version: "2025-11-11",
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
   * 创建实例
   * 
   * @param tmpReq - CreateVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVocabularyResponse
   */
  async createVocabularyWithOptions(tmpReq: $_model.CreateVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVocabularyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVocabularyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.words)) {
      request.wordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.words, "Words", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.wordsShrink)) {
      body["Words"] = request.wordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.CreateVocabularyResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateVocabularyRequest
   * @returns CreateVocabularyResponse
   */
  async createVocabulary(request: $_model.CreateVocabularyRequest): Promise<$_model.CreateVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVocabularyWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param tmpReq - CreateVoiceAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVoiceAccessProfileResponse
   */
  async createVoiceAccessProfileWithOptions(tmpReq: $_model.CreateVoiceAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVoiceAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.CreateVoiceAccessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.profile)) {
      request.profileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.profile, "Profile", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsEngine)) {
      body["NlsEngine"] = request.nlsEngine;
    }

    if (!$dara.isNull(request.profileShrink)) {
      body["Profile"] = request.profileShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVoiceAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVoiceAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateVoiceAccessProfileResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateVoiceAccessProfileRequest
   * @returns CreateVoiceAccessProfileResponse
   */
  async createVoiceAccessProfile(request: $_model.CreateVoiceAccessProfileRequest): Promise<$_model.CreateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVoiceAccessProfileWithOptions(request, runtime);
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
    if (!$dara.isNull(request.cloneVoiceId)) {
      body["CloneVoiceId"] = request.cloneVoiceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCloneVoice",
      version: "2025-11-11",
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
   * 删除场景
   * 
   * @param request - DeleteScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScriptResponse
   */
  async deleteScriptWithOptions(request: $_model.DeleteScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScriptResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScriptResponse({}));
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteScriptRequest
   * @returns DeleteScriptResponse
   */
  async deleteScript(request: $_model.DeleteScriptRequest): Promise<$_model.DeleteScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptWithOptions(request, runtime);
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
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.variableId)) {
      body["VariableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVariable",
      version: "2025-11-11",
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
   * 删除场景
   * 
   * @param request - DeleteVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVocabularyResponse
   */
  async deleteVocabularyWithOptions(request: $_model.DeleteVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["VocabularyId"] = request.vocabularyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVocabularyResponse({}));
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteVocabularyRequest
   * @returns DeleteVocabularyResponse
   */
  async deleteVocabulary(request: $_model.DeleteVocabularyRequest): Promise<$_model.DeleteVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVocabularyWithOptions(request, runtime);
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteVoiceAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVoiceAccessProfileResponse
   */
  async deleteVoiceAccessProfileWithOptions(request: $_model.DeleteVoiceAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVoiceAccessProfileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessProfileId)) {
      body["AccessProfileId"] = request.accessProfileId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVoiceAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVoiceAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVoiceAccessProfileResponse({}));
  }

  /**
   * 删除场景
   * 
   * @param request - DeleteVoiceAccessProfileRequest
   * @returns DeleteVoiceAccessProfileResponse
   */
  async deleteVoiceAccessProfile(request: $_model.DeleteVoiceAccessProfileRequest): Promise<$_model.DeleteVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * 禁用消息订阅
   * 
   * @param request - DisableSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSubscriptionResponse
   */
  async disableSubscriptionWithOptions(request: $_model.DisableSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSubscription",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.DisableSubscriptionResponse({}));
  }

  /**
   * 禁用消息订阅
   * 
   * @param request - DisableSubscriptionRequest
   * @returns DisableSubscriptionResponse
   */
  async disableSubscription(request: $_model.DisableSubscriptionRequest): Promise<$_model.DisableSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSubscriptionWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - ExportScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportScriptResponse
   */
  async exportScriptWithOptions(request: $_model.ExportScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportScriptResponse>(await this.callApi(params, req, runtime), new $_model.ExportScriptResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ExportScriptRequest
   * @returns ExportScriptResponse
   */
  async exportScript(request: $_model.ExportScriptRequest): Promise<$_model.ExportScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScriptWithOptions(request, runtime);
  }

  /**
   * 导出热词
   * 
   * @param tmpReq - ExportVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportVocabularyResponse
   */
  async exportVocabularyWithOptions(tmpReq: $_model.ExportVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportVocabularyResponse> {
    tmpReq.validate();
    let request = new $_model.ExportVocabularyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.vocabularyIds)) {
      request.vocabularyIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vocabularyIds, "VocabularyIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vocabularyIdsShrink)) {
      body["VocabularyIds"] = request.vocabularyIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.ExportVocabularyResponse({}));
  }

  /**
   * 导出热词
   * 
   * @param request - ExportVocabularyRequest
   * @returns ExportVocabularyResponse
   */
  async exportVocabulary(request: $_model.ExportVocabularyRequest): Promise<$_model.ExportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportVocabularyWithOptions(request, runtime);
  }

  /**
   * 获取通话详情
   * 
   * @param request - GetCallDetailRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecordWithOptions(request: $_model.GetCallDetailRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallDetailRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCallDetailRecord",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCallDetailRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetCallDetailRecordResponse({}));
  }

  /**
   * 获取通话详情
   * 
   * @param request - GetCallDetailRecordRequest
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecord(request: $_model.GetCallDetailRecordRequest): Promise<$_model.GetCallDetailRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
  }

  /**
   * 获取录音
   * 
   * @param request - GetRecordingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordingResponse
   */
  async getRecordingWithOptions(request: $_model.GetRecordingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecording",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordingResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordingResponse({}));
  }

  /**
   * 获取录音
   * 
   * @param request - GetRecordingRequest
   * @returns GetRecordingResponse
   */
  async getRecording(request: $_model.GetRecordingRequest): Promise<$_model.GetRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordingWithOptions(request, runtime);
  }

  /**
   * 获取MQ配置
   * 
   * @param request - GetSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionResponse
   */
  async getSubscriptionWithOptions(request: $_model.GetSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscription",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.GetSubscriptionResponse({}));
  }

  /**
   * 获取MQ配置
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: $_model.GetSubscriptionRequest): Promise<$_model.GetSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - GetVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVocabularyResponse
   */
  async getVocabularyWithOptions(request: $_model.GetVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["VocabularyId"] = request.vocabularyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.GetVocabularyResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - GetVocabularyRequest
   * @returns GetVocabularyResponse
   */
  async getVocabulary(request: $_model.GetVocabularyRequest): Promise<$_model.GetVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVocabularyWithOptions(request, runtime);
  }

  /**
   * 导入热词
   * 
   * @param request - ImportVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportVocabularyResponse
   */
  async importVocabularyWithOptions(request: $_model.ImportVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.ImportVocabularyResponse({}));
  }

  /**
   * 导入热词
   * 
   * @param request - ImportVocabularyRequest
   * @returns ImportVocabularyResponse
   */
  async importVocabulary(request: $_model.ImportVocabularyRequest): Promise<$_model.ImportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importVocabularyWithOptions(request, runtime);
  }

  /**
   * 获取背景音列表
   * 
   * @param request - ListBackgroundMusicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackgroundMusicsResponse
   */
  async listBackgroundMusicsWithOptions(request: $_model.ListBackgroundMusicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackgroundMusicsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBackgroundMusics",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBackgroundMusicsResponse>(await this.callApi(params, req, runtime), new $_model.ListBackgroundMusicsResponse({}));
  }

  /**
   * 获取背景音列表
   * 
   * @param request - ListBackgroundMusicsRequest
   * @returns ListBackgroundMusicsResponse
   */
  async listBackgroundMusics(request: $_model.ListBackgroundMusicsRequest): Promise<$_model.ListBackgroundMusicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackgroundMusicsWithOptions(request, runtime);
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
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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
      version: "2025-11-11",
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
   * 获取克隆音色可用模型列表
   * 
   * @param request - ListCloneVoiceModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloneVoiceModelsResponse
   */
  async listCloneVoiceModelsWithOptions(request: $_model.ListCloneVoiceModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloneVoiceModelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloneVoiceModels",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloneVoiceModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListCloneVoiceModelsResponse({}));
  }

  /**
   * 获取克隆音色可用模型列表
   * 
   * @param request - ListCloneVoiceModelsRequest
   * @returns ListCloneVoiceModelsResponse
   */
  async listCloneVoiceModels(request: $_model.ListCloneVoiceModelsRequest): Promise<$_model.ListCloneVoiceModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceModelsWithOptions(request, runtime);
  }

  /**
   * 获取对话模型列表
   * 
   * @param request - ListNluModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNluModelsResponse
   */
  async listNluModelsWithOptions(request: $_model.ListNluModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNluModelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNluModels",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNluModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListNluModelsResponse({}));
  }

  /**
   * 获取对话模型列表
   * 
   * @param request - ListNluModelsRequest
   * @returns ListNluModelsResponse
   */
  async listNluModels(request: $_model.ListNluModelsRequest): Promise<$_model.ListNluModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNluModelsWithOptions(request, runtime);
  }

  /**
   * 获取场景配置模板列表
   * 
   * @param request - ListScriptProfileTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptProfileTemplatesResponse
   */
  async listScriptProfileTemplatesWithOptions(request: $_model.ListScriptProfileTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptProfileTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptProfileTemplates",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptProfileTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptProfileTemplatesResponse({}));
  }

  /**
   * 获取场景配置模板列表
   * 
   * @param request - ListScriptProfileTemplatesRequest
   * @returns ListScriptProfileTemplatesResponse
   */
  async listScriptProfileTemplates(request: $_model.ListScriptProfileTemplatesRequest): Promise<$_model.ListScriptProfileTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptProfileTemplatesWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param tmpReq - ListScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptsResponse
   */
  async listScriptsWithOptions(tmpReq: $_model.ListScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptsResponse> {
    tmpReq.validate();
    let request = new $_model.ListScriptsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scriptIds)) {
      request.scriptIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptIds, "ScriptIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptIdsShrink)) {
      body["ScriptIds"] = request.scriptIdsShrink;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScripts",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptsResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptsResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListScriptsRequest
   * @returns ListScriptsResponse
   */
  async listScripts(request: $_model.ListScriptsRequest): Promise<$_model.ListScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
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
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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
      version: "2025-11-11",
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
   * 获取实例详情
   * 
   * @param request - ListVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVocabularyResponse
   */
  async listVocabularyWithOptions(request: $_model.ListVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.ListVocabularyResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListVocabularyRequest
   * @returns ListVocabularyResponse
   */
  async listVocabulary(request: $_model.ListVocabularyRequest): Promise<$_model.ListVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVocabularyWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListVoiceAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceAccessProfileResponse
   */
  async listVoiceAccessProfileWithOptions(request: $_model.ListVoiceAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoiceAccessProfileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoiceAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoiceAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.ListVoiceAccessProfileResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListVoiceAccessProfileRequest
   * @returns ListVoiceAccessProfileResponse
   */
  async listVoiceAccessProfile(request: $_model.ListVoiceAccessProfileRequest): Promise<$_model.ListVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * 获取引擎列表
   * 
   * @param request - ListVoiceEnginesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceEnginesResponse
   */
  async listVoiceEnginesWithOptions(request: $_model.ListVoiceEnginesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoiceEnginesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoiceEngines",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoiceEnginesResponse>(await this.callApi(params, req, runtime), new $_model.ListVoiceEnginesResponse({}));
  }

  /**
   * 获取引擎列表
   * 
   * @param request - ListVoiceEnginesRequest
   * @returns ListVoiceEnginesResponse
   */
  async listVoiceEngines(request: $_model.ListVoiceEnginesRequest): Promise<$_model.ListVoiceEnginesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceEnginesWithOptions(request, runtime);
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListVoicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoicesResponse
   */
  async listVoicesWithOptions(request: $_model.ListVoicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsAccessType)) {
      body["NlsAccessType"] = request.nlsAccessType;
    }

    if (!$dara.isNull(request.nlsEngine)) {
      body["NlsEngine"] = request.nlsEngine;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoices",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoicesResponse>(await this.callApi(params, req, runtime), new $_model.ListVoicesResponse({}));
  }

  /**
   * 获取实例详情
   * 
   * @param request - ListVoicesRequest
   * @returns ListVoicesResponse
   */
  async listVoices(request: $_model.ListVoicesRequest): Promise<$_model.ListVoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoicesWithOptions(request, runtime);
  }

  /**
   * 试听
   * 
   * @param tmpReq - PreviewVoiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewVoiceResponse
   */
  async previewVoiceWithOptions(tmpReq: $_model.PreviewVoiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewVoiceResponse> {
    tmpReq.validate();
    let request = new $_model.PreviewVoiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "Params", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    if (!$dara.isNull(request.nlsAccessType)) {
      body["NlsAccessType"] = request.nlsAccessType;
    }

    if (!$dara.isNull(request.nlsEngine)) {
      body["NlsEngine"] = request.nlsEngine;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      body["Params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.text)) {
      body["Text"] = request.text;
    }

    if (!$dara.isNull(request.voice)) {
      body["Voice"] = request.voice;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewVoice",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewVoiceResponse>(await this.callApi(params, req, runtime), new $_model.PreviewVoiceResponse({}));
  }

  /**
   * 试听
   * 
   * @param request - PreviewVoiceRequest
   * @returns PreviewVoiceResponse
   */
  async previewVoice(request: $_model.PreviewVoiceRequest): Promise<$_model.PreviewVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewVoiceWithOptions(request, runtime);
  }

  /**
   * 更新实例
   * 
   * @param request - PublishScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishScriptResponse
   */
  async publishScriptWithOptions(request: $_model.PublishScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishScriptResponse>(await this.callApi(params, req, runtime), new $_model.PublishScriptResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - PublishScriptRequest
   * @returns PublishScriptResponse
   */
  async publishScript(request: $_model.PublishScriptRequest): Promise<$_model.PublishScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishScriptWithOptions(request, runtime);
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
    if (!$dara.isNull(request.cloneVoiceId)) {
      body["CloneVoiceId"] = request.cloneVoiceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCloneVoice",
      version: "2025-11-11",
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
   * 更新实例
   * 
   * @param request - UpdateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScriptResponse
   */
  async updateScriptWithOptions(request: $_model.UpdateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScriptResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScriptResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScriptResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateScriptRequest
   * @returns UpdateScriptResponse
   */
  async updateScript(request: $_model.UpdateScriptRequest): Promise<$_model.UpdateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScriptWithOptions(request, runtime);
  }

  /**
   * 创建或更新MQ配置
   * 
   * @param tmpReq - UpdateSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscriptionWithOptions(tmpReq: $_model.UpdateSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSubscriptionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSubscriptionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventSubscriptions)) {
      request.eventSubscriptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventSubscriptions, "EventSubscriptions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.eventSubscriptionsShrink)) {
      body["EventSubscriptions"] = request.eventSubscriptionsShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.mqInstanceId)) {
      body["MqInstanceId"] = request.mqInstanceId;
    }

    if (!$dara.isNull(request.mqType)) {
      body["MqType"] = request.mqType;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.producerId)) {
      body["ProducerId"] = request.producerId;
    }

    if (!$dara.isNull(request.topic)) {
      body["Topic"] = request.topic;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSubscription",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSubscriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSubscriptionResponse({}));
  }

  /**
   * 创建或更新MQ配置
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
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
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.variableId)) {
      body["VariableId"] = request.variableId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVariable",
      version: "2025-11-11",
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

  /**
   * 更新实例
   * 
   * @param tmpReq - UpdateVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVocabularyResponse
   */
  async updateVocabularyWithOptions(tmpReq: $_model.UpdateVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVocabularyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateVocabularyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.words)) {
      request.wordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.words, "Words", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["VocabularyId"] = request.vocabularyId;
    }

    if (!$dara.isNull(request.wordsShrink)) {
      body["Words"] = request.wordsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVocabulary",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVocabularyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVocabularyResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateVocabularyRequest
   * @returns UpdateVocabularyResponse
   */
  async updateVocabulary(request: $_model.UpdateVocabularyRequest): Promise<$_model.UpdateVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVocabularyWithOptions(request, runtime);
  }

  /**
   * 更新实例
   * 
   * @param tmpReq - UpdateVoiceAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVoiceAccessProfileResponse
   */
  async updateVoiceAccessProfileWithOptions(tmpReq: $_model.UpdateVoiceAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVoiceAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateVoiceAccessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.profile)) {
      request.profileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.profile, "Profile", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessProfileId)) {
      body["AccessProfileId"] = request.accessProfileId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nlsEngine)) {
      body["NlsEngine"] = request.nlsEngine;
    }

    if (!$dara.isNull(request.profileShrink)) {
      body["Profile"] = request.profileShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVoiceAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVoiceAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVoiceAccessProfileResponse({}));
  }

  /**
   * 更新实例
   * 
   * @param request - UpdateVoiceAccessProfileRequest
   * @returns UpdateVoiceAccessProfileResponse
   */
  async updateVoiceAccessProfile(request: $_model.UpdateVoiceAccessProfileRequest): Promise<$_model.UpdateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVoiceAccessProfileWithOptions(request, runtime);
  }

}
