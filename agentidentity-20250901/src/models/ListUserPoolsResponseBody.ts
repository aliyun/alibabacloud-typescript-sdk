// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPoolsResponseBodyUserPools extends $dara.Model {
  createTime?: string;
  description?: string;
  sourcePlatform?: string;
  updateTime?: string;
  userPoolId?: string;
  userPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      sourcePlatform: 'SourcePlatform',
      updateTime: 'UpdateTime',
      userPoolId: 'UserPoolId',
      userPoolName: 'UserPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      sourcePlatform: 'string',
      updateTime: 'string',
      userPoolId: 'string',
      userPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPoolsResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  userPools?: ListUserPoolsResponseBodyUserPools[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userPools: 'UserPools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      userPools: { 'type': 'array', 'itemType': ListUserPoolsResponseBodyUserPools },
    };
  }

  validate() {
    if(Array.isArray(this.userPools)) {
      $dara.Model.validateArray(this.userPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

