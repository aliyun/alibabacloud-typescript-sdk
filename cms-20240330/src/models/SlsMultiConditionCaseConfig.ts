// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsMultiConditionCaseConfig extends $dara.Model {
  /**
   * @remarks
   * The count comparison operator. Valid values: GTE, GT, EQ, LTE, LT.
   */
  countOperator?: string;
  /**
   * @remarks
   * The count threshold. The alert is triggered when this threshold is met.
   */
  countThreshold?: number;
  /**
   * @remarks
   * The log field name. Required when matchOperator is set to CONTAINS, EQUALS, or REGEX. Specify the field name when matchOperator is set to PRESENT or NOT_PRESENT.
   */
  matchField?: string;
  /**
   * @remarks
   * The log matching operator. Valid values: PRESENT (field exists), NOT_PRESENT (field does not exist), CONTAINS (contains), EQUALS (equals), REGEX (regular expression). If left empty, any data matches.
   */
  matchOperator?: string;
  /**
   * @remarks
   * The log match value. Required when matchOperator is set to CONTAINS, EQUALS, or REGEX.
   */
  matchValue?: string;
  /**
   * @remarks
   * The severity level.
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      countOperator: 'countOperator',
      countThreshold: 'countThreshold',
      matchField: 'matchField',
      matchOperator: 'matchOperator',
      matchValue: 'matchValue',
      severity: 'severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countOperator: 'string',
      countThreshold: 'number',
      matchField: 'string',
      matchOperator: 'string',
      matchValue: 'string',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

