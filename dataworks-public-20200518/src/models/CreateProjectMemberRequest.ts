// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. We recommend that you set this parameter to a UUID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The code of the role. This parameter is optional. If you configure the RoleCode parameter, the user is assigned the role.
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

