// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRequestEgressRules extends $dara.Model {
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
   * The destination CIDR block of the outbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the outbound rule. Valid values for port numbers: **1** to **65535**. Separate the start port and end port with a forward slash (/). Format: **1/200** or **80/80**. The value **-1/-1** cannot be set independently and indicates that all ports are available.
   * 
   * > If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, this parameter does not need to be set, which indicates that all ports are available.
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
   * The priority of the outbound rule. A smaller value indicates a higher priority.
   * The maximum value of **N** is **10**, which indicates that a filter can have up to 10 outbound rules.
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
   * - **ICMP**: Internet Control Message Protocol.
   * - **TCP**: Transmission Control Protocol.
   * - **UDP**: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the outbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the outbound rule. Valid values for port numbers: **1** to **65535**. Separate the start port and end port with a forward slash (/). Format: **1/200** or **80/80**. The value **-1/-1** cannot be set independently and indicates that all ports are available.
   * 
   * > If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, this parameter does not need to be set, which indicates that all ports are available.
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

export class CreateTrafficMirrorFilterRequestIngressRules extends $dara.Model {
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
   * The destination CIDR block of the inbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The destination port range of the inbound rule. Valid values for port numbers: **1** to **65535**. Separate the start port and end port with a forward slash (/). Format: **1/200** or **80/80**.
   * 
   * > If **IngressRules.N.Protocol** is set to **ALL** or **ICMP**, this parameter does not need to be set, which indicates that all ports are available.
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
   * The priority of the inbound rule. A smaller value indicates a higher priority.
   * The maximum value of **N** is **10**, which indicates that a filter can have up to 10 inbound rules.
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
   * - **ICMP**: Internet Control Message Protocol.
   * - **TCP**: Transmission Control Protocol.
   * - **UDP**: User Datagram Protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block of the inbound rule.
   * 
   * @example
   * 10.0.0.0/24
   */
  sourceCidrBlock?: string;
  /**
   * @remarks
   * The source port range of the inbound rule. Valid values for port numbers: **1** to **65535**. Separate the start port and end port with a forward slash (/). Format: **1/200** or **80/80**.
   * 
   * > If **IngressRules.N.Protocol** is set to **ALL** or **ICMP**, this parameter does not need to be set, which indicates that all ports are available.
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

export class CreateTrafficMirrorFilterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrafficMirrorFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the error code `DryRunOperation` is returned.
   * 
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the filter is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the outbound rules.
   */
  egressRules?: CreateTrafficMirrorFilterRequestEgressRules[];
  /**
   * @remarks
   * The information about the inbound rules.
   */
  ingressRules?: CreateTrafficMirrorFilterRequestIngressRules[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the traffic mirror.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID. For more information about the regions that support traffic mirroring, see [Traffic Mirroring overview](https://help.aliyun.com/document_detail/207513.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the traffic mirror belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateTrafficMirrorFilterRequestTag[];
  /**
   * @remarks
   * The description of the traffic mirror filter.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * this is a filter.
   */
  trafficMirrorFilterDescription?: string;
  /**
   * @remarks
   * The name of the traffic mirror filter.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * abc
   */
  trafficMirrorFilterName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressRules: 'EgressRules',
      ingressRules: 'IngressRules',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      trafficMirrorFilterDescription: 'TrafficMirrorFilterDescription',
      trafficMirrorFilterName: 'TrafficMirrorFilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRequestEgressRules },
      ingressRules: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRequestIngressRules },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateTrafficMirrorFilterRequestTag },
      trafficMirrorFilterDescription: 'string',
      trafficMirrorFilterName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.egressRules)) {
      $dara.Model.validateArray(this.egressRules);
    }
    if(Array.isArray(this.ingressRules)) {
      $dara.Model.validateArray(this.ingressRules);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

