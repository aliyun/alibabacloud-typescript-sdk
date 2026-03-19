// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup plan. You can call the [DescribeBackupPlanList](https://help.aliyun.com/document_detail/2869825.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01xxxx
   */
  backupPlanId?: string;
  /**
   * @remarks
   * An arbitrary string.
   * 
   * @example
   * dbs
   */
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPlanId: 'string',
      clientToken: 'string',
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

