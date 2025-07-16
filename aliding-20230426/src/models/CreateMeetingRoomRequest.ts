// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers extends $dara.Model {
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

export class CreateMeetingRoomRequestReservationAuthority extends $dara.Model {
  authorizedMembers?: CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': CreateMeetingRoomRequestReservationAuthorityAuthorizedMembers },
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

export class CreateMeetingRoomRequestRoomLocation extends $dara.Model {
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

export class CreateMeetingRoomRequestTenantContext extends $dara.Model {
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

