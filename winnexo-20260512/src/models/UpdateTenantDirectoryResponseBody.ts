// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTenantDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. If the request fails, a specific business error code is returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business ID of the updated directory. You can refresh the configuration content by calling the corresponding configuration read API operation.
   * 
   * @example
   * kb-example
   */
  directoryId?: string;
  /**
   * @remarks
   * The response message. The value is success if the request is successful. If the request fails, the message describes the cause of the error.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID. You can use this ID to troubleshoot issues related to this call.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      message: 'string',
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

