// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsPartitionsShrinkRequestSorter extends $dara.Model {
  /**
   * @remarks
   * Sorts by lastDdlTime.
   * 
   * @example
   * desc
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * Sorts by number of rows.
   * 
   * @example
   * desc
   */
  numRows?: string;
  /**
   * @remarks
   * Sorts by data size.
   * 
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
   * @remarks
   * The database ID.
   * 
   * @example
   * 2
   */
  dbId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * d1
   */
  dbName?: string;
  /**
   * @remarks
   * The maximum lastDdlTime value.
   * 
   * @example
   * 2024-12-17 19:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @remarks
   * The minimum lastDdlTime value.
   * 
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The migration status.
   */
  statusShrink?: string;
  /**
   * @remarks
   * The ID of the table that contains the partition.
   * 
   * @example
   * 20323
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
   * Filters partitions whose metadata has been updated.
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

