// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMmsPartitionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @example
   * d1
   */
  dbName?: string;
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
      dbId: 'DbId',
      dbName: 'dbName',
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

