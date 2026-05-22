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

export class GetCertificateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Free certificate quota.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * Usage of free certificate quota.
   * 
   * @example
   * 5
   */
  quotaUsage?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * Number of sites.
   * 
   * @example
   * 2
   */
  siteCount?: number;
  /**
   * @remarks
   * List of site usage details.
   */
  siteUsage?: GetCertificateQuotaResponseBodySiteUsage[];
  /**
   * @remarks
   * Certificate Quota type.
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

