// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Artifact } from "./Artifact";
import { LocalVariable } from "./LocalVariable";
import { Lock } from "./Lock";


export class DeploymentDraft extends $dara.Model {
  /**
   * @remarks
   * The script of the SQL deployment.
   */
  artifact?: Artifact;
  /**
   * @remarks
   * The time when the draft was created.
   * 
   * @example
   * 1723537978
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the account that is used to create the draft.
   * 
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @remarks
   * The name of the account that is used to create the draft.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @remarks
   * The draft ID.
   * 
   * @example
   * 00000000-0000-0000-0000-00000012****
   */
  deploymentDraftId?: string;
  /**
   * @remarks
   * The engine version of the deployment.
   * 
   * @example
   * vvr-6.0.7-flink-1.15
   */
  engineVersion?: string;
  /**
   * @remarks
   * The execution mode.
   * 
   * @example
   * STREAMING
   */
  executionMode?: string;
  /**
   * @remarks
   * The labels of the deployment.
   */
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The variables.
   */
  localVariables?: LocalVariable[];
  /**
   * @remarks
   * The lock of the draft.
   */
  lock?: Lock;
  /**
   * @remarks
   * The time when the draft was modified.
   * 
   * @example
   * 1723537978
   */
  modifiedAt?: number;
  /**
   * @remarks
   * The ID of the account that is used to modify the draft.
   * 
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the account that is used to modify the draft.
   * 
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @remarks
   * The name of the draft.
   * 
   * @example
   * test-draft
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
   * The ID of the parent folder.
   * 
   * @example
   * 00000000-0000-0000-0000-00000013****
   */
  parentId?: string;
  /**
   * @remarks
   * The ID of the associated deployment.
   * 
   * @example
   * 00000000-0000-0000-0000-0000012312****
   */
  referencedDeploymentId?: string;
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

