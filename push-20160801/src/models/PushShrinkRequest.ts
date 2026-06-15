// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the activity to open when the notification is tapped.
   * 
   * This is required only when \\`AndroidOpenType\\` is \\`Activity\\`. For example: \\`com.alibaba.cloudpushdemo.bizactivity\\`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Sets the value to add to the badge number. This value is added to the original badge number. The value must be between 1 and 99.
   * 
   * > This is effective only for pushes through Huawei/Honor vendor channels. If both \\`AndroidBadgeAddNum\\` and \\`AndroidBadgeSetNum\\` are present, \\`AndroidBadgeSetNum\\` takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * The fully qualified class name of the app\\"s entry Activity for badge setting.
   * 
   * > This is effective only for pushes through Huawei/Honor vendor channels.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Sets a fixed number for the badge. The value must be between 0 and 99.
   * 
   * > For vendor channel pushes, this is effective only for Huawei and Honor channels. For pushes through Alibaba Cloud\\"s proprietary channel, this is effective only on Huawei, Honor, and vivo models.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * The body in long text mode. Length limit: 1,000 bytes (1 Chinese character is counted as 3 bytes). The actual limit depends on the specific vendor channel.
   * 
   * Currently supported on:
   * 
   * - Huawei: EMUI 10 and later
   * 
   * - Honor: Magic UI 4.0 and later
   * 
   * - Xiaomi: MIUI 10 and later
   * 
   * - OPPO: ColorOS 5.0 and later
   * 
   * - Meizu: Flyme
   * 
   * - Proprietary channel: Android SDK 3.6.0 and later
   * 
   * > If this parameter is not provided in long text mode, the system uses the first non-empty value from \\`Body\\` or \\`AndroidPopupBody\\`.
   * 
   * @example
   * 示例长文本
   */
  androidBigBody?: string;
  /**
   * @remarks
   * The image URL for big picture mode. Currently supported by the proprietary channel on Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * The title in long text mode. Length limit: 200 bytes (1 Chinese character is counted as 3 bytes).
   * 
   * - Currently, this is only supported by Honor channels and Huawei channels on EMUI 11 and later.
   * 
   * - If this parameter is not provided in long text mode, the system uses the first non-empty value from \\`Title\\` or \\`AndroidPopupTitle\\`.
   * 
   * @example
   * 示例长标题
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * Sets the extended properties of the notification. This property is not effective when \\`PushType\\` is \\`MESSAGE\\`.
   * 
   * This parameter must be in JSON map format to avoid parsing errors.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  /**
   * @remarks
   * Sets the Honor channel notification type:
   * 
   * - **0**: Formal notification (default).
   * 
   * - **1**: Test notification.
   * 
   * > Each app can send 1,000 test notifications per day. These are not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * Sets the Huawei quick notification parameter.
   * 
   * - **0**: Send a standard Huawei notification (default).
   * 
   * - **1**: Send a Huawei quick notification.
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * A JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development and integration, see [Huawei Live Notification Push Guide](https://help.aliyun.com/document_detail/2983768.html).
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
  androidHuaweiLiveNotificationPayload?: string;
  /**
   * @remarks
   * The receipt ID for the Huawei channel. You can find this ID in the receipt parameter configuration on the Huawei Push service platform.
   * 
   * > If the default receipt configuration on the Huawei Push service platform is the Alibaba Cloud receipt, do not provide this. If not, first configure the default Huawei channel receipt ID in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @remarks
   * Sets the Huawei channel notification type:
   * 
   * - **0**: Formal notification (default).
   * 
   * - **1**: Test notification.
   * 
   * > Each app can send 500 test notifications per day. These are not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * The URL for the right-side icon.
   * Currently supported on:
   * 
   * - Huawei EMUI (only in long text and inbox modes).
   * 
   * - Honor Magic UI (only in long text mode).
   * 
   * - Proprietary channel: Android SDK 3.5.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * The body content for inbox mode. The content must be a valid JSON array with no more than 5 elements. Currently supported on:
   * 
   * - Huawei: EMUI 9 and later
   * 
   * - Honor: Magic UI 4.0 and later
   * 
   * - Xiaomi: MIUI 10 and later
   * 
   * - OPPO: ColorOS 5.0 and later
   * 
   * - Proprietary channel: Android SDK 3.6.0 and later
   * 
   * @example
   * ["第一行","第二行"]
   */
  androidInboxBody?: string;
  /**
   * @remarks
   * Meizu message type
   * 
   * - 0 Public message (default)
   * 
   * - 1 Private message
   * 
   * @example
   * 0
   * 
   * **if can be null:**
   * true
   */
  androidMeizuNoticeMsgType?: number;
  /**
   * @remarks
   * Function 1: After applying for [self-classification rights](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this is used to identify the message type and determine the [message alert method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718). It accelerates the sending of specific message types. For valid values, refer to the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei Push documentation. Fill in the \\"Cloud notification category value\\" or \\"Local notification category value\\" from the document\\"s table.
   * 
   * Function 2: After applying for [special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this is used to identify high-priority pass-through scenarios. Valid values:
   * 
   * - VOIP: Voice and video calls
   * 
   * - PLAY_VOICE: Voice playback
   * 
   * > If the \\"Cloud notification category value\\" is \\"Not applicable\\", the push is sent through Alibaba Cloud\\"s proprietary channel. If the \\"Local notification category value\\" is \\"Not applicable\\", the push is sent through the Huawei channel.
   * 
   * @example
   * VOIP
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * The delivery priority for notifications on the Huawei channel. Valid values:
   * 
   * - **HIGH**
   * 
   * - **NORMAL**
   * 
   * Apply for permission. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO classifies and manages messages in two categories: Communication & Service, and Content & Marketing.
   * 
   * Communication & Service (requires permission):
   * 
   * - IM: Instant messaging, audio, and video calls
   * 
   * - ACCOUNT: Personal account and asset changes
   * 
   * - DEVICE_REMINDER: Personal device reminders
   * 
   * - ORDER: Personal order/logistics status changes
   * 
   * - TODO: Personal schedule/to-do items
   * 
   * - SUBSCRIPTION: Personal subscriptions
   * 
   * Content & Marketing:
   * 
   * - NEWS: News and information
   * 
   * - CONTENT: Content recommendations
   * 
   * - MARKETING: Platform activities
   * 
   * - SOCIAL: Social updates
   * 
   * For more information, see [OPUSH Message Classification Rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * The alert level for notification bar messages on the OPPO channel. Valid values:
   * 
   * - 1: Notification bar
   * 
   * - 2: Notification bar, lock screen, ringtone, vibration (default level for Communication & Service messages)
   * 
   * - 16: Notification bar, lock screen, ringtone, vibration, banner (requires permission)
   * 
   * > When using the \\`AndroidMessageOppoNotifyLevel\\` parameter, you must also pass the \\`AndroidMessageOppoCategory\\` parameter.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo classifies and manages messages in two categories: System messages and Operational messages.
   * System messages:
   * 
   * - IM: Instant messages
   * 
   * - ACCOUNT: Account and assets
   * 
   * - TODO: Schedule and to-do
   * 
   * - DEVICE_REMINDER: Device information
   * 
   * - ORDER: Orders and logistics
   * 
   * - SUBSCRIPTION: Subscription reminders
   * 
   * Operational messages:
   * 
   * - NEWS: News
   * 
   * - CONTENT: Content recommendations
   * 
   * - MARKETING: Operational activities
   * 
   * - SOCIAL: Social updates
   * 
   * For more information, see [Classification description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * The notification sound for the Huawei vendor channel. Specify the name of the audio file located in the \\`app/src/main/res/raw/\\` directory of the client project. Do not include the file format suffix.
   * 
   * If this is not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  androidMusic?: string;
  /**
   * @remarks
   * The priority for arranging the Android notification in the notification bar. Valid values: -2, -1, 0, 1, 2.
   * 
   * @example
   * 0
   */
  androidNotificationBarPriority?: number;
  /**
   * @remarks
   * The custom Android notification bar style. Valid values: 1 to 100.
   * 
   * @example
   * 2
   */
  androidNotificationBarType?: number;
  /**
   * @remarks
   * The \\`channelId\\` for the Android app. This must correspond to a \\`channelId\\` in the app.
   * 
   * - Set the \\`NotificationChannel\\` parameter. For more information about its usage, see [FAQ: Why are notifications not received on devices running Android 8.0 or later?](https://help.aliyun.com/document_detail/67398.html).
   * 
   * - Because the \\`channel_id\\` for the OPPO private message channel is the same as the app\\"s \\`channelId\\`, this value is used for pushes through the OPPO channel.
   * 
   * - This value is used for pushes through Huawei, FCM, and Alibaba Cloud\\"s proprietary channels.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * Message grouping. For messages in the same group, the notification bar shows only the latest message and the total number of messages received for that group. It does not display all messages and cannot be expanded. Currently supported on:
   * 
   * - Huawei vendor channel
   * 
   * - Honor vendor channel
   * 
   * - Proprietary channel for Android SDK 3.9.1 and earlier
   * 
   * > This parameter is no longer supported by the proprietary channel for Android SDK 3.9.2 and later.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * Sets the \\`importance\\` parameter for Honor notification message classification. This determines the notification behavior on the user\\"s device. Valid values:
   * 
   * - **LOW**: For informational and marketing messages.
   * 
   * - **NORMAL**: For service and communication messages.
   * 
   * Apply for this on the Honor platform. [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * Sets the \\`importance\\` parameter for Huawei notification message classification. This determines the notification behavior on the user\\"s device. Valid values:
   * 
   * - LOW: For informational and marketing messages.
   * 
   * - NORMAL: For service and communication messages.
   * 
   * > * For the Huawei channel, use \\`AndroidMessageHuaweiCategory\\` for notification classification. You may no longer need to use \\`AndroidNotificationHuaweiChannel\\`.
   * >
   * > * Apply for this on the Huawei platform. [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * A unique identifier for each message when it is displayed as a notification. Different notifications can have the same \\`NotifyId\\`, which allows a new notification to overwrite an old one.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * Message grouping. Messages in the same group are displayed in a collapsed state in the notification bar and can be expanded. Notifications from different groups are displayed separately. Currently supported on:
   * 
   * - Proprietary channel for Android SDK 3.9.2 and later
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * Sets the classification for vivo notification messages. Valid values:
   * 
   * - 0: Operational messages (default)
   * 
   * - 1: System messages
   * 
   * > * For the vivo channel, use \\`AndroidMessageVivoCategory\\` for notification classification. You may no longer need to use \\`AndroidNotificationVivoChannel\\`.
   * >
   * > * Apply for this on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * classification
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * Sets the \\`channelId\\` for the Xiaomi notification type. Apply for this on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * 
   * > - A single app can apply for a maximum of 8 channels through the Xiaomi channel. Plan accordingly.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * The notification alert type. Valid values:
   * 
   * - **VIBRATE**: Vibrate (default)
   * 
   * - **SOUND**: Sound
   * 
   * - **BOTH**: Sound and vibrate
   * 
   * - **NONE**: Silent
   * 
   * @example
   * BOTH
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * The action to take after a notification is tapped. Valid values:
   * 
   * - **APPLICATION**: Open the application (default).
   * 
   * - **ACTIVITY**: Open a specific Android Activity.
   * 
   * - **URL**: Open a URL.
   * 
   * - **NONE**: No action.
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * The URL to open after the Android device receives the push.
   * 
   * This is required only when \\`AndroidOpenType\\` is \\`URL\\`.
   * 
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * A JSON string of the OPPO Fluid Cloud intent deletion data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the \\`AndroidOppoIntelligentIntent\\` parameter is filled. For development and integration, see [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
  androidOppoDeleteIntentData?: string;
  /**
   * @remarks
   * A JSON string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, see [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
  androidOppoIntelligentIntent?: string;
  /**
   * @remarks
   * Sets the OPPO Fluid Cloud push environment.
   * 
   * - **0**: Production environment (default).
   * 
   * - **1**: Staging environment.
   * 
   * > The OPPO Fluid Cloud staging environment must be set up on the client side. For more information, see [Environment setup](https://open.oppomobile.com/documentation/page/info?id=13590).
   * 
   * @example
   * 1
   */
  androidOppoIntentEnv?: number;
  /**
   * @remarks
   * OPPO private message template content parameters
   */
  androidOppoPrivateContentParametersShrink?: string;
  /**
   * @remarks
   * OPPO private message template ID
   * 
   * @example
   * 687557242b1634hzefs3d5013
   */
  androidOppoPrivateMsgTemplateId?: string;
  /**
   * @remarks
   * OPPO private message template title parameters
   */
  androidOppoPrivateTitleParametersShrink?: string;
  /**
   * @remarks
   * Specifies the Activity to launch after the notification is tapped.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @remarks
   * The body content in auxiliary pop-up mode. This parameter is required if \\`AndroidPopupActivity\\` is not empty.
   * 
   * Length limit: 200 characters. Both Chinese and English characters count as one.
   * 
   * If you use a vendor channel, comply with its restrictions. For more information, see [Limits on pushes through auxiliary channels on Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * The title content in auxiliary pop-up mode. This parameter is required if \\`AndroidPopupActivity\\` is not empty.
   * 
   * Length limit: 50 characters. Both Chinese and English characters count as one.
   * 
   * If you use a vendor channel, comply with its restrictions. For more information, see [Limits on pushes through auxiliary channels on Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * If the device is offline when a message is pushed, this push uses the auxiliary pop-up feature. The default value is \\`false\\`. This is effective only when \\`PushType\\` is \\`MESSAGE\\`.
   * 
   * If the message is successfully converted to a notification, the data displayed in the notification is the value of the \\`AndroidPopupTitle\\` and \\`AndroidPopupBody\\` parameters set on the server. When the notification is tapped, the data obtained in the \\`onSysNoticeOpened\\` method of the auxiliary pop-up is the value of the \\`Title\\` and \\`Body\\` parameters set on the server.
   * 
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @remarks
   * The notification style. Valid values:
   * 
   * - **0**: Standard mode (default)
   * 
   * - **1**: Long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and proprietary channels)
   * 
   * - **2**: Big picture mode (supported by proprietary channels, but not by Xiaomi models)
   * 
   * - **3**: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and proprietary channels)
   * 
   * > This parameter is required if you use a non-standard mode.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: number;
  /**
   * @remarks
   * Sets the vendor channel notification type:
   * 
   * - **0**: Formal notification (default).
   * 
   * - **1**: Test notification.
   * 
   * > * Configuring this parameter is equivalent to configuring \\`AndroidHuaweiTargetUserType\\`, \\`AndroidHonorTargetUserType\\`, \\`AndroidVivoPushMode\\`, and \\`AndroidOppoIntentEnv\\` simultaneously. Specific vendor channel parameters can override this setting.
   * >
   * > * Currently supported by: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 0
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * A JSON string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, see [vivo Atomic Island Push Guide](https://help.aliyun.com/zh/document_detail/3030718.html).
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
  androidVivoLiveMessage?: string;
  /**
   * @remarks
   * Sets the vivo channel notification type:
   * 
   * - **0**: Formal push (default).
   * 
   * - **1**: Test push.
   * 
   * > For test pushes, configure test devices in the vivo console beforehand. Find the test device\\"s \\`RegId\\` by searching for "onReceiveRegId regId" in the device startup logs.
   * 
   * @example
   * 0
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * The receipt ID for the vivo channel. You can find this ID in the application information section of the vivo open platform\\"s push service.
   * 
   * > If the default receipt configuration on the vivo open platform is the Alibaba Cloud receipt, do not provide this. If not, first configure the default vivo channel receipt ID in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * @example
   * 123
   */
  androidVivoReceiptId?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new parameter **AndroidPopupActivity**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new parameter **AndroidPopupBody**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new parameter **AndroidPopupTitle**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @remarks
   * This parameter is deprecated. Starting from August 2023, Xiaomi no longer supports dynamically setting small icons, right-side icons, or large pictures during pushes on new devices/systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * A JSON string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
  androidXiaomiFocusParam?: string;
  /**
   * @remarks
   * A JSON string of the Xiaomi Super Island data images [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
   * 
   * @example
   * {
   *     "miui.focus.pic_ticker": "https://example.com/ticker.jpg",
   *     "miui.focus.pic_aod": "https://example.com/aod.jpg",
   *     "miui.focus.pic_imageText": "https://example.com/imageText.jpg"
   * }
   */
  androidXiaomiFocusPics?: string;
  /**
   * @remarks
   * This parameter is deprecated. Starting from August 2023, Xiaomi no longer supports dynamically setting small icons, right-side icons, or large pictures during pushes on new devices/systems.
   * 
   * @example
   * https://imag.example.com/image.png
   * 
   * @deprecated
   */
  androidXiaomiImageUrl?: string;
  androidXiaomiTemplateId?: string;
  androidXiaomiTemplateParams?: string;
  /**
   * @remarks
   * The AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The content of the notification or message for Android and HarmonyOS pushes. The content of the message or notification for iOS. The size of the push content is limited. For more information, see [Product limits](https://help.aliyun.com/document_detail/434629.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * 
   * - **HARMONY**: A HarmonyOS device.
   * 
   * - **iOS**: An iOS device.
   * 
   * - **ANDROID**: An Android device.
   * 
   * - **ALL**: For older dual-platform apps, this sends pushes to both Android and iOS devices. For newer single-platform apps, this has the same effect as specifying the device type for that app.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * The expiration time for offline messages or notifications. Use this with \\`StoreOffline\\`. The message is not sent after this time. The maximum retention period is 72 hours, which is also the default.
   * 
   * The time must be in ISO 8601 format and in UTC: \\`YYYY-MM-DDThh:mm:ssZ\\`. The expiration time must be at least 3 seconds after the current time or the scheduled push time (\\`ExpireTime\\` > \\`PushTime\\` + 3 seconds). The 3-second buffer accounts for network and system delays. For single pushes, use a value of at least 1 minute. For batch pushes or pushes to all devices, use a value of at least 10 minutes.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The action corresponding to the in-app page ability.
   * 
   * >Notice: 
   * 
   * When \\`HarmonyActionType\\` is \\`APP_CUSTOM_PAGE\\`, fill in at least one of \\`HarmonyUri\\` or \\`HarmonyAction\\`.
   * 
   * 
   * 
   * For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) in the HarmonyOS documentation.
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * The action to take after a notification is tapped. Valid values:
   * 
   * - APP_HOME_PAGE: Open the app\\"s home page.
   * 
   * - APP_CUSTOM_PAGE: Open a custom page in the app.
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * The number to add to the HarmonyOS app badge. See the description of the [HarmonyOS badge addNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br>
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * The number to set for the HarmonyOS app badge. See the description of the [HarmonyOS badge setNum field](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).
   * Supported starting from HarmonyOS SDK version 1.2.0.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * The notification message category. After you apply for notification message self-classification rights, this is used to identify the message type. Different notification message types affect how messages are displayed and alerted. Valid values:
   * 
   * - IM: Instant messaging
   * 
   * - VOIP: Voice and video calls
   * 
   * - SUBSCRIPTION: Subscriptions
   * 
   * - TRAVEL: Travel
   * 
   * - HEALTH: Health
   * 
   * - WORK: Work reminders
   * 
   * - ACCOUNT: Account updates
   * 
   * - EXPRESS: Orders & logistics
   * 
   * - FINANCE: Finance
   * 
   * - DEVICE_REMINDER: Device reminders
   * 
   * - MAIL: Mail
   * 
   * - CUSTOMER_SERVICE: Customer service messages
   * 
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational activities. This only identifies the content and does not speed up message delivery. These are collectively known as informational and marketing messages.
   * 
   * For more information, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) in the HarmonyOS documentation.
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * Sets the extended properties of the notification. This property is not effective when \\`PushType\\` is \\`MESSAGE\\`.
   * 
   * This parameter must be in JSON map format to avoid parsing errors.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * The extra data for the extended notification message.<br>
   * This is effective when sending a HarmonyOS extended notification message.<br>
   * Conceptually, this is equivalent to the \\`extraData\\` field of a HarmonyOS extended notification message. For the specific definition, see [HarmonyOS ExtensionPayload Description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br><br><br>
   * 
   * @example
   * 示例额外数据
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * When \\`PushType\\` is \\`NOTICE\\`, specifies whether this is a HarmonyOS extended notification message.
   * 
   * - true: Send an extended notification message.
   * 
   * - false: Send a normal notification (default).
   * 
   * Apply for permission on the HarmonyOS side before you can send extended notification messages. For more information, see [Send Extended Notification Messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) in the HarmonyOS documentation.<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br>
   * 
   * @example
   * true
   */
  harmonyExtensionPush?: boolean;
  /**
   * @remarks
   * The URL for the large icon on the right of the notification. The URL must use the HTTPS protocol.
   * 
   * > Supported image formats are PNG, JPG, JPEG, HEIF, GIF, and BMP. The image dimensions (height × width) must be less than 25,000 pixels.
   * 
   * For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) in the HarmonyOS documentation.
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * The content for the multi-line text style. This field is required when \\`HarmonyRenderStyle\\` is \\`MULTI_LINE\\`. It supports up to 3 lines of content.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
  /**
   * @remarks
   * A JSON string of the HarmonyOS Live Window data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development and integration, see [HarmonyOS Live Window Push Guide](https://help.aliyun.com/document_detail/2982112.html).
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
  harmonyLiveViewPayload?: string;
  /**
   * @remarks
   * Uses the specified type of notification channel. This is effective only when the Alibaba Cloud proprietary channel is online.
   * 
   * - SOCIAL_COMMUNICATION: Social communication.
   * 
   * - SERVICE_INFORMATION: Service reminders.
   * 
   * - CONTENT_INFORMATION: Content information.
   * 
   * - CUSTOMER_SERVICE: Customer service messages. This type is for messages between users and businesses and must be initiated by the user.
   * 
   * - OTHER_TYPES: Others.
   * 
   * For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) in the HarmonyOS documentation.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * A unique identifier for each message when it is displayed as a notification. If not provided, the push service automatically generates a unique ID for each message. Different notifications can have the same \\`notifyId\\`, which allows a new message to overwrite an old one.
   * 
   * For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) in the HarmonyOS documentation.
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * The receipt ID for the HarmonyOS channel. You can find this ID in the receipt parameter configuration on the HarmonyOS Push service platform.
   * 
   * > If the default receipt configuration on the HarmonyOS Push service platform is the Alibaba Cloud receipt, do not provide this. If not, first configure the default HarmonyOS channel receipt ID in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * For more information, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) in the HarmonyOS documentation.
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * If the device is offline when a message is pushed, this push uses the auxiliary pop-up feature. The default value is \\`false\\`. This is effective only when \\`PushType\\` is \\`MESSAGE\\`.
   * 
   * If the message is successfully converted to a notification, the data displayed in the notification is the value of the \\`HarmonyRemindTitle\\` and \\`HarmonyRemindBody\\` parameters set on the server.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * The HarmonyOS notification content used when a message is converted to a notification. This is effective only when \\`HarmonyRemind\\` is \\`true\\`.
   * 
   * @example
   * 您有一条新消息，请查收
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * The HarmonyOS notification title used when a message is converted to a notification. This is effective only when \\`HarmonyRemind\\` is \\`true\\`.
   * 
   * @example
   * 新消息
   */
  harmonyRemindTitle?: string;
  /**
   * @remarks
   * The notification message style:
   * 
   * - NORMAL: Normal notification (default)
   * 
   * - MULTI_LINE: Multi-line text style
   * 
   * @example
   * NORMAL
   */
  harmonyRenderStyle?: string;
  /**
   * @remarks
   * Test message flag:
   * 
   * - false: Normal message (default)
   * 
   * - true: Test message
   * 
   * For more information, see [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) in the HarmonyOS documentation.
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the in-app page ability.
   * >Notice: When \\`HarmonyActionType\\` is \\`APP_CUSTOM_PAGE\\`, fill in at least one of \\`HarmonyUri\\` or \\`HarmonyAction\\`. If there are multiple abilities, fill in the action and URI for each. The action is used with priority to find the corresponding in-app page.
   * 
   * For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) in the HarmonyOS documentation.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * An idempotent parameter to prevent duplicate pushes caused by API call retries. If you make a call with the same \\`IdempotentToken\\` within 15 minutes, only one push is sent. Subsequent calls return the result of the first successful push.
   * 
   * > - The parameter must be a standard 36-character UUID (8-4-4-4-12). Each valid character must be a hexadecimal digit from 0-9 or a-f, case-insensitive.
   * >
   * > - This parameter only prevents duplicate pushes from retries. It cannot prevent duplicate pushes from concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * A custom ID for the push task. If \\`JobKey\\` is not empty, this field is included in the receipt logs. For more information about receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * > The format must consist of letters, numbers, underscores (_), or hyphens (-). The length cannot exceed 32 characters.
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Used for scheduled sending. If you do not set this parameter, the push is sent immediately.
   * The scheduled time can be no more than 7 days in the future.
   * 
   * The time must be in ISO 8601 format and in UTC: \\`YYYY-MM-DDThh:mm:ssZ\\`.
   * 
   * > Scheduled sending is not supported when \\`Target\\` is \\`TBD\\` (continuous push).
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * 
   * - **NOTICE**: A notification. Notifications are sent to devices through vendor channels, such as APNs, Huawei, Xiaomi, and HarmonyOS, and appear directly in the device\\"s notification bar. When an Android device is online (the app process is active), the notification is preferentially sent through Alibaba Cloud\\"s proprietary channel. The Push software development kit (SDK) then constructs and displays the notification. This improves push performance and can save on vendor channel message quotas in some scenarios.
   * 
   * - **MESSAGE**: A message. Messages are sent through Alibaba Cloud\\"s proprietary online channel. They do not appear in the notification bar by default. Instead, the app must be active to receive and process them. Your business logic determines whether to trigger any actions. If a device is offline (the app process is inactive), it cannot receive messages immediately. In this case, use the \\`iOSRemind\\` or \\`AndroidRemind\\` parameter to convert the message into a notification. Alternatively, set the \\`StoreOffline\\` parameter to have the push system save the message. The system then delivers the message automatically when the device comes back online.
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @remarks
   * Specifies the sending channels. Valid values:
   * 
   * - accs: Alibaba Cloud\\"s proprietary channel
   * 
   * - huawei: Huawei channel
   * 
   * - honor: Honor channel
   * 
   * - xiaomi: Xiaomi channel
   * 
   * - oppo: OPPO channel
   * 
   * - vivo: vivo channel
   * 
   * - meizu: Meizu channel
   * 
   * - gcm: Google GCM channel (legacy HTTP)
   * 
   * - fcm: Google Firebase channel (HTTP v1 API)
   * 
   * - apns: APNs channel
   * 
   * - harmony: HarmonyOS channel
   * 
   * > * If you do not set this parameter, all channels can be used.
   * >
   * > * If you set this parameter, only the specified channels are used.
   * >
   * > * If the specified channels conflict with the sending policy, the push is not sent. For example, if an iOS notification can only be sent through the APNs channel, but \\`apns\\` is not included in this parameter, the push will fail.
   * >
   * > * If you specify \\`gcm\\`, pushes can be sent through both Google GCM and FCM channels. If you specify \\`fcm\\`, pushes can only be sent through the Google FCM channel.
   * 
   * @example
   * accs,huawei,xiaomi
   */
  sendChannels?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  sendSpeed?: number;
  /**
   * @remarks
   * The delay time in seconds before triggering the text message.
   * 
   * This must be set if using SMS filter interaction. Set it to 15 seconds or more, with a maximum of 3 days, to avoid duplicate pushes and text messages.
   * 
   * > When using SMS filter interaction, the \\`ExpireTime\\` parameter is invalid. The notification expiration time is calculated based on the \\`SmsDelaySecs\\` parameter. The expiration time is the current time plus the \\`SmsDelaySecs\\` time.
   * 
   * @example
   * 15
   */
  smsDelaySecs?: number;
  /**
   * @remarks
   * The key-value pairs for the variables in the SMS template. Format: `key1=value1&key2=value2`.
   * 
   * @example
   * key1=value1
   */
  smsParams?: string;
  /**
   * @remarks
   * The condition for triggering the text message. Valid values:
   * 
   * - **0**: Triggered when the push is not received.
   * 
   * - **1**: Triggered when the user does not open the push.
   * 
   * @example
   * 0
   */
  smsSendPolicy?: number;
  /**
   * @remarks
   * The signature for the supplementary text message.
   * 
   * @example
   * 短信签名
   */
  smsSignName?: string;
  /**
   * @remarks
   * The name of the SMS template for supplementary sending. Get this from the SMS template management interface. This is the system-assigned name, not the name set by the developer.
   * 
   * @example
   * 短信模板名称
   */
  smsTemplateName?: string;
  /**
   * @remarks
   * Specifies whether to save offline messages and notifications. The default value is **false**.
   * 
   * If set to true, and a user is offline, the message is sent again when the user comes online before the \\`ExpireTime\\`. The default \\`ExpireTime\\` is 72 hours. iOS notifications are sent through APNs and are not affected by this parameter.
   * 
   * @example
   * false
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The push target. Valid values:
   * 
   * - **DEVICE**: Push to devices.
   * 
   * - **ACCOUNT**: Push to accounts.
   * 
   * - **ALIAS**: Push to aliases.
   * 
   * - **TAG**: Push to tags.
   * 
   * - **ALL**: Push to all devices. The interval between two consecutive pushes to all devices of the same \\`DeviceType\\` must be at least 1 second.
   * 
   * > When pushing to all iOS devices, the push is sent to devices that have been active in the last 24 months and have not uninstalled the app. A push is considered delivered once the Apple Push Notification service (APNs) receives the request and does not return an error. This can cause a sharp increase in the number of active devices and lead to significant costs. Use this feature with caution.
   * 
   * - **TBD**: Initializes a continuous push. The target is specified by a subsequent call to the [ContinuouslyPush](https://help.aliyun.com/document_detail/2249917.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * Set this based on the \\`Target\\` type. Use commas to separate multiple values. If you exceed the limit, send multiple pushes.
   * 
   * - If \\`Target\\` is \\`DEVICE\\`, provide device IDs, such as \\`deviceid1,deviceid2\\`. You can specify up to 1,000 device IDs.
   * 
   * - If \\`Target\\` is \\`ACCOUNT\\`, provide account IDs, such as \\`account1,account2\\`. You can specify up to 1,000 account IDs.
   * 
   * - If \\`Target\\` is \\`ALIAS\\`, provide aliases, such as \\`alias1,alias2\\`. You can specify up to 1,000 aliases.
   * 
   * - If \\`Target\\` is \\`TAG\\`, you can use single or multiple tags. For more information about the format, see [Tag format](https://help.aliyun.com/document_detail/434847.html).
   * 
   * - If \\`Target\\` is \\`ALL\\`, set the value to **ALL**. This is a fixed parameter combination for pushing to all devices.
   * 
   * - If \\`Target\\` is \\`TBD\\`, set the value to **TBD**. This is a fixed parameter combination for continuous pushes.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the notification or message. The maximum length is 200 bytes.
   * 
   * This is required for pushes to Android and HarmonyOS. It is optional for iOS notifications. If you provide a title for an iOS notification:
   * 
   * - For iOS 10 and later, the notification displays the title.
   * 
   * - For iOS 8.2 to iOS 9.x, the title replaces the app name in the notification.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to automatically truncate titles and content that are too long.
   * 
   * > This only applies to vendor channels that have explicit limits on title and content length. It does not apply to channels like APNs, Huawei, and Honor, which only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * iOS notifications are sent through APNs. Specify the environment.
   * 
   * - **DEV**: The development environment. Use this for apps installed and debugged directly from Xcode.
   * 
   * - **PRODUCT**: The production environment. Use this for apps distributed through the App Store, TestFlight, Ad Hoc, or enterprise distribution.
   * 
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @remarks
   * The badge number on the top-right corner of the app icon on iOS.
   * 
   * > If \\`iOSBadgeAutoIncrement\\` is set to \\`true\\`, this parameter must be empty.
   * 
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-increment feature for the badge number. The default value is \\`false\\`.
   * 
   * > When this is \\`true\\`, \\`iOSBadge\\` must be empty.
   * 
   * The auto-increment feature is managed by the push server, which maintains a badge count for each device. This requires SDK version 1.9.5 or later. The user must also actively sync the badge number to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The extended properties of the iOS notification.
   * 
   * For iOS 10 and later, specify the resource URL for a rich push notification, such as \\`{"attachment": "https\\://xxxx.xxx/notification_pic.png"}\\`. This parameter must be in JSON map format to avoid parsing errors.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * The interruption level. Valid values:
   * 
   * - **passive**: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * 
   * - **active**: The system displays the notification immediately, lights up the screen, and can play a sound.
   * 
   * - **time-sensitive**: The system presents the notification immediately, lights up the screen, and can play a sound, but it does not break through system notification controls.
   * 
   * - **critical**: The system displays the notification immediately, lights up the screen, and plays a sound, bypassing the mute switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * A JSON string containing static pass-through parameters for Dynamic Island pushes. It includes static, custom user information, such as product numbers and order details.
   * 
   * > This is required when \\`iOSLiveActivityEvent\\` is \\`start\\`.
   * 
   * @example
   * {"orderId": "12345", "product": "Shoes"}
   */
  iOSLiveActivityAttributes?: string;
  /**
   * @remarks
   * The type of Live Activity to start.
   * 
   * > This is required when \\`iOSLiveActivityEvent\\` is \\`start\\`.
   * 
   * @example
   * OrderActivityAttributes
   */
  iOSLiveActivityAttributesType?: string;
  /**
   * @remarks
   * Dynamic pass-through parameters for Dynamic Island pushes. It includes real-time updates, such as price or inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * A UNIX timestamp in seconds. The ended Live Activity remains on the lock screen until this specified time. The maximum duration is 4 hours.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityDismissalDate?: number;
  /**
   * @remarks
   * Starts, updates, or ends a Live Activity.
   * 
   * - Enumeration: start | update | end
   * 
   * @example
   * start
   */
  iOSLiveActivityEvent?: string;
  /**
   * @remarks
   * The Live Activity ID reported by the device to your server. This is the unique identifier for the Live Activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * A UNIX timestamp in seconds. Marks the time when the activity\\"s content becomes outdated.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * The sound for an iOS notification. Specify the name of an audio file located in the app bundle or the \\`Library/Sounds\\` directory of the sandbox. For more information, see [How to set notification sounds for iOS pushes](https://help.aliyun.com/document_detail/48906.html).
   * 
   * If you specify an empty string (""), the notification is silent. If you do not set this parameter, the default system sound is used.
   * 
   * @example
   * ""
   */
  iOSMusic?: string;
  /**
   * @remarks
   * The flag for the iOS notification content extension (iOS 10+). If set to \\`true\\`, an APNs notification can be processed by the extension before it is displayed. This must be set to \\`true\\` for silent notifications.
   * 
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @remarks
   * Specifies the iOS notification category (iOS 10+).
   * 
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @remarks
   * If a device receives multiple notifications with the same \\`CollapseId\\`, they are merged into a single notification. If the device is offline and receives consecutive notifications with the same \\`CollapseId\\`, only one is shown in the notification bar. This parameter is supported on iOS 10 and later.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * Groups iOS remote notifications using this property. It marks the identifier for the collapsed group.
   * This is supported only on iOS 12.0 and later.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * The score for highlighting the summary. The value must be a floating-point number between 0 and 1.
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * If a device is offline when a message is pushed (meaning the persistent connection to the Mobile Push server is down), the push is sent once as a notification through Apple\\"s APNs channel.
   * 
   * > Converting offline messages to notifications is only supported in the production environment.
   * 
   * @example
   * true
   */
  iOSRemind?: boolean;
  /**
   * @remarks
   * The content of the iOS notification used when a message is converted to a notification. This is valid only when \\`iOSApnsEnv\\` is \\`PRODUCT\\` and \\`iOSRemind\\` is \\`true\\`.
   * 
   * @example
   * ios通知body
   */
  iOSRemindBody?: string;
  /**
   * @remarks
   * Specifies whether to enable iOS silent notifications.
   * 
   * @example
   * true
   */
  iOSSilentNotification?: boolean;
  /**
   * @remarks
   * The subtitle of the iOS notification (iOS 10+).
   * 
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
      androidHuaweiBusinessType: 'AndroidHuaweiBusinessType',
      androidHuaweiLiveNotificationPayload: 'AndroidHuaweiLiveNotificationPayload',
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
      androidOppoDeleteIntentData: 'AndroidOppoDeleteIntentData',
      androidOppoIntelligentIntent: 'AndroidOppoIntelligentIntent',
      androidOppoIntentEnv: 'AndroidOppoIntentEnv',
      androidOppoPrivateContentParametersShrink: 'AndroidOppoPrivateContentParameters',
      androidOppoPrivateMsgTemplateId: 'AndroidOppoPrivateMsgTemplateId',
      androidOppoPrivateTitleParametersShrink: 'AndroidOppoPrivateTitleParameters',
      androidPopupActivity: 'AndroidPopupActivity',
      androidPopupBody: 'AndroidPopupBody',
      androidPopupTitle: 'AndroidPopupTitle',
      androidRemind: 'AndroidRemind',
      androidRenderStyle: 'AndroidRenderStyle',
      androidTargetUserType: 'AndroidTargetUserType',
      androidVivoLiveMessage: 'AndroidVivoLiveMessage',
      androidVivoPushMode: 'AndroidVivoPushMode',
      androidVivoReceiptId: 'AndroidVivoReceiptId',
      androidXiaoMiActivity: 'AndroidXiaoMiActivity',
      androidXiaoMiNotifyBody: 'AndroidXiaoMiNotifyBody',
      androidXiaoMiNotifyTitle: 'AndroidXiaoMiNotifyTitle',
      androidXiaomiBigPictureUrl: 'AndroidXiaomiBigPictureUrl',
      androidXiaomiFocusParam: 'AndroidXiaomiFocusParam',
      androidXiaomiFocusPics: 'AndroidXiaomiFocusPics',
      androidXiaomiImageUrl: 'AndroidXiaomiImageUrl',
      androidXiaomiTemplateId: 'AndroidXiaomiTemplateId',
      androidXiaomiTemplateParams: 'AndroidXiaomiTemplateParams',
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
      harmonyLiveViewPayload: 'HarmonyLiveViewPayload',
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
      androidHuaweiBusinessType: 'number',
      androidHuaweiLiveNotificationPayload: 'string',
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
      androidOppoDeleteIntentData: 'string',
      androidOppoIntelligentIntent: 'string',
      androidOppoIntentEnv: 'number',
      androidOppoPrivateContentParametersShrink: 'string',
      androidOppoPrivateMsgTemplateId: 'string',
      androidOppoPrivateTitleParametersShrink: 'string',
      androidPopupActivity: 'string',
      androidPopupBody: 'string',
      androidPopupTitle: 'string',
      androidRemind: 'boolean',
      androidRenderStyle: 'number',
      androidTargetUserType: 'number',
      androidVivoLiveMessage: 'string',
      androidVivoPushMode: 'number',
      androidVivoReceiptId: 'string',
      androidXiaoMiActivity: 'string',
      androidXiaoMiNotifyBody: 'string',
      androidXiaoMiNotifyTitle: 'string',
      androidXiaomiBigPictureUrl: 'string',
      androidXiaomiFocusParam: 'string',
      androidXiaomiFocusPics: 'string',
      androidXiaomiImageUrl: 'string',
      androidXiaomiTemplateId: 'string',
      androidXiaomiTemplateParams: 'string',
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
      harmonyLiveViewPayload: 'string',
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

