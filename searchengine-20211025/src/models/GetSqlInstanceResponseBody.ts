// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSqlInstanceResponseBodyResult } from "./GetSqlInstanceResponseBodyResult";


export class GetSqlInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 10D5E615-69F7-5F49-B850-00169ADE513C
   */
  requestId?: string;
  /**
   * @remarks
   * InstanceVersionVO
   */
  result?: GetSqlInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetSqlInstanceResponseBodyResult,
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

