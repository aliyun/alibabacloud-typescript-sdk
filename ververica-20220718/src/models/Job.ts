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
  artifact?: Artifact;
  batchResourceSetting?: BatchResourceSetting;
  createdAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  deploymentId?: string;
  /**
   * @example
   * flinktest
   */
  deploymentName?: string;
  /**
   * @example
   * 1660277235
   */
  endTime?: number;
  /**
   * @example
   * vvr-4.0.14-flink-1.13
   */
  engineVersion?: string;
  /**
   * @example
   * BATCH
   */
  executionMode?: string;
  flinkConf?: { [key: string]: any };
  /**
   * @example
   * 354dde66-a3ae-463e-967a-0b4107fd****
   */
  jobId?: string;
  localVariables?: LocalVariable[];
  logging?: Logging;
  metric?: JobMetric;
  modifiedAt?: string;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * namespacetest
   */
  namespace?: string;
  restoreStrategy?: DeploymentRestoreStrategy;
  /**
   * @example
   * preview
   */
  sessionClusterName?: string;
  /**
   * @example
   * 1660190835
   */
  startTime?: number;
  status?: JobStatus;
  streamingResourceSetting?: StreamingResourceSetting;
  userFlinkConf?: { [key: string]: any };
  /**
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

