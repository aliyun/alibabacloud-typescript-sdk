// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitEmailVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  lang?: string;
  sendIfExist?: boolean;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      lang: 'Lang',
      sendIfExist: 'SendIfExist',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      lang: 'string',
      sendIfExist: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

