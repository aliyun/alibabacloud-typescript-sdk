// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

