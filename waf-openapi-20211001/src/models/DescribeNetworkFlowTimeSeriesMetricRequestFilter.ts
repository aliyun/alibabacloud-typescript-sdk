// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions } from "./DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions";
import { DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange } from "./DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange";


export class DescribeNetworkFlowTimeSeriesMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The list of filter conditions. Each node describes a filter condition.
   */
  conditions?: DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions[];
  /**
   * @remarks
   * Specifies the date range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeNetworkFlowTimeSeriesMetricRequestFilterConditions },
      dateRange: DescribeNetworkFlowTimeSeriesMetricRequestFilterDateRange,
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

