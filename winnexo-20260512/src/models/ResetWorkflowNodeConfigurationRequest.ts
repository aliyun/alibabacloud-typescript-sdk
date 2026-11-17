// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetWorkflowNodeConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_9401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The configuration version returned by the read API. This must be a non-negative integer. Refresh the data if a version conflict occurs.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The current physical plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * inst_2081
   */
  instanceId?: string;
  /**
   * @remarks
   * The business node key.
   * 
   * This parameter is required.
   * 
   * @example
   * node_7f3a2c
   */
  nodeId?: string;
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
      expectedVersion: 'expectedVersion',
      instanceId: 'instanceId',
      nodeId: 'nodeId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      expectedVersion: 'number',
      instanceId: 'string',
      nodeId: 'string',
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

