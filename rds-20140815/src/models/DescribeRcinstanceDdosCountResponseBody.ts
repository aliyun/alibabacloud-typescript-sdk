// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceDdosCountResponseBodyDdosCount } from "./DescribeRcinstanceDdosCountResponseBodyDdosCount";


export class DescribeRCInstanceDdosCountResponseBody extends $dara.Model {
  ddosCount?: DescribeRCInstanceDdosCountResponseBodyDdosCount;
  /**
   * @example
   * F77F3176-AAEA-5836-B2B4-A854E3ED****_Zv**
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosCount: 'DdosCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCount: DescribeRCInstanceDdosCountResponseBodyDdosCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ddosCount && typeof (this.ddosCount as any).validate === 'function') {
      (this.ddosCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

