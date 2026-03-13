// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebAuthnAuthenticatorRegistrationUrlRequest extends $dara.Model {
  /**
   * @example
   * dm_nfplcagj5cguo2267bkjxxxx
   */
  domainId?: string;
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
   * user_e2jvisn35ea5lmthk267xx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
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

