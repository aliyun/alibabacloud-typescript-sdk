// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsFacilities extends $dara.Model {
  /**
   * @example
   * 室外恒温泳池
   */
  description?: string;
  /**
   * @example
   * F001
   */
  facilityId?: string;
  /**
   * @example
   * 游泳池
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      facilityId: 'FacilityId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      facilityId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPictures extends $dara.Model {
  /**
   * @example
   * 酒店大堂
   */
  description?: string;
  /**
   * @example
   * HOTEL
   */
  firstCategoryCode?: string;
  /**
   * @example
   * 酒店
   */
  firstCategoryName?: string;
  /**
   * @example
   * true
   */
  isHeadPic?: boolean;
  /**
   * @example
   * PIC001
   */
  pictureId?: string;
  /**
   * @example
   * LOBBY
   */
  secondCategoryCode?: string;
  /**
   * @example
   * 大堂
   */
  secondCategoryName?: string;
  /**
   * @example
   * https://img.example.com/1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      firstCategoryCode: 'FirstCategoryCode',
      firstCategoryName: 'FirstCategoryName',
      isHeadPic: 'IsHeadPic',
      pictureId: 'PictureId',
      secondCategoryCode: 'SecondCategoryCode',
      secondCategoryName: 'SecondCategoryName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      firstCategoryCode: 'string',
      firstCategoryName: 'string',
      isHeadPic: 'boolean',
      pictureId: 'string',
      secondCategoryCode: 'string',
      secondCategoryName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPoliciesItems extends $dara.Model {
  children?: any[];
  /**
   * @example
   * 入住时间
   */
  itemName?: string;
  /**
   * @example
   * CHECK_IN_TIME
   */
  itemTypeId?: string;
  /**
   * @example
   * 14:00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      itemName: 'ItemName',
      itemTypeId: 'ItemTypeId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      itemName: 'string',
      itemTypeId: 'string',
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPolicies extends $dara.Model {
  /**
   * @example
   * 入住政策
   */
  groupName?: string;
  /**
   * @example
   * CHECK_IN
   */
  groupTypeId?: string;
  items?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPoliciesItems[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupTypeId: 'GroupTypeId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupTypeId: 'string',
      items: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPoliciesItems },
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

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesBedType extends $dara.Model {
  /**
   * @example
   * 1
   */
  bedCount?: number;
  /**
   * @example
   * 1.8
   */
  bedSize?: string;
  /**
   * @example
   * 大床
   */
  bedType?: string;
  static names(): { [key: string]: string } {
    return {
      bedCount: 'BedCount',
      bedSize: 'BedSize',
      bedType: 'BedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedCount: 'number',
      bedSize: 'string',
      bedType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesPictures extends $dara.Model {
  /**
   * @example
   * 酒店大堂
   */
  description?: string;
  /**
   * @example
   * HOTEL
   */
  firstCategoryCode?: string;
  /**
   * @example
   * 酒店
   */
  firstCategoryName?: string;
  /**
   * @example
   * true
   */
  isHeadPic?: boolean;
  /**
   * @example
   * PIC001
   */
  pictureId?: string;
  /**
   * @example
   * LOBBY
   */
  secondCategoryCode?: string;
  /**
   * @example
   * 大堂
   */
  secondCategoryName?: string;
  /**
   * @example
   * https://img.example.com/1.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      firstCategoryCode: 'FirstCategoryCode',
      firstCategoryName: 'FirstCategoryName',
      isHeadPic: 'IsHeadPic',
      pictureId: 'PictureId',
      secondCategoryCode: 'SecondCategoryCode',
      secondCategoryName: 'SecondCategoryName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      firstCategoryCode: 'string',
      firstCategoryName: 'string',
      isHeadPic: 'boolean',
      pictureId: 'string',
      secondCategoryCode: 'string',
      secondCategoryName: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypes extends $dara.Model {
  bedType?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesBedType[];
  pictures?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesPictures[];
  /**
   * @example
   * Deluxe King Room
   */
  roomName?: string;
  /**
   * @example
   * 豪华大床房
   */
  roomNameCn?: string;
  /**
   * @example
   * 35.0
   */
  roomSize?: number;
  /**
   * @example
   * SQM
   */
  roomSizeUnit?: string;
  /**
   * @example
   * R001
   */
  standardRoomId?: string;
  /**
   * @example
   * WINDOW
   */
  windowType?: string;
  /**
   * @example
   * SMALL_WINDOW
   */
  windowTypeDefect?: string;
  static names(): { [key: string]: string } {
    return {
      bedType: 'BedType',
      pictures: 'Pictures',
      roomName: 'RoomName',
      roomNameCn: 'RoomNameCn',
      roomSize: 'RoomSize',
      roomSizeUnit: 'RoomSizeUnit',
      standardRoomId: 'StandardRoomId',
      windowType: 'WindowType',
      windowTypeDefect: 'WindowTypeDefect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedType: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesBedType },
      pictures: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesPictures },
      roomName: 'string',
      roomNameCn: 'string',
      roomSize: 'number',
      roomSizeUnit: 'string',
      standardRoomId: 'string',
      windowType: 'string',
      windowTypeDefect: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bedType)) {
      $dara.Model.validateArray(this.bedType);
    }
    if(Array.isArray(this.pictures)) {
      $dara.Model.validateArray(this.pictures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotels extends $dara.Model {
  /**
   * @example
   * No.33 East Chang An Avenue
   */
  address?: string;
  /**
   * @example
   * 14:00
   */
  checkInTime?: string;
  /**
   * @example
   * 12:00
   */
  checkOutTime?: string;
  /**
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @example
   * China
   */
  countryName?: string;
  /**
   * @example
   * 五星级豪华酒店
   */
  description?: string;
  /**
   * @example
   * HOTEL_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @example
   * 酒店不存在
   */
  errorMessage?: string;
  facilities?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsFacilities[];
  /**
   * @example
   * Beijing Hotel
   */
  hotelName?: string;
  /**
   * @example
   * 北京饭店
   */
  hotelNameCn?: string;
  /**
   * @example
   * LUXURY
   */
  hotelType?: string;
  /**
   * @example
   * 39.9042
   */
  latitude?: string;
  /**
   * @example
   * 116.4074
   */
  longitude?: string;
  /**
   * @example
   * 2018
   */
  openingTime?: number;
  pictures?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPictures[];
  policies?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPolicies[];
  /**
   * @example
   * GOOGLE
   */
  positionType?: string;
  /**
   * @example
   * 2021
   */
  renovationTime?: number;
  roomTypes?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypes[];
  /**
   * @example
   * H001
   */
  standardHotelId?: string;
  /**
   * @example
   * 5
   */
  star?: string;
  /**
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @example
   * +86-10-65137766
   */
  tel?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      checkInTime: 'CheckInTime',
      checkOutTime: 'CheckOutTime',
      cityName: 'CityName',
      countryName: 'CountryName',
      description: 'Description',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      facilities: 'Facilities',
      hotelName: 'HotelName',
      hotelNameCn: 'HotelNameCn',
      hotelType: 'HotelType',
      latitude: 'Latitude',
      longitude: 'Longitude',
      openingTime: 'OpeningTime',
      pictures: 'Pictures',
      policies: 'Policies',
      positionType: 'PositionType',
      renovationTime: 'RenovationTime',
      roomTypes: 'RoomTypes',
      standardHotelId: 'StandardHotelId',
      star: 'Star',
      status: 'Status',
      tel: 'Tel',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      checkInTime: 'string',
      checkOutTime: 'string',
      cityName: 'string',
      countryName: 'string',
      description: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      facilities: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsFacilities },
      hotelName: 'string',
      hotelNameCn: 'string',
      hotelType: 'string',
      latitude: 'string',
      longitude: 'string',
      openingTime: 'number',
      pictures: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPictures },
      policies: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPolicies },
      positionType: 'string',
      renovationTime: 'number',
      roomTypes: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypes },
      standardHotelId: 'string',
      star: 'string',
      status: 'string',
      tel: 'string',
      timezone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.facilities)) {
      $dara.Model.validateArray(this.facilities);
    }
    if(Array.isArray(this.pictures)) {
      $dara.Model.validateArray(this.pictures);
    }
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    if(Array.isArray(this.roomTypes)) {
      $dara.Model.validateArray(this.roomTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBodyData extends $dara.Model {
  hotels?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotels[];
  static names(): { [key: string]: string } {
    return {
      hotels: 'Hotels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotels: { 'type': 'array', 'itemType': GlobalHotelBatchGetHotelDetailResponseBodyDataHotels },
    };
  }

  validate() {
    if(Array.isArray(this.hotels)) {
      $dara.Model.validateArray(this.hotels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GlobalHotelBatchGetHotelDetailResponseBody extends $dara.Model {
  data?: GlobalHotelBatchGetHotelDetailResponseBodyData;
  /**
   * @example
   * CityCodeRequired
   */
  errorCode?: string;
  /**
   * @example
   * 城市编码不能为空
   */
  errorMsg?: string;
  /**
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * traceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GlobalHotelBatchGetHotelDetailResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
      tracerId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

