// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelContactsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * cf24***96e7
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
   * 0862***A809
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

export class GetHotelContactsResponseBody extends $dara.Model {
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
  result?: GetHotelContactsResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': GetHotelContactsResponseBodyResult },
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

