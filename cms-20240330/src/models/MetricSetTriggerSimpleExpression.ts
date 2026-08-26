// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricSetTriggerSimpleExpression extends $dara.Model {
  /**
   * @remarks
   * The expression type. Fixed as SIMPLE.
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
   * The comparison operator. Valid values: GT (greater than), GE (greater than or equal to), LT (less than), LE (less than or equal to), EQ (equal to), NE (not equal to), IN_RANGE (within range, requires both min and max), OUT_OF_RANGE (outside range, requires both min and max), PRESENT (field exists, does not require threshold/min/max), NOT_PRESENT (field does not exist, does not require threshold/min/max).
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name, corresponding to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The comparison threshold. Used when operator is GT, GE, LT, LE, EQ, or NE. IN_RANGE and OUT_OF_RANGE use min/max instead. PRESENT and NOT_PRESENT do not require this field.
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

