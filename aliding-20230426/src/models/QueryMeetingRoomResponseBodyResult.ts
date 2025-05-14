// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMeetingRoomResponseBodyResultReservationAuthority } from "./QueryMeetingRoomResponseBodyResultReservationAuthority";
import { QueryMeetingRoomResponseBodyResultRoomGroup } from "./QueryMeetingRoomResponseBodyResultRoomGroup";
import { QueryMeetingRoomResponseBodyResultRoomLabels } from "./QueryMeetingRoomResponseBodyResultRoomLabels";
import { QueryMeetingRoomResponseBodyResultRoomLocation } from "./QueryMeetingRoomResponseBodyResultRoomLocation";


export class QueryMeetingRoomResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ding994axxxxx
   */
  corpId?: string;
  /**
   * @example
   * [ "2iPOLbpxxxxuwggiiqiPwiEiF" ]
   */
  deviceUnionIds?: string[];
  /**
   * @example
   * true
   */
  enableCycleReservation?: boolean;
  /**
   * @example
   * xxxIsvRoomId
   */
  isvRoomId?: string;
  reservationAuthority?: QueryMeetingRoomResponseBodyResultReservationAuthority;
  /**
   * @example
   * 10
   */
  roomCapacity?: number;
  roomGroup?: QueryMeetingRoomResponseBodyResultRoomGroup;
  /**
   * @example
   * 0ffb7184xxxxx
   */
  roomId?: string;
  roomLabels?: QueryMeetingRoomResponseBodyResultRoomLabels[];
  roomLocation?: QueryMeetingRoomResponseBodyResultRoomLocation;
  /**
   * @example
   * 测试会议室
   */
  roomName?: string;
  /**
   * @example
   * https://static.dingtalk.com/media/lADxxxxx.jpg
   */
  roomPicture?: string;
  /**
   * @example
   * 0122414
   */
  roomStaffId?: string;
  /**
   * @example
   * 0
   */
  roomStatus?: number;
  roomUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      deviceUnionIds: 'DeviceUnionIds',
      enableCycleReservation: 'EnableCycleReservation',
      isvRoomId: 'IsvRoomId',
      reservationAuthority: 'ReservationAuthority',
      roomCapacity: 'RoomCapacity',
      roomGroup: 'RoomGroup',
      roomId: 'RoomId',
      roomLabels: 'RoomLabels',
      roomLocation: 'RoomLocation',
      roomName: 'RoomName',
      roomPicture: 'RoomPicture',
      roomStaffId: 'RoomStaffId',
      roomStatus: 'RoomStatus',
      roomUnionId: 'RoomUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': 'string' },
      enableCycleReservation: 'boolean',
      isvRoomId: 'string',
      reservationAuthority: QueryMeetingRoomResponseBodyResultReservationAuthority,
      roomCapacity: 'number',
      roomGroup: QueryMeetingRoomResponseBodyResultRoomGroup,
      roomId: 'string',
      roomLabels: { 'type': 'array', 'itemType': QueryMeetingRoomResponseBodyResultRoomLabels },
      roomLocation: QueryMeetingRoomResponseBodyResultRoomLocation,
      roomName: 'string',
      roomPicture: 'string',
      roomStaffId: 'string',
      roomStatus: 'number',
      roomUnionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deviceUnionIds)) {
      $dara.Model.validateArray(this.deviceUnionIds);
    }
    if(this.reservationAuthority && typeof (this.reservationAuthority as any).validate === 'function') {
      (this.reservationAuthority as any).validate();
    }
    if(this.roomGroup && typeof (this.roomGroup as any).validate === 'function') {
      (this.roomGroup as any).validate();
    }
    if(Array.isArray(this.roomLabels)) {
      $dara.Model.validateArray(this.roomLabels);
    }
    if(this.roomLocation && typeof (this.roomLocation as any).validate === 'function') {
      (this.roomLocation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

