// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The retention period of backup data. Unit: days. Valid values: 0 to 1825.
   * 
   * > Default value: 730.
   * 
   * This parameter is required.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * The encryption method for backup data storage.
   * 
   * @example
   * encrypted
   */
  backupStorageEncryptMethod?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions.
   * 
   * @example
   * dbstest
   */
  clientToken?: string;
  /**
   * @remarks
   * The period after which backup data is transitioned to Archive storage. The value must be less than the retention period of backup data (specified by the BackupRetentionPeriod parameter). For more information about Archive storage, see [Storage types](https://help.aliyun.com/document_detail/51374.html).
   * > Default value: 365.
   * 
   * This parameter is required.
   * 
   * @example
   * 366
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * The period after which backup data is transitioned to Infrequent Access storage. The value must be less than the period after which backup data is transitioned to Archive storage (specified by the DuplicationArchivePeriod parameter). For more information about Infrequent Access storage, see [Storage types](https://help.aliyun.com/document_detail/51374.html).
   * > Default value: 180.
   * 
   * This parameter is required.
   * 
   * @example
   * 190
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @remarks
   * The retention period of incremental backup data.
   * 
   * @example
   * 365
   */
  incrementBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The period after which incremental backup data is transitioned to Archive storage.
   * 
   * @example
   * 365
   */
  incrementDuplicationArchivePeriod?: string;
  /**
   * @remarks
   * The period after which incremental backup data is transitioned to Infrequent Access storage.
   * 
   * @example
   * 365
   */
  incrementDuplicationInfrequentAccessPeriod?: string;
  /**
   * @remarks
   * The retention period of log backup data.
   * 
   * @example
   * 365
   */
  logBackupRetentionPeriod?: string;
  /**
   * @remarks
   * The period after which log backup data is transitioned to Infrequent Access storage.
   * 
   * @example
   * 365
   */
  logDuplicationArchivePeriod?: string;
  /**
   * @remarks
   * The period after which log backup data is transitioned to Infrequent Access storage.
   * 
   * @example
   * 365
   */
  logDuplicationInfrequentAccessPeriod?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      backupStorageEncryptMethod: 'BackupStorageEncryptMethod',
      clientToken: 'ClientToken',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      incrementBackupRetentionPeriod: 'IncrementBackupRetentionPeriod',
      incrementDuplicationArchivePeriod: 'IncrementDuplicationArchivePeriod',
      incrementDuplicationInfrequentAccessPeriod: 'IncrementDuplicationInfrequentAccessPeriod',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      logDuplicationArchivePeriod: 'LogDuplicationArchivePeriod',
      logDuplicationInfrequentAccessPeriod: 'LogDuplicationInfrequentAccessPeriod',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupRetentionPeriod: 'number',
      backupStorageEncryptMethod: 'string',
      clientToken: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
      incrementBackupRetentionPeriod: 'string',
      incrementDuplicationArchivePeriod: 'string',
      incrementDuplicationInfrequentAccessPeriod: 'string',
      logBackupRetentionPeriod: 'string',
      logDuplicationArchivePeriod: 'string',
      logDuplicationInfrequentAccessPeriod: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

