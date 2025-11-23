// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakePartitionByFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The region where the data lake resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * **if can be null:**
   * false
   */
  dataRegion?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The expression of the query condition. The following operators are supported:
   * 
   * *   Comparison operators: =, <>, ! =, <, <=,>, and >=. Example: ds>20240101.
   * *   Logical operators: AND, OR, and NOT. Example: ds LIKE \\"20240%\\".
   * *   BETWEEN operator: Specifies a range. Example: ds BETWEEN 20240101 AND 20241201.
   * *   IN operator: Specifies a set of values. Example: ds IN (20240101, 20240102).
   * 
   * This parameter is required.
   * 
   * @example
   * ds>20241201
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid value:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * f056501ada12c1cc
   */
  nextToken?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
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
      dataRegion: 'DataRegion',
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
      dataRegion: 'string',
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

