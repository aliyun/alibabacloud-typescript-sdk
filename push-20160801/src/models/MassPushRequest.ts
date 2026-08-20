// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushRequestPushTask extends $dara.Model {
  /**
   * @remarks
   * Specify the Activity to open from the notification.
   * 
   * Only applicable when PushTask.N.AndroidOpenType="Activity", e.g., `com.alibaba.cloudpushdemo.bizactivity`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Set the badge increment value. The value is added to the existing badge count. Value range: [1-99].
   * > Only valid for Huawei/Honor vendor channel pushes. When both AndroidBadgeAddNum and AndroidBadgeSetNum are present, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * Full class name of the app entry Activity for badge settings.
   * 
   * > Only valid for Huawei/Honor vendor channel pushes.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Set the badge to a fixed number. Value range: [0-99].
   * 
   * > For vendor channel pushes, this only takes effect on Huawei and Honor channels. For Alibaba Cloud proprietary channel pushes, this only takes effect on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * Body in long text mode. Length limit: 1,000 bytes (1 Chinese character counts as 3 bytes). Subject to specific vendor channel restrictions when sending.
   * 
   * Currently supported:
   * - Huawei: EMUI 10 and later
   * - Honor: Magic UI 4.0 and later
   * - Xiaomi: MIUI 10 and later
   * - OPPO: ColorOS 5.0 and later
   * - Meizu: Flyme
   * - Proprietary channel: Android SDK 3.6.0 and later
   * 
   * If this parameter is not provided in long text mode, the first non-empty value from Body and AndroidPopupBody is used.
   * 
   * @example
   * 示例长文本
   */
  androidBigBody?: string;
  /**
   * @remarks
   * Image URL in big picture mode. Currently supported: Proprietary channel: Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * Title in long text mode. Length limit: 200 bytes (1 Chinese character counts as 3 bytes).
   * 
   * - Currently only supported by the Honor channel and Huawei channel EMUI 11 and later.
   * 
   * - If this parameter is not provided in long text mode, the first non-empty value from Title and AndroidPopupTitle is used.
   * 
   * @example
   * 示例长标题
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * Set notification extended properties. This property does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format; otherwise, parsing errors will occur.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  /**
   * @remarks
   * Set the Honor channel notification type:
   * - **0**: Production notification (default).
   * - **1**: Test notification.
   * 
   * > Each application can send up to 1,000 test notifications per day, and this is not subject to the daily per-device push limit.
   * 
   * @example
   * 1
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * Set the Huawei instant notification parameter:
   * - **0**: Send a regular Huawei notification (default).
   * - **1**: Send a Huawei instant notification.
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development integration, see [Huawei Live Notification Push Guide](https://help.aliyun.com/document_detail/2983768.html)
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
   * Huawei channel receipt ID. This receipt ID can be found in the receipt parameter configuration on the Huawei channel push operations platform.
   * 
   * > If the default receipt configuration on the Huawei channel push operations platform is set to Alibaba Cloud receipt, this is not required. If not, we recommend configuring the default Huawei channel receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @remarks
   * Set the Huawei channel notification type:
   * - **0**: Production notification (default).
   * - **1**: Test notification.
   * 
   * > Each application can send up to 500 test notifications per day, and this is not subject to the daily per-device push limit.
   * 
   * @example
   * 1
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * Right-side icon URL. Currently supported:
   * - Huawei EMUI (only applicable in long text mode and Inbox mode)
   * - Honor Magic UI (only applicable in long text mode)
   * - Proprietary channel: Android SDK 3.5.0 and later
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * Body content in Inbox mode. The content must be a valid JSON Array with no more than 5 elements. Currently supported:
   * 
   * - Huawei: EMUI 9 and later
   * - Honor: Magic UI 4.0 and later
   * - Xiaomi: MIUI 10 and later
   * - OPPO: ColorOS 5.0 and later
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
   * - 0: Public message (default)
   * - 1: Private message
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
   * Purpose 1: After completing the [self-classification privilege application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this is used to identify the message type, determine the [notification alert method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and speed up delivery for specific message types. For valid values, refer to the Huawei Push official documentation\\"s [Message Classification Standard](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914). Use the "Cloud notification category value" or "Local notification category value" from the documentation table.
   * 
   * Purpose 2: After [applying for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this is used to identify high-priority pass-through scenarios. Valid values:
   * - VOIP: Audio/video calls
   * - PLAY_VOICE: Voice playback
   * 
   * > For "Cloud notification category values" marked as "Not applicable", the Alibaba Cloud proprietary channel is used. For "Local notification category values" marked as "Not applicable", the Huawei channel is used.
   * 
   * @example
   * SUBSCRIPTION
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * Huawei channel notification delivery priority. Valid values:
   * 
   * - HIGH
   * 
   * - NORMAL
   * 
   * Permission application is required. See: [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO classifies messages into two categories: Communication & Service, and Content & Marketing.
   * 
   * Communication & Service (permission application required):
   * - IM: Instant messaging, audio, and video calls
   * - ACCOUNT: Personal account and asset changes
   * - DEVICE_REMINDER: Personal device reminders
   * - ORDER: Personal order/logistics status changes
   * - TODO: Personal schedule/to-do items
   * - SUBSCRIPTION: Personal subscriptions
   * 
   * Content & Marketing:
   * - NEWS: News and information
   * - CONTENT: Content recommendations
   * - MARKETING: Platform promotions
   * - SOCIAL: Social updates
   * 
   * For details, see [OPUSH Message Classification Rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189)
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * OPPO channel notification bar message alert level. Valid values:
   * - 1: Notification bar
   * - 2: Notification bar, lock screen, ringtone, and vibration (default notification level for Communication & Service messages)
   * - 16: Notification bar, lock screen, ringtone, vibration, and banner (permission application required)
   * 
   * > When using the AndroidMessageOppoNotifyLevel parameter, the AndroidMessageOppoCategory parameter must also be provided.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo classifies messages into two categories: System messages and Operational messages.
   * 
   * System messages:
   * - IM: Instant messages
   * - ACCOUNT: Account and assets
   * - TODO: Schedule and to-do items
   * - DEVICE_REMINDER: Device information
   * - ORDER: Orders and logistics
   * - SUBSCRIPTION: Subscription reminders
   * 
   * Operational messages:
   * - NEWS: News
   * - CONTENT: Content recommendations
   * - MARKETING: Operational campaigns
   * - SOCIAL: Social updates
   * > For details, see [Classification Description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3)
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * Huawei vendor channel notification sound. Specify the name of an audio file stored in the client project\\"s app/src/main/res/raw/ directory. The file extension is not required.
   * 
   * If not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  androidMusic?: string;
  /**
   * @remarks
   * Priority of the notification position in the Android notification bar. Valid values: -2, -1, 0, 1, 2.
   * 
   * @example
   * 0
   */
  androidNotificationBarPriority?: number;
  /**
   * @remarks
   * Android custom notification bar style. Value range: 1-100.
   * 
   * @example
   * 2
   */
  androidNotificationBarType?: number;
  /**
   * @remarks
   * The channelId of the Android app. Must match the channelId configured in the app.
   * - Set the NotificationChannel parameter. For specific usage, see [FAQ: Notifications not received on Android 8.0+ devices](https://help.aliyun.com/document_detail/67398.html).
   * - Since the OPPO notification private channel\\"s channel_id is the same as the app\\"s channelId, the channel_id takes this value when pushing through the OPPO channel.
   * - For Huawei, FCM, and Alibaba Cloud proprietary channel pushes, the channel_id takes this value.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * Message grouping. Messages in the same group display only the latest one and the total count of messages received in that group in the notification bar. All messages are not displayed and cannot be expanded. Currently supported:
   * 
   * - Huawei vendor channel
   * - Honor vendor channel
   * - Proprietary channel: Android SDK 3.9.1 and earlier
   * 
   * > The proprietary channel no longer supports this parameter on Android SDK 3.9.2 and later.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * Set the Honor notification message classification importance parameter, which determines the notification behavior on user devices. Valid values:
   * 
   * - LOW: Information and marketing messages
   * 
   * - NORMAL: Service and communication messages
   * 
   * Application is required on the Honor platform. [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * Set the Huawei notification message classification importance parameter, which determines the notification behavior on user devices. Valid values:
   * 
   * - LOW: Information and marketing messages
   * - NORMAL: Service and communication messages
   * 
   * >- The Huawei channel now recommends using AndroidMessageHuaweiCategory for notification classification. AndroidNotificationHuaweiChannel is no longer required.
   * >- Application is required on the Huawei platform. [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * Unique identifier for each message displayed in the notification bar. Different notification bar messages can share the same NotifyId, allowing new notifications to replace old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * Message grouping. Messages in the same group are displayed collapsed in the notification bar and can be expanded. Notifications from different groups are displayed separately. Currently supported:
   * 
   * - Proprietary channel: Android SDK 3.9.2 and later
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * Set the vivo notification message classification. Valid values:
   * 
   * - 0: Operational messages (default)
   * - 1: System messages
   * 
   * >- The vivo channel now recommends using AndroidMessageVivoCategory for notification classification. AndroidNotificationVivoChannel is no longer required.
   * >- Application is required on the vivo platform. See: [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * Set the channelId for Xiaomi notification types. Application is required on the Xiaomi platform. See: [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * >- A single application on the Xiaomi channel can apply for up to 8 channels. Please plan ahead.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * Notification alert type. Valid values:
   * 
   * - **VIBRATE**: Vibration (default)
   * - **SOUND**: Sound
   * - **BOTH**: Sound and vibration
   * - **NONE**: Silent
   * 
   * @example
   * VIBRATE
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * Action after clicking the notification. Valid values:
   * 
   * - APPLICATION: Open the app (default)
   * - ACTIVITY: Open an Android Activity
   * - URL: Open a URL
   * - NONE: No navigation
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * The URL to open after Android receives the push. Only applicable when PushTask.N.AndroidOpenType="URL".
   * 
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * JSON string of the OPPO Fluid Cloud intent deletion data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is ignored when the AndroidOppoIntelligentIntent parameter is already provided. For development integration, see [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html)
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
   * JSON string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development integration, see [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html)
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
   * Set the OPPO Fluid Cloud push environment:
   * - **0**: Production environment (default).
   * - **1**: Test environment.
   * 
   * > The OPPO Fluid Cloud test environment requires client-side setup. See [Environment Setup](https://open.oppomobile.com/documentation/page/info?id=13590).
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
   * >Warning: The OPPO private message template feature is no longer supported by MaasPush. To use this feature, please use the Push, PushV2, or MassPushV2 API instead.
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
   * Specify the Activity to navigate to when the notification is clicked.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @remarks
   * Body content in auxiliary popup mode. Required when the AndroidPopupActivity parameter is not empty.
   * 
   * Length limit: 200 characters (both Chinese and English characters count as one character each).
   * 
   * When using vendor channels, you must also comply with the vendor channel restrictions. For details, see [Android Auxiliary Channel Push Limits](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * Title content in auxiliary popup mode. Required when the AndroidPopupActivity parameter is not empty.
   * 
   * Length limit: 50 characters (both Chinese and English characters count as one character each).
   * 
   * When using vendor channels, you must also comply with the vendor channel restrictions. For details, see [Android Auxiliary Channel Push Limits](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * When the push type is message and the device is offline, this push will use the auxiliary popup feature. Defaults to false. Only takes effect when PushType=MESSAGE.
   * 
   * If the message-to-notification conversion push is successful, the notification displays the data set by the server\\"s AndroidPopupTitle and AndroidPopupBody parameter values. The data obtained when clicking the notification in the auxiliary popup\\"s onSysNoticeOpened method is the server-set Title and Body parameter values.
   * 
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @remarks
   * Notification style. Valid values:
   * - **0**: Standard mode (default)
   * - **1**: Long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and proprietary channels)
   * - **2**: Big picture mode (supported by proprietary channel, not supported on Xiaomi devices)
   * - **3**: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and proprietary channels)
   * > This parameter is required when using non-standard modes.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: string;
  /**
   * @remarks
   * Set the vendor channel notification type:
   * - **0**: Production notification (default).
   * - **1**: Test notification.
   * 
   * >- Configuring this parameter is equivalent to simultaneously configuring the AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv parameters. The corresponding parameter for a specific vendor channel can override this parameter.
   * >- Currently supported: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 1
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * JSON string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development integration, see [vivo Atomic Island Push Guide](https://help.aliyun.com/zh/document_detail/3030718.html)
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
   * Set the vivo channel notification type:
   * - **0**: Production push (default).
   * - **1**: Test push.
   * 
   * > For test pushes, configure test devices in the vivo console in advance. The test device RegId can be obtained by searching for "onReceiveRegId regId" in the device startup logs.
   * 
   * @example
   * 1
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * vivo channel receipt ID. This receipt ID can be found in the app information section of the push service on the vivo open platform.
   * 
   * > If the default receipt configuration on the vivo open platform is set to Alibaba Cloud receipt, this is not required. If not, we recommend configuring the default vivo channel receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * 123
   */
  androidVivoReceiptId?: string;
  /**
   * @remarks
   * This parameter has been deprecated. All third-party auxiliary popups are now supported by the new parameter **AndroidPopupActivity**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @remarks
   * This parameter has been deprecated. All third-party auxiliary popups are now supported by the new parameter **AndroidPopupBody**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @remarks
   * This parameter has been deprecated. All third-party auxiliary popups are now supported by the new parameter **AndroidPopupTitle**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @remarks
   * This parameter has been deprecated. Since August 2023, Xiaomi has officially discontinued support for dynamically setting small icons, right-side icons, and big pictures during push on new devices/systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * JSON string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, see [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html)
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
   * JSON string of the Xiaomi Super Island images [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, see [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html)
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
   * This parameter has been deprecated. Since August 2023, Xiaomi has officially discontinued support for dynamically setting small icons, right-side icons, and big pictures during push on new devices/systems.
   * 
   * @example
   * https://imag.example.com/image.png
   * 
   * @deprecated
   */
  androidXiaomiImageUrl?: string;
  /**
   * @remarks
   * Xiaomi private message template ID
   * 
   * @example
   * P10645
   */
  androidXiaomiTemplateId?: string;
  /**
   * @remarks
   * Xiaomi private message template parameters, JSON string
   * 
   * @example
   * {"keywords1":"Tom","keywords2":"phone"}
   */
  androidXiaomiTemplateParams?: string;
  /**
   * @remarks
   * Content of the notification/message for Android and HarmonyOS pushes; iOS message/notification content. The push content size is limited. See [Product Limits](https://help.aliyun.com/document_detail/92832.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * Device type. Valid values:
   * 
   * - HARMONY: HarmonyOS device
   * - iOS: iOS device
   * - ANDROID: Android device
   * - ALL: When the AppKey is for a legacy dual-platform app, this pushes to both Android and iOS devices simultaneously. When the AppKey is for a new single-platform app, the effect is the same as specifying the device type corresponding to the app type.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * Expiration time of offline messages/notifications. Used together with StoreOffline. Expired messages will no longer be sent. The maximum retention period is 72 hours. The default is 72 hours.
   * 
   * The time format follows the ISO 8601 standard and must use UTC time in the format YYYY-MM-DDThh:mm:ssZ. The expiration time cannot be earlier than the current time or the scheduled push time plus 3 seconds (`ExpireTime > PushTime + 3 seconds`). The 3-second buffer accounts for network and system latency. We recommend at least 1 minute for unicast pushes and at least 10 minutes for broadcast and batch pushes.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The action corresponding to the built-in page ability of the app.
   * 
   * >Notice: When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be provided.
   * 
   * For details, see HarmonyOS official documentation [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216)
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * Action after clicking the notification. Valid values:
   * 
   * - APP_HOME_PAGE: Open the app home page
   * - APP_CUSTOM_PAGE: Open a custom app page
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * HarmonyOS app badge increment number. See [HarmonyOS badge addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * HarmonyOS app badge set number. See [HarmonyOS badge setNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * Notification message category. After completing the notification message self-classification privilege application, this is used to identify the message type. Different notification message types affect the display and alert methods. Valid values:
   * 
   * - IM: Instant messaging
   * - VOIP: Audio/video calls
   * - SUBSCRIPTION: Subscriptions
   * - TRAVEL: Travel
   * - HEALTH: Health
   * - WORK: Work task reminders
   * - ACCOUNT: Account updates
   * - EXPRESS: Orders & logistics
   * - FINANCE: Finance
   * - DEVICE_REMINDER: Device reminders
   * - MAIL: Email
   * - CUSTOMER_SERVICE: Customer service messages
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational campaigns (only marks the content, does not speed up message delivery), collectively referred to as information and marketing messages
   * 
   * For details, see HarmonyOS official documentation [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * Set notification extended properties. This property does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format; otherwise, parsing errors will occur.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * Extra data for notification extension messages.</br>
   * Valid when sending HarmonyOS notification extension messages.</br>
   * Conceptually equivalent to the extraData field of HarmonyOS notification extension messages. For the specific definition, see [HarmonyOS ExtensionPayload Description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 示例额外数据
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * When PushType is NOTICE, whether this is a HarmonyOS notification extension message.
   * 
   * - true: Send a notification extension message
   * - false: Send a regular notification (default)
   * 
   * Notification extension messages require permission to be applied for on the HarmonyOS side before sending. For details, see the HarmonyOS documentation [Send Notification Extension Messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * true
   */
  harmonyExtensionPush?: boolean;
  /**
   * @remarks
   * URL for the large icon on the right side of the notification. The URL must use the HTTPS protocol.
   * 
   * > Supported image formats: png, jpg, jpeg, heif, gif, bmp. Image dimensions must satisfy height × width < 25,000 pixels.
   * 
   * For details, see HarmonyOS official documentation [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * Content for multi-line text style. Required when HarmonyRenderStyle is MULTI_LINE. Up to 3 content items are supported.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
  /**
   * @remarks
   * JSON string of the HarmonyOS Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development integration, see [HarmonyOS Live View Push Guide](https://help.aliyun.com/document_detail/2982112.html)
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
   * Use the specified type of notification slot. Only valid when the Alibaba Cloud proprietary channel is online.
   * 
   * - SOCIAL_COMMUNICATION: Social communication.
   * - SERVICE_INFORMATION: Service reminders.
   * - CONTENT_INFORMATION: Content information.
   * - CUSTOMER_SERVICE: Customer service messages. This type is used for customer service messages between users and merchants, and must be initiated by the user.
   * - OTHER_TYPES: Others.
   * 
   * For details, see HarmonyOS official documentation [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype)
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * Unique identifier for each message displayed in the notification. When not provided, the push service automatically generates a unique identifier for each message. Different notification messages can share the same notifyId, enabling new messages to replace old ones.
   * 
   * For details, see HarmonyOS official documentation [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117)
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * HarmonyOS channel receipt ID. This receipt ID can be found in the receipt parameter configuration on the HarmonyOS channel push operations platform.
   * 
   * > If the default receipt configuration on the HarmonyOS channel push operations platform is set to Alibaba Cloud receipt, this is not required. If not, we recommend configuring the default HarmonyOS channel receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * For details, see HarmonyOS official documentation [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212)
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * When the push type is message and the device is offline, this push will use the auxiliary popup feature. Defaults to false. Only takes effect when PushType=MESSAGE.
   * 
   * If the message-to-notification conversion push is successful, the notification displays the data set by the server\\"s HarmonyRemindTitle and HarmonyRemindBody parameter values.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * HarmonyOS notification content used when converting HarmonyOS messages to notifications. Only valid when HarmonyRemind is true.
   * 
   * @example
   * 您有一条新消息，请查收
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * HarmonyOS notification title used when converting HarmonyOS messages to notifications. Only valid when HarmonyRemind is true.
   * 
   * @example
   * 新消息
   */
  harmonyRemindTitle?: string;
  /**
   * @remarks
   * Notification message style:
   * - NORMAL: Standard notification (default)
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
   * - true: Test message
   * 
   * For details, see HarmonyOS official documentation [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212)
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the built-in page ability of the app.
   * >Notice: When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be provided. When multiple Abilities exist, provide different action and URI values for each Ability. The action is prioritized when looking up the corresponding built-in app page.
   * 
   * For details, see HarmonyOS official documentation [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216)
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * Custom identifier for the push task. When JobKey is not empty, this field will be included in the receipt logs. For receipt log details, see [Receipt Logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Used for scheduled sending. If not set, the default is immediate sending.
   * 
   * The time format follows the ISO 8601 standard and must use UTC time in the format YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * Push type. Valid values:
   * 
   * - MESSAGE: indicates a message.
   * - NOTICE: indicates a notification.
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @remarks
   * Specify sending channels. Valid values:
   * 
   * - accs: Alibaba Cloud proprietary channel
   * - huawei: Huawei channel
   * - honor: Honor channel
   * - xiaomi: Xiaomi channel
   * - oppo: OPPO channel
   * - vivo: vivo channel
   * - meizu: Meizu channel
   * - gcm: Google GCM channel (legacy HTTP)
   * - fcm: Google Firebase channel (HTTP v1 API)
   * - apns: APNs channel
   * - harmony: HarmonyOS channel
   * 
   * >- If this parameter is not configured, all channels are available.
   * >- If this parameter is configured, only the specified channels are used.
   * >- If the configured channels conflict with the sending strategy (e.g., iOS notifications only go through the APNs channel, but this parameter does not include apns), the push will not be sent.
   * >- If gcm is configured, both Google GCM and FCM channels can be used. If fcm is configured, only the Google FCM channel can be used.
   * 
   * @example
   * accs,huawei,xiaomi
   */
  sendChannels?: string;
  /**
   * @remarks
   * This parameter has been deprecated.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  sendSpeed?: number;
  /**
   * @remarks
   * Whether to store offline messages/notifications. StoreOffline defaults to false.
   * 
   * If stored, when the user is offline during push, the message will be resent when the user comes online within the expiration time (ExpireTime). ExpireTime defaults to 72 hours. iOS notifications are delivered through the APNs channel and are not affected by StoreOffline.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * Push target. Valid values:
   * 
   * - DEVICE: push by device.
   * - ACCOUNT: push by account.
   * - ALIAS: push by alias.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * Set based on Target. Multiple values are separated by commas. If the limit is exceeded, you need to split the push into multiple calls.
   * 
   * - Target=DEVICE: values such as `deviceid1,deviceid2` (up to 1,000 supported).
   * - Target=ACCOUNT: values such as `account1,account2` (up to 1,000 supported).
   * - Target=ALIAS: values such as `alias1,alias2` (up to 1,000 supported).
   * 
   * This parameter is required.
   * 
   * @example
   * deviceid1,deviceid2
   */
  targetValue?: string;
  /**
   * @remarks
   * Title of the notification/message during push. Length limit: 200 bytes.
   * Required for Android and HarmonyOS pushes. Optional for iOS push notifications. If provided:
   * * iOS 10+: the notification displays the title.
   * * iOS 8.2 <= iOS version < iOS 10: replaces the notification app name.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Whether to automatically truncate titles and content that are too long.
   * Note: This only applies to vendor channels that explicitly limit title and content length. It does not apply to channels like APNs, Huawei, and Honor that do not limit title and content individually but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * iOS notifications are sent through the APNs center. You need to specify the corresponding environment information.
   * 
   * - DEV: Development environment, applicable to apps installed and debugged directly via Xcode.
   * - PRODUCT: Production environment, applicable to apps distributed through App Store, TestFlight, Ad Hoc, and enterprise distribution.
   * 
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @remarks
   * iOS app icon badge number in the upper-right corner.
   * 
   * > If iOSBadgeAutoIncrement is set to True, this field must be empty.
   * 
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @remarks
   * Whether to enable badge auto-increment. Defaults to false.
   * 
   * > When this is set to true, iOSBadge must be empty.
   * 
   * The badge auto-increment feature is maintained by the push server for each device\\"s badge count. Users must use SDK version V1.9.5 or later and actively sync the badge number to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * Extended properties of iOS notifications.
   * 
   * On iOS 10+, you can specify the resource URL for rich media push notifications here: `{"attachment": "https://xxxx.xxx/notification_pic.png"} `. This parameter must be passed in JSON map format; otherwise, parsing errors will occur.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * Interruption level. Valid values:
   * 
   * - passive: The system adds the notification to the notification list without lighting up the screen or playing sound.
   * 
   * - active: The system immediately displays the notification, lights up the screen, and can play sound.
   * 
   * - time-sensitive: The system immediately presents the notification, lights up the screen, and can play sound, but does not break through system notification controls.
   * 
   * - critical: The system immediately displays the notification, lights up the screen, and plays sound bypassing the mute switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * JSON string. Static pass-through parameters for Dynamic Island push. Contains static user-defined information such as product ID and order information.
   * 
   * > Required when iOSLiveActivityEvent is start.
   * 
   * @example
   * {"orderId": "12345", "product": "Shoes"}
   */
  iOSLiveActivityAttributes?: string;
  /**
   * @remarks
   * The type of Live Activity to start.
   * > Required when iOSLiveActivityEvent is start.
   * 
   * @example
   * OrderActivityAttributes
   */
  iOSLiveActivityAttributesType?: string;
  /**
   * @remarks
   * Dynamic pass-through parameters for Dynamic Island push. Contains real-time update information such as price and inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * The ended Live Activity will remain on the lock screen until the specified time, up to a maximum of 4 hours.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityDismissalDate?: number;
  /**
   * @remarks
   * Start, update, or end a Live Activity.
   * 
   * - Enum: start | update | end
   * 
   * @example
   * start
   */
  iOSLiveActivityEvent?: string;
  /**
   * @remarks
   * The Live Activity ID reported by the device to the user\\"s server. A unique identifier for the Live Activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * Timestamp in seconds, marking the expiration time of the activity content.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * iOS notification sound. Specify the name of an audio file stored in the app bundle or the sandbox Library/Sounds directory. See: How to set notification sound for iOS push.
   * 
   * If set to an empty string (""), the notification is silent. If not set, the default system alert sound is used.
   * 
   * @example
   * ””
   */
  iOSMusic?: string;
  /**
   * @remarks
   * iOS notification processing extension flag (iOS 10+). If set to true, APNs push notifications can reach the Extension for processing before being displayed. Must be set to true for silent notifications.
   * 
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @remarks
   * Specify the iOS notification Category (iOS 10+).
   * 
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @remarks
   * When a device receives messages with the same CollapseId, they are merged into one. When the device is offline, consecutive messages with the same CollapseId will show only one notification in the notification bar. Supported on iOS 10+.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * Groups iOS remote notifications using this property, marking the group identifier for collapsed notifications. Only supported on iOS 12.0+.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * Summary highlight score. Value range: a floating-point number in [0,1\\].
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * When the device is offline during message push (i.e., the persistent connection channel to the Mobile Push server is disconnected), this push will be delivered as a notification through Apple\\"s APNs channel once.
   * 
   * > Offline message-to-notification conversion only applies to the production environment.
   * 
   * @example
   * true
   */
  iOSRemind?: boolean;
  /**
   * @remarks
   * iOS notification content used when converting iOS messages to notifications. Only valid when iOSApnsEnv=PRODUCT and iOSRemind is true.
   * 
   * @example
   * ios通知body
   */
  iOSRemindBody?: string;
  /**
   * @remarks
   * Whether to enable iOS silent notification.
   * 
   * @example
   * true
   */
  iOSSilentNotification?: boolean;
  /**
   * @remarks
   * iOS notification subtitle content (iOS 10+).
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
   * AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * An idempotency parameter used to prevent duplicate pushes caused by API caller retries. When calls are made with the same IdempotentToken within 15 minutes, only one push is performed, and subsequent calls return the result of the first successful push.
   * 
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range 0-9 or a-f, case-insensitive.
   * > - This parameter is only used to prevent duplicate pushes caused by retries and cannot prevent duplicate pushes caused by concurrent calls.
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

