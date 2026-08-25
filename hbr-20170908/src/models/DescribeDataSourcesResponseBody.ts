// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSourcesResponseBodyDataSources extends $dara.Model {
  /**
   * @remarks
   * The client group ID used to access the data source.
   * 
   * @example
   * cl-0003jyv******fsku5m
   */
  clusterId?: string;
  /**
   * @remarks
   * The connection information of the data source, which describes how to access the data source.
   * 
   * @example
   * {
   *     "dataServerAddresses": [
   *         {
   *             "host": "123.123.123.123",
   *             "port": "8080"
   *         }
   *     ],
   *     "sharePath": "/share",
   *     "mountOptions": "vers=3",
   *     "fileSystemType": "nfs"
   * }
   */
  connectionInfo?: string;
  /**
   * @remarks
   * The time when the data source was created. UNIX timestamp in seconds.
   * 
   * @example
   * 1770257653
   */
  createdTime?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * ds-000******2nqeo
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * COMMON_NAS
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * COMMON_NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The paths excluded from analysis. Archiving feature only.
   * 
   * @example
   * [
   *       "/home/alice/log"
   * ]
   */
  exclude?: string;
  /**
   * @remarks
   * The paths included in the analysis. Archiving feature only.
   * 
   * @example
   * [
   *       "/home/alice",
   *       "/home/bob"
   * ]
   */
  include?: string;
  /**
   * @remarks
   * Whether the index is available. Archiving feature only.
   * 
   * @example
   * true
   */
  indexAvailable?: boolean;
  /**
   * @remarks
   * The index level. Valid values:
   * 
   * - OFF: No index is created.
   * 
   * - META: A metadata index is created.
   * 
   * - ALL: A full-text index is created. This value is deprecated.
   * 
   * @example
   * META
   */
  indexLevel?: string;
  /**
   * @remarks
   * The time when the index was last updated. UNIX timestamp in seconds. Archiving feature only.
   * 
   * @example
   * 1745454604
   */
  indexUpdateTime?: boolean;
  /**
   * @remarks
   * Whether an index is being built. Archiving feature only.
   * 
   * @example
   * false
   */
  indexing?: boolean;
  /**
   * @remarks
   * The analysis options. Archiving feature only.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The analysis paths. Archiving feature only.
   */
  paths?: string[];
  /**
   * @remarks
   * The analysis plan ID. Archiving feature only.
   * 
   * @example
   * plan-123***7890
   */
  planId?: string;
  /**
   * @remarks
   * The analysis schedule. Archiving feature only. Format: `I|{startTime}|{interval}`. `{startTime}` is the start time as a UNIX timestamp in seconds. `{interval}` is the execution interval in ISO 8601 format. Example: PT1H for one hour, P1D for one day.
   * 
   * @example
   * I|1729493847|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The rate limit configuration. Archiving feature only.
   * 
   * @example
   * 6:21:10240
   */
  speedLimit?: string;
  /**
   * @remarks
   * The time when the data source was last updated. UNIX timestamp in seconds.
   * 
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
   * @remarks
   * The HTTP status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data sources.
   */
  dataSources?: DescribeDataSourcesResponseBodyDataSources[];
  /**
   * @remarks
   * The response message. The value is "successful" if the request was successful, or an error message if the request failed.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 99. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36A5CD24-****-****-****-5F30C3F1753F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned data sources.
   * 
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

