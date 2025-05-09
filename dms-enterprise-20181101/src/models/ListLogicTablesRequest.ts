// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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
  /**
   * @remarks
   * Specifies whether to return the GUID of the table.
   * 
   * @example
   * true
   */
  returnGuid?: boolean;
  /**
   * @remarks
   * The keyword that is used to search for the logical tables. Prefix match is supported.
   * 
   * @example
   * test
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      databaseId: 'DatabaseId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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

