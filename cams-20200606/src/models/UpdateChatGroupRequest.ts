// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChatGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8613800***
   */
  businessNumber?: string;
  /**
   * @example
   * WHATSAPP
   */
  channelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-***
   */
  custSpaceId?: string;
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EA303***
   */
  groupId?: string;
  ownerId?: number;
  /**
   * @example
   * https://aliyun.com/img.jpg
   */
  profilePictureFile?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      businessNumber: 'BusinessNumber',
      channelType: 'ChannelType',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      groupId: 'GroupId',
      ownerId: 'OwnerId',
      profilePictureFile: 'ProfilePictureFile',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessNumber: 'string',
      channelType: 'string',
      custSpaceId: 'string',
      description: 'string',
      groupId: 'string',
      ownerId: 'number',
      profilePictureFile: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

