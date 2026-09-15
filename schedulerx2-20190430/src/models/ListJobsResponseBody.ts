// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=**********
   */
  ding?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * user@mail.com
   */
  userMail?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * userA
   */
  userName?: string;
  /**
   * @remarks
   * The mobile phone number of the user.
   * 
   * @example
   * 1381111****
   */
  userPhone?: string;
  static names(): { [key: string]: string } {
    return {
      ding: 'Ding',
      userMail: 'UserMail',
      userName: 'UserName',
      userPhone: 'UserPhone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ding: 'string',
      userMail: 'string',
      userName: 'string',
      userPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the failure alert is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the no-available-machine alert is enabled.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The alert notification method. Currently, only sms is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * The timeout threshold. Unit: seconds. Default value: 7200.
   * 
   * @example
   * 12300
   */
  timeout?: number;
  /**
   * @remarks
   * Indicates whether the timeout alert is enabled. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to terminate the current trigger upon timeout. This feature is disabled by default. Valid values:
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  timeoutKillEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      failEnable: 'FailEnable',
      missWorkerEnable: 'MissWorkerEnable',
      sendChannel: 'SendChannel',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failEnable: 'boolean',
      missWorkerEnable: 'boolean',
      sendChannel: 'string',
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

export class ListJobsResponseBodyDataJobsJobMonitorInfo extends $dara.Model {
  /**
   * @remarks
   * The contact information.
   */
  contactInfo?: ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo[];
  /**
   * @remarks
   * The alert switch and threshold configurations.
   */
  monitorConfig?: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo },
      monitorConfig: ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig,
    };
  }

  validate() {
    if(Array.isArray(this.contactInfo)) {
      $dara.Model.validateArray(this.contactInfo);
    }
    if(this.monitorConfig && typeof (this.monitorConfig as any).validate === 'function') {
      (this.monitorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsMapTaskXAttrs extends $dara.Model {
  /**
   * @remarks
   * The number of threads for a single trigger on a single machine. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The number of subtask dispatch threads. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The number of subtasks pulled per request for parallel jobs. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The upper limit of the subtask queue cache. Default value: 10000.
   * 
   * @example
   * 10000
   */
  queueSize?: number;
  /**
   * @remarks
   * The retry interval for failed subtasks.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The maximum number of retries for failed subtasks.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  static names(): { [key: string]: string } {
    return {
      consumerSize: 'ConsumerSize',
      dispatcherSize: 'DispatcherSize',
      pageSize: 'PageSize',
      queueSize: 'QueueSize',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerSize: 'number',
      dispatcherSize: 'number',
      pageSize: 'number',
      queueSize: 'number',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsTimeConfig extends $dara.Model {
  /**
   * @remarks
   * The custom calendar that can be specified for the cron type.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The time offset that can be specified for the cron type. Unit: seconds.
   * 
   * @example
   * 0
   */
  dataOffset?: number;
  /**
   * @remarks
   * The time expression. The following time expression types are supported:
   * 
   * - **api**: No time expression.
   * 
   * - **fix_rate**: A fixed frequency value. For example, 30 indicates that the job is triggered every 30 seconds.
   * 
   * - **cron**: A standard cron expression.
   * 
   * - **second_delay**: A fixed delay in seconds before each execution (1s to 60s).
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time configuration type. The following time types are supported:
   * 
   * - **1**: cron
   * 
   * - **3**: fix_rate
   * 
   * - **4**: second_delay
   * 
   * - **100**: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      calendar: 'Calendar',
      dataOffset: 'DataOffset',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendar: 'string',
      dataOffset: 'number',
      timeExpression: 'string',
      timeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobs extends $dara.Model {
  /**
   * @remarks
   * The error retry interval. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the job interface class. This field is returned only when the job is of the Java type.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The script code content for Python, Shell, or Go job types.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The job expiration time.
   * 
   * @example
   * 1776132529000
   */
  endTime?: number;
  /**
   * @remarks
   * The job execution mode. Valid values:
   * 
   * - **standalone**: standalone
   * 
   * - **broadcast**: broadcast
   * 
   * - **parallel**: parallel computing
   * 
   * - **grid**: memory grid
   * 
   * - **batch**: grid computing
   * 
   * - **shard**: shard
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path of the JAR package in OSS.
   * 
   * @example
   * https:doc***.oss-cn-hangzhou.aliyuncs.com/sc-****-D-0.0.2-SNAPSHOT.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 99341
   */
  jobId?: number;
  /**
   * @remarks
   * The job monitoring information.
   */
  jobMonitorInfo?: ListJobsResponseBodyDataJobsJobMonitorInfo;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The advanced configurations. This parameter is applicable only to parallel computing, memory grid, and grid computing.
   */
  mapTaskXAttrs?: ListJobsResponseBodyDataJobsMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of error retries. Set this parameter based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrently running instances. Default value: 1. This means that if the previous trigger has not finished running, the next trigger is skipped even if the scheduled time has arrived.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters that can be retrieved at runtime.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * The start timestamp in milliseconds. A value of -1 indicates immediate start.
   * 
   * @example
   * 1789454134000
   */
  startTime?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - **1**: Enabled. The job can be triggered normally.
   * 
   * - **0**: Disabled. The job is not triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configuration information.
   */
  timeConfig?: ListJobsResponseBodyDataJobsTimeConfig;
  /**
   * @remarks
   * The extended fields of the job.
   * 
   * @example
   * {"pageSize":5,"queueSize":10,"consumerSize":5,"dispatcherSize":5,"taskMaxAttempt":0,"taskAttemptInterval":0,"globalConsumerSize":1000,"taskDispatchMode":"push"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      className: 'ClassName',
      content: 'Content',
      description: 'Description',
      endTime: 'EndTime',
      executeMode: 'ExecuteMode',
      jarUrl: 'JarUrl',
      jobId: 'JobId',
      jobMonitorInfo: 'JobMonitorInfo',
      jobType: 'JobType',
      mapTaskXAttrs: 'MapTaskXAttrs',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      parameters: 'Parameters',
      startTime: 'StartTime',
      status: 'Status',
      timeConfig: 'TimeConfig',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      className: 'string',
      content: 'string',
      description: 'string',
      endTime: 'number',
      executeMode: 'string',
      jarUrl: 'string',
      jobId: 'number',
      jobMonitorInfo: ListJobsResponseBodyDataJobsJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: ListJobsResponseBodyDataJobsMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      startTime: 'number',
      status: 'number',
      timeConfig: ListJobsResponseBodyDataJobsTimeConfig,
      XAttrs: 'string',
    };
  }

  validate() {
    if(this.jobMonitorInfo && typeof (this.jobMonitorInfo as any).validate === 'function') {
      (this.jobMonitorInfo as any).validate();
    }
    if(this.mapTaskXAttrs && typeof (this.mapTaskXAttrs as any).validate === 'function') {
      (this.mapTaskXAttrs as any).validate();
    }
    if(this.timeConfig && typeof (this.timeConfig as any).validate === 'function') {
      (this.timeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job list and job details.
   */
  jobs?: ListJobsResponseBodyDataJobs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 299
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobs },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The job list information.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * namespace can not find namespace: 1a72ecb1-b4cc-400a-a71b-20cdec9b****, namespaceSource:null
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: Successful.
   * 
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListJobsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

