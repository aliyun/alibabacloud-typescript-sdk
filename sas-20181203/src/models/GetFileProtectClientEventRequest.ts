// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 131231
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

