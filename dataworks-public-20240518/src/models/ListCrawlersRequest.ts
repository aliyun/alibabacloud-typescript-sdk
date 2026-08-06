// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrawlersRequest extends $dara.Model {
  dataSourceIds?: number[];
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * example_crawler
   */
  name?: string;
  /**
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @example
   * starrocks
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceIds: 'DataSourceIds',
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
      dataSourceIds: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.dataSourceIds)) {
      $dara.Model.validateArray(this.dataSourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

