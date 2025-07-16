// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBodyData extends $dara.Model {
  backupSetId?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupResponseBody extends $dara.Model {
  data?: CreateBackupResponseBodyData;
  /**
   * @example
   * *****
   */
  message?: string;
  /**
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateBackupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

