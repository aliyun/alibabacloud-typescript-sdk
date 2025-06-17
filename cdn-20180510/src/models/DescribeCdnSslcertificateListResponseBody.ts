// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnSSLCertificateListResponseBodyCertificateListModel } from "./DescribeCdnSslcertificateListResponseBodyCertificateListModel";


export class DescribeCdnSSLCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certificateListModel?: DescribeCdnSSLCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
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
      certificateListModel: DescribeCdnSSLCertificateListResponseBodyCertificateListModel,
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

