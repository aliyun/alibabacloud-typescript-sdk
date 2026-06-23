// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRoleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the custom role.
   * 
   * This parameter is required.
   * 
   * @example
   * base_role_xx
   */
  code?: string;
  /**
   * @remarks
   * The list of DataWorks module permissions.
   * 
   * This parameter is required.
   */
  modulePermissionsShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace on which the API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      code: 'Code',
      modulePermissionsShrink: 'ModulePermissions',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      code: 'string',
      modulePermissionsShrink: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

