// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description for the SMS template application. The length must not exceed 100 characters.
   * 
   * This is reference information for template review. Providing a complete application description helps reviewers understand your business scenario and improves review efficiency. Guidelines:
   * 
   * - You can provide the usage scenario of business that has been launched.
   * - You can provide SMS examples for real scenarios to demonstrate your business scenario.
   * - You can provide the variable parameter content, describing the business usage scenario in detail and the reason for choosing this variable attribute.
   * - You can provide website links of actual business, registered domain addresses, app market download links, and so on.
   * - For login scenarios, you can provide a test account and password.
   * 
   * This parameter is required.
   * 
   * @example
   * 申请验证码短信
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template content. The length must not exceed 500 characters.
   * 
   * The template content and variable content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/463161.html); otherwise, the template review will fail. You can also view common template examples on the [Apply for template](https://dysms.console.aliyun.com/domestic/text/template/add) page. Using example templates can improve review efficiency and success rate. For variable specifications, see [TemplateContent parameter variable specifications](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * The template name. The length must not exceed 30 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * The SMS type. Valid values:
   * 
   * - **0**: verification code.
   * - **1**: notification SMS.
   * - **2**: promotional SMS.
   * - **3**: international/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-verified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. For details about the differences between individual and enterprise user privileges, see [Usage notes](https://help.aliyun.com/document_detail/55324.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
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

