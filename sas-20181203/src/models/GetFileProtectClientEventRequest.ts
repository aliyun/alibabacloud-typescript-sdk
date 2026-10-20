// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectClientEventRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert event. This parameter is required. If it is not provided, the API returns an HTTP 400 error.
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

