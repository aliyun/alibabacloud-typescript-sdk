// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushRequest extends $dara.Model {
  /**
   * @remarks
   * The activity to be opened by the notification.
   * 
   * This parameter is passed only when AndroidOpenType is set to ACTIVITY. Example: `com.alibaba.cloudpushdemo.bizactivity`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * The increment value for the badge. The value is added to the current badge number. Valid values: 1 to 99.
   * > This parameter is valid only for push notifications sent through the Huawei or Honor vendor channel. If both AndroidBadgeAddNum and AndroidBadgeSetNum are specified, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * The fully qualified class name of the entry Activity for badge settings.
   * > This parameter is valid only for push notifications sent through the Huawei or Honor vendor channel.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * The fixed number for the badge. Valid values: 0 to 99.
   * > This parameter takes effect only on the Huawei and Honor channels when push notifications are sent through vendor channels. When push notifications are sent through the Alibaba Cloud proprietary channel, this parameter takes effect only on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * The body in long text mode. Maximum length: 1,000 bytes. One Chinese character counts as 3 bytes. The actual limit is subject to the specific vendor channel during delivery.
   * 
   * Currently supported by:
   * 
   * - Huawei: EMUI 10 and later.
   * 
   * - Honor: Magic UI 4.0 and later.
   * 
   * - Xiaomi: MIUI 10 and later.
   * 
   * - OPPO: ColorOS 5.0 and later.
   * 
   * - Meizu: Flyme. 
   * - Proprietary channel: Android SDK 3.6.0 and later.
   * 
   * >If this parameter is not provided in long text mode, the first non-empty value from Body and AndroidPopupBody is used.
   * 
   * @example
   * Sample long text
   */
  androidBigBody?: string;
  /**
   * @remarks
   * The image URL in big image mode. Currently supported by the proprietary channel for Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * The title in long text mode. Maximum length: 200 bytes. One Chinese character counts as 3 bytes.
   * 
   * - This parameter is currently supported only by the Honor channel and the Huawei channel for EMUI 11 and later.
   * 
   * - If this parameter is not provided in long text mode, the first non-empty value from Title and AndroidPopupTitle is used.
   * 
   * @example
   * Sample long title
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * The extended attributes of the notification. This attribute does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format. Otherwise, a parsing error occurs.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  androidExtParameters?: string;
  /**
   * @remarks
   * The notification type for the Honor channel. Valid values:
   * - **0**: Formal notification. This is the default value.
   * - **1**: Test notification.
   * 
   * > Each app can send 1,000 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * The Huawei fast notification parameter. Valid values:
   * - **0**: Send Huawei standard notifications. This is the default value.
   * - **1**: Send Huawei fast notifications.
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * The JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development and integration, refer to the [Huawei Live Notification push guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * The receipt ID for the Huawei channel. You can view this receipt ID in the receipt parameter settings of the Huawei push operations platform.
   * > If the default receipt configuration on the Huawei push operations platform is set to the Alibaba Cloud receipt, this parameter is not required. Otherwise, we recommend that you configure the default receipt ID for the Huawei channel in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @remarks
   * The notification type for the Huawei channel. Valid values:
   * - **0**: Formal notification. This is the default value.
   * - **1**: Test notification.
   * 
   * > Each app can send 500 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * The URL of the right-side icon. Currently supported by:
   * - Huawei EMUI: applicable only in long text mode and inbox mode.
   * 
   * - Honor Magic UI: applicable only in long text mode.
   * 
   * - Proprietary channel: Android SDK 3.5.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * The body in inbox mode. The content must be a valid JSON array with no more than 5 elements. Currently supported by:
   * 
   * - Huawei: EMUI 9 and later.
   * - Honor: Magic UI 4.0 and later.
   * - Xiaomi: MIUI 10 and later.
   * - OPPO: ColorOS 5.0 and later.
   * - Proprietary channel: Android SDK 3.6.0 and later.
   * 
   * @example
   * ["First line","Second line"]
   */
  androidInboxBody?: string;
  /**
   * @remarks
   * The Meizu message type. Valid values:
   * - 0: Public message. This is the default value.
   * - 1: Private message.
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
   * Purpose 1: After you complete the [self-classification permission application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this parameter is used to identify the message type and determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718). It accelerates the delivery of specific types of messages. For valid values, refer to the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei push documentation, and fill in the "Cloud notification category value" or "Local notification category value" in the documentation table.
   * 
   * Purpose 2: After you [apply for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this parameter is used to identify high-priority pass-through scenarios. Valid values:
   * - VOIP: Audio and video calls.
   * - PLAY_VOICE: Voice broadcast.
   * 
   * > For messages whose "Cloud notification category value" is "Not involved", the Alibaba Cloud proprietary channel is used. For messages whose "Local notification category value" is "Not involved", the Huawei channel is used.
   * 
   * @example
   * VOIP
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * The delivery priority of Huawei channel notifications. Valid values:
   * 
   * - **HIGH**
   * - **NORMAL**
   * 
   * You must apply for the permission. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO message categorization includes two categories for management: Communication and Service, and Content and Marketing.
   * 
   * Communication and Service (permission application required):
   * - IM: Instant chat, audio, and video calls.
   * - ACCOUNT: Individual account and asset changes.
   * - DEVICE_REMINDER: Personal device reminders.
   * - ORDER: Personal order and logistics status changes.
   * - TODO: Personal schedules and to-dos.
   * - SUBSCRIPTION: Individual subscribe.
   * 
   * Content and Marketing:
   * - NEWS: News and information.
   * - CONTENT: Content recommendations.
   * - MARKETING: Platform activities.
   * - SOCIAL: Social updates.
   * 
   * For more information, see [OPUSH message classification rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * The reminder level of OPPO channel notification bar messages. Valid values:
   * - 1: Notification bar.
   * - 2: Notification bar, lock screen, ringtone, and vibrate. This is the default notification level for Communication and Service messages.
   * - 16: Notification bar, lock screen, ringtone, vibrate, and banner. Permission application is required.
   * 
   * > When you use the AndroidMessageOppoNotifyLevel parameter, you must also pass the AndroidMessageOppoCategory parameter.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo message categorization includes two categories for management: System Messages and Operation Messages.
   * System Messages:
   * - IM: Instant messages.
   * - ACCOUNT: Accounts and assets.
   * - TODO: Schedules and to-dos.
   * - DEVICE_REMINDER: Device information.
   * - ORDER: Orders and logistics.
   * - SUBSCRIPTION: subscribe reminders.
   * 
   * Operation Messages:
   * - NEWS: News.
   * - CONTENT: Content recommendations.
   * - MARKETING: Operational activity.
   * - SOCIAL: Social updates.
   * 
   * For more information, see [Classification description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * The notification sound for the Huawei vendor channel. Specify the name of the audio file stored in the `app/src/main/res/raw/` directory of the client project. Do not include the file extension.
   * If this parameter is not specified, the default ringtone is used.
   * 
   * @example
   * alicloud_notification_sound
   */
  androidMusic?: string;
  /**
   * @remarks
   * The priority of the Android notification display position in the notification bar. Valid values: -2, -1, 0, 1, and 2.
   * 
   * @example
   * 0
   */
  androidNotificationBarPriority?: number;
  /**
   * @remarks
   * The custom notification bar style for Android. Valid values: 1 to 100.
   * 
   * @example
   * 2
   */
  androidNotificationBarType?: number;
  /**
   * @remarks
   * The channel ID of the Android app. It must correspond to the channel ID in the app.
   * - For more information about how to set the NotificationChannel parameter, see [FAQ: Notifications are not received on Android 8.0 and later devices](https://help.aliyun.com/document_detail/67398.html).
   * - Because the channel_id of the OPPO private message channel is the same as the channel ID of the app, this value is used as the channel_id when pushing through the OPPO channel.
   * - This value is used as the channel_id when pushing through the Huawei, FCM, and Alibaba Cloud proprietary channels.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * The message group. For messages in the same group, only the latest message and the total number of messages received by the group are displayed in the notification bar. All messages are not displayed and cannot be expanded. Currently supported by:
   * 
   * - Huawei vendor channel.
   * - Honor vendor channel.
   * - Proprietary channel: Android SDK 3.9.1 and earlier.
   * 
   * > The proprietary channel no longer supports this parameter in Android SDK 3.9.2 and later.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * The importance parameter for Honor notification message classification, which determines the notification behavior on user devices. Valid values:
   * 
   * - **LOW**: Information and marketing messages.
   * - **NORMAL**: Service and communication messages.
   * 
   * You must apply for this permission on the Honor platform. For more information, see [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * The importance parameter for Huawei notification message classification, which determines the notification behavior on user devices. Valid values:
   * 
   * - LOW: Information and marketing messages.
   * - NORMAL: Service and communication messages.
   * 
   * >- Use AndroidMessageHuaweiCategory for notification classification in the Huawei channel. AndroidNotificationHuaweiChannel is no longer required.
   * >- You must apply for this permission on the Huawei platform. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * The unique identifier of each message when displayed in the notification bar. Different notification bar messages can use the same NotifyId to allow new notification bar messages to overwrite old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * The message thread ID. Messages in the same group are collapsed and can be expanded in the notification bar. Notifications in different groups are displayed separately. Currently supported by:
   * 
   * - Proprietary channel: Android SDK 3.9.2 and later.
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * The vivo notification message classification. Valid values:
   * 
   * - 0: Operation messages. This is the default value.
   * - 1: System messages.
   * 
   * >- Use AndroidMessageVivoCategory for notification classification in the vivo channel. AndroidNotificationVivoChannel is no longer required.
   * >- You must apply for this permission on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * classification
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * The channel ID for Xiaomi notification types. You must apply for it on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * >- A single app can apply for a maximum of 8 channels on the Xiaomi channel. Plan ahead.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * The reminder method of the notification. Valid values:
   * 
   * - **VIBRATE**: Vibrate. This is the default value.
   * - **SOUND**: Sound.
   * - **BOTH**: Sound and vibrate.
   * - **NONE**: Silent.
   * 
   * @example
   * BOTH
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * The action performed after the notification is clicked. Valid values:
   * 
   * - **APPLICATION**: Open the app. This is the default value.
   * - **ACTIVITY**: Open the specified Android activity.
   * - **URL**: Open the specified URL.
   * - **NONE**: No redirection.
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * The URL to be opened after the Android device receives the push.
   * 
   * This parameter is passed only when AndroidOpenType is set to URL.
   * 
   * @example
   * https://www.example.com
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * The JSON character string of the OPPO Fluid Cloud intent delete data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid when the AndroidOppoIntelligentIntent parameter is specified. For development and integration, see References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The JSON character string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, see References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The push environment for OPPO Fluid Cloud. Valid values:
   * - **0**: Formal environment. This is the default value.
   * - **1**: Test environment.
   * 
   * > For the OPPO Fluid Cloud test environment, refer to [Environment setup](https://open.oppomobile.com/documentation/page/info?id=13590) to set up the client.
   * 
   * @example
   * 1
   */
  androidOppoIntentEnv?: number;
  /**
   * @remarks
   * The content parameters for the OPPO private message template.
   */
  androidOppoPrivateContentParameters?: { [key: string]: string };
  /**
   * @remarks
   * The OPPO private message template ID.
   * 
   * @example
   * 687557242b1634hzefs3d5013
   */
  androidOppoPrivateMsgTemplateId?: string;
  /**
   * @remarks
   * The title parameters for the OPPO private message template.
   */
  androidOppoPrivateTitleParameters?: { [key: string]: string };
  /**
   * @remarks
   * The activity to which the user is redirected after the notification is clicked.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidPopupActivity?: string;
  /**
   * @remarks
   * The body content in auxiliary pop-up window mode. This parameter is required when the **AndroidPopupActivity** parameter is not empty.
   * 
   * Maximum length: 200 characters. Both Chinese and English characters count as one character.
   * 
   * If a vendor channel is used, the limits of the vendor channel must also be met. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * The title content in auxiliary pop-up window mode. This parameter is required when the **AndroidPopupActivity** parameter is not empty. 
   * 
   * Maximum length: 50 characters. Both Chinese and English characters count as one character.
   * 
   * If a vendor channel is used, the limits of the vendor channel must also be met. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * Specifies whether to use the auxiliary pop-up window feature when the device is offline during a message push. Default value: false. This parameter takes effect only when PushType is set to MESSAGE.
   * 
   * If the message is successfully converted into a notification and pushed, the data displayed in the received notification is the values of the AndroidPopupTitle and AndroidPopupBody parameters set on the server. The data obtained in the onSysNoticeOpened method of the auxiliary pop-up window when the notification is clicked is the values of the Title and Body parameters set on the server.
   * 
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @remarks
   * The notification style. Valid values:
   * - **0**: Standard mode. This is the default value.
   * - **1**: Long text mode. Supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and the proprietary channel.
   * - **2**: Big image mode. Supported by the proprietary channel, but not supported by Xiaomi devices.
   * - **3**: Inbox mode. Supported by Huawei, Honor, Xiaomi, OPPO, and the proprietary channel.
   * > If a non-standard mode is used, this parameter must be provided.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: number;
  /**
   * @remarks
   * Settings for the vendor channel notification type. Valid values:
   * - **0**: Formal notification. This is the default value.
   * - **1**: Test notification.
   * 
   * >- These parameter settings are equivalent to configuring the AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv parameters at the same time. The corresponding parameters for specific vendor channels can overwrite this parameter.
   * >- Currently supported by: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 0
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * The JSON character string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, see References: [vivo Atomic Island push guide](https://www.alibabacloud.com/help/en/document_detail/3030718.html).
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
   * The notification type for the vivo channel. Valid values:
   * - **0**: Formal push. This is the default value.
   * - **1**: Test push.
   * 
   * > For test pushes, configure test devices in the vivo console in advance. You can search for "onReceiveRegId regId" in the device startup logs to obtain the RegId of the test device.
   * 
   * @example
   * 0
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * The receipt ID for the vivo channel. You can view this receipt ID in the application information of the push service on the vivo Open Platform.
   * > If the default receipt configuration on the vivo Open Platform is set to the Alibaba Cloud receipt, this parameter is not required. Otherwise, we recommend that you configure the default receipt ID for the vivo channel in the Alibaba Cloud EMAS Mobile Push console first.
   * 
   * @example
   * 123
   */
  androidVivoReceiptId?: string;
  /**
   * @remarks
   * The vivo template ID.
   * 
   * @example
   * t1-ge3-lq
   */
  androidVivoTemplateId?: string;
  /**
   * @remarks
   * The parameters for the vivo template. The value is a JSON object string.
   * 
   * @example
   * {"keywords1":"S123"}
   */
  androidVivoTemplateParams?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. All third-party auxiliary pop-up windows are uniformly supported by the new **AndroidPopupActivity** parameter.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  androidXiaoMiActivity?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. All third-party auxiliary pop-up windows are uniformly supported by the new **AndroidPopupBody** parameter.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  androidXiaoMiNotifyBody?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. All third-party auxiliary pop-up windows are uniformly supported by the new **AndroidPopupTitle** parameter.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  androidXiaoMiNotifyTitle?: string;
  /**
   * @remarks
   * **[Deprecated]** Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big images during pushes on new devices and systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Hyper Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see References: [Xiaomi Hyper Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * The JSON character string of the Xiaomi Hyper Island image data [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, see References: [Xiaomi Hyper Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * **[Deprecated]** Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big images during pushes on new devices and systems.
   * 
   * @example
   * https://imag.example.com/image.png
   * 
   * @deprecated
   */
  androidXiaomiImageUrl?: string;
  /**
   * @remarks
   * The Xiaomi private message template ID.
   * 
   * @example
   * P10645
   */
  androidXiaomiTemplateId?: string;
  /**
   * @remarks
   * The parameters for the Xiaomi private message template. The value is a JSON string.
   * 
   * @example
   * {"keywords1":"Tom","keywords2":"phone"}
   */
  androidXiaomiTemplateParams?: string;
  /**
   * @remarks
   * The AppKey information.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The content of the notification or message for Android and HarmonyOS pushes, or the content of the iOS message or notification. The content size is limited. For more information, see [Limits](https://help.aliyun.com/document_detail/434629.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * 
   * - **HARMONY**: HarmonyOS devices.
   * - **iOS**: iOS devices.
   * - **ANDROID**: Android devices.
   * - **ALL**: If the AppKey belongs to a legacy dual-platform app, this value indicates that the push is sent to both Android and iOS devices. If the AppKey belongs to a new single-platform app, this value has the same effect as specifying the device type corresponding to the app type.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * The expiration time of offline messages and notifications. This parameter is used together with StoreOffline. Expired messages and notifications are not delivered. The maximum retention period is 72 hours. Default value: 72 hours.
   * 
   * The time must be in the ISO 8601 standard format and use UTC time. Format: YYYY-MM-DDThh:mm:ssZ. The expiration time cannot be earlier than the current time or the scheduled delivery time plus 3 seconds (ExpireTime > PushTime + 3 seconds). The 3 seconds are reserved to compensate for network and system latency. Set the expiration time to at least 1 minute for single pushes and at least 10 minutes for full pushes and batch pushes.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The action corresponding to the ability of the built-in page in the application.
   * >Notice: When HarmonyActionType is set to APP_CUSTOM_PAGE, you must specify at least one of the HarmonyUri and HarmonyAction fields.
   * For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * The action to perform after the notification is tapped. Valid values:
   * - APP_HOME_PAGE: Opens the application home page.
   * - APP_CUSTOM_PAGE: Opens a custom page in the application.
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * The increment value for the badge of the HarmonyOS application. For more information, see [Description of the addNum field for HarmonyOS badges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * The fixed number for the badge of the HarmonyOS application. For more information, see [Description of the setNum field for HarmonyOS badges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).
   * This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * The category of the notification message. After you apply for the notification message auto-categorization permission, this parameter is used as the identity of the message type. Different notification message types affect the display and reminder methods of the message. Valid values:
   * 
   * - IM: Instant chat.
   * - VOIP: Audio and video calls.
   * - SUBSCRIPTION: subscribe.
   * - TRAVEL: Travel.
   * - HEALTH: Health.
   * - WORK: Work reminders.
   * - ACCOUNT: Account updates.
   * - EXPRESS: Orders and logistics.
   * - FINANCE: Finance.
   * - DEVICE_REMINDER: Device reminders.
   * - MAIL: Emails.
   * - CUSTOMER_SERVICE: Customer service messages.
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational activity. This category only serves as the identity for the content and does not send messages faster. These are collectively referred to as information and marketing messages.
   * 
   * For details, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * The extended attributes of the notification. This attribute does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format. Otherwise, a parsing error occurs.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * The extra data for the extended notification message.</br>
   * This parameter is valid when you send HarmonyOS extended notification messages.</br>
   * This parameter is conceptually equivalent to the extraData field of a HarmonyOS extended notification message. For the specific definition, see [HarmonyOS ExtensionPayload description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).</br>
   * This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * Sample extra data
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * Specifies whether to send a HarmonyOS extended notification message when PushType is set to NOTICE. Valid values:
   * - true: Sends an extended notification message.
   * - false: Sends a normal notification message. This is the default value.
   * You must apply for the required permissions on the HarmonyOS side before you can send extended notification messages. For more information, see [Sending extended notification messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) in the HarmonyOS documentation.</br>
   * This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * true
   */
  harmonyExtensionPush?: boolean;
  /**
   * @remarks
   * The URL of the large icon on the right side of the notification. The URL must use the HTTPS protocol.
   * > Supported image formats include PNG, JPG, JPEG, HEIF, GIF, and BMP. The product of the image width and height must be less than 25,000 pixels.
   * For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * The content for the multi-line text style. This field is required when HarmonyRenderStyle is set to MULTI_LINE. A maximum of three content items are supported.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
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
  harmonyLiveViewPayload?: string;
  /**
   * @remarks
   * The type of the notification channel to use. This parameter is valid only when the Alibaba Cloud proprietary channel is online. Valid values:
   * - SOCIAL_COMMUNICATION: Social communication.
   * - SERVICE_INFORMATION: Service reminders.
   * - CONTENT_INFORMATION: Content information.
   * - CUSTOMER_SERVICE: Customer service messages. This type is used for customer service messages between users and merchants, and must be initiated by the user.
   * - OTHER_TYPES: Other types.
   * For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the HarmonyOS official website.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * The unique identifier of each message when the notification is displayed. If this parameter is not specified, the push service automatically generates a unique identifier for each message. Different notification messages can have the same notifyId to allow new messages to overwrite old ones.
   * For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * The receipt ID for the HarmonyOS channel. You can view this receipt ID in the receipt parameter settings of the HarmonyOS push operations platform.
   * > If the default receipt configuration on the HarmonyOS push operations platform is set to the Alibaba Cloud receipt, this parameter is not required. Otherwise, we recommend that you configure the default receipt ID for the HarmonyOS channel in the Alibaba Cloud EMAS Mobile Push console first.
   * For more information, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * Specifies whether to use the auxiliary pop-up window feature when the device is offline and the push type is message. Default value: false. This parameter takes effect only when PushType is set to MESSAGE.
   * If the message-to-notification push is successful, the notification displays the data specified by the HarmonyRemindTitle and HarmonyRemindBody parameters on the server.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * The HarmonyOS notification content used when a message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * You have a new message. Please check it
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * The HarmonyOS notification title used when a message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * New message
   */
  harmonyRemindTitle?: string;
  /**
   * @remarks
   * The style of the notification message. Valid values:
   * - NORMAL: Normal notification. This is the default value.
   * - MULTI_LINE: Multi-line text style.
   * 
   * @example
   * NORMAL
   */
  harmonyRenderStyle?: string;
  /**
   * @remarks
   * The test message identifier. Valid values:
   * - false: Normal message. This is the default value.
   * - true: Test message.
   * For more information, see [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the ability of the built-in page in the application.
   * >Notice: When HarmonyActionType is set to APP_CUSTOM_PAGE, you must specify at least one of the HarmonyUri and HarmonyAction fields. If multiple abilities exist, specify the action and URI for each ability. The action is used first to find the corresponding built-in page in the application.
   * For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * An idempotent parameter used to prevent duplicate push notifications on the server caused by retries from the API client. If the same IdempotentToken is used for calls within 15 minutes, only one push notification is sent, and subsequent calls return the result of the first successful push.
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range of 0-9 or a-f, and it is case-insensitive.
   * > - This parameter is used only to prevent duplicate push notifications caused by retries. It cannot prevent duplicate push notifications caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * The custom identifier of the push task. If JobKey is not empty, this field is included in the receipt log. For more information, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * >Format requirements: The value can only contain letters, digits, underscores (_), and hyphens (-), and cannot exceed 32 characters in length.
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * The scheduled delivery time. If this parameter is not set, the push is delivered immediately.
   * The scheduled delivery time cannot be later than 7 days from the current time.
   * 
   * The time must be in the ISO 8601 standard format and use UTC time. Format: YYYY-MM-DDThh:mm:ssZ.
   * >This parameter is not supported when Target is set to TBD (continuous push).
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * - **NOTICE**: Notification. Notifications are delivered to device endpoints through vendor channels such as APNs, Huawei, Xiaomi, and HarmonyOS, and are displayed directly in the notification bar of the device. When an Android device is online (the app process is alive), the notification is preferentially delivered through the Alibaba Cloud proprietary channel. The push SDK constructs and displays the notification to achieve better push performance and save vendor push message quotas in certain scenarios.
   * - **MESSAGE**: Message. Messages are delivered through the Alibaba Cloud proprietary online channel. They are not displayed in the notification bar by default. Instead, the app must receive and process them when the process is active, and the business logic determines whether to trigger specific business behaviors. When the device is offline (the app process is inactive), messages cannot be received in a timely manner. In this case, you can use the iOSRemind or AndroidRemind parameter described below to convert messages into notifications for delivery when the device is offline. Alternatively, you can set the StoreOffline parameter described below to allow the push system to save the message when the device is offline and automatically deliver it when the device comes online.
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @remarks
   * The specified delivery channels. Valid values:
   * 
   * - accs: Alibaba Cloud proprietary channel.
   * - huawei: Huawei channel.
   * - honor: Honor channel.
   * - xiaomi: Xiaomi channel.
   * - oppo: OPPO channel.
   * - vivo: vivo channel.
   * - meizu: Meizu channel.
   * - gcm: Google GCM channel (legacy HTTP).
   * - fcm: Google Firebase channel (HTTP v1 API).
   * - apns: APNs channel.
   * - harmony: HarmonyOS channel.
   * 
   * >- If this parameter is not configured, all channels can be used.
   * >- If this parameter is configured, only the specified channels are used.
   * >- If the configured channels conflict with the delivery policy (for example, iOS notifications can only be delivered through the APNs channel, but apns is not included in this parameter), the push is not delivered.
   * >- If gcm is configured, both Google GCM and FCM channels can be used. If fcm is configured, only the Google FCM channel can be used.
   * 
   * @example
   * accs,huawei,xiaomi
   */
  sendChannels?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  sendSpeed?: number;
  /**
   * @remarks
   * The delay time before the SMS message is triggered. Unit: seconds.
   * This parameter is required if you use the SMS linkage feature. We recommend that you set this parameter to 15 seconds or more, and the maximum value cannot exceed 3 days. This prevents duplicate SMS and push messages.
   * > When the SMS linkage feature is used, the ExpireTime parameter becomes invalid. The expiration time of the notification is calculated based on the SmsDelaySecs parameter. The expiration time is the current time plus the value of SmsDelaySecs.
   * 
   * @example
   * 15
   */
  smsDelaySecs?: number;
  /**
   * @remarks
   * The key-value pairs of the variables in the SMS template. Format: `key1=value1&key2=value2`.
   * 
   * @example
   * key1=value1
   */
  smsParams?: string;
  /**
   * @remarks
   * The condition that triggers the SMS message. Valid values:
   * - **0**: Triggered when the push message is not received.
   * - **1**: Triggered when the user does not open the push message.
   * 
   * @example
   * 0
   */
  smsSendPolicy?: number;
  /**
   * @remarks
   * The signature for the fallback SMS message.
   * 
   * @example
   * SMS signature
   */
  smsSignName?: string;
  /**
   * @remarks
   * The name of the SMS template used for fallback SMS messages. You can obtain this name on the SMS template management page. This is the name assigned by the system, not the name set by the developer.
   * 
   * @example
   * SMS template name
   */
  smsTemplateName?: string;
  /**
   * @remarks
   * Specifies whether to save offline messages and notifications. Default value: **false**.
   * 
   * If this parameter is set to true and the user is offline during the push, the message or notification is sent again when the user comes online within the expiration time specified by ExpireTime. The default value of ExpireTime is 72 hours. iOS notifications are delivered through the APNs channel and are not affected by StoreOffline.
   * 
   * @example
   * false
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The push target. Valid values:
   * 
   * - **DEVICE**: Push by device.
   * - **ACCOUNT**: Push by account.
   * - **ALIAS**: Push by alias.
   * - **TAG**: Push by tag.
   * - **ALL**: Push to all devices. The interval between two full pushes of the same DeviceType must be at least 1 second.
   *  > For a full push to iOS devices, the push is sent to devices that have been active within the last 24 months and have not been uninstalled. Once Apple Push Notification service (APNs) receives the push request and does not return an error message, the push is considered delivered. This may cause a surge in the number of active devices and incur high costs. Use this value with caution.
   * - **TBD**: Initialize a continuous push. The push target is specified by the subsequent [ContinuouslyPush](https://help.aliyun.com/document_detail/2249917.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * The target value, which is set based on the Target type. Separate multiple values with commas. If the number of values exceeds the limit, you must send the push in multiple batches.
   * 
   * - If Target is set to DEVICE, the value is in the format of `deviceid1,deviceid2`. A maximum of 1,000 devices are supported.
   * - If Target is set to ACCOUNT, the value is in the format of `account1,account2`. A maximum of 1,000 accounts are supported.
   * - If Target is set to ALIAS, the value is in the format of `alias1,alias2`. A maximum of 1,000 aliases are supported.
   * - If Target is set to TAG, single or multiple tags are supported. For more information about the format, see [Tag format](https://help.aliyun.com/document_detail/434847.html).
   * - If Target is set to ALL, the value is **ALL**, which is a fixed parameter combination for full pushes.
   * - If Target is set to TBD, the value is **TBD**, which is a fixed parameter combination for continuous pushes.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the notification or message during the push. Maximum length: 200 bytes.
   * 
   * This parameter is required for Android and HarmonyOS pushes. This parameter is optional for iOS notifications. If this parameter is specified:
   * 
   * - For iOS 10 and later, the title is displayed in the notification.
   * 
   * - For iOS 8.2 to iOS 9.x, the title replaces the app name in the notification.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to automatically truncate excessively long titles and content.
   * 
   * >This parameter applies only to vendor channels that explicitly limit the length of titles and content. It does not apply to channels such as APNs, Huawei, and Honor, which do not limit the length of titles and content but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * To send iOS notifications through the APNs center, you must specify the corresponding environment context. Valid values:
   * 
   * - **DEV**: Development environment. This value applies to apps that are directly installed and debugged by using Xcode.
   * - **PRODUCT**: Production environment. This value applies to apps distributed through the App Store, TestFlight, Ad Hoc, and enterprise distribution.
   * 
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @remarks
   * The badge number displayed in the upper-right corner of the iOS app icon.
   * 
   * > If iOSBadgeAutoIncrement is set to true, this parameter must be left empty.
   * 
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @remarks
   * Specifies whether to enable the automatic badge increment feature. Default value: false.
   * 
   * >When this parameter is set to true, iOSBadge must be left empty.
   * 
   * The automatic badge increment feature maintains the badge count for each device on the push server. To use this feature, you must use SDK version 1.9.5 or later and actively synchronize the badge number to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The extension property of the iOS notification.
   * 
   * For iOS 10 and later, you can specify the resource URL for rich media push notifications in this parameter: `{"attachment": "https://www.example.com/notification_pic.png"}`. This parameter must be passed in JSON map format. Otherwise, a parse error occurs.
   * 
   * @example
   * {"attachment": "https://www.example.com/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * The interruption level. Valid values:
   * 
   * - **passive**: The system adds the notification to the notification list without lighting up the screen or playing a sound.
   * - **active**: The system immediately displays the notification, lights up the screen, and can play a sound.
   * - **time-sensitive**: The system immediately presents the notification, lights up the screen, and can play a sound, but does not break through the system notification controls.
   * - **critical**: The system immediately displays the notification, lights up the screen, and plays a sound bypassing the silent switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * The JSON character string that contains the pass-through static parameter for Dynamic Island pushes. It includes static user-defined information, such as product IDs and order information.
   * 
   * > This parameter is required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * {"orderId": "12345", "product": "Shoes"}
   */
  iOSLiveActivityAttributes?: string;
  /**
   * @remarks
   * The type of the Live Activity to be started.
   * > This parameter is required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * OrderActivityAttributes
   */
  iOSLiveActivityAttributesType?: string;
  /**
   * @remarks
   * The pass-through dynamic parameter for Dynamic Island pushes. It includes real-time update information, such as price and inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds. The ended Live Activity is retained on the Lock Screen until the specified time. The maximum retention period is 4 hours.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityDismissalDate?: number;
  /**
   * @remarks
   * The event to start, update, or end a Live Activity. Valid values: start, update, and end.
   * 
   * @example
   * start
   */
  iOSLiveActivityEvent?: string;
  /**
   * @remarks
   * The Live Activity ID reported by the device to the user server. It is the unique identifier of the Live Activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds that marks the expiration time of the activity content.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * The sound of the iOS notification. Specify the name of the audio file stored in the app bundle or the sandbox Library/Sounds directory. For more information, see [How to set the notification sound for iOS pushes](https://help.aliyun.com/document_detail/48906.html).
   * 
   * If this parameter is set to an empty string (""), the notification is silent. If this parameter is not set, the default value is default, which indicates the system prompt sound.
   * 
   * @example
   * ""
   */
  iOSMusic?: string;
  /**
   * @remarks
   * The iOS notification processing extension flag (iOS 10 and later). If this parameter is set to true, notifications pushed by APNs can be processed by the extension before they are displayed. This parameter must be set to true for silent notifications.
   * 
   * @example
   * true
   */
  iOSMutableContent?: boolean;
  /**
   * @remarks
   * The category of the iOS notification (iOS 10 and later).
   * 
   * @example
   * ios
   */
  iOSNotificationCategory?: string;
  /**
   * @remarks
   * The collapse ID of the iOS notification. If a device receives messages with the same CollapseId, the messages are merged into one. If the device is offline and continuously receives messages with the same CollapseId, only one notification is displayed in the notification bar. This parameter is supported in iOS 10 and later.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * The thread ID used to group iOS remote notifications and mark the identifier of the collapsed group. This parameter is supported only in iOS 12.0 and later.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * The relevance score for summary highlighting. Valid values: a floating-point number in the range of [0,1\\].
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * Specifies whether to convert a message into a notification and deliver it once through the Apple APNs channel when the device is offline (that is, the persistent connection channel to the Mobile Push server is disconnected) during a message push.
   * 
   * > Converting offline messages into notifications applies only to the production environment.
   * 
   * @example
   * true
   */
  iOSRemind?: boolean;
  /**
   * @remarks
   * The iOS notification content used when an iOS message is converted into a notification. This parameter is valid only when iOSApnsEnv is set to PRODUCT and iOSRemind is set to true.
   * 
   * @example
   * iOS notification body
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
   * The subtitle of the iOS notification (iOS 10 and later).
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
      androidVivoTemplateId: 'AndroidVivoTemplateId',
      androidVivoTemplateParams: 'AndroidVivoTemplateParams',
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
      androidOppoPrivateContentParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      androidOppoPrivateMsgTemplateId: 'string',
      androidOppoPrivateTitleParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      androidPopupActivity: 'string',
      androidPopupBody: 'string',
      androidPopupTitle: 'string',
      androidRemind: 'boolean',
      androidRenderStyle: 'number',
      androidTargetUserType: 'number',
      androidVivoLiveMessage: 'string',
      androidVivoPushMode: 'number',
      androidVivoReceiptId: 'string',
      androidVivoTemplateId: 'string',
      androidVivoTemplateParams: 'string',
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

