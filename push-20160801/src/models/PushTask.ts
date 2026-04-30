// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PushTaskMessage extends $dara.Model {
  /**
   * @example
   * {"key": "value"}
   */
  body?: string;
  /**
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
   * @example
   * 1
   */
  customStyle?: number;
  /**
   * @example
   * NONE
   */
  notifyType?: string;
  /**
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  openActivity?: string;
  /**
   * @example
   * APPLICATION
   */
  openType?: string;
  /**
   * @example
   * www.example.com
   */
  openUrl?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
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
  businessType?: number;
  /**
   * @example
   * VOIP
   */
  category?: string;
  /**
   * @example
   * 0
   */
  importance?: number;
  liveNotificationPayload?: string;
  /**
   * @example
   * RCP4C123456
   */
  receiptId?: string;
  /**
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
   * @example
   * NEWS
   */
  category?: string;
  deleteIntentData?: string;
  intelligentIntent?: string;
  /**
   * @example
   * 1
   */
  notifyLevel?: number;
  privateContentParameters?: string;
  privateMsgTemplateId?: string;
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
   * @example
   * MARKETING
   */
  category?: string;
  /**
   * @example
   * 0
   */
  importance?: number;
  liveMessage?: string;
  /**
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
   * @example
   * michannel
   */
  channel?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
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
  accs?: PushTaskNotificationAndroidOptionsAccs;
  honor?: PushTaskNotificationAndroidOptionsHonor;
  huawei?: PushTaskNotificationAndroidOptionsHuawei;
  meizu?: PushTaskNotificationAndroidOptionsMeizu;
  oppo?: PushTaskNotificationAndroidOptionsOppo;
  vivo?: PushTaskNotificationAndroidOptionsVivo;
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
   * @example
   * com.alibaba.cloudpushdemo.bizactivity
   */
  badgeActivity?: string;
  /**
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @example
   * 4
   */
  badgeSetNum?: number;
  /**
   * @example
   * 8.0up
   */
  channelId?: string;
  /**
   * @example
   * {"key1":"value1"}
   */
  extParameters?: string;
  /**
   * @example
   * group-1
   */
  groupId?: string;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  imageUrl?: string;
  inboxContent?: string[];
  /**
   * @example
   * alicloud_notification_sound
   */
  music?: string;
  /**
   * @example
   * 233856727
   */
  notifyId?: number;
  options?: PushTaskNotificationAndroidOptions;
  /**
   * @example
   * https://imag.example.com/image.png
   */
  pictureUrl?: string;
  /**
   * @example
   * 0
   */
  renderStyle?: string;
  /**
   * @example
   * false
   */
  testMessage?: boolean;
  /**
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
   * @example
   * com.example.action
   */
  action?: string;
  /**
   * @example
   * 1
   */
  badgeAddNum?: number;
  /**
   * @example
   * 1
   */
  badgeSetNum?: number;
  /**
   * @example
   * IM
   */
  category?: string;
  /**
   * @example
   * {"key": "value"}
   */
  extParameters?: string;
  /**
   * @example
   * text
   */
  extensionExtraData?: string;
  /**
   * @example
   * false
   */
  extensionPush?: boolean;
  /**
   * @example
   * https://example.com/xxx.png
   */
  imageUrl?: string;
  inboxContent?: string[];
  liveViewPayload?: string;
  /**
   * @example
   * 123456
   */
  notifyId?: number;
  /**
   * @example
   * RCPB***DFD5
   */
  receiptId?: string;
  /**
   * @example
   * NORMAL
   */
  renderStyle?: string;
  /**
   * @example
   * SOCIAL_COMMUNICATION
   */
  slotType?: string;
  sound?: string;
  soundDuration?: number;
  /**
   * @example
   * true
   */
  testMessage?: boolean;
  /**
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
  attributes?: string;
  /**
   * @example
   * OrderActivityAttributes
   */
  attributesType?: string;
  contentState?: string;
  /**
   * @example
   * 1701439800
   */
  dismissalDate?: number;
  /**
   * @example
   * start
   */
  event?: string;
  /**
   * @example
   * FOOD_DELIVERY_ORD20231201001
   */
  id?: string;
  /**
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
   * @example
   * DEV
   */
  apnsEnv?: string;
  /**
   * @example
   * 1
   */
  badge?: number;
  /**
   * @example
   * false
   */
  badgeAutoIncrement?: boolean;
  /**
   * @example
   * MESSAGE_REPLY
   */
  category?: string;
  /**
   * @example
   * order_status_update_12345
   */
  collapseId?: string;
  /**
   * @example
   * {"attachment": "https://xxxx.xxx/notification_pic.png"}
   */
  extParameters?: string;
  /**
   * @example
   * active
   */
  interruptionLevel?: string;
  liveActivity?: PushTaskNotificationIosLiveActivity;
  /**
   * @example
   * default
   */
  music?: string;
  /**
   * @example
   * true
   */
  mutable?: boolean;
  /**
   * @example
   * 0.5
   */
  relevanceScore?: number;
  /**
   * @example
   * false
   */
  silent?: boolean;
  subtitle?: string;
  /**
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
  android?: PushTaskNotificationAndroid;
  body?: string;
  hmos?: PushTaskNotificationHmos;
  ios?: PushTaskNotificationIos;
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
   * @example
   * 150
   */
  delaySecs?: number;
  /**
   * @example
   * key1=value1&key2=value2
   */
  params?: string;
  /**
   * @example
   * PUSH_NOT_RECEIVED
   */
  sendPolicy?: string;
  signName?: string;
  /**
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
   * @example
   * 2025-06-21T12:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * jobkey1727749697913
   */
  jobKey?: string;
  /**
   * @example
   * 1174754033128****
   */
  messageId?: number;
  /**
   * @example
   * 2025-06-19T12:00:00Z
   */
  pushTime?: string;
  sms?: PushTaskOptionsSms;
  /**
   * @example
   * false
   */
  trim?: boolean;
  /**
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
   * @example
   * IOS
   */
  platform?: string;
  /**
   * @example
   * DEVICE
   */
  type?: string;
  /**
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
   * @example
   * PUSH_IMMEDIATELY
   */
  action?: string;
  message?: PushTaskMessage;
  notification?: PushTaskNotification;
  options?: PushTaskOptions;
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

