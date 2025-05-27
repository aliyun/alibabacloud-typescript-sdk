// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * If there is an applicable scenario, you can fill it in.
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
   * - **2**: Promotional message.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional materials you can upload, such as business proof documents or screenshots, to help reviewers understand your business details.
   * 
   * This parameter is optional; please fill it in according to actual needs.
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The signature name that the template needs to be associated with. The associated SMS signature must have passed the review.
   * 
   * This parameter is mandatory when the TemplateType parameter is **0**, **1**, or **2**.
   * 
   * <notice>Associating a signature can expedite the review process. Note that this associated signature is unrelated to the signature selected when sending SMS messages.</notice>
   * 
   * @example
   * Aliyun
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Please describe the business scenario where you use SMS or provide an online link to the scenario, along with a complete example of the SMS (with variable contents filled), as complete information helps increase the template approval rate. Failure to follow guidelines or leaving this field blank may affect the approval of your template.
   * 
   * @example
   * Request verification code SMS.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Template content, up to 500 characters in length.
   * 
   * Both the template content and variable content must comply with SMS specifications; otherwise, the template will fail the review. You can also view common template examples on the template application page. Using sample templates can enhance review efficiency and success rates. For variable specifications, see [TemplateContent Variable Parameter Filling Specifications](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * This parameter is required.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}. It is valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * Template name, up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyunCode
   */
  templateName?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For filling in variable rules, refer to the [Sample Documentation](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
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
   * - **2**: Promotional message.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-verified users can apply for promotional messages and international/Hong Kong, Macao, and Taiwan messages. For details on the differences between personal and enterprise user rights, please refer to [Usage Instructions](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
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

