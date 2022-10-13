// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindAliasRequest extends $tea.Model {
  aliasName?: string;
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindAliasResponseBody;
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
  appKey?: number;
  deviceId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindPhoneResponseBody;
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
  appKey?: number;
  clientKey?: string;
  keyType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: BindTagResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelPushResponseBody;
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
  android?: boolean;
  developmentCertInfo?: CheckCertificateResponseBodyDevelopmentCertInfo;
  IOS?: boolean;
  productionCertInfo?: CheckCertificateResponseBodyProductionCertInfo;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckCertificateResponseBody;
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
  appKey?: number;
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
  available?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDeviceResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckDevicesResponseBody;
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
  appKey?: number;
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CompleteContinuouslyPushResponseBody;
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
  appKey?: number;
  messageId?: string;
  target?: string;
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ContinuouslyPushResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSummaryAppsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagsResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: MassPushResponseBody;
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
  androidActivity?: string;
  androidBigBody?: string;
  androidBigPictureUrl?: string;
  androidBigTitle?: string;
  androidExtParameters?: string;
  androidImageUrl?: string;
  androidInboxBody?: string;
  androidMessageHuaweiCategory?: string;
  androidMessageHuaweiUrgency?: string;
  androidMusic?: string;
  androidNotificationBarPriority?: number;
  androidNotificationBarType?: number;
  androidNotificationChannel?: string;
  androidNotificationGroup?: string;
  androidNotificationHonorChannel?: string;
  androidNotificationHuaweiChannel?: string;
  androidNotificationNotifyId?: number;
  androidNotificationVivoChannel?: string;
  androidNotificationXiaomiChannel?: string;
  androidNotifyType?: string;
  androidOpenType?: string;
  androidOpenUrl?: string;
  androidPopupActivity?: string;
  androidPopupBody?: string;
  androidPopupTitle?: string;
  androidRemind?: boolean;
  androidRenderStyle?: number;
  androidVivoPushMode?: number;
  androidXiaoMiActivity?: string;
  androidXiaoMiNotifyBody?: string;
  androidXiaoMiNotifyTitle?: string;
  androidXiaomiBigPictureUrl?: string;
  androidXiaomiImageUrl?: string;
  appKey?: number;
  body?: string;
  deviceType?: string;
  expireTime?: string;
  jobKey?: string;
  pushTime?: string;
  pushType?: string;
  sendChannels?: string;
  sendSpeed?: number;
  smsDelaySecs?: number;
  smsParams?: string;
  smsSendPolicy?: number;
  smsSignName?: string;
  smsTemplateName?: string;
  storeOffline?: boolean;
  target?: string;
  targetValue?: string;
  title?: string;
  trim?: boolean;
  iOSApnsEnv?: string;
  iOSBadge?: number;
  iOSBadgeAutoIncrement?: boolean;
  iOSExtParameters?: string;
  iOSInterruptionLevel?: string;
  iOSMusic?: string;
  iOSMutableContent?: boolean;
  iOSNotificationCategory?: string;
  iOSNotificationCollapseId?: string;
  iOSNotificationThreadId?: string;
  iOSRelevanceScore?: number;
  iOSRemind?: boolean;
  iOSRemindBody?: string;
  iOSSilentNotification?: boolean;
  iOSSubtitle?: string;
  static names(): { [key: string]: string } {
    return {
      androidActivity: 'AndroidActivity',
      androidBigBody: 'AndroidBigBody',
      androidBigPictureUrl: 'AndroidBigPictureUrl',
      androidBigTitle: 'AndroidBigTitle',
      androidExtParameters: 'AndroidExtParameters',
      androidImageUrl: 'AndroidImageUrl',
      androidInboxBody: 'AndroidInboxBody',
      androidMessageHuaweiCategory: 'AndroidMessageHuaweiCategory',
      androidMessageHuaweiUrgency: 'AndroidMessageHuaweiUrgency',
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
      androidVivoPushMode: 'AndroidVivoPushMode',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaomiBigPictureUrl: 'AndroidXiaomiBigPictureUrl',
      androidXiaomiImageUrl: 'AndroidXiaomiImageUrl',
      appKey: 'AppKey',
      body: 'Body',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
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
      androidBigBody: 'string',
      androidBigPictureUrl: 'string',
      androidBigTitle: 'string',
      androidExtParameters: 'string',
      androidImageUrl: 'string',
      androidInboxBody: 'string',
      androidMessageHuaweiCategory: 'string',
      androidMessageHuaweiUrgency: 'string',
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
      androidVivoPushMode: 'number',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaomiBigPictureUrl: 'string',
      androidXiaomiImageUrl: 'string',
      appKey: 'number',
      body: 'string',
      deviceType: 'string',
      expireTime: 'string',
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushResponseBody;
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
  appKey?: number;
  body?: string;
  jobKey?: string;
  target?: string;
  targetValue?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      jobKey: 'JobKey',
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushMessageToAndroidResponseBody;
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
  appKey?: number;
  body?: string;
  jobKey?: string;
  target?: string;
  targetValue?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      jobKey: 'JobKey',
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushMessageToiOSResponseBody;
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
  appKey?: number;
  body?: string;
  extParameters?: string;
  jobKey?: string;
  target?: string;
  targetValue?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
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

export class PushNoticeToAndroidResponseBody extends $tea.Model {
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushNoticeToAndroidResponseBody;
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
  apnsEnv?: string;
  appKey?: number;
  body?: string;
  extParameters?: string;
  jobKey?: string;
  target?: string;
  targetValue?: string;
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
  messageId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PushNoticeToiOSResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryAliasesResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceInfoResponseBody;
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
  appKey?: number;
  deviceType?: string;
  endTime?: string;
  queryType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDeviceStatResponseBody;
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
  account?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicesByAccountResponseBody;
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
  alias?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryDevicesByAliasResponseBody;
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
  appKey?: number;
  endTime?: string;
  keyword?: string;
  nextToken?: string;
  page?: number;
  pageSize?: number;
  pushType?: string;
  source?: string;
  startTime?: string;
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
  nextToken?: string;
  page?: number;
  pageSize?: number;
  pushInfos?: QueryPushRecordsResponseBodyPushInfos;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushRecordsResponseBody;
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
  appKey?: number;
  endTime?: string;
  granularity?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushStatByAppResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushStatByMsgResponseBody;
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
  appKey?: number;
  clientKey?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTagsResponseBody;
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
  appKey?: number;
  endTime?: string;
  granularity?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryUniqueDeviceStatResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveTagResponseBody;
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
  aliasName?: string;
  appKey?: number;
  deviceId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindAliasResponseBody;
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
  appKey?: number;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindPhoneResponseBody;
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
  appKey?: number;
  clientKey?: string;
  keyType?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UnbindTagResponseBody;
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
  exipreTime?: number;
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
  exipreTime?: number;
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
  available?: boolean;
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
  appKey?: number;
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
  androidActivity?: string;
  androidBigBody?: string;
  androidBigPictureUrl?: string;
  androidBigTitle?: string;
  androidExtParameters?: string;
  androidImageUrl?: string;
  androidInboxBody?: string;
  androidMessageHuaweiCategory?: string;
  androidMessageHuaweiUrgency?: string;
  androidMusic?: string;
  androidNotificationBarPriority?: number;
  androidNotificationBarType?: number;
  androidNotificationChannel?: string;
  androidNotificationGroup?: string;
  androidNotificationHonorChannel?: string;
  androidNotificationHuaweiChannel?: string;
  androidNotificationNotifyId?: number;
  androidNotificationVivoChannel?: string;
  androidNotificationXiaomiChannel?: string;
  androidNotifyType?: string;
  androidOpenType?: string;
  androidOpenUrl?: string;
  androidPopupActivity?: string;
  androidPopupBody?: string;
  androidPopupTitle?: string;
  androidRemind?: boolean;
  androidRenderStyle?: string;
  androidVivoPushMode?: number;
  androidXiaoMiActivity?: string;
  androidXiaoMiNotifyBody?: string;
  androidXiaoMiNotifyTitle?: string;
  androidXiaomiBigPictureUrl?: string;
  androidXiaomiImageUrl?: string;
  body?: string;
  deviceType?: string;
  expireTime?: string;
  jobKey?: string;
  pushTime?: string;
  pushType?: string;
  sendChannels?: string;
  sendSpeed?: number;
  storeOffline?: boolean;
  target?: string;
  targetValue?: string;
  title?: string;
  trim?: boolean;
  iOSApnsEnv?: string;
  iOSBadge?: number;
  iOSBadgeAutoIncrement?: boolean;
  iOSExtParameters?: string;
  iOSInterruptionLevel?: string;
  iOSMusic?: string;
  iOSMutableContent?: boolean;
  iOSNotificationCategory?: string;
  iOSNotificationCollapseId?: string;
  iOSNotificationThreadId?: string;
  iOSRelevanceScore?: number;
  iOSRemind?: boolean;
  iOSRemindBody?: string;
  iOSSilentNotification?: boolean;
  iOSSubtitle?: string;
  static names(): { [key: string]: string } {
    return {
      androidActivity: 'AndroidActivity',
      androidBigBody: 'AndroidBigBody',
      androidBigPictureUrl: 'AndroidBigPictureUrl',
      androidBigTitle: 'AndroidBigTitle',
      androidExtParameters: 'AndroidExtParameters',
      androidImageUrl: 'AndroidImageUrl',
      androidInboxBody: 'AndroidInboxBody',
      androidMessageHuaweiCategory: 'AndroidMessageHuaweiCategory',
      androidMessageHuaweiUrgency: 'AndroidMessageHuaweiUrgency',
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
      androidVivoPushMode: 'AndroidVivoPushMode',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaomiBigPictureUrl: 'AndroidXiaomiBigPictureUrl',
      androidXiaomiImageUrl: 'AndroidXiaomiImageUrl',
      body: 'Body',
      deviceType: 'DeviceType',
      expireTime: 'ExpireTime',
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
      androidBigBody: 'string',
      androidBigPictureUrl: 'string',
      androidBigTitle: 'string',
      androidExtParameters: 'string',
      androidImageUrl: 'string',
      androidInboxBody: 'string',
      androidMessageHuaweiCategory: 'string',
      androidMessageHuaweiUrgency: 'string',
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
      androidVivoPushMode: 'number',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaomiBigPictureUrl: 'string',
      androidXiaomiImageUrl: 'string',
      body: 'string',
      deviceType: 'string',
      expireTime: 'string',
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
  account?: string;
  alias?: string;
  deviceId?: string;
  deviceToken?: string;
  deviceType?: string;
  lastOnlineTime?: string;
  online?: boolean;
  phoneNumber?: string;
  pushEnabled?: boolean;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      alias: 'Alias',
      deviceId: 'DeviceId',
      deviceToken: 'DeviceToken',
      deviceType: 'DeviceType',
      lastOnlineTime: 'LastOnlineTime',
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
      deviceId: 'string',
      deviceToken: 'string',
      deviceType: 'string',
      lastOnlineTime: 'string',
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
  count?: number;
  deviceType?: string;
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
  appKey?: number;
  body?: string;
  deviceType?: string;
  messageId?: string;
  pushTime?: string;
  pushType?: string;
  source?: string;
  status?: string;
  target?: string;
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
  acceptCount?: number;
  deletedCount?: number;
  openedCount?: number;
  receivedCount?: number;
  sentCount?: number;
  smsFailedCount?: number;
  smsReceiveFailedCount?: number;
  smsReceiveSuccessCount?: number;
  smsSentCount?: number;
  smsSkipCount?: number;
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
  acceptCount?: number;
  deletedCount?: number;
  messageId?: string;
  openedCount?: number;
  receivedCount?: number;
  sentCount?: number;
  smsFailedCount?: number;
  smsReceiveFailedCount?: number;
  smsReceiveSuccessCount?: number;
  smsSentCount?: number;
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
  count?: number;
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

  async bindAlias(request: BindAliasRequest): Promise<BindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAliasWithOptions(request, runtime);
  }

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

  async bindPhone(request: BindPhoneRequest): Promise<BindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPhoneWithOptions(request, runtime);
  }

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

  async bindTag(request: BindTagRequest): Promise<BindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTagWithOptions(request, runtime);
  }

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

  async cancelPush(request: CancelPushRequest): Promise<CancelPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPushWithOptions(request, runtime);
  }

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

  async checkCertificate(request: CheckCertificateRequest): Promise<CheckCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkCertificateWithOptions(request, runtime);
  }

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

  async checkDevice(request: CheckDeviceRequest): Promise<CheckDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDeviceWithOptions(request, runtime);
  }

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

  async checkDevices(request: CheckDevicesRequest): Promise<CheckDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDevicesWithOptions(request, runtime);
  }

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

  async completeContinuouslyPush(request: CompleteContinuouslyPushRequest): Promise<CompleteContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeContinuouslyPushWithOptions(request, runtime);
  }

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

  async continuouslyPush(request: ContinuouslyPushRequest): Promise<ContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuouslyPushWithOptions(request, runtime);
  }

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

  async listSummaryApps(): Promise<ListSummaryAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSummaryAppsWithOptions(runtime);
  }

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

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

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

  async massPush(request: MassPushRequest): Promise<MassPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.massPushWithOptions(request, runtime);
  }

  async pushWithOptions(request: PushRequest, runtime: $Util.RuntimeOptions): Promise<PushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.androidActivity)) {
      query["AndroidActivity"] = request.androidActivity;
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

    if (!Util.isUnset(request.androidVivoPushMode)) {
      query["AndroidVivoPushMode"] = request.androidVivoPushMode;
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

  async push(request: PushRequest): Promise<PushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushWithOptions(request, runtime);
  }

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

  async pushMessageToAndroid(request: PushMessageToAndroidRequest): Promise<PushMessageToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToAndroidWithOptions(request, runtime);
  }

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

  async pushMessageToiOS(request: PushMessageToiOSRequest): Promise<PushMessageToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToiOSWithOptions(request, runtime);
  }

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

  async pushNoticeToAndroid(request: PushNoticeToAndroidRequest): Promise<PushNoticeToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToAndroidWithOptions(request, runtime);
  }

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

  async pushNoticeToiOS(request: PushNoticeToiOSRequest): Promise<PushNoticeToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToiOSWithOptions(request, runtime);
  }

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

  async queryAliases(request: QueryAliasesRequest): Promise<QueryAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAliasesWithOptions(request, runtime);
  }

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

  async queryDeviceInfo(request: QueryDeviceInfoRequest): Promise<QueryDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceInfoWithOptions(request, runtime);
  }

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

  async queryDeviceStat(request: QueryDeviceStatRequest): Promise<QueryDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceStatWithOptions(request, runtime);
  }

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

  async queryDevicesByAccount(request: QueryDevicesByAccountRequest): Promise<QueryDevicesByAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAccountWithOptions(request, runtime);
  }

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

  async queryDevicesByAlias(request: QueryDevicesByAliasRequest): Promise<QueryDevicesByAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAliasWithOptions(request, runtime);
  }

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

  async queryPushRecords(request: QueryPushRecordsRequest): Promise<QueryPushRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushRecordsWithOptions(request, runtime);
  }

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

  async queryPushStatByApp(request: QueryPushStatByAppRequest): Promise<QueryPushStatByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByAppWithOptions(request, runtime);
  }

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

  async queryPushStatByMsg(request: QueryPushStatByMsgRequest): Promise<QueryPushStatByMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByMsgWithOptions(request, runtime);
  }

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

  async queryTags(request: QueryTagsRequest): Promise<QueryTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagsWithOptions(request, runtime);
  }

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

  async queryUniqueDeviceStat(request: QueryUniqueDeviceStatRequest): Promise<QueryUniqueDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUniqueDeviceStatWithOptions(request, runtime);
  }

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

  async removeTag(request: RemoveTagRequest): Promise<RemoveTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagWithOptions(request, runtime);
  }

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

  async unbindAlias(request: UnbindAliasRequest): Promise<UnbindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAliasWithOptions(request, runtime);
  }

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

  async unbindPhone(request: UnbindPhoneRequest): Promise<UnbindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPhoneWithOptions(request, runtime);
  }

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

  async unbindTag(request: UnbindTagRequest): Promise<UnbindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTagWithOptions(request, runtime);
  }

}
