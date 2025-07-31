// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31323
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      opTenantId: 'OpTenantId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      opTenantId: 'number',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

