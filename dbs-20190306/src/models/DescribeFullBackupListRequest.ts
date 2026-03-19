// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullBackupListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsr179qz******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 1iukx5h******
   */
  backupSetId?: string;
  /**
   * @example
   * finish
   */
  backupSetStatus?: string;
  /**
   * @remarks
   * A token that ensures idempotence and prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the backup, in UNIX timestamp format.
   * 
   * @example
   * 1676887128
   */
  endTimestamp?: number;
  ownerId?: string;
  /**
   * @remarks
   * The page number. Valid values: integers from 0 to the maximum integer value. Default value: 0.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * 
   * - 50
   * 
   * - 100
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  showProgress?: string;
  /**
   * @remarks
   * Specifies whether to return the storage class.
   * 
   * @example
   * true
   */
  showStorageType?: boolean;
  /**
   * @remarks
   * The start time of the backup.
   * 
   * @example
   * 1676887100
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupSetId: 'BackupSetId',
      backupSetStatus: 'BackupSetStatus',
      clientToken: 'ClientToken',
      endTimestamp: 'EndTimestamp',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      showProgress: 'ShowProgress',
      showStorageType: 'ShowStorageType',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupSetId: 'string',
      backupSetStatus: 'string',
      clientToken: 'string',
      endTimestamp: 'number',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      showProgress: 'string',
      showStorageType: 'boolean',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

