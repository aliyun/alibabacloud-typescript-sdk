// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterSettingConditions extends $dara.Model {
  /**
   * @example
   * severity
   */
  field?: string;
  /**
   * @example
   * EQ
   */
  op?: string;
  /**
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
  conditions?: FilterSettingConditions[];
  /**
   * @example
   * 1 and 2 or 3
   */
  expression?: string;
  /**
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

