// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyACLRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*******
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the ACL rule.
   * 
   * You can call the [DescribeACLAttribute](https://help.aliyun.com/document_detail/114017.html) operation to query the ID of the ACL rule that is added to the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acr-u98qztgtgvhb********
   */
  acrId?: string;
  /**
   * @remarks
   * The description of the ACL rule.
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
   * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  destCidr?: string;
  /**
   * @remarks
   * The destination port range. Valid values: **1** to **65535** and **-1**.
   * 
   * Examples:
   * 
   * *   1/200: port 1 to port 200.
   * *   80/80: port 80.
   * *   \\-1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  destPortRange?: string;
  /**
   * @remarks
   * The direction of traffic in which the ACL rule is applied. Valid values:
   * 
   * *   **in**: The ACL rule controls inbound network traffic of the on-premises network that is associated with the SAG instance.
   * *   **out**: The ACL rule controls outbound network traffic of the on-premises network that is associated with the SAG instance.
   * 
   * @example
   * in
   */
  direction?: string;
  dpiGroupIds?: string[];
  dpiSignatureIds?: string[];
  /**
   * @remarks
   * The protocol used by the ACL rule.
   * 
   * The supported protocols provided in this topic are for reference only. The actual protocols in the SAG console shall prevail. The value of the parameter is not case-sensitive.
   * 
   * @example
   * tcp
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The name of the ACL rule.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * doctest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The action of the ACL rule. Valid values:
   * 
   * *   **accept**: allows network traffic.
   * *   **drop**: blocks network traffic.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The priority of the ACL rule.
   * 
   * A smaller value indicates a higher priority. If multiple rules have the same priority, the rule that is applied earlier takes effect.
   * 
   * Valid values: **1 to 100**. Default value: **1**.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the region where the ACL is deployed.
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
   * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidr?: string;
  /**
   * @remarks
   * The source port range. Valid values: **1** to **65535** and **-1**.
   * 
   * Examples:
   * 
   * *   1/200: port 1 to port 200.
   * *   80/80: port 80.
   * *   \\-1/-1: all ports.
   * 
   * @example
   * 80/80
   */
  sourcePortRange?: string;
  /**
   * @remarks
   * The type of the ACL rule: Valid values:
   * 
   * *   **LAN**: The ACL rule controls traffic of private IP addresses.
   * *   **WAN**: The ACL rule controls traffic of public IP addresses.
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

