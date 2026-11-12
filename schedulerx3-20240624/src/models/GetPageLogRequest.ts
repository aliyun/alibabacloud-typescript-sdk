// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageLogRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The end timestamp in milliseconds.
   * 
   * @example
   * 1777292662000
   */
  endTime?: number;
  /**
   * @remarks
   * The job execution ID.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job01
   */
  jobName?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * hello word
   */
  keyword?: string;
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order. Valid values:
   * - **true**: Sorts the results in descending order.
   * - **false**: Sorts the results in ascending order.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The start timestamp in milliseconds.
   * 
   * @example
   * 1777292662000
   */
  startTime?: number;
  /**
   * @remarks
   * The executor address.
   * 
   * @example
   * 192.168.1.100
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      startTime: 'StartTime',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      endTime: 'number',
      jobExecutionId: 'string',
      jobName: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      startTime: 'number',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

