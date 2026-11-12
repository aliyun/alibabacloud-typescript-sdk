// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRateLimitPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the throttling dimension, which is the consumer group ID or consumer ID.
   * 
   * @example
   * cg-xxxxxxxx
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

