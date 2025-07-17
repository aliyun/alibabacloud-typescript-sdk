// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactResponseBodyPageBeanContacts extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * John Doe
   */
  contactName?: string;
  /**
   * @remarks
   * The contact group to which the contact belongs. If your contacts are added to multiple contact groups, the contact groups are separated by vertical bars (|).
   * 
   * @example
   * Default Group | SRE Group
   */
  content?: string;
  /**
   * @remarks
   * The timestamp generated when the alert contact was created.
   * 
   * @example
   * 1572349025000
   */
  createTime?: number;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=91f2f6****
   */
  dingRobot?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * @example
   * 1381111*****
   */
  phone?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the alert contact receives system notifications. Valid values:
   * 
   * *   `true`: The alert contact receives system notifications.
   * *   `false`: The alert contact does not receive system notifications.
   * 
   * @example
   * false
   */
  systemNoc?: boolean;
  /**
   * @remarks
   * The timestamp generated when the alert contact was updated.
   * 
   * @example
   * 1580258717000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 113197164949****
   */
  userId?: string;
  /**
   * @remarks
   * The information about the webhook.
   * 
   * @example
   * {\\"body\\":\\"{   \\\\\\"msg_type\\\\\\": \\\\\\"text\\\\\\",   \\\\\\"content\\\\\\": {     \\\\\\"text\\\\\\": \\\\\\"$content\\\\\\"   } }\\",\\"header\\":{\\"Arms-Content-Type\\":\\"json\\"},\\"method\\":\\"post\\",\\"params\\":{},\\"url\\":\\"https://***",\\"userId\\":\\"1131971649***\\"}",
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      content: 'Content',
      createTime: 'CreateTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      phone: 'Phone',
      resourceGroupId: 'ResourceGroupId',
      systemNoc: 'SystemNoc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      content: 'string',
      createTime: 'number',
      dingRobot: 'string',
      email: 'string',
      phone: 'string',
      resourceGroupId: 'string',
      systemNoc: 'boolean',
      updateTime: 'number',
      userId: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The information about the alert contacts.
   */
  contacts?: SearchAlertContactResponseBodyPageBeanContacts[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': SearchAlertContactResponseBodyPageBeanContacts },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned struct.
   */
  pageBean?: SearchAlertContactResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 21E85B16-75A6-429A-9F65-8AAC9A54****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchAlertContactResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

