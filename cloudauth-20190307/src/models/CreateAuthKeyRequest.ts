// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAuthKeyRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  authYears?: number;
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * false
   */
  test?: boolean;
  /**
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

