// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Error extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * FunctionNotFound
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * function not found
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1-64e70cf1-5cbef92ea8fc8c42899cf5d1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

