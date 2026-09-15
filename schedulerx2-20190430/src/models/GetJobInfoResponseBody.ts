// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of DingTalk.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=XXXXXX
   */
  ding?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * user@demo.com
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

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the failure alert. Valid values:
   * 
   * - **true**: Enables the failure alert.
   * - **false**: Disables the failure alert.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the alert for no available machines.
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
   * Specifies whether to enable the timeout alert. Valid values:
   * 
   * - **true**: Enables the timeout alert.
   * - **false**: Disables the timeout alert.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to terminate the current trigger upon timeout. This feature is disabled by default.
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
   * The contact information.
   */
  contactInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo[];
  /**
   * @remarks
   * The alert switch and threshold configuration.
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
   * The number of threads for a single trigger on a single machine. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The number of threads for subtask distribution. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The number of subtasks pulled per request for parallel nodes. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The maximum number of subtasks that can be cached in the queue. Default value: 10000.
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
   * The maximum number of retries for a subtask on failure.
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
   * The custom calendar for the **cron** type. This parameter is optional.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The time offset for the **cron** type. Unit: seconds.
   * 
   * @example
   * 0
   */
  dataOffset?: number;
  /**
   * @remarks
   * The time expression. The following time expression types are supported:
   * 
   * - **api**: No time expression is required.
   * - **fix_rate**: A fixed frequency value. For example, 30 indicates that the node is triggered every 30 seconds.
   * - **cron**: A standard cron expression.
   * - **second_delay**: A fixed delay in seconds before each execution (valid range: 1s to 60s).
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
   * - **3**: fix_rate
   * - **4**: second_delay
   * - **5**: one_time
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

export class GetJobInfoResponseBodyDataJobConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The retry interval on failure. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The full path of the node interface class. This field is available only for Java-type nodes.
   * 
   * @example
   * com.alibaba.test.helloword
   */
  className?: string;
  /**
   * @remarks
   * The script content for script-type nodes.
   * 
   * @example
   * echo "clear" > /home/admin/edas-container/logs/catalina.out
   */
  content?: string;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 1789454134000
   */
  endTime?: number;
  /**
   * @remarks
   * The node execution mode. Valid values:
   * 
   * - **standalone**: standalone
   * - **broadcatst**: broadcast
   * - **parallel**: parallel computing
   * - **grid**: in-memory grid
   * - **batch**: grid computing
   * - **shard**: shard
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * The full path of the file uploaded to Object Storage Service (OSS).
   * 
   * If you select JAR package execution, you can upload the corresponding JAR package to this OSS path.
   * 
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/schedulerX/test.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 538039
   */
  jobId?: number;
  /**
   * @remarks
   * The node monitoring information.
   */
  jobMonitorInfo?: GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo;
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
   * The advanced configuration. This configuration is available only for parallel computing, in-memory grid, and grid computing modes.
   */
  mapTaskXAttrs?: GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs;
  /**
   * @remarks
   * The maximum number of retries on failure. Set this parameter based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrently running instances. Default value: 1. A value of 1 indicates that if the previous trigger has not finished running, the next trigger is skipped even if the scheduled time has arrived.
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
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * - **1**: Enabled. The node can be triggered normally.
   * - **0**: Disabled. The node is not triggered.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time configuration information.
   */
  timeConfig?: GetJobInfoResponseBodyDataJobConfigInfoTimeConfig;
  /**
   * @remarks
   * The extended fields of the node.
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
   * The node configuration information.
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
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the specified node.
   */
  data?: GetJobInfoResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
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
   * Indicates whether the node details were retrieved. Valid values:
   * 
   * - **true**: The node details were retrieved.
   * - **false**: The node details failed to be retrieved.
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

