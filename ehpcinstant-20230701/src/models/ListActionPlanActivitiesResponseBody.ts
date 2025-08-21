// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionPlanActivitiesResponseBodyActionPlanActivitiesJobs extends $dara.Model {
  /**
   * @example
   * job-hz12dqq8y3ormo1hz49h
   */
  jobId?: string;
  /**
   * @example
   * Create
   */
  jobOperationType?: string;
  /**
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
   * @example
   * et-4119e3f60eb34fc4
   */
  actionPlanActivityId?: string;
  /**
   * @example
   * 100
   */
  createdCapacity?: number;
  /**
   * @example
   * 0
   */
  destroyCapacity?: number;
  /**
   * @example
   * 2025-08-10 18:28:05
   */
  endTime?: string;
  jobs?: ListActionPlanActivitiesResponseBodyActionPlanActivitiesJobs[];
  /**
   * @example
   * 2025-08-10 18:28:05
   */
  startTime?: string;
  /**
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
  actionPlanActivities?: ListActionPlanActivitiesResponseBodyActionPlanActivities[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1d2db86scXXXXXXXXXX
   */
  nextToken?: string;
  /**
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  /**
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

