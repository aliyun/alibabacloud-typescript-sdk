// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMmsJobsRequestSorter } from "./ListMmsJobsRequestSorter";


export class ListMmsJobsRequest extends $dara.Model {
  sorter?: ListMmsJobsRequestSorter;
  /**
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @example
   * test_table_1
   */
  dstTableName?: string;
  /**
   * @example
   * demo
   */
  name?: string;
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
  /**
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @example
   * DOING
   */
  status?: string;
  /**
   * @example
   * false
   */
  stopped?: number;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dstDbName: 'dstDbName',
      dstTableName: 'dstTableName',
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      srcDbName: 'srcDbName',
      srcTableName: 'srcTableName',
      status: 'status',
      stopped: 'stopped',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsJobsRequestSorter,
      dstDbName: 'string',
      dstTableName: 'string',
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      srcDbName: 'string',
      srcTableName: 'string',
      status: 'string',
      stopped: 'number',
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

