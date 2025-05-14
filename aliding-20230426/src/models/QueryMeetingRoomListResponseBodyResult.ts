// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMeetingRoomListResponseBodyResultRoomGroup } from "./QueryMeetingRoomListResponseBodyResultRoomGroup";
import { QueryMeetingRoomListResponseBodyResultRoomLabels } from "./QueryMeetingRoomListResponseBodyResultRoomLabels";
import { QueryMeetingRoomListResponseBodyResultRoomLocation } from "./QueryMeetingRoomListResponseBodyResultRoomLocation";


export class QueryMeetingRoomListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ding994axxxx
   */
  corpId?: string;
  /**
   * @example
   * xxxIsvRoomId
   */
  isvRoomId?: string;
  /**
   * @example
   * 10
   */
  roomCapacity?: number;
  roomGroup?: QueryMeetingRoomListResponseBodyResultRoomGroup;
  /**
   * @example
   * 0ffb7xxxxx
   */
  roomId?: string;
  roomLabels?: QueryMeetingRoomListResponseBodyResultRoomLabels[];
  roomLocation?: QueryMeetingRoomListResponseBodyResultRoomLocation;
  /**
   * @example
   * 测试会议室
   */
  roomName?: string;
  /**
   * @example
   * https://static.dingtalk.com/media/lADPxxxxx.jpg
   */
  roomPicture?: string;
  /**
   * @example
   * 012241xxxxx
   */
  roomStaffId?: string;
  /**
   * @example
   * 0
   */
  roomStatus?: number;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      isvRoomId: 'IsvRoomId',
      roomCapacity: 'RoomCapacity',
      roomGroup: 'RoomGroup',
      roomId: 'RoomId',
      roomLabels: 'RoomLabels',
      roomLocation: 'RoomLocation',
      roomName: 'RoomName',
      roomPicture: 'RoomPicture',
      roomStaffId: 'RoomStaffId',
      roomStatus: 'RoomStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      isvRoomId: 'string',
      roomCapacity: 'number',
      roomGroup: QueryMeetingRoomListResponseBodyResultRoomGroup,
      roomId: 'string',
      roomLabels: { 'type': 'array', 'itemType': QueryMeetingRoomListResponseBodyResultRoomLabels },
      roomLocation: QueryMeetingRoomListResponseBodyResultRoomLocation,
      roomName: 'string',
      roomPicture: 'string',
      roomStaffId: 'string',
      roomStatus: 'number',
    };
  }

  validate() {
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

