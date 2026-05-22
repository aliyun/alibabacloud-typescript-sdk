// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateQuotaResponseBodySiteUsage extends $dara.Model {
  siteId?: string;
  siteName?: string;
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
  quota?: number;
  quotaUsage?: number;
  requestId?: string;
  siteCount?: number;
  siteUsage?: GetCertificateQuotaResponseBodySiteUsage[];
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

