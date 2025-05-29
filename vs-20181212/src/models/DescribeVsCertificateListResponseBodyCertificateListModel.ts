// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsCertificateListResponseBodyCertificateListModelCertList } from "./DescribeVsCertificateListResponseBodyCertificateListModelCertList";


export class DescribeVsCertificateListResponseBodyCertificateListModel extends $dara.Model {
  certList?: DescribeVsCertificateListResponseBodyCertificateListModelCertList[];
  /**
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
      certList: { 'type': 'array', 'itemType': DescribeVsCertificateListResponseBodyCertificateListModelCertList },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.certList)) {
      $dara.Model.validateArray(this.certList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

