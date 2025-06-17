// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainCertificateInfoResponseBodyCertInfos } from "./DescribeDomainCertificateInfoResponseBodyCertInfos";


export class DescribeDomainCertificateInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1E43DC-9E51-4771-82C0-7D5ECEB547A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certInfos && typeof (this.certInfos as any).validate === 'function') {
      (this.certInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

