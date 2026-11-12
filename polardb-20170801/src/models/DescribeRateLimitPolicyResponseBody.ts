// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRateLimitPolicyResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-01T17:52:05+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-19T16:47:25+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * 02eccf7c61cf4d05a543075ee907f3**
   */
  policyId?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * RateLimit
   */
  policyType?: string;
  /**
   * @remarks
   * The limit on the number of requests per minute.
   * 
   * @example
   * 10
   */
  rateLimitRpm?: string;
  /**
   * @remarks
   * The limit on the number of tokens per minute.
   * 
   * @example
   * 10
   */
  rateLimitTpm?: string;
  /**
   * @remarks
   * The ID of the throttling dimension, which is the consumer group ID or consumer ID.
   * 
   * @example
   * cg-xxxxxxx
   */
  scopeRefId?: string;
  /**
   * @remarks
   * The throttling dimension. Valid values:
   * 
   * - **ConsumerGroup**: consumer group
   * 
   * - **Consumer**: consumer
   * 
   * @example
   * ConsumerGroup
   */
  scopeType?: string;
  /**
   * @remarks
   * The status of the throttling policy. Valid values:
   * 
   * 
   * - **Enabled**: enabled
   * - **Disabled**: disabled
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      gwClusterId: 'GwClusterId',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      rateLimitRpm: 'RateLimitRpm',
      rateLimitTpm: 'RateLimitTpm',
      scopeRefId: 'ScopeRefId',
      scopeType: 'ScopeType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      gwClusterId: 'string',
      policyId: 'string',
      policyType: 'string',
      rateLimitRpm: 'string',
      rateLimitTpm: 'string',
      scopeRefId: 'string',
      scopeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRateLimitPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of throttling policies.
   */
  items?: DescribeRateLimitPolicyResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeRateLimitPolicyResponseBodyItems },
      pageNumber: 'string',
      pageRecordCount: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

