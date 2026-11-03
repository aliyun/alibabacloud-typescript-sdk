// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentTranslateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the asynchronous task, which is used to query the task status and results later.
   * 
   * @example
   * 6071a030-5c92-9df1-96d0-44952343439a
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DocumentTranslateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. This parameter is not returned when the call is successful.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The asynchronous task information.
   */
  data?: DocumentTranslateResponseBodyData;
  /**
   * @remarks
   * The error message, such as "The parameter contains sensitive information. Try another input."
   * This parameter is not returned when the call is successful.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting and tracing analysis.
   * 
   * @example
   * 39E8A74B-F99E-1195-A5FF-3ECC5F94F304
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call fails.
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
      data: DocumentTranslateResponseBodyData,
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

