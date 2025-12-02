// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMaterializedViewRecommendRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-uf6o*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The description of the recommendation task.
   * 
   * @example
   * task desc
   */
  description?: string;
  /**
   * @remarks
   * Pattern匹配的最少慢查询个数
   * 
   * @example
   * 3
   */
  minRewriteQueryCount?: number;
  /**
   * @remarks
   * 最小可加速的Pattern数量
   * 
   * @example
   * 5
   */
  minRewriteQueryPattern?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time range for scanning data. Unit: days. Default value: 3.
   * 
   * @example
   * 3
   */
  scanQueriesRange?: number;
  /**
   * @remarks
   * This parameter is valid only when SchedulingPolicy is set to weekly. Valid values:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * Separate multiple days with commas (,).
   * 
   * @example
   * Monday;Wednesday
   */
  schedulingDay?: string;
  /**
   * @remarks
   * The scheduling policy of the recommendation task. Valid values:
   * 
   * *   daily
   * *   weekly
   * 
   * <!---->
   * 
   * *
   * *
   * 
   * @example
   * weekly
   */
  schedulingPolicy?: string;
  /**
   * @remarks
   * 慢查询阈值
   * 
   * @example
   * 2
   */
  slowQueryThreshold?: number;
  /**
   * @remarks
   * The execution time of the recommendation task. Specify the time in the HH:MM:SS format.
   * 
   * @example
   * 10:00:00
   */
  specifiedTime?: string;
  /**
   * @remarks
   * The name of the recommendation task.
   * 
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

