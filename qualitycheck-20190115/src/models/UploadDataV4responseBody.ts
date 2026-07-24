// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadDataV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of 200 indicates success. Other values indicate failure. You can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The taskId of the task.
   * 
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  data?: string;
  /**
   * @remarks
   * The error details when the request fails. The value is "successful" when the request succeeds.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID. A unique identifier for the request that can be used to locate and trace the request.
   * 
   * @example
   * 6F5934C7-C223-4F0F-BBF3-5B3594***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true: successful. false/null: failed.
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

