// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsPartitionsShrinkRequestSorter } from "./ListMmsPartitionsShrinkRequestSorter";


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

