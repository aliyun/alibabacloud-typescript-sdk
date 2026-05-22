// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage extends $dara.Model {
  siteId?: number;
  siteName?: string;
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

export class ListInstanceQuotasWithUsageResponseBodyQuotas extends $dara.Model {
  quotaName?: string;
  quotaValue?: string;
  siteUsage?: ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage[];
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValue: 'QuotaValue',
      siteUsage: 'SiteUsage',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValue: 'string',
      siteUsage: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotasSiteUsage },
      usage: 'string',
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

export class ListInstanceQuotasWithUsageResponseBody extends $dara.Model {
  instanceId?: string;
  quotas?: ListInstanceQuotasWithUsageResponseBodyQuotas[];
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotas: 'Quotas',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotas: { 'type': 'array', 'itemType': ListInstanceQuotasWithUsageResponseBodyQuotas },
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

