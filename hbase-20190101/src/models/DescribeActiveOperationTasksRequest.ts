// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the task can be canceled. Valid values:
   * 
   * - **0**: The task cannot be canceled.
   * - **1**: The task can be canceled.
   * 
   * @example
   * 1
   */
  allowCancel?: number;
  /**
   * @remarks
   * Specifies whether the time can be modified. Valid values:
   * 
   * - **0**: The time cannot be modified.
   * - **1**: The time can be modified.
   * 
   * @example
   * 1
   */
  allowChange?: number;
  /**
   * @remarks
   * The change level. Valid values:
   * 
   * - **S0**: Exception fix.
   * - **S1**: System O&M.
   * 
   * @example
   * S1
   */
  changeLevel?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **hbaseue**: ApsaraDB for HBase Enhanced Edition.
   * - **hbase**: ApsaraDB for HBase Standard Edition.
   * - **bds**: BDS data synchronization service.
   * 
   * @example
   * hbaseue
   */
  dbType?: string;
  /**
   * @remarks
   * The HBase instance ID.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  insName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records that can be displayed per page. The value must be greater than **10**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The product name. Default value: **hbase**.
   * 
   * @example
   * hbase
   */
  productId?: string;
  /**
   * @remarks
   * The region ID of the event to be processed. You can call [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task running status. Valid values:
   * 
   * - **2**: Waiting for the user to specify a time.
   * - **3**: Waiting for processing.
   * - **4**: Processing.
   * - **5**: Succeeded.
   * - **6**: Failed.
   * - **7**: Canceled.
   * 
   * @example
   * 5
   */
  status?: number;
  /**
   * @remarks
   * The task type. Set the value to **rds_apsaradb_upgrade**, which indicates a minor version upgrade.
   * 
   * @example
   * rds_apsaradb_upgrade
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

