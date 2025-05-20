// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisResponseBodyDataUncertaintyValues extends $dara.Model {
  /**
   * @remarks
   * The name of the inventory. Format: process name / inventory name.
   * 
   * @example
   * process-1/inventory-1
   */
  inventory?: string;
  /**
   * @remarks
   * Inventory uncertainty absolute contribution size. The impact of the quality of each inventory data on the carbon footprint results in the modeling process, when the uncertain contribution of a list is large, please improve its data quality as much as possible to improve the accuracy of carbon footprint analysis. The meaning of "1.4964" is not determined to contribute 1.4964 kgCO₂ e/unit, where unit is the unit of the product.
   * 
   * @example
   * 1.4964
   */
  uncertaintyContribution?: string;
  static names(): { [key: string]: string } {
    return {
      inventory: 'inventory',
      uncertaintyContribution: 'uncertaintyContribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inventory: 'string',
      uncertaintyContribution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

