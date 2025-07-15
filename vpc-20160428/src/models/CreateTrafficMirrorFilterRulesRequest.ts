// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRulesRequestEgressRules extends $dara.Model {
  /**
   * @remarks
   * The collection policy of the outbound rule. Valid values:
   * 
   * *   **accept**: accepts network traffic.
   * *   **drop**: drops network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the outbound traffic. Valid value: **1** to **65535**. Separate the first and last port with a forward slash (/). For example **1/200** and **80/80**. You cannot set this parameter to \\*\\*-1/-1\\*\\*, which indicates all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
   * 
   * @example
   * 22/40
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * The IP version of the instance. Valid values:
   * 
   * *   **IPv4**: IPv4
   * *   **IPv6**: IPv6
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the outbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**. You can configure up to 10 outbound rules for a filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol that is used by the outbound traffic to be mirrored. Valid values:
   * 
   * *   **ALL**: all protocols
   * *   **ICMP**: Internet Control Message Protocol.
   * *   **TCP**: Transmission Control Protocol.
   * *   **UDP**: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the outbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the outbound traffic. Valid value: **1** to **65535**. Separate the first and last port with a forward slash (/). For example **1/200** and **80/80**. You cannot set this parameter to \\*\\*-1/-1\\*\\*, which indicates all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
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
   * The policy of the inbound rule. Valid values:
   * 
   * *   **accept**: collects network traffic.
   * *   **drop**: drops network traffic.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The destination CIDR block of the inbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the inbound traffic. Valid value: **1** to **65535**. Separate the first and the last port with a forward slash (/). For example, **1/200** or **80/80**.
   * 
   * >  If the **IngressRules.N.Protocol** parameter is set to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
   * 
   * @example
   * 80/120
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * The IP version of the instance. The following value may be returned:
   * 
   * *   **IPv4**: IPv4
   * *   **IPv6**: IPv6
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The priority of the inbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**. You can configure up to 10 inbound rules for a filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The protocol that is used by the inbound traffic to be mirrored. Valid values:
   * 
   * *   **ALL**: all protocols
   * *   **ICMP**: Internet Control Message Protocol.
   * *   **TCP**: Transmission Control Protocol.
   * *   **UDP**: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the inbound traffic.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the inbound traffic. Valid value: **1** to **65535**. Separate the first and last port with a forward slash (/). For example **1/200** and **80/80**. You cannot set this parameter to \\*\\*-1/-1\\*\\*, which indicates all ports.
   * 
   * >  If the **IngressRules.N.Protocol** parameter is set to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
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
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to check the request without performing the operation. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the required parameters, request format, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. After the request passes the check, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the outbound rule.
   */
  egressRules?: CreateTrafficMirrorFilterRulesRequestEgressRules[];
  /**
   * @remarks
   * The information about the inbound rules.
   */
  ingressRules?: CreateTrafficMirrorFilterRulesRequestIngressRules[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the mirrored traffic belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list. For more information about regions that support traffic mirror, see [Overview of traffic mirror](https://help.aliyun.com/document_detail/207513.html).
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
   * The ID of the filter.
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

