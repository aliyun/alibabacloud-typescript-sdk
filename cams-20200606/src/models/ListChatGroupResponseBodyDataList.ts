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

