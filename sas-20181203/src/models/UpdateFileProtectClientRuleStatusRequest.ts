// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientRuleStatusRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
  excludeIdList?: number[];
  idList?: number[];
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  selectAll?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      excludeIdList: 'ExcludeIdList',
      idList: 'IdList',
      platform: 'Platform',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      selectAll: 'SelectAll',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      excludeIdList: { 'type': 'array', 'itemType': 'number' },
      idList: { 'type': 'array', 'itemType': 'number' },
      platform: 'string',
      ruleAction: 'string',
      ruleName: 'string',
      selectAll: 'boolean',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeIdList)) {
      $dara.Model.validateArray(this.excludeIdList);
    }
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

