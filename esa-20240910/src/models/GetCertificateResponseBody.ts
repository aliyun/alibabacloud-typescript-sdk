// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCertificateResponseBodyResult } from "./GetCertificateResponseBodyResult";


export class GetCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate information.
   */
  result?: GetCertificateResponseBodyResult;
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * Site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * Certificate status.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      requestId: 'string',
      result: GetCertificateResponseBodyResult,
      siteId: 'number',
      siteName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

