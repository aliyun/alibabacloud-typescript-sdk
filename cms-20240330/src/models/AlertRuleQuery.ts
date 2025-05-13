// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoin } from "./AlertRuleSlsQueryJoin";
import { AlertRuleQueryQueries } from "./AlertRuleQueryQueries";


export class AlertRuleQuery extends $dara.Model {
  checkAfterDataComplete?: boolean;
  duration?: number;
  expr?: string;
  firstJoin?: AlertRuleSlsQueryJoin;
  groupFieldList?: string[];
  groupType?: string;
  queries?: AlertRuleQueryQueries[];
  secondJoin?: AlertRuleSlsQueryJoin;
  /**
   * @remarks
   * 查询类型
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkAfterDataComplete: 'checkAfterDataComplete',
      duration: 'duration',
      expr: 'expr',
      firstJoin: 'firstJoin',
      groupFieldList: 'groupFieldList',
      groupType: 'groupType',
      queries: 'queries',
      secondJoin: 'secondJoin',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAfterDataComplete: 'boolean',
      duration: 'number',
      expr: 'string',
      firstJoin: AlertRuleSlsQueryJoin,
      groupFieldList: { 'type': 'array', 'itemType': 'string' },
      groupType: 'string',
      queries: { 'type': 'array', 'itemType': AlertRuleQueryQueries },
      secondJoin: AlertRuleSlsQueryJoin,
      type: 'string',
    };
  }

  validate() {
    if(this.firstJoin && typeof (this.firstJoin as any).validate === 'function') {
      (this.firstJoin as any).validate();
    }
    if(Array.isArray(this.groupFieldList)) {
      $dara.Model.validateArray(this.groupFieldList);
    }
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.secondJoin && typeof (this.secondJoin as any).validate === 'function') {
      (this.secondJoin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

