// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMeetingRoomShrinkRequest extends $dara.Model {
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
  reservationAuthorityShrink?: string;
  /**
   * @example
   * 100
   */
  roomCapacity?: number;
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

