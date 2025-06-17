// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnCertificateListResponseBodyCertificateListModel } from "./DescribeCdnCertificateListResponseBodyCertificateListModel";


export class DescribeCdnCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about certificates.
   */
  certificateListModel?: DescribeCdnCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FC0E34AC-0239-44A7-AB0E-800DE522C8DA
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
      certificateListModel: DescribeCdnCertificateListResponseBodyCertificateListModel,
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

