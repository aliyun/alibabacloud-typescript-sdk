// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeDeliveryFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - **dcdn_log_access_l1** (default): Access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_er
   */
  businessType?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      siteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

