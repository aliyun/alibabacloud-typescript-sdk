// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code indicating whether the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data indicating whether a customer was successfully created. If it\\"s "true", the Message contains CID.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Massage indicating whether the call was successful.
   * 
   * @example
   * 12345
   */
  message?: string;
  /**
   * @remarks
   * Request ID, Alibaba Cloud will track errors with this.
   * 
   * @example
   * A9B725C7-3DBD-576B-AC91-F6F22AB99A77
   */
  requestId?: string;
  /**
   * @remarks
   * Candidate Value: True/False, which indicates whether the current API call it self was successful. It does not guarantee the success of subsequent business operations.
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

