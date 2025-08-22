// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobRequestNoticeConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @example
   * 1
   */
  failLimitTimes?: number;
  /**
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @example
   * mail
   */
  sendChannel?: string;
  /**
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @example
   * 30
   */
  timeout?: number;
  /**
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      failLimitTimes: 'FailLimitTimes',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      successNotice: 'SuccessNotice',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      failLimitTimes: 'number',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
      successNotice: 'boolean',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestNoticeContacts extends $dara.Model {
  /**
   * @example
   * 1
   */
  contactType?: number;
  /**
   * @example
   * xiaoming
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactType: 'ContactType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 3
   */
  attemptInterval?: number;
  /**
   * @example
   * workday
   */
  calendar?: string;
  childJobId?: string;
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
   * test
   */
  description?: string;
  /**
   * @example
   * 1
   */
  executorBlockStrategy?: number;
  /**
   * @example
   * testJobVoidHandler
   */
  jobHandler?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  jobType?: string;
  /**
   * @example
   * 3
   */
  maxAttempt?: number;
  /**
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-job
   */
  name?: string;
  noticeConfig?: CreateJobRequestNoticeConfig;
  noticeContacts?: CreateJobRequestNoticeContacts[];
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  routeStrategy?: number;
  script?: string;
  /**
   * @example
   * 1701310327000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  timeType?: number;
  /**
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      childJobId: 'ChildJobId',
      clusterId: 'ClusterId',
      description: 'Description',
      executorBlockStrategy: 'ExecutorBlockStrategy',
      jobHandler: 'JobHandler',
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      noticeConfig: 'NoticeConfig',
      noticeContacts: 'NoticeContacts',
      parameters: 'Parameters',
      priority: 'Priority',
      routeStrategy: 'RouteStrategy',
      script: 'Script',
      startTime: 'StartTime',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      attemptInterval: 'number',
      calendar: 'string',
      childJobId: 'string',
      clusterId: 'string',
      description: 'string',
      executorBlockStrategy: 'number',
      jobHandler: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: CreateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': CreateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      script: 'string',
      startTime: 'number',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.noticeConfig && typeof (this.noticeConfig as any).validate === 'function') {
      (this.noticeConfig as any).validate();
    }
    if(Array.isArray(this.noticeContacts)) {
      $dara.Model.validateArray(this.noticeContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

