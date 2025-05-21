// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the O\\&M task can be canceled. Valid values:
   * 
   * *   \\-1: yes for all O\\&M tasks.
   * *   0: no.
   * *   1: yes.
   * 
   * @example
   * -1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the execution time of the O\\&M task can be changed. Valid values:
   * 
   * *   \\-1: yes for all O\\&M tasks.
   * *   0: no.
   * *   1: yes.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The trigger level of the O\\&M task. Default value: all. Valid values:
   * 
   * *   all: all task levels.
   * *   S0: exception fixing.
   * *   S1: system O\\&M.
   * 
   * @example
   * all
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type.
   * 
   * @example
   * analyticdb
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * am-2ze307ym37t762hnl
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 25.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * ads
   */
  productId?: string;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The status of the O\\&M task. Valid values:
   * 
   * *   \\-1: all statuses.
   * *   3: pending.
   * *   4: executing.
   * 
   * @example
   * -1
   */
  status?: number;
  /**
   * @remarks
   * The type of the O\\&M tasks that you want to query. Set the value to all to query all O\\&M tasks configured by the Alibaba Cloud account.
   * 
   * @example
   * all
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      allowCancel: 'AllowCancel',
      allowChange: 'AllowChange',
      changeLevel: 'ChangeLevel',
      dbType: 'DbType',
      insName: 'InsName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCancel: 'number',
      allowChange: 'number',
      changeLevel: 'string',
      dbType: 'string',
      insName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      status: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

