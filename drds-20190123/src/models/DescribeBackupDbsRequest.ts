// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupDbsRequest extends $dara.Model {
  /**
   * @remarks
   * Query by backup set ID
   * 
   * @example
   * 201908367
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Query by restoration time.
   * 
   * @example
   * 1568632541236
   */
  preferredRestoreTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      drdsInstanceId: 'DrdsInstanceId',
      preferredRestoreTime: 'PreferredRestoreTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      drdsInstanceId: 'string',
      preferredRestoreTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

