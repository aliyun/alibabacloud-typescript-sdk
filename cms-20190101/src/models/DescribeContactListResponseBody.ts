// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactListResponseBodyContactsContactChannels extends $dara.Model {
  /**
   * @remarks
   * The TradeManager ID of the alert contact.
   * 
   * @example
   * Alice
   */
  aliIM?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=9bf44f8189597d07dfdd7a123455ffc112****
   */
  dingWebHook?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * Alice@example.com
   */
  mail?: string;
  /**
   * @remarks
   * The phone number of the alert contac.
   * 
   * @example
   * 1333333****
   */
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactChannelsState extends $dara.Model {
  /**
   * @remarks
   * The status of the TradeManager ID.
   * 
   * Valid value: OK. The value OK indicates that the TradeManager ID is valid and can receive alert notifications.
   * 
   * >  This parameter applies only to the Alibaba Cloud China site (aliyun.com).
   * 
   * @example
   * OK
   */
  aliIM?: string;
  /**
   * @remarks
   * The status of the DingTalk chatbot.
   * 
   * Valid value: OK. The value OK indicates that the DingTalk chatbot is normal and alert notifications can be received in a DingTalk group.
   * 
   * @example
   * OK
   */
  dingWebHook?: string;
  /**
   * @remarks
   * The status of the email address. Valid values:
   * 
   * *   PENDING: The phone number is not activated. Alert notifications can be sent to the phone number by using text messages only after the phone number is activated.
   * *   OK: The phone number is activated and can receive alert notifications.
   * 
   * @example
   * PENDING
   */
  mail?: string;
  /**
   * @remarks
   * The status of the phone number. Valid values:
   * 
   * *   PENDING: The phone number is not activated. Alert notifications can be sent to the phone number by using text messages only after the phone number is activated.
   * *   OK: The phone number is activated and can receive alert notifications.
   * 
   * >  This parameter applies only to the Alibaba Cloud China site (aliyun.com).
   * 
   * @example
   * OK
   */
  SMS?: string;
  static names(): { [key: string]: string } {
    return {
      aliIM: 'AliIM',
      dingWebHook: 'DingWebHook',
      mail: 'Mail',
      SMS: 'SMS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliIM: 'string',
      dingWebHook: 'string',
      mail: 'string',
      SMS: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContactContactGroups extends $dara.Model {
  contactGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContactsContact extends $dara.Model {
  /**
   * @remarks
   * The alert notification method.
   */
  channels?: DescribeContactListResponseBodyContactsContactChannels;
  /**
   * @remarks
   * The status of the alert notification method. Valid values: PENDING and OK.
   * 
   * The email address must be activated after it is added as the value specified for the alert notification method. The value PENDING indicates that the email address is not activated. The value OK indicates that the email address is activated.
   */
  channelsState?: DescribeContactListResponseBodyContactsContactChannelsState;
  /**
   * @remarks
   * None.
   */
  contactGroups?: DescribeContactListResponseBodyContactsContactContactGroups;
  /**
   * @remarks
   * The timestamp when the alert contact was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1552356159000
   */
  createTime?: number;
  /**
   * @remarks
   * The description.
   */
  desc?: string;
  /**
   * @remarks
   * The language in which the alert information is displayed. Valid values:
   * 
   * *   zh-cn: simplified Chinese
   * *   en: English
   * 
   * @example
   * zh-cn
   */
  lang?: string;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * Alice
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the alert contact was updated.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1552356159000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      channelsState: 'ChannelsState',
      contactGroups: 'ContactGroups',
      createTime: 'CreateTime',
      desc: 'Desc',
      lang: 'Lang',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListResponseBodyContactsContactChannels,
      channelsState: DescribeContactListResponseBodyContactsContactChannelsState,
      contactGroups: DescribeContactListResponseBodyContactsContactContactGroups,
      createTime: 'number',
      desc: 'string',
      lang: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    if(this.channelsState && typeof (this.channelsState as any).validate === 'function') {
      (this.channelsState as any).validate();
    }
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBodyContacts extends $dara.Model {
  contact?: DescribeContactListResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListResponseBodyContactsContact },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The alert contacts.
   */
  contacts?: DescribeContactListResponseBodyContacts;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06D5ECC2-B9BE-42A4-8FA3-1A610FB08B83
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

