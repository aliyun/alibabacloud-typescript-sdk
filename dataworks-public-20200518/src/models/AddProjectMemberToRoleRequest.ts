// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProjectMemberToRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. We recommend that you set this parameter to a UUID. This parameter is used to uniquely identify the API operation call.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can call the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The code of the role that you want to assign to a member of the DataWorks workspace. You can call the [ListProjectRoles](https://help.aliyun.com/document_detail/2780079.html) operation to query the codes of all roles in a DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * role_project_guest
   */
  roleCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and move the pointer over the profile picture in the upper-right corner to view the ID.
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

