// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The environment type of the database. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * test
   */
  envType?: string;
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
   * @example
   * 10
   */
  pageSize?: number;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The keyword that is used to search for databases.
   * 
   * @example
   * testdb
   */
  searchKey?: string;
  /**
   * @remarks
   * The query range based on permissions. Valid values:
   * 
   * *   **HAS_PERMSSION**: searches for databases on which the current user has permissions.
   * *   **OWNER**: searches for databases owned by the current user.
   * *   **MY_FOCUS**: searches for databases that the current user follows.
   * *   **UNKNOWN**: searches for all databases.
   * 
   * @example
   * HAS_PERMSSION
   */
  searchRange?: string;
  /**
   * @remarks
   * The category of the database. Valid values:
   * 
   * *   **DB**: single database or logical database.
   * *   **SINGLE_DB**: single database.
   * *   **LOGIC_DB**: logical database.
   * 
   * @example
   * SINGLE_DB
   */
  searchTarget?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realLoginUserUid: 'RealLoginUserUid',
      searchKey: 'SearchKey',
      searchRange: 'SearchRange',
      searchTarget: 'SearchTarget',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      envType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realLoginUserUid: 'string',
      searchKey: 'string',
      searchRange: 'string',
      searchTarget: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

