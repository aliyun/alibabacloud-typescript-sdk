// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set } from "./DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIpv4setsIpv4set";


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets extends $dara.Model {
  IPv4Set?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set[];
  static names(): { [key: string]: string } {
    return {
      IPv4Set: 'IPv4Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Set: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4Set)) {
      $dara.Model.validateArray(this.IPv4Set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

