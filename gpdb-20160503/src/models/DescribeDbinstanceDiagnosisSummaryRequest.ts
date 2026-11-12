// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDiagnosisSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **20**
   * *   **50**
   * *   **100**
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The role state of the node. It specifies whether a primary/secondary switchover occurs. Valid values:
   * 
   * *   **normal**: The node role is normal. No primary/secondary switchover occurs.
   * *   **reverse**: The node role is reversed. A primary/secondary switchover occurs.
   * 
   * @example
   * normal
   */
  rolePreferd?: string;
  /**
   * @remarks
   * The running state of the node. Valid values:
   * 
   * *   **UP**: The node is running.
   * *   **DOWN**: The node is faulty.
   * 
   * If you do not specify this parameter, the information about nodes in all running states is returned.
   * 
   * @example
   * UP
   */
  startStatus?: string;
  /**
   * @remarks
   * The data synchronization state of the node. Valid values:
   * 
   * *   **synced**: The node data is synchronized.
   * *   **notSyncing**: The node data is not synchronized.
   * 
   * If you do not specify this parameter, the information about nodes in all synchronization states is returned.
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

