// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDbsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The time when the database was created in MMS.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the database has been deleted.
   * 
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * for mms test
   */
  description?: string;
  /**
   * @remarks
   * The MaxCompute schema that corresponds to the source database. If the schema layer is not enabled for the destination MaxCompute project, this value is null. By default, this value is the same as the name of the source database.
   * 
   * @example
   * default
   */
  dstName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The additional information stored in JSON format.
   * 
   * @example
   * {}
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the database.
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
   * The storage location of the database.
   * 
   * @example
   * hdfs://master-1-1.c-6fc187819ed6bae0.cn-shanghai.emr.aliyuncs.com:9000/user/hive/warehouse
   */
  location?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * mms_test
   */
  name?: string;
  /**
   * @remarks
   * The number of data rows in the database.
   * 
   * @example
   * 23232
   */
  numRows?: number;
  /**
   * @remarks
   * The owner of the database.
   * 
   * @example
   * System user
   */
  owner?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 1000
   */
  partitions?: number;
  /**
   * @remarks
   * The partitions being migrated.
   * 
   * @example
   * 400
   */
  partitionsDoing?: number;
  /**
   * @remarks
   * The partitions that have been migrated.
   * 
   * @example
   * 200
   */
  partitionsDone?: number;
  /**
   * @remarks
   * The partitions that failed to migrate.
   * 
   * @example
   * 200
   */
  partitionsFailed?: number;
  /**
   * @remarks
   * The size of the database data, in bytes.
   * 
   * @example
   * 2342342
   */
  size?: number;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * @example
   * 2000015
   */
  sourceId?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The migration status. Valid values: INIT, DOING, FAILED, DONE, and PART_DONE.
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 100
   */
  tables?: number;
  /**
   * @remarks
   * The tables being migrated.
   * 
   * @example
   * 20
   */
  tablesDoing?: number;
  /**
   * @remarks
   * The tables that have been migrated.
   * 
   * @example
   * 20
   */
  tablesDone?: number;
  /**
   * @remarks
   * The tables that failed to migrate.
   * 
   * @example
   * 20
   */
  tablesFailed?: number;
  /**
   * @remarks
   * The tables that are partially migrated.
   * 
   * @example
   * 20
   */
  tablesPartDone?: number;
  /**
   * @remarks
   * The latest update time of the data. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  updateTime?: string;
  /**
   * @remarks
   * Indicates whether the data has been updated.
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
   * The list of databases.
   */
  objectList?: ListMmsDbsResponseBodyDataObjectList[];
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The returned data.
   */
  data?: ListMmsDbsResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
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

