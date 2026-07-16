// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteTrafficSequenceRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   * 
   * **if can be null:**
   * false
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site. After version management is enabled for the site, you can specify a site version number to obtain the traffic sequence information of the corresponding version. The default version is 0. If version management is not enabled for the site, you do not need to specify this parameter.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

