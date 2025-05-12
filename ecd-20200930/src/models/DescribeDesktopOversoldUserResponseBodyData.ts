// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopOversoldUserResponseBodyData extends $dara.Model {
  endUserId?: string;
  oversoldGroupId?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      oversoldGroupId: 'string',
      userDesktopId: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

