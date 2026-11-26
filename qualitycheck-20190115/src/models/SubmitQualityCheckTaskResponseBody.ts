// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityCheckTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success, and other values indicate failure. You can determine the cause of the failure based on this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * F6C2B68F-2311-4495-82AC-DAE86C9****
   */
  data?: string;
  /**
   * @remarks
   * The error details when an error occurs, or successful when the request is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 00A044A2-D59B-4104-96BA-84060AE8345F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. You can determine whether the request is successful based on this field. A value of true indicates success, and a value of false or null indicates failure.
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

