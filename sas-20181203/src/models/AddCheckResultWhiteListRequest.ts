// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCheckResultWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the check items.
   * 
   * >  You can call the [ListCheckResult](~~ListCheckResult~~) operation to query the IDs of the check items.
   */
  checkIds?: number[];
  /**
   * @remarks
   * The description. The value of this parameter can be up to 65,535 bytes in length.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The type of the rule. Default value: **WHITE**. Valid value:
   * 
   * *   **WHITE**: Add check items to the whitelist.
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      checkIds: 'CheckIds',
      remark: 'Remark',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkIds: { 'type': 'array', 'itemType': 'number' },
      remark: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

