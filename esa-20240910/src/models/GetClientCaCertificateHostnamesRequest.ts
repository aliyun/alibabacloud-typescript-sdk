// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCaCertificateHostnamesRequest extends $dara.Model {
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
   * The site ID. You can call the [ListSites](~~ListSites~~) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

