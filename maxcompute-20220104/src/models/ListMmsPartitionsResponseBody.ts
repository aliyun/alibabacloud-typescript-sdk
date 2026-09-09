// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsPartitionsResponseBodyDataObjectList extends $dara.Model {
  /**
   * @remarks
   * The ID of the database that contains the partition. The term "database" refers to different metadata layers across data sources. For example, it maps to Dataset in BigQuery, Database in Hive, Schema in Databricks, and Schema in MaxCompute.
   * 
   * @example
   * 196
   */
  dbId?: number;
  /**
   * @remarks
   * The database name. The term "database" refers to different metadata layers across data sources. For example, it maps to Dataset in BigQuery, Database in Hive, Schema in Databricks, and Schema in MaxCompute.
   * 
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @remarks
   * The destination MaxCompute project name.
   * 
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The destination MaxCompute schema name. This field is empty for MaxCompute projects that do not use schemas.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The destination MaxCompute table name.
   * 
   * @example
   * default
   */
  dstTableName?: string;
  /**
   * @remarks
   * The destination MaxCompute partition value. By default, this matches the source partition value.
   * 
   * @example
   * p1=1/p2=abc
   */
  dstValue?: string;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 2323
   */
  id?: number;
  /**
   * @remarks
   * The time when the DDL was last changed.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The number of rows.
   * 
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @remarks
   * The data size in bytes.
   * 
   * @example
   * 23223
   */
  size?: number;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 200018
   */
  sourceId?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @remarks
   * The migration status.
   * 
   * @example
   * DONE
   */
  status?: string;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @remarks
   * Indicates whether the metadata has been updated.
   * 
   * @example
   * false
   */
  updated?: boolean;
  /**
   * @remarks
   * The partition value.
   * 
   * @example
   * p1=1/p2=abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dbId: 'dbId',
      dbName: 'dbName',
      dstProjectName: 'dstProjectName',
      dstSchemaName: 'dstSchemaName',
      dstTableName: 'dstTableName',
      dstValue: 'dstValue',
      id: 'id',
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
      sourceId: 'sourceId',
      sourceName: 'sourceName',
      status: 'status',
      tableId: 'tableId',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      dbName: 'string',
      dstProjectName: 'string',
      dstSchemaName: 'string',
      dstTableName: 'string',
      dstValue: 'string',
      id: 'number',
      lastDdlTime: 'string',
      numRows: 'number',
      size: 'number',
      sourceId: 'number',
      sourceName: 'string',
      status: 'string',
      tableId: 'number',
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of partitions.
   */
  objectList?: ListMmsPartitionsResponseBodyDataObjectList[];
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
   * The total number of partitions.
   * 
   * @example
   * 1000
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
      objectList: { 'type': 'array', 'itemType': ListMmsPartitionsResponseBodyDataObjectList },
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

export class ListMmsPartitionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListMmsPartitionsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9F872FD-5DDE-30A6-8C8A-1B8C6A81059F
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
      data: ListMmsPartitionsResponseBodyData,
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

