// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventTimeSeriesMetricRequestFilterConditions } from "./DescribeSecurityEventTimeSeriesMetricRequestFilterConditions";
import { DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange } from "./DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange";


export class DescribeSecurityEventTimeSeriesMetricRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Each object describes a filter condition.
   */
  conditions?: DescribeSecurityEventTimeSeriesMetricRequestFilterConditions[];
  /**
   * @remarks
   * The time range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeSecurityEventTimeSeriesMetricRequestFilterConditions },
      dateRange: DescribeSecurityEventTimeSeriesMetricRequestFilterDateRange,
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

