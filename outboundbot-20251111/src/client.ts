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
      'cn-shanghai': "outboundbot.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("outboundbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Stops an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - AbortCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortCampaignResponse
   */
  async abortCampaignWithOptions(request: $_model.AbortCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortCampaignResponse>(await this.callApi(params, req, runtime), new $_model.AbortCampaignResponse({}));
  }

  /**
   * Stops an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - AbortCampaignRequest
   * @returns AbortCampaignResponse
   */
  async abortCampaign(request: $_model.AbortCampaignRequest): Promise<$_model.AbortCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abortCampaignWithOptions(request, runtime);
  }

  /**
   * Stops an outbound call case.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - AbortCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortCasesResponse
   */
  async abortCasesWithOptions(tmpReq: $_model.AbortCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbortCasesResponse> {
    tmpReq.validate();
    let request = new $_model.AbortCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.phoneNumbers)) {
      request.phoneNumbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.phoneNumbers, "PhoneNumbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.phoneNumbersShrink)) {
      query["PhoneNumbers"] = request.phoneNumbersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortCases",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortCasesResponse>(await this.callApi(params, req, runtime), new $_model.AbortCasesResponse({}));
  }

  /**
   * Stops an outbound call case.
   * 
   * @remarks
   * ***
   * 
   * @param request - AbortCasesRequest
   * @returns AbortCasesResponse
   */
  async abortCases(request: $_model.AbortCasesRequest): Promise<$_model.AbortCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abortCasesWithOptions(request, runtime);
  }

  /**
   * Appends contacts to an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - AppendCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppendCasesResponse
   */
  async appendCasesWithOptions(tmpReq: $_model.AppendCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AppendCasesResponse> {
    tmpReq.validate();
    let request = new $_model.AppendCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cases)) {
      request.casesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cases, "Cases", "json");
    }

    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.casesShrink)) {
      body["Cases"] = request.casesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppendCases",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppendCasesResponse>(await this.callApi(params, req, runtime), new $_model.AppendCasesResponse({}));
  }

  /**
   * Appends contacts to an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - AppendCasesRequest
   * @returns AppendCasesResponse
   */
  async appendCases(request: $_model.AppendCasesRequest): Promise<$_model.AppendCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.appendCasesWithOptions(request, runtime);
  }

  /**
   * Creates an outbound call task.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - CreateCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCampaignResponse
   */
  async createCampaignWithOptions(tmpReq: $_model.CreateCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCampaignResponse> {
    tmpReq.validate();
    let request = new $_model.CreateCampaignShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cases)) {
      request.casesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cases, "Cases", "json");
    }

    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attemptOrder)) {
      query["AttemptOrder"] = request.attemptOrder;
    }

    if (!$dara.isNull(request.callableTime)) {
      query["CallableTime"] = request.callableTime;
    }

    if (!$dara.isNull(request.caseFileKey)) {
      query["CaseFileKey"] = request.caseFileKey;
    }

    if (!$dara.isNull(request.dialingTimeoutSeconds)) {
      query["DialingTimeoutSeconds"] = request.dialingTimeoutSeconds;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fixedQuota)) {
      query["FixedQuota"] = request.fixedQuota;
    }

    if (!$dara.isNull(request.flashSmsParameters)) {
      query["FlashSmsParameters"] = request.flashSmsParameters;
    }

    if (!$dara.isNull(request.holidayRestricted)) {
      query["HolidayRestricted"] = request.holidayRestricted;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxAttemptCount)) {
      query["MaxAttemptCount"] = request.maxAttemptCount;
    }

    if (!$dara.isNull(request.minAttemptInterval)) {
      query["MinAttemptInterval"] = request.minAttemptInterval;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!$dara.isNull(request.redialRestrictions)) {
      query["RedialRestrictions"] = request.redialRestrictions;
    }

    if (!$dara.isNull(request.runUntilEndTime)) {
      query["RunUntilEndTime"] = request.runUntilEndTime;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.weight)) {
      query["Weight"] = request.weight;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.casesShrink)) {
      body["Cases"] = request.casesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCampaignResponse>(await this.callApi(params, req, runtime), new $_model.CreateCampaignResponse({}));
  }

  /**
   * Creates an outbound call task.
   * 
   * @remarks
   * ***
   * 
   * @param request - CreateCampaignRequest
   * @returns CreateCampaignResponse
   */
  async createCampaign(request: $_model.CreateCampaignRequest): Promise<$_model.CreateCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCampaignWithOptions(request, runtime);
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
   * Creates a flash message configuration.
   * 
   * @param tmpReq - CreateFlashSmsAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFlashSmsAccessProfileResponse
   */
  async createFlashSmsAccessProfileWithOptions(tmpReq: $_model.CreateFlashSmsAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFlashSmsAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.CreateFlashSmsAccessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accessProfile)) {
      request.accessProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accessProfile, "AccessProfile", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessProfileShrink)) {
      body["AccessProfile"] = request.accessProfileShrink;
    }

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
      action: "CreateFlashSmsAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFlashSmsAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFlashSmsAccessProfileResponse({}));
  }

  /**
   * Creates a flash message configuration.
   * 
   * @param request - CreateFlashSmsAccessProfileRequest
   * @returns CreateFlashSmsAccessProfileResponse
   */
  async createFlashSmsAccessProfile(request: $_model.CreateFlashSmsAccessProfileRequest): Promise<$_model.CreateFlashSmsAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFlashSmsAccessProfileWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.serviceMode)) {
      body["ServiceMode"] = request.serviceMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @param tmpReq - CreateOutboundCallRestrictionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOutboundCallRestrictionResponse
   */
  async createOutboundCallRestrictionWithOptions(tmpReq: $_model.CreateOutboundCallRestrictionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOutboundCallRestrictionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOutboundCallRestrictionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.outboundCallRestriction)) {
      request.outboundCallRestrictionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outboundCallRestriction, "OutboundCallRestriction", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.outboundCallRestrictionShrink)) {
      body["OutboundCallRestriction"] = request.outboundCallRestrictionShrink;
    }

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOutboundCallRestriction",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOutboundCallRestrictionResponse>(await this.callApi(params, req, runtime), new $_model.CreateOutboundCallRestrictionResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @param request - CreateOutboundCallRestrictionRequest
   * @returns CreateOutboundCallRestrictionResponse
   */
  async createOutboundCallRestriction(request: $_model.CreateOutboundCallRestrictionRequest): Promise<$_model.CreateOutboundCallRestrictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOutboundCallRestrictionWithOptions(request, runtime);
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

    if (!$dara.isNull(tmpReq.labelConfigs)) {
      request.labelConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelConfigs, "LabelConfigs", "json");
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

    if (!$dara.isNull(request.labelConfigsShrink)) {
      body["LabelConfigs"] = request.labelConfigsShrink;
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
   * Deletes a scene.
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
   * Deletes a scene.
   * 
   * @param request - DeleteCloneVoiceRequest
   * @returns DeleteCloneVoiceResponse
   */
  async deleteCloneVoice(request: $_model.DeleteCloneVoiceRequest): Promise<$_model.DeleteCloneVoiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCloneVoiceWithOptions(request, runtime);
  }

  /**
   * Deletes a flash message configuration.
   * 
   * @param request - DeleteFlashSmsAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFlashSmsAccessProfileResponse
   */
  async deleteFlashSmsAccessProfileWithOptions(request: $_model.DeleteFlashSmsAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFlashSmsAccessProfileResponse> {
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
      action: "DeleteFlashSmsAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFlashSmsAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFlashSmsAccessProfileResponse({}));
  }

  /**
   * Deletes a flash message configuration.
   * 
   * @param request - DeleteFlashSmsAccessProfileRequest
   * @returns DeleteFlashSmsAccessProfileResponse
   */
  async deleteFlashSmsAccessProfile(request: $_model.DeleteFlashSmsAccessProfileRequest): Promise<$_model.DeleteFlashSmsAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFlashSmsAccessProfileWithOptions(request, runtime);
  }

  /**
   * Retrieves instance details.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: $_model.DeleteInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Retrieves instance details.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * Deletes blacklists and whitelists.
   * 
   * @param tmpReq - DeleteOutboundCallRestrictionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOutboundCallRestrictionResponse
   */
  async deleteOutboundCallRestrictionWithOptions(tmpReq: $_model.DeleteOutboundCallRestrictionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOutboundCallRestrictionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteOutboundCallRestrictionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.restrictionIdList)) {
      request.restrictionIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.restrictionIdList, "RestrictionIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.restrictionIdListShrink)) {
      body["RestrictionIdList"] = request.restrictionIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOutboundCallRestriction",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOutboundCallRestrictionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOutboundCallRestrictionResponse({}));
  }

  /**
   * Deletes blacklists and whitelists.
   * 
   * @param request - DeleteOutboundCallRestrictionRequest
   * @returns DeleteOutboundCallRestrictionResponse
   */
  async deleteOutboundCallRestriction(request: $_model.DeleteOutboundCallRestrictionRequest): Promise<$_model.DeleteOutboundCallRestrictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOutboundCallRestrictionWithOptions(request, runtime);
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
   * Retrieves the details of an outbound campaign.
   * 
   * @param request - GetCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCampaignResponse
   */
  async getCampaignWithOptions(request: $_model.GetCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCampaignResponse>(await this.callApi(params, req, runtime), new $_model.GetCampaignResponse({}));
  }

  /**
   * Retrieves the details of an outbound campaign.
   * 
   * @param request - GetCampaignRequest
   * @returns GetCampaignResponse
   */
  async getCampaign(request: $_model.GetCampaignRequest): Promise<$_model.GetCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCampaignWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an instance.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Retrieves the details of an instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Retrieves a prompt scenario template.
   * 
   * @param request - GetScriptProfileTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScriptProfileTemplateResponse
   */
  async getScriptProfileTemplateWithOptions(request: $_model.GetScriptProfileTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScriptProfileTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScriptProfileTemplate",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScriptProfileTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetScriptProfileTemplateResponse({}));
  }

  /**
   * Retrieves a prompt scenario template.
   * 
   * @param request - GetScriptProfileTemplateRequest
   * @returns GetScriptProfileTemplateResponse
   */
  async getScriptProfileTemplate(request: $_model.GetScriptProfileTemplateRequest): Promise<$_model.GetScriptProfileTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScriptProfileTemplateWithOptions(request, runtime);
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
   * Retrieves the list of outbound call campaigns.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListCampaignsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCampaignsResponse
   */
  async listCampaignsWithOptions(request: $_model.ListCampaignsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCampaignsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actualStartTimeFrom)) {
      query["ActualStartTimeFrom"] = request.actualStartTimeFrom;
    }

    if (!$dara.isNull(request.actualStartTimeTo)) {
      query["ActualStartTimeTo"] = request.actualStartTimeTo;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.plannedStartTimeFrom)) {
      query["PlannedStartTimeFrom"] = request.plannedStartTimeFrom;
    }

    if (!$dara.isNull(request.plannedStartTimeTo)) {
      query["PlannedStartTimeTo"] = request.plannedStartTimeTo;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCampaigns",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCampaignsResponse>(await this.callApi(params, req, runtime), new $_model.ListCampaignsResponse({}));
  }

  /**
   * Retrieves the list of outbound call campaigns.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListCampaignsRequest
   * @returns ListCampaignsResponse
   */
  async listCampaigns(request: $_model.ListCampaignsRequest): Promise<$_model.ListCampaignsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCampaignsWithOptions(request, runtime);
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
   * Retrieves the list of cloned voices.
   * 
   * @param request - ListCloneVoicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloneVoicesResponse
   */
  async listCloneVoicesWithOptions(request: $_model.ListCloneVoicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloneVoicesResponse> {
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
      action: "ListCloneVoices",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloneVoicesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloneVoicesResponse({}));
  }

  /**
   * Retrieves the list of cloned voices.
   * 
   * @param request - ListCloneVoicesRequest
   * @returns ListCloneVoicesResponse
   */
  async listCloneVoices(request: $_model.ListCloneVoicesRequest): Promise<$_model.ListCloneVoicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloneVoicesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of flash SMS configurations.
   * 
   * @param request - ListFlashSmsAccessProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsAccessProfilesResponse
   */
  async listFlashSmsAccessProfilesWithOptions(request: $_model.ListFlashSmsAccessProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsAccessProfilesResponse> {
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
      action: "ListFlashSmsAccessProfiles",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsAccessProfilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsAccessProfilesResponse({}));
  }

  /**
   * Retrieves the list of flash SMS configurations.
   * 
   * @param request - ListFlashSmsAccessProfilesRequest
   * @returns ListFlashSmsAccessProfilesResponse
   */
  async listFlashSmsAccessProfiles(request: $_model.ListFlashSmsAccessProfilesRequest): Promise<$_model.ListFlashSmsAccessProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsAccessProfilesWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of flash message providers.
   * 
   * @param request - ListFlashSmsProvidersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsProvidersResponse
   */
  async listFlashSmsProvidersWithOptions(request: $_model.ListFlashSmsProvidersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsProvidersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFlashSmsProviders",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsProvidersResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsProvidersResponse({}));
  }

  /**
   * Retrieves the list of flash message providers.
   * 
   * @param request - ListFlashSmsProvidersRequest
   * @returns ListFlashSmsProvidersResponse
   */
  async listFlashSmsProviders(request: $_model.ListFlashSmsProvidersRequest): Promise<$_model.ListFlashSmsProvidersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsProvidersWithOptions(request, runtime);
  }

  /**
   * Retrieves flash SMS templates.
   * 
   * @param request - ListFlashSmsTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplatesWithOptions(request: $_model.ListFlashSmsTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFlashSmsTemplatesResponse> {
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
      action: "ListFlashSmsTemplates",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFlashSmsTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListFlashSmsTemplatesResponse({}));
  }

  /**
   * Retrieves flash SMS templates.
   * 
   * @param request - ListFlashSmsTemplatesRequest
   * @returns ListFlashSmsTemplatesResponse
   */
  async listFlashSmsTemplates(request: $_model.ListFlashSmsTemplatesRequest): Promise<$_model.ListFlashSmsTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFlashSmsTemplatesWithOptions(request, runtime);
  }

  /**
   * Retrieves instance details.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
      action: "ListInstances",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Retrieves instance details.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Retrieves the blacklists and whitelists.
   * 
   * @param request - ListOutboundCallRestrictionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOutboundCallRestrictionsResponse
   */
  async listOutboundCallRestrictionsWithOptions(request: $_model.ListOutboundCallRestrictionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOutboundCallRestrictionsResponse> {
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

    if (!$dara.isNull(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOutboundCallRestrictions",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOutboundCallRestrictionsResponse>(await this.callApi(params, req, runtime), new $_model.ListOutboundCallRestrictionsResponse({}));
  }

  /**
   * Retrieves the blacklists and whitelists.
   * 
   * @param request - ListOutboundCallRestrictionsRequest
   * @returns ListOutboundCallRestrictionsResponse
   */
  async listOutboundCallRestrictions(request: $_model.ListOutboundCallRestrictionsRequest): Promise<$_model.ListOutboundCallRestrictionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOutboundCallRestrictionsWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of scenario configuration templates.
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

    if (!$dara.isNull(request.nluEngine)) {
      body["NluEngine"] = request.nluEngine;
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
   * Retrieves the list of scenario configuration templates.
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

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.publishOnly)) {
      body["PublishOnly"] = request.publishOnly;
    }

    if (!$dara.isNull(request.scriptIdsShrink)) {
      body["ScriptIds"] = request.scriptIdsShrink;
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
   * Retrieves the list of scenarios associated with a flow by flow ID.
   * 
   * @param request - ListScriptsByFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptsByFlowResponse
   */
  async listScriptsByFlowWithOptions(request: $_model.ListScriptsByFlowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptsByFlowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flowId)) {
      body["FlowId"] = request.flowId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScriptsByFlow",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptsByFlowResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptsByFlowResponse({}));
  }

  /**
   * Retrieves the list of scenarios associated with a flow by flow ID.
   * 
   * @param request - ListScriptsByFlowRequest
   * @returns ListScriptsByFlowResponse
   */
  async listScriptsByFlow(request: $_model.ListScriptsByFlowRequest): Promise<$_model.ListScriptsByFlowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptsByFlowWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of system configurations.
   * 
   * @param request - ListSystemConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemConfigsResponse
   */
  async listSystemConfigsWithOptions(request: $_model.ListSystemConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemConfigs",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemConfigsResponse({}));
  }

  /**
   * Retrieves the list of system configurations.
   * 
   * @param request - ListSystemConfigsRequest
   * @returns ListSystemConfigsResponse
   */
  async listSystemConfigs(request: $_model.ListSystemConfigsRequest): Promise<$_model.ListSystemConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemConfigsWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of voice access configurations.
   * 
   * @param request - ListVoiceAccessProfilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVoiceAccessProfilesResponse
   */
  async listVoiceAccessProfilesWithOptions(request: $_model.ListVoiceAccessProfilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVoiceAccessProfilesResponse> {
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
      action: "ListVoiceAccessProfiles",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVoiceAccessProfilesResponse>(await this.callApi(params, req, runtime), new $_model.ListVoiceAccessProfilesResponse({}));
  }

  /**
   * Retrieves the list of voice access configurations.
   * 
   * @param request - ListVoiceAccessProfilesRequest
   * @returns ListVoiceAccessProfilesResponse
   */
  async listVoiceAccessProfiles(request: $_model.ListVoiceAccessProfilesRequest): Promise<$_model.ListVoiceAccessProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVoiceAccessProfilesWithOptions(request, runtime);
  }

  /**
   * Pauses an outbound call campaign.
   * 
   * @param request - PauseCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseCampaignResponse
   */
  async pauseCampaignWithOptions(request: $_model.PauseCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PauseCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PauseCampaignResponse>(await this.callApi(params, req, runtime), new $_model.PauseCampaignResponse({}));
  }

  /**
   * Pauses an outbound call campaign.
   * 
   * @param request - PauseCampaignRequest
   * @returns PauseCampaignResponse
   */
  async pauseCampaign(request: $_model.PauseCampaignRequest): Promise<$_model.PauseCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseCampaignWithOptions(request, runtime);
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
   * Resumes an outbound campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - ResumeCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeCampaignResponse
   */
  async resumeCampaignWithOptions(request: $_model.ResumeCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeCampaignResponse>(await this.callApi(params, req, runtime), new $_model.ResumeCampaignResponse({}));
  }

  /**
   * Resumes an outbound campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - ResumeCampaignRequest
   * @returns ResumeCampaignResponse
   */
  async resumeCampaign(request: $_model.ResumeCampaignRequest): Promise<$_model.ResumeCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeCampaignWithOptions(request, runtime);
  }

  /**
   * Submits an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - SubmitCampaignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCampaignResponse
   */
  async submitCampaignWithOptions(request: $_model.SubmitCampaignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCampaignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCampaign",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCampaignResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCampaignResponse({}));
  }

  /**
   * Submits an outbound call campaign.
   * 
   * @remarks
   * ***
   * 
   * @param request - SubmitCampaignRequest
   * @returns SubmitCampaignResponse
   */
  async submitCampaign(request: $_model.SubmitCampaignRequest): Promise<$_model.SubmitCampaignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCampaignWithOptions(request, runtime);
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
   * Updates the flash message configuration.
   * 
   * @param tmpReq - UpdateFlashSmsAccessProfileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFlashSmsAccessProfileResponse
   */
  async updateFlashSmsAccessProfileWithOptions(tmpReq: $_model.UpdateFlashSmsAccessProfileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFlashSmsAccessProfileResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateFlashSmsAccessProfileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accessProfile)) {
      request.accessProfileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accessProfile, "AccessProfile", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessProfileShrink)) {
      body["AccessProfile"] = request.accessProfileShrink;
    }

    if (!$dara.isNull(request.accessProfileId)) {
      body["AccessProfileId"] = request.accessProfileId;
    }

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
      action: "UpdateFlashSmsAccessProfile",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFlashSmsAccessProfileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFlashSmsAccessProfileResponse({}));
  }

  /**
   * Updates the flash message configuration.
   * 
   * @param request - UpdateFlashSmsAccessProfileRequest
   * @returns UpdateFlashSmsAccessProfileResponse
   */
  async updateFlashSmsAccessProfile(request: $_model.UpdateFlashSmsAccessProfileRequest): Promise<$_model.UpdateFlashSmsAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFlashSmsAccessProfileWithOptions(request, runtime);
  }

  /**
   * Updates an instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(request: $_model.UpdateInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates an instance.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceWithOptions(request, runtime);
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
   * Updates the scenario configuration.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - UpdateScriptVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScriptVersionResponse
   */
  async updateScriptVersionWithOptions(tmpReq: $_model.UpdateScriptVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScriptVersionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScriptVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.interactionConfig)) {
      request.interactionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interactionConfig, "InteractionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.labelConfigs)) {
      request.labelConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelConfigs, "LabelConfigs", "json");
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

    if (!$dara.isNull(request.labelConfigsShrink)) {
      body["LabelConfigs"] = request.labelConfigsShrink;
    }

    if (!$dara.isNull(request.scriptId)) {
      body["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptProfileShrink)) {
      body["ScriptProfile"] = request.scriptProfileShrink;
    }

    if (!$dara.isNull(request.synthesizerConfigShrink)) {
      body["SynthesizerConfig"] = request.synthesizerConfigShrink;
    }

    if (!$dara.isNull(request.transcriberConfigShrink)) {
      body["TranscriberConfig"] = request.transcriberConfigShrink;
    }

    if (!$dara.isNull(request.versionId)) {
      body["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScriptVersion",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScriptVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScriptVersionResponse({}));
  }

  /**
   * Updates the scenario configuration.
   * 
   * @remarks
   * ***
   * 
   * @param request - UpdateScriptVersionRequest
   * @returns UpdateScriptVersionResponse
   */
  async updateScriptVersion(request: $_model.UpdateScriptVersionRequest): Promise<$_model.UpdateScriptVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScriptVersionWithOptions(request, runtime);
  }

  /**
   * Creates or updates a message queue (MQ) configuration.
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
   * Creates or updates a message queue (MQ) configuration.
   * 
   * @param request - UpdateSubscriptionRequest
   * @returns UpdateSubscriptionResponse
   */
  async updateSubscription(request: $_model.UpdateSubscriptionRequest): Promise<$_model.UpdateSubscriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSubscriptionWithOptions(request, runtime);
  }

  /**
   * Updates system configurations.
   * 
   * @param tmpReq - UpdateSystemConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSystemConfigsResponse
   */
  async updateSystemConfigsWithOptions(tmpReq: $_model.UpdateSystemConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSystemConfigsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSystemConfigsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!$dara.isNull(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSystemConfigs",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSystemConfigsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSystemConfigsResponse({}));
  }

  /**
   * Updates system configurations.
   * 
   * @param request - UpdateSystemConfigsRequest
   * @returns UpdateSystemConfigsResponse
   */
  async updateSystemConfigs(request: $_model.UpdateSystemConfigsRequest): Promise<$_model.UpdateSystemConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSystemConfigsWithOptions(request, runtime);
  }

  /**
   * Updates an instance.
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
   * Updates an instance.
   * 
   * @param request - UpdateVoiceAccessProfileRequest
   * @returns UpdateVoiceAccessProfileResponse
   */
  async updateVoiceAccessProfile(request: $_model.UpdateVoiceAccessProfileRequest): Promise<$_model.UpdateVoiceAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVoiceAccessProfileWithOptions(request, runtime);
  }

}
