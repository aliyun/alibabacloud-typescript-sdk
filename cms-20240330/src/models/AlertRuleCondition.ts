// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleConditionCaseList } from "./AlertRuleConditionCaseList";
import { AlertRuleConditionCompareList } from "./AlertRuleConditionCompareList";


export class AlertRuleCondition extends $dara.Model {
  /**
   * @remarks
   * type=SLS_CONDITION时指定，满足条件几次后告警，默认为1
   */
  alertCount?: number;
  /**
   * @remarks
   * type=SLS_CONDITION时指定
   */
  caseList?: AlertRuleConditionCaseList[];
  compareList?: AlertRuleConditionCompareList[];
  noDataAppendValue?: string;
  /**
   * @remarks
   * 无数据时按什么级别告警，不指定则不对无数据报警
   */
  nodataAlertLevel?: string;
  relation?: string;
  /**
   * @remarks
   * 规则条件类型，可选值：SLS_CONDITION
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertCount: 'alertCount',
      caseList: 'caseList',
      compareList: 'compareList',
      noDataAppendValue: 'noDataAppendValue',
      nodataAlertLevel: 'nodataAlertLevel',
      relation: 'relation',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertCount: 'number',
      caseList: { 'type': 'array', 'itemType': AlertRuleConditionCaseList },
      compareList: { 'type': 'array', 'itemType': AlertRuleConditionCompareList },
      noDataAppendValue: 'string',
      nodataAlertLevel: 'string',
      relation: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    if(Array.isArray(this.compareList)) {
      $dara.Model.validateArray(this.compareList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

