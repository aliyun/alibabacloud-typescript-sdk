// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 0AA6C15C-FD61-1E32-9881-480CC6F35A70
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

