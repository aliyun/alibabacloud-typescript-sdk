// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey } from "./DescribeDbproxyPerformanceResponseBodyPerformanceKeysPerformanceKey";


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceKey?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey },
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

