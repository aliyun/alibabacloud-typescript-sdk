// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Alert extends $tea.Model {
  body?: string;
  subtitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      subtitle: 'subtitle',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      subtitle: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AndroidPayload extends $tea.Model {
  body?: Body;
  displayType?: string;
  extra?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      displayType: 'displayType',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Body,
      displayType: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Aps extends $tea.Model {
  alert?: Alert;
  badge?: number;
  category?: string;
  contentAvailable?: number;
  interruptionLevel?: string;
  sound?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'alert',
      badge: 'badge',
      category: 'category',
      contentAvailable: 'contentAvailable',
      interruptionLevel: 'interruptionLevel',
      sound: 'sound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: Alert,
      badge: 'number',
      category: 'string',
      contentAvailable: 'number',
      interruptionLevel: 'string',
      sound: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Body extends $tea.Model {
  activity?: string;
  afterOpen?: string;
  badge?: number;
  builderId?: number;
  custom?: string;
  expandImage?: string;
  icon?: string;
  img?: string;
  largeIcon?: string;
  playLights?: boolean;
  playSound?: boolean;
  playVibrate?: boolean;
  sound?: string;
  text?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      activity: 'activity',
      afterOpen: 'afterOpen',
      badge: 'badge',
      builderId: 'builderId',
      custom: 'custom',
      expandImage: 'expandImage',
      icon: 'icon',
      img: 'img',
      largeIcon: 'largeIcon',
      playLights: 'playLights',
      playSound: 'playSound',
      playVibrate: 'playVibrate',
      sound: 'sound',
      text: 'text',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: 'string',
      afterOpen: 'string',
      badge: 'number',
      builderId: 'number',
      custom: 'string',
      expandImage: 'string',
      icon: 'string',
      img: 'string',
      largeIcon: 'string',
      playLights: 'boolean',
      playSound: 'boolean',
      playVibrate: 'boolean',
      sound: 'string',
      text: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChannelProperties extends $tea.Model {
  channelActivity?: string;
  mainActivity?: string;
  oppoChannelId?: string;
  vivoClassification?: string;
  xiaomiChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelActivity: 'channelActivity',
      mainActivity: 'mainActivity',
      oppoChannelId: 'oppoChannelId',
      vivoClassification: 'vivoClassification',
      xiaomiChannelId: 'xiaomiChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelActivity: 'string',
      mainActivity: 'string',
      oppoChannelId: 'string',
      vivoClassification: 'string',
      xiaomiChannelId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IosPayload extends $tea.Model {
  aps?: Aps;
  extra?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aps: 'aps',
      extra: 'extra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aps: Aps,
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Policy extends $tea.Model {
  expireTime?: string;
  outerBizNo?: string;
  speed?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      outerBizNo: 'outerBizNo',
      speed: 'speed',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      outerBizNo: 'string',
      speed: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAppRequest extends $tea.Model {
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  iosPayload?: IosPayload;
  policy?: Policy;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidPayload: 'AndroidPayload',
      channelProperties: 'ChannelProperties',
      description: 'Description',
      iosPayload: 'IosPayload',
      policy: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPayload: AndroidPayload,
      channelProperties: ChannelProperties,
      description: 'string',
      iosPayload: IosPayload,
      policy: Policy,
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAppShrinkRequest extends $tea.Model {
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidPayloadShrink: 'AndroidPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      iosPayloadShrink: 'IosPayload',
      policyShrink: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPayloadShrink: 'string',
      channelPropertiesShrink: 'string',
      description: 'string',
      iosPayloadShrink: 'string',
      policyShrink: 'string',
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAppResponseBody extends $tea.Model {
  code?: string;
  data?: SendByAppResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendByAppResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendByAppResponseBody;
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
      body: SendByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByDeviceRequest extends $tea.Model {
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  deviceTokens?: string;
  iosPayload?: IosPayload;
  policy?: Policy;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidPayload: 'AndroidPayload',
      channelProperties: 'ChannelProperties',
      description: 'Description',
      deviceTokens: 'DeviceTokens',
      iosPayload: 'IosPayload',
      policy: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPayload: AndroidPayload,
      channelProperties: ChannelProperties,
      description: 'string',
      deviceTokens: 'string',
      iosPayload: IosPayload,
      policy: Policy,
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByDeviceShrinkRequest extends $tea.Model {
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  deviceTokens?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidPayloadShrink: 'AndroidPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      deviceTokens: 'DeviceTokens',
      iosPayloadShrink: 'IosPayload',
      policyShrink: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidPayloadShrink: 'string',
      channelPropertiesShrink: 'string',
      description: 'string',
      deviceTokens: 'string',
      iosPayloadShrink: 'string',
      policyShrink: 'string',
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: SendByDeviceResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SendByDeviceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendByDeviceResponseBody;
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
      body: SendByDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAppResponseBodyData extends $tea.Model {
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByDeviceResponseBodyData extends $tea.Model {
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: 'string',
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
    this._endpoint = this.getEndpoint("umeng-push", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async sendByApp(request: SendByAppRequest): Promise<SendByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAppWithOptions(request, headers, runtime);
  }

  async sendByAppWithOptions(tmpReq: SendByAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByAppResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.androidPayload))) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.androidPayload), "AndroidPayload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.channelProperties))) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.channelProperties), "ChannelProperties", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.iosPayload))) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.iosPayload), "IosPayload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.policy))) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.policy), "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!Util.isUnset(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!Util.isUnset(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!Util.isUnset(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!Util.isUnset(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!Util.isUnset(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendByApp",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByApp`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByAppResponse>(await this.callApi(params, req, runtime), new SendByAppResponse({}));
  }

  async sendByDevice(request: SendByDeviceRequest): Promise<SendByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByDeviceWithOptions(request, headers, runtime);
  }

  async sendByDeviceWithOptions(tmpReq: SendByDeviceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.androidPayload))) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.androidPayload), "AndroidPayload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.channelProperties))) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.channelProperties), "ChannelProperties", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.iosPayload))) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.iosPayload), "IosPayload", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.policy))) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.policy), "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!Util.isUnset(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceTokens)) {
      body["DeviceTokens"] = request.deviceTokens;
    }

    if (!Util.isUnset(request.iosPayloadShrink)) {
      body["IosPayload"] = request.iosPayloadShrink;
    }

    if (!Util.isUnset(request.policyShrink)) {
      body["Policy"] = request.policyShrink;
    }

    if (!Util.isUnset(request.productionMode)) {
      body["ProductionMode"] = request.productionMode;
    }

    if (!Util.isUnset(request.receiptType)) {
      body["ReceiptType"] = request.receiptType;
    }

    if (!Util.isUnset(request.receiptUrl)) {
      body["ReceiptUrl"] = request.receiptUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendByDevice",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByDeviceResponse>(await this.callApi(params, req, runtime), new SendByDeviceResponse({}));
  }

}
