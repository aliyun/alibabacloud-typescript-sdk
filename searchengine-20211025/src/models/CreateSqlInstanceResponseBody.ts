// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSqlInstanceResponseBodyResult } from "./CreateSqlInstanceResponseBodyResult";


export class CreateSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * B43CD1BB-ABD7-59C5-B89A-6E5F6FE60A84
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
  result?: CreateSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateSqlInstanceResponseBodyResult,
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

