// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceDocMembersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  membersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  nodeId?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      membersShrink: 'Members',
      nodeId: 'NodeId',
      tenantContextShrink: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      membersShrink: 'string',
      nodeId: 'string',
      tenantContextShrink: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

