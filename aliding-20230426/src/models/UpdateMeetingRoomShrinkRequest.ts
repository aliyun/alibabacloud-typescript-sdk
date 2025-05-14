// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeetingRoomShrinkRequest extends $dara.Model {
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
  reservationAuthorityShrink?: string;
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
  roomLabelIdsShrink?: string;
  roomLocationShrink?: string;
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableCycleReservation: 'EnableCycleReservation',
      groupId: 'GroupId',
      isvRoomId: 'IsvRoomId',
      reservationAuthorityShrink: 'ReservationAuthority',
      roomCapacity: 'RoomCapacity',
      roomId: 'RoomId',
      roomLabelIdsShrink: 'RoomLabelIds',
      roomLocationShrink: 'RoomLocation',
      roomName: 'RoomName',
      roomPicture: 'RoomPicture',
      roomStatus: 'RoomStatus',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCycleReservation: 'boolean',
      groupId: 'number',
      isvRoomId: 'string',
      reservationAuthorityShrink: 'string',
      roomCapacity: 'number',
      roomId: 'string',
      roomLabelIdsShrink: 'string',
      roomLocationShrink: 'string',
      roomName: 'string',
      roomPicture: 'string',
      roomStatus: 'number',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

