// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsJobsRequestSorter extends $dara.Model {
  /**
   * @remarks
   * Sorting by status
   * 
   * @example
   * desc
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMmsJobsRequest extends $dara.Model {
  sorter?: ListMmsJobsRequestSorter;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * mms_test
   */
  dstDbName?: string;
  /**
   * @remarks
   * The destination MaxCompute table.
   * 
   * @example
   * test_table_1
   */
  dstTableName?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of items to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * test_db_1
   */
  srcDbName?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * test_table_1
   */
  srcTableName?: string;
  /**
   * @remarks
   * The status of the migration job.
   * 
   * @example
   * DOING
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the job is stopped.
   * 
   * @example
   * false
   */
  stopped?: number;
  /**
   * @remarks
   * The timer ID.
   * 
   * @example
   * 1
   */
  timerId?: number;
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
      timerId: 'timerId',
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
      timerId: 'number',
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

