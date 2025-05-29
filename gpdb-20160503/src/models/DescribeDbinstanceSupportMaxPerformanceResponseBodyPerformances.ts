// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance } from "./DescribeDbinstanceSupportMaxPerformanceResponseBodyPerformancesPerformance";


export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances extends $dara.Model {
  performance?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance[];
  static names(): { [key: string]: string } {
    return {
      performance: 'Performance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performance: { 'type': 'array', 'itemType': DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance },
    };
  }

  validate() {
    if(Array.isArray(this.performance)) {
      $dara.Model.validateArray(this.performance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

