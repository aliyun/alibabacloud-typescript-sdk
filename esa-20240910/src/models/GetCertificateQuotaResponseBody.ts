// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateQuotaResponseBodySiteUsage extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 165929521496928
   */
  siteId?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  /**
   * @remarks
   * The number of certificates used by the site.
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

export class GetCertificateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The free certificate quota.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * The number of used free certificates.
   * 
   * @example
   * 5
   */
  quotaUsage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The site count.
   * 
   * @example
   * 2
   */
  siteCount?: number;
  /**
   * @remarks
   * Details about the certificate usage for each site.
   */
  siteUsage?: GetCertificateQuotaResponseBodySiteUsage[];
  /**
   * @remarks
   * The certificate quota type.
   * 
   * @example
   * free
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      quotaUsage: 'QuotaUsage',
      requestId: 'RequestId',
      siteCount: 'SiteCount',
      siteUsage: 'SiteUsage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      quotaUsage: 'number',
      requestId: 'string',
      siteCount: 'number',
      siteUsage: { 'type': 'array', 'itemType': GetCertificateQuotaResponseBodySiteUsage },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.siteUsage)) {
      $dara.Model.validateArray(this.siteUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

