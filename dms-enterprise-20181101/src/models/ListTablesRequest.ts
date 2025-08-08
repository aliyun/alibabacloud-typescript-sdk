// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the physical database. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID of the physical database.
   * 
   * This parameter is required.
   * 
   * @example
   * 1860****
   */
  databaseId?: string;
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
   * Specifies whether to return the GUID of a table. Valid values:
   * 
   * *   **true**: returns the GUID of a table.
   * *   **false**: does not return the GUID of a table.
   * 
   * @example
   * true
   */
  returnGuid?: boolean;
  /**
   * @remarks
   * The name used to search for tables. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realLoginUserUid: 'RealLoginUserUid',
      returnGuid: 'ReturnGuid',
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realLoginUserUid: 'string',
      returnGuid: 'boolean',
      searchName: 'string',
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

