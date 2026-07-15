// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup ID.
   * 
   * > This parameter is deprecated. To obtain the backup ID, call the [DescribeBackups](https://help.aliyun.com/document_detail/468441.html) operation.
   * 
   * @example
   * 5664****
   */
  backupId?: string;
  /**
   * @remarks
   * The backup job ID.
   * 
   * @example
   * 775051
   */
  backupJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7016B12F-7F64-40A4-BAFF-013F02AC82FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      backupJobId: 'string',
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

