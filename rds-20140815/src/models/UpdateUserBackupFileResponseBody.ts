// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserBackupFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user backup ID.
   * 
   * @example
   * b-lvn2365ev9f1****
   */
  backupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29EBB093-DBD8-5EEB-841D-E611B88CDE4B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
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

