// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateWebAuthnAuthenticatorRegistrationUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * dm_nfplcagj5cguo2267bkjxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The user ID.
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

