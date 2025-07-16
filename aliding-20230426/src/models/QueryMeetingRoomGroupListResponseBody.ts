// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomGroupListResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 172
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

export class QueryMeetingRoomGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  result?: QueryMeetingRoomGroupListResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryMeetingRoomGroupListResponseBodyResult },
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

