// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "OutboundBot";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Stops an outbound campaign.
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
   * Stops an outbound campaign.
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
   * Terminates outbound call cases.
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
   * Terminates outbound call cases.
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
   * Appends outbound call cases.
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
   * Appends outbound call cases.
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
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot.
   * 
   * @remarks
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot. An available scenario version must exist before you call this operation. Use DraftVersion to select the draft or published version, and use VendorParams to pass the accompanying variables required by the scenario. The response uses Server-Sent Events (SSE), and each data event carries a business response object. Save the returned SessionId for subsequent Dialogue and EndSession calls. A StreamEnd value of true indicates that the current response stream has ended, but the session remains active. The resource identifiers, phone numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values in production calls.
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
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot.
   * 
   * @remarks
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot. An available scenario version must exist before you call this operation. Use DraftVersion to select the draft or published version, and use VendorParams to pass the accompanying variables required by the scenario. The response uses Server-Sent Events (SSE), and each data event carries a business response object. Save the returned SessionId for subsequent Dialogue and EndSession calls. A StreamEnd value of true indicates that the current response stream has ended, but the session remains active. The resource identifiers, phone numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values in production calls.
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
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot.
   * 
   * @remarks
   * Creates a text conversation session for a specified instance and scenario, and streams the initial reply from the robot. An available scenario version must exist before you call this operation. Use DraftVersion to select the draft or published version, and use VendorParams to pass the accompanying variables required by the scenario. The response uses Server-Sent Events (SSE), and each data event carries a business response object. Save the returned SessionId for subsequent Dialogue and EndSession calls. A StreamEnd value of true indicates that the current response stream has ended, but the session remains active. The resource identifiers, phone numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values in production calls.
   * 
   * @param request - BeginSessionRequest
   * @returns BeginSessionResponse
   */
  async beginSession(request: $_model.BeginSessionRequest): Promise<$_model.BeginSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginSessionWithOptions(request, runtime);
  }

  /**
   * Initiates a trial session.
   * 
   * @remarks
   * Creates a trial text session in a specified instance and scenario by using the VisitorToken from a trial link, and returns the first-round reply in Server-Sent Events (SSE) format. The service verifies the channel and expiration time corresponding to the token, and then starts the session based on the tenant to which the channel belongs. The token does not replace the business parameters of the scenario and instance. Save the returned SessionId for subsequent calls to TrialDialogue to send user input, and call EndTrialSession to end the session. StreamEnd=true only indicates that the streaming response for the current round has ended. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - BeginTrialSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginTrialSessionResponse
   */
  async *beginTrialSessionWithSSE(request: $_model.BeginTrialSessionRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.BeginTrialSessionResponse, any, unknown> {
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginTrialSession",
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
        yield $dara.cast<$_model.BeginTrialSessionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.BeginTrialSessionResponse({}));
      }

    }
  }

  /**
   * Initiates a trial session.
   * 
   * @remarks
   * Creates a trial text session in a specified instance and scenario by using the VisitorToken from a trial link, and returns the first-round reply in Server-Sent Events (SSE) format. The service verifies the channel and expiration time corresponding to the token, and then starts the session based on the tenant to which the channel belongs. The token does not replace the business parameters of the scenario and instance. Save the returned SessionId for subsequent calls to TrialDialogue to send user input, and call EndTrialSession to end the session. StreamEnd=true only indicates that the streaming response for the current round has ended. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - BeginTrialSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BeginTrialSessionResponse
   */
  async beginTrialSessionWithOptions(request: $_model.BeginTrialSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BeginTrialSessionResponse> {
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BeginTrialSession",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BeginTrialSessionResponse>(await this.callApi(params, req, runtime), new $_model.BeginTrialSessionResponse({}));
  }

  /**
   * Initiates a trial session.
   * 
   * @remarks
   * Creates a trial text session in a specified instance and scenario by using the VisitorToken from a trial link, and returns the first-round reply in Server-Sent Events (SSE) format. The service verifies the channel and expiration time corresponding to the token, and then starts the session based on the tenant to which the channel belongs. The token does not replace the business parameters of the scenario and instance. Save the returned SessionId for subsequent calls to TrialDialogue to send user input, and call EndTrialSession to end the session. StreamEnd=true only indicates that the streaming response for the current round has ended. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - BeginTrialSessionRequest
   * @returns BeginTrialSessionResponse
   */
  async beginTrialSession(request: $_model.BeginTrialSessionRequest): Promise<$_model.BeginTrialSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.beginTrialSessionWithOptions(request, runtime);
  }

  /**
   * Initiates a trial call.
   * 
   * @remarks
   * Initiates a trial web voice call for a specified scenario by using the VisitorToken of a trial link. The service verifies the token, the associated channel, and the validity period, and then delegates the web call service to bridge the web voice channel and the robot channel. The DeviceId must be consistent with the data channel device identifier of the trial client. After the call is initiated, use the returned ChannelId, ServerUrl, and Token to connect to the voice channel. If the data event channel of the trial client is required, you can call GetTrialDataChannelCredential with the same DeviceId. The web voice connection token and the data channel username and password are not the same set of credentials. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - BridgeTrialWebCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BridgeTrialWebCallResponse
   */
  async bridgeTrialWebCallWithOptions(request: $_model.BridgeTrialWebCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BridgeTrialWebCallResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BridgeTrialWebCall",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BridgeTrialWebCallResponse>(await this.callApi(params, req, runtime), new $_model.BridgeTrialWebCallResponse({}));
  }

  /**
   * Initiates a trial call.
   * 
   * @remarks
   * Initiates a trial web voice call for a specified scenario by using the VisitorToken of a trial link. The service verifies the token, the associated channel, and the validity period, and then delegates the web call service to bridge the web voice channel and the robot channel. The DeviceId must be consistent with the data channel device identifier of the trial client. After the call is initiated, use the returned ChannelId, ServerUrl, and Token to connect to the voice channel. If the data event channel of the trial client is required, you can call GetTrialDataChannelCredential with the same DeviceId. The web voice connection token and the data channel username and password are not the same set of credentials. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - BridgeTrialWebCallRequest
   * @returns BridgeTrialWebCallResponse
   */
  async bridgeTrialWebCall(request: $_model.BridgeTrialWebCallRequest): Promise<$_model.BridgeTrialWebCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeTrialWebCallWithOptions(request, runtime);
  }

  /**
   * Initiates a call.
   * 
   * @remarks
   * Initiates a web voice call for a specified instance and scenario by bridging the web voice channel and the robot SIP channel through an RTC gateway. Pass information such as DeviceId, audio sampling rate, and scenario version in the request. TimeoutSeconds specifies the timeout for unanswered calls, defaults to 60 seconds, and does not indicate the maximum duration of an answered call. Upon success, returns the connection context such as SessionId, ChannelId, ServerUrl, and Token. The client must use the returned address and valid credentials to establish the web voice connection. This operation initiates a web interactive voice response instead of dialing a real phone number specified by Number. Resource identity, numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values when you invoke the operation.
   * 
   * @param request - BridgeWebCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCallWithOptions(request: $_model.BridgeWebCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BridgeWebCallResponse> {
    request.validate();
    let query = { };
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
   * Initiates a call.
   * 
   * @remarks
   * Initiates a web voice call for a specified instance and scenario by bridging the web voice channel and the robot SIP channel through an RTC gateway. Pass information such as DeviceId, audio sampling rate, and scenario version in the request. TimeoutSeconds specifies the timeout for unanswered calls, defaults to 60 seconds, and does not indicate the maximum duration of an answered call. Upon success, returns the connection context such as SessionId, ChannelId, ServerUrl, and Token. The client must use the returned address and valid credentials to establish the web voice connection. This operation initiates a web interactive voice response instead of dialing a real phone number specified by Number. Resource identity, numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values when you invoke the operation.
   * 
   * @param request - BridgeWebCallRequest
   * @returns BridgeWebCallResponse
   */
  async bridgeWebCall(request: $_model.BridgeWebCallRequest): Promise<$_model.BridgeWebCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bridgeWebCallWithOptions(request, runtime);
  }

  /**
   * Creates an outbound campaign.
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
   * Creates an outbound campaign.
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
   * Creates a language model access configuration.
   * 
   * @remarks
   * Creates a language model access configuration for a specified instance.
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
   * Creates a language model access configuration.
   * 
   * @remarks
   * Creates a language model access configuration for a specified instance.
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
   * Creates a script configuration.
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
   * Creates a script configuration.
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
   * Deletes a tenant number.
   * 
   * @remarks
   * Deletes a tenant number.
   * 
   * @param request - DeleteCorpNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCorpNumberResponse
   */
  async deleteCorpNumberWithOptions(request: $_model.DeleteCorpNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCorpNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCorpNumber",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCorpNumberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCorpNumberResponse({}));
  }

  /**
   * Deletes a tenant number.
   * 
   * @remarks
   * Deletes a tenant number.
   * 
   * @param request - DeleteCorpNumberRequest
   * @returns DeleteCorpNumberResponse
   */
  async deleteCorpNumber(request: $_model.DeleteCorpNumberRequest): Promise<$_model.DeleteCorpNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCorpNumberWithOptions(request, runtime);
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
   * Deletes the language model access configuration.
   * 
   * @remarks
   * Deletes the language model access configuration for a specified instance.
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
   * Deletes the language model access configuration.
   * 
   * @remarks
   * Deletes the language model access configuration for a specified instance.
   * 
   * @param request - DeleteLlmAccessProfileRequest
   * @returns DeleteLlmAccessProfileResponse
   */
  async deleteLlmAccessProfile(request: $_model.DeleteLlmAccessProfileRequest): Promise<$_model.DeleteLlmAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLlmAccessProfileWithOptions(request, runtime);
  }

  /**
   * Deletes the numbers of an instance.
   * 
   * @remarks
   * Deletes the numbers of a specified instance.
   * 
   * @param tmpReq - DeleteNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNumbersResponse
   */
  async deleteNumbersWithOptions(tmpReq: $_model.DeleteNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNumbersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteNumbersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.numbersShrink)) {
      body["Numbers"] = request.numbersShrink;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNumbers",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNumbersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNumbersResponse({}));
  }

  /**
   * Deletes the numbers of an instance.
   * 
   * @remarks
   * Deletes the numbers of a specified instance.
   * 
   * @param request - DeleteNumbersRequest
   * @returns DeleteNumbersResponse
   */
  async deleteNumbers(request: $_model.DeleteNumbersRequest): Promise<$_model.DeleteNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNumbersWithOptions(request, runtime);
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
   * Initiates a session.
   * 
   * @remarks
   * Sends a round of user input to a text session created by BeginSession and returns the robot reply and control instructions in Server-Sent Events (SSE) format. The InstanceId, ScriptId, and SessionId must be consistent with those used when the session was initiated. The SessionId must use the value returned by the session initiation operation. The conversation cannot continue if the session context does not exist. Utterance is used for plain text input, and Extras is used to pass structured events such as key presses and silence. You can call this operation multiple times in succession. StreamId identifies the reply round, and StreamEnd=true indicates that the output of the current round has ended. Call EndSession after the entire interaction is completed. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
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
   * Initiates a session.
   * 
   * @remarks
   * Sends a round of user input to a text session created by BeginSession and returns the robot reply and control instructions in Server-Sent Events (SSE) format. The InstanceId, ScriptId, and SessionId must be consistent with those used when the session was initiated. The SessionId must use the value returned by the session initiation operation. The conversation cannot continue if the session context does not exist. Utterance is used for plain text input, and Extras is used to pass structured events such as key presses and silence. You can call this operation multiple times in succession. StreamId identifies the reply round, and StreamEnd=true indicates that the output of the current round has ended. Call EndSession after the entire interaction is completed. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
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
   * Initiates a session.
   * 
   * @remarks
   * Sends a round of user input to a text session created by BeginSession and returns the robot reply and control instructions in Server-Sent Events (SSE) format. The InstanceId, ScriptId, and SessionId must be consistent with those used when the session was initiated. The SessionId must use the value returned by the session initiation operation. The conversation cannot continue if the session context does not exist. Utterance is used for plain text input, and Extras is used to pass structured events such as key presses and silence. You can call this operation multiple times in succession. StreamId identifies the reply round, and StreamEnd=true indicates that the output of the current round has ended. Call EndSession after the entire interaction is completed. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - DialogueRequest
   * @returns DialogueResponse
   */
  async dialogue(request: $_model.DialogueRequest): Promise<$_model.DialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
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
   * Ends a session.
   * 
   * @remarks
   * Ends a text session created by BeginSession, notifies the dialog engine to end the interaction, and clears the text session state. The InstanceId, ScriptId, and SessionId must match those used when the session was started. The Data field in the response returns the SessionId of the ended session. If the text session no longer exists due to prolonged inactivity or cache expiration, the current implementation still returns the SessionId without reporting a session not found error. This operation is used to conclude a text session and is not intended for hanging up web voice or actual phone calls. The resource identifiers, phone numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values for real calls.
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
   * @remarks
   * Ends a text session created by BeginSession, notifies the dialog engine to end the interaction, and clears the text session state. The InstanceId, ScriptId, and SessionId must match those used when the session was started. The Data field in the response returns the SessionId of the ended session. If the text session no longer exists due to prolonged inactivity or cache expiration, the current implementation still returns the SessionId without reporting a session not found error. This operation is used to conclude a text session and is not intended for hanging up web voice or actual phone calls. The resource identifiers, phone numbers, and authentication credentials in the examples are masked or placeholder values. Use actual resources and service return values for real calls.
   * 
   * @param request - EndSessionRequest
   * @returns EndSessionResponse
   */
  async endSession(request: $_model.EndSessionRequest): Promise<$_model.EndSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endSessionWithOptions(request, runtime);
  }

  /**
   * Ends a trial session.
   * 
   * @remarks
   * Ends a trial text session created by BeginTrialSession by using a valid VisitorToken from a trial link. The service first validates the token and then delegates the request to the text session termination service. The InstanceId, ScriptId, and SessionId must maintain session persistence consistent with those of the trial session. The returned Data is the SessionId of the ended session. If the text session context has expired, the termination service can still return the SessionId, but the validation will be marked as failed if the trial token itself is invalid or expired. This operation is not used to hang up web voice calls. The resource identity, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values when you invoke the operation.
   * 
   * @param request - EndTrialSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndTrialSessionResponse
   */
  async endTrialSessionWithOptions(request: $_model.EndTrialSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndTrialSessionResponse> {
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndTrialSession",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndTrialSessionResponse>(await this.callApi(params, req, runtime), new $_model.EndTrialSessionResponse({}));
  }

  /**
   * Ends a trial session.
   * 
   * @remarks
   * Ends a trial text session created by BeginTrialSession by using a valid VisitorToken from a trial link. The service first validates the token and then delegates the request to the text session termination service. The InstanceId, ScriptId, and SessionId must maintain session persistence consistent with those of the trial session. The returned Data is the SessionId of the ended session. If the text session context has expired, the termination service can still return the SessionId, but the validation will be marked as failed if the trial token itself is invalid or expired. This operation is not used to hang up web voice calls. The resource identity, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values when you invoke the operation.
   * 
   * @param request - EndTrialSessionRequest
   * @returns EndTrialSessionResponse
   */
  async endTrialSession(request: $_model.EndTrialSessionRequest): Promise<$_model.EndTrialSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endTrialSessionWithOptions(request, runtime);
  }

  /**
   * Retrieves the call details.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetCallDetailRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecordWithOptions(request: $_model.GetCallDetailRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCallDetailRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Retrieves the call details.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetCallDetailRecordRequest
   * @returns GetCallDetailRecordResponse
   */
  async getCallDetailRecord(request: $_model.GetCallDetailRecordRequest): Promise<$_model.GetCallDetailRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCallDetailRecordWithOptions(request, runtime);
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
   * Retrieves the details of a case.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetCaseDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaseDetailResponse
   */
  async getCaseDetailWithOptions(request: $_model.GetCaseDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCaseDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caseId)) {
      query["CaseId"] = request.caseId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaseDetail",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCaseDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCaseDetailResponse({}));
  }

  /**
   * Retrieves the details of a case.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetCaseDetailRequest
   * @returns GetCaseDetailResponse
   */
  async getCaseDetail(request: $_model.GetCaseDetailRequest): Promise<$_model.GetCaseDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaseDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves voice conversation parameters.
   * 
   * @remarks
   * Retrieves temporary connection credentials for the client data channel of a specified InstanceId and DeviceId. Requests are verified based on the current POP authentication and instance permission configurations. DeviceId cannot be empty. Unlike GetTrialDataChannelCredential, this operation does not use the VisitorToken for trial links. The client must use the actual Topic, ClientId, Endpoint, UserName, and Password returned to connect to and subscribe to the data channel, and must not infer the address, topic, or authentication information. The same client must keep the DeviceId consistent when initiating BridgeWebCall or MakePilotCall. This operation only retrieves data channel credentials and does not create text sessions, initiate phone calls, or establish web voice channels. The username and password for the data channel are not the same set of credentials as the token returned for web calls. The protocol, the unit of ExpirationTime, and field mappings are subject to the actual RTC gateway deployment version and return conventions. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
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
   * Retrieves voice conversation parameters.
   * 
   * @remarks
   * Retrieves temporary connection credentials for the client data channel of a specified InstanceId and DeviceId. Requests are verified based on the current POP authentication and instance permission configurations. DeviceId cannot be empty. Unlike GetTrialDataChannelCredential, this operation does not use the VisitorToken for trial links. The client must use the actual Topic, ClientId, Endpoint, UserName, and Password returned to connect to and subscribe to the data channel, and must not infer the address, topic, or authentication information. The same client must keep the DeviceId consistent when initiating BridgeWebCall or MakePilotCall. This operation only retrieves data channel credentials and does not create text sessions, initiate phone calls, or establish web voice channels. The username and password for the data channel are not the same set of credentials as the token returned for web calls. The protocol, the unit of ExpirationTime, and field mappings are subject to the actual RTC gateway deployment version and return conventions. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - GetDataChannelCredentialRequest
   * @returns GetDataChannelCredentialResponse
   */
  async getDataChannelCredential(request: $_model.GetDataChannelCredentialRequest): Promise<$_model.GetDataChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataChannelCredentialWithOptions(request, runtime);
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
   * Retrieves a call recording.
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
   * Retrieves a call recording.
   * 
   * @param request - GetRecordingRequest
   * @returns GetRecordingResponse
   */
  async getRecording(request: $_model.GetRecordingRequest): Promise<$_model.GetRecordingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordingWithOptions(request, runtime);
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
   * Retrieves the trial channel.
   * 
   * @remarks
   * Retrieves the corresponding trial access channel and the list of available trial scenarios based on the VisitorToken in a trial link. The service verifies whether the token exists, whether it can locate the channel, and whether it has expired. Upon success, it returns information such as the instance to which the channel belongs, the channel type, display configurations, validity period, and scenario configurations. This operation can be used as an initialization step for the trial page: first read the returned instance and scenarios, and then call the corresponding trial text or web voice operation. This operation does not create a text session or initiate a voice call. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - GetTrialAccessChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrialAccessChannelResponse
   */
  async getTrialAccessChannelWithOptions(request: $_model.GetTrialAccessChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrialAccessChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrialAccessChannel",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrialAccessChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetTrialAccessChannelResponse({}));
  }

  /**
   * Retrieves the trial channel.
   * 
   * @remarks
   * Retrieves the corresponding trial access channel and the list of available trial scenarios based on the VisitorToken in a trial link. The service verifies whether the token exists, whether it can locate the channel, and whether it has expired. Upon success, it returns information such as the instance to which the channel belongs, the channel type, display configurations, validity period, and scenario configurations. This operation can be used as an initialization step for the trial page: first read the returned instance and scenarios, and then call the corresponding trial text or web voice operation. This operation does not create a text session or initiate a voice call. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - GetTrialAccessChannelRequest
   * @returns GetTrialAccessChannelResponse
   */
  async getTrialAccessChannel(request: $_model.GetTrialAccessChannelRequest): Promise<$_model.GetTrialAccessChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTrialAccessChannelWithOptions(request, runtime);
  }

  /**
   * Retrieves the parameters for a trial voice conversation.
   * 
   * @remarks
   * Retrieves temporary connection credentials for the client data channel for a specified InstanceId and DeviceId by using a valid VisitorToken from a trial link. The response includes information such as Topic, ClientId, Endpoint, UserName, Password, and expiration time. The client must use the actual values returned by the service to connect to and subscribe to the data channel, and must not concatenate addresses, topics, or authentication information. The DeviceId must be consistent with the BridgeTrialWebCall request from the same client. This operation only retrieves data channel credentials and does not initiate text sessions or establish web voice calls. The credential protocol and expiration time unit are subject to the conventions returned by the actual RTC gateway. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - GetTrialDataChannelCredentialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrialDataChannelCredentialResponse
   */
  async getTrialDataChannelCredentialWithOptions(request: $_model.GetTrialDataChannelCredentialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTrialDataChannelCredentialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrialDataChannelCredential",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTrialDataChannelCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetTrialDataChannelCredentialResponse({}));
  }

  /**
   * Retrieves the parameters for a trial voice conversation.
   * 
   * @remarks
   * Retrieves temporary connection credentials for the client data channel for a specified InstanceId and DeviceId by using a valid VisitorToken from a trial link. The response includes information such as Topic, ClientId, Endpoint, UserName, Password, and expiration time. The client must use the actual values returned by the service to connect to and subscribe to the data channel, and must not concatenate addresses, topics, or authentication information. The DeviceId must be consistent with the BridgeTrialWebCall request from the same client. This operation only retrieves data channel credentials and does not initiate text sessions or establish web voice calls. The credential protocol and expiration time unit are subject to the conventions returned by the actual RTC gateway. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - GetTrialDataChannelCredentialRequest
   * @returns GetTrialDataChannelCredentialResponse
   */
  async getTrialDataChannelCredential(request: $_model.GetTrialDataChannelCredentialRequest): Promise<$_model.GetTrialDataChannelCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTrialDataChannelCredentialWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of ASR models.
   * 
   * @param request - ListAsrModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsrModelsResponse
   */
  async listAsrModelsWithOptions(request: $_model.ListAsrModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsrModelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsrModels",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsrModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListAsrModelsResponse({}));
  }

  /**
   * Retrieves the list of ASR models.
   * 
   * @param request - ListAsrModelsRequest
   * @returns ListAsrModelsResponse
   */
  async listAsrModels(request: $_model.ListAsrModelsRequest): Promise<$_model.ListAsrModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAsrModelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of outbound campaigns.
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
   * Queries a list of outbound campaigns.
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
   * Retrieves a list of cases.
   * 
   * @remarks
   * ***
   * 
   * @param tmpReq - ListCasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCasesResponse
   */
  async listCasesWithOptions(tmpReq: $_model.ListCasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCasesResponse> {
    tmpReq.validate();
    let request = new $_model.ListCasesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.caseIds)) {
      request.caseIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.caseIds, "CaseIds", "json");
    }

    if (!$dara.isNull(tmpReq.dispositionCodes)) {
      request.dispositionCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dispositionCodes, "DispositionCodes", "json");
    }

    if (!$dara.isNull(tmpReq.dispositionReasons)) {
      request.dispositionReasonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dispositionReasons, "DispositionReasons", "json");
    }

    if (!$dara.isNull(tmpReq.labelSearch)) {
      request.labelSearchShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSearch, "LabelSearch", "json");
    }

    if (!$dara.isNull(tmpReq.states)) {
      request.statesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.states, "States", "json");
    }

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

    if (!$dara.isNull(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!$dara.isNull(request.caseCompleted)) {
      query["CaseCompleted"] = request.caseCompleted;
    }

    if (!$dara.isNull(request.caseIdsShrink)) {
      query["CaseIds"] = request.caseIdsShrink;
    }

    if (!$dara.isNull(request.dispositionCodesShrink)) {
      query["DispositionCodes"] = request.dispositionCodesShrink;
    }

    if (!$dara.isNull(request.dispositionReasonsShrink)) {
      query["DispositionReasons"] = request.dispositionReasonsShrink;
    }

    if (!$dara.isNull(request.draftVersion)) {
      query["DraftVersion"] = request.draftVersion;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.labelSearchShrink)) {
      query["LabelSearch"] = request.labelSearchShrink;
    }

    if (!$dara.isNull(request.maxRingingDuration)) {
      query["MaxRingingDuration"] = request.maxRingingDuration;
    }

    if (!$dara.isNull(request.maxTalkTime)) {
      query["MaxTalkTime"] = request.maxTalkTime;
    }

    if (!$dara.isNull(request.maxTalkTurns)) {
      query["MaxTalkTurns"] = request.maxTalkTurns;
    }

    if (!$dara.isNull(request.minRingingDuration)) {
      query["MinRingingDuration"] = request.minRingingDuration;
    }

    if (!$dara.isNull(request.minTalkTime)) {
      query["MinTalkTime"] = request.minTalkTime;
    }

    if (!$dara.isNull(request.minTalkTurns)) {
      query["MinTalkTurns"] = request.minTalkTurns;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statesShrink)) {
      query["States"] = request.statesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCases",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCasesResponse>(await this.callApi(params, req, runtime), new $_model.ListCasesResponse({}));
  }

  /**
   * Retrieves a list of cases.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListCasesRequest
   * @returns ListCasesResponse
   */
  async listCases(request: $_model.ListCasesRequest): Promise<$_model.ListCasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCasesWithOptions(request, runtime);
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
   * Queries the list of tenant numbers.
   * 
   * @remarks
   * Queries the list of tenant numbers.
   * 
   * @param request - ListCorpNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCorpNumbersResponse
   */
  async listCorpNumbersWithOptions(request: $_model.ListCorpNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCorpNumbersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sipTrunkId)) {
      body["SipTrunkId"] = request.sipTrunkId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCorpNumbers",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCorpNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListCorpNumbersResponse({}));
  }

  /**
   * Queries the list of tenant numbers.
   * 
   * @remarks
   * Queries the list of tenant numbers.
   * 
   * @param request - ListCorpNumbersRequest
   * @returns ListCorpNumbersResponse
   */
  async listCorpNumbers(request: $_model.ListCorpNumbersRequest): Promise<$_model.ListCorpNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCorpNumbersWithOptions(request, runtime);
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
   * Queries the instances bound to a number.
   * 
   * @remarks
   * Queries the binding information between a number and instances.
   * 
   * @param request - ListInstanceBindingsOfNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceBindingsOfNumberResponse
   */
  async listInstanceBindingsOfNumberWithOptions(request: $_model.ListInstanceBindingsOfNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceBindingsOfNumberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceBindingsOfNumber",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceBindingsOfNumberResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceBindingsOfNumberResponse({}));
  }

  /**
   * Queries the instances bound to a number.
   * 
   * @remarks
   * Queries the binding information between a number and instances.
   * 
   * @param request - ListInstanceBindingsOfNumberRequest
   * @returns ListInstanceBindingsOfNumberResponse
   */
  async listInstanceBindingsOfNumber(request: $_model.ListInstanceBindingsOfNumberRequest): Promise<$_model.ListInstanceBindingsOfNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceBindingsOfNumberWithOptions(request, runtime);
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
   * Queries the language model access configurations.
   * 
   * @remarks
   * Queries the list of language model access configurations of a specified instance by paging.
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
   * Queries the language model access configurations.
   * 
   * @remarks
   * Queries the list of language model access configurations of a specified instance by paging.
   * 
   * @param request - ListLlmAccessProfilesRequest
   * @returns ListLlmAccessProfilesResponse
   */
  async listLlmAccessProfiles(request: $_model.ListLlmAccessProfilesRequest): Promise<$_model.ListLlmAccessProfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLlmAccessProfilesWithOptions(request, runtime);
  }

  /**
   * Queries the list of numbers bound to an instance.
   * 
   * @remarks
   * Queries the binding information between an instance and numbers.
   * 
   * @param request - ListNumberBindingsOfInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNumberBindingsOfInstanceResponse
   */
  async listNumberBindingsOfInstanceWithOptions(request: $_model.ListNumberBindingsOfInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNumberBindingsOfInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNumberBindingsOfInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNumberBindingsOfInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListNumberBindingsOfInstanceResponse({}));
  }

  /**
   * Queries the list of numbers bound to an instance.
   * 
   * @remarks
   * Queries the binding information between an instance and numbers.
   * 
   * @param request - ListNumberBindingsOfInstanceRequest
   * @returns ListNumberBindingsOfInstanceResponse
   */
  async listNumberBindingsOfInstance(request: $_model.ListNumberBindingsOfInstanceRequest): Promise<$_model.ListNumberBindingsOfInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNumberBindingsOfInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the phone numbers of an instance.
   * 
   * @remarks
   * Queries the phone numbers of a specified instance.
   * 
   * @param request - ListNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNumbersResponse
   */
  async listNumbersWithOptions(request: $_model.ListNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNumbersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.sipTrunkId)) {
      body["SipTrunkId"] = request.sipTrunkId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNumbers",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNumbersResponse>(await this.callApi(params, req, runtime), new $_model.ListNumbersResponse({}));
  }

  /**
   * Queries the phone numbers of an instance.
   * 
   * @remarks
   * Queries the phone numbers of a specified instance.
   * 
   * @param request - ListNumbersRequest
   * @returns ListNumbersResponse
   */
  async listNumbers(request: $_model.ListNumbersRequest): Promise<$_model.ListNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNumbersWithOptions(request, runtime);
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
    if (!$dara.isNull(request.builderType)) {
      body["BuilderType"] = request.builderType;
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
   * Retrieves a list of scenarios based on the flow ID.
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
   * Retrieves a list of scenarios based on the flow ID.
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
   * Initiates an outbound call.
   * 
   * @remarks
   * Initiates an outbound call test to the real phone number corresponding to Number by using the specified instance and scenario. Before calling this operation, you must obtain an SMS verification code for the OutboundCallTest scenario for the called number and pass it in VerificationCode. The service verifies the code and initiates the call by using the outbound caller ID configured on the platform. DeviceId is used to bind the client data stream to the current call. CallVariables passes call variables in JSON object format, and Tags passes attached data. Upon success, a SessionId with the test- prefix is returned to associate with the current call. A successful API response does not indicate that the called party has answered or that the conversation has ended. Test only authorized numbers. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use real resources and service return values for actual calls.
   * 
   * @param request - MakePilotCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MakePilotCallResponse
   */
  async makePilotCallWithOptions(request: $_model.MakePilotCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MakePilotCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callVariables)) {
      query["CallVariables"] = request.callVariables;
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

    if (!$dara.isNull(request.number)) {
      query["Number"] = request.number;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.verificationCode)) {
      query["VerificationCode"] = request.verificationCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MakePilotCall",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MakePilotCallResponse>(await this.callApi(params, req, runtime), new $_model.MakePilotCallResponse({}));
  }

  /**
   * Initiates an outbound call.
   * 
   * @remarks
   * Initiates an outbound call test to the real phone number corresponding to Number by using the specified instance and scenario. Before calling this operation, you must obtain an SMS verification code for the OutboundCallTest scenario for the called number and pass it in VerificationCode. The service verifies the code and initiates the call by using the outbound caller ID configured on the platform. DeviceId is used to bind the client data stream to the current call. CallVariables passes call variables in JSON object format, and Tags passes attached data. Upon success, a SessionId with the test- prefix is returned to associate with the current call. A successful API response does not indicate that the called party has answered or that the conversation has ended. Test only authorized numbers. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use real resources and service return values for actual calls.
   * 
   * @param request - MakePilotCallRequest
   * @returns MakePilotCallResponse
   */
  async makePilotCall(request: $_model.MakePilotCallRequest): Promise<$_model.MakePilotCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.makePilotCallWithOptions(request, runtime);
  }

  /**
   * Pauses an outbound campaign.
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
   * Pauses an outbound campaign.
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
   * Submits an outbound campaign.
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
   * Submits an outbound campaign.
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
   * Sends a user input to a trial text conversation.
   * 
   * @remarks
   * Sends a round of user input to a trial text conversation created by BeginTrialSession and returns the robot reply in Server-Sent Events (SSE) format. Use the same InstanceId, ScriptId, SessionId, and experience link VisitorToken as those used to start the trial conversation. The service validates the token and its expiration time on each call. Utterance is plain text input, and Extras is a JSON array string of structured events such as key presses and silence. StreamEnd=true only ends the response stream for the current turn. Call EndTrialSession when the entire experience ends. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - TrialDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrialDialogueResponse
   */
  async *trialDialogueWithSSE(request: $_model.TrialDialogueRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.TrialDialogueResponse, any, unknown> {
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrialDialogue",
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
        yield $dara.cast<$_model.TrialDialogueResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.TrialDialogueResponse({}));
      }

    }
  }

  /**
   * Sends a user input to a trial text conversation.
   * 
   * @remarks
   * Sends a round of user input to a trial text conversation created by BeginTrialSession and returns the robot reply in Server-Sent Events (SSE) format. Use the same InstanceId, ScriptId, SessionId, and experience link VisitorToken as those used to start the trial conversation. The service validates the token and its expiration time on each call. Utterance is plain text input, and Extras is a JSON array string of structured events such as key presses and silence. StreamEnd=true only ends the response stream for the current turn. Call EndTrialSession when the entire experience ends. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - TrialDialogueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TrialDialogueResponse
   */
  async trialDialogueWithOptions(request: $_model.TrialDialogueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TrialDialogueResponse> {
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

    if (!$dara.isNull(request.visitorToken)) {
      query["VisitorToken"] = request.visitorToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TrialDialogue",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TrialDialogueResponse>(await this.callApi(params, req, runtime), new $_model.TrialDialogueResponse({}));
  }

  /**
   * Sends a user input to a trial text conversation.
   * 
   * @remarks
   * Sends a round of user input to a trial text conversation created by BeginTrialSession and returns the robot reply in Server-Sent Events (SSE) format. Use the same InstanceId, ScriptId, SessionId, and experience link VisitorToken as those used to start the trial conversation. The service validates the token and its expiration time on each call. Utterance is plain text input, and Extras is a JSON array string of structured events such as key presses and silence. StreamEnd=true only ends the response stream for the current turn. Call EndTrialSession when the entire experience ends. The resource identifiers, numbers, and authentication credentials in the examples are desensitized or placeholder values. Use actual resources and service return values for actual calls.
   * 
   * @param request - TrialDialogueRequest
   * @returns TrialDialogueResponse
   */
  async trialDialogue(request: $_model.TrialDialogueRequest): Promise<$_model.TrialDialogueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.trialDialogueWithOptions(request, runtime);
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
   * Updates the instances bound to a number.
   * 
   * @remarks
   * Updates the binding between a number and instances.
   * 
   * @param tmpReq - UpdateInstanceBindingsOfNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceBindingsOfNumberResponse
   */
  async updateInstanceBindingsOfNumberWithOptions(tmpReq: $_model.UpdateInstanceBindingsOfNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceBindingsOfNumberResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateInstanceBindingsOfNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      body["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceBindingsOfNumber",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceBindingsOfNumberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceBindingsOfNumberResponse({}));
  }

  /**
   * Updates the instances bound to a number.
   * 
   * @remarks
   * Updates the binding between a number and instances.
   * 
   * @param request - UpdateInstanceBindingsOfNumberRequest
   * @returns UpdateInstanceBindingsOfNumberResponse
   */
  async updateInstanceBindingsOfNumber(request: $_model.UpdateInstanceBindingsOfNumberRequest): Promise<$_model.UpdateInstanceBindingsOfNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceBindingsOfNumberWithOptions(request, runtime);
  }

  /**
   * Updates the language model access configuration.
   * 
   * @remarks
   * Updates the language model access configuration for a specified instance.
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
   * Updates the language model access configuration.
   * 
   * @remarks
   * Updates the language model access configuration for a specified instance.
   * 
   * @param request - UpdateLlmAccessProfileRequest
   * @returns UpdateLlmAccessProfileResponse
   */
  async updateLlmAccessProfile(request: $_model.UpdateLlmAccessProfileRequest): Promise<$_model.UpdateLlmAccessProfileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLlmAccessProfileWithOptions(request, runtime);
  }

  /**
   * Updates the phone numbers bound to an instance.
   * 
   * @remarks
   * Updates the binding relationship between an instance and phone numbers.
   * 
   * @param tmpReq - UpdateNumberBindingsOfInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNumberBindingsOfInstanceResponse
   */
  async updateNumberBindingsOfInstanceWithOptions(tmpReq: $_model.UpdateNumberBindingsOfInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNumberBindingsOfInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateNumberBindingsOfInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.numbersShrink)) {
      body["Numbers"] = request.numbersShrink;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNumberBindingsOfInstance",
      version: "2025-11-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNumberBindingsOfInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNumberBindingsOfInstanceResponse({}));
  }

  /**
   * Updates the phone numbers bound to an instance.
   * 
   * @remarks
   * Updates the binding relationship between an instance and phone numbers.
   * 
   * @param request - UpdateNumberBindingsOfInstanceRequest
   * @returns UpdateNumberBindingsOfInstanceResponse
   */
  async updateNumberBindingsOfInstance(request: $_model.UpdateNumberBindingsOfInstanceRequest): Promise<$_model.UpdateNumberBindingsOfInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNumberBindingsOfInstanceWithOptions(request, runtime);
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
