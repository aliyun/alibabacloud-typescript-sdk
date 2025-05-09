// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
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

