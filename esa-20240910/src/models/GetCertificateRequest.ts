// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * babaded901474b9693acf530e0fb1d95
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

