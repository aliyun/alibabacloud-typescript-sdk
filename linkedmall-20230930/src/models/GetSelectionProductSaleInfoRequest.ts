// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSelectionProductSaleInfoRequest extends $dara.Model {
  /**
   * @example
   * 110000
   */
  divisionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56****2304
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

