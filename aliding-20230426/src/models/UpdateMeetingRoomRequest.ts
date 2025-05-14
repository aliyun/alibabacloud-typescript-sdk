// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMeetingRoomRequestReservationAuthority } from "./UpdateMeetingRoomRequestReservationAuthority";
import { UpdateMeetingRoomRequestRoomLocation } from "./UpdateMeetingRoomRequestRoomLocation";
import { UpdateMeetingRoomRequestTenantContext } from "./UpdateMeetingRoomRequestTenantContext";


export class UpdateMeetingRoomRequest extends $dara.Model {
  enableCycleReservation?: boolean;
  /**
   * @example
   * 0
   */
  groupId?: number;
  /**
   * @example
   * xxxIsvRoomId
   */
  isvRoomId?: string;
  reservationAuthority?: UpdateMeetingRoomRequestReservationAuthority;
  /**
   * @example
   * 100
   */
  roomCapacity?: number;
  /**
   * @example
   * 0ffbxxxxx
   */
  roomId?: string;
  roomLabelIds?: number[];
  roomLocation?: UpdateMeetingRoomRequestRoomLocation;
  roomName?: string;
  /**
   * @example
   * https://static.dingtalk.com/media/lADPxxxxx.jpg
   */
  roomPicture?: string;
  /**
   * @example
   * 1
   */
  roomStatus?: number;
  tenantContext?: UpdateMeetingRoomRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      enableCycleReservation: 'EnableCycleReservation',
      groupId: 'GroupId',
      isvRoomId: 'IsvRoomId',
      reservationAuthority: 'ReservationAuthority',
      roomCapacity: 'RoomCapacity',
      roomId: 'RoomId',
      roomLabelIds: 'RoomLabelIds',
      roomLocation: 'RoomLocation',
      roomName: 'RoomName',
      roomPicture: 'RoomPicture',
      roomStatus: 'RoomStatus',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCycleReservation: 'boolean',
      groupId: 'number',
      isvRoomId: 'string',
      reservationAuthority: UpdateMeetingRoomRequestReservationAuthority,
      roomCapacity: 'number',
      roomId: 'string',
      roomLabelIds: { 'type': 'array', 'itemType': 'number' },
      roomLocation: UpdateMeetingRoomRequestRoomLocation,
      roomName: 'string',
      roomPicture: 'string',
      roomStatus: 'number',
      tenantContext: UpdateMeetingRoomRequestTenantContext,
    };
  }

  validate() {
    if(this.reservationAuthority && typeof (this.reservationAuthority as any).validate === 'function') {
      (this.reservationAuthority as any).validate();
    }
    if(Array.isArray(this.roomLabelIds)) {
      $dara.Model.validateArray(this.roomLabelIds);
    }
    if(this.roomLocation && typeof (this.roomLocation as any).validate === 'function') {
      (this.roomLocation as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

