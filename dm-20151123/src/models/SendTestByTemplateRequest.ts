// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTestByTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address. Maximum length: 60 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Account+@+domain
   */
  accountName?: string;
  /**
   * @remarks
   * The birthday. Maximum length: 30 characters.
   * 
   * @example
   * 2000/01/01
   */
  birthday?: string;
  /**
   * @remarks
   * The recipient email address. Maximum length: 60 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Account+@+domain
   */
  email?: string;
  /**
   * @remarks
   * The gender. Maximum length: 30 characters.
   * 
   * @example
   * Mr.
   */
  gender?: string;
  /**
   * @remarks
   * The mobile number. Maximum length: 30 characters.
   * 
   * @example
   * 1380000****
   */
  mobile?: string;
  /**
   * @remarks
   * The nickname. Maximum length: 30 characters.
   * 
   * @example
   * Nickname
   */
  nickName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  templateId?: number;
  /**
   * @remarks
   * The custom parameters, formatted as a JSON string.
   * 
   * @example
   * {"age":"20","nickName":"tom"}
   */
  templateParams?: string;
  /**
   * @remarks
   * The user name. Maximum length: 30 characters.
   * 
   * @example
   * John
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
      templateParams: 'TemplateParams',
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
      templateParams: 'string',
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

