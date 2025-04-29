// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType } from "./DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType";


export class DescribeRecommendInstanceTypeResponseBodyData extends $dara.Model {
  recommendInstanceType?: DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType[];
  static names(): { [key: string]: string } {
    return {
      recommendInstanceType: 'RecommendInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recommendInstanceType: { 'type': 'array', 'itemType': DescribeRecommendInstanceTypeResponseBodyDataRecommendInstanceType },
    };
  }

  validate() {
    if(Array.isArray(this.recommendInstanceType)) {
      $dara.Model.validateArray(this.recommendInstanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

