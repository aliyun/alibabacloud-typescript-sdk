// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCountriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. Valid values:
   * - 200: OK.
   * - 1109: System error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of region codes.
   */
  data?: string[];
  /**
   * @remarks
   * The message information.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud uses this ID for error tracking.
   * 
   * @example
   * A747A00F-E096-5244-88B3-3E474BAE3AE4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call itself is successful. Valid values: True and False. This does not indicate the success of subsequent business operations.
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
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

