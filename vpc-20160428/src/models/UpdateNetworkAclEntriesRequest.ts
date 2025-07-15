// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkAclEntriesRequestEgressAclEntries extends $dara.Model {
  /**
   * @remarks
   * The description of the outbound rule.
   * 
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is EgressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrIp?: string;
  /**
   * @remarks
   * The type of the rule. Set the value to **custom**, which specifies custom rules.
   * 
   * @example
   * custom
   */
  entryType?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the outbound rule.
   * 
   * Valid values of **N**: **0** to **99**. You can specify at most 100 outbound rules.
   * 
   * @example
   * nae-2zecs97e0brcge46****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the outbound rule.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * acl-2
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The action to be performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**
   * *   **drop**
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The destination port range of the outbound traffic.
   * 
   * *   If the **protocol** of the outbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specified all ports.
   * *   If the **protocol** of the outbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid values for a port: **1** to **65535**.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **icmp**
   * *   **gre**
   * *   **tcp**
   * *   **udp**
   * *   **all**
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
   * The description must be 1 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is IngressAclEntries.
   */
  description?: string;
  /**
   * @remarks
   * The type of the rule. Set the value to **custom**, which specifies custom rules.
   * 
   * @example
   * custom
   */
  entryType?: string;
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **IPv4** (default)
   * *   **IPv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * Valid values of **N**: **0** to **99**. You can specify at most 100 inbound rules.
   * 
   * @example
   * nae-2zepn32de59j8m4****
   */
  networkAclEntryId?: string;
  /**
   * @remarks
   * The name of the inbound rule.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * acl-3
   */
  networkAclEntryName?: string;
  /**
   * @remarks
   * The action to be performed on network traffic that matches the rule. Valid values:
   * 
   * *   **accept**
   * *   **drop**
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The source port range of the inbound rule.
   * 
   * *   If the **protocol** of the inbound rule is set to **all**, **icmp**, or **gre**, the port range is -1/-1, which specifies all ports.
   * *   If the **protocol** of the inbound rule is set to **tcp** or **udp**, set the port range in the following format: **1/200** or **80/80**, which specifies port 1 to port 200 or port 80. Valid ports: **1** to **65535**.
   * 
   * @example
   * -1/-1
   */
  port?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **icmp**
   * *   **gre**
   * *   **tcp**
   * *   **udp**
   * *   **all**
   * 
   * @example
   * all
   */
  protocol?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 10.0.0.0/24
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
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including the AccessKey pair, the permissions of the RAM user, and the required parameters. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * The information about the inbound rule.
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
   * Specifies whether to update outbound rules. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter cannot be used to add outbound rules to ACLs. If you want to add more outbound rules to ACLs, specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.
   * 
   * @example
   * false
   */
  updateEgressAclEntries?: boolean;
  /**
   * @remarks
   * Specifies whether to update inbound rules. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  This parameter cannot be used to add inbound rules to ACLs. If you want to add more inbound rules to ACLs, you must specify both the existing rule and the rule that you want to add when you call this API operation. If you specify only the rule that you want to add, it overwrites the existing rule.
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

