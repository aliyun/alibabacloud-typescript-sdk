// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerConditions extends $dara.Model {
  /**
   * @remarks
   * The expression type. Fixed as SIMPLE (used for MetricSet multi-threshold triggers).
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The upper bound of the range. Required when operator is IN_RANGE or OUT_OF_RANGE. Must be greater than or equal to min.
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. Required when operator is IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator. Valid values: GT, GE, LT, LE, EQ, NE, IN_RANGE (requires both min and max), OUT_OF_RANGE (requires both min and max), PRESENT, and NOT_PRESENT.
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name, corresponding to QueryConfigUnified.queries[].name.
   * 
   * @example
   * cpuQuery
   */
  queryName?: string;
  /**
   * @remarks
   * The comparison threshold. Used when operator is GT, GE, LT, LE, EQ, or NE. For IN_RANGE or OUT_OF_RANGE, use min and max instead. Not required for PRESENT or NOT_PRESENT.
   * 
   * @example
   * 80
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

