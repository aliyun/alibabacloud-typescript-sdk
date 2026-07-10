// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos extends $dara.Model {
  bedDesc?: string;
  bedNum?: number;
  bedSize?: string;
  bedType?: string;
  length?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedNum: 'bed_num',
      bedSize: 'bed_size',
      bedType: 'bed_type',
      length: 'length',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedNum: 'number',
      bedSize: 'string',
      bedType: 'string',
      length: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelRoomInfoResponseBodyModuleBedInfoGroupList extends $dara.Model {
  bedInfos?: HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos[];
  static names(): { [key: string]: string } {
    return {
      bedInfos: 'bed_infos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfoGroupListBedInfos },
    };
  }

  validate() {
    if(Array.isArray(this.bedInfos)) {
      $dara.Model.validateArray(this.bedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelRoomInfoResponseBodyModuleBedInfos extends $dara.Model {
  bedDesc?: string;
  bedNum?: number;
  bedSize?: string;
  bedType?: string;
  length?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bedDesc: 'bed_desc',
      bedNum: 'bed_num',
      bedSize: 'bed_size',
      bedType: 'bed_type',
      length: 'length',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedDesc: 'string',
      bedNum: 'number',
      bedSize: 'string',
      bedType: 'string',
      length: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelRoomInfoResponseBodyModuleRoomImages extends $dara.Model {
  bedInfos2?: string;
  tag?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bedInfos2: 'bed_infos2',
      tag: 'tag',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfos2: 'string',
      tag: 'number',
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

export class HotelRoomInfoResponseBodyModule extends $dara.Model {
  bedInfoGroupList?: HotelRoomInfoResponseBodyModuleBedInfoGroupList[];
  bedInfos?: HotelRoomInfoResponseBodyModuleBedInfos[];
  extraBed?: number;
  extraBedDesc?: string;
  floor?: string;
  internetWay?: string;
  maxOccupancy?: number;
  roomDesc?: string;
  roomFacilities?: string;
  roomFacilityList?: string[];
  roomId?: string;
  roomImage?: string;
  roomImages?: HotelRoomInfoResponseBodyModuleRoomImages[];
  roomName?: string;
  roomType?: number;
  roomarea?: string;
  rooms?: number;
  smoke?: string;
  window?: string;
  windowBad?: string;
  windowView?: string;
  static names(): { [key: string]: string } {
    return {
      bedInfoGroupList: 'bed_info_group_list',
      bedInfos: 'bed_infos',
      extraBed: 'extra_bed',
      extraBedDesc: 'extra_bed_desc',
      floor: 'floor',
      internetWay: 'internet_way',
      maxOccupancy: 'max_occupancy',
      roomDesc: 'room_desc',
      roomFacilities: 'room_facilities',
      roomFacilityList: 'room_facility_list',
      roomId: 'room_id',
      roomImage: 'room_image',
      roomImages: 'room_images',
      roomName: 'room_name',
      roomType: 'room_type',
      roomarea: 'roomarea',
      rooms: 'rooms',
      smoke: 'smoke',
      window: 'window',
      windowBad: 'window_bad',
      windowView: 'window_view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bedInfoGroupList: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfoGroupList },
      bedInfos: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleBedInfos },
      extraBed: 'number',
      extraBedDesc: 'string',
      floor: 'string',
      internetWay: 'string',
      maxOccupancy: 'number',
      roomDesc: 'string',
      roomFacilities: 'string',
      roomFacilityList: { 'type': 'array', 'itemType': 'string' },
      roomId: 'string',
      roomImage: 'string',
      roomImages: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModuleRoomImages },
      roomName: 'string',
      roomType: 'number',
      roomarea: 'string',
      rooms: 'number',
      smoke: 'string',
      window: 'string',
      windowBad: 'string',
      windowView: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bedInfoGroupList)) {
      $dara.Model.validateArray(this.bedInfoGroupList);
    }
    if(Array.isArray(this.bedInfos)) {
      $dara.Model.validateArray(this.bedInfos);
    }
    if(Array.isArray(this.roomFacilityList)) {
      $dara.Model.validateArray(this.roomFacilityList);
    }
    if(Array.isArray(this.roomImages)) {
      $dara.Model.validateArray(this.roomImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HotelRoomInfoResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: HotelRoomInfoResponseBodyModule[];
  requestId?: string;
  success?: boolean;
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
      module: { 'type': 'array', 'itemType': HotelRoomInfoResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

