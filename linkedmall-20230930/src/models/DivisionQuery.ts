// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DivisionQuery extends $dara.Model {
  /**
   * @remarks
   * divisionCode
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  divisionCode?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

