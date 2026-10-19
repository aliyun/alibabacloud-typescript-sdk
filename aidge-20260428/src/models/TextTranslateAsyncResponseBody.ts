// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateAsyncResponseBodyData extends $dara.Model {
  /**
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
   * @example
   * success
   */
  code?: string;
  data?: TextTranslateAsyncResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
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

