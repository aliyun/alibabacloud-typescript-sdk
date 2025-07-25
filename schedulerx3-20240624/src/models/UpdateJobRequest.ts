// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequestNoticeConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @example
   * true
   */
  failLimitTimes?: number;
  /**
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @example
   * webhook,sms,mail,phone
   */
  sendChannel?: string;
  /**
   * @example
   * true
   */
  successNotice?: boolean;
  /**
   * @example
   * 90
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

export class UpdateJobRequestNoticeContacts extends $dara.Model {
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

export class UpdateJobRequest extends $dara.Model {
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
   * 74
   */
  jobId?: number;
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
   * @example
   * test-job
   */
  name?: string;
  noticeConfig?: UpdateJobRequestNoticeConfig;
  noticeContacts?: UpdateJobRequestNoticeContacts[];
  /**
   * @example
   * test
   */
  parameters?: string;
  /**
   * @example
   * 10
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
   * 1716902187
   */
  startTime?: number;
  /**
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @example
   * Asia/Beijing
   */
  timezone?: string;
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
      jobId: 'JobId',
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
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
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
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      name: 'string',
      noticeConfig: UpdateJobRequestNoticeConfig,
      noticeContacts: { 'type': 'array', 'itemType': UpdateJobRequestNoticeContacts },
      parameters: 'string',
      priority: 'number',
      routeStrategy: 'number',
      script: 'string',
      startTime: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
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

