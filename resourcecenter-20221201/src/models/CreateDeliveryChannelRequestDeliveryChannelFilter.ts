// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDeliveryChannelRequestDeliveryChannelFilter extends $dara.Model {
  /**
   * @remarks
   * An array of effective resource types for the delivery channel.
   * 
   * *   Example: ["ACS::VPC::VPC", "ACS::ECS::Instance"].
   * *   If you want to deliver items of all resource types supported by Resource Center, set this parameter to ["ALL"].
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

