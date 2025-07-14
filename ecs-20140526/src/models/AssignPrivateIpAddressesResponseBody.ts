// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetIpv4PrefixSet extends $dara.Model {
  ipv4Prefixes?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4Prefixes: 'Ipv4Prefixes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Prefixes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Prefixes)) {
      $dara.Model.validateArray(this.ipv4Prefixes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSetPrivateIpSet extends $dara.Model {
  privateIpAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class AssignPrivateIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the ENI and the secondary private IP addresses that are assigned to the ENI.
   */
  assignedPrivateIpAddressesSet?: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedPrivateIpAddressesSet: 'AssignedPrivateIpAddressesSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedPrivateIpAddressesSet: AssignPrivateIpAddressesResponseBodyAssignedPrivateIpAddressesSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.assignedPrivateIpAddressesSet && typeof (this.assignedPrivateIpAddressesSet as any).validate === 'function') {
      (this.assignedPrivateIpAddressesSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

