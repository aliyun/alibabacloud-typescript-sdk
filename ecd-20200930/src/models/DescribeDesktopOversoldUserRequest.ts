// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopOversoldUserRequest extends $dara.Model {
  clientToken?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  oversoldGroupId?: string;
  userDesktopIds?: string[];
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupId: 'OversoldGroupId',
      userDesktopIds: 'UserDesktopIds',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupId: 'string',
      userDesktopIds: { 'type': 'array', 'itemType': 'string' },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.userDesktopIds)) {
      $dara.Model.validateArray(this.userDesktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

