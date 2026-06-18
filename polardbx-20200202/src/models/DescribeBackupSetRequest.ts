// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetRequest extends $dara.Model {
  /**
   * @remarks
   * The backup set ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @remarks
   * The name of the PolarDB-X instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0ori2r****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The destination region for cross-region backup.
   * 
   * @example
   * cn-shanghai
   */
  destCrossRegion?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

