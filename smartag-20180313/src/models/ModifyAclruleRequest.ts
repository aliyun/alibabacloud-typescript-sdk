// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyACLRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*******
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the access control rule.
   * 
   * Call the [DescribeACLAttribute](https://help.aliyun.com/document_detail/114017.html) operation to query the IDs of access control rules in an ACL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acr-u98qztgtgvhb********
   */
  acrId?: string;
  /**
   * @remarks
   * The description of the access control rule.
   * 
   * The description must be **1** to **512** characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * The destination CIDR block must be in CIDR format. For example: 192.168.10.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range. Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of the destination port range format:
   * 
   * - 1/200: ports 1 to 200.
   * - 80/80: port 80.
   * - -1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction in which the access control rule is applied. Valid values:
   * 
   * - **in**: inbound. This is the direction of traffic from an external network to the on-premises network where the Smart Access Gateway instance is deployed.
   * - **out**: outbound. This is the direction of traffic from the on-premises network where the Smart Access Gateway instance is deployed to an external network.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * A list of application group IDs that the access control rule matches.
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * A list of application IDs that the access control rule matches.
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The protocol used by the access control rule.
   * 
   * For the protocols supported by the access control feature, see the information in the console. The protocol is not case-sensitive.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, underscores (_), and hyphens (-).
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The authorization policy of the access control rule. Valid values:
   * 
   * - **accept**: allows access.
   * - **drop**: denies access.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the access control rule.
   * 
   * A smaller value indicates a higher priority. If rules have the same priority, the one that is first delivered to the Smart Access Gateway device takes precedence.
   * 
   * Valid values: 1 to **100**. Default value: **1**.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the access control list (ACL) instance.
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
   * The source CIDR block must be in CIDR format. For example: 192.168.1.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range. Valid values: **-1** or **1** to **65535**.
   * 
   * Examples of the source port range format:
   * 
   * - 1/200: ports 1 to 200.
   * - 80/80: port 80.
   * - -1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the access control rule. Valid values:
   * 
   * - **LAN**: (Default) private network. This value indicates that the access control rule applies to traffic from private IP addresses.
   * - **WAN**: public network. This value indicates that the access control rule applies to traffic from public IP addresses.
   * 
   * @example
   * LAN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      acrId: 'AcrId',
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
      acrId: 'string',
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

