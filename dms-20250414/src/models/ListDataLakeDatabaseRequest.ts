// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog. To find the catelog name, go to the [Data Lake console](https://dlf.console.aliyun.com/cn-hangzhou/metadata/catalog?spm=a2c4g.11186623.0.0.5a225658pT4Dkr).
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
   * The number of entries to return on each page. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If **NextToken** is empty, no more results are available.
   * 
   * - If **NextToken** has a value, it is the token for the next query.
   * 
   * @example
   * f056501ada12****
   */
  nextToken?: string;
  /**
   * @remarks
   * A keyword to search for database names.
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
   * The workspace ID.
   * 
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
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

