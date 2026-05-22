// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCaCertificateHostnamesResponseBody extends $dara.Model {
  hostnames?: string[];
  /**
   * @example
   * babaded901474b9693acf530e0fb****
   */
  id?: string;
  /**
   * @example
   * 3558df77-8a7a-4060-a900-2d7949403836
   */
  requestId?: string;
  /**
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
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

