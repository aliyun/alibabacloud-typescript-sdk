// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableBackupLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to query it.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Ensures idempotence and prevents duplicate requests.
   * 
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  disableMysqlPhysicalBackupBinlogOnly?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      disableMysqlPhysicalBackupBinlogOnly: 'DisableMysqlPhysicalBackupBinlogOnly',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      disableMysqlPhysicalBackupBinlogOnly: 'string',
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

