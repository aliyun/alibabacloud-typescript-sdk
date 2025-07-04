// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogEventRequest extends $dara.Model {
  /**
   * @example
   * xxl-job-executor-perf-test-241
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-684d02ee5a6
   */
  clusterId?: string;
  /**
   * @example
   * 1721636220
   */
  endTime?: number;
  /**
   * @example
   * INFO
   */
  event?: string;
  /**
   * @example
   * 101
   */
  jobExecutionId?: number;
  /**
   * @example
   * test
   */
  jobName?: string;
  /**
   * @example
   * test_partition_tbl
   */
  keyword?: string;
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
   * false
   */
  reverse?: boolean;
  /**
   * @example
   * 1721268302000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      event: 'Event',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      event: 'string',
      jobExecutionId: 'number',
      jobName: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

