// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @example
   * work-day
   */
  calendar?: string;
  childJobId?: string;
  /**
   * @example
   * {"cleanMode":"NUM_ONLY","totalRemain":300}
   */
  cleanMode?: string;
  /**
   * @example
   * 1963096506470832
   */
  creator?: string;
  /**
   * @example
   * 3
   */
  currentExecuteStatus?: number;
  /**
   * @example
   * 3
   */
  dataOffset?: number;
  description?: string;
  executorBlockStrategy?: string;
  /**
   * @example
   * jobDemoHandler
   */
  jobHandler?: string;
  /**
   * @example
   * 74
   */
  jobId?: number;
  /**
   * @example
   * xxljob
   */
  jobType?: string;
  lastExecuteEndTime?: string;
  lastExecuteStatus?: number;
  /**
   * @example
   * 5
   */
  maxAttempt?: number;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * job01
   */
  name?: string;
  /**
   * @example
   * {"failLimitTimes":1,"failEnable":true,"timeoutKillEnable":false,"missWorkerEnable":true,"timeoutEnable":true,"sendChannel":"","timeout":300,"successNotice":false}
   */
  noticeConfig?: string;
  noticeContacts?: string;
  /**
   * @example
   * name=10
   */
  parameters?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 12 * * ?
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * HangKong
   */
  timeZone?: string;
  /**
   * @example
   * HangKong
   */
  timezone?: string;
  /**
   * @example
   * 1963096506470832
   */
  updater?: string;
  xattrs?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      childJobId: 'ChildJobId',
      cleanMode: 'CleanMode',
      creator: 'Creator',
      currentExecuteStatus: 'CurrentExecuteStatus',
      dataOffset: 'DataOffset',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobId: 'JobId',
      jobType: 'JobType',
      lastExecuteEndTime: 'LastExecuteEndTime',
      lastExecuteStatus: 'LastExecuteStatus',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeZone: 'TimeZone',
      timezone: 'Timezone',
      updater: 'Updater',
      xattrs: 'Xattrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      childJobId: 'string',
      cleanMode: 'string',
      creator: 'string',
      currentExecuteStatus: 'number',
      dataOffset: 'number',
      description: 'string',
      executorBlockStrategy: 'string',
      jobHandler: 'string',
      jobId: 'number',
      jobType: 'string',
      lastExecuteEndTime: 'string',
      lastExecuteStatus: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: 'string',
      noticeContacts: 'string',
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeZone: 'string',
      timezone: 'string',
      updater: 'string',
      xattrs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

