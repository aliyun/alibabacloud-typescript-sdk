// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertificateInfoByIDRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. You can query only one certificate in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * 1644xx
   */
  certId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

