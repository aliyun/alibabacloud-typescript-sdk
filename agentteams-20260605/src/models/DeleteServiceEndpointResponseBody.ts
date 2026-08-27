// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response code. The value is `SUCCESS` upon success.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The value is `true` when the deletion is successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * **Response message**, which is fixed to `success` upon success.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * **Request ID**, which preferentially uses the `requestId` from the request context, and then the `traceId`.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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

