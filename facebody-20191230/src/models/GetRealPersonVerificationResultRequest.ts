// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealPersonVerificationResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cwek23dw24geor89230hf2rw
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

