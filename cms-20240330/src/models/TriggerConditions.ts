// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerConditions extends $dara.Model {
  /**
   * @remarks
   * The expression type, fixed as SIMPLE (used by MetricSet multi-threshold triggers).
   */
  expressionType?: string;
  /**
   * @remarks
   * The upper bound of the range. Required when operator is IN_RANGE or OUT_OF_RANGE. Must be greater than or equal to min.
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. Required when operator is IN_RANGE or OUT_OF_RANGE.
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator. Valid values: GT / GE / LT / LE / EQ / NE / IN_RANGE (requires both min and max) / OUT_OF_RANGE (requires both min and max) / PRESENT / NOT_PRESENT.
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name, corresponding to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The comparison threshold. Used when operator is GT, GE, LT, LE, EQ, or NE. Use min and max for IN_RANGE or OUT_OF_RANGE. Leave empty for PRESENT or NOT_PRESENT.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      expressionType: 'expressionType',
      max: 'max',
      min: 'min',
      operator: 'operator',
      queryName: 'queryName',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressionType: 'string',
      max: 'number',
      min: 'number',
      operator: 'string',
      queryName: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

