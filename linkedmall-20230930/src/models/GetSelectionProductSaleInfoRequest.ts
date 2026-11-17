// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSelectionProductSaleInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The division code. A level-5 address code for a town or sub-district is recommended.
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * The purchaser ID.
   * 
   * This parameter is required.
   * 
   * @example
   * PID22000009
   */
  purchaserId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      purchaserId: 'purchaserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
      purchaserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

