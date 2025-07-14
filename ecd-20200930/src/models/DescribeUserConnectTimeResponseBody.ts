// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectTimeResponseBodyData extends $dara.Model {
  endConnectTime?: string;
  endUserId?: string;
  oversoldGroupId?: string;
  startConnectTime?: string;
  userDesktopId?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      endConnectTime: 'EndConnectTime',
      endUserId: 'EndUserId',
      oversoldGroupId: 'OversoldGroupId',
      startConnectTime: 'StartConnectTime',
      userDesktopId: 'UserDesktopId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endConnectTime: 'string',
      endUserId: 'string',
      oversoldGroupId: 'string',
      startConnectTime: 'string',
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

export class DescribeUserConnectTimeResponseBody extends $dara.Model {
  count?: number;
  data?: DescribeUserConnectTimeResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeUserConnectTimeResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

