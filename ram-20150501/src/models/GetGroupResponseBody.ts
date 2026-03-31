// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGroupResponseBodyGroup extends $dara.Model {
  /**
   * @remarks
   * The description of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The time when the RAM user group was created.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-FpMEHiMysofp****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2015-02-11T03:15:21Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      groupId: 'GroupId',
      groupName: 'GroupName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
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

export class GetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the RAM user group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4065824-E422-3ED6-68B1-1AF7D5C7804C
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

