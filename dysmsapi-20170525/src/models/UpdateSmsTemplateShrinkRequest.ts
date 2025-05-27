// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Application scenarios, instructions as follows:
   * - For registered websites, please enter the MIIT-registered domain with HTTP or HTTPS.
   * - For launched apps, provide the app store display link with HTTP or HTTPS, ensuring the app is online.
   * - For public accounts or mini-programs, enter the full name of the public account or mini-program, ensuring they are online.
   * - For e-commerce platform stores, applicable only to enterprise users, enter the display link of the e-commerce store with HTTP or HTTPS.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional information, such as uploading business proof documents or screenshots, to help reviewers understand your business details. Optional and can be left unset.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * SMS signature associated with the template during the application.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Explanation for the SMS template application, which serves as a reference for template review.
   * 
   * @example
   * 登录场景使用验证码
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template Code of an unapproved template.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS regulations; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. Variable specifications can be found in [TemplateContent Parameter Variable Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For guidance on filling variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example?spm).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  templateRule?: string;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-certified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. Details on differences between personal and enterprise user rights are available in [Usage Guidelines](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      applySceneContent: 'ApplySceneContent',
      intlType: 'IntlType',
      moreDataShrink: 'MoreData',
      ownerId: 'OwnerId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applySceneContent: 'string',
      intlType: 'number',
      moreDataShrink: 'string',
      ownerId: 'number',
      relatedSignName: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
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

