// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnSMCertificateListResponseBodyCertificateListModel } from "./DescribeCdnSmcertificateListResponseBodyCertificateListModel";


export class DescribeCdnSMCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate information.
   */
  certificateListModel?: DescribeCdnSMCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC0E34AC-0239-44A7-AB0E-800DE522C8DC
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
      certificateListModel: DescribeCdnSMCertificateListResponseBodyCertificateListModel,
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

