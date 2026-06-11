// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The contact IDs.
   */
  contactIdsShrink?: string;
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
   * The ID of the contact group.
   * 
   * @example
   * group-id-123
   */
  groupId?: string;
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile number of the contact.
   * 
   * @example
   * 15012345678
   */
  phone?: string;
  /**
   * @remarks
   * Specifies whether to query only ungrouped contacts.
   * 
   * @example
   * true
   */
  queryUngroupedContacts?: boolean;
  /**
   * @remarks
   * The workspace ID.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdsShrink: 'contactIds',
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
      contactIdsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

