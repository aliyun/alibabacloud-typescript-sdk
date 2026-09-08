// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadUserSubscriptionListResponseBodyDataChannelConfigs extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * email
   */
  channelType?: string;
  /**
   * @remarks
   * Indicates whether the subscription is configured.
   * 
   * @example
   * YES
   */
  checkedState?: string;
  /**
   * @remarks
   * Indicates whether the option is selected by default.
   * 
   * @example
   * YES
   */
  defaultChecked?: string;
  /**
   * @remarks
   * The fatigue limit.
   * 
   * @example
   * 7
   */
  fatigueDayLimit?: number;
  /**
   * @remarks
   * Indicates whether the option can be modified.
   * 
   * @example
   * YES
   */
  optional?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      checkedState: 'CheckedState',
      defaultChecked: 'DefaultChecked',
      fatigueDayLimit: 'FatigueDayLimit',
      optional: 'Optional',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      checkedState: 'string',
      defaultChecked: 'string',
      fatigueDayLimit: 'number',
      optional: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadUserSubscriptionListResponseBodyDataContactCommonContactsMessageSource extends $dara.Model {
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

export class ReadUserSubscriptionListResponseBodyDataContactCommonContacts extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * t*@qq.*
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
   * The masked mobile phone number of the Account Center contact.
   * 
   * @example
   * 130*90
   */
  contactMobile?: string;
  /**
   * @remarks
   * The name of the Account Center contact.
   * 
   * @example
   * test
   */
  contactName?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * @example
   * true
   */
  emailConfirmed?: boolean;
  /**
   * @remarks
   * The message source.
   */
  messageSource?: ReadUserSubscriptionListResponseBodyDataContactCommonContactsMessageSource;
  /**
   * @remarks
   * Indicates whether the mobile phone number of the Account Center contact is verified.
   * 
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
   * @remarks
   * The position of the Account Center contact.
   * 
   * @example
   * CEO
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
      messageSource: ReadUserSubscriptionListResponseBodyDataContactCommonContactsMessageSource,
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

export class ReadUserSubscriptionListResponseBodyDataContactWebhookContactsMessageSource extends $dara.Model {
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

export class ReadUserSubscriptionListResponseBodyDataContactWebhookContacts extends $dara.Model {
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
   * The name of the Account Center contact.
   * 
   * @example
   * test
   */
  contactName?: string;
  /**
   * @remarks
   * The message source.
   */
  messageSource?: ReadUserSubscriptionListResponseBodyDataContactWebhookContactsMessageSource;
  /**
   * @remarks
   * The security token.
   * 
   * @example
   * /
   */
  securityToken?: string;
  /**
   * @remarks
   * The webhook URL.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxx
   */
  serverUrl?: string;
  /**
   * @remarks
   * The webhook type.
   * 
   * @example
   * dingtalk
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
      messageSource: ReadUserSubscriptionListResponseBodyDataContactWebhookContactsMessageSource,
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

export class ReadUserSubscriptionListResponseBodyDataContact extends $dara.Model {
  /**
   * @remarks
   * The Account Center contact list.
   */
  commonContacts?: ReadUserSubscriptionListResponseBodyDataContactCommonContacts[];
  /**
   * @remarks
   * The webhook contact list.
   */
  webhookContacts?: ReadUserSubscriptionListResponseBodyDataContactWebhookContacts[];
  static names(): { [key: string]: string } {
    return {
      commonContacts: 'CommonContacts',
      webhookContacts: 'WebhookContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonContacts: { 'type': 'array', 'itemType': ReadUserSubscriptionListResponseBodyDataContactCommonContacts },
      webhookContacts: { 'type': 'array', 'itemType': ReadUserSubscriptionListResponseBodyDataContactWebhookContacts },
    };
  }

  validate() {
    if(Array.isArray(this.commonContacts)) {
      $dara.Model.validateArray(this.commonContacts);
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

export class ReadUserSubscriptionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @remarks
   * The message category code.
   * 
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @remarks
   * The description of the message category.
   * 
   * @example
   * Content related to product usage scenarios and technical sharing
   */
  categoryDesc?: string;
  /**
   * @remarks
   * The category group code.
   * 
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @remarks
   * The category group name.
   * 
   * @example
   * Product Messages
   */
  categoryGroupName?: string;
  /**
   * @remarks
   * The message category name.
   * 
   * @example
   * Product Educational Content
   */
  categoryName?: string;
  /**
   * @remarks
   * The channel list.
   */
  channelConfigs?: ReadUserSubscriptionListResponseBodyDataChannelConfigs[];
  /**
   * @remarks
   * The contact.
   */
  contact?: ReadUserSubscriptionListResponseBodyDataContact;
  /**
   * @remarks
   * The receiving time list.
   */
  receiveTimeList?: number[];
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      categoryCode: 'CategoryCode',
      categoryDesc: 'CategoryDesc',
      categoryGroupCode: 'CategoryGroupCode',
      categoryGroupName: 'CategoryGroupName',
      categoryName: 'CategoryName',
      channelConfigs: 'ChannelConfigs',
      contact: 'Contact',
      receiveTimeList: 'ReceiveTimeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      categoryCode: 'string',
      categoryDesc: 'string',
      categoryGroupCode: 'string',
      categoryGroupName: 'string',
      categoryName: 'string',
      channelConfigs: { 'type': 'array', 'itemType': ReadUserSubscriptionListResponseBodyDataChannelConfigs },
      contact: ReadUserSubscriptionListResponseBodyDataContact,
      receiveTimeList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.channelConfigs)) {
      $dara.Model.validateArray(this.channelConfigs);
    }
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.receiveTimeList)) {
      $dara.Model.validateArray(this.receiveTimeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadUserSubscriptionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the operation.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ReadUserSubscriptionListResponseBodyData[];
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Succeeded
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * /
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ReadUserSubscriptionListResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

