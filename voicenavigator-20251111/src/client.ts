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
   * Initiates a session.
   * 
   * @param request - BeginSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginSessionResponse
   */
  async *beginSessionWithSSE(request: $_model.BeginSessionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.BeginSessionResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftVersion)) {
      query["DraftVersion"] = request.draftVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.vendorParams)) {
      query["VendorParams"] = request.vendorParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginSession",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.BeginSessionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.BeginSessionResponse({}));
      }

    }
  }

  /**
   * Initiates a session.
   * 
   * @param request - BeginSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginSessionResponse
   */
  async beginSessionWithOptions(request: $_model.BeginSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeginSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.draftVersion)) {
      query["DraftVersion"] = request.draftVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.vendorParams)) {
      query["VendorParams"] = request.vendorParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginSession",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeginSessionResponse>(await this.callApi(params, req, runtime), new $_model.BeginSessionResponse({}));
  }

  /**
   * Initiates a session.
   * 
   * @param request - BeginSessionRequest
   * @returns BeginSessionResponse
   */
  async beginSession(request: $_model.BeginSessionRequest): Promise<$_model.BeginSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginSessionWithOptions(request, runtime);
  }

  /**
   * Initiates a web call.
   * 
   * @param request - BridgeWebCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCallWithOptions(request: $_model.BridgeWebCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BridgeWebCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessChannelId)) {
      query["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.accessChannelType)) {
      query["AccessChannelType"] = request.accessChannelType;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.draftVersion)) {
      query["DraftVersion"] = request.draftVersion;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.sampleRate)) {
      query["SampleRate"] = request.sampleRate;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
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
      version: "2025-11-11",
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
   * Initiates a web call.
   * 
   * @param request - BridgeWebCallRequest
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCall(request: $_model.BridgeWebCallRequest): Promise<$_model.BridgeWebCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeWebCallWithOptions(request, runtime);
  }

  /**
   * Creates a human agent service provider.
   * 
   * @param request - CreateCallCenterProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallCenterProviderResponse
   */
  async createCallCenterProviderWithOptions(request: $_model.CreateCallCenterProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallCenterProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destination)) {
      body["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.extras)) {
      body["Extras"] = request.extras;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.originator)) {
      body["Originator"] = request.originator;
    }

    if (!$dara.isNull(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!$dara.isNull(request.referTo)) {
      body["ReferTo"] = request.referTo;
    }

    if (!$dara.isNull(request.trunkId)) {
      body["TrunkId"] = request.trunkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallCenterProvider",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallCenterProviderResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallCenterProviderResponse({}));
  }

  /**
   * Creates a human agent service provider.
   * 
   * @param request - CreateCallCenterProviderRequest
   * @returns CreateCallCenterProviderResponse
   */
  async createCallCenterProvider(request: $_model.CreateCallCenterProviderRequest): Promise<$_model.CreateCallCenterProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallCenterProviderWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
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
   * Creates an instance.
   * 
   * @param request - CreateCloneVoiceRequest
   * @returns CreateCloneVoiceResponse
   */
  async createCloneVoice(request: $_model.CreateCloneVoiceRequest): Promise<$_model.CreateCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Adds an instruction to the global configuration of a digital employee.
   * 
   * @param request - CreateInstructionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstructionResponse
   */
  async createInstructionWithOptions(request: $_model.CreateInstructionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstructionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstruction",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstructionResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstructionResponse({}));
  }

  /**
   * Adds an instruction to the global configuration of a digital employee.
   * 
   * @param request - CreateInstructionRequest
   * @returns CreateInstructionResponse
   */
  async createInstruction(request: $_model.CreateInstructionRequest): Promise<$_model.CreateInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstructionWithOptions(request, runtime);
  }

  /**
   * Creates the configuration information for a language model.
   * 
   * @param tmpReq - CreateLlmAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLlmAccessProfileResponse
   */
  async createLlmAccessProfileWithOptions(tmpReq: $_model.CreateLlmAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLlmAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLlmAccessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.profile)) {
      request.profileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.profile, "Profile", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.profileShrink)) {
      body["Profile"] = request.profileShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLlmAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLlmAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateLlmAccessProfileResponse({}));
  }

  /**
   * Creates the configuration information for a language model.
   * 
   * @param request - CreateLlmAccessProfileRequest
   * @returns CreateLlmAccessProfileResponse
   */
  async createLlmAccessProfile(request: $_model.CreateLlmAccessProfileRequest): Promise<$_model.CreateLlmAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLlmAccessProfileWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
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
   * Creates an instance.
   * 
   * @param request - CreateScriptRequest
   * @returns CreateScriptResponse
   */
  async createScript(request: $_model.CreateScriptRequest): Promise<$_model.CreateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptWithOptions(request, runtime);
  }

  /**
   * Creates a scenario configuration.
   * 
   * @param tmpReq - CreateScriptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScriptVersionResponse
   */
  async createScriptVersionWithOptions(tmpReq: $_model.CreateScriptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScriptVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScriptVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interactionConfig)) {
      request.interactionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interactionConfig, "InteractionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.labelConfig)) {
      request.labelConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelConfig, "LabelConfig", "json");
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.interactionConfigShrink)) {
      body["InteractionConfig"] = request.interactionConfigShrink;
    }

    if (!$dara.isNull(request.labelConfigShrink)) {
      body["LabelConfig"] = request.labelConfigShrink;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptProfileShrink)) {
      body["ScriptProfile"] = request.scriptProfileShrink;
    }

    if (!$dara.isNull(request.sourceVersionId)) {
      body["SourceVersionId"] = request.sourceVersionId;
    }

    if (!$dara.isNull(request.synthesizerConfigShrink)) {
      body["SynthesizerConfig"] = request.synthesizerConfigShrink;
    }

    if (!$dara.isNull(request.transcriberConfigShrink)) {
      body["TranscriberConfig"] = request.transcriberConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScriptVersion",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScriptVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateScriptVersionResponse({}));
  }

  /**
   * Creates a scenario configuration.
   * 
   * @param request - CreateScriptVersionRequest
   * @returns CreateScriptVersionResponse
   */
  async createScriptVersion(request: $_model.CreateScriptVersionRequest): Promise<$_model.CreateScriptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptVersionWithOptions(request, runtime);
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
   * Deletes a human service provider in system administration.
   * 
   * @param request - DeleteCallCenterProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCallCenterProviderResponse
   */
  async deleteCallCenterProviderWithOptions(request: $_model.DeleteCallCenterProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCallCenterProviderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCallCenterProvider",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCallCenterProviderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCallCenterProviderResponse({}));
  }

  /**
   * Deletes a human service provider in system administration.
   * 
   * @param request - DeleteCallCenterProviderRequest
   * @returns DeleteCallCenterProviderResponse
   */
  async deleteCallCenterProvider(request: $_model.DeleteCallCenterProviderRequest): Promise<$_model.DeleteCallCenterProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCallCenterProviderWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario.
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
   * Deletes a scenario.
   * 
   * @param request - DeleteCloneVoiceRequest
   * @returns DeleteCloneVoiceResponse
   */
  async deleteCloneVoice(request: $_model.DeleteCloneVoiceRequest): Promise<$_model.DeleteCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Deletes an instruction from the global configuration of a digital employee.
   * 
   * @param request - DeleteInstructionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstructionResponse
   */
  async deleteInstructionWithOptions(request: $_model.DeleteInstructionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstructionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstruction",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstructionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstructionResponse({}));
  }

  /**
   * Deletes an instruction from the global configuration of a digital employee.
   * 
   * @param request - DeleteInstructionRequest
   * @returns DeleteInstructionResponse
   */
  async deleteInstruction(request: $_model.DeleteInstructionRequest): Promise<$_model.DeleteInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstructionWithOptions(request, runtime);
  }

  /**
   * Deletes the language model configuration.
   * 
   * @param request - DeleteLlmAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLlmAccessProfileResponse
   */
  async deleteLlmAccessProfileWithOptions(request: $_model.DeleteLlmAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLlmAccessProfileResponse> {
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
      action: "DeleteLlmAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLlmAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLlmAccessProfileResponse({}));
  }

  /**
   * Deletes the language model configuration.
   * 
   * @param request - DeleteLlmAccessProfileRequest
   * @returns DeleteLlmAccessProfileResponse
   */
  async deleteLlmAccessProfile(request: $_model.DeleteLlmAccessProfileRequest): Promise<$_model.DeleteLlmAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLlmAccessProfileWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario.
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
   * Deletes a scenario.
   * 
   * @param request - DeleteScriptRequest
   * @returns DeleteScriptResponse
   */
  async deleteScript(request: $_model.DeleteScriptRequest): Promise<$_model.DeleteScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptWithOptions(request, runtime);
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
   * Deletes a vocabulary from a Voice Navigator instance.
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
   * Deletes a vocabulary from a Voice Navigator instance.
   * 
   * @param request - DeleteVocabularyRequest
   * @returns DeleteVocabularyResponse
   */
  async deleteVocabulary(request: $_model.DeleteVocabularyRequest): Promise<$_model.DeleteVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVocabularyWithOptions(request, runtime);
  }

  /**
   * Deletes a Voice Access Profile.
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
   * Deletes a Voice Access Profile.
   * 
   * @param request - DeleteVoiceAccessProfileRequest
   * @returns DeleteVoiceAccessProfileResponse
   */
  async deleteVoiceAccessProfile(request: $_model.DeleteVoiceAccessProfileRequest): Promise<$_model.DeleteVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * Process a single conversational turn.
   * 
   * @param request - DialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DialogueResponse
   */
  async *dialogueWithSSE(request: $_model.DialogueRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.DialogueResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extras)) {
      query["Extras"] = request.extras;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Dialogue",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.DialogueResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.DialogueResponse({}));
      }

    }
  }

  /**
   * Process a single conversational turn.
   * 
   * @param request - DialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DialogueResponse
   */
  async dialogueWithOptions(request: $_model.DialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DialogueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extras)) {
      query["Extras"] = request.extras;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Dialogue",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DialogueResponse>(await this.callApi(params, req, runtime), new $_model.DialogueResponse({}));
  }

  /**
   * Process a single conversational turn.
   * 
   * @param request - DialogueRequest
   * @returns DialogueResponse
   */
  async dialogue(request: $_model.DialogueRequest): Promise<$_model.DialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  /**
   * Disables the subscription for a Voice Navigator instance.
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
   * Disables the subscription for a Voice Navigator instance.
   * 
   * @param request - DisableSubscriptionRequest
   * @returns DisableSubscriptionResponse
   */
  async disableSubscription(request: $_model.DisableSubscriptionRequest): Promise<$_model.DisableSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSubscriptionWithOptions(request, runtime);
  }

  /**
   * Ends a session.
   * 
   * @param request - EndSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndSessionResponse
   */
  async endSessionWithOptions(request: $_model.EndSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndSession",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndSessionResponse>(await this.callApi(params, req, runtime), new $_model.EndSessionResponse({}));
  }

  /**
   * Ends a session.
   * 
   * @param request - EndSessionRequest
   * @returns EndSessionResponse
   */
  async endSession(request: $_model.EndSessionRequest): Promise<$_model.EndSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endSessionWithOptions(request, runtime);
  }

  /**
   * Exports a specified script.
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
   * Exports a specified script.
   * 
   * @param request - ExportScriptRequest
   * @returns ExportScriptResponse
   */
  async exportScript(request: $_model.ExportScriptRequest): Promise<$_model.ExportScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScriptWithOptions(request, runtime);
  }

  /**
   * Exports vocabularies.
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
   * Exports vocabularies.
   * 
   * @param request - ExportVocabularyRequest
   * @returns ExportVocabularyResponse
   */
  async exportVocabulary(request: $_model.ExportVocabularyRequest): Promise<$_model.ExportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportVocabularyWithOptions(request, runtime);
  }

  /**
   * Generates temporary credentials and parameters to upload a file to Object Storage Service (OSS).
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

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateFileUploadParams",
      version: "2025-11-11",
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
   * Generates temporary credentials and parameters to upload a file to Object Storage Service (OSS).
   * 
   * @param request - GenerateFileUploadParamsRequest
   * @returns GenerateFileUploadParamsResponse
   */
  async generateFileUploadParams(request: $_model.GenerateFileUploadParamsRequest): Promise<$_model.GenerateFileUploadParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateFileUploadParamsWithOptions(request, runtime);
  }

  /**
   * Get call details.
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
   * Get call details.
   * 
   * @param request - GetCallDetailRecordRequest
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecord(request: $_model.GetCallDetailRecordRequest): Promise<$_model.GetCallDetailRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
  }

  /**
   * Retrieves a data channel credential.
   * 
   * @param request - GetDataChannelCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredentialWithOptions(request: $_model.GetDataChannelCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataChannelCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataChannelCredential",
      version: "2025-11-11",
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
   * Retrieves a data channel credential.
   * 
   * @param request - GetDataChannelCredentialRequest
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredential(request: $_model.GetDataChannelCredentialRequest): Promise<$_model.GetDataChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataChannelCredentialWithOptions(request, runtime);
  }

  /**
   * Retrieves the metric trends chart for an instance.
   * 
   * @remarks
   * ## Operation description
   * - This API operation is used to query the script configuration details for a specific scenario, including settings for ASR, TTS, and dialog capabilities.
   * - No additional parameters are required in the request. The response contains configuration data for both the draft version and the published version.
   * - Check the `Data` field in the response to obtain detailed configuration information.
   * 
   * @param request - GetInstanceTrendingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceTrendingReportResponse
   */
  async getInstanceTrendingReportWithOptions(request: $_model.GetInstanceTrendingReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceTrendingReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceTrendingReport",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceTrendingReportResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceTrendingReportResponse({}));
  }

  /**
   * Retrieves the metric trends chart for an instance.
   * 
   * @remarks
   * ## Operation description
   * - This API operation is used to query the script configuration details for a specific scenario, including settings for ASR, TTS, and dialog capabilities.
   * - No additional parameters are required in the request. The response contains configuration data for both the draft version and the published version.
   * - Check the `Data` field in the response to obtain detailed configuration information.
   * 
   * @param request - GetInstanceTrendingReportRequest
   * @returns GetInstanceTrendingReportResponse
   */
  async getInstanceTrendingReport(request: $_model.GetInstanceTrendingReportRequest): Promise<$_model.GetInstanceTrendingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceTrendingReportWithOptions(request, runtime);
  }

  /**
   * Retrieves real-time stats for an instance.
   * 
   * @param request - GetRealtimeInstanceStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeInstanceStatsResponse
   */
  async getRealtimeInstanceStatsWithOptions(request: $_model.GetRealtimeInstanceStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeInstanceStatsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeInstanceStats",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeInstanceStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeInstanceStatsResponse({}));
  }

  /**
   * Retrieves real-time stats for an instance.
   * 
   * @param request - GetRealtimeInstanceStatsRequest
   * @returns GetRealtimeInstanceStatsResponse
   */
  async getRealtimeInstanceStats(request: $_model.GetRealtimeInstanceStatsRequest): Promise<$_model.GetRealtimeInstanceStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeInstanceStatsWithOptions(request, runtime);
  }

  /**
   * Queries the real-time statistics for a specified script.
   * 
   * @param request - GetRealtimeScriptStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeScriptStatsResponse
   */
  async getRealtimeScriptStatsWithOptions(request: $_model.GetRealtimeScriptStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeScriptStatsResponse> {
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
      action: "GetRealtimeScriptStats",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeScriptStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeScriptStatsResponse({}));
  }

  /**
   * Queries the real-time statistics for a specified script.
   * 
   * @param request - GetRealtimeScriptStatsRequest
   * @returns GetRealtimeScriptStatsResponse
   */
  async getRealtimeScriptStats(request: $_model.GetRealtimeScriptStatsRequest): Promise<$_model.GetRealtimeScriptStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeScriptStatsWithOptions(request, runtime);
  }

  /**
   * Retrieves the download URL for a call recording.
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
   * Retrieves the download URL for a call recording.
   * 
   * @param request - GetRecordingRequest
   * @returns GetRecordingResponse
   */
  async getRecording(request: $_model.GetRecordingRequest): Promise<$_model.GetRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordingWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed configuration information for the draft and published versions of a specified scenario.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the detailed script configuration for a specific scenario. The configuration includes settings for Automatic Speech Recognition (ASR), Text-to-Speech (TTS), and dialogue capabilities.
   * - No additional parameters are required for the request. The response contains the configuration data for both the draft and published versions.
   * - The detailed configuration information is returned in the `Data` field of the response.
   * 
   * @param request - GetScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScriptResponse
   */
  async getScriptWithOptions(request: $_model.GetScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScriptResponse> {
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
      action: "GetScript",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScriptResponse>(await this.callApi(params, req, runtime), new $_model.GetScriptResponse({}));
  }

  /**
   * Retrieves the detailed configuration information for the draft and published versions of a specified scenario.
   * 
   * @remarks
   * ## Request description
   * - This operation queries the detailed script configuration for a specific scenario. The configuration includes settings for Automatic Speech Recognition (ASR), Text-to-Speech (TTS), and dialogue capabilities.
   * - No additional parameters are required for the request. The response contains the configuration data for both the draft and published versions.
   * - The detailed configuration information is returned in the `Data` field of the response.
   * 
   * @param request - GetScriptRequest
   * @returns GetScriptResponse
   */
  async getScript(request: $_model.GetScriptRequest): Promise<$_model.GetScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScriptWithOptions(request, runtime);
  }

  /**
   * View the scenario metric trend chart
   * 
   * @remarks
   * ## Request
   * - This API returns the script configuration for a specific scenario, including settings for ASR, TTS, and conversational capability.
   * - This request requires no parameters. The response includes configuration data for both the draft and published versions.
   * - Check the `Data` field for configuration details.
   * 
   * @param request - GetScriptTrendingReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScriptTrendingReportResponse
   */
  async getScriptTrendingReportWithOptions(request: $_model.GetScriptTrendingReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScriptTrendingReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeInterval)) {
      body["TimeInterval"] = request.timeInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScriptTrendingReport",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScriptTrendingReportResponse>(await this.callApi(params, req, runtime), new $_model.GetScriptTrendingReportResponse({}));
  }

  /**
   * View the scenario metric trend chart
   * 
   * @remarks
   * ## Request
   * - This API returns the script configuration for a specific scenario, including settings for ASR, TTS, and conversational capability.
   * - This request requires no parameters. The response includes configuration data for both the draft and published versions.
   * - Check the `Data` field for configuration details.
   * 
   * @param request - GetScriptTrendingReportRequest
   * @returns GetScriptTrendingReportResponse
   */
  async getScriptTrendingReport(request: $_model.GetScriptTrendingReportRequest): Promise<$_model.GetScriptTrendingReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScriptTrendingReportWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a message queue (MQ) subscription.
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
   * Retrieves the details of a message queue (MQ) subscription.
   * 
   * @param request - GetSubscriptionRequest
   * @returns GetSubscriptionResponse
   */
  async getSubscription(request: $_model.GetSubscriptionRequest): Promise<$_model.GetSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSubscriptionWithOptions(request, runtime);
  }

  /**
   * Gets the details of a specified vocabulary.
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
   * Gets the details of a specified vocabulary.
   * 
   * @param request - GetVocabularyRequest
   * @returns GetVocabularyResponse
   */
  async getVocabulary(request: $_model.GetVocabularyRequest): Promise<$_model.GetVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVocabularyWithOptions(request, runtime);
  }

  /**
   * Imports a custom vocabulary.
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
   * Imports a custom vocabulary.
   * 
   * @param request - ImportVocabularyRequest
   * @returns ImportVocabularyResponse
   */
  async importVocabulary(request: $_model.ImportVocabularyRequest): Promise<$_model.ImportVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importVocabularyWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of background music tracks.
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
   * Retrieves a list of background music tracks.
   * 
   * @param request - ListBackgroundMusicsRequest
   * @returns ListBackgroundMusicsResponse
   */
  async listBackgroundMusics(request: $_model.ListBackgroundMusicsRequest): Promise<$_model.ListBackgroundMusicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBackgroundMusicsWithOptions(request, runtime);
  }

  /**
   * System Management > Manual Service Provider Management > Query
   * 
   * @param request - ListCallCenterProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallCenterProvidersResponse
   */
  async listCallCenterProvidersWithOptions(request: $_model.ListCallCenterProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallCenterProvidersResponse> {
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

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallCenterProviders",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallCenterProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListCallCenterProvidersResponse({}));
  }

  /**
   * System Management > Manual Service Provider Management > Query
   * 
   * @param request - ListCallCenterProvidersRequest
   * @returns ListCallCenterProvidersResponse
   */
  async listCallCenterProviders(request: $_model.ListCallCenterProvidersRequest): Promise<$_model.ListCallCenterProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallCenterProvidersWithOptions(request, runtime);
  }

  /**
   * Gets the call list.
   * 
   * @param tmpReq - ListCallDetailRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallDetailRecordsResponse
   */
  async listCallDetailRecordsWithOptions(tmpReq: $_model.ListCallDetailRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallDetailRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListCallDetailRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dispositionCodes)) {
      request.dispositionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dispositionCodes, "DispositionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.dispositionReasons)) {
      request.dispositionReasonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dispositionReasons, "DispositionReasons", "json");
    }

    if (!$dara.isNull(tmpReq.sessionIds)) {
      request.sessionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sessionIds, "SessionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accessChannelId)) {
      query["AccessChannelId"] = request.accessChannelId;
    }

    if (!$dara.isNull(request.accessChannelType)) {
      query["AccessChannelType"] = request.accessChannelType;
    }

    if (!$dara.isNull(request.draftVersion)) {
      query["DraftVersion"] = request.draftVersion;
    }

    if (!$dara.isNull(request.issueResolved)) {
      query["IssueResolved"] = request.issueResolved;
    }

    if (!$dara.isNull(request.maxTalkTurns)) {
      query["MaxTalkTurns"] = request.maxTalkTurns;
    }

    if (!$dara.isNull(request.minTalkTurns)) {
      query["MinTalkTurns"] = request.minTalkTurns;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callee)) {
      body["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      body["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.dispositionCodesShrink)) {
      body["DispositionCodes"] = request.dispositionCodesShrink;
    }

    if (!$dara.isNull(request.dispositionReasonsShrink)) {
      body["DispositionReasons"] = request.dispositionReasonsShrink;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.sessionIdsShrink)) {
      body["SessionIds"] = request.sessionIdsShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallDetailRecords",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallDetailRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListCallDetailRecordsResponse({}));
  }

  /**
   * Gets the call list.
   * 
   * @param request - ListCallDetailRecordsRequest
   * @returns ListCallDetailRecordsResponse
   */
  async listCallDetailRecords(request: $_model.ListCallDetailRecordsRequest): Promise<$_model.ListCallDetailRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallDetailRecordsWithOptions(request, runtime);
  }

  /**
   * Lists the cloned voices in an instance.
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
   * Lists the cloned voices in an instance.
   * 
   * @param request - ListCloneVoiceRequest
   * @returns ListCloneVoiceResponse
   */
  async listCloneVoice(request: $_model.ListCloneVoiceRequest): Promise<$_model.ListCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Lists the available clone voice models.
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
   * Lists the available clone voice models.
   * 
   * @param request - ListCloneVoiceModelsRequest
   * @returns ListCloneVoiceModelsResponse
   */
  async listCloneVoiceModels(request: $_model.ListCloneVoiceModelsRequest): Promise<$_model.ListCloneVoiceModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoiceModelsWithOptions(request, runtime);
  }

  /**
   * Retrieve aggregated instance metrics
   * 
   * @remarks
   * ## Request
   * - This API retrieves the script configuration for a specific scenario, including settings for ASR, TTS, and dialogue capability.
   * - This request requires no parameters. The response includes the configuration data for both the draft and published versions.
   * - The configuration data is returned in the `Data` field of the response.
   * 
   * @param tmpReq - ListHistoricalInstanceReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalInstanceReportResponse
   */
  async listHistoricalInstanceReportWithOptions(tmpReq: $_model.ListHistoricalInstanceReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalInstanceReportResponse> {
    tmpReq.validate();
    let request = new $_model.ListHistoricalInstanceReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
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
      action: "ListHistoricalInstanceReport",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalInstanceReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalInstanceReportResponse({}));
  }

  /**
   * Retrieve aggregated instance metrics
   * 
   * @remarks
   * ## Request
   * - This API retrieves the script configuration for a specific scenario, including settings for ASR, TTS, and dialogue capability.
   * - This request requires no parameters. The response includes the configuration data for both the draft and published versions.
   * - The configuration data is returned in the `Data` field of the response.
   * 
   * @param request - ListHistoricalInstanceReportRequest
   * @returns ListHistoricalInstanceReportResponse
   */
  async listHistoricalInstanceReport(request: $_model.ListHistoricalInstanceReportRequest): Promise<$_model.ListHistoricalInstanceReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalInstanceReportWithOptions(request, runtime);
  }

  /**
   * Get scene metric summary data
   * 
   * @param tmpReq - ListHistoricalScriptReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoricalScriptReportResponse
   */
  async listHistoricalScriptReportWithOptions(tmpReq: $_model.ListHistoricalScriptReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoricalScriptReportResponse> {
    tmpReq.validate();
    let request = new $_model.ListHistoricalScriptReportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scriptIds)) {
      request.scriptIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scriptIds, "ScriptIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoricalScriptReport",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoricalScriptReportResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoricalScriptReportResponse({}));
  }

  /**
   * Get scene metric summary data
   * 
   * @param request - ListHistoricalScriptReportRequest
   * @returns ListHistoricalScriptReportResponse
   */
  async listHistoricalScriptReport(request: $_model.ListHistoricalScriptReportRequest): Promise<$_model.ListHistoricalScriptReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHistoricalScriptReportWithOptions(request, runtime);
  }

  /**
   * Lists the instructions that are configured for a Digital Employee.
   * 
   * @param request - ListInstructionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstructionsResponse
   */
  async listInstructionsWithOptions(request: $_model.ListInstructionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstructionsResponse> {
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

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstructions",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstructionsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstructionsResponse({}));
  }

  /**
   * Lists the instructions that are configured for a Digital Employee.
   * 
   * @param request - ListInstructionsRequest
   * @returns ListInstructionsResponse
   */
  async listInstructions(request: $_model.ListInstructionsRequest): Promise<$_model.ListInstructionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstructionsWithOptions(request, runtime);
  }

  /**
   * Get the language model configuration.
   * 
   * @param request - ListLlmAccessProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLlmAccessProfilesResponse
   */
  async listLlmAccessProfilesWithOptions(request: $_model.ListLlmAccessProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLlmAccessProfilesResponse> {
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
      action: "ListLlmAccessProfiles",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLlmAccessProfilesResponse>(await this.callApi(params, req, runtime), new $_model.ListLlmAccessProfilesResponse({}));
  }

  /**
   * Get the language model configuration.
   * 
   * @param request - ListLlmAccessProfilesRequest
   * @returns ListLlmAccessProfilesResponse
   */
  async listLlmAccessProfiles(request: $_model.ListLlmAccessProfilesRequest): Promise<$_model.ListLlmAccessProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLlmAccessProfilesWithOptions(request, runtime);
  }

  /**
   * Lists the available NLU models.
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
   * Lists the available NLU models.
   * 
   * @param request - ListNluModelsRequest
   * @returns ListNluModelsResponse
   */
  async listNluModels(request: $_model.ListNluModelsRequest): Promise<$_model.ListNluModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNluModelsWithOptions(request, runtime);
  }

  /**
   * Retrieves real-time statistics for instances.
   * 
   * @param tmpReq - ListRealtimeInstanceStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRealtimeInstanceStatsResponse
   */
  async listRealtimeInstanceStatsWithOptions(tmpReq: $_model.ListRealtimeInstanceStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRealtimeInstanceStatsResponse> {
    tmpReq.validate();
    let request = new $_model.ListRealtimeInstanceStatsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
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
      action: "ListRealtimeInstanceStats",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRealtimeInstanceStatsResponse>(await this.callApi(params, req, runtime), new $_model.ListRealtimeInstanceStatsResponse({}));
  }

  /**
   * Retrieves real-time statistics for instances.
   * 
   * @param request - ListRealtimeInstanceStatsRequest
   * @returns ListRealtimeInstanceStatsResponse
   */
  async listRealtimeInstanceStats(request: $_model.ListRealtimeInstanceStatsRequest): Promise<$_model.ListRealtimeInstanceStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRealtimeInstanceStatsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of scenario configuration templates.
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
   * Retrieves a list of scenario configuration templates.
   * 
   * @param request - ListScriptProfileTemplatesRequest
   * @returns ListScriptProfileTemplatesResponse
   */
  async listScriptProfileTemplates(request: $_model.ListScriptProfileTemplatesRequest): Promise<$_model.ListScriptProfileTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptProfileTemplatesWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an instance.
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
   * Retrieves the details of an instance.
   * 
   * @param request - ListScriptsRequest
   * @returns ListScriptsResponse
   */
  async listScripts(request: $_model.ListScriptsRequest): Promise<$_model.ListScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
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
   * Retrieves a list of vocabularies for a specified instance.
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
   * Retrieves a list of vocabularies for a specified instance.
   * 
   * @param request - ListVocabularyRequest
   * @returns ListVocabularyResponse
   */
  async listVocabulary(request: $_model.ListVocabularyRequest): Promise<$_model.ListVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVocabularyWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an instance.
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
   * Retrieves the details of an instance.
   * 
   * @param request - ListVoiceAccessProfileRequest
   * @returns ListVoiceAccessProfileResponse
   */
  async listVoiceAccessProfile(request: $_model.ListVoiceAccessProfileRequest): Promise<$_model.ListVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceAccessProfileWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of engines.
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
   * Retrieves a list of engines.
   * 
   * @param request - ListVoiceEnginesRequest
   * @returns ListVoiceEnginesResponse
   */
  async listVoiceEngines(request: $_model.ListVoiceEnginesRequest): Promise<$_model.ListVoiceEnginesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceEnginesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of available voices.
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
   * Retrieves a list of available voices.
   * 
   * @param request - ListVoicesRequest
   * @returns ListVoicesResponse
   */
  async listVoices(request: $_model.ListVoicesRequest): Promise<$_model.ListVoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoicesWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
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
   * Creates an instance.
   * 
   * @param request - PreviewVoiceRequest
   * @returns PreviewVoiceResponse
   */
  async previewVoice(request: $_model.PreviewVoiceRequest): Promise<$_model.PreviewVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewVoiceWithOptions(request, runtime);
  }

  /**
   * Updates an instance.
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
   * Updates an instance.
   * 
   * @param request - PublishScriptRequest
   * @returns PublishScriptResponse
   */
  async publishScript(request: $_model.PublishScriptRequest): Promise<$_model.PublishScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishScriptWithOptions(request, runtime);
  }

  /**
   * Updates an agent service provider in system administration.
   * 
   * @param request - UpdateCallCenterProviderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCallCenterProviderResponse
   */
  async updateCallCenterProviderWithOptions(request: $_model.UpdateCallCenterProviderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCallCenterProviderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destination)) {
      body["Destination"] = request.destination;
    }

    if (!$dara.isNull(request.extras)) {
      body["Extras"] = request.extras;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.originator)) {
      body["Originator"] = request.originator;
    }

    if (!$dara.isNull(request.providerId)) {
      body["ProviderId"] = request.providerId;
    }

    if (!$dara.isNull(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!$dara.isNull(request.referTo)) {
      body["ReferTo"] = request.referTo;
    }

    if (!$dara.isNull(request.trunkId)) {
      body["TrunkId"] = request.trunkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCallCenterProvider",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCallCenterProviderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCallCenterProviderResponse({}));
  }

  /**
   * Updates an agent service provider in system administration.
   * 
   * @param request - UpdateCallCenterProviderRequest
   * @returns UpdateCallCenterProviderResponse
   */
  async updateCallCenterProvider(request: $_model.UpdateCallCenterProviderRequest): Promise<$_model.UpdateCallCenterProviderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCallCenterProviderWithOptions(request, runtime);
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
   * Updates the global configuration of a specific instruction for a Digital Employee.
   * 
   * @param request - UpdateInstructionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstructionResponse
   */
  async updateInstructionWithOptions(request: $_model.UpdateInstructionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstructionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstruction",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstructionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstructionResponse({}));
  }

  /**
   * Updates the global configuration of a specific instruction for a Digital Employee.
   * 
   * @param request - UpdateInstructionRequest
   * @returns UpdateInstructionResponse
   */
  async updateInstruction(request: $_model.UpdateInstructionRequest): Promise<$_model.UpdateInstructionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstructionWithOptions(request, runtime);
  }

  /**
   * Updates the language model configuration.
   * 
   * @param tmpReq - UpdateLlmAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLlmAccessProfileResponse
   */
  async updateLlmAccessProfileWithOptions(tmpReq: $_model.UpdateLlmAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLlmAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLlmAccessProfileShrinkRequest({ });
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

    if (!$dara.isNull(request.profileShrink)) {
      body["Profile"] = request.profileShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLlmAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLlmAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLlmAccessProfileResponse({}));
  }

  /**
   * Updates the language model configuration.
   * 
   * @param request - UpdateLlmAccessProfileRequest
   * @returns UpdateLlmAccessProfileResponse
   */
  async updateLlmAccessProfile(request: $_model.UpdateLlmAccessProfileRequest): Promise<$_model.UpdateLlmAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLlmAccessProfileWithOptions(request, runtime);
  }

  /**
   * Updates an instance.
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
   * Updates an instance.
   * 
   * @param request - UpdateScriptRequest
   * @returns UpdateScriptResponse
   */
  async updateScript(request: $_model.UpdateScriptRequest): Promise<$_model.UpdateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScriptWithOptions(request, runtime);
  }

  /**
   * Creates or updates the Message Queue (MQ) configuration.
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
   * Creates or updates the Message Queue (MQ) configuration.
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
   * Updates an instance.
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
   * Updates an instance.
   * 
   * @param request - UpdateVocabularyRequest
   * @returns UpdateVocabularyResponse
   */
  async updateVocabulary(request: $_model.UpdateVocabularyRequest): Promise<$_model.UpdateVocabularyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVocabularyWithOptions(request, runtime);
  }

  /**
   * Updates a voice access profile.
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
   * Updates a voice access profile.
   * 
   * @param request - UpdateVoiceAccessProfileRequest
   * @returns UpdateVoiceAccessProfileResponse
   */
  async updateVoiceAccessProfile(request: $_model.UpdateVoiceAccessProfileRequest): Promise<$_model.UpdateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVoiceAccessProfileWithOptions(request, runtime);
  }

}
