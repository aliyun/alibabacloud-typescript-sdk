// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsCertificateListResponseBodyCertificateListModel } from "./DescribeVsCertificateListResponseBodyCertificateListModel";


export class DescribeVsCertificateListResponseBody extends $dara.Model {
  certificateListModel?: DescribeVsCertificateListResponseBodyCertificateListModel;
  /**
   * @example
   * 6E310519-E035-51AB-80D4-C1CBECD39EB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeVsCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificateListModel && typeof (this.certificateListModel as any).validate === 'function') {
      (this.certificateListModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

