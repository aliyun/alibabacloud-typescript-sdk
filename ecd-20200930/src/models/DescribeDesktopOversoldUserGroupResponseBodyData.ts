// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopOversoldUserGroupResponseBodyData extends $dara.Model {
  imageId?: string;
  name?: string;
  oversoldGroupId?: string;
  policyGroupId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      policyGroupId: 'PolicyGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      policyGroupId: 'string',
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

