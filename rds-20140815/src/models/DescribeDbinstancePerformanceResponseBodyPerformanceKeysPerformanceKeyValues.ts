// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue } from "./DescribeDbinstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue";


export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $dara.Model {
  performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue },
    };
  }

  validate() {
    if(Array.isArray(this.performanceValue)) {
      $dara.Model.validateArray(this.performanceValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

