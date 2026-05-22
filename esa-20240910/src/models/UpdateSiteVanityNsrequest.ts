// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteVanityNSRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The custom nameserver names. You can specify two to five custom nameserver names. Separate multiple names with commas (,).
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

