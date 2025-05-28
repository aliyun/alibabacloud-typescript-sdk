// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserFromWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user to be deleted. Note that this UserID is for Quick BI, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

