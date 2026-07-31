// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRamRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs of the instances to query. You can specify up to 50 instances at a time.
   * > You must specify at least one of the InstanceIds and RamRoleName parameters.
   * 
   * @example
   * ["i-bp67acfmxazb1p****", "i-bp67acfmxazb2p****", "bp67acfmxazb3p****"…]
   */
  instanceIds?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Unit: entries.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the instance RAM role. You can use this parameter to query all ECS instances that are assigned the specified instance RAM role. You can call the RAM API [ListRoles](https://help.aliyun.com/document_detail/28713.html) to query the instance RAM roles that you created.
   * > You must specify at least one of InstanceIds and RamRoleName.
   * 
   * @example
   * EcsServiceRole-EcsDocGuideTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the instance RAM role. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
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
      pageNumber: 'number',
      pageSize: 'number',
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

