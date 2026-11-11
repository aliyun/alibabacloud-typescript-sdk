// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupLogRequest extends $dara.Model {
  /**
   * @remarks
   * The backup plan ID. Call [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi******
   */
  backupPlanId?: string;
  /**
   * @remarks
   * A client-generated token that ensures the idempotency of the request.
   * 
   * @example
   * dbs
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable log backup for MySQL physical backups. Set the value to `true` to enable this feature.
   * 
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

