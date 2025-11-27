// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlanActivitiesResponseBodyActionPlanActivitiesJobs extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * job-hz12dqq8y3ormo1hz49h
   */
  jobId?: string;
  /**
   * @remarks
   * The operation type of the execution plan activity on the job. Possible values are as follows:
   * 
   * *   Create
   * *   Delete
   * 
   * @example
   * Create
   */
  jobOperationType?: string;
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
      jobId: 'JobId',
      jobOperationType: 'JobOperationType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobOperationType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionPlanActivitiesResponseBodyActionPlanActivities extends $dara.Model {
  /**
   * @remarks
   * The activity ID of the execution plan.
   * 
   * @example
   * et-4119e3f60eb34fc4
   */
  actionPlanActivityId?: string;
  /**
   * @remarks
   * The increased capacity of this execution plan activity.
   * 
   * @example
   * 100
   */
  createdCapacity?: number;
  /**
   * @remarks
   * The capacity released by this execution plan activity.
   * 
   * @example
   * 0
   */
  destroyCapacity?: number;
  /**
   * @remarks
   * The end time of the execution plan activity.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  endTime?: string;
  /**
   * @remarks
   * The list of Instant jobs involved in the execution plan.
   */
  jobs?: ListActionPlanActivitiesResponseBodyActionPlanActivitiesJobs[];
  /**
   * @remarks
   * The start time of the implementation of the planned activity.
   * 
   * @example
   * 2025-08-10 18:28:05
   */
  startTime?: string;
  /**
   * @remarks
   * The implementation status of the execution plan activity. Valid values:
   * 
   * *   InProcess
   * *   Completed
   * *   Failed
   * 
   * @example
   * InProcess
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actionPlanActivityId: 'ActionPlanActivityId',
      createdCapacity: 'CreatedCapacity',
      destroyCapacity: 'DestroyCapacity',
      endTime: 'EndTime',
      jobs: 'Jobs',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanActivityId: 'string',
      createdCapacity: 'number',
      destroyCapacity: 'number',
      endTime: 'string',
      jobs: { 'type': 'array', 'itemType': ListActionPlanActivitiesResponseBodyActionPlanActivitiesJobs },
      startTime: 'string',
      status: 'string',
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

export class ListActionPlanActivitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of execution details of the execution plan.
   */
  actionPlanActivities?: ListActionPlanActivitiesResponseBodyActionPlanActivities[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates the read position returned by the current call. An empty value means all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
   * @remarks
   * Total data count under the current request conditions (optional; not returned by default).
   * 
   * @example
   * 40
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      actionPlanActivities: 'ActionPlanActivities',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionPlanActivities: { 'type': 'array', 'itemType': ListActionPlanActivitiesResponseBodyActionPlanActivities },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionPlanActivities)) {
      $dara.Model.validateArray(this.actionPlanActivities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

