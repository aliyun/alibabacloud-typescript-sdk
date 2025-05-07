// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey } from "./DescribeDbinstancePerformanceResponseBodyPerformanceKeysPerformanceKey";


export class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceKey?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  validate() {
    if(Array.isArray(this.performanceKey)) {
      $dara.Model.validateArray(this.performanceKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

