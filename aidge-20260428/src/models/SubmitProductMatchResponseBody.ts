// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProductMatchResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task acceptance time in ISO 8601 UTC format.
   * 
   * @example
   * 2026-08-20T09:30:00Z
   */
  submittedAt?: string;
  /**
   * @remarks
   * The asynchronous task ID used for QueryAsyncTaskResult queries.
   * 
   * @example
   * b7ea15cb609f47b7999d2d68dfbf3c90
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      submittedAt: 'SubmittedAt',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submittedAt: 'string',
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

export class SubmitProductMatchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The submit result of the matching product identification asynchronous task.
   */
  data?: SubmitProductMatchResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * True
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
      data: SubmitProductMatchResponseBodyData,
      message: 'string',
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

