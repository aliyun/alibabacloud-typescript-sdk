// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmCompositeCompareConfig extends $dara.Model {
  /**
   * @remarks
   * The aggregate functions used for aggregation.
   * 
   * This parameter is required.
   */
  aggregate?: string;
  /**
   * @remarks
   * The comparison operator. GTE/LTE indicates greater than or equal to/less than or equal to. YOY_UP/YOY_DOWN indicates year-over-year increase/decrease, which requires yoyTimeUnit and yoyTimeValue to be specified.
   * 
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * This parameter is required.
   */
  threshold?: number;
  /**
   * @remarks
   * The year-over-year time unit. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
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

