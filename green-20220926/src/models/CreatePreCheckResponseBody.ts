// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data.
   */
  data?: { [key: string]: boolean };
  /**
   * @remarks
   * ID assigned by the backend, used to uniquely identify a request. It can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

