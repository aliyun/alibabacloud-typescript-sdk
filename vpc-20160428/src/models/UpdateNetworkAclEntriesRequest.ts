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
   * The ID of the outbound rule entry.
   * 
   * Valid values of **N**: **0** to **99**. You can update up to 100 outbound rule entries.
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
   * - **accept**: allows access.
   * 
   * - **drop**: denies access.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound rule.
   * 
   * - If **Protocol** (Protocol Type) is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates all ports.
   * - If **Protocol** (Protocol Type) is set to **tcp** or **udp**, the port range is **1** to **65535**. The format is **1/200** or **80/80**, which indicates port 1 to port 200 or port 80.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol.
   * 
   * - **gre**: Generic Routing Encapsulation.
   * 
   * - **tcp**: Transmission Control Protocol.
   * 
   * - **udp**: User Datagram Protocol.
   * 
   * - **all**: all protocols.
   * 
   * - **icmpv6**: Internet Control Message Protocol for IPv6.
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
   * The ID of the inbound rule entry.
   * 
   * Valid values of **N**: **0** to **99**. You can update up to 100 inbound rule entries.
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
   * - **accept**: allows access.
   * 
   * - **drop**: denies access.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The source port range of the inbound rule.
   * 
   * - If **Protocol** (Protocol Type) is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which indicates all ports.
   * - If **Protocol** (Protocol Type) is set to **tcp** or **udp**, the port range is **1** to **65535**. The format is **1/200** or **80/80**, which indicates port 1 to port 200 or port 80.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * - **icmp**: Internet Control Message Protocol.
   * 
   * - **gre**: Generic Routing Encapsulation.
   * 
   * - **tcp**: Transmission Control Protocol.
   * 
   * - **udp**: User Datagram Protocol.
   * 
   * - **all**: all protocols.
   * 
   * - **icmpv6**: Internet Control Message Protocol for IPv6.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request.
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
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
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
   * Specifies whether to update outbound rules. Valid values:
   * 
   * - **true**: updates outbound rules.
   * 
   * - **false** (default): does not update outbound rules.
   * 
   * > This parameter does not support incremental updates. If the ACL already has one outbound rule and you want to add another outbound rule, you must pass in both rules when calling this operation. If you pass in only the new outbound rule, the existing outbound rule is deleted.
   * 
   * @example
   * false
   */
  updateEgressAclEntries?: boolean;
  /**
   * @remarks
   * Specifies whether to update inbound rules. Valid values:
   * 
   * - **true**: updates inbound rules.
   * 
   * - **false** (default): does not update inbound rules.
   * 
   * > This parameter does not support incremental updates. If the ACL already has one inbound rule and you want to add another inbound rule, you must pass in both rules when calling this operation. If you pass in only the new inbound rule, the existing inbound rule is deleted.
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

