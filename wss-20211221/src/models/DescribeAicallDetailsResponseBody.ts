// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICallDetailsResponseBodyCallDetailsPointsBreakdown extends $dara.Model {
  /**
   * @remarks
   * The explicit cache creation points, in points, represented as a decimal string. A true zero value is 0.
   * 
   * @example
   * 0.15
   */
  explicitCacheCreation?: string;
  /**
   * @remarks
   * The explicit cache hit points, in points, represented as a decimal string. A true zero value is 0.
   * 
   * @example
   * 0.01896
   */
  explicitCacheHit?: string;
  /**
   * @remarks
   * The implicit cache hit points, in points, represented as a decimal string. A true zero value is 0.
   * 
   * @example
   * 0
   */
  implicitCacheHit?: string;
  /**
   * @remarks
   * The normal input points, in points, represented as a decimal string. A true zero value is 0.
   * 
   * @example
   * 0.02
   */
  normalInput?: string;
  /**
   * @remarks
   * The output points, in points, represented as a decimal string. A true zero value is 0.
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
   * The product or agent type associated with the invocation, which retains the original value from the deduction record. If no match is found or the query fails, this parameter is not returned.
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
   * The invocation status. Valid values: SUCCESS (successful, HTTP 2xx), RATE_LIMITED (throttled, HTTP 429), TIMEOUT (timed out, HTTP 504), and FAILED (other failure statuses).
   * 
   * @example
   * SUCCESS
   */
  callStatus?: string;
  /**
   * @remarks
   * The time of the model invocation log, in ISO 8601 format and UTC+08:00 time zone.
   * 
   * @example
   * 2026-11-05T12:30:00+08:00
   */
  callTime?: string;
  /**
   * @remarks
   * The latency of the first token, in milliseconds. If the invocation fails or no first token data exists, this parameter is empty.
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
   * The actual data region of the invocation log.
   * 
   * @example
   * cn-shanghai
   */
  gatewayRegion?: string;
  /**
   * @remarks
   * The HTTP status code returned by the AI gateway.
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
   * The number of original input tokens. If no valid data exists, this parameter is empty.
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
   * The instance ID of the product associated with the model invocation.
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
   * The ID of the actually invoked model. If the actual model is missing, the requested model is used as a fallback.
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
   * The actual deducted points matched, returned as a decimal string. A true zero value is returned as 0. If no match is found or the query fails, this parameter is not returned. Do not treat a missing value as zero.
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
   * The point breakdown of the matched deduction record for this invocation, which comes from the same record as Points. If valid details are missing, this object is not returned. If the object exists, all five point types are returned. The sum of the five point types equals Points, and a true zero value is returned as the string 0.
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
   * The request ID of the AI gateway invocation, which is different from the request ID of the outer API operation.
   * 
   * @example
   * model-call-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the user who initiated the model invocation. If no valid data exists, this parameter is empty.
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
   * The list of AI invocation details on the current page. If no records exist, an empty array is returned.
   * 
   * @example
   * []
   */
  callDetails?: DescribeAICallDetailsResponseBodyCallDetails[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The actual end time of the query, in ISO 8601 format and UTC+08:00 time zone. Reuse this value when you turn pages.
   * 
   * @example
   * 2026-11-06T00:00:00+08:00
   */
  queryEndTime?: string;
  /**
   * @remarks
   * The actual start time of the query, in ISO 8601 format and UTC+08:00 time zone. Reuse this value when you turn pages.
   * 
   * @example
   * 2026-11-05T00:00:00+08:00
   */
  queryStartTime?: string;
  /**
   * @remarks
   * The request ID of the current API operation, which is used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of invocation records that meet the query conditions, including records that do not match any deducted points.
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

