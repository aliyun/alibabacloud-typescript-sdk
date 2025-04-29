// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4PrefixSet } from "./AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4prefixSet";
import { AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetPrivateIpSet } from "./AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetPrivateIpSet";


export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet extends $dara.Model {
  /**
   * @remarks
   * Details about the assigned IPv4 prefixes.
   */
  ipv4PrefixSet?: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4PrefixSet;
  /**
   * @remarks
   * The ENI ID.
   * 
   * @example
   * eni-bp125p95hhdhn3ot****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP addresses that are assigned to the ENI.
   */
  privateIpSet?: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetPrivateIpSet;
  static names(): { [key: string]: string } {
    return {
      ipv4PrefixSet: 'Ipv4PrefixSet',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpSet: 'PrivateIpSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4PrefixSet: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4PrefixSet,
      networkInterfaceId: 'string',
      privateIpSet: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetPrivateIpSet,
    };
  }

  validate() {
    if(this.ipv4PrefixSet && typeof (this.ipv4PrefixSet as any).validate === 'function') {
      (this.ipv4PrefixSet as any).validate();
    }
    if(this.privateIpSet && typeof (this.privateIpSet as any).validate === 'function') {
      (this.privateIpSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

