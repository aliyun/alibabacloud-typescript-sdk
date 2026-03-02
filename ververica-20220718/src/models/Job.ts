// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Artifact } from "./Artifact";
import { BatchResourceSetting } from "./BatchResourceSetting";
import { LocalVariable } from "./LocalVariable";
import { Logging } from "./Logging";
import { JobMetric } from "./JobMetric";
import { DeploymentRestoreStrategy } from "./DeploymentRestoreStrategy";
import { JobStatus } from "./JobStatus";
import { StreamingResourceSetting } from "./StreamingResourceSetting";


export class Job extends $dara.Model {
  /**
   * @remarks
   * The content template of the job.
   */
  artifact?: Artifact;
  /**
   * @remarks
   * The resource configuration of the job in batch mode.
   */
  batchResourceSetting?: BatchResourceSetting;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 1714058507
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the account that is used to create the job.
   * 
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @remarks
   * The name of the account that is used to create the job.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @remarks
   * The deployment ID.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The name of the deployment.
   * 
   * @example
   * flinktest
   */
  deploymentName?: string;
  /**
   * @remarks
   * The end time of the job.
   * 
   * @example
   * 1660277235
   */
  endTime?: number;
  /**
   * @remarks
   * The engine version of the deployment.
   * 
   * @example
   * vvr-4.0.14-flink-1.13
   */
  engineVersion?: string;
  /**
   * @remarks
   * The execution mode of the job. Valid values:
   * 
   * *   STREAM
   * *   BATCH
   * 
   * @example
   * BATCH
   */
  executionMode?: string;
  /**
   * @remarks
   * The configuration of the job.
   * 
   * @example
   * {execution.checkpointing.unaligned: false}
   */
  flinkConf?: { [key: string]: any };
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  jobId?: string;
  /**
   * @remarks
   * The variables.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * The logging configuration of the job.
   */
  logging?: Logging;
  /**
   * @remarks
   * The resource information of the job.
   */
  metric?: JobMetric;
  /**
   * @remarks
   * The time when the job was modified.
   * 
   * @example
   * 1714058800
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The ID of the account that is used to modify the job.
   * 
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the account that is used to modify the job.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * namespacetest
   */
  namespace?: string;
  /**
   * @remarks
   * The startup strategy of the job.
   */
  restoreStrategy?: DeploymentRestoreStrategy;
  /**
   * @remarks
   * If the job runs in a session cluster, the value of this parameter is the name of the session cluster. Otherwise, the value of this parameter is null.
   * 
   * @example
   * preview
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * The start time of the job.
   * 
   * @example
   * 1660190835
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the job.
   */
  status?: JobStatus;
  /**
   * @remarks
   * The resource configuration of the job in streaming mode.
   */
  streamingResourceSetting?: StreamingResourceSetting;
  /**
   * @remarks
   * The Flink configuration.
   */
  userFlinkConf?: { [key: string]: any };
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      batchResourceSetting: 'batchResourceSetting',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentId: 'deploymentId',
      deploymentName: 'deploymentName',
      endTime: 'endTime',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      flinkConf: 'flinkConf',
      jobId: 'jobId',
      localVariables: 'localVariables',
      logging: 'logging',
      metric: 'metric',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      namespace: 'namespace',
      restoreStrategy: 'restoreStrategy',
      sessionClusterName: 'sessionClusterName',
      startTime: 'startTime',
      status: 'status',
      streamingResourceSetting: 'streamingResourceSetting',
      userFlinkConf: 'userFlinkConf',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: Artifact,
      batchResourceSetting: BatchResourceSetting,
      createdAt: 'string',
      creator: 'string',
      creatorName: 'string',
      deploymentId: 'string',
      deploymentName: 'string',
      endTime: 'number',
      engineVersion: 'string',
      executionMode: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobId: 'string',
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      logging: Logging,
      metric: JobMetric,
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      namespace: 'string',
      restoreStrategy: DeploymentRestoreStrategy,
      sessionClusterName: 'string',
      startTime: 'number',
      status: JobStatus,
      streamingResourceSetting: StreamingResourceSetting,
      userFlinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspace: 'string',
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.batchResourceSetting && typeof (this.batchResourceSetting as any).validate === 'function') {
      (this.batchResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.metric && typeof (this.metric as any).validate === 'function') {
      (this.metric as any).validate();
    }
    if(this.restoreStrategy && typeof (this.restoreStrategy as any).validate === 'function') {
      (this.restoreStrategy as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    if(this.userFlinkConf) {
      $dara.Model.validateMap(this.userFlinkConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

