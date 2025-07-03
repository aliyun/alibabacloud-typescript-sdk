// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  backupType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      DBInstanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

