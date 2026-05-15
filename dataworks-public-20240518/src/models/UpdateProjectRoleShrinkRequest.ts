// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectRoleShrinkRequest extends $dara.Model {
  /**
   * @example
   * 0000-ABCD-EFG****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * base_role_xx
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modulePermissionsShrink?: string;
  /**
   * @remarks
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

