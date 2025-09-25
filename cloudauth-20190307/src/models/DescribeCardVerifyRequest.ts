// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCardVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Authentication request ID.
   * You must first call the initialization interface InitCardVerify to submit an authentication request in order to get the authentication request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 91707dc296d469ad38e4c5efa6a0xxxx
   */
  certifyId?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

