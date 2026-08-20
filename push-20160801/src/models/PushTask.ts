// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PushTaskMessage extends $dara.Model {
  /**
   * @remarks
   * The body of the message to send.
   * 
   * @example
   * {"key": "value"}
   */
  body?: string;
  /**
   * @remarks
   * The title of the message to send.
   * 
   * @example
   * title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
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

export class PushTaskNotificationAndroidOptionsAccs extends $dara.Model {
  /**
   * @remarks
   * The Android custom notification bar style. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  customStyle?: number;
  /**
   * @remarks
   * The notification alert type. Valid values:
   * 
   * - `VIBRATE`: vibration (default)
   * - `SOUND`: sound
   * - `BOTH`: sound and vibration
   * - `NONE`: silent
   * 
   * @example
   * NONE
   */
  notifyType?: string;
  /**
   * @remarks
   * The activity to open when the notification is tapped. This parameter is valid only when `OpenType` is set to `ACTIVITY`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  openActivity?: string;
  /**
   * @remarks
   * The action after tapping the notification. Valid values:
   * 
   * @example
   * APPLICATION
   */
  openType?: string;
  /**
   * @remarks
   * The URL to open when the notification is tapped on Android. This parameter is valid only when `OpenType` is set to `URL`.
   * 
   * @example
   * www.example.com
   */
  openUrl?: string;
  /**
   * @remarks
   * The priority of the Android notification position in the notification bar. Valid values: -2, -1, 0, 1, 2.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The message group. Messages in the same group are collapsed in the notification bar and can be expanded. Notifications in different groups are displayed separately.
   * 
   * @example
   * order_ORD20231201001
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      customStyle: 'CustomStyle',
      notifyType: 'NotifyType',
      openActivity: 'OpenActivity',
      openType: 'OpenType',
      openUrl: 'OpenUrl',
      priority: 'Priority',
      threadId: 'ThreadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customStyle: 'number',
      notifyType: 'string',
      openActivity: 'string',
      openType: 'string',
      openUrl: 'string',
      priority: 'number',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsHonor extends $dara.Model {
  /**
   * @remarks
   * Specifies the importance parameter for Honor notification message classification, which determines the notification behavior on the user\\"s device. Valid values:
   * 
   * - `0`: informational and marketing messages
   * - `1`: service and communication messages
   * 
   * You must apply for this on the Honor platform. [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * 0
   */
  importance?: number;
  static names(): { [key: string]: string } {
    return {
      importance: 'Importance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importance: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsHuawei extends $dara.Model {
  /**
   * @remarks
   * The Huawei quick notification parameter.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * Purpose 1: After completing the [self-classification privilege](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514) application, this parameter identifies the message type, determines the [notification method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and accelerates the delivery of specific message types. For valid values, refer to the [message classification standard](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei Push documentation. Use the "Cloud notification category value" or "Local notification category value" from the table in the documentation.
   * 
   * Purpose 2: After [applying for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this parameter identifies high-priority pass-through scenarios. Valid values:
   * 
   * - `VOIP`: audio and video calls
   * - `PLAY_VOICE`: voice broadcast
   * 
   * > - For messages where the "Cloud notification category value" is "Not applicable", messages are sent through the Alibaba Cloud proprietary channel.
   * > - For messages where the "Local notification category value" is "Not applicable", messages are sent through the Huawei channel.
   * 
   * @example
   * VOIP
   */
  category?: string;
  /**
   * @remarks
   * The importance parameter for Huawei notification message classification, which determines the notification behavior on the user device. Valid values:
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development and integration, refer to [Huawei Live Notification Push Guide](https://help.aliyun.com/document_detail/2983768.html).
   * 
   * @example
   * {
   *   "activityId": 1,
   *   "operation": 1,
   *   "event": "TAXI",
   *   "activityData": {
   *     "notificationData": {
   *       "type": 3
   *     }
   *   }
   * }
   */
  liveNotificationPayload?: string;
  /**
   * @remarks
   * The receipt ID of the Huawei channel. You can view this receipt ID in the receipt parameter settings on the Huawei channel push operation platform.
   * 
   * @example
   * RCP4C123456
   */
  receiptId?: string;
  /**
   * @remarks
   * The delivery priority of the Huawei channel notification. Valid values:
   * 
   * @example
   * NORMAL
   */
  urgency?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      importance: 'Importance',
      liveNotificationPayload: 'LiveNotificationPayload',
      receiptId: 'ReceiptId',
      urgency: 'Urgency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'number',
      category: 'string',
      importance: 'number',
      liveNotificationPayload: 'string',
      receiptId: 'string',
      urgency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsMeizu extends $dara.Model {
  /**
   * @remarks
   * The Meizu message type.
   * 
   * @example
   * 0
   */
  noticeMsgType?: number;
  static names(): { [key: string]: string } {
    return {
      noticeMsgType: 'NoticeMsgType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noticeMsgType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsOppo extends $dara.Model {
  /**
   * @remarks
   * OPPO classifies messages into two categories for management: Communication & Service, and Content & Marketing.
   * 
   * @example
   * NEWS
   */
  category?: string;
  /**
   * @remarks
   * The JSON character string of the OPPO Fluid Cloud intent delete data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid when the AndroidOppoIntelligentIntent parameter is already specified. For development and integration, see References: [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
   * 
   * @example
   * {
   *     "intentName": "Example.Progress",
   *     "entityIds": [
   *         "A580202509130712"
   *     ],
   *     "serviceId": {
   *         "launcher": "999800001",
   *         "fluidCloud": "999900001"
   *     }
   * }
   */
  deleteIntentData?: string;
  /**
   * @remarks
   * The JSON character string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, see References: [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
   * 
   * @example
   * {
   *     "intentName": "Example.Progress",
   *     "identifier": "d71ebd3119877b12ecdb6c4fe96b068e",
   *     "timestamp": 1729485000989,
   *     "serviceId": {
   *         "launcher": "999800001",
   *         "fluidCloud": "999900001"
   *     },
   *     "intentAction": {
   *         "actionStatus": 0
   *     },
   *     "intentEntity": {
   *         "entityName": "TAXI"
   *     }
   * }
   */
  intelligentIntent?: string;
  /**
   * @remarks
   * The notification bar message alert level for the OPPO channel. Valid values:
   * 
   * @example
   * 1
   */
  notifyLevel?: number;
  /**
   * @remarks
   * The OPPO private message template content parameters.
   * 
   * @example
   * {
   * "key1": "value1",
   * "key2": "value2"
   * }
   */
  privateContentParameters?: string;
  /**
   * @remarks
   * The OPPO private message template ID.
   * 
   * @example
   * 687557242b1634hzefs3d5013
   */
  privateMsgTemplateId?: string;
  /**
   * @remarks
   * The OPPO private message template title parameters.
   * 
   * @example
   * {"name": "John"}
   */
  privateTitleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteIntentData: 'DeleteIntentData',
      intelligentIntent: 'IntelligentIntent',
      notifyLevel: 'NotifyLevel',
      privateContentParameters: 'PrivateContentParameters',
      privateMsgTemplateId: 'PrivateMsgTemplateId',
      privateTitleParameters: 'PrivateTitleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteIntentData: 'string',
      intelligentIntent: 'string',
      notifyLevel: 'number',
      privateContentParameters: 'string',
      privateMsgTemplateId: 'string',
      privateTitleParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsVivo extends $dara.Model {
  /**
   * @remarks
   * The badge increment value for the vivo channel.
   * 
   * @example
   * true
   */
  addBadge?: boolean;
  /**
   * @remarks
   * vivo classifies messages into two categories for management: system messages and operational messages.
   * 
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @remarks
   * Specifies the vivo notification message category. Valid values:
   * 
   * - `0`: Operational message (default).
   * - `1`: System message.
   * 
   * > Use `Category` for notification classification. You need to apply on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON character string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, see References: [vivo Atomic Island Push Guide](https://www.alibabacloud.com/help/en/document_detail/3030718.html).
   * 
   * @example
   * {
   *     "operation": 0,
   *     "scene": "HEALTH_REGISTER",
   *     "templateType": 1,
   *     "showNotify": true,
   *     "changeRecord": 999,
   *     "capsuleData": {
   *         "bgColor": "#32d4d4"
   *     }
   * }
   */
  liveMessage?: string;
  /**
   * @remarks
   * The message receipt identifier for the vivo vendor push channel, used to receive push result callback notifications.
   * 
   * @example
   * 1232221
   */
  receiptId?: string;
  static names(): { [key: string]: string } {
    return {
      addBadge: 'AddBadge',
      category: 'Category',
      importance: 'Importance',
      liveMessage: 'LiveMessage',
      receiptId: 'ReceiptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBadge: 'boolean',
      category: 'string',
      importance: 'number',
      liveMessage: 'string',
      receiptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptionsXiaomi extends $dara.Model {
  /**
   * @remarks
   * The channel ID for Xiaomi notification types. You must apply for this on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * 
   * > A single application can apply for a maximum of 8 channels on the Xiaomi channel. Plan ahead.
   * 
   * @example
   * michannel
   */
  channel?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see References: [Xiaomi Super Island Push Guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
   * 
   * @example
   * {
   *     "param_v2": {
   *         "business": "taxi",
   *         "updatable": true,
   *         "orderId": "A580202509130712",
   *         "param_island": {
   *             "islandProperty": 1,
   *             "bigIslandArea": {
   *                 "imageTextInfoLeft": {
   *                     "type": 1
   *                 }
   *             }
   *         }
   *     }
   * }
   */
  focusParam?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Super Island image data [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see References: [Xiaomi Super Island Push Guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
   * 
   * @example
   * {
   *     "miui.focus.pic_ticker": "https://example.com/ticker.jpg",
   *     "miui.focus.pic_aod": "https://example.com/aod.jpg",
   *     "miui.focus.pic_imageText": "https://example.com/imageText.jpg"
   * }
   */
  focusPics?: string;
  /**
   * @remarks
   * The Xiaomi private message template ID.
   * 
   * @example
   * P10645
   */
  templateId?: string;
  /**
   * @remarks
   * The Xiaomi private message template parameters in JSON string format.
   * 
   * @example
   * {"keywords1":"Tom","keywords2":"phone"}
   */
  templateParams?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      focusParam: 'FocusParam',
      focusPics: 'FocusPics',
      templateId: 'TemplateId',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      focusParam: 'string',
      focusPics: 'string',
      templateId: 'string',
      templateParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroidOptions extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud proprietary channel configuration.
   */
  accs?: PushTaskNotificationAndroidOptionsAccs;
  /**
   * @remarks
   * The Honor channel configuration.
   */
  honor?: PushTaskNotificationAndroidOptionsHonor;
  /**
   * @remarks
   * The Huawei channel configuration.
   */
  huawei?: PushTaskNotificationAndroidOptionsHuawei;
  /**
   * @remarks
   * The Meizu channel configuration.
   */
  meizu?: PushTaskNotificationAndroidOptionsMeizu;
  /**
   * @remarks
   * The OPPO channel configuration.
   */
  oppo?: PushTaskNotificationAndroidOptionsOppo;
  /**
   * @remarks
   * The vivo channel configuration.
   */
  vivo?: PushTaskNotificationAndroidOptionsVivo;
  /**
   * @remarks
   * The Xiaomi channel configuration.
   */
  xiaomi?: PushTaskNotificationAndroidOptionsXiaomi;
  static names(): { [key: string]: string } {
    return {
      accs: 'Accs',
      honor: 'Honor',
      huawei: 'Huawei',
      meizu: 'Meizu',
      oppo: 'Oppo',
      vivo: 'Vivo',
      xiaomi: 'Xiaomi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accs: PushTaskNotificationAndroidOptionsAccs,
      honor: PushTaskNotificationAndroidOptionsHonor,
      huawei: PushTaskNotificationAndroidOptionsHuawei,
      meizu: PushTaskNotificationAndroidOptionsMeizu,
      oppo: PushTaskNotificationAndroidOptionsOppo,
      vivo: PushTaskNotificationAndroidOptionsVivo,
      xiaomi: PushTaskNotificationAndroidOptionsXiaomi,
    };
  }

  validate() {
    if(this.accs && typeof (this.accs as any).validate === 'function') {
      (this.accs as any).validate();
    }
    if(this.honor && typeof (this.honor as any).validate === 'function') {
      (this.honor as any).validate();
    }
    if(this.huawei && typeof (this.huawei as any).validate === 'function') {
      (this.huawei as any).validate();
    }
    if(this.meizu && typeof (this.meizu as any).validate === 'function') {
      (this.meizu as any).validate();
    }
    if(this.oppo && typeof (this.oppo as any).validate === 'function') {
      (this.oppo as any).validate();
    }
    if(this.vivo && typeof (this.vivo as any).validate === 'function') {
      (this.vivo as any).validate();
    }
    if(this.xiaomi && typeof (this.xiaomi as any).validate === 'function') {
      (this.xiaomi as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationAndroid extends $dara.Model {
  /**
   * @remarks
   * The full class name of the Activity for the badge setting application entry.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  badgeActivity?: string;
  /**
   * @remarks
   * The incremental badge count value, which is added to the current badge count.
   * 
   * > - Supported on `Huawei` and `Honor` channels.
   * > - If both `BadgeAddNum` and `BadgeSetNum` are specified, `BadgeSetNum` takes precedence.
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * The fixed badge number value. Valid values: 1 to 99.
   * 
   * @example
   * 4
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * The channelId of the Android app. This must match the channelId configured in the vendor app.
   * 
   * @example
   * 8.0up
   */
  channelId?: string;
  /**
   * @remarks
   * The custom extension parameters for Android notifications.
   * 
   * > - The parameter must be passed in standard JSON Map format. Incorrect format causes parsing failures.
   * 
   * @example
   * {"key1":"value1"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The message group. Only the latest message and the total number of messages received in the group are displayed in the notification bar. All messages are not displayed and cannot be expanded. Currently supported channels:
   * 
   * - Huawei vendor channel
   * - Honor vendor channel
   * - Self-owned channel with Android SDK 3.9.1 and earlier
   * 
   * > The self-owned channel no longer supports this parameter in Android SDK 3.9.2 and later.
   * 
   * @example
   * group-1
   */
  groupId?: string;
  /**
   * @remarks
   * The URL of the right-side icon. Currently supported:
   * 
   * - `Huawei EMUI` (applicable only in long text mode and Inbox mode).
   * - `Honor Magic UI` (applicable only in long text mode).
   * - `Custom channel` (Android SDK 3.5.0 and later).
   * 
   * @example
   * https://imag.example.com/image.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The body content in Inbox mode. The value must be a valid JSON array with no more than 5 elements. Currently supported on:
   * 
   * - Huawei: EMUI 9 and later
   * - Honor: Magic UI 4.0 and later
   * - Xiaomi: MIUI 10 and later
   * - OPPO: ColorOS 5.0 and later
   * - Custom channel: Android SDK 3.6.0 and later
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The notification sound for the Huawei vendor channel. Specify the audio file name stored in the client project directory `app/src/main/res/raw/` without the file format extension. If not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  music?: string;
  /**
   * @remarks
   * The unique identifier of the Android notification bar message, used to control notification override and replacement behavior. A new notification with the same NotifyId automatically overrides the old notification.
   * 
   * @example
   * 233856727
   */
  notifyId?: number;
  /**
   * @remarks
   * The detailed channel configuration.
   */
  options?: PushTaskNotificationAndroidOptions;
  /**
   * @remarks
   * The image URL in large image mode. Currently supported: proprietary channel: Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  pictureUrl?: string;
  /**
   * @remarks
   * The notification style. Valid values:
   * 
   * @example
   * 0
   */
  renderStyle?: string;
  /**
   * @remarks
   * Specifies the notification type for the manufacturer channel. Valid values:
   * 
   * - `false`: Production notification. This is the default value.
   * - `true`: Test notification.
   * 
   * > Currently supported: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * false
   */
  testMessage?: boolean;
  /**
   * @remarks
   * The Activity to which the user is redirected after tapping the notification.
   * 
   * >Warning: This parameter is required when you use an Android vendor channel.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  vendorChannelActivity?: string;
  static names(): { [key: string]: string } {
    return {
      badgeActivity: 'BadgeActivity',
      badgeAddNum: 'BadgeAddNum',
      badgeSetNum: 'BadgeSetNum',
      channelId: 'ChannelId',
      extParameters: 'ExtParameters',
      groupId: 'GroupId',
      imageUrl: 'ImageUrl',
      inboxContent: 'InboxContent',
      music: 'Music',
      notifyId: 'NotifyId',
      options: 'Options',
      pictureUrl: 'PictureUrl',
      renderStyle: 'RenderStyle',
      testMessage: 'TestMessage',
      vendorChannelActivity: 'VendorChannelActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      badgeActivity: 'string',
      badgeAddNum: 'number',
      badgeSetNum: 'number',
      channelId: 'string',
      extParameters: 'string',
      groupId: 'string',
      imageUrl: 'string',
      inboxContent: { 'type': 'array', 'itemType': 'string' },
      music: 'string',
      notifyId: 'number',
      options: PushTaskNotificationAndroidOptions,
      pictureUrl: 'string',
      renderStyle: 'string',
      testMessage: 'boolean',
      vendorChannelActivity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inboxContent)) {
      $dara.Model.validateArray(this.inboxContent);
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationHmos extends $dara.Model {
  /**
   * @remarks
   * The action that corresponds to the ability of the in-app page.
   * 
   * > For more information, refer to [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * com.example.action
   */
  action?: string;
  /**
   * @remarks
   * The incremental badge number for HarmonyOS applications.
   * 
   * > - Supported since HarmonyOS SDK 1.2.0.
   * > - Refer to the HarmonyOS badge [addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * The badge number for HarmonyOS applications.
   * 
   * > - Refer to the HarmonyOS badge [setNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145) description.
   * > - Supported since HarmonyOS SDK version 1.2.0.
   * 
   * @example
   * 1
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * The category of the notification message. This is an optional parameter. Default value: `MARKETING`.
   * 
   * > After you complete the application for the notification message self-classification privilege, this parameter identifies the message type. Different notification message types affect how messages are displayed and how reminders are triggered. For more information, refer to [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * IM
   */
  category?: string;
  /**
   * @remarks
   * The custom extension attributes of the notification message, which are used to pass additional business data.
   * 
   * > The parameter must be passed in standard JSON Map format. Format errors will cause parsing failures.
   * 
   * @example
   * {"key": "value"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The extra data of the notification extension message.
   * 
   * > - Valid when sending HarmonyOS notification extension messages.
   * > - Conceptually equivalent to the extraData field of HarmonyOS notification extension messages. For the specific definition, refer to the HarmonyOS [ExtensionPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234) documentation.
   * > - Supported since HarmonyOS SDK 1.2.0.
   * 
   * @example
   * text
   */
  extensionExtraData?: string;
  /**
   * @remarks
   * Enables HarmonyOS notification extension.
   * 
   * > - To send notification extension messages, you must first apply for permissions on the HarmonyOS official website. For more information, refer to [HarmonyOS documentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) on sending notification extension messages.
   * > - Supported starting from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * false
   */
  extensionPush?: boolean;
  /**
   * @remarks
   * The URL of the large icon displayed on the right side of the notification. The URL must use the HTTPS protocol.
   * 
   * > - Supported image formats include png, jpg, jpeg, heif, gif, and bmp. The image length × width must be less than 25000 pixels.
   * > - For more information, refer to the HarmonyOS official documentation [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117).
   * 
   * @example
   * https://example.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * When `RenderStyle` is set to `MULTI_LINE`, this field is required to define the content in multi-line text style. A maximum of 3 items are supported.
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The JSON string of the HarmonyOS Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development and integration, refer to [HarmonyOS Live View Push Guide](https://help.aliyun.com/document_detail/2982112.html).
   * 
   * @example
   * {
   *   "activityId": 1,
   *   "operation": 0,
   *   "event": "TAXI",
   *   "status": "DRIVER_ON_THE_WAY",
   *   "activityData": {
   *     "notificationData": {
   *       "type": 3
   *     }
   *   }
   * }
   */
  liveViewPayload?: string;
  /**
   * @remarks
   * The unique identifier (notifyId) for each message displayed in the notification bar. If not provided, the push service automatically generates a unique identifier. Different notification messages can use the same notifyId to enable new messages to overwrite old messages. For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * 123456
   */
  notifyId?: number;
  /**
   * @remarks
   * The receipt ID of the HarmonyOS channel. You can view this receipt ID in the receipt parameter settings on the HarmonyOS channel push operation platform.
   * 
   * @example
   * RCPB***DFD5
   */
  receiptId?: string;
  /**
   * @remarks
   * The notification message style. This is an optional parameter. Default value: normal notification.
   * 
   * @example
   * NORMAL
   */
  renderStyle?: string;
  /**
   * @remarks
   * Specifies the notification channel type to use.
   * 
   * > - Valid only for the Alibaba Cloud proprietary channel.
   * > - For more information, refer to the HarmonyOS official documentation [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype).
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  slotType?: string;
  /**
   * @remarks
   * The HarmonyOS custom ringtone file name.
   * 
   * @example
   * music.mp3
   */
  sound?: string;
  /**
   * @remarks
   * The custom notification ringtone duration in seconds, with a range of [1,60]. The ringtone loops if its duration is shorter than the specified value.
   * 
   * @example
   * 2
   */
  soundDuration?: number;
  /**
   * @remarks
   * Enables the test message.
   * 
   * > - For more information, refer to the HarmonyOS push parameter [TestMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212).
   * 
   * @example
   * true
   */
  testMessage?: boolean;
  /**
   * @remarks
   * The URI that corresponds to the in-app page ability.
   * 
   * > - When multiple Abilities exist, specify the action and URI for each Ability separately. The action is used first to find the corresponding in-app page.
   * > - For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      badgeAddNum: 'BadgeAddNum',
      badgeSetNum: 'BadgeSetNum',
      category: 'Category',
      extParameters: 'ExtParameters',
      extensionExtraData: 'ExtensionExtraData',
      extensionPush: 'ExtensionPush',
      imageUrl: 'ImageUrl',
      inboxContent: 'InboxContent',
      liveViewPayload: 'LiveViewPayload',
      notifyId: 'NotifyId',
      receiptId: 'ReceiptId',
      renderStyle: 'RenderStyle',
      slotType: 'SlotType',
      sound: 'Sound',
      soundDuration: 'SoundDuration',
      testMessage: 'TestMessage',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      badgeAddNum: 'number',
      badgeSetNum: 'number',
      category: 'string',
      extParameters: 'string',
      extensionExtraData: 'string',
      extensionPush: 'boolean',
      imageUrl: 'string',
      inboxContent: { 'type': 'array', 'itemType': 'string' },
      liveViewPayload: 'string',
      notifyId: 'number',
      receiptId: 'string',
      renderStyle: 'string',
      slotType: 'string',
      sound: 'string',
      soundDuration: 'number',
      testMessage: 'boolean',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inboxContent)) {
      $dara.Model.validateArray(this.inboxContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationIosLiveActivity extends $dara.Model {
  /**
   * @remarks
   * The static pass-through parameters for iOS Live Activities push, used to pass immutable business identification information.
   * 
   * @example
   * {
   *   "orderId": "ORD20231201001",
   *   "restaurantName": "Delicious Restaurant",
   *   "customerAddress": "No. xx, xx Road, xx District",
   *   "orderType": "delivery"
   * }
   */
  attributes?: string;
  /**
   * @remarks
   * The type of the Live Activity to start.
   * 
   * @example
   * OrderActivityAttributes
   */
  attributesType?: string;
  /**
   * @remarks
   * The dynamic pass-through parameters of the Live Activity, containing real-time updatable status information and changing data.
   * 
   * @example
   * {
   *     "status": "delivering",
   *     "estimatedTime": "10 minutes",
   *     "progress": 80,
   *     "driverName": "Driver Li",
   *     "currentStep": "The delivery driver is on the way"}
   * }
   */
  contentState?: string;
  /**
   * @remarks
   * The retention time of an ended Live Activity on the lock screen, allowing users to view information after the activity ends. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1701439800
   */
  dismissalDate?: number;
  /**
   * @remarks
   * Starts, updates, or ends a Live Activity.
   * 
   * @example
   * start
   */
  event?: string;
  /**
   * @remarks
   * The unique identifier of the Live Activity, used to associate the device-side activity instance with the server-side push target.
   * 
   * @example
   * FOOD_DELIVERY_ORD20231201001
   */
  id?: string;
  /**
   * @remarks
   * The expiration timestamp for the iOS Live Activity content, specified as a Unix timestamp in seconds.
   * 
   * > - After the specified time is reached, the system automatically marks the activity as expired.
   * > - Expired activities are removed from the Dynamic Island and Lock Screen.
   * > - This prevents outdated information from occupying the user interface for an extended period.
   * 
   * @example
   * 1701425400
   */
  staleDate?: number;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      attributesType: 'AttributesType',
      contentState: 'ContentState',
      dismissalDate: 'DismissalDate',
      event: 'Event',
      id: 'Id',
      staleDate: 'StaleDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      attributesType: 'string',
      contentState: 'string',
      dismissalDate: 'number',
      event: 'string',
      id: 'string',
      staleDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotificationIos extends $dara.Model {
  /**
   * @remarks
   * iOS notifications are sent through the APNs center. You need to specify the corresponding environment information. Optional parameter. Default value: production environment.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * The iOS application badge number.
   * 
   * @example
   * 1
   */
  badge?: number;
  /**
   * @remarks
   * Specifies whether to enable the badge auto-increment feature. Optional parameter. Default value: false.
   * 
   * @example
   * false
   */
  badgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The category identifier for the iOS notification, which defines the interaction behavior and display style of the notification.
   * 
   * > - The category must be pre-registered in the app to take effect.
   * > - Different categories can define different sets of actions.
   * 
   * @example
   * MESSAGE_REPLY
   */
  category?: string;
  /**
   * @remarks
   * The unique identifier for notification collapsing. Notifications with the same identifier are overwritten and displayed as one.
   * 
   * @example
   * order_status_update_12345
   */
  collapseId?: string;
  /**
   * @remarks
   * The custom extension attributes of the iOS notification.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The interruption level. Optional parameter. Valid values:
   * 
   * @example
   * active
   */
  interruptionLevel?: string;
  /**
   * @remarks
   * The Live Activity parameter object.
   * 
   * >Notice: 
   * 
   * - Live Activity push notifications can only be sent to a **single device** by specifying the `DEVICE` type.
   * - When pushing Live Activity notifications, the title and body parameters are optional.
   */
  liveActivity?: PushTaskNotificationIosLiveActivity;
  /**
   * @remarks
   * The notification sound for iOS. Specify the name of an audio file stored in the app bundle or the Library/Sounds directory of the sandbox. For more information, see [How to set notification sounds for iOS push](https://help.aliyun.com/document_detail/48906.html).
   * 
   * > - If set to an empty string (""), the notification is silent.
   * > - If not specified, the value defaults to "default", which plays the system alert sound.
   * 
   * @example
   * default
   */
  music?: string;
  /**
   * @remarks
   * Specifies whether to enable the notification extension, which controls whether the iOS notification supports processing by Notification Service Extension.
   * > - When sending silent notifications, this parameter must be set to true.
   * > - The Extension processing time cannot exceed 30 seconds.
   * > - A timeout causes the notification to display the original content.
   * > - You must add a Notification Service Extension to your application.
   * 
   * @example
   * true
   */
  mutable?: boolean;
  /**
   * @remarks
   * The relevance score of the notification message, used to control the priority and display strategy of the notification.
   * 
   * @example
   * 0.5
   */
  relevanceScore?: number;
  /**
   * @remarks
   * Specifies whether to enable silent push mode.
   * 
   * @example
   * false
   */
  silent?: boolean;
  /**
   * @remarks
   * The subtitle content of the iOS notification.
   * 
   * @example
   * Please check your order
   */
  subtitle?: string;
  /**
   * @remarks
   * The thread identifier for iOS notification grouping, which is used to categorize and collapse related notifications.
   * 
   * > - Notifications with the same thread-id are automatically grouped together.
   * > - Multiple related notifications are collapsed into a single notification group.
   * > - Users can expand the group to view all notifications within it.
   * 
   * @example
   * news_category_tech
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      apnsEnv: 'ApnsEnv',
      badge: 'Badge',
      badgeAutoIncrement: 'BadgeAutoIncrement',
      category: 'Category',
      collapseId: 'CollapseId',
      extParameters: 'ExtParameters',
      interruptionLevel: 'InterruptionLevel',
      liveActivity: 'LiveActivity',
      music: 'Music',
      mutable: 'Mutable',
      relevanceScore: 'RelevanceScore',
      silent: 'Silent',
      subtitle: 'Subtitle',
      threadId: 'ThreadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apnsEnv: 'string',
      badge: 'number',
      badgeAutoIncrement: 'boolean',
      category: 'string',
      collapseId: 'string',
      extParameters: 'string',
      interruptionLevel: 'string',
      liveActivity: PushTaskNotificationIosLiveActivity,
      music: 'string',
      mutable: 'boolean',
      relevanceScore: 'number',
      silent: 'boolean',
      subtitle: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(this.liveActivity && typeof (this.liveActivity as any).validate === 'function') {
      (this.liveActivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskNotification extends $dara.Model {
  /**
   * @remarks
   * The Android notification configuration.
   */
  android?: PushTaskNotificationAndroid;
  /**
   * @remarks
   * The body of the push notification.
   * 
   * @example
   * Dear customer, your reservation order has been successfully canceled
   */
  body?: string;
  /**
   * @remarks
   * The HarmonyOS notification configuration.
   */
  hmos?: PushTaskNotificationHmos;
  /**
   * @remarks
   * The iOS notification configuration.
   */
  ios?: PushTaskNotificationIos;
  /**
   * @remarks
   * The title of the push notification.
   * 
   * @example
   * You have a new message
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      android: 'Android',
      body: 'Body',
      hmos: 'Hmos',
      ios: 'Ios',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      android: PushTaskNotificationAndroid,
      body: 'string',
      hmos: PushTaskNotificationHmos,
      ios: PushTaskNotificationIos,
      title: 'string',
    };
  }

  validate() {
    if(this.android && typeof (this.android as any).validate === 'function') {
      (this.android as any).validate();
    }
    if(this.hmos && typeof (this.hmos as any).validate === 'function') {
      (this.hmos as any).validate();
    }
    if(this.ios && typeof (this.ios as any).validate === 'function') {
      (this.ios as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskOptionsSms extends $dara.Model {
  /**
   * @remarks
   * The delay before triggering the SMS message. Unit: seconds.
   * 
   * This parameter is required when SMS linkage is used. We recommend that you set this parameter to at least 15 seconds and no more than 3 days to avoid duplicate notifications from both SMS and push.
   * 
   * > When SMS linkage is used, the ExpireTime parameter does not take effect. The notification expiration time is calculated based on the DelaySecs parameter. The expiration time is the current time plus the DelaySecs value.
   * 
   * @example
   * 150
   */
  delaySecs?: number;
  /**
   * @remarks
   * The key-value pairs of variable names in the SMS template.
   * 
   * @example
   * key1=value1&key2=value2
   */
  params?: string;
  /**
   * @remarks
   * The SMS sending policy.
   * 
   * @example
   * PUSH_NOT_RECEIVED
   */
  sendPolicy?: string;
  /**
   * @remarks
   * The SMS signature.
   * 
   * @example
   * 某某科技
   */
  signName?: string;
  /**
   * @remarks
   * The SMS template name. You can obtain this name from the SMS template management page. This is the system-assigned name, not the name set by the developer.
   * 
   * @example
   * SMS_123456789
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      delaySecs: 'DelaySecs',
      params: 'Params',
      sendPolicy: 'SendPolicy',
      signName: 'SignName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySecs: 'number',
      params: 'string',
      sendPolicy: 'string',
      signName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskOptions extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the message. The message will not be sent after it expires. The maximum retention period is 72 hours.
   * 
   * > * The time follows the ISO 8601 standard in UTC. Format: YYYY-MM-DDThh:mm:ssZ.
   * > * The expiration time must meet the following condition: ExpireTime > PushTime + 3 seconds (3 seconds is the redundancy for network and system latency).
   * > * Recommendation: Set the expiration time to at least 1 minute for single push notifications, and at least 10 minutes for broadcast or batch push notifications.
   * 
   * 
   * >Notice: For pass-through messages, if no expiration time is set, the message is sent only to online devices. When the device is offline, the message is discarded.
   * 
   * @example
   * 2025-06-21T12:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The custom identifier of the push task. If JobKey is not empty, this field is included in the receipt log. For more information about receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * jobkey1727749697913
   */
  jobKey?: string;
  /**
   * @remarks
   * The unique ID used to identify the message. This parameter is valid only when the `Action` parameter is set to `CONTINUOUS_PUSH`.
   * 
   * @example
   * 1174754033128****
   */
  messageId?: number;
  /**
   * @remarks
   * The scheduled time to send the message. The value cannot be later than 7 days from the current time. This parameter takes effect only when `Action` is set to `SCHEDULED_PUSH`.
   * 
   * > The time follows the ISO 8601 standard in UTC in the format of yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-06-19T12:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The supplementary SMS message settings.
   */
  sms?: PushTaskOptionsSms;
  /**
   * @remarks
   * Specifies whether to automatically truncate titles and content that exceed the length limit.
   * 
   * >This parameter applies only to vendor channels that explicitly limit the title and content length. It does not apply to channels such as APNs, Huawei, and Honor that do not limit the title or content length but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * Specifies the delivery channels. Valid values:
   * 
   * - `accs`: Alibaba Cloud proprietary channel.
   * - `huawei`: Huawei channel.
   * - `honor`: Honor channel.
   * - `xiaomi`: Xiaomi channel.
   * - `oppo`: OPPO channel.
   * - `vivo`: vivo channel.
   * - `meizu`: Meizu channel.
   * - `fcm`: Google Firebase channel (HTTP v1 API).
   * - `apns`: APNs channel.
   * - `harmony`: HarmonyOS channel.
   * 
   * > - If this parameter is not specified, all channels are available.
   * > - If this parameter is specified, only the specified channels are used.
   * > - If the specified channels conflict with the delivery policy (for example, iOS notifications can only be delivered through the APNs channel, but `apns` is not included in this parameter), the message is not sent.
   * 
   * @example
   * accs,apns
   */
  useChannels?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      jobKey: 'JobKey',
      messageId: 'MessageId',
      pushTime: 'PushTime',
      sms: 'Sms',
      trim: 'Trim',
      useChannels: 'UseChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      jobKey: 'string',
      messageId: 'number',
      pushTime: 'string',
      sms: PushTaskOptionsSms,
      trim: 'boolean',
      useChannels: 'string',
    };
  }

  validate() {
    if(this.sms && typeof (this.sms as any).validate === 'function') {
      (this.sms as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTaskTarget extends $dara.Model {
  /**
   * @remarks
   * The platform type. Optional parameter.
   * 
   * @example
   * IOS
   */
  platform?: string;
  /**
   * @remarks
   * The push target type.
   * 
   * >Notice: 
   * 
   * The batch push operation `MassPushV2` and continuous push `CONTINUOUS_PUSH` support only the following three target types:
   * 
   * - `DEVICE`
   * - `ACCOUNT`
   * - `ALIAS`
   * 
   * @example
   * DEVICE
   */
  type?: string;
  /**
   * @remarks
   * The push target based on `Target.Type`. Separate multiple targets with commas. The following describes the target types and target values:
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      platform: 'Platform',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platform: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTask extends $dara.Model {
  /**
   * @remarks
   * The push method. Optional parameter. Default value: `PUSH_IMMEDIATELY` (push immediately).
   * 
   * @example
   * PUSH_IMMEDIATELY
   */
  action?: string;
  /**
   * @remarks
   * The pass-through message data sent to the device. The total length cannot exceed 4,000 bytes.
   * 
   * > Length calculation notes
   * > - The length is calculated based on the byte length of the UTF-8 encoded string after the Message object is serialized to JSON.
   * > - Chinese characters typically occupy 3 bytes in UTF-8 encoding.
   */
  message?: PushTaskMessage;
  /**
   * @remarks
   * The vendor notification data sent to the device.
   */
  notification?: PushTaskNotification;
  /**
   * @remarks
   * The push options.
   */
  options?: PushTaskOptions;
  /**
   * @remarks
   * Specifies the target object for message push. This parameter is optional when the operation type `Action` is set to `CREATE_CONTINUOUS_PUSH` (create a continuous push task).
   */
  target?: PushTaskTarget;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      message: 'Message',
      notification: 'Notification',
      options: 'Options',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      message: PushTaskMessage,
      notification: PushTaskNotification,
      options: PushTaskOptions,
      target: PushTaskTarget,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

