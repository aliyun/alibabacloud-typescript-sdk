// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionResponseBodyPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The access type. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the value of this parameter can be:
   * 
   * *   PRIVATE: Only the creator can access the workspace.
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

