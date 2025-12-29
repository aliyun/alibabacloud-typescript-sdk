// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelScreenSaverStyleResponseBodyResult extends $dara.Model {
  cnName?: string;
  /**
   * @example
   * common-weather
   */
  code?: string;
  /**
   * @example
   * common-weather
   */
  enName?: string;
  /**
   * @example
   * https://img.***.png
   */
  picUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cnName: 'CnName',
      code: 'Code',
      enName: 'EnName',
      picUrl: 'PicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnName: 'string',
      code: 'string',
      enName: 'string',
      picUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelScreenSaverStyleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C67**6FA
   */
  requestId?: string;
  result?: GetHotelScreenSaverStyleResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetHotelScreenSaverStyleResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

