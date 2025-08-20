// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsDatasourcesResponseBodyApsDatasources extends $dara.Model {
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2024-01-10 14:44:33
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the data source.
   * 
   * @example
   * test
   */
  datasourceDescription?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test
   */
  datasourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * SLS
   */
  datasourceType?: string;
  /**
   * @remarks
   * Indicates whether a job is using the data source.
   * 
   * @example
   * false
   */
  hasJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasourceDescription: 'DatasourceDescription',
      datasourceId: 'DatasourceId',
      datasourceName: 'DatasourceName',
      datasourceType: 'DatasourceType',
      hasJob: 'HasJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasourceDescription: 'string',
      datasourceId: 'number',
      datasourceName: 'string',
      datasourceType: 'string',
      hasJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApsDatasourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried APS data sources.
   * 
   * @example
   * -
   */
  apsDatasources?: DescribeApsDatasourcesResponseBodyApsDatasources[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******-5213-******-B608-******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      apsDatasources: 'ApsDatasources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsDatasources: { 'type': 'array', 'itemType': DescribeApsDatasourcesResponseBodyApsDatasources },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apsDatasources)) {
      $dara.Model.validateArray(this.apsDatasources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

