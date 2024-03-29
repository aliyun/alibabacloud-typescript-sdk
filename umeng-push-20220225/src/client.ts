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
  badge?: string;
  category?: string;
  contentAvailable?: number;
  interruptionLevel?: string;
  sound?: string;
  threadID?: string;
  static names(): { [key: string]: string } {
    return {
      alert: 'alert',
      badge: 'badge',
      category: 'category',
      contentAvailable: 'contentAvailable',
      interruptionLevel: 'interruptionLevel',
      sound: 'sound',
      threadID: 'threadID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: Alert,
      badge: 'string',
      category: 'string',
      contentAvailable: 'number',
      interruptionLevel: 'string',
      sound: 'string',
      threadID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Body extends $tea.Model {
  activity?: string;
  addBadge?: number;
  afterOpen?: string;
  builderId?: number;
  custom?: string;
  expandImage?: string;
  icon?: string;
  img?: string;
  playLights?: boolean;
  playSound?: boolean;
  playVibrate?: boolean;
  rePop?: number;
  setBadge?: number;
  sound?: string;
  text?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      activity: 'activity',
      addBadge: 'addBadge',
      afterOpen: 'afterOpen',
      builderId: 'builderId',
      custom: 'custom',
      expandImage: 'expandImage',
      icon: 'icon',
      img: 'img',
      playLights: 'playLights',
      playSound: 'playSound',
      playVibrate: 'playVibrate',
      rePop: 'rePop',
      setBadge: 'setBadge',
      sound: 'sound',
      text: 'text',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activity: 'string',
      addBadge: 'number',
      afterOpen: 'string',
      builderId: 'number',
      custom: 'string',
      expandImage: 'string',
      icon: 'string',
      img: 'string',
      playLights: 'boolean',
      playSound: 'boolean',
      playVibrate: 'boolean',
      rePop: 'number',
      setBadge: 'number',
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
  channelFcm?: string;
  huaweiChannelCategory?: string;
  huaweiChannelImportance?: string;
  mainActivity?: string;
  oppoChannelId?: string;
  vivoCategory?: string;
  xiaomiChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelActivity: 'channelActivity',
      channelFcm: 'channelFcm',
      huaweiChannelCategory: 'huaweiChannelCategory',
      huaweiChannelImportance: 'huaweiChannelImportance',
      mainActivity: 'mainActivity',
      oppoChannelId: 'oppoChannelId',
      vivoCategory: 'vivoCategory',
      xiaomiChannelId: 'xiaomiChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelActivity: 'string',
      channelFcm: 'string',
      huaweiChannelCategory: 'string',
      huaweiChannelImportance: 'string',
      mainActivity: 'string',
      oppoChannelId: 'string',
      vivoCategory: 'string',
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

export class CancelByMsgIdRequest extends $tea.Model {
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

export class CancelByMsgIdResponseBody extends $tea.Model {
  code?: string;
  data?: CancelByMsgIdResponseBodyData;
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
      data: CancelByMsgIdResponseBodyData,
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

export class CancelByMsgIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelByMsgIdResponseBody;
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
      body: CancelByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMsgStatRequest extends $tea.Model {
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

export class QueryMsgStatResponseBody extends $tea.Model {
  code?: string;
  data?: QueryMsgStatResponseBodyData;
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
      data: QueryMsgStatResponseBodyData,
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

export class QueryMsgStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryMsgStatResponseBody;
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
      body: QueryMsgStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAliasRequest extends $tea.Model {
  alias?: string;
  aliasType?: string;
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  iosPayload?: IosPayload;
  policy?: Policy;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  thirdPartyId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      aliasType: 'AliasType',
      androidPayload: 'AndroidPayload',
      channelProperties: 'ChannelProperties',
      description: 'Description',
      iosPayload: 'IosPayload',
      policy: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
      thirdPartyId: 'ThirdPartyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliasType: 'string',
      androidPayload: AndroidPayload,
      channelProperties: ChannelProperties,
      description: 'string',
      iosPayload: IosPayload,
      policy: Policy,
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
      thirdPartyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAliasShrinkRequest extends $tea.Model {
  alias?: string;
  aliasType?: string;
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  thirdPartyId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      aliasType: 'AliasType',
      androidPayloadShrink: 'AndroidPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      iosPayloadShrink: 'IosPayload',
      policyShrink: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
      thirdPartyId: 'ThirdPartyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliasType: 'string',
      androidPayloadShrink: 'string',
      channelPropertiesShrink: 'string',
      description: 'string',
      iosPayloadShrink: 'string',
      policyShrink: 'string',
      productionMode: 'boolean',
      receiptType: 'number',
      receiptUrl: 'string',
      thirdPartyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAliasResponseBody extends $tea.Model {
  code?: string;
  data?: SendByAliasResponseBodyData;
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
      data: SendByAliasResponseBodyData,
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

export class SendByAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByAliasResponseBody;
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
      body: SendByAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAliasFileIdRequest extends $tea.Model {
  aliasType?: string;
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  fileId?: string;
  iosPayload?: IosPayload;
  policy?: Policy;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliasType: 'AliasType',
      androidPayload: 'AndroidPayload',
      channelProperties: 'ChannelProperties',
      description: 'Description',
      fileId: 'FileId',
      iosPayload: 'IosPayload',
      policy: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasType: 'string',
      androidPayload: AndroidPayload,
      channelProperties: ChannelProperties,
      description: 'string',
      fileId: 'string',
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

export class SendByAliasFileIdShrinkRequest extends $tea.Model {
  aliasType?: string;
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  fileId?: string;
  iosPayloadShrink?: string;
  policyShrink?: string;
  productionMode?: boolean;
  receiptType?: number;
  receiptUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliasType: 'AliasType',
      androidPayloadShrink: 'AndroidPayload',
      channelPropertiesShrink: 'ChannelProperties',
      description: 'Description',
      fileId: 'FileId',
      iosPayloadShrink: 'IosPayload',
      policyShrink: 'Policy',
      productionMode: 'ProductionMode',
      receiptType: 'ReceiptType',
      receiptUrl: 'ReceiptUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasType: 'string',
      androidPayloadShrink: 'string',
      channelPropertiesShrink: 'string',
      description: 'string',
      fileId: 'string',
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

export class SendByAliasFileIdResponseBody extends $tea.Model {
  code?: string;
  data?: SendByAliasFileIdResponseBodyData;
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
      data: SendByAliasFileIdResponseBodyData,
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

export class SendByAliasFileIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByAliasFileIdResponseBody;
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
      body: SendByAliasFileIdResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByAppResponseBody;
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
  thirdPartyId?: string;
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
      thirdPartyId: 'ThirdPartyId',
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
      thirdPartyId: 'string',
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
  thirdPartyId?: string;
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
      thirdPartyId: 'ThirdPartyId',
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
      thirdPartyId: 'string',
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByDeviceResponseBody;
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

export class SendByDeviceFileIdRequest extends $tea.Model {
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  fileId?: string;
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
      fileId: 'FileId',
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
      fileId: 'string',
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

export class SendByDeviceFileIdShrinkRequest extends $tea.Model {
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  fileId?: string;
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
      fileId: 'FileId',
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
      fileId: 'string',
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

export class SendByDeviceFileIdResponseBody extends $tea.Model {
  code?: string;
  data?: SendByDeviceFileIdResponseBodyData;
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
      data: SendByDeviceFileIdResponseBodyData,
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

export class SendByDeviceFileIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByDeviceFileIdResponseBody;
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
      body: SendByDeviceFileIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByFilterRequest extends $tea.Model {
  androidPayload?: AndroidPayload;
  channelProperties?: ChannelProperties;
  description?: string;
  filter?: string;
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
      filter: 'Filter',
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
      filter: 'string',
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

export class SendByFilterShrinkRequest extends $tea.Model {
  androidPayloadShrink?: string;
  channelPropertiesShrink?: string;
  description?: string;
  filter?: string;
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
      filter: 'Filter',
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
      filter: 'string',
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

export class SendByFilterResponseBody extends $tea.Model {
  code?: string;
  data?: SendByFilterResponseBodyData;
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
      data: SendByFilterResponseBodyData,
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

export class SendByFilterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SendByFilterResponseBody;
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
      body: SendByFilterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceRequest extends $tea.Model {
  deviceTokens?: string;
  static names(): { [key: string]: string } {
    return {
      deviceTokens: 'DeviceTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTokens: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadDeviceResponseBody extends $tea.Model {
  code?: string;
  data?: UploadDeviceResponseBodyData;
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
      data: UploadDeviceResponseBodyData,
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

export class UploadDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadDeviceResponseBody;
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
      body: UploadDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelByMsgIdResponseBodyData extends $tea.Model {
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

export class QueryMsgStatResponseBodyData extends $tea.Model {
  accept?: number;
  arrive?: number;
  closePush?: number;
  dismiss?: number;
  msgId?: string;
  open?: number;
  sent?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      accept: 'Accept',
      arrive: 'Arrive',
      closePush: 'ClosePush',
      dismiss: 'Dismiss',
      msgId: 'MsgId',
      open: 'Open',
      sent: 'Sent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accept: 'number',
      arrive: 'number',
      closePush: 'number',
      dismiss: 'number',
      msgId: 'string',
      open: 'number',
      sent: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendByAliasResponseBodyData extends $tea.Model {
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

export class SendByAliasFileIdResponseBodyData extends $tea.Model {
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

export class SendByDeviceFileIdResponseBodyData extends $tea.Model {
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

export class SendByFilterResponseBodyData extends $tea.Model {
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

export class UploadDeviceResponseBodyData extends $tea.Model {
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
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

  async cancelByMsgIdWithOptions(request: CancelByMsgIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelByMsgIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelByMsgId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/CancelByMsgId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelByMsgIdResponse>(await this.callApi(params, req, runtime), new CancelByMsgIdResponse({}));
  }

  async cancelByMsgId(request: CancelByMsgIdRequest): Promise<CancelByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelByMsgIdWithOptions(request, headers, runtime);
  }

  async queryMsgStatWithOptions(request: QueryMsgStatRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryMsgStatResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.msgId)) {
      body["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMsgStat",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/QueryMsgStat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMsgStatResponse>(await this.callApi(params, req, runtime), new QueryMsgStatResponse({}));
  }

  async queryMsgStat(request: QueryMsgStatRequest): Promise<QueryMsgStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMsgStatWithOptions(request, headers, runtime);
  }

  async sendByAliasWithOptions(tmpReq: SendByAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByAliasResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByAliasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alias)) {
      body["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.aliasType)) {
      body["AliasType"] = request.aliasType;
    }

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

    if (!Util.isUnset(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendByAlias",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByAlias`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByAliasResponse>(await this.callApi(params, req, runtime), new SendByAliasResponse({}));
  }

  async sendByAlias(request: SendByAliasRequest): Promise<SendByAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAliasWithOptions(request, headers, runtime);
  }

  async sendByAliasFileIdWithOptions(tmpReq: SendByAliasFileIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByAliasFileIdResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByAliasFileIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aliasType)) {
      body["AliasType"] = request.aliasType;
    }

    if (!Util.isUnset(request.androidPayloadShrink)) {
      body["AndroidPayload"] = request.androidPayloadShrink;
    }

    if (!Util.isUnset(request.channelPropertiesShrink)) {
      body["ChannelProperties"] = request.channelPropertiesShrink;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
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
      action: "SendByAliasFileId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByAliasFileId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByAliasFileIdResponse>(await this.callApi(params, req, runtime), new SendByAliasFileIdResponse({}));
  }

  async sendByAliasFileId(request: SendByAliasFileIdRequest): Promise<SendByAliasFileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAliasFileIdWithOptions(request, headers, runtime);
  }

  async sendByAppWithOptions(tmpReq: SendByAppRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByAppResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
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

  async sendByApp(request: SendByAppRequest): Promise<SendByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByAppWithOptions(request, headers, runtime);
  }

  async sendByDeviceWithOptions(tmpReq: SendByDeviceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByDeviceResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByDeviceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
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

    if (!Util.isUnset(request.thirdPartyId)) {
      body["ThirdPartyId"] = request.thirdPartyId;
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

  async sendByDevice(request: SendByDeviceRequest): Promise<SendByDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByDeviceWithOptions(request, headers, runtime);
  }

  async sendByDeviceFileIdWithOptions(tmpReq: SendByDeviceFileIdRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByDeviceFileIdResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByDeviceFileIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
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

    if (!Util.isUnset(request.fileId)) {
      body["FileId"] = request.fileId;
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
      action: "SendByDeviceFileId",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByDeviceFileId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByDeviceFileIdResponse>(await this.callApi(params, req, runtime), new SendByDeviceFileIdResponse({}));
  }

  async sendByDeviceFileId(request: SendByDeviceFileIdRequest): Promise<SendByDeviceFileIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByDeviceFileIdWithOptions(request, headers, runtime);
  }

  async sendByFilterWithOptions(tmpReq: SendByFilterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendByFilterResponse> {
    Util.validateModel(tmpReq);
    let request = new SendByFilterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.androidPayload)) {
      request.androidPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.androidPayload, "AndroidPayload", "json");
    }

    if (!Util.isUnset(tmpReq.channelProperties)) {
      request.channelPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.channelProperties, "ChannelProperties", "json");
    }

    if (!Util.isUnset(tmpReq.iosPayload)) {
      request.iosPayloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.iosPayload, "IosPayload", "json");
    }

    if (!Util.isUnset(tmpReq.policy)) {
      request.policyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.policy, "Policy", "json");
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

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
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
      action: "SendByFilter",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/SendByFilter`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendByFilterResponse>(await this.callApi(params, req, runtime), new SendByFilterResponse({}));
  }

  async sendByFilter(request: SendByFilterRequest): Promise<SendByFilterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendByFilterWithOptions(request, headers, runtime);
  }

  async uploadDeviceWithOptions(request: UploadDeviceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadDeviceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceTokens)) {
      body["DeviceTokens"] = request.deviceTokens;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadDevice",
      version: "2022-02-25",
      protocol: "HTTPS",
      pathname: `/UploadDevice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadDeviceResponse>(await this.callApi(params, req, runtime), new UploadDeviceResponse({}));
  }

  async uploadDevice(request: UploadDeviceRequest): Promise<UploadDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadDeviceWithOptions(request, headers, runtime);
  }

}
