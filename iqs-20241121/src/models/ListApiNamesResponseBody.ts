// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiNamesResponseBody extends $dara.Model {
  apiNames?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiNames: 'apiNames',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiNames)) {
      $dara.Model.validateArray(this.apiNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

