// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert } from "./DescribeCdnSmcertificateListResponseBodyCertificateListModelCertListCert";


export class DescribeCdnSMCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnSMCertificateListResponseBodyCertificateListModelCertListCert },
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

