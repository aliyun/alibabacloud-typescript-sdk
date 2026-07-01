// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The description of the SMS template application. The description cannot exceed 100 characters in length.
   * 
   * This information helps reviewers understand your business scenarios and improves review efficiency. Guidelines:
   * 
   * - Provide the use case of your live business.
   * - Provide SMS examples for real scenarios to reflect your business scenarios.
   * - Provide variable values and describe in detail the business use case and the reason for choosing the variable attributes.
   * - Provide the website URL, registered domain name, or application marketplace download link of the actual business.
   * - For logon scenarios, provide the test account and password.
   * 
   * This parameter is required.
   * 
   * @example
   * 手机注册登录
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the SMS template that failed the review.
   * 
   * - Call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) operation to obtain the code of the SMS template that failed the review.
   * - View the code of the SMS template that failed the review on the [Templates](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_15255****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template content. The content cannot exceed 500 characters in length.
   * 
   * The template content and variable content must comply with the [SMS template specifications](https://help.aliyun.com/document_detail/463161.html). Otherwise, the template fails the review. You can view common template examples on the [Apply for Template](https://dysms.console.aliyun.com/domestic/text/template/add) page. Using sample templates can improve review efficiency and success rate. For variable specifications, see [TemplateContent variable specifications](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * The template name. The name must be 1 to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码模板
   */
  templateName?: string;
  /**
   * @remarks
   * The SMS type. Valid values:
   * 
   * - **0**: verification code.
   * - **1**: SMS notification.
   * - **2**: promotional message.
   * - **3**: international or Hong Kong, Macao, and Taiwan message.
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

