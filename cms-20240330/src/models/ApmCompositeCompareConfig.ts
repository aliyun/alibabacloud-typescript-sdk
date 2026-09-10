// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmCompositeCompareConfig extends $dara.Model {
  /**
   * @remarks
   * The aggregate functions.
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The comparison operator.
   * 
   * This parameter is required.
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  threshold?: number;
  /**
   * @remarks
   * The year-over-year time unit. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * day
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * 1
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

