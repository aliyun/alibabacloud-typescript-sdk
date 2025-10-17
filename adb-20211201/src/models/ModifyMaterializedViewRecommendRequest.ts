// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterializedViewRecommendRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-uf6o*****
   */
  DBClusterId?: string;
  /**
   * @example
   * task desc
   */
  description?: string;
  minRewriteQueryCount?: number;
  minRewriteQueryPattern?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 3
   */
  scanQueriesRange?: number;
  /**
   * @example
   * Monday;Wednesday
   */
  schedulingDay?: string;
  /**
   * @example
   * weekly
   */
  schedulingPolicy?: string;
  slowQueryThreshold?: number;
  /**
   * @example
   * 10:00:00
   */
  specifiedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * task_n1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      description: 'Description',
      minRewriteQueryCount: 'MinRewriteQueryCount',
      minRewriteQueryPattern: 'MinRewriteQueryPattern',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scanQueriesRange: 'ScanQueriesRange',
      schedulingDay: 'SchedulingDay',
      schedulingPolicy: 'SchedulingPolicy',
      slowQueryThreshold: 'SlowQueryThreshold',
      specifiedTime: 'SpecifiedTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      description: 'string',
      minRewriteQueryCount: 'number',
      minRewriteQueryPattern: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scanQueriesRange: 'number',
      schedulingDay: 'string',
      schedulingPolicy: 'string',
      slowQueryThreshold: 'number',
      specifiedTime: 'string',
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

