// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business scenario.
   * 
   * - If the associated signature\\"s use case is "Live App", `ApplySceneContent` must be an app URL that starts with `http://` or `https://`.
   * 
   * - This parameter is required if the associated signature\\"s use case is "Registered Trademark Name" or "organization name".
   * 
   * @example
   * http://www.aliyun.com/
   */
  applySceneContent?: string;
  /**
   * @remarks
   * The type of the template for international/Hong Kong, Macao, and Taiwan messages. This parameter is required when **TemplateType** is set to **3**. Valid values:
   * 
   * - **0**: notification message.
   * 
   * - **1**: promotional message.
   * 
   * - **2**: verification code.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Additional information. You can upload supporting documents or business screenshots to help reviewers better understand your business scenario. If you are applying for a promotional message template (where `TemplateType` is `2`), you must upload user authorization materials. For more information, see [Specifications for Uploading User Authorization Materials](https://help.aliyun.com/document_detail/312341.html).
   */
  moreDataShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * The name of the signature to associate with the template. The signature must be an approved signature.
   * 
   * >Notice: 
   * 
   * - This parameter is required if **TemplateType** is set to **0**, **1**, or **2**.
   * 
   * - Associating a signature can expedite the review process. The signature associated here is unrelated to the one you select when sending SMS messages.
   * 
   * @example
   * 验证码签名
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Describe the business scenario for the SMS messages, or provide a URL for online scenarios. You must also provide a complete SMS example with actual values for any variables. Complete information increases the chance of template approval. Templates that do not provide this information as specified may be rejected.
   * 
   * @example
   * 申请验证码短信
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template content. The content must be 500 characters or less.
   * 
   * The template content and variables must comply with the [SMS Template Specifications](https://help.aliyun.com/document_detail/463161.html). Templates that do not comply may be rejected. You can find common template examples on the [Apply for Template](https://dysms.console.aliyun.com/domestic/text/template/add) page. Using these examples can speed up the review process and increase the approval rate. For variable specifications, see [Variable Specifications for the TemplateContent Parameter](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * The template name. The name must be 30 characters or less.
   * 
   * This parameter is required.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * The rules for variables in the template. For instructions on how to define these rules, see [Sample Document](https://help.aliyun.com/document_detail/2806243.html).
   * 
   * > - This parameter is required if the message template contains variables.
   * 
   * @example
   * {"code":"characterWithNumber2"}
   */
  templateRule?: string;
  /**
   * @remarks
   * The SMS type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: notification message.
   * 
   * - **2**: promotional message.
   * 
   * - **3**: international/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-verified users can apply for promotional messages or international/Hong Kong, Macao, and Taiwan messages. For more information about the differences in privileges between individual and enterprise users, see [Usage Notes](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  templateType?: number;
  /**
   * @remarks
   * >Warning: 
   * 
   * To control the security of SMS content, messages that contain traffic-driving information, such as phone numbers and links, may be blocked by carriers, which can lead to delivery failures. To reduce this risk, we recommend that you avoid including such information in message templates.
   * 
   * 
   * 
   * A JSON string that contains a list of traffic-driving information.
   * >Notice: The value must be a JSON array serialized into a string.
   * 
   * ### 1. Fields
   * 
   * {
   * "trafficDrivingType":"traffic driving type",
   * "trafficDrivingContent":"traffic driving content",
   * "variableName":"variable name",
   * "companyName":"organization name",
   * "organizationCode":"unified social credit code",
   * "icpNo":"ICP filing or license number",
   * "icpPicOssKey":"OSS key of the ICP filing screenshot",
   * "companyDifferentFromSignQuaReason":"Reason for the discrepancy between the organization name and the signature qualification"
   * }
   * 
   * ### 2. Notes
   * 
   * - If the content is not a variable, do not pass the `variableName` parameter.
   * 
   * - If the organization name is different from the one in the signature qualification, pass the `companyDifferentFromSignQuaReason` parameter.
   * 
   * - If `trafficDrivingType` is set to `DOMAIN`, all parameters in this object are required.
   * 
   * - If `trafficDrivingType` is set to another value, pass the `trafficDrivingType`, `trafficDrivingContent`, `variableName` (if applicable), `companyName`, `organizationCode`, and `companyDifferentFromSignQuaReason` (if applicable) parameters.
   * 
   * ### 3. trafficDrivingType enum values
   * 
   * >Warning: 
   * 
   * Due to regulatory requirements, mobile phone numbers are not supported.
   * 
   * 
   * 
   * - DOMAIN: A domain link.
   * 
   * - FIXED_PHONE: Fixed-line phone.
   * 
   * - 400_PHONE: Phone number prefixed with 400.
   * 
   * - 800_PHONE: Phone number prefixed with 800.
   * 
   * - 95_PHONE: Phone number prefixed with 95.
   * 
   * - 96_PHONE: Phone number prefixed with 96.
   * 
   * - 1_PHONE: A 3- to 8-digit phone number that starts with 1.
   * 
   * - OTHER_PHONE: Other phone number.
   * 
   * @example
   * [{"trafficDrivingType":"DOMAIN","trafficDrivingContent":"aliyun.com","companyName":"阿里云计算有限公司","organizationCode":"91330****73959654P","icpNo":"浙B2-20****01-4","icpPicOssKey":"db7784d8-cb0c-498f-****-295f1ad6d665_mf29l7nf.png", "companyDifferentFromSignQuaReason":"这是一段说明文字"},{"trafficDrivingType":"1_PHONE","trafficDrivingContent":"1**86","variableName":"my1Phone","companyName":"阿里云计算有限公司","organizationCode":"91330****73959654P","companyDifferentFromSignQuaReason":"这是一段说明文字"}]
   */
  trafficDriving?: string;
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
      trafficDriving: 'TrafficDriving',
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
      trafficDriving: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

