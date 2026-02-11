// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactGroupResponseBodyContactGroupsContacts extends $dara.Model {
  contactId?: number;
  contactName?: string;
  createTime?: number;
  dingRobot?: string;
  email?: string;
  phone?: string;
  systemNoc?: boolean;
  updateTime?: number;
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
  contactGroupId?: number;
  contactGroupName?: string;
  contacts?: SearchAlertContactGroupResponseBodyContactGroupsContacts[];
  createTime?: number;
  updateTime?: number;
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
  contactGroups?: SearchAlertContactGroupResponseBodyContactGroups[];
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

