// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the auto-renewal feature. Valid values: **True and False**. Default value: False.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoRenew?: string;
  /**
   * @remarks
   * The auto-renewal period of the instance. Unit: months. Valid values: 1 to 9 and 12. This parameter is required if the AutoRenew parameter is set to true.
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * The IDs of the instances. Separate IDs with semicolons (;).
   * 
   * This parameter is required.
   * 
   * @example
   * instance-test
   */
  instanceIds?: string;
  ownerId?: string;
  /**
   * @remarks
   * Specifies whether to renew the instance. The **RenewalStatus** parameter has a higher priority than the **AutoRenew** parameter. If you do not specify **RenewalStatus**, the **AutoRenew** parameter is used by default.
   * 
   * *   AutoRenewal: Auto-renewal is enabled for the instance.
   * *   Normal: Auto-renewal is disabled for the instance.
   * *   NotRenewal: The instance is not renewed.
   * 
   * The system no longer sends an expiration notification but sends only a renewal notification three days before the instance expires. To renew the instance, you can change the value of this parameter from NotRenewal to Normal and then manually renew the instance, or change the value of this parameter from NotRenewal to AutoRenewal.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      duration: 'Duration',
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'string',
      duration: 'string',
      instanceIds: 'string',
      ownerId: 'string',
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

