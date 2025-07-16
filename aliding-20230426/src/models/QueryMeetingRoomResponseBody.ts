// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers extends $dara.Model {
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

export class QueryMeetingRoomResponseBodyResultReservationAuthority extends $dara.Model {
  authorizedMembers?: QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers[];
  static names(): { [key: string]: string } {
    return {
      authorizedMembers: 'AuthorizedMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedMembers: { 'type': 'array', 'itemType': QueryMeetingRoomResponseBodyResultReservationAuthorityAuthorizedMembers },
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

export class QueryMeetingRoomResponseBodyResultRoomGroup extends $dara.Model {
  /**
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @example
   * 测试分组
   */
  groupName?: string;
  /**
   * @example
   * 0
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingRoomResponseBodyResultRoomLabels extends $dara.Model {
  /**
   * @example
   * 1
   */
  labelId?: number;
  /**
   * @example
   * 电视
   */
  labelName?: string;
  static names(): { [key: string]: string } {
    return {
      labelId: 'LabelId',
      labelName: 'LabelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelId: 'number',
      labelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMeetingRoomResponseBodyResultRoomLocation extends $dara.Model {
  /**
   * @example
   * xx市xx区xx街道xx号
   */
  desc?: string;
  /**
   * @example
   * xxx公司
   */
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

export class QueryMeetingRoomResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: QueryMeetingRoomResponseBodyResult;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: QueryMeetingRoomResponseBodyResult,
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

