// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. The value `OK` is returned if the request succeeds.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value `200` is returned if the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. The value `success` is returned if the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true and false.
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID. Use this ID to call the GetImageTaskResult operation to query the results.
   * 
   * @example
   * f47ac10b-58cc-4372-a567-0e02b2c3d479
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

