// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPolicyBasedRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The address family. Valid values:
   * 
   * - IPv4
   * - IPv6
   * 
   * @example
   * IPv4
   */
  addressFamily?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the policy-based route.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination port. Valid values: **-1** or **1** to **65535**.
   * 
   * This parameter matches traffic whose port numbers fall within the destination port range. If you do not specify this parameter, traffic to any destination port is matched.
   * 
   * The port range is specified in the following formats:
   * 
   * - 80: port 80.
   * - 80/80: port 80.
   * - 1/200: ports 1 to 200.
   * - -1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  destPortRange?: string;
  /**
   * @remarks
   * The destination CIDR block of the route entry. Both IPv4 and IPv6 addresses are supported.
   * 
   * @example
   * 172.19.2.0/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: prechecks the request without creating the routing rule entry in the policy route table. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. After the request passes the precheck, the routing rule entry is created in the policy route table.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packet to be matched. Valid values: **0** to **63**.
   * 
   * The DSCP range is specified in the following formats:
   * 
   * - 1: traffic with a DSCP value of 1.
   * - 1/10: traffic with a DSCP value from 1 to 10.
   * - -1/-1: traffic with any DSCP value.
   * 
   * @example
   * 10
   */
  dscp?: string;
  /**
   * @remarks
   * The name of the policy-based route.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the policy routing table.
   * 
   * This parameter is required.
   * 
   * @example
   * ptbl-abc123xyz
   */
  policyTableId?: string;
  /**
   * @remarks
   * The priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * The priority of each policy-based route in a policy route table of a transit router must be unique. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the traffic packet.
   * 
   * Traffic classification rules support matching traffic of various protocol types, such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
   * 
   * @example
   * ICMP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block. The source CIDR block must be in CIDR format. Example: 192.168.1.0/24.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port. Valid values: **-1** or **1** to **65535**.
   * 
   * This parameter matches traffic whose port numbers fall within the source port range. If you do not specify this parameter, traffic from any source port is matched.
   * 
   * The port range is specified in the following formats:
   * 
   * - 80: port 80.
   * - 80/80: port 80.
   * - 1/200: ports 1 to 200.
   * - -1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The destination route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-123abcxyz
   */
  targetRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      clientToken: 'ClientToken',
      description: 'Description',
      destPortRange: 'DestPortRange',
      destinationCidr: 'DestinationCidr',
      dryRun: 'DryRun',
      dscp: 'Dscp',
      name: 'Name',
      policyTableId: 'PolicyTableId',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      targetRouteTableId: 'TargetRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      clientToken: 'string',
      description: 'string',
      destPortRange: 'string',
      destinationCidr: 'string',
      dryRun: 'boolean',
      dscp: 'string',
      name: 'string',
      policyTableId: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      targetRouteTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

