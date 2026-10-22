// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dimension object. This parameter is required when BudgetDimensionType is set to ConsumerGroup or Consumer.
   * 
   * @example
   * cg-p3gk2oh55c**
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * - **ConsumerGroup**: Total budget for consumer groups.
   * - **Consumer**: Total budget for consumers.
   * 
   * @example
   * ConsumerGroup
   */
  budgetDimensionType?: string;
  /**
   * @remarks
   * The ID of the budget policy.
   * 
   * @example
   * 023aacc1effc4b56bb154bfbec6baxxx
   */
  budgetPolicyId?: string;
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
   * The page number.
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
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The name of the object associated with the scope of the budget policy.
   * 
   * @example
   * test-group
   */
  scopeRefName?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - **Enabled**: Enabled.
   * - **Disenabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      budgetDimensionRefId: 'BudgetDimensionRefId',
      budgetDimensionType: 'BudgetDimensionType',
      budgetPolicyId: 'BudgetPolicyId',
      gwClusterId: 'GwClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      scopeRefName: 'ScopeRefName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetDimensionRefId: 'string',
      budgetDimensionType: 'string',
      budgetPolicyId: 'string',
      gwClusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      scopeRefName: 'string',
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

