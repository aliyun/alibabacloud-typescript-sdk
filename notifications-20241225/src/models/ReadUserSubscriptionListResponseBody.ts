// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadUserSubscriptionListResponseBodyDataChannelConfigs extends $dara.Model {
  /**
   * @example
   * email
   */
  channelType?: string;
  /**
   * @example
   * YES
   */
  checkedState?: string;
  /**
   * @example
   * YES
   */
  defaultChecked?: string;
  /**
   * @example
   * 7
   */
  fatigueDayLimit?: number;
  /**
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
  keywordBlacklist?: string[];
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
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @example
   * t*@qq.*
   */
  contactEmail?: string;
  /**
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @example
   * 130*90
   */
  contactMobile?: string;
  /**
   * @example
   * test
   */
  contactName?: string;
  /**
   * @example
   * true
   */
  emailConfirmed?: boolean;
  messageSource?: ReadUserSubscriptionListResponseBodyDataContactCommonContactsMessageSource;
  /**
   * @example
   * true
   */
  mobileConfirmed?: boolean;
  /**
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
  keywordBlacklist?: string[];
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
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @example
   * test
   */
  contactName?: string;
  messageSource?: ReadUserSubscriptionListResponseBodyDataContactWebhookContactsMessageSource;
  /**
   * @example
   * /
   */
  securityToken?: string;
  /**
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=xxxxxxxx
   */
  serverUrl?: string;
  /**
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
  commonContacts?: ReadUserSubscriptionListResponseBodyDataContactCommonContacts[];
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
   * @example
   * /
   */
  aliUid?: number;
  /**
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @example
   * 产品的使用场景、技术分享的相关内容
   */
  categoryDesc?: string;
  /**
   * @example
   * prod_msg
   */
  categoryGroupCode?: string;
  /**
   * @example
   * 产品消息
   */
  categoryGroupName?: string;
  /**
   * @example
   * 产品教育内容
   */
  categoryName?: string;
  channelConfigs?: ReadUserSubscriptionListResponseBodyDataChannelConfigs[];
  contact?: ReadUserSubscriptionListResponseBodyDataContact;
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
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  data?: ReadUserSubscriptionListResponseBodyData[];
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @example
   * /
   */
  requestId?: string;
  /**
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

