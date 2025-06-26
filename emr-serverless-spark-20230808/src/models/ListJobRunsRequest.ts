// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobRunsRequestEndTime } from "./ListJobRunsRequestEndTime";
import { ListJobRunsRequestStartTime } from "./ListJobRunsRequestStartTime";
import { ListJobRunsRequestTags } from "./ListJobRunsRequestTags";


export class ListJobRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the job.
   * 
   * @example
   * 1509789347011222
   */
  creator?: string;
  /**
   * @remarks
   * The range of end time.
   */
  endTime?: ListJobRunsRequestEndTime;
  isWorkflow?: string;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * jd-b6d003f1930f****
   */
  jobRunDeploymentId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * j-xxx
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The minimum running duration of the job. Unit: ms.
   * 
   * @example
   * 60000
   */
  minDuration?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * emr-spark-demo-job
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
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
   * The name of the resource queue on which the Spark jobs run.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The range of start time.
   */
  startTime?: ListJobRunsRequestStartTime;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * ["Running","Submitted"]
   */
  states?: string[];
  /**
   * @remarks
   * The tags of the job.
   */
  tags?: ListJobRunsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTime: 'endTime',
      isWorkflow: 'isWorkflow',
      jobRunDeploymentId: 'jobRunDeploymentId',
      jobRunId: 'jobRunId',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceQueueId: 'resourceQueueId',
      startTime: 'startTime',
      states: 'states',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endTime: ListJobRunsRequestEndTime,
      isWorkflow: 'string',
      jobRunDeploymentId: 'string',
      jobRunId: 'string',
      maxResults: 'number',
      minDuration: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceQueueId: 'string',
      startTime: ListJobRunsRequestStartTime,
      states: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListJobRunsRequestTags },
    };
  }

  validate() {
    if(this.endTime && typeof (this.endTime as any).validate === 'function') {
      (this.endTime as any).validate();
    }
    if(this.startTime && typeof (this.startTime as any).validate === 'function') {
      (this.startTime as any).validate();
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

