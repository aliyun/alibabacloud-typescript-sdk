// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthKeyRequest extends $dara.Model {
  /**
   * @remarks
   * When the Test flag is false or empty, AuthYears is required, in years, with a range of [1,100]. A value of 100 indicates permanent authorization.
   * 
   * @example
   * 1
   */
  authYears?: number;
  /**
   * @remarks
   * Business type. No more than 64 characters. Can be used to note specific business, such as different face usage scenarios of the access party or the customer identifier to be delivered. It is recommended to pass this parameter.
   * 
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @remarks
   * Test flag. If true, it indicates using test authorization with a default duration of 30 days; if false, the authorization duration will be based on AuthYears.
   * 
   * @example
   * false
   */
  test?: boolean;
  /**
   * @remarks
   * User device ID. No more than 64 characters. Can be used to identify a specific device, and it is suggested to use the physical number of the device. It is recommended to pass this parameter.
   * 
   * @example
   * 3iJ1AY$oHcu7mC69
   */
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      authYears: 'AuthYears',
      bizType: 'BizType',
      test: 'Test',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authYears: 'number',
      bizType: 'string',
      test: 'boolean',
      userDeviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

