// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeTableRequest extends $dara.Model {
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
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. To retrieve the next page, set this parameter to the \\`NextToken\\` value from the previous response. If you do not specify this parameter, the first page is returned.
   * 
   * - If **NextToken** is empty, there are no more queries.
   * 
   * - If **NextToken** has a value, the value is the token to start the next query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the metadata table. This parameter supports regular expressions.
   * 
   * @example
   * .*
   */
  tableNamePattern?: string;
  /**
   * @remarks
   * The type of the table. Valid values:
   * 
   * - MANAGED_TABLE: Internal table.
   * 
   * - EXTERNAL_TABLE: External table.
   * 
   * - VIRTUAL_VIEW: Virtual view.
   * 
   * - INDEX_TABLE: Index table.
   * 
   * - MATERIALIZED_VIEW: Materialized view.
   * 
   * @example
   * MANAGED_TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * > Hover over your profile picture in the upper-right corner of the DMS console to obtain the tenant ID. For details, see [View tenant information](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3****
   */
  tid?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbName: 'DbName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tableNamePattern: 'TableNamePattern',
      tableType: 'TableType',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      tableNamePattern: 'string',
      tableType: 'string',
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

