// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationRoleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Organization role ID, including predefined roles and custom roles:
   * 
   * - Organization Administrator (predefined role): 111111111
   * - Permission Administrator (predefined role): 111111112
   * - Regular User (predefined role): 111111113
   * - Custom Role: The corresponding role ID of the custom role
   * 
   * This parameter is required.
   * 
   * @example
   * 111111111
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

