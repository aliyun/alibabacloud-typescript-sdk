// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage extends $dara.Model {
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 34818329392****
   */
  siteId?: number;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * test.top
   */
  siteName?: string;
  /**
   * @remarks
   * The quota usage of the website.
   * 
   * @example
   * 1
   */
  siteUsage?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      siteName: 'string',
      siteUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

