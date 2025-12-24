// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebAuthnAuthenticatorRequest extends $dara.Model {
  /**
   * @remarks
   * 认证器ID
   * 
   * This parameter is required.
   * 
   * @example
   * authn_h4x5etphqdasydr67lxxxxx
   */
  authenticatorId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * UserID
   * 
   * This parameter is required.
   * 
   * @example
   * user_53eh54zdr6iazeijyep5wcxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticatorId: 'AuthenticatorId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticatorId: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

