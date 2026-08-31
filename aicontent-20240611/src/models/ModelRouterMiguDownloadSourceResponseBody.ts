// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MiguSourceDownloadDTO } from "./MiguSourceDownloadDto";


export class ModelRouterMiguDownloadSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * {}
   */
  data?: MiguSourceDownloadDTO;
  /**
   * @remarks
   * The business error code. This value is passed through as-is from the console and is not mapped to platform standard error codes. Valid values: ERROR_PARAMETERS: Missing or invalid parameters. ERROR_NOT_FOUND: The source file does not exist or does not belong to the current account. ERROR_SOURCE_TRANSFERRING: The source file is being transferred. ERROR_SOURCE_EXPIRED: The source file has expired. ERROR_SERVER_INTERNAL: Internal error.
   * 
   * @example
   * ERROR_NOT_FOUND
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Unknown error
   */
  errMessage?: string;
  /**
   * @remarks
   * The business status code. Valid values: 0: Success. 400/403/404/409/410/500: Business error. Refer to errCode for details.
   * 
   * @example
   * 0
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxxx-xxxx-xxxxxxxx
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
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MiguSourceDownloadDTO,
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

