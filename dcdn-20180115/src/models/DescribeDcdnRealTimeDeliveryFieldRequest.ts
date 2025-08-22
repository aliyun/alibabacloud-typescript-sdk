// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnRealTimeDeliveryFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collected logs. Default value: cdn_log_access_l1. Valid values:
   * 
   * *   **cdn_log_access_l1**: access logs of Dynamic Content Delivery Network (DCDN) points of presence (POPs)
   * *   **cdn_log_origin**: back-to-origin logs
   * *   **cdn_log_er**: EdgeRoutine logs
   * 
   * @example
   * cdn_log_access_l1
   */
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

