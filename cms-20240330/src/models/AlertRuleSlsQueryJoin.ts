// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleSlsQueryJoinConditions } from "./AlertRuleSlsQueryJoinConditions";


export class AlertRuleSlsQueryJoin extends $dara.Model {
  conditions?: AlertRuleSlsQueryJoinConditions[];
  /**
   * @remarks
   * 集合操作类型。
   *   ● CrossJoin： 笛卡尔积
   *   ● FullJoin：全联
   *   ● InnerJoin：内联
   *   ● LeftExclude： 左斥
   *   ● RightExclude：右斥
   *   ● LeftJoin：左联
   *   ● RightJoin：右联
   *   ● NoJoin：不合并
   *   ● Concat： 拼接
   *   https://help.aliyun.com/zh/sls/user-guide/set-query-statistics-statement
   * 
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': AlertRuleSlsQueryJoinConditions },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

