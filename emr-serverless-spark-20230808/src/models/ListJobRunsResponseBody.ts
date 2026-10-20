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
   * The code type of the job. Valid values:
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
   * The advanced Spark configurations. This parameter is not returned by the List operation.
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
   * The number of compute units (CUs) consumed during the job run. This value is an estimate and the final value is subject to the bill.
   * 
   * @example
   * 2.059
   */
  cuHours?: number;
  /**
   * @remarks
   * The Spark DPI engine version of the running job.
   * 
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The time when the job ended. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684119314000
   */
  endTime?: number;
  /**
   * @remarks
   * The execution timeout period.
   * 
   * @example
   * 3600
   */
  executionTimeoutSeconds?: number;
  /**
   * @remarks
   * Specifies whether Fusion engine acceleration is enabled.
   * 
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The information about the Spark driver. This parameter is not returned by the List operation.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The ID of the job run.
   * 
   * @example
   * jr-231231
   */
  jobRunId?: string;
  /**
   * @remarks
   * The path to the execution log.
   */
  log?: RunLog;
  /**
   * @remarks
   * The total amount of memory allocated to the job multiplied by the number of seconds the job has run.
   * 
   * @example
   * 33030784
   */
  mbSeconds?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The priority of the Spark job.
   * 
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The Spark DPI engine version of the running job.
   * 
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12, Native Runtime)
   */
  releaseVersion?: string;
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
   * The states of the job runs.
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
   * The time when the job was submitted. The value is a UNIX timestamp in milliseconds.
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
   * The total number of vcores allocated to the job multiplied by the number of seconds the job has run.
   * 
   * @example
   * 8236
   */
  vcoreSeconds?: number;
  /**
   * @remarks
   * The web UI of the job.
   * 
   * @example
   * http://spark-ui
   */
  webUI?: string;
  /**
   * @remarks
   * The ID of the workspace.
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
  /**
   * @remarks
   * The statistical results aggregated by job state.
   */
  aggregations?: { [key: string]: string };
  /**
   * @remarks
   * The list of Spark job runs.
   */
  jobRuns?: ListJobRunsResponseBodyJobRuns[];
  /**
   * @remarks
   * The maximum number of records returned for the request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The position of the data read.
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
   * The total number of records that meet the request conditions.
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

