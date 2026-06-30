// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 indicates success. Other values indicate failure. Use this field to determine the cause of a failure.
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
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  data?: string;
  /**
   * @remarks
   * The details of the error if the request fails. If the request is successful, the value is "successful".
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. This is a unique identifier for the request that can be used for tracking.
   * 
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Use this field to determine if the request succeeded. A value of true indicates success. A value of false or null indicates failure.
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

