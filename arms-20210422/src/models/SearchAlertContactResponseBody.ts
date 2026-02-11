// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertContactResponseBodyPageBeanContacts extends $dara.Model {
  contactId?: number;
  contactName?: string;
  createTime?: number;
  dingRobot?: string;
  email?: string;
  phone?: string;
  systemNoc?: boolean;
  updateTime?: number;
  userId?: string;
  webhook?: string;
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
      webhook: 'Webhook',
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
  contacts?: SearchAlertContactResponseBodyPageBeanContacts[];
  pageNumber?: number;
  pageSize?: number;
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
  pageBean?: SearchAlertContactResponseBodyPageBean;
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

