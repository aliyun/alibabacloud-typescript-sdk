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
   * The description must be **1 to 512** characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The range of the destination IP addresses.
   * 
   * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
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
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Set the destination port range in one of the following formats: 1/200 or 80/80. A value of -1/-1 indicates all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction of traffic in which the ACL rule is applied. Valid values:
   * 
   * *   **in**: The ACL rule controls inbound network traffic of the on-premises network that is associated with the Smart Access Gateway (SAG) instance.
   * *   **out**: The ACL rule controls outbound network traffic of the on-premises network that is associated with the SAG instance.
   * 
   * This parameter is required.
   * 
   * @example
   * in
   */
  direction?: string;
  /**
   * @example
   * 20
   */
  dpiGroupIds?: string[];
  /**
   * @example
   * 1
   */
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The protocol used by the ACL rule.
   * 
   * The protocols that are provided in this topic are for reference only. The protocols available in the SAG console may vary. The value of the parameter is not case-sensitive.
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
   * The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The action policy of the ACL rule. Valid values:
   * 
   * *   **accept**: allows network traffic.
   * *   **drop**: blocks the network traffic.
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
   * A smaller value indicates a higher priority. If rules have the same priority, whichever applied to the SAG devices earlier takes effect.
   * 
   * Valid values: **1 to 100**. Default value: **1**.
   * 
   * @example
   * 12
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region where the ACL is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
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
   * The range of the source IP addresses.
   * 
   * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
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
   * Valid values: **1** to **65535** and **-1**.
   * 
   * Set the source port range in one of the following formats: 1/200 or 80/80. A value of -1/-1 indicates all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 1/200
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the ACL rule: Valid values:
   * 
   * *   **LAN**: The ACL rule controls network traffic transmitted through private IP addresses.
   * *   **WAN**: The ACL rule controls network traffic transmitted through public IP addresses.
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

