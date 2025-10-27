// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCaptchaRequest extends $dara.Model {
  /**
   * @example
   * dsjidsjidsjkds*djsjdiskds
   */
  captchaVerifyParam?: string;
  static names(): { [key: string]: string } {
    return {
      captchaVerifyParam: 'CaptchaVerifyParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captchaVerifyParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

