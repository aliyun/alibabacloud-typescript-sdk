// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRunsShrinkRequest extends $dara.Model {
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
  endTimeShrink?: string;
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
  startTimeShrink?: string;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * ["Running","Submitted"]
   */
  statesShrink?: string;
  /**
   * @remarks
   * The tags of the job.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'creator',
      endTimeShrink: 'endTime',
      jobRunDeploymentId: 'jobRunDeploymentId',
      jobRunId: 'jobRunId',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceQueueId: 'resourceQueueId',
      startTimeShrink: 'startTime',
      statesShrink: 'states',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      endTimeShrink: 'string',
      jobRunDeploymentId: 'string',
      jobRunId: 'string',
      maxResults: 'number',
      minDuration: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceQueueId: 'string',
      startTimeShrink: 'string',
      statesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

