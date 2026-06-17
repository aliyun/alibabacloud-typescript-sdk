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
   * The modification time.
   * 
   * @example
   * 2026-01-19T16:47:25+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the rate limit policy.
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
   * The maximum requests per minute (RPM).
   * 
   * @example
   * 10
   */
  rateLimitRpm?: string;
  /**
   * @remarks
   * The maximum tokens per minute (TPM).
   * 
   * @example
   * 10
   */
  rateLimitTpm?: string;
  /**
   * @remarks
   * The ID of the object within the policy\\"s scope, such as a consumer group or a consumer.
   * 
   * @example
   * cg-xxxxxxx
   */
  scopeRefId?: string;
  /**
   * @remarks
   * The scope of the policy. Valid values:
   * 
   * - **ConsumerGroup**: The policy applies to a consumer group.
   * 
   * - **Consumer**: The policy applies to a specific consumer.
   * 
   * @example
   * ConsumerGroup
   */
  scopeType?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - **Enabled**: The policy is enabled.
   * 
   * - **Disabled**: The policy is disabled.
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
   * An array of rate limit policy objects.
   */
  items?: DescribeRateLimitPolicyResponseBodyItems[];
  /**
   * @remarks
   * The returned page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * The total number of matching entries.
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

