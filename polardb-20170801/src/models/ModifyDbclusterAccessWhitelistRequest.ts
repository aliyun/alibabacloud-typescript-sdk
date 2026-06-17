// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist group. If you set this parameter to \\`hidden\\`, the whitelist group is not visible in the console.
   * 
   * > - You cannot hide an IP address whitelist group that is already visible in the console.
   * >
   * > - This parameter is available only when **WhiteListType** is set to **IP**.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group. The name must be 2 to 120 characters in length. It must consist of lowercase letters and digits. The name must start with a letter and end with a letter or a digit.
   * 
   * - If the specified whitelist group name does not exist, a new whitelist group is created.
   * 
   * - If the specified whitelist group name already exists, the whitelist group is modified.
   * 
   * - If you do not specify this parameter, the \\`default\\` group is modified.
   * 
   * > * A cluster can have up to 50 IP address whitelist groups.
   * >
   * > * This parameter is available only when **WhiteListType** is set to **IP**.
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
   * The method used to modify the IP address whitelist. Valid values:
   * 
   * - **Cover**: Overwrites the original IP address whitelist. This is the default value.
   * 
   * - **Append**: Appends IP addresses to the whitelist.
   * 
   * - **Delete**: Deletes IP addresses from the whitelist.
   * 
   * > This parameter is available only when **WhiteListType** is set to **IP**.
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
   * The security group ID. Separate multiple security group IDs with commas (,).
   * 
   * > - A cluster can be associated with up to three security groups.
   * >
   * > - This parameter is available only when **WhiteListType** is set to **SecurityGroup**.
   * 
   * @example
   * sg-*********
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks in the IP address whitelist group. All IP address whitelist groups can contain a total of 1,000 IP addresses or CIDR blocks. Separate multiple IP addresses with commas (,). The following formats are supported:
   * 
   * - IP address format. For example: 10.23.12.24.
   * 
   * - CIDR format. For example: 10.23.12.24/24. The number 24 indicates the prefix length of the IP address. The prefix length can range from 1 to 32.
   * 
   * > This parameter is available only when **WhiteListType** is set to **IP**.
   * 
   * @example
   * 10.23.12.24
   */
  securityIps?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * - **IP**: IP address whitelist group.
   * 
   * - **SecurityGroup**: Security group.
   * 
   * The default value is **IP**.
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

