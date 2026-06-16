// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeInterpreterSessionListOut } from "./CodeInterpreterSessionListOut";


export class ListCodeInterpreterSessionResult extends $dara.Model {
  /**
   * @remarks
   * The request status. A value of SUCCESS indicates that the request succeeded. Other values include error codes such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, and `ERR_INTERNAL_SERVER_ERROR`.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * Contains the list of code interpreter sessions.
   * 
   * @example
   * {}
   */
  data?: CodeInterpreterSessionListOut;
  /**
   * @remarks
   * Unique identifier for the request.
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
      data: CodeInterpreterSessionListOut,
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

