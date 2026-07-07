// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetClientCertificateHostnamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of domain names to associate.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The client CA certificate ID.
   * 
   * @example
   * babab9db65ee5efcca9f3d41d4b50d**
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
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

