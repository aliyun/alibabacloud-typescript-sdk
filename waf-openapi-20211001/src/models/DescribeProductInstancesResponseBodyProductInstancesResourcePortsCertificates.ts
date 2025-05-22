// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductInstancesResponseBodyProductInstancesResourcePortsCertificates extends $dara.Model {
  appliedType?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 10106183
   */
  certificateId?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * trafficxxxx.cn
   */
  certificateName?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
      certificateName: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

