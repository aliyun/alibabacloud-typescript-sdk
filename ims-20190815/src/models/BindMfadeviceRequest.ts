// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindMFADeviceRequest extends $dara.Model {
  authenticationCode1?: string;
  authenticationCode2?: string;
  serialNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
      serialNumber: 'SerialNumber',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode1: 'string',
      authenticationCode2: 'string',
      serialNumber: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

