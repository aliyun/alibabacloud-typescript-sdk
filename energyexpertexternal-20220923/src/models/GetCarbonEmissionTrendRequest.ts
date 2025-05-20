// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCarbonEmissionTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20240119-1
   */
  code?: string;
  /**
   * @remarks
   * Module code.
   * 
   * @example
   * carbonInventory.check.scope_1_direct_ghg_emissions
   */
  moduleCode?: string;
  /**
   * @remarks
   * Module type.
   * 
   * @example
   * 3
   */
  moduleType?: number;
  /**
   * @remarks
   * Trend Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  trendType?: number;
  /**
   * @remarks
   * The list of inventory year.
   * 
   * This parameter is required.
   */
  yearList?: number[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      trendType: 'trendType',
      yearList: 'yearList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      trendType: 'number',
      yearList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.yearList)) {
      $dara.Model.validateArray(this.yearList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

