// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsResponseBodyPermissionsPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the permission rule. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the permission rule.
   * *   PRIVATE: Only the creator can access the permission rule.
   * *   ANY: All users can access the permission rule.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The type of access. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the permissions are determined based on the value of EntityAccessType. The value of EntityAccessType can be:
   * 
   * *   CREATOR: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

