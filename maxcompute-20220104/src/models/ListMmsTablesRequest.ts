// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsTablesRequestSorter } from "./ListMmsTablesRequestSorter";


export class ListMmsTablesRequest extends $dara.Model {
  sorter?: ListMmsTablesRequestSorter;
  /**
   * @example
   * 197
   */
  dbId?: number;
  /**
   * @example
   * mms_test
   */
  dbName?: string;
  /**
   * @example
   * true
   */
  hasPartitions?: boolean;
  /**
   * @example
   * 2024-12-19 15:44:42
   */
  lastDdlTimeEnd?: string;
  /**
   * @example
   * 2024-12-17 15:44:42
   */
  lastDdlTimeStart?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * false
   */
  onlyName?: boolean;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  status?: string[];
  /**
   * @example
   * MANAGED_TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dbId: 'dbId',
      dbName: 'dbName',
      hasPartitions: 'hasPartitions',
      lastDdlTimeEnd: 'lastDdlTimeEnd',
      lastDdlTimeStart: 'lastDdlTimeStart',
      name: 'name',
      onlyName: 'onlyName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTablesRequestSorter,
      dbId: 'number',
      dbName: 'string',
      hasPartitions: 'boolean',
      lastDdlTimeEnd: 'string',
      lastDdlTimeStart: 'string',
      name: 'string',
      onlyName: 'boolean',
      pageNum: 'number',
      pageSize: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.sorter && typeof (this.sorter as any).validate === 'function') {
      (this.sorter as any).validate();
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

