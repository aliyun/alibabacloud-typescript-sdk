// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the message template. It is one of the reference information for template review. The description cannot exceed 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Modify the parameters of the template.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the template code on the **Templates** tab. You can also call the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation to obtain the template code.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the template. The content must be 1 to 500 characters in length.
   * 
   * > When you modify a template, design the template content based on the review comments.
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template. The name must be 1 to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: text message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
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
      templateCode: 'TemplateCode',
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
      templateCode: 'string',
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

