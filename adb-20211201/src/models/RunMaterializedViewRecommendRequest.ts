// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMaterializedViewRecommendRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of an Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of a Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the recommendation task. To run tasks in a batch, separate their names with a comma.
   * 
   * This parameter is required.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

