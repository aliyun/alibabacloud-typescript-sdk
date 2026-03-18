// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourcesResponseBodyDataObjectListConfig extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * 范围分区表迁移方式
   */
  desc?: string;
  /**
   * @remarks
   * The enumerated values for the configuration.
   */
  enums?: string[];
  /**
   * @remarks
   * The configuration group.
   * 
   * @example
   * basic_group
   */
  group?: string;
  /**
   * @remarks
   * The English identifier for the configuration.
   * 
   * @example
   * bigquery.range.partition.migrate.type
   */
  key?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * 范围分区表迁移方式
   */
  name?: string;
  /**
   * @remarks
   * An example value for the configuration.
   * 
   * @example
   * Cluster or Partition
   */
  placeHolder?: string;
  /**
   * @remarks
   * Indicates whether the configuration is required.
   * 
   * @example
   * true
   */
  required?: boolean;
  /**
   * @remarks
   * If \\`type\\` is set to \\`file\\`, \\`subType\\` specifies the file type, such as \\`.keytab\\`.
   * 
   * @example
   * .keytab
   */
  subType?: string;
  /**
   * @remarks
   * The type of the configuration. Valid values: \\`boolean\\`, \\`int\\`, \\`map\\`, \\`string\\`, \\`password\\`, and \\`file\\`.
   * 
   * @example
   * string
   */
  type?: string;
  /**
   * @remarks
   * The value of the configuration.
   * 
   * @example
   * Partition
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enums: 'enums',
      group: 'group',
      key: 'key',
      name: 'name',
      placeHolder: 'placeHolder',
      required: 'required',
      subType: 'subType',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enums: { 'type': 'array', 'itemType': 'string' },
      group: 'string',
      key: 'string',
      name: 'string',
      placeHolder: 'string',
      required: 'boolean',
      subType: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.enums)) {
      $dara.Model.validateArray(this.enums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the data source instance or its associated agent is started.
   * 
   * @example
   * true
   */
  agentIsOnline?: boolean;
  /**
   * @remarks
   * The configurations of the data source.
   */
  config?: ListMmsDataSourcesResponseBodyDataObjectListConfig[];
  /**
   * @remarks
   * The time when the data source was created.
   * 
   * @example
   * 2024-12-17 09:29:58
   */
  createTime?: string;
  /**
   * @remarks
   * The number of databases in the data source.
   * 
   * @example
   * 3
   */
  dbNum?: number;
  /**
   * @remarks
   * The default destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstProject?: string;
  /**
   * @remarks
   * The list of destination MaxCompute projects.
   */
  dstProjects?: string[];
  /**
   * @remarks
   * The reason why the data source instance failed to start or shut down. This parameter is returned only when the value of \\`status\\` is \\`START_FAILED\\` or \\`STOP_FAILED\\`.
   * 
   * @example
   * unexpected exception
   */
  errMsg?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 2000015
   */
  id?: number;
  /**
   * @remarks
   * The last time when the metadata was synchronized.
   * 
   * @example
   * 2024-12-17 15:44:17
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The MaxCompute network connectivity ID is the region ID.
   * 
   * @example
   * vpc-2zebqp6uojhdla46677tl:cn-beijing
   */
  networklink?: string;
  /**
   * @remarks
   * The number of partitions in the data source.
   * 
   * @example
   * 10000000
   */
  partitionNum?: number;
  /**
   * @remarks
   * The number of partitions that are being migrated.
   * 
   * @example
   * 2332
   */
  partitionsDoingNum?: number;
  /**
   * @remarks
   * The number of partitions that have been migrated.
   * 
   * @example
   * 23
   */
  partitionsDoneNum?: number;
  /**
   * @remarks
   * The number of partitions that failed to be migrated.
   * 
   * @example
   * 2323
   */
  partitionsFailedNum?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the metadata synchronization task.
   * 
   * @example
   * 1000253
   */
  scanId?: number;
  /**
   * @remarks
   * The status of the data source.
   * 
   * @example
   * STARTED
   */
  status?: string;
  /**
   * @remarks
   * The number of tables in the data source.
   * 
   * @example
   * 1000
   */
  tableNum?: number;
  /**
   * @remarks
   * The number of tables that are being migrated.
   * 
   * @example
   * 18
   */
  tablesDoingNum?: number;
  /**
   * @remarks
   * The number of tables that have been migrated.
   * 
   * @example
   * 2323
   */
  tablesDoneNum?: number;
  /**
   * @remarks
   * The number of tables that failed to be migrated.
   * 
   * @example
   * 2
   */
  tablesFailedNum?: number;
  /**
   * @remarks
   * The number of tables that are partially migrated.
   * 
   * @example
   * 22
   */
  tablesPartDoneNum?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * BIGQUERY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentIsOnline: 'agentIsOnline',
      config: 'config',
      createTime: 'createTime',
      dbNum: 'dbNum',
      dstProject: 'dstProject',
      dstProjects: 'dstProjects',
      errMsg: 'errMsg',
      id: 'id',
      lastUpdateTime: 'lastUpdateTime',
      name: 'name',
      networklink: 'networklink',
      partitionNum: 'partitionNum',
      partitionsDoingNum: 'partitionsDoingNum',
      partitionsDoneNum: 'partitionsDoneNum',
      partitionsFailedNum: 'partitionsFailedNum',
      region: 'region',
      scanId: 'scanId',
      status: 'status',
      tableNum: 'tableNum',
      tablesDoingNum: 'tablesDoingNum',
      tablesDoneNum: 'tablesDoneNum',
      tablesFailedNum: 'tablesFailedNum',
      tablesPartDoneNum: 'tablesPartDoneNum',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIsOnline: 'boolean',
      config: { 'type': 'array', 'itemType': ListMmsDataSourcesResponseBodyDataObjectListConfig },
      createTime: 'string',
      dbNum: 'number',
      dstProject: 'string',
      dstProjects: { 'type': 'array', 'itemType': 'string' },
      errMsg: 'string',
      id: 'number',
      lastUpdateTime: 'string',
      name: 'string',
      networklink: 'string',
      partitionNum: 'number',
      partitionsDoingNum: 'number',
      partitionsDoneNum: 'number',
      partitionsFailedNum: 'number',
      region: 'string',
      scanId: 'number',
      status: 'string',
      tableNum: 'number',
      tablesDoingNum: 'number',
      tablesDoneNum: 'number',
      tablesFailedNum: 'number',
      tablesPartDoneNum: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.config)) {
      $dara.Model.validateArray(this.config);
    }
    if(Array.isArray(this.dstProjects)) {
      $dara.Model.validateArray(this.dstProjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of data sources.
   */
  objectList?: ListMmsDataSourcesResponseBodyDataObjectList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 9
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      objectList: 'objectList',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectList: { 'type': 'array', 'itemType': ListMmsDataSourcesResponseBodyDataObjectList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.objectList)) {
      $dara.Model.validateArray(this.objectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsDataSourcesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1F7715F-D316-5AB6-BD02-5241083F4003
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMmsDataSourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

