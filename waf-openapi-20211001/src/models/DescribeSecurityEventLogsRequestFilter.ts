// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventLogsRequestFilterConditions } from "./DescribeSecurityEventLogsRequestFilterConditions";
import { DescribeSecurityEventLogsRequestFilterDateRange } from "./DescribeSecurityEventLogsRequestFilterDateRange";


export class DescribeSecurityEventLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Each object describes a filter condition.
   */
  conditions?: DescribeSecurityEventLogsRequestFilterConditions[];
  /**
   * @remarks
   * The time range for the query.
   * 
   * This parameter is required.
   */
  dateRange?: DescribeSecurityEventLogsRequestFilterDateRange;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      dateRange: 'DateRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeSecurityEventLogsRequestFilterConditions },
      dateRange: DescribeSecurityEventLogsRequestFilterDateRange,
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

