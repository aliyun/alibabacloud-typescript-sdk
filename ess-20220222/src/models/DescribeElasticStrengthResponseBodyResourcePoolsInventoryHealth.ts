// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth extends $dara.Model {
  /**
   * @remarks
   * The adequacy score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  adequacyScore?: number;
  /**
   * @remarks
   * The inventory health score.
   * 
   * *   A score between 5 and 6 indicates a sufficient inventory.
   * *   A score between 1 and 4 indicates that there is no guarantee of a sufficient inventory. Select a reservation as necessary.
   * *   A score between -3 and 0 indicates that the inventory is sufficient, and an alert is triggered. Select another instance type.
   * 
   * Calculation formula: `HealthScore` = `AdequacyScore` + `SupplyScore` - `HotScore`.
   * 
   * @example
   * 3
   */
  healthScore?: number;
  /**
   * @remarks
   * The popularity score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  hotScore?: number;
  /**
   * @remarks
   * The replenishment capability score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  supplyScore?: number;
  static names(): { [key: string]: string } {
    return {
      adequacyScore: 'AdequacyScore',
      healthScore: 'HealthScore',
      hotScore: 'HotScore',
      supplyScore: 'SupplyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adequacyScore: 'number',
      healthScore: 'number',
      hotScore: 'number',
      supplyScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

