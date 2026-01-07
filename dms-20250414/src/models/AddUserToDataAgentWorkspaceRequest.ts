// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserToDataAgentWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * 20282*****7591
   */
  memberId?: string;
  /**
   * @example
   * admin
   */
  roleName?: string;
  /**
   * @example
   * 20923*****7291
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      memberId: 'MemberId',
      roleName: 'RoleName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      memberId: 'string',
      roleName: 'string',
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

