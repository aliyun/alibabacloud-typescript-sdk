// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAcceleratorAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * 
   * - **false** (default): Auto-renewal is disabled.
   * 
   * > You must specify at least one of **AutoRenew** and **RenewalStatus**.
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
   * > This parameter takes effect only when **AutoRenew** is set to **true**.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the Global Accelerator instance.
   * 
   * The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of the Global Accelerator instance. Valid values:
   * 
   * - **AutoRenewal**: The instance is configured for auto-renewal.
   * 
   * - **Normal**: The instance is configured for manual renewal.
   * 
   * - NotRenewal: The instance is not renewed. The system does not send expiration reminders, but sends a non-renewal reminder three days before the expiration date. You can change the renewal status from **NotRenewal** to **Normal** to manually renew the instance, or change the renewal status to **AutoRenewal**.
   * 
   * > * You must specify at least one of **AutoRenew** and **RenewalStatus**.
   * >
   * > * The **RenewalStatus** parameter takes precedence over the **AutoRenew** parameter. If you do not specify **RenewalStatus**, the value of **AutoRenew** is used.
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

