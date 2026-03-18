// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * Time created in MMS
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  createTime?: string;
  /**
   * @remarks
   * Whether deleted
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * Database description
   * 
   * @example
   * for mms test
   */
  description?: string;
  /**
   * @remarks
   * The MaxCompute schema corresponding to the source database. If the target MaxCompute project does not have a schema layer enabled, this value is null. By default, it is consistent with the source database name.
   * 
   * @example
   * default
   */
  dstName?: string;
  /**
   * @remarks
   * Target MaxCompute project name
   * 
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * Other information stored in JSON format
   * 
   * @example
   * {}
   */
  extra?: string;
  /**
   * @remarks
   * Database ID
   * 
   * @example
   * 1530
   */
  id?: number;
  /**
   * @remarks
   * Last DDL Time
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * Database storage location
   * 
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @remarks
   * Database name
   * 
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @remarks
   * Number of database data rows
   * 
   * @example
   * 23232
   */
  numRows?: number;
  /**
   * @remarks
   * Database owner
   * 
   * @example
   * System user
   */
  owner?: string;
  /**
   * @remarks
   * Number of partitions
   * 
   * @example
   * 1000
   */
  partitions?: number;
  /**
   * @remarks
   * Partitions being migrated
   * 
   * @example
   * 400
   */
  partitionsDoing?: number;
  /**
   * @remarks
   * Partitions migrated
   * 
   * @example
   * 200
   */
  partitionsDone?: number;
  /**
   * @remarks
   * Failed partitions
   * 
   * @example
   * 200
   */
  partitionsFailed?: number;
  /**
   * @remarks
   * Database data size in bytes
   * 
   * @example
   * 2342342
   */
  size?: number;
  /**
   * @remarks
   * Data source ID.
   * 
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @remarks
   * Data source name
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * Migration status: INIT, DOING, FAILED, DONE, PART_DONE
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * Number of tables
   * 
   * @example
   * 100
   */
  tables?: number;
  /**
   * @remarks
   * Tables being migrated
   * 
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @remarks
   * Tables migrated
   * 
   * @example
   * 20
   */
  tablesDone?: number;
  /**
   * @remarks
   * Failed tables
   * 
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @remarks
   * Partially migrated tables
   * 
   * @example
   * 20
   */
  tablesPartDone?: number;
  /**
   * @remarks
   * Latest data update time
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  updateTime?: string;
  /**
   * @remarks
   * Whether data is updated
   * 
   * @example
   * true
   */
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deleted: 'deleted',
      description: 'description',
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      extra: 'extra',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      location: 'location',
      name: 'name',
      numRows: 'numRows',
      owner: 'owner',
      partitions: 'partitions',
      partitionsDoing: 'partitionsDoing',
      partitionsDone: 'partitionsDone',
      partitionsFailed: 'partitionsFailed',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tables: 'tables',
      tablesDoing: 'tablesDoing',
      tablesDone: 'tablesDone',
      tablesFailed: 'tablesFailed',
      tablesPartDone: 'tablesPartDone',
      updateTime: 'updateTime',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deleted: 'boolean',
      description: 'string',
      dstName: 'string',
      dstProjectName: 'string',
      extra: 'string',
      id: 'number',
      lastDdlTime: 'string',
      location: 'string',
      name: 'string',
      numRows: 'number',
      owner: 'string',
      partitions: 'number',
      partitionsDoing: 'number',
      partitionsDone: 'number',
      partitionsFailed: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tables: 'number',
      tablesDoing: 'number',
      tablesDone: 'number',
      tablesFailed: 'number',
      tablesPartDone: 'number',
      updateTime: 'string',
      updated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsDbsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Database list
   */
  objectList?: ListMmsDbsResponseBodyDataObjectList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 13
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
      objectList: { 'type': 'array', 'itemType': ListMmsDbsResponseBodyDataObjectList },
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

export class ListMmsDbsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: ListMmsDbsResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * CF3F9978-260F-5204-94BE-30A4E6B54443
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
      data: ListMmsDbsResponseBodyData,
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

