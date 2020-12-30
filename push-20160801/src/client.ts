// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BindAliasRequest extends $tea.Model {
  appKey?: number;
  deviceId?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
      aliasName: 'string',
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
  body: BindAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: BindPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: BindTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CancelPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelPushResponseBody,
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
  requestId?: string;
  available?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      available: 'Available',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      available: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  deviceCheckInfos?: CheckDevicesResponseBodyDeviceCheckInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCheckInfos: 'DeviceCheckInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCheckInfos: CheckDevicesResponseBodyDeviceCheckInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CompleteContinuouslyPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ContinuouslyPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ListSummaryAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  tagInfos?: ListTagsResponseBodyTagInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      tagInfos: 'TagInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfos: ListTagsResponseBodyTagInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  messageIds?: MassPushResponseBodyMessageIds;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageIds: 'MessageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageIds: MassPushResponseBodyMessageIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MassPushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MassPushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushRequest extends $tea.Model {
  appKey?: number;
  pushType?: string;
  deviceType?: string;
  target?: string;
  targetValue?: string;
  title?: string;
  body?: string;
  jobKey?: string;
  sendSpeed?: number;
  storeOffline?: boolean;
  pushTime?: string;
  expireTime?: string;
  iOSApnsEnv?: string;
  iOSRemind?: boolean;
  iOSRemindBody?: string;
  iOSBadge?: number;
  iOSBadgeAutoIncrement?: boolean;
  iOSSilentNotification?: boolean;
  iOSMusic?: string;
  iOSSubtitle?: string;
  iOSNotificationCategory?: string;
  iOSMutableContent?: boolean;
  iOSExtParameters?: string;
  androidNotifyType?: string;
  androidOpenType?: string;
  androidActivity?: string;
  androidMusic?: string;
  androidOpenUrl?: string;
  androidXiaoMiActivity?: string;
  androidXiaoMiNotifyTitle?: string;
  androidXiaoMiNotifyBody?: string;
  androidPopupActivity?: string;
  androidPopupTitle?: string;
  androidPopupBody?: string;
  androidNotificationBarType?: number;
  androidNotificationBarPriority?: number;
  androidExtParameters?: string;
  androidRemind?: boolean;
  androidNotificationChannel?: string;
  androidNotificationXiaomiChannel?: string;
  smsTemplateName?: string;
  smsSignName?: string;
  smsParams?: string;
  smsDelaySecs?: number;
  smsSendPolicy?: number;
  androidNotificationVivoChannel?: string;
  androidNotificationHuaweiChannel?: string;
  androidNotificationNotifyId?: number;
  iOSNotificationCollapseId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      pushType: 'PushType',
      deviceType: 'DeviceType',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      body: 'Body',
      jobKey: 'JobKey',
      sendSpeed: 'SendSpeed',
      storeOffline: 'StoreOffline',
      pushTime: 'PushTime',
      expireTime: 'ExpireTime',
      iOSApnsEnv: 'iOSApnsEnv',
      iOSRemind: 'iOSRemind',
      iOSRemindBody: 'iOSRemindBody',
      iOSBadge: 'iOSBadge',
      iOSBadgeAutoIncrement: 'iOSBadgeAutoIncrement',
      iOSSilentNotification: 'iOSSilentNotification',
      iOSMusic: 'iOSMusic',
      iOSSubtitle: 'iOSSubtitle',
      iOSNotificationCategory: 'iOSNotificationCategory',
      iOSMutableContent: 'iOSMutableContent',
      iOSExtParameters: 'iOSExtParameters',
      androidNotifyType: 'AndroidNotifyType',
      androidOpenType: 'AndroidOpenType',
      androidActivity: 'AndroidActivity',
      androidMusic: 'AndroidMusic',
      androidOpenUrl: 'AndroidOpenUrl',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidPopupActivity: 'AndroidPopupActivity',
      androidPopupTitle: 'AndroidPopupTitle',
      androidPopupBody: 'AndroidPopupBody',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      androidExtParameters: 'AndroidExtParameters',
      androidRemind: 'AndroidRemind',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationXiaomiChannel: 'AndroidNotificationXiaomiChannel',
      smsTemplateName: 'SmsTemplateName',
      smsSignName: 'SmsSignName',
      smsParams: 'SmsParams',
      smsDelaySecs: 'SmsDelaySecs',
      smsSendPolicy: 'SmsSendPolicy',
      androidNotificationVivoChannel: 'AndroidNotificationVivoChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      iOSNotificationCollapseId: 'iOSNotificationCollapseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      pushType: 'string',
      deviceType: 'string',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      body: 'string',
      jobKey: 'string',
      sendSpeed: 'number',
      storeOffline: 'boolean',
      pushTime: 'string',
      expireTime: 'string',
      iOSApnsEnv: 'string',
      iOSRemind: 'boolean',
      iOSRemindBody: 'string',
      iOSBadge: 'number',
      iOSBadgeAutoIncrement: 'boolean',
      iOSSilentNotification: 'boolean',
      iOSMusic: 'string',
      iOSSubtitle: 'string',
      iOSNotificationCategory: 'string',
      iOSMutableContent: 'boolean',
      iOSExtParameters: 'string',
      androidNotifyType: 'string',
      androidOpenType: 'string',
      androidActivity: 'string',
      androidMusic: 'string',
      androidOpenUrl: 'string',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidPopupActivity: 'string',
      androidPopupTitle: 'string',
      androidPopupBody: 'string',
      androidNotificationBarType: 'number',
      androidNotificationBarPriority: 'number',
      androidExtParameters: 'string',
      androidRemind: 'boolean',
      androidNotificationChannel: 'string',
      androidNotificationXiaomiChannel: 'string',
      smsTemplateName: 'string',
      smsSignName: 'string',
      smsParams: 'string',
      smsDelaySecs: 'number',
      smsSendPolicy: 'number',
      androidNotificationVivoChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      androidNotificationNotifyId: 'number',
      iOSNotificationCollapseId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidRequest extends $tea.Model {
  appKey?: number;
  target?: string;
  targetValue?: string;
  title?: string;
  body?: string;
  jobKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      body: 'Body',
      jobKey: 'JobKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      body: 'string',
      jobKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushMessageToAndroidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushMessageToAndroidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSRequest extends $tea.Model {
  appKey?: number;
  target?: string;
  targetValue?: string;
  title?: string;
  body?: string;
  jobKey?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      body: 'Body',
      jobKey: 'JobKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      body: 'string',
      jobKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushMessageToiOSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushMessageToiOSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidRequest extends $tea.Model {
  appKey?: number;
  target?: string;
  targetValue?: string;
  title?: string;
  body?: string;
  jobKey?: string;
  extParameters?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      target: 'Target',
      targetValue: 'TargetValue',
      title: 'Title',
      body: 'Body',
      jobKey: 'JobKey',
      extParameters: 'ExtParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      target: 'string',
      targetValue: 'string',
      title: 'string',
      body: 'string',
      jobKey: 'string',
      extParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushNoticeToAndroidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PushNoticeToAndroidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSRequest extends $tea.Model {
  appKey?: number;
  target?: string;
  targetValue?: string;
  apnsEnv?: string;
  title?: string;
  body?: string;
  jobKey?: string;
  extParameters?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      target: 'Target',
      targetValue: 'TargetValue',
      apnsEnv: 'ApnsEnv',
      title: 'Title',
      body: 'Body',
      jobKey: 'JobKey',
      extParameters: 'ExtParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      target: 'string',
      targetValue: 'string',
      apnsEnv: 'string',
      title: 'string',
      body: 'string',
      jobKey: 'string',
      extParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponseBody extends $tea.Model {
  requestId?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      messageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PushNoticeToiOSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  aliasInfos?: QueryAliasesResponseBodyAliasInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      aliasInfos: 'AliasInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      aliasInfos: QueryAliasesResponseBodyAliasInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAliasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCountRequest extends $tea.Model {
  appKey?: number;
  target?: string;
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      target: 'Target',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      target: 'string',
      targetValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCountResponseBody extends $tea.Model {
  requestId?: string;
  deviceCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceCount: 'DeviceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceCountResponseBody,
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
  requestId?: string;
  deviceInfo?: QueryDeviceInfoResponseBodyDeviceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceInfo: QueryDeviceInfoResponseBodyDeviceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountRequest extends $tea.Model {
  appKey?: number;
  account?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      account: 'string',
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
  body: QueryDevicesByAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicesByAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasRequest extends $tea.Model {
  appKey?: number;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      alias: 'string',
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
  body: QueryDevicesByAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDevicesByAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatRequest extends $tea.Model {
  appKey?: number;
  startTime?: string;
  endTime?: string;
  deviceType?: string;
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
      deviceType: 'DeviceType',
      queryType: 'QueryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      startTime: 'string',
      endTime: 'string',
      deviceType: 'string',
      queryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBody extends $tea.Model {
  requestId?: string;
  appDeviceStats?: QueryDeviceStatResponseBodyAppDeviceStats;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appDeviceStats: 'AppDeviceStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appDeviceStats: QueryDeviceStatResponseBodyAppDeviceStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDeviceStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDeviceStatResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsRequest extends $tea.Model {
  appKey?: number;
  startTime?: string;
  endTime?: string;
  pushType?: string;
  target?: string;
  source?: string;
  keyword?: string;
  nextToken?: string;
  pageSize?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
      pushType: 'PushType',
      target: 'Target',
      source: 'Source',
      keyword: 'Keyword',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      startTime: 'string',
      endTime: 'string',
      pushType: 'string',
      target: 'string',
      source: 'string',
      keyword: 'string',
      nextToken: 'string',
      pageSize: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBody extends $tea.Model {
  pushInfos?: QueryPushRecordsResponseBodyPushInfos;
  nextToken?: string;
  pageSize?: number;
  requestId?: string;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      pushInfos: 'PushInfos',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushInfos: QueryPushRecordsResponseBodyPushInfos,
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPushRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryPushRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppRequest extends $tea.Model {
  appKey?: number;
  startTime?: string;
  endTime?: string;
  granularity?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
      granularity: 'Granularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      startTime: 'string',
      endTime: 'string',
      granularity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBody extends $tea.Model {
  requestId?: string;
  appPushStats?: QueryPushStatByAppResponseBodyAppPushStats;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appPushStats: 'AppPushStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appPushStats: QueryPushStatByAppResponseBodyAppPushStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPushStatByAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  pushStats?: QueryPushStatByMsgResponseBodyPushStats;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pushStats: 'PushStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pushStats: QueryPushStatByMsgResponseBodyPushStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryPushStatByMsgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  tagInfos?: QueryTagsResponseBodyTagInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      tagInfos: 'TagInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfos: QueryTagsResponseBodyTagInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatRequest extends $tea.Model {
  appKey?: number;
  startTime?: string;
  endTime?: string;
  granularity?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      startTime: 'StartTime',
      endTime: 'EndTime',
      granularity: 'Granularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      startTime: 'string',
      endTime: 'string',
      granularity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBody extends $tea.Model {
  requestId?: string;
  appDeviceStats?: QueryUniqueDeviceStatResponseBodyAppDeviceStats;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appDeviceStats: 'AppDeviceStats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appDeviceStats: QueryUniqueDeviceStatResponseBodyAppDeviceStats,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryUniqueDeviceStatResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: RemoveTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasRequest extends $tea.Model {
  appKey?: number;
  deviceId?: string;
  aliasName?: string;
  unbindAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      aliasName: 'AliasName',
      unbindAll: 'UnbindAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
      aliasName: 'string',
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
  body: UnbindAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UnbindPhoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UnbindTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo extends $tea.Model {
  deviceId?: string;
  available?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      available: 'Available',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      available: 'boolean',
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
  appName?: string;
  appKey?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appKey: 'number',
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
  jobKey?: string;
  iOSNotificationCollapseId?: string;
  iOSSilentNotification?: boolean;
  storeOffline?: boolean;
  iOSNotificationCategory?: string;
  iOSSubtitle?: string;
  androidNotificationChannel?: string;
  androidNotificationHuaweiChannel?: string;
  iOSApnsEnv?: string;
  iOSBadgeAutoIncrement?: boolean;
  androidXiaoMiNotifyTitle?: string;
  androidNotificationXiaomiChannel?: string;
  androidXiaoMiActivity?: string;
  androidPopupTitle?: string;
  iOSRemindBody?: string;
  androidActivity?: string;
  androidNotifyType?: string;
  iOSMutableContent?: boolean;
  target?: string;
  androidOpenUrl?: string;
  androidNotificationNotifyId?: number;
  expireTime?: string;
  androidNotificationVivoChannel?: string;
  androidOpenType?: string;
  deviceType?: string;
  androidPopupActivity?: string;
  androidRemind?: boolean;
  androidPopupBody?: string;
  androidExtParameters?: string;
  iOSExtParameters?: string;
  androidXiaoMiNotifyBody?: string;
  body?: string;
  androidNotificationBarType?: number;
  androidNotificationBarPriority?: number;
  targetValue?: string;
  iOSMusic?: string;
  iOSRemind?: boolean;
  pushType?: string;
  iOSBadge?: number;
  sendSpeed?: number;
  title?: string;
  pushTime?: string;
  androidMusic?: string;
  static names(): { [key: string]: string } {
    return {
      jobKey: 'JobKey',
      iOSNotificationCollapseId: 'iOSNotificationCollapseId',
      iOSSilentNotification: 'iOSSilentNotification',
      storeOffline: 'StoreOffline',
      iOSNotificationCategory: 'iOSNotificationCategory',
      iOSSubtitle: 'iOSSubtitle',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      iOSApnsEnv: 'iOSApnsEnv',
      iOSBadgeAutoIncrement: 'iOSBadgeAutoIncrement',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidNotificationXiaomiChannel: 'AndroidNotificationXiaomiChannel',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidPopupTitle: 'AndroidPopupTitle',
      iOSRemindBody: 'iOSRemindBody',
      androidActivity: 'AndroidActivity',
      androidNotifyType: 'AndroidNotifyType',
      iOSMutableContent: 'iOSMutableContent',
      target: 'Target',
      androidOpenUrl: 'AndroidOpenUrl',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      expireTime: 'ExpireTime',
      androidNotificationVivoChannel: 'AndroidNotificationVivoChannel',
      androidOpenType: 'AndroidOpenType',
      deviceType: 'DeviceType',
      androidPopupActivity: 'AndroidPopupActivity',
      androidRemind: 'AndroidRemind',
      androidPopupBody: 'AndroidPopupBody',
      androidExtParameters: 'AndroidExtParameters',
      iOSExtParameters: 'iOSExtParameters',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      body: 'Body',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      targetValue: 'TargetValue',
      iOSMusic: 'iOSMusic',
      iOSRemind: 'iOSRemind',
      pushType: 'PushType',
      iOSBadge: 'iOSBadge',
      sendSpeed: 'SendSpeed',
      title: 'Title',
      pushTime: 'PushTime',
      androidMusic: 'AndroidMusic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobKey: 'string',
      iOSNotificationCollapseId: 'string',
      iOSSilentNotification: 'boolean',
      storeOffline: 'boolean',
      iOSNotificationCategory: 'string',
      iOSSubtitle: 'string',
      androidNotificationChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      iOSApnsEnv: 'string',
      iOSBadgeAutoIncrement: 'boolean',
      androidXiaoMiNotifyTitle: 'string',
      androidNotificationXiaomiChannel: 'string',
      androidXiaoMiActivity: 'string',
      androidPopupTitle: 'string',
      iOSRemindBody: 'string',
      androidActivity: 'string',
      androidNotifyType: 'string',
      iOSMutableContent: 'boolean',
      target: 'string',
      androidOpenUrl: 'string',
      androidNotificationNotifyId: 'number',
      expireTime: 'string',
      androidNotificationVivoChannel: 'string',
      androidOpenType: 'string',
      deviceType: 'string',
      androidPopupActivity: 'string',
      androidRemind: 'boolean',
      androidPopupBody: 'string',
      androidExtParameters: 'string',
      iOSExtParameters: 'string',
      androidXiaoMiNotifyBody: 'string',
      body: 'string',
      androidNotificationBarType: 'number',
      androidNotificationBarPriority: 'number',
      targetValue: 'string',
      iOSMusic: 'string',
      iOSRemind: 'boolean',
      pushType: 'string',
      iOSBadge: 'number',
      sendSpeed: 'number',
      title: 'string',
      pushTime: 'string',
      androidMusic: 'string',
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
  lastOnlineTime?: string;
  phoneNumber?: string;
  pushEnabled?: boolean;
  deviceType?: string;
  deviceId?: string;
  online?: boolean;
  tags?: string;
  deviceToken?: string;
  alias?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      lastOnlineTime: 'LastOnlineTime',
      phoneNumber: 'PhoneNumber',
      pushEnabled: 'PushEnabled',
      deviceType: 'DeviceType',
      deviceId: 'DeviceId',
      online: 'Online',
      tags: 'Tags',
      deviceToken: 'DeviceToken',
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      lastOnlineTime: 'string',
      phoneNumber: 'string',
      pushEnabled: 'boolean',
      deviceType: 'string',
      deviceId: 'string',
      online: 'boolean',
      tags: 'string',
      deviceToken: 'string',
      alias: 'string',
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

export class QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $tea.Model {
  time?: string;
  deviceType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      deviceType: 'DeviceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      deviceType: 'string',
      count: 'number',
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

export class QueryPushRecordsResponseBodyPushInfosPushInfo extends $tea.Model {
  status?: string;
  messageId?: string;
  appKey?: number;
  deviceType?: string;
  pushType?: string;
  body?: string;
  title?: string;
  source?: string;
  pushTime?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      messageId: 'MessageId',
      appKey: 'AppKey',
      deviceType: 'DeviceType',
      pushType: 'PushType',
      body: 'Body',
      title: 'Title',
      source: 'Source',
      pushTime: 'PushTime',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      messageId: 'string',
      appKey: 'number',
      deviceType: 'string',
      pushType: 'string',
      body: 'string',
      title: 'string',
      source: 'string',
      pushTime: 'string',
      target: 'string',
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
  time?: string;
  deletedCount?: number;
  openedCount?: number;
  smsReceiveSuccessCount?: number;
  smsSkipCount?: number;
  smsReceiveFailedCount?: number;
  smsFailedCount?: number;
  receivedCount?: number;
  sentCount?: number;
  smsSentCount?: number;
  acceptCount?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      deletedCount: 'DeletedCount',
      openedCount: 'OpenedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSkipCount: 'SmsSkipCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsFailedCount: 'SmsFailedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsSentCount: 'SmsSentCount',
      acceptCount: 'AcceptCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      deletedCount: 'number',
      openedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSkipCount: 'number',
      smsReceiveFailedCount: 'number',
      smsFailedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsSentCount: 'number',
      acceptCount: 'number',
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
  messageId?: string;
  deletedCount?: number;
  openedCount?: number;
  smsReceiveSuccessCount?: number;
  smsSkipCount?: number;
  smsReceiveFailedCount?: number;
  smsFailedCount?: number;
  receivedCount?: number;
  sentCount?: number;
  smsSentCount?: number;
  acceptCount?: number;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      deletedCount: 'DeletedCount',
      openedCount: 'OpenedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSkipCount: 'SmsSkipCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsFailedCount: 'SmsFailedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsSentCount: 'SmsSentCount',
      acceptCount: 'AcceptCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      deletedCount: 'number',
      openedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSkipCount: 'number',
      smsReceiveFailedCount: 'number',
      smsFailedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsSentCount: 'number',
      acceptCount: 'number',
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
  time?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      count: 'number',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindAliasResponse>(await this.doRPCRequest("BindAlias", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindAliasResponse({}));
  }

  async bindAlias(request: BindAliasRequest): Promise<BindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindAliasWithOptions(request, runtime);
  }

  async bindPhoneWithOptions(request: BindPhoneRequest, runtime: $Util.RuntimeOptions): Promise<BindPhoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindPhoneResponse>(await this.doRPCRequest("BindPhone", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindPhoneResponse({}));
  }

  async bindPhone(request: BindPhoneRequest): Promise<BindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindPhoneWithOptions(request, runtime);
  }

  async bindTagWithOptions(request: BindTagRequest, runtime: $Util.RuntimeOptions): Promise<BindTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BindTagResponse>(await this.doRPCRequest("BindTag", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new BindTagResponse({}));
  }

  async bindTag(request: BindTagRequest): Promise<BindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindTagWithOptions(request, runtime);
  }

  async cancelPushWithOptions(request: CancelPushRequest, runtime: $Util.RuntimeOptions): Promise<CancelPushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelPushResponse>(await this.doRPCRequest("CancelPush", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CancelPushResponse({}));
  }

  async cancelPush(request: CancelPushRequest): Promise<CancelPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPushWithOptions(request, runtime);
  }

  async checkDeviceWithOptions(request: CheckDeviceRequest, runtime: $Util.RuntimeOptions): Promise<CheckDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDeviceResponse>(await this.doRPCRequest("CheckDevice", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDeviceResponse({}));
  }

  async checkDevice(request: CheckDeviceRequest): Promise<CheckDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDeviceWithOptions(request, runtime);
  }

  async checkDevicesWithOptions(request: CheckDevicesRequest, runtime: $Util.RuntimeOptions): Promise<CheckDevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckDevicesResponse>(await this.doRPCRequest("CheckDevices", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CheckDevicesResponse({}));
  }

  async checkDevices(request: CheckDevicesRequest): Promise<CheckDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDevicesWithOptions(request, runtime);
  }

  async completeContinuouslyPushWithOptions(request: CompleteContinuouslyPushRequest, runtime: $Util.RuntimeOptions): Promise<CompleteContinuouslyPushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompleteContinuouslyPushResponse>(await this.doRPCRequest("CompleteContinuouslyPush", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new CompleteContinuouslyPushResponse({}));
  }

  async completeContinuouslyPush(request: CompleteContinuouslyPushRequest): Promise<CompleteContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.completeContinuouslyPushWithOptions(request, runtime);
  }

  async continuouslyPushWithOptions(request: ContinuouslyPushRequest, runtime: $Util.RuntimeOptions): Promise<ContinuouslyPushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContinuouslyPushResponse>(await this.doRPCRequest("ContinuouslyPush", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ContinuouslyPushResponse({}));
  }

  async continuouslyPush(request: ContinuouslyPushRequest): Promise<ContinuouslyPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.continuouslyPushWithOptions(request, runtime);
  }

  async listSummaryAppsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListSummaryAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<ListSummaryAppsResponse>(await this.doRPCRequest("ListSummaryApps", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListSummaryAppsResponse({}));
  }

  async listSummaryApps(): Promise<ListSummaryAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSummaryAppsWithOptions(runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagsResponse>(await this.doRPCRequest("ListTags", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagsResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  async massPushWithOptions(request: MassPushRequest, runtime: $Util.RuntimeOptions): Promise<MassPushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<MassPushResponse>(await this.doRPCRequest("MassPush", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new MassPushResponse({}));
  }

  async massPush(request: MassPushRequest): Promise<MassPushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.massPushWithOptions(request, runtime);
  }

  async pushWithOptions(request: PushRequest, runtime: $Util.RuntimeOptions): Promise<PushResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushResponse>(await this.doRPCRequest("Push", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushResponse({}));
  }

  async push(request: PushRequest): Promise<PushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushWithOptions(request, runtime);
  }

  async pushMessageToAndroidWithOptions(request: PushMessageToAndroidRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageToAndroidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushMessageToAndroidResponse>(await this.doRPCRequest("PushMessageToAndroid", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushMessageToAndroidResponse({}));
  }

  async pushMessageToAndroid(request: PushMessageToAndroidRequest): Promise<PushMessageToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToAndroidWithOptions(request, runtime);
  }

  async pushMessageToiOSWithOptions(request: PushMessageToiOSRequest, runtime: $Util.RuntimeOptions): Promise<PushMessageToiOSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushMessageToiOSResponse>(await this.doRPCRequest("PushMessageToiOS", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushMessageToiOSResponse({}));
  }

  async pushMessageToiOS(request: PushMessageToiOSRequest): Promise<PushMessageToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMessageToiOSWithOptions(request, runtime);
  }

  async pushNoticeToAndroidWithOptions(request: PushNoticeToAndroidRequest, runtime: $Util.RuntimeOptions): Promise<PushNoticeToAndroidResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushNoticeToAndroidResponse>(await this.doRPCRequest("PushNoticeToAndroid", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushNoticeToAndroidResponse({}));
  }

  async pushNoticeToAndroid(request: PushNoticeToAndroidRequest): Promise<PushNoticeToAndroidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToAndroidWithOptions(request, runtime);
  }

  async pushNoticeToiOSWithOptions(request: PushNoticeToiOSRequest, runtime: $Util.RuntimeOptions): Promise<PushNoticeToiOSResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PushNoticeToiOSResponse>(await this.doRPCRequest("PushNoticeToiOS", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new PushNoticeToiOSResponse({}));
  }

  async pushNoticeToiOS(request: PushNoticeToiOSRequest): Promise<PushNoticeToiOSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushNoticeToiOSWithOptions(request, runtime);
  }

  async queryAliasesWithOptions(request: QueryAliasesRequest, runtime: $Util.RuntimeOptions): Promise<QueryAliasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAliasesResponse>(await this.doRPCRequest("QueryAliases", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAliasesResponse({}));
  }

  async queryAliases(request: QueryAliasesRequest): Promise<QueryAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAliasesWithOptions(request, runtime);
  }

  async queryDeviceCountWithOptions(request: QueryDeviceCountRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceCountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceCountResponse>(await this.doRPCRequest("QueryDeviceCount", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceCountResponse({}));
  }

  async queryDeviceCount(request: QueryDeviceCountRequest): Promise<QueryDeviceCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceCountWithOptions(request, runtime);
  }

  async queryDeviceInfoWithOptions(request: QueryDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceInfoResponse>(await this.doRPCRequest("QueryDeviceInfo", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceInfoResponse({}));
  }

  async queryDeviceInfo(request: QueryDeviceInfoRequest): Promise<QueryDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceInfoWithOptions(request, runtime);
  }

  async queryDevicesByAccountWithOptions(request: QueryDevicesByAccountRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicesByAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicesByAccountResponse>(await this.doRPCRequest("QueryDevicesByAccount", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicesByAccountResponse({}));
  }

  async queryDevicesByAccount(request: QueryDevicesByAccountRequest): Promise<QueryDevicesByAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAccountWithOptions(request, runtime);
  }

  async queryDevicesByAliasWithOptions(request: QueryDevicesByAliasRequest, runtime: $Util.RuntimeOptions): Promise<QueryDevicesByAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDevicesByAliasResponse>(await this.doRPCRequest("QueryDevicesByAlias", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDevicesByAliasResponse({}));
  }

  async queryDevicesByAlias(request: QueryDevicesByAliasRequest): Promise<QueryDevicesByAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDevicesByAliasWithOptions(request, runtime);
  }

  async queryDeviceStatWithOptions(request: QueryDeviceStatRequest, runtime: $Util.RuntimeOptions): Promise<QueryDeviceStatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDeviceStatResponse>(await this.doRPCRequest("QueryDeviceStat", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDeviceStatResponse({}));
  }

  async queryDeviceStat(request: QueryDeviceStatRequest): Promise<QueryDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDeviceStatWithOptions(request, runtime);
  }

  async queryPushRecordsWithOptions(request: QueryPushRecordsRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPushRecordsResponse>(await this.doRPCRequest("QueryPushRecords", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPushRecordsResponse({}));
  }

  async queryPushRecords(request: QueryPushRecordsRequest): Promise<QueryPushRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushRecordsWithOptions(request, runtime);
  }

  async queryPushStatByAppWithOptions(request: QueryPushStatByAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushStatByAppResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPushStatByAppResponse>(await this.doRPCRequest("QueryPushStatByApp", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPushStatByAppResponse({}));
  }

  async queryPushStatByApp(request: QueryPushStatByAppRequest): Promise<QueryPushStatByAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByAppWithOptions(request, runtime);
  }

  async queryPushStatByMsgWithOptions(request: QueryPushStatByMsgRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushStatByMsgResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryPushStatByMsgResponse>(await this.doRPCRequest("QueryPushStatByMsg", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryPushStatByMsgResponse({}));
  }

  async queryPushStatByMsg(request: QueryPushStatByMsgRequest): Promise<QueryPushStatByMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushStatByMsgWithOptions(request, runtime);
  }

  async queryTagsWithOptions(request: QueryTagsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryTagsResponse>(await this.doRPCRequest("QueryTags", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryTagsResponse({}));
  }

  async queryTags(request: QueryTagsRequest): Promise<QueryTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTagsWithOptions(request, runtime);
  }

  async queryUniqueDeviceStatWithOptions(request: QueryUniqueDeviceStatRequest, runtime: $Util.RuntimeOptions): Promise<QueryUniqueDeviceStatResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryUniqueDeviceStatResponse>(await this.doRPCRequest("QueryUniqueDeviceStat", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new QueryUniqueDeviceStatResponse({}));
  }

  async queryUniqueDeviceStat(request: QueryUniqueDeviceStatRequest): Promise<QueryUniqueDeviceStatResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryUniqueDeviceStatWithOptions(request, runtime);
  }

  async removeTagWithOptions(request: RemoveTagRequest, runtime: $Util.RuntimeOptions): Promise<RemoveTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveTagResponse>(await this.doRPCRequest("RemoveTag", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveTagResponse({}));
  }

  async removeTag(request: RemoveTagRequest): Promise<RemoveTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeTagWithOptions(request, runtime);
  }

  async unbindAliasWithOptions(request: UnbindAliasRequest, runtime: $Util.RuntimeOptions): Promise<UnbindAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindAliasResponse>(await this.doRPCRequest("UnbindAlias", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindAliasResponse({}));
  }

  async unbindAlias(request: UnbindAliasRequest): Promise<UnbindAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindAliasWithOptions(request, runtime);
  }

  async unbindPhoneWithOptions(request: UnbindPhoneRequest, runtime: $Util.RuntimeOptions): Promise<UnbindPhoneResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindPhoneResponse>(await this.doRPCRequest("UnbindPhone", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindPhoneResponse({}));
  }

  async unbindPhone(request: UnbindPhoneRequest): Promise<UnbindPhoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindPhoneWithOptions(request, runtime);
  }

  async unbindTagWithOptions(request: UnbindTagRequest, runtime: $Util.RuntimeOptions): Promise<UnbindTagResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindTagResponse>(await this.doRPCRequest("UnbindTag", "2016-08-01", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindTagResponse({}));
  }

  async unbindTag(request: UnbindTagRequest): Promise<UnbindTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindTagWithOptions(request, runtime);
  }

}
