// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeDeliveryFieldRequest extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   **dcdn_log_access_l1** (default): access logs.
   * *   **dcdn_log_er**: Edge Routine logs.
   * *   **dcdn_log_waf**: firewall logs.
   * *   **dcdn_log_ipa**: TCP/UDP proxy logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_er
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

