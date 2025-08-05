// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaRestoresRequest extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * @example
   * 1632754800158
   */
  backupId?: number;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-000b******soejg
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
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
   * The number of entries per page. Valid values: 1 to 99. Default value: 10.\\`
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm4ebtpkzx7zy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the restore job.
   * 
   * @example
   * r-0007o3vqfukfe92hvf13
   */
  restoreId?: string;
  /**
   * @remarks
   * The status of the restore job. Valid values:
   * 
   * *   **RUNNING**: The job is running.
   * *   **COMPLETE**: The job is completed.
   * *   **PARTIAL_COMPLETE**: The job is partially completed.
   * *   **FAILED**: The job failed.
   * *   **CANCELED**: The job is canceled.
   * *   **EXPIRED**: The job timed out.
   * 
   * @example
   * COMPLETE
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-000au6bq******mpu
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      restoreId: 'RestoreId',
      restoreStatus: 'RestoreStatus',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      clusterId: 'string',
      databaseName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      restoreId: 'string',
      restoreStatus: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

