// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem } from "./DescribeDbnodePerformanceResponseBodyPerformanceKeysPerformanceItem";


export class DescribeDBNodePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceItem?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem },
    };
  }

  validate() {
    if(Array.isArray(this.performanceItem)) {
      $dara.Model.validateArray(this.performanceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

