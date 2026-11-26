// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigNumListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The list of phone numbers.
   */
  data?: string[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE339D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded. Valid values:
   * - **true**: The call succeeded.
   * - **false**: The call failed.
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

