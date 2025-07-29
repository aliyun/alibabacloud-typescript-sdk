// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.[](https://open.dingtalk.com/document/org/application-types)
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=**********
   */
  ding?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * @example
   * test***@***.com
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

export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The interval of retries after a job failure. Default value: 30. Unit: seconds.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * If you set TimeType to 1 (cron), you can specify calendar days.
   * 
   * @example
   * Business days
   */
  calendar?: string;
  /**
   * @remarks
   * The full path of the job interface class.
   * 
   * This field is available only when you set the job type to java. In this case, you must enter a full path.
   * 
   * @example
   * com.alibaba.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The number of threads that are triggered by a single worker at a time. Default value: 5. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The information about the alert contact.
   */
  contactInfo?: UpdateJobRequestContactInfo[];
  /**
   * @remarks
   * The script content. This parameter is required when you set the job type to python, shell, go, or k8s.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * If you set TimeType to 1 (cron), you can specify a time offset. Unit: seconds.
   * 
   * @example
   * 2400
   */
  dataOffset?: number;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The number of task distribution threads. Default value: 5. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **Stand-alone operation**: standalone
   * *   **Broadcast run**: broadcatst
   * *   **Visual MapReduce**: parallel
   * *   **MapReduce**: batch
   * *   **Shard run**: shard
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * Specifies whether to turn on Failure alarm. If the switch is turned on, an alert will be generated upon a failure. Valid values:
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
   * The number of consecutive failures. An alert will be received if the number of consecutive failures reaches the value of this parameter.
   * 
   * @example
   * 1
   */
  failTimes?: number;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the job ID on the Task Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The maximum number of retries after a job failure. This parameter is specified based on your business requirements.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances. Default value: 1. The default value indicates that only one instance is allowed to run at a time. When an instance is running, another instance is not triggered even if the scheduled time for running the instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to turn on No machine alarm available. If the switch is turned on, an alert will be generated when no machine is available for running the job. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * helloword
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The namespace source. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The number of tasks that can be pulled at a time. Default value: 100. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The user-defined parameters that you can obtain when the job is running.
   * 
   * @example
   * test
   */
  parameters?: string;
  priority?: number;
  /**
   * @remarks
   * The maximum number of tasks that can be queued. Default value: 10000. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 10000
   */
  queueSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The method that is used to send alerts. Only Short Message Service (SMS) is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * Specifies whether to turn on Successful notice. If the switch is turned on, a notice will be sent when a job succeeds.
   * 
   * @example
   * false
   */
  successNoticeEnable?: boolean;
  /**
   * @remarks
   * The interval of retries after a task failure. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The job mode. Valid values: push and pull. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * push
   */
  taskDispatchMode?: string;
  /**
   * @remarks
   * The number of retries after a task failure. This parameter is an advanced configuration item of the MapReduce job.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  /**
   * @remarks
   * Custom task template for the k8s task type.
   * 
   * @example
   * apiVersion: v1
   * kind: Pod
   * metadata:
   *   name: schedulerx-node-{JOB_ID}
   *   namespace: {NAMESPACE}
   * spec:
   *   containers:
   *   - name: node-job
   *     image: node:16
   *     imagePullPolicy: IfNotPresent
   *     volumeMounts:
   *     - name: script-node
   *       mountPath: script/node
   *     command: ["node", "script/node/node-{JOB_ID}.js"]
   *   volumes:
   *   - name: script-node
   *     configMap:
   *       name: schedulerx-configmap
   *       items:
   *       - key: schedulerx-node-{JOB_ID}
   *         path: node-{JOB_ID}.js
   *   restartPolicy: Never
   */
  template?: string;
  /**
   * @remarks
   * The time expression. Specify the time expression based on the value of TimeType:
   * 
   * *   If you set TimeType to **1** (cron), specify this parameter to a standard CRON expression.
   * *   If you set TimeType to **100** (api), no time expression is required.
   * *   If you set TimeType to **3** (fixed_rate), specify this parameter to a fixed frequency in seconds. For example, if you set this parameter to 30, the system triggers a job every 30 seconds.
   * *   If you set TimeType to **4** (second_delay), specify this parameter to a fixed delay after which the job is triggered. Valid values: 1 to 60. Unit: seconds.
   * 
   * @example
   * 30
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
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
  /**
   * @remarks
   * The timeout threshold. Unit: seconds.
   * 
   * @example
   * 7200
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to turn on Timeout alarm. If the switch is turned on, an alert will be generated upon a timeout. Valid values:
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
   * Specifies whether to turn on Timeout termination. If the switch is turned on, the job will be terminated upon a timeout. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  /**
   * @remarks
   * Time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * If you set JobType to k8s, this parameter is required. xxljob task: {"resource":"job"} shell task: {"image":"busybox","resource":"shell"}
   * 
   * @example
   * {"resource":"shell","fileFormat":"unix","templateType":"customTemplate"}
   */
  XAttrs?: string;
  static names(): { [key: string]: string } {
    return {
      attemptInterval: 'AttemptInterval',
      calendar: 'Calendar',
      className: 'ClassName',
      consumerSize: 'ConsumerSize',
      contactInfo: 'ContactInfo',
      content: 'Content',
      dataOffset: 'DataOffset',
      description: 'Description',
      dispatcherSize: 'DispatcherSize',
      executeMode: 'ExecuteMode',
      failEnable: 'FailEnable',
      failTimes: 'FailTimes',
      groupId: 'GroupId',
      jobId: 'JobId',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      missWorkerEnable: 'MissWorkerEnable',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      priority: 'Priority',
      queueSize: 'QueueSize',
      regionId: 'RegionId',
      sendChannel: 'SendChannel',
      successNoticeEnable: 'SuccessNoticeEnable',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskDispatchMode: 'TaskDispatchMode',
      taskMaxAttempt: 'TaskMaxAttempt',
      template: 'Template',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timeout: 'Timeout',
      timeoutEnable: 'TimeoutEnable',
      timeoutKillEnable: 'TimeoutKillEnable',
      timezone: 'Timezone',
      XAttrs: 'XAttrs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptInterval: 'number',
      calendar: 'string',
      className: 'string',
      consumerSize: 'number',
      contactInfo: { 'type': 'array', 'itemType': UpdateJobRequestContactInfo },
      content: 'string',
      dataOffset: 'number',
      description: 'string',
      dispatcherSize: 'number',
      executeMode: 'string',
      failEnable: 'boolean',
      failTimes: 'number',
      groupId: 'string',
      jobId: 'number',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      missWorkerEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageSize: 'number',
      parameters: 'string',
      priority: 'number',
      queueSize: 'number',
      regionId: 'string',
      sendChannel: 'string',
      successNoticeEnable: 'boolean',
      taskAttemptInterval: 'number',
      taskDispatchMode: 'string',
      taskMaxAttempt: 'number',
      template: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
      timezone: 'string',
      XAttrs: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contactInfo)) {
      $dara.Model.validateArray(this.contactInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

