// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The edition of WAF.
   * 
   * @example
   * dcdnwaf_afterpay
   */
  edition?: string;
  /**
   * @remarks
   * The status of WAF. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  enabled?: string;
  /**
   * @remarks
   * The time when WAF was enabled.
   * 
   * @example
   * 2021-09-26T16:00:00Z
   */
  openingTime?: string;
  /**
   * @remarks
   * The metering method for requests.
   * 
   * @example
   * dcdn_waf_req
   */
  requestBillingType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A95CA90-E0F2-1BF6-99E0-8C1510CAF649
   */
  requestId?: string;
  /**
   * @remarks
   * The metering method for rules. You are charged for the number of SeCUs.
   * 
   * @example
   * dcdn_waf_rule
   */
  ruleBillingType?: string;
  /**
   * @remarks
   * The status of WAF. Valid values:
   * 
   * *   Normal
   * *   WaitForExpire
   * *   Expired
   * *   Released
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      openingTime: 'OpeningTime',
      requestBillingType: 'RequestBillingType',
      requestId: 'RequestId',
      ruleBillingType: 'RuleBillingType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      enabled: 'string',
      openingTime: 'string',
      requestBillingType: 'string',
      requestId: 'string',
      ruleBillingType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

