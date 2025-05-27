// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the left operand is a variable. Valid values:
   * 
   * *   true: variable.
   * *   false: constant.
   * 
   * @example
   * true
   */
  isVar?: boolean;
  /**
   * @remarks
   * The remarks on the right operand.
   * 
   * @example
   * length
   */
  modifier?: string;
  /**
   * @remarks
   * The key-value pair information of the remarks.
   */
  modifierParam?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether the left operand is a constant. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  type?: string;
  /**
   * @remarks
   * The variable of the left operand.
   * 
   * @example
   * ip
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isVar: 'IsVar',
      modifier: 'Modifier',
      modifierParam: 'ModifierParam',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isVar: 'boolean',
      modifier: 'string',
      modifierParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.modifierParam) {
      $dara.Model.validateMap(this.modifierParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

