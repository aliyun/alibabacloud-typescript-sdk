// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The physical workflow instance ID (planId).
   * 
   * This parameter is required.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The reason for termination.
   * 
   * This parameter is required.
   * 
   * @example
   * Terminated by user
   */
  reason?: string;
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
      instanceId: 'instanceId',
      reason: 'reason',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      instanceId: 'string',
      reason: 'string',
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

