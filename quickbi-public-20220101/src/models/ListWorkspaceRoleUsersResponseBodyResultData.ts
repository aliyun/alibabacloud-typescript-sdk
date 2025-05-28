// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceRoleUsersResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Nickname of the organization member.
   * 
   * @example
   * Test user
   */
  nickName?: string;
  /**
   * @remarks
   * UserID of the organization member in Quick BI.
   * 
   * @example
   * b5d8fd9348cc4327****afb604
   */
  userId?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Workspace name.
   * 
   * @example
   * Test space
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      nickName: 'NickName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickName: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

