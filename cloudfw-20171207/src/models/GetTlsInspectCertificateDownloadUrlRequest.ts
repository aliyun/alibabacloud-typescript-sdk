// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlsInspectCertificateDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * C3E91391-16CD-1BFC-A133-******D429
   */
  caCertId?: string;
  static names(): { [key: string]: string } {
    return {
      caCertId: 'CaCertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

