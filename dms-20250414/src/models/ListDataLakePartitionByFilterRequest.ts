// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakePartitionByFilterRequest extends $dara.Model {
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
   * Query conditional expression. Supported operators:
   * 
   * - Comparison operators: =, <>, !=, <, <=, >, and >=. For example: \\`ds>20240101\\`.
   * 
   * - Logical operators: AND, OR, and NOT. For example: \\`ds LIKE \\"20240%\\"\\`.
   * 
   * - The BETWEEN operator, which specifies a range. For example: \\`ds BETWEEN 20240101 AND 20241201\\`.
   * 
   * - The IN operator, which specifies a set of values. For example: \\`ds IN (20240101, 20240102)\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * ds>20241201
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries per page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If this parameter is left empty, no more results are returned.
   * 
   * - If a value is returned, the value is the token for the next query.
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
   * test_table
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
      filter: 'Filter',
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
      filter: 'string',
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

