// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSelectionProductRequest extends $dara.Model {
  /**
   * @remarks
   * Region code (use a five-level township or subdistrict address code)
   * 
   * @example
   * 330106109
   */
  divisionCode?: string;
  /**
   * @remarks
   * Purchaser ID
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

