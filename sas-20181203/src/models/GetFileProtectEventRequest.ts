// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectEventRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * > You can call the [ListFileProtectEvent](~~ListFileProtectEvent~~) operation to retrieve this parameter.
   * This parameter is required. If it is not provided, the API returns HTTP 400 with error code -101.
   * 
   * @example
   * 12
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

