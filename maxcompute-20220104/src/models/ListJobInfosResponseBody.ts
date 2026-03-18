// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfosResponseBodyDataJobInfoListSceneResults extends $dara.Model {
  /**
   * @remarks
   * The details of the smart diagnosis result.
   * 
   * @example
   * This job uses annual and monthly computing resources. It may be that the job is waiting for resources due to the large amount of overall job running data, many resources requested, and low job priority. Please go to Resource Consumption to view the specific situation. You can also go to Cost Optimization to see if you need to adjust resource configuration.
   */
  description?: string;
  /**
   * @remarks
   * Information about the nodes that have data skew or data bloat. This parameter is returned only when the diagnosis scenario is data skew or data bloat.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The scenario of the smart diagnosis result.
   * 
   * @example
   * LackResource
   */
  scene?: string;
  /**
   * @remarks
   * The tag of the smart diagnosis result.
   * 
   * @example
   * SubscriptionLackResource
   */
  sceneTag?: string;
  /**
   * @remarks
   * A summary of the smart diagnosis result.
   * 
   * @example
   * Insufficient computing resources available for the job. Click to view details.
   */
  summary?: string;
  /**
   * @remarks
   * The type of the smart diagnosis result.
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

export class ListJobInfosResponseBodyDataJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * AY20A
   */
  cluster?: string;
  /**
   * @remarks
   * The proportion of CUs in the job snapshot.
   * 
   * @example
   * 0.48
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The total CUs used.
   * 
   * @example
   * 10
   */
  cuUsage?: number;
  /**
   * @remarks
   * The time when the job finished.
   * 
   * @example
   * 0
   */
  endAtTime?: number;
  /**
   * @remarks
   * The ID of the DataWorks node.
   * 
   * @example
   * node_4
   */
  extNodeId?: string;
  extNodeName?: string;
  /**
   * @remarks
   * The person in charge of the execution.
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
  extPlatformId?: string;
  /**
   * @remarks
   * The amount of data scanned by the job. Unit: bytes.
   * 
   * @example
   * 1234
   */
  inputBytes?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 20230410050036549gfmsdwf60gg
   */
  instanceId?: string;
  /**
   * @remarks
   * The account that submitted the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
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
   * The proportion of memory in the job snapshot.
   * 
   * @example
   * 0.42
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The total memory used.
   * 
   * @example
   * 40
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The name of the MaxCompute project.
   * 
   * @example
   * openrec_new
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the quota that the job uses.
   * 
   * @example
   * my_quota
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
   * The time when the job started to run.
   * 
   * @example
   * 1672112113
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The runtime.
   * 
   * @example
   * 800
   */
  runningTime?: number;
  /**
   * @remarks
   * The smart diagnosis results.
   */
  sceneResults?: ListJobInfosResponseBodyDataJobInfoListSceneResults[];
  /**
   * @remarks
   * The SQL signature.
   * 
   * @example
   * i094KijGrN3kOXZ74kbexB77XQY=
   */
  signature?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The status of the job snapshot.
   * 
   * @example
   * running
   */
  statusSnapshot?: string;
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
   * The tags.
   * 
   * @example
   * []
   */
  tags?: string;
  taskName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 213065738244354
   */
  tenantId?: string;
  /**
   * @remarks
   * The total runtime.
   * 
   * @example
   * 900
   */
  totalTime?: number;
  /**
   * @remarks
   * The waiting time.
   * 
   * @example
   * 100
   */
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      cuSnapshot: 'cuSnapshot',
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeName: 'extNodeName',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      extPlatformId: 'extPlatformId',
      inputBytes: 'inputBytes',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobType: 'jobType',
      memorySnapshot: 'memorySnapshot',
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
      statusSnapshot: 'statusSnapshot',
      submittedAtTime: 'submittedAtTime',
      tags: 'tags',
      taskName: 'taskName',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      cuSnapshot: 'number',
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeName: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      extPlatformId: 'string',
      inputBytes: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      jobType: 'string',
      memorySnapshot: 'number',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      sceneResults: { 'type': 'array', 'itemType': ListJobInfosResponseBodyDataJobInfoListSceneResults },
      signature: 'string',
      status: 'string',
      statusSnapshot: 'string',
      submittedAtTime: 'number',
      tags: 'string',
      taskName: 'string',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sceneResults)) {
      $dara.Model.validateArray(this.sceneResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of job information.
   */
  jobInfoList?: ListJobInfosResponseBodyDataJobInfoList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobInfoList)) {
      $dara.Model.validateArray(this.jobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListJobInfosResponseBodyData;
  /**
   * @remarks
   * Indicates whether the business logic was successful. A value other than 200 indicates a failure.
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
   * 0bc13a9516807484336515320e38f5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobInfosResponseBodyData,
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

