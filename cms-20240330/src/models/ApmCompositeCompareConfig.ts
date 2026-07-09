// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmCompositeCompareConfig extends $dara.Model {
  /**
   * @remarks
   * The aggregation method for metric data. For example, `AVG`, `SUM`, or `MAX`.
   * 
   * This parameter is required.
   */
  aggregate?: string;
  /**
   * @remarks
   * The operator for comparing the aggregated metric data against the `threshold`. For example, `GREATER_THAN` or `LESS_THAN`.
   * 
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * The value to compare the aggregated metric data against. An alert is triggered when the metric data meets the condition defined by the `operator`.
   * 
   * This parameter is required.
   */
  threshold?: number;
  /**
   * @remarks
   * The time unit for the year-over-year (YoY) comparison. Use this parameter with `yoyTimeValue` to define the comparison period. Valid values are `day` and `week`.
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The time value for the YoY comparison. For example, if `yoyTimeUnit` is `day` and `yoyTimeValue` is `7`, the system compares current data with data from 7 days ago.
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      aggregate: 'aggregate',
      operator: 'operator',
      threshold: 'threshold',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregate: 'string',
      operator: 'string',
      threshold: 'number',
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

