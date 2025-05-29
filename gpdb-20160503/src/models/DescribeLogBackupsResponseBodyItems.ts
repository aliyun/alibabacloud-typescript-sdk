// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogBackupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup set.
   * 
   * @example
   * 12413721782
   */
  backupId?: string;
  /**
   * @remarks
   * The ID of the coordinator node.
   * 
   * @example
   * gp-bp12ga6v69h86****-master
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the log backup set that is stored in Object Storage Service (OSS).
   * 
   * @example
   * 000000010000000400000012
   */
  logFileName?: string;
  /**
   * @remarks
   * The size of the log backup set. Unit: bytes.
   * 
   * @example
   * 77350
   */
  logFileSize?: number;
  /**
   * @remarks
   * The timestamp of the log.
   * 
   * @example
   * 2022-12-12T02:14:26Z
   */
  logTime?: string;
  /**
   * @remarks
   * The name of the compute node.
   * 
   * @example
   * segment-0
   */
  segmentName?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      DBInstanceId: 'DBInstanceId',
      logFileName: 'LogFileName',
      logFileSize: 'LogFileSize',
      logTime: 'LogTime',
      segmentName: 'SegmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      DBInstanceId: 'string',
      logFileName: 'string',
      logFileSize: 'number',
      logTime: 'string',
      segmentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

