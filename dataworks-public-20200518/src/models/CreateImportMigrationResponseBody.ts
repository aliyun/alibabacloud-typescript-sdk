// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImportMigrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The import task ID. The ID is used as an input parameter if you want the system to run the import task or you want to obtain the running progress of the import task.
   * 
   * @example
   * 123456
   */
  data?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 110001123456
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * ADFASDFASDFA-ADFASDF-ASDFADSDF-AFFADS
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

