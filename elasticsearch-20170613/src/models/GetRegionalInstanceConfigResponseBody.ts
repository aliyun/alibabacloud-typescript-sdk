// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionalInstanceConfigResponseBodyResult } from "./GetRegionalInstanceConfigResponseBodyResult";


export class GetRegionalInstanceConfigResponseBody extends $dara.Model {
  requestId?: string;
  result?: GetRegionalInstanceConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRegionalInstanceConfigResponseBodyResult,
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

