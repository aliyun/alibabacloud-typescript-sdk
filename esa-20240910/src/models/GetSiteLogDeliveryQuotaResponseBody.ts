// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteLogDeliveryQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * 1.  dcdn_log_access_l1 (default): access logs.
   * 2.  dcdn_log_er: Edge Routine logs.
   * 3.  dcdn_log_waf: firewall logs.
   * 4.  dcdn_log_ipa: TCP/UDP proxy logs.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The remaining quota.
   * 
   * @example
   * 3
   */
  freeQuota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C14840EF0EAAB6D97CDE0C5F6554ACE
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 123456****
   */
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

