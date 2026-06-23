// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRoleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 保留字段
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of DataWorks module permissions.
   */
  modulePermissionsShrink?: string;
  /**
   * @remarks
   * The role name.
   * 
   * This parameter is required.
   * 
   * @example
   * category_role
   */
  name?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace on which the API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      modulePermissionsShrink: 'ModulePermissions',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modulePermissionsShrink: 'string',
      name: 'string',
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

