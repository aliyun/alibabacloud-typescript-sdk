// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTranslationTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The translation task ID.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

export class SubmitTranslationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: SubmitTranslationTaskResponseBodyData;
  /**
   * @remarks
   * The return message.
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
   * F6E6D23C-D6FC-5AD4-B90B-1E32850393AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: SubmitTranslationTaskResponseBodyData,
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

