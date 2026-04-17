// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsResponseBodyContacts extends $dara.Model {
  /**
   * @example
   * test
   */
  contactId?: string;
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @example
   * true
   */
  emailVerify?: boolean;
  groupList?: string[];
  imUserIds?: { [key: string]: string };
  /**
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 130123456789
   */
  phone?: string;
  /**
   * @example
   * true
   */
  phoneVerify?: boolean;
  /**
   * @example
   * 2024-10-22 02:21:51
   */
  updateTime?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      email: 'email',
      emailVerify: 'emailVerify',
      groupList: 'groupList',
      imUserIds: 'imUserIds',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
      phoneVerify: 'phoneVerify',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      email: 'string',
      emailVerify: 'boolean',
      groupList: { 'type': 'array', 'itemType': 'string' },
      imUserIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      name: 'string',
      phone: 'string',
      phoneVerify: 'boolean',
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(this.imUserIds) {
      $dara.Model.validateMap(this.imUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactsResponseBody extends $dara.Model {
  contacts?: ListContactsResponseBodyContacts[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @example
   * 56
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': ListContactsResponseBodyContacts },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
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

