// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The member ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The new role. Valid values: owner, admin, and member. If not specified, the current role is retained.
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The new status. Valid values: active, disabled, and deleted. If not specified, the current status is retained.
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      role: 'Role',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      role: 'string',
      status: 'string',
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

