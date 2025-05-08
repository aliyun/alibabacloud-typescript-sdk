// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRatePlanInstancesResponseBodyInstanceInfoSites extends $dara.Model {
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
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
  /**
   * @remarks
   * The website status. Valid values:
   * 
   * *   pending: The website is to be configured.
   * *   active: The website is active.
   * *   offline: The website is suspended.
   * *   moved: The website has been added and verified by another Alibaba Cloud account.
   * 
   * @example
   * pending
   */
  siteStatus?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteStatus: 'SiteStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

