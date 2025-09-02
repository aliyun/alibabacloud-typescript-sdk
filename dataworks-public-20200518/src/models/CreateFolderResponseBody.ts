// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFolderResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * bdfd68****
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier of the folder.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * The error code returned.
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
      data: 'string',
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

