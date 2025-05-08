// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOriginCaCertificateResponseBodyResult } from "./GetOriginCaCertificateResponseBodyResult";


export class GetOriginCaCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3558df77-8a7a-4060-a900-2d7949403836
   */
  requestId?: string;
  /**
   * @remarks
   * The certificate information.
   */
  result?: GetOriginCaCertificateResponseBodyResult;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The status of the certificate.
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
      result: GetOriginCaCertificateResponseBodyResult,
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

