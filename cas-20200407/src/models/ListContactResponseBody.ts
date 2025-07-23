// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactResponseBodyContactList extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * 519580
   */
  contactId?: number;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address passed the verification.
   * 
   * @example
   * 1
   */
  emailStatus?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 139****8888
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the phone number was verified.
   * 
   * @example
   * 1
   */
  mobileStatus?: number;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * ty-yaoyue.com
   */
  name?: string;
  /**
   * @remarks
   * The webhook URL of the chatbot.
   * 
   * @example
   * [\\"https://open.feishu.cn/open-apis/bot/v2/hook/XXX\\",\\"https://oapi.dingtalk.com/robot/send?access_token=XXX\\",\\"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXX\\"]
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      email: 'Email',
      emailStatus: 'EmailStatus',
      mobile: 'Mobile',
      mobileStatus: 'MobileStatus',
      name: 'Name',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      email: 'string',
      emailStatus: 'number',
      mobile: 'string',
      mobileStatus: 'number',
      name: 'string',
      webhooks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The contacts.
   */
  contactList?: ListContactResponseBodyContactList[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword used in the fuzzy search.
   * 
   * @example
   * 186
   */
  keyword?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The number of certificates per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contactList: 'ContactList',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactList: { 'type': 'array', 'itemType': ListContactResponseBodyContactList },
      currentPage: 'number',
      keyword: 'string',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contactList)) {
      $dara.Model.validateArray(this.contactList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

