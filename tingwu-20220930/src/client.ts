// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateFileTransRequest extends $tea.Model {
  abilityParams?: { [key: string]: any };
  appKey?: string;
  asrParams?: { [key: string]: any };
  audioLanguage?: string;
  audioOssBucket?: string;
  audioOssPath?: string;
  audioOutputEnabled?: boolean;
  audioOutputOssBucket?: string;
  audioOutputOssPath?: string;
  audioRoleNum?: string;
  audioSegmentsEnabled?: boolean;
  labParams?: { [key: string]: any };
  tags?: { [key: string]: any };
  transKey?: string;
  transResultOssBucket?: string;
  transResultOssPath?: string;
  videoOutputEnabled?: boolean;
  videoOutputOssBucket?: string;
  videoOutputOssPath?: string;
  static names(): { [key: string]: string } {
    return {
      abilityParams: 'AbilityParams',
      appKey: 'AppKey',
      asrParams: 'AsrParams',
      audioLanguage: 'AudioLanguage',
      audioOssBucket: 'AudioOssBucket',
      audioOssPath: 'AudioOssPath',
      audioOutputEnabled: 'AudioOutputEnabled',
      audioOutputOssBucket: 'AudioOutputOssBucket',
      audioOutputOssPath: 'AudioOutputOssPath',
      audioRoleNum: 'AudioRoleNum',
      audioSegmentsEnabled: 'AudioSegmentsEnabled',
      labParams: 'LabParams',
      tags: 'Tags',
      transKey: 'TransKey',
      transResultOssBucket: 'TransResultOssBucket',
      transResultOssPath: 'TransResultOssPath',
      videoOutputEnabled: 'VideoOutputEnabled',
      videoOutputOssBucket: 'VideoOutputOssBucket',
      videoOutputOssPath: 'VideoOutputOssPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      appKey: 'string',
      asrParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      audioLanguage: 'string',
      audioOssBucket: 'string',
      audioOssPath: 'string',
      audioOutputEnabled: 'boolean',
      audioOutputOssBucket: 'string',
      audioOutputOssPath: 'string',
      audioRoleNum: 'string',
      audioSegmentsEnabled: 'boolean',
      labParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      transKey: 'string',
      transResultOssBucket: 'string',
      transResultOssPath: 'string',
      videoOutputEnabled: 'boolean',
      videoOutputOssBucket: 'string',
      videoOutputOssPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileTransResponseBody extends $tea.Model {
  code?: string;
  data?: CreateFileTransResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateFileTransResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileTransResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFileTransResponseBody;
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
      body: CreateFileTransResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingTransRequest extends $tea.Model {
  abilityParams?: { [key: string]: any };
  appKey?: string;
  asrParams?: { [key: string]: any };
  audioBitRate?: number;
  audioFormat?: string;
  audioLanguage?: string;
  audioOutputEnabled?: boolean;
  audioOutputOssBucket?: string;
  audioOutputOssPath?: string;
  audioPackage?: string;
  audioSampleRate?: number;
  audioSegmentsEnabled?: boolean;
  docResultEnabled?: boolean;
  labParams?: { [key: string]: any };
  meetingKey?: string;
  meetingResultEnabled?: boolean;
  meetingResultOssBucket?: string;
  meetingResultOssPath?: string;
  realtimeActiveResultLevel?: number;
  realtimeResultEnabled?: boolean;
  realtimeResultLevel?: number;
  realtimeResultMeetingInfoEnabled?: boolean;
  realtimeResultWordsEnabled?: boolean;
  tags?: { [key: string]: any };
  translateActiveResultLevel?: number;
  translateLanguages?: string;
  translateResultEnabled?: boolean;
  translateResultLevel?: number;
  static names(): { [key: string]: string } {
    return {
      abilityParams: 'AbilityParams',
      appKey: 'AppKey',
      asrParams: 'AsrParams',
      audioBitRate: 'AudioBitRate',
      audioFormat: 'AudioFormat',
      audioLanguage: 'AudioLanguage',
      audioOutputEnabled: 'AudioOutputEnabled',
      audioOutputOssBucket: 'AudioOutputOssBucket',
      audioOutputOssPath: 'AudioOutputOssPath',
      audioPackage: 'AudioPackage',
      audioSampleRate: 'AudioSampleRate',
      audioSegmentsEnabled: 'AudioSegmentsEnabled',
      docResultEnabled: 'DocResultEnabled',
      labParams: 'LabParams',
      meetingKey: 'MeetingKey',
      meetingResultEnabled: 'MeetingResultEnabled',
      meetingResultOssBucket: 'MeetingResultOssBucket',
      meetingResultOssPath: 'MeetingResultOssPath',
      realtimeActiveResultLevel: 'RealtimeActiveResultLevel',
      realtimeResultEnabled: 'RealtimeResultEnabled',
      realtimeResultLevel: 'RealtimeResultLevel',
      realtimeResultMeetingInfoEnabled: 'RealtimeResultMeetingInfoEnabled',
      realtimeResultWordsEnabled: 'RealtimeResultWordsEnabled',
      tags: 'Tags',
      translateActiveResultLevel: 'TranslateActiveResultLevel',
      translateLanguages: 'TranslateLanguages',
      translateResultEnabled: 'TranslateResultEnabled',
      translateResultLevel: 'TranslateResultLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilityParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      appKey: 'string',
      asrParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      audioBitRate: 'number',
      audioFormat: 'string',
      audioLanguage: 'string',
      audioOutputEnabled: 'boolean',
      audioOutputOssBucket: 'string',
      audioOutputOssPath: 'string',
      audioPackage: 'string',
      audioSampleRate: 'number',
      audioSegmentsEnabled: 'boolean',
      docResultEnabled: 'boolean',
      labParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      meetingKey: 'string',
      meetingResultEnabled: 'boolean',
      meetingResultOssBucket: 'string',
      meetingResultOssPath: 'string',
      realtimeActiveResultLevel: 'number',
      realtimeResultEnabled: 'boolean',
      realtimeResultLevel: 'number',
      realtimeResultMeetingInfoEnabled: 'boolean',
      realtimeResultWordsEnabled: 'boolean',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      translateActiveResultLevel: 'number',
      translateLanguages: 'string',
      translateResultEnabled: 'boolean',
      translateResultLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingTransResponseBody extends $tea.Model {
  code?: string;
  data?: CreateMeetingTransResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateMeetingTransResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingTransResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMeetingTransResponseBody;
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
      body: CreateMeetingTransResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTransResponseBody extends $tea.Model {
  code?: string;
  data?: GetFileTransResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetFileTransResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTransResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFileTransResponseBody;
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
      body: GetFileTransResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingTransResponseBody extends $tea.Model {
  code?: string;
  data?: GetMeetingTransResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMeetingTransResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingTransResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMeetingTransResponseBody;
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
      body: GetMeetingTransResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMeetingTransRequest extends $tea.Model {
  meetingRoleNum?: number;
  onlyRoleSplitResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      meetingRoleNum: 'MeetingRoleNum',
      onlyRoleSplitResult: 'OnlyRoleSplitResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingRoleNum: 'number',
      onlyRoleSplitResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMeetingTransResponseBody extends $tea.Model {
  code?: string;
  data?: StopMeetingTransResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StopMeetingTransResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMeetingTransResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopMeetingTransResponseBody;
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
      body: StopMeetingTransResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileTransResponseBodyData extends $tea.Model {
  transId?: string;
  transKey?: string;
  static names(): { [key: string]: string } {
    return {
      transId: 'TransId',
      transKey: 'TransKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transId: 'string',
      transKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMeetingTransResponseBodyData extends $tea.Model {
  meetingId?: string;
  meetingJoinUrl?: string;
  meetingKey?: string;
  static names(): { [key: string]: string } {
    return {
      meetingId: 'MeetingId',
      meetingJoinUrl: 'MeetingJoinUrl',
      meetingKey: 'MeetingKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingId: 'string',
      meetingJoinUrl: 'string',
      meetingKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTransResponseBodyData extends $tea.Model {
  transId?: string;
  transKey?: string;
  transStatus?: string;
  static names(): { [key: string]: string } {
    return {
      transId: 'TransId',
      transKey: 'TransKey',
      transStatus: 'TransStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transId: 'string',
      transKey: 'string',
      transStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMeetingTransResponseBodyData extends $tea.Model {
  meetingId?: string;
  meetingKey?: string;
  meetingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      meetingId: 'MeetingId',
      meetingKey: 'MeetingKey',
      meetingStatus: 'MeetingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingId: 'string',
      meetingKey: 'string',
      meetingStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopMeetingTransResponseBodyData extends $tea.Model {
  meetingId?: string;
  meetingKey?: string;
  meetingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      meetingId: 'MeetingId',
      meetingKey: 'MeetingKey',
      meetingStatus: 'MeetingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meetingId: 'string',
      meetingKey: 'string',
      meetingStatus: 'string',
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
    this._endpoint = this.getEndpoint("tingwu", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createFileTransWithOptions(request: CreateFileTransRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFileTransResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.abilityParams)) {
      body["AbilityParams"] = request.abilityParams;
    }

    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.asrParams)) {
      body["AsrParams"] = request.asrParams;
    }

    if (!Util.isUnset(request.audioLanguage)) {
      body["AudioLanguage"] = request.audioLanguage;
    }

    if (!Util.isUnset(request.audioOssBucket)) {
      body["AudioOssBucket"] = request.audioOssBucket;
    }

    if (!Util.isUnset(request.audioOssPath)) {
      body["AudioOssPath"] = request.audioOssPath;
    }

    if (!Util.isUnset(request.audioOutputEnabled)) {
      body["AudioOutputEnabled"] = request.audioOutputEnabled;
    }

    if (!Util.isUnset(request.audioOutputOssBucket)) {
      body["AudioOutputOssBucket"] = request.audioOutputOssBucket;
    }

    if (!Util.isUnset(request.audioOutputOssPath)) {
      body["AudioOutputOssPath"] = request.audioOutputOssPath;
    }

    if (!Util.isUnset(request.audioRoleNum)) {
      body["AudioRoleNum"] = request.audioRoleNum;
    }

    if (!Util.isUnset(request.audioSegmentsEnabled)) {
      body["AudioSegmentsEnabled"] = request.audioSegmentsEnabled;
    }

    if (!Util.isUnset(request.labParams)) {
      body["LabParams"] = request.labParams;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.transKey)) {
      body["TransKey"] = request.transKey;
    }

    if (!Util.isUnset(request.transResultOssBucket)) {
      body["TransResultOssBucket"] = request.transResultOssBucket;
    }

    if (!Util.isUnset(request.transResultOssPath)) {
      body["TransResultOssPath"] = request.transResultOssPath;
    }

    if (!Util.isUnset(request.videoOutputEnabled)) {
      body["VideoOutputEnabled"] = request.videoOutputEnabled;
    }

    if (!Util.isUnset(request.videoOutputOssBucket)) {
      body["VideoOutputOssBucket"] = request.videoOutputOssBucket;
    }

    if (!Util.isUnset(request.videoOutputOssPath)) {
      body["VideoOutputOssPath"] = request.videoOutputOssPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFileTrans",
      version: "2022-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/file-trans`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFileTransResponse>(await this.callApi(params, req, runtime), new CreateFileTransResponse({}));
  }

  async createFileTrans(request: CreateFileTransRequest): Promise<CreateFileTransResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFileTransWithOptions(request, headers, runtime);
  }

  async createMeetingTransWithOptions(request: CreateMeetingTransRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateMeetingTransResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.abilityParams)) {
      body["AbilityParams"] = request.abilityParams;
    }

    if (!Util.isUnset(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.asrParams)) {
      body["AsrParams"] = request.asrParams;
    }

    if (!Util.isUnset(request.audioBitRate)) {
      body["AudioBitRate"] = request.audioBitRate;
    }

    if (!Util.isUnset(request.audioFormat)) {
      body["AudioFormat"] = request.audioFormat;
    }

    if (!Util.isUnset(request.audioLanguage)) {
      body["AudioLanguage"] = request.audioLanguage;
    }

    if (!Util.isUnset(request.audioOutputEnabled)) {
      body["AudioOutputEnabled"] = request.audioOutputEnabled;
    }

    if (!Util.isUnset(request.audioOutputOssBucket)) {
      body["AudioOutputOssBucket"] = request.audioOutputOssBucket;
    }

    if (!Util.isUnset(request.audioOutputOssPath)) {
      body["AudioOutputOssPath"] = request.audioOutputOssPath;
    }

    if (!Util.isUnset(request.audioPackage)) {
      body["AudioPackage"] = request.audioPackage;
    }

    if (!Util.isUnset(request.audioSampleRate)) {
      body["AudioSampleRate"] = request.audioSampleRate;
    }

    if (!Util.isUnset(request.audioSegmentsEnabled)) {
      body["AudioSegmentsEnabled"] = request.audioSegmentsEnabled;
    }

    if (!Util.isUnset(request.docResultEnabled)) {
      body["DocResultEnabled"] = request.docResultEnabled;
    }

    if (!Util.isUnset(request.labParams)) {
      body["LabParams"] = request.labParams;
    }

    if (!Util.isUnset(request.meetingKey)) {
      body["MeetingKey"] = request.meetingKey;
    }

    if (!Util.isUnset(request.meetingResultEnabled)) {
      body["MeetingResultEnabled"] = request.meetingResultEnabled;
    }

    if (!Util.isUnset(request.meetingResultOssBucket)) {
      body["MeetingResultOssBucket"] = request.meetingResultOssBucket;
    }

    if (!Util.isUnset(request.meetingResultOssPath)) {
      body["MeetingResultOssPath"] = request.meetingResultOssPath;
    }

    if (!Util.isUnset(request.realtimeActiveResultLevel)) {
      body["RealtimeActiveResultLevel"] = request.realtimeActiveResultLevel;
    }

    if (!Util.isUnset(request.realtimeResultEnabled)) {
      body["RealtimeResultEnabled"] = request.realtimeResultEnabled;
    }

    if (!Util.isUnset(request.realtimeResultLevel)) {
      body["RealtimeResultLevel"] = request.realtimeResultLevel;
    }

    if (!Util.isUnset(request.realtimeResultMeetingInfoEnabled)) {
      body["RealtimeResultMeetingInfoEnabled"] = request.realtimeResultMeetingInfoEnabled;
    }

    if (!Util.isUnset(request.realtimeResultWordsEnabled)) {
      body["RealtimeResultWordsEnabled"] = request.realtimeResultWordsEnabled;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.translateActiveResultLevel)) {
      body["TranslateActiveResultLevel"] = request.translateActiveResultLevel;
    }

    if (!Util.isUnset(request.translateLanguages)) {
      body["TranslateLanguages"] = request.translateLanguages;
    }

    if (!Util.isUnset(request.translateResultEnabled)) {
      body["TranslateResultEnabled"] = request.translateResultEnabled;
    }

    if (!Util.isUnset(request.translateResultLevel)) {
      body["TranslateResultLevel"] = request.translateResultLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMeetingTrans",
      version: "2022-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/meeting-trans`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateMeetingTransResponse>(await this.callApi(params, req, runtime), new CreateMeetingTransResponse({}));
  }

  async createMeetingTrans(request: CreateMeetingTransRequest): Promise<CreateMeetingTransResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMeetingTransWithOptions(request, headers, runtime);
  }

  async getFileTransWithOptions(TransId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFileTransResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetFileTrans",
      version: "2022-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/file-trans/${OpenApiUtil.getEncodeParam(TransId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileTransResponse>(await this.callApi(params, req, runtime), new GetFileTransResponse({}));
  }

  async getFileTrans(TransId: string): Promise<GetFileTransResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileTransWithOptions(TransId, headers, runtime);
  }

  async getMeetingTransWithOptions(MeetingId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMeetingTransResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMeetingTrans",
      version: "2022-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/meeting-trans/${OpenApiUtil.getEncodeParam(MeetingId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMeetingTransResponse>(await this.callApi(params, req, runtime), new GetMeetingTransResponse({}));
  }

  async getMeetingTrans(MeetingId: string): Promise<GetMeetingTransResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMeetingTransWithOptions(MeetingId, headers, runtime);
  }

  async stopMeetingTransWithOptions(MeetingId: string, request: StopMeetingTransRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopMeetingTransResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meetingRoleNum)) {
      body["MeetingRoleNum"] = request.meetingRoleNum;
    }

    if (!Util.isUnset(request.onlyRoleSplitResult)) {
      body["OnlyRoleSplitResult"] = request.onlyRoleSplitResult;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopMeetingTrans",
      version: "2022-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/meeting-trans/${OpenApiUtil.getEncodeParam(MeetingId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopMeetingTransResponse>(await this.callApi(params, req, runtime), new StopMeetingTransResponse({}));
  }

  async stopMeetingTrans(MeetingId: string, request: StopMeetingTransRequest): Promise<StopMeetingTransResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMeetingTransWithOptions(MeetingId, request, headers, runtime);
  }

}
