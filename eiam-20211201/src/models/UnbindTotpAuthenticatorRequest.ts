// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindTotpAuthenticatorRequest extends $dara.Model {
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
   * user_1asdfghjmnbcxxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

