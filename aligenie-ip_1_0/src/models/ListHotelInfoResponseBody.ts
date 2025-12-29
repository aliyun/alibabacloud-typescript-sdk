// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotelInfoResponseBodyResultAuthAccount extends $dara.Model {
  /**
   * @example
   * leetest
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBodyResult extends $dara.Model {
  authAccount?: ListHotelInfoResponseBodyResultAuthAccount[];
  hotelAddress?: string;
  /**
   * @example
   * cf2446fc9d144c85aaee4f9ae20a96e7
   */
  hotelId?: string;
  hotelName?: string;
  static names(): { [key: string]: string } {
    return {
      authAccount: 'AuthAccount',
      hotelAddress: 'HotelAddress',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccount: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResultAuthAccount },
      hotelAddress: 'string',
      hotelId: 'string',
      hotelName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authAccount)) {
      $dara.Model.validateArray(this.authAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotelInfoResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  message?: string;
  requestId?: string;
  result?: ListHotelInfoResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ListHotelInfoResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

