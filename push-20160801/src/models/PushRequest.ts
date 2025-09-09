// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * 0
   * 
   * **if can be null:**
   * true
   */
  androidMeizuNoticeMsgType?: number;
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
  androidOppoPrivateContentParameters?: { [key: string]: string };
  androidOppoPrivateMsgTemplateId?: string;
  androidOppoPrivateTitleParameters?: { [key: string]: string };
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
      androidMeizuNoticeMsgType: 'AndroidMeizuNoticeMsgType',
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
      androidOppoPrivateContentParameters: 'androidOppoPrivateContentParameters',
      androidOppoPrivateMsgTemplateId: 'androidOppoPrivateMsgTemplateId',
      androidOppoPrivateTitleParameters: 'androidOppoPrivateTitleParameters',
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
      androidMeizuNoticeMsgType: 'number',
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
      androidOppoPrivateContentParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      androidOppoPrivateMsgTemplateId: 'string',
      androidOppoPrivateTitleParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.androidOppoPrivateContentParameters) {
      $dara.Model.validateMap(this.androidOppoPrivateContentParameters);
    }
    if(this.androidOppoPrivateTitleParameters) {
      $dara.Model.validateMap(this.androidOppoPrivateTitleParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

