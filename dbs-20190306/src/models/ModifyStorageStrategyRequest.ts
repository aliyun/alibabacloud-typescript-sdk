// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStorageStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup schedule. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsqdss5tmh****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The number of days for which the backup data is retained. Valid values: 0 to 1825.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * dbstest
   */
  clientToken?: string;
  /**
   * @remarks
   * The number of days after which the storage class of the backup data is changed to Archive. The value of this parameter must be smaller than the value of the BackupRetentionPeriod parameter. For more information about the Archive storage class, see [Storage class overview](https://help.aliyun.com/document_detail/51374.html).
   * 
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
   * The number of days after which the storage class of the backup data is changed to Infrequent Access (IA). The value of this parameter must be smaller than the value of the DuplicationArchivePeriod parameter. For more information about the IA storage class, see [Storage class overview](https://help.aliyun.com/document_detail/51374.html).
   * 
   * > Default value: 180.
   * 
   * This parameter is required.
   * 
   * @example
   * 190
   */
  duplicationInfrequentAccessPeriod?: number;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      backupRetentionPeriod: 'BackupRetentionPeriod',
      clientToken: 'ClientToken',
      duplicationArchivePeriod: 'DuplicationArchivePeriod',
      duplicationInfrequentAccessPeriod: 'DuplicationInfrequentAccessPeriod',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      backupRetentionPeriod: 'number',
      clientToken: 'string',
      duplicationArchivePeriod: 'number',
      duplicationInfrequentAccessPeriod: 'number',
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

