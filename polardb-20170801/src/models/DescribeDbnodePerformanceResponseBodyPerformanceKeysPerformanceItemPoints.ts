// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue } from "./DescribeDbnodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue";


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
  performanceItemValue?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
    };
  }

  validate() {
    if(Array.isArray(this.performanceItemValue)) {
      $dara.Model.validateArray(this.performanceItemValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

