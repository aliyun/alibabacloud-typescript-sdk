// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeInterpreter } from "./CodeInterpreter";


export class CodeInterpreterResult extends $dara.Model {
  /**
   * @remarks
   * The result code of the operation. A value of `SUCCESS` indicates success, while a failed operation returns an error type such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Details about the code interpreter.
   * 
   * @example
   * {}
   */
  data?: CodeInterpreter;
  /**
   * @remarks
   * The unique request identifier, used for troubleshooting.
   * 
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CodeInterpreter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

