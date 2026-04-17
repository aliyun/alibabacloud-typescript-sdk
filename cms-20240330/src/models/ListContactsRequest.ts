// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsRequest extends $dara.Model {
  contactIds?: string[];
  /**
   * @example
   * test@aliyun.com
   */
  email?: string;
  groupId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 15012345678
   */
  phone?: string;
  /**
   * @example
   * true
   */
  queryUngroupedContacts?: boolean;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactIds: 'contactIds',
      email: 'email',
      groupId: 'groupId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      phone: 'phone',
      queryUngroupedContacts: 'queryUngroupedContacts',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIds: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      groupId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phone: 'string',
      queryUngroupedContacts: 'boolean',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

