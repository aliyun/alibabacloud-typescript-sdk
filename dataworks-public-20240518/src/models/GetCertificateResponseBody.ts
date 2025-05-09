// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCertificateResponseBodyCertificate } from "./GetCertificateResponseBodyCertificate";


export class GetCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the certificate file.
   */
  certificate?: GetCertificateResponseBodyCertificate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: GetCertificateResponseBodyCertificate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificate && typeof (this.certificate as any).validate === 'function') {
      (this.certificate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

