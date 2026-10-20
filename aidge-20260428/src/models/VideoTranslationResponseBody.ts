// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoTranslationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. You can use this ID for subsequent queries.
   * 
   * @example
   * 0ea3b66e88a543658520c994f08896a0
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

export class VideoTranslationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Processing
   */
  code?: string;
  /**
   * @remarks
   * The result of the asynchronous task submission.
   */
  data?: VideoTranslationResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Translation processing
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * req_20260608_jkl012
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: `true` (successful) and `false` (failed).
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
      data: VideoTranslationResponseBodyData,
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

