// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PushTaskMessage extends $dara.Model {
  /**
   * @remarks
   * The content of the message to send.
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
   * The custom Android notification bar style. The value can be from 1 to 100.
   * 
   * > The client must complete the style preset configuration. For more information, see the [Custom Notification Style API](https://help.aliyun.com/document_detail/2834944.html) document.
   * 
   * @example
   * 1
   */
  customStyle?: number;
  /**
   * @remarks
   * The notification reminder method. Valid values:
   * 
   * - `VIBRATE`: Vibrate (default)
   * 
   * - `SOUND`: Sound
   * 
   * - `BOTH`: Sound and vibration
   * 
   * - `NONE`: Silent
   * 
   * @example
   * NONE
   */
  notifyType?: string;
  /**
   * @remarks
   * Sets the activity to open when the notification is clicked. This is valid when `OpenType` is `ACTIVITY`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  openActivity?: string;
  /**
   * @remarks
   * The action to take after the notification is clicked. Valid values:
   * 
   * - `APPLICATION`: Open the application (default).
   * 
   * - `ACTIVITY`: Open the specified page `OpenActivity`.
   * 
   * - `URL`: Open a URL.
   * 
   * - `NONE`: No action.
   * 
   * @example
   * APPLICATION
   */
  openType?: string;
  /**
   * @remarks
   * After an Android device receives a push, clicking the notification opens the corresponding URL. This is valid when `OpenType` is `URL`.
   * 
   * @example
   * www.example.com
   */
  openUrl?: string;
  /**
   * @remarks
   * The priority of the Android notification\\"s position in the notification bar. Valid values: -2, -1, 0, 1, 2.
   * 
   * @example
   * 0
   */
  priority?: number;
  /**
   * @remarks
   * Message grouping. Messages in the same group are displayed collapsed in the notification bar and can be expanded. Different groups of notifications are displayed separately.
   * 
   * > This is for Android SDK 3.9.2 and later.
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
   * Sets the importance parameter for Honor notification message classification, which determines the notification behavior on the user\\"s device. Valid values are:
   * 
   * - `0`: Marketing message
   * 
   * - `1`: Service and communication message
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
   * Sets the Huawei quick notification parameters.
   * 
   * - **0**: Send a normal Huawei notification (default).
   * 
   * - **1**: Send a Huawei quick notification.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * Function 1: After you apply for [self-classification rights](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this is used to identify the message type and determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718). It speeds up the sending of specific types of messages. For valid values, see the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei Push documentation. Fill in the "Cloud notification category value" or "Local notification category value" from the document\\"s table.
   * 
   * Function 2: After [applying for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this is used to identify high-priority pass-through scenarios. Valid values are:
   * 
   * - `VOIP`: Video call
   * 
   * - `PLAY_VOICE`: Voice playback
   * 
   * > * For "Cloud notification category value" that is "Not applicable," all messages go through Alibaba Cloud\\"s proprietary channel.
   * >
   * > * For "Local notification category value" that is "Not applicable," all messages go through the Huawei channel.
   * 
   * @example
   * VOIP
   */
  category?: string;
  /**
   * @remarks
   * Sets the importance parameter for Huawei notification message classification, which determines the notification behavior on the user\\"s device. Valid values are:
   * 
   * - `0`: Marketing message
   * 
   * - `1`: Service and communication message
   * 
   * > We recommend using `Category` for notification classification. You must apply for this on the Huawei platform. [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON string of the Huawei Android Live Window data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For developer integration, see the document [Huawei Live Window Push Guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * The receipt ID for the Huawei channel. This ID can be found in the receipt parameter settings on the Huawei channel push operations platform.
   * 
   * > If the default receipt configuration on the Huawei channel push operations platform is the Alibaba Cloud receipt, you do not need to provide this. If not, we recommend that you first configure the default Huawei channel receipt ID in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * @example
   * RCP4C123456
   */
  receiptId?: string;
  /**
   * @remarks
   * The Huawei channel notification delivery priority. Valid values are:
   * 
   * - `HIGH`
   * 
   * - `NORMAL`
   * 
   * You must apply for permission. For more information, see: [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
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
   * - 0 Public message (default)
   * 
   * - 1 Private message
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
   * OPPO classifies messages into two categories for management: communication and services, and content and marketing.
   * 
   * **Communication and services (requires permission application):**
   * 
   * - IM: Instant messages
   * 
   * - ACCOUNT: Account and asset
   * 
   * - TODO: To-do list
   * 
   * - DEVICE_REMINDER: Device information
   * 
   * - ORDER: Order and logistics
   * 
   * - SUBSCRIPTION: Subscription reminder
   * 
   * **Content and marketing:**
   * 
   * - NEWS: News
   * 
   * - CONTENT: Content recommendation
   * 
   * - MARKETING: Operational activity
   * 
   * - SOCIAL: Social dynamics
   * 
   * For more information, see [vivo classification description](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * NEWS
   */
  category?: string;
  /**
   * @remarks
   * The JSON string of the OPPO Fluid Cloud\\"s intent deletion data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the AndroidOppoIntelligentIntent parameter is already filled. For developer integration, see the document [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The JSON string of the OPPO Fluid Cloud\\"s intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For developer integration, see the document [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The OPPO channel notification bar message reminder level. Valid values are:
   * 
   * - `1`: Notification bar
   * 
   * - `2`: Notification bar, lock screen, ringtone, vibration (default notification level for communication and service messages)
   * 
   * - `16`: Notification bar, lock screen, ringtone, vibration, banner (requires permission application)
   * 
   * > When you use the `NotifyLevel` parameter, you must also pass the `Category` parameter.
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
   * {"name": "张三"}
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
   * vivo classifies messages into two categories for management: system messages and operational messages.
   * 
   * **System messages:**
   * 
   * - IM: Instant messages
   * 
   * - ACCOUNT: Account and asset
   * 
   * - TODO: To-do list
   * 
   * - DEVICE_REMINDER: Device information
   * 
   * - ORDER: Order and logistics
   * 
   * - SUBSCRIPTION: Subscription reminder
   * 
   * **Operational messages:**
   * 
   * - NEWS: News
   * 
   * - CONTENT: Content recommendation
   * 
   * - MARKETING: Operational activity
   * 
   * - SOCIAL: Social dynamics
   * 
   * For more information, see [vivo classification description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @remarks
   * Sets the vivo notification message classification. Valid values are:
   * 
   * - `0`: Operational message (default)
   * 
   * - `1`: System message
   * 
   * > We recommend using `Category` for notification classification. You must apply for this on the vivo platform. For more information, see: [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  importance?: number;
  /**
   * @remarks
   * The JSON string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For developer integration, see the document [vivo Atomic Island Push Guide](https://help.aliyun.com/zh/document_detail/3030718.html).
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
   * The message receipt identifier for the vivo vendor push channel. It is used to receive push result callback notifications.
   * 
   * > - Location: vivo Open Platform → Push Service → Application Information → Receipt Configuration
   * >
   * > - Recommendation: First, configure the default receipt ID in the Alibaba Cloud EMAS console.
   * >
   * > - Condition: This must be configured only if the default receipt on the vivo platform is not the Alibaba Cloud receipt.
   * 
   * @example
   * 1232221
   */
  receiptId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      importance: 'Importance',
      liveMessage: 'LiveMessage',
      receiptId: 'ReceiptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * Sets the channelId for the Xiaomi notification type. You must apply for this on the Xiaomi platform. For more information, see: [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * 
   * > A single application can apply for a maximum of 8 channels on the Xiaomi channel. Plan accordingly.
   * 
   * @example
   * michannel
   */
  channel?: string;
  /**
   * @remarks
   * The JSON string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For developer integration, see the document [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
   * The JSON string of the Xiaomi Super Island data image [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For developer integration, see the document [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
   * 
   * @example
   * {
   *     "miui.focus.pic_ticker": "https://example.com/ticker.jpg",
   *     "miui.focus.pic_aod": "https://example.com/aod.jpg",
   *     "miui.focus.pic_imageText": "https://example.com/imageText.jpg"
   * }
   */
  focusPics?: string;
  templateId?: string;
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
   * Alibaba Cloud proprietary configuration
   * 
   * > This is only valid when using Alibaba Cloud\\"s proprietary channel.
   */
  accs?: PushTaskNotificationAndroidOptionsAccs;
  /**
   * @remarks
   * Honor configuration
   */
  honor?: PushTaskNotificationAndroidOptionsHonor;
  /**
   * @remarks
   * Huawei configuration
   */
  huawei?: PushTaskNotificationAndroidOptionsHuawei;
  /**
   * @remarks
   * Meizu configuration
   */
  meizu?: PushTaskNotificationAndroidOptionsMeizu;
  /**
   * @remarks
   * OPPO configuration
   */
  oppo?: PushTaskNotificationAndroidOptionsOppo;
  /**
   * @remarks
   * vivo configuration
   */
  vivo?: PushTaskNotificationAndroidOptionsVivo;
  /**
   * @remarks
   * Xiaomi configuration
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
   * The full class name of the application entry Activity for badge settings.
   * 
   * > This is only valid when pushing through the Huawei or Honor vendor channel.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  badgeActivity?: string;
  /**
   * @remarks
   * Sets a cumulative value for the badge, which is added to the original badge number.
   * 
   * > - This is supported by `Huawei` and `Honor` channels.
   * >
   * > - If both `BadgeAddNum` and `BadgeSetNum` are present, the latter takes precedence.
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * Sets a fixed value for the badge number. The value range is [1, 99].
   * 
   * > - For vendor channel pushes, this is only effective for Huawei and Honor channels.
   * >
   * > - When pushing through Alibaba Cloud\\"s proprietary channel, this is only effective on Huawei, Honor, and vivo models.
   * 
   * @example
   * 4
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * Sets the channelId for the Android app. It must correspond to the channelId in the vendor\\"s app.
   * 
   * > - Because the channel_id for OPPO\\"s private message notification channel is the same as the app\\"s channelId, the channel_id takes this value when pushing through the OPPO channel.
   * >
   * > - For pushes through Huawei, FCM, and Alibaba Cloud\\"s proprietary channels, the channel_id takes this value.
   * >
   * > - For specific uses, see the FAQ: [Notifications not received on Android 8.0 and later devices](https://help.aliyun.com/document_detail/67398.html).
   * 
   * @example
   * 8.0up
   */
  channelId?: string;
  /**
   * @remarks
   * Custom extension properties for Android notifications.
   * 
   * > - The parameter must be passed in a standard JSON Map format. An incorrect format causes parsing to fail.
   * 
   * @example
   * {"key1":"value1"}
   */
  extParameters?: string;
  /**
   * @remarks
   * Message grouping. For messages in the same group, only the latest one and the total number of messages received in that group are displayed in the notification bar. Not all messages are displayed, and they cannot be expanded. Currently supported by:
   * 
   * - Huawei vendor channel
   * 
   * - Honor vendor channel
   * 
   * - Proprietary channels with Android SDK 3.9.1 and earlier
   * 
   * > This parameter is no longer supported by proprietary channels in Android SDK 3.9.2 and later versions.
   * 
   * @example
   * group-1
   */
  groupId?: string;
  /**
   * @remarks
   * The URL for the icon on the right. Currently supported by:
   * 
   * - `Huawei EMUI` (only applicable in long text mode and Inbox mode).
   * 
   * - `Honor Magic UI` (only applicable in long text mode).
   * 
   * - `Proprietary channels` (Android SDK 3.5.0 and later).
   * 
   * @example
   * https://imag.example.com/image.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The body text in Inbox mode. The content is a valid JSON Array with no more than 5 elements. Currently supported by:
   * 
   * - Huawei: EMUI 9 and later
   * 
   * - Honor: Magic UI 4.0 and later
   * 
   * - Xiaomi: MIUI 10 and later
   * 
   * - OPPO: ColorOS 5.0 and later
   * 
   * - Proprietary channels: Android SDK 3.6.0 and later
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The Huawei vendor channel notification sound. Specify the name of the audio file stored in the `app/src/main/res/raw/` directory of the client project, without the file format suffix. If not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  music?: string;
  /**
   * @remarks
   * The unique identifier for an Android notification bar message. It controls the overwriting and replacement behavior of notifications. A new notification with the same NotifyId automatically overwrites the old one.
   * 
   * @example
   * 233856727
   */
  notifyId?: number;
  /**
   * @remarks
   * Detailed channel configuration.
   */
  options?: PushTaskNotificationAndroidOptions;
  /**
   * @remarks
   * The image URL in large image mode. Currently supported by: proprietary channels with Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  pictureUrl?: string;
  /**
   * @remarks
   * The notification style. Valid values are:
   * 
   * - `0`: Standard mode (default)
   * 
   * - `1`: Long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and proprietary channels)
   * 
   * - `2`: Large image mode (supported by proprietary channels)
   * 
   * - `3`: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and proprietary channels)
   * 
   * @example
   * 0
   */
  renderStyle?: string;
  /**
   * @remarks
   * Sets the vendor channel notification type:
   * 
   * - `false`: Formal notification (default).
   * 
   * - `true`: Test notification.
   * 
   * > Currently supported by: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * false
   */
  testMessage?: boolean;
  /**
   * @remarks
   * Specifies the Activity to open after the notification is clicked.
   * 
   * >Warning: 
   * 
   * You must fill in this option when you use an Android vendor channel.
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
   * Specifies the action corresponding to the ability of an in-app page.
   * 
   * > For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the official HarmonyOS website.
   * 
   * @example
   * com.example.action
   */
  action?: string;
  /**
   * @remarks
   * The HarmonyOS application badge cumulative number.
   * 
   * > - This is supported starting from HarmonyOS SDK 1.2.0.
   * >
   * > - See the description of the [addNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145) for HarmonyOS badges.
   * 
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @remarks
   * The HarmonyOS application badge number setting.
   * 
   * > - See the description of the [setNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145) for HarmonyOS badges.
   * >
   * > - This is supported starting from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 1
   */
  badgeSetNum?: number;
  /**
   * @remarks
   * The notification message category. This is an optional parameter. The default category is `MARKETING`.
   * 
   * > After you apply for the right to self-classify notification messages, this parameter is used to identify the message type. Different notification message types affect how messages are displayed and how users are reminded. For more information, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the official HarmonyOS website.
   * 
   * @example
   * IM
   */
  category?: string;
  /**
   * @remarks
   * Sets custom extension properties for the notification message. This is used to pass additional business data.
   * 
   * > The parameter must be passed in a standard JSON Map format. An incorrect format causes parsing to fail.
   * 
   * @example
   * {"key": "value"}
   */
  extParameters?: string;
  /**
   * @remarks
   * Extra data for the notification extension message.
   * 
   * > - This is valid when sending a HarmonyOS notification extension message.
   * >
   * > - It is conceptually equivalent to the extraData field of a HarmonyOS notification extension message. For a specific definition, see the HarmonyOS [ExtensionPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234) description.
   * >
   * > - This is supported starting from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * text
   */
  extensionExtraData?: string;
  /**
   * @remarks
   * Enables the HarmonyOS notification extension.
   * 
   * > - You must first apply for permission on the official HarmonyOS website to send notification extension messages. For related content, see the [HarmonyOS documentation](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) on sending notification extension messages.
   * >
   * > - This is supported starting from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * false
   */
  extensionPush?: boolean;
  /**
   * @remarks
   * The URL for the large icon on the right side of the notification. The URL must use the HTTPS protocol.
   * 
   * > - Supported image formats are png, jpg, jpeg, heif, gif, and bmp. The image dimensions (length × width) must be less than 25,000 pixels.
   * >
   * > - For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the official HarmonyOS website.
   * 
   * @example
   * https://example.com/xxx.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * When `RenderStyle` is `MULTI_LINE`, you must fill in this field to define the content for the multi-line text style. It supports up to 3 lines of content.
   */
  inboxContent?: string[];
  /**
   * @remarks
   * The JSON string of the HarmonyOS Live Window data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For developer integration, see the document [HarmonyOS Live Window Push Guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * Specifies the unique identifier (notifyId) for each message when it is displayed in the notification bar. If not provided, the push service automatically generates a unique identifier. Different notification messages can use the same notifyId to allow new messages to overwrite old ones. For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the official HarmonyOS website.
   * 
   * @example
   * 123456
   */
  notifyId?: number;
  /**
   * @remarks
   * The receipt ID for the HarmonyOS channel. This ID can be found in the receipt parameter settings on the HarmonyOS channel push operations platform.
   * 
   * > - If the default receipt configuration on the HarmonyOS channel push operations platform is the Alibaba Cloud receipt, you do not need to provide this. If not, we recommend that you first configure the default HarmonyOS channel receipt ID in the Alibaba Cloud EMAS Mobile Push console.
   * >
   * > - For more information, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the official HarmonyOS website.
   * 
   * @example
   * RCPB***DFD5
   */
  receiptId?: string;
  /**
   * @remarks
   * The notification message style. This is an optional parameter. The default is a normal notification.
   * 
   * @example
   * NORMAL
   */
  renderStyle?: string;
  /**
   * @remarks
   * Uses the specified type of notification channel.
   * 
   * > - This is only valid for Alibaba Cloud\\"s proprietary channels.
   * >
   * > - For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the official HarmonyOS website.
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
   * The duration of the custom message notification ringtone in seconds. The range is [1, 60]. If the ringtone duration is too short, it will loop.
   * 
   * @example
   * 2
   */
  soundDuration?: number;
  /**
   * @remarks
   * Enables test messages.
   * 
   * > - For more information, see the HarmonyOS push parameter [TestMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212).
   * 
   * @example
   * true
   */
  testMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the ability of an in-app page.
   * 
   * > - If there are multiple abilities, specify the action and URI for each ability separately. The system prioritizes using the action to find the corresponding in-app page.
   * >
   * > - For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the official HarmonyOS website.
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
   * Static pass-through parameters for iOS Live Activities push. They are used to transmit immutable business identification information.
   * 
   * > This is required when `Event` is \\`start\\`.
   * 
   * @example
   * {
   *   "orderId": "ORD20231201001",
   *   "restaurantName": "美味餐厅",
   *   "customerAddress": "xx区xx路xx号",
   *   "orderType": "delivery"
   * }
   */
  attributes?: string;
  /**
   * @remarks
   * The type of Live Activity to start.
   * 
   * > This is required when `Event` is \\`start\\`.
   * 
   * @example
   * OrderActivityAttributes
   */
  attributesType?: string;
  /**
   * @remarks
   * Dynamic pass-through parameters for a Live Activity. They contain real-time updatable status information and changing data.
   * 
   * > - Avoid overly frequent updates. An interval of 5 seconds or more is recommended.
   * >
   * > - Update multiple fields in a batch to reduce the number of pushes.
   * >
   * > - Consider the user experience and avoid screen flickering.
   * >
   * > - Must be a valid JSON string.
   * 
   * @example
   * {
   *     "status": "delivering",
   *     "estimatedTime": "10分钟",
   *     "progress": 80,
   *     "driverName": "李师傅",
   *     "currentStep": "配送员正在路上"}
   * }
   */
  contentState?: string;
  /**
   * @remarks
   * Sets the retention period for a finished Live Activity on the lock screen. This lets users view information after the activity has ended. It is a Unix timestamp in seconds.
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
   * The unique identifier for a Live Activity. It associates the activity instance on the device with the push target on the server.
   * 
   * >Notice: 
   * 
   * - This `ID` must be the same as the `forActivityId` parameter of the `registerLiveActivityPushToken` method in the client SDK.
   * 
   * - The server uses this `ID` to locate the specific activity instance during a push.
   * 
   * @example
   * FOOD_DELIVERY_ORD20231201001
   */
  id?: string;
  /**
   * @remarks
   * Sets the expiration timestamp for the content of an iOS Live Activity. It is a Unix timestamp in seconds.
   * 
   * > - After the specified time is reached, the system automatically marks the activity as expired.
   * >
   * > - Expired activities are removed from the Live Activity and the lock screen.
   * >
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
   * iOS notifications are sent through the Apple Push Notification service (APNs) center. You must specify the environment information. This is an optional parameter. The default is the production environment.
   * 
   * - DEV: Development environment, for applications installed and tested directly from Xcode.
   * 
   * - PRODUCT: Production environment, for applications distributed through the App Store, TestFlight, Ad Hoc, and enterprise channels.
   * 
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @remarks
   * The iOS application badge.
   * 
   * @example
   * 1
   */
  badge?: number;
  /**
   * @remarks
   * Specifies whether to enable the badge auto-increment feature. This is an optional parameter. The default value is false.
   * 
   * > - This parameter cannot be used with the badge setting parameter.
   * >
   * > - The badge auto-increment feature is maintained by the Alibaba Cloud push server, which counts the badges for each device. You must use SDK version 1.9.5 or later and actively sync the badge number to the server through the SDK.
   * 
   * @example
   * false
   */
  badgeAutoIncrement?: boolean;
  /**
   * @remarks
   * Specifies the category identifier for an iOS notification. This defines the notification\\"s interactive behavior and display style.
   * 
   * > - The category must be pre-registered in the app to take effect.
   * >
   * > - Different categories can define different sets of actions.
   * 
   * @example
   * MESSAGE_REPLY
   */
  category?: string;
  /**
   * @remarks
   * A unique identifier that controls notification merging. Notifications with the same identifier are overwritten.
   * 
   * @example
   * order_status_update_12345
   */
  collapseId?: string;
  /**
   * @remarks
   * Custom extension properties for iOS notifications.
   * 
   * > - The parameter must be passed in a standard JSON Map format. An incorrect format causes parsing to fail.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  extParameters?: string;
  /**
   * @remarks
   * The interruption level. This is an optional parameter. Valid values are:
   * 
   * - `passive`: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * 
   * - `active`: The system displays the notification immediately, lights up the screen, and can play a sound.
   * 
   * - `time-sensitive`: The system presents the notification immediately, lights up the screen, and can play a sound, but does not override system notification controls.
   * 
   * - `critical`: The system displays the notification immediately, lights up the screen, and plays a sound, bypassing the mute switch.
   * 
   * @example
   * active
   */
  interruptionLevel?: string;
  /**
   * @remarks
   * Live Activities parameter object.
   * 
   * >Notice: 
   * 
   * - Live Activities push only supports pushing to a single device of the `DEVICE` type.
   * 
   * - When you push to Live Activities, you can leave the title and body parameters empty.
   */
  liveActivity?: PushTaskNotificationIosLiveActivity;
  /**
   * @remarks
   * The iOS notification sound. Specify the name of the audio file stored in the app bundle or the sandbox Library/Sounds directory. For more information, see [How to set the notification sound for iOS push](https://help.aliyun.com/document_detail/48906.html).
   * 
   * > - If you specify an empty string (""), the notification is silent.
   * >
   * > - If this parameter is not set, the default value is \\`default\\`, which is the system prompt sound.
   * 
   * @example
   * default
   */
  music?: string;
  /**
   * @remarks
   * Enables extended notifications and controls whether iOS notifications support processing by the Notification Service Extension.
   * 
   * > - This must be set to true when you send a silent notification.
   * >
   * > - The extension processing time cannot exceed 30 seconds.
   * >
   * > - A timeout causes the notification to display the original content.
   * >
   * > - You must add a Notification Service Extension to your application.
   * 
   * @example
   * true
   */
  mutable?: boolean;
  /**
   * @remarks
   * The relevance score of the notification message. It is used to control the priority and display policy of the notification.
   * 
   * @example
   * 0.5
   */
  relevanceScore?: number;
  /**
   * @remarks
   * Controls whether to enable silent push mode.
   * 
   * > - When you send a silent notification, you can leave the `title` and `body` parameters empty.
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
   * 请查收订单。
   */
  subtitle?: string;
  /**
   * @remarks
   * The thread identifier for iOS notification grouping. It is used to classify and collapse related notifications.
   * 
   * > - Notifications with the same thread-id are automatically grouped.
   * >
   * > - Multiple related notifications are collapsed into one notification group.
   * >
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
   * Android notification configuration
   */
  android?: PushTaskNotificationAndroid;
  /**
   * @remarks
   * The content of the push notification.
   * 
   * > The length limits are as follows:
   * >
   * > - For iOS, HarmonyOS, and Android, the character length cannot exceed 200.
   * 
   * @example
   * 尊敬的客户，您好！您的预约订单已取消成功。
   */
  body?: string;
  /**
   * @remarks
   * HarmonyOS notification configuration.
   */
  hmos?: PushTaskNotificationHmos;
  /**
   * @remarks
   * iOS notification configuration
   */
  ios?: PushTaskNotificationIos;
  /**
   * @remarks
   * The title of the push notification.
   * 
   * > The length limits are as follows:
   * >
   * > - For iOS/HarmonyOS, the byte length cannot exceed 200.
   * >
   * > - For Android, the character length cannot exceed 50.
   * 
   * @example
   * 您有一条新消息
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
   * The delay time to trigger the text message, in seconds.
   * 
   * This must be set if you use SMS filter interaction. We recommend setting it to 15 seconds or more, with a maximum of 3 days, to avoid duplicate text messages and pushes.
   * 
   * > When you use SMS filter interaction, the ExpireTime parameter is invalid. The notification expiration time is calculated based on the DelaySecs parameter. The expiration time is the current time plus the DelaySecs time.
   * 
   * @example
   * 150
   */
  delaySecs?: number;
  /**
   * @remarks
   * Key-value pairs for the variables in the SMS template.
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
   * The SMS template name. You can get this from the SMS template management interface. It is the name assigned by the system, not the name set by the developer.
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
   * Sets the expiration time of the message. After this time, the message will no longer be sent. The maximum retention period is 72 hours.
   * 
   * > - This uses the ISO 8601 standard and UTC time. The format is YYYY-MM-DDThh:mm:ssZ.
   * >
   * > - The expiration time must satisfy: ExpireTime > PushTime + 3 seconds (3 seconds is a buffer for network and system delays).
   * >
   * > - Recommendation: The expiration time for a single push should be at least 1 minute. For a push to all or a batch push, it should be at least 10 minutes.
   * 
   * >Notice: 
   * 
   * For pass-through messages, if you do not set an expiration time, the message is only sent to online devices. If the device is offline, the message is discarded.
   * 
   * @example
   * 2025-06-21T12:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * A custom identifier for the push task. If JobKey is not empty, this field will be included in the receipt log. To view receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * jobkey1727749697913
   */
  jobKey?: string;
  /**
   * @remarks
   * A unique ID used to identify the message. This is only valid when the `Action` parameter is `CONTINUOUS_PUSH`.
   * 
   * @example
   * 1174754033128****
   */
  messageId?: number;
  /**
   * @remarks
   * Specifies the sending time of the message, up to 7 days in the future. This is only valid when the `Action` parameter is `SCHEDULED_PUSH`.
   * 
   * > This uses the ISO 8601 standard and UTC time. The format is yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2025-06-19T12:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * Resends the message as a text message.
   * 
   * > Currently, this is only supported for `Android` and `HarmonyOS` devices.
   */
  sms?: PushTaskOptionsSms;
  /**
   * @remarks
   * Specifies whether to automatically truncate oversized titles and content.
   * 
   * > This is only supported for vendor channels that have explicit limits on title and content length. It does not apply to channels like APNs, Huawei, and Honor, which do not limit title and content length but only the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * Specifies the sending channel. Valid values are:
   * 
   * - `accs`: Alibaba Cloud proprietary channel
   * 
   * - `huawei`: Huawei channel
   * 
   * - `honor`: Honor channel
   * 
   * - `xiaomi`: Xiaomi channel
   * 
   * - `oppo`: OPPO channel
   * 
   * - `vivo`: vivo channel
   * 
   * - `meizu`: Meizu channel
   * 
   * - `fcm`: Google Firebase channel (HTTP v1 API)
   * 
   * - `apns`: APNs channel
   * 
   * - `harmony`: HarmonyOS channel
   * 
   * > * If this parameter is not configured, all channels can be used.
   * >
   * > * If this parameter is configured, only the channels specified in the parameter are used.
   * >
   * > * If the configured channel conflicts with the sending policy (for example, iOS notifications only go through the APNs channel, but this parameter does not include \\`apns\\`), the message is not sent.
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
   * The platform type. This is an optional parameter.
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
   * The `MassPushV2` batch push API and `CONTINUOUS_PUSH` continuous push support only the following three target types:
   * 
   * - `DEVICE`
   * 
   * - `ACCOUNT`
   * 
   * - `ALIAS`
   * 
   * @example
   * DEVICE
   */
  type?: string;
  /**
   * @remarks
   * Set the push target based on `Target.Type`. Separate multiple targets with commas. The target types and their values are described as follows:
   * 
   * > - `DEVICE`: Device ID, such as deviceid1,deviceid2. You can specify up to 1,000 device IDs.
   * >
   * > - `ACCOUNT`: Account ID, such as account1,account2. You can specify up to 1,000 account IDs.
   * >
   * > - `ALIAS`: Alias, such as alias1,alias2. You can specify up to 1,000 aliases.
   * >
   * > - `TAG`: Supports one or more tags. For more information about the format, see [Tag format specifications](https://help.aliyun.com/document_detail/434847.html).
   * >
   * > - `ALL`: Push to all devices. You do not need to set a value. Pushing to all devices may increase costs. Use this feature with caution.
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
   * The push method. This is an optional parameter. The default value is `PUSH_IMMEDIATELY` (immediate push).
   * 
   * >Notice: 
   * 
   * The `MassPushV2` batch push API supports only the following push methods:
   * 
   * - `PUSH_IMMEDIATELY` (immediate push)
   * 
   * - `SCHEDULED_PUSH` (scheduled push)
   * 
   * @example
   * PUSH_IMMEDIATELY
   */
  action?: string;
  /**
   * @remarks
   * The pass-through message data sent to the device. The total length cannot exceed 4,000 bytes.
   * 
   * > Length calculation
   * >
   * > - The length is calculated based on the byte length of the UTF-8 encoded string after the Message object is serialized into JSON.
   * >
   * > - A Chinese character typically occupies 3 bytes in UTF-8 encoding.
   */
  message?: PushTaskMessage;
  /**
   * @remarks
   * The vendor notification data sent to the device.
   * 
   * >Notice: 
   * 
   * If you set both `Message` and `Notification`, the device receives only one. The sending rules are as follows:
   * 
   * - If the device is online, pass-through message data is sent.
   * 
   * - If the device is offline, a system notification is sent.
   */
  notification?: PushTaskNotification;
  /**
   * @remarks
   * Push options
   */
  options?: PushTaskOptions;
  /**
   * @remarks
   * The target object for the message push. This parameter is optional when the `Action` operation type is `CREATE_CONTINUOUS_PUSH` (create a continuous push task).
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

