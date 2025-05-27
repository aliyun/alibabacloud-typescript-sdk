// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the right operand is a constant or a runtime variable that is obtained from the runtime context. Valid values:
   * 
   * *   true: runtime variable.
   * *   false: constant.
   * 
   * @example
   * false
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
   * The data type of the right operand.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The right operand.
   * 
   * @example
   * 12345
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

