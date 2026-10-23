// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppResourcePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. The value 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of deleted permission records.
   * 
   * @example
   * 2
   */
  deletedCount?: number;
  /**
   * @remarks
   * The error message. This field is empty if the request is successful.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      deletedCount: 'deletedCount',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      deletedCount: 'number',
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

