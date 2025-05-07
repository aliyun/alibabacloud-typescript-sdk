// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCertDetailResponseBodyCertDetail } from "./DescribeCertDetailResponseBodyCertDetail";


export class DescribeCertDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the certificate.
   */
  certDetail?: DescribeCertDetailResponseBodyCertDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3C115DBE-8E53-5A12-9CAF-FD3F****CDF6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certDetail: 'CertDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDetail: DescribeCertDetailResponseBodyCertDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certDetail && typeof (this.certDetail as any).validate === 'function') {
      (this.certDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

