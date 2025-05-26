// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTestByTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Sender address, with a maximum length of 60 characters
   * 
   * This parameter is required.
   * 
   * @example
   * test@example.com
   */
  accountName?: string;
  /**
   * @remarks
   * Birthday, with a maximum length of 30 characters
   * 
   * @example
   * 2000/01/01
   */
  birthday?: string;
  /**
   * @remarks
   * Recipient address, with a maximum length of 60 characters
   * 
   * This parameter is required.
   * 
   * @example
   * test1@example.com
   */
  email?: string;
  /**
   * @remarks
   * Gender, with a maximum length of 30 characters
   * 
   * @example
   * doctor
   */
  gender?: string;
  /**
   * @remarks
   * Mobile, with a maximum length of 30 characters
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * NickName, with a maximum length of 30 characters
   * 
   * @example
   * LC
   */
  nickName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  templateId?: number;
  /**
   * @remarks
   * UserName, with a maximum length of 30 characters
   * 
   * @example
   * Lucy
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      birthday: 'Birthday',
      email: 'Email',
      gender: 'Gender',
      mobile: 'Mobile',
      nickName: 'NickName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      birthday: 'string',
      email: 'string',
      gender: 'string',
      mobile: 'string',
      nickName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

