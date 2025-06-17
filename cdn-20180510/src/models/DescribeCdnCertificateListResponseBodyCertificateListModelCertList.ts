// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert } from "./DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert";


export class DescribeCdnCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnCertificateListResponseBodyCertificateListModelCertListCert },
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

