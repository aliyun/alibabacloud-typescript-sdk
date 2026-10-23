// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationProAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This ID is used to query results and associate notifications. Do not use the example prefix as a business validation rule.
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

export class ImageTranslationProAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of success indicates that the task is submitted.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result of the Image Translation Pro asynchronous task.
   */
  data?: ImageTranslationProAsyncResponseBodyData;
  /**
   * @remarks
   * The call description. A value of Success indicates a successful call. If the call fails, read the actual error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the submission request. This ID is used for troubleshooting.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the submission call is successful. This does not indicate that the translation is complete.
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
      data: ImageTranslationProAsyncResponseBodyData,
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

