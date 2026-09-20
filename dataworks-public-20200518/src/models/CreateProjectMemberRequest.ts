// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence string. A UUID is recommended.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The role code. This parameter is optional. If this parameter is specified, the user is also added to the specified role.
   * 
   * @example
   * role_project_guest
   */
  roleCode?: string;
  /**
   * @remarks
   * The ID of the user to be added.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      projectId: 'ProjectId',
      roleCode: 'RoleCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectId: 'number',
      roleCode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

