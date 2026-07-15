// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role. Format: `acs:ram::$accountID:role/$roleName`. The default value is `acs:ram::$accountID:role/aliyunrdsinstanceencryptiondefaultrole`.
   * 
   * > - `$accountID`: The ID of your Alibaba Cloud account. To view the ID, log on to the Alibaba Cloud Management Console, move the pointer over your profile picture in the upper-right corner, and then click Security Settings.
   * >
   * > - `$roleName`: The name of the RAM role. To view the role name, log on to the RAM console. In the navigation pane on the left, click RAM Role Management. Find the role name in the RAM Role Name list.
   * 
   * @example
   * acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The ID of the destination region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available regions.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleARN: 'RoleARN',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleARN: 'string',
      targetRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

