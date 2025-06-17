// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo } from "./DescribeCertificateInfoByIdresponseBodyCertInfosCertInfo";


export class DescribeCertificateInfoByIDResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCertificateInfoByIDResponseBodyCertInfosCertInfo },
    };
  }

  validate() {
    if(Array.isArray(this.certInfo)) {
      $dara.Model.validateArray(this.certInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

