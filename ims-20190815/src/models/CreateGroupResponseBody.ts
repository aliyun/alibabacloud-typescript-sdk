// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * Development team
   */
  comments?: string;
  /**
   * @remarks
   * The time when the user group was created.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
   * 
   * @example
   * 2020-10-19T16:15:17Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the user group.
   * 
   * @example
   * Dev-Team
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * 740317625433843****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the user group was updated.
   * 
   * Format: RFC 3339 (UTC). Example: 2020-10-19T16:15:17Z.
   * 
   * @example
   * 2020-10-19T16:15:17Z
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

export class CreateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user group information.
   */
  group?: CreateGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C38192B-7BF8-45DA-8F0A-E670EA51426C
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
      group: CreateGroupResponseBodyGroup,
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

