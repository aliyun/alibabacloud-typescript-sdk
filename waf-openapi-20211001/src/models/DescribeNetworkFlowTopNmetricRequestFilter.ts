// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkFlowTopNMetricRequestFilterConditions } from "./DescribeNetworkFlowTopNmetricRequestFilterConditions";
import { DescribeNetworkFlowTopNMetricRequestFilterDateRange } from "./DescribeNetworkFlowTopNmetricRequestFilterDateRange";


export class DescribeNetworkFlowTopNMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions. Each node describes a filter condition.
   */
  conditions?: DescribeNetworkFlowTopNMetricRequestFilterConditions[];
  /**
   * @remarks
   * Specifies the date range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeNetworkFlowTopNMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeNetworkFlowTopNMetricRequestFilterConditions },
      dateRange: DescribeNetworkFlowTopNMetricRequestFilterDateRange,
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

