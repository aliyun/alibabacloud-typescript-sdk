// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowNodeConfigurationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The executor of the node. If this parameter is omitted, the current value is retained. If this parameter is set to null, the default value is restored. You must modify at least one of the owner, model, or executor.
   * 
   * @example
   * {"type":"AGENT","id":"agent_1001"}
   */
  executorShrink?: string;
  /**
   * @remarks
   * The configuration version returned by the read operation. The value must be a non-negative integer. If a version conflict occurs, you must refresh the version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The ID of the current physical plan.
   * 
   * This parameter is required.
   * 
   * @example
   * inst_2081
   */
  instanceId?: string;
  /**
   * @remarks
   * The model mode. The quick value is normalized to standard. If this parameter is omitted, the current value is retained. If this parameter is set to null, the default value is restored.
   * 
   * @example
   * standard
   */
  model?: string;
  /**
   * @remarks
   * The key of the business node.
   * 
   * This parameter is required.
   * 
   * @example
   * node_7f3a2c
   */
  nodeId?: string;
  /**
   * @remarks
   * The list of user IDs for the node owners. The value must be a non-empty array of positive integers. If this parameter is omitted, the current value is retained. If this parameter is set to null, the default value is restored.
   * 
   * @example
   * [10001]
   */
  responsibleUserIdsShrink?: string;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      executorShrink: 'executor',
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      model: 'model',
      nodeId: 'nodeId',
      responsibleUserIdsShrink: 'responsibleUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      executorShrink: 'string',
      expectedVersion: 'number',
      instanceId: 'string',
      model: 'string',
      nodeId: 'string',
      responsibleUserIdsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

