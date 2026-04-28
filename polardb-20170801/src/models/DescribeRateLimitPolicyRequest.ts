// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRateLimitPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxx
   */
  gwClusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 02eccf7c61cf4d05a543075ee907f3**
   */
  policyId?: string;
  regionId?: string;
  /**
   * @example
   * cg-xxxxxxxx
   */
  scopeRefId?: string;
  /**
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

