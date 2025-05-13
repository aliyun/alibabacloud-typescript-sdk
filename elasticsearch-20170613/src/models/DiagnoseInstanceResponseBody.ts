// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiagnoseInstanceResponseBodyResult } from "./DiagnoseInstanceResponseBodyResult";


export class DiagnoseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values: Supported: SUCCESS, FAILED, and RUNNING.
   */
  result?: DiagnoseInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DiagnoseInstanceResponseBodyResult,
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

