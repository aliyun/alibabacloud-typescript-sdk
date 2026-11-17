// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCaCertificateHostnamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The ID of the client CA certificate.
   * 
   * @example
   * babaded901474b9693acf530e0fb****
   */
  id?: string;
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The name of the site.
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

