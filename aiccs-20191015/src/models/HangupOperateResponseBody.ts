// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HangupOperateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of \\"OK\\" indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * OK
   */
  mesage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFD543DD-E087-54A2-AC0B-54E0656511D7
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * - **true**: The hang-up was successful.
   * 
   * - **false**: The hang-up operation failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mesage: 'Mesage',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mesage: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

