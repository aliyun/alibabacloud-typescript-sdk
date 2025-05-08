// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-uf620pb4d19ljnu4a64m
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The assigned private IP addresses.
   */
  privateIpSet?: string[];
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      privateIpSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.privateIpSet)) {
      $dara.Model.validateArray(this.privateIpSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

