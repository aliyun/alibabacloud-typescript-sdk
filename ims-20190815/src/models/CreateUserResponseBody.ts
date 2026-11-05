// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBodyUserTagsTag extends $dara.Model {
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

export class CreateUserResponseBodyUserTags extends $dara.Model {
  tag?: CreateUserResponseBodyUserTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': CreateUserResponseBodyUserTagsTag },
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

export class CreateUserResponseBodyUser extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is a cloud computing engineer.
   */
  comments?: string;
  /**
   * @remarks
   * The creation time of the Resource Access Management (RAM) user.
   * 
   * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The display name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The electron mailbox of the Resource Access Management (RAM) user.
   * > This parameter is applicable only to the China site.
   * 
   * @example
   * alice@example.com
   */
  email?: string;
  /**
   * @remarks
   * The time of the last logon to the console by the Resource Access Management (RAM) user.
   * 
   * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  lastLoginDate?: string;
  /**
   * @remarks
   * The mobile phone number of the Resource Access Management (RAM) user.
   * > This parameter is applicable only to the China site.
   * 
   * @example
   * 86-1868888****
   */
  mobilePhone?: string;
  /**
   * @remarks
   * The provision type. Valid values:
   * - Manual: The Resource Access Management (RAM) user is manually created in RAM.
   * - SCIM: The Resource Access Management (RAM) user is created through the System for Cross-domain Identity Management protocol.
   * - CloudSSO: The user is created through CloudSSO synchronization.
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  tags?: CreateUserResponseBodyUserTags;
  /**
   * @remarks
   * The update time of the Resource Access Management (RAM) user.
   * 
   * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
  updateDate?: string;
  /**
   * @remarks
   * The ID of the Resource Access Management (RAM) user.
   * 
   * @example
   * 20732900249392****
   */
  userId?: string;
  /**
   * @remarks
   * The logon name of the Resource Access Management (RAM) user.
   * 
   * @example
   * test@example.onaliyun.com
   */
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
      tags: CreateUserResponseBodyUserTags,
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

export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BB8C44A-2862-4922-AD43-03924749173B
   */
  requestId?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) user information.
   */
  user?: CreateUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: CreateUserResponseBodyUser,
    };
  }

  validate() {
    if(this.user && typeof (this.user as any).validate === 'function') {
      (this.user as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

