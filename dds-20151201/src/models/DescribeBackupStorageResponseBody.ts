// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The free quota for the storage capacity used for backup. Unit: bytes.
   * 
   * @example
   * 42949672960
   */
  freeSize?: number;
  /**
   * @remarks
   * The storage capacity used for the full backup. Unit: bytes.
   * 
   * >  Instances that use cloud disks support snapshot backup. The size of the storage used for the current full backup is the size of the snapshot chain.
   * 
   * @example
   * 789221621
   */
  fullStorageSize?: number;
  /**
   * @remarks
   * The storage capacity used for the log backup. Unit: bytes.
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

