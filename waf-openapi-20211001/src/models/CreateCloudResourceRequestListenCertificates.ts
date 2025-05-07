// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateCloudResourceRequestListenCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **default**: default certificate.
   * *   **extension**: additional certificate.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The ID of the certificate that you want to add.
   * 
   * >  You can call the [DescribeCertificates](https://help.aliyun.com/document_detail/160783.html) operation to query the IDs of all SSL certificates that are associated with a domain name.
   * 
   * @example
   * 123-cn-hangzhou
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

