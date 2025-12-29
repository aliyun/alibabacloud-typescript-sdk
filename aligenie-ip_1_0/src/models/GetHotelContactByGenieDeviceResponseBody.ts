// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotelContactByGenieDeviceResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1649472283046
   */
  expireAt?: string;
  /**
   * @example
   * 2022-07-21 20:02:12
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-27 14:06:27
   */
  gmtModified?: string;
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
  /**
   * @example
   * 1
   */
  id?: number;
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
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hotelId: 'HotelId',
      icon: 'Icon',
      id: 'Id',
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
      gmtCreate: 'string',
      gmtModified: 'string',
      hotelId: 'string',
      icon: 'string',
      id: 'number',
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

export class GetHotelContactByGenieDeviceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 73C6***E6FA
   */
  requestId?: string;
  result?: GetHotelContactByGenieDeviceResponseBodyResult;
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
      result: GetHotelContactByGenieDeviceResponseBodyResult,
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

