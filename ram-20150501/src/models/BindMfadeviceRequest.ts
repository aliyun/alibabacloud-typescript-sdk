// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindMFADeviceRequest extends $dara.Model {
  /**
   * @remarks
   * The first authentication code.
   * 
   * @example
   * 11****
   */
  authenticationCode1?: string;
  /**
   * @remarks
   * The second authentication code.
   * 
   * @example
   * 33****
   */
  authenticationCode2?: string;
  /**
   * @remarks
   * The serial number of the MFA device.
   * 
   * @example
   * acs:ram::123456789012****:mfa/device002
   */
  serialNumber?: string;
  /**
   * @remarks
   * The name of the RAM user.
   * 
   * @example
   * zhangq****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationCode1: 'AuthenticationCode1',
      authenticationCode2: 'AuthenticationCode2',
      serialNumber: 'SerialNumber',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationCode1: 'string',
      authenticationCode2: 'string',
      serialNumber: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

