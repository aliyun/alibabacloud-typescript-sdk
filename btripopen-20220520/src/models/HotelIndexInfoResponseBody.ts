// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelIndexInfoResponseBodyModuleItems extends $dara.Model {
  /**
   * @example
   * 182873
   */
  hotelId?: string;
  /**
   * @example
   * 0
   */
  hotelStatus?: string;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'hotel_id',
      hotelStatus: 'hotel_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      hotelStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelIndexInfoResponseBodyModule extends $dara.Model {
  items?: HotelIndexInfoResponseBodyModuleItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 182873
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageSize: 'page_size',
      pageToken: 'page_token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': HotelIndexInfoResponseBodyModuleItems },
      pageSize: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelIndexInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * operation success.
   */
  message?: string;
  module?: HotelIndexInfoResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: HotelIndexInfoResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

