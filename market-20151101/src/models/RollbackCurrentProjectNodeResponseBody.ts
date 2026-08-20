// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackCurrentProjectNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ee69a00f-189b-400f-9fd2-af89749fb50f
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * The success status identifier.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

