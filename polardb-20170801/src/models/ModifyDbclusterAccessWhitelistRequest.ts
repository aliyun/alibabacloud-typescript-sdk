// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterAccessWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP whitelist group. If this parameter is set to **hidden**, the group is not displayed in the console.
   * 
   * > - IP whitelist groups that are already displayed in the console cannot be hidden.
   * > - This parameter takes effect only when **WhiteListType** is set to **IP**.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group. The name must be 2 to 120 characters in length and can contain lowercase letters and digits. The name must start with a letter and end with a letter or digit.
   * 
   * - If the specified whitelist group name does not exist, a new whitelist group is created.
   * - If the specified whitelist group name already exists, the whitelist group is modified.
   * - If this parameter is not specified, the default group is modified. 
   * 
   * > - A maximum of 50 IP whitelist groups are supported for a cluster.
   * > - This parameter takes effect only when **WhiteListType** is set to **IP**.
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
   * - **Cover**: overwrites the original IP whitelist (default value).
   * - **Append**: appends IP addresses to the whitelist.
   * - **Delete**: removes IP addresses from the whitelist.
   * 
   * > This parameter takes effect only when **WhiteListType** is set to **IP**.
   * 
   * @example
   * Cover
   */
  modifyMode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * pfs-xxx
   */
  pfsInstanceId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group IDs. Separate multiple security group IDs with commas (,).
   * 
   * > - A maximum of 3 security groups are supported for a cluster.
   * > - This parameter takes effect only when **WhiteListType** is set to **SecurityGroup**.
   * 
   * @example
   * sg-*********
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The IP addresses or CIDR blocks in the IP whitelist group. A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP whitelist groups. Separate multiple IP addresses with commas (,). The following two formats are supported: 
   * 
   * - IP address format, such as 10.23.12.24.
   * - CIDR format, such as 10.23.12.24/24, where 24 indicates the prefix length of the CIDR block. The prefix length ranges from 1 to 32.
   * 
   * > This parameter takes effect only when **WhiteListType** is set to **IP**.
   * 
   * @example
   * 10.23.12.24
   */
  securityIps?: string;
  /**
   * @remarks
   * The type of the whitelist. Valid values:
   * 
   * - **IP**: IP whitelist group.
   * - **SecurityGroup**: security group.
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
      pfsInstanceId: 'PfsInstanceId',
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
      pfsInstanceId: 'string',
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

