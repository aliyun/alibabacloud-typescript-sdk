// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindAliasRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_alias
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      appKey: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAliasResponseBody extends $tea.Model {
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindAliasResponseBody;
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
      body: BindAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27725900
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eb5f741d83d04d34807d229999eefa52
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1381111****
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneResponseBody extends $tea.Model {
  /**
   * @example
   * 0D1126F0-F8FF-513D-BAFA-F140447BDED4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindPhoneResponseBody;
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
      body: BindPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  clientKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_tag,test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientKey: 'ClientKey',
      keyType: 'KeyType',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      clientKey: 'string',
      keyType: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagResponseBody extends $tea.Model {
  /**
   * @example
   * 82FD0A09-5BB8-40FB-8221-9A11FE92D620
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindTagResponseBody;
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
      body: BindTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 501029
   */
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushResponseBody extends $tea.Model {
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelPushResponseBody;
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
      body: CancelPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBody extends $tea.Model {
  /**
   * @example
   * false
   */
  android?: boolean;
  developmentCertInfo?: CheckCertificateResponseBodyDevelopmentCertInfo;
  /**
   * @example
   * true
   */
  IOS?: boolean;
  productionCertInfo?: CheckCertificateResponseBodyProductionCertInfo;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      developmentCertInfo: 'DevelopmentCertInfo',
      IOS: 'IOS',
      productionCertInfo: 'ProductionCertInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: 'boolean',
      developmentCertInfo: CheckCertificateResponseBodyDevelopmentCertInfo,
      IOS: 'boolean',
      productionCertInfo: CheckCertificateResponseBodyProductionCertInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckCertificateResponseBody;
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
      body: CheckCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23419851
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae296f3b04a58a05b30c95f****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceResponseBody extends $tea.Model {
  /**
   * @example
   * ture
   */
  available?: boolean;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDeviceResponseBody;
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
      body: CheckDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23419851
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae296f3b04a58a05b30c95f****,ae296f3b04a58a05b30c95f****,ae296f3b04a58a05b30c95f****
   */
  deviceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceIds: 'DeviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBody extends $tea.Model {
  deviceCheckInfos?: CheckDevicesResponseBodyDeviceCheckInfos;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCheckInfos: 'DeviceCheckInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCheckInfos: CheckDevicesResponseBodyDeviceCheckInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDevicesResponseBody;
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
      body: CheckDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4010290149170430
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushResponseBody extends $tea.Model {
  /**
   * @example
   * 4010290149170430
   */
  messageId?: string;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CompleteContinuouslyPushResponseBody;
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
      body: CompleteContinuouslyPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 500131
   */
  messageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a692961a92534047ad3625****
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
      target: 'Target',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'string',
      target: 'string',
      targetValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushResponseBody extends $tea.Model {
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  messageId?: string;
  /**
   * @example
   * 500131
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ContinuouslyPushResponseBody;
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
      body: ContinuouslyPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBody extends $tea.Model {
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  summaryAppInfos?: ListSummaryAppsResponseBodySummaryAppInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      summaryAppInfos: 'SummaryAppInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      summaryAppInfos: ListSummaryAppsResponseBodySummaryAppInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSummaryAppsResponseBody;
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
      body: ListSummaryAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  /**
   * @example
   * 6EEF262B-EA7D-41DC-89B9-20F3D1E28194
   */
  requestId?: string;
  tagInfos?: ListTagsResponseBodyTagInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: ListTagsResponseBodyTagInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsResponseBody;
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
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pushTask?: MassPushRequestPushTask[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      pushTask: 'PushTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      pushTask: { 'type': 'array', 'itemType': MassPushRequestPushTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponseBody extends $tea.Model {
  messageIds?: MassPushResponseBodyMessageIds;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageIds: 'MessageIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageIds: MassPushResponseBodyMessageIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MassPushResponseBody;
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
      body: MassPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushRequest extends $tea.Model {
  /**
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  androidBadgeAddNum?: number;
  androidBadgeClass?: string;
  androidBadgeSetNum?: number;
  androidBigBody?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  androidBigTitle?: string;
  /**
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  androidHonorTargetUserType?: number;
  /**
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @example
   * 0
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  androidInboxBody?: string;
  /**
   * @example
   * VOIP
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  androidMusic?: string;
  /**
   * @example
   * 0
   */
  androidNotificationBarPriority?: number;
  /**
   * @example
   * 2
   */
  androidNotificationBarType?: number;
  /**
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @example
   * classification
   */
  androidNotificationVivoChannel?: string;
  /**
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @example
   * BOTH
   */
  androidNotifyType?: string;
  /**
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @example
   * 1
   */
  androidRenderStyle?: number;
  androidTargetUserType?: number;
  /**
   * @example
   * 0
   */
  androidVivoPushMode?: number;
  androidVivoReceiptId?: string;
  /**
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidXiaomiImageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  deviceType?: string;
  /**
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  harmonyAction?: string;
  harmonyActionType?: string;
  harmonyCategory?: string;
  harmonyExtParameters?: string;
  harmonyImageUrl?: string;
  harmonyInboxContent?: string;
  harmonyNotificationSlotType?: string;
  harmonyNotifyId?: number;
  harmonyReceiptId?: string;
  harmonyRemind?: boolean;
  harmonyRemindBody?: string;
  harmonyRemindTitle?: string;
  harmonyRenderStyle?: string;
  harmonyTestMessage?: boolean;
  harmonyUri?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @example
   * accs,huawei,xiaomi
   */
  sendChannels?: string;
  /**
   * @example
   * 0
   * 
   * @deprecated
   */
  sendSpeed?: number;
  /**
   * @example
   * 15
   */
  smsDelaySecs?: number;
  /**
   * @example
   * key1=value1
   */
  smsParams?: string;
  /**
   * @example
   * 0
   */
  smsSendPolicy?: number;
  smsSignName?: string;
  smsTemplateName?: string;
  /**
   * @example
   * false
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @example
   * {“attachment”: “https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @example
   * ""
   */
  iOSMusic?: string;
  /**
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @example
   * true
   */
  iOSRemind?: boolean;
  iOSRemindBody?: string;
  /**
   * @example
   * true
   */
  iOSSilentNotification?: boolean;
  /**
   * @example
   * su\\"b
   */
  iOSSubtitle?: string;
  static names(): { [key: string]: string } {
    return {
      androidActivity: 'AndroidActivity',
      androidBadgeAddNum: 'AndroidBadgeAddNum',
      androidBadgeClass: 'AndroidBadgeClass',
      androidBadgeSetNum: 'AndroidBadgeSetNum',
      androidBigBody: 'AndroidBigBody',
      androidBigPictureUrl: 'AndroidBigPictureUrl',
      androidBigTitle: 'AndroidBigTitle',
      androidExtParameters: 'AndroidExtParameters',
      androidHonorTargetUserType: 'AndroidHonorTargetUserType',
      androidHuaweiReceiptId: 'AndroidHuaweiReceiptId',
      androidHuaweiTargetUserType: 'AndroidHuaweiTargetUserType',
      androidImageUrl: 'AndroidImageUrl',
      androidInboxBody: 'AndroidInboxBody',
      androidMessageHuaweiCategory: 'AndroidMessageHuaweiCategory',
      androidMessageHuaweiUrgency: 'AndroidMessageHuaweiUrgency',
      androidMessageVivoCategory: 'AndroidMessageVivoCategory',
      androidMusic: 'AndroidMusic',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationGroup: 'AndroidNotificationGroup',
      androidNotificationHonorChannel: 'AndroidNotificationHonorChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      androidNotificationVivoChannel: 'AndroidNotificationVivoChannel',
      androidNotificationXiaomiChannel: 'AndroidNotificationXiaomiChannel',
      androidNotifyType: 'AndroidNotifyType',
      androidOpenType: 'AndroidOpenType',
      androidOpenUrl: 'AndroidOpenUrl',
      androidPopupActivity: 'AndroidPopupActivity',
      androidPopupBody: 'AndroidPopupBody',
      androidPopupTitle: 'AndroidPopupTitle',
      androidRemind: 'AndroidRemind',
      androidRenderStyle: 'AndroidRenderStyle',
      androidTargetUserType: 'AndroidTargetUserType',
      androidVivoPushMode: 'AndroidVivoPushMode',
      androidVivoReceiptId: 'AndroidVivoReceiptId',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaomiBigPictureUrl: 'AndroidXiaomiBigPictureUrl',
      androidXiaomiImageUrl: 'AndroidXiaomiImageUrl',
      appKey: 'AppKey',
      body: 'Body',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
      harmonyAction: 'HarmonyAction',
      harmonyActionType: 'HarmonyActionType',
      harmonyCategory: 'HarmonyCategory',
      harmonyExtParameters: 'HarmonyExtParameters',
      harmonyImageUrl: 'HarmonyImageUrl',
      harmonyInboxContent: 'HarmonyInboxContent',
      harmonyNotificationSlotType: 'HarmonyNotificationSlotType',
      harmonyNotifyId: 'HarmonyNotifyId',
      harmonyReceiptId: 'HarmonyReceiptId',
      harmonyRemind: 'HarmonyRemind',
      harmonyRemindBody: 'HarmonyRemindBody',
      harmonyRemindTitle: 'HarmonyRemindTitle',
      harmonyRenderStyle: 'HarmonyRenderStyle',
      harmonyTestMessage: 'HarmonyTestMessage',
      harmonyUri: 'HarmonyUri',
      jobKey: 'JobKey',
      pushTime: 'PushTime',
      pushType: 'PushType',
      sendChannels: 'SendChannels',
      sendSpeed: 'SendSpeed',
      smsDelaySecs: 'SmsDelaySecs',
      smsParams: 'SmsParams',
      smsSendPolicy: 'SmsSendPolicy',
      smsSignName: 'SmsSignName',
      smsTemplateName: 'SmsTemplateName',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      trim: 'Trim',
      iOSApnsEnv: 'iOSApnsEnv',
      iOSBadge: 'iOSBadge',
      iOSBadgeAutoIncrement: 'iOSBadgeAutoIncrement',
      iOSExtParameters: 'iOSExtParameters',
      iOSInterruptionLevel: 'iOSInterruptionLevel',
      iOSMusic: 'iOSMusic',
      iOSMutableContent: 'iOSMutableContent',
      iOSNotificationCategory: 'iOSNotificationCategory',
      iOSNotificationCollapseId: 'iOSNotificationCollapseId',
      iOSNotificationThreadId: 'iOSNotificationThreadId',
      iOSRelevanceScore: 'iOSRelevanceScore',
      iOSRemind: 'iOSRemind',
      iOSRemindBody: 'iOSRemindBody',
      iOSSilentNotification: 'iOSSilentNotification',
      iOSSubtitle: 'iOSSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidActivity: 'string',
      androidBadgeAddNum: 'number',
      androidBadgeClass: 'string',
      androidBadgeSetNum: 'number',
      androidBigBody: 'string',
      androidBigPictureUrl: 'string',
      androidBigTitle: 'string',
      androidExtParameters: 'string',
      androidHonorTargetUserType: 'number',
      androidHuaweiReceiptId: 'string',
      androidHuaweiTargetUserType: 'number',
      androidImageUrl: 'string',
      androidInboxBody: 'string',
      androidMessageHuaweiCategory: 'string',
      androidMessageHuaweiUrgency: 'string',
      androidMessageVivoCategory: 'string',
      androidMusic: 'string',
      androidNotificationBarPriority: 'number',
      androidNotificationBarType: 'number',
      androidNotificationChannel: 'string',
      androidNotificationGroup: 'string',
      androidNotificationHonorChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      androidNotificationNotifyId: 'number',
      androidNotificationVivoChannel: 'string',
      androidNotificationXiaomiChannel: 'string',
      androidNotifyType: 'string',
      androidOpenType: 'string',
      androidOpenUrl: 'string',
      androidPopupActivity: 'string',
      androidPopupBody: 'string',
      androidPopupTitle: 'string',
      androidRemind: 'boolean',
      androidRenderStyle: 'number',
      androidTargetUserType: 'number',
      androidVivoPushMode: 'number',
      androidVivoReceiptId: 'string',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaomiBigPictureUrl: 'string',
      androidXiaomiImageUrl: 'string',
      appKey: 'number',
      body: 'string',
      deviceType: 'string',
      expireTime: 'string',
      harmonyAction: 'string',
      harmonyActionType: 'string',
      harmonyCategory: 'string',
      harmonyExtParameters: 'string',
      harmonyImageUrl: 'string',
      harmonyInboxContent: 'string',
      harmonyNotificationSlotType: 'string',
      harmonyNotifyId: 'number',
      harmonyReceiptId: 'string',
      harmonyRemind: 'boolean',
      harmonyRemindBody: 'string',
      harmonyRemindTitle: 'string',
      harmonyRenderStyle: 'string',
      harmonyTestMessage: 'boolean',
      harmonyUri: 'string',
      jobKey: 'string',
      pushTime: 'string',
      pushType: 'string',
      sendChannels: 'string',
      sendSpeed: 'number',
      smsDelaySecs: 'number',
      smsParams: 'string',
      smsSendPolicy: 'number',
      smsSignName: 'string',
      smsTemplateName: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      trim: 'boolean',
      iOSApnsEnv: 'string',
      iOSBadge: 'number',
      iOSBadgeAutoIncrement: 'boolean',
      iOSExtParameters: 'string',
      iOSInterruptionLevel: 'string',
      iOSMusic: 'string',
      iOSMutableContent: 'boolean',
      iOSNotificationCategory: 'string',
      iOSNotificationCollapseId: 'string',
      iOSNotificationThreadId: 'string',
      iOSRelevanceScore: 'number',
      iOSRemind: 'boolean',
      iOSRemindBody: 'string',
      iOSSilentNotification: 'boolean',
      iOSSubtitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponseBody extends $tea.Model {
  /**
   * @example
   * 501029
   */
  messageId?: string;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushResponseBody;
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
      body: PushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my body
   */
  body?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * all
   */
  targetValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      jobKey: 'JobKey',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      jobKey: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponseBody extends $tea.Model {
  /**
   * @example
   * 501029
   */
  messageId?: string;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMessageToAndroidResponseBody;
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
      body: PushMessageToAndroidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my body
   */
  body?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * all
   */
  targetValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      jobKey: 'JobKey',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      jobKey: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponseBody extends $tea.Model {
  /**
   * @example
   * 501029
   */
  messageId?: string;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMessageToiOSResponseBody;
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
      body: PushMessageToiOSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * body
   */
  body?: string;
  /**
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  extParameters?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponseBody extends $tea.Model {
  /**
   * @example
   * 501029
   */
  messageId?: string;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushNoticeToAndroidResponseBody;
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
      body: PushNoticeToAndroidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hello World
   */
  body?: string;
  /**
   * @example
   * {"k1":"ios","k2":"v2"}
   */
  extParameters?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      apnsEnv: 'ApnsEnv',
      appKey: 'AppKey',
      body: 'Body',
      extParameters: 'ExtParameters',
      jobKey: 'JobKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnsEnv: 'string',
      appKey: 'number',
      body: 'string',
      extParameters: 'string',
      jobKey: 'string',
      target: 'string',
      targetValue: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponseBody extends $tea.Model {
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  messageId?: string;
  /**
   * @example
   * 501029
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushNoticeToiOSResponseBody;
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
      body: PushNoticeToiOSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b165576****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBody extends $tea.Model {
  aliasInfos?: QueryAliasesResponseBodyAliasInfos;
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasInfos: 'AliasInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfos: QueryAliasesResponseBodyAliasInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAliasesResponseBody;
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
      body: QueryAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23419851
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a64ae296f3b04a58a05b30c9****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponseBody extends $tea.Model {
  deviceInfo?: QueryDeviceInfoResponseBodyDeviceInfo;
  /**
   * @example
   * 6EEF262B-EA7D-41DC-89B9-20F3D1E28194
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: QueryDeviceInfoResponseBodyDeviceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceInfoResponseBody;
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
      body: QueryDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TOTAL
   */
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-28T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceType: 'DeviceType',
      endTime: 'EndTime',
      queryType: 'QueryType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceType: 'string',
      endTime: 'string',
      queryType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBody extends $tea.Model {
  appDeviceStats?: QueryDeviceStatResponseBodyAppDeviceStats;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appDeviceStats: 'AppDeviceStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStats: QueryDeviceStatResponseBodyAppDeviceStats,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeviceStatResponseBody;
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
      body: QueryDeviceStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * accountName
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      appKey: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponseBody extends $tea.Model {
  deviceIds?: QueryDevicesByAccountResponseBodyDeviceIds;
  /**
   * @example
   * A8A24108-2AD0-4F6E-81C7-A8A24C2C2AD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: QueryDevicesByAccountResponseBodyDeviceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDevicesByAccountResponseBody;
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
      body: QueryDevicesByAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliasName
   */
  alias?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      appKey: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponseBody extends $tea.Model {
  deviceIds?: QueryDevicesByAliasResponseBodyDeviceIds;
  /**
   * @example
   * 6A9FD644-35A5-40E4-89B0-2021CAEDC1B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceIds: 'DeviceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceIds: QueryDevicesByAliasResponseBodyDeviceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDevicesByAliasResponseBody;
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
      body: QueryDevicesByAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-29T06:24:58Z
   */
  endTime?: string;
  keyword?: string;
  /**
   * @example
   * FFPpkmhCPm*****************xjk=
   */
  nextToken?: string;
  /**
   * @example
   * 8
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @example
   * API
   */
  source?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2021-09-15T02:05:24Z
   */
  startTime?: string;
  /**
   * @example
   * DEVICE
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      endTime: 'EndTime',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      pushType: 'PushType',
      source: 'Source',
      startTime: 'StartTime',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      endTime: 'string',
      keyword: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      pushType: 'string',
      source: 'string',
      startTime: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBody extends $tea.Model {
  /**
   * @example
   * i91D***********kXIh/dVBEQ==
   */
  nextToken?: string;
  /**
   * @example
   * 11
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  pushInfos?: QueryPushRecordsResponseBodyPushInfos;
  /**
   * @example
   * 9B24B396-249D-55E4-8CA1-66C9B50BB734
   */
  requestId?: string;
  /**
   * @example
   * 193
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      pushInfos: 'PushInfos',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      pushInfos: QueryPushRecordsResponseBodyPushInfos,
      requestId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPushRecordsResponseBody;
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
      body: QueryPushRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-29T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-25T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      endTime: 'EndTime',
      granularity: 'Granularity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      endTime: 'string',
      granularity: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBody extends $tea.Model {
  appPushStats?: QueryPushStatByAppResponseBodyAppPushStats;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPushStats: 'AppPushStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPushStats: QueryPushStatByAppResponseBodyAppPushStats,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPushStatByAppResponseBody;
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
      body: QueryPushStatByAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 510427
   */
  messageId?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      messageId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBody extends $tea.Model {
  pushStats?: QueryPushStatByMsgResponseBodyPushStats;
  /**
   * @example
   * CF195C34-98FB-491A-98D7-19CBC1FA880B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushStats: 'PushStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushStats: QueryPushStatByMsgResponseBodyPushStats,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryPushStatByMsgResponseBody;
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
      body: QueryPushStatByMsgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b165576****
   */
  clientKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientKey: 'ClientKey',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      clientKey: 'string',
      keyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBody extends $tea.Model {
  /**
   * @example
   * D68AE5C6-8AAF-46C9-B627-3FDACD1A4168
   */
  requestId?: string;
  tagInfos?: QueryTagsResponseBodyTagInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: QueryTagsResponseBodyTagInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTagsResponseBody;
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
      body: QueryTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-26T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DAY
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2016-07-25T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      endTime: 'EndTime',
      granularity: 'Granularity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      endTime: 'string',
      granularity: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBody extends $tea.Model {
  appDeviceStats?: QueryUniqueDeviceStatResponseBodyAppDeviceStats;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appDeviceStats: 'AppDeviceStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStats: QueryUniqueDeviceStatResponseBodyAppDeviceStats,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryUniqueDeviceStatResponseBody;
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
      body: QueryUniqueDeviceStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_tag
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagResponseBody extends $tea.Model {
  /**
   * @example
   * 23000F3C-0EFE-4C89-82EE-E04F42D37B3C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveTagResponseBody;
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
      body: RemoveTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasRequest extends $tea.Model {
  /**
   * @example
   * test_alias
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  deviceId?: string;
  /**
   * @example
   * true
   */
  unbindAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      unbindAll: 'UnbindAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      appKey: 'number',
      deviceId: 'string',
      unbindAll: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasResponseBody extends $tea.Model {
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindAliasResponseBody;
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
      body: UnbindAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eb5f741d83d04d34807d229999eefa52
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneResponseBody extends $tea.Model {
  /**
   * @example
   * 0D1126F0-F8FF-513D-BAFA-F140447BDED4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindPhoneResponseBody;
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
      body: UnbindPhoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  clientKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  keyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_tag1,test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      clientKey: 'ClientKey',
      keyType: 'KeyType',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      clientKey: 'string',
      keyType: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagResponseBody extends $tea.Model {
  /**
   * @example
   * 159E4422-6624-4750-8943-DFD98D34858C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindTagResponseBody;
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
      body: UnbindTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBodyDevelopmentCertInfo extends $tea.Model {
  /**
   * @example
   * 1470024000000
   */
  exipreTime?: number;
  /**
   * @example
   * EXPIRED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exipreTime: 'ExipreTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exipreTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBodyProductionCertInfo extends $tea.Model {
  /**
   * @example
   * 1764561600000
   */
  exipreTime?: number;
  /**
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exipreTime: 'ExipreTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exipreTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo extends $tea.Model {
  /**
   * @example
   * true
   */
  available?: boolean;
  /**
   * @example
   * ae296f3b04a58a05b30c95f****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      deviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfos extends $tea.Model {
  deviceCheckInfo?: CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceCheckInfo: 'DeviceCheckInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCheckInfo: { 'type': 'array', 'itemType': CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo extends $tea.Model {
  /**
   * @example
   * 23****07
   */
  appKey?: number;
  /**
   * @example
   * abc
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBodySummaryAppInfos extends $tea.Model {
  summaryAppInfo?: ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo[];
  static names(): { [key: string]: string } {
    return {
      summaryAppInfo: 'SummaryAppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaryAppInfo: { 'type': 'array', 'itemType': ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfosTagInfo extends $tea.Model {
  /**
   * @example
   * test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfos extends $tea.Model {
  tagInfo?: ListTagsResponseBodyTagInfosTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': ListTagsResponseBodyTagInfosTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushRequestPushTask extends $tea.Model {
  /**
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @example
   * 99
   */
  androidBadgeAddNum?: number;
  androidBadgeClass?: string;
  /**
   * @example
   * 99
   */
  androidBadgeSetNum?: number;
  androidBigBody?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  androidBigTitle?: string;
  /**
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  androidHonorTargetUserType?: number;
  /**
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @example
   * 1
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  androidInboxBody?: string;
  /**
   * @example
   * VOIP
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  androidMusic?: string;
  /**
   * @example
   * 0
   */
  androidNotificationBarPriority?: number;
  /**
   * @example
   * 2
   */
  androidNotificationBarType?: number;
  /**
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @example
   * 0
   */
  androidNotificationVivoChannel?: string;
  /**
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @example
   * VIBRATE
   */
  androidNotifyType?: string;
  /**
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @example
   * 1
   */
  androidRenderStyle?: string;
  androidTargetUserType?: number;
  /**
   * @example
   * 1
   */
  androidVivoPushMode?: number;
  androidVivoReceiptId?: string;
  /**
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  androidXiaomiImageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  deviceType?: string;
  /**
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  harmonyAction?: string;
  harmonyActionType?: string;
  harmonyCategory?: string;
  harmonyExtParameters?: string;
  harmonyImageUrl?: string;
  harmonyInboxContent?: string;
  harmonyNotificationSlotType?: string;
  harmonyNotifyId?: number;
  harmonyReceiptId?: string;
  harmonyRemind?: boolean;
  harmonyRemindBody?: string;
  harmonyRemindTitle?: string;
  harmonyRenderStyle?: string;
  harmonyTestMessage?: boolean;
  harmonyUri?: string;
  /**
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @example
   * accs,huawei,xiaomi
   */
  sendChannels?: string;
  /**
   * @example
   * 0
   * 
   * @deprecated
   */
  sendSpeed?: number;
  /**
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * deviceid1,deviceid2
   */
  targetValue?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @example
   * {“attachment”: “https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @example
   * ””
   */
  iOSMusic?: string;
  /**
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @example
   * true
   */
  iOSRemind?: boolean;
  iOSRemindBody?: string;
  /**
   * @example
   * true
   */
  iOSSilentNotification?: boolean;
  /**
   * @example
   * subtitle
   */
  iOSSubtitle?: string;
  static names(): { [key: string]: string } {
    return {
      androidActivity: 'AndroidActivity',
      androidBadgeAddNum: 'AndroidBadgeAddNum',
      androidBadgeClass: 'AndroidBadgeClass',
      androidBadgeSetNum: 'AndroidBadgeSetNum',
      androidBigBody: 'AndroidBigBody',
      androidBigPictureUrl: 'AndroidBigPictureUrl',
      androidBigTitle: 'AndroidBigTitle',
      androidExtParameters: 'AndroidExtParameters',
      androidHonorTargetUserType: 'AndroidHonorTargetUserType',
      androidHuaweiReceiptId: 'AndroidHuaweiReceiptId',
      androidHuaweiTargetUserType: 'AndroidHuaweiTargetUserType',
      androidImageUrl: 'AndroidImageUrl',
      androidInboxBody: 'AndroidInboxBody',
      androidMessageHuaweiCategory: 'AndroidMessageHuaweiCategory',
      androidMessageHuaweiUrgency: 'AndroidMessageHuaweiUrgency',
      androidMessageVivoCategory: 'AndroidMessageVivoCategory',
      androidMusic: 'AndroidMusic',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationGroup: 'AndroidNotificationGroup',
      androidNotificationHonorChannel: 'AndroidNotificationHonorChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      androidNotificationVivoChannel: 'AndroidNotificationVivoChannel',
      androidNotificationXiaomiChannel: 'AndroidNotificationXiaomiChannel',
      androidNotifyType: 'AndroidNotifyType',
      androidOpenType: 'AndroidOpenType',
      androidOpenUrl: 'AndroidOpenUrl',
      androidPopupActivity: 'AndroidPopupActivity',
      androidPopupBody: 'AndroidPopupBody',
      androidPopupTitle: 'AndroidPopupTitle',
      androidRemind: 'AndroidRemind',
      androidRenderStyle: 'AndroidRenderStyle',
      androidTargetUserType: 'AndroidTargetUserType',
      androidVivoPushMode: 'AndroidVivoPushMode',
      androidVivoReceiptId: 'AndroidVivoReceiptId',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaomiBigPictureUrl: 'AndroidXiaomiBigPictureUrl',
      androidXiaomiImageUrl: 'AndroidXiaomiImageUrl',
      body: 'Body',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
      harmonyAction: 'HarmonyAction',
      harmonyActionType: 'HarmonyActionType',
      harmonyCategory: 'HarmonyCategory',
      harmonyExtParameters: 'HarmonyExtParameters',
      harmonyImageUrl: 'HarmonyImageUrl',
      harmonyInboxContent: 'HarmonyInboxContent',
      harmonyNotificationSlotType: 'HarmonyNotificationSlotType',
      harmonyNotifyId: 'HarmonyNotifyId',
      harmonyReceiptId: 'HarmonyReceiptId',
      harmonyRemind: 'HarmonyRemind',
      harmonyRemindBody: 'HarmonyRemindBody',
      harmonyRemindTitle: 'HarmonyRemindTitle',
      harmonyRenderStyle: 'HarmonyRenderStyle',
      harmonyTestMessage: 'HarmonyTestMessage',
      harmonyUri: 'HarmonyUri',
      jobKey: 'JobKey',
      pushTime: 'PushTime',
      pushType: 'PushType',
      sendChannels: 'SendChannels',
      sendSpeed: 'SendSpeed',
      storeOffline: 'StoreOffline',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      trim: 'Trim',
      iOSApnsEnv: 'iOSApnsEnv',
      iOSBadge: 'iOSBadge',
      iOSBadgeAutoIncrement: 'iOSBadgeAutoIncrement',
      iOSExtParameters: 'iOSExtParameters',
      iOSInterruptionLevel: 'iOSInterruptionLevel',
      iOSMusic: 'iOSMusic',
      iOSMutableContent: 'iOSMutableContent',
      iOSNotificationCategory: 'iOSNotificationCategory',
      iOSNotificationCollapseId: 'iOSNotificationCollapseId',
      iOSNotificationThreadId: 'iOSNotificationThreadId',
      iOSRelevanceScore: 'iOSRelevanceScore',
      iOSRemind: 'iOSRemind',
      iOSRemindBody: 'iOSRemindBody',
      iOSSilentNotification: 'iOSSilentNotification',
      iOSSubtitle: 'iOSSubtitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidActivity: 'string',
      androidBadgeAddNum: 'number',
      androidBadgeClass: 'string',
      androidBadgeSetNum: 'number',
      androidBigBody: 'string',
      androidBigPictureUrl: 'string',
      androidBigTitle: 'string',
      androidExtParameters: 'string',
      androidHonorTargetUserType: 'number',
      androidHuaweiReceiptId: 'string',
      androidHuaweiTargetUserType: 'number',
      androidImageUrl: 'string',
      androidInboxBody: 'string',
      androidMessageHuaweiCategory: 'string',
      androidMessageHuaweiUrgency: 'string',
      androidMessageVivoCategory: 'string',
      androidMusic: 'string',
      androidNotificationBarPriority: 'number',
      androidNotificationBarType: 'number',
      androidNotificationChannel: 'string',
      androidNotificationGroup: 'string',
      androidNotificationHonorChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      androidNotificationNotifyId: 'number',
      androidNotificationVivoChannel: 'string',
      androidNotificationXiaomiChannel: 'string',
      androidNotifyType: 'string',
      androidOpenType: 'string',
      androidOpenUrl: 'string',
      androidPopupActivity: 'string',
      androidPopupBody: 'string',
      androidPopupTitle: 'string',
      androidRemind: 'boolean',
      androidRenderStyle: 'string',
      androidTargetUserType: 'number',
      androidVivoPushMode: 'number',
      androidVivoReceiptId: 'string',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaomiBigPictureUrl: 'string',
      androidXiaomiImageUrl: 'string',
      body: 'string',
      deviceType: 'string',
      expireTime: 'string',
      harmonyAction: 'string',
      harmonyActionType: 'string',
      harmonyCategory: 'string',
      harmonyExtParameters: 'string',
      harmonyImageUrl: 'string',
      harmonyInboxContent: 'string',
      harmonyNotificationSlotType: 'string',
      harmonyNotifyId: 'number',
      harmonyReceiptId: 'string',
      harmonyRemind: 'boolean',
      harmonyRemindBody: 'string',
      harmonyRemindTitle: 'string',
      harmonyRenderStyle: 'string',
      harmonyTestMessage: 'boolean',
      harmonyUri: 'string',
      jobKey: 'string',
      pushTime: 'string',
      pushType: 'string',
      sendChannels: 'string',
      sendSpeed: 'number',
      storeOffline: 'boolean',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      trim: 'boolean',
      iOSApnsEnv: 'string',
      iOSBadge: 'number',
      iOSBadgeAutoIncrement: 'boolean',
      iOSExtParameters: 'string',
      iOSInterruptionLevel: 'string',
      iOSMusic: 'string',
      iOSMutableContent: 'boolean',
      iOSNotificationCategory: 'string',
      iOSNotificationCollapseId: 'string',
      iOSNotificationThreadId: 'string',
      iOSRelevanceScore: 'number',
      iOSRemind: 'boolean',
      iOSRemindBody: 'string',
      iOSSilentNotification: 'boolean',
      iOSSubtitle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponseBodyMessageIds extends $tea.Model {
  messageId?: string[];
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBodyAliasInfosAliasInfo extends $tea.Model {
  /**
   * @example
   * test_alias1
   */
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBodyAliasInfos extends $tea.Model {
  aliasInfo?: QueryAliasesResponseBodyAliasInfosAliasInfo[];
  static names(): { [key: string]: string } {
    return {
      aliasInfo: 'AliasInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasInfo: { 'type': 'array', 'itemType': QueryAliasesResponseBodyAliasInfosAliasInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponseBodyDeviceInfo extends $tea.Model {
  /**
   * @example
   * test@aliyun.com
   */
  account?: string;
  /**
   * @example
   * test_alias,test_alias2
   */
  alias?: string;
  brand?: string;
  /**
   * @example
   * a64ae296f3b04a58a05b30c95****
   */
  deviceId?: string;
  /**
   * @example
   * 5ecc7b4012aaa801b63******5543ccbda6b4930d09629e936e1ac4b762a7df
   */
  deviceToken?: string;
  /**
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @example
   * 2018-03-27T02:19:40Z
   */
  lastOnlineTime?: string;
  model?: string;
  /**
   * @example
   * false
   */
  online?: boolean;
  /**
   * @example
   * 133********
   */
  phoneNumber?: string;
  /**
   * @example
   * true
   */
  pushEnabled?: boolean;
  /**
   * @example
   * test_tag,test_tag2
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      alias: 'Alias',
      brand: 'Brand',
      deviceId: 'DeviceId',
      deviceToken: 'DeviceToken',
      deviceType: 'DeviceType',
      lastOnlineTime: 'LastOnlineTime',
      model: 'Model',
      online: 'Online',
      phoneNumber: 'PhoneNumber',
      pushEnabled: 'PushEnabled',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      alias: 'string',
      brand: 'string',
      deviceId: 'string',
      deviceToken: 'string',
      deviceType: 'string',
      lastOnlineTime: 'string',
      model: 'string',
      online: 'boolean',
      phoneNumber: 'string',
      pushEnabled: 'boolean',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $tea.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * iOS
   */
  deviceType?: string;
  /**
   * @example
   * 2016-07-28T16:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      deviceType: 'DeviceType',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      deviceType: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBodyAppDeviceStats extends $tea.Model {
  appDeviceStat?: QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat[];
  static names(): { [key: string]: string } {
    return {
      appDeviceStat: 'AppDeviceStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStat: { 'type': 'array', 'itemType': QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponseBodyDeviceIds extends $tea.Model {
  deviceId?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponseBodyDeviceIds extends $tea.Model {
  deviceId?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBodyPushInfosPushInfo extends $tea.Model {
  /**
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @example
   * abcd
   */
  body?: string;
  /**
   * @example
   * ANDROID
   */
  deviceType?: string;
  /**
   * @example
   * 510431
   */
  messageId?: string;
  /**
   * @example
   * 2021-09-15T02:05:24Z
   */
  pushTime?: string;
  /**
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @example
   * DEVICE
   */
  source?: string;
  /**
   * @example
   * SENT
   */
  status?: string;
  /**
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @example
   * sssss
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      deviceType: 'DeviceType',
      messageId: 'MessageId',
      pushTime: 'PushTime',
      pushType: 'PushType',
      source: 'Source',
      status: 'Status',
      target: 'Target',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      deviceType: 'string',
      messageId: 'string',
      pushTime: 'string',
      pushType: 'string',
      source: 'string',
      status: 'string',
      target: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBodyPushInfos extends $tea.Model {
  pushInfo?: QueryPushRecordsResponseBodyPushInfosPushInfo[];
  static names(): { [key: string]: string } {
    return {
      pushInfo: 'PushInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushInfo: { 'type': 'array', 'itemType': QueryPushRecordsResponseBodyPushInfosPushInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBodyAppPushStatsAppPushStat extends $tea.Model {
  /**
   * @example
   * 120
   */
  acceptCount?: number;
  /**
   * @example
   * 10
   */
  deletedCount?: number;
  /**
   * @example
   * 30
   */
  openedCount?: number;
  /**
   * @example
   * 60
   */
  receivedCount?: number;
  /**
   * @example
   * 100
   */
  sentCount?: number;
  /**
   * @example
   * 0
   */
  smsFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveSuccessCount?: number;
  /**
   * @example
   * 0
   */
  smsSentCount?: number;
  /**
   * @example
   * 0
   */
  smsSkipCount?: number;
  /**
   * @example
   * 2016-07-25T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      acceptCount: 'AcceptCount',
      deletedCount: 'DeletedCount',
      openedCount: 'OpenedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsFailedCount: 'SmsFailedCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSentCount: 'SmsSentCount',
      smsSkipCount: 'SmsSkipCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptCount: 'number',
      deletedCount: 'number',
      openedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsFailedCount: 'number',
      smsReceiveFailedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSentCount: 'number',
      smsSkipCount: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBodyAppPushStats extends $tea.Model {
  appPushStat?: QueryPushStatByAppResponseBodyAppPushStatsAppPushStat[];
  static names(): { [key: string]: string } {
    return {
      appPushStat: 'AppPushStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPushStat: { 'type': 'array', 'itemType': QueryPushStatByAppResponseBodyAppPushStatsAppPushStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBodyPushStatsPushStat extends $tea.Model {
  /**
   * @example
   * 120
   */
  acceptCount?: number;
  /**
   * @example
   * 10
   */
  deletedCount?: number;
  /**
   * @example
   * 510427
   */
  messageId?: string;
  /**
   * @example
   * 30
   */
  openedCount?: number;
  /**
   * @example
   * 60
   */
  receivedCount?: number;
  /**
   * @example
   * 100
   */
  sentCount?: number;
  /**
   * @example
   * 0
   */
  smsFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveSuccessCount?: number;
  /**
   * @example
   * 0
   */
  smsSentCount?: number;
  /**
   * @example
   * 0
   */
  smsSkipCount?: number;
  static names(): { [key: string]: string } {
    return {
      acceptCount: 'AcceptCount',
      deletedCount: 'DeletedCount',
      messageId: 'MessageId',
      openedCount: 'OpenedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsFailedCount: 'SmsFailedCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSentCount: 'SmsSentCount',
      smsSkipCount: 'SmsSkipCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptCount: 'number',
      deletedCount: 'number',
      messageId: 'string',
      openedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsFailedCount: 'number',
      smsReceiveFailedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSentCount: 'number',
      smsSkipCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBodyPushStats extends $tea.Model {
  pushStat?: QueryPushStatByMsgResponseBodyPushStatsPushStat[];
  static names(): { [key: string]: string } {
    return {
      pushStat: 'PushStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushStat: { 'type': 'array', 'itemType': QueryPushStatByMsgResponseBodyPushStatsPushStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBodyTagInfosTagInfo extends $tea.Model {
  /**
   * @example
   * test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBodyTagInfos extends $tea.Model {
  tagInfo?: QueryTagsResponseBodyTagInfosTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': QueryTagsResponseBodyTagInfosTagInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $tea.Model {
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * 2016-07-25T00:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBodyAppDeviceStats extends $tea.Model {
  appDeviceStat?: QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat[];
  static names(): { [key: string]: string } {
    return {
      appDeviceStat: 'AppDeviceStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDeviceStat: { 'type': 'array', 'itemType': QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "cloudpush.aliyuncs.com",
      'ap-northeast-2-pop': "cloudpush.aliyuncs.com",
      'ap-south-1': "cloudpush.aliyuncs.com",
      'ap-southeast-1': "cloudpush.aliyuncs.com",
      'ap-southeast-2': "cloudpush.aliyuncs.com",
      'ap-southeast-3': "cloudpush.aliyuncs.com",
      'ap-southeast-5': "cloudpush.aliyuncs.com",
      'cn-beijing': "cloudpush.aliyuncs.com",
      'cn-beijing-finance-1': "cloudpush.aliyuncs.com",
      'cn-beijing-finance-pop': "cloudpush.aliyuncs.com",
      'cn-beijing-gov-1': "cloudpush.aliyuncs.com",
      'cn-beijing-nu16-b01': "cloudpush.aliyuncs.com",
      'cn-chengdu': "cloudpush.aliyuncs.com",
      'cn-edge-1': "cloudpush.aliyuncs.com",
      'cn-fujian': "cloudpush.aliyuncs.com",
      'cn-haidian-cm12-c01': "cloudpush.aliyuncs.com",
      'cn-hangzhou': "cloudpush.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cloudpush.aliyuncs.com",
      'cn-hangzhou-finance': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cloudpush.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cloudpush.aliyuncs.com",
      'cn-hangzhou-test-306': "cloudpush.aliyuncs.com",
      'cn-hongkong': "cloudpush.aliyuncs.com",
      'cn-hongkong-finance-pop': "cloudpush.aliyuncs.com",
      'cn-huhehaote': "cloudpush.aliyuncs.com",
      'cn-north-2-gov-1': "cloudpush.aliyuncs.com",
      'cn-qingdao': "cloudpush.aliyuncs.com",
      'cn-qingdao-nebula': "cloudpush.aliyuncs.com",
      'cn-shanghai': "cloudpush.aliyuncs.com",
      'cn-shanghai-et15-b01': "cloudpush.aliyuncs.com",
      'cn-shanghai-et2-b01': "cloudpush.aliyuncs.com",
      'cn-shanghai-finance-1': "cloudpush.aliyuncs.com",
      'cn-shanghai-inner': "cloudpush.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cloudpush.aliyuncs.com",
      'cn-shenzhen': "cloudpush.aliyuncs.com",
      'cn-shenzhen-finance-1': "cloudpush.aliyuncs.com",
      'cn-shenzhen-inner': "cloudpush.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cloudpush.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cloudpush.aliyuncs.com",
      'cn-wuhan': "cloudpush.aliyuncs.com",
      'cn-yushanfang': "cloudpush.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cloudpush.aliyuncs.com",
      'cn-zhangjiakou': "cloudpush.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cloudpush.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cloudpush.aliyuncs.com",
      'eu-central-1': "cloudpush.aliyuncs.com",
      'eu-west-1': "cloudpush.aliyuncs.com",
      'eu-west-1-oxs': "cloudpush.aliyuncs.com",
      'me-east-1': "cloudpush.aliyuncs.com",
      'rus-west-1-pop': "cloudpush.aliyuncs.com",
      'us-east-1': "cloudpush.aliyuncs.com",
      'us-west-1': "cloudpush.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("push", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request - BindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAliasResponse
   */
  async bindAliasWithOptions(request: BindAliasRequest, runtime: $Util.RuntimeOptions): Promise<BindAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindAliasResponse>(await this.callApi(params, req, runtime), new BindAliasResponse({}));
  }

  /**
   * @param request - BindAliasRequest
   * @returns BindAliasResponse
   */
  async bindAlias(request: BindAliasRequest): Promise<BindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAliasWithOptions(request, runtime);
  }

  /**
   * @param request - BindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPhoneResponse
   */
  async bindPhoneWithOptions(request: BindPhoneRequest, runtime: $Util.RuntimeOptions): Promise<BindPhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindPhone",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindPhoneResponse>(await this.callApi(params, req, runtime), new BindPhoneResponse({}));
  }

  /**
   * @param request - BindPhoneRequest
   * @returns BindPhoneResponse
   */
  async bindPhone(request: BindPhoneRequest): Promise<BindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPhoneWithOptions(request, runtime);
  }

  /**
   * @param request - BindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindTagResponse
   */
  async bindTagWithOptions(request: BindTagRequest, runtime: $Util.RuntimeOptions): Promise<BindTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!Util.isUnset(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BindTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindTagResponse>(await this.callApi(params, req, runtime), new BindTagResponse({}));
  }

  /**
   * @param request - BindTagRequest
   * @returns BindTagResponse
   */
  async bindTag(request: BindTagRequest): Promise<BindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTagWithOptions(request, runtime);
  }

  /**
   * @param request - CancelPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPushResponse
   */
  async cancelPushWithOptions(request: CancelPushRequest, runtime: $Util.RuntimeOptions): Promise<CancelPushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPushResponse>(await this.callApi(params, req, runtime), new CancelPushResponse({}));
  }

  /**
   * @param request - CancelPushRequest
   * @returns CancelPushResponse
   */
  async cancelPush(request: CancelPushRequest): Promise<CancelPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPushWithOptions(request, runtime);
  }

  /**
   * @param request - CheckCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCertificateResponse
   */
  async checkCertificateWithOptions(request: CheckCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CheckCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckCertificate",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckCertificateResponse>(await this.callApi(params, req, runtime), new CheckCertificateResponse({}));
  }

  /**
   * @param request - CheckCertificateRequest
   * @returns CheckCertificateResponse
   */
  async checkCertificate(request: CheckCertificateRequest): Promise<CheckCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCertificateWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDeviceResponse
   */
  // Deprecated
  async checkDeviceWithOptions(request: CheckDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CheckDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDevice",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDeviceResponse>(await this.callApi(params, req, runtime), new CheckDeviceResponse({}));
  }

  /**
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @returns CheckDeviceResponse
   */
  // Deprecated
  async checkDevice(request: CheckDeviceRequest): Promise<CheckDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDeviceWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDevicesResponse
   */
  async checkDevicesWithOptions(request: CheckDevicesRequest, runtime: $Util.RuntimeOptions): Promise<CheckDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckDevices",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDevicesResponse>(await this.callApi(params, req, runtime), new CheckDevicesResponse({}));
  }

  /**
   * @param request - CheckDevicesRequest
   * @returns CheckDevicesResponse
   */
  async checkDevices(request: CheckDevicesRequest): Promise<CheckDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDevicesWithOptions(request, runtime);
  }

  /**
   * @param request - CompleteContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPushWithOptions(request: CompleteContinuouslyPushRequest, runtime: $Util.RuntimeOptions): Promise<CompleteContinuouslyPushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompleteContinuouslyPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompleteContinuouslyPushResponse>(await this.callApi(params, req, runtime), new CompleteContinuouslyPushResponse({}));
  }

  /**
   * @param request - CompleteContinuouslyPushRequest
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPush(request: CompleteContinuouslyPushRequest): Promise<CompleteContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeContinuouslyPushWithOptions(request, runtime);
  }

  /**
   * @param request - ContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPushWithOptions(request: ContinuouslyPushRequest, runtime: $Util.RuntimeOptions): Promise<ContinuouslyPushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ContinuouslyPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ContinuouslyPushResponse>(await this.callApi(params, req, runtime), new ContinuouslyPushResponse({}));
  }

  /**
   * @param request - ContinuouslyPushRequest
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPush(request: ContinuouslyPushRequest): Promise<ContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuouslyPushWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * 
   * @param request - ListSummaryAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryAppsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSummaryAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListSummaryApps",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSummaryAppsResponse>(await this.callApi(params, req, runtime), new ListSummaryAppsResponse({}));
  }

  /**
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryApps(): Promise<ListSummaryAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSummaryAppsWithOptions(runtime);
  }

  /**
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTags",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsResponse>(await this.callApi(params, req, runtime), new ListTagsResponse({}));
  }

  /**
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * @param request - MassPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MassPushResponse
   */
  async massPushWithOptions(request: MassPushRequest, runtime: $Util.RuntimeOptions): Promise<MassPushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pushTask)) {
      body["PushTask"] = request.pushTask;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MassPush",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MassPushResponse>(await this.callApi(params, req, runtime), new MassPushResponse({}));
  }

  /**
   * @param request - MassPushRequest
   * @returns MassPushResponse
   */
  async massPush(request: MassPushRequest): Promise<MassPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.massPushWithOptions(request, runtime);
  }

  /**
   * @param request - PushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResponse
   */
  async pushWithOptions(request: PushRequest, runtime: $Util.RuntimeOptions): Promise<PushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidActivity)) {
      query["AndroidActivity"] = request.androidActivity;
    }

    if (!Util.isUnset(request.androidBadgeAddNum)) {
      query["AndroidBadgeAddNum"] = request.androidBadgeAddNum;
    }

    if (!Util.isUnset(request.androidBadgeClass)) {
      query["AndroidBadgeClass"] = request.androidBadgeClass;
    }

    if (!Util.isUnset(request.androidBadgeSetNum)) {
      query["AndroidBadgeSetNum"] = request.androidBadgeSetNum;
    }

    if (!Util.isUnset(request.androidBigBody)) {
      query["AndroidBigBody"] = request.androidBigBody;
    }

    if (!Util.isUnset(request.androidBigPictureUrl)) {
      query["AndroidBigPictureUrl"] = request.androidBigPictureUrl;
    }

    if (!Util.isUnset(request.androidBigTitle)) {
      query["AndroidBigTitle"] = request.androidBigTitle;
    }

    if (!Util.isUnset(request.androidExtParameters)) {
      query["AndroidExtParameters"] = request.androidExtParameters;
    }

    if (!Util.isUnset(request.androidHonorTargetUserType)) {
      query["AndroidHonorTargetUserType"] = request.androidHonorTargetUserType;
    }

    if (!Util.isUnset(request.androidHuaweiReceiptId)) {
      query["AndroidHuaweiReceiptId"] = request.androidHuaweiReceiptId;
    }

    if (!Util.isUnset(request.androidHuaweiTargetUserType)) {
      query["AndroidHuaweiTargetUserType"] = request.androidHuaweiTargetUserType;
    }

    if (!Util.isUnset(request.androidImageUrl)) {
      query["AndroidImageUrl"] = request.androidImageUrl;
    }

    if (!Util.isUnset(request.androidInboxBody)) {
      query["AndroidInboxBody"] = request.androidInboxBody;
    }

    if (!Util.isUnset(request.androidMessageHuaweiCategory)) {
      query["AndroidMessageHuaweiCategory"] = request.androidMessageHuaweiCategory;
    }

    if (!Util.isUnset(request.androidMessageHuaweiUrgency)) {
      query["AndroidMessageHuaweiUrgency"] = request.androidMessageHuaweiUrgency;
    }

    if (!Util.isUnset(request.androidMessageVivoCategory)) {
      query["AndroidMessageVivoCategory"] = request.androidMessageVivoCategory;
    }

    if (!Util.isUnset(request.androidMusic)) {
      query["AndroidMusic"] = request.androidMusic;
    }

    if (!Util.isUnset(request.androidNotificationBarPriority)) {
      query["AndroidNotificationBarPriority"] = request.androidNotificationBarPriority;
    }

    if (!Util.isUnset(request.androidNotificationBarType)) {
      query["AndroidNotificationBarType"] = request.androidNotificationBarType;
    }

    if (!Util.isUnset(request.androidNotificationChannel)) {
      query["AndroidNotificationChannel"] = request.androidNotificationChannel;
    }

    if (!Util.isUnset(request.androidNotificationGroup)) {
      query["AndroidNotificationGroup"] = request.androidNotificationGroup;
    }

    if (!Util.isUnset(request.androidNotificationHonorChannel)) {
      query["AndroidNotificationHonorChannel"] = request.androidNotificationHonorChannel;
    }

    if (!Util.isUnset(request.androidNotificationHuaweiChannel)) {
      query["AndroidNotificationHuaweiChannel"] = request.androidNotificationHuaweiChannel;
    }

    if (!Util.isUnset(request.androidNotificationNotifyId)) {
      query["AndroidNotificationNotifyId"] = request.androidNotificationNotifyId;
    }

    if (!Util.isUnset(request.androidNotificationVivoChannel)) {
      query["AndroidNotificationVivoChannel"] = request.androidNotificationVivoChannel;
    }

    if (!Util.isUnset(request.androidNotificationXiaomiChannel)) {
      query["AndroidNotificationXiaomiChannel"] = request.androidNotificationXiaomiChannel;
    }

    if (!Util.isUnset(request.androidNotifyType)) {
      query["AndroidNotifyType"] = request.androidNotifyType;
    }

    if (!Util.isUnset(request.androidOpenType)) {
      query["AndroidOpenType"] = request.androidOpenType;
    }

    if (!Util.isUnset(request.androidOpenUrl)) {
      query["AndroidOpenUrl"] = request.androidOpenUrl;
    }

    if (!Util.isUnset(request.androidPopupActivity)) {
      query["AndroidPopupActivity"] = request.androidPopupActivity;
    }

    if (!Util.isUnset(request.androidPopupBody)) {
      query["AndroidPopupBody"] = request.androidPopupBody;
    }

    if (!Util.isUnset(request.androidPopupTitle)) {
      query["AndroidPopupTitle"] = request.androidPopupTitle;
    }

    if (!Util.isUnset(request.androidRemind)) {
      query["AndroidRemind"] = request.androidRemind;
    }

    if (!Util.isUnset(request.androidRenderStyle)) {
      query["AndroidRenderStyle"] = request.androidRenderStyle;
    }

    if (!Util.isUnset(request.androidTargetUserType)) {
      query["AndroidTargetUserType"] = request.androidTargetUserType;
    }

    if (!Util.isUnset(request.androidVivoPushMode)) {
      query["AndroidVivoPushMode"] = request.androidVivoPushMode;
    }

    if (!Util.isUnset(request.androidVivoReceiptId)) {
      query["AndroidVivoReceiptId"] = request.androidVivoReceiptId;
    }

    if (!Util.isUnset(request.androidXiaoMiActivity)) {
      query["AndroidXiaoMiActivity"] = request.androidXiaoMiActivity;
    }

    if (!Util.isUnset(request.androidXiaoMiNotifyBody)) {
      query["AndroidXiaoMiNotifyBody"] = request.androidXiaoMiNotifyBody;
    }

    if (!Util.isUnset(request.androidXiaoMiNotifyTitle)) {
      query["AndroidXiaoMiNotifyTitle"] = request.androidXiaoMiNotifyTitle;
    }

    if (!Util.isUnset(request.androidXiaomiBigPictureUrl)) {
      query["AndroidXiaomiBigPictureUrl"] = request.androidXiaomiBigPictureUrl;
    }

    if (!Util.isUnset(request.androidXiaomiImageUrl)) {
      query["AndroidXiaomiImageUrl"] = request.androidXiaomiImageUrl;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.harmonyAction)) {
      query["HarmonyAction"] = request.harmonyAction;
    }

    if (!Util.isUnset(request.harmonyActionType)) {
      query["HarmonyActionType"] = request.harmonyActionType;
    }

    if (!Util.isUnset(request.harmonyCategory)) {
      query["HarmonyCategory"] = request.harmonyCategory;
    }

    if (!Util.isUnset(request.harmonyExtParameters)) {
      query["HarmonyExtParameters"] = request.harmonyExtParameters;
    }

    if (!Util.isUnset(request.harmonyImageUrl)) {
      query["HarmonyImageUrl"] = request.harmonyImageUrl;
    }

    if (!Util.isUnset(request.harmonyInboxContent)) {
      query["HarmonyInboxContent"] = request.harmonyInboxContent;
    }

    if (!Util.isUnset(request.harmonyNotificationSlotType)) {
      query["HarmonyNotificationSlotType"] = request.harmonyNotificationSlotType;
    }

    if (!Util.isUnset(request.harmonyNotifyId)) {
      query["HarmonyNotifyId"] = request.harmonyNotifyId;
    }

    if (!Util.isUnset(request.harmonyReceiptId)) {
      query["HarmonyReceiptId"] = request.harmonyReceiptId;
    }

    if (!Util.isUnset(request.harmonyRemind)) {
      query["HarmonyRemind"] = request.harmonyRemind;
    }

    if (!Util.isUnset(request.harmonyRemindBody)) {
      query["HarmonyRemindBody"] = request.harmonyRemindBody;
    }

    if (!Util.isUnset(request.harmonyRemindTitle)) {
      query["HarmonyRemindTitle"] = request.harmonyRemindTitle;
    }

    if (!Util.isUnset(request.harmonyRenderStyle)) {
      query["HarmonyRenderStyle"] = request.harmonyRenderStyle;
    }

    if (!Util.isUnset(request.harmonyTestMessage)) {
      query["HarmonyTestMessage"] = request.harmonyTestMessage;
    }

    if (!Util.isUnset(request.harmonyUri)) {
      query["HarmonyUri"] = request.harmonyUri;
    }

    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.pushTime)) {
      query["PushTime"] = request.pushTime;
    }

    if (!Util.isUnset(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!Util.isUnset(request.sendChannels)) {
      query["SendChannels"] = request.sendChannels;
    }

    if (!Util.isUnset(request.sendSpeed)) {
      query["SendSpeed"] = request.sendSpeed;
    }

    if (!Util.isUnset(request.smsDelaySecs)) {
      query["SmsDelaySecs"] = request.smsDelaySecs;
    }

    if (!Util.isUnset(request.smsParams)) {
      query["SmsParams"] = request.smsParams;
    }

    if (!Util.isUnset(request.smsSendPolicy)) {
      query["SmsSendPolicy"] = request.smsSendPolicy;
    }

    if (!Util.isUnset(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!Util.isUnset(request.smsTemplateName)) {
      query["SmsTemplateName"] = request.smsTemplateName;
    }

    if (!Util.isUnset(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.trim)) {
      query["Trim"] = request.trim;
    }

    if (!Util.isUnset(request.iOSApnsEnv)) {
      query["iOSApnsEnv"] = request.iOSApnsEnv;
    }

    if (!Util.isUnset(request.iOSBadge)) {
      query["iOSBadge"] = request.iOSBadge;
    }

    if (!Util.isUnset(request.iOSBadgeAutoIncrement)) {
      query["iOSBadgeAutoIncrement"] = request.iOSBadgeAutoIncrement;
    }

    if (!Util.isUnset(request.iOSExtParameters)) {
      query["iOSExtParameters"] = request.iOSExtParameters;
    }

    if (!Util.isUnset(request.iOSInterruptionLevel)) {
      query["iOSInterruptionLevel"] = request.iOSInterruptionLevel;
    }

    if (!Util.isUnset(request.iOSMusic)) {
      query["iOSMusic"] = request.iOSMusic;
    }

    if (!Util.isUnset(request.iOSMutableContent)) {
      query["iOSMutableContent"] = request.iOSMutableContent;
    }

    if (!Util.isUnset(request.iOSNotificationCategory)) {
      query["iOSNotificationCategory"] = request.iOSNotificationCategory;
    }

    if (!Util.isUnset(request.iOSNotificationCollapseId)) {
      query["iOSNotificationCollapseId"] = request.iOSNotificationCollapseId;
    }

    if (!Util.isUnset(request.iOSNotificationThreadId)) {
      query["iOSNotificationThreadId"] = request.iOSNotificationThreadId;
    }

    if (!Util.isUnset(request.iOSRelevanceScore)) {
      query["iOSRelevanceScore"] = request.iOSRelevanceScore;
    }

    if (!Util.isUnset(request.iOSRemind)) {
      query["iOSRemind"] = request.iOSRemind;
    }

    if (!Util.isUnset(request.iOSRemindBody)) {
      query["iOSRemindBody"] = request.iOSRemindBody;
    }

    if (!Util.isUnset(request.iOSSilentNotification)) {
      query["iOSSilentNotification"] = request.iOSSilentNotification;
    }

    if (!Util.isUnset(request.iOSSubtitle)) {
      query["iOSSubtitle"] = request.iOSSubtitle;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Push",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushResponse>(await this.callApi(params, req, runtime), new PushResponse({}));
  }

  /**
   * @param request - PushRequest
   * @returns PushResponse
   */
  async push(request: PushRequest): Promise<PushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushWithOptions(request, runtime);
  }

  /**
   * @param request - PushMessageToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroidWithOptions(request: PushMessageToAndroidRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageToAndroidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushMessageToAndroid",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMessageToAndroidResponse>(await this.callApi(params, req, runtime), new PushMessageToAndroidResponse({}));
  }

  /**
   * @param request - PushMessageToAndroidRequest
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroid(request: PushMessageToAndroidRequest): Promise<PushMessageToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToAndroidWithOptions(request, runtime);
  }

  /**
   * @param request - PushMessageToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOSWithOptions(request: PushMessageToiOSRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageToiOSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushMessageToiOS",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMessageToiOSResponse>(await this.callApi(params, req, runtime), new PushMessageToiOSResponse({}));
  }

  /**
   * @param request - PushMessageToiOSRequest
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOS(request: PushMessageToiOSRequest): Promise<PushMessageToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToiOSWithOptions(request, runtime);
  }

  /**
   * @param request - PushNoticeToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroidWithOptions(request: PushNoticeToAndroidRequest, runtime: $Util.RuntimeOptions): Promise<PushNoticeToAndroidResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushNoticeToAndroid",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushNoticeToAndroidResponse>(await this.callApi(params, req, runtime), new PushNoticeToAndroidResponse({}));
  }

  /**
   * @param request - PushNoticeToAndroidRequest
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroid(request: PushNoticeToAndroidRequest): Promise<PushNoticeToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToAndroidWithOptions(request, runtime);
  }

  /**
   * @param request - PushNoticeToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOSWithOptions(request: PushNoticeToiOSRequest, runtime: $Util.RuntimeOptions): Promise<PushNoticeToiOSResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apnsEnv)) {
      query["ApnsEnv"] = request.apnsEnv;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.body)) {
      query["Body"] = request.body;
    }

    if (!Util.isUnset(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!Util.isUnset(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    if (!Util.isUnset(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PushNoticeToiOS",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushNoticeToiOSResponse>(await this.callApi(params, req, runtime), new PushNoticeToiOSResponse({}));
  }

  /**
   * @param request - PushNoticeToiOSRequest
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOS(request: PushNoticeToiOSRequest): Promise<PushNoticeToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToiOSWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAliasesResponse
   */
  async queryAliasesWithOptions(request: QueryAliasesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAliasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryAliases",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAliasesResponse>(await this.callApi(params, req, runtime), new QueryAliasesResponse({}));
  }

  /**
   * @param request - QueryAliasesRequest
   * @returns QueryAliasesResponse
   */
  async queryAliases(request: QueryAliasesRequest): Promise<QueryAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAliasesWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfoWithOptions(request: QueryDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceInfo",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceInfoResponse>(await this.callApi(params, req, runtime), new QueryDeviceInfoResponse({}));
  }

  /**
   * @param request - QueryDeviceInfoRequest
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfo(request: QueryDeviceInfoRequest): Promise<QueryDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStatWithOptions(request: QueryDeviceStatRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDeviceStat",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDeviceStatResponse>(await this.callApi(params, req, runtime), new QueryDeviceStatResponse({}));
  }

  /**
   * @param request - QueryDeviceStatRequest
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStat(request: QueryDeviceStatRequest): Promise<QueryDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceStatWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDevicesByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccountWithOptions(request: QueryDevicesByAccountRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicesByAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.account)) {
      query["Account"] = request.account;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicesByAccount",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicesByAccountResponse>(await this.callApi(params, req, runtime), new QueryDevicesByAccountResponse({}));
  }

  /**
   * @param request - QueryDevicesByAccountRequest
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccount(request: QueryDevicesByAccountRequest): Promise<QueryDevicesByAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAccountWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDevicesByAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAliasWithOptions(request: QueryDevicesByAliasRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicesByAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryDevicesByAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDevicesByAliasResponse>(await this.callApi(params, req, runtime), new QueryDevicesByAliasResponse({}));
  }

  /**
   * @param request - QueryDevicesByAliasRequest
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAlias(request: QueryDevicesByAliasRequest): Promise<QueryDevicesByAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAliasWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecordsWithOptions(request: QueryPushRecordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushRecords",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushRecordsResponse>(await this.callApi(params, req, runtime), new QueryPushRecordsResponse({}));
  }

  /**
   * @param request - QueryPushRecordsRequest
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecords(request: QueryPushRecordsRequest): Promise<QueryPushRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushRecordsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushStatByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByAppWithOptions(request: QueryPushStatByAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushStatByAppResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushStatByApp",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushStatByAppResponse>(await this.callApi(params, req, runtime), new QueryPushStatByAppResponse({}));
  }

  /**
   * @param request - QueryPushStatByAppRequest
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByApp(request: QueryPushStatByAppRequest): Promise<QueryPushStatByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByAppWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushStatByMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsgWithOptions(request: QueryPushStatByMsgRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushStatByMsgResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushStatByMsg",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushStatByMsgResponse>(await this.callApi(params, req, runtime), new QueryPushStatByMsgResponse({}));
  }

  /**
   * @param request - QueryPushStatByMsgRequest
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsg(request: QueryPushStatByMsgRequest): Promise<QueryPushStatByMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByMsgWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagsResponse
   */
  async queryTagsWithOptions(request: QueryTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!Util.isUnset(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTags",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTagsResponse>(await this.callApi(params, req, runtime), new QueryTagsResponse({}));
  }

  /**
   * @param request - QueryTagsRequest
   * @returns QueryTagsResponse
   */
  async queryTags(request: QueryTagsRequest): Promise<QueryTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUniqueDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStatWithOptions(request: QueryUniqueDeviceStatRequest, runtime: $Util.RuntimeOptions): Promise<QueryUniqueDeviceStatResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryUniqueDeviceStat",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryUniqueDeviceStatResponse>(await this.callApi(params, req, runtime), new QueryUniqueDeviceStatResponse({}));
  }

  /**
   * @param request - QueryUniqueDeviceStatRequest
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStat(request: QueryUniqueDeviceStatRequest): Promise<QueryUniqueDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUniqueDeviceStatWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagResponse
   */
  async removeTagWithOptions(request: RemoveTagRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveTagResponse>(await this.callApi(params, req, runtime), new RemoveTagResponse({}));
  }

  /**
   * @param request - RemoveTagRequest
   * @returns RemoveTagResponse
   */
  async removeTag(request: RemoveTagRequest): Promise<RemoveTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAliasResponse
   */
  async unbindAliasWithOptions(request: UnbindAliasRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!Util.isUnset(request.unbindAll)) {
      query["UnbindAll"] = request.unbindAll;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindAlias",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindAliasResponse>(await this.callApi(params, req, runtime), new UnbindAliasResponse({}));
  }

  /**
   * @param request - UnbindAliasRequest
   * @returns UnbindAliasResponse
   */
  async unbindAlias(request: UnbindAliasRequest): Promise<UnbindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAliasWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPhoneResponse
   */
  async unbindPhoneWithOptions(request: UnbindPhoneRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPhoneResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindPhone",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindPhoneResponse>(await this.callApi(params, req, runtime), new UnbindPhoneResponse({}));
  }

  /**
   * @param request - UnbindPhoneRequest
   * @returns UnbindPhoneResponse
   */
  async unbindPhone(request: UnbindPhoneRequest): Promise<UnbindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPhoneWithOptions(request, runtime);
  }

  /**
   * @param request - UnbindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTagResponse
   */
  async unbindTagWithOptions(request: UnbindTagRequest, runtime: $Util.RuntimeOptions): Promise<UnbindTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!Util.isUnset(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnbindTag",
      version: "2016-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindTagResponse>(await this.callApi(params, req, runtime), new UnbindTagResponse({}));
  }

  /**
   * @param request - UnbindTagRequest
   * @returns UnbindTagResponse
   */
  async unbindTag(request: UnbindTagRequest): Promise<UnbindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTagWithOptions(request, runtime);
  }

}
