// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteSqlInstanceResponseBodyResult } from "./ExecuteSqlInstanceResponseBodyResult";


export class ExecuteSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * FE03180A-0E29-5474-8A86-33F0683294A4
   */
  requestId?: string;
  /**
   * @remarks
   * NodeVO
   */
  result?: ExecuteSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ExecuteSqlInstanceResponseBodyResult,
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

