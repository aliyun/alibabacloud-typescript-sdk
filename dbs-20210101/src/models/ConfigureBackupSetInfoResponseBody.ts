// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConfigureBackupSetInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * ee-d84wwm3ca****
   */
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

export class ConfigureBackupSetInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ConfigureBackupSetInfoResponseBodyData;
  /**
   * @example
   * Request.Forbidden
   */
  errCode?: string;
  /**
   * @example
   * The specified parameter %s value is not valid.
   */
  errMessage?: string;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 54A63B3B-AA10-1CC3-A6BB-6CCE98D1****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ConfigureBackupSetInfoResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

