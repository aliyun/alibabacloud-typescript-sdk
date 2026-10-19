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
   * The Alibaba Cloud Resource Name (ARN) of the specified role. Format: `acs:ram::$accountID:role/$roleName `. Default value: `acs:ram::$accountID:role/aliyunrdsinstanceencryptiondefaultrole`.
   * > - `$accountID`: the Alibaba Cloud account ID. You can log on to the Alibaba Cloud Management Console, move the mouse over the profile picture in the upper-right corner, and click Security Settings to view it.
   * > - `$roleName`: the name of the RAM role. You can log on to the Resource Access Management (RAM) console, click RAM Roles in the left-side navigation pane, and view the name in the RAM role name list.
   * 
   * @example
   * acs:ram::123456789012****:role/aliyunrdsinstanceencryptiondefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The target zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available zones.
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

