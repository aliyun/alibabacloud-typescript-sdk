// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CheckCertificateResponseBodyDevelopmentCertInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBodyProductionCertInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfosDeviceCheckInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBodyDeviceCheckInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.deviceCheckInfo)) {
      $dara.Model.validateArray(this.deviceCheckInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBodySummaryAppInfosSummaryAppInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBodySummaryAppInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.summaryAppInfo)) {
      $dara.Model.validateArray(this.summaryAppInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfosTagInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushRequestPushTask extends $dara.Model {
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
  androidMessageOppoCategory?: string;
  androidMessageOppoNotifyLevel?: number;
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
  androidNotificationThreadId?: string;
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
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   * 
   * @deprecated
   */
  androidXiaomiImageUrl?: string;
  /**
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
  harmonyBadgeAddNum?: number;
  harmonyBadgeSetNum?: number;
  harmonyCategory?: string;
  harmonyExtParameters?: string;
  harmonyExtensionExtraData?: string;
  harmonyExtensionPush?: boolean;
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
  iOSLiveActivityAttributes?: string;
  iOSLiveActivityAttributesType?: string;
  iOSLiveActivityContentState?: string;
  iOSLiveActivityDismissalDate?: number;
  iOSLiveActivityEvent?: string;
  iOSLiveActivityId?: string;
  iOSLiveActivityStaleDate?: number;
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
      androidMessageOppoCategory: 'AndroidMessageOppoCategory',
      androidMessageOppoNotifyLevel: 'AndroidMessageOppoNotifyLevel',
      androidMessageVivoCategory: 'AndroidMessageVivoCategory',
      androidMusic: 'AndroidMusic',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationGroup: 'AndroidNotificationGroup',
      androidNotificationHonorChannel: 'AndroidNotificationHonorChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      androidNotificationThreadId: 'AndroidNotificationThreadId',
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
      harmonyBadgeAddNum: 'HarmonyBadgeAddNum',
      harmonyBadgeSetNum: 'HarmonyBadgeSetNum',
      harmonyCategory: 'HarmonyCategory',
      harmonyExtParameters: 'HarmonyExtParameters',
      harmonyExtensionExtraData: 'HarmonyExtensionExtraData',
      harmonyExtensionPush: 'HarmonyExtensionPush',
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
      iOSLiveActivityAttributes: 'iOSLiveActivityAttributes',
      iOSLiveActivityAttributesType: 'iOSLiveActivityAttributesType',
      iOSLiveActivityContentState: 'iOSLiveActivityContentState',
      iOSLiveActivityDismissalDate: 'iOSLiveActivityDismissalDate',
      iOSLiveActivityEvent: 'iOSLiveActivityEvent',
      iOSLiveActivityId: 'iOSLiveActivityId',
      iOSLiveActivityStaleDate: 'iOSLiveActivityStaleDate',
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
      androidMessageOppoCategory: 'string',
      androidMessageOppoNotifyLevel: 'number',
      androidMessageVivoCategory: 'string',
      androidMusic: 'string',
      androidNotificationBarPriority: 'number',
      androidNotificationBarType: 'number',
      androidNotificationChannel: 'string',
      androidNotificationGroup: 'string',
      androidNotificationHonorChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      androidNotificationNotifyId: 'number',
      androidNotificationThreadId: 'string',
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
      harmonyBadgeAddNum: 'number',
      harmonyBadgeSetNum: 'number',
      harmonyCategory: 'string',
      harmonyExtParameters: 'string',
      harmonyExtensionExtraData: 'string',
      harmonyExtensionPush: 'boolean',
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
      iOSLiveActivityAttributes: 'string',
      iOSLiveActivityAttributesType: 'string',
      iOSLiveActivityContentState: 'string',
      iOSLiveActivityDismissalDate: 'number',
      iOSLiveActivityEvent: 'string',
      iOSLiveActivityId: 'string',
      iOSLiveActivityStaleDate: 'number',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponseBodyMessageIds extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.messageId)) {
      $dara.Model.validateArray(this.messageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBodyAliasInfosAliasInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBodyAliasInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.aliasInfo)) {
      $dara.Model.validateArray(this.aliasInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponseBodyDeviceInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBodyAppDeviceStats extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.appDeviceStat)) {
      $dara.Model.validateArray(this.appDeviceStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponseBodyDeviceIds extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.deviceId)) {
      $dara.Model.validateArray(this.deviceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponseBodyDeviceIds extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.deviceId)) {
      $dara.Model.validateArray(this.deviceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBodyPushInfosPushInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBodyPushInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.pushInfo)) {
      $dara.Model.validateArray(this.pushInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBodyAppPushStatsAppPushStat extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBodyAppPushStats extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.appPushStat)) {
      $dara.Model.validateArray(this.appPushStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBodyPushStatsPushStat extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBodyPushStats extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.pushStat)) {
      $dara.Model.validateArray(this.pushStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBodyTagInfosTagInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBodyTagInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBodyAppDeviceStatsAppDeviceStat extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBodyAppDeviceStats extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.appDeviceStat)) {
      $dara.Model.validateArray(this.appDeviceStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAliasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAliasResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindPhoneResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindTagResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponseBody extends $dara.Model {
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

  validate() {
    if(this.developmentCertInfo && typeof (this.developmentCertInfo as any).validate === 'function') {
      (this.developmentCertInfo as any).validate();
    }
    if(this.productionCertInfo && typeof (this.productionCertInfo as any).validate === 'function') {
      (this.productionCertInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckCertificateResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDeviceResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponseBody extends $dara.Model {
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

  validate() {
    if(this.deviceCheckInfos && typeof (this.deviceCheckInfos as any).validate === 'function') {
      (this.deviceCheckInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckDevicesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompleteContinuouslyPushResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContinuouslyPushResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponseBody extends $dara.Model {
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

  validate() {
    if(this.summaryAppInfos && typeof (this.summaryAppInfos as any).validate === 'function') {
      (this.summaryAppInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSummaryAppsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $dara.Model {
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

  validate() {
    if(this.tagInfos && typeof (this.tagInfos as any).validate === 'function') {
      (this.tagInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  idempotentToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pushTask?: MassPushRequestPushTask[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      idempotentToken: 'IdempotentToken',
      pushTask: 'PushTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      idempotentToken: 'string',
      pushTask: { 'type': 'array', 'itemType': MassPushRequestPushTask },
    };
  }

  validate() {
    if(Array.isArray(this.pushTask)) {
      $dara.Model.validateArray(this.pushTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponseBody extends $dara.Model {
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

  validate() {
    if(this.messageIds && typeof (this.messageIds as any).validate === 'function') {
      (this.messageIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MassPushResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushRequest extends $dara.Model {
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
  androidMessageOppoCategory?: string;
  androidMessageOppoNotifyLevel?: number;
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
  androidNotificationThreadId?: string;
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
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   * 
   * @deprecated
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
  harmonyBadgeAddNum?: number;
  harmonyBadgeSetNum?: number;
  harmonyCategory?: string;
  harmonyExtParameters?: string;
  harmonyExtensionExtraData?: string;
  harmonyExtensionPush?: boolean;
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
  idempotentToken?: string;
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
  iOSLiveActivityAttributes?: string;
  iOSLiveActivityAttributesType?: string;
  iOSLiveActivityContentState?: string;
  iOSLiveActivityDismissalDate?: number;
  iOSLiveActivityEvent?: string;
  iOSLiveActivityId?: string;
  iOSLiveActivityStaleDate?: number;
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
      androidMessageOppoCategory: 'AndroidMessageOppoCategory',
      androidMessageOppoNotifyLevel: 'AndroidMessageOppoNotifyLevel',
      androidMessageVivoCategory: 'AndroidMessageVivoCategory',
      androidMusic: 'AndroidMusic',
      androidNotificationBarPriority: 'AndroidNotificationBarPriority',
      androidNotificationBarType: 'AndroidNotificationBarType',
      androidNotificationChannel: 'AndroidNotificationChannel',
      androidNotificationGroup: 'AndroidNotificationGroup',
      androidNotificationHonorChannel: 'AndroidNotificationHonorChannel',
      androidNotificationHuaweiChannel: 'AndroidNotificationHuaweiChannel',
      androidNotificationNotifyId: 'AndroidNotificationNotifyId',
      androidNotificationThreadId: 'AndroidNotificationThreadId',
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
      harmonyBadgeAddNum: 'HarmonyBadgeAddNum',
      harmonyBadgeSetNum: 'HarmonyBadgeSetNum',
      harmonyCategory: 'HarmonyCategory',
      harmonyExtParameters: 'HarmonyExtParameters',
      harmonyExtensionExtraData: 'HarmonyExtensionExtraData',
      harmonyExtensionPush: 'HarmonyExtensionPush',
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
      idempotentToken: 'IdempotentToken',
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
      iOSLiveActivityAttributes: 'iOSLiveActivityAttributes',
      iOSLiveActivityAttributesType: 'iOSLiveActivityAttributesType',
      iOSLiveActivityContentState: 'iOSLiveActivityContentState',
      iOSLiveActivityDismissalDate: 'iOSLiveActivityDismissalDate',
      iOSLiveActivityEvent: 'iOSLiveActivityEvent',
      iOSLiveActivityId: 'iOSLiveActivityId',
      iOSLiveActivityStaleDate: 'iOSLiveActivityStaleDate',
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
      androidMessageOppoCategory: 'string',
      androidMessageOppoNotifyLevel: 'number',
      androidMessageVivoCategory: 'string',
      androidMusic: 'string',
      androidNotificationBarPriority: 'number',
      androidNotificationBarType: 'number',
      androidNotificationChannel: 'string',
      androidNotificationGroup: 'string',
      androidNotificationHonorChannel: 'string',
      androidNotificationHuaweiChannel: 'string',
      androidNotificationNotifyId: 'number',
      androidNotificationThreadId: 'string',
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
      harmonyBadgeAddNum: 'number',
      harmonyBadgeSetNum: 'number',
      harmonyCategory: 'string',
      harmonyExtParameters: 'string',
      harmonyExtensionExtraData: 'string',
      harmonyExtensionPush: 'boolean',
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
      idempotentToken: 'string',
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
      iOSLiveActivityAttributes: 'string',
      iOSLiveActivityAttributesType: 'string',
      iOSLiveActivityContentState: 'string',
      iOSLiveActivityDismissalDate: 'number',
      iOSLiveActivityEvent: 'string',
      iOSLiveActivityId: 'string',
      iOSLiveActivityStaleDate: 'number',
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToAndroidResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMessageToiOSResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToAndroidResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushNoticeToiOSResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponseBody extends $dara.Model {
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

  validate() {
    if(this.aliasInfos && typeof (this.aliasInfos as any).validate === 'function') {
      (this.aliasInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAliasesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponseBody extends $dara.Model {
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

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponseBody extends $dara.Model {
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

  validate() {
    if(this.appDeviceStats && typeof (this.appDeviceStats as any).validate === 'function') {
      (this.appDeviceStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDeviceStatResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponseBody extends $dara.Model {
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

  validate() {
    if(this.deviceIds && typeof (this.deviceIds as any).validate === 'function') {
      (this.deviceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAccountResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponseBody extends $dara.Model {
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

  validate() {
    if(this.deviceIds && typeof (this.deviceIds as any).validate === 'function') {
      (this.deviceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDevicesByAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBody extends $dara.Model {
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

  validate() {
    if(this.pushInfos && typeof (this.pushInfos as any).validate === 'function') {
      (this.pushInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBody extends $dara.Model {
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

  validate() {
    if(this.appPushStats && typeof (this.appPushStats as any).validate === 'function') {
      (this.appPushStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBody extends $dara.Model {
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

  validate() {
    if(this.pushStats && typeof (this.pushStats as any).validate === 'function') {
      (this.pushStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBody extends $dara.Model {
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

  validate() {
    if(this.tagInfos && typeof (this.tagInfos as any).validate === 'function') {
      (this.tagInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponseBody extends $dara.Model {
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

  validate() {
    if(this.appDeviceStats && typeof (this.appDeviceStats as any).validate === 'function') {
      (this.appDeviceStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUniqueDeviceStatResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveTagResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindPhoneResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindTagResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
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
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 绑定别名
   * 
   * @param request - BindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAliasResponse
   */
  async bindAliasWithOptions(request: BindAliasRequest, runtime: $dara.RuntimeOptions): Promise<BindAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindAliasResponse>(await this.callApi(params, req, runtime), new BindAliasResponse({}));
    } else {
      return $dara.cast<BindAliasResponse>(await this.execute(params, req, runtime), new BindAliasResponse({}));
    }

  }

  /**
   * 绑定别名
   * 
   * @param request - BindAliasRequest
   * @returns BindAliasResponse
   */
  async bindAlias(request: BindAliasRequest): Promise<BindAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAliasWithOptions(request, runtime);
  }

  /**
   * 绑定手机号码
   * 
   * @param request - BindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPhoneResponse
   */
  async bindPhoneWithOptions(request: BindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<BindPhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindPhoneResponse>(await this.callApi(params, req, runtime), new BindPhoneResponse({}));
    } else {
      return $dara.cast<BindPhoneResponse>(await this.execute(params, req, runtime), new BindPhoneResponse({}));
    }

  }

  /**
   * 绑定手机号码
   * 
   * @param request - BindPhoneRequest
   * @returns BindPhoneResponse
   */
  async bindPhone(request: BindPhoneRequest): Promise<BindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPhoneWithOptions(request, runtime);
  }

  /**
   * 绑定标签
   * 
   * @param request - BindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindTagResponse
   */
  async bindTagWithOptions(request: BindTagRequest, runtime: $dara.RuntimeOptions): Promise<BindTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<BindTagResponse>(await this.callApi(params, req, runtime), new BindTagResponse({}));
    } else {
      return $dara.cast<BindTagResponse>(await this.execute(params, req, runtime), new BindTagResponse({}));
    }

  }

  /**
   * 绑定标签
   * 
   * @param request - BindTagRequest
   * @returns BindTagResponse
   */
  async bindTag(request: BindTagRequest): Promise<BindTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindTagWithOptions(request, runtime);
  }

  /**
   * 取消定时推送任务
   * 
   * @param request - CancelPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPushResponse
   */
  async cancelPushWithOptions(request: CancelPushRequest, runtime: $dara.RuntimeOptions): Promise<CancelPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelPushResponse>(await this.callApi(params, req, runtime), new CancelPushResponse({}));
    } else {
      return $dara.cast<CancelPushResponse>(await this.execute(params, req, runtime), new CancelPushResponse({}));
    }

  }

  /**
   * 取消定时推送任务
   * 
   * @param request - CancelPushRequest
   * @returns CancelPushResponse
   */
  async cancelPush(request: CancelPushRequest): Promise<CancelPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelPushWithOptions(request, runtime);
  }

  /**
   * @param request - CheckCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCertificateResponse
   */
  async checkCertificateWithOptions(request: CheckCertificateRequest, runtime: $dara.RuntimeOptions): Promise<CheckCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckCertificateResponse>(await this.callApi(params, req, runtime), new CheckCertificateResponse({}));
    } else {
      return $dara.cast<CheckCertificateResponse>(await this.execute(params, req, runtime), new CheckCertificateResponse({}));
    }

  }

  /**
   * @param request - CheckCertificateRequest
   * @returns CheckCertificateResponse
   */
  async checkCertificate(request: CheckCertificateRequest): Promise<CheckCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCertificateWithOptions(request, runtime);
  }

  /**
   * 【废弃】验证设备有效性
   * 
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDeviceResponse
   */
  // Deprecated
  async checkDeviceWithOptions(request: CheckDeviceRequest, runtime: $dara.RuntimeOptions): Promise<CheckDeviceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckDeviceResponse>(await this.callApi(params, req, runtime), new CheckDeviceResponse({}));
    } else {
      return $dara.cast<CheckDeviceResponse>(await this.execute(params, req, runtime), new CheckDeviceResponse({}));
    }

  }

  /**
   * 【废弃】验证设备有效性
   * 
   * @deprecated OpenAPI CheckDevice is deprecated, please use Push::2016-08-01::CheckDevices instead.
   * 
   * @param request - CheckDeviceRequest
   * @returns CheckDeviceResponse
   */
  // Deprecated
  async checkDevice(request: CheckDeviceRequest): Promise<CheckDeviceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDeviceWithOptions(request, runtime);
  }

  /**
   * 批量检查设备有效性
   * 
   * @param request - CheckDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDevicesResponse
   */
  async checkDevicesWithOptions(request: CheckDevicesRequest, runtime: $dara.RuntimeOptions): Promise<CheckDevicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceIds)) {
      query["DeviceIds"] = request.deviceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CheckDevicesResponse>(await this.callApi(params, req, runtime), new CheckDevicesResponse({}));
    } else {
      return $dara.cast<CheckDevicesResponse>(await this.execute(params, req, runtime), new CheckDevicesResponse({}));
    }

  }

  /**
   * 批量检查设备有效性
   * 
   * @param request - CheckDevicesRequest
   * @returns CheckDevicesResponse
   */
  async checkDevices(request: CheckDevicesRequest): Promise<CheckDevicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDevicesWithOptions(request, runtime);
  }

  /**
   * 完成持续推送任务
   * 
   * @param request - CompleteContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPushWithOptions(request: CompleteContinuouslyPushRequest, runtime: $dara.RuntimeOptions): Promise<CompleteContinuouslyPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CompleteContinuouslyPushResponse>(await this.callApi(params, req, runtime), new CompleteContinuouslyPushResponse({}));
    } else {
      return $dara.cast<CompleteContinuouslyPushResponse>(await this.execute(params, req, runtime), new CompleteContinuouslyPushResponse({}));
    }

  }

  /**
   * 完成持续推送任务
   * 
   * @param request - CompleteContinuouslyPushRequest
   * @returns CompleteContinuouslyPushResponse
   */
  async completeContinuouslyPush(request: CompleteContinuouslyPushRequest): Promise<CompleteContinuouslyPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeContinuouslyPushWithOptions(request, runtime);
  }

  /**
   * 持续推送
   * 
   * @param request - ContinuouslyPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPushWithOptions(request: ContinuouslyPushRequest, runtime: $dara.RuntimeOptions): Promise<ContinuouslyPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ContinuouslyPushResponse>(await this.callApi(params, req, runtime), new ContinuouslyPushResponse({}));
    } else {
      return $dara.cast<ContinuouslyPushResponse>(await this.execute(params, req, runtime), new ContinuouslyPushResponse({}));
    }

  }

  /**
   * 持续推送
   * 
   * @param request - ContinuouslyPushRequest
   * @returns ContinuouslyPushResponse
   */
  async continuouslyPush(request: ContinuouslyPushRequest): Promise<ContinuouslyPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continuouslyPushWithOptions(request, runtime);
  }

  /**
   * 【废弃】查询用户已创建的app列表
   * 
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * 
   * @param request - ListSummaryAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryAppsWithOptions(runtime: $dara.RuntimeOptions): Promise<ListSummaryAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSummaryAppsResponse>(await this.callApi(params, req, runtime), new ListSummaryAppsResponse({}));
    } else {
      return $dara.cast<ListSummaryAppsResponse>(await this.execute(params, req, runtime), new ListSummaryAppsResponse({}));
    }

  }

  /**
   * 【废弃】查询用户已创建的app列表
   * 
   * @deprecated OpenAPI ListSummaryApps is deprecated, please use Mhub::2017-08-25::ListApps instead.
   * @returns ListSummaryAppsResponse
   */
  // Deprecated
  async listSummaryApps(): Promise<ListSummaryAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSummaryAppsWithOptions(runtime);
  }

  /**
   * 获取标签列表
   * 
   * @param request - ListTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: ListTagsRequest, runtime: $dara.RuntimeOptions): Promise<ListTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagsResponse>(await this.callApi(params, req, runtime), new ListTagsResponse({}));
    } else {
      return $dara.cast<ListTagsResponse>(await this.execute(params, req, runtime), new ListTagsResponse({}));
    }

  }

  /**
   * 获取标签列表
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  /**
   * 批量推送
   * 
   * @param request - MassPushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MassPushResponse
   */
  async massPushWithOptions(request: MassPushRequest, runtime: $dara.RuntimeOptions): Promise<MassPushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pushTask)) {
      body["PushTask"] = request.pushTask;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<MassPushResponse>(await this.callApi(params, req, runtime), new MassPushResponse({}));
    } else {
      return $dara.cast<MassPushResponse>(await this.execute(params, req, runtime), new MassPushResponse({}));
    }

  }

  /**
   * 批量推送
   * 
   * @param request - MassPushRequest
   * @returns MassPushResponse
   */
  async massPush(request: MassPushRequest): Promise<MassPushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.massPushWithOptions(request, runtime);
  }

  /**
   * 高级推送接口
   * 
   * @param request - PushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushResponse
   */
  async pushWithOptions(request: PushRequest, runtime: $dara.RuntimeOptions): Promise<PushResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.androidActivity)) {
      query["AndroidActivity"] = request.androidActivity;
    }

    if (!$dara.isNull(request.androidBadgeAddNum)) {
      query["AndroidBadgeAddNum"] = request.androidBadgeAddNum;
    }

    if (!$dara.isNull(request.androidBadgeClass)) {
      query["AndroidBadgeClass"] = request.androidBadgeClass;
    }

    if (!$dara.isNull(request.androidBadgeSetNum)) {
      query["AndroidBadgeSetNum"] = request.androidBadgeSetNum;
    }

    if (!$dara.isNull(request.androidBigBody)) {
      query["AndroidBigBody"] = request.androidBigBody;
    }

    if (!$dara.isNull(request.androidBigPictureUrl)) {
      query["AndroidBigPictureUrl"] = request.androidBigPictureUrl;
    }

    if (!$dara.isNull(request.androidBigTitle)) {
      query["AndroidBigTitle"] = request.androidBigTitle;
    }

    if (!$dara.isNull(request.androidExtParameters)) {
      query["AndroidExtParameters"] = request.androidExtParameters;
    }

    if (!$dara.isNull(request.androidHonorTargetUserType)) {
      query["AndroidHonorTargetUserType"] = request.androidHonorTargetUserType;
    }

    if (!$dara.isNull(request.androidHuaweiReceiptId)) {
      query["AndroidHuaweiReceiptId"] = request.androidHuaweiReceiptId;
    }

    if (!$dara.isNull(request.androidHuaweiTargetUserType)) {
      query["AndroidHuaweiTargetUserType"] = request.androidHuaweiTargetUserType;
    }

    if (!$dara.isNull(request.androidImageUrl)) {
      query["AndroidImageUrl"] = request.androidImageUrl;
    }

    if (!$dara.isNull(request.androidInboxBody)) {
      query["AndroidInboxBody"] = request.androidInboxBody;
    }

    if (!$dara.isNull(request.androidMessageHuaweiCategory)) {
      query["AndroidMessageHuaweiCategory"] = request.androidMessageHuaweiCategory;
    }

    if (!$dara.isNull(request.androidMessageHuaweiUrgency)) {
      query["AndroidMessageHuaweiUrgency"] = request.androidMessageHuaweiUrgency;
    }

    if (!$dara.isNull(request.androidMessageOppoCategory)) {
      query["AndroidMessageOppoCategory"] = request.androidMessageOppoCategory;
    }

    if (!$dara.isNull(request.androidMessageOppoNotifyLevel)) {
      query["AndroidMessageOppoNotifyLevel"] = request.androidMessageOppoNotifyLevel;
    }

    if (!$dara.isNull(request.androidMessageVivoCategory)) {
      query["AndroidMessageVivoCategory"] = request.androidMessageVivoCategory;
    }

    if (!$dara.isNull(request.androidMusic)) {
      query["AndroidMusic"] = request.androidMusic;
    }

    if (!$dara.isNull(request.androidNotificationBarPriority)) {
      query["AndroidNotificationBarPriority"] = request.androidNotificationBarPriority;
    }

    if (!$dara.isNull(request.androidNotificationBarType)) {
      query["AndroidNotificationBarType"] = request.androidNotificationBarType;
    }

    if (!$dara.isNull(request.androidNotificationChannel)) {
      query["AndroidNotificationChannel"] = request.androidNotificationChannel;
    }

    if (!$dara.isNull(request.androidNotificationGroup)) {
      query["AndroidNotificationGroup"] = request.androidNotificationGroup;
    }

    if (!$dara.isNull(request.androidNotificationHonorChannel)) {
      query["AndroidNotificationHonorChannel"] = request.androidNotificationHonorChannel;
    }

    if (!$dara.isNull(request.androidNotificationHuaweiChannel)) {
      query["AndroidNotificationHuaweiChannel"] = request.androidNotificationHuaweiChannel;
    }

    if (!$dara.isNull(request.androidNotificationNotifyId)) {
      query["AndroidNotificationNotifyId"] = request.androidNotificationNotifyId;
    }

    if (!$dara.isNull(request.androidNotificationThreadId)) {
      query["AndroidNotificationThreadId"] = request.androidNotificationThreadId;
    }

    if (!$dara.isNull(request.androidNotificationVivoChannel)) {
      query["AndroidNotificationVivoChannel"] = request.androidNotificationVivoChannel;
    }

    if (!$dara.isNull(request.androidNotificationXiaomiChannel)) {
      query["AndroidNotificationXiaomiChannel"] = request.androidNotificationXiaomiChannel;
    }

    if (!$dara.isNull(request.androidNotifyType)) {
      query["AndroidNotifyType"] = request.androidNotifyType;
    }

    if (!$dara.isNull(request.androidOpenType)) {
      query["AndroidOpenType"] = request.androidOpenType;
    }

    if (!$dara.isNull(request.androidOpenUrl)) {
      query["AndroidOpenUrl"] = request.androidOpenUrl;
    }

    if (!$dara.isNull(request.androidPopupActivity)) {
      query["AndroidPopupActivity"] = request.androidPopupActivity;
    }

    if (!$dara.isNull(request.androidPopupBody)) {
      query["AndroidPopupBody"] = request.androidPopupBody;
    }

    if (!$dara.isNull(request.androidPopupTitle)) {
      query["AndroidPopupTitle"] = request.androidPopupTitle;
    }

    if (!$dara.isNull(request.androidRemind)) {
      query["AndroidRemind"] = request.androidRemind;
    }

    if (!$dara.isNull(request.androidRenderStyle)) {
      query["AndroidRenderStyle"] = request.androidRenderStyle;
    }

    if (!$dara.isNull(request.androidTargetUserType)) {
      query["AndroidTargetUserType"] = request.androidTargetUserType;
    }

    if (!$dara.isNull(request.androidVivoPushMode)) {
      query["AndroidVivoPushMode"] = request.androidVivoPushMode;
    }

    if (!$dara.isNull(request.androidVivoReceiptId)) {
      query["AndroidVivoReceiptId"] = request.androidVivoReceiptId;
    }

    if (!$dara.isNull(request.androidXiaoMiActivity)) {
      query["AndroidXiaoMiActivity"] = request.androidXiaoMiActivity;
    }

    if (!$dara.isNull(request.androidXiaoMiNotifyBody)) {
      query["AndroidXiaoMiNotifyBody"] = request.androidXiaoMiNotifyBody;
    }

    if (!$dara.isNull(request.androidXiaoMiNotifyTitle)) {
      query["AndroidXiaoMiNotifyTitle"] = request.androidXiaoMiNotifyTitle;
    }

    if (!$dara.isNull(request.androidXiaomiBigPictureUrl)) {
      query["AndroidXiaomiBigPictureUrl"] = request.androidXiaomiBigPictureUrl;
    }

    if (!$dara.isNull(request.androidXiaomiImageUrl)) {
      query["AndroidXiaomiImageUrl"] = request.androidXiaomiImageUrl;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.harmonyAction)) {
      query["HarmonyAction"] = request.harmonyAction;
    }

    if (!$dara.isNull(request.harmonyActionType)) {
      query["HarmonyActionType"] = request.harmonyActionType;
    }

    if (!$dara.isNull(request.harmonyBadgeAddNum)) {
      query["HarmonyBadgeAddNum"] = request.harmonyBadgeAddNum;
    }

    if (!$dara.isNull(request.harmonyBadgeSetNum)) {
      query["HarmonyBadgeSetNum"] = request.harmonyBadgeSetNum;
    }

    if (!$dara.isNull(request.harmonyCategory)) {
      query["HarmonyCategory"] = request.harmonyCategory;
    }

    if (!$dara.isNull(request.harmonyExtParameters)) {
      query["HarmonyExtParameters"] = request.harmonyExtParameters;
    }

    if (!$dara.isNull(request.harmonyExtensionExtraData)) {
      query["HarmonyExtensionExtraData"] = request.harmonyExtensionExtraData;
    }

    if (!$dara.isNull(request.harmonyExtensionPush)) {
      query["HarmonyExtensionPush"] = request.harmonyExtensionPush;
    }

    if (!$dara.isNull(request.harmonyImageUrl)) {
      query["HarmonyImageUrl"] = request.harmonyImageUrl;
    }

    if (!$dara.isNull(request.harmonyInboxContent)) {
      query["HarmonyInboxContent"] = request.harmonyInboxContent;
    }

    if (!$dara.isNull(request.harmonyNotificationSlotType)) {
      query["HarmonyNotificationSlotType"] = request.harmonyNotificationSlotType;
    }

    if (!$dara.isNull(request.harmonyNotifyId)) {
      query["HarmonyNotifyId"] = request.harmonyNotifyId;
    }

    if (!$dara.isNull(request.harmonyReceiptId)) {
      query["HarmonyReceiptId"] = request.harmonyReceiptId;
    }

    if (!$dara.isNull(request.harmonyRemind)) {
      query["HarmonyRemind"] = request.harmonyRemind;
    }

    if (!$dara.isNull(request.harmonyRemindBody)) {
      query["HarmonyRemindBody"] = request.harmonyRemindBody;
    }

    if (!$dara.isNull(request.harmonyRemindTitle)) {
      query["HarmonyRemindTitle"] = request.harmonyRemindTitle;
    }

    if (!$dara.isNull(request.harmonyRenderStyle)) {
      query["HarmonyRenderStyle"] = request.harmonyRenderStyle;
    }

    if (!$dara.isNull(request.harmonyTestMessage)) {
      query["HarmonyTestMessage"] = request.harmonyTestMessage;
    }

    if (!$dara.isNull(request.harmonyUri)) {
      query["HarmonyUri"] = request.harmonyUri;
    }

    if (!$dara.isNull(request.idempotentToken)) {
      query["IdempotentToken"] = request.idempotentToken;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.pushTime)) {
      query["PushTime"] = request.pushTime;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.sendChannels)) {
      query["SendChannels"] = request.sendChannels;
    }

    if (!$dara.isNull(request.sendSpeed)) {
      query["SendSpeed"] = request.sendSpeed;
    }

    if (!$dara.isNull(request.smsDelaySecs)) {
      query["SmsDelaySecs"] = request.smsDelaySecs;
    }

    if (!$dara.isNull(request.smsParams)) {
      query["SmsParams"] = request.smsParams;
    }

    if (!$dara.isNull(request.smsSendPolicy)) {
      query["SmsSendPolicy"] = request.smsSendPolicy;
    }

    if (!$dara.isNull(request.smsSignName)) {
      query["SmsSignName"] = request.smsSignName;
    }

    if (!$dara.isNull(request.smsTemplateName)) {
      query["SmsTemplateName"] = request.smsTemplateName;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.trim)) {
      query["Trim"] = request.trim;
    }

    if (!$dara.isNull(request.iOSApnsEnv)) {
      query["iOSApnsEnv"] = request.iOSApnsEnv;
    }

    if (!$dara.isNull(request.iOSBadge)) {
      query["iOSBadge"] = request.iOSBadge;
    }

    if (!$dara.isNull(request.iOSBadgeAutoIncrement)) {
      query["iOSBadgeAutoIncrement"] = request.iOSBadgeAutoIncrement;
    }

    if (!$dara.isNull(request.iOSExtParameters)) {
      query["iOSExtParameters"] = request.iOSExtParameters;
    }

    if (!$dara.isNull(request.iOSInterruptionLevel)) {
      query["iOSInterruptionLevel"] = request.iOSInterruptionLevel;
    }

    if (!$dara.isNull(request.iOSLiveActivityAttributes)) {
      query["iOSLiveActivityAttributes"] = request.iOSLiveActivityAttributes;
    }

    if (!$dara.isNull(request.iOSLiveActivityAttributesType)) {
      query["iOSLiveActivityAttributesType"] = request.iOSLiveActivityAttributesType;
    }

    if (!$dara.isNull(request.iOSLiveActivityContentState)) {
      query["iOSLiveActivityContentState"] = request.iOSLiveActivityContentState;
    }

    if (!$dara.isNull(request.iOSLiveActivityDismissalDate)) {
      query["iOSLiveActivityDismissalDate"] = request.iOSLiveActivityDismissalDate;
    }

    if (!$dara.isNull(request.iOSLiveActivityEvent)) {
      query["iOSLiveActivityEvent"] = request.iOSLiveActivityEvent;
    }

    if (!$dara.isNull(request.iOSLiveActivityId)) {
      query["iOSLiveActivityId"] = request.iOSLiveActivityId;
    }

    if (!$dara.isNull(request.iOSLiveActivityStaleDate)) {
      query["iOSLiveActivityStaleDate"] = request.iOSLiveActivityStaleDate;
    }

    if (!$dara.isNull(request.iOSMusic)) {
      query["iOSMusic"] = request.iOSMusic;
    }

    if (!$dara.isNull(request.iOSMutableContent)) {
      query["iOSMutableContent"] = request.iOSMutableContent;
    }

    if (!$dara.isNull(request.iOSNotificationCategory)) {
      query["iOSNotificationCategory"] = request.iOSNotificationCategory;
    }

    if (!$dara.isNull(request.iOSNotificationCollapseId)) {
      query["iOSNotificationCollapseId"] = request.iOSNotificationCollapseId;
    }

    if (!$dara.isNull(request.iOSNotificationThreadId)) {
      query["iOSNotificationThreadId"] = request.iOSNotificationThreadId;
    }

    if (!$dara.isNull(request.iOSRelevanceScore)) {
      query["iOSRelevanceScore"] = request.iOSRelevanceScore;
    }

    if (!$dara.isNull(request.iOSRemind)) {
      query["iOSRemind"] = request.iOSRemind;
    }

    if (!$dara.isNull(request.iOSRemindBody)) {
      query["iOSRemindBody"] = request.iOSRemindBody;
    }

    if (!$dara.isNull(request.iOSSilentNotification)) {
      query["iOSSilentNotification"] = request.iOSSilentNotification;
    }

    if (!$dara.isNull(request.iOSSubtitle)) {
      query["iOSSubtitle"] = request.iOSSubtitle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushResponse>(await this.callApi(params, req, runtime), new PushResponse({}));
    } else {
      return $dara.cast<PushResponse>(await this.execute(params, req, runtime), new PushResponse({}));
    }

  }

  /**
   * 高级推送接口
   * 
   * @param request - PushRequest
   * @returns PushResponse
   */
  async push(request: PushRequest): Promise<PushResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushWithOptions(request, runtime);
  }

  /**
   * 推送消息给Android设备
   * 
   * @param request - PushMessageToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroidWithOptions(request: PushMessageToAndroidRequest, runtime: $dara.RuntimeOptions): Promise<PushMessageToAndroidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushMessageToAndroidResponse>(await this.callApi(params, req, runtime), new PushMessageToAndroidResponse({}));
    } else {
      return $dara.cast<PushMessageToAndroidResponse>(await this.execute(params, req, runtime), new PushMessageToAndroidResponse({}));
    }

  }

  /**
   * 推送消息给Android设备
   * 
   * @param request - PushMessageToAndroidRequest
   * @returns PushMessageToAndroidResponse
   */
  async pushMessageToAndroid(request: PushMessageToAndroidRequest): Promise<PushMessageToAndroidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMessageToAndroidWithOptions(request, runtime);
  }

  /**
   * 推送消息给iOS设备
   * 
   * @param request - PushMessageToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOSWithOptions(request: PushMessageToiOSRequest, runtime: $dara.RuntimeOptions): Promise<PushMessageToiOSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushMessageToiOSResponse>(await this.callApi(params, req, runtime), new PushMessageToiOSResponse({}));
    } else {
      return $dara.cast<PushMessageToiOSResponse>(await this.execute(params, req, runtime), new PushMessageToiOSResponse({}));
    }

  }

  /**
   * 推送消息给iOS设备
   * 
   * @param request - PushMessageToiOSRequest
   * @returns PushMessageToiOSResponse
   */
  async pushMessageToiOS(request: PushMessageToiOSRequest): Promise<PushMessageToiOSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMessageToiOSWithOptions(request, runtime);
  }

  /**
   * 推送通知给Android设备
   * 
   * @param request - PushNoticeToAndroidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroidWithOptions(request: PushNoticeToAndroidRequest, runtime: $dara.RuntimeOptions): Promise<PushNoticeToAndroidResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.storeOffline)) {
      query["StoreOffline"] = request.storeOffline;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushNoticeToAndroidResponse>(await this.callApi(params, req, runtime), new PushNoticeToAndroidResponse({}));
    } else {
      return $dara.cast<PushNoticeToAndroidResponse>(await this.execute(params, req, runtime), new PushNoticeToAndroidResponse({}));
    }

  }

  /**
   * 推送通知给Android设备
   * 
   * @param request - PushNoticeToAndroidRequest
   * @returns PushNoticeToAndroidResponse
   */
  async pushNoticeToAndroid(request: PushNoticeToAndroidRequest): Promise<PushNoticeToAndroidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushNoticeToAndroidWithOptions(request, runtime);
  }

  /**
   * 推送通知给iOS设备
   * 
   * @param request - PushNoticeToiOSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOSWithOptions(request: PushNoticeToiOSRequest, runtime: $dara.RuntimeOptions): Promise<PushNoticeToiOSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apnsEnv)) {
      query["ApnsEnv"] = request.apnsEnv;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.extParameters)) {
      query["ExtParameters"] = request.extParameters;
    }

    if (!$dara.isNull(request.jobKey)) {
      query["JobKey"] = request.jobKey;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushNoticeToiOSResponse>(await this.callApi(params, req, runtime), new PushNoticeToiOSResponse({}));
    } else {
      return $dara.cast<PushNoticeToiOSResponse>(await this.execute(params, req, runtime), new PushNoticeToiOSResponse({}));
    }

  }

  /**
   * 推送通知给iOS设备
   * 
   * @param request - PushNoticeToiOSRequest
   * @returns PushNoticeToiOSResponse
   */
  async pushNoticeToiOS(request: PushNoticeToiOSRequest): Promise<PushNoticeToiOSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushNoticeToiOSWithOptions(request, runtime);
  }

  /**
   * 查询别名
   * 
   * @param request - QueryAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAliasesResponse
   */
  async queryAliasesWithOptions(request: QueryAliasesRequest, runtime: $dara.RuntimeOptions): Promise<QueryAliasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryAliasesResponse>(await this.callApi(params, req, runtime), new QueryAliasesResponse({}));
    } else {
      return $dara.cast<QueryAliasesResponse>(await this.execute(params, req, runtime), new QueryAliasesResponse({}));
    }

  }

  /**
   * 查询别名
   * 
   * @param request - QueryAliasesRequest
   * @returns QueryAliasesResponse
   */
  async queryAliases(request: QueryAliasesRequest): Promise<QueryAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAliasesWithOptions(request, runtime);
  }

  /**
   * 查询设备详情
   * 
   * @param request - QueryDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfoWithOptions(request: QueryDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<QueryDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDeviceInfoResponse>(await this.callApi(params, req, runtime), new QueryDeviceInfoResponse({}));
    } else {
      return $dara.cast<QueryDeviceInfoResponse>(await this.execute(params, req, runtime), new QueryDeviceInfoResponse({}));
    }

  }

  /**
   * 查询设备详情
   * 
   * @param request - QueryDeviceInfoRequest
   * @returns QueryDeviceInfoResponse
   */
  async queryDeviceInfo(request: QueryDeviceInfoRequest): Promise<QueryDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 设备新增与留存
   * 
   * @param request - QueryDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStatWithOptions(request: QueryDeviceStatRequest, runtime: $dara.RuntimeOptions): Promise<QueryDeviceStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDeviceStatResponse>(await this.callApi(params, req, runtime), new QueryDeviceStatResponse({}));
    } else {
      return $dara.cast<QueryDeviceStatResponse>(await this.execute(params, req, runtime), new QueryDeviceStatResponse({}));
    }

  }

  /**
   * 设备新增与留存
   * 
   * @param request - QueryDeviceStatRequest
   * @returns QueryDeviceStatResponse
   */
  async queryDeviceStat(request: QueryDeviceStatRequest): Promise<QueryDeviceStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDeviceStatWithOptions(request, runtime);
  }

  /**
   * 通过账户查询设备列表
   * 
   * @param request - QueryDevicesByAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccountWithOptions(request: QueryDevicesByAccountRequest, runtime: $dara.RuntimeOptions): Promise<QueryDevicesByAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDevicesByAccountResponse>(await this.callApi(params, req, runtime), new QueryDevicesByAccountResponse({}));
    } else {
      return $dara.cast<QueryDevicesByAccountResponse>(await this.execute(params, req, runtime), new QueryDevicesByAccountResponse({}));
    }

  }

  /**
   * 通过账户查询设备列表
   * 
   * @param request - QueryDevicesByAccountRequest
   * @returns QueryDevicesByAccountResponse
   */
  async queryDevicesByAccount(request: QueryDevicesByAccountRequest): Promise<QueryDevicesByAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicesByAccountWithOptions(request, runtime);
  }

  /**
   * 通过别名查询设备列表
   * 
   * @param request - QueryDevicesByAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAliasWithOptions(request: QueryDevicesByAliasRequest, runtime: $dara.RuntimeOptions): Promise<QueryDevicesByAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alias)) {
      query["Alias"] = request.alias;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryDevicesByAliasResponse>(await this.callApi(params, req, runtime), new QueryDevicesByAliasResponse({}));
    } else {
      return $dara.cast<QueryDevicesByAliasResponse>(await this.execute(params, req, runtime), new QueryDevicesByAliasResponse({}));
    }

  }

  /**
   * 通过别名查询设备列表
   * 
   * @param request - QueryDevicesByAliasRequest
   * @returns QueryDevicesByAliasResponse
   */
  async queryDevicesByAlias(request: QueryDevicesByAliasRequest): Promise<QueryDevicesByAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDevicesByAliasWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPushRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecordsWithOptions(request: QueryPushRecordsRequest, runtime: $dara.RuntimeOptions): Promise<QueryPushRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryPushRecordsResponse>(await this.callApi(params, req, runtime), new QueryPushRecordsResponse({}));
    } else {
      return $dara.cast<QueryPushRecordsResponse>(await this.execute(params, req, runtime), new QueryPushRecordsResponse({}));
    }

  }

  /**
   * @param request - QueryPushRecordsRequest
   * @returns QueryPushRecordsResponse
   */
  async queryPushRecords(request: QueryPushRecordsRequest): Promise<QueryPushRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushRecordsWithOptions(request, runtime);
  }

  /**
   * App维度推送统计
   * 
   * @param request - QueryPushStatByAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByAppWithOptions(request: QueryPushStatByAppRequest, runtime: $dara.RuntimeOptions): Promise<QueryPushStatByAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryPushStatByAppResponse>(await this.callApi(params, req, runtime), new QueryPushStatByAppResponse({}));
    } else {
      return $dara.cast<QueryPushStatByAppResponse>(await this.execute(params, req, runtime), new QueryPushStatByAppResponse({}));
    }

  }

  /**
   * App维度推送统计
   * 
   * @param request - QueryPushStatByAppRequest
   * @returns QueryPushStatByAppResponse
   */
  async queryPushStatByApp(request: QueryPushStatByAppRequest): Promise<QueryPushStatByAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushStatByAppWithOptions(request, runtime);
  }

  /**
   * 任务维度推送统计
   * 
   * @param request - QueryPushStatByMsgRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsgWithOptions(request: QueryPushStatByMsgRequest, runtime: $dara.RuntimeOptions): Promise<QueryPushStatByMsgResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryPushStatByMsgResponse>(await this.callApi(params, req, runtime), new QueryPushStatByMsgResponse({}));
    } else {
      return $dara.cast<QueryPushStatByMsgResponse>(await this.execute(params, req, runtime), new QueryPushStatByMsgResponse({}));
    }

  }

  /**
   * 任务维度推送统计
   * 
   * @param request - QueryPushStatByMsgRequest
   * @returns QueryPushStatByMsgResponse
   */
  async queryPushStatByMsg(request: QueryPushStatByMsgRequest): Promise<QueryPushStatByMsgResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPushStatByMsgWithOptions(request, runtime);
  }

  /**
   * 查询标签列表
   * 
   * @param request - QueryTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTagsResponse
   */
  async queryTagsWithOptions(request: QueryTagsRequest, runtime: $dara.RuntimeOptions): Promise<QueryTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryTagsResponse>(await this.callApi(params, req, runtime), new QueryTagsResponse({}));
    } else {
      return $dara.cast<QueryTagsResponse>(await this.execute(params, req, runtime), new QueryTagsResponse({}));
    }

  }

  /**
   * 查询标签列表
   * 
   * @param request - QueryTagsRequest
   * @returns QueryTagsResponse
   */
  async queryTags(request: QueryTagsRequest): Promise<QueryTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTagsWithOptions(request, runtime);
  }

  /**
   * 去重设备统计
   * 
   * @param request - QueryUniqueDeviceStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStatWithOptions(request: QueryUniqueDeviceStatRequest, runtime: $dara.RuntimeOptions): Promise<QueryUniqueDeviceStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<QueryUniqueDeviceStatResponse>(await this.callApi(params, req, runtime), new QueryUniqueDeviceStatResponse({}));
    } else {
      return $dara.cast<QueryUniqueDeviceStatResponse>(await this.execute(params, req, runtime), new QueryUniqueDeviceStatResponse({}));
    }

  }

  /**
   * 去重设备统计
   * 
   * @param request - QueryUniqueDeviceStatRequest
   * @returns QueryUniqueDeviceStatResponse
   */
  async queryUniqueDeviceStat(request: QueryUniqueDeviceStatRequest): Promise<QueryUniqueDeviceStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUniqueDeviceStatWithOptions(request, runtime);
  }

  /**
   * 删除标签
   * 
   * @param request - RemoveTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagResponse
   */
  async removeTagWithOptions(request: RemoveTagRequest, runtime: $dara.RuntimeOptions): Promise<RemoveTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveTagResponse>(await this.callApi(params, req, runtime), new RemoveTagResponse({}));
    } else {
      return $dara.cast<RemoveTagResponse>(await this.execute(params, req, runtime), new RemoveTagResponse({}));
    }

  }

  /**
   * 删除标签
   * 
   * @param request - RemoveTagRequest
   * @returns RemoveTagResponse
   */
  async removeTag(request: RemoveTagRequest): Promise<RemoveTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagWithOptions(request, runtime);
  }

  /**
   * 解绑别名
   * 
   * @param request - UnbindAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAliasResponse
   */
  async unbindAliasWithOptions(request: UnbindAliasRequest, runtime: $dara.RuntimeOptions): Promise<UnbindAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.unbindAll)) {
      query["UnbindAll"] = request.unbindAll;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindAliasResponse>(await this.callApi(params, req, runtime), new UnbindAliasResponse({}));
    } else {
      return $dara.cast<UnbindAliasResponse>(await this.execute(params, req, runtime), new UnbindAliasResponse({}));
    }

  }

  /**
   * 解绑别名
   * 
   * @param request - UnbindAliasRequest
   * @returns UnbindAliasResponse
   */
  async unbindAlias(request: UnbindAliasRequest): Promise<UnbindAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAliasWithOptions(request, runtime);
  }

  /**
   * 解绑手机号码
   * 
   * @param request - UnbindPhoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindPhoneResponse
   */
  async unbindPhoneWithOptions(request: UnbindPhoneRequest, runtime: $dara.RuntimeOptions): Promise<UnbindPhoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindPhoneResponse>(await this.callApi(params, req, runtime), new UnbindPhoneResponse({}));
    } else {
      return $dara.cast<UnbindPhoneResponse>(await this.execute(params, req, runtime), new UnbindPhoneResponse({}));
    }

  }

  /**
   * 解绑手机号码
   * 
   * @param request - UnbindPhoneRequest
   * @returns UnbindPhoneResponse
   */
  async unbindPhone(request: UnbindPhoneRequest): Promise<UnbindPhoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindPhoneWithOptions(request, runtime);
  }

  /**
   * 绑定标签
   * 
   * @param request - UnbindTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindTagResponse
   */
  async unbindTagWithOptions(request: UnbindTagRequest, runtime: $dara.RuntimeOptions): Promise<UnbindTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.clientKey)) {
      query["ClientKey"] = request.clientKey;
    }

    if (!$dara.isNull(request.keyType)) {
      query["KeyType"] = request.keyType;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UnbindTagResponse>(await this.callApi(params, req, runtime), new UnbindTagResponse({}));
    } else {
      return $dara.cast<UnbindTagResponse>(await this.execute(params, req, runtime), new UnbindTagResponse({}));
    }

  }

  /**
   * 绑定标签
   * 
   * @param request - UnbindTagRequest
   * @returns UnbindTagResponse
   */
  async unbindTag(request: UnbindTagRequest): Promise<UnbindTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindTagWithOptions(request, runtime);
  }

}
