// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the cancellation operation. Valid values:
   * 
   * *   **0**: The cancellation operation is not allowed.
   * *   **1**: The cancellation operation is allowed.
   * 
   * @example
   * ***
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether to allow the modification operation. Valid values:
   * 
   * *   **0**: The modification operation is not allowed.
   * *   **1**: The modification operation is allowed.
   * 
   * @example
   * -1
   */
  allowChange?: number;
  /**
   * @remarks
   * The type of task configuration change. Valid values:
   * 
   * *   **all** (default): The configurations of all O\\&M tasks are changed.
   * *   **S0**: The configurations of tasks initiated to fix exceptions are changed.
   * *   **S1**: The configurations of system O\\&M tasks are changed.
   * 
   * @example
   * ***
   */
  changeLevel?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * ***
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * dds-bp16aaccfe10e3e4
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Specify the parameter to a positive integer that is greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * ***
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  If you set the Region parameter to **all**, all tasks created within your Alibaba Cloud account are queried. In this case, you must set the **taskType** parameter to **all**.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: waiting for execution
   * *   **1**: being executed
   * *   **2**: successful
   * *   **3**: failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * ***
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
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

