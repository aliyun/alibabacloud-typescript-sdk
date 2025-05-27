// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Remote error. requestId: [78B66E68-E778-1F33-84BD-xxxx], error code: [EventSourceNotExist], message: [The event source in request is not exist! ]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5f80e9b3-98d5-4f51-8412-c758818a03e4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
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
      code: 'string',
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

