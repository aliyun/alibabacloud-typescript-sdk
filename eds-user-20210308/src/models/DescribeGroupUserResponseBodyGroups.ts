// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupUserResponseBodyGroups extends $dara.Model {
  /**
   * @example
   * ug-91mvbosdjsdfh****
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * 1
   */
  userCount?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      userCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

