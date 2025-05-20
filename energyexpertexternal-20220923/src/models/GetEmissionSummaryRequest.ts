// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmissionSummaryRequest extends $dara.Model {
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
   * Year of inventory.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024
   */
  year?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      moduleCode: 'moduleCode',
      moduleType: 'moduleType',
      year: 'year',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      moduleCode: 'string',
      moduleType: 'number',
      year: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

