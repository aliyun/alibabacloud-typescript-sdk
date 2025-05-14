// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMeetingRoomRequestReservationAuthority } from "./CreateMeetingRoomRequestReservationAuthority";
import { CreateMeetingRoomRequestRoomLocation } from "./CreateMeetingRoomRequestRoomLocation";
import { CreateMeetingRoomRequestTenantContext } from "./CreateMeetingRoomRequestTenantContext";


export class CreateMeetingRoomRequest extends $dara.Model {
  enableCycleReservation?: boolean;
  /**
   * @example
   * 4644
   */
  groupId?: number;
  /**
   * @example
   * xxxIsvRoomId
   */
  isvRoomId?: string;
  reservationAuthority?: CreateMeetingRoomRequestReservationAuthority;
  /**
   * @example
   * 100
   */
  roomCapacity?: number;
  roomLabelIds?: number[];
  roomLocation?: CreateMeetingRoomRequestRoomLocation;
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
  tenantContext?: CreateMeetingRoomRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      enableCycleReservation: 'EnableCycleReservation',
      groupId: 'GroupId',
      isvRoomId: 'IsvRoomId',
      reservationAuthority: 'ReservationAuthority',
      roomCapacity: 'RoomCapacity',
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
      reservationAuthority: CreateMeetingRoomRequestReservationAuthority,
      roomCapacity: 'number',
      roomLabelIds: { 'type': 'array', 'itemType': 'number' },
      roomLocation: CreateMeetingRoomRequestRoomLocation,
      roomName: 'string',
      roomPicture: 'string',
      roomStatus: 'number',
      tenantContext: CreateMeetingRoomRequestTenantContext,
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

