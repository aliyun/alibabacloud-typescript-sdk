// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the custom route. You can specify at most 50 descriptions.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the custom route. IPv4 CIDR blocks, IPv6 CIDR blocks, and prefix lists are supported. You can enter up to 50 destination CIDR blocks. Make sure that the following requirements are met:
   * 
   * *   The destination CIDR block cannot point to 100.64.0.0/10 or belong to 100.64.0.0/10.
   * *   The destination CIDR block of each route in the route table is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The IP version. Valid values: You can specify at most 50 IP versions. Valid values:
   * 
   * *   **4**: IPv4
   * *   **6**: IPv6
   * 
   * @example
   * IPv4
   */
  ipVersion?: number;
  /**
   * @remarks
   * The name of the custom route that you want to add. You can specify at most 50 names.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop for the custom route. You can specify at most 50 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * i-j6c2fp57q8rr4jlu****
   */
  nextHop?: string;
  /**
   * @remarks
   * The type of next hop. You can specify at most 50 next hop types. Valid values:
   * 
   * *   **Instance**: Elastic Compute Service (ECS) instance. This is the default value.
   * *   **HaVip**: high-availability virtual IP address (HAVIP).
   * *   **RouterInterface**: router interface.
   * *   **NetworkInterface**: elastic network interface (ENI).
   * *   **VpnGateway**: VPN gateway.
   * *   **IPv6Gateway**: IPv6 gateway.
   * *   **NatGateway**: NAT gateway.
   * *   **Attachment**: transit router.
   * *   **VpcPeer**: VPC peering connection.
   * *   **Ipv4Gateway**: IPv4 gateway.
   * *   **GatewayEndpoint**: gateway endpoint.
   * *   **CenBasic**: CEN does not support transfer routers.
   * *   **Ecr**: Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * RouterInterface
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table to which you want to add custom route s. You can specify at most 50 route table IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzd****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dstCidrBlock: 'DstCidrBlock',
      ipVersion: 'IpVersion',
      name: 'Name',
      nextHop: 'NextHop',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dstCidrBlock: 'string',
      ipVersion: 'number',
      name: 'string',
      nextHop: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

