// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo } from "./DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo";


export class DescribeCdnHttpsDomainListResponseBodyCertInfos extends $dara.Model {
  certInfo?: DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeCdnHttpsDomainListResponseBodyCertInfosCertInfo },
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

