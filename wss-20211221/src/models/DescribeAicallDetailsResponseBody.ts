// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICallDetailsResponseBodyCallDetailsPointsBreakdown extends $dara.Model {
  /**
   * @remarks
   * 显式缓存创建积分，单位为积分，使用十进制字符串表示；真实零值为 0。
   * 
   * @example
   * 0.15
   */
  explicitCacheCreation?: string;
  /**
   * @remarks
   * 显式缓存命中积分，单位为积分，使用十进制字符串表示；真实零值为 0。
   * 
   * @example
   * 0.01896
   */
  explicitCacheHit?: string;
  /**
   * @remarks
   * 隐式缓存命中积分，单位为积分，使用十进制字符串表示；真实零值为 0。
   * 
   * @example
   * 0
   */
  implicitCacheHit?: string;
  /**
   * @remarks
   * 普通输入积分，单位为积分，使用十进制字符串表示；真实零值为 0。
   * 
   * @example
   * 0.02
   */
  normalInput?: string;
  /**
   * @remarks
   * 输出积分，单位为积分，使用十进制字符串表示；真实零值为 0。
   * 
   * @example
   * 0.1
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      explicitCacheCreation: 'ExplicitCacheCreation',
      explicitCacheHit: 'ExplicitCacheHit',
      implicitCacheHit: 'ImplicitCacheHit',
      normalInput: 'NormalInput',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explicitCacheCreation: 'string',
      explicitCacheHit: 'string',
      implicitCacheHit: 'string',
      normalInput: 'string',
      output: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAICallDetailsResponseBodyCallDetails extends $dara.Model {
  /**
   * @remarks
   * 售卖 deduction 记录中的原始 agent_type；未匹配或 ADB 查询失败时不返回。
   * 
   * @example
   * AIComputer
   * 
   * **if can be null:**
   * true
   */
  agentType?: string;
  /**
   * @remarks
   * 调用状态：SUCCESS、RATE_LIMITED、TIMEOUT 或 FAILED。
   * 
   * @example
   * SUCCESS
   */
  callStatus?: string;
  /**
   * @remarks
   * 日志时间，ISO 8601。
   * 
   * @example
   * 2026-11-05T12:30:00+08:00
   */
  callTime?: string;
  /**
   * @remarks
   * 首包时延，单位毫秒；失败或无首包数据时为空。
   * 
   * @example
   * 620
   * 
   * **if can be null:**
   * true
   */
  firstTokenLatencyMs?: number;
  /**
   * @remarks
   * 本条调用日志的实际数据地域，取值为 cn-shanghai、cn-hangzhou、cn-hongkong、ap-southeast-1 或 us-east-1；杭州预发返回 cn-hangzhou。
   * 
   * @example
   * cn-shanghai
   */
  gatewayRegion?: string;
  /**
   * @remarks
   * AI 网关返回的 HTTP 状态码。
   * 
   * @example
   * 200
   * 
   * **if can be null:**
   * true
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * 原始输入 token 数，前端据此转换上下文规模。
   * 
   * @example
   * 1200
   * 
   * **if can be null:**
   * true
   */
  inputToken?: number;
  /**
   * @remarks
   * 产品实例 ID。
   * 
   * @example
   * example-instance-001
   * 
   * **if can be null:**
   * true
   */
  instanceId?: string;
  /**
   * @remarks
   * 实际调用模型。
   * 
   * @example
   * example-model
   * 
   * **if can be null:**
   * true
   */
  model?: string;
  /**
   * @remarks
   * 按请求 ID 和输入输出 token 匹配的实际抵扣积分，十进制字符串；积分查询失败或超时时为空。
   * 
   * @example
   * 0.28896
   * 
   * **if can be null:**
   * true
   */
  points?: string;
  /**
   * @remarks
   * 本条调用已匹配抵扣记录的积分构成，与 Points 来自同一条记录。缺少有效明细时不返回此对象；对象存在时完整返回五项积分，五项之和等于 Points，真实零值返回字符串 0。
   * 
   * @example
   * {"NormalInput":"0.02","Output":"0.1","ImplicitCacheHit":"0","ExplicitCacheCreation":"0.15","ExplicitCacheHit":"0.01896"}
   * 
   * **if can be null:**
   * true
   */
  pointsBreakdown?: DescribeAICallDetailsResponseBodyCallDetailsPointsBreakdown;
  /**
   * @remarks
   * AI 网关请求 ID，与外层 POP 请求 ID 不同。
   * 
   * @example
   * model-call-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * 用户 WyId，用户名由前端组装。
   * 
   * @example
   * wy-example-001
   * 
   * **if can be null:**
   * true
   */
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      callStatus: 'CallStatus',
      callTime: 'CallTime',
      firstTokenLatencyMs: 'FirstTokenLatencyMs',
      gatewayRegion: 'GatewayRegion',
      httpStatusCode: 'HttpStatusCode',
      inputToken: 'InputToken',
      instanceId: 'InstanceId',
      model: 'Model',
      points: 'Points',
      pointsBreakdown: 'PointsBreakdown',
      requestId: 'RequestId',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      callStatus: 'string',
      callTime: 'string',
      firstTokenLatencyMs: 'number',
      gatewayRegion: 'string',
      httpStatusCode: 'number',
      inputToken: 'number',
      instanceId: 'string',
      model: 'string',
      points: 'string',
      pointsBreakdown: DescribeAICallDetailsResponseBodyCallDetailsPointsBreakdown,
      requestId: 'string',
      wyId: 'string',
    };
  }

  validate() {
    if(this.pointsBreakdown && typeof (this.pointsBreakdown as any).validate === 'function') {
      (this.pointsBreakdown as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAICallDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * 调用明细列表。
   * 
   * @example
   * []
   */
  callDetails?: DescribeAICallDetailsResponseBodyCallDetails[];
  /**
   * @remarks
   * 当前页码。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前页大小。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 实际查询终点。翻页时应复用此值。
   * 
   * @example
   * 2026-11-06T00:00:00+08:00
   */
  queryEndTime?: string;
  /**
   * @remarks
   * 实际查询起点。翻页时应复用此值。
   * 
   * @example
   * 2026-11-05T00:00:00+08:00
   */
  queryStartTime?: string;
  /**
   * @remarks
   * POP 请求 ID。
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * 满足条件的总记录数。
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callDetails: 'CallDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryEndTime: 'QueryEndTime',
      queryStartTime: 'QueryStartTime',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDetails: { 'type': 'array', 'itemType': DescribeAICallDetailsResponseBodyCallDetails },
      pageNumber: 'number',
      pageSize: 'number',
      queryEndTime: 'string',
      queryStartTime: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callDetails)) {
      $dara.Model.validateArray(this.callDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

