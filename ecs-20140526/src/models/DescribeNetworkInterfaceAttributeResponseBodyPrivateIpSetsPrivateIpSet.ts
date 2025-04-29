// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp } from "./DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp";


export class DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSet extends $dara.Model {
  /**
   * @remarks
   * The EIP that is associated with the secondary private IP address of the ENI.
   */
  associatedPublicIp?: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp;
  /**
   * @remarks
   * Indicates whether the IP address is the primary private IP address. Valid values:
   * 
   * *   true: The IP address is the primary private IP address.
   * *   false: The IP address is a secondary private IP address.
   * 
   * @example
   * true
   */
  primary?: boolean;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      associatedPublicIp: 'AssociatedPublicIp',
      primary: 'Primary',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedPublicIp: DescribeNetworkInterfaceAttributeResponseBodyPrivateIpSetsPrivateIpSetAssociatedPublicIp,
      primary: 'boolean',
      privateIpAddress: 'string',
    };
  }

  validate() {
    if(this.associatedPublicIp && typeof (this.associatedPublicIp as any).validate === 'function') {
      (this.associatedPublicIp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

