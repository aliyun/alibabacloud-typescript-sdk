// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushRequest extends $dara.Model {
  /**
   * @remarks
   * The activity to be opened by the notification.
   * 
   * This parameter is passed only when AndroidOpenType is set to ACTIVITY. Example: com.alibaba.cloudpushdemo.bizactivity.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Specifies the increment value for the badge. This value is added to the existing badge number. Valid values: 1 to 99.
   * > This parameter is valid only for pushes through the Huawei or Honor vendor channel. If both AndroidBadgeAddNum and AndroidBadgeSetNum are specified, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * The fully qualified class name of the application entry activity for badge settings.
   * > This parameter is valid only for pushes through the Huawei or Honor vendor channel.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Specifies the fixed number for the badge. Valid values: 0 to 99.
   * > This parameter takes effect only for the Huawei and Honor channels when pushing through vendor channels. When pushing through the Alibaba Cloud proprietary channel, this parameter takes effect only on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * The body in long text mode. Maximum length: 1,000 bytes (1 Chinese character counts as 3 bytes). The actual limit is subject to the specific vendor channel.
   * 
   * Currently supported:
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
   * - Proprietary channel: Android SDK 3.6.0 and later
   * 
   * >If this parameter is not provided in long text mode, the first non-empty value from Body and AndroidPopupBody is used.
   * 
   * @example
   * Sample long text
   */
  androidBigBody?: string;
  /**
   * @remarks
   * The image URL in big picture mode. Currently supported: Proprietary channel (Android SDK 3.6.0 and later).
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * The title in long text mode. Maximum length: 200 bytes (1 Chinese character counts as 3 bytes).
   * 
   * - Currently, only the Honor channel and the Huawei channel (EMUI 11 and later) are supported.
   * 
   * - If this parameter is not provided in long text mode, the first non-empty value from Title and AndroidPopupTitle is used.
   * 
   * @example
   * Sample long title
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * The extended properties of the notification. This property does not take effect when the push type PushType is set to MESSAGE.
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
   * - **0**: formal notification (default)
   * - **1**: test notification
   * 
   * > Each app can send 1,000 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHonorTargetUserType?: number;
  /**
   * @remarks
   * The Huawei quick notification parameter. Valid values:
   * - **0**: sends a standard Huawei notification (default)
   * - **1**: sends a Huawei quick notification
   * 
   * @example
   * 1
   */
  androidHuaweiBusinessType?: number;
  /**
   * @remarks
   * The JSON string of the Huawei Android Live Notification data structure [LiveNotificationPayload](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/rest-live-0000001562939968#ZH-CN_TOPIC_0000001700850537__p195121620102511). For development integration, refer to the [Huawei Live Notification push guide](https://help.aliyun.com/document_detail/2983768.html).
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
   * > If the default receipt configuration on the Huawei push operations platform is set to the Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, configure the default receipt ID for the Huawei channel in the Alibaba Cloud EMAS shift Push console first.
   * 
   * @example
   * RCP4C123456
   */
  androidHuaweiReceiptId?: string;
  /**
   * @remarks
   * The notification type for the Huawei channel. Valid values:
   * - **0**: formal notification (default)
   * - **1**: test notification
   * 
   * > Each app can send 500 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 0
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * The URL of the right-side icon.
   * Currently supported:
   * - Huawei EMUI (applicable only in long text mode and inbox mode).
   * 
   * - Honor Magic UI (applicable only in long text mode).
   * 
   * - Proprietary channel: Android SDK 3.5.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * The body in inbox mode. The content must be a valid JSON array with no more than 5 elements. Currently supported:
   * 
   * - Huawei: EMUI 9 and later
   * - Honor: Magic UI 4.0 and later
   * - Xiaomi: MIUI 10 and later
   * - OPPO: ColorOS 5.0 and later
   * - Proprietary channel: Android SDK 3.6.0 and later
   * 
   * @example
   * ["First line","Second line"]
   */
  androidInboxBody?: string;
  /**
   * @remarks
   * The Meizu message type. Valid values:
   * - 0: public message. This is the default value.
   * - 1: private message.
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
   * Purpose 1: After you complete the [self-classification permission application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this parameter is used to identify the message type and determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718). It accelerates the delivery of specific types of messages. For valid values, refer to the [message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei push documentation, and fill in the "Cloud notification category value" or "Local notification category value" from the documentation table.
   * 
   * Purpose 2: After you [apply for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this parameter is used to identify high-priority pass-through scenarios. Valid values:
   * - VOIP: audio and video calls
   * - PLAY_VOICE: voice broadcast
   * 
   * > For messages whose "Cloud notification category value" is "Not applicable", the Alibaba Cloud proprietary channel is used. For messages whose "Local notification category value" is "Not applicable", the Huawei channel is used.
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
   * You must apply for the required permissions. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO message categorization: Communication and Service, and Content and Marketing.
   * 
   * Communication and Service (requires permission application):
   * - IM: instant chat, audio calls, and video calls
   * - ACCOUNT: individual account and asset changes
   * - DEVICE_REMINDER: personal device reminders
   * - ORDER: personal order and logistics status changes
   * - TODO: personal schedules and to-dos
   * - SUBSCRIPTION: personal subscribe
   * 
   * Content and Marketing:
   * - NEWS: news and information
   * - CONTENT: content recommendations
   * - MARKETING: platform activities
   * - SOCIAL: social updates
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
   * - 1: notification bar
   * - 2: notification bar, lock screen, ringtone, and vibrate (default notification level for Communication and Service messages)
   * - 16: notification bar, lock screen, ringtone, vibrate, and banner (requires permission application)
   * 
   * > When you use the AndroidMessageOppoNotifyLevel parameter, you must also pass the AndroidMessageOppoCategory parameter.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo message categorization: System messages and Operation messages.
   * System messages:
   * - IM: instant messages
   * - ACCOUNT: accounts and assets
   * - TODO: schedules and to-dos
   * - DEVICE_REMINDER: device information
   * - ORDER: orders and logistics
   * - SUBSCRIPTION: subscribe reminders
   * 
   * Operation messages:
   * - NEWS: news
   * - CONTENT: content recommendations
   * - MARKETING: operational activity
   * - SOCIAL: social updates
   * 
   * For more information, see [Categorization description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
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
   * The priority of the display position of the Android notification in the notification bar. Valid values: -2, -1, 0, 1, and 2.
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
   * The channel ID of the Android app, which must correspond to the channel ID in the app.
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
   * The message group. For messages in the same group, only the latest message and the total number of messages received in the group are displayed in the notification bar. All messages are not displayed and cannot be expanded. Currently supported:
   * 
   * - Huawei vendor channel
   * - Honor vendor channel
   * - Proprietary channel: Android SDK 3.9.1 and earlier
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
   * - **LOW**: information and marketing messages
   * - **NORMAL**: service and communication messages
   * 
   * You must apply for this permission on the Honor platform. [Application link](https://developer.honor.com/cn/docs/11002/guides/notification-class#%E8%87%AA%E5%88%86%E7%B1%BB%E6%9D%83%E7%9B%8A%E7%94%B3%E8%AF%B7).
   * 
   * @example
   * LOW
   */
  androidNotificationHonorChannel?: string;
  /**
   * @remarks
   * The importance parameter for Huawei notification message classification, which determines the notification behavior on user devices. Valid values:
   * 
   * - LOW: information and marketing messages
   * - NORMAL: service and communication messages
   * 
   * >- Currently, we recommend that you use AndroidMessageHuaweiCategory for notification classification in the Huawei channel instead of AndroidNotificationHuaweiChannel.
   * >- You must apply for this permission on the Huawei platform. [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * The unique identifier of each message when displayed in the notification. Different notification bar messages can have the same NotifyId, which allows new notification bar messages to overwrite old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * The message thread. Messages in the same thread are collapsed and displayed in the notification bar, and can be expanded. Notifications in different threads are displayed separately. Currently supported:
   * 
   * - Proprietary channel: Android SDK 3.9.2 and later
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * The vivo notification message classification. Valid values:
   * 
   * - 0: operation messages (default)
   * - 1: system messages
   * 
   * >- Currently, we recommend that you use AndroidMessageVivoCategory for notification classification in the vivo channel instead of AndroidNotificationVivoChannel.
   * >- You must apply for this permission on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * classification
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * The channel ID for Xiaomi notification types. You must apply for this permission on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * >- You can apply for a maximum of 8 channels for a single app in the Xiaomi channel. Plan ahead.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * The reminder method of the notification. Valid values:
   * 
   * - **VIBRATE**: vibrate (default)
   * - **SOUND**: sound
   * - **BOTH**: sound and vibrate
   * - **NONE**: silent
   * 
   * @example
   * BOTH
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * The action performed after the notification is clicked. Valid values:
   * 
   * - **APPLICATION**: opens the app (default)
   * - **ACTIVITY**: opens the specified Android activity
   * - **URL**: opens the specified URL
   * - **NONE**: no redirection
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
   * The JSON character string of the OPPO Fluid Cloud intent delete data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the AndroidOppoIntelligentIntent parameter is already specified. For development integration, see the References [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The JSON character string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development integration, see the References [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * - **0**: formal environment (default)
   * - **1**: test environment
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
   * If the message is successfully converted into a notification and pushed, the data displayed in the received notification is the values of the AndroidPopupTitle and AndroidPopupBody parameters set on the server. When the notification is clicked, the data obtained in the onSysNoticeOpened method of the auxiliary pop-up window is the values of the Title and Body parameters set on the server.
   * 
   * @example
   * true
   */
  androidRemind?: boolean;
  /**
   * @remarks
   * The notification style. Valid values:
   * - **0**: standard mode (default)
   * - **1**: long text mode (supported by Huawei, Honor, Xiaomi, OPPO, Meizu, and the proprietary channel)
   * - **2**: big picture mode (supported by the proprietary channel, but not supported by Xiaomi devices)
   * - **3**: inbox mode (supported by Huawei, Honor, Xiaomi, OPPO, and the proprietary channel)
   * > If a non-standard mode is used, this parameter must be provided.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: number;
  /**
   * @remarks
   * Settings for the vendor channel notification type. Valid values:
   * - **0**: formal notification (default)
   * - **1**: test notification
   * 
   * >- These parameter settings are equivalent to configuring the AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv parameters at the same time. The corresponding parameters for specific vendor channels can overwrite this parameter.
   * >- Currently supported: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 0
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * The JSON character string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development integration, see the References [vivo Atomic Island push guide](https://www.alibabacloud.com/help/en/document_detail/3030718.html).
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
   * - **0**: formal push (default)
   * - **1**: test push
   * 
   * > For test pushes, configure test devices in the vivo console in advance. You can search for "onReceiveRegId regId" in the device startup log to obtain the RegId of the test device.
   * 
   * @example
   * 0
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * The receipt ID for the vivo channel. You can view this receipt ID in the application information of the push service on the vivo Open Platform.
   * > If the default receipt configuration on the vivo Open Platform is set to the Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, configure the default receipt ID for the vivo channel in the Alibaba Cloud EMAS Mobile Push console first.
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
   * **[Deprecated]** This parameter is deprecated. Starting from August 2023, Xiaomi no longer officially supports dynamically setting small icons, right-side icons, and big pictures during pushes on new devices or systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Hyper Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, see the References [Xiaomi Hyper Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * The JSON character string of the Xiaomi Hyper Island data images [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development integration, see the References [Xiaomi Hyper Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * **[Deprecated]** This parameter is deprecated. Starting from August 2023, Xiaomi no longer officially supports dynamically setting small icons, right-side icons, and big pictures during pushes on new devices or systems.
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
   * The content of the notification or message for Android and HarmonyOS pushes, or the content of the iOS message or notification. The content size is limited. For more information, see [Product limits](https://help.aliyun.com/document_detail/434629.html).
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
   * The expiration time of offline messages or notifications. This parameter is used together with StoreOffline. Expired messages or notifications are not delivered. The maximum retention period is 72 hours. Default value: 72 hours.
   * 
   * The time must be in the ISO 8601 standard format and use UTC time. Format: YYYY-MM-DDThh:mm:ssZ. The expiration time must be later than the current time or the scheduled delivery time plus 3 seconds (ExpireTime > PushTime + 3 seconds). The 3-second buffer is used to compensate for errors caused by network and system latency. We recommend that you set the expiration time to at least 1 minute for single pushes and at least 10 minutes for full pushes and batch pushes.
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
   * The action to perform after the notification is clicked. Valid values:
   * - APP_HOME_PAGE: opens the application home page.
   * - APP_CUSTOM_PAGE: opens a custom page in the application.
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * The increment number for the HarmonyOS application badge. For more information, see [HarmonyOS badge addNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * The fixed number for the HarmonyOS application badge. For more information, see [HarmonyOS badge setNum field description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145). This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * The category of the notification message. After you apply for the notification message auto-categorization permission, this parameter is used as the identity for the message type. Different notification message types affect the display and reminder methods of the message. Valid values:
   * - IM: instant chat.
   * - VOIP: audio and video calls.
   * - SUBSCRIPTION: subscribe.
   * - TRAVEL: travel.
   * - HEALTH: health.
   * - WORK: work reminders.
   * - ACCOUNT: account updates.
   * - EXPRESS: orders and logistics.
   * - FINANCE: finance.
   * - DEVICE_REMINDER: device reminders.
   * - MAIL: emails.
   * - CUSTOMER_SERVICE: customer service messages.
   * - MARKETING: news, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational activity. This category only serves as the identity for the content and does not accelerate message send. These are collectively referred to as information and marketing messages.
   * - PLAY_VOICE: voice broadcast. This value can only be used for HarmonyOS extension notification messages.
   * For details, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * The extended properties of the notification. This property does not take effect when the push type PushType is set to MESSAGE.
   * 
   * This parameter must be passed in JSON map format. Otherwise, a parsing error occurs.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * The extra data for the extended notification message.</br>This parameter is valid when sending HarmonyOS extended notification messages.</br>This parameter is conceptually equivalent to the extraData field of HarmonyOS extended notification messages. For specific definitions, see [HarmonyOS ExtensionPayload description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).</br>This parameter is supported in HarmonyOS SDK 1.2.0 and later.
   * 
   * @example
   * Sample extra data
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * Specifies whether the message is a HarmonyOS extended notification message when PushType is set to NOTICE. Valid values:
   * - true: sends an extended notification message.
   * - false: sends a normal notification. This is the default value.
   * You must apply for permissions on the HarmonyOS side before you can send extended notification messages. For more information, see [Send extended notification messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) in the HarmonyOS documentation.</br>This parameter is supported in HarmonyOS SDK 1.2.0 and later.
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
   * The JSON string of the HarmonyOS Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development integration, refer to the [HarmonyOS Live View push guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * Specifies the type of the notification channel to use. This parameter is valid only when the Alibaba Cloud proprietary channel is online. Valid values:
   * - SOCIAL_COMMUNICATION: social communication.
   * - SERVICE_INFORMATION: service reminders.
   * - CONTENT_INFORMATION: content information.
   * - CUSTOMER_SERVICE: customer service messages. This type is used for customer service messages between users and merchants, and must be actively initiated by the user.
   * - OTHER_TYPES: other types.
   * For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the HarmonyOS official website.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * The unique identifier of each message when the notification is displayed. If this parameter is not specified, the push service automatically generates a unique identifier for each message. Different notification messages can share the same notifyId to allow new messages to overwrite old ones.
   * For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * The receipt ID for the HarmonyOS channel. You can view this receipt ID in the receipt parameter settings of the HarmonyOS push operations platform.
   * > If the default receipt configuration on the HarmonyOS push operations platform is set to the Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, configure the default receipt ID for the HarmonyOS channel in the Alibaba Cloud EMAS shift Push console first.
   * For details, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * Specifies whether to use the auxiliary pop-up window feature when the device is offline during a message push. Default value: false. This parameter takes effect only when PushType is set to MESSAGE.
   * If the message-to-notification push is successful, the notification displays the data specified by the HarmonyRemindTitle and HarmonyRemindBody parameters on the server.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * The HarmonyOS notification content used when a HarmonyOS message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * You have a new message. Please check it
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * The HarmonyOS notification title used when a HarmonyOS message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * New message
   */
  harmonyRemindTitle?: string;
  /**
   * @remarks
   * The style of the notification message. Valid values:
   * - NORMAL: normal notification. This is the default value.
   * - MULTI_LINE: multi-line text style.
   * 
   * @example
   * NORMAL
   */
  harmonyRenderStyle?: string;
  /**
   * @remarks
   * Specifies whether the message is a test message. Valid values:
   * - false: normal message. This is the default value.
   * - true: test message.
   * For more information, see [pushOptions.testMessage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * true
   */
  harmonyTestMessage?: boolean;
  /**
   * @remarks
   * The URI corresponding to the ability of the built-in page in the application.
   * >Notice: When HarmonyActionType is set to APP_CUSTOM_PAGE, you must specify at least one of the HarmonyUri and HarmonyAction fields. If multiple abilities exist, specify the action and URI for each ability. The action is prioritized when searching for the corresponding built-in page in the application.
   * For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * An idempotent parameter used to prevent duplicate pushes on the server caused by retries from the API client. If the same IdempotentToken is used for calls within 15 minutes, only one push is performed, and subsequent calls return the result of the first successful push.
   * > 
   * > - The parameter format is a standard 36-character UUID (8-4-4-4-12). Each valid character is a hexadecimal digit in the range of 0-9 or a-f, and it is case-insensitive.
   * > - This parameter is only used to prevent duplicate pushes caused by retries. It cannot prevent duplicate pushes caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * The custom identifier of the push task. If JobKey is not empty, this field is included in the receipt log. For more information about receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * >Format requirements: Only letters, digits, underscores (_), and hyphens (-) are allowed. The length cannot exceed 32 characters.
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * The scheduled delivery time. If this parameter is not set, the push is delivered immediately.
   * The scheduled delivery time can be at most 7 days later than the current time.
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
   * - **NOTICE**: notification. Notifications are delivered to device endpoints through vendor channels such as APNs, Huawei, Xiaomi, and HarmonyOS, and are directly displayed in the notification bar of the device. When an Android device is online (the app process is alive), the notification is preferentially delivered through the Alibaba Cloud proprietary channel. The push SDK constructs and displays the notification to achieve better push performance and save vendor push message quotas in certain scenarios.
   * - **MESSAGE**: message. Messages are delivered through the Alibaba Cloud proprietary online channel. They are not displayed in the notification bar by default. Instead, the app must receive and process them when the process is active, and the business logic determines whether to trigger specific business behaviors. When the device is offline (the app process is inactive), messages cannot be received in a timely manner. In this case, you can use the iOSRemind or AndroidRemind parameter described below to convert messages into notifications for delivery when the device is offline. Alternatively, you can set the StoreOffline parameter described below to allow the push system to save the message when the device is offline and automatically deliver it when the device comes online.
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
   * >- If this parameter is not configured, all channels can be used.
   * >- If this parameter is configured, only the specified channels are strictly used.
   * >- If the configured channels conflict with the delivery policy (for example, iOS notifications are only delivered through the APNs channel, but apns is not included in this parameter), the push is not delivered.
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
   * This parameter is required if you use the SMS linkage feature. Set this parameter to 15 seconds or more, up to a maximum of 3 days, to prevent duplicate SMS messages and push notifications.
   * > When the SMS linkage feature is used, the ExpireTime parameter becomes invalid. The expiration time of the notification is calculated based on the SmsDelaySecs parameter, which is the current time plus the value of SmsDelaySecs.
   * 
   * @example
   * 15
   */
  smsDelaySecs?: number;
  /**
   * @remarks
   * The variable name-value pairs for the SMS template. Format: `key1=value1&key2=value2`.
   * 
   * @example
   * key1=value1
   */
  smsParams?: string;
  /**
   * @remarks
   * The condition that triggers the SMS message. Valid values:
   * - **0**: triggers the SMS message when the push notification is not received.
   * - **1**: triggers the SMS message when the user does not open the notification.
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
   * The name of the SMS template used for fallback SMS messages. You can obtain this name from the SMS template management page. This is the name assigned by the system, not the name set by the developer.
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
   * - **DEVICE**: pushes by device.
   * - **ACCOUNT**: pushes by account.
   * - **ALIAS**: pushes by alias.
   * - **TAG**: pushes by tag.
   * - **ALL**: pushes to all devices. The interval between two full pushes of the same DeviceType must be at least 1 second.
   *  > A full push to iOS devices is sent to devices that have been active within the last 24 months and have not been uninstalled. Once Apple Push Notification service (APNs) receives the push request and does not return an error message, the push is considered delivered. This may cause a surge in the number of active devices and incur high costs. Use this value with caution.
   * - **TBD**: initializes a continuous push. The push target is specified by the subsequent [ContinuouslyPush](https://help.aliyun.com/document_detail/2249917.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  target?: string;
  /**
   * @remarks
   * The target value, which is set based on the Target type. Separate multiple values with commas (,). If the number of values exceeds the limit, you must send the push in multiple batches.
   * 
   * - If Target is set to DEVICE, the value is in the format of deviceid1,deviceid2. A maximum of 1,000 devices are supported.
   * - If Target is set to ACCOUNT, the value is in the format of account1,account2. A maximum of 1,000 accounts are supported.
   * - If Target is set to ALIAS, the value is in the format of alias1,alias2. A maximum of 1,000 aliases are supported.
   * - If Target is set to TAG, single-tag and multi-tag pushes are supported. For more information about the format, see [Tag format](https://help.aliyun.com/document_detail/434847.html).
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
   * - For iOS 8.2 to iOS 10 (excluding iOS 10), the title replaces the app name in the notification.
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
   * - **DEV**: the development environment, which applies to apps directly installed and debugged by using Xcode.
   * - **PRODUCT**: the production environment, which applies to apps distributed through the App Store, TestFlight, Ad Hoc, and enterprise distribution.
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
   * For iOS 10 and later, you can specify the resource URL for a rich media push notification in this parameter: `{"attachment": "https://www.example.com/notification_pic.png"}`. This parameter must be passed in JSON map format. Otherwise, a parse error occurs.
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
   * - **active**: The system immediately displays the notification, lights up the screen, and may play a sound.
   * - **time-sensitive**: The system immediately presents the notification, lights up the screen, and may play a sound, but does not break through the system notification controls.
   * - **critical**: The system immediately displays the notification, lights up the screen, and plays a sound bypassing the silent switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * The JSON character string that contains the static parameters for Dynamic Island pushes. It includes static user-defined information, such as product IDs and order information.
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
   * The dynamic parameters for Dynamic Island pushes. It includes real-time update information, such as price and inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds. The ended Live Activity remains on the Lock Screen until this specified time. The maximum retention period is 4 hours.
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
   * The sound of the iOS notification. Specify the name of the audio file stored in the app bundle or the Library/Sounds directory of the sandbox. For more information, see [How to set the notification sound for iOS pushes](https://help.aliyun.com/document_detail/48906.html).
   * 
   * If this parameter is set to an empty string (""), the notification is silent. If this parameter is not set, the default value "default" is used, which indicates the system prompt sound.
   * 
   * @example
   * ""
   */
  iOSMusic?: string;
  /**
   * @remarks
   * The iOS notification processing extension flag (iOS 10 and later). If this parameter is set to true, the notification pushed by APNs can be processed by the extension before it is displayed. For silent notifications, this parameter must be set to true.
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
   * The collapse ID. If a device receives messages with the same CollapseId, the messages are merged into one. If the device is offline and consecutive messages with the same CollapseId are sent, only one notification is displayed in the notification bar. This parameter is supported in iOS 10 and later.
   * 
   * @example
   * ZD2011
   */
  iOSNotificationCollapseId?: string;
  /**
   * @remarks
   * The thread ID used to group iOS remote notifications and mark the identifier of the collapsed group.
   * This parameter is supported only in iOS 12.0 and later.
   * 
   * @example
   * abc
   */
  iOSNotificationThreadId?: string;
  /**
   * @remarks
   * The relevance score for summary highlighting. Valid values: floating-point numbers in the range of [0,1\\].
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * Specifies whether to convert a message into a notification and deliver it through the APNs channel when the device is offline (the persistent connection channel to the Mobile Push server is disconnected) during a message push.
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

