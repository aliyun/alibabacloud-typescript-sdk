// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return historical tasks. Valid values:
   * * **0**: returns current tasks. This is the default value.
   * * **1**: returns historical tasks.
   * 
   * @example
   * 1
   */
  isHistory?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. The value must be greater than **10**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the pending events belong. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID.
   * > A value of **all** specifies all region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * all
   */
  region?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **rds_apsaradb_ha**: switch of primary and secondary nodes.
   * - **rds_apsaradb_transfer**: instance migration.
   * - **rds_apsaradb_upgrade**: minor version update.
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
      region: 'Region',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
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
      region: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
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

