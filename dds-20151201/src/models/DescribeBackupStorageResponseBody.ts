// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The free backup quota for the instance. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  freeSize?: number;
  /**
   * @remarks
   * The storage space used by full backups. Unit: bytes.
   * 
   * > Instances that use cloud disks are backed up using snapshots. The size of a full backup is the total size of the snapshot chain.
   * 
   * @example
   * 789221621
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The storage space used by log backups. Unit: bytes.
   * 
   * @example
   * 7892216
   */
  logStorageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D648B367-15B6-1B42-BD4B-4XXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      freeSize: 'FreeSize',
      fullStorageSize: 'FullStorageSize',
      logStorageSize: 'LogStorageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeSize: 'number',
      fullStorageSize: 'number',
      logStorageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

