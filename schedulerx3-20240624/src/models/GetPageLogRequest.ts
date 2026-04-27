// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageLogRequest extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1777292662000
   */
  endTime?: number;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * job01
   */
  jobName?: string;
  /**
   * @example
   * hello word
   */
  keyword?: string;
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
  /**
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @example
   * 1777292662000
   */
  startTime?: number;
  /**
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

