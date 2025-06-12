// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendInstanceTypeResponseBodyData } from "./DescribeRecommendInstanceTypeResponseBodyData";


export class DescribeRecommendInstanceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the recommended instance types.
   */
  data?: DescribeRecommendInstanceTypeResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRecommendInstanceTypeResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

