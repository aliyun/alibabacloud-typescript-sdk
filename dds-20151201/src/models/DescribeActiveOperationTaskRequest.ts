// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return the historical tasks. 
   * 
   * Default value: 0. Valid values:
   * 
   * - 0: returns the current task.
   * - 1: returns the historical tasks.
   * 
   * @example
   * 0
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Specify a value greater than 10. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * MongoDB
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  If you set the Region parameter to **all**, all tasks created within your Alibaba Cloud account are queried. In this case, you must set the **taskType** parameter to **all**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * - rds_apsaradb_ha: master-replica switchover
   * - rds_apsaradb_transfer: instance migration
   * - rds_apsaradb_upgrade: minor version update
   * 
   * This parameter is required.
   * 
   * @example
   * rds_apsaradb_ha
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      isHistory: 'IsHistory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isHistory: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      region: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

