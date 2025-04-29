// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRamRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of ECS instances. You can specify up to 50 instance IDs in a single request.
   * 
   * >  You must specify at least one parameter from `InstanceIds` and `RamRoleName`.
   * 
   * @example
   * ["i-bp67acfmxazb1p****", "i-bp67acfmxazb2p****", "bp67acfmxazb3p****"…]
   */
  instanceIds?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the instance RAM role. If you specify this parameter, all ECS instances to which the instance RAM role is attached are returned in the response. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation of RAM to query the names of available instance RAM roles.
   * 
   * >  You must specify at least one parameter from `InstanceIds` and `RamRoleName`.
   * 
   * @example
   * EcsServiceRole-EcsDocGuideTest
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the instance RAM role. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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

