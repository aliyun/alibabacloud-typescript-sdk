// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 06084011-E093-46F3-A51F-4B19A8AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

