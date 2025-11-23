// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog. You can view the name of the data catalog in the [DLF console](https://dlf.console.aliyun.com/cn-hangzhou/metadata/catalog?spm=a2c4g.11186623.0.0.5a225658pT4Dkr).
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   * 
   * **if can be null:**
   * false
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
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
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
   * The keyword that is used to search for databases.
   * 
   * @example
   * default
   * 
   * **if can be null:**
   * false
   */
  searchKey?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      searchKey: 'SearchKey',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

