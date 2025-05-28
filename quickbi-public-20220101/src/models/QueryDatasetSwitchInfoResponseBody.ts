// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDatasetSwitchInfoResponseBodyResult } from "./QueryDatasetSwitchInfoResponseBodyResult";


export class QueryDatasetSwitchInfoResponseBody extends $dara.Model {
  /**
   * @example
   * FAECEFA8-09BB-58AB-BC58-C8ACEFE4D232
   */
  requestId?: string;
  result?: QueryDatasetSwitchInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryDatasetSwitchInfoResponseBodyResult,
      success: 'boolean',
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

