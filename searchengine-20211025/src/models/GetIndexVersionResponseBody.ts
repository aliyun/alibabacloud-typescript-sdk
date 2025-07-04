// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexVersionResponseBodyResult } from "./GetIndexVersionResponseBodyResult";


export class GetIndexVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
  result?: GetIndexVersionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetIndexVersionResponseBodyResult,
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

