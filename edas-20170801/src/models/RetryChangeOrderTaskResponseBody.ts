// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryChangeOrderTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API call or a POP error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Information about the retry.
   * 
   * @example
   * success retry task
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4823-bhjf-23u4-eiufh
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

