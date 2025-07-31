// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserGroupRequest extends $dara.Model {
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
   * 1313213
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

