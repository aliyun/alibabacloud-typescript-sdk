// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization duration. This parameter is required when the Test parameter is set to false or is left empty. Unit: years. Valid values: 1 to 100. A value of 100 indicates permanent authorization.
   * 
   * @example
   * 1
   */
  authYears?: number;
  /**
   * @remarks
   * The business type. The value can be up to 64 characters in length. You can use this parameter to add remarks for a specific business, such as different facial recognition scenarios of the requester or the customer identifier to be delivered. We recommend that you specify this parameter.
   * 
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @remarks
   * The test identifier. Valid values:
   * - true: Uses test authorization. The authorization duration is 30 days by default.
   * - false: The authorization duration is determined by the AuthYears parameter.
   * 
   * @example
   * false
   */
  test?: boolean;
  /**
   * @remarks
   * The user device ID. The value can be up to 64 characters in length. You can use this parameter to identify a specific device. We recommend that you use the physical device number. We recommend that you specify this parameter.
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

