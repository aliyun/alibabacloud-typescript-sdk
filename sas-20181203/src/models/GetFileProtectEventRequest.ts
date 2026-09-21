// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectEventRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required. If this parameter is not specified, the API returns HTTP 400 with error code -101. You can call ListFileProtectEvent to obtain valid event IDs.
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

