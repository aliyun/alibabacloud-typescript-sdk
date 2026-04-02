// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleV2 } from "./AlertRuleV2";


export class QueryAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * 告警规则列表
   */
  alertRules?: AlertRuleV2[];
  /**
   * @remarks
   * 符合查询条件的总告警规则数
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertRules: 'alertRules',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRules: { 'type': 'array', 'itemType': AlertRuleV2 },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertRules)) {
      $dara.Model.validateArray(this.alertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

