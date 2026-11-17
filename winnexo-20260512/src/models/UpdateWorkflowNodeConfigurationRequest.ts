// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowNodeConfigurationRequestExecutor extends $dara.Model {
  /**
   * @remarks
   * The executor ID. If the type is USER, the value is a string representing a positive integer platform user ID. If the type is AGENT, the value is the technical name of the digital worker in the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agent_1001
   */
  id?: string;
  /**
   * @remarks
   * The executor type. Valid values: USER (a human user) and AGENT (a digital worker).
   * 
   * This parameter is required.
   * 
   * @example
   * AGENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowNodeConfigurationRequest extends $dara.Model {
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
  executor?: UpdateWorkflowNodeConfigurationRequestExecutor;
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
  responsibleUserIds?: number[];
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
      executor: 'executor',
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      model: 'model',
      nodeId: 'nodeId',
      responsibleUserIds: 'responsibleUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      executor: UpdateWorkflowNodeConfigurationRequestExecutor,
      expectedVersion: 'number',
      instanceId: 'string',
      model: 'string',
      nodeId: 'string',
      responsibleUserIds: { 'type': 'array', 'itemType': 'number' },
      tenantId: 'string',
    };
  }

  validate() {
    if(this.executor && typeof (this.executor as any).validate === 'function') {
      (this.executor as any).validate();
    }
    if(Array.isArray(this.responsibleUserIds)) {
      $dara.Model.validateArray(this.responsibleUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

