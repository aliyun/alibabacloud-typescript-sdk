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
   * The parameters that are required for starting a deployment.
   */
  artifact?: Artifact;
  /**
   * @remarks
   * The resource configuration of the batch deployment.
   */
  batchResourceSetting?: BatchResourceSetting;
  /**
   * @remarks
   * The time at which the deployment was created.
   * 
   * @example
   * 1714058507
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the account that is used to create the deployment.
   * 
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @remarks
   * The name of the account that is used to create the deployment.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @remarks
   * Specifies whether the deployment is modified after the deployment is started.
   * 
   * @example
   * true
   */
  deploymentHasChanged?: boolean;
  /**
   * @remarks
   * The ID of the deployment.
   * 
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The cluster on which the deployment is deployed.
   */
  deploymentTarget?: BriefDeploymentTarget;
  /**
   * @remarks
   * The description of the deployment.
   * 
   * @example
   * this is a deployment description
   */
  description?: string;
  /**
   * @remarks
   * The engine version of the deployment.
   * 
   * @example
   * vvr-6.0.0-flink-1.15
   */
  engineVersion?: string;
  /**
   * @remarks
   * The execution mode of the deployment. Valid values:
   * 
   * *   STREAMING
   * *   BATCH
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * The Realtime Compute for Apache Flink configuration.
   * 
   * @example
   * {"taskmanager.numberOfTaskSlots":"1"}
   */
  flinkConf?: { [key: string]: any };
  /**
   * @remarks
   * The summary of jobs in the deployment.
   */
  jobSummary?: JobSummary;
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The variables of the deployment.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * The logging configuration.
   */
  logging?: Logging;
  /**
   * @remarks
   * The time at which the deployment was modified.
   * 
   * @example
   * 1714058843
   */
  modifiedAt?: string;
  /**
   * @remarks
   * The ID of the account that is used to modify the deployment.
   * 
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the account that is used to modify the deployment.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @remarks
   * The name of the deployment.
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
   * @example
   * 00000000-0000-0000-0000-000000000003
   */
  referencedDeploymentDraftId?: string;
  /**
   * @remarks
   * The resource configuration of the streaming deployment.
   */
  streamingResourceSetting?: StreamingResourceSetting;
  /**
   * @remarks
   * The workspace to which the deployment belongs.
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

