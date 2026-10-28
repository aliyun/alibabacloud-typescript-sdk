// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code that indicates whether the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the customer is created. If the value is true, the Message contains the CID.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The same as the Code parameter.
   * 
   * @example
   * 12345
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud uses this ID for error tracking.
   * 
   * @example
   * A9B725C7-3DBD-576B-AC91-F6F22AB99A77
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call is successful. Valid values:
   * - True
   * - False
   * 
   * This does not indicate whether the subsequent business operation is successful.
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
      data: 'boolean',
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

