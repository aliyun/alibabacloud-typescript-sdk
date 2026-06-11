// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakePartitionNameRequest extends $dara.Model {
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
   * The token that is used to retrieve the next page of results. You do not need to specify this parameter for the first call.
   * 
   * - If **NextToken** is empty, no subsequent query is needed.
   * 
   * - If **NextToken** has a return value, it is the token to start the next query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
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
      tableName: 'TableName',
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
      tableName: 'string',
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

