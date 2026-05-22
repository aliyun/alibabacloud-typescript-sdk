// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteLogDeliveryQuotaResponseBody extends $dara.Model {
  businessType?: string;
  freeQuota?: number;
  requestId?: string;
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      freeQuota: 'FreeQuota',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      freeQuota: 'number',
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

