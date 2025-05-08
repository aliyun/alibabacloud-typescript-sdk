// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserLogDeliveryQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log category. Valid values:
   * 
   * *   dcdn_log_access_l1 (default): access logs.
   * *   dcdn_log_er: Edge Routine logs.
   * *   dcdn_log_waf: firewall logs.
   * *   dcdn_log_ipa: TCP/UDP proxy logs.
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
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      freeQuota: 'FreeQuota',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      freeQuota: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

