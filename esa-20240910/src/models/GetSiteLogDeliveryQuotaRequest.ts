// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteLogDeliveryQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * 1.  dcdn_log_access_l1 (default): access logs.
   * 2.  dcdn_log_er: Edge Routine logs.
   * 3.  dcdn_log_waf: firewall logs.
   * 4.  dcdn_log_ipa: TCP/UDP proxy logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
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

