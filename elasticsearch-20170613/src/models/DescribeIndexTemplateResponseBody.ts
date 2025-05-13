// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIndexTemplateResponseBodyResult } from "./DescribeIndexTemplateResponseBodyResult";


export class DescribeIndexTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 25DB38F8-82E4-4D16-82BB-FF077C7F****
   */
  requestId?: string;
  result?: DescribeIndexTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeIndexTemplateResponseBodyResult,
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

