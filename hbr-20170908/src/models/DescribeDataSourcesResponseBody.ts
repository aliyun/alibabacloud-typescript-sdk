// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcesResponseBodyDataSources extends $dara.Model {
  /**
   * @example
   * [
   *       "/home/alice/log"
   * ]
   */
  clusterId?: string;
  /**
   * @example
   * {
   *       "dataServerAddresses": [
   *             {
   *                   "host": "123.123.123.123",
   *                   "port": "8080"
   *             }
   *       ],
   *       "sharePath": "/share",
   *       "mountOptions": "",
   *       "fileSystemType": "nfs"
   * }
   */
  connectionInfo?: string;
  /**
   * @example
   * 1770257653
   */
  createdTime?: number;
  /**
   * @example
   * ds-000******2nqeo
   */
  dataSourceId?: string;
  /**
   * @example
   * COMMON_NAS
   */
  dataSourceName?: string;
  /**
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * [
   *       "/home/alice/log"
   * ]
   */
  exclude?: string;
  /**
   * @example
   * [
   *       "/home/alice",
   *       "/home/bob"
   * ]
   */
  include?: string;
  /**
   * @example
   * true
   */
  indexAvailable?: boolean;
  /**
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @example
   * 1745454604
   */
  indexUpdateTime?: boolean;
  /**
   * @example
   * false
   */
  indexing?: boolean;
  /**
   * @example
   * {}
   */
  options?: string;
  paths?: string[];
  /**
   * @example
   * plan-123***7890
   */
  planId?: string;
  /**
   * @example
   * I|1729493847|P1D
   */
  schedule?: string;
  /**
   * @example
   * 6:21:10240
   */
  speedLimit?: string;
  /**
   * @example
   * 1745454604
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      connectionInfo: 'ConnectionInfo',
      createdTime: 'CreatedTime',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      dataSourceType: 'DataSourceType',
      exclude: 'Exclude',
      include: 'Include',
      indexAvailable: 'IndexAvailable',
      indexLevel: 'IndexLevel',
      indexUpdateTime: 'IndexUpdateTime',
      indexing: 'Indexing',
      options: 'Options',
      paths: 'Paths',
      planId: 'PlanId',
      schedule: 'Schedule',
      speedLimit: 'SpeedLimit',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      connectionInfo: 'string',
      createdTime: 'number',
      dataSourceId: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      exclude: 'string',
      include: 'string',
      indexAvailable: 'boolean',
      indexLevel: 'string',
      indexUpdateTime: 'boolean',
      indexing: 'boolean',
      options: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      planId: 'string',
      schedule: 'string',
      speedLimit: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  dataSources?: DescribeDataSourcesResponseBodyDataSources[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 36A5CD24-****-****-****-5F30C3F1753F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataSources: 'DataSources',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataSources: { 'type': 'array', 'itemType': DescribeDataSourcesResponseBodyDataSources },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

