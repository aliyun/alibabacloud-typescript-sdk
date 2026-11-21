// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterSettingConditions extends $dara.Model {
  /**
   * @remarks
   * The JSON path of the event field, which supports dot notation for nested fields.
   * 
   * @example
   * labels.alertname
   */
  field?: string;
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * EQ
   */
  op?: string;
  /**
   * @remarks
   * The matching value. Separate multiple values with commas when the operator is IN or NOT_IN.
   * 
   * @example
   * CRITICAL
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterSetting extends $dara.Model {
  /**
   * @remarks
   * The subscription conditions.
   */
  conditions?: FilterSettingConditions[];
  /**
   * @remarks
   * The expression. Specify either expression or relation. If expression is not empty, it takes precedence and relation is ignored. If expression is empty or not specified, relation (AND or OR) is used to perform a simple logical AND or OR operation on all conditions. The condition number corresponds to the index of the conditions array, starting from 1. Each condition evaluates whether a single event field matches based on field (the event field path, which supports dot notation for nested fields such as resource.tags.pod), op (the operator, such as CONTAIN, EQ, or IN), and value (the matching value).
   * 
   * @example
   * 1 and 2 or 3
   */
  expression?: string;
  /**
   * @remarks
   * The logical relationship between conditions. This parameter takes effect when expression is empty.
   * 
   * @example
   * AND
   */
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expression: 'expression',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': FilterSettingConditions },
      expression: 'string',
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

