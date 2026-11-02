// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkAclEntriesRequestEgressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the outbound rule.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is EgressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block. You can also specify a prefix list.
   * 
   * @example
   * 10.0.0.0/24
   * pl-xxxxxx
   */
  destinationCidrIp?: string;
  /**
   * @remarks
   * The rule type. Set the value to **custom**, which indicates a custom rule.
   * 
   * @example
   * custom
   */
  entryType?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * - **IPv4**
   * - **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the outbound rule entries.
   * 
   * Valid values of **N**: **0** to **99**. You can update up to 100 outbound rules at a time.
   * 
   * @example
   * nae-2zecs97e0brcge46****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the outbound rule entries.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * acl-2
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The authorization policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound rule.
   * 
   * - If the **Protocol** (Protocol Type) of the outbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates that all ports are available.
   * - If the **Protocol** (Protocol Type) of the outbound rule is set to **tcp** or **udp**, the port range is **1** to **65535**. The format is **1/200** or **80/80**, which indicates Port 1 to Port 200 or Port 80.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol (ICMP).
   * 
   * - **gre**: Generic Routing Encapsulation (GRE).
   * 
   * - **tcp**: Transmission Control Protocol (TCP).
   * 
   * - **udp**: User Datagram Protocol (UDP).
   * 
   * - **all**: all protocols.
   * 
   * - **icmpv6**: Internet Control Message Protocol version 6 (ICMPv6).
   * 
   * @example
   * all
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrIp: 'DestinationCidrIp',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrIp: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesRequestIngressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the inbound rule.
   * 
   * The description must be 1 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is IngressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The rule type. Set the value to **custom**, which indicates a custom rule.
   * 
   * @example
   * custom
   */
  entryType?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * - **IPv4**
   * - **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the inbound rule entries.
   * 
   * Valid values of **N**: **0** to **99**. You can update up to 100 inbound rules at a time.
   * 
   * @example
   * nae-2zepn32de59j8m4****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the inbound rule entries.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * acl-3
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The authorization policy. Valid values:
   * 
   * - **accept**: allows the traffic.
   * 
   * - **drop**: denies the traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The source port range of the inbound rule.
   * 
   * - If the **Protocol** (Protocol Type) of the inbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates that all ports are available.
   * - If the **Protocol** (Protocol Type) of the inbound rule is set to **tcp** or **udp**, the port range is **1** to **65535**. The format is **1/200** or **80/80**, which indicates Port 1 to Port 200 or Port 80.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol (ICMP).
   * 
   * - **gre**: Generic Routing Encapsulation (GRE).
   * 
   * - **tcp**: Transmission Control Protocol (TCP).
   * 
   * - **udp**: User Datagram Protocol (UDP).
   * 
   * - **all**: all protocols.
   * 
   * - **icmpv6**: Internet Control Message Protocol version 6 (ICMPv6).
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block. You can also specify a prefix list.
   * 
   * @example
   * 10.0.0.0/24
   * pl-xxxxxx
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entryType: 'EntryType',
      ipVersion: 'IpVersion',
      networkAclEntryId: 'NetworkAclEntryId',
      networkAclEntryName: 'NetworkAclEntryName',
      policy: 'Policy',
      port: 'Port',
      protocol: 'Protocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entryType: 'string',
      ipVersion: 'string',
      networkAclEntryId: 'string',
      networkAclEntryName: 'string',
      policy: 'string',
      port: 'string',
      protocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAclEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the outbound rules.
   */
  egressAclEntries?: UpdateNetworkAclEntriesRequestEgressAclEntries[];
  /**
   * @remarks
   * The information about the inbound rules.
   */
  ingressAclEntries?: UpdateNetworkAclEntriesRequestIngressAclEntries[];
  /**
   * @remarks
   * The ID of the network ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * nacl-bp1lhl0taikrzxsc****
   */
  networkAclId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the network ACL.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to update the outbound rules. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * > This parameter does not support incremental updates. If the network ACL already has an outbound rule and you want to add another outbound rule, you must pass both rules when you call this operation. If you pass only the new outbound rule, the existing outbound rule is deleted.
   * 
   * @example
   * false
   */
  updateEgressAclEntries?: boolean;
  /**
   * @remarks
   * Specifies whether to update the inbound rules. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false** (default): no.
   * 
   * > This parameter does not support incremental updates. If the network ACL already has an inbound rule and you want to add another inbound rule, you must pass both rules when you call this operation. If you pass only the new inbound rule, the existing inbound rule is deleted.
   * 
   * @example
   * false
   */
  updateIngressAclEntries?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressAclEntries: 'EgressAclEntries',
      ingressAclEntries: 'IngressAclEntries',
      networkAclId: 'NetworkAclId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      updateEgressAclEntries: 'UpdateEgressAclEntries',
      updateIngressAclEntries: 'UpdateIngressAclEntries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestEgressAclEntries },
      ingressAclEntries: { 'type': 'array', 'itemType': UpdateNetworkAclEntriesRequestIngressAclEntries },
      networkAclId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      updateEgressAclEntries: 'boolean',
      updateIngressAclEntries: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.egressAclEntries)) {
      $dara.Model.validateArray(this.egressAclEntries);
    }
    if(Array.isArray(this.ingressAclEntries)) {
      $dara.Model.validateArray(this.ingressAclEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

