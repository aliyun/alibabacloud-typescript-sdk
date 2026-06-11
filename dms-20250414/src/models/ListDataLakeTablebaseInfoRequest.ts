// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeTablebaseInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The name of the database where the table is located.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The page number of the list for a paged query.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of rows on each page for a paged query.
   * 
   * @example
   * 10
   */
  rows?: number;
  /**
   * @remarks
   * The keyword used to search for table names.
   * 
   * @example
   * test
   */
  searchKey?: string;
  /**
   * @remarks
   * The tenant ID. Call the GetUserActiveTenant operation to get the value of this parameter.
   * 
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbName: 'DbName',
      page: 'Page',
      rows: 'Rows',
      searchKey: 'SearchKey',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      page: 'number',
      rows: 'number',
      searchKey: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

