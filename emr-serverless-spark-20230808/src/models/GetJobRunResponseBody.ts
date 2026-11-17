// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { JobDriver } from "./JobDriver";
import { RunLog } from "./RunLog";
import { Tag } from "./Tag";
import { Configuration } from "./Configuration";


export class GetJobRunResponseBodyJobRunConfigurationOverrides extends $dara.Model {
  /**
   * @remarks
   * The list of configurations.
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

export class GetJobRunResponseBodyJobRunStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ERR-100000
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

export class GetJobRunResponseBodyJobRunTokenDetails extends $dara.Model {
  /**
   * @remarks
   * Specifies whether thinking mode is enabled.
   * 
   * @example
   * true
   */
  enableThinking?: string;
  /**
   * @remarks
   * The input modality.
   * 
   * @example
   * -
   */
  inputModality?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The input token range.
   * 
   * @example
   * 0<Token≤256K
   */
  tokenRange?: string;
  /**
   * @remarks
   * The source of the tokens, such as input or output.
   * 
   * @example
   * input
   */
  tokenSource?: string;
  /**
   * @remarks
   * The number of tokens consumed.
   * 
   * @example
   * 10000
   */
  tokenUsed?: number;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'enableThinking',
      inputModality: 'inputModality',
      modelName: 'modelName',
      tokenRange: 'tokenRange',
      tokenSource: 'tokenSource',
      tokenUsed: 'tokenUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableThinking: 'string',
      inputModality: 'string',
      modelName: 'string',
      tokenRange: 'string',
      tokenSource: 'string',
      tokenUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBodyJobRun extends $dara.Model {
  /**
   * @remarks
   * The code type of the job run. Valid values:
   * 
   * - SQL
   * 
   * - JAR
   * 
   * - PYTHON
   * 
   * @example
   * SQL
   */
  codeType?: string;
  /**
   * @remarks
   * The configuration overrides for the Spark job run.
   */
  configurationOverrides?: GetJobRunResponseBodyJobRunConfigurationOverrides;
  /**
   * @remarks
   * The version displayed in the console.
   * 
   * @example
   * esr-4.0.0 (Spark 3.5.2, Scala 2.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The end time of the job run. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684122914000
   */
  endTime?: number;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cpv569tlhtgndjl8****
   */
  environmentId?: string;
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
   * The timestamp in milliseconds when the resources become ready, indicating the first report time. The first report time takes precedence. If it is empty, the job report time is used as a fallback. If neither has a value, null is returned.
   * 
   * @example
   * 1684119314000
   */
  firstReportTime?: number;
  /**
   * @remarks
   * Specifies whether the Fusion engine acceleration is enabled.
   * 
   * @example
   * false
   */
  fusion?: boolean;
  /**
   * @remarks
   * The information about the Spark driver.
   */
  jobDriver?: JobDriver;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * jr-93d98d2f7061****
   */
  jobRunId?: string;
  /**
   * @remarks
   * The execution log path.
   */
  log?: RunLog;
  /**
   * @remarks
   * The job run name.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The download URL of the notebook file. This parameter is returned only when the job type is NOTEBOOK.
   * 
   * @example
   * http://workflow-ide-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/spark-notebook-output/w-xxxxxxxxx/xxxxxxx
   */
  notebookAccessUrl?: string;
  /**
   * @remarks
   * The priority of the job run.
   * 
   * @example
   * 5
   */
  priority?: string;
  /**
   * @remarks
   * The database engine version of the Spark DPI engine for the node.
   * 
   * @example
   * esr-3.3.1
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The UID of the user who created the job run.
   * 
   * @example
   * 150978934701****
   */
  resourceOwnerId?: string;
  /**
   * @remarks
   * The name of the resource queue for the job run.
   * 
   * @example
   * root_queue
   */
  resourceQueueId?: string;
  /**
   * @remarks
   * The resource startup duration in milliseconds, which is calculated by subtracting the first submission time from the resource ready time. If the first submission time or the resource ready time is missing, or if the calculation result is negative, null is returned instead of 0.
   * 
   * @example
   * 60000
   */
  resourceStartupDurationMs?: number;
  /**
   * @remarks
   * The job run duration in milliseconds, which is calculated by subtracting the resource ready time from the job end time. If the job has not ended, the current time is used. If the resource ready time is missing or the calculation result is negative, null is returned instead of 0.
   * 
   * @example
   * 120000
   */
  runDurationMs?: number;
  /**
   * @remarks
   * The state of the job run.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The reason for the state change.
   */
  stateChangeReason?: GetJobRunResponseBodyJobRunStateChangeReason;
  /**
   * @remarks
   * The submission time of the job run. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684119314000
   */
  submitTime?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The details of the tokens consumed.
   */
  tokenDetails?: GetJobRunResponseBodyJobRunTokenDetails[];
  /**
   * @remarks
   * The total number of tokens consumed.
   * 
   * @example
   * 10000
   */
  totalTokens?: number;
  /**
   * @remarks
   * The Web UI of the job run.
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
      displayReleaseVersion: 'displayReleaseVersion',
      endTime: 'endTime',
      environmentId: 'environmentId',
      executionTimeoutSeconds: 'executionTimeoutSeconds',
      firstReportTime: 'firstReportTime',
      fusion: 'fusion',
      jobDriver: 'jobDriver',
      jobRunId: 'jobRunId',
      log: 'log',
      name: 'name',
      notebookAccessUrl: 'notebookAccessUrl',
      priority: 'priority',
      releaseVersion: 'releaseVersion',
      resourceOwnerId: 'resourceOwnerId',
      resourceQueueId: 'resourceQueueId',
      resourceStartupDurationMs: 'resourceStartupDurationMs',
      runDurationMs: 'runDurationMs',
      state: 'state',
      stateChangeReason: 'stateChangeReason',
      submitTime: 'submitTime',
      tags: 'tags',
      tokenDetails: 'tokenDetails',
      totalTokens: 'totalTokens',
      webUI: 'webUI',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'string',
      configurationOverrides: GetJobRunResponseBodyJobRunConfigurationOverrides,
      displayReleaseVersion: 'string',
      endTime: 'number',
      environmentId: 'string',
      executionTimeoutSeconds: 'number',
      firstReportTime: 'number',
      fusion: 'boolean',
      jobDriver: JobDriver,
      jobRunId: 'string',
      log: RunLog,
      name: 'string',
      notebookAccessUrl: 'string',
      priority: 'string',
      releaseVersion: 'string',
      resourceOwnerId: 'string',
      resourceQueueId: 'string',
      resourceStartupDurationMs: 'number',
      runDurationMs: 'number',
      state: 'string',
      stateChangeReason: GetJobRunResponseBodyJobRunStateChangeReason,
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      tokenDetails: { 'type': 'array', 'itemType': GetJobRunResponseBodyJobRunTokenDetails },
      totalTokens: 'number',
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
    if(Array.isArray(this.tokenDetails)) {
      $dara.Model.validateArray(this.tokenDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job run details.
   */
  jobRun?: GetJobRunResponseBodyJobRun;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRun: 'jobRun',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRun: GetJobRunResponseBodyJobRun,
      requestId: 'string',
    };
  }

  validate() {
    if(this.jobRun && typeof (this.jobRun as any).validate === 'function') {
      (this.jobRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

