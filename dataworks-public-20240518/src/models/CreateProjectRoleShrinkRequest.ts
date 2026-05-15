// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRoleShrinkRequest extends $dara.Model {
  clientToken?: string;
  modulePermissionsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * category_role
   */
  name?: string;
  /**
   * @remarks
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

