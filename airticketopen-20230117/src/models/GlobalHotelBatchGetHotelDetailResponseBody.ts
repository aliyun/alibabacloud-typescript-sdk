// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsFacilities extends $dara.Model {
  /**
   * @remarks
   * The facility description.
   * 
   * @example
   * Outdoor heated swimming pool
   */
  description?: string;
  /**
   * @remarks
   * The facility name.
   * 
   * @example
   * Swimming Pool
   */
  name?: string;
  /**
   * @remarks
   * The facility type.
   * 
   * @example
   * parkade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      type: 'string',
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
   * @remarks
   * The picture description.
   * 
   * @example
   * Hotel lobby
   */
  description?: string;
  /**
   * @remarks
   * The first-level category code.
   * 
   * @example
   * HOTEL
   */
  firstCategoryCode?: string;
  /**
   * @remarks
   * The first-level category name.
   * 
   * @example
   * Hotel
   */
  firstCategoryName?: string;
  /**
   * @remarks
   * Indicates whether the picture is the cover image.
   * 
   * @example
   * true
   */
  isHeadPic?: boolean;
  /**
   * @remarks
   * The picture ID (subject to the URL).
   * 
   * @example
   * PIC001
   */
  pictureId?: string;
  /**
   * @remarks
   * The second-level category code.
   * 
   * @example
   * LOBBY
   */
  secondCategoryCode?: string;
  /**
   * @remarks
   * The second-level category name.
   * 
   * @example
   * Lobby
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The picture URL.
   * 
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
  /**
   * @remarks
   * The list of sub-items.
   */
  children?: any[];
  /**
   * @remarks
   * The item name.
   * 
   * @example
   * Check-in Time
   */
  itemName?: string;
  /**
   * @remarks
   * The item type ID.
   * 
   * @example
   * CHECK_IN_TIME
   */
  itemTypeId?: string;
  /**
   * @remarks
   * The text value.
   * 
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
   * @remarks
   * The group name.
   * 
   * @example
   * Check-in Policy
   */
  groupName?: string;
  /**
   * @remarks
   * The group type ID.
   * 
   * @example
   * CHECK_IN
   */
  groupTypeId?: string;
  /**
   * @remarks
   * The list of policy items.
   */
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
   * @remarks
   * The number of beds.
   * 
   * @example
   * 1
   */
  bedCount?: number;
  /**
   * @remarks
   * The bed width in meters.
   * 
   * @example
   * 1.8
   */
  bedSize?: string;
  /**
   * @remarks
   * The bed type name.
   * 
   * @example
   * King Bed
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
   * @remarks
   * The picture description.
   * 
   * @example
   * Hotel lobby
   */
  description?: string;
  /**
   * @remarks
   * The first-level category code.
   * 
   * @example
   * HOTEL
   */
  firstCategoryCode?: string;
  /**
   * @remarks
   * The first-level category name.
   * 
   * @example
   * Hotel
   */
  firstCategoryName?: string;
  /**
   * @remarks
   * Indicates whether the picture is the cover image.
   * 
   * @example
   * true
   */
  isHeadPic?: boolean;
  /**
   * @remarks
   * The picture ID (subject to the URL).
   * 
   * @example
   * PIC001
   */
  pictureId?: string;
  /**
   * @remarks
   * The second-level category code.
   * 
   * @example
   * LOBBY
   */
  secondCategoryCode?: string;
  /**
   * @remarks
   * The second-level category name.
   * 
   * @example
   * Lobby
   */
  secondCategoryName?: string;
  /**
   * @remarks
   * The picture URL.
   * 
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
  /**
   * @remarks
   * The list of bed types.
   */
  bedType?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesBedType[];
  /**
   * @remarks
   * The list of room type pictures.
   */
  pictures?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypesPictures[];
  /**
   * @remarks
   * The room type name.
   * 
   * @example
   * Deluxe King Room
   */
  roomName?: string;
  /**
   * @remarks
   * The Chinese room type name (always in Chinese, regardless of the language parameter).
   * 
   * @example
   * 豪华大床房
   */
  roomNameCn?: string;
  /**
   * @remarks
   * The room area (passed through as-is, may be a range value).
   * 
   * @example
   * 35.0
   */
  roomSize?: string;
  /**
   * @remarks
   * The area unit. Valid values: SQM (square meters) and SQFT (square feet). Default value: SQM.
   * 
   * @example
   * SQM
   */
  roomSizeUnit?: string;
  /**
   * @remarks
   * The platform standard room type ID.
   * 
   * @example
   * R001
   */
  standardRoomId?: string;
  /**
   * @remarks
   * The window type. Valid values:
   * - 0: no window
   * - 1: with window
   * - 2: partially with window
   * - 3: opaque window
   * - 4: partially opaque window
   * - 5: floor-to-ceiling window
   * 
   * @example
   * WINDOW
   */
  windowType?: string;
  /**
   * @remarks
   * The window defect code. Valid values:
   * - 0: window cannot be opened for ventilation
   * - 1: view is obstructed outside the window
   * - 2: window faces the interior of the hotel
   * - 3: window is located in a corridor or hallway
   * - 4: window can be opened for ventilation and faces an outdoor open environment
   * 
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
      roomSize: 'string',
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
   * @remarks
   * The address.
   * 
   * @example
   * No.33 East Chang An Avenue
   */
  address?: string;
  /**
   * @remarks
   * The default check-in time.
   * 
   * @example
   * 14:00
   */
  checkInTime?: string;
  /**
   * @remarks
   * The default check-out time.
   * 
   * @example
   * 12:00
   */
  checkOutTime?: string;
  /**
   * @remarks
   * The city name.
   * 
   * @example
   * Beijing
   */
  cityName?: string;
  /**
   * @remarks
   * The country name.
   * 
   * @example
   * China
   */
  countryName?: string;
  /**
   * @remarks
   * The hotel description.
   * 
   * @example
   * Five-star luxury hotel
   */
  description?: string;
  /**
   * @remarks
   * The error code for the individual hotel.
   * 
   * @example
   * HOTEL_NOT_FOUND
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message for the individual hotel.
   * 
   * @example
   * Hotel does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The list of facilities.
   */
  facilities?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsFacilities[];
  /**
   * @remarks
   * The hotel name.
   * 
   * @example
   * Beijing Hotel
   */
  hotelName?: string;
  /**
   * @remarks
   * The Chinese hotel name.
   * 
   * @example
   * 北京饭店
   */
  hotelNameCn?: string;
  /**
   * @remarks
   * The hotel type (LUXURY/DELUXE/COMFORT).
   * 
   * @example
   * LUXURY
   */
  hotelType?: string;
  /**
   * @remarks
   * The latitude.
   * 
   * @example
   * 39.9042
   */
  latitude?: string;
  /**
   * @remarks
   * The longitude.
   * 
   * @example
   * 116.4074
   */
  longitude?: string;
  /**
   * @remarks
   * The opening year.
   * 
   * @example
   * 2018
   */
  openingTime?: number;
  /**
   * @remarks
   * The list of pictures.
   */
  pictures?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPictures[];
  /**
   * @remarks
   * The hotel policy information.
   */
  policies?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsPolicies[];
  /**
   * @remarks
   * The source of the coordinates.
   * 
   * @example
   * GOOGLE
   */
  positionType?: string;
  /**
   * @remarks
   * The renovation year.
   * 
   * @example
   * 2021
   */
  renovationTime?: number;
  /**
   * @remarks
   * The list of room types.
   */
  roomTypes?: GlobalHotelBatchGetHotelDetailResponseBodyDataHotelsRoomTypes[];
  /**
   * @remarks
   * The platform standard hotel ID.
   * 
   * @example
   * H001
   */
  standardHotelId?: string;
  /**
   * @remarks
   * The star rating.
   * 
   * @example
   * 5
   */
  star?: string;
  /**
   * @remarks
   * The hotel status (ONLINE/OFFLINE).
   * 
   * @example
   * ONLINE
   */
  status?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * +86-10-65137766
   */
  tel?: string;
  /**
   * @remarks
   * The hotel time zone (IANA ID).
   * 
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
  /**
   * @remarks
   * The list of hotel details.
   */
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
  /**
   * @remarks
   * The business data.
   */
  data?: GlobalHotelBatchGetHotelDetailResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * CityCodeRequired
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * City code cannot be empty
   */
  errorMsg?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 260E4F99-983D-1919-834C-5C42E98E5B2B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
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

