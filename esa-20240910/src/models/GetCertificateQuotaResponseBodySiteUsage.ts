// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateQuotaResponseBodySiteUsage extends $dara.Model {
  /**
   * @remarks
   * Site ID.
   * 
   * @example
   * 165929521496928
   */
  siteId?: string;
  /**
   * @remarks
   * Site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * Site usage.
   * 
   * @example
   * 5
   */
  siteUsage?: number;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      siteName: 'SiteName',
      siteUsage: 'SiteUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'string',
      siteName: 'string',
      siteUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

