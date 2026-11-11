// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableBackupLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. To get this ID, call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01****
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCziJZNwH****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disable only the log backup feature for a physical backup of a MySQL database.
   * 
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

