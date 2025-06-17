// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnCertificateListResponseBodyCertificateListModelCertList } from "./DescribeCdnCertificateListResponseBodyCertificateListModelCertList";


export class DescribeCdnCertificateListResponseBodyCertificateListModel extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certList?: DescribeCdnCertificateListResponseBodyCertificateListModelCertList;
  /**
   * @remarks
   * The number of certificates that are returned.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeCdnCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  validate() {
    if(this.certList && typeof (this.certList as any).validate === 'function') {
      (this.certList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

