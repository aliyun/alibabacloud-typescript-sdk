// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCertificateHostnamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names with which the certificate is associated.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The ID of the client CA certificate.
   * 
   * @example
   * baba39055622c008b90285a8838ed09a
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 1234567890123
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
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      id: 'Id',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

