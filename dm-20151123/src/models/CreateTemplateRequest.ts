// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Deprecated. This parameter is retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  fromType?: number;
  ownerId?: number;
  /**
   * @remarks
   * Deprecated. This parameter is retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Deprecated. This parameter is retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  smsContent?: string;
  /**
   * @remarks
   * Deprecated. This parameter is retained for backward compatibility.
   * 
   * @example
   * Abandoned, historical reasons for compatibility
   */
  smsType?: number;
  /**
   * @remarks
   * The template name.
   * 
   * This parameter is required.
   * 
   * @example
   * template name
   */
  templateName?: string;
  /**
   * @remarks
   * The sender name.
   * 
   * @example
   * Tom
   */
  templateNickName?: string;
  /**
   * @remarks
   * The email subject.
   * 
   * @example
   * subject test
   */
  templateSubject?: string;
  /**
   * @remarks
   * The email HTML body.
   * 
   * @example
   * <p>test</p>
   */
  templateText?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      fromType: 'FromType',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsContent: 'SmsContent',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateNickName: 'TemplateNickName',
      templateSubject: 'TemplateSubject',
      templateText: 'TemplateText',
      templateType: 'TemplateType',
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
      templateName: 'string',
      templateNickName: 'string',
      templateSubject: 'string',
      templateText: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

