// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindUserAuthnSourceMappingRequest extends $dara.Model {
  /**
   * @remarks
   * The source IdP ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idp_mwpcwnhrimlr2horxXXXX
   */
  identityProviderId?: string;
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
   * The external mapping ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_fherbdywxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
      userExternalId: 'string',
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

