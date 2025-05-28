// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserRoleInfoInWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Quick BI user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f5698bedeb384b1986afccd9e434****
   */
  userId?: string;
  /**
   * @remarks
   * Workspace ID.
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

