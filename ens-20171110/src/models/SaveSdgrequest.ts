// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SDG to be saved.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SDGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

