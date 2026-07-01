// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Artifact } from "./Artifact";
import { BatchResourceSetting } from "./BatchResourceSetting";
import { BriefDeploymentTarget } from "./BriefDeploymentTarget";
import { JobSummary } from "./JobSummary";
import { LocalVariable } from "./LocalVariable";
import { Logging } from "./Logging";
import { StreamingResourceSetting } from "./StreamingResourceSetting";


export class Deployment extends $dara.Model {
  /**
   * @remarks
   * The data structure required to start the deployed job.
   */
  artifact?: Artifact;
  /**
   * @remarks
   * Resource settings for a batch job.
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
   * Name of the creator.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @remarks
   * Indicates whether the deployed job has been modified after it was started.
   * 
   * @example
   * true
   */
  deploymentHasChanged?: boolean;
  /**
   * @remarks
   * Deployed job ID.
   * 
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  deploymentId?: string;
  /**
   * @remarks
   * Deployment target.
   */
  deploymentTarget?: BriefDeploymentTarget;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * this is a deployment description
   */
  description?: string;
  /**
   * @remarks
   * Engine version.
   * 
   * @example
   * vvr-6.0.0-flink-1.15
   */
  engineVersion?: string;
  /**
   * @remarks
   * Execution mode.
   * 
   * - STREAMING: stream mode.
   * 
   * - BATCH: batch mode.
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * Flink configuration.
   * 
   * @example
   * {"taskmanager.numberOfTaskSlots":"1"}
   */
  flinkConf?: { [key: string]: any };
  /**
   * @remarks
   * A summary of information about the job instances under the deployed job.
   */
  jobSummary?: JobSummary;
  /**
   * @remarks
   * Job labels.
   */
  labels?: { [key: string]: any };
  /**
   * @remarks
   * Job variables.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * Log configuration.
   */
  logging?: Logging;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1714058843
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
   * Name of the modifier.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @remarks
   * Deployed job name.
   * 
   * @example
   * deploymentName
   */
  name?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Associated job draft ID.
   * 
   * @example
   * 00000000-0000-0000-0000-000000000003
   */
  referencedDeploymentDraftId?: string;
  /**
   * @remarks
   * Resource settings for a stream job.
   */
  streamingResourceSetting?: StreamingResourceSetting;
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
      deploymentHasChanged: 'deploymentHasChanged',
      deploymentId: 'deploymentId',
      deploymentTarget: 'deploymentTarget',
      description: 'description',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      flinkConf: 'flinkConf',
      jobSummary: 'jobSummary',
      labels: 'labels',
      localVariables: 'localVariables',
      logging: 'logging',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      referencedDeploymentDraftId: 'referencedDeploymentDraftId',
      streamingResourceSetting: 'streamingResourceSetting',
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
      deploymentHasChanged: 'boolean',
      deploymentId: 'string',
      deploymentTarget: BriefDeploymentTarget,
      description: 'string',
      engineVersion: 'string',
      executionMode: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobSummary: JobSummary,
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      logging: Logging,
      modifiedAt: 'string',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      referencedDeploymentDraftId: 'string',
      streamingResourceSetting: StreamingResourceSetting,
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
    if(this.deploymentTarget && typeof (this.deploymentTarget as any).validate === 'function') {
      (this.deploymentTarget as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.jobSummary && typeof (this.jobSummary as any).validate === 'function') {
      (this.jobSummary as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

