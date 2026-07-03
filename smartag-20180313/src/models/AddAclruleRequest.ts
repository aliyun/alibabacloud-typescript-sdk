// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddACLRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*****
   */
  aclId?: string;
  /**
   * @remarks
   * The description of the ACL rule.
   * 
   * The description must be 1 to **512** characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * For example: 192.168.10.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range.
   * 
   * Valid values: **-1** and **1** to **65535**.
   * 
   * Use the format 1/200 or 80/80. A value of -1/-1 means all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction of traffic to which the ACL rule applies. Valid values:
   * 
   * - **in**: inbound. Traffic from an external network to the local branch where the SAG instance is deployed.
   * - **out**: outbound. Traffic from the local branch where the SAG instance is deployed to an external network.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * A list of application group IDs. The ACL rule matches traffic of the specified application groups.
   * 
   * For more information, see [ListDpiGroups](https://help.aliyun.com/document_detail/196754.html). You can specify up to **10** application group IDs.
   * 
   * @example
   * 20
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * A list of application IDs. The ACL rule matches traffic of the specified applications.
   * 
   * For more information, see [ListDpiSignatures](https://help.aliyun.com/document_detail/196630.html). You can specify up to **10** application IDs.
   * 
   * @example
   * 1
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The protocol to which the ACL rule applies.
   * 
   * For a list of supported protocols, see the console. The protocol is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the ACL rule.
   * 
   * The name must be 2 to 100 characters in length, start with a letter, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The authorization policy of the ACL rule. Valid values:
   * 
   * - **accept**: allows access.
   * - **drop**: denies access.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the ACL rule.
   * 
   * A smaller value indicates a higher priority. If multiple rules have the same priority, the rule that is first delivered to the Smart Access Gateway device takes precedence.
   * 
   * Valid values: 1 to **100**. Default value: **1**.
   * 
   * @example
   * 12
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region where the access control list (ACL) is located.
   * 
   * For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/69813.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * For example: 192.168.1.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.20.0/24
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range.
   * 
   * Valid values: **-1** and **1** to **65535**.
   * 
   * Use the format 1/200 or 80/80. A value of -1/-1 means all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the ACL rule. Valid values:
   * 
   * - **LAN**: (Default) private network. The ACL rule controls traffic on private networks.
   * - **WAN**: public network. The ACL rule controls traffic on public networks.
   * 
   * @example
   * LAN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      direction: 'Direction',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      policy: 'Policy',
      priority: 'Priority',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      direction: 'string',
      dpiGroupIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      ipProtocol: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      policy: 'string',
      priority: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupIds)) {
      $dara.Model.validateArray(this.dpiGroupIds);
    }
    if(Array.isArray(this.dpiSignatureIds)) {
      $dara.Model.validateArray(this.dpiSignatureIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

