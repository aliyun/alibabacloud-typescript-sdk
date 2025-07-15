// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRequestEgressRules extends $dara.Model {
  /**
   * @remarks
   * The collection policy of the outbound rule. Valid values:
   * 
   * *   **accept**: collects the network traffic.
   * *   **drop**: does not collect the network traffic.
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
   * The destination port range of the outbound traffic. Valid values for a port: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot set this parameter to only -1/-1, which specifies all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter. This indicates that all ports are available.
   * 
   * @example
   * 22/40
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
   * The priority of the outbound rule. A smaller value indicates a higher priority. The maximum value of **N** is **10**. You can configure up to 10 outbound rules for a filter.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The type of the protocol that is used by the outbound traffic that you want to mirror. Valid values:
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
   * The source port range of the outbound traffic. Valid values: **1** to **65535**. Separate the first port and the last port with a forward slash (/). Examples: **1/200** and **80/80**. You cannot set this parameter to only -1/-1, which specifies all ports.
   * 
   * >  If **EgressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter. This indicates that all ports are available.
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
   * *   **accept**: collects the network traffic.
   * *   **drop**: does not collect the network traffic.
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
   * The destination port range of the inbound traffic. Valid value: **1** to **65535**. Separate the first port and last port with a forward slash (/). For example, **1/200** or **80/80**.
   * 
   * >  If you set **IngressRules.N.Protocol** to **ALL** or **ICMP**, you do not need to set this parameter. In this case, all ports are available.
   * 
   * @example
   * 80/120
   */
  destinationPortRange?: string;
  /**
   * @remarks
   * The IP version of the instance. The following value may be returned:
   * 
   * *   **IPv4**
   * *   **IPv6**
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
   * The type of the protocol is used by the inbound traffic that you want to mirror. Valid values:
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
   * The source port range of the inbound traffic. Valid value: **1** to **65535**. Separate the first port and last port with a forward slash (/). For example, **1/200** or **80/80**.
   * 
   * >  If **IngressRules.N.Protocol** is set to **ALL** or **ICMP**, you do not need to specify this parameter. This indicates that all ports are available.
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
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * You can use the client to generate the value, but you must ensure that the value is unique among all requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed. This is the default value.
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
   * The information about inbound rules.
   */
  ingressRules?: CreateTrafficMirrorFilterRequestIngressRules[];
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
  /**
   * @remarks
   * The ID of the resource group to which the mirrored traffic belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag of the resource.
   */
  tag?: CreateTrafficMirrorFilterRequestTag[];
  /**
   * @remarks
   * The description of the filter.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * this is a filter.
   */
  trafficMirrorFilterDescription?: string;
  /**
   * @remarks
   * The name of the filter.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
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

