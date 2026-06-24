// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DCC****
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation. Valid values:
   * 
   * - true: The scale-in operation succeeded.
   * - false: The scale-in operation failed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

