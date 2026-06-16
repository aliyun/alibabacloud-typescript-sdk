// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOsRecommendRules extends $dara.Model {
  /**
   * @remarks
   * The left variable.
   * 
   * @example
   * age
   */
  left?: string;
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * equals
   */
  operator?: string;
  /**
   * @remarks
   * The right variable.
   * 
   * @example
   * 20
   */
  right?: string;
  static names(): { [key: string]: string } {
    return {
      left: 'left',
      operator: 'operator',
      right: 'right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      left: 'string',
      operator: 'string',
      right: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOs extends $dara.Model {
  /**
   * @remarks
   * The computation path.
   * 
   * @example
   * 1&2
   */
  computeExpression?: string;
  /**
   * @remarks
   * The number of samples that are hit.
   * 
   * @example
   * 99
   */
  hitSample?: number;
  /**
   * @remarks
   * The primary key ID of the policy.
   * 
   * @example
   * 30
   */
  id?: number;
  /**
   * @remarks
   * The number of samples that are not hit.
   * 
   * @example
   * 1
   */
  notHitSample?: number;
  /**
   * @remarks
   * The list of candidate policies.
   */
  recommendRules?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOsRecommendRules[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 营销风险识别评分_高风险_拒绝_副本
   */
  ruleName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * NO_RULE
   */
  status?: string;
  /**
   * @remarks
   * The list of metrics in JSON string format.
   * 
   * @example
   * [{"key":"dxkkLw8fe18","value":"2"}]
   */
  velocities?: string;
  static names(): { [key: string]: string } {
    return {
      computeExpression: 'computeExpression',
      hitSample: 'hitSample',
      id: 'id',
      notHitSample: 'notHitSample',
      recommendRules: 'recommendRules',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      status: 'status',
      velocities: 'velocities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeExpression: 'string',
      hitSample: 'number',
      id: 'number',
      notHitSample: 'number',
      recommendRules: { 'type': 'array', 'itemType': DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOsRecommendRules },
      ruleId: 'string',
      ruleName: 'string',
      status: 'string',
      velocities: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recommendRules)) {
      $dara.Model.validateArray(this.recommendRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendTaskDetailResponseBodyResultObjectRecommendVariableDTOs extends $dara.Model {
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 234
   */
  id?: number;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 手机号
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendTaskDetailResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The event code.
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * The comparison metrics.
   */
  expectVelocities?: string[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of normal samples.
   * 
   * @example
   * 100
   */
  normalSize?: number;
  /**
   * @remarks
   * The list of recommended policies.
   */
  recommendRuleDTOs?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOs[];
  /**
   * @remarks
   * The list of selected variables.
   */
  recommendVariableDTOs?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendVariableDTOs[];
  /**
   * @remarks
   * The number of risk samples.
   * 
   * @example
   * 10
   */
  riskSize?: number;
  /**
   * @remarks
   * The sample name.
   * 
   * @example
   * 白样本
   */
  sampleName?: string;
  /**
   * @remarks
   * The sample scenario.
   * 
   * @example
   * account_abuse_detection
   */
  sampleScene?: string;
  /**
   * @remarks
   * The sample scenario name.
   * 
   * @example
   * 防虚假账号
   */
  sampleSceneName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 887
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 策略推荐任务
   */
  taskName?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * CREATE
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'eventCode',
      eventName: 'eventName',
      expectVelocities: 'expectVelocities',
      gmtCreate: 'gmtCreate',
      normalSize: 'normalSize',
      recommendRuleDTOs: 'recommendRuleDTOs',
      recommendVariableDTOs: 'recommendVariableDTOs',
      riskSize: 'riskSize',
      sampleName: 'sampleName',
      sampleScene: 'sampleScene',
      sampleSceneName: 'sampleSceneName',
      taskId: 'taskId',
      taskName: 'taskName',
      taskStatus: 'taskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      expectVelocities: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'number',
      normalSize: 'number',
      recommendRuleDTOs: { 'type': 'array', 'itemType': DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOs },
      recommendVariableDTOs: { 'type': 'array', 'itemType': DescribeRecommendTaskDetailResponseBodyResultObjectRecommendVariableDTOs },
      riskSize: 'number',
      sampleName: 'string',
      sampleScene: 'string',
      sampleSceneName: 'string',
      taskId: 'number',
      taskName: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expectVelocities)) {
      $dara.Model.validateArray(this.expectVelocities);
    }
    if(Array.isArray(this.recommendRuleDTOs)) {
      $dara.Model.validateArray(this.recommendRuleDTOs);
    }
    if(Array.isArray(this.recommendVariableDTOs)) {
      $dara.Model.validateArray(this.recommendVariableDTOs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecommendTaskDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: DescribeRecommendTaskDetailResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRecommendTaskDetailResponseBodyResultObject,
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

