// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassignPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-f8z57orgmt6d144t****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP addresses to unassign.
   * 
   * This parameter is required.
   */
  privateIpAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

