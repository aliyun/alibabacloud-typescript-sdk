// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLogDeliveryQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The log type of real-time Mitigation Logs. Valid values:
   * 
   * - **dcdn_log_access_l1 (default)**: access logs.
   * - **dcdn_log_er**: Edge Routine logs.
   * - **dcdn_log_waf**: security protection logs.
   * - **dcdn_log_ipa**: Layer 4 acceleration logs.
   * - **dcdn_log_er_pod**: edge container logs.
   * 
   * This parameter is required.
   * 
   * @example
   * dcdn_log_access_l1
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

