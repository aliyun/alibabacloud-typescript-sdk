// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues } from "./DescribeDbinstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues";


export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * MySQL_Sessions
   */
  key?: string;
  /**
   * @remarks
   * The unit of the performance metrics.
   * 
   * @example
   * KB
   */
  unit?: string;
  /**
   * @remarks
   * The format in which the value of the performance metric is returned.
   * 
   * >  If a performance metric value consists of multiple fields, the values are separated with ampersands (&). Example: com_delete\\&com_insert\\&com_insert_select\\&com_replace.
   * 
   * @example
   * recv_k&sent_k
   */
  valueFormat?: string;
  /**
   * @remarks
   * The performance metric values.
   */
  values?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      valueFormat: 'ValueFormat',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      valueFormat: 'string',
      values: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyValues,
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

