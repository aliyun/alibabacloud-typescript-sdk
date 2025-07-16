// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomListResponseBodyResultRoomGroup extends $dara.Model {
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

export class QueryMeetingRoomListResponseBodyResultRoomLabels extends $dara.Model {
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

export class QueryMeetingRoomListResponseBodyResultRoomLocation extends $dara.Model {
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

export class QueryMeetingRoomListResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * 123
   */
  nextToken?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: QueryMeetingRoomListResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'hasMore',
      nextToken: 'nextToken',
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryMeetingRoomListResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

