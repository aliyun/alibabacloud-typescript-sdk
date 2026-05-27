// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassignWuyingServerPrivateAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["10.0.0.2","10.0.0.3"]
   */
  privateIpAddresses?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-bp1234567890abcde
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      privateIpAddresses: 'PrivateIpAddresses',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      wuyingServerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privateIpAddresses)) {
      $dara.Model.validateArray(this.privateIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

