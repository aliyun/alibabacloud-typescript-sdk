// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The source channel through which the user connects. Default value: 1.
   * 
   * @example
   * 1
   */
  fromType?: number;
  ownerId?: number;
  /**
   * @remarks
   * The remarks or application description for the SMS template. This parameter is required only when the templatetype is SMS. Maximum length: 100 characters.
   * 
   * @example
   * for verification
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The body content of the SMS template. This parameter is required only when the templatetype is SMS. Length: 2 to 400 characters.
   * 
   * @example
   * <p>hello {name}</p>
   */
  smsContent?: string;
  /**
   * @remarks
   * The business type of the SMS template. This parameter is required only when the templatetype is SMS.
   * 
   * @example
   * 0
   */
  smsType?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 409481
   */
  templateId?: number;
  /**
   * @remarks
   * The template name. Maximum length: 30 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The nickname of the template or the alias of the sender. This parameter is required only when the templatetype is email. Maximum length: 30 characters.
   * 
   * @example
   * Lisa Gao
   */
  templateNickName?: string;
  /**
   * @remarks
   * The subject of the email template. This parameter is required only when the templatetype is email. Maximum length: 256 characters.
   * 
   * @example
   * REAL\\"EN OPEN TONNAGE
   */
  templateSubject?: string;
  /**
   * @remarks
   * The body content of the email. This parameter is required only when the templatetype is email. Maximum size: 1 MB.
   * 
   * @example
   * <p>hello {name}</p>
   */
  templateText?: string;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromType: 'number',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsContent: 'string',
      smsType: 'number',
      templateId: 'number',
      templateName: 'string',
      templateNickName: 'string',
      templateSubject: 'string',
      templateText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

