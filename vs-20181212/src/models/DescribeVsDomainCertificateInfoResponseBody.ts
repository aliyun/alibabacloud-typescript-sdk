// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainCertificateInfoResponseBodyCertInfos } from "./DescribeVsDomainCertificateInfoResponseBodyCertInfos";


export class DescribeVsDomainCertificateInfoResponseBody extends $dara.Model {
  certInfos?: DescribeVsDomainCertificateInfoResponseBodyCertInfos;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
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
      certInfos: DescribeVsDomainCertificateInfoResponseBodyCertInfos,
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

