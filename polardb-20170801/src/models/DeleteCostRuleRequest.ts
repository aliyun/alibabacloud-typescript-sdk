// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCostRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cost rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 924d450014e64e88ac6e8486f8e990**
   */
  costRuleId?: string;
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      costRuleId: 'CostRuleId',
      gwClusterId: 'GwClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costRuleId: 'string',
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

