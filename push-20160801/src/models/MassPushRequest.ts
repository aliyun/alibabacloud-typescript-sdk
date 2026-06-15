// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushRequestPushTask extends $dara.Model {
  /**
   * @remarks
   * Specifies the activity to open when the notification is tapped.
   * 
   * This is required only when PushTask.N.AndroidOpenType is set to "Activity". For example: `com.alibaba.cloudpushdemo.bizactivity`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Sets the value to add to the badge number. The value is added to the original badge number. The value range is [1, 99].
   * 
   * > This is effective only for pushes through Huawei or Honor vendor channels. If both AndroidBadgeAddNum and AndroidBadgeSetNum are present, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * The full class name of the entry Activity of the application for badge settings.
   * 
   * > This is effective only for pushes through Huawei or Honor vendor channels.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Sets a fixed number for the badge. The value range is [0, 99].
   * 
   * > For vendor channel pushes, this is effective only for Huawei and Honor channels. For pushes through Alibaba Cloud\\"s proprietary channel, this is effective only on Huawei, Honor, and vivo models.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * The body in long text mode. Length limit: 1,000 bytes (one Chinese character is counted as 3 bytes). The actual limit depends on the specific vendor channel.
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
   * - Alibaba Cloud\\"s proprietary channel: Android SDK 3.6.0 and later
   * 
   * If this parameter is not provided in long text mode, the first non-empty value from Body or AndroidPopupBody is used.
   * 
   * @example
   * 示例长文本
   */
  androidBigBody?: string;
  /**
   * @remarks
   * The image URL in big picture mode. Currently supported on: Alibaba Cloud\\"s proprietary channel with Android SDK 3.6.0 or later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * The title in long text mode. Length limit: 200 bytes (one Chinese character is counted as 3 bytes).
   * 
   * - Currently, this is only supported by Honor channels and Huawei channels on EMUI 11 and later.
   * 
   * - If this parameter is not provided in long text mode, the first non-empty value from Title or AndroidPopupTitle is used.
   * 
   * @example
   * 示例长标题
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * Sets the extended properties of the notification. This parameter does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format, or it will fail to parse.
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
   * > Each application can send 1,000 test notifications per day, and these are not subject to the daily push limit per device.
   * 
   * @example
   * 1
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * Sets the parameters for Huawei quick notifications
   * 
   * - **0**: Send a normal Huawei notification (default).
   * 
   * - **1**: Send a Huawei quick notification.
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * A JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development and integration, see the [Huawei Live Notification Push Guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * The receipt ID for the Huawei channel. View this receipt ID in the receipt parameter configuration on the Huawei Push operations platform.
   * 
   * > If the default receipt configuration on the Huawei Push operations platform is the Alibaba Cloud receipt, you do not need to provide this. If not, we recommend that you first configure the default receipt ID for the Huawei channel in the Alibaba Cloud EMAS Mobile Push console.
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
   * > Each application can send 500 test notifications per day, and these are not subject to the daily push limit per device.
   * 
   * @example
   * 1
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * The URL for the right-side icon. Currently supported on:
   * 
   * - Huawei EMUI (applicable only in long text mode and inbox mode)
   * 
   * - Honor Magic UI (applicable only in long text mode)
   * 
   * - Alibaba Cloud\\"s proprietary channel: Android SDK 3.5.0 and later
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * The body in inbox mode. The content must be a valid JSON array with no more than 5 elements. Currently supported on:
   * 
   * - Huawei: EMUI 9 and later
   * 
   * - Honor: Magic UI 4.0 and later
   * 
   * - Xiaomi: MIUI 10 and later
   * 
   * - OPPO: ColorOS 5.0 and later
   * 
   * - Alibaba Cloud\\"s proprietary channel: Android SDK 3.6.0 and later
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
   * false
   */
  androidMeizuNoticeMsgType?: number;
  /**
   * @remarks
   * Function 1: After applying for [self-classification permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), use this parameter to identify the message type, determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and expedite the sending of specific message types. For valid values, see the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei Push documentation. Fill in the "Cloud-side notification category value" or "Local notification category value" from the documentation table.
   * 
   * Function 2: After applying for [special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), use this parameter to identify high-priority pass-through scenarios. Valid values:
   * 
   * - VOIP: Video calls
   * 
   * - PLAY_VOICE: Voice playback
   * 
   * > For "Cloud-side notification category values" that are "Not applicable", all pushes go through Alibaba Cloud\\"s proprietary channel. For "Local notification category values" that are "Not applicable", all pushes go through the Huawei channel.
   * 
   * @example
   * SUBSCRIPTION
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * The delivery priority for Huawei channel notifications. Valid values:
   * 
   * - HIGH
   * 
   * - NORMAL
   * 
   * You must apply for permissions. For more information, see [Application Link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO manages messages in two categories: Communication and Services, and Content and Marketing.
   * 
   * Communication and Services (requires permission application):
   * 
   * - IM: Instant messaging, audio, and video calls
   * 
   * - ACCOUNT: Changes in personal accounts and assets
   * 
   * - DEVICE_REMINDER: Personal device reminders
   * 
   * - ORDER: Changes in personal order or logistics status
   * 
   * - TODO: Personal schedules or to-do items
   * 
   * - SUBSCRIPTION: Personal subscriptions
   * 
   * Content and Marketing:
   * 
   * - NEWS: News and information
   * 
   * - CONTENT: Content recommendations
   * 
   * - MARKETING: Platform activities
   * 
   * - SOCIAL: Social updates
   * 
   * For more information, see [OPUSH Message Classification Rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189)
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * The reminder level for OPPO channel notification bar messages. Valid values:
   * 
   * - 1: Notification bar
   * 
   * - 2: Notification bar, lock screen, ringtone, vibration (default notification level for Communication and Services messages)
   * 
   * - 16: Notification bar, lock screen, ringtone, vibration, banner (requires permission application)
   * 
   * > When using the AndroidMessageOppoNotifyLevel parameter, you must also pass the AndroidMessageOppoCategory parameter.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo manages messages in two categories: system messages and operational messages.
   * 
   * System messages:
   * 
   * - IM: Instant messages
   * 
   * - ACCOUNT: Account and asset
   * 
   * - TODO: Schedule and to-do
   * 
   * - DEVICE_REMINDER: Device information
   * 
   * - ORDER: Order and logistics
   * 
   * - SUBSCRIPTION: Subscription reminder
   * 
   * Operational messages:
   * 
   * - NEWS: News
   * 
   * - CONTENT: Content recommendation
   * 
   * - MARKETING: Operational activity
   * 
   * - SOCIAL: Social updates
   * 
   * > For more information, see [Classification Description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3)
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * The notification sound for the Huawei vendor channel. Specify the name of the audio file stored in the app/src/main/res/raw/ directory of the client project. Do not include the file format suffix.
   * 
   * If you do not set this parameter, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  androidMusic?: string;
  /**
   * @remarks
   * The priority that determines the position of the Android notification in the notification bar. Valid values: -2, -1, 0, 1, and 2.
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
   * The channel ID for the Android app. It must correspond to a channel ID in the app.
   * 
   * - Set the NotificationChannel parameter. For more information about its use, see [FAQ: Why are notifications not received on devices with Android 8.0 or later?](https://help.aliyun.com/document_detail/67398.html).
   * 
   * - Because the channel_id for the OPPO private message channel is the same as the app\\"s channelId, this value is used for the channel_id when pushing through the OPPO channel.
   * 
   * - For pushes through Huawei, FCM, and Alibaba Cloud\\"s proprietary channels, this value is used for the channel_id.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * Message grouping. For messages in the same group, the notification bar displays only the latest message and the total number of messages received for that group. It does not display all messages and cannot be expanded. Currently supported on:
   * 
   * - Huawei vendor channel
   * 
   * - Honor vendor channel
   * 
   * - Alibaba Cloud\\"s proprietary channel with Android SDK 3.9.1 and earlier
   * 
   * > This parameter is not supported by Alibaba Cloud\\"s proprietary channel on Android SDK 3.9.2 and later.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * Sets the importance parameter for Honor notification message classification, which determines the notification behavior on the user\\"s device. Valid values:
   * 
   * - LOW: Marketing messages
   * 
   * - NORMAL: Service and communication messages
   * 
   * Apply for this on the Honor platform. [Application Link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * Sets the importance parameter for Huawei notification message classification, which determines the notification behavior on the user\\"s device. Valid values:
   * 
   * - LOW: Marketing messages
   * 
   * - NORMAL: Service and communication messages
   * 
   * > * For the Huawei channel, use AndroidMessageHuaweiCategory for notification classification. AndroidNotificationHuaweiChannel is no longer required.
   * >
   * > * You must apply for this on the Huawei platform. [Application Link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * The unique ID for each message when it is displayed as a notification. Different notification messages can have the same NotifyId to allow new notifications to overwrite old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * Message grouping. Messages in the same group are displayed collapsed in the notification bar and can be expanded. Notifications from different groups are displayed separately. Currently supported on:
   * 
   * - Alibaba Cloud\\"s proprietary channel with Android SDK 3.9.2 and later
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * Sets the vivo notification message classification. Valid values:
   * 
   * - 0: Operational messages (default)
   * 
   * - 1: System messages
   * 
   * > * For the vivo channel, use AndroidMessageVivoCategory for notification classification. AndroidNotificationVivoChannel is no longer required.
   * >
   * > * Apply for this on the vivo platform. For more information, see [Application Link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * Sets the channel ID for the Xiaomi notification type. Apply for it on the Xiaomi platform. For more information, see [Application Link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * 
   * > - A single application can apply for a maximum of 8 channels on the Xiaomi platform. Plan accordingly.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * The notification reminder method. Valid values:
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
   * VIBRATE
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * The action to take after a notification is tapped. Valid values:
   * 
   * - APPLICATION: Open the application (default)
   * 
   * - ACTIVITY: Open the application\\"s AndroidActivity
   * 
   * - URL: Open a URL
   * 
   * - NONE: No action
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * The URL to open after the Android device receives the push. This is required only when PushTask.N.AndroidOpenType is set to "URL".
   * 
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * A JSON string of the OPPO Fluid Cloud intent deletion data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the AndroidOppoIntelligentIntent parameter is already filled. For development and integration, see the [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * A JSON string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, see the [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * Sets the OPPO Fluid Cloud push environment
   * 
   * - **0**: Production environment (default).
   * 
   * - **1**: Staging environment.
   * 
   * > The OPPO Fluid Cloud staging environment needs to be set up on the client side. For more information, see [Environment Setup](https://open.oppomobile.com/documentation/page/info?id=13590).
   * 
   * @example
   * 1
   */
  androidOppoIntentEnv?: number;
  /**
   * @remarks
   * OPPO private message template content parameters
   * 
   * @deprecated
   */
  androidOppoPrivateContentParameters?: { [key: string]: string };
  /**
   * @remarks
   * OPPO private message template ID
   * 
   * >Warning: 
   * 
   * The OPPO private message template feature is no longer supported by MaasPush. To use this feature, use the Push, PushV2, or MassPushV2 API instead.
   * 
   * @example
   * 687557242b1634hzef3zd5013
   * 
   * @deprecated
   */
  androidOppoPrivateMsgTemplateId?: string;
  /**
   * @remarks
   * OPPO private message template title parameters
   * 
   * @deprecated
   */
  androidOppoPrivateTitleParameters?: { [key: string]: string };
  /**
   * @remarks
   * Specifies the Activity to which the user is redirected after tapping the notification.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @remarks
   * The body content in auxiliary pop-up mode. This parameter is required if the AndroidPopupActivity parameter is not empty.
   * 
   * Length limit: 200 characters. Both Chinese and English characters count as one.
   * 
   * If you use a vendor channel, comply with the vendor channel\\"s restrictions. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * The title content in auxiliary pop-up mode. This parameter is required if the AndroidPopupActivity parameter is not empty.
   * 
   * Length limit: 50 characters. Both Chinese and English characters count as one.
   * 
   * If you use a vendor channel, comply with the vendor channel\\"s restrictions. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * If the push type is MESSAGE and the device is offline, this push uses the auxiliary pop-up feature. The default value is false. This parameter takes effect only when PushType is MESSAGE.
   * 
   * If a message is successfully converted to a notification, the displayed notification uses the values of the AndroidPopupTitle and AndroidPopupBody parameters. When the user taps the notification, the data retrieved by the onSysNoticeOpened method of the auxiliary pop-up uses the values of the Title and Body parameters.
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
   * - **1**: Long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and Alibaba Cloud\\"s proprietary channel)
   * 
   * - **2**: Big picture mode (supported by Alibaba Cloud\\"s proprietary channel, not supported on Xiaomi models)
   * 
   * - **3**: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and Alibaba Cloud\\"s proprietary channel)
   * 
   * > This parameter is required for non-standard modes.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: string;
  /**
   * @remarks
   * Sets the vendor channel notification type:
   * 
   * - **0**: Formal notification (default).
   * 
   * - **1**: Test notification.
   * 
   * > * Configuring this parameter is equivalent to configuring the AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv parameters at the same time. A specific vendor channel parameter can override this parameter.
   * >
   * > * Currently supported: Huawei channel, Honor channel, vivo channel, OPPO Fluid Cloud.
   * 
   * @example
   * 1
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * A JSON string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, see the [vivo Atomic Island Push Guide](https://help.aliyun.com/zh/document_detail/3030718.html).
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
   * > For test pushes, configure the test devices in the vivo console beforehand. You can obtain the test device\\"s RegId by searching for "onReceiveRegId regId" in the device startup logs.
   * 
   * @example
   * 1
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * The receipt ID for the vivo channel. View this receipt ID in the application information of the push service on the vivo open platform.
   * 
   * > If the default receipt configuration on the vivo open platform is the Alibaba Cloud receipt, you do not need to provide this. If not, we recommend that you first configure the default receipt ID for the vivo channel in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * @example
   * 123
   */
  androidVivoReceiptId?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new **AndroidPopupActivity** parameter.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new **AndroidPopupBody** parameter.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party auxiliary pop-ups are now supported by the new **AndroidPopupTitle** parameter.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @remarks
   * This parameter is deprecated. Since August 2023, Xiaomi no longer supports dynamically setting small icons, right-side icons, or large pictures during pushes on new devices or systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * A JSON string of the Xiaomi HyperOS Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see the [Xiaomi HyperOS Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
   * A JSON string of the Xiaomi HyperOS Island data image [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see the [Xiaomi HyperOS Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
   * This parameter is deprecated. Since August 2023, Xiaomi no longer supports dynamically setting small icons, right-side icons, or large pictures during pushes on new devices or systems.
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
   * The content of the notification or message for Android and HarmonyOS pushes. The content of the message or notification for iOS. The content size is limited. For more information, see [Product limits](https://help.aliyun.com/document_detail/92832.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * 
   * - HARMONY: HarmonyOS devices
   * 
   * - iOS: iOS devices
   * 
   * - ANDROID: Android devices
   * 
   * - ALL: If the AppKey is for an old version of a dual-platform application, this value indicates that pushes are sent to both Android and iOS devices. If the AppKey is for a new version of a single-platform application, the effect is the same as specifying the device type corresponding to that application type.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * The time-to-live (TTL) for offline messages or notifications. Use this with StoreOffline. After the TTL expires, the message or notification is no longer sent. The maximum TTL is 72 hours. The default is 72 hours.
   * 
   * The time must be in ISO 8601 format and in UTC: YYYY-MM-DDThh:mm:ssZ. The expiration time must be at least 3 seconds later than the current time or the scheduled push time (`ExpireTime > PushTime + 3 seconds`). The 3-second buffer accounts for potential network and system latency. Set the TTL to at least 1 minute for individual pushes and at least 10 minutes for full or batch pushes.
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
   * When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be filled in.
   * 
   * 
   * 
   * For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS website.
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * The action to take after a notification is tapped. Valid values:
   * 
   * - APP_HOME_PAGE: Open the application home page
   * 
   * - APP_CUSTOM_PAGE: Open a custom application page
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * The number to add to the HarmonyOS application badge. See the [HarmonyOS badge addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br>
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * The number to set for the HarmonyOS application badge. See the [HarmonyOS badge setNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br>
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * The notification message category. After applying for notification message self-classification permissions, use this to identify the message type. Different notification message types affect how messages are displayed and reminded. Valid values:
   * 
   * - IM: Instant messaging
   * 
   * - VOIP: Video call
   * 
   * - SUBSCRIPTION: Subscription
   * 
   * - TRAVEL: Travel
   * 
   * - HEALTH: Health
   * 
   * - WORK: Work item reminder
   * 
   * - ACCOUNT: Account updates
   * 
   * - EXPRESS: Order & logistics
   * 
   * - FINANCE: Finance
   * 
   * - DEVICE_REMINDER: Device reminder
   * 
   * - MAIL: Email
   * 
   * - CUSTOMER_SERVICE: Customer service message
   * 
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational activities (only identifies content, does not expedite message sending), collectively referred to as marketing messages.
   * 
   * For more information, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS website.
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * Sets the extended properties of the notification. This parameter does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format, or it will fail to parse.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * Extra data for the extended notification message.<br>
   * Effective when sending HarmonyOS extended notification messages.<br>
   * Conceptually equivalent to the extraData field of a HarmonyOS extended notification message. For a detailed definition, see [HarmonyOS ExtensionPayload Description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).<br>
   * Supported starting from HarmonyOS SDK version 1.2.0.<br><br><br>
   * 
   * @example
   * 示例额外数据
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * When PushType is NOTICE, specifies whether it is a HarmonyOS extended notification message.
   * 
   * - true: Send an extended notification message
   * 
   * - false: Send a normal notification (default)
   * 
   * You must apply for permission on the HarmonyOS side before sending extended notification messages. For more information, see [Send Extended Notification Messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) in the HarmonyOS documentation.<br>
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
   * > Supported image formats are png, jpg, jpeg, heif, gif, and bmp. The image length × width must be less than 25,000 pixels.
   * 
   * For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS website.
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * The content for the multi-line text style. This field is required when HarmonyRenderStyle is MULTI_LINE. A maximum of 3 content entries are supported.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
  /**
   * @remarks
   * A JSON string of the HarmonyOS Live Window data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development and integration, see the [HarmonyOS Live Window Push Guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * - SERVICE_INFORMATION: Service reminder.
   * 
   * - CONTENT_INFORMATION: Content information.
   * 
   * - CUSTOMER_SERVICE: Customer service message. This type is used for customer service messages between users and businesses and must be initiated by the user.
   * 
   * - OTHER_TYPES: Other.
   * 
   * For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the HarmonyOS website.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * The unique ID for each message when it is displayed as a notification. If not included, the push service automatically generates a unique ID for each message. Different notification messages can have the same notifyId to allow new messages to overwrite old ones.
   * 
   * For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS website.
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * The receipt ID for the HarmonyOS channel. View this receipt ID in the receipt parameter configuration on the HarmonyOS Push operations platform.
   * 
   * > If the default receipt configuration on the HarmonyOS Push operations platform is the Alibaba Cloud receipt, you do not need to provide this. If not, we recommend that you first configure the default receipt ID for the HarmonyOS channel in the Alibaba Cloud EMAS Mobile Push console.
   * 
   * For more information, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS website.
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * If the push type is MESSAGE and the device is offline, this push uses the auxiliary pop-up feature. The default value is false. This parameter is effective only when PushType is set to MESSAGE.
   * 
   * If a message is successfully converted to a notification, the data displayed in the notification is the value of the server-side HarmonyRemindTitle and HarmonyRemindBody parameters.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * The HarmonyOS notification content used when a message is converted to a notification. This is effective only when HarmonyRemind is set to true.
   * 
   * @example
   * 您有一条新消息，请查收
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * The HarmonyOS notification title used when a message is converted to a notification. This is effective only when HarmonyRemind is set to true.
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
   * The test message flag:
   * 
   * - false: Normal message (default)
   * 
   * - true: Test message
   * 
   * For more information, see [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS website.
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the in-app page ability.
   * >Notice: When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be filled in. When there are multiple Abilities, fill in the action and URI for each Ability separately. The action is used with priority to find the corresponding in-app page.
   * 
   * For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS website.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * A custom ID for the push task. If JobKey is not empty, this field is included in the receipt logs. For more information about how to view receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Specifies the time for a scheduled push. If you do not set this parameter, the push is sent immediately.
   * 
   * The time must be in ISO 8601 format and in UTC: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * 
   * - MESSAGE: a message.
   * 
   * - NOTICE: a notification.
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
   * > * If you do not configure this parameter, all channels can be used.
   * >
   * > * If you configure this parameter, only the specified channels are used.
   * >
   * > * If the configured channels conflict with the sending policy (for example, iOS notifications are sent only through the APNs channel, but this parameter does not include apns), the push is not sent.
   * >
   * > * If you configure gcm, both Google GCM and FCM channels can be used. If you configure fcm, only the Google FCM channel can be used.
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
   * Specifies whether to save offline messages or notifications. The default value is false.
   * 
   * If you save them, and a user is offline, the message or notification is resent when the user comes online before the time-to-live (TTL) specified by ExpireTime expires. The default TTL is 72 hours. iOS notifications are sent through the APNs channel and are not affected by this parameter.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The push target. Valid values:
   * 
   * - DEVICE: Push by device.
   * 
   * - ACCOUNT: Push by account.
   * 
   * - ALIAS: Push by alias.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * Set this parameter based on the value of Target. To specify multiple values, separate them with commas. If you exceed the limit, send multiple pushes.
   * 
   * - If you set Target to DEVICE, specify device IDs, such as `deviceid1,deviceid2`. You can specify up to 1,000 device IDs.
   * 
   * - If you set Target to ACCOUNT, specify accounts, such as `account1,account2`. You can specify up to 1,000 accounts.
   * 
   * - If you set Target to ALIAS, specify aliases, such as `alias1,alias2`. You can specify up to 1,000 aliases.
   * 
   * This parameter is required.
   * 
   * @example
   * deviceid1,deviceid2
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the notification or message. The length is limited to 200 bytes.
   * This parameter is required for Android and HarmonyOS pushes. It is optional for iOS notification pushes. If you specify it for iOS:
   * 
   * - For iOS 10 and later, the notification title is displayed.
   * 
   * - For iOS versions from 8.2 to 10, it replaces the application name in the notification.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to automatically truncate titles and content that are too long.
   * Note: This applies only to vendor channels that have explicit limits on title and content length. It does not apply to channels such as APNs, Huawei, and Honor, which limit the total request body size instead of the title and content length.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * iOS notifications are sent through APNs. Specify the environment information.
   * 
   * - DEV: The development environment. This applies to applications installed and debugged directly from Xcode.
   * 
   * - PRODUCT: The production environment. This applies to applications distributed through the App Store, TestFlight, Ad Hoc, or enterprise distribution.
   * 
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @remarks
   * The badge number on the top-right corner of the iOS application icon.
   * 
   * > If iOSBadgeAutoIncrement is set to true, this parameter must be empty.
   * 
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @remarks
   * Specifies whether to enable the auto-increment badge feature. The default value is false.
   * 
   * > When this is set to true, iOSBadge must be empty.
   * 
   * The auto-increment badge feature is maintained by the push server, which keeps a badge count for each device. To use this feature, use SDK version 1.9.5 or later and actively sync the badge number to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The extended properties for iOS notifications.
   * 
   * For iOS 10 and later, specify the resource URL for a rich push notification, such as `{"attachment": "https://xxxx.xxx/notification_pic.png"}`. This parameter must be passed in JSON map format, or it will fail to parse.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * The interruption level. Valid values:
   * 
   * - passive: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * 
   * - active: The system immediately displays the notification, lights up the screen, and can play a sound.
   * 
   * - time-sensitive: The system immediately presents the notification, lights up the screen, and can play a sound, but does not break through system notification controls.
   * 
   * - critical: The system immediately displays the notification, lights up the screen, and plays a sound, bypassing the mute switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * A JSON string for the static pass-through parameters of a Dynamic Island push. It contains static, user-defined information, such as product numbers and order information.
   * 
   * > Required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * {"orderId": "12345", "product": "Shoes"}
   */
  iOSLiveActivityAttributes?: string;
  /**
   * @remarks
   * The type of Live Activity to start.
   * 
   * > Required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * OrderActivityAttributes
   */
  iOSLiveActivityAttributesType?: string;
  /**
   * @remarks
   * The dynamic pass-through parameters for a Dynamic Island push. It contains real-time updated information, such as price or inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * The time until which an ended Live Activity remains on the lock screen. The maximum duration is 4 hours.
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
   * The Live Activity ID reported by the device to your server. This is the unique identifier for a Live Activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * A UNIX timestamp in seconds that marks the content of the activity as outdated.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * The sound for the iOS notification. Specify the name of the audio file stored in the app bundle or the Library/Sounds directory of the sandbox. For more information, see How to set notification sounds for iOS pushes.
   * 
   * If you specify an empty string (""), the notification is silent. If you do not set this parameter, the default value is \\"default\\", which is the system alert sound.
   * 
   * @example
   * ””
   */
  iOSMusic?: string;
  /**
   * @remarks
   * The mutable content flag for iOS notifications (for iOS 10 and later). If set to true, notifications pushed through APNs can be processed by an extension before being displayed. For silent notifications, this must be set to true.
   * 
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @remarks
   * Specifies the iOS notification category (for iOS 10 and later).
   * 
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @remarks
   * If a device receives messages with the same CollapseId, they are merged into one. If the device is offline and receives multiple messages with the same CollapseId, only one is displayed in the notification bar. This parameter is supported on iOS 10 and later.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * Groups iOS remote notifications using this property. It marks the identifier for a collapsed group. This is supported only on iOS 12.0 and later.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * The score for highlighting the summary. The value must be a floating-point number from 0 to 1.
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * If a device is offline when a message is pushed (meaning the persistent connection to the Mobile Push server is unavailable), this push is sent once as a notification through the Apple APNs channel.
   * 
   * > Converting offline messages to notifications is only applicable to the production environment.
   * 
   * @example
   * true
   */
  iOSRemind?: boolean;
  /**
   * @remarks
   * The content of the iOS notification when an iOS message is converted to a notification. This parameter is valid only when iOSApnsEnv is set to PRODUCT and iOSRemind is set to true.
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
   * The subtitle of the iOS notification (for iOS 10 and later).
   * 
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
      androidOppoPrivateContentParameters: 'AndroidOppoPrivateContentParameters',
      androidOppoPrivateMsgTemplateId: 'AndroidOppoPrivateMsgTemplateId',
      androidOppoPrivateTitleParameters: 'AndroidOppoPrivateTitleParameters',
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
      androidOppoPrivateContentParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      androidOppoPrivateMsgTemplateId: 'string',
      androidOppoPrivateTitleParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      androidPopupActivity: 'string',
      androidPopupBody: 'string',
      androidPopupTitle: 'string',
      androidRemind: 'boolean',
      androidRenderStyle: 'string',
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

export class MassPushRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotency parameter that prevents duplicate pushes caused by API client retries. If you make a call with the same IdempotentToken within 15 minutes, only one push is performed, and subsequent calls return the result of the first successful push.
   * 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit from 0-9 or a-f, case-insensitive.
   * >
   * > - This parameter only prevents duplicate pushes caused by retries. It cannot prevent duplicate pushes caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * An array of independent push tasks.
   * 
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

