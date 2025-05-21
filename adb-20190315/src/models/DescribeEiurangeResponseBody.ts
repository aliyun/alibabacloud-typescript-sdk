// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEIURangeResponseBodyEIUInfo } from "./DescribeEiurangeResponseBodyEiuinfo";


export class DescribeEIURangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried information about the number of EIUs.
   */
  EIUInfo?: DescribeEIURangeResponseBodyEIUInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EIUInfo: 'EIUInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EIUInfo: DescribeEIURangeResponseBodyEIUInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.EIUInfo && typeof (this.EIUInfo as any).validate === 'function') {
      (this.EIUInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

