// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAcceleratorAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal duration. Unit: month.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @remarks
   * Indicates how the GA instance is renewed. Valid values:
   * 
   * *   **AutoRenewal**: The GA instance is automatically renewed.
   * *   **Normal**: You must manually renew the GA instance.
   * *   **NotRenewal**: The GA instance is not renewed after it expires. The system sends only a non-renewal reminder three days before the expiration date. The system no longer sends notifications to remind you to renew the GA instance.
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
   * F591955F-5CB5-4CCE-A75D-17CF2085CE22
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      renewalStatus: 'RenewalStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
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

