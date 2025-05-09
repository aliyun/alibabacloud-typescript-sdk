// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAbacAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  policyId?: number;
  /**
   * @example
   * 31****
   */
  roleId?: number;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @example
   * 51****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      policyId: 'PolicyId',
      roleId: 'RoleId',
      tid: 'Tid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      policyId: 'number',
      roleId: 'number',
      tid: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

