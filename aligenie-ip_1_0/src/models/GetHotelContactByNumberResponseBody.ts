// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelContactByNumberResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649316479098
   */
  expireAt?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * xxx.icon
   */
  icon?: string;
  name?: string;
  /**
   * @example
   * 101
   */
  number?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * group
   */
  type?: string;
  /**
   * @example
   * 2E57***D45F9
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      expireAt: 'ExpireAt',
      hotelId: 'HotelId',
      icon: 'Icon',
      name: 'Name',
      number: 'Number',
      status: 'Status',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAt: 'string',
      hotelId: 'string',
      icon: 'string',
      name: 'string',
      number: 'string',
      status: 'number',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotelContactByNumberResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetHotelContactByNumberResponseBodyResult;
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
      result: GetHotelContactByNumberResponseBodyResult,
      statusCode: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

