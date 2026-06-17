// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlsInspectCertificateDownloadUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CA certificate.
   * 
   * @example
   * 1f07c104-99ed-6b9a-b0bb-2938c9b8****
   */
  caCertId?: string;
  /**
   * @remarks
   * The download path of the certificate.
   * 
   * @example
   * https://cfw-tls-inspect-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/tls_cert%2F2025-08-13%2F1850****
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-******h4j6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      caCertId: 'CaCertId',
      downloadUrl: 'DownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertId: 'string',
      downloadUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

