// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobRunsRequestEndTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the time range.
   * 
   * @example
   * 1709740800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestStartTime extends $dara.Model {
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 1710432000000
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the time range.
   * 
   * @example
   * 1709740800000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsRequest extends $dara.Model {
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
   * The time range when the job run ended.
   */
  endTime?: ListJobRunsRequestEndTime;
  /**
   * @remarks
   * Specifies whether the job is a workflow task.
   * 
   * @example
   * false
   */
  isWorkflow?: string;
  /**
   * @remarks
   * The deployment ID of the streaming job.
   * 
   * @example
   * jd-b6d003f1930f****
   */
  jobRunDeploymentId?: string;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * j-xxx
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The minimum runtime of the job run, in milliseconds.
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
   * The token that specifies the position from which to start the next read.
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
   * The ID of the resource queue on which the Spark job runs.
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
   * The time range when the job run started.
   */
  startTime?: ListJobRunsRequestStartTime;
  /**
   * @remarks
   * The job run states.
   * 
   * @example
   * ["Running","Submitted"]
   */
  states?: string[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListJobRunsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'applicationConfigs',
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
      runtimeConfigs: 'runtimeConfigs',
      startTime: 'startTime',
      states: 'states',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: 'string',
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
      runtimeConfigs: 'string',
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

