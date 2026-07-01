// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. Valid values:
   * 
   * - true: Invocation succeeded
   * 
   * - false: Failed to invoke
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

