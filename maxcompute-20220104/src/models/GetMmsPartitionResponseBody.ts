// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsPartitionResponseBodyData extends $dara.Model {
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @example
   * mms_test
   */
  dstProjectName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * test
   */
  dstTableName?: string;
  /**
   * @example
   * p1=1/p2=abc
   */
  dstValue?: string;
  /**
   * @example
   * 2323
   */
  id?: number;
  /**
   * @remarks
   * lastDdlTime
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2323
   */
  numRows?: number;
  /**
   * @example
   * 12323
   */
  size?: number;
  /**
   * @example
   * 200018
   */
  sourceId?: number;
  /**
   * @example
   * demo
   */
  sourceName?: string;
  /**
   * @example
   * DONE
   */
  status?: string;
  /**
   * @example
   * 23
   */
  tableId?: number;
  /**
   * @example
   * t1
   */
  tableName?: string;
  /**
   * @example
   * false
   */
  updated?: boolean;
  /**
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
  data?: GetMmsPartitionResponseBodyData;
  /**
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

