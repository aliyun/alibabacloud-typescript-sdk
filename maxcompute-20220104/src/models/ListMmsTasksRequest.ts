// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsTasksRequestSorter extends $dara.Model {
  /**
   * @remarks
   * Sorts tasks by start time.
   * 
   * @example
   * desc
   */
  startTime?: string;
  /**
   * @remarks
   * Sorts tasks by status.
   * 
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
   * The ID of the migration job.
   * 
   * @example
   * 10
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * test1
   */
  jobName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The partition value. This parameter is used to filter migration tasks by a specific partition value.
   * 
   * @example
   * p1=1/p2=abc
   */
  partition?: string;
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
   * The status of the migration task.
   * 
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

