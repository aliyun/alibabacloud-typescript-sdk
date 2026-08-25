// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the group was created.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The group is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The time when information about the group was modified.
   * 
   * @example
   * 2021-11-01T02:38:27Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      provisionType: 'ProvisionType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      provisionType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 768F908D-A66A-5A5D-816C-20C93CBBFEE3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

