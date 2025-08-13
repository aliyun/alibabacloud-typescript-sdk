// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOsRecommendRules extends $dara.Model {
  /**
   * @remarks
   * Left variable
   * 
   * @example
   * age
   */
  left?: string;
  /**
   * @remarks
   * Operator
   * 
   * @example
   * equals
   */
  operator?: string;
  /**
   * @remarks
   * Right variable
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
   * Calculation path
   * 
   * @example
   * 1&2
   */
  computeExpression?: string;
  /**
   * @remarks
   * Number of hit samples
   * 
   * @example
   * 99
   */
  hitSample?: number;
  /**
   * @remarks
   * Primary key ID of the rule
   * 
   * @example
   * 30
   */
  id?: number;
  /**
   * @remarks
   * Number of unhit samples
   * 
   * @example
   * 1
   */
  notHitSample?: number;
  /**
   * @remarks
   * List of candidate rules
   */
  recommendRules?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOsRecommendRules[];
  /**
   * @remarks
   * Strategy ID
   * 
   * @example
   * 102224
   */
  ruleId?: string;
  /**
   * @remarks
   * Rule name
   * 
   * @example
   * 营销风险识别评分_高风险_拒绝_副本
   */
  ruleName?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * NO_RULE
   */
  status?: string;
  /**
   * @remarks
   * List of indicators in JSON string format
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
   * Primary key ID
   * 
   * @example
   * 234
   */
  id?: number;
  /**
   * @remarks
   * Title
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
   * Comparison indicators
   */
  expectVelocities?: string[];
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1621578648000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Number of normal samples
   * 
   * @example
   * 100
   */
  normalSize?: number;
  /**
   * @remarks
   * Recommended strategy list
   */
  recommendRuleDTOs?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendRuleDTOs[];
  /**
   * @remarks
   * Selected variable list
   */
  recommendVariableDTOs?: DescribeRecommendTaskDetailResponseBodyResultObjectRecommendVariableDTOs[];
  /**
   * @remarks
   * Number of risk samples
   * 
   * @example
   * 10
   */
  riskSize?: number;
  /**
   * @remarks
   * Sample name
   * 
   * @example
   * 白样本
   */
  sampleName?: string;
  /**
   * @remarks
   * Sample scenario
   * 
   * @example
   * account_abuse_detection
   */
  sampleScene?: string;
  /**
   * @remarks
   * Sample scenario name
   * 
   * @example
   * 防虚假账号
   */
  sampleSceneName?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 887
   */
  taskId?: number;
  /**
   * @remarks
   * Task name
   * 
   * @example
   * 策略推荐任务
   */
  taskName?: string;
  /**
   * @remarks
   * Task status.
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
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
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

