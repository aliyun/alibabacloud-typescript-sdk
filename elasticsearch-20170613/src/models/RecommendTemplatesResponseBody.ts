// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecommendTemplatesResponseBodyResult } from "./RecommendTemplatesResponseBodyResult";


export class RecommendTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 66B060CF-7381-49C7-9B89-7757927FDA16
   */
  requestId?: string;
  result?: RecommendTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RecommendTemplatesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

