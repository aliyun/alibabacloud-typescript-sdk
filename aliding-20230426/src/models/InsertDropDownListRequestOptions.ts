// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertDropDownListRequestOptions extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * #FF0000
   */
  color?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * A
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

