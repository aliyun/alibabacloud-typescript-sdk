// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  backupModel?: number;
  /**
   * @example
   * 111
   */
  backupSetId?: string;
  /**
   * @example
   * 88803195
   */
  backupSetSize?: number;
  /**
   * @example
   * 1
   */
  backupType?: number;
  /**
   * @example
   * 1635706960956
   */
  beginTime?: number;
  /**
   * @example
   * 1635706960956
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      backupModel: 'BackupModel',
      backupSetId: 'BackupSetId',
      backupSetSize: 'BackupSetSize',
      backupType: 'BackupType',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'string',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

