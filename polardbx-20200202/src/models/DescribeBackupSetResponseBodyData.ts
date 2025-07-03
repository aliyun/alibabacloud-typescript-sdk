// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupSetResponseBodyDataOSSList } from "./DescribeBackupSetResponseBodyDataOsslist";


export class DescribeBackupSetResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  backupModel?: number;
  /**
   * @example
   * 111
   */
  backupSetId?: number;
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
   * 1650250861754
   */
  beginTime?: number;
  /**
   * @example
   * 1650251308000
   */
  endTime?: number;
  OSSList?: DescribeBackupSetResponseBodyDataOSSList[];
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
      OSSList: 'OSSList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupModel: 'number',
      backupSetId: 'number',
      backupSetSize: 'number',
      backupType: 'number',
      beginTime: 'number',
      endTime: 'number',
      OSSList: { 'type': 'array', 'itemType': DescribeBackupSetResponseBodyDataOSSList },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.OSSList)) {
      $dara.Model.validateArray(this.OSSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

