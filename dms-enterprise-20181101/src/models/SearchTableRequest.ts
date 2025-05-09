// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchTableRequest extends $dara.Model {
  /**
   * @remarks
   * The type of database. Valid values:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **Oracle**
   * *   **DRDS**
   * *   **OceanBase**
   * *   **Mongo**
   * *   **Redis**
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The type of the environment to which databases belong. For more information, see [Change the environment type of an instance](https://help.aliyun.com/document_detail/163309.html).
   * 
   * @example
   * PRODUCT
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
  /**
   * @remarks
   * Specifies whether to return the GUID of each table.
   * 
   * @example
   * false
   */
  returnGuid?: boolean;
  /**
   * @remarks
   * The keyword that is used to query tables.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The scope of tables that you want to query. Valid values:
   * 
   * *   **HAS_PERMSSION**: the tables on which the current account has permissions.
   * *   **OWNER**: the tables owned by the current account.
   * *   **MY_FOCUS**: the tables that the current account follows.
   * *   **UNKNOWN**: all tables.
   * 
   * @example
   * OWNER
   */
  searchRange?: string;
  /**
   * @remarks
   * The type of table that you want to query. Valid values:
   * 
   * *   **TABLE**: physical and logical tables
   * *   **SINGLE_TABLE**: physical tables
   * *   **LOGIC_TABLE**: logical tables
   * 
   * @example
   * LOGIC_TABLE
   */
  searchTarget?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      envType: 'EnvType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      returnGuid: 'ReturnGuid',
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
      returnGuid: 'boolean',
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

