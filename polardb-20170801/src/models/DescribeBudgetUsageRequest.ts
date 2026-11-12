// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The reference ID of the budget dimension. If BudgetDimensionType is set to Global, set this parameter to Global. If BudgetDimensionType is set to Consumer, set this parameter to the consumer ID returned by DescribeBudgetPolicies, such as consumer-xxx. If BudgetDimensionType is set to ConsumerGroup, set this parameter to the consumer group ID, such as cg-xxx.
   * 
   * @example
   * Global
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The budget dimension type. Valid values: Global (global budget), Consumer (consumer budget), and ConsumerGroup (consumer group budget).
   * 
   * @example
   * Global
   */
  budgetDimensionType?: string;
  /**
   * @remarks
   * The ID of the gateway instance to query. This parameter is required. If this parameter is not specified, the API returns InvalidPolarGatewayInstanceId.NotFound (404).
   * 
   * @example
   * pc-123
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the region where the gateway instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      budgetDimensionRefId: 'BudgetDimensionRefId',
      budgetDimensionType: 'BudgetDimensionType',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      budgetDimensionRefId: 'string',
      budgetDimensionType: 'string',
      gwClusterId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

