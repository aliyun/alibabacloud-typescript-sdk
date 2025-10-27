// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PushTaskMessage extends $dara.Model {
  body?: string;
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
  customStyle?: number;
  notifyType?: string;
  openActivity?: string;
  openType?: string;
  openUrl?: string;
  priority?: number;
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
  category?: string;
  importance?: number;
  liveNotificationPayload?: string;
  receiptId?: string;
  urgency?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      importance: 'Importance',
      liveNotificationPayload: 'LiveNotificationPayload',
      receiptId: 'ReceiptId',
      urgency: 'Urgency',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  category?: string;
  notifyLevel?: number;
  privateContentParameters?: string;
  privateMsgTemplateId?: string;
  privateTitleParameters?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      notifyLevel: 'NotifyLevel',
      privateContentParameters: 'PrivateContentParameters',
      privateMsgTemplateId: 'PrivateMsgTemplateId',
      privateTitleParameters: 'PrivateTitleParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
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
  category?: string;
  importance?: number;
  receiptId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      importance: 'Importance',
      receiptId: 'ReceiptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      importance: 'number',
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
  badgeActivity?: string;
  badgeAddNum?: number;
  badgeSetNum?: number;
  channelId?: string;
  extParameters?: string;
  groupId?: string;
  imageUrl?: string;
  inboxContent?: string[];
  music?: string;
  notifyId?: number;
  options?: PushTaskNotificationAndroidOptions;
  pictureUrl?: string;
  renderStyle?: string;
  testMessage?: boolean;
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
  action?: string;
  badgeAddNum?: number;
  badgeSetNum?: number;
  category?: string;
  extParameters?: string;
  extensionExtraData?: string;
  extensionPush?: boolean;
  imageUrl?: string;
  inboxContent?: string[];
  liveViewPayload?: string;
  notifyId?: number;
  receiptId?: string;
  renderStyle?: string;
  slotType?: string;
  testMessage?: boolean;
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
  attributesType?: string;
  contentState?: string;
  dismissalDate?: number;
  event?: string;
  id?: string;
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
  apnsEnv?: string;
  badge?: number;
  badgeAutoIncrement?: boolean;
  category?: string;
  collapseId?: string;
  extParameters?: string;
  interruptionLevel?: string;
  liveActivity?: PushTaskNotificationIosLiveActivity;
  music?: string;
  mutable?: boolean;
  relevanceScore?: number;
  silent?: boolean;
  subtitle?: string;
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
  delaySecs?: number;
  params?: string;
  sendPolicy?: string;
  signName?: string;
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
  expireTime?: string;
  jobKey?: string;
  messageId?: number;
  pushTime?: string;
  sms?: PushTaskOptionsSms;
  trim?: boolean;
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
  platform?: string;
  type?: string;
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

