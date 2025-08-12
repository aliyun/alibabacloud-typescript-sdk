// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContactListByContactGroupResponseBodyContactsContactChannels extends $dara.Model {
  /**
   * @remarks
   * The TradeManager ID of the alert contact.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
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
   * alice@example.com
   */
  mail?: string;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * >  This parameter can be returned only on the China site (aliyun.com).
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

export class DescribeContactListByContactGroupResponseBodyContactsContact extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  channels?: DescribeContactListByContactGroupResponseBodyContactsContactChannels;
  /**
   * @remarks
   * The time when the alert contact was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1552314252000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the alert contact.
   * 
   * @example
   * ECS
   */
  desc?: string;
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
   * The time when the alert contact was modified.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1552314252000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      createTime: 'CreateTime',
      desc: 'Desc',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: DescribeContactListByContactGroupResponseBodyContactsContactChannels,
      createTime: 'number',
      desc: 'string',
      name: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.channels && typeof (this.channels as any).validate === 'function') {
      (this.channels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContactListByContactGroupResponseBodyContacts extends $dara.Model {
  contact?: DescribeContactListByContactGroupResponseBodyContactsContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': DescribeContactListByContactGroupResponseBodyContactsContact },
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

export class DescribeContactListByContactGroupResponseBody extends $dara.Model {
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
   * The alert contacts that receive alert notifications.
   */
  contacts?: DescribeContactListByContactGroupResponseBodyContacts;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The group is not exists.
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
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contacts: 'Contacts',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contacts: DescribeContactListByContactGroupResponseBodyContacts,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

