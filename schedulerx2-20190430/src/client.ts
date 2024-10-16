// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BatchDeleteJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job IDs. Separate multiple job IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 99341
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the namespace to which the job belongs. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * Schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region to which the job belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteJobsResponseBody extends $tea.Model {
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
   * The additional information returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether multiple jobs were deleted at a time. Valid values:
   * 
   * *   **true**: Multiple jobs were deleted at a time.
   * *   **false**: Multiple jobs were not deleted at a time.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  jobIdList?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * job is not existed, jobId=162837
   */
  message?: string;
  /**
   * @example
   * 704A2A61-3681-5568-92F7-2DFCC53F33D1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDeleteRouteStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job IDs. Separate multiple job IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 99341
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the namespace to which the job belongs. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region to which the job belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsResponseBody extends $tea.Model {
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
   * The additional information that was returned.
   * 
   * @example
   * disable failed jobs=[99341]
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDisableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchDisableJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDisableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job IDs. Multiple job IDs are separated with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 99341
   */
  jobIdList?: number[];
  /**
   * @remarks
   * The ID of the namespace to which the job belongs. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region to which the job belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobIdList: 'JobIdList',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobIdList: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsResponseBody extends $tea.Model {
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
   * The returned additional information.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the jobs were enabled at a time. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchEnableJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BatchEnableJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchEnableJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * adcExHZviLcl****
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The type of application. Valid values:
   * 
   * *   `TRACE`: Application Monitoring
   * *   `EBPF`: Application Monitoring eBPF Edition
   * 
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable logging. Valid values:
   * 
   * *   `true`: enabled
   * *   `false`: disabled
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * TestSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of jobs.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The configuration of the alert. The value is a JSON string. For more information about this parameter, see **Additional information about request parameters**.
   * 
   * @example
   * {"sendChannel":"sms,ding"}
   */
  monitorConfigJson?: string;
  /**
   * @remarks
   * The configuration of alert contacts. The value is a JSON string.
   * 
   * @example
   * [{"userName":"Tom","userPhone":"89756******"},{"userName":"Bob","ding":"http://www.example.com"}]
   */
  monitorContactsJson?: string;
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
   * The name of the namespace.
   * 
   * @example
   * Test
   */
  namespaceName?: string;
  /**
   * @remarks
   * This parameter is not supported. You do not need to specify this parameter.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to schedule a busy worker.
   * 
   * @example
   * false
   */
  scheduleBusyWorkers?: boolean;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appType: 'AppType',
      appVersion: 'AppVersion',
      description: 'Description',
      enableLog: 'EnableLog',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
      monitorContactsJson: 'MonitorContactsJson',
      namespace: 'Namespace',
      namespaceName: 'NamespaceName',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      scheduleBusyWorkers: 'ScheduleBusyWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appType: 'number',
      appVersion: 'number',
      description: 'string',
      enableLog: 'boolean',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
      monitorContactsJson: 'string',
      namespace: 'string',
      namespaceName: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      scheduleBusyWorkers: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBody extends $tea.Model {
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
   * The information about the job group.
   */
  data?: CreateAppGroupResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application was created. Valid values:
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
      data: CreateAppGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  /**
   * @remarks
   * The time interval between retry attempts in case of a job failure. Unit: seconds. Default value: 30.
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
   * This parameter is not supported. You do not need to specify this parameter.
   */
  calendar?: string;
  /**
   * @remarks
   * The full path of the job interface class.
   * 
   * This parameter is available only when you set JobType to java. You must enter a full path.
   * 
   * @example
   * com.alibaba.schedulerx.test.helloworld
   */
  className?: string;
  /**
   * @remarks
   * The number of threads that a single worker triggers simultaneously. You can specify this parameter for MapReduce jobs. Default value: 5.
   * 
   * @example
   * 5
   */
  consumerSize?: number;
  /**
   * @remarks
   * The information about the alert contact.
   */
  contactInfo?: CreateJobRequestContactInfo[];
  /**
   * @remarks
   * The script content. This parameter is required when you set JobType to python, shell, go, or k8s.
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
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The number of task distribution threads. This parameter is an advanced configuration item of the MapReduce job. Default value: 5.
   * 
   * @example
   * 5
   */
  dispatcherSize?: number;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   **Stand-alone operation**
   * *   **Broadcast run**
   * *   **Visual MapReduce**
   * *   **MapReduce**
   * *   **Shard run**
   * 
   * This parameter is required.
   * 
   * @example
   * standalone
   */
  executeMode?: string;
  /**
   * @remarks
   * Specifies whether to trigger an alert when a job fails. Valid values:
   * 
   * *   **true**: triggers an alert when a job fails.
   * *   **false**: does not trigger an alert when a job fails.
   * 
   * @example
   * false
   */
  failEnable?: boolean;
  /**
   * @remarks
   * The maximum number of consecutive failures before an alert is triggered. An alert will be triggered if the number of consecutive failures reaches the value of this parameter.
   * 
   * @example
   * 2
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
   * The job type. Valid values:
   * 
   * *   java
   * *   python
   * *   shell
   * *   go
   * *   http
   * *   xxljob
   * *   dataworks
   * *   k8s
   * *   springschedule
   * 
   * This parameter is required.
   * 
   * @example
   * java
   */
  jobType?: string;
  /**
   * @remarks
   * The maximum number of retry attempts in case of a job failure. Specify this parameter based on your business requirements. Default value: 0.
   * 
   * @example
   * 0
   */
  maxAttempt?: number;
  /**
   * @remarks
   * The maximum number of concurrent instances. By default, only one instance can run at a time. When an instance is running, the next instance is not triggered even if the scheduled start time arrives.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * Specifies whether to generate an alert if no machines are available to run the job. Valid values:
   * 
   * *   **true**: generates an alert if no machines are available to run the job.
   * *   **false**: does not generate an alert if no machines are available to run the job.
   * 
   * @example
   * false
   */
  missWorkerEnable?: boolean;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * helloworld
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
   * The source of the namespace. You must specify this parameter only if the namespace is provided by a third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The number of entries per page. You can specify this parameter for MapReduce jobs. Default value: 100.
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
  /**
   * @remarks
   * The maximum capacity of the task queue. You can specify this parameter for MapReduce jobs. Default value: 10000.
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
   * The method that is used to send alerts. Set the value to sms. Default value: sms.
   * 
   * @example
   * sms
   */
  sendChannel?: string;
  /**
   * @remarks
   * Specifies whether to enable the job. If this parameter is set to 0, the job is disabled. If this parameter is set to 1, the job is enabled. Default value: 1.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Specifies whether to send notifications for successfully running the job.
   * 
   * @example
   * false
   */
  successNoticeEnable?: boolean;
  /**
   * @remarks
   * The time interval between retry attempts in case of a job failure. This parameter is an advanced configuration item of the MapReduce job. Default value: 0.
   * 
   * @example
   * 0
   */
  taskAttemptInterval?: number;
  /**
   * @remarks
   * The maximum number of retry attempts in case of a job failure. This parameter is an advanced configuration item of the MapReduce job. Default value: 0.
   * 
   * @example
   * 0
   */
  taskMaxAttempt?: number;
  /**
   * @remarks
   * The time expression. Specify the time expression based on the value of TimeType:
   * 
   * *   If you set TimeType to **1** (cron), specify this parameter to a standard CRON expression.
   * *   If you set TimeType to **100** (api), no time expression is required.
   * *   If you set TimeType to **3** (fixed_rate), specify this parameter to a fixed frequency in seconds. For example, if you set this parameter to 30, the system triggers a job every 30 seconds.
   * *   If you set TimeType to **4** (second_delay), specify this parameter to a fixed delay after which the job is triggered. Valid values: 1 to 60. Unit: seconds.
   * *   If you set TimeType to **5** (one_time), specify this parameter to a specific time point at which the job is triggered. The time is in the format of yyyy-MM-dd HH:mm:ss, such as 2022-10-10 10:10:00, or a timestamp in milliseconds.
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
   * *   **3**: fixed_rate
   * *   **4**: second_delay
   * *   **5**: one_time
   * *   **100**: api
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The timeout threshold. Unit: seconds. Default value: 7200.
   * 
   * @example
   * 7200
   */
  timeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the timeout alert feature. If the feature is enabled, an alert will be triggered upon a timeout. Valid values:
   * 
   * *   **true**: enables the timeout alert feature.
   * *   **false**: disables the timeout alert feature.
   * 
   * @example
   * false
   */
  timeoutEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the timeout termination feature. If the feature is enabled, a job will automatically be terminated if it times out. Valid values:
   * 
   * *   **true**: enables the timeout termination feature.
   * *   **false**: disables the timeout termination feature.
   * 
   * @example
   * false
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
   * The extended attributes. If you set JobType to k8s, this parameter is required. For a job whose resource type is Job-YAML, set this parameter to {"resource":"job"}. For a job whose resource type is Shell-Script, set this parameter to {"image":"busybox","resource":"shell"}.
   * 
   * @example
   * {"resource":"job"}
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
      jobType: 'JobType',
      maxAttempt: 'MaxAttempt',
      maxConcurrency: 'MaxConcurrency',
      missWorkerEnable: 'MissWorkerEnable',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageSize: 'PageSize',
      parameters: 'Parameters',
      queueSize: 'QueueSize',
      regionId: 'RegionId',
      sendChannel: 'SendChannel',
      status: 'Status',
      successNoticeEnable: 'SuccessNoticeEnable',
      taskAttemptInterval: 'TaskAttemptInterval',
      taskMaxAttempt: 'TaskMaxAttempt',
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
      contactInfo: { 'type': 'array', 'itemType': CreateJobRequestContactInfo },
      content: 'string',
      dataOffset: 'number',
      description: 'string',
      dispatcherSize: 'number',
      executeMode: 'string',
      failEnable: 'boolean',
      failTimes: 'number',
      groupId: 'string',
      jobType: 'string',
      maxAttempt: 'number',
      maxConcurrency: 'number',
      missWorkerEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      pageSize: 'number',
      parameters: 'string',
      queueSize: 'number',
      regionId: 'string',
      sendChannel: 'string',
      status: 'number',
      successNoticeEnable: 'boolean',
      taskAttemptInterval: 'number',
      taskMaxAttempt: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timeout: 'number',
      timeoutEnable: 'boolean',
      timeoutKillEnable: 'boolean',
      timezone: 'string',
      XAttrs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
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
  data?: CreateJobResponseBodyData;
  /**
   * @remarks
   * The additional information returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * If you set JobType to k8s, this parameter is required. Valid values:
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
      data: CreateJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test-env
   */
  name?: string;
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
   * The unique identifier (UID) of the namespace. We recommend that you use the universally unique identifier (UUID) to generate the UID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $tea.Model {
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
   * The information about the namespace.
   */
  data?: CreateNamespaceResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * namespace=test3 is existed, noting update
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
   * Indicates whether the application was created. Valid values:
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
      data: CreateNamespaceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNamespaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application group. You can obtain the ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the ID on the **Task Management** page in the SchedulerX console.
   * 
   * @example
   * 54978
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test-strategy
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
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
   * Specifies whether to enable the routing policy. Valid values:
   * 
   * *   **0**: disables the routing policy.
   * *   **1**: enables the routing policy.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The details of the routing policy. The value is a JSON string. For more information about this parameter, see **the additional information about request parameters** below this table.
   * 
   * @example
   * [{"percentage":20,"target":"[\\"version1\\"]","targetType":"label"}]
   */
  strategyContent?: string;
  /**
   * @remarks
   * The type of the routing policy. Valid value:
   * 
   * *   **3**: routes by proportion.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      status: 'Status',
      strategyContent: 'StrategyContent',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      status: 'number',
      strategyContent: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponseBody extends $tea.Model {
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
   * The returned data.
   */
  data?: CreateRouteStrategyResponseBodyData;
  /**
   * @remarks
   * The additional information, including errors and tips.
   * 
   * @example
   * strategy name is null or empty.
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
   * Indicates whether the call was successful. Valid values:
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
      data: CreateRouteStrategyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRouteStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The application group ID. You can obtain the ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of workflow instances that can be run at the same time. Default value: 1. The value 1 indicates that only one workflow instance is allowed. In this case, if the triggered workflow instance is still ongoing, no more workflow instances can be triggered even the time to schedule the next workflow arrives.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * helloworld
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The time expression. You can set the time expression based on the selected method that is used to specify time.
   * 
   * - If you set the TimeType parameter to cron, you need to enter a standard cron expression. Online verification is supported.
   * - If you set the TimeType parameter to api, no time expression is required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The method that is used to specify the time. Valid values:
   * 
   * - 1: cron
   * - 100: api
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'number',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data that was returned for the request.
   */
  data?: CreateWorkflowResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * timetype is invalid
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the workflow was created. Valid values:
   * 
   * - true
   * - false
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
      code: 'string',
      data: CreateWorkflowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupRequest extends $tea.Model {
  /**
   * @example
   * true
   */
  deleteJobs?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteJobs: 'DeleteJobs',
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteJobs: 'boolean',
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * app is not existed, groupId=xxxx, namesapce=xxxx
   */
  message?: string;
  /**
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the job. You can obtain the ID on the **Task Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
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
   * The additional information returned.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job was deleted. Valid values:
   * 
   * *   **true**: The job was deleted.
   * *   **false**: The job was not deleted.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the job ID on the **Task Management** page in the SchedulerX console.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyResponseBody extends $tea.Model {
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
   * The additional information that is returned.
   * 
   * @example
   * strategy is already deleted.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRouteStrategyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRouteStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRouteStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
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
   * Indicates whether the workflow was deleted. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
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
   * The error message that was returned only if the corresponding error occurred.
   * 
   * @example
   * disable failed jobs=[99341]
   */
  message?: string;
  /**
   * @remarks
   * The available regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the machines to be designated. Valid values: 1 and 2. The value 1 specifies the worker type. The value 2 specifies the label type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  designateType?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 144153
   */
  jobId?: number;
  /**
   * @remarks
   * The designated `labels`. Specify the value of the parameter in a `JSON` string.
   * 
   * @example
   * ["gray"]
   */
  labels?: string;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to allow a failover.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  transferable?: boolean;
  /**
   * @remarks
   * The designated machines. Specify the value of the parameter in a JSON string.
   * 
   * @example
   * ["127.0.0.1","127.0.0.2"]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      designateType: 'DesignateType',
      groupId: 'GroupId',
      jobId: 'JobId',
      labels: 'Labels',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      transferable: 'Transferable',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      designateType: 'number',
      groupId: 'string',
      jobId: 'number',
      labels: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      transferable: 'boolean',
      workers: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersResponseBody extends $tea.Model {
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
   * The returned error message.
   * 
   * @example
   * job is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 765xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DesignateWorkersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DesignateWorkersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DesignateWorkersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
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
   * C8E5FB4A-6D8D-424D-9AAA-4FE06BB74FF9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the job was disabled. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
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
   * Indicates whether the workflow was disabled. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
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
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
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
   * Indicates whether the workflow was enabled. Valid values:
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to check the job status. Valid values: -**true**: The job can be run only if the job is enabled. -**false**: The job can be run even if the job is disabled.
   * 
   * @example
   * true
   */
  checkJobStatus?: boolean;
  /**
   * @remarks
   * The type of the designated machine. Valid values: -**1**: worker. -**2**: label.
   * 
   * @example
   * 1
   */
  designateType?: number;
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
   * The parameters that are passed to trigger the job to run. The input value can be a random string. The parameters that are passed are obtained by calling the `context.getInstanceParameters()` class in the `processor` code. The parameters are different from custom parameters for creating jobs.
   * 
   * @example
   * test
   */
  instanceParameters?: string;
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
   * The label of the worker.
   * 
   * @example
   * gray
   */
  label?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The worker address of the application. To query the worker address, call the GetWokerList operation.
   * 
   * @example
   * xxxxxxx@127.0.0.1:222
   */
  worker?: string;
  static names(): { [key: string]: string } {
    return {
      checkJobStatus: 'CheckJobStatus',
      designateType: 'DesignateType',
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      jobId: 'JobId',
      label: 'Label',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      worker: 'Worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkJobStatus: 'boolean',
      designateType: 'number',
      groupId: 'string',
      instanceParameters: 'string',
      jobId: 'number',
      label: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      worker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponseBody extends $tea.Model {
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
   * The ID of the job instance that is returned if the request is successful.
   */
  data?: ExecuteJobResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * groupid not exist groupId: testSchedulerx.defaultGroup namespace: adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
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
      data: ExecuteJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowRequest extends $tea.Model {
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
   * The dynamic parameter of the workflow instance. The value of the parameter can be up to 1,000 bytes in length.
   * 
   * @example
   * test
   */
  instanceParameters?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceParameters: 'InstanceParameters',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceParameters: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponseBody extends $tea.Model {
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
   * If the request is successful, the ID of the workflow instance is returned.
   */
  data?: ExecuteWorkflowResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Cannot find product according to your domain.
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
   * Indicates whether the request was successful.
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
      data: ExecuteWorkflowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the ID of the namespace on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponseBody extends $tea.Model {
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
   * The information about the application group.
   */
  data?: GetAppGroupResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * app is not existed, groupId=xxxx, namesapce=xxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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
      data: GetAppGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoRequest extends $tea.Model {
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
   * The job name.
   * 
   * @example
   * simpleJob
   */
  jobName?: string;
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceRequest extends $tea.Model {
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
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The job instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111111
   */
  jobInstanceId?: number;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBody extends $tea.Model {
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
   * The information about the job instance.
   */
  data?: GetJobInstanceResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
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
   * Indicates whether the request was successful. Valid values:
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
      data: GetJobInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp.
   * 
   * @example
   * 1684202400000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The beginning of the time range to query. Specify a UNIX timestamp.
   * 
   * @example
   * 1684116000000
   */
  startTimestamp?: number;
  /**
   * @remarks
   * The status of the job instance. Valid values:
   * 
   * 1: The job instance is pending. 3: The job instance is running. 4: The job instance is run. 5: The job instance fails. 9: The request for running the job instance is rejected. To specify this parameter, you must declare the following enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus.
   * 
   * @example
   * 5
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTimestamp: 'StartTimestamp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTimestamp: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBody extends $tea.Model {
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
   * The information about the job instances.
   */
  data?: GetJobInstanceListResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
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
   * Indicates whether the request was successful. Valid values:
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
      data: GetJobInstanceListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobInstanceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobInstanceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the job stops running. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675739484000
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 123
   */
  jobId?: string;
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 123456
   */
  jobInstanceId?: string;
  /**
   * @remarks
   * The keyword.
   * 
   * @example
   * ERROR
   */
  keyword?: string;
  /**
   * @remarks
   * The number of rows to return. The maximum number is 200.
   * 
   * @example
   * 50
   */
  line?: number;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The number of offset rows. This parameter can be used for a paged query.
   * 
   * @example
   * 0
   */
  offset?: number;
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
   * Specifies whether to reverse the order. By default, the order is reversed.
   * 
   * @example
   * true
   */
  reverse?: boolean;
  /**
   * @remarks
   * The time when the job starts to run. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1675739364000
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      keyword: 'Keyword',
      line: 'Line',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      offset: 'Offset',
      regionId: 'RegionId',
      reverse: 'Reverse',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      groupId: 'string',
      jobId: 'string',
      jobInstanceId: 'string',
      keyword: 'string',
      line: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      offset: 'number',
      regionId: 'string',
      reverse: 'boolean',
      startTimestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponseBody extends $tea.Model {
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
   * The returned data.
   */
  data?: GetLogResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * jobid=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: GetLogResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewRequest extends $tea.Model {
  /**
   * @example
   * 1684166400
   */
  endTime?: number;
  /**
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  metricType?: number;
  /**
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * query
   */
  operate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1684166400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      groupId: 'GroupId',
      metricType: 'MetricType',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      operate: 'Operate',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      groupId: 'string',
      metricType: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      operate: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: string;
  /**
   * @example
   * No access permission for the namespace [***]
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
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
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOverviewResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * This parameter is required.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * 4a06d5ea-f576-4326-842c-fb14ea043d8d
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace.
   * 
   * @example
   * source
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region information.
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBody extends $tea.Model {
  /**
   * @remarks
   * Error codes
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the workflow.
   */
  data?: GetWorkFlowResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * workflow is not existed
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45678xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API call.
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
      data: GetWorkFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * usercenter
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBody extends $tea.Model {
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
   * The job information.
   */
  data?: GetWorkerListResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * Cannot find product according to your domain.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108****
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
      data: GetWorkerListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkerListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  wfInstanceId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBody extends $tea.Model {
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
   * The details of the workflow instance.
   */
  data?: GetWorkflowInstanceResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * workflowId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: GetWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkflowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to grant the permissions with the GRANT option. Valid values: -**true** -**false**
   * 
   * @example
   * false
   */
  grantOption?: boolean;
  /**
   * @remarks
   * The application group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffcdf01
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 277641081920123456
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * lilei
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      grantOption: 'GrantOption',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantOption: 'boolean',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionResponseBody extends $tea.Model {
  accessDeniedDetail?: GrantPermissionResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  code?: number;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GrantPermissionResponseBodyAccessDeniedDetail,
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GrantPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GrantPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * k8s-test
   */
  appGroupName?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupName: 'AppGroupName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
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
   * The information about the applications.
   */
  data?: ListGroupsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      data: ListGroupsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * DocTest.Group
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * helloword
   */
  jobName?: string;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the job. Valid values:
   * 
   * *   **0**: disables the job.
   * *   **1**: enables the job.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobName: 'JobName',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobName: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesRequest extends $tea.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * schedulerx-dev
   */
  namespaceName?: string;
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
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      namespaceName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
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
   * The information about the namespaces.
   */
  data?: ListNamespacesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
      data: ListNamespacesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBody extends $tea.Model {
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
   * The information about workflow instances.
   */
  data?: ListWorkflowInstanceResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * workflowId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ListWorkflowInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobRequest extends $tea.Model {
  /**
   * @remarks
   * The data timestamp of the job. Specify a string in the HH:mm:ss format.
   * 
   * This parameter is required.
   * 
   * @example
   * 10:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the job stops running. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645718400000
   */
  endDate?: number;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: number;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The time when the job starts to rerun. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1645459200000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endDate: 'EndDate',
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endDate: 'number',
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      startDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobResponseBody extends $tea.Model {
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
   * The returned error message.
   * 
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RerunJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RerunJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: number;
  /**
   * @remarks
   * The job instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  jobInstanceId?: number;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceResponseBody extends $tea.Model {
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
   * The returned error message.
   * 
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryJobInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryJobInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RetryJobInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionRequest extends $tea.Model {
  /**
   * @remarks
   * The application ID. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defalutGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The unique identifier (UID) of the namespace. You can obtain the namespace UID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffcdf01
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The UID of the RAM user.
   * 
   * This parameter is required.
   * 
   * @example
   * 277641081920123456
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  code?: number;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePermissionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokePermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessRequest extends $tea.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: number;
  /**
   * @remarks
   * The job instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  jobInstanceId?: number;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessResponseBody extends $tea.Model {
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
   * The returned error message.
   * 
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetJobInstanceSuccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetJobInstanceSuccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetJobInstanceSuccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessRequest extends $tea.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  wfInstanceId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessResponseBody extends $tea.Model {
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
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * wofkflowId is not existed
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetWfInstanceSuccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetWfInstanceSuccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetWfInstanceSuccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the job instance in the running state.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111111
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the job. You can obtain the ID of the job on the Task Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the namespace ID on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'number',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
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
   * The error message that is returned only if an error occurs.
   * 
   * @example
   * Your request is denied as lack of ssl protect.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the application. You can obtain the application ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of concurrent instances. Default value: 1. A value of 1 specifies that if the last triggered instance is running, the next instance is not triggered even if the scheduled point in time for running the next instance is reached.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The ID of the namespace. You can obtain the ID of the namespace on the Namespace page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'number',
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'number',
      namespace: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * app is not existed, groupId=xxxx, namesapce=xxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponseBody extends $tea.Model {
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
   * The additional information returned only if an error occurs.
   * 
   * @example
   * job type is java className can not be blank
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
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * helloworld
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The time expression. You can set the time expression based on the selected method that is used to specify time.
   * 
   * *   If you set TimeType to cron, you need to enter a standard cron expression. Online verification is supported.
   * *   If you set TimeType to api, no time expression is required.
   * 
   * @example
   * 0 0/10 * * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The method that is used to specify the time. Valid values:
   * 
   * *   1: cron
   * *   100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      timeExpression: 'string',
      timeType: 'number',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponseBody extends $tea.Model {
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
   * The returned error message.
   * 
   * @example
   * timetype is invalid
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagRequest extends $tea.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) of the workflow, including the information about the nodes and the edges. Specify the value of this parameter in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * {"nodes":[{"id":2300691},{"id":10518089},{"id":1758851}],"edges":[{"source":10518089,"target":1758851},{"source":10518089,"target":2300691}]}
   */
  dagJson?: string;
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
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
   * The source of the namespace. This parameter is required only for a special third party.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
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
   * The workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      dagJson: 'DagJson',
      groupId: 'GroupId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagJson: 'string',
      groupId: 'string',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      workflowId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagResponseBody extends $tea.Model {
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
   * The returned error message.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39090022-1F3B-4797-8518-6B61095F1AF0
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowDagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowDagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppGroupResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 6607
   */
  appGroupId?: number;
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * adcExHZviL******
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestContactInfo extends $tea.Model {
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
   * Tom
   */
  userName?: string;
  /**
   * @remarks
   * The mobile number of the alert contact.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The UID of the namespace.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespaceUid?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceUid: 'NamespaceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRouteStrategyResponseBodyData extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 92583
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @remarks
   * The display name of the region, which varies based on the current language.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * schedulerx.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  jobInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteWorkflowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 111111
   */
  wfInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      wfInstanceId: 'WfInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppGroupResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The AppKey of the application.
   * 
   * @example
   * QI4lWMZ+xk1rNB67jFUhaw==
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: string;
  /**
   * @remarks
   * The number of jobs that are configured for the application group.
   * 
   * @example
   * 1
   */
  curJobs?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of jobs that can be configured for the application group.
   * 
   * @example
   * 1000
   */
  maxJobs?: number;
  /**
   * @remarks
   * The configuration of the alert. The value is a JSON string. For more information, see **the additional information about response parameters below this table.**
   * 
   * @example
   * {"sendChannel":"sms,mail,ding"}
   */
  monitorConfigJson?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appName: 'AppName',
      appVersion: 'AppVersion',
      curJobs: 'CurJobs',
      description: 'Description',
      groupId: 'GroupId',
      maxJobs: 'MaxJobs',
      monitorConfigJson: 'MonitorConfigJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appName: 'string',
      appVersion: 'string',
      curJobs: 'number',
      description: 'string',
      groupId: 'string',
      maxJobs: 'number',
      monitorConfigJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoContactInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfoMonitorConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoJobMonitorInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoMapTaskXAttrs extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfoTimeConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataJobConfigInfo extends $tea.Model {
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
   * *   **Stand-alone operation**
   * *   **Broadcast run**
   * *   **Visual MapReduce**
   * *   **MapReduce**
   * *   **Shard run**
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBodyDataJobInstanceDetail extends $tea.Model {
  /**
   * @remarks
   * The data timestamp of the job instance.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  endTime?: string;
  /**
   * @remarks
   * The user who executes the job.
   * 
   * @example
   * A
   */
  executor?: string;
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  instanceId?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * ManualJob
   */
  jobName?: string;
  /**
   * @remarks
   * The parameters of the job instance.
   * 
   * @example
   * {\\"alertId\\":11111}
   */
  parameters?: string;
  /**
   * @remarks
   * The progress of the job instance.
   * 
   * @example
   * complete
   */
  progress?: string;
  /**
   * @remarks
   * The execution results of the job instance.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled to run.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values:
   * 
   * *   **1**: The job instance is waiting for execution.
   * *   **3**: The job instance is running.
   * *   **4**: The job instance is successful.
   * *   **5**: The job instance failed.
   * *   **9**: The job instance is rejected.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The method that is used to specify the time when to schedule the job instance. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fix_rate
   * *   **4**: second_delay
   * *   **100**: api
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TimeType
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The trace ID, which can be used to query trace details.
   * 
   * @example
   * 210e845016596663430048015d0a2c
   */
  traceId?: string;
  /**
   * @remarks
   * The trigger type of the job instance. Valid values:
   * 
   * *   **1**: The job instance was triggered at the scheduled time.
   * *   **2**: The job instance was triggered due to data update.
   * *   **3**: The job instance was triggered by an API call.
   * *   **4**: The job instance was triggered because it is manually rerun.
   * *   **5**: The job instance was triggered because the system automatically reruns the job instance upon a system exception, such as a database exception.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TriggerType
   * 
   * @example
   * 3
   */
  triggerType?: number;
  /**
   * @remarks
   * The endpoint of the triggered client. The value is in the IP address:Port number format.
   * 
   * @example
   * 192.168.0.0:16
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      jobName: 'JobName',
      parameters: 'Parameters',
      progress: 'Progress',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      traceId: 'TraceId',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      instanceId: 'number',
      jobId: 'number',
      jobName: 'string',
      parameters: 'string',
      progress: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      traceId: 'string',
      triggerType: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details of the job instance.
   */
  jobInstanceDetail?: GetJobInstanceResponseBodyDataJobInstanceDetail;
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetail: 'JobInstanceDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetail: GetJobInstanceResponseBodyDataJobInstanceDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBodyDataJobInstanceDetails extends $tea.Model {
  /**
   * @remarks
   * The data timestamp of the job instance.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  dataTime?: string;
  /**
   * @remarks
   * The end time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  endTime?: string;
  /**
   * @remarks
   * The user who executes the job.
   * 
   * @example
   * A
   */
  executor?: string;
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  instanceId?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 92583
   */
  jobId?: number;
  /**
   * @remarks
   * The progress of the job instance.
   * 
   * @example
   * complete
   */
  progress?: string;
  /**
   * @remarks
   * The execution results of the job instance.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled to run.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the job execution.
   * 
   * @example
   * 2020-07-27 11:52:10
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values:
   * 
   * *   **1**: The job instance is waiting for execution.
   * *   **3**: The job instance is running.
   * *   **4**: The job instance is successful.
   * *   **5**: The job instance failed.
   * *   **9**: The job instance is rejected.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The method that is used to specify the time when to schedule the job instance. Valid values:
   * 
   * *   **1**: cron
   * *   **3**: fix_rate
   * *   **4**: second_delay
   * *   **100**: api
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TimeType
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The trigger type of the job instance. Valid values:
   * 
   * *   **1**: The job instance was triggered at the scheduled time.
   * *   **2**: The job instance was triggered due to data updates.
   * *   **3**: The job instance was triggered by an API call.
   * *   **4**: The job instance was triggered because it is manually rerun.
   * *   **5**: The job instance was triggered because the system automatically reruns the job instance upon a system exception, such as a database exception.
   * 
   * Enumeration class: com.alibaba.schedulerx.common.domain.TriggerType
   * 
   * @example
   * 3
   */
  triggerType?: number;
  /**
   * @remarks
   * The endpoint of the triggered client. The value is in the IP address:Port number format.
   * 
   * @example
   * 192.168.0.0:16
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      executor: 'Executor',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      progress: 'Progress',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      timeType: 'TimeType',
      triggerType: 'TriggerType',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      executor: 'string',
      instanceId: 'number',
      jobId: 'number',
      progress: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      timeType: 'number',
      triggerType: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInstanceListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The details of the job instance.
   */
  jobInstanceDetails?: GetJobInstanceListResponseBodyDataJobInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      jobInstanceDetails: 'JobInstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceDetails: { 'type': 'array', 'itemType': GetJobInstanceListResponseBodyDataJobInstanceDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The logs. The value is an array of strings.
   */
  logs?: string[];
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowInfo extends $tea.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * workflow_111
   */
  name?: string;
  /**
   * @remarks
   * The status of the workflow.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The time expression of the workflow.
   * 
   * @example
   * 0 0 2 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type of the workflow.
   * 
   * @example
   * cron
   */
  timeType?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 1234xxx
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
      timeExpression: 'string',
      timeType: 'string',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges extends $tea.Model {
  /**
   * @remarks
   * The ID of the source job.
   * 
   * @example
   * 100
   */
  source?: number;
  /**
   * @remarks
   * The ID of the object job.
   * 
   * @example
   * 200
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes extends $tea.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 123456xxx
   */
  id?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job_111
   */
  label?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfo extends $tea.Model {
  /**
   * @remarks
   * The workflow edges.
   */
  edges?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges[];
  /**
   * @remarks
   * The list of workflow nodes.
   */
  nodes?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The basic information of the workflow.
   */
  workFlowInfo?: GetWorkFlowResponseBodyDataWorkFlowInfo;
  /**
   * @remarks
   * The node information of the workflow.
   */
  workFlowNodeInfo?: GetWorkFlowResponseBodyDataWorkFlowNodeInfo;
  static names(): { [key: string]: string } {
    return {
      workFlowInfo: 'WorkFlowInfo',
      workFlowNodeInfo: 'WorkFlowNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowInfo: GetWorkFlowResponseBodyDataWorkFlowInfo,
      workFlowNodeInfo: GetWorkFlowResponseBodyDataWorkFlowNodeInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBodyDataWorkerInfos extends $tea.Model {
  /**
   * @remarks
   * The IP address of the worker.
   * 
   * @example
   * 30.225.16.49
   */
  ip?: string;
  /**
   * @remarks
   * The label of the worker.
   * 
   * @example
   * gray
   */
  label?: string;
  /**
   * @remarks
   * The port number of the worker.
   * 
   * @example
   * 60831
   */
  port?: number;
  /**
   * @remarks
   * The startup method of the worker.
   * 
   * @example
   * springboot
   */
  starter?: string;
  /**
   * @remarks
   * The version of the worker.
   * 
   * @example
   * 1.3.4
   */
  version?: string;
  /**
   * @remarks
   * The address of the worker. The address is in the format of ${worker_id}@${worker_ip}:${worker_port}.
   * 
   * @example
   * 030225016049_11734_25917@30.225.16.49:60831
   */
  workerAddress?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      label: 'Label',
      port: 'Port',
      starter: 'Starter',
      version: 'Version',
      workerAddress: 'WorkerAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      label: 'string',
      port: 'number',
      starter: 'string',
      version: 'string',
      workerAddress: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerListResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The worker information.
   */
  workerInfos?: GetWorkerListResponseBodyDataWorkerInfos[];
  static names(): { [key: string]: string } {
    return {
      workerInfos: 'WorkerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workerInfos: { 'type': 'array', 'itemType': GetWorkerListResponseBodyDataWorkerInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges extends $tea.Model {
  /**
   * @remarks
   * The upstream job instance of the current job instance. A value of 0 indicates that the upstream job instance is the root node.
   * 
   * @example
   * 24058798
   */
  source?: number;
  /**
   * @remarks
   * The downstream job instance of the current job instance.
   * 
   * @example
   * 24058796
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes extends $tea.Model {
  /**
   * @remarks
   * The number of retries when the job failed.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The data timestamp of the job.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the job stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1472
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the job instance.
   * 
   * @example
   * 24058796
   */
  jobInstanceId?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * TestJob
   */
  jobName?: string;
  /**
   * @remarks
   * The execution result of the job.
   * 
   * @example
   * code=200
   */
  result?: string;
  /**
   * @remarks
   * The time when the job was scheduled.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the job started to run.
   * 
   * @example
   * 2023-01-03 18:00:03
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the job instance. Valid values: 1: The job instance is waiting for execution. 3: The job instance is running. 4: The job instance is run. 5: The job instance failed to run. 9: The job instance is rejected. Enumeration class: com.alibaba.schedulerx.common.domain.InstanceStatus.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The worker on which the job instance run.
   * 
   * @example
   * 10.163.0.101:34027
   */
  workAddr?: string;
  static names(): { [key: string]: string } {
    return {
      attempt: 'Attempt',
      dataTime: 'DataTime',
      endTime: 'EndTime',
      jobId: 'JobId',
      jobInstanceId: 'JobInstanceId',
      jobName: 'JobName',
      result: 'Result',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      workAddr: 'WorkAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      dataTime: 'string',
      endTime: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
      jobName: 'string',
      result: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      workAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceDag extends $tea.Model {
  /**
   * @remarks
   * The dependencies between job instances.
   */
  edges?: GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges[];
  /**
   * @remarks
   * The job instances.
   */
  nodes?: GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyDataWfInstanceDagNodes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyDataWfInstanceInfo extends $tea.Model {
  /**
   * @remarks
   * The data timestamp of the workflow instance.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the workflow instance stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the workflow instance was scheduled to run.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the workflow instance started to run.
   * 
   * @example
   * 2023-01-03 18:00:01
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the workflow instance. Valid values:
   * 
   * *   1: pending
   * *   2: preparing
   * *   3: running
   * *   4: successful
   * *   5: failed
   * 
   * @example
   * 5
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) of the workflow instance, including nodes and dependencies.
   */
  wfInstanceDag?: GetWorkflowInstanceResponseBodyDataWfInstanceDag;
  /**
   * @remarks
   * The details of the workflow instance, including the state of the workflow instance, the time when the workflow instance started to run, the time when the workflow instance stopped running, the state of each job instance, and the dependencies between job instances.
   */
  wfInstanceInfo?: GetWorkflowInstanceResponseBodyDataWfInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      wfInstanceDag: 'WfInstanceDag',
      wfInstanceInfo: 'WfInstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceDag: GetWorkflowInstanceResponseBodyDataWfInstanceDag,
      wfInstanceInfo: GetWorkflowInstanceResponseBodyDataWfInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GrantPermissionResponseBodyAccessDeniedDetail extends $tea.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyDataAppGroups extends $tea.Model {
  /**
   * @remarks
   * The application group ID.
   * 
   * @example
   * 1
   */
  appGroupId?: number;
  /**
   * @remarks
   * The AppKey for the application.
   * 
   * @example
   * a3G77O6NZxq/lyo1NC****==
   */
  appKey?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * DocTest
   */
  appName?: string;
  /**
   * @remarks
   * The application version. 1: Basic version, 2: Professional version.
   * 
   * @example
   * 2
   */
  appVersion?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * DocTest.Group
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appKey: 'AppKey',
      appName: 'AppName',
      appVersion: 'AppVersion',
      description: 'Description',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appKey: 'string',
      appName: 'string',
      appVersion: 'number',
      description: 'string',
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The applications and their details.
   */
  appGroups?: ListGroupsResponseBodyDataAppGroups[];
  static names(): { [key: string]: string } {
    return {
      appGroups: 'AppGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroups: { 'type': 'array', 'itemType': ListGroupsResponseBodyDataAppGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfoContactInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfoMonitorConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsJobMonitorInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsMapTaskXAttrs extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobsTimeConfig extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyDataJobs extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyDataNamespaces extends $tea.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * doc
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  UId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      UId: 'UId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      UId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The namespaces and their details.
   */
  namespaces?: ListNamespacesResponseBodyDataNamespaces[];
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataNamespaces },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBodyDataWfInstanceInfos extends $tea.Model {
  /**
   * @remarks
   * The data timestamp of the workflow instance.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  dataTime?: string;
  /**
   * @remarks
   * The time when the workflow instance stopped running.
   * 
   * @example
   * 2023-01-03 18:00:21
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the workflow instance was scheduled to run.
   * 
   * @example
   * 2023-01-03 18:00:00
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The time when the workflow instance started to run.
   * 
   * @example
   * 2023-01-03 18:00:01
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the workflow instance. Valid values:
   * 
   * *   1: pending
   * *   2: preparing
   * *   3: running
   * *   4: successful
   * *   5: failed
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The workflow instance ID.
   * 
   * @example
   * 123456
   */
  wfInstanceId?: number;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 123
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      endTime: 'EndTime',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      wfInstanceId: 'WfInstanceId',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      endTime: 'string',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'number',
      wfInstanceId: 'number',
      workflowId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The workflow instances.
   */
  wfInstanceInfos?: ListWorkflowInstanceResponseBodyDataWfInstanceInfos[];
  static names(): { [key: string]: string } {
    return {
      wfInstanceInfos: 'WfInstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wfInstanceInfos: { 'type': 'array', 'itemType': ListWorkflowInstanceResponseBodyDataWfInstanceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateJobRequestContactInfo extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "schedulerx.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "schedulerx.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "schedulerx.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "schedulerx.cn-shenzhen.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("schedulerx2", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Deletes multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteJobsResponse
   */
  async batchDeleteJobsWithOptions(request: BatchDeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteJobsResponse>(await this.callApi(params, req, runtime), new BatchDeleteJobsResponse({}));
  }

  /**
   * Deletes multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDeleteJobsRequest
   * @returns BatchDeleteJobsResponse
   */
  async batchDeleteJobs(request: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteJobsWithOptions(request, runtime);
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - BatchDeleteRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategyWithOptions(request: BatchDeleteRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new BatchDeleteRouteStrategyResponse({}));
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - BatchDeleteRouteStrategyRequest
   * @returns BatchDeleteRouteStrategyResponse
   */
  async batchDeleteRouteStrategy(request: BatchDeleteRouteStrategyRequest): Promise<BatchDeleteRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Disables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDisableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDisableJobsResponse
   */
  async batchDisableJobsWithOptions(request: BatchDisableJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDisableJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchDisableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDisableJobsResponse>(await this.callApi(params, req, runtime), new BatchDisableJobsResponse({}));
  }

  /**
   * Disables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchDisableJobsRequest
   * @returns BatchDisableJobsResponse
   */
  async batchDisableJobs(request: BatchDisableJobsRequest): Promise<BatchDisableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDisableJobsWithOptions(request, runtime);
  }

  /**
   * Enables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchEnableJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchEnableJobsResponse
   */
  async batchEnableJobsWithOptions(request: BatchEnableJobsRequest, runtime: $Util.RuntimeOptions): Promise<BatchEnableJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobIdList)) {
      body["JobIdList"] = request.jobIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "BatchEnableJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchEnableJobsResponse>(await this.callApi(params, req, runtime), new BatchEnableJobsResponse({}));
  }

  /**
   * Enables multiple jobs at a time.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.4</version>
   * </dependency>
   * ```
   * 
   * @param request - BatchEnableJobsRequest
   * @returns BatchEnableJobsResponse
   */
  async batchEnableJobs(request: BatchEnableJobsRequest): Promise<BatchEnableJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchEnableJobsWithOptions(request, runtime);
  }

  /**
   * Creates an application group. The AppKey is returned.
   * 
   * @param request - CreateAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppGroupResponse
   */
  async createAppGroupWithOptions(request: CreateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateAppGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAppGroupResponse>(await this.callApi(params, req, runtime), new CreateAppGroupResponse({}));
  }

  /**
   * Creates an application group. The AppKey is returned.
   * 
   * @param request - CreateAppGroupRequest
   * @returns CreateAppGroupResponse
   */
  async createAppGroup(request: CreateAppGroupRequest): Promise<CreateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAppGroupWithOptions(request, runtime);
  }

  /**
   * Creates a job and obtains the job ID.
   * 
   * @param request - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(request: CreateJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!Util.isUnset(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!Util.isUnset(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!Util.isUnset(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!Util.isUnset(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!Util.isUnset(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!Util.isUnset(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!Util.isUnset(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!Util.isUnset(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  /**
   * Creates a job and obtains the job ID.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $Util.RuntimeOptions): Promise<CreateNamespaceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNamespace",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
  }

  /**
   * Creates a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a routing policy.
   * 
   * @param request - CreateRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteStrategyResponse
   */
  async createRouteStrategyWithOptions(request: CreateRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<CreateRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.strategyContent)) {
      query["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRouteStrategyResponse>(await this.callApi(params, req, runtime), new CreateRouteStrategyResponse({}));
  }

  /**
   * Creates a routing policy.
   * 
   * @param request - CreateRouteStrategyRequest
   * @returns CreateRouteStrategyResponse
   */
  async createRouteStrategy(request: CreateRouteStrategyRequest): Promise<CreateRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   * 
   * @param request - CreateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowResponse
   */
  async createWorkflowWithOptions(request: CreateWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkflowResponse>(await this.callApi(params, req, runtime), new CreateWorkflowResponse({}));
  }

  /**
   * Creates a workflow. By default, the created workflow is disabled. After you update the directed acyclic graph (DAG) of the workflow, you must manually or call the corresponding operation to enable the workflow. You can call this operation only in the professional edition.
   * 
   * @param request - CreateWorkflowRequest
   * @returns CreateWorkflowResponse
   */
  async createWorkflow(request: CreateWorkflowRequest): Promise<CreateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkflowWithOptions(request, runtime);
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - DeleteAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppGroupResponse
   */
  async deleteAppGroupWithOptions(request: DeleteAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deleteJobs)) {
      query["DeleteJobs"] = request.deleteJobs;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAppGroupResponse>(await this.callApi(params, req, runtime), new DeleteAppGroupResponse({}));
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - DeleteAppGroupRequest
   * @returns DeleteAppGroupResponse
   */
  async deleteAppGroup(request: DeleteAppGroupRequest): Promise<DeleteAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAppGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a specified job.
   * 
   * @param request - DeleteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(request: DeleteJobRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobResponse>(await this.callApi(params, req, runtime), new DeleteJobResponse({}));
  }

  /**
   * Deletes a specified job.
   * 
   * @param request - DeleteJobRequest
   * @returns DeleteJobResponse
   */
  async deleteJob(request: DeleteJobRequest): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobWithOptions(request, runtime);
  }

  /**
   * Deletes a routing policy.
   * 
   * @param request - DeleteRouteStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteStrategyResponse
   */
  async deleteRouteStrategyWithOptions(request: DeleteRouteStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRouteStrategyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRouteStrategy",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRouteStrategyResponse>(await this.callApi(params, req, runtime), new DeleteRouteStrategyResponse({}));
  }

  /**
   * Deletes a routing policy.
   * 
   * @param request - DeleteRouteStrategyRequest
   * @returns DeleteRouteStrategyResponse
   */
  async deleteRouteStrategy(request: DeleteRouteStrategyRequest): Promise<DeleteRouteStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRouteStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes a workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: DeleteWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowResponse({}));
  }

  /**
   * Deletes a workflow.
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(request: DeleteWorkflowRequest): Promise<DeleteWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * Returns available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Returns available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Designates machines.
   * 
   * @param request - DesignateWorkersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DesignateWorkersResponse
   */
  async designateWorkersWithOptions(request: DesignateWorkersRequest, runtime: $Util.RuntimeOptions): Promise<DesignateWorkersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DesignateWorkers",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DesignateWorkersResponse>(await this.callApi(params, req, runtime), new DesignateWorkersResponse({}));
  }

  /**
   * Designates machines.
   * 
   * @param request - DesignateWorkersRequest
   * @returns DesignateWorkersResponse
   */
  async designateWorkers(request: DesignateWorkersRequest): Promise<DesignateWorkersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.designateWorkersWithOptions(request, runtime);
  }

  /**
   * Disables a job.
   * 
   * @param request - DisableJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableJobResponse
   */
  async disableJobWithOptions(request: DisableJobRequest, runtime: $Util.RuntimeOptions): Promise<DisableJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableJobResponse>(await this.callApi(params, req, runtime), new DisableJobResponse({}));
  }

  /**
   * Disables a job.
   * 
   * @param request - DisableJobRequest
   * @returns DisableJobResponse
   */
  async disableJob(request: DisableJobRequest): Promise<DisableJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableJobWithOptions(request, runtime);
  }

  /**
   * Disables a specified workflow.
   * 
   * @param request - DisableWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWorkflowResponse
   */
  async disableWorkflowWithOptions(request: DisableWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<DisableWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableWorkflowResponse>(await this.callApi(params, req, runtime), new DisableWorkflowResponse({}));
  }

  /**
   * Disables a specified workflow.
   * 
   * @param request - DisableWorkflowRequest
   * @returns DisableWorkflowResponse
   */
  async disableWorkflow(request: DisableWorkflowRequest): Promise<DisableWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableWorkflowWithOptions(request, runtime);
  }

  /**
   * Enables a job.
   * 
   * @param request - EnableJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableJobResponse
   */
  async enableJobWithOptions(request: EnableJobRequest, runtime: $Util.RuntimeOptions): Promise<EnableJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableJobResponse>(await this.callApi(params, req, runtime), new EnableJobResponse({}));
  }

  /**
   * Enables a job.
   * 
   * @param request - EnableJobRequest
   * @returns EnableJobResponse
   */
  async enableJob(request: EnableJobRequest): Promise<EnableJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableJobWithOptions(request, runtime);
  }

  /**
   * Enables a specified workflow.
   * 
   * @param request - EnableWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWorkflowResponse
   */
  async enableWorkflowWithOptions(request: EnableWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<EnableWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableWorkflowResponse>(await this.callApi(params, req, runtime), new EnableWorkflowResponse({}));
  }

  /**
   * Enables a specified workflow.
   * 
   * @param request - EnableWorkflowRequest
   * @returns EnableWorkflowResponse
   */
  async enableWorkflow(request: EnableWorkflowRequest): Promise<EnableWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableWorkflowWithOptions(request, runtime);
  }

  /**
   * Triggers a job to immediately run once.
   * 
   * @remarks
   * > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   * 
   * @param request - ExecuteJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteJobResponse
   */
  async executeJobWithOptions(request: ExecuteJobRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteJobResponse>(await this.callApi(params, req, runtime), new ExecuteJobResponse({}));
  }

  /**
   * Triggers a job to immediately run once.
   * 
   * @remarks
   * > The combination of the `JobID` and `ScheduleTime` parameters serves as a unique index. Therefore, after the ExecuteJob operation is called to run a job once, a sleep for one second is required before the ExecuteJob operation is called to run the job again. Otherwise, the job may fail.
   * 
   * @param request - ExecuteJobRequest
   * @returns ExecuteJobResponse
   */
  async executeJob(request: ExecuteJobRequest): Promise<ExecuteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeJobWithOptions(request, runtime);
  }

  /**
   * Immediately triggers a workflow.
   * 
   * @param request - ExecuteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteWorkflowResponse
   */
  async executeWorkflowWithOptions(request: ExecuteWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteWorkflowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecuteWorkflowResponse>(await this.callApi(params, req, runtime), new ExecuteWorkflowResponse({}));
  }

  /**
   * Immediately triggers a workflow.
   * 
   * @param request - ExecuteWorkflowRequest
   * @returns ExecuteWorkflowResponse
   */
  async executeWorkflow(request: ExecuteWorkflowRequest): Promise<ExecuteWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeWorkflowWithOptions(request, runtime);
  }

  /**
   * The configuration of the alert. The value is a JSON string. For more information, see \\*\\*the additional information about response parameters below this table\\*\\*.
   * 
   * @param request - GetAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppGroupResponse
   */
  async getAppGroupWithOptions(request: GetAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAppGroupResponse>(await this.callApi(params, req, runtime), new GetAppGroupResponse({}));
  }

  /**
   * The configuration of the alert. The value is a JSON string. For more information, see \\*\\*the additional information about response parameters below this table\\*\\*.
   * 
   * @param request - GetAppGroupRequest
   * @returns GetAppGroupResponse
   */
  async getAppGroup(request: GetAppGroupRequest): Promise<GetAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAppGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   * 
   * @param request - GetJobInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInfoResponse
   */
  async getJobInfoWithOptions(request: GetJobInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInfo",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInfoResponse>(await this.callApi(params, req, runtime), new GetJobInfoResponse({}));
  }

  /**
   * Queries the details of a job based on the job ID. In most cases, the obtained information is used to update jobs.
   * 
   * @param request - GetJobInfoRequest
   * @returns GetJobInfoResponse
   */
  async getJobInfo(request: GetJobInfoRequest): Promise<GetJobInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about a job instance. You can view the status and progress of the job instance.
   * 
   * @param request - GetJobInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInstanceResponse
   */
  async getJobInstanceWithOptions(request: GetJobInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInstanceResponse>(await this.callApi(params, req, runtime), new GetJobInstanceResponse({}));
  }

  /**
   * Queries the information about a job instance. You can view the status and progress of the job instance.
   * 
   * @param request - GetJobInstanceRequest
   * @returns GetJobInstanceResponse
   */
  async getJobInstance(request: GetJobInstanceRequest): Promise<GetJobInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the most recent 10 execution instances of a job.
   * 
   * @param request - GetJobInstanceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobInstanceListResponse
   */
  async getJobInstanceListWithOptions(request: GetJobInstanceListRequest, runtime: $Util.RuntimeOptions): Promise<GetJobInstanceListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobInstanceList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobInstanceListResponse>(await this.callApi(params, req, runtime), new GetJobInstanceListResponse({}));
  }

  /**
   * Queries the most recent 10 execution instances of a job.
   * 
   * @param request - GetJobInstanceListRequest
   * @returns GetJobInstanceListResponse
   */
  async getJobInstanceList(request: GetJobInstanceListRequest): Promise<GetJobInstanceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobInstanceListWithOptions(request, runtime);
  }

  /**
   * Queries the operational logs of a job. You can call this operation only in the professional edition.
   * 
   * @param request - GetLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogResponse
   */
  async getLogWithOptions(request: GetLogRequest, runtime: $Util.RuntimeOptions): Promise<GetLogResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLog",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogResponse>(await this.callApi(params, req, runtime), new GetLogResponse({}));
  }

  /**
   * Queries the operational logs of a job. You can call this operation only in the professional edition.
   * 
   * @param request - GetLogRequest
   * @returns GetLogResponse
   */
  async getLog(request: GetLogRequest): Promise<GetLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogWithOptions(request, runtime);
  }

  /**
   * 查询概览数据信息
   * 
   * @param request - GetOverviewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOverviewResponse
   */
  async getOverviewWithOptions(request: GetOverviewRequest, runtime: $Util.RuntimeOptions): Promise<GetOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.operate)) {
      query["Operate"] = request.operate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOverview",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOverviewResponse>(await this.callApi(params, req, runtime), new GetOverviewResponse({}));
  }

  /**
   * 查询概览数据信息
   * 
   * @param request - GetOverviewRequest
   * @returns GetOverviewResponse
   */
  async getOverview(request: GetOverviewRequest): Promise<GetOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOverviewWithOptions(request, runtime);
  }

  /**
   * Obtains the information about a workflow.
   * 
   * @param request - GetWorkFlowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkFlowResponse
   */
  async getWorkFlowWithOptions(request: GetWorkFlowRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkFlowResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkFlow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkFlowResponse>(await this.callApi(params, req, runtime), new GetWorkFlowResponse({}));
  }

  /**
   * Obtains the information about a workflow.
   * 
   * @param request - GetWorkFlowRequest
   * @returns GetWorkFlowResponse
   */
  async getWorkFlow(request: GetWorkFlowRequest): Promise<GetWorkFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkFlowWithOptions(request, runtime);
  }

  /**
   * Obtains the list of workers that are connected to an application.
   * 
   * @param request - GetWorkerListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkerListResponse
   */
  async getWorkerListWithOptions(request: GetWorkerListRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkerListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkerList",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkerListResponse>(await this.callApi(params, req, runtime), new GetWorkerListResponse({}));
  }

  /**
   * Obtains the list of workers that are connected to an application.
   * 
   * @param request - GetWorkerListRequest
   * @returns GetWorkerListResponse
   */
  async getWorkerList(request: GetWorkerListRequest): Promise<GetWorkerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkerListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstanceWithOptions(request: GetWorkflowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new GetWorkflowInstanceResponse({}));
  }

  /**
   * Queries the details of a specified workflow instance, including the state of the workflow instance, the state of each job instance, and the dependencies between job instances. You can call this operation only in the professional edition.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstance(request: GetWorkflowInstanceRequest): Promise<GetWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * Grants permissions to an application group.
   * 
   * @param request - GrantPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantPermissionResponse
   */
  async grantPermissionWithOptions(request: GrantPermissionRequest, runtime: $Util.RuntimeOptions): Promise<GrantPermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.grantOption)) {
      query["GrantOption"] = request.grantOption;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GrantPermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GrantPermissionResponse>(await this.callApi(params, req, runtime), new GrantPermissionResponse({}));
  }

  /**
   * Grants permissions to an application group.
   * 
   * @param request - GrantPermissionRequest
   * @returns GrantPermissionResponse
   */
  async grantPermission(request: GrantPermissionRequest): Promise<GrantPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.grantPermissionWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appGroupName)) {
      query["AppGroupName"] = request.appGroupName;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
   * Queries a list of applications.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   * ```xml
   * <dependency>
   *     <groupId>com.aliyun</groupId>
   *     <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *     <version>1.0.5</version>
   * </dependency>
   * ```
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries jobs.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  /**
   * Queries jobs.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *           <groupId>com.aliyun</groupId>
   *           <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *           <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries namespaces.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacesResponse
   */
  async listNamespacesWithOptions(request: ListNamespacesRequest, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNamespaces",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNamespacesResponse>(await this.callApi(params, req, runtime), new ListNamespacesResponse({}));
  }

  /**
   * Queries namespaces.
   * 
   * @remarks
   * Before you call this operation, you must add the following dependency to the pom.xml file:
   *     <dependency>
   *         <groupId>com.aliyun</groupId>
   *         <artifactId>aliyun-java-sdk-schedulerx2</artifactId>
   *         <version>1.0.5</version>
   *     </dependency>
   * 
   * @param request - ListNamespacesRequest
   * @returns ListNamespacesResponse
   */
  async listNamespaces(request: ListNamespacesRequest): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries the execution history of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - ListWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowInstanceResponse
   */
  async listWorkflowInstanceWithOptions(request: ListWorkflowInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkflowInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new ListWorkflowInstanceResponse({}));
  }

  /**
   * Queries the execution history of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - ListWorkflowInstanceRequest
   * @returns ListWorkflowInstanceResponse
   */
  async listWorkflowInstance(request: ListWorkflowInstanceRequest): Promise<ListWorkflowInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   * 
   * @param request - RerunJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerunJobResponse
   */
  async rerunJobWithOptions(request: RerunJobRequest, runtime: $Util.RuntimeOptions): Promise<RerunJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataTime)) {
      body["DataTime"] = request.dataTime;
    }

    if (!Util.isUnset(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RerunJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RerunJobResponse>(await this.callApi(params, req, runtime), new RerunJobResponse({}));
  }

  /**
   * Reruns a job to obtain the historical data of the job. You can call this operation only in the professional edition.
   * 
   * @param request - RerunJobRequest
   * @returns RerunJobResponse
   */
  async rerunJob(request: RerunJobRequest): Promise<RerunJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunJobWithOptions(request, runtime);
  }

  /**
   * Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   * 
   * @param request - RetryJobInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryJobInstanceResponse
   */
  async retryJobInstanceWithOptions(request: RetryJobInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RetryJobInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RetryJobInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryJobInstanceResponse>(await this.callApi(params, req, runtime), new RetryJobInstanceResponse({}));
  }

  /**
   * Reruns a successful or failed job instance. You can call this operation only in the professional edition.
   * 
   * @param request - RetryJobInstanceRequest
   * @returns RetryJobInstanceResponse
   */
  async retryJobInstance(request: RetryJobInstanceRequest): Promise<RetryJobInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryJobInstanceWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   * 
   * @param request - RevokePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokePermissionResponse
   */
  async revokePermissionWithOptions(request: RevokePermissionRequest, runtime: $Util.RuntimeOptions): Promise<RevokePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokePermission",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokePermissionResponse>(await this.callApi(params, req, runtime), new RevokePermissionResponse({}));
  }

  /**
   * Revokes the permissions that are granted to an Alibaba Cloud Resource Access Management (RAM) user.
   * 
   * @param request - RevokePermissionRequest
   * @returns RevokePermissionResponse
   */
  async revokePermission(request: RevokePermissionRequest): Promise<RevokePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokePermissionWithOptions(request, runtime);
  }

  /**
   * Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetJobInstanceSuccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccessWithOptions(request: SetJobInstanceSuccessRequest, runtime: $Util.RuntimeOptions): Promise<SetJobInstanceSuccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobInstanceId)) {
      query["JobInstanceId"] = request.jobInstanceId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetJobInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetJobInstanceSuccessResponse>(await this.callApi(params, req, runtime), new SetJobInstanceSuccessResponse({}));
  }

  /**
   * Forcibly sets the state of a job instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetJobInstanceSuccessRequest
   * @returns SetJobInstanceSuccessResponse
   */
  async setJobInstanceSuccess(request: SetJobInstanceSuccessRequest): Promise<SetJobInstanceSuccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setJobInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetWfInstanceSuccessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccessWithOptions(request: SetWfInstanceSuccessRequest, runtime: $Util.RuntimeOptions): Promise<SetWfInstanceSuccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      query["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.wfInstanceId)) {
      query["WfInstanceId"] = request.wfInstanceId;
    }

    if (!Util.isUnset(request.workflowId)) {
      query["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetWfInstanceSuccess",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetWfInstanceSuccessResponse>(await this.callApi(params, req, runtime), new SetWfInstanceSuccessResponse({}));
  }

  /**
   * Forcibly sets the state of a workflow instance to successful. You can call this operation only in the professional edition.
   * 
   * @param request - SetWfInstanceSuccessRequest
   * @returns SetWfInstanceSuccessResponse
   */
  async setWfInstanceSuccess(request: SetWfInstanceSuccessRequest): Promise<SetWfInstanceSuccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setWfInstanceSuccessWithOptions(request, runtime);
  }

  /**
   * Stops a job instance in the running state.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
   * Stops a job instance in the running state.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - UpdateAppGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppGroupResponse
   */
  async updateAppGroupWithOptions(request: UpdateAppGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppGroup",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppGroupResponse>(await this.callApi(params, req, runtime), new UpdateAppGroupResponse({}));
  }

  /**
   * The additional information that is returned.
   * 
   * @param request - UpdateAppGroupRequest
   * @returns UpdateAppGroupResponse
   */
  async updateAppGroup(request: UpdateAppGroupRequest): Promise<UpdateAppGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppGroupWithOptions(request, runtime);
  }

  /**
   * Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   * 
   * @param request - UpdateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(request: UpdateJobRequest, runtime: $Util.RuntimeOptions): Promise<UpdateJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attemptInterval)) {
      body["AttemptInterval"] = request.attemptInterval;
    }

    if (!Util.isUnset(request.calendar)) {
      body["Calendar"] = request.calendar;
    }

    if (!Util.isUnset(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!Util.isUnset(request.consumerSize)) {
      body["ConsumerSize"] = request.consumerSize;
    }

    if (!Util.isUnset(request.contactInfo)) {
      body["ContactInfo"] = request.contactInfo;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.dataOffset)) {
      body["DataOffset"] = request.dataOffset;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dispatcherSize)) {
      body["DispatcherSize"] = request.dispatcherSize;
    }

    if (!Util.isUnset(request.executeMode)) {
      body["ExecuteMode"] = request.executeMode;
    }

    if (!Util.isUnset(request.failEnable)) {
      body["FailEnable"] = request.failEnable;
    }

    if (!Util.isUnset(request.failTimes)) {
      body["FailTimes"] = request.failTimes;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.maxAttempt)) {
      body["MaxAttempt"] = request.maxAttempt;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      body["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.missWorkerEnable)) {
      body["MissWorkerEnable"] = request.missWorkerEnable;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.queueSize)) {
      body["QueueSize"] = request.queueSize;
    }

    if (!Util.isUnset(request.sendChannel)) {
      body["SendChannel"] = request.sendChannel;
    }

    if (!Util.isUnset(request.successNoticeEnable)) {
      body["SuccessNoticeEnable"] = request.successNoticeEnable;
    }

    if (!Util.isUnset(request.taskAttemptInterval)) {
      body["TaskAttemptInterval"] = request.taskAttemptInterval;
    }

    if (!Util.isUnset(request.taskDispatchMode)) {
      body["TaskDispatchMode"] = request.taskDispatchMode;
    }

    if (!Util.isUnset(request.taskMaxAttempt)) {
      body["TaskMaxAttempt"] = request.taskMaxAttempt;
    }

    if (!Util.isUnset(request.template)) {
      body["Template"] = request.template;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.timeoutEnable)) {
      body["TimeoutEnable"] = request.timeoutEnable;
    }

    if (!Util.isUnset(request.timeoutKillEnable)) {
      body["TimeoutKillEnable"] = request.timeoutKillEnable;
    }

    if (!Util.isUnset(request.timezone)) {
      body["Timezone"] = request.timezone;
    }

    if (!Util.isUnset(request.XAttrs)) {
      body["XAttrs"] = request.XAttrs;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateJob",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateJobResponse>(await this.callApi(params, req, runtime), new UpdateJobResponse({}));
  }

  /**
   * Updates the configuration information about a job. By default, you need to call the GetJobInfo operation to obtain the original configuration of the job before you call this operation to modify the configuration as required.
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: UpdateJobRequest): Promise<UpdateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateJobWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(request: UpdateWorkflowRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.timeExpression)) {
      body["TimeExpression"] = request.timeExpression;
    }

    if (!Util.isUnset(request.timeType)) {
      body["TimeType"] = request.timeType;
    }

    if (!Util.isUnset(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflow",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowResponse({}));
  }

  /**
   * Updates the basic information about a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(request: UpdateWorkflowRequest): Promise<UpdateWorkflowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowDagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDagResponse
   */
  async updateWorkflowDagWithOptions(request: UpdateWorkflowDagRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowDagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dagJson)) {
      body["DagJson"] = request.dagJson;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.namespaceSource)) {
      body["NamespaceSource"] = request.namespaceSource;
    }

    if (!Util.isUnset(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflowDag",
      version: "2019-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowDagResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowDagResponse({}));
  }

  /**
   * Modifies the nodes and dependencies of a workflow. You can call this operation only in the professional edition.
   * 
   * @param request - UpdateWorkflowDagRequest
   * @returns UpdateWorkflowDagResponse
   */
  async updateWorkflowDag(request: UpdateWorkflowDagRequest): Promise<UpdateWorkflowDagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowDagWithOptions(request, runtime);
  }

}
