// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRulesRequestEgressRules extends $dara.Model {
  /**
   * @remarks
   * The collection policy of the outbound rule. Valid values:
   * 
   * - **accept**: collects network traffic.
   * - **drop**: does not collect network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the network traffic for the outbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the network traffic for the outbound rule. Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot specify only **-1/-1** for this parameter. **-1/-1** indicates that all ports are allowed.
   * 
   * > If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter, which indicates that all ports are allowed.
   * 
   * @example
   * 22/40
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * The IP version of the instance. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **IPv6**: IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the outbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**, which means that you can configure up to 10 outbound rules for a traffic mirror filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the network traffic to be mirrored for the outbound rule. Valid values:
   * 
   * - **ALL**: all protocols.
   * - **ICMP**: Internet Control Message Protocol (ICMP).
   * - **TCP**: Transmission Control Protocol (TCP).
   * - **UDP**: User Datagram Protocol (UDP).
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the network traffic for the outbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the network traffic for the outbound rule. Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot specify only **-1/-1** for this parameter. **-1/-1** indicates that all ports are allowed.
   * 
   * > If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter, which indicates that all ports are allowed.
   * 
   * @example
   * 22/40
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destinationCidrBlock: 'DestinationCidrBlock',
      destinationPortRange: 'DestinationPortRange',
      ipVersion: 'IpVersion',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidrBlock: 'SourceCidrBlock',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destinationCidrBlock: 'string',
      destinationPortRange: 'string',
      ipVersion: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidrBlock: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMirrorFilterRulesRequestIngressRules extends $dara.Model {
  /**
   * @remarks
   * The collection policy of the inbound rule. Valid values:
   * 
   * - **accept**: collects network traffic.
   * - **drop**: does not collect network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the network traffic for the inbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the network traffic for the inbound rule. Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Examples: **1/200** and **80/80**.
   * 
   * > If **IngressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter, which indicates that all ports are allowed.
   * 
   * @example
   * 80/120
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * The IP version of the instance. Valid values:
   * 
   * - **IPv4**: IPv4.
   * - **IPv6**: IPv6.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the inbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**, which means that you can configure up to 10 inbound rules for a traffic mirror filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol type of the network traffic to be mirrored for the inbound rule. Valid values:
   * 
   * - **ALL**: all protocols.
   * - **ICMP**: Internet Control Message Protocol (ICMP).
   * - **TCP**: Transmission Control Protocol (TCP).
   * - **UDP**: User Datagram Protocol (UDP).
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the network traffic for the inbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the network traffic for the inbound rule. Valid values are **1** to **65535**. Separate the start port and the end port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot specify only **-1/-1** for this parameter. **-1/-1** indicates that all ports are allowed.
   * 
   * > If **IngressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter, which indicates that all ports are allowed.
   * 
   * @example
   * 80/120
   */
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      destinationCidrBlock: 'DestinationCidrBlock',
      destinationPortRange: 'DestinationPortRange',
      ipVersion: 'IpVersion',
      priority: 'Priority',
      protocol: 'Protocol',
      sourceCidrBlock: 'SourceCidrBlock',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destinationCidrBlock: 'string',
      destinationPortRange: 'string',
      ipVersion: 'string',
      priority: 'number',
      protocol: 'string',
      sourceCidrBlock: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMirrorFilterRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run and does not create the inbound or outbound rules. The system checks whether required parameters are specified, the request format, and the limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): sends a normal request and creates the inbound or outbound rules if the request passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The details of the outbound rules.
   */
  egressRules?: CreateTrafficMirrorFilterRulesRequestEgressRules[];
  /**
   * @remarks
   * The details of the inbound rules.
   */
  ingressRules?: CreateTrafficMirrorFilterRulesRequestIngressRules[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about the regions that support traffic mirroring, see [Traffic mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the traffic mirror filter.
   * 
   * This parameter is required.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressRules: 'EgressRules',
      ingressRules: 'IngressRules',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRulesRequestEgressRules },
      ingressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRulesRequestIngressRules },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trafficMirrorFilterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressRules)) {
      $dara.Model.validateArray(this.egressRules);
    }
    if(Array.isArray(this.ingressRules)) {
      $dara.Model.validateArray(this.ingressRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

