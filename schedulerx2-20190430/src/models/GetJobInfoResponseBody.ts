// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=XXXXXX
   */
  ding?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * user@demo.com
   */
  userMail?: string;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * userA
   */
  userName?: string;
  /**
   * @remarks
   * The mobile phone number of the alert contact.
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

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Failure alarm switch was turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the No machine alarm available switch was turned on.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The method used to send alerts. Only Short Message Service (SMS) is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * The timeout threshold. Default value: 7200. Unit: seconds.
   * 
   * @example
   * 12300
   */
  timeout?: number;
  /**
   * @remarks
   * Indicates whether the Timeout alarm switch was turned on. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Indicates whether the Timeout termination switch was turned on. The switch is turned off by default.
   * 
   * @example
   * true
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

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo extends $dara.Model {
  /**
   * @remarks
   * The alert contact Information.
   */
  contactInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo[];
  /**
   * @remarks
   * The configurations of the alerting features and the alert thresholds.
   */
  monitorConfig?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig;
  static names(): { [key: string]: string } {
    return {
      contactInfo: 'ContactInfo',
      monitorConfig: 'MonitorConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInfo: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo },
      monitorConfig: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig,
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

export class GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs extends $dara.Model {
  /**
   * @remarks
   * The number of threads that were triggered by a single worker at a time. Default value: 5.
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
   * The number of tasks that were pulled by a parallel job at a time. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The maximum number of tasks that can be queued. Default value: 10000.
   * 
   * @example
   * 10000
   */
  queueSize?: number;
  /**
   * @remarks
   * The interval at which the system retried to run the task after a task failure.
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

export class GetJobInfoResponseBodyDataJobConfigInfoTimeConfig extends $dara.Model {
  /**
   * @remarks
   * Custom calendar days specified if TimeType is set to **1** (cron).
   * 
   * @example
   * Business days
   */
  calendar?: string;
  /**
   * @remarks
   * The time offset specified if TimeType is set to **1** (cron). Unit: seconds.
   * 
   * @example
   * 0
   */
  dataOffset?: number;
  /**
   * @remarks
   * The time expression specified based on the value of TimeType:
   * 
   * *   If TimeType is set to **100** (api), no time expression is required.
   * *   If TimeType is set to **3** (fix_rate), this parameter value indicates the specific and fixed frequency. For example, if the value is 30, the system triggers a job every 30 seconds.
   * *   If TimeType is set to **1** (cron), this parameter value indicates the standard CRON expression used to specify the time when to schedule the job.
   * *   If TimeType is set to **4** (second_delay), this parameter value indicates the fixed delay after which the job is triggered. Valid values: 1 to 60. Unit: seconds.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fix_rate
   * *   **4**: second_delay
   * *   **5**: one_time
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

export class GetJobInfoResponseBodyDataJobConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The interval at which the system retried to run the job after a job failure. Default value: 30. Unit: seconds.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the job interface class. This parameter is returned only for jobs whose job type is Java.
   * 
   * @example
   * com.alibaba.test.helloword
   */
  className?: string;
  /**
   * @remarks
   * The script of a script job.
   * 
   * @example
   * echo "clear" > /home/admin/edas-container/logs/catalina.out
   */
  content?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **Stand-alone operation**: standalone
   * *   **Broadcast run**: broadcast
   * *   **Visual MapReduce**: parallel
   * *   **MapReduce**: batch
   * *   **Shard run**: sharding
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path used to upload files to Object Storage Service (OSS).
   * 
   * If you use a JAR package, you can upload the JAR package to this OSS path.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/schedulerX/test.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 538039
   */
  jobId?: number;
  /**
   * @remarks
   * The monitoring information of the job.
   */
  jobMonitorInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo;
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
   * The advanced configurations of the job.
   */
  mapTaskXAttrs?: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries after a job failure. This parameter was specified based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances. Default value: 1. The default value indicates that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the next instance is reached.
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
   * The user-defined parameters that you can obtain when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  /**
   * @remarks
   * Indicates whether the job was enabled. Valid values:
   * 
   * *   **1**: The job was enabled and could be triggered.
   * *   **0**: The job was disabled and could not be triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configurations.
   */
  timeConfig?: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig;
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
      jobMonitorInfo: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo,
      jobType: 'string',
      mapTaskXAttrs: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs,
      maxAttempt: 'number',
      maxConcurrency: 'string',
      name: 'string',
      parameters: 'string',
      status: 'number',
      timeConfig: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig,
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

export class GetJobInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configurations of the job.
   */
  jobConfigInfo?: GetJobInfoResponseBodyDataJobConfigInfo;
  static names(): { [key: string]: string } {
    return {
      jobConfigInfo: 'JobConfigInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobConfigInfo: GetJobInfoResponseBodyDataJobConfigInfo,
    };
  }

  validate() {
    if(this.jobConfigInfo && typeof (this.jobConfigInfo as any).validate === 'function') {
      (this.jobConfigInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the job.
   */
  data?: GetJobInfoResponseBodyData;
  /**
   * @remarks
   * The error message returned only if an error occurs.
   * 
   * @example
   * jobid: 92583 not match groupId: testSchedulerx.defaultGroup
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job details were obtained. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      data: GetJobInfoResponseBodyData,
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

