// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserSubscriptionRequestChannelConfigs extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * pmsg
   */
  channelType?: string;
  /**
   * @remarks
   * Specifies whether the channel is enabled.
   * 
   * @example
   * YES
   */
  checkedState?: string;
  /**
   * @remarks
   * The fatigue threshold.
   * 
   * @example
   * 7
   */
  fatigueDayLimit?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      checkedState: 'CheckedState',
      fatigueDayLimit: 'FatigueDayLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      checkedState: 'string',
      fatigueDayLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSubscriptionRequestCommonContactsMessageSource extends $dara.Model {
  /**
   * @remarks
   * The blacklist.
   */
  keywordBlacklist?: string[];
  /**
   * @remarks
   * The whitelist.
   */
  keywordWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordBlacklist: 'KeywordBlacklist',
      keywordWhitelist: 'KeywordWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordBlacklist: { 'type': 'array', 'itemType': 'string' },
      keywordWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywordBlacklist)) {
      $dara.Model.validateArray(this.keywordBlacklist);
    }
    if(Array.isArray(this.keywordWhitelist)) {
      $dara.Model.validateArray(this.keywordWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSubscriptionRequestCommonContacts extends $dara.Model {
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  contactEmail?: string;
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  contactMobile?: string;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  contactName?: string;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * The message source.
   */
  messageSource?: UpdateUserSubscriptionRequestCommonContactsMessageSource;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      emailConfirmed: 'EmailConfirmed',
      messageSource: 'MessageSource',
      mobileConfirmed: 'MobileConfirmed',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      emailConfirmed: 'boolean',
      messageSource: UpdateUserSubscriptionRequestCommonContactsMessageSource,
      mobileConfirmed: 'boolean',
      position: 'string',
    };
  }

  validate() {
    if(this.messageSource && typeof (this.messageSource as any).validate === 'function') {
      (this.messageSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSubscriptionRequestWebhookContactsMessageSource extends $dara.Model {
  /**
   * @remarks
   * The blacklist.
   */
  keywordBlacklist?: string[];
  /**
   * @remarks
   * The whitelist.
   */
  keywordWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordBlacklist: 'KeywordBlacklist',
      keywordWhitelist: 'KeywordWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordBlacklist: { 'type': 'array', 'itemType': 'string' },
      keywordWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywordBlacklist)) {
      $dara.Model.validateArray(this.keywordBlacklist);
    }
    if(Array.isArray(this.keywordWhitelist)) {
      $dara.Model.validateArray(this.keywordWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSubscriptionRequestWebhookContacts extends $dara.Model {
  /**
   * @remarks
   * webhook id
   * 
   * @example
   * /
   */
  contactId?: number;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  contactName?: string;
  /**
   * @remarks
   * The message source.
   */
  messageSource?: UpdateUserSubscriptionRequestWebhookContactsMessageSource;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  securityToken?: string;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  serverUrl?: string;
  /**
   * @remarks
   * No input required.
   * 
   * @example
   * /
   */
  webhookType?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      messageSource: 'MessageSource',
      securityToken: 'SecurityToken',
      serverUrl: 'ServerUrl',
      webhookType: 'WebhookType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      messageSource: UpdateUserSubscriptionRequestWebhookContactsMessageSource,
      securityToken: 'string',
      serverUrl: 'string',
      webhookType: 'string',
    };
  }

  validate() {
    if(this.messageSource && typeof (this.messageSource as any).validate === 'function') {
      (this.messageSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application name of the requester.
   * 
   * @example
   * yunge-user
   */
  appName?: string;
  /**
   * @remarks
   * The business line of the requester.
   * 
   * @example
   * /
   */
  bizName?: string;
  /**
   * @remarks
   * The request protocol type.
   * 
   * @example
   * /
   */
  callerProtocol?: string;
  /**
   * @remarks
   * The list of categories.
   */
  categoryCodes?: string[];
  /**
   * @remarks
   * The list of channels.
   */
  channelConfigs?: UpdateUserSubscriptionRequestChannelConfigs[];
  /**
   * @remarks
   * The channel group. Valid values:
   * - tts: Voice channel group.
   * - webhook: Chatbot channel group.
   * - base: Basic channel group.
   * 
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @remarks
   * The source of the operation terminal.
   * 
   * @example
   * /
   */
  clientSource?: string;
  /**
   * @remarks
   * The common contacts.
   */
  commonContacts?: UpdateUserSubscriptionRequestCommonContacts[];
  /**
   * @remarks
   * The user cookies.
   * 
   * @example
   * /
   */
  cookies?: string;
  /**
   * @remarks
   * The revision type. Valid values:
   * - receive_contact: Receive contact.
   * - receive_channel: Receive channel.
   * 
   * @example
   * receive_channel
   */
  operationItemCode?: string;
  /**
   * @remarks
   * Not supported.
   */
  receiveTimeList?: number[];
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * /
   */
  remarks?: string;
  /**
   * @remarks
   * The URL of the source page.
   * 
   * @example
   * /
   */
  srcUrl?: string;
  /**
   * @remarks
   * The tenant information.
   * 
   * @example
   * /
   */
  tenantCode?: string;
  /**
   * @remarks
   * The user type.
   * 
   * @example
   * /
   */
  uidType?: string;
  /**
   * @remarks
   * The list of chatbot contacts.
   */
  webhookContacts?: UpdateUserSubscriptionRequestWebhookContacts[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      bizName: 'BizName',
      callerProtocol: 'CallerProtocol',
      categoryCodes: 'CategoryCodes',
      channelConfigs: 'ChannelConfigs',
      channelGroupCode: 'ChannelGroupCode',
      clientSource: 'ClientSource',
      commonContacts: 'CommonContacts',
      cookies: 'Cookies',
      operationItemCode: 'OperationItemCode',
      receiveTimeList: 'ReceiveTimeList',
      remarks: 'Remarks',
      srcUrl: 'SrcUrl',
      tenantCode: 'TenantCode',
      uidType: 'UidType',
      webhookContacts: 'WebhookContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      bizName: 'string',
      callerProtocol: 'string',
      categoryCodes: { 'type': 'array', 'itemType': 'string' },
      channelConfigs: { 'type': 'array', 'itemType': UpdateUserSubscriptionRequestChannelConfigs },
      channelGroupCode: 'string',
      clientSource: 'string',
      commonContacts: { 'type': 'array', 'itemType': UpdateUserSubscriptionRequestCommonContacts },
      cookies: 'string',
      operationItemCode: 'string',
      receiveTimeList: { 'type': 'array', 'itemType': 'number' },
      remarks: 'string',
      srcUrl: 'string',
      tenantCode: 'string',
      uidType: 'string',
      webhookContacts: { 'type': 'array', 'itemType': UpdateUserSubscriptionRequestWebhookContacts },
    };
  }

  validate() {
    if(Array.isArray(this.categoryCodes)) {
      $dara.Model.validateArray(this.categoryCodes);
    }
    if(Array.isArray(this.channelConfigs)) {
      $dara.Model.validateArray(this.channelConfigs);
    }
    if(Array.isArray(this.commonContacts)) {
      $dara.Model.validateArray(this.commonContacts);
    }
    if(Array.isArray(this.receiveTimeList)) {
      $dara.Model.validateArray(this.receiveTimeList);
    }
    if(Array.isArray(this.webhookContacts)) {
      $dara.Model.validateArray(this.webhookContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

