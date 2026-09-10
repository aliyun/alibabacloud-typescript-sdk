// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsResponseBodyContacts extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * test
   */
  contactId?: string;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * @example
   * true
   */
  emailVerify?: boolean;
  /**
   * @remarks
   * The contact groups to which the contact belongs.
   */
  groupList?: string[];
  /**
   * @remarks
   * The instant messaging user ID mappings. Multiple instant messaging tools are supported.
   */
  imUserIds?: { [key: string]: string };
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 130123456789
   */
  phone?: string;
  /**
   * @remarks
   * Indicates whether the phone number of the contact is verified.
   * 
   * @example
   * true
   */
  phoneVerify?: boolean;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-22 02:21:51
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
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
  /**
   * @remarks
   * The list of contacts.
   */
  contacts?: ListContactsResponseBodyContacts[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
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
   * @remarks
   * The total number of records.
   * 
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

