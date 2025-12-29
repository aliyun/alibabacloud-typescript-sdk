// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRoomControlDevicesResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * fdsfregtre
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  result?: number;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      result: 'number',
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

