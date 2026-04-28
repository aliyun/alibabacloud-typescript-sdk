// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRateLimitPolicyResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2025-12-01T17:52:05+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2026-01-19T16:47:25+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * 02eccf7c61cf4d05a543075ee907f3**
   */
  policyId?: string;
  /**
   * @example
   * RateLimit
   */
  policyType?: string;
  /**
   * @example
   * 10
   */
  rateLimitRpm?: string;
  /**
   * @example
   * 10
   */
  rateLimitTpm?: string;
  /**
   * @example
   * cg-xxxxxxx
   */
  scopeRefId?: string;
  /**
   * @example
   * ConsumerGroup
   */
  scopeType?: string;
  /**
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
  items?: DescribeRateLimitPolicyResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CED079B7-A408-41A1-BFF1-EC608E******
   */
  requestId?: string;
  /**
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

