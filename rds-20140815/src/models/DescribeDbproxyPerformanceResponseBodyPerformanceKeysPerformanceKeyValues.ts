// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue } from "./DescribeDbproxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue";


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues extends $dara.Model {
  performanceValue?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValuesPerformanceValue },
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

