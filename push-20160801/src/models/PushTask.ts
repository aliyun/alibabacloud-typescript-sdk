// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PushTaskMessage extends $dara.Model {
  /**
   * @remarks
   * The body of the message to be sent.
   * 
   * @example
   * {"key": "value"}
   */
  body?: string;
  /**
   * @remarks
   * The title of the message to be sent.
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
   * The custom notification bar style for Android. Valid values: 1 to 100.
   * 
   * > The client must complete the style preset configuration. References: [Custom notification style API](https://help.aliyun.com/document_detail/2834944.html).
   * 
   * @example
   * 1
   */
  customStyle?: number;
  /**
   * @remarks
   * The reminder method for the notification. Valid values:
   * 
   * - VIBRATE: Vibration (default).
   * - SOUND: Sound.
   * - BOTH: Sound and vibration.
   * - NONE: Silent.
   * 
   * @example
   * NONE
   */
  notifyType?: string;
  /**
   * @remarks
   * Specifies the activity to open when the notification is clicked. Valid only when OpenType is set to ACTIVITY.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  openActivity?: string;
  /**
   * @remarks
   * The action to perform when the notification is clicked. Valid values:
   * 
   * - APPLICATION: Open the application (default).
   * - ACTIVITY: Open the specified activity OpenActivity.
   * - URL: Open a URL.
   * - NONE: No redirection.
   * 
   * @example
   * APPLICATION
   */
  openType?: string;
  /**
   * @remarks
   * The URL to open when the notification is clicked after an Android device receives the push message. Valid only when OpenType is set to URL.
   * 
   * @example
   * www.example.com
   */
  openUrl?: string;
  /**
   * @remarks
   * The priority of the display position for Android notifications in the notification bar. Valid values: -2, -1, 0, 1, and 2.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * The message group. Messages in the same group are collapsed and can be expanded in the notification bar. Notifications from different groups are displayed separately.
   * 
   * > Supported by Android SDK 3.9.2 or later.
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
   * Sets the importance parameter for Honor notification message classification, which determines the notification behavior on user devices. Valid values:
   * 
   * - 0: Information and marketing messages.
   * - 1: Service and communication messages.
   * 
   * You must apply on the Honor platform. See [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
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
   * Sets the Huawei fast notification parameter. Valid values:
   * - **0**: Send standard Huawei notifications (default).
   * - **1**: Send Huawei fast notifications.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * Purpose 1: After applying for [self-classification benefits](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this parameter is used to identify the message type, determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and accelerate the delivery of specific types of messages. For valid values, refer to the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei push documentation, and fill in the "Cloud notification category value" or "Local notification category value" from the documentation table.
   * 
   * Purpose 2: After [applying for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this parameter is used to identify high-priority pass-through scenarios. Valid values:
   * 
   * - VOIP: Audio and video calls.
   * - PLAY_VOICE: Voice broadcast.
   * 
   * > - If the "Cloud notification category value" is "Not applicable", the message is sent through the Alibaba Cloud proprietary channel.
   * > - If the "Local notification category value" is "Not applicable", the message is sent through the Huawei channel.
   * 
   * @example
   * VOIP
   */
  category?: string;
  /**
   * @remarks
   * Sets the importance parameter for Huawei notification message classification, which determines the notification behavior on user devices. Valid values:
   * 
   * - 0: Information and marketing messages.
   * - 1: Service and communication messages.
   * 
   * > We recommend that you use Category for notification classification. You must apply on the Huawei platform. See [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON string of the Huawei Android Live Window data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development and integration, refer to the [Huawei Live Window push guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * The receipt ID of the Huawei channel. You can view this receipt ID in the receipt parameter settings of the Huawei channel push operations platform.
   * 
   * > If the default receipt configuration on the Huawei channel push operations platform is set to Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, we recommend that you configure the default receipt ID for the Huawei channel in the Alibaba Cloud EMAS shift push console first.
   * 
   * @example
   * RCP4C123456
   */
  receiptId?: string;
  /**
   * @remarks
   * The delivery priority for Huawei channel notifications. Valid values:
   * 
   * - HIGH
   * - NORMAL
   * 
   * You must apply for permissions. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
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
   * The Meizu message type. Valid values:
   * 
   * - 0: Public message (default).
   * - 1: Private message.
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
   * OPPO message categorization includes two categories for management: communication and service, and content and marketing. 
   * 
   * **Communication and service (requires permission application):**
   * 
   * - IM: Instant messages.
   * - ACCOUNT: Accounts and assets.
   * - TODO: Schedules and to-do lists.
   * - DEVICE_REMINDER: Device information.
   * - ORDER: Orders and logistics.
   * - SUBSCRIPTION: subscribe reminders.
   * 
   * **Content and marketing:**
   * 
   * - NEWS: News.
   * - CONTENT: Content recommendations.
   * - MARKETING: operational activity.
   * - SOCIAL: Social updates.
   * 
   * For more information, see the [OPPO categorization description](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * NEWS
   */
  category?: string;
  /**
   * @remarks
   * The JSON character string of the OPPO Fluid Cloud intent delete data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the AndroidOppoIntelligentIntent parameter is already specified. For development and integration, References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The JSON character string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The reminder level for OPPO channel notification bar messages. Valid values:
   * 
   * - 1: Notification bar.
   * - 2: Notification bar, lock screen, ringtone, and vibration (default notification level for communication and service messages).
   * - 16: Notification bar, lock screen, ringtone, vibration, and banner (requires permission application).
   * 
   * > When you use the NotifyLevel parameter, you must also pass the Category parameter.
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
   * {"name": "Zhang San"}
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
   * Sets the increment value for the vivo channel badge.
   * 
   * @example
   * true
   */
  addBadge?: boolean;
  /**
   * @remarks
   * vivo message categorization includes two categories for management: system messages and operation messages. 
   * 
   * **System messages:**
   * 
   * - IM: Instant messages.
   * - ACCOUNT: Accounts and assets.
   * - TODO: Schedules and to-do lists.
   * - DEVICE_REMINDER: Device information.
   * - ORDER: Orders and logistics.
   * - SUBSCRIPTION: subscribe reminders.
   * 
   * **Operation messages:**
   * 
   * - NEWS: News.
   * - CONTENT: Content recommendations.
   * - MARKETING: operational activity.
   * - SOCIAL: Social updates.
   * 
   * For more information, see [vivo categorization description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @remarks
   * Sets the vivo notification message classification. Valid values:
   * 
   * - 0: Operation messages (default).
   * - 1: System messages.
   * 
   * > We recommend that you use Category for notification classification. You must apply on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON character string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, References: [vivo Atomic Island push guide](https://www.alibabacloud.com/help/en/document_detail/3030718.html).
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
   * The message receipt identifier for the vivo vendor push channel, used to receive callback notifications for push results.
   * 
   * > - Location: vivo Open Platform > Push Service > Application Information > Receipt Configuration.
   * > - Configuration recommendation: Configure the default receipt ID in the Alibaba Cloud EMAS console first.
   * > - Usage condition: Required only when the default receipt on the vivo platform is not the Alibaba Cloud receipt.
   * 
   * @example
   * 1232221
   */
  receiptId?: string;
  /**
   * @example
   * t1-ge3-lq
   */
  templateId?: string;
  /**
   * @example
   * {"keywords1":"S123"}
   */
  templateParams?: string;
  static names(): { [key: string]: string } {
    return {
      addBadge: 'AddBadge',
      category: 'Category',
      importance: 'Importance',
      liveMessage: 'LiveMessage',
      receiptId: 'ReceiptId',
      templateId: 'TemplateId',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBadge: 'boolean',
      category: 'string',
      importance: 'number',
      liveMessage: 'string',
      receiptId: 'string',
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

export class PushTaskNotificationAndroidOptionsXiaomi extends $dara.Model {
  /**
   * @remarks
   * Sets the channel ID for the Xiaomi notification type. You must apply on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * 
   * > A single application can apply for a maximum of eight channels on the Xiaomi channel. Plan accordingly in advance.
   * 
   * @example
   * michannel
   */
  channel?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, References: [Xiaomi Super Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * The JSON character string of the Xiaomi Super Island data images [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, References: [Xiaomi Super Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * The Xiaomi private message template parameters, as a JSON string.
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
   * The Alibaba Cloud proprietary configuration.
   * 
   * > Valid only when the Alibaba Cloud proprietary channel is used.
   */
  accs?: PushTaskNotificationAndroidOptionsAccs;
  /**
   * @remarks
   * The Honor configuration.
   */
  honor?: PushTaskNotificationAndroidOptionsHonor;
  /**
   * @remarks
   * The Huawei configuration.
   */
  huawei?: PushTaskNotificationAndroidOptionsHuawei;
  /**
   * @remarks
   * The Meizu configuration.
   */
  meizu?: PushTaskNotificationAndroidOptionsMeizu;
  /**
   * @remarks
   * The OPPO configuration.
   */
  oppo?: PushTaskNotificationAndroidOptionsOppo;
  /**
   * @remarks
   * The vivo configuration.
   */
  vivo?: PushTaskNotificationAndroidOptionsVivo;
  /**
   * @remarks
   * The Xiaomi configuration.
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
   * The fully qualified class name of the application entry activity for badge settings.
   * 
   * > Valid only for Huawei and Honor vendor channel pushes.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  badgeActivity?: string;
  /**
   * @remarks
   * Sets the increment value for the badge, which is added to the original badge number.
   * 
   * > - Supported by Huawei and Honor channels.
   * > - If both BadgeAddNum and BadgeSetNum are specified, BadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * Sets a fixed value for the badge number. Valid values: 1 to 99.
   * 
   * > - This parameter takes effect only for Huawei and Honor vendor channel pushes. 
   * > - For Alibaba Cloud proprietary channel pushes, this parameter takes effect only on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 4
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * Sets the channel ID of the Android application. The channel ID must match the channel ID in the vendor application.
   * 
   * > - Because the channel_id of the OPPO private message channel is the same as the channel ID of the application, this value is used as the channel_id when pushing through the OPPO channel.
   * > - This value is also used as the channel_id for Huawei, FCM, and Alibaba Cloud proprietary channel pushes.
   * > - For specific use cases, see the FAQ: [Notifications are not received on devices running Android 8.0 or later](https://help.aliyun.com/document_detail/67398.html).
   * 
   * @example
   * 8.0up
   */
  channelId?: string;
  /**
   * @remarks
   * The custom extension attributes for Android notifications.
   * 
   * > - The parameter must be passed in standard JSON map format. Incorrect formats will cause parsing failures.
   * 
   * @example
   * {"key1":"value1"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The message group. For messages in the same group, only the latest message and the total number of received messages in the group are displayed in the notification bar. All messages are not displayed and cannot be expanded. Currently supported by:
   * 
   * - Huawei vendor channel.
   * - Honor vendor channel.
   * - Proprietary channels with Android SDK 3.9.1 or earlier.
   * 
   * > Proprietary channels no longer support this parameter in Android SDK 3.9.2 or later.
   * 
   * @example
   * group-1
   */
  groupId?: string;
  /**
   * @remarks
   * The URL of the icon on the right side. Currently supported by:
   * 
   * - Huawei EMUI (applicable only in long text mode and Inbox mode).
   * - Honor Magic UI (applicable only in long text mode).
   * - Proprietary channels (Android SDK 3.5.0 or later).
   * 
   * @example
   * https://imag.example.com/image.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The body text in Inbox mode. The content must be a valid JSON array with a maximum of five elements. Currently supported by:
   * 
   * - Huawei: EMUI 9 or later.
   * - Honor: Magic UI 4.0 or later.
   * - Xiaomi: MIUI 10 or later.
   * - OPPO: ColorOS 5.0 or later.
   * - Proprietary channels: Android SDK 3.6.0 or later.
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The notification sound for the Huawei vendor channel. Specify the audio file name stored in the `app/src/main/res/raw/` directory of the client project. Do not include the file format extension. If not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  music?: string;
  /**
   * @remarks
   * The unique identifier of the Android notification bar message, used to control the override and replacement behavior of notifications. A new notification with the same NotifyId automatically overrides the old notification.
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
   * The image URL in large image mode. Currently supported by proprietary channels with Android SDK 3.6.0 or later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  pictureUrl?: string;
  /**
   * @remarks
   * The notification style. Valid values:
   * 
   * - 0: Standard mode (default).
   * - 1: Long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and proprietary channels).
   * - 2: Large image mode (supported by proprietary channels).
   * - 3: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and proprietary channels).
   * 
   * @example
   * 0
   */
  renderStyle?: string;
  /**
   * @remarks
   * Sets the notification type for vendor channels. Valid values:
   * 
   * - false: Formal notification (default).
   * - true: Test notification.
   * 
   * > Currently supported by Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * false
   */
  testMessage?: boolean;
  /**
   * @remarks
   * Specifies the activity to open when the notification is clicked.
   * 
   * >Warning: This parameter is required when you use Android vendor channels.</warning>
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
   * The action corresponding to the ability of the in-app page.
   * 
   * > For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * com.example.action
   */
  action?: string;
  /**
   * @remarks
   * The number to add to the HarmonyOS application badge.
   * 
   * > - Supported by HarmonyOS SDK 1.2.0 and later.
   * > - For more information, see the [addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145) for HarmonyOS badges.
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * The number to set for the HarmonyOS application badge.
   * 
   * > - For more information, see the [setNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145) description for HarmonyOS badges.
   * > - Supported by HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * The category of the notification message. This parameter is optional. Default value: MARKETING.
   * 
   * > After you apply for the notification message auto-classification permission, this parameter is used to identify the message type. Different notification message types affect the message display and reminder methods. For more information, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * IM
   */
  category?: string;
  /**
   * @remarks
   * Sets the custom extension attributes of the notification message to pass additional business data.
   * 
   * > The parameter must be passed in standard JSON map format. Incorrect formats will cause parsing failures.
   * 
   * @example
   * {"key": "value"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The additional data for notification extension messages.
   * 
   * > - Valid only when sending HarmonyOS notification extension messages.
   * > - Conceptually equivalent to the extraData field of HarmonyOS notification extension messages. For specific definitions, see the [ExtensionPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234) description in HarmonyOS.
   * > - Supported by HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * text
   */
  extensionExtraData?: string;
  /**
   * @remarks
   * Enables HarmonyOS notification extensions.
   * 
   * > - To send notification extension messages, you must first apply for permissions on the HarmonyOS official website. For more information, see [HarmonyOS documentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5).
   * > - Supported by HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * false
   */
  extensionPush?: boolean;
  /**
   * @remarks
   * The URL of the large icon on the right side of the notification. The URL must use the HTTPS protocol.
   * 
   * > - Supported image formats: PNG, JPG, JPEG, HEIF, GIF, and BMP. The total number of pixels (width × height) must be less than 25,000.
   * > - For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * https://example.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * When RenderStyle is set to MULTI_LINE, this field is required to define the content for the multi-line text style. A maximum of three content items are supported.
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The JSON string of the HarmonyOS Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development and integration, refer to the [HarmonyOS Live View push guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * The unique identifier (notifyId) for each message displayed in the notification bar. If this parameter is not provided, the push service automatically generates a unique identifier. Different notification messages can use the same notifyId to allow new messages to overwrite old ones. For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * 123456
   */
  notifyId?: number;
  /**
   * @remarks
   * The receipt ID of the HarmonyOS channel. You can view this receipt ID in the receipt parameter settings of the HarmonyOS channel push operations platform.
   * 
   * > - If the default receipt configuration on the HarmonyOS channel push operations platform is set to Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, we recommend that you configure the default receipt ID for the HarmonyOS channel in the Alibaba Cloud EMAS shift push console first.
   * > - For details, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * RCPB***DFD5
   */
  receiptId?: string;
  /**
   * @remarks
   * The notification message style. This parameter is optional. Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  renderStyle?: string;
  /**
   * @remarks
   * Uses a notification channel of the specified type.
   * 
   * > - This parameter is valid only for Alibaba Cloud proprietary channels.
   * > - For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the HarmonyOS official website.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  slotType?: string;
  /**
   * @remarks
   * The custom ringtone file name for HarmonyOS.
   * 
   * @example
   * music.mp3
   */
  sound?: string;
  /**
   * @remarks
   * The duration of the custom message notification ringtone, in seconds. Valid values: 1 to 60. If the ringtone duration is shorter than the notification display time, the ringtone loops.
   * 
   * @example
   * 2
   */
  soundDuration?: number;
  /**
   * @remarks
   * Enables test messages.
   * 
   * > - For more information, see [TestMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) in the HarmonyOS push parameters.
   * 
   * @example
   * true
   */
  testMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the ability of the built-in app page.
   * 
   * > - If multiple abilities exist, specify the action and URI for each ability. The action is prioritized when searching for the corresponding built-in app page.
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
   * The static pass-through parameters for iOS Live Activity push, which are used to pass unchanged business identification information.
   * 
   * > This parameter is required when Event is set to start.
   * 
   * @example
   * {
   *   "orderId": "ORD20231201001",
   *   "restaurantName": "Tasty Restaurant",
   *   "customerAddress": "No. xx, xx Road, xx District",
   *   "orderType": "delivery"
   * }
   */
  attributes?: string;
  /**
   * @remarks
   * The type of the Live Activity to be started.
   * 
   * > This parameter is required when Event is set to start.
   * 
   * @example
   * OrderActivityAttributes
   */
  attributesType?: string;
  /**
   * @remarks
   * The dynamic pass-through parameters for the Live Activity, which contain status information and changing data that can be updated in real time.
   * 
   * > - Avoid excessively frequent updates. An interval of 5 seconds or more is recommended.
   * > - Update multiple fields in batches to reduce the number of pushes.
   * > - Consider the user experience and avoid interface flickering.
   * > - Must be a valid JSON string.
   * 
   * @example
   * {
   *     "status": "delivering",
   *     "estimatedTime": "10 minutes",
   *     "progress": 80,
   *     "driverName": "Driver Li",
   *     "currentStep": "The courier is on the way"
   * }
   */
  contentState?: string;
  /**
   * @remarks
   * The retention time of a completed Live Activity on the Lock Screen, which allows users to view the information after the activity ends. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1701439800
   */
  dismissalDate?: number;
  /**
   * @remarks
   * Starts, updates, or ends a live activity.
   * 
   * @example
   * start
   */
  event?: string;
  /**
   * @remarks
   * The unique identifier of the Live Activity, which is used to associate the activity instance on the device with the push target on the server.
   * 
   * >Notice: 
   * 
   * - The ID must be the same as the forActivityId parameter in the registerLiveActivityPushToken method of the client SDK.
   * 
   * - The server uses this ID to locate the specific activity instance during a push.
   * 
   * @example
   * FOOD_DELIVERY_ORD20231201001
   */
  id?: string;
  /**
   * @remarks
   * The expiration timestamp for the content of the iOS Live Activity. The value is a UNIX timestamp in seconds.
   * 
   * > - After the specified time is reached, the system automatically marks the activity as stale.
   * > - Stale activities are removed from the Dynamic Island and the Lock Screen.
   * > - This prevents outdated information from occupying the user interface for a long time.
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
   * To send iOS notifications through the APNs center, you must specify the corresponding environment context. This parameter is optional. Default value: production environment.
   * 
   * - DEV: the development environment, which applies to applications directly installed and debugged by using Xcode.
   * - PRODUCT: the production environment, which applies to applications distributed through the App Store, TestFlight, Ad Hoc, and enterprise distribution.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * The badge of the iOS application.
   * 
   * @example
   * 1
   */
  badge?: number;
  /**
   * @remarks
   * Specifies whether to enable the automatic badge increment feature. This parameter is optional. Default value: false.
   * 
   * > - This parameter cannot be used together with the badge setting parameter.
   * > - The automatic badge increment feature maintains the badge count for each device on the Alibaba Cloud push server. You must use SDK version 1.9.5 or later to actively synchronize the badge count to the server.
   * 
   * @example
   * false
   */
  badgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The category identifier of the iOS notification, which is used to define the interactive behavior and display style of the notification.
   * 
   * > - The category must be pre-registered in the application to take effect.
   * > - Different categories can define different sets of actions.
   * 
   * @example
   * MESSAGE_REPLY
   */
  category?: string;
  /**
   * @remarks
   * The unique identifier used to control notification grouping. Notifications with the same identifier are overwritten.
   * 
   * @example
   * order_status_update_12345
   */
  collapseId?: string;
  /**
   * @remarks
   * The custom extension attributes of the iOS notification.
   * 
   * > - The parameter must be passed in standard JSON map format. Incorrect formats cause parsing failures.
   * 
   * @example
   * {"attachment": "https://www.example.com/notification_pic.png"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The interruption level. This parameter is optional. Valid values:
   * 
   * - passive: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * - active: The system displays the notification immediately, lights up the screen, and may play a sound.
   * - time-sensitive: The system presents the notification immediately, lights up the screen, and may play a sound, but does not bypass the system notification controls.
   * - critical: The system displays the notification immediately, lights up the screen, and plays a sound bypassing the silent switch.
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
   * - Live Activity push supports pushing to a **single device** only by using the DEVICE type.
   * - When pushing to a Live Activity, you do not need to specify the title and body parameters.
   */
  liveActivity?: PushTaskNotificationIosLiveActivity;
  /**
   * @remarks
   * The sound of the iOS notification. Specify the name of the audio file stored in the app bundle or the Library/Sounds directory of the sandbox. For more information, see [How to set the notification sound for iOS push](https://help.aliyun.com/document_detail/48906.html).
   * 
   * > - If an empty string ("") is specified, the notification is silent.
   * > - If this parameter is not set, the default value default is used, which indicates the system prompt sound.
   * 
   * @example
   * default
   */
  music?: string;
  /**
   * @remarks
   * Specifies whether to enable extended notifications and allow iOS notifications to be processed by the Notification Service Extension.
   * > - This parameter must be set to true when sending silent notifications.
   * > - The processing time of the extension cannot exceed 30 seconds.
   * > - A timeout causes the notification to display the original content.
   * > - You must add the Notification Service Extension to your application.
   * 
   * @example
   * true
   */
  mutable?: boolean;
  /**
   * @remarks
   * The relevance score of the notification message, which is used to control the priority and display strategy of the notification.
   * 
   * @example
   * 0.5
   */
  relevanceScore?: number;
  /**
   * @remarks
   * Specifies whether to enable the silent push mode.
   * 
   * > - When sending a silent notification, you do not need to specify the title and body parameters.
   * 
   * @example
   * false
   */
  silent?: boolean;
  /**
   * @remarks
   * The subtitle of the iOS notification.
   * 
   * @example
   * Please check your order
   */
  subtitle?: string;
  /**
   * @remarks
   * The thread identifier for iOS notification grouping, which is used to group and collapse related notifications.
   * 
   * > - Notifications with the same thread ID are automatically grouped.
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
   * The body of the notification to be pushed.
   * 
   * > Length limits:
   * > - iOS/HarmonyOS/Android: the **character length** cannot exceed 200.
   * 
   * @example
   * Dear customer, your reservation has been successfully canceled
   */
  body?: string;
  /**
   * @remarks
   * HarmonyOS notification configuration.
   */
  hmos?: PushTaskNotificationHmos;
  /**
   * @remarks
   * iOS notification configuration.
   */
  ios?: PushTaskNotificationIos;
  /**
   * @remarks
   * The title of the notification to be pushed.
   * 
   * > Length limits:
   * > - iOS/HarmonyOS: the **byte length** cannot exceed 200.
   * > - Android: the **character length** cannot exceed 50.
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
   * The delay time before the SMS message is triggered. Unit: seconds.
   * 
   * If you use SMS linkage, this parameter is required. Set this parameter to at least 15 seconds and no more than 3 days to avoid duplicate SMS and push messages.
   * 
   * > When SMS linkage is used, the ExpireTime parameter becomes invalid. The expiration time of the notification is calculated based on the DelaySecs parameter. The expiration time is the current time plus the DelaySecs value.
   * 
   * @example
   * 150
   */
  delaySecs?: number;
  /**
   * @remarks
   * The key-value pairs of the variables in the SMS template.
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
   * SampleTech
   */
  signName?: string;
  /**
   * @remarks
   * The name of the SMS template. You can obtain the name from the SMS template management page. The name is assigned by the system, not specified by the developer.
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
   * The expiration time of the message. The message is not sent after it expires. The maximum retention period is 72 hours.
   * 
   * > * The time must follow the ISO 8601 standard and use UTC time in the YYYY-MM-DDThh:mm:ssZ format.
   * > * The expiration time must meet the following condition: ExpireTime > PushTime + 3 seconds. The 3 seconds are reserved for network and system latency.
   * > * Set the expiration time to at least 1 minute for single-target push tasks and at least 10 minutes for full or batch push tasks.
   * 
   * 
   * >Notice: For pass-through messages, if the expiration time is not set, the message is sent only to online devices. If the device is offline, the message is discarded.</notice>
   * 
   * @example
   * 2025-06-21T12:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The custom identifier of the push task. If JobKey is not empty, this field is included in the receipt log. For more information, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * jobkey1727749697913
   */
  jobKey?: string;
  /**
   * @remarks
   * The unique identity of the message. This parameter is valid only when the Action parameter is set to CONTINUOUS_PUSH.
   * 
   * @example
   * 1174754033128****
   */
  messageId?: number;
  /**
   * @remarks
   * Specifies the sending time of the message, which can be up to seven days later. Valid only when the Action parameter is set to SCHEDULED_PUSH.
   * 
   * > The time must follow the ISO 8601 standard and use UTC time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-06-19T12:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The fallback SMS message configuration.
   * 
   * > Currently, only Android and HarmonyOS devices are supported.
   */
  sms?: PushTaskOptionsSms;
  /**
   * @remarks
   * Specifies whether to automatically truncate excessively long titles and content.
   * 
   * >This parameter applies only to vendor channels that explicitly limit the title and content length. It does not apply to channels such as APNs, Huawei, and Honor, which do not limit the title and content length but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * Specifies the sending channels. Valid values:
   * 
   * - accs: Alibaba Cloud proprietary channel.
   * - huawei: Huawei channel.
   * - honor: Honor channel.
   * - xiaomi: Xiaomi channel.
   * - oppo: OPPO channel.
   * - vivo: vivo channel.
   * - meizu: Meizu channel.
   * - fcm: Google Firebase channel (HTTP v1 API).
   * - apns: APNs channel.
   * - harmony: HarmonyOS channel.
   * 
   * > - If this parameter is not configured, all channels are available.
   * > - If this parameter is configured, only the specified channels are used.
   * > - If the configured channels conflict with the sending policy (for example, iOS notifications only use the APNs channel, but apns is not included in this parameter), the message is not sent.
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
   * The platform type. This parameter is optional.
   * 
   * @example
   * IOS
   */
  platform?: string;
  /**
   * @remarks
   * The type of the push target.
   * 
   * >Notice: 
   * 
   * The MassPushV2 batch push API and the CONTINUOUS_PUSH continuous push support only the following three target types:
   * 
   * - DEVICE (device)
   * - ACCOUNT (account)
   * - ALIAS (alias)
   * 
   * @example
   * DEVICE
   */
  type?: string;
  /**
   * @remarks
   * The push targets based on Target.Type. Separate multiple targets with commas. The following section describes the target types and target values in detail:
   * 
   * >* DEVICE: device IDs, such as deviceid1,deviceid2. Maximum of 1,000.
   * >* ACCOUNT: account IDs, such as account1,account2. Maximum of 1,000.
   * >* ALIAS: aliases, such as alias1,alias2. Maximum of 1,000.
   * >* TAG: one or more tags. For the format, see [Tag format specifications](https://help.aliyun.com/document_detail/434847.html).
   * >* ALL: all targets. No value is required. Pushing to all targets may increase costs. Use this option with caution.
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
   * The push method. This parameter is optional. Default value: PUSH_IMMEDIATELY (push immediately).
   * 
   * >Notice: 
   * 
   * The MassPushV2 batch push API supports only the following push methods:
   * 
   * - PUSH_IMMEDIATELY (push immediately)
   * - SCHEDULED_PUSH (scheduled push)
   * 
   * @example
   * PUSH_IMMEDIATELY
   */
  action?: string;
  /**
   * @remarks
   * The pass-through message data sent to the device. The total length cannot exceed 4,000 bytes.
   * 
   * > Length calculation rules
   * > - The length is calculated based on the byte length of the UTF-8 encoded string after the Message object is serialized into JSON.
   * > - A Chinese character typically occupies 3 bytes in UTF-8 encoding.
   */
  message?: PushTaskMessage;
  /**
   * @remarks
   * The vendor notification data sent to the device.
   * 
   * >Notice: 
   * 
   * If both Message and Notification are configured, the device receives only one of them based on the following rules:
   * 
   * - If the device is online, the pass-through message data is sent.
   * - If the device is offline, the system notification is sent.
   */
  notification?: PushTaskNotification;
  /**
   * @remarks
   * The push options.
   */
  options?: PushTaskOptions;
  /**
   * @remarks
   * The target object for the message push. This parameter is optional when the Action parameter is set to CREATE_CONTINUOUS_PUSH (create a continuous push task).
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

