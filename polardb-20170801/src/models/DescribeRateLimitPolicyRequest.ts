// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRateLimitPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The page number to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**. The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the target resource, which can be a consumer group or a consumer, depending on the `ScopeType` value.
   * 
   * @example
   * cg-xxxxxxxx
   */
  scopeRefId?: string;
  /**
   * @remarks
   * The scope of the rate limit policy. Valid values:
   * 
   * - **ConsumerGroup**: The policy applies to a consumer group.
   * 
   * - **Consumer**: The policy applies to a specific consumer.
   * 
   * @example
   * ConsumerGroup
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      scopeRefId: 'ScopeRefId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'string',
      regionId: 'string',
      scopeRefId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

