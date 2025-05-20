// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

