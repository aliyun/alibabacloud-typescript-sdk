// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataQualityAnalysisResponseBodyDataSensitivityList extends $dara.Model {
  /**
   * @remarks
   * Inventory id
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Name of the inventory item.
   * 
   * @example
   * energy
   */
  inventory?: string;
  /**
   * @remarks
   * List of emission reduction measures.
   */
  reductionList?: string[];
  /**
   * @remarks
   * Sensitivity percentage.
   * 
   * @example
   * 91.7
   */
  sensitivity?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      inventory: 'inventory',
      reductionList: 'reductionList',
      sensitivity: 'sensitivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inventory: 'string',
      reductionList: { 'type': 'array', 'itemType': 'string' },
      sensitivity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reductionList)) {
      $dara.Model.validateArray(this.reductionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

