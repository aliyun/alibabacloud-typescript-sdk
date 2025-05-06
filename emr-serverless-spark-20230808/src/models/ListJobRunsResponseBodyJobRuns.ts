// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobRunsResponseBodyJobRunsConfigurationOverrides } from "./ListJobRunsResponseBodyJobRunsConfigurationOverrides";
import { JobDriver } from "./JobDriver";
import { RunLog } from "./RunLog";
import { ListJobRunsResponseBodyJobRunsStateChangeReason } from "./ListJobRunsResponseBodyJobRunsStateChangeReason";
import { Tag } from "./Tag";


export class ListJobRunsResponseBodyJobRuns extends $dara.Model {
  /**
   * @remarks
   * The code type of the job. Valid values:
   * 
   * SQL
   * 
   * JAR
   * 
   * PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The advanced configurations of Spark.
   */
  configurationOverrides?: ListJobRunsResponseBodyJobRunsConfigurationOverrides;
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
   * The number of CUs consumed during a specified cycle of a task. The value is an estimated value. Refer to your Alibaba Cloud bill for the actual number of consumed CUs.
   * 
   * @example
   * 2.059
   */
  cuHours?: number;
  /**
   * @remarks
   * The version of Spark on which the jobs run.
   * 
   * @example
   * esr-3.0.0 (Spark 3.4.3, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 1684119314000
   */
  endTime?: number;
  /**
   * @remarks
   * The timeout period of the job.
   * 
   * @example
   * 3600
   */
  executionTimeoutSeconds?: number;
  /**
   * @remarks
   * Indicates whether the Fusion engine is used for acceleration.
   * 
   * @example
   * true
   */
  fusion?: boolean;
  /**
   * @remarks
   * The information about Spark Driver.
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
   * The path where the operational logs are stored.
   */
  log?: RunLog;
  /**
   * @remarks
   * The total amount of memory allocated to the job multiplied by the running duration (seconds).
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
   * @remarks
   * The version of Spark on which the jobs run.
   * 
   * @example
   * esr-native-3.4.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The job state.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason of the job status change.
   */
  stateChangeReason?: ListJobRunsResponseBodyJobRunsStateChangeReason;
  /**
   * @remarks
   * The time when the job was submitted.
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
   * The total number of CPU cores allocated to the job multiplied by the running duration (seconds).
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
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
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
      releaseVersion: 'releaseVersion',
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
      releaseVersion: 'string',
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

