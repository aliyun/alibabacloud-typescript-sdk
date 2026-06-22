// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupRestoreCountResponseBodyBackupRestoreCount extends $dara.Model {
  /**
   * @remarks
   * The number of tasks in the **Restoring** state.
   * 
   * @example
   * 3
   */
  recovering?: number;
  /**
   * @remarks
   * The total number of restoration tasks that have been created.
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      recovering: 'Recovering',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recovering: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupRestoreCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of anti-ransomware restoration tasks.
   */
  backupRestoreCount?: DescribeBackupRestoreCountResponseBodyBackupRestoreCount;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * ECC6B3E3-D496-512D-B46D-E6996A6B63EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRestoreCount: 'BackupRestoreCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRestoreCount: DescribeBackupRestoreCountResponseBodyBackupRestoreCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backupRestoreCount && typeof (this.backupRestoreCount as any).validate === 'function') {
      (this.backupRestoreCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

