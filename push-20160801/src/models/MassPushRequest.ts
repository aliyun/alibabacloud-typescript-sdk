// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MassPushRequestPushTask extends $dara.Model {
  /**
   * @remarks
   * The activity to be opened by the notification.
   * This parameter is passed only when PushTask.N.AndroidOpenType is set to ACTIVITY. Example: `com.alibaba.cloudpushdemo.bizactivity`.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidActivity?: string;
  /**
   * @remarks
   * Specifies the increment value for the badge. The value is added to the existing badge number. Valid values: 1 to 99.
   * > This parameter is valid only for push notifications sent through Huawei or Honor vendor channels. If both AndroidBadgeAddNum and AndroidBadgeSetNum are specified, AndroidBadgeSetNum takes precedence.
   * 
   * @example
   * 1
   */
  androidBadgeAddNum?: number;
  /**
   * @remarks
   * The fully qualified class name of the entry Activity for badge settings.
   * > This parameter is valid only for push notifications sent through Huawei or Honor vendor channels.
   * 
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  androidBadgeClass?: string;
  /**
   * @remarks
   * Specifies the fixed number for the badge. Valid values: 0 to 99.
   * > This parameter takes effect only on Huawei and Honor channels when push notifications are sent through vendor channels. When push notifications are sent through the Alibaba Cloud proprietary channel, this parameter takes effect only on Huawei, Honor, and vivo devices.
   * 
   * @example
   * 5
   */
  androidBadgeSetNum?: number;
  /**
   * @remarks
   * The body in long text mode. Maximum length: 1,000 bytes (one Chinese character counts as 3 bytes). The actual limit is subject to the specific vendor channel during sending.
   * Currently supported by:
   * - Huawei: EMUI 10 and later
   * - Honor: Magic UI 4.0 and later
   * - Xiaomi: MIUI 10 and later
   * - OPPO: ColorOS 5.0 and later
   * - Meizu: Flyme
   * - Proprietary channel: Android SDK 3.6.0 and later
   * If this parameter is not provided in long text mode, the first non-empty value from Body and AndroidPopupBody is used.
   * 
   * @example
   * Sample long text
   */
  androidBigBody?: string;
  /**
   * @remarks
   * The image URL in big picture mode. Currently supported by the proprietary channel with Android SDK 3.6.0 and later.
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidBigPictureUrl?: string;
  /**
   * @remarks
   * The title in long text mode. Maximum length: 200 bytes (one Chinese character counts as 3 bytes).
   * - Currently, this parameter is supported only by the Honor channel and the Huawei channel with EMUI 11 and later.
   * - If this parameter is not provided in long text mode, the first non-empty value from Title and AndroidPopupTitle is used.
   * 
   * @example
   * Sample long title
   */
  androidBigTitle?: string;
  /**
   * @remarks
   * The extended properties of the notification. This property does not take effect when the push type PushType is set to MESSAGE.
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
   * > Each application can send 1,000 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 1
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
   * The receipt ID for the Huawei channel. You can view this receipt ID in the receipt parameter settings of the Huawei channel push operations platform.
   * > If the default receipt configuration on the Huawei channel push operations platform is set to Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, we recommend that you configure the default receipt ID for the Huawei channel in the Alibaba Cloud EMAS shift Push console first.
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
   * > Each application can send 500 test notifications per day, which is not subject to the daily push limit per device.
   * 
   * @example
   * 1
   */
  androidHuaweiTargetUserType?: number;
  /**
   * @remarks
   * The URL of the right-side icon. Currently supported by:
   * - Huawei EMUI (applicable only in long text mode and inbox mode)
   * - Honor Magic UI (applicable only in long text mode)
   * - Proprietary channel: Android SDK 3.5.0 and later
   * 
   * @example
   * https://imag.example.com/image.png
   */
  androidImageUrl?: string;
  /**
   * @remarks
   * The body in inbox mode. The content must be a valid JSON array with no more than five elements. Currently supported by:
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
   * Specifies the Meizu message type. Valid values:
   * - 0: Public message. This is the default value.
   * - 1: Private message.
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
   * Purpose 1: After you complete the [self-classification permission application](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835?#section3410731125514), this parameter is used to identify the message type, determine the [message reminder method](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#ZH-CN_TOPIC_0000001149358835__p3850133955718), and accelerate the sending of specific types of messages. For valid values, refer to the [Message classification standards](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section1076611477914) in the official Huawei push documentation, and fill in the "Cloud notification category value" or "Local notification category value" in the document table.
   * Purpose 2: After you [apply for special permissions](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509), this parameter is used to identify high-priority pass-through scenarios. Valid values:
   * - VOIP: audio and video calls
   * - PLAY_VOICE: voice broadcast
   * 
   * > If the "Cloud notification category value" is "Not applicable", the message is sent through the Alibaba Cloud proprietary channel. If the "Local notification category value" is "Not applicable", the message is sent through the Huawei channel.
   * 
   * @example
   * SUBSCRIPTION
   */
  androidMessageHuaweiCategory?: string;
  /**
   * @remarks
   * The delivery priority for Huawei channel notifications. Valid values:
   * - HIGH
   * - NORMAL
   * 
   * You must apply for this permission. For more information, see [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050042183#section037425218509).
   * 
   * @example
   * HIGH
   */
  androidMessageHuaweiUrgency?: string;
  /**
   * @remarks
   * OPPO message categorization includes two categories: Communication and Service, and Content and Marketing.
   * Communication and Service (requires permission application):
   * - IM: instant chat, audio, and video calls
   * - ACCOUNT: individual account and asset changes
   * - DEVICE_REMINDER: personal device reminders
   * - ORDER: personal order and logistics status changes
   * - TODO: personal schedules and to-do lists
   * - SUBSCRIPTION: individual subscribe
   * 
   * Content and Marketing:
   * - NEWS: news and information
   * - CONTENT: content recommendations
   * - MARKETING: platform activities
   * - SOCIAL: social updates
   * 
   * For more information, see [OPUSH message categorization rules](https://open.oppomobile.com/new/developmentDoc/info?id=13189).
   * 
   * @example
   * MARKETING
   */
  androidMessageOppoCategory?: string;
  /**
   * @remarks
   * The notification bar message reminder level for the OPPO channel. Valid values:
   * - 1: notification bar
   * - 2: notification bar, lock screen, ringtone, and vibration (default notification level for communication and service messages)
   * - 16: notification bar, lock screen, ringtone, vibration, and banner (requires permission application)
   * 
   * > When you use the AndroidMessageOppoNotifyLevel parameter, you must also pass the AndroidMessageOppoCategory parameter.
   * 
   * @example
   * 1
   */
  androidMessageOppoNotifyLevel?: number;
  /**
   * @remarks
   * vivo message categorization includes two categories: System Messages and Operational Messages. 
   * System Messages:
   * - IM: instant messages
   * - ACCOUNT: accounts and assets
   * - TODO: schedules and to-do lists
   * - DEVICE_REMINDER: device information
   * - ORDER: orders and logistics
   * - SUBSCRIPTION: subscribe reminders
   * 
   * Operational Messages:
   * - NEWS: news
   * - CONTENT: content recommendations
   * - MARKETING: operational activity
   * - SOCIAL: social updates
   * 
   * > For more information, see [Categorization description](https://dev.vivo.com.cn/documentCenter/doc/359#s-ef3qugc3).
   * 
   * @example
   * TODO
   */
  androidMessageVivoCategory?: string;
  /**
   * @remarks
   * Specifies the notification sound for the Huawei vendor channel. Specify the name of the audio file stored in the app/src/main/res/raw/ directory of the client project. Do not include the file extension.
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
   * The channel ID of the Android application, which must correspond to the channel ID in the application.
   * - For more information about the NotificationChannel parameter, see [FAQ: Notifications are not received on devices running Android 8.0 and later](https://help.aliyun.com/document_detail/67398.html).
   * - Because the channel_id of the OPPO private message channel is the same as the channel ID of the application, this value is used as the channel_id during OPPO channel pushes.
   * - This value is used as the channel_id during Huawei, FCM, and Alibaba Cloud proprietary channel pushes.
   * 
   * @example
   * 1
   */
  androidNotificationChannel?: string;
  /**
   * @remarks
   * The message group. For messages in the same group, only the latest message and the total number of messages received by the group are displayed in the notification bar. All messages are not displayed and cannot be expanded. Currently supported by:
   * - Huawei vendor channel
   * - Honor vendor channel
   * - Proprietary channel with Android SDK 3.9.1 and earlier
   * 
   * > The proprietary channel with Android SDK 3.9.2 and later no longer supports this parameter.
   * 
   * @example
   * group-1
   */
  androidNotificationGroup?: string;
  /**
   * @remarks
   * The importance parameter for Honor notification message classification, which determines the notification behavior on user devices. Valid values:
   * - LOW: information and marketing messages
   * - NORMAL: service and communication messages
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
   * - LOW: information and marketing messages
   * - NORMAL: service and communication messages
   * 
   * > - For the Huawei channel, we recommend that you use AndroidMessageHuaweiCategory for notification classification instead of AndroidNotificationHuaweiChannel.
   * > - You must apply for this permission on the Huawei platform. [Application link](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/message-classification-0000001149358835#section893184112272).
   * 
   * @example
   * LOW
   */
  androidNotificationHuaweiChannel?: string;
  /**
   * @remarks
   * The unique identifier for each message when displayed in the notification bar. Different notification bar messages can use the same NotifyId to allow new notification bar messages to overwrite old ones.
   * 
   * @example
   * 100001
   */
  androidNotificationNotifyId?: number;
  /**
   * @remarks
   * The message thread ID. Messages in the same group are collapsed and can be expanded in the notification bar. Notifications in different groups are displayed separately. Currently supported by:
   * - Proprietary channel with Android SDK 3.9.2 and later
   * 
   * @example
   * thread-1
   */
  androidNotificationThreadId?: string;
  /**
   * @remarks
   * The vivo notification message classification. Valid values:
   * - 0: operational messages (default)
   * - 1: system messages
   * 
   * > - For the vivo channel, we recommend that you use AndroidMessageVivoCategory for notification classification instead of AndroidNotificationVivoChannel.
   * > - You must apply for this permission on the vivo platform. For more information, see [Application link](https://dev.vivo.com.cn/documentCenter/doc/359).
   * 
   * @example
   * 0
   */
  androidNotificationVivoChannel?: string;
  /**
   * @remarks
   * The channel ID for the Xiaomi notification type. You must apply for this on the Xiaomi platform. For more information, see [Application link](https://dev.mi.com/console/doc/detail?pId=2422#_4).
   * > - A single application can apply for a maximum of eight channels on the Xiaomi channel. Plan ahead.
   * 
   * @example
   * michannel
   */
  androidNotificationXiaomiChannel?: string;
  /**
   * @remarks
   * The reminder method for the notification. Valid values:
   * - **VIBRATE**: vibration (default)
   * - **SOUND**: sound
   * - **BOTH**: sound and vibration
   * - **NONE**: silent
   * 
   * @example
   * VIBRATE
   */
  androidNotifyType?: string;
  /**
   * @remarks
   * The action after the notification is clicked. Valid values:
   * - APPLICATION: opens the application (default)
   * - ACTIVITY: opens the specified Android activity of the application
   * - URL: opens a URL
   * - NONE: performs no redirection
   * 
   * @example
   * APPLICATION
   */
  androidOpenType?: string;
  /**
   * @remarks
   * The URL to be opened after the Android device receives the push. This parameter is passed only when PushTask.N.AndroidOpenType is set to URL.
   * 
   * @example
   * https://www.example.com
   */
  androidOpenUrl?: string;
  /**
   * @remarks
   * The JSON character string of the OPPO Fluid Cloud intent delete data structure [data](https://open.oppomobile.com/documentation/page/info?id=13578). This parameter is invalid if the AndroidOppoIntelligentIntent parameter is already specified. For development and integration, refer to References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * The JSON character string of the OPPO Fluid Cloud intent sharing data structure [IntelligentIntent](https://open.oppomobile.com/documentation/page/info?id=13565). For development and integration, refer to References: [OPPO Fluid Cloud push guide](https://help.aliyun.com/document_detail/2997310.html).
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
   * > For the OPPO Fluid Cloud test environment, you must build it on the client side by referring to [Environment setup](https://open.oppomobile.com/documentation/page/info?id=13590).
   * 
   * @example
   * 1
   */
  androidOppoIntentEnv?: number;
  /**
   * @remarks
   * **[Deprecated]** The content parameter for the OPPO private message template.
   * 
   * @deprecated
   */
  androidOppoPrivateContentParameters?: { [key: string]: string };
  /**
   * @remarks
   * **[Deprecated]** The OPPO private message template ID.
   * >Warning: The OPPO private message template feature is no longer supported by MassPush. To use this feature, call the Push, PushV2, or MassPushV2 operation.</warning>
   * 
   * @example
   * 687557242b1634hzef3zd5013
   * 
   * @deprecated
   */
  androidOppoPrivateMsgTemplateId?: string;
  /**
   * @remarks
   * **[Deprecated]** The title parameter for the OPPO private message template.
   * 
   * @deprecated
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
   * The body content in auxiliary pop-up window mode. This parameter is required when the AndroidPopupActivity parameter is not empty.
   * Maximum length: 200 characters. Both Chinese and English characters count as one character.
   * If a vendor channel is used, the body must also meet the limits of the vendor channel. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupBody?: string;
  /**
   * @remarks
   * The title content in auxiliary pop-up window mode. This parameter is required when the AndroidPopupActivity parameter is not empty.
   * Maximum length: 50 characters. Both Chinese and English characters count as one character.
   * If a vendor channel is used, the title must also meet the limits of the vendor channel. For more information, see [Limits on auxiliary channel pushes for Android](https://help.aliyun.com/document_detail/165253.html).
   * 
   * @example
   * hello
   */
  androidPopupTitle?: string;
  /**
   * @remarks
   * Specifies whether to use the auxiliary pop-up window feature when the device is offline and the push type is message. Default value: false. This parameter takes effect only when PushType is set to MESSAGE.
   * If the message-to-notification push is successful, the data displayed in the received notification is the value of the AndroidPopupTitle and AndroidPopupBody parameters set on the server. When the notification is clicked, the data obtained in the onSysNoticeOpened method of the auxiliary pop-up window is the value of the Title and Body parameters set on the server.
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
   * > This parameter must be provided if a non-standard mode is used.
   * 
   * @example
   * 1
   */
  androidRenderStyle?: string;
  /**
   * @remarks
   * Settings for the notification type of vendor channels. Valid values:
   * - **0**: formal notification (default)
   * - **1**: test notification
   * 
   * > - After the parameter settings, it is equivalent to configuring the AndroidHuaweiTargetUserType, AndroidHonorTargetUserType, AndroidVivoPushMode, and AndroidOppoIntentEnv parameters at the same time. The corresponding parameters for specific vendor channels can overwrite this parameter.
   * > - Currently supported by: Huawei channel, Honor channel, vivo channel, and OPPO Fluid Cloud.
   * 
   * @example
   * 1
   */
  androidTargetUserType?: number;
  /**
   * @remarks
   * The JSON character string of the vivo Atomic Island data structure [liveMessage](https://dev.vivo.com.cn/documentCenter/doc/896#s-fdagzbd4). For development and integration, refer to References: [vivo Atomic Island push guide](https://www.alibabacloud.com/help/en/document_detail/3030718.html).
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
   * > For test pushes, configure the test devices in the vivo console in advance. You can obtain the RegId of the test device by searching for "onReceiveRegId regId" in the device startup log.
   * 
   * @example
   * 1
   */
  androidVivoPushMode?: number;
  /**
   * @remarks
   * The receipt ID for the vivo channel. You can view this receipt ID in the application information of the push service on the vivo Open Platform.
   * > If the default receipt configuration on the vivo Open Platform is set to Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, we recommend that you configure the default receipt ID for the vivo channel in the Alibaba Cloud EMAS Mobile Push console first.
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
   * **[Deprecated]** Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big pictures during pushes on new devices and systems.
   * 
   * @example
   * https://f6.market.xiaomi.com/download/MiPass/aaa/bbb.png
   * 
   * @deprecated
   */
  androidXiaomiBigPictureUrl?: string;
  /**
   * @remarks
   * The JSON character string of the Xiaomi Super Island data structure [miui.focus.param](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, refer to References: [Xiaomi Super Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * The JSON character string of the Xiaomi Super Island data images [miui.focus.pic_xxx](https://dev.mi.com/xiaomihyperos/documentation/detail?pId=2131). For development and integration, refer to References: [Xiaomi Super Island push guide](https://www.alibabacloud.com/help/en/document_detail/3037956.html).
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
   * **[Deprecated]** Starting from August 2023, Xiaomi officially no longer supports dynamically setting small icons, right-side icons, and big pictures during pushes on new devices and systems.
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
   * The content of the notification or message for Android and HarmonyOS pushes, or the content of the iOS message or notification. The content size of the pushed content is limited. For more information, see [Limits](https://help.aliyun.com/document_detail/92832.html).
   * 
   * @example
   * hello
   */
  body?: string;
  /**
   * @remarks
   * The device type. Valid values:
   * - HARMONY: HarmonyOS devices
   * - iOS: iOS devices
   * - ANDROID: Android devices
   * - ALL: If the AppKey belongs to a legacy dual-platform application, this value indicates that the message is pushed to both Android and iOS devices. If the AppKey belongs to a new single-platform application, this value has the same effect as specifying the device type corresponding to the application type.
   * 
   * This parameter is required.
   * 
   * @example
   * HARMONY
   */
  deviceType?: string;
  /**
   * @remarks
   * The expiration time of offline messages or notifications. This parameter is used together with StoreOffline. Expired messages or notifications are not sent. The maximum retention period is 72 hours. Default value: 72 hours.
   * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC. The expiration time cannot be earlier than the current time or the scheduled sending time plus 3 seconds (`ExpireTime > PushTime + 3 seconds`). The 3-second buffer is used to offset errors caused by network and system latency. We recommend that you set the expiration time to at least 1 minute for single pushes, and at least 10 minutes for full pushes and batch pushes.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Specifies the action corresponding to the ability of the built-in page in the app.
   * >Notice: When HarmonyActionType is set to APP_CUSTOM_PAGE, you must specify at least one of the HarmonyUri and HarmonyAction fields.
   * For more information, see [ClickAction.action](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * com.example.action
   */
  harmonyAction?: string;
  /**
   * @remarks
   * Specifies the action to perform after the notification is clicked. Valid values:
   * - APP_HOME_PAGE: Open the app home page.
   * - APP_CUSTOM_PAGE: Open a custom page in the app.
   * 
   * @example
   * APP_HOME_PAGE
   */
  harmonyActionType?: string;
  /**
   * @remarks
   * Specifies the increment number for the Harmony app badge. For more information, see [Description of the addNum field for Harmony badges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * This parameter is supported in Harmony SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeAddNum?: number;
  /**
   * @remarks
   * Specifies the fixed number for the Harmony app badge. For more information, see [Description of the setNum field for Harmony badges](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section266310382145).</br>
   * This parameter is supported in Harmony SDK 1.2.0 and later.
   * 
   * @example
   * 1
   */
  harmonyBadgeSetNum?: number;
  /**
   * @remarks
   * Specifies the notification message category. After you apply for the notification message auto-categorization privilege, this parameter is used for the identity of the message type. Different notification message types affect the display and reminder methods of messages. Valid values:
   * 
   * - IM: Instant chat.
   * - VOIP: Audio and video calls.
   * - SUBSCRIPTION: Subscribe.
   * - TRAVEL: Travel.
   * - HEALTH: Health.
   * - WORK: Work reminders.
   * - ACCOUNT: Account updates.
   * - EXPRESS: Orders and logistics.
   * - FINANCE: Finance.
   * - DEVICE_REMINDER: Device reminders.
   * - MAIL: Emails.
   * - CUSTOMER_SERVICE: Customer service messages.
   * - MARKETING: News, content recommendations, social updates, product promotions, financial updates, lifestyle information, surveys, feature recommendations, and operational activity. This category is only for the identity of the content and does not accelerate message send. These are collectively referred to as information and marketing messages.
   * - PLAY_VOICE: Voice broadcast. This value can only be used for Harmony notification extension messages.
   * 
   * For details, see [Notification.category](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * IM
   */
  harmonyCategory?: string;
  /**
   * @remarks
   * The extended properties of the notification. This property does not take effect when the push type PushType is set to MESSAGE.
   * This parameter must be passed in JSON map format. Otherwise, a parsing error occurs.
   * 
   * @example
   * {"key1":"value1","api_name":"PushNoticeToAndroidRequest"}
   */
  harmonyExtParameters?: string;
  /**
   * @remarks
   * Specifies the extra data for the notification extension message.</br>
   * This parameter is valid when you send a Harmony notification extension message.</br>
   * Conceptually, this parameter is equivalent to the extraData field of the Harmony notification extension message. For specific definitions, see [Harmony ExtensionPayload description](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section161192514234).</br>
   * This parameter is supported in Harmony SDK 1.2.0 and later.
   * 
   * @example
   * Sample extra data
   */
  harmonyExtensionExtraData?: string;
  /**
   * @remarks
   * Specifies whether the message is a Harmony notification extension message when PushType is set to NOTICE. Valid values:
   * - true: Send a notification extension message.
   * - false: Send a normal notification. This is the default value.
   * You must apply for permissions on the HarmonyOS side before you can send notification extension messages. For more information, see [Send notification extension messages](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/push-send-extend-noti-V5) in the HarmonyOS documentation.</br>
   * This parameter is supported in Harmony SDK 1.2.0 and later.
   * 
   * @example
   * true
   */
  harmonyExtensionPush?: boolean;
  /**
   * @remarks
   * Specifies the URL of the large icon on the right side of the notification. The URL must use the HTTPS protocol.
   * > Supported image formats include PNG, JPG, JPEG, HEIF, GIF, and BMP. The product of the image width and height must be less than 25,000 pixels.
   * For more information, see [Notification.image](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * https://example.com/xxx.png
   */
  harmonyImageUrl?: string;
  /**
   * @remarks
   * Specifies the content for the multi-line text style. This field is required when HarmonyRenderStyle is set to MULTI_LINE. A maximum of three content items are supported.
   * 
   * @example
   * ["1.content1","2.content2","3.content3"]
   */
  harmonyInboxContent?: string;
  /**
   * @remarks
   * The JSON string of the Harmony Live View data structure [LiveViewPayload](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V13/push-scenariozed-api-request-param-V13#section66881469306). For development and integration, refer to the [HarmonyOS Live View push guide](https://help.aliyun.com/document_detail/2982112.html).
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
   * Specifies the notification channel of a specified type. This parameter is valid only when the Alibaba Cloud proprietary channel is online. Valid values:
   * - SOCIAL_COMMUNICATION: Social communication.
   * - SERVICE_INFORMATION: Service reminders.
   * - CONTENT_INFORMATION: Content information.
   * - CUSTOMER_SERVICE: Customer service messages. This type is used for customer service messages between users and merchants, and must be actively initiated by the user.
   * - OTHER_TYPES: Other types.
   * For more information, see [SlotType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/js-apis-notificationmanager-V5#slottype) on the HarmonyOS official website.
   * 
   * @example
   * SOCIAL_COMMUNICATION
   */
  harmonyNotificationSlotType?: string;
  /**
   * @remarks
   * Specifies the unique identifier for each message when the notification is displayed. If this parameter is not specified, the push service automatically generates a unique identifier for each message. Different notification messages can have the same notifyId to allow new messages to overwrite old ones.
   * For more information, see [Notification.notifyId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section17371529101117) on the HarmonyOS official website.
   * 
   * @example
   * 0
   */
  harmonyNotifyId?: number;
  /**
   * @remarks
   * Specifies the receipt ID for the Harmony channel. You can view this receipt ID in the receipt parameter settings on the Harmony channel push operations platform.
   * > If the default receipt configured on the Harmony channel push operations platform is the Alibaba Cloud receipt, you do not need to provide this parameter. Otherwise, we recommend that you configure the default receipt ID for the Harmony channel in the Alibaba Cloud EMAS shift Push console first.
   * For details, see [pushOptions.receiptId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section418321011212) on the HarmonyOS official website.
   * 
   * @example
   * RCPB***DFD5
   */
  harmonyReceiptId?: string;
  /**
   * @remarks
   * Specifies whether to use the auxiliary pop-up window feature when a push notification of the message type is sent to an offline device. Default value: false. This parameter takes effect only when PushType is set to MESSAGE.
   * If the message is successfully converted to a notification and pushed, the received notification displays the data specified by the HarmonyRemindTitle and HarmonyRemindBody parameters on the server.
   * 
   * @example
   * false
   */
  harmonyRemind?: boolean;
  /**
   * @remarks
   * Specifies the Harmony notification content used when a Harmony message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * You have a new message. Please check it
   */
  harmonyRemindBody?: string;
  /**
   * @remarks
   * Specifies the Harmony notification title used when a Harmony message is converted to a notification. This parameter is valid only when HarmonyRemind is set to true.
   * 
   * @example
   * New message
   */
  harmonyRemindTitle?: string;
  /**
   * @remarks
   * Specifies the notification message style. Valid values:
   * - NORMAL: Normal notification. This is the default value.
   * - MULTI_LINE: Multi-line text style.
   * 
   * @example
   * NORMAL
   */
  harmonyRenderStyle?: string;
  /**
   * @remarks
   * Specifies the test message identifier. Valid values:
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
   * Specifies the URI corresponding to the ability of the built-in page in the app.
   * >Notice: When HarmonyActionType is set to APP_CUSTOM_PAGE, you must specify at least one of the HarmonyUri and HarmonyAction fields. If multiple abilities exist, specify the action and URI for each ability. The action is preferentially used to find the corresponding built-in page in the app.
   * For more information, see [ClickAction.uri](https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/push-scenariozed-api-request-param-V5#section152462191216) on the HarmonyOS official website.
   * 
   * @example
   * https://www.example.com:8080/push/example
   */
  harmonyUri?: string;
  /**
   * @remarks
   * The custom identifier of the push task. If JobKey is not empty, this field is included in the receipt log. For more information about receipt logs, see [Receipt logs](https://help.aliyun.com/document_detail/434651.html).
   * 
   * @example
   * 123
   */
  jobKey?: string;
  /**
   * @remarks
   * The scheduled sending time. If this parameter is not set, the message is sent immediately.
   * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-02-20T00:00:00Z
   */
  pushTime?: string;
  /**
   * @remarks
   * The push type. Valid values:
   * - MESSAGE: message
   * - NOTICE: notification
   * 
   * This parameter is required.
   * 
   * @example
   * MESSAGE
   */
  pushType?: string;
  /**
   * @remarks
   * The specified sending channels. Valid values:
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
   * > - If this parameter is not configured, all channels are available.
   * > - If this parameter is configured, only the specified channels are used.
   * > - If the configured channels conflict with the sending policy (for example, iOS notifications are sent only through the APNs channel, but apns is not included in this parameter), the messages are not sent.
   * > - If gcm is configured, messages can be sent through both the Google GCM and FCM channels. If fcm is configured, messages can be sent only through the Google FCM channel.
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
   * Specifies whether to save offline messages or notifications. Default value: false.
   * If this parameter is set to true and the user is offline during the push, the message or notification is sent again when the user comes online within the expiration time specified by ExpireTime. The default value of ExpireTime is 72 hours. iOS notifications are sent through the APNs channel and are not affected by the StoreOffline parameter.
   * 
   * @example
   * true
   */
  storeOffline?: boolean;
  /**
   * @remarks
   * The push target. Valid values:
   * - DEVICE: Pushes messages based on devices.
   * - ACCOUNT: Pushes messages based on accounts.
   * - ALIAS: Pushes messages based on aliases.
   * 
   * This parameter is required.
   * 
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @remarks
   * The target value, which is set based on the Target parameter. Separate multiple values with commas. If the number of values exceeds the limit, you must push the messages in multiple batches.
   * - If Target is set to DEVICE, the value is in the format of `deviceid1,deviceid2`. A maximum of 1,000 devices are supported.
   * - If Target is set to ACCOUNT, the value is in the format of `account1,account2`. A maximum of 1,000 accounts are supported.
   * - If Target is set to ALIAS, the value is in the format of `alias1,alias2`. A maximum of 1,000 aliases are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * deviceid1,deviceid2
   */
  targetValue?: string;
  /**
   * @remarks
   * The title of the notification or message during the push. Maximum length: 200 bytes.
   * This parameter is required for Android and HarmonyOS pushes. This parameter is optional for iOS notification pushes. If this parameter is specified:
   * * For iOS 10 and later, the title is displayed in the notification.
   * * For iOS 8.2 to iOS 9.x, the title replaces the application name in the notification.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * Specifies whether to automatically truncate excessively long titles and content.
   * Note: This parameter applies only to vendor channels that explicitly limit the length of titles and content. It does not apply to channels such as APNs, Huawei, and Honor, which do not limit the length of titles and content but only limit the total request body size.
   * 
   * @example
   * false
   */
  trim?: boolean;
  /**
   * @remarks
   * To send iOS notifications through the APNs center, you must specify the corresponding environment context. Valid values:
   * - DEV: The development environment, which applies to applications directly installed and debugged by using Xcode.
   * - PRODUCT: The production environment, which applies to applications distributed through the App Store, TestFlight, Ad Hoc, and enterprise distribution.
   * 
   * @example
   * DEV
   */
  iOSApnsEnv?: string;
  /**
   * @remarks
   * The badge number on the upper-right corner of the iOS application icon.
   * > If iOSBadgeAutoIncrement is set to true, this parameter must be left empty.
   * 
   * @example
   * 0
   */
  iOSBadge?: number;
  /**
   * @remarks
   * Specifies whether to enable the automatic badge increment feature. Default value: false.
   * > When this parameter is set to true, iOSBadge must be left empty.
   * The automatic badge increment feature maintains the badge count for each device on the push server. This feature requires SDK version 1.9.5 or later, and users must actively synchronize the badge number to the server.
   * 
   * @example
   * true
   */
  iOSBadgeAutoIncrement?: boolean;
  /**
   * @remarks
   * The extension property of the iOS notification.
   * For iOS 10 and later, you can specify the resource URL for rich media push notifications in this parameter: `{"attachment": "https://www.example.com/notification_pic.png"}`. This parameter must be passed in JSON map format. Otherwise, a parse error occurs.
   * 
   * @example
   * {"attachment": "https://www.example.com/notification_pic.png"}
   */
  iOSExtParameters?: string;
  /**
   * @remarks
   * The interruption level. Valid values:
   * - passive: The system adds the notification to the notification list without turning on the screen or playing a sound.
   * - active: The system displays the notification immediately, turns on the screen, and can play a sound.
   * - time-sensitive: The system displays the notification immediately, turns on the screen, and can play a sound, but does not bypass the system notification controls.
   * - critical: The system displays the notification immediately, turns on the screen, and plays a sound bypassing the silent switch.
   * 
   * @example
   * active
   */
  iOSInterruptionLevel?: string;
  /**
   * @remarks
   * The JSON string that contains the static pass-through parameters for Dynamic Island pushes. Static parameter includes static user-defined information, such as product IDs and order information.
   * > Static parameter is required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * {"orderId": "12345", "product": "Shoes"}
   */
  iOSLiveActivityAttributes?: string;
  /**
   * @remarks
   * The type of the live activity to be started.
   * > This parameter is required when iOSLiveActivityEvent is set to start.
   * 
   * @example
   * OrderActivityAttributes
   */
  iOSLiveActivityAttributesType?: string;
  /**
   * @remarks
   * The dynamic parameter for Dynamic Island pushes. This parameter includes real-time update information, such as price and inventory changes.
   * 
   * @example
   * {"status": "delivered", "estimatedArrival": "2023-12-31T12:00:00Z"}
   */
  iOSLiveActivityContentState?: string;
  /**
   * @remarks
   * The time until which the ended live activity is retained on the Lock Screen. The maximum retention period is 4 hours.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityDismissalDate?: number;
  /**
   * @remarks
   * The event to start, update, or end a live activity. Valid values: start, update, and end.
   * 
   * @example
   * start
   */
  iOSLiveActivityEvent?: string;
  /**
   * @remarks
   * The Live Activity ID reported by the device to the user server. This is the unique identifier of the live activity.
   * 
   * @example
   * 66B94673-B32E-4CA7-863C-3E523054FD46
   */
  iOSLiveActivityId?: string;
  /**
   * @remarks
   * The second-level timestamp that marks the expiration time of the activity content.
   * 
   * @example
   * 1743131967
   */
  iOSLiveActivityStaleDate?: number;
  /**
   * @remarks
   * The sound of the iOS notification. Specify the name of the audio file stored in the app bundle or the sandbox Library/Sounds directory. For more information, see How to set the notification sound for iOS pushes.
   * If this parameter is set to an empty string (""), the notification is silent. If this parameter is not set, the default value "default" is used for the system prompt sound.
   * 
   * @example
   * ””
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
   * The collapse ID. If a device receives messages with the same CollapseId, the messages are merged into one. If the device is offline and receives consecutive messages with the same CollapseId, only one notification is displayed in the notification bar. This parameter is supported in iOS 10 and later.
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
   * The relevance score for summary highlighting. Valid values: floating-point numbers in the range of [0,1].
   * 
   * @example
   * 0.01
   */
  iOSRelevanceScore?: number;
  /**
   * @remarks
   * If the device is offline during a message push (that is, the persistent connection channel to the mobile push server is disconnected), the message is delivered once as a notification through the Apple APNs channel.
   * > Offline message-to-notification conversion applies only to the production environment.
   * 
   * @example
   * true
   */
  iOSRemind?: boolean;
  /**
   * @remarks
   * The iOS notification content used when an iOS message is converted to a notification. This parameter takes effect only when iOSApnsEnv is set to PRODUCT and iOSRemind is set to true.
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
   * An idempotency parameter used to prevent duplicate pushes caused by client retries. If the same IdempotentToken is used within 15 minutes, only one push is performed, and subsequent calls return the result of the first successful push.
   * 
   * > 
   * > - The parameter must be a standard 36-character UUID in the 8-4-4-4-12 format. Each valid character is a hexadecimal digit in the range of 0-9 or a-f, and it is case-insensitive.
   * > - This parameter only prevents duplicate pushes caused by retries. It does not prevent duplicate pushes caused by concurrent calls.
   * 
   * @example
   * c8016d13-6e76-410c-9bda-769383d11787
   */
  idempotentToken?: string;
  /**
   * @remarks
   * The array of independent push tasks.
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

