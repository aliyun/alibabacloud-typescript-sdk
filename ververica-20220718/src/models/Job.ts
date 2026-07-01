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
   * Job instance content template.
   */
  artifact?: Artifact;
  /**
   * @remarks
   * Batch mode resource settings.
   */
  batchResourceSetting?: BatchResourceSetting;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1714058507
   */
  createdAt?: string;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @remarks
   * Creator name.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @remarks
   * Deployment ID.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  deploymentId?: string;
  /**
   * @remarks
   * Deployment name.
   * 
   * @example
   * flinktest
   */
  deploymentName?: string;
  /**
   * @remarks
   * Job instance end time.
   * 
   * @example
   * 1660277235
   */
  endTime?: number;
  /**
   * @remarks
   * Job engine version.
   * 
   * @example
   * vvr-4.0.14-flink-1.13
   */
  engineVersion?: string;
  /**
   * @remarks
   * Job instance execution mode.
   * 
   * - STREAM: Stream mode.
   * 
   * - BATCH: Batch mode.
   * 
   * @example
   * BATCH
   */
  executionMode?: string;
  /**
   * @remarks
   * Full parameter settings for the job instance.
   * 
   * @example
   * {execution.checkpointing.unaligned: false}
   */
  flinkConf?: { [key: string]: any };
  /**
   * @remarks
   * Job instance ID.
   * 
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  jobId?: string;
  /**
   * @remarks
   * Job variables.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * Job instance log configuration.
   */
  logging?: Logging;
  /**
   * @remarks
   * Job instance resource information.
   */
  metric?: JobMetric;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1714058800
   */
  modifiedAt?: string;
  /**
   * @remarks
   * Modifier.
   * 
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @remarks
   * Modifier name.
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
   * Job instance startup policy.
   */
  restoreStrategy?: DeploymentRestoreStrategy;
  /**
   * @remarks
   * If the job instance runs on a Session cluster, this shows the Session cluster name; otherwise, it is null.
   * 
   * @example
   * null
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * Job instance start time.
   * 
   * @example
   * 1660190835
   */
  startTime?: number;
  /**
   * @remarks
   * Job instance status.
   */
  status?: JobStatus;
  /**
   * @remarks
   * Stream mode resource settings.
   */
  streamingResourceSetting?: StreamingResourceSetting;
  /**
   * @remarks
   * User job parameter settings.
   */
  userFlinkConf?: { [key: string]: any };
  /**
   * @remarks
   * Workspace.
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

