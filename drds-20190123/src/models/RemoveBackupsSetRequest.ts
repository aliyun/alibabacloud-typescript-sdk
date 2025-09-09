// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveBackupsSetRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set. You can call the [DescribeBackupSets](https://help.aliyun.com/document_detail/139331.html) interface to query the ID of a backup set.
   * 
   * This parameter is required.
   * 
   * @example
   * ba30d5c4-a6dc-11ea-bd40-************
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

