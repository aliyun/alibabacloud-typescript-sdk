// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specify the activity to open from the notification.
   * 
   * Only pass this when AndroidOpenType="Activity", e.g.: `com.alibaba.cloudpushdemo.bizactivity`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Set the badge increment value, which is added to the current badge count. Value range: [1-99].
   * > Only effective for Huawei/Honor vendor channel push. When both AndroidBadgeAddNum and AndroidBadgeSetNum are present, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * Full class name of the app entry Activity for badge settings.
   * 
   * > Only effective for Huawei/Honor vendor channel push.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Set a fixed badge number. Value range: [0-99].
   * 
   * > For vendor channel push, only effective on Huawei and Honor channels. For Alibaba Cloud proprietary channel push, only effective on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * Body in long text mode. Length limit: 1000 bytes (1 Chinese character counts as 3 bytes). Subject to specific vendor channel limits when sending.
   * 
   * Currently supported by:
   * 
   * - Huawei: EMUI 10 and above
   * 
   * - Honor: Magic UI 4.0 and above
   * 
   * - Xiaomi: MIUI 10 and above
   * 
   * - OPPO: ColorOS 5.0 and above
   * 
   * - Meizu: Flyme
   * - Proprietary channel: Android SDK 3.6.0 and above
   * 
   * >If not provided in long text mode, the first non-empty value from Body or AndroidPopupBody is used.
   * 
   * @example
   * 示例长文本
   */
  androidBigBody?: string;
  /**
   * @remarks
   * Image URL in big picture mode. Currently supported by: Proprietary channel: Android SDK 3.6.0 and above.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * Title in long text mode. Length limit: 200 bytes (1 Chinese character counts as 3 bytes).
   * 
   * - Currently only supported by the Honor channel and Huawei channel EMUI 11 and above.
   * 
   * - If not provided in long text mode, the first non-empty value from Title or AndroidPopupTitle is used.
   * 
   * @example
   * 示例长标题
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * Set the extension attributes of the notification. This attribute does not take effect when PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format, otherwise parsing will fail.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  /**
   * @remarks
   * Set Honor channel notification type:
   * - **0**: Official notification (default).
   * - **1**: Test notification.
   * 
   * > Each application can send up to 1000 test notifications per day, and these are not subject to the daily per-device push limit.
   * 
   * @example
   * 0
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * Set Huawei Quick Notification parameter:
   * - **0**: Send Huawei standard notification (default).
   * - **1**: Send Huawei Quick Notification.
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development integration, refer to the documentation [Huawei Live Notification Push Guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * Huawei channel receipt ID. This receipt ID can be found in the receipt parameter configuration on the Huawei channel push management platform.
   * 
   * > If the default receipt configuration on the Huawei channel push management platform is set to the Alibaba Cloud receipt, this is not required. If not, it is recommended to configure the Huawei channel default receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @remarks
   * Set Huawei channel notification type:
   * - **0**: Official notification (default).
   * - **1**: Test notification.
   * 
   * > Each application can send up to 500 test notifications per day, and these are not subject to the daily per-device push limit.
   * 
   * @example
   * 0
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * Right-side icon URL.
   * Currently supported by:
   * - Huawei EMUI (only applicable in long text mode and Inbox mode).
   * 
   * - Honor Magic UI (only applicable in long text mode).
   * 
   * - Proprietary channel: Android SDK 3.5.0 and above.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * Body content in Inbox mode. The content must be a valid JSON Array with no more than 5 elements. Currently supported by:
   * 
   * - Huawei: EMUI 9 and above
   * - Honor: Magic UI 4.0 and above
   * - Xiaomi: MIUI 10 and above
   * - OPPO: ColorOS 5.0 and above
   * - Proprietary channel: Android SDK 3.6.0 and above
   * 
   * @example
   * ["第一行","第二行"]
   */
  androidInboxBody?: string;
  /**
   * @remarks
   * Meizu message type:
   * - 0: Public message (default)
   * - 1: Private message
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
   * Purpose 1: After completing the [self-classification rights application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this is used to identify the message type, determine the [message notification method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and accelerate delivery for specific message types. For valid values, refer to the [Message Classification Standard](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in Huawei\\"s official push documentation, using the "Cloud notification category value" or "Local notification category value" from the table.
   * 
   * Purpose 2: After [applying for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this is used to identify high-priority transparent transmission scenarios. Valid values:
   * - VOIP: Audio/video calls
   * - PLAY_VOICE: Voice playback
   * 
   * > For items where "Cloud notification category value" is "Not applicable", they are delivered through the Alibaba Cloud proprietary channel. For items where "Local notification category value" is "Not applicable", they are delivered through the Huawei channel.
   * 
   * @example
   * VOIP
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * Huawei channel notification delivery priority. Valid values:
   * 
   * - **HIGH**
   * - **NORMAL**
   * 
   * Requires permission application. For details, see: [Application Link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO classifies messages into two categories for management: Communication & Service, and Content & Marketing.
   * 
   * Communication & Service (requires permission application):
   * - IM: Instant messaging, audio, video calls
   * - ACCOUNT: Personal account and asset changes
   * - DEVICE_REMINDER: Personal device reminders
   * - ORDER: Personal order/logistics status changes
   * - TODO: Personal schedules/to-dos
   * - SUBSCRIPTION: Personal subscriptions
   * 
   * Content & Marketing:
   * - NEWS: News and information
   * - CONTENT: Content recommendations
   * - MARKETING: Platform promotions
   * - SOCIAL: Social updates
   * 
   * For details, refer to [OPUSH Message Classification Rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * OPPO channel notification bar message notification level. Valid values:
   * - 1: Notification bar
   * - 2: Notification bar, lock screen, ringtone, vibration (default notification level for Communication & Service messages)
   * - 16: Notification bar, lock screen, ringtone, vibration, banner (requires permission application)
   * 
   * > When using the AndroidMessageOppoNotifyLevel parameter, the AndroidMessageOppoCategory parameter must also be provided.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo classifies messages into two categories for management: System messages and Operational messages.
   * System messages:
   * - IM: Instant messages
   * - ACCOUNT: Accounts and assets
   * - TODO: Schedules and to-dos
   * - DEVICE_REMINDER: Device information
   * - ORDER: Orders and logistics
   * - SUBSCRIPTION: Subscription reminders
   * 
   * Operational messages:
   * - NEWS: News
   * - CONTENT: Content recommendations
   * - MARKETING: Operational promotions
   * - SOCIAL: Social updates
   * 
   * For details, refer to [Classification Description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * Huawei vendor channel notification sound. Specify the name of an audio file stored in the client project\\"s app/src/main/res/raw/ directory, without the file extension.
   * 
   * If not set, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  androidMusic?: string;
  /**
   * @remarks
   * Priority of the Android notification position in the notification bar. Valid values: -2, -1, 0, 1, 2.
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
   * The channelId of the Android app, which must correspond to the channelId in the app.
   * - Set the NotificationChannel parameter. For specific usage, see [FAQ: Notifications Not Received on Android 8.0+ Devices](https://help.aliyun.com/document_detail/67398.html).
   * - Since the OPPO private message channel\\"s channel_id is the same as the app\\"s channelId, the channel_id for OPPO channel push takes this value.
   * - For Huawei, FCM, and Alibaba Cloud proprietary channel push, the channel_id takes this value.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * Message grouping. Messages in the same group are displayed as only the latest one in the notification bar along with the total count of messages received for that group. All messages are not shown and cannot be expanded. Currently supported by:
   * 
   * - Huawei vendor channel
   * - Honor vendor channel
   * - Proprietary channel: Android SDK 3.9.1 and below
   * 
   * > The proprietary channel no longer supports this parameter on Android SDK 3.9.2 and above.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * Set the Honor notification message classification importance parameter, which determines notification behavior on user devices. Valid values:
   * 
   * - **LOW**: Information and marketing messages
   * - **NORMAL**: Service and communication messages
   * 
   * Requires application on the Honor platform. [Application Link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * Set the Huawei notification message classification importance parameter, which determines notification behavior on user devices. Valid values:
   * 
   * - LOW: Information and marketing messages
   * - NORMAL: Service and communication messages
   * 
   * >- Huawei channel currently recommends using AndroidMessageHuaweiCategory for notification classification. AndroidNotificationHuaweiChannel is no longer required.
   * >- Requires application on the Huawei platform. [Application Link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * Unique identifier for each message when displayed in the notification bar. Different notification bar messages can share the same NotifyId, allowing new notifications to replace old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * Message grouping. Messages in the same group are collapsed in the notification bar and can be expanded. Notifications from different groups are displayed separately. Currently supported by:
   * 
   * - Proprietary channel: Android SDK 3.9.2 and above
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
   * >- vivo channel currently recommends using AndroidMessageVivoCategory for notification classification. AndroidNotificationVivoChannel is no longer required.
   * >- Requires application on the vivo platform. For details, see: [Application Link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * classification
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * Set the Xiaomi notification type channelId. Requires application on the Xiaomi platform. For details, see: [Application Link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * >- A single application can apply for a maximum of 8 channels on the Xiaomi channel. Please plan ahead.
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
   * BOTH
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * Action after clicking the notification. Valid values:
   * 
   * - **APPLICATION**: Open the application (default)
   * - **ACTIVITY**: Open an Android Activity
   * - **URL**: Open a URL
   * - **NONE**: No redirect
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * URL to open when Android receives the push.
   * 
   * Only pass this when AndroidOpenType="URL".
   * 
   * @example
   * https://xxxx.xxx
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * JSON string of the OPPO Fluid Cloud intent deletion data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). When the AndroidOppoIntelligentIntent parameter is already provided, this parameter is ignored. For development integration, refer to the documentation [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * JSON string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development integration, refer to the documentation [OPPO Fluid Cloud Push Guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * Set OPPO Fluid Cloud push environment:
   * - **0**: Production environment (default).
   * - **1**: Test environment.
   * 
   * > OPPO Fluid Cloud test environment requires setting up the client environment as described in [Environment Setup](https://open.oppomobile.com/documentation/page/info?id=13590).
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
   * Specify the Activity to navigate to after clicking the notification.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @remarks
   * Body content in supplementary popup mode. Required when the **AndroidPopupActivity** parameter is not empty.
   * 
   * Length limit: 200 characters (both Chinese and English characters count as one character).
   * 
   * If using vendor channels, it must also comply with vendor channel limits. For details, see: [Android Supplementary Channel Push Limits](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * Title content in supplementary popup mode. Required when the **AndroidPopupActivity** parameter is not empty.
   * 
   * Length limit: 50 characters (both Chinese and English characters count as one character).
   * 
   * If using vendor channels, it must also comply with vendor channel limits. For details, see: [Android Supplementary Channel Push Limits](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * When the push type is message and the device is offline, this push will use the supplementary popup feature. Default is false. Only effective when PushType=MESSAGE.
   * 
   * If the message-to-notification push is successful, the notification displays the AndroidPopupTitle and AndroidPopupBody parameter values set on the server. The data obtained in the onSysNoticeOpened method of the supplementary popup when clicking the notification is the Title and Body parameter values set on the server.
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
   * - **2**: Big picture mode (supported by the proprietary channel, not supported on Xiaomi devices)
   * - **3**: List mode (supported by Huawei, Honor, Xiaomi, OPPO, and proprietary channels)
   * > If using a non-standard mode, this parameter must be provided.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: number;
  /**
   * @remarks
   * Set vendor channel notification type:
   * - **0**: Official notification (default).
   * - **1**: Test notification.
   * 
   * >- When this parameter is configured, it is equivalent to simultaneously configuring AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv. The specific vendor channel parameters can override this parameter.
   * >- Currently supported by: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 0
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * JSON string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development integration, refer to the documentation [vivo Atomic Island Push Guide](https://help.aliyun.com/zh/document_detail/3030718.html).
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
   * Set vivo channel notification type:
   * - **0**: Official push (default).
   * - **1**: Test push.
   * 
   * > For test push, please configure the test device on the vivo console in advance. The test device RegId can be obtained by searching for "onReceiveRegId regId" in the device startup logs.
   * 
   * @example
   * 0
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * vivo channel receipt ID. This receipt ID can be found in the application information of the push service on the vivo open platform.
   * 
   * > If the default receipt configuration on the vivo open platform is set to the Alibaba Cloud receipt, this is not required. If not, it is recommended to configure the vivo channel default receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * 123
   */
  androidVivoReceiptId?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party supplementary popups are now supported by the new parameter **AndroidPopupActivity**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party supplementary popups are now supported by the new parameter **AndroidPopupBody**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @remarks
   * This parameter is deprecated. All third-party supplementary popups are now supported by the new parameter **AndroidPopupTitle**.
   * 
   * @example
   * 无
   * 
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @remarks
   * This parameter is deprecated. Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big pictures during push on new devices/systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * JSON string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, refer to the documentation [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
   * JSON string of the Xiaomi Super Island image data [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, refer to the documentation [Xiaomi Super Island Push Guide](https://help.aliyun.com/zh/document_detail/3037956.html).
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
   * This parameter is deprecated. Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big pictures during push on new devices/systems.
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
   * Notification content/message content for Android and HarmonyOS push; iOS message/notification content. The push content size is limited. See [Product Limits](https://help.aliyun.com/document_detail/434629.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * Device type. Valid values:
   * 
   * - **HARMONY**: HarmonyOS device
   * - **iOS**: iOS device
   * - **ANDROID**: Android device
   * - **ALL**: When the AppKey is for a legacy dual-platform application, this represents pushing to both Android and iOS devices simultaneously; when the AppKey is for a new single-platform application, the effect is the same as specifying the device type corresponding to the application type.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * Expiration time for offline messages/notifications, used in conjunction with StoreOffline. Expired messages will no longer be sent. Maximum retention is 72 hours. Default is 72 hours.
   * 
   * The time format follows the ISO8601 standard and must use UTC time, in the format YYYY-MM-DDThh:mm:ssZ. The expiration time must be greater than the current time or the scheduled send time plus 3 seconds (`ExpireTime > PushTime + 3 seconds`). The 3-second buffer accounts for network and system delay tolerance. It is recommended to set at least 1 minute for single push, and at least 10 minutes for full push or batch push.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The action corresponding to the in-app page ability.
   * 
   * >Notice: When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be provided.
   * 
   * For details, see the HarmonyOS official documentation [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216).
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * Action after clicking the notification. Valid values:
   * 
   * - APP_HOME_PAGE: Open app home page
   * - APP_CUSTOM_PAGE: Open app custom page
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * HarmonyOS app badge increment number. Refer to [HarmonyOS badge addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * HarmonyOS app badge set number. Refer to [HarmonyOS badge setNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * Notification message category. After completing the notification message self-classification rights application, this is used to identify the message type. Different notification message types affect how messages are displayed and how alerts are triggered. Valid values:
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
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, operational promotions (only identifies content, does not accelerate message delivery), collectively referred to as information and marketing messages
   * 
   * For details, see the HarmonyOS official documentation [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117).
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * Set the extension attributes of the notification. This attribute does not take effect when PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format, otherwise parsing will fail.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * Extra data for notification extension messages.</br>
   * Effective when sending HarmonyOS notification extension messages.</br>
   * Conceptually equivalent to the extraData field of HarmonyOS notification extension messages. For the specific definition, refer to [HarmonyOS ExtensionPayload Description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).</br>
   * Supported from HarmonyOS SDK 1.2.0.
   * 
   * @example
   * 示例额外数据
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * When PushType is NOTICE, whether to send as a HarmonyOS notification extension message.
   * 
   * - true: Send notification extension message
   * - false: Send standard notification (default)
   * 
   * Notification extension messages require permission application on the HarmonyOS side before sending. For details, refer to the HarmonyOS documentation [Send Notification Extension Messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5).</br>
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
   * > Supported image formats: png, jpg, jpeg, heif, gif, bmp. Image width * height must be less than 25000 pixels.
   * 
   * For details, see the HarmonyOS official documentation [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117).
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * Content for multi-line text style. Required when HarmonyRenderStyle is MULTI_LINE. Supports up to 3 items.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
  /**
   * @remarks
   * JSON string of the HarmonyOS Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development integration, refer to the documentation [HarmonyOS Live View Push Guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * Use the specified notification channel type. Only effective when the Alibaba Cloud proprietary channel is online.
   * 
   * - SOCIAL_COMMUNICATION: Social communication.
   * - SERVICE_INFORMATION: Service reminders.
   * - CONTENT_INFORMATION: Content information.
   * - CUSTOMER_SERVICE: Customer service messages. This type is used for customer service messages between users and merchants, and must be initiated by the user.
   * - OTHER_TYPES: Other.
   * 
   * For details, see the HarmonyOS official documentation [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype).
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * Unique identifier for each message when displayed as a notification. If not provided, the push service automatically generates a unique identifier for each message. Different notification messages can share the same notifyId, enabling the new message to replace the old one.
   * 
   * For details, see the HarmonyOS official documentation [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117).
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * HarmonyOS channel receipt ID. This receipt ID can be found in the receipt parameter configuration on the HarmonyOS channel push management platform.
   * 
   * > If the default receipt configuration on the HarmonyOS channel push management platform is set to the Alibaba Cloud receipt, this is not required. If not, it is recommended to configure the HarmonyOS channel default receipt ID in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * For details, see the HarmonyOS official documentation [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212).
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * When the push type is message and the device is offline, this push will use the supplementary popup feature. Default is false. Only effective when PushType=MESSAGE.
   * 
   * If the message-to-notification push is successful, the notification displays the HarmonyRemindTitle and HarmonyRemindBody parameter values set on the server.
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
   * - false: Official message (default)
   * - true: Test message
   * 
   * For details, see the HarmonyOS official documentation [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212).
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the in-app page ability.
   * >Notice: When HarmonyActionType is APP_CUSTOM_PAGE, at least one of HarmonyUri and HarmonyAction must be provided. When multiple Abilities exist, fill in the action and uri of each Ability separately. The action is used first to find the corresponding in-app page.
   * 
   * For details, see the HarmonyOS official documentation [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216).
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * An idempotent parameter to prevent duplicate pushes caused by API client retries. When the same IdempotentToken is used for calls within 15 minutes, only one push will be made, and subsequent calls will return the result of the first successful push.
   * 
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range 0-9 or a-f, case-insensitive.
   * > - This parameter is only used to prevent duplicate pushes caused by retries. It cannot prevent duplicate pushes caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * Custom identifier for the push task. When JobKey is not empty, the receipt log will include this field. For viewing receipt logs, see [Receipt Logs](https://help.aliyun.com/document_detail/434651.html).
   * >Format requirements: Only letters, digits, or the symbols \\"_\\" and \\"-\\" (any combination) are allowed, and the length must not exceed 32 characters.
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * Used for scheduled sending. If not set, the default is immediate sending.
   * Scheduled sending must be no later than 7 days from now.
   * 
   * The time format follows the ISO8601 standard and must use UTC time, in the format YYYY-MM-DDThh:mm:ssZ.
   * >When Target is TBD (continuous push), scheduled sending is not supported.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * Push type. Valid values:
   * - **NOTICE**: Notification. Notifications are delivered to devices through vendor channels such as APNs, Huawei, Xiaomi, and HarmonyOS, and are displayed directly in the device notification bar. When an Android device is online (app process is alive), the notification is preferentially delivered through the Alibaba Cloud proprietary channel, where the Push SDK constructs and displays the notification, providing better push performance and potentially saving vendor push message quotas in some scenarios.
   * - **MESSAGE**: Message. Messages are delivered through the Alibaba Cloud proprietary online channel. They are not displayed in the notification bar by default, but need to be received and processed by the app when the process is active, allowing the business to decide whether to trigger certain business behaviors. When the device is offline (app process is inactive), messages cannot be received in a timely manner. In this case, you can use the `iOSRemind` or `AndroidRemind` parameters below to convert messages to notifications when the device is offline; or set the `StoreOffline` parameter below so the push system saves the message when the device is offline and automatically delivers it when the device comes online.
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
   * Delay time before triggering SMS, in seconds.
   * 
   * Must be set when using SMS convergence. Recommended to be 15 seconds or more, with a maximum of 3 days, to avoid duplication between SMS and push notifications.
   * 
   * > When SMS convergence is used, the ExpireTime parameter becomes ineffective. The notification expiration time is calculated based on the SmsDelaySecs parameter, with the expiration time being the current time plus SmsDelaySecs.
   * 
   * @example
   * 15
   */
  smsDelaySecs?: number;
  /**
   * @remarks
   * Variable name-value pairs for the SMS template, in the format: `key1=value1&key2=value2`.
   * 
   * @example
   * key1=value1
   */
  smsParams?: string;
  /**
   * @remarks
   * Condition for triggering SMS. Valid values:
   * 
   * - **0**: Triggered when push is not received.
   * - **1**: Triggered when user has not opened the notification.
   * 
   * @example
   * 0
   */
  smsSendPolicy?: number;
  /**
   * @remarks
   * The signature for supplementary SMS.
   * 
   * @example
   * 短信签名
   */
  smsSignName?: string;
  /**
   * @remarks
   * The template name for supplementary SMS. This can be obtained from the SMS template management page and is a system-assigned name, not a developer-defined name.
   * 
   * @example
   * 短信模板名称
   */
  smsTemplateName?: string;
  /**
   * @remarks
   * Whether to store offline messages/notifications. StoreOffline defaults to **false**.
   * 
   * If enabled, when the user is offline during push, the message will be resent when the user comes online within the expiration time (ExpireTime). ExpireTime defaults to 72 hours. iOS notifications go through the APNs channel and are not affected by StoreOffline.
   * 
   * @example
   * false
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * Push target. Valid values:
   * 
   * - **DEVICE**: Push by device.
   * - **ACCOUNT**: Push by account.
   * - **ALIAS**: Push by alias.
   * - **TAG**: Push by tag.
   * - **ALL**: Push to all devices (the interval between two full pushes of the same DeviceType must be at least 1 second).
   *  > Pushing to all iOS devices will push to devices that have been active within the last 24 months but have not uninstalled the app. Once APNs (Apple Push Notification service) receives the push request without returning an error, it is considered delivered, which may cause a surge in active device counts and generate significant costs. Please use with discretion.
   * - **TBD**: Initialize continuous push. The push target is specified by the subsequent [ContinuouslyPush](https://help.aliyun.com/document_detail/2249917.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * Set based on the Target type. Multiple values are separated by commas. If the limit is exceeded, split into multiple pushes.
   * 
   * - Target=DEVICE: Values such as `deviceid1,deviceid2` (up to 1000).
   * - Target=ACCOUNT: Values such as `account1,account2` (up to 1000).
   * - Target=ALIAS: Values such as `alias1,alias2` (up to 1000).
   * - Target=TAG: Supports single and multiple tags. For the format, see [Tag Format](https://help.aliyun.com/document_detail/434847.html).
   * - Target=ALL: Value is **ALL** (fixed parameter for full push).
   * - Target=TBD: Value is **TBD** (fixed parameter for continuous push).
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * Title of the notification/message during push. Length limit: 200 bytes.
   * 
   * Required for Android and HarmonyOS push; optional for iOS notifications. If provided:
   * 
   * - iOS 10+: Displayed as the notification title.
   * 
   * - iOS 8.2 <= iOS version < iOS 10: Replaces the notification app name.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Whether to automatically truncate overly long titles and content.
   * 
   * >Only applies to vendor channels that explicitly limit title and content length. Does not apply to APNs, Huawei, Honor, and other channels that do not limit title or content individually but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * iOS notifications are sent through the APNs center, and the corresponding environment information must be provided.
   * 
   * - **DEV**: Development environment, applicable to apps installed and debugged directly via Xcode.
   * - **PRODUCT**: Production environment, applicable to apps distributed via App Store, TestFlight, Ad Hoc, and enterprise distribution.
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
   * Whether to enable badge auto-increment. Default is false.
   * 
   * >When this is set to true, iOSBadge must be empty.
   * 
   * The badge auto-increment feature is maintained by the push server for each device\\"s badge count. Users must use SDK version 1.9.5 or above and actively sync the badge count to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * Extension attributes for iOS notifications.
   * 
   * For iOS 10+, you can specify the resource URL for rich media push notifications here: `{"attachment": "https://xxxx.xxx/notification_pic.png"}`. This parameter must be passed in JSON map format, otherwise parsing will fail.
   * 
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * Interruption level. Valid values:
   * 
   * - **passive**: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * - **active**: The system displays the notification immediately, lights up the screen, and can play a sound.
   * - **time-sensitive**: The system displays the notification immediately, lights up the screen, and can play a sound, but does not break through system notification controls.
   * - **critical**: The system displays the notification immediately, lights up the screen, and plays a sound bypassing the silent switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * JSON string, static parameters for Live Activity (Dynamic Island) push. Contains static user-defined information such as product IDs and order information.
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
   * Dynamic parameters for Live Activity (Dynamic Island) push, containing real-time update information such as price and inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * Timestamp in seconds. The ended Live Activity will remain on the lock screen until this specified time, with a maximum of 4 hours.
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
   * The Live Activity ID reported from the device to the user\\"s server. The unique identifier of the Live Activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * Timestamp in seconds. Marks the expiration time of the activity content.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * iOS notification sound. Specify the name of an audio file stored in the app bundle or the sandbox Library/Sounds directory. See: [How to Set iOS Push Notification Sound](https://help.aliyun.com/document_detail/48906.html).
   * 
   * If set to an empty string (""), the notification will be silent; if not set, it defaults to the system alert sound.
   * 
   * @example
   * ""
   */
  iOSMusic?: string;
  /**
   * @remarks
   * iOS notification processing extension flag (iOS 10+). If set to true, the APNs push notification can reach the Extension for processing before being displayed. For silent notifications, this must be set to true.
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
   * When a device receives messages with the same CollapseId, they will be merged into one. When the device is offline and consecutive messages with the same CollapseId are sent, only the latest one is displayed in the notification bar. iOS 10+ supports this parameter.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * This attribute is used to group iOS remote notifications, identifying the group name for collapsed notifications.
   * Only supported on iOS 12.0+.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * Summary highlight score. Value range: floating-point number in [0,1\\].
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * When the device is offline during message push (i.e., the persistent connection to the push server is disconnected), this push will be delivered as a notification through Apple\\"s APNs channel once.
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

