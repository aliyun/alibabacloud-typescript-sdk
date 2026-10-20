// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRunsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Spark configurations.
   * 
   * @example
   * [{\\"key\\":\\"spark.app.name\\",\\"value\\":\\"test\\"}]
   */
  applicationConfigs?: string;
  /**
   * @remarks
   * The UID of the user who created the job.
   * 
   * @example
   * 150976534701****
   */
  creator?: string;
  /**
   * @remarks
   * The time range for the end time of the job run.
   */
  endTimeShrink?: string;
  /**
   * @remarks
   * Specifies whether to aggregate and return statistical results by job run state.
   */
  groupByState?: boolean;
  /**
   * @remarks
   * Specifies whether the job run is a workflow job.
   * 
   * @example
   * false
   */
  isWorkflow?: string;
  /**
   * @remarks
   * The ID of the streaming job deployment.
   * 
   * @example
   * jd-b6d003f1930f****
   */
  jobRunDeploymentId?: string;
  /**
   * @remarks
   * The ID of the job run.
   * 
   * @example
   * j-xxx
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum number of entries to return in a single call. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The minimum execution duration of the job run, in milliseconds.
   * 
   * @example
   * 60000
   */
  minDuration?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * emr-spark-demo-job
   */
  name?: string;
  /**
   * @remarks
   * The pagination token that specifies the starting position for the query.
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
   * The name of the resource queue in which the Spark job runs.
   * 
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The runtime configurations.
   * 
   * @example
   * [{\\"key\\":\\"mainClass\\",\\"value\\":\\"yourClass\\"}]
   */
  runtimeConfigs?: string;
  /**
   * @remarks
   * The time range for the start time of the job run.
   */
  startTimeShrink?: string;
  /**
   * @remarks
   * The states of the job runs.
   * 
   * @example
   * ["Running","Submitted"]
   */
  statesShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
      creator: 'creator',
      endTimeShrink: 'endTime',
      groupByState: 'groupByState',
      isWorkflow: 'isWorkflow',
      jobRunDeploymentId: 'jobRunDeploymentId',
      jobRunId: 'jobRunId',
      maxResults: 'maxResults',
      minDuration: 'minDuration',
      name: 'name',
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceQueueId: 'resourceQueueId',
      runtimeConfigs: 'runtimeConfigs',
      startTimeShrink: 'startTime',
      statesShrink: 'states',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: 'string',
      creator: 'string',
      endTimeShrink: 'string',
      groupByState: 'boolean',
      isWorkflow: 'string',
      jobRunDeploymentId: 'string',
      jobRunId: 'string',
      maxResults: 'number',
      minDuration: 'number',
      name: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceQueueId: 'string',
      runtimeConfigs: 'string',
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

