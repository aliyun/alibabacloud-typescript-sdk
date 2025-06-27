// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSupportLinesResponseBodyRecordLines } from "./DescribeSupportLinesResponseBodyRecordLines";


export class DescribeSupportLinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud DNS lines.
   */
  recordLines?: DescribeSupportLinesResponseBodyRecordLines;
  /**
   * @example
   * CFDA0830-7D6E-4C13-8632-B57C7EDCF079
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordLines: 'RecordLines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordLines: DescribeSupportLinesResponseBodyRecordLines,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recordLines && typeof (this.recordLines as any).validate === 'function') {
      (this.recordLines as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

