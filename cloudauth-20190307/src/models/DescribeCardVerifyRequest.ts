// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCardVerifyRequest extends $dara.Model {
  /**
   * @remarks
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

