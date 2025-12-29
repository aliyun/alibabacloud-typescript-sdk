// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotelRoomDetailResponseBodyResultAuthAccounts extends $dara.Model {
  accountName?: string;
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  authTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      authTime: 'AuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      authTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultDeviceInfos extends $dara.Model {
  /**
   * @example
   * 2023-01-01 12:00:00
   */
  activeTime?: string;
  deviceName?: string;
  /**
   * @example
   * 6.1.8-RS-20230425.1806
   */
  firmwareVersion?: string;
  /**
   * @example
   * fa:03:23:58:c3:00
   */
  mac?: string;
  /**
   * @example
   * 1
   */
  onlineStatus?: number;
  /**
   * @example
   * sag42dlz4qf
   */
  sn?: string;
  /**
   * @example
   * 41c95c18a0a643bcb58edf438877def5
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      activeTime: 'ActiveTime',
      deviceName: 'DeviceName',
      firmwareVersion: 'FirmwareVersion',
      mac: 'Mac',
      onlineStatus: 'OnlineStatus',
      sn: 'Sn',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTime: 'string',
      deviceName: 'string',
      firmwareVersion: 'string',
      mac: 'string',
      onlineStatus: 'number',
      sn: 'string',
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

export class QueryHotelRoomDetailResponseBodyResultOtherService extends $dara.Model {
  /**
   * @example
   * false
   */
  openCall?: boolean;
  /**
   * @example
   * 0
   */
  unhandleTickets?: number;
  static names(): { [key: string]: string } {
    return {
      openCall: 'OpenCall',
      unhandleTickets: 'UnhandleTickets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openCall: 'boolean',
      unhandleTickets: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos extends $dara.Model {
  /**
   * @example
   * light
   */
  categoryEnName?: string;
  /**
   * @example
   * 3
   */
  categoryId?: number;
  categoryName?: string;
  /**
   * @example
   * rcu
   */
  deviceConnectType?: string;
  /**
   * @example
   * 4
   */
  deviceCount?: number;
  /**
   * @example
   * readLight
   */
  deviceId?: string;
  deviceName?: string;
  /**
   * @example
   * room
   */
  locationEnName?: string;
  /**
   * @example
   * 1
   */
  locationId?: number;
  locationName?: string;
  /**
   * @example
   * a1ueWGP6W2L
   */
  productKey?: string;
  static names(): { [key: string]: string } {
    return {
      categoryEnName: 'CategoryEnName',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      deviceConnectType: 'DeviceConnectType',
      deviceCount: 'DeviceCount',
      deviceId: 'DeviceId',
      deviceName: 'DeviceName',
      locationEnName: 'LocationEnName',
      locationId: 'LocationId',
      locationName: 'LocationName',
      productKey: 'ProductKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryEnName: 'string',
      categoryId: 'number',
      categoryName: 'string',
      deviceConnectType: 'string',
      deviceCount: 'number',
      deviceId: 'string',
      deviceName: 'string',
      locationEnName: 'string',
      locationId: 'number',
      locationName: 'string',
      productKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomControlInfo extends $dara.Model {
  /**
   * @example
   * 78
   */
  appId?: number;
  /**
   * @example
   * app
   */
  appName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos[];
  /**
   * @example
   * http://www.xxx.com
   */
  rcuUrl?: string;
  /**
   * @example
   * 1170
   */
  templateId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      deviceInfos: 'DeviceInfos',
      rcuUrl: 'RcuUrl',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultRoomControlInfoDeviceInfos },
      rcuUrl: 'string',
      templateId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResultRoomServiceInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  bookServiceCnt?: number;
  /**
   * @example
   * 10
   */
  goodsServiceCnt?: number;
  /**
   * @example
   * 10
   */
  repairServiceCnt?: number;
  /**
   * @example
   * 12
   */
  roomServiceCnt?: number;
  static names(): { [key: string]: string } {
    return {
      bookServiceCnt: 'BookServiceCnt',
      goodsServiceCnt: 'GoodsServiceCnt',
      repairServiceCnt: 'RepairServiceCnt',
      roomServiceCnt: 'RoomServiceCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookServiceCnt: 'number',
      goodsServiceCnt: 'number',
      repairServiceCnt: 'number',
      roomServiceCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBodyResult extends $dara.Model {
  authAccounts?: QueryHotelRoomDetailResponseBodyResultAuthAccounts[];
  /**
   * @example
   * rcu
   */
  connectType?: string;
  creatorAccountName?: string;
  deviceInfos?: QueryHotelRoomDetailResponseBodyResultDeviceInfos[];
  /**
   * @example
   * a7***83
   */
  hotelId?: string;
  hotelName?: string;
  otherService?: QueryHotelRoomDetailResponseBodyResultOtherService;
  roomControlInfo?: QueryHotelRoomDetailResponseBodyResultRoomControlInfo;
  /**
   * @example
   * 2001
   */
  roomNo?: string;
  roomServiceInfo?: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo;
  static names(): { [key: string]: string } {
    return {
      authAccounts: 'AuthAccounts',
      connectType: 'ConnectType',
      creatorAccountName: 'CreatorAccountName',
      deviceInfos: 'DeviceInfos',
      hotelId: 'HotelId',
      hotelName: 'HotelName',
      otherService: 'OtherService',
      roomControlInfo: 'RoomControlInfo',
      roomNo: 'RoomNo',
      roomServiceInfo: 'RoomServiceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAccounts: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultAuthAccounts },
      connectType: 'string',
      creatorAccountName: 'string',
      deviceInfos: { 'type': 'array', 'itemType': QueryHotelRoomDetailResponseBodyResultDeviceInfos },
      hotelId: 'string',
      hotelName: 'string',
      otherService: QueryHotelRoomDetailResponseBodyResultOtherService,
      roomControlInfo: QueryHotelRoomDetailResponseBodyResultRoomControlInfo,
      roomNo: 'string',
      roomServiceInfo: QueryHotelRoomDetailResponseBodyResultRoomServiceInfo,
    };
  }

  validate() {
    if(Array.isArray(this.authAccounts)) {
      $dara.Model.validateArray(this.authAccounts);
    }
    if(Array.isArray(this.deviceInfos)) {
      $dara.Model.validateArray(this.deviceInfos);
    }
    if(this.otherService && typeof (this.otherService as any).validate === 'function') {
      (this.otherService as any).validate();
    }
    if(this.roomControlInfo && typeof (this.roomControlInfo as any).validate === 'function') {
      (this.roomControlInfo as any).validate();
    }
    if(this.roomServiceInfo && typeof (this.roomServiceInfo as any).validate === 'function') {
      (this.roomServiceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelRoomDetailResponseBody extends $dara.Model {
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
  result?: QueryHotelRoomDetailResponseBodyResult;
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
      result: QueryHotelRoomDetailResponseBodyResult,
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

