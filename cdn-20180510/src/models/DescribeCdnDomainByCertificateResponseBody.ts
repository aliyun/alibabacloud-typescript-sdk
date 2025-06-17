// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainByCertificateResponseBodyCertInfos } from "./DescribeCdnDomainByCertificateResponseBodyCertInfos";


export class DescribeCdnDomainByCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the certificate.
   */
  certInfos?: DescribeCdnDomainByCertificateResponseBodyCertInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D
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
      certInfos: DescribeCdnDomainByCertificateResponseBodyCertInfos,
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

