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
   * Specifies whether to enable the failure alert switch. Valid values:
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
   * Specifies whether to enable the no-available-machine alert.
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
   * The timeout threshold, in seconds. Default value: 7200.
   * 
   * @example
   * 12300
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the timeout alert switch. Valid values:
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
   * Specifies whether to enable the timeout termination switch for the current trigger. This is disabled by default. Valid values:
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
   * The alert switch and threshold configuration.
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
   * The number of subtasks pulled per batch for a parallel node. Default value: 100.
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
   * The retry interval for a subtask on failure.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The number of retries for a subtask on failure.
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
   * The time offset that can be specified for the cron type, in seconds.
   * 
   * @example
   * 0
   */
  dataOffset?: number;
  /**
   * @remarks
   * The time expression. Valid values:
   * 
   * - **api**: No time expression.
   * 
   * - **fix_rate**: A specific fixed frequency value. For example, 30 indicates that the node is triggered every 30 seconds.
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
   * The time configuration type. Valid values:
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
   * The retry interval on error, in seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the node interface class. This field is returned only when the node is of the Java type.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The script code content for Python, Shell, or Go node types.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The node execution mode. Valid values:
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
   * The node ID.
   * 
   * @example
   * 99341
   */
  jobId?: number;
  /**
   * @remarks
   * The node monitoring information.
   */
  jobMonitorInfo?: ListJobsResponseBodyDataJobsJobMonitorInfo;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The advanced configuration. This is used only for parallel computing, memory grid, and grid computing.
   */
  mapTaskXAttrs?: ListJobsResponseBodyDataJobsMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries on error. Set this based on business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrently running instances. Default value: 1. This means that if the previous trigger has not finished running, the next trigger will not be initiated even if the scheduled time has arrived.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * helloworld
   */
  name?: string;
  /**
   * @remarks
   * The user-defined parameters that can be obtained at runtime.
   * 
   * @example
   * test
   */
  parameters?: string;
  startTime?: number;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * - **1**: Enabled. The node can be triggered normally.
   * 
   * - **0**: Disabled. The node will not be triggered.
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
   * The node extension field.
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
   * The node list and node details.
   */
  jobs?: ListJobsResponseBodyDataJobs[];
  /**
   * @remarks
   * The page number.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
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
   * The node list information.
   */
  data?: ListJobsResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only if an error occurs.
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
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
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

