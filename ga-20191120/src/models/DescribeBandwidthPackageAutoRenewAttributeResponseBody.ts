// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBandwidthPackageAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: month. Valid values: **1** to **12**.
   * 
   * >  This parameter is returned only if the value of **AutoRenew** is **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * gbwp-bp1iquvlp8khla5emb3ia
   */
  instanceId?: string;
  /**
   * @remarks
   * The auto-renewal status of the bandwidth plan.
   * 
   * *   **AutoRenewal**: The bandwidth plan is automatically renewed.
   * *   **Normal**: You must manually renew the bandwidth plan.
   * *   **NotRenewal**: The bandwidth plan is not renewed after it expires. The system sends a non-renewal reminder three days before the expiration date but no longer sends reminders to renew the bandwidth plan. You can change the auto-renewal status of a bandwidth plan from NotRenewal to **Normal** or **AutoRenewal**.
   * 
   * >  **RenewalStatus** takes precedence over **AutoRenew**. If you do not specify **RenewalStatus**, **AutoRenew** is automatically used.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B820E9F9-D459-5AE7-8F08-A368B53C1AC3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      instanceId: 'InstanceId',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      instanceId: 'string',
      renewalStatus: 'string',
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

