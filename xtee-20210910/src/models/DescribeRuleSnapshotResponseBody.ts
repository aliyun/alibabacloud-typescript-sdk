// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleSnapshotResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Business version.
   * 
   * @example
   * 1
   */
  bizVersion?: string;
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1565701886000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Expression for analysis results.
   * 
   * @example
   * 1&2
   */
  logicExpression?: string;
  /**
   * @remarks
   * Memo.
   * 
   * @example
   * 备注
   */
  memo?: string;
  /**
   * @remarks
   * Rule actions.
   * 
   * @example
   * [{\\"inputs\\":[\\"LdShop\\"],\\"name\\":\\"__addDeTags__\\",\\"actionType\\":\\"TAG\\",\\"outputType\\":\\"const\\"}]
   */
  ruleActions?: string;
  /**
   * @remarks
   * Expression.
   * 
   * @example
   * [{\\"expressionName\\":\\"代下单_记录日志\\",\\"itemId\\":1,\\"left\\":{\\"name\\":\\"dhcfX2v7670\\"},\\"operatorCode\\":\\"gte\\",\\"operatorName\\":\\"大于等于\\",\\"right\\":{\\"fieldValue\\":\\"2\\"}}]
   */
  ruleExpressions?: string;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 101804
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 营销风险识别
   */
  ruleName?: string;
  /**
   * @remarks
   * Policy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bizVersion: 'bizVersion',
      eventCode: 'eventCode',
      eventName: 'eventName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      logicExpression: 'logicExpression',
      memo: 'memo',
      ruleActions: 'ruleActions',
      ruleExpressions: 'ruleExpressions',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleStatus: 'ruleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizVersion: 'string',
      eventCode: 'string',
      eventName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      logicExpression: 'string',
      memo: 'string',
      ruleActions: 'string',
      ruleExpressions: 'string',
      ruleId: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: DescribeRuleSnapshotResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRuleSnapshotResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

