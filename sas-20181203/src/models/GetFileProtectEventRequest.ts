// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectEventRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required. If it is not provided, the API returns HTTP 400 with the error code -101. You can call the ListFileProtectEvent operation to obtain a valid event ID.
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

