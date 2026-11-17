// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSelectionProductRequest extends $dara.Model {
  /**
   * @remarks
   * The division code. A fifth-level township or subdistrict address code is recommended.
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

