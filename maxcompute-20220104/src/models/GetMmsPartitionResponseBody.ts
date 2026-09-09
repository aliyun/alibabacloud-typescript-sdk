// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsPartitionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the database that contains the partition. The name for this metadata layer depends on the data source. For example, it is a Dataset in BigQuery, a Database in Hive, or a Schema in Databricks and MaxCompute.
   * 
   * @example
   * 12
   */
  dbId?: number;
  /**
   * @remarks
   * The name of the database. The name for this metadata layer depends on the data source. For example, it is a Dataset in BigQuery, a Database in Hive, or a Schema in Databricks and MaxCompute.
   * 
   * @example
   * d1
   */
  dbName?: string;
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
   * The name of the destination MaxCompute schema. This parameter is null if the destination MaxCompute project does not use a schema layer.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The name of the destination MaxCompute table.
   * 
   * @example
   * test
   */
  dstTableName?: string;
  /**
   * @remarks
   * The value of the destination MaxCompute partition. By default, this value is the same as the source partition value.
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
   * The time of the last DDL operation.
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
   * 12323
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
   * Indicates whether the metadata is updated.
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

export class GetMmsPartitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The partition object.
   */
  data?: GetMmsPartitionResponseBodyData;
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
      data: GetMmsPartitionResponseBodyData,
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

