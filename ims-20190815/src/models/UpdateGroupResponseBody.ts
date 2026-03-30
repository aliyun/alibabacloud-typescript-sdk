// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test-Team
   */
  comments?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-10-19T16:15:17Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * 740317625433843****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Test-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2020-10-20T03:44:27Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      groupId: 'string',
      groupName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the RAM user group.
   */
  group?: UpdateGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDA656E3-3CE9-4A03-A8A3-B42A0C3C3287
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
      group: UpdateGroupResponseBodyGroup,
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

