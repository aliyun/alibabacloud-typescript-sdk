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
   * The mobile number of the user.
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
   * Indicates whether the feature of generating an alert upon a failure is enabled. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of generating an alert when no machine is available for running the job is enabled.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The method that is used to send an alert notification. Only Short Message Service (SMS) is supported.
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
   * Indicates whether the feature of generating an alert upon a timeout is enabled. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the feature of stopping job triggering upon a timeout is enabled. By default, the feature is disabled.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
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
   * The configurations of the alerting feature and the alert threshold.
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
   * The number of threads that are triggered by a standalone job at a time. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The number of task distribution threads. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The number of tasks that are pulled by a parallel job at a time. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The maximum number of task queues that can be cached. Default value: 10000.
   * 
   * @example
   * 10000
   */
  queueSize?: number;
  /**
   * @remarks
   * The interval at which the system retries to run the task after a task failure.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The number of retries after a task failure.
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
   * If the TimeType parameter is set to cron, you can specify custom calendar days.
   * 
   * @example
   * Business days
   */
  calendar?: string;
  /**
   * @remarks
   * The time offset if the TimeType parameter is set to cron. Unit: seconds.
   * 
   * @example
   * 0
   */
  dataOffset?: number;
  /**
   * @remarks
   * The time expression. Valid values:
   * 
   * *   **api**: indicates that no time expression is used to specify the time when to schedule the job.
   * *   **fix_rate**: indicates that the job is triggered at a fixed frequency. For example, a value of 30 indicates that the job is triggered every 30 seconds.
   * *   **cron**: indicates that a standard CRON expression is used to specify the time when to schedule the job.
   * *   **second_delay**: indicates that the job is triggered after a fixed delay. Valid values: 1 to 60. Unit: seconds.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The method that is used to specify the time when to schedule the job. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fix_rate
   * *   **4**: second_delay
   * *   **100**: api
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
   * The interval at which the system retries to run the job after a job failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the job interface class. This parameter is returned only for a Java job.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The script of the job. This parameter is returned only for a Python, Shell, or Go job.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **standalone**: The job runs in standalone mode.
   * *   **broadcast**: The job runs in broadcast mode.
   * *   **parallel**: The job runs in parallel computing mode.
   * *   **grid**: The job runs in memory grid mode.
   * *   **batch**: The job runs in grid computing mode.
   * *   **shard**: The job runs in multipart mode.
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path to which a JAR package is uploaded in Object Storage Service (OSS).
   * 
   * @example
   * https:doc***.oss-cn-hangzhou.aliyuncs.com/sc-****-D-0.0.2-SNAPSHOT.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 99341
   */
  jobId?: number;
  /**
   * @remarks
   * The monitoring information of the job.
   */
  jobMonitorInfo?: ListJobsResponseBodyDataJobsJobMonitorInfo;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The advanced configurations of the job. The parameters are returned only if the value of the ExecuteMode parameter is parallel, grid, or batch.
   */
  mapTaskXAttrs?: ListJobsResponseBodyDataJobsMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries after a job failure. This parameter is specified based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of instances that can concurrently run for the job. Default value: 1. A value of 1 indicates that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The user-defined parameters. These parameters can be obtained when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * Indicates whether the job is enabled. Valid values:
   * 
   * *   **1**: The job is enabled and can be triggered.
   * *   **0**: The job is disabled and cannot be triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configurations.
   */
  timeConfig?: ListJobsResponseBodyDataJobsTimeConfig;
  /**
   * @remarks
   * The extended fields.
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
   * The jobs and their details.
   */
  jobs?: ListJobsResponseBodyDataJobs[];
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyDataJobs },
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
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the jobs.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if an error occurs.
   * 
   * @example
   * namespace can not find namespace: 1a72ecb1-b4cc-400a-a71b-20cdec9b****, namespaceSource:null
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   **true**: The call is successful.
   * *   **false**: The call fails.
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

