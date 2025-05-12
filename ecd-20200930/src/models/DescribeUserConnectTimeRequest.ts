// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectTimeRequest extends $dara.Model {
  endTime?: string;
  endUserId?: string;
  maxResults?: number;
  nextToken?: string;
  oversoldGroupId?: string;
  startTime?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      oversoldGroupId: 'OversoldGroupId',
      startTime: 'StartTime',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      endUserId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      oversoldGroupId: 'string',
      startTime: 'string',
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

