// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataCallbackRequest extends $tea.Model {
  recordId?: string;
  teacherId?: string;
  signature?: string;
  validBegin?: number;
  appId?: string;
  topic?: string;
  meetingId?: string;
  validTime?: number;
  beginTime?: number;
  endTime?: number;
  cover?: string;
  duration?: string;
  listenerCount?: number;
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      teacherId: 'TeacherId',
      signature: 'Signature',
      validBegin: 'ValidBegin',
      appId: 'AppId',
      topic: 'Topic',
      meetingId: 'MeetingId',
      validTime: 'ValidTime',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      cover: 'Cover',
      duration: 'Duration',
      listenerCount: 'ListenerCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
      teacherId: 'string',
      signature: 'string',
      validBegin: 'number',
      appId: 'string',
      topic: 'string',
      meetingId: 'string',
      validTime: 'number',
      beginTime: 'number',
      endTime: 'number',
      cover: 'string',
      duration: 'string',
      listenerCount: 'number',
      userCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataCallbackResponseBody extends $tea.Model {
  msg?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DataCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DataCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndCallbackRequest extends $tea.Model {
  opTime?: number;
  signature?: string;
  validBegin?: number;
  appId?: string;
  meetingId?: string;
  validTime?: number;
  newEndTime?: number;
  static names(): { [key: string]: string } {
    return {
      opTime: 'OpTime',
      signature: 'Signature',
      validBegin: 'ValidBegin',
      appId: 'AppId',
      meetingId: 'MeetingId',
      validTime: 'ValidTime',
      newEndTime: 'NewEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTime: 'number',
      signature: 'string',
      validBegin: 'number',
      appId: 'string',
      meetingId: 'string',
      validTime: 'number',
      newEndTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndCallbackResponseBody extends $tea.Model {
  msg?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EndCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EndCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EndCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'ap-northeast-1': "plaso-classroom.aliyuncs.com",
      'ap-northeast-2-pop': "plaso-classroom.aliyuncs.com",
      'ap-south-1': "plaso-classroom.aliyuncs.com",
      'ap-southeast-1': "plaso-classroom.aliyuncs.com",
      'ap-southeast-2': "plaso-classroom.aliyuncs.com",
      'ap-southeast-3': "plaso-classroom.aliyuncs.com",
      'ap-southeast-5': "plaso-classroom.aliyuncs.com",
      'cn-beijing': "plaso-classroom.aliyuncs.com",
      'cn-beijing-finance-1': "plaso-classroom.aliyuncs.com",
      'cn-beijing-finance-pop': "plaso-classroom.aliyuncs.com",
      'cn-beijing-gov-1': "plaso-classroom.aliyuncs.com",
      'cn-beijing-nu16-b01': "plaso-classroom.aliyuncs.com",
      'cn-chengdu': "plaso-classroom.aliyuncs.com",
      'cn-edge-1': "plaso-classroom.aliyuncs.com",
      'cn-fujian': "plaso-classroom.aliyuncs.com",
      'cn-haidian-cm12-c01': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-bj-b01': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-finance': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "plaso-classroom.aliyuncs.com",
      'cn-hangzhou-test-306': "plaso-classroom.aliyuncs.com",
      'cn-hongkong': "plaso-classroom.aliyuncs.com",
      'cn-hongkong-finance-pop': "plaso-classroom.aliyuncs.com",
      'cn-huhehaote': "plaso-classroom.aliyuncs.com",
      'cn-huhehaote-nebula-1': "plaso-classroom.aliyuncs.com",
      'cn-north-2-gov-1': "plaso-classroom.aliyuncs.com",
      'cn-qingdao': "plaso-classroom.aliyuncs.com",
      'cn-qingdao-nebula': "plaso-classroom.aliyuncs.com",
      'cn-shanghai': "plaso-classroom.aliyuncs.com",
      'cn-shanghai-et15-b01': "plaso-classroom.aliyuncs.com",
      'cn-shanghai-et2-b01': "plaso-classroom.aliyuncs.com",
      'cn-shanghai-finance-1': "plaso-classroom.aliyuncs.com",
      'cn-shanghai-inner': "plaso-classroom.aliyuncs.com",
      'cn-shanghai-internal-test-1': "plaso-classroom.aliyuncs.com",
      'cn-shenzhen': "plaso-classroom.aliyuncs.com",
      'cn-shenzhen-finance-1': "plaso-classroom.aliyuncs.com",
      'cn-shenzhen-inner': "plaso-classroom.aliyuncs.com",
      'cn-shenzhen-st4-d01': "plaso-classroom.aliyuncs.com",
      'cn-shenzhen-su18-b01': "plaso-classroom.aliyuncs.com",
      'cn-wuhan': "plaso-classroom.aliyuncs.com",
      'cn-wulanchabu': "plaso-classroom.aliyuncs.com",
      'cn-yushanfang': "plaso-classroom.aliyuncs.com",
      'cn-zhangbei': "plaso-classroom.aliyuncs.com",
      'cn-zhangbei-na61-b01': "plaso-classroom.aliyuncs.com",
      'cn-zhangjiakou': "plaso-classroom.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "plaso-classroom.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "plaso-classroom.aliyuncs.com",
      'eu-central-1': "plaso-classroom.aliyuncs.com",
      'eu-west-1': "plaso-classroom.aliyuncs.com",
      'eu-west-1-oxs': "plaso-classroom.aliyuncs.com",
      'me-east-1': "plaso-classroom.aliyuncs.com",
      'rus-west-1-pop': "plaso-classroom.aliyuncs.com",
      'us-east-1': "plaso-classroom.aliyuncs.com",
      'us-west-1': "plaso-classroom.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("plaso_online_class", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async dataCallback(request: DataCallbackRequest): Promise<DataCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dataCallbackWithOptions(request, headers, runtime);
  }

  async dataCallbackWithOptions(request: DataCallbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DataCallbackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!Util.isUnset(request.teacherId)) {
      query["TeacherId"] = request.teacherId;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.validBegin)) {
      query["ValidBegin"] = request.validBegin;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.meetingId)) {
      query["MeetingId"] = request.meetingId;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.cover)) {
      query["Cover"] = request.cover;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.listenerCount)) {
      query["ListenerCount"] = request.listenerCount;
    }

    if (!Util.isUnset(request.userCount)) {
      query["UserCount"] = request.userCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DataCallbackResponse>(await this.doROARequest("DataCallback", "2021-4-20", "HTTPS", "POST", "AK", `/plaso/datacallback`, "json", req, runtime), new DataCallbackResponse({}));
  }

  async endCallback(request: EndCallbackRequest): Promise<EndCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.endCallbackWithOptions(request, headers, runtime);
  }

  async endCallbackWithOptions(request: EndCallbackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EndCallbackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.opTime)) {
      query["OpTime"] = request.opTime;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.validBegin)) {
      query["ValidBegin"] = request.validBegin;
    }

    if (!Util.isUnset(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.meetingId)) {
      query["MeetingId"] = request.meetingId;
    }

    if (!Util.isUnset(request.validTime)) {
      query["ValidTime"] = request.validTime;
    }

    if (!Util.isUnset(request.newEndTime)) {
      query["NewEndTime"] = request.newEndTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<EndCallbackResponse>(await this.doROARequest("EndCallback", "2021-4-20", "HTTPS", "POST", "AK", `/plaso/roa`, "json", req, runtime), new EndCallbackResponse({}));
  }

}
