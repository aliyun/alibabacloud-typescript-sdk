// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserResponseBodyGroupsGroup extends $dara.Model {
  comments?: string;
  groupId?: string;
  groupName?: string;
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      groupId: 'string',
      groupName: 'string',
      joinDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBodyGroups extends $dara.Model {
  group?: ListGroupsForUserResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroupsGroup },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $dara.Model {
  groups?: ListGroupsForUserResponseBodyGroups;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA772B52-BF9F-54CA-AC77-AA7A2DA89D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsForUserResponseBodyGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

