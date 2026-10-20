// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. It is used for result queries and notification association. Do not use the example prefix as a business validation rule.
   * 
   * @example
   * TID_550e8400-e29b-41d4-a716-446655440000
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

export class TextTranslateAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code of the submission call. Example: success.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result of the text translation asynchronous node.
   */
  data?: TextTranslateAsyncResponseBodyData;
  /**
   * @remarks
   * The invocation message. Example of a successful call: Success. If the call fails, check the actual error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the submission request. It is used for troubleshooting.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the submission call is successful. A successful call does not mean that the translation is complete.
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
      data: TextTranslateAsyncResponseBodyData,
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

