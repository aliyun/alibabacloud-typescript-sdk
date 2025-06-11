// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendIndexResponseBodyRecommendIndex } from "./DescribeRecommendIndexResponseBodyRecommendIndex";


export class DescribeRecommendIndexResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the recommended index.
   */
  recommendIndex?: DescribeRecommendIndexResponseBodyRecommendIndex;
  /**
   * @remarks
   * The tenant mode.   Valid values:  
   * Oracle   
   * MySQL
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recommendIndex: 'RecommendIndex',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendIndex: DescribeRecommendIndexResponseBodyRecommendIndex,
      requestId: 'string',
    };
  }

  validate() {
    if(this.recommendIndex && typeof (this.recommendIndex as any).validate === 'function') {
      (this.recommendIndex as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

