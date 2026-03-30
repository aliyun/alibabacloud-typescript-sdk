// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsersUserTagsTag extends $dara.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserTags extends $dara.Model {
  tag?: ListUsersResponseBodyUsersUserTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUser extends $dara.Model {
  comments?: string;
  createDate?: string;
  displayName?: string;
  email?: string;
  lastLoginDate?: string;
  mobilePhone?: string;
  provisionType?: string;
  status?: string;
  tags?: ListUsersResponseBodyUsersUserTags;
  updateDate?: string;
  userId?: string;
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createDate: 'CreateDate',
      displayName: 'DisplayName',
      email: 'Email',
      lastLoginDate: 'LastLoginDate',
      mobilePhone: 'MobilePhone',
      provisionType: 'ProvisionType',
      status: 'Status',
      tags: 'Tags',
      updateDate: 'UpdateDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createDate: 'string',
      displayName: 'string',
      email: 'string',
      lastLoginDate: 'string',
      mobilePhone: 'string',
      provisionType: 'string',
      status: 'string',
      tags: ListUsersResponseBodyUsersUserTags,
      updateDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $dara.Model {
  user?: ListUsersResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The parameter that is used to obtain the truncated part. It takes effect only when `IsTruncated` is set to `true`.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      users: ListUsersResponseBodyUsers,
    };
  }

  validate() {
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

