// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of data source IDs. Up to 10 IDs are supported.
   */
  dataSourceIdsShrink?: string;
  /**
   * @remarks
   * The DataWorks environment type. Dev indicates the development environment. Prod indicates the production environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The metadata crawler name. Supports fuzzy match.
   * 
   * @example
   * example_crawler
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks user ID of the crawler owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The crawler type. Call GetCrawlerTypeCapabilities to query the valid values supported in the current region.
   * 
   * @example
   * starrocks
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIdsShrink: 'DataSourceIds',
      envType: 'EnvType',
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceIdsShrink: 'string',
      envType: 'string',
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

