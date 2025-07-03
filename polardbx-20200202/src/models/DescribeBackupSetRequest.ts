// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r****
   */
  DBInstanceName?: string;
  destCrossRegion?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      DBInstanceName: 'string',
      destCrossRegion: 'string',
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

