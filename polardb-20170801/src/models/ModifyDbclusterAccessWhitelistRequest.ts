// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes of the IP whitelist group. Set this parameter to **hidden** to hide the IP whitelist group in the console.
   * 
   * > *   The IP whitelist group that has appeared in the console cannot be hidden.
   * > *   This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group. The group name must be 2 to 120 characters in length and consists of lowercase letters and digits. It must start with a letter, and end with a letter or a digit.
   * 
   * *   If the specified whitelist group name does not exist, the whitelist group is created.
   * *   If the specified whitelist group name exists, the whitelist group is modified.
   * *   If you do not specify this parameter, the default group is modified.
   * 
   * > 
   * 
   * *   You can create a maximum of 50 IP whitelist groups for a cluster.
   * 
   * *   This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The method used to modify the IP whitelist. Valid values:
   * 
   * *   **Cover** (default): overwrites the original IP whitelist.
   * *   **Append**: appends IP addresses to the original whitelist.
   * *   **Delete**: deletes IP addresses.
   * 
   * >  This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the security group. Separate multiple security groups with commas (,).
   * 
   * > *   You can add a maximum of three security groups to a cluster.
   * > *   This parameter can be specified only when the **WhiteListType** parameter is set to **SecurityGroup**.
   * 
   * @example
   * sg-*********
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The IP addresses or Classless Inter-Domain Routing (CIDR) blocks in the IP whitelist group. You can add 1,000 IP addresses or CIDR blocks to all the IP whitelist groups. Separate multiple IP addresses with commas (,). The following two formats are supported:
   * 
   * *   IP addresses. Example: 10.23.12.24.
   * *   CIDR blocks. Example: 10.23.12.24/24. 24 indicates the length of the prefix of the CIDR block. The length is the range of 1 to 32.
   * 
   * >  This parameter can be specified only when the **WhiteListType** parameter is set to **IP**.
   * 
   * @example
   * 10.23.12.24
   */
  securityIps?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * *   **IP**: IP whitelist group.
   * *   **SecurityGroup**: security group.
   * 
   * Default value: **IP**.
   * 
   * @example
   * IP
   */
  whiteListType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      DBClusterId: 'DBClusterId',
      modifyMode: 'ModifyMode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupIds: 'SecurityGroupIds',
      securityIps: 'SecurityIps',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
      DBClusterId: 'string',
      modifyMode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupIds: 'string',
      securityIps: 'string',
      whiteListType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

