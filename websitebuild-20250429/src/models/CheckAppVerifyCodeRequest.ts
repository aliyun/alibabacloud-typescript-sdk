// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAppVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The phone number or email address.
   * 
   * @example
   * docker.io
   */
  target?: string;
  /**
   * @remarks
   * The recipient type: phone or email.
   * 
   * @example
   * question
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      code: 'Code',
      target: 'Target',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      code: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

