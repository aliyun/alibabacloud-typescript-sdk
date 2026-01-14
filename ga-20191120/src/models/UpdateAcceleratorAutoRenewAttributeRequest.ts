// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAcceleratorAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the GA instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  **AutoRenew** and **RenewalStatus** cannot be left empty at the same time.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: month.
   * 
   * Valid values: **1** to **12**.
   * 
   * >  This parameter takes effect only if you set **AutoRenew** to **true**.
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
   * The name of the GA instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies how to renew the GA instance. Valid values:
   * 
   * *   **AutoRenewal**: The system automatically renews the GA instance.
   * *   **Normal**: You must manually renew the GA instance.
   * *   **NotRenewal**: The GA instance is not renewed after the instance expires. The system sends only a non-renewal reminder three days before the expiration date. The system no longer reminds you to renew the GA instance. To renew a GA instance whose RenewalStatus is set to NotRenewal, change the value of RenewalStatus from NotRenewal to **Normal**, and then manually renew the instance. You can also set RenewalStatus to **AutoRenewal**.
   * 
   * > 
   * 
   * *   **AutoRenew** and **RenewalStatus** cannot be left empty at the same time.
   * 
   * *   **RenewalStatus** takes precedence over **AutoRenew**. By default, if you do not specify **RenewalStatus**, **AutoRenew** is used.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      clientToken: 'ClientToken',
      name: 'Name',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      clientToken: 'string',
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

