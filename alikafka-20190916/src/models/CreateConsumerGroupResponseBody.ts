// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E57A8862-DF68-4055-8E55-B80CB4****
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

