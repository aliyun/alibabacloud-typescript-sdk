// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddACLRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control instance.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*****
   */
  aclId?: string;
  /**
   * @remarks
   * The description of the access control rule.
   * 
   * The description must be **1** to **512** characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * The destination CIDR block must be in CIDR format, such as 192.168.10.0/24.
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
   * Valid values: **-1** or **1** to **65535**.
   * 
   * The destination port range is in the format of 1/200 or 80/80. A value of -1/-1 specifies that all ports are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction in which the access control rule is applied. Valid values:
   * 
   * - **in**: inbound. This value specifies traffic from external networks to the local branch where the Smart Access Gateway (SAG) instance is deployed.
   * - **out**: outbound. This value specifies traffic from the local branch where the SAG instance is deployed to external networks.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @remarks
   * The IDs of the application groups that match the access control rule.
   * 
   * You can call the [ListDpiGroups](https://help.aliyun.com/document_detail/196754.html) operation to query application group IDs and the included application information. Maximum value of N: **10**.
   * 
   * @example
   * 20
   */
  dpiGroupIds?: string[];
  /**
   * @remarks
   * The IDs of the applications that match the access control rule.
   * 
   * You can call the [ListDpiSignatures](https://help.aliyun.com/document_detail/196630.html) operation to query application IDs and the corresponding application information. Maximum value of N: **10**.
   * 
   * @example
   * 1
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The protocol used by the access control rule.
   * 
   * For the protocol types supported by the access control feature, refer to the console. The protocol format is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * The name must be 2 to 100 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
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
   * - **accept**: Allows the traffic.
   * 
   * - **drop**: Denies the traffic.
   * 
   * This parameter is required.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the access control rule.
   * 
   * A smaller value indicates a higher priority. If multiple rules have the same priority, the rule that is first delivered to the Smart Access Gateway device takes effect first.
   * 
   * Valid values: **1** to **100**. Default value: **1**.
   * 
   * @example
   * 12
   */
  priority?: number;
  /**
   * @remarks
   * The region ID of the access control instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the region ID.
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
   * The source CIDR block must be in CIDR format, such as 192.168.1.0/24.
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
   * Valid values: **-1** or **1** to **65535**.
   * 
   * The source port range is in the format of 1/200 or 80/80. A value of -1/-1 specifies that all ports are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the access control rule. Valid values:
   * 
   * - **LAN**: private network. This is the default value. This value specifies that the access control rule is applied to traffic destined for private IP addresses.
   * 
   * - **WAN**: public network. This value specifies that the access control rule is applied to traffic destined for public IP addresses.
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

