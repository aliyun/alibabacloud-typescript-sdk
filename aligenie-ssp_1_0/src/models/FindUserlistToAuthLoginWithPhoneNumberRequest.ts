// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindUserlistToAuthLoginWithPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * Text message verification code
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  code?: string;
  /**
   * @remarks
   * Phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 18612345678
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Region encoding
   * 
   * This parameter is required.
   * 
   * @example
   * +86
   */
  region?: string;
  /**
   * @remarks
   * Session ID
   * 
   * This parameter is required.
   * 
   * @example
   * dbe2eb4458302b9246c6da17fbc95f4b
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      phoneNumber: 'PhoneNumber',
      region: 'Region',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      phoneNumber: 'string',
      region: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

