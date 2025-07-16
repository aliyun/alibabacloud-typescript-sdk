// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers extends $dara.Model {
  memberId?: string;
  memberName?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberName: 'MemberName',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberName: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeetingRoomRequestReservationAuthority extends $dara.Model {
  authorizedMembers?: UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': UpdateMeetingRoomRequestReservationAuthorityAuthorizedMembers },
    };
  }

  validate() {
    if(Array.isArray(this.authorizedMembers)) {
      $dara.Model.validateArray(this.authorizedMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeetingRoomRequestRoomLocation extends $dara.Model {
  desc?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeetingRoomRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

