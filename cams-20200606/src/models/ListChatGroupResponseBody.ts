// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The business number.
   * 
   * @example
   * 8613800**
   */
  businessNumber?: string;
  /**
   * @remarks
   * The role of the bot in the group.
   * 
   * @example
   * example
   */
  businessRole?: string;
  /**
   * @remarks
   * The group description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The time the group was last updated.
   * 
   * @example
   * 94
   */
  gmtModifier?: number;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * EA30d***
   */
  groupId?: string;
  /**
   * @remarks
   * The group link.
   * 
   * @example
   * example
   */
  groupLink?: string;
  /**
   * @remarks
   * The group status.
   * 
   * @example
   * ACTIVE
   */
  groupStatus?: string;
  /**
   * @remarks
   * The group type.
   * 
   * @example
   * example
   */
  groupType?: string;
  /**
   * @remarks
   * The group invitation link.
   * 
   * @example
   * https://chat.whatsapp.com/***
   */
  inviteLink?: string;
  /**
   * @remarks
   * The group\\"s profile picture.
   */
  profilePictureFile?: string;
  /**
   * @remarks
   * The group subject.
   * 
   * @example
   * This is a test subject
   */
  subject?: string;
  /**
   * @remarks
   * The total number of group participants.
   * 
   * @example
   * 35
   */
  totalParticipantCount?: number;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      businessRole: 'BusinessRole',
      description: 'Description',
      gmtModifier: 'GmtModifier',
      groupId: 'GroupId',
      groupLink: 'GroupLink',
      groupStatus: 'GroupStatus',
      groupType: 'GroupType',
      inviteLink: 'InviteLink',
      profilePictureFile: 'ProfilePictureFile',
      subject: 'Subject',
      totalParticipantCount: 'TotalParticipantCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      businessRole: 'string',
      description: 'string',
      gmtModifier: 'number',
      groupId: 'string',
      groupLink: 'string',
      groupStatus: 'string',
      groupType: 'string',
      inviteLink: 'string',
      profilePictureFile: 'string',
      subject: 'string',
      totalParticipantCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatGroupResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The group list.
   */
  list?: ListChatGroupResponseBodyDataList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 51
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListChatGroupResponseBodyDataList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the access denied error.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code. Valid values:
   * 
   * - `OK`: The request succeeded.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListChatGroupResponseBodyData;
  /**
   * @remarks
   * The response message. This parameter is returned only when an error occurs.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866411B2O
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListChatGroupResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

