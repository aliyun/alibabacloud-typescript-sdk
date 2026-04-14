// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatGroupResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 8613800**
   */
  businessNumber?: string;
  /**
   * @example
   * 示例值
   */
  businessRole?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 94
   */
  gmtModifier?: number;
  /**
   * @example
   * EA30d***
   */
  groupId?: string;
  /**
   * @example
   * 示例值示例值
   */
  groupLink?: string;
  /**
   * @example
   * ACTIVE
   */
  groupStatus?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  groupType?: string;
  /**
   * @example
   * https://chat.whatsapp.com/***
   */
  inviteLink?: string;
  /**
   * @example
   * https://aliyun.com/png.jpg
   */
  profilePictureFile?: string;
  /**
   * @example
   * 示例值示例值
   */
  subject?: string;
  /**
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
  list?: ListChatGroupResponseBodyDataList[];
  /**
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
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListChatGroupResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  requestId?: string;
  /**
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

