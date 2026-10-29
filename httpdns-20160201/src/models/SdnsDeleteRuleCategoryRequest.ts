// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsDeleteRuleCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The policy ID of the current account. This parameter is required. You can obtain the ID from the Id field in the response of CreateSdnsRuleCategory or the list returned by SdnsListRuleCategories. Use a decimal string to prevent precision loss of large integers.
   * 
   * @example
   * 123456789012345678
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

