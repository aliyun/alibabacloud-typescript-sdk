// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadAudioDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 indicates success. Any other value indicates failure. You can use this field to determine the cause of the failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task ID. This ID is used when you obtain the task result.
   * 
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5***
   */
  data?: string;
  /**
   * @remarks
   * The error message. If the request fails, this field displays the error details. If the request is successful, the value is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. This ID uniquely identifies the request.
   * 
   * @example
   * 76DB5D8C-5BD9-42A7-B527-5AF3A5F8***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. You can use this field to determine whether the request is successful. A value of true indicates success. A value of false or null indicates failure.
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
      data: 'string',
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

