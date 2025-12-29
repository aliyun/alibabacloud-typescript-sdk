// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageGetHotelRoomDevicesResponseBodyPage extends $dara.Model {
  /**
   * @example
   * 4
   */
  end?: number;
  /**
   * @example
   * False
   */
  hasNext?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  start?: number;
  /**
   * @example
   * 5
   */
  total?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      hasNext: 'HasNext',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      start: 'Start',
      total: 'Total',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      hasNext: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      start: 'number',
      total: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * V21.10.00.313
   */
  firmwareVersion?: string;
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @example
   * b4:xx:xx:xx:65:2b
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  /**
   * @example
   * 1200xxx048
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      firmwareVersion: 'FirmwareVersion',
      hotelId: 'HotelId',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      roomNo: 'RoomNo',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firmwareVersion: 'string',
      hotelId: 'string',
      mac: 'string',
      onlineStatus: 'number',
      roomNo: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageGetHotelRoomDevicesResponseBody extends $dara.Model {
  extentions?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  page?: PageGetHotelRoomDevicesResponseBodyPage;
  /**
   * @example
   * 4EFBDDF4-B19D-526C-8C3D-CD8AB51974EE
   */
  requestId?: string;
  result?: PageGetHotelRoomDevicesResponseBodyResult[];
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      extentions: 'Extentions',
      message: 'Message',
      page: 'Page',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extentions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      page: PageGetHotelRoomDevicesResponseBodyPage,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PageGetHotelRoomDevicesResponseBodyResult },
      statusCode: 'number',
    };
  }

  validate() {
    if(this.extentions) {
      $dara.Model.validateMap(this.extentions);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
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

