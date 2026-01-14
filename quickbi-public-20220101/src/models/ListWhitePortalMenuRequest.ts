// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhitePortalMenuRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asdagad***213425
   */
  dataportalId?: string;
  static names(): { [key: string]: string } {
    return {
      dataportalId: 'DataportalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataportalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

