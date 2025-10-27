// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlsInspectCertificateDownloadUrlResponseBody extends $dara.Model {
  caCertId?: string;
  /**
   * @example
   * https://cfw-tls-inspect-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/tls_cert%2F2025-08-13%2F1850****
   */
  downloadUrl?: string;
  /**
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

