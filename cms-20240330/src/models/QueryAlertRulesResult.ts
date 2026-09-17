// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleV2 } from "./AlertRuleV2";


export class QueryAlertRulesResult extends $dara.Model {
  /**
   * @remarks
   * The list of alert rules returned by the query. Each element contains the complete configuration information of an alert rule.
   * 
   * @example
   * [{"uuid":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","displayName":"CPU usage alert","status":"OK"}]
   */
  alertRules?: AlertRuleV2[];
  /**
   * @remarks
   * The total number of alert rules that match the query conditions.
   * 
   * @example
   * 5
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

