// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataSourceDeployResponseBodyResult } from "./GetDataSourceDeployResponseBodyResult";


export class GetDataSourceDeployResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetDataSourceDeployResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetDataSourceDeployResponseBodyResult,
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

