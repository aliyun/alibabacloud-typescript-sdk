// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoleRequest extends $dara.Model {
  /**
   * @example
   * role_description
   */
  description?: string;
  /**
   * @example
   * role_display_name
   */
  displayName?: string;
  /**
   * @example
   * role_name
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

