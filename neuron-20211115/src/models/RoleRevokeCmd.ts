// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RoleRevokeCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authorizerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * developer
   */
  authorizerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      authorizerId: 'authorizerId',
      authorizerType: 'authorizerType',
      roleId: 'roleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizerId: 'string',
      authorizerType: 'string',
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

