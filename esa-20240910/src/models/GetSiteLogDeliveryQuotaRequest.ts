// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteLogDeliveryQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The type of real-time logs. Valid values:
   * - **dcdn_log_access_l1 (default)**: access logs.
   * - **dcdn_log_er**: edge function logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
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

