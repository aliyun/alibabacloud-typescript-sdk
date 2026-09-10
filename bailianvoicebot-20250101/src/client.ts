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
   * Creates a softphone test call.
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
   * Creates a softphone test call.
   * 
   * @param request - BridgeWebCallRequest
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCall(request: $_model.BridgeWebCallRequest): Promise<$_model.BridgeWebCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeWebCallWithOptions(request, runtime);
  }

  /**
   * Creates a voice chatbot application.
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
   * Creates a voice chatbot application.
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

    if (!$dara.isNull(tmpReq.labelConfig)) {
      request.labelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelConfig, "LabelConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ragConfig)) {
      request.ragConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ragConfig, "RagConfig", "json");
    }

    if (!$dara.isNull(tmpReq.scriptProfile)) {
      request.scriptProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptProfile, "ScriptProfile", "json");
    }

    if (!$dara.isNull(tmpReq.synthesizerConfig)) {
      request.synthesizerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synthesizerConfig, "SynthesizerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.toolConfig)) {
      request.toolConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolConfig, "ToolConfig", "json");
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

    if (!$dara.isNull(request.labelConfigShrink)) {
      query["LabelConfig"] = request.labelConfigShrink;
    }

    if (!$dara.isNull(request.ragConfigShrink)) {
      query["RagConfig"] = request.ragConfigShrink;
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

    if (!$dara.isNull(request.toolConfigShrink)) {
      query["ToolConfig"] = request.toolConfigShrink;
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
   * Creates a cloned voice.
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
   * Creates a cloned voice.
   * 
   * @param request - CreateCloneVoiceRequest
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoice(request: $_model.CreateCloneVoiceRequest): Promise<$_model.CreateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Creates a variable.
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
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @returns CreateVariableResponse
   */
  async createVariable(request: $_model.CreateVariableRequest): Promise<$_model.CreateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVariableWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
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
      version: "2025-01-01",
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
   * Creates an instance.
   * 
   * @param request - CreateVocabularyRequest
   * @returns CreateVocabularyResponse
   */
  async createVocabulary(request: $_model.CreateVocabularyRequest): Promise<$_model.CreateVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVocabularyWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
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
      version: "2025-01-01",
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
   * Creates an instance.
   * 
   * @param request - CreateVoiceAccessProfileRequest
   * @returns CreateVoiceAccessProfileResponse
   */
  async createVoiceAccessProfile(request: $_model.CreateVoiceAccessProfileRequest): Promise<$_model.CreateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
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
   * Deletes an application.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a cloned voice.
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
   * Deletes a cloned voice.
   * 
   * @param request - DeleteCloneVoiceRequest
   * @returns DeleteCloneVoiceResponse
   */
  async deleteCloneVoice(request: $_model.DeleteCloneVoiceRequest): Promise<$_model.DeleteCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Deletes a variable.
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
   * Deletes a variable.
   * 
   * @param request - DeleteVariableRequest
   * @returns DeleteVariableResponse
   */
  async deleteVariable(request: $_model.DeleteVariableRequest): Promise<$_model.DeleteVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVariableWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario.
   * 
   * @param request - DeleteVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVocabularyResponse
   */
  async deleteVocabularyWithOptions(request: $_model.DeleteVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["VocabularyId"] = request.vocabularyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVocabulary",
      version: "2025-01-01",
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
   * Deletes a scenario.
   * 
   * @param request - DeleteVocabularyRequest
   * @returns DeleteVocabularyResponse
   */
  async deleteVocabulary(request: $_model.DeleteVocabularyRequest): Promise<$_model.DeleteVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVocabularyWithOptions(request, runtime);
  }

  /**
   * Deletes a third-party voice configuration.
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

    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVoiceAccessProfile",
      version: "2025-01-01",
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
   * Deletes a third-party voice configuration.
   * 
   * @param request - DeleteVoiceAccessProfileRequest
   * @returns DeleteVoiceAccessProfileResponse
   */
  async deleteVoiceAccessProfile(request: $_model.DeleteVoiceAccessProfileRequest): Promise<$_model.DeleteVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * Disables message subscription.
   * 
   * @param request - DisableSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSubscriptionResponse
   */
  async disableSubscriptionWithOptions(request: $_model.DisableSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSubscription",
      version: "2025-01-01",
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
   * Disables message subscription.
   * 
   * @param request - DisableSubscriptionRequest
   * @returns DisableSubscriptionResponse
   */
  async disableSubscription(request: $_model.DisableSubscriptionRequest): Promise<$_model.DisableSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSubscriptionWithOptions(request, runtime);
  }

  /**
   * Exports hot words.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.vocabularyIdsShrink)) {
      body["VocabularyIds"] = request.vocabularyIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportVocabulary",
      version: "2025-01-01",
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
   * Exports hot words.
   * 
   * @param request - ExportVocabularyRequest
   * @returns ExportVocabularyResponse
   */
  async exportVocabulary(request: $_model.ExportVocabularyRequest): Promise<$_model.ExportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportVocabularyWithOptions(request, runtime);
  }

  /**
   * Retrieves file upload information.
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
   * Retrieves file upload information.
   * 
   * @param request - GenerateFileUploadParamsRequest
   * @returns GenerateFileUploadParamsResponse
   */
  async generateFileUploadParams(request: $_model.GenerateFileUploadParamsRequest): Promise<$_model.GenerateFileUploadParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateFileUploadParamsWithOptions(request, runtime);
  }

  /**
   * Retrieves a voice chatbot application.
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
   * Retrieves a voice chatbot application.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Retrieves data channel credentials.
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
   * Retrieves data channel credentials.
   * 
   * @param request - GetDataChannelCredentialRequest
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredential(request: $_model.GetDataChannelCredentialRequest): Promise<$_model.GetDataChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataChannelCredentialWithOptions(request, runtime);
  }

  /**
   * Retrieves the MQ configuration.
   * 
   * @param request - GetSubscriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubscriptionResponse
   */
  async getSubscriptionWithOptions(request: $_model.GetSubscriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubscriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubscription",
      version: "2025-01-01",
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
   * Retrieves the MQ configuration.
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: $_model.GetSubscriptionRequest): Promise<$_model.GetSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a hot word vocabulary.
   * 
   * @param request - GetVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVocabularyResponse
   */
  async getVocabularyWithOptions(request: $_model.GetVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.vocabularyId)) {
      body["VocabularyId"] = request.vocabularyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVocabulary",
      version: "2025-01-01",
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
   * Retrieves the details of a hot word vocabulary.
   * 
   * @param request - GetVocabularyRequest
   * @returns GetVocabularyResponse
   */
  async getVocabulary(request: $_model.GetVocabularyRequest): Promise<$_model.GetVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVocabularyWithOptions(request, runtime);
  }

  /**
   * Imports hot words.
   * 
   * @param request - ImportVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportVocabularyResponse
   */
  async importVocabularyWithOptions(request: $_model.ImportVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportVocabulary",
      version: "2025-01-01",
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
   * Imports hot words.
   * 
   * @param request - ImportVocabularyRequest
   * @returns ImportVocabularyResponse
   */
  async importVocabulary(request: $_model.ImportVocabularyRequest): Promise<$_model.ImportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importVocabularyWithOptions(request, runtime);
  }

  /**
   * Queries the list of voice robot applications.
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
   * Queries the list of voice robot applications.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of background music.
   * 
   * @param request - ListBackgroundMusicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackgroundMusicsResponse
   */
  async listBackgroundMusicsWithOptions(request: $_model.ListBackgroundMusicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackgroundMusicsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBackgroundMusics",
      version: "2025-01-01",
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
   * Retrieves the list of background music.
   * 
   * @param request - ListBackgroundMusicsRequest
   * @returns ListBackgroundMusicsResponse
   */
  async listBackgroundMusics(request: $_model.ListBackgroundMusicsRequest): Promise<$_model.ListBackgroundMusicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackgroundMusicsWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an instance.
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
   * Retrieves the details of an instance.
   * 
   * @param request - ListCloneVoiceRequest
   * @returns ListCloneVoiceResponse
   */
  async listCloneVoice(request: $_model.ListCloneVoiceRequest): Promise<$_model.ListCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of available models for voice cloning.
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
      version: "2025-01-01",
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
   * Retrieves the list of available models for voice cloning.
   * 
   * @param request - ListCloneVoiceModelsRequest
   * @returns ListCloneVoiceModelsResponse
   */
  async listCloneVoiceModels(request: $_model.ListCloneVoiceModelsRequest): Promise<$_model.ListCloneVoiceModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceModelsWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of conversation models.
   * 
   * @param request - ListNluModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNluModelsResponse
   */
  async listNluModelsWithOptions(request: $_model.ListNluModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNluModelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNluModels",
      version: "2025-01-01",
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
   * Retrieves the list of conversation models.
   * 
   * @param request - ListNluModelsRequest
   * @returns ListNluModelsResponse
   */
  async listNluModels(request: $_model.ListNluModelsRequest): Promise<$_model.ListNluModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNluModelsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of variables.
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
   * Retrieves a list of variables.
   * 
   * @param request - ListVariableRequest
   * @returns ListVariableResponse
   */
  async listVariable(request: $_model.ListVariableRequest): Promise<$_model.ListVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVariableWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an instance.
   * 
   * @param request - ListVocabularyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVocabularyResponse
   */
  async listVocabularyWithOptions(request: $_model.ListVocabularyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVocabularyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
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
      version: "2025-01-01",
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
   * Retrieves the details of an instance.
   * 
   * @param request - ListVocabularyRequest
   * @returns ListVocabularyResponse
   */
  async listVocabulary(request: $_model.ListVocabularyRequest): Promise<$_model.ListVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVocabularyWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of third-party voice configurations.
   * 
   * @param request - ListVoiceAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceAccessProfileResponse
   */
  async listVoiceAccessProfileWithOptions(request: $_model.ListVoiceAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoiceAccessProfileResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVoiceAccessProfile",
      version: "2025-01-01",
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
   * Retrieves the list of third-party voice configurations.
   * 
   * @param request - ListVoiceAccessProfileRequest
   * @returns ListVoiceAccessProfileResponse
   */
  async listVoiceAccessProfile(request: $_model.ListVoiceAccessProfileRequest): Promise<$_model.ListVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * Retrieves a paginated list of available voice engines.
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
      version: "2025-01-01",
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
   * Retrieves a paginated list of available voice engines.
   * 
   * @param request - ListVoiceEnginesRequest
   * @returns ListVoiceEnginesResponse
   */
  async listVoiceEngines(request: $_model.ListVoiceEnginesRequest): Promise<$_model.ListVoiceEnginesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceEnginesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of voice timbres.
   * 
   * @param request - ListVoicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoicesResponse
   */
  async listVoicesWithOptions(request: $_model.ListVoicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
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
      version: "2025-01-01",
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
   * Retrieves the list of voice timbres.
   * 
   * @param request - ListVoicesRequest
   * @returns ListVoicesResponse
   */
  async listVoices(request: $_model.ListVoicesRequest): Promise<$_model.ListVoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoicesWithOptions(request, runtime);
  }

  /**
   * Generates a preview of a synthesized voice.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
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
      version: "2025-01-01",
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
   * Generates a preview of a synthesized voice.
   * 
   * @param request - PreviewVoiceRequest
   * @returns PreviewVoiceResponse
   */
  async previewVoice(request: $_model.PreviewVoiceRequest): Promise<$_model.PreviewVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewVoiceWithOptions(request, runtime);
  }

  /**
   * Publishes a voice robot version.
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
   * Publishes a voice robot version.
   * 
   * @param request - PublishApplicationVersionRequest
   * @returns PublishApplicationVersionResponse
   */
  async publishApplicationVersion(request: $_model.PublishApplicationVersionRequest): Promise<$_model.PublishApplicationVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishApplicationVersionWithOptions(request, runtime);
  }

  /**
   * Updates a voice bot application.
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
   * Updates a voice bot application.
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

    if (!$dara.isNull(tmpReq.labelConfig)) {
      request.labelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelConfig, "LabelConfig", "json");
    }

    if (!$dara.isNull(tmpReq.ragConfig)) {
      request.ragConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ragConfig, "RagConfig", "json");
    }

    if (!$dara.isNull(tmpReq.scriptProfile)) {
      request.scriptProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptProfile, "ScriptProfile", "json");
    }

    if (!$dara.isNull(tmpReq.synthesizerConfig)) {
      request.synthesizerConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.synthesizerConfig, "SynthesizerConfig", "json");
    }

    if (!$dara.isNull(tmpReq.toolConfig)) {
      request.toolConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.toolConfig, "ToolConfig", "json");
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

    if (!$dara.isNull(request.labelConfigShrink)) {
      query["LabelConfig"] = request.labelConfigShrink;
    }

    if (!$dara.isNull(request.ragConfigShrink)) {
      query["RagConfig"] = request.ragConfigShrink;
    }

    if (!$dara.isNull(request.scriptProfileShrink)) {
      query["ScriptProfile"] = request.scriptProfileShrink;
    }

    if (!$dara.isNull(request.synthesizerConfigShrink)) {
      query["SynthesizerConfig"] = request.synthesizerConfigShrink;
    }

    if (!$dara.isNull(request.toolConfigShrink)) {
      query["ToolConfig"] = request.toolConfigShrink;
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
   * Updates an instance.
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
   * Updates an instance.
   * 
   * @param request - UpdateCloneVoiceRequest
   * @returns UpdateCloneVoiceResponse
   */
  async updateCloneVoice(request: $_model.UpdateCloneVoiceRequest): Promise<$_model.UpdateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Creates or updates a message queue (MQ) subscription.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.eventSubscriptionsShrink)) {
      body["EventSubscriptions"] = request.eventSubscriptionsShrink;
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
      version: "2025-01-01",
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
   * Creates or updates a message queue (MQ) subscription.
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

  /**
   * Updates a variable.
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
   * Updates a variable.
   * 
   * @param request - UpdateVariableRequest
   * @returns UpdateVariableResponse
   */
  async updateVariable(request: $_model.UpdateVariableRequest): Promise<$_model.UpdateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVariableWithOptions(request, runtime);
  }

  /**
   * Updates a vocabulary.
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
    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
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
      version: "2025-01-01",
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
   * Updates a vocabulary.
   * 
   * @param request - UpdateVocabularyRequest
   * @returns UpdateVocabularyResponse
   */
  async updateVocabulary(request: $_model.UpdateVocabularyRequest): Promise<$_model.UpdateVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVocabularyWithOptions(request, runtime);
  }

  /**
   * Updates the third-party voice configuration.
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

    if (!$dara.isNull(request.businessUnitId)) {
      body["BusinessUnitId"] = request.businessUnitId;
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
      version: "2025-01-01",
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
   * Updates the third-party voice configuration.
   * 
   * @param request - UpdateVoiceAccessProfileRequest
   * @returns UpdateVoiceAccessProfileResponse
   */
  async updateVoiceAccessProfile(request: $_model.UpdateVoiceAccessProfileRequest): Promise<$_model.UpdateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVoiceAccessProfileWithOptions(request, runtime);
  }

}
