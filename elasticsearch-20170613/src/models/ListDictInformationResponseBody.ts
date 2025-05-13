// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDictInformationResponseBodyResult } from "./ListDictInformationResponseBodyResult";


export class ListDictInformationResponseBody extends $dara.Model {
  /**
   * @example
   * 7C4334EA-D22B-48BD-AE28-08EE68******
   */
  requestId?: string;
  result?: ListDictInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDictInformationResponseBodyResult,
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

