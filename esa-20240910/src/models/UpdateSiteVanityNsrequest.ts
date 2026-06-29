// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteVanityNSRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to query the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The list of custom NS names. You can specify 2 to 5 custom NS names, separated by commas (,).
   * 
   * @example
   * ns1.example.com,ns2.example.com
   */
  vanityNSList?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      vanityNSList: 'VanityNSList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      vanityNSList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

