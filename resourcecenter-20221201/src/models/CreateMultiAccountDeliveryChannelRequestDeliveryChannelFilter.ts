// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiAccountDeliveryChannelRequestDeliveryChannelFilter extends $dara.Model {
  /**
   * @remarks
   * An array of effective account scopes for the delivery channel.
   * 
   * This parameter is required.
   */
  accountScopes?: string[];
  /**
   * @remarks
   * The effective resource types of the delivery channel.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      accountScopes: 'AccountScopes',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopes: { 'type': 'array', 'itemType': 'string' },
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.accountScopes)) {
      $dara.Model.validateArray(this.accountScopes);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

