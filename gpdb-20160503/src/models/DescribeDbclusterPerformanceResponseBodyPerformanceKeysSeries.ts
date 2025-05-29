// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues } from "./DescribeDbclusterPerformanceResponseBodyPerformanceKeysSeriesValues";


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the compute node or compute group.
   * 
   * @example
   * standby-********-cpu
   */
  name?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **master**: primary coordinator node
   * *   **standby**: standby coordinator node
   * *   **segment**: compute node
   * 
   * @example
   * standby
   */
  role?: string;
  /**
   * @remarks
   * The value of the performance metric collected at a point in time.
   */
  values?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

