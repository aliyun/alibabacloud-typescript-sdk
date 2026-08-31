// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MiguSourceUploadDTO } from "./MiguSourceUploadDto";


export class ModelRouterMiguUploadSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   * 
   * @example
   * {}
   */
  data?: MiguSourceUploadDTO;
  /**
   * @remarks
   * The business error code. The console passes through the original value without mapping to standard platform error codes. Valid values:
   * - ERROR_PARAMETERS: Missing or invalid parameters.
   * - ERROR_SERVER_INTERNAL: Internal error.
   * 
   * @example
   * ERROR_PARAMETERS
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
   * The business status code. Valid values:
   * - 0: Success.
   * - 400/403/500: Business error. For details, see errCode.
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
   * Indicates whether the request is successful.
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
      data: MiguSourceUploadDTO,
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

