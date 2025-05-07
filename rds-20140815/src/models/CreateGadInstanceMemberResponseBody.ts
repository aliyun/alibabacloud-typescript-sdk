// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateGadInstanceMemberResponseBodyResult } from "./CreateGadInstanceMemberResponseBodyResult";


export class CreateGadInstanceMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16C62438-491B-5C02-9B49-BA924A1372A2
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the information returned.
   */
  result?: CreateGadInstanceMemberResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateGadInstanceMemberResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

