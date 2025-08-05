// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfosResponseBodyDataJobInfoListSceneResults extends $dara.Model {
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
   * Information about the nodes where data skew or data expansion is detected. This parameter is returned only when the diagnostics scenario is data skew or data expansion.
   */
  params?: { [key: string]: string };
  /**
   * @remarks
   * The intelligent diagnostics result scenario.
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
   * The CU snapshot proportion of the job.
   * 
   * @example
   * 0.48
   */
  cuSnapshot?: number;
  /**
   * @remarks
   * The amount of resources consumed by the job. This parameter is returned only for jobs that are complete.Unit: 100\\*Core\\*s.
   * 
   * @example
   * 10
   */
  cuUsage?: number;
  /**
   * @remarks
   * The time when the job stops running.
   * 
   * @example
   * 0
   */
  endAtTime?: number;
  /**
   * @remarks
   * The node ID of DataWorks.
   * 
   * @example
   * node_4
   */
  extNodeId?: string;
  /**
   * @remarks
   * The account of the node owner.
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
   * The amount of scanned data for the job. Unit: byte.
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
   * The account that commits the job.
   * 
   * @example
   * ALIYUN$xxx@test.aliyunid.com
   */
  jobOwner?: string;
  /**
   * @remarks
   * The type of the job.
   * 
   * @example
   * SQL
   */
  jobType?: string;
  /**
   * @remarks
   * The memory snapshot proportion of the job.
   * 
   * @example
   * 0.42
   */
  memorySnapshot?: number;
  /**
   * @remarks
   * The number of memory consumed by the job. This parameter is returned only for jobs that are complete.Unit: MB\\*s.
   * 
   * @example
   * 40
   */
  memoryUsage?: number;
  /**
   * @remarks
   * The priority of the job.
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
   * The nickname of the quota that is used by the job.
   * 
   * @example
   * my_quota
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The type of the quota.
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
   * The time when the job starts to run.
   * 
   * @example
   * 1672112113
   */
  runningAtTime?: number;
  /**
   * @remarks
   * The period for which the job runs.
   * 
   * @example
   * 800
   */
  runningTime?: number;
  /**
   * @remarks
   * The intelligent diagnostics results.
   */
  sceneResults?: ListJobInfosResponseBodyDataJobInfoListSceneResults[];
  /**
   * @remarks
   * The signature of the SQL job.
   * 
   * @example
   * i094KijGrN3kOXZ74kbexB77XQY=
   */
  signature?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The status of the snapshot.
   * 
   * @example
   * running
   */
  statusSnapshot?: string;
  /**
   * @remarks
   * The time when the job was committed.
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
   * The total period for which the job runs.
   * 
   * @example
   * 900
   */
  totalTime?: number;
  /**
   * @remarks
   * The duration for which the job waits to start.
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
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
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
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
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
   * The information about the jobs.
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
   * The total number of returned entries.
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
   * The data returned.
   */
  data?: ListJobInfosResponseBodyData;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
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

