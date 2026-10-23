// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseWorkflowTodosRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaborative workspace. The match scope is limited to this workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cg_123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The workflow ID at the run level.
   * 
   * This parameter is required.
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      sourceWorkflowId: 'sourceWorkflowId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      sourceWorkflowId: 'string',
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

