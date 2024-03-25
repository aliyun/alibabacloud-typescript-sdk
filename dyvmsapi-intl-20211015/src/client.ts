// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BackendCallGroupRequest extends $tea.Model {
  calledNumber?: string[];
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  speed?: number;
  taskName?: string;
  timingStart?: string;
  ttsCode?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: { 'type': 'array', 'itemType': 'string' },
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupShrinkRequest extends $tea.Model {
  calledNumberShrink?: string;
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  speed?: number;
  taskName?: string;
  timingStart?: string;
  ttsCode?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      speed: 'Speed',
      taskName: 'TaskName',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumberShrink: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      speed: 'number',
      taskName: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackendCallGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BackendCallGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalRequest extends $tea.Model {
  calledNumber?: string;
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  speed?: number;
  ttsCode?: string;
  ttsParam?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      speed: 'Speed',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      speed: 'number',
      ttsCode: 'string',
      ttsParam: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalResponseBody extends $tea.Model {
  callId?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BackendCallSignalResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BackendCallSignalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BackendCallSignalResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallRequest extends $tea.Model {
  calledNumber?: string[];
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  signature?: string;
  signatureNonce?: string;
  speed?: number;
  taskName?: string;
  timestamp?: string;
  timingStart?: string;
  ttsCode?: string;
  ttsParam?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: { 'type': 'array', 'itemType': 'string' },
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallShrinkRequest extends $tea.Model {
  calledNumberShrink?: string;
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  signature?: string;
  signatureNonce?: string;
  speed?: number;
  taskName?: string;
  timestamp?: string;
  timingStart?: string;
  ttsCode?: string;
  ttsParam?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumberShrink: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumberShrink: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: GroupCallResponseBodyModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: GroupCallResponseBodyModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GroupCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GroupCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallRequest extends $tea.Model {
  calledNumber?: string;
  callerIdNumber?: string;
  countryId?: string;
  outId?: string;
  ownerId?: number;
  playTimes?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendType?: number;
  signature?: string;
  signatureNonce?: string;
  speed?: number;
  taskName?: string;
  timestamp?: string;
  timingStart?: string;
  ttsCode?: string;
  ttsParam?: string;
  voiceCode?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerIdNumber: 'CallerIdNumber',
      countryId: 'CountryId',
      outId: 'OutId',
      ownerId: 'OwnerId',
      playTimes: 'PlayTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendType: 'SendType',
      signature: 'Signature',
      signatureNonce: 'SignatureNonce',
      speed: 'Speed',
      taskName: 'TaskName',
      timestamp: 'Timestamp',
      timingStart: 'TimingStart',
      ttsCode: 'TtsCode',
      ttsParam: 'TtsParam',
      voiceCode: 'VoiceCode',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerIdNumber: 'string',
      countryId: 'string',
      outId: 'string',
      ownerId: 'number',
      playTimes: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendType: 'number',
      signature: 'string',
      signatureNonce: 'string',
      speed: 'number',
      taskName: 'string',
      timestamp: 'string',
      timingStart: 'string',
      ttsCode: 'string',
      ttsParam: 'string',
      voiceCode: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  message?: string;
  model?: SignalCallResponseBodyModel;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: SignalCallResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SignalCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SignalCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupCallResponseBodyModel extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SignalCallResponseBodyModel extends $tea.Model {
  callId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dyvmsapi-intl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async backendCallGroupWithOptions(tmpReq: BackendCallGroupRequest, runtime: $Util.RuntimeOptions): Promise<BackendCallGroupResponse> {
    Util.validateModel(tmpReq);
    let request = new BackendCallGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.calledNumber)) {
      request.calledNumberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.calledNumber, "CalledNumber", "json");
    }

    let query = { };
    if (!Util.isUnset(request.calledNumberShrink)) {
      query["CalledNumber"] = request.calledNumberShrink;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BackendCallGroup",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BackendCallGroupResponse>(await this.callApi(params, req, runtime), new BackendCallGroupResponse({}));
  }

  async backendCallGroup(request: BackendCallGroupRequest): Promise<BackendCallGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallGroupWithOptions(request, runtime);
  }

  async backendCallSignalWithOptions(request: BackendCallSignalRequest, runtime: $Util.RuntimeOptions): Promise<BackendCallSignalResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BackendCallSignal",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BackendCallSignalResponse>(await this.callApi(params, req, runtime), new BackendCallSignalResponse({}));
  }

  async backendCallSignal(request: BackendCallSignalRequest): Promise<BackendCallSignalResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.backendCallSignalWithOptions(request, runtime);
  }

  async groupCallWithOptions(tmpReq: GroupCallRequest, runtime: $Util.RuntimeOptions): Promise<GroupCallResponse> {
    Util.validateModel(tmpReq);
    let request = new GroupCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.calledNumber)) {
      request.calledNumberShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.calledNumber, "CalledNumber", "json");
    }

    let query = { };
    if (!Util.isUnset(request.calledNumberShrink)) {
      query["CalledNumber"] = request.calledNumberShrink;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureNonce)) {
      query["SignatureNonce"] = request.signatureNonce;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["Timestamp"] = request.timestamp;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GroupCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GroupCallResponse>(await this.callApi(params, req, runtime), new GroupCallResponse({}));
  }

  async groupCall(request: GroupCallRequest): Promise<GroupCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.groupCallWithOptions(request, runtime);
  }

  async signalCallWithOptions(request: SignalCallRequest, runtime: $Util.RuntimeOptions): Promise<SignalCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callerIdNumber)) {
      query["CallerIdNumber"] = request.callerIdNumber;
    }

    if (!Util.isUnset(request.countryId)) {
      query["CountryId"] = request.countryId;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendType)) {
      query["SendType"] = request.sendType;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureNonce)) {
      query["SignatureNonce"] = request.signatureNonce;
    }

    if (!Util.isUnset(request.speed)) {
      query["Speed"] = request.speed;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["Timestamp"] = request.timestamp;
    }

    if (!Util.isUnset(request.timingStart)) {
      query["TimingStart"] = request.timingStart;
    }

    if (!Util.isUnset(request.ttsCode)) {
      query["TtsCode"] = request.ttsCode;
    }

    if (!Util.isUnset(request.ttsParam)) {
      query["TtsParam"] = request.ttsParam;
    }

    if (!Util.isUnset(request.voiceCode)) {
      query["VoiceCode"] = request.voiceCode;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SignalCall",
      version: "2021-10-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SignalCallResponse>(await this.callApi(params, req, runtime), new SignalCallResponse({}));
  }

  async signalCall(request: SignalCallRequest): Promise<SignalCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.signalCallWithOptions(request, runtime);
  }

}
