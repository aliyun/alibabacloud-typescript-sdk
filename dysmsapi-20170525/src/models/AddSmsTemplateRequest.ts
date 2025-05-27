// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the message template. It is one of the reference information for template review. The description cannot exceed 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Apply for a template to send verification codes.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The content of the template. The content can be up to 500 characters in length. For more information, see [Message template specifications](https://help.aliyun.com/document_detail/108253.html).
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun Test
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * 
   * > Only enterprise users can send promotional messages, or send messages to countries or regions outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateContent: 'string',
      templateName: 'string',
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

