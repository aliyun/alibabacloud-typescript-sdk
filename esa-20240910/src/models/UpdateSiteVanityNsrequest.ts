// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSiteVanityNSRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
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

