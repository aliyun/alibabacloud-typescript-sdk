// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDiagnosisSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * - **50**
   * - **100**
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The role status of the node, which indicates whether a primary/secondary switchover has occurred. Valid values:
   * 
   * - **normal**: The role status is normal, indicating that no primary/secondary switchover has occurred.
   * - **reverse**: The role is reversed, indicating that a primary/secondary switchover has occurred.
   * 
   * @example
   * normal
   */
  rolePreferd?: string;
  /**
   * @remarks
   * The running status of the node. Valid values:
   * 
   * - **UP**: The node is running.
   * - **DOWN**: The node has failed.
   * 
   * If you do not specify this parameter, information about nodes in all running statuses is returned.
   * 
   * @example
   * UP
   */
  startStatus?: string;
  /**
   * @remarks
   * The synchronization status of the node. Valid values:
   * 
   * - **synced**: The node is synchronized.
   * - **notSyncing**: The node is not synchronized.
   * 
   * If you do not specify this parameter, information about nodes in all synchronization statuses is returned.
   * 
   * @example
   * synced
   */
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rolePreferd: 'RolePreferd',
      startStatus: 'StartStatus',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rolePreferd: 'string',
      startStatus: 'string',
      syncMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

