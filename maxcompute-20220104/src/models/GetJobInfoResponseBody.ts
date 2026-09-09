// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobSubStatusList extends $dara.Model {
  /**
   * @remarks
   * The substatus code.
   * 
   * @example
   * 1010
   */
  code?: number;
  /**
   * @remarks
   * The description of the substatus.
   * 
   * @example
   * Waiting for scheduling
   */
  description?: string;
  /**
   * @remarks
   * The start time of the substatus.
   * 
   * @example
   * 2025-03-05 00:04:15.717364 +0800
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobInfoResponseBodyDataSceneResults extends $dara.Model {
  /**
   * @remarks
   * The intelligent diagnostics result description.
   * 
   * @example
   * This job uses annual and monthly computing resources. It may be that the job is waiting for resources due to the large amount of overall job running data, many resources requested, and low job priority. Please go to Resource Consumption to view the specific situation. You can also go to Cost Optimization to see if you need to adjust resource configuration.
   */
  description?: string;
  /**
   * @remarks
   * Node information for data skew or data expansion diagnostics. Returned only when the scenario is data skew or data expansion.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The intelligent diagnostics scenario.
   * 
   * @example
   * LackResource
   */
  scene?: string;
  /**
   * @remarks
   * The intelligent diagnostics result tag.
   * 
   * @example
   * SubscriptionLackResource
   */
  sceneTag?: string;
  /**
   * @remarks
   * The intelligent diagnostics result summary.
   * 
   * @example
   * Insufficient computing resources available for the job. Click to view details.
   */
  summary?: string;
  /**
   * @remarks
   * The intelligent diagnostics result type.
   * 
   * @example
   * warning
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      params: 'params',
      scene: 'scene',
      sceneTag: 'sceneTag',
      summary: 'summary',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      scene: 'string',
      sceneTag: 'string',
      summary: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
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
   * The resources consumed by the job. Returned only for completed jobs. Unit: 100\\*Core\\*s.
   * 
   * @example
   * 10
   */
  cuUsage?: number;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 1672112913
   */
  endAtTime?: number;
  /**
   * @remarks
   * The ID of the ancestor node.
   * 
   * @example
   * node_4
   */
  extNodeId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the task owner.
   * 
   * @example
   * duty_2
   */
  extNodeOnDuty?: string;
  /**
   * @remarks
   * The upstream platform.
   * 
   * @example
   * platform_3
   */
  extPlantFrom?: string;
  /**
   * @remarks
   * The amount of data scanned by the job.
   * 
   * @example
   * 1234
   */
  inputBytes?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 20230410****60gg
   */
  instanceId?: string;
  /**
   * @remarks
   * The job owner.
   * 
   * @example
   * ALIYUN$7632***@aliyun.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The job lifecycle substatuses.
   */
  jobSubStatusList?: GetJobInfoResponseBodyDataJobSubStatusList[];
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * The memory consumed by the job. Returned only for completed jobs. Unit: MB\\*s.
   * 
   * @example
   * 40
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * dp_cdm_prod
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the computing quota used by the job.
   * 
   * @example
   * os_bigdata
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The quota type.
   * 
   * @example
   * subscription
   */
  quotaType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the job received its first computing resources. For short-lived or resource-free jobs (such as DDL jobs), the submission time is used instead.
   * 
   * @example
   * 1672112113
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The duration from job start to job end.
   * 
   * @example
   * 800
   */
  runningTime?: number;
  /**
   * @remarks
   * The intelligent diagnostics results.
   */
  sceneResults?: GetJobInfoResponseBodyDataSceneResults[];
  /**
   * @remarks
   * The SQL job signature. Use this value to locate all instances where an SQL statement was executed.
   * 
   * @example
   * 20c1efb4a7caca1865f4aa784bb500efae74af04
   */
  signature?: string;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1672112013
   */
  submittedAtTime?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 4784****5249
   */
  tenantId?: string;
  /**
   * @remarks
   * The total duration from job submission to termination.
   * 
   * @example
   * 900
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration from job submission to execution start.
   * 
   * @example
   * 100
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      inputBytes: 'inputBytes',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobSubStatusList: 'jobSubStatusList',
      jobType: 'jobType',
      memoryUsage: 'memoryUsage',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      sceneResults: 'sceneResults',
      signature: 'signature',
      status: 'status',
      submittedAtTime: 'submittedAtTime',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      inputBytes: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      jobSubStatusList: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataJobSubStatusList },
      jobType: 'string',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      sceneResults: { 'type': 'array', 'itemType': GetJobInfoResponseBodyDataSceneResults },
      signature: 'string',
      status: 'string',
      submittedAtTime: 'number',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobSubStatusList)) {
      $dara.Model.validateArray(this.jobSubStatusList);
    }
    if(Array.isArray(this.sceneResults)) {
      $dara.Model.validateArray(this.sceneResults);
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
   * The returned data.
   */
  data?: GetJobInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * - 1xx: informational. The request is received and being processed.
   * 
   * - 2xx: success. The request was received, understood, and accepted.
   * 
   * - 3xx: redirection. Further action is required to complete the request.
   * 
   * - 4xx: client error. The request contains invalid parameters or syntax, or a precondition cannot be met.
   * 
   * - 5xx: server error. The server failed to fulfill the request.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0bb16654558425251398e27a9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
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

