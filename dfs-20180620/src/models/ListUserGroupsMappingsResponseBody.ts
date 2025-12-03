// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsMappingsResponseBodyUserGroupsMappings extends $dara.Model {
  groupNames?: string[];
  /**
   * @example
   * user1
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      groupNames: 'GroupNames',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNames: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupNames)) {
      $dara.Model.validateArray(this.groupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsMappingsResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * user1
   */
  nextToken?: string;
  /**
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  userGroupsMappings?: ListUserGroupsMappingsResponseBodyUserGroupsMappings[];
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      userGroupsMappings: 'UserGroupsMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      nextToken: 'string',
      requestId: 'string',
      userGroupsMappings: { 'type': 'array', 'itemType': ListUserGroupsMappingsResponseBodyUserGroupsMappings },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupsMappings)) {
      $dara.Model.validateArray(this.userGroupsMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

