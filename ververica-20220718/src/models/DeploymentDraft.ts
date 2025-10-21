// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Artifact } from "./Artifact";
import { LocalVariable } from "./LocalVariable";
import { Lock } from "./Lock";


export class DeploymentDraft extends $dara.Model {
  artifact?: Artifact;
  createdAt?: number;
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
   * 00000000-0000-0000-0000-00000012****
   */
  deploymentDraftId?: string;
  /**
   * @example
   * vvr-6.0.7-flink-1.15
   */
  engineVersion?: string;
  /**
   * @example
   * STREAMING
   */
  executionMode?: string;
  labels?: { [key: string]: any };
  localVariables?: LocalVariable[];
  lock?: Lock;
  modifiedAt?: number;
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
   * test-draft
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-00000013****
   */
  parentId?: string;
  /**
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  referencedDeploymentId?: string;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentDraftId: 'deploymentDraftId',
      engineVersion: 'engineVersion',
      executionMode: 'executionMode',
      labels: 'labels',
      localVariables: 'localVariables',
      lock: 'lock',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      parentId: 'parentId',
      referencedDeploymentId: 'referencedDeploymentId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: Artifact,
      createdAt: 'number',
      creator: 'string',
      creatorName: 'string',
      deploymentDraftId: 'string',
      engineVersion: 'string',
      executionMode: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      localVariables: { 'type': 'array', 'itemType': LocalVariable },
      lock: Lock,
      modifiedAt: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      parentId: 'string',
      referencedDeploymentId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(Array.isArray(this.localVariables)) {
      $dara.Model.validateArray(this.localVariables);
    }
    if(this.lock && typeof (this.lock as any).validate === 'function') {
      (this.lock as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

