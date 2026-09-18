// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadUserCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 12345
   */
  certId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDB81BA2-E1F5-4D08-A2DD-4BE2BF44C90E
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the certificate to operate on.
   * 
   * @example
   * cas-upload-xki1d0
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

