// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSqlDryRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data returned by the operation (in string format). The specific content varies by operation.
   * 
   * @example
   * demo
   */
  data?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * None
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * not supported.pos 14327, line 452, column 10, token IDENTIFIER dialect_type
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CFD7C81E-1A53-5C7C-846D-381BC1C4385F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMessage: 'string',
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

