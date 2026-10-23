// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationPlusAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The identifier of the asynchronous task, which is used for result queries and notification association. Do not use the example prefix as a business validation rule.
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

export class ImageTranslationPlusAsyncResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code for the submission call. A successful call returns success.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The submission result of the asynchronous task for the Plus edition of image translation.
   */
  data?: ImageTranslationPlusAsyncResponseBodyData;
  /**
   * @remarks
   * The error message, such as \\"The content contains sensitive data. Try another input.\\"
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used for troubleshooting and tracing analysis.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the submission call is successful. This does not indicate that the translation is complete. A value of true indicates success, and a value of false indicates failure.
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
      data: ImageTranslationPlusAsyncResponseBodyData,
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

