// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachInstanceRamRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of ECS instances. You can specify 1 to 100 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-bp67acfmxazb4p****", "i-bp67acfmxazb5p****", "i-bp67acfmxazb6p****"…]
   */
  instanceIds?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the instance RAM role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation of RAM to query the names of available instance RAM roles.
   * 
   * @example
   * RamRoleTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      ownerId: 'OwnerId',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      ownerId: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

