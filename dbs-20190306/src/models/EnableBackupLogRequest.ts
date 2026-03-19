// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. Call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * Any string value.
   * 
   * @example
   * dbs
   */
  clientToken?: string;
  /**
   * @example
   * true
   */
  enableMysqlPhysicalBackupBinlog?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      enableMysqlPhysicalBackupBinlog: 'EnableMysqlPhysicalBackupBinlog',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
      enableMysqlPhysicalBackupBinlog: 'string',
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

