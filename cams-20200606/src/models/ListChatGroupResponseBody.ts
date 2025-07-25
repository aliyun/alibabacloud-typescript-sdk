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
   * test
   */
  description?: string;
  /**
   * @example
   * EA30d***
   */
  groupId?: string;
  /**
   * @example
   * ACTIVE
   */
  groupStatus?: string;
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
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      description: 'Description',
      groupId: 'GroupId',
      groupStatus: 'GroupStatus',
      inviteLink: 'InviteLink',
      profilePictureFile: 'ProfilePictureFile',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      description: 'string',
      groupId: 'string',
      groupStatus: 'string',
      inviteLink: 'string',
      profilePictureFile: 'string',
      subject: 'string',
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

