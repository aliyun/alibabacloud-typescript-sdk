// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets } from "./DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIpv4sets";


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface extends $dara.Model {
  IPv4Sets?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets;
  /**
   * @example
   * eni-gw8g131ef2dnbu3k****
   */
  networkInterfaceId?: string;
  /**
   * @example
   * ep-8psre8c8936596cd****
   */
  resourceId?: string;
  /**
   * @example
   * 138859086900****
   */
  resourceOwnerId?: string;
  /**
   * @example
   * PrivateLink
   */
  resourceType?: string;
  tunnelIndex?: string;
  static names(): { [key: string]: string } {
    return {
      IPv4Sets: 'IPv4Sets',
      networkInterfaceId: 'NetworkInterfaceId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tunnelIndex: 'TunnelIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Sets: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets,
      networkInterfaceId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'string',
      resourceType: 'string',
      tunnelIndex: 'string',
    };
  }

  validate() {
    if(this.IPv4Sets && typeof (this.IPv4Sets as any).validate === 'function') {
      (this.IPv4Sets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

