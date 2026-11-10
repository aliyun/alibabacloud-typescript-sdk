// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterPolicyBasedRoutesResponseBodyPolicyBasedRoutes extends $dara.Model {
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
   * The description of the policy-based route table.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The destination port. Valid values: **-1** or **1** to **65535**.
   * 
   * Matches traffic whose port numbers fall within the destination port range. If this parameter is not specified, traffic to any destination port is matched.
   * 
   * The port range format is described as follows:
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
   * The destination CIDR block.
   * 
   * @example
   * 10.185.33.0/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The Differentiated Services Code Point (DSCP) value of the traffic packets to match. Valid values: **0** to **63**.
   * 
   * The DSCP value format is described as follows:
   * 
   * - 1: matches traffic with a DSCP value of 1.
   * - 1/10: matches traffic with DSCP values from 1 to 10.
   * - -1/-1: matches traffic with any DSCP value.
   * 
   * @example
   * 1/10
   */
  dscp?: string;
  /**
   * @remarks
   * The name of the policy-based route rule.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * None
   */
  name?: string;
  /**
   * @remarks
   * The instance ID of the policy-based routing rule.
   * 
   * @example
   * pbr-123qwead
   */
  policyBasedRouteId?: string;
  /**
   * @remarks
   * The instance ID of the policy-based routing table.
   * 
   * @example
   * ptbl-123adsfzc
   */
  policyTableId?: string;
  /**
   * @remarks
   * The priority of the policy-based route. Valid values: **1** to **100**.
   * 
   * The priority of each policy-based route in a policy-based route table of a transit router must be unique. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the traffic packets.
   * 
   * Traffic classification rules support matching traffic of various protocol types, such as **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more protocol types, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.aliyun.com/cen/list).
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.0.0.0/8
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port. Valid values: **-1** or **1** to **65535**.
   * 
   * Matches traffic whose port numbers fall within the source port range. If this parameter is not specified, traffic from any source port is matched.
   * 
   * The port range format is described as follows:
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
   * The status of the policy-based route. Valid values:
   * 
   * - **Creating**: The policy-based route is being created.
   * - **Active**: The policy-based route is available.
   * - **Deleting**: The policy-based route is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The destination route table.
   * 
   * @example
   * vtb-123adf
   */
  targetRouteTableId?: string;
  static names(): { [key: string]: string } {
    return {
      addressFamily: 'AddressFamily',
      description: 'Description',
      destPortRange: 'DestPortRange',
      destinationCidr: 'DestinationCidr',
      dscp: 'Dscp',
      name: 'Name',
      policyBasedRouteId: 'PolicyBasedRouteId',
      policyTableId: 'PolicyTableId',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      status: 'Status',
      targetRouteTableId: 'TargetRouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressFamily: 'string',
      description: 'string',
      destPortRange: 'string',
      destinationCidr: 'string',
      dscp: 'string',
      name: 'string',
      policyBasedRouteId: 'string',
      policyTableId: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      status: 'string',
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

export class DescribeTransitRouterPolicyBasedRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no next query is available.
   * - If **NextToken** returns a value, the value is the token used to start the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of policy-based route rules.
   */
  policyBasedRoutes?: DescribeTransitRouterPolicyBasedRoutesResponseBodyPolicyBasedRoutes[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyBasedRoutes: 'PolicyBasedRoutes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyBasedRoutes: { 'type': 'array', 'itemType': DescribeTransitRouterPolicyBasedRoutesResponseBodyPolicyBasedRoutes },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyBasedRoutes)) {
      $dara.Model.validateArray(this.policyBasedRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

