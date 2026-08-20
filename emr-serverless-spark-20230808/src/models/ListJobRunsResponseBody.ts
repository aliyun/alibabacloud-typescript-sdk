// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDriver } from "./JobDriver";
import { RunLog } from "./RunLog";
import { Tag } from "./Tag";
import { Configuration } from "./Configuration";


export class ListJobRunsResponseBodyJobRunsConfigurationOverrides extends $dara.Model {
  /**
   * @remarks
   * The list of Spark configurations.
   */
  configurations?: Configuration[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': Configuration },
    };
  }

  validate() {
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBodyJobRunsStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection refused
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobRunsResponseBodyJobRuns extends $dara.Model {
  /**
   * @remarks
   * The job code type. Valid values:
   * 
   * SQL
   * 
   * JAR
   * 
   * PYTHON.
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The Spark advanced configurations. This parameter is not returned by the List operation.
   */
  configurationOverrides?: ListJobRunsResponseBodyJobRunsConfigurationOverrides;
  /**
   * @remarks
   * The UID of the user who created the job.
   * 
   * @example
   * 150978934701****
   */
  creator?: string;
  /**
   * @remarks
   * The number of compute units (CUs) consumed during the job run cycle. This value is an estimate. The actual value is subject to the bill.
   * 
   * @example
   * 2.059
   */
  cuHours?: number;
  /**
   * @remarks
   * The version of the Spark DPI engine used to run the job.
   * 
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The job end time.
   * 
   * @example
   * 1684119314000
   */
  endTime?: number;
  /**
   * @remarks
   * The execution timeout period, in seconds.
   * 
   * @example
   * 3600
   */
  executionTimeoutSeconds?: number;
  /**
   * @remarks
   * Indicates whether the Fusion engine acceleration is enabled.
   * 
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The Spark Driver information. This parameter is not returned by the List operation.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * jr-231231
   */
  jobRunId?: string;
  /**
   * @remarks
   * The path of the run log.
   */
  log?: RunLog;
  /**
   * @remarks
   * The total amount of allocated memory multiplied by the number of seconds the job has been running.
   * 
   * @example
   * 33030784
   */
  mbSeconds?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The version of the Spark DPI engine used to run the job.
   * 
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12, Native Runtime)
   */
  releaseVersion?: string;
  /**
   * @example
   * dev_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The job states.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason for the state change.
   */
  stateChangeReason?: ListJobRunsResponseBodyJobRunsStateChangeReason;
  /**
   * @remarks
   * The job submission time.
   * 
   * @example
   * 1684119314000
   */
  submitTime?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The total number of allocated vcores multiplied by the number of seconds the job has been running.
   * 
   * @example
   * 8236
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The job Web UI.
   * 
   * @example
   * http://spark-ui
   */
  webUI?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-d2d82aa09155****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'codeType',
      configurationOverrides: 'configurationOverrides',
      creator: 'creator',
      cuHours: 'cuHours',
      displayReleaseVersion: 'displayReleaseVersion',
      endTime: 'endTime',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      fusion: 'fusion',
      jobDriver: 'jobDriver',
      jobRunId: 'jobRunId',
      log: 'log',
      mbSeconds: 'mbSeconds',
      name: 'name',
      priority: 'priority',
      releaseVersion: 'releaseVersion',
      resourceQueueId: 'resourceQueueId',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      submitTime: 'submitTime',
      tags: 'tags',
      vcoreSeconds: 'vcoreSeconds',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'string',
      configurationOverrides: ListJobRunsResponseBodyJobRunsConfigurationOverrides,
      creator: 'string',
      cuHours: 'number',
      displayReleaseVersion: 'string',
      endTime: 'number',
      executionTimeoutSeconds: 'number',
      fusion: 'boolean',
      jobDriver: JobDriver,
      jobRunId: 'string',
      log: RunLog,
      mbSeconds: 'number',
      name: 'string',
      priority: 'string',
      releaseVersion: 'string',
      resourceQueueId: 'string',
      state: 'string',
      stateChangeReason: ListJobRunsResponseBodyJobRunsStateChangeReason,
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      vcoreSeconds: 'number',
      webUI: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.configurationOverrides && typeof (this.configurationOverrides as any).validate === 'function') {
      (this.configurationOverrides as any).validate();
    }
    if(this.jobDriver && typeof (this.jobDriver as any).validate === 'function') {
      (this.jobDriver as any).validate();
    }
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    if(this.stateChangeReason && typeof (this.stateChangeReason as any).validate === 'function') {
      (this.stateChangeReason as any).validate();
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

export class ListJobRunsResponseBody extends $dara.Model {
  aggregations?: { [key: string]: string };
  /**
   * @remarks
   * The list of Spark jobs.
   */
  jobRuns?: ListJobRunsResponseBodyJobRuns[];
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the data was read.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the request conditions.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'aggregations',
      jobRuns: 'jobRuns',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobRuns: { 'type': 'array', 'itemType': ListJobRunsResponseBodyJobRuns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.aggregations) {
      $dara.Model.validateMap(this.aggregations);
    }
    if(Array.isArray(this.jobRuns)) {
      $dara.Model.validateArray(this.jobRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

