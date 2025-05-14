// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  request?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

