// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBandwidthPackagaAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  You must specify **AutoRenew** or **RenewalStatus**.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months. Valid values: **1** to **12**.
   * 
   * > This parameter takes effect only if **AutoRenew** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the bandwidth plan.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of the bandwidth plan. Valid values:
   * 
   * *   **AutoRenewal**: The bandwidth plan is automatically renewed.
   * *   **Normal**: You must manually renew the bandwidth plan.
   * *   **NotRenewal**: The bandwidth plan is not renewed after it expires. The system sends only a non-renewal reminder three days before the expiration date. To renew a bandwidth plan for which you set RenewalStatus to NotRenewal, you can change the value of RenewalStatus from NotRenewal to Normal, and then manually renew the bandwidth plan. You can also set RenewalStatus to **AutoRenewal**.
   * > *   You must specify **AutoRenew** or **RenewalStatus**.
   * > *   **RenewalStatus** takes precedence over **AutoRenew**. If you do not specify **RenewalStatus**, **AutoRenew** is used.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      clientToken: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      renewalStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

