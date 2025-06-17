// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert } from "./DescribeCdnSslcertificateListResponseBodyCertificateListModelCertListCert";


export class DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  validate() {
    if(Array.isArray(this.cert)) {
      $dara.Model.validateArray(this.cert);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

