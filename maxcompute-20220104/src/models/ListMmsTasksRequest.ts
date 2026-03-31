// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTasksRequestSorter extends $dara.Model {
  /**
   * @example
   * desc
   */
  startTime?: string;
  /**
   * @example
   * asc
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      startTime: 'startTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startTime: 'string',
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

export class ListMmsTasksRequest extends $dara.Model {
  sorter?: ListMmsTasksRequestSorter;
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
   * 10
   */
  jobId?: number;
  /**
   * @example
   * test1
   */
  jobName?: string;
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
   * p1=1/p2=abc
   */
  partition?: string;
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
   * DATA_DOING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      sorter: 'sorter',
      dstDbName: 'dstDbName',
      dstTableName: 'dstTableName',
      jobId: 'jobId',
      jobName: 'jobName',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      partition: 'partition',
      srcDbName: 'srcDbName',
      srcTableName: 'srcTableName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sorter: ListMmsTasksRequestSorter,
      dstDbName: 'string',
      dstTableName: 'string',
      jobId: 'number',
      jobName: 'string',
      pageNum: 'number',
      pageSize: 'number',
      partition: 'string',
      srcDbName: 'string',
      srcTableName: 'string',
      status: 'string',
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

