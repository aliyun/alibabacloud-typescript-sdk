// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * **
   * 
   * Valid values: 10, 20, 50, and 100.**** Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The role that is assigned to the user. Valid values:
   * 
   * *   **USER**: a regular user.
   * *   **DBA** : a database administrator (DBA).
   * *   **ADMIN**: a Data Management (DMS) administrator.
   * *   **SECURITY_ADMIN**: a security administrator.
   * *   **STRUCT_READ_ONLY**: a schema read-only user.
   * 
   * >  To check your role, move the pointer over the profile picture in the upper-right corner of the DMS console.
   * 
   * @example
   * DBA
   */
  role?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The status of the user. Valid values:
   * 
   * *   **NORMAL**: The user is normal.
   * *   **DISABLE**: The user is disabled.
   * *   **DELETE**: The user is deleted.
   * 
   * @example
   * NORMAL
   */
  userState?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      role: 'Role',
      searchKey: 'SearchKey',
      tid: 'Tid',
      userState: 'UserState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      role: 'string',
      searchKey: 'string',
      tid: 'number',
      userState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

