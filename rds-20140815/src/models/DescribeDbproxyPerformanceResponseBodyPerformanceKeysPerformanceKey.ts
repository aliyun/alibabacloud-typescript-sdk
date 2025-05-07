// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues } from "./DescribeDbproxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues";


export class DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
  /**
   * @remarks
   * The performance parameter.
   * 
   * @example
   * cpu_ratio
   */
  key?: string;
  node?: string;
  /**
   * @remarks
   * The service dimension.
   * 
   * @example
   * reserve_3
   */
  service?: string;
  /**
   * @remarks
   * The format in which the value of the performance metric is returned.
   * 
   * @example
   * docker_container_cpu
   */
  valueFormat?: string;
  /**
   * @remarks
   * The performance metrics.
   */
  values?: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      node: 'Node',
      service: 'Service',
      valueFormat: 'ValueFormat',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      node: 'string',
      service: 'string',
      valueFormat: 'string',
      values: DescribeDBProxyPerformanceResponseBodyPerformanceKeysPerformanceKeyValues,
    };
  }

  validate() {
    if(this.values && typeof (this.values as any).validate === 'function') {
      (this.values as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

