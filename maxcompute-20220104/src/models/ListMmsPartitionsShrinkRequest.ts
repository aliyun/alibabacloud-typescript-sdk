// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsPartitionsShrinkRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @example
   * asc
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      lastDdlTime: 'lastDdlTime',
      numRows: 'numRows',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDdlTime: 'string',
      numRows: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsPartitionsShrinkRequest extends $dara.Model {
  sorter?: ListMmsPartitionsShrinkRequestSorter;
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
   * 2024-12-17 19:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  statusShrink?: string;
  /**
   * @example
   * 20323
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
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      statusShrink: 'status',
      tableId: 'tableId',
      tableName: 'tableName',
      updated: 'updated',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsPartitionsShrinkRequestSorter,
      dbId: 'number',
      dbName: 'string',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusShrink: 'string',
      tableId: 'number',
      tableName: 'string',
      updated: 'boolean',
      value: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

