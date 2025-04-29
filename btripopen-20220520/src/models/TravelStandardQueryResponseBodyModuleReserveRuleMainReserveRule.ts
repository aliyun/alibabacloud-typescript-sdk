// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule extends $dara.Model {
  openServiceTypeList?: string[];
  /**
   * @example
   * 2006517149
   */
  ruleCode?: number;
  ruleDesc?: string;
  /**
   * @example
   * 6517149
   */
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      openServiceTypeList: 'open_service_type_list',
      ruleCode: 'rule_code',
      ruleDesc: 'rule_desc',
      ruleId: 'rule_id',
      ruleName: 'rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openServiceTypeList: { 'type': 'array', 'itemType': 'string' },
      ruleCode: 'number',
      ruleDesc: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.openServiceTypeList)) {
      $dara.Model.validateArray(this.openServiceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

