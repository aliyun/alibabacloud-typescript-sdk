// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactGroupResponseBodyContactGroupsContacts extends $dara.Model {
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
   * The time when the alert contact group list was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * Indicates whether the alert contact receives system notifications. Valid values:
   * 
   * *   true: receives system notifications.
   * *   false: does not receive system notifications.
   * 
   * @example
   * false
   */
  systemNoc?: boolean;
  /**
   * @remarks
   * The time when the alert contact group was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      createTime: 'CreateTime',
      dingRobot: 'DingRobot',
      email: 'Email',
      phone: 'Phone',
      systemNoc: 'SystemNoc',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      createTime: 'number',
      dingRobot: 'string',
      email: 'string',
      phone: 'string',
      systemNoc: 'boolean',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchAlertContactGroupResponseBodyContactGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * @example
   * 746
   */
  contactGroupId?: number;
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * @example
   * TestGroup
   */
  contactGroupName?: string;
  /**
   * @remarks
   * The alert contact list.
   */
  contacts?: SearchAlertContactGroupResponseBodyContactGroupsContacts[];
  /**
   * @remarks
   * The time when the alert contact group list was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1529668855000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the alert contact group was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1529668855000
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
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
      contactGroupName: 'ContactGroupName',
      contacts: 'Contacts',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
      contactGroupName: 'string',
      contacts: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseBodyContactGroupsContacts },
      createTime: 'number',
      updateTime: 'number',
      userId: 'string',
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

export class SearchAlertContactGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the alert contact groups.
   */
  contactGroups?: SearchAlertContactGroupResponseBodyContactGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': SearchAlertContactGroupResponseBodyContactGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

