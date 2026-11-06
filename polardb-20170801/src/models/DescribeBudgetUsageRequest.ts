// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBudgetUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The budget dimension reference ID.
   * 
   * @example
   * ref-001
   */
  budgetDimensionRefId?: string;
  /**
   * @remarks
   * The budget dimension type.
   * 
   * @example
   * cluster
   */
  budgetDimensionType?: string;
  /**
   * @remarks
   * The ID of the gateway instance to query.
   * 
   * @example
   * pc-123
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The region ID of the gateway instance.
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

