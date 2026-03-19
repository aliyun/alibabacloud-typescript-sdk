// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * Backup plan ID. Obtain this parameter\\"s value by calling the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Backup data retention period, in days. Valid values: 0 to 1825.
   * 
   * > Default value: 730 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 730
   */
  backupRetentionPeriod?: number;
  /**
   * @example
   * encrypted
   */
  backupStorageEncryptMethod?: string;
  /**
   * @remarks
   * An arbitrary string used to ensure the idempotence of the request and prevent duplicate submissions.
   * 
   * @example
   * dbstest
   */
  clientToken?: string;
  /**
   * @remarks
   * Time to convert to Archive Storage. This value must be less than the backup data retention period (BackupRetentionPeriod parameter). For more information about Archive Storage, see [Storage Type Overview](https://help.aliyun.com/document_detail/51374.html).
   * 
   * > Default value: 365 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 366
   */
  duplicationArchivePeriod?: number;
  /**
   * @remarks
   * Time to convert to Infrequent Access storage. This value must be less than the Archive Storage period (DuplicationArchivePeriod parameter). For more information about Infrequent Access storage, see [Storage Type Overview](https://help.aliyun.com/document_detail/51374.html).
   * 
   * > Default value: 180 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 190
   */
  duplicationInfrequentAccessPeriod?: number;
  /**
   * @example
   * 365
   */
  incrementBackupRetentionPeriod?: string;
  /**
   * @example
   * 365
   */
  incrementDuplicationArchivePeriod?: string;
  /**
   * @example
   * 365
   */
  incrementDuplicationInfrequentAccessPeriod?: string;
  /**
   * @example
   * 365
   */
  logBackupRetentionPeriod?: string;
  /**
   * @example
   * 365
   */
  logDuplicationArchivePeriod?: string;
  /**
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

