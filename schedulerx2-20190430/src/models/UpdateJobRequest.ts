// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot in the DingTalk group for alert contacts. References: [DingTalk development documentation](https://open.dingtalk.com/document/org/application-types).
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
   * test***@***.com
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

export class UpdateJobRequest extends $dara.Model {
  /**
   * @remarks
   * The retry interval on errors. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  attemptInterval?: number;
  /**
   * @remarks
   * The custom calendar that can be optionally specified for the cron type.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The full path of the node interface class.
   * 
   * This field is required only for Java node types, and the full path must be specified.
   * 
   * @example
   * com.alibaba.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The number of threads for a single trigger on a single machine. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The contact information for the node.
   * >Notice: This field is deprecated.</notice>
   */
  contactInfo?: UpdateJobRequestContactInfo[];
  /**
   * @remarks
   * - If the node type is python, shell, or k8s, specify the corresponding script content.
   * - If the node type is golang, the content format example is {"jobName":"HelloWorld"}.
   * 
   * @example
   * echo \\"hello\\"
   */
  content?: string;
  /**
   * @remarks
   * The time offset that can be optionally specified for the cron type. Unit: seconds.
   * 
   * @example
   * 2400
   */
  dataOffset?: number;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The number of subtask dispatch threads. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The node execution mode. Valid values:
   * 
   * - **standalone**: standalone
   * - **broadcatst**: broadcast
   * - **parallel**: visual MapReduce
   * - **batch**: MapReduce
   * - **shard**: shard
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the failure alert. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The number of consecutive failures before an alert is triggered.
   * 
   * @example
   * 1
   */
  failTimes?: number;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The node ID. You can obtain the node ID on the Task Management page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The maximum number of retries on errors. Set this parameter based on your business requirements.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrently running instances. Default value: 1. This means that if the previous trigger has not finished running, the next trigger is not performed even if the scheduled time has arrived.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to enable the no-available-machine alert. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * helloword
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for special third-party users.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The number of subtasks pulled per request. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
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
   * The node priority. Valid values:
   * - **1**: low
   * - **5**: medium
   * - **10**: high
   * - **15**: very high
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The maximum cache size of the subtask queue. Default value: 10000.
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
   * The alert notification method. Currently, only sms is supported.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to enable the success notification.
   * 
   * @example
   * false
   */
  successNoticeEnable?: boolean;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The retry interval for failed subtasks.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. Specifies the push model or pull model.
   * 
   * @example
   * push
   */
  taskDispatchMode?: string;
  /**
   * @remarks
   * The advanced configuration for parallel grid tasks. The number of retries for failed subtasks.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  /**
   * @remarks
   * The custom task template for k8s node types.
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
   * The time expression. Set the time expression based on the selected time type.
   * 
   * - **cron**: Specify a standard cron expression. Online verification is supported.
   * - **api**: No time expression is required.
   * - **fixed_rate**: Specify a fixed frequency value in seconds. For example, 30 indicates that the node is triggered every 30 seconds.
   * - **second_delay**: Specify a fixed delay in seconds before each execution (1s to 60s).
   * 
   * @example
   * 30
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
   * Specifies whether to enable the timeout alert. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the timeout termination for the current trigger. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  timeoutKillEnable?: boolean;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  /**
   * @remarks
   * The parameter that must be configured for k8s node types.
   * Job task: {"resource":"job"}
   * Shell task: {"image":"busybox","resource":"shell"}
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
      startTime: 'StartTime',
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
      startTime: 'number',
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

