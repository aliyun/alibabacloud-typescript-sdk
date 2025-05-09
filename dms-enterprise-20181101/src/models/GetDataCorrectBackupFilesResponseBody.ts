// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles } from "./GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles";


export class GetDataCorrectBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download URL of the backup file for the ticket.
   */
  dataCorrectBackupFiles?: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4AFF4109-FEFB-44E8-96A3-923B1FA8C46E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataCorrectBackupFiles: 'DataCorrectBackupFiles',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCorrectBackupFiles: GetDataCorrectBackupFilesResponseBodyDataCorrectBackupFiles,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataCorrectBackupFiles && typeof (this.dataCorrectBackupFiles as any).validate === 'function') {
      (this.dataCorrectBackupFiles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

